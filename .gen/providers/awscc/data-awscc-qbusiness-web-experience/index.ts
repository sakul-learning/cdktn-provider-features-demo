// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/qbusiness_web_experience
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccQbusinessWebExperienceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/qbusiness_web_experience#id DataAwsccQbusinessWebExperience#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccQbusinessWebExperienceBrowserExtensionConfiguration {
}

export function dataAwsccQbusinessWebExperienceBrowserExtensionConfigurationToTerraform(struct?: DataAwsccQbusinessWebExperienceBrowserExtensionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQbusinessWebExperienceBrowserExtensionConfigurationToHclTerraform(struct?: DataAwsccQbusinessWebExperienceBrowserExtensionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQbusinessWebExperienceBrowserExtensionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQbusinessWebExperienceBrowserExtensionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled_browser_extensions - computed: true, optional: false, required: false
  public get enabledBrowserExtensions() {
    return cdktn.Fn.tolist(this.getListAttribute('enabled_browser_extensions'));
  }
}
export interface DataAwsccQbusinessWebExperienceCustomizationConfiguration {
}

export function dataAwsccQbusinessWebExperienceCustomizationConfigurationToTerraform(struct?: DataAwsccQbusinessWebExperienceCustomizationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQbusinessWebExperienceCustomizationConfigurationToHclTerraform(struct?: DataAwsccQbusinessWebExperienceCustomizationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQbusinessWebExperienceCustomizationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQbusinessWebExperienceCustomizationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_css_url - computed: true, optional: false, required: false
  public get customCssUrl() {
    return this.getStringAttribute('custom_css_url');
  }

  // favicon_url - computed: true, optional: false, required: false
  public get faviconUrl() {
    return this.getStringAttribute('favicon_url');
  }

  // font_url - computed: true, optional: false, required: false
  public get fontUrl() {
    return this.getStringAttribute('font_url');
  }

  // logo_url - computed: true, optional: false, required: false
  public get logoUrl() {
    return this.getStringAttribute('logo_url');
  }
}
export interface DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration {
}

export function dataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationToTerraform(struct?: DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationToHclTerraform(struct?: DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secrets_arn - computed: true, optional: false, required: false
  public get secretsArn() {
    return this.getStringAttribute('secrets_arn');
  }

  // secrets_role - computed: true, optional: false, required: false
  public get secretsRole() {
    return this.getStringAttribute('secrets_role');
  }
}
export interface DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration {
}

export function dataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationToTerraform(struct?: DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationToHclTerraform(struct?: DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_url - computed: true, optional: false, required: false
  public get authenticationUrl() {
    return this.getStringAttribute('authentication_url');
  }
}
export interface DataAwsccQbusinessWebExperienceIdentityProviderConfiguration {
}

export function dataAwsccQbusinessWebExperienceIdentityProviderConfigurationToTerraform(struct?: DataAwsccQbusinessWebExperienceIdentityProviderConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQbusinessWebExperienceIdentityProviderConfigurationToHclTerraform(struct?: DataAwsccQbusinessWebExperienceIdentityProviderConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQbusinessWebExperienceIdentityProviderConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQbusinessWebExperienceIdentityProviderConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // open_id_connect_configuration - computed: true, optional: false, required: false
  private _openIdConnectConfiguration = new DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference(this, "open_id_connect_configuration");
  public get openIdConnectConfiguration() {
    return this._openIdConnectConfiguration;
  }

  // saml_configuration - computed: true, optional: false, required: false
  private _samlConfiguration = new DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference(this, "saml_configuration");
  public get samlConfiguration() {
    return this._samlConfiguration;
  }
}
export interface DataAwsccQbusinessWebExperienceTags {
}

export function dataAwsccQbusinessWebExperienceTagsToTerraform(struct?: DataAwsccQbusinessWebExperienceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQbusinessWebExperienceTagsToHclTerraform(struct?: DataAwsccQbusinessWebExperienceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQbusinessWebExperienceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccQbusinessWebExperienceTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQbusinessWebExperienceTags | undefined) {
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

export class DataAwsccQbusinessWebExperienceTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccQbusinessWebExperienceTagsOutputReference {
    return new DataAwsccQbusinessWebExperienceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/qbusiness_web_experience awscc_qbusiness_web_experience}
*/
export class DataAwsccQbusinessWebExperience extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_qbusiness_web_experience";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccQbusinessWebExperience resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccQbusinessWebExperience to import
  * @param importFromId The id of the existing DataAwsccQbusinessWebExperience that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/qbusiness_web_experience#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccQbusinessWebExperience to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_qbusiness_web_experience", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/qbusiness_web_experience awscc_qbusiness_web_experience} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccQbusinessWebExperienceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccQbusinessWebExperienceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_qbusiness_web_experience',
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

  // browser_extension_configuration - computed: true, optional: false, required: false
  private _browserExtensionConfiguration = new DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference(this, "browser_extension_configuration");
  public get browserExtensionConfiguration() {
    return this._browserExtensionConfiguration;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // customization_configuration - computed: true, optional: false, required: false
  private _customizationConfiguration = new DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference(this, "customization_configuration");
  public get customizationConfiguration() {
    return this._customizationConfiguration;
  }

  // default_endpoint - computed: true, optional: false, required: false
  public get defaultEndpoint() {
    return this.getStringAttribute('default_endpoint');
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

  // identity_provider_configuration - computed: true, optional: false, required: false
  private _identityProviderConfiguration = new DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference(this, "identity_provider_configuration");
  public get identityProviderConfiguration() {
    return this._identityProviderConfiguration;
  }

  // origins - computed: true, optional: false, required: false
  public get origins() {
    return this.getListAttribute('origins');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // sample_prompts_control_mode - computed: true, optional: false, required: false
  public get samplePromptsControlMode() {
    return this.getStringAttribute('sample_prompts_control_mode');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subtitle - computed: true, optional: false, required: false
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccQbusinessWebExperienceTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // web_experience_arn - computed: true, optional: false, required: false
  public get webExperienceArn() {
    return this.getStringAttribute('web_experience_arn');
  }

  // web_experience_id - computed: true, optional: false, required: false
  public get webExperienceId() {
    return this.getStringAttribute('web_experience_id');
  }

  // welcome_message - computed: true, optional: false, required: false
  public get welcomeMessage() {
    return this.getStringAttribute('welcome_message');
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
