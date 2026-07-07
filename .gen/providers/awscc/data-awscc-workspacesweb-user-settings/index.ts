// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/workspacesweb_user_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccWorkspaceswebUserSettingsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/workspacesweb_user_settings#id DataAwsccWorkspaceswebUserSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata {
}

export function dataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataToTerraform(struct?: DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataToHclTerraform(struct?: DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_extension - computed: true, optional: false, required: false
  public get fileExtension() {
    return this.getStringAttribute('file_extension');
  }

  // last_upload_timestamp - computed: true, optional: false, required: false
  public get lastUploadTimestamp() {
    return this.getStringAttribute('last_upload_timestamp');
  }

  // mime_type - computed: true, optional: false, required: false
  public get mimeType() {
    return this.getStringAttribute('mime_type');
  }
}
export interface DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings {
}

export function dataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsToTerraform(struct?: DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsToHclTerraform(struct?: DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // browser_tab_title - computed: true, optional: false, required: false
  public get browserTabTitle() {
    return this.getStringAttribute('browser_tab_title');
  }

  // contact_button_text - computed: true, optional: false, required: false
  public get contactButtonText() {
    return this.getStringAttribute('contact_button_text');
  }

  // contact_link - computed: true, optional: false, required: false
  public get contactLink() {
    return this.getStringAttribute('contact_link');
  }

  // loading_text - computed: true, optional: false, required: false
  public get loadingText() {
    return this.getStringAttribute('loading_text');
  }

  // login_button_text - computed: true, optional: false, required: false
  public get loginButtonText() {
    return this.getStringAttribute('login_button_text');
  }

  // login_description - computed: true, optional: false, required: false
  public get loginDescription() {
    return this.getStringAttribute('login_description');
  }

  // login_title - computed: true, optional: false, required: false
  public get loginTitle() {
    return this.getStringAttribute('login_title');
  }

  // welcome_text - computed: true, optional: false, required: false
  public get welcomeText() {
    return this.getStringAttribute('welcome_text');
  }
}

export class DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap extends cdktn.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute);
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference {
    return new DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadata {
}

export function dataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataToTerraform(struct?: DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataToHclTerraform(struct?: DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_extension - computed: true, optional: false, required: false
  public get fileExtension() {
    return this.getStringAttribute('file_extension');
  }

  // last_upload_timestamp - computed: true, optional: false, required: false
  public get lastUploadTimestamp() {
    return this.getStringAttribute('last_upload_timestamp');
  }

  // mime_type - computed: true, optional: false, required: false
  public get mimeType() {
    return this.getStringAttribute('mime_type');
  }
}
export interface DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata {
}

export function dataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataToTerraform(struct?: DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataToHclTerraform(struct?: DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_extension - computed: true, optional: false, required: false
  public get fileExtension() {
    return this.getStringAttribute('file_extension');
  }

  // last_upload_timestamp - computed: true, optional: false, required: false
  public get lastUploadTimestamp() {
    return this.getStringAttribute('last_upload_timestamp');
  }

  // mime_type - computed: true, optional: false, required: false
  public get mimeType() {
    return this.getStringAttribute('mime_type');
  }
}
export interface DataAwsccWorkspaceswebUserSettingsBrandingConfiguration {
}

export function dataAwsccWorkspaceswebUserSettingsBrandingConfigurationToTerraform(struct?: DataAwsccWorkspaceswebUserSettingsBrandingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWorkspaceswebUserSettingsBrandingConfigurationToHclTerraform(struct?: DataAwsccWorkspaceswebUserSettingsBrandingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWorkspaceswebUserSettingsBrandingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWorkspaceswebUserSettingsBrandingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // color_theme - computed: true, optional: false, required: false
  public get colorTheme() {
    return this.getStringAttribute('color_theme');
  }

  // favicon - computed: true, optional: false, required: false
  public get favicon() {
    return this.getStringAttribute('favicon');
  }

  // favicon_metadata - computed: true, optional: false, required: false
  private _faviconMetadata = new DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference(this, "favicon_metadata");
  public get faviconMetadata() {
    return this._faviconMetadata;
  }

  // localized_strings - computed: true, optional: false, required: false
  private _localizedStrings = new DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap(this, "localized_strings");
  public get localizedStrings() {
    return this._localizedStrings;
  }

  // logo - computed: true, optional: false, required: false
  public get logo() {
    return this.getStringAttribute('logo');
  }

  // logo_metadata - computed: true, optional: false, required: false
  private _logoMetadata = new DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference(this, "logo_metadata");
  public get logoMetadata() {
    return this._logoMetadata;
  }

  // terms_of_service - computed: true, optional: false, required: false
  public get termsOfService() {
    return this.getStringAttribute('terms_of_service');
  }

  // wallpaper - computed: true, optional: false, required: false
  public get wallpaper() {
    return this.getStringAttribute('wallpaper');
  }

  // wallpaper_metadata - computed: true, optional: false, required: false
  private _wallpaperMetadata = new DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference(this, "wallpaper_metadata");
  public get wallpaperMetadata() {
    return this._wallpaperMetadata;
  }
}
export interface DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct {
}

export function dataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructToTerraform(struct?: DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructToHclTerraform(struct?: DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference {
    return new DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct {
}

export function dataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructToTerraform(struct?: DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructToHclTerraform(struct?: DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference {
    return new DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfiguration {
}

export function dataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationToTerraform(struct?: DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationToHclTerraform(struct?: DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowlist - computed: true, optional: false, required: false
  private _allowlist = new DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList(this, "allowlist", false);
  public get allowlist() {
    return this._allowlist;
  }

  // blocklist - computed: true, optional: false, required: false
  private _blocklist = new DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList(this, "blocklist", false);
  public get blocklist() {
    return this._blocklist;
  }
}
export interface DataAwsccWorkspaceswebUserSettingsTags {
}

export function dataAwsccWorkspaceswebUserSettingsTagsToTerraform(struct?: DataAwsccWorkspaceswebUserSettingsTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWorkspaceswebUserSettingsTagsToHclTerraform(struct?: DataAwsccWorkspaceswebUserSettingsTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWorkspaceswebUserSettingsTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWorkspaceswebUserSettingsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWorkspaceswebUserSettingsTags | undefined) {
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

export class DataAwsccWorkspaceswebUserSettingsTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWorkspaceswebUserSettingsTagsOutputReference {
    return new DataAwsccWorkspaceswebUserSettingsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccWorkspaceswebUserSettingsToolbarConfiguration {
}

export function dataAwsccWorkspaceswebUserSettingsToolbarConfigurationToTerraform(struct?: DataAwsccWorkspaceswebUserSettingsToolbarConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWorkspaceswebUserSettingsToolbarConfigurationToHclTerraform(struct?: DataAwsccWorkspaceswebUserSettingsToolbarConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWorkspaceswebUserSettingsToolbarConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWorkspaceswebUserSettingsToolbarConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hidden_toolbar_items - computed: true, optional: false, required: false
  public get hiddenToolbarItems() {
    return this.getListAttribute('hidden_toolbar_items');
  }

  // max_display_resolution - computed: true, optional: false, required: false
  public get maxDisplayResolution() {
    return this.getStringAttribute('max_display_resolution');
  }

  // toolbar_type - computed: true, optional: false, required: false
  public get toolbarType() {
    return this.getStringAttribute('toolbar_type');
  }

  // visual_mode - computed: true, optional: false, required: false
  public get visualMode() {
    return this.getStringAttribute('visual_mode');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/workspacesweb_user_settings awscc_workspacesweb_user_settings}
*/
export class DataAwsccWorkspaceswebUserSettings extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_workspacesweb_user_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccWorkspaceswebUserSettings resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccWorkspaceswebUserSettings to import
  * @param importFromId The id of the existing DataAwsccWorkspaceswebUserSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/workspacesweb_user_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccWorkspaceswebUserSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_workspacesweb_user_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/workspacesweb_user_settings awscc_workspacesweb_user_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccWorkspaceswebUserSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccWorkspaceswebUserSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_workspacesweb_user_settings',
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

  // additional_encryption_context - computed: true, optional: false, required: false
  private _additionalEncryptionContext = new cdktn.StringMap(this, "additional_encryption_context");
  public get additionalEncryptionContext() {
    return this._additionalEncryptionContext;
  }

  // associated_portal_arns - computed: true, optional: false, required: false
  public get associatedPortalArns() {
    return this.getListAttribute('associated_portal_arns');
  }

  // branding_configuration - computed: true, optional: false, required: false
  private _brandingConfiguration = new DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference(this, "branding_configuration");
  public get brandingConfiguration() {
    return this._brandingConfiguration;
  }

  // cookie_synchronization_configuration - computed: true, optional: false, required: false
  private _cookieSynchronizationConfiguration = new DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference(this, "cookie_synchronization_configuration");
  public get cookieSynchronizationConfiguration() {
    return this._cookieSynchronizationConfiguration;
  }

  // copy_allowed - computed: true, optional: false, required: false
  public get copyAllowed() {
    return this.getStringAttribute('copy_allowed');
  }

  // customer_managed_key - computed: true, optional: false, required: false
  public get customerManagedKey() {
    return this.getStringAttribute('customer_managed_key');
  }

  // deep_link_allowed - computed: true, optional: false, required: false
  public get deepLinkAllowed() {
    return this.getStringAttribute('deep_link_allowed');
  }

  // disconnect_timeout_in_minutes - computed: true, optional: false, required: false
  public get disconnectTimeoutInMinutes() {
    return this.getNumberAttribute('disconnect_timeout_in_minutes');
  }

  // download_allowed - computed: true, optional: false, required: false
  public get downloadAllowed() {
    return this.getStringAttribute('download_allowed');
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

  // idle_disconnect_timeout_in_minutes - computed: true, optional: false, required: false
  public get idleDisconnectTimeoutInMinutes() {
    return this.getNumberAttribute('idle_disconnect_timeout_in_minutes');
  }

  // paste_allowed - computed: true, optional: false, required: false
  public get pasteAllowed() {
    return this.getStringAttribute('paste_allowed');
  }

  // print_allowed - computed: true, optional: false, required: false
  public get printAllowed() {
    return this.getStringAttribute('print_allowed');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccWorkspaceswebUserSettingsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // toolbar_configuration - computed: true, optional: false, required: false
  private _toolbarConfiguration = new DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference(this, "toolbar_configuration");
  public get toolbarConfiguration() {
    return this._toolbarConfiguration;
  }

  // upload_allowed - computed: true, optional: false, required: false
  public get uploadAllowed() {
    return this.getStringAttribute('upload_allowed');
  }

  // user_settings_arn - computed: true, optional: false, required: false
  public get userSettingsArn() {
    return this.getStringAttribute('user_settings_arn');
  }

  // web_authn_allowed - computed: true, optional: false, required: false
  public get webAuthnAllowed() {
    return this.getStringAttribute('web_authn_allowed');
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
