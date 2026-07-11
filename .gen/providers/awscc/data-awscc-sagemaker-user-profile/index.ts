// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sagemaker_user_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccSagemakerUserProfileConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sagemaker_user_profile#id DataAwsccSagemakerUserProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccSagemakerUserProfileTags {
}

export function dataAwsccSagemakerUserProfileTagsToTerraform(struct?: DataAwsccSagemakerUserProfileTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerUserProfileTagsToHclTerraform(struct?: DataAwsccSagemakerUserProfileTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerUserProfileTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerUserProfileTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerUserProfileTags | undefined) {
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

export class DataAwsccSagemakerUserProfileTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerUserProfileTagsOutputReference {
    return new DataAwsccSagemakerUserProfileTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings {
}

export function dataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsToTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsToHclTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // idle_timeout_in_minutes - computed: true, optional: false, required: false
  public get idleTimeoutInMinutes() {
    return this.getNumberAttribute('idle_timeout_in_minutes');
  }

  // lifecycle_management - computed: true, optional: false, required: false
  public get lifecycleManagement() {
    return this.getStringAttribute('lifecycle_management');
  }

  // max_idle_timeout_in_minutes - computed: true, optional: false, required: false
  public get maxIdleTimeoutInMinutes() {
    return this.getNumberAttribute('max_idle_timeout_in_minutes');
  }

  // min_idle_timeout_in_minutes - computed: true, optional: false, required: false
  public get minIdleTimeoutInMinutes() {
    return this.getNumberAttribute('min_idle_timeout_in_minutes');
  }
}
export interface DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement {
}

export function dataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementToTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementToHclTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // idle_settings - computed: true, optional: false, required: false
  private _idleSettings = new DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference(this, "idle_settings");
  public get idleSettings() {
    return this._idleSettings;
  }
}
export interface DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages {
}

export function dataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesToTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesToHclTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_image_config_name - computed: true, optional: false, required: false
  public get appImageConfigName() {
    return this.getStringAttribute('app_image_config_name');
  }

  // image_name - computed: true, optional: false, required: false
  public get imageName() {
    return this.getStringAttribute('image_name');
  }

  // image_version_number - computed: true, optional: false, required: false
  public get imageVersionNumber() {
    return this.getNumberAttribute('image_version_number');
  }
}

export class DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference {
    return new DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec {
}

export function dataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecToTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecToHclTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // lifecycle_config_arn - computed: true, optional: false, required: false
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }

  // sage_maker_image_arn - computed: true, optional: false, required: false
  public get sageMakerImageArn() {
    return this.getStringAttribute('sage_maker_image_arn');
  }

  // sage_maker_image_version_arn - computed: true, optional: false, required: false
  public get sageMakerImageVersionArn() {
    return this.getStringAttribute('sage_maker_image_version_arn');
  }
}
export interface DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettings {
}

export function dataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsToTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsToHclTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_lifecycle_management - computed: true, optional: false, required: false
  private _appLifecycleManagement = new DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference(this, "app_lifecycle_management");
  public get appLifecycleManagement() {
    return this._appLifecycleManagement;
  }

  // built_in_lifecycle_config_arn - computed: true, optional: false, required: false
  public get builtInLifecycleConfigArn() {
    return this.getStringAttribute('built_in_lifecycle_config_arn');
  }

  // custom_images - computed: true, optional: false, required: false
  private _customImages = new DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList(this, "custom_images", false);
  public get customImages() {
    return this._customImages;
  }

  // default_resource_spec - computed: true, optional: false, required: false
  private _defaultResourceSpec = new DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }

  // lifecycle_config_arns - computed: true, optional: false, required: false
  public get lifecycleConfigArns() {
    return this.getListAttribute('lifecycle_config_arns');
  }
}
export interface DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig {
}

export function dataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigToTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigToHclTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_system_id - computed: true, optional: false, required: false
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }

  // file_system_path - computed: true, optional: false, required: false
  public get fileSystemPath() {
    return this.getStringAttribute('file_system_path');
  }
}
export interface DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig {
}

export function dataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigToTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigToHclTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_system_id - computed: true, optional: false, required: false
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }

  // file_system_path - computed: true, optional: false, required: false
  public get fileSystemPath() {
    return this.getStringAttribute('file_system_path');
  }
}
export interface DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig {
}

export function dataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigToTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigToHclTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mount_path - computed: true, optional: false, required: false
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
}
export interface DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigs {
}

export function dataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsToTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsToHclTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // efs_file_system_config - computed: true, optional: false, required: false
  private _efsFileSystemConfig = new DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference(this, "efs_file_system_config");
  public get efsFileSystemConfig() {
    return this._efsFileSystemConfig;
  }

  // fsx_lustre_file_system_config - computed: true, optional: false, required: false
  private _fsxLustreFileSystemConfig = new DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference(this, "fsx_lustre_file_system_config");
  public get fsxLustreFileSystemConfig() {
    return this._fsxLustreFileSystemConfig;
  }

  // s3_file_system_config - computed: true, optional: false, required: false
  private _s3FileSystemConfig = new DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference(this, "s3_file_system_config");
  public get s3FileSystemConfig() {
    return this._s3FileSystemConfig;
  }
}

export class DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference {
    return new DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfig {
}

export function dataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigToTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigToHclTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gid - computed: true, optional: false, required: false
  public get gid() {
    return this.getNumberAttribute('gid');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getNumberAttribute('uid');
  }
}
export interface DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings {
}

export function dataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsToTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsToHclTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // idle_timeout_in_minutes - computed: true, optional: false, required: false
  public get idleTimeoutInMinutes() {
    return this.getNumberAttribute('idle_timeout_in_minutes');
  }

  // lifecycle_management - computed: true, optional: false, required: false
  public get lifecycleManagement() {
    return this.getStringAttribute('lifecycle_management');
  }

  // max_idle_timeout_in_minutes - computed: true, optional: false, required: false
  public get maxIdleTimeoutInMinutes() {
    return this.getNumberAttribute('max_idle_timeout_in_minutes');
  }

  // min_idle_timeout_in_minutes - computed: true, optional: false, required: false
  public get minIdleTimeoutInMinutes() {
    return this.getNumberAttribute('min_idle_timeout_in_minutes');
  }
}
export interface DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement {
}

export function dataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementToTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementToHclTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // idle_settings - computed: true, optional: false, required: false
  private _idleSettings = new DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference(this, "idle_settings");
  public get idleSettings() {
    return this._idleSettings;
  }
}
export interface DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories {
}

export function dataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesToTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesToHclTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // repository_url - computed: true, optional: false, required: false
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }
}

export class DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference {
    return new DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages {
}

export function dataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesToTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesToHclTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_image_config_name - computed: true, optional: false, required: false
  public get appImageConfigName() {
    return this.getStringAttribute('app_image_config_name');
  }

  // image_name - computed: true, optional: false, required: false
  public get imageName() {
    return this.getStringAttribute('image_name');
  }

  // image_version_number - computed: true, optional: false, required: false
  public get imageVersionNumber() {
    return this.getNumberAttribute('image_version_number');
  }
}

export class DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference {
    return new DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec {
}

export function dataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecToTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecToHclTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // lifecycle_config_arn - computed: true, optional: false, required: false
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }

  // sage_maker_image_arn - computed: true, optional: false, required: false
  public get sageMakerImageArn() {
    return this.getStringAttribute('sage_maker_image_arn');
  }

  // sage_maker_image_version_arn - computed: true, optional: false, required: false
  public get sageMakerImageVersionArn() {
    return this.getStringAttribute('sage_maker_image_version_arn');
  }
}
export interface DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettings {
}

export function dataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsToTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsToHclTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_lifecycle_management - computed: true, optional: false, required: false
  private _appLifecycleManagement = new DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference(this, "app_lifecycle_management");
  public get appLifecycleManagement() {
    return this._appLifecycleManagement;
  }

  // built_in_lifecycle_config_arn - computed: true, optional: false, required: false
  public get builtInLifecycleConfigArn() {
    return this.getStringAttribute('built_in_lifecycle_config_arn');
  }

  // code_repositories - computed: true, optional: false, required: false
  private _codeRepositories = new DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList(this, "code_repositories", false);
  public get codeRepositories() {
    return this._codeRepositories;
  }

  // custom_images - computed: true, optional: false, required: false
  private _customImages = new DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList(this, "custom_images", false);
  public get customImages() {
    return this._customImages;
  }

  // default_resource_spec - computed: true, optional: false, required: false
  private _defaultResourceSpec = new DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }

  // lifecycle_config_arns - computed: true, optional: false, required: false
  public get lifecycleConfigArns() {
    return this.getListAttribute('lifecycle_config_arns');
  }
}
export interface DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec {
}

export function dataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecToHclTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // lifecycle_config_arn - computed: true, optional: false, required: false
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }

  // sage_maker_image_arn - computed: true, optional: false, required: false
  public get sageMakerImageArn() {
    return this.getStringAttribute('sage_maker_image_arn');
  }

  // sage_maker_image_version_arn - computed: true, optional: false, required: false
  public get sageMakerImageVersionArn() {
    return this.getStringAttribute('sage_maker_image_version_arn');
  }
}
export interface DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettings {
}

export function dataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsToTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsToHclTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_resource_spec - computed: true, optional: false, required: false
  private _defaultResourceSpec = new DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }

  // lifecycle_config_arns - computed: true, optional: false, required: false
  public get lifecycleConfigArns() {
    return this.getListAttribute('lifecycle_config_arns');
  }
}
export interface DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages {
}

export function dataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesToTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesToHclTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_image_config_name - computed: true, optional: false, required: false
  public get appImageConfigName() {
    return this.getStringAttribute('app_image_config_name');
  }

  // image_name - computed: true, optional: false, required: false
  public get imageName() {
    return this.getStringAttribute('image_name');
  }

  // image_version_number - computed: true, optional: false, required: false
  public get imageVersionNumber() {
    return this.getNumberAttribute('image_version_number');
  }
}

export class DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference {
    return new DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec {
}

export function dataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToHclTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // lifecycle_config_arn - computed: true, optional: false, required: false
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }

  // sage_maker_image_arn - computed: true, optional: false, required: false
  public get sageMakerImageArn() {
    return this.getStringAttribute('sage_maker_image_arn');
  }

  // sage_maker_image_version_arn - computed: true, optional: false, required: false
  public get sageMakerImageVersionArn() {
    return this.getStringAttribute('sage_maker_image_version_arn');
  }
}
export interface DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettings {
}

export function dataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsToTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsToHclTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_images - computed: true, optional: false, required: false
  private _customImages = new DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList(this, "custom_images", false);
  public get customImages() {
    return this._customImages;
  }

  // default_resource_spec - computed: true, optional: false, required: false
  private _defaultResourceSpec = new DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }

  // lifecycle_config_arns - computed: true, optional: false, required: false
  public get lifecycleConfigArns() {
    return this.getListAttribute('lifecycle_config_arns');
  }
}
export interface DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettings {
}

export function dataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsToTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsToHclTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_status - computed: true, optional: false, required: false
  public get accessStatus() {
    return this.getStringAttribute('access_status');
  }

  // user_group - computed: true, optional: false, required: false
  public get userGroup() {
    return this.getStringAttribute('user_group');
  }
}
export interface DataAwsccSagemakerUserProfileUserSettingsSharingSettings {
}

export function dataAwsccSagemakerUserProfileUserSettingsSharingSettingsToTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsSharingSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerUserProfileUserSettingsSharingSettingsToHclTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsSharingSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerUserProfileUserSettingsSharingSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerUserProfileUserSettingsSharingSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // notebook_output_option - computed: true, optional: false, required: false
  public get notebookOutputOption() {
    return this.getStringAttribute('notebook_output_option');
  }

  // s3_kms_key_id - computed: true, optional: false, required: false
  public get s3KmsKeyId() {
    return this.getStringAttribute('s3_kms_key_id');
  }

  // s3_output_path - computed: true, optional: false, required: false
  public get s3OutputPath() {
    return this.getStringAttribute('s3_output_path');
  }
}
export interface DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings {
}

export function dataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToHclTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_ebs_volume_size_in_gb - computed: true, optional: false, required: false
  public get defaultEbsVolumeSizeInGb() {
    return this.getNumberAttribute('default_ebs_volume_size_in_gb');
  }

  // maximum_ebs_volume_size_in_gb - computed: true, optional: false, required: false
  public get maximumEbsVolumeSizeInGb() {
    return this.getNumberAttribute('maximum_ebs_volume_size_in_gb');
  }
}
export interface DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettings {
}

export function dataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsToTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsToHclTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_ebs_storage_settings - computed: true, optional: false, required: false
  private _defaultEbsStorageSettings = new DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference(this, "default_ebs_storage_settings");
  public get defaultEbsStorageSettings() {
    return this._defaultEbsStorageSettings;
  }
}
export interface DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases {
}

export function dataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesToTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesToHclTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sage_maker_image_name - computed: true, optional: false, required: false
  public get sageMakerImageName() {
    return this.getStringAttribute('sage_maker_image_name');
  }

  // version_aliases - computed: true, optional: false, required: false
  public get versionAliases() {
    return this.getListAttribute('version_aliases');
  }
}

export class DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference {
    return new DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettings {
}

export function dataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsToTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsToHclTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hidden_app_types - computed: true, optional: false, required: false
  public get hiddenAppTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('hidden_app_types'));
  }

  // hidden_instance_types - computed: true, optional: false, required: false
  public get hiddenInstanceTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('hidden_instance_types'));
  }

  // hidden_ml_tools - computed: true, optional: false, required: false
  public get hiddenMlTools() {
    return cdktn.Fn.tolist(this.getListAttribute('hidden_ml_tools'));
  }

  // hidden_sage_maker_image_version_aliases - computed: true, optional: false, required: false
  private _hiddenSageMakerImageVersionAliases = new DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList(this, "hidden_sage_maker_image_version_aliases", true);
  public get hiddenSageMakerImageVersionAliases() {
    return this._hiddenSageMakerImageVersionAliases;
  }
}
export interface DataAwsccSagemakerUserProfileUserSettings {
}

export function dataAwsccSagemakerUserProfileUserSettingsToTerraform(struct?: DataAwsccSagemakerUserProfileUserSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerUserProfileUserSettingsToHclTerraform(struct?: DataAwsccSagemakerUserProfileUserSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerUserProfileUserSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerUserProfileUserSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerUserProfileUserSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_mount_home_efs - computed: true, optional: false, required: false
  public get autoMountHomeEfs() {
    return this.getStringAttribute('auto_mount_home_efs');
  }

  // code_editor_app_settings - computed: true, optional: false, required: false
  private _codeEditorAppSettings = new DataAwsccSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference(this, "code_editor_app_settings");
  public get codeEditorAppSettings() {
    return this._codeEditorAppSettings;
  }

  // custom_file_system_configs - computed: true, optional: false, required: false
  private _customFileSystemConfigs = new DataAwsccSagemakerUserProfileUserSettingsCustomFileSystemConfigsList(this, "custom_file_system_configs", false);
  public get customFileSystemConfigs() {
    return this._customFileSystemConfigs;
  }

  // custom_posix_user_config - computed: true, optional: false, required: false
  private _customPosixUserConfig = new DataAwsccSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference(this, "custom_posix_user_config");
  public get customPosixUserConfig() {
    return this._customPosixUserConfig;
  }

  // default_landing_uri - computed: true, optional: false, required: false
  public get defaultLandingUri() {
    return this.getStringAttribute('default_landing_uri');
  }

  // execution_role - computed: true, optional: false, required: false
  public get executionRole() {
    return this.getStringAttribute('execution_role');
  }

  // jupyter_lab_app_settings - computed: true, optional: false, required: false
  private _jupyterLabAppSettings = new DataAwsccSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference(this, "jupyter_lab_app_settings");
  public get jupyterLabAppSettings() {
    return this._jupyterLabAppSettings;
  }

  // jupyter_server_app_settings - computed: true, optional: false, required: false
  private _jupyterServerAppSettings = new DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference(this, "jupyter_server_app_settings");
  public get jupyterServerAppSettings() {
    return this._jupyterServerAppSettings;
  }

  // kernel_gateway_app_settings - computed: true, optional: false, required: false
  private _kernelGatewayAppSettings = new DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference(this, "kernel_gateway_app_settings");
  public get kernelGatewayAppSettings() {
    return this._kernelGatewayAppSettings;
  }

  // r_studio_server_pro_app_settings - computed: true, optional: false, required: false
  private _rStudioServerProAppSettings = new DataAwsccSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference(this, "r_studio_server_pro_app_settings");
  public get rStudioServerProAppSettings() {
    return this._rStudioServerProAppSettings;
  }

  // security_groups - computed: true, optional: false, required: false
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }

  // sharing_settings - computed: true, optional: false, required: false
  private _sharingSettings = new DataAwsccSagemakerUserProfileUserSettingsSharingSettingsOutputReference(this, "sharing_settings");
  public get sharingSettings() {
    return this._sharingSettings;
  }

  // space_storage_settings - computed: true, optional: false, required: false
  private _spaceStorageSettings = new DataAwsccSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference(this, "space_storage_settings");
  public get spaceStorageSettings() {
    return this._spaceStorageSettings;
  }

  // studio_web_portal - computed: true, optional: false, required: false
  public get studioWebPortal() {
    return this.getStringAttribute('studio_web_portal');
  }

  // studio_web_portal_settings - computed: true, optional: false, required: false
  private _studioWebPortalSettings = new DataAwsccSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference(this, "studio_web_portal_settings");
  public get studioWebPortalSettings() {
    return this._studioWebPortalSettings;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sagemaker_user_profile awscc_sagemaker_user_profile}
*/
export class DataAwsccSagemakerUserProfile extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_sagemaker_user_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccSagemakerUserProfile resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccSagemakerUserProfile to import
  * @param importFromId The id of the existing DataAwsccSagemakerUserProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sagemaker_user_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccSagemakerUserProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_user_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sagemaker_user_profile awscc_sagemaker_user_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSagemakerUserProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSagemakerUserProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_user_profile',
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

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
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

  // single_sign_on_user_identifier - computed: true, optional: false, required: false
  public get singleSignOnUserIdentifier() {
    return this.getStringAttribute('single_sign_on_user_identifier');
  }

  // single_sign_on_user_value - computed: true, optional: false, required: false
  public get singleSignOnUserValue() {
    return this.getStringAttribute('single_sign_on_user_value');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccSagemakerUserProfileTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // user_profile_arn - computed: true, optional: false, required: false
  public get userProfileArn() {
    return this.getStringAttribute('user_profile_arn');
  }

  // user_profile_name - computed: true, optional: false, required: false
  public get userProfileName() {
    return this.getStringAttribute('user_profile_name');
  }

  // user_settings - computed: true, optional: false, required: false
  private _userSettings = new DataAwsccSagemakerUserProfileUserSettingsOutputReference(this, "user_settings");
  public get userSettings() {
    return this._userSettings;
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
