// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SagemakerUserProfileConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID of the associated Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#domain_id SagemakerUserProfile#domain_id}
  */
  readonly domainId: string;
  /**
  * A specifier for the type of value specified in SingleSignOnUserValue. Currently, the only supported value is "UserName". If the Domain's AuthMode is SSO, this field is required. If the Domain's AuthMode is not SSO, this field cannot be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#single_sign_on_user_identifier SagemakerUserProfile#single_sign_on_user_identifier}
  */
  readonly singleSignOnUserIdentifier?: string;
  /**
  * The username of the associated AWS Single Sign-On User for this UserProfile. If the Domain's AuthMode is SSO, this field is required, and must match a valid username of a user in your directory. If the Domain's AuthMode is not SSO, this field cannot be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#single_sign_on_user_value SagemakerUserProfile#single_sign_on_user_value}
  */
  readonly singleSignOnUserValue?: string;
  /**
  * A list of tags to apply to the user profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#tags SagemakerUserProfile#tags}
  */
  readonly tags?: SagemakerUserProfileTags[] | cdktn.IResolvable;
  /**
  * A name for the UserProfile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#user_profile_name SagemakerUserProfile#user_profile_name}
  */
  readonly userProfileName: string;
  /**
  * A collection of settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#user_settings SagemakerUserProfile#user_settings}
  */
  readonly userSettings?: SagemakerUserProfileUserSettings;
}
export interface SagemakerUserProfileTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#key SagemakerUserProfile#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#value SagemakerUserProfile#value}
  */
  readonly value?: string;
}

export function sagemakerUserProfileTagsToTerraform(struct?: SagemakerUserProfileTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function sagemakerUserProfileTagsToHclTerraform(struct?: SagemakerUserProfileTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class SagemakerUserProfileTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerUserProfileTags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileTags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class SagemakerUserProfileTagsList extends cdktn.ComplexList {
  public internalValue? : SagemakerUserProfileTags[] | cdktn.IResolvable

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
  public get(index: number): SagemakerUserProfileTagsOutputReference {
    return new SagemakerUserProfileTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings {
  /**
  * The idle timeout value set in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#idle_timeout_in_minutes SagemakerUserProfile#idle_timeout_in_minutes}
  */
  readonly idleTimeoutInMinutes?: number;
  /**
  * A flag to enable/disable AppLifecycleManagement settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#lifecycle_management SagemakerUserProfile#lifecycle_management}
  */
  readonly lifecycleManagement?: string;
  /**
  * The maximum idle timeout value set in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#max_idle_timeout_in_minutes SagemakerUserProfile#max_idle_timeout_in_minutes}
  */
  readonly maxIdleTimeoutInMinutes?: number;
  /**
  * The minimum idle timeout value set in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#min_idle_timeout_in_minutes SagemakerUserProfile#min_idle_timeout_in_minutes}
  */
  readonly minIdleTimeoutInMinutes?: number;
}

export function sagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    idle_timeout_in_minutes: cdktn.numberToTerraform(struct!.idleTimeoutInMinutes),
    lifecycle_management: cdktn.stringToTerraform(struct!.lifecycleManagement),
    max_idle_timeout_in_minutes: cdktn.numberToTerraform(struct!.maxIdleTimeoutInMinutes),
    min_idle_timeout_in_minutes: cdktn.numberToTerraform(struct!.minIdleTimeoutInMinutes),
  }
}


export function sagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    idle_timeout_in_minutes: {
      value: cdktn.numberToHclTerraform(struct!.idleTimeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lifecycle_management: {
      value: cdktn.stringToHclTerraform(struct!.lifecycleManagement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_idle_timeout_in_minutes: {
      value: cdktn.numberToHclTerraform(struct!.maxIdleTimeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_idle_timeout_in_minutes: {
      value: cdktn.numberToHclTerraform(struct!.minIdleTimeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleTimeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeoutInMinutes = this._idleTimeoutInMinutes;
    }
    if (this._lifecycleManagement !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleManagement = this._lifecycleManagement;
    }
    if (this._maxIdleTimeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleTimeoutInMinutes = this._maxIdleTimeoutInMinutes;
    }
    if (this._minIdleTimeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minIdleTimeoutInMinutes = this._minIdleTimeoutInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idleTimeoutInMinutes = undefined;
      this._lifecycleManagement = undefined;
      this._maxIdleTimeoutInMinutes = undefined;
      this._minIdleTimeoutInMinutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idleTimeoutInMinutes = value.idleTimeoutInMinutes;
      this._lifecycleManagement = value.lifecycleManagement;
      this._maxIdleTimeoutInMinutes = value.maxIdleTimeoutInMinutes;
      this._minIdleTimeoutInMinutes = value.minIdleTimeoutInMinutes;
    }
  }

  // idle_timeout_in_minutes - computed: true, optional: true, required: false
  private _idleTimeoutInMinutes?: number; 
  public get idleTimeoutInMinutes() {
    return this.getNumberAttribute('idle_timeout_in_minutes');
  }
  public set idleTimeoutInMinutes(value: number) {
    this._idleTimeoutInMinutes = value;
  }
  public resetIdleTimeoutInMinutes() {
    this._idleTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInMinutesInput() {
    return this._idleTimeoutInMinutes;
  }

  // lifecycle_management - computed: true, optional: true, required: false
  private _lifecycleManagement?: string; 
  public get lifecycleManagement() {
    return this.getStringAttribute('lifecycle_management');
  }
  public set lifecycleManagement(value: string) {
    this._lifecycleManagement = value;
  }
  public resetLifecycleManagement() {
    this._lifecycleManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleManagementInput() {
    return this._lifecycleManagement;
  }

  // max_idle_timeout_in_minutes - computed: true, optional: true, required: false
  private _maxIdleTimeoutInMinutes?: number; 
  public get maxIdleTimeoutInMinutes() {
    return this.getNumberAttribute('max_idle_timeout_in_minutes');
  }
  public set maxIdleTimeoutInMinutes(value: number) {
    this._maxIdleTimeoutInMinutes = value;
  }
  public resetMaxIdleTimeoutInMinutes() {
    this._maxIdleTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleTimeoutInMinutesInput() {
    return this._maxIdleTimeoutInMinutes;
  }

  // min_idle_timeout_in_minutes - computed: true, optional: true, required: false
  private _minIdleTimeoutInMinutes?: number; 
  public get minIdleTimeoutInMinutes() {
    return this.getNumberAttribute('min_idle_timeout_in_minutes');
  }
  public set minIdleTimeoutInMinutes(value: number) {
    this._minIdleTimeoutInMinutes = value;
  }
  public resetMinIdleTimeoutInMinutes() {
    this._minIdleTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minIdleTimeoutInMinutesInput() {
    return this._minIdleTimeoutInMinutes;
  }
}
export interface SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#idle_settings SagemakerUserProfile#idle_settings}
  */
  readonly idleSettings?: SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings;
}

export function sagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementToTerraform(struct?: SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    idle_settings: sagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsToTerraform(struct!.idleSettings),
  }
}


export function sagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementToHclTerraform(struct?: SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    idle_settings: {
      value: sagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsToHclTerraform(struct!.idleSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleSettings = this._idleSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idleSettings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idleSettings.internalValue = value.idleSettings;
    }
  }

  // idle_settings - computed: true, optional: true, required: false
  private _idleSettings = new SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference(this, "idle_settings");
  public get idleSettings() {
    return this._idleSettings;
  }
  public putIdleSettings(value: SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings) {
    this._idleSettings.internalValue = value;
  }
  public resetIdleSettings() {
    this._idleSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleSettingsInput() {
    return this._idleSettings.internalValue;
  }
}
export interface SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages {
  /**
  * The Name of the AppImageConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#app_image_config_name SagemakerUserProfile#app_image_config_name}
  */
  readonly appImageConfigName?: string;
  /**
  * The name of the CustomImage. Must be unique to your account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#image_name SagemakerUserProfile#image_name}
  */
  readonly imageName?: string;
  /**
  * The version number of the CustomImage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#image_version_number SagemakerUserProfile#image_version_number}
  */
  readonly imageVersionNumber?: number;
}

export function sagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesToTerraform(struct?: SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    app_image_config_name: cdktn.stringToTerraform(struct!.appImageConfigName),
    image_name: cdktn.stringToTerraform(struct!.imageName),
    image_version_number: cdktn.numberToTerraform(struct!.imageVersionNumber),
  }
}


export function sagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesToHclTerraform(struct?: SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    app_image_config_name: {
      value: cdktn.stringToHclTerraform(struct!.appImageConfigName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_name: {
      value: cdktn.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_version_number: {
      value: cdktn.numberToHclTerraform(struct!.imageVersionNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appImageConfigName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appImageConfigName = this._appImageConfigName;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._imageVersionNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageVersionNumber = this._imageVersionNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appImageConfigName = undefined;
      this._imageName = undefined;
      this._imageVersionNumber = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appImageConfigName = value.appImageConfigName;
      this._imageName = value.imageName;
      this._imageVersionNumber = value.imageVersionNumber;
    }
  }

  // app_image_config_name - computed: true, optional: true, required: false
  private _appImageConfigName?: string; 
  public get appImageConfigName() {
    return this.getStringAttribute('app_image_config_name');
  }
  public set appImageConfigName(value: string) {
    this._appImageConfigName = value;
  }
  public resetAppImageConfigName() {
    this._appImageConfigName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appImageConfigNameInput() {
    return this._appImageConfigName;
  }

  // image_name - computed: true, optional: true, required: false
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  public resetImageName() {
    this._imageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // image_version_number - computed: true, optional: true, required: false
  private _imageVersionNumber?: number; 
  public get imageVersionNumber() {
    return this.getNumberAttribute('image_version_number');
  }
  public set imageVersionNumber(value: number) {
    this._imageVersionNumber = value;
  }
  public resetImageVersionNumber() {
    this._imageVersionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionNumberInput() {
    return this._imageVersionNumber;
  }
}

export class SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList extends cdktn.ComplexList {
  public internalValue? : SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages[] | cdktn.IResolvable

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
  public get(index: number): SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference {
    return new SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec {
  /**
  * The instance type that the image version runs on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}
  */
  readonly instanceType?: string;
  /**
  * The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * The ARN of the SageMaker image that the image version belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#sage_maker_image_arn SagemakerUserProfile#sage_maker_image_arn}
  */
  readonly sageMakerImageArn?: string;
  /**
  * The ARN of the image version created on the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#sage_maker_image_version_arn SagemakerUserProfile#sage_maker_image_version_arn}
  */
  readonly sageMakerImageVersionArn?: string;
}

export function sagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktn.stringToTerraform(struct!.lifecycleConfigArn),
    sage_maker_image_arn: cdktn.stringToTerraform(struct!.sageMakerImageArn),
    sage_maker_image_version_arn: cdktn.stringToTerraform(struct!.sageMakerImageVersionArn),
  }
}


export function sagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktn.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sage_maker_image_arn: {
      value: cdktn.stringToHclTerraform(struct!.sageMakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sage_maker_image_version_arn: {
      value: cdktn.stringToHclTerraform(struct!.sageMakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sageMakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerImageArn = this._sageMakerImageArn;
    }
    if (this._sageMakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerImageVersionArn = this._sageMakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sageMakerImageArn = undefined;
      this._sageMakerImageVersionArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sageMakerImageArn = value.sageMakerImageArn;
      this._sageMakerImageVersionArn = value.sageMakerImageVersionArn;
    }
  }

  // instance_type - computed: true, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: true, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sage_maker_image_arn - computed: true, optional: true, required: false
  private _sageMakerImageArn?: string; 
  public get sageMakerImageArn() {
    return this.getStringAttribute('sage_maker_image_arn');
  }
  public set sageMakerImageArn(value: string) {
    this._sageMakerImageArn = value;
  }
  public resetSageMakerImageArn() {
    this._sageMakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerImageArnInput() {
    return this._sageMakerImageArn;
  }

  // sage_maker_image_version_arn - computed: true, optional: true, required: false
  private _sageMakerImageVersionArn?: string; 
  public get sageMakerImageVersionArn() {
    return this.getStringAttribute('sage_maker_image_version_arn');
  }
  public set sageMakerImageVersionArn(value: string) {
    this._sageMakerImageVersionArn = value;
  }
  public resetSageMakerImageVersionArn() {
    this._sageMakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerImageVersionArnInput() {
    return this._sageMakerImageVersionArn;
  }
}
export interface SagemakerUserProfileUserSettingsCodeEditorAppSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#app_lifecycle_management SagemakerUserProfile#app_lifecycle_management}
  */
  readonly appLifecycleManagement?: SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement;
  /**
  * The lifecycle configuration that runs before the default lifecycle configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#built_in_lifecycle_config_arn SagemakerUserProfile#built_in_lifecycle_config_arn}
  */
  readonly builtInLifecycleConfigArn?: string;
  /**
  * A list of custom images for use for CodeEditor apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#custom_images SagemakerUserProfile#custom_images}
  */
  readonly customImages?: SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages[] | cdktn.IResolvable;
  /**
  * The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the CodeEditor app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}
  */
  readonly defaultResourceSpec?: SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec;
  /**
  * A list of LifecycleConfigArns available for use with CodeEditor apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}
  */
  readonly lifecycleConfigArns?: string[];
}

export function sagemakerUserProfileUserSettingsCodeEditorAppSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsCodeEditorAppSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    app_lifecycle_management: sagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementToTerraform(struct!.appLifecycleManagement),
    built_in_lifecycle_config_arn: cdktn.stringToTerraform(struct!.builtInLifecycleConfigArn),
    custom_images: cdktn.listMapper(sagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesToTerraform, false)(struct!.customImages),
    default_resource_spec: sagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
    lifecycle_config_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.lifecycleConfigArns),
  }
}


export function sagemakerUserProfileUserSettingsCodeEditorAppSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsCodeEditorAppSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    app_lifecycle_management: {
      value: sagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementToHclTerraform(struct!.appLifecycleManagement),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement",
    },
    built_in_lifecycle_config_arn: {
      value: cdktn.stringToHclTerraform(struct!.builtInLifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_images: {
      value: cdktn.listMapperHcl(sagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesToHclTerraform, false)(struct!.customImages),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList",
    },
    default_resource_spec: {
      value: sagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec",
    },
    lifecycle_config_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.lifecycleConfigArns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsCodeEditorAppSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appLifecycleManagement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appLifecycleManagement = this._appLifecycleManagement?.internalValue;
    }
    if (this._builtInLifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.builtInLifecycleConfigArn = this._builtInLifecycleConfigArn;
    }
    if (this._customImages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customImages = this._customImages?.internalValue;
    }
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    if (this._lifecycleConfigArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsCodeEditorAppSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appLifecycleManagement.internalValue = undefined;
      this._builtInLifecycleConfigArn = undefined;
      this._customImages.internalValue = undefined;
      this._defaultResourceSpec.internalValue = undefined;
      this._lifecycleConfigArns = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appLifecycleManagement.internalValue = value.appLifecycleManagement;
      this._builtInLifecycleConfigArn = value.builtInLifecycleConfigArn;
      this._customImages.internalValue = value.customImages;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
      this._lifecycleConfigArns = value.lifecycleConfigArns;
    }
  }

  // app_lifecycle_management - computed: true, optional: true, required: false
  private _appLifecycleManagement = new SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference(this, "app_lifecycle_management");
  public get appLifecycleManagement() {
    return this._appLifecycleManagement;
  }
  public putAppLifecycleManagement(value: SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement) {
    this._appLifecycleManagement.internalValue = value;
  }
  public resetAppLifecycleManagement() {
    this._appLifecycleManagement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appLifecycleManagementInput() {
    return this._appLifecycleManagement.internalValue;
  }

  // built_in_lifecycle_config_arn - computed: true, optional: true, required: false
  private _builtInLifecycleConfigArn?: string; 
  public get builtInLifecycleConfigArn() {
    return this.getStringAttribute('built_in_lifecycle_config_arn');
  }
  public set builtInLifecycleConfigArn(value: string) {
    this._builtInLifecycleConfigArn = value;
  }
  public resetBuiltInLifecycleConfigArn() {
    this._builtInLifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get builtInLifecycleConfigArnInput() {
    return this._builtInLifecycleConfigArn;
  }

  // custom_images - computed: true, optional: true, required: false
  private _customImages = new SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList(this, "custom_images", false);
  public get customImages() {
    return this._customImages;
  }
  public putCustomImages(value: SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages[] | cdktn.IResolvable) {
    this._customImages.internalValue = value;
  }
  public resetCustomImages() {
    this._customImages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customImagesInput() {
    return this._customImages.internalValue;
  }

  // default_resource_spec - computed: true, optional: true, required: false
  private _defaultResourceSpec = new SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }

  // lifecycle_config_arns - computed: true, optional: true, required: false
  private _lifecycleConfigArns?: string[]; 
  public get lifecycleConfigArns() {
    return this.getListAttribute('lifecycle_config_arns');
  }
  public set lifecycleConfigArns(value: string[]) {
    this._lifecycleConfigArns = value;
  }
  public resetLifecycleConfigArns() {
    this._lifecycleConfigArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnsInput() {
    return this._lifecycleConfigArns;
  }
}
export interface SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#file_system_id SagemakerUserProfile#file_system_id}
  */
  readonly fileSystemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#file_system_path SagemakerUserProfile#file_system_path}
  */
  readonly fileSystemPath?: string;
}

export function sagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigToTerraform(struct?: SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_system_id: cdktn.stringToTerraform(struct!.fileSystemId),
    file_system_path: cdktn.stringToTerraform(struct!.fileSystemPath),
  }
}


export function sagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigToHclTerraform(struct?: SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_system_id: {
      value: cdktn.stringToHclTerraform(struct!.fileSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system_path: {
      value: cdktn.stringToHclTerraform(struct!.fileSystemPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemId = this._fileSystemId;
    }
    if (this._fileSystemPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemPath = this._fileSystemPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileSystemId = undefined;
      this._fileSystemPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileSystemId = value.fileSystemId;
      this._fileSystemPath = value.fileSystemPath;
    }
  }

  // file_system_id - computed: true, optional: true, required: false
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  public resetFileSystemId() {
    this._fileSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // file_system_path - computed: true, optional: true, required: false
  private _fileSystemPath?: string; 
  public get fileSystemPath() {
    return this.getStringAttribute('file_system_path');
  }
  public set fileSystemPath(value: string) {
    this._fileSystemPath = value;
  }
  public resetFileSystemPath() {
    this._fileSystemPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemPathInput() {
    return this._fileSystemPath;
  }
}
export interface SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#file_system_id SagemakerUserProfile#file_system_id}
  */
  readonly fileSystemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#file_system_path SagemakerUserProfile#file_system_path}
  */
  readonly fileSystemPath?: string;
}

export function sagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigToTerraform(struct?: SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_system_id: cdktn.stringToTerraform(struct!.fileSystemId),
    file_system_path: cdktn.stringToTerraform(struct!.fileSystemPath),
  }
}


export function sagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigToHclTerraform(struct?: SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_system_id: {
      value: cdktn.stringToHclTerraform(struct!.fileSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system_path: {
      value: cdktn.stringToHclTerraform(struct!.fileSystemPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemId = this._fileSystemId;
    }
    if (this._fileSystemPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemPath = this._fileSystemPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileSystemId = undefined;
      this._fileSystemPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileSystemId = value.fileSystemId;
      this._fileSystemPath = value.fileSystemPath;
    }
  }

  // file_system_id - computed: true, optional: true, required: false
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  public resetFileSystemId() {
    this._fileSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // file_system_path - computed: true, optional: true, required: false
  private _fileSystemPath?: string; 
  public get fileSystemPath() {
    return this.getStringAttribute('file_system_path');
  }
  public set fileSystemPath(value: string) {
    this._fileSystemPath = value;
  }
  public resetFileSystemPath() {
    this._fileSystemPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemPathInput() {
    return this._fileSystemPath;
  }
}
export interface SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#mount_path SagemakerUserProfile#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#s3_uri SagemakerUserProfile#s3_uri}
  */
  readonly s3Uri?: string;
}

export function sagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigToTerraform(struct?: SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mount_path: cdktn.stringToTerraform(struct!.mountPath),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function sagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigToHclTerraform(struct?: SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mount_path: {
      value: cdktn.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._s3Uri = value.s3Uri;
    }
  }

  // mount_path - computed: true, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // s3_uri - computed: true, optional: true, required: false
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  public resetS3Uri() {
    this._s3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}
export interface SagemakerUserProfileUserSettingsCustomFileSystemConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#efs_file_system_config SagemakerUserProfile#efs_file_system_config}
  */
  readonly efsFileSystemConfig?: SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#fsx_lustre_file_system_config SagemakerUserProfile#fsx_lustre_file_system_config}
  */
  readonly fsxLustreFileSystemConfig?: SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#s3_file_system_config SagemakerUserProfile#s3_file_system_config}
  */
  readonly s3FileSystemConfig?: SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig;
}

export function sagemakerUserProfileUserSettingsCustomFileSystemConfigsToTerraform(struct?: SagemakerUserProfileUserSettingsCustomFileSystemConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    efs_file_system_config: sagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigToTerraform(struct!.efsFileSystemConfig),
    fsx_lustre_file_system_config: sagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigToTerraform(struct!.fsxLustreFileSystemConfig),
    s3_file_system_config: sagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigToTerraform(struct!.s3FileSystemConfig),
  }
}


export function sagemakerUserProfileUserSettingsCustomFileSystemConfigsToHclTerraform(struct?: SagemakerUserProfileUserSettingsCustomFileSystemConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    efs_file_system_config: {
      value: sagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigToHclTerraform(struct!.efsFileSystemConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig",
    },
    fsx_lustre_file_system_config: {
      value: sagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigToHclTerraform(struct!.fsxLustreFileSystemConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig",
    },
    s3_file_system_config: {
      value: sagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigToHclTerraform(struct!.s3FileSystemConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerUserProfileUserSettingsCustomFileSystemConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._efsFileSystemConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.efsFileSystemConfig = this._efsFileSystemConfig?.internalValue;
    }
    if (this._fsxLustreFileSystemConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsxLustreFileSystemConfig = this._fsxLustreFileSystemConfig?.internalValue;
    }
    if (this._s3FileSystemConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3FileSystemConfig = this._s3FileSystemConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsCustomFileSystemConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._efsFileSystemConfig.internalValue = undefined;
      this._fsxLustreFileSystemConfig.internalValue = undefined;
      this._s3FileSystemConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._efsFileSystemConfig.internalValue = value.efsFileSystemConfig;
      this._fsxLustreFileSystemConfig.internalValue = value.fsxLustreFileSystemConfig;
      this._s3FileSystemConfig.internalValue = value.s3FileSystemConfig;
    }
  }

  // efs_file_system_config - computed: true, optional: true, required: false
  private _efsFileSystemConfig = new SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference(this, "efs_file_system_config");
  public get efsFileSystemConfig() {
    return this._efsFileSystemConfig;
  }
  public putEfsFileSystemConfig(value: SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig) {
    this._efsFileSystemConfig.internalValue = value;
  }
  public resetEfsFileSystemConfig() {
    this._efsFileSystemConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efsFileSystemConfigInput() {
    return this._efsFileSystemConfig.internalValue;
  }

  // fsx_lustre_file_system_config - computed: true, optional: true, required: false
  private _fsxLustreFileSystemConfig = new SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference(this, "fsx_lustre_file_system_config");
  public get fsxLustreFileSystemConfig() {
    return this._fsxLustreFileSystemConfig;
  }
  public putFsxLustreFileSystemConfig(value: SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig) {
    this._fsxLustreFileSystemConfig.internalValue = value;
  }
  public resetFsxLustreFileSystemConfig() {
    this._fsxLustreFileSystemConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsxLustreFileSystemConfigInput() {
    return this._fsxLustreFileSystemConfig.internalValue;
  }

  // s3_file_system_config - computed: true, optional: true, required: false
  private _s3FileSystemConfig = new SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference(this, "s3_file_system_config");
  public get s3FileSystemConfig() {
    return this._s3FileSystemConfig;
  }
  public putS3FileSystemConfig(value: SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig) {
    this._s3FileSystemConfig.internalValue = value;
  }
  public resetS3FileSystemConfig() {
    this._s3FileSystemConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3FileSystemConfigInput() {
    return this._s3FileSystemConfig.internalValue;
  }
}

export class SagemakerUserProfileUserSettingsCustomFileSystemConfigsList extends cdktn.ComplexList {
  public internalValue? : SagemakerUserProfileUserSettingsCustomFileSystemConfigs[] | cdktn.IResolvable

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
  public get(index: number): SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference {
    return new SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerUserProfileUserSettingsCustomPosixUserConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#gid SagemakerUserProfile#gid}
  */
  readonly gid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#uid SagemakerUserProfile#uid}
  */
  readonly uid?: number;
}

export function sagemakerUserProfileUserSettingsCustomPosixUserConfigToTerraform(struct?: SagemakerUserProfileUserSettingsCustomPosixUserConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    gid: cdktn.numberToTerraform(struct!.gid),
    uid: cdktn.numberToTerraform(struct!.uid),
  }
}


export function sagemakerUserProfileUserSettingsCustomPosixUserConfigToHclTerraform(struct?: SagemakerUserProfileUserSettingsCustomPosixUserConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    gid: {
      value: cdktn.numberToHclTerraform(struct!.gid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uid: {
      value: cdktn.numberToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsCustomPosixUserConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gid = this._gid;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsCustomPosixUserConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gid = undefined;
      this._uid = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gid = value.gid;
      this._uid = value.uid;
    }
  }

  // gid - computed: true, optional: true, required: false
  private _gid?: number; 
  public get gid() {
    return this.getNumberAttribute('gid');
  }
  public set gid(value: number) {
    this._gid = value;
  }
  public resetGid() {
    this._gid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gidInput() {
    return this._gid;
  }

  // uid - computed: true, optional: true, required: false
  private _uid?: number; 
  public get uid() {
    return this.getNumberAttribute('uid');
  }
  public set uid(value: number) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings {
  /**
  * The idle timeout value set in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#idle_timeout_in_minutes SagemakerUserProfile#idle_timeout_in_minutes}
  */
  readonly idleTimeoutInMinutes?: number;
  /**
  * A flag to enable/disable AppLifecycleManagement settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#lifecycle_management SagemakerUserProfile#lifecycle_management}
  */
  readonly lifecycleManagement?: string;
  /**
  * The maximum idle timeout value set in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#max_idle_timeout_in_minutes SagemakerUserProfile#max_idle_timeout_in_minutes}
  */
  readonly maxIdleTimeoutInMinutes?: number;
  /**
  * The minimum idle timeout value set in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#min_idle_timeout_in_minutes SagemakerUserProfile#min_idle_timeout_in_minutes}
  */
  readonly minIdleTimeoutInMinutes?: number;
}

export function sagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    idle_timeout_in_minutes: cdktn.numberToTerraform(struct!.idleTimeoutInMinutes),
    lifecycle_management: cdktn.stringToTerraform(struct!.lifecycleManagement),
    max_idle_timeout_in_minutes: cdktn.numberToTerraform(struct!.maxIdleTimeoutInMinutes),
    min_idle_timeout_in_minutes: cdktn.numberToTerraform(struct!.minIdleTimeoutInMinutes),
  }
}


export function sagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    idle_timeout_in_minutes: {
      value: cdktn.numberToHclTerraform(struct!.idleTimeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lifecycle_management: {
      value: cdktn.stringToHclTerraform(struct!.lifecycleManagement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_idle_timeout_in_minutes: {
      value: cdktn.numberToHclTerraform(struct!.maxIdleTimeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_idle_timeout_in_minutes: {
      value: cdktn.numberToHclTerraform(struct!.minIdleTimeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleTimeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeoutInMinutes = this._idleTimeoutInMinutes;
    }
    if (this._lifecycleManagement !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleManagement = this._lifecycleManagement;
    }
    if (this._maxIdleTimeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleTimeoutInMinutes = this._maxIdleTimeoutInMinutes;
    }
    if (this._minIdleTimeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minIdleTimeoutInMinutes = this._minIdleTimeoutInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idleTimeoutInMinutes = undefined;
      this._lifecycleManagement = undefined;
      this._maxIdleTimeoutInMinutes = undefined;
      this._minIdleTimeoutInMinutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idleTimeoutInMinutes = value.idleTimeoutInMinutes;
      this._lifecycleManagement = value.lifecycleManagement;
      this._maxIdleTimeoutInMinutes = value.maxIdleTimeoutInMinutes;
      this._minIdleTimeoutInMinutes = value.minIdleTimeoutInMinutes;
    }
  }

  // idle_timeout_in_minutes - computed: true, optional: true, required: false
  private _idleTimeoutInMinutes?: number; 
  public get idleTimeoutInMinutes() {
    return this.getNumberAttribute('idle_timeout_in_minutes');
  }
  public set idleTimeoutInMinutes(value: number) {
    this._idleTimeoutInMinutes = value;
  }
  public resetIdleTimeoutInMinutes() {
    this._idleTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInMinutesInput() {
    return this._idleTimeoutInMinutes;
  }

  // lifecycle_management - computed: true, optional: true, required: false
  private _lifecycleManagement?: string; 
  public get lifecycleManagement() {
    return this.getStringAttribute('lifecycle_management');
  }
  public set lifecycleManagement(value: string) {
    this._lifecycleManagement = value;
  }
  public resetLifecycleManagement() {
    this._lifecycleManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleManagementInput() {
    return this._lifecycleManagement;
  }

  // max_idle_timeout_in_minutes - computed: true, optional: true, required: false
  private _maxIdleTimeoutInMinutes?: number; 
  public get maxIdleTimeoutInMinutes() {
    return this.getNumberAttribute('max_idle_timeout_in_minutes');
  }
  public set maxIdleTimeoutInMinutes(value: number) {
    this._maxIdleTimeoutInMinutes = value;
  }
  public resetMaxIdleTimeoutInMinutes() {
    this._maxIdleTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleTimeoutInMinutesInput() {
    return this._maxIdleTimeoutInMinutes;
  }

  // min_idle_timeout_in_minutes - computed: true, optional: true, required: false
  private _minIdleTimeoutInMinutes?: number; 
  public get minIdleTimeoutInMinutes() {
    return this.getNumberAttribute('min_idle_timeout_in_minutes');
  }
  public set minIdleTimeoutInMinutes(value: number) {
    this._minIdleTimeoutInMinutes = value;
  }
  public resetMinIdleTimeoutInMinutes() {
    this._minIdleTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minIdleTimeoutInMinutesInput() {
    return this._minIdleTimeoutInMinutes;
  }
}
export interface SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#idle_settings SagemakerUserProfile#idle_settings}
  */
  readonly idleSettings?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings;
}

export function sagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementToTerraform(struct?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    idle_settings: sagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsToTerraform(struct!.idleSettings),
  }
}


export function sagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementToHclTerraform(struct?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    idle_settings: {
      value: sagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsToHclTerraform(struct!.idleSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleSettings = this._idleSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idleSettings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idleSettings.internalValue = value.idleSettings;
    }
  }

  // idle_settings - computed: true, optional: true, required: false
  private _idleSettings = new SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference(this, "idle_settings");
  public get idleSettings() {
    return this._idleSettings;
  }
  public putIdleSettings(value: SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings) {
    this._idleSettings.internalValue = value;
  }
  public resetIdleSettings() {
    this._idleSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleSettingsInput() {
    return this._idleSettings.internalValue;
  }
}
export interface SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories {
  /**
  * A CodeRepository (valid URL) to be used within Jupyter's Git extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#repository_url SagemakerUserProfile#repository_url}
  */
  readonly repositoryUrl?: string;
}

export function sagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesToTerraform(struct?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    repository_url: cdktn.stringToTerraform(struct!.repositoryUrl),
  }
}


export function sagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesToHclTerraform(struct?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    repository_url: {
      value: cdktn.stringToHclTerraform(struct!.repositoryUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryUrl = this._repositoryUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._repositoryUrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._repositoryUrl = value.repositoryUrl;
    }
  }

  // repository_url - computed: true, optional: true, required: false
  private _repositoryUrl?: string; 
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }
  public set repositoryUrl(value: string) {
    this._repositoryUrl = value;
  }
  public resetRepositoryUrl() {
    this._repositoryUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryUrlInput() {
    return this._repositoryUrl;
  }
}

export class SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList extends cdktn.ComplexList {
  public internalValue? : SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories[] | cdktn.IResolvable

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
  public get(index: number): SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference {
    return new SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages {
  /**
  * The Name of the AppImageConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#app_image_config_name SagemakerUserProfile#app_image_config_name}
  */
  readonly appImageConfigName?: string;
  /**
  * The name of the CustomImage. Must be unique to your account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#image_name SagemakerUserProfile#image_name}
  */
  readonly imageName?: string;
  /**
  * The version number of the CustomImage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#image_version_number SagemakerUserProfile#image_version_number}
  */
  readonly imageVersionNumber?: number;
}

export function sagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesToTerraform(struct?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    app_image_config_name: cdktn.stringToTerraform(struct!.appImageConfigName),
    image_name: cdktn.stringToTerraform(struct!.imageName),
    image_version_number: cdktn.numberToTerraform(struct!.imageVersionNumber),
  }
}


export function sagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesToHclTerraform(struct?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    app_image_config_name: {
      value: cdktn.stringToHclTerraform(struct!.appImageConfigName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_name: {
      value: cdktn.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_version_number: {
      value: cdktn.numberToHclTerraform(struct!.imageVersionNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appImageConfigName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appImageConfigName = this._appImageConfigName;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._imageVersionNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageVersionNumber = this._imageVersionNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appImageConfigName = undefined;
      this._imageName = undefined;
      this._imageVersionNumber = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appImageConfigName = value.appImageConfigName;
      this._imageName = value.imageName;
      this._imageVersionNumber = value.imageVersionNumber;
    }
  }

  // app_image_config_name - computed: true, optional: true, required: false
  private _appImageConfigName?: string; 
  public get appImageConfigName() {
    return this.getStringAttribute('app_image_config_name');
  }
  public set appImageConfigName(value: string) {
    this._appImageConfigName = value;
  }
  public resetAppImageConfigName() {
    this._appImageConfigName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appImageConfigNameInput() {
    return this._appImageConfigName;
  }

  // image_name - computed: true, optional: true, required: false
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  public resetImageName() {
    this._imageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // image_version_number - computed: true, optional: true, required: false
  private _imageVersionNumber?: number; 
  public get imageVersionNumber() {
    return this.getNumberAttribute('image_version_number');
  }
  public set imageVersionNumber(value: number) {
    this._imageVersionNumber = value;
  }
  public resetImageVersionNumber() {
    this._imageVersionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionNumberInput() {
    return this._imageVersionNumber;
  }
}

export class SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList extends cdktn.ComplexList {
  public internalValue? : SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages[] | cdktn.IResolvable

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
  public get(index: number): SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference {
    return new SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec {
  /**
  * The instance type that the image version runs on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}
  */
  readonly instanceType?: string;
  /**
  * The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * The ARN of the SageMaker image that the image version belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#sage_maker_image_arn SagemakerUserProfile#sage_maker_image_arn}
  */
  readonly sageMakerImageArn?: string;
  /**
  * The ARN of the image version created on the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#sage_maker_image_version_arn SagemakerUserProfile#sage_maker_image_version_arn}
  */
  readonly sageMakerImageVersionArn?: string;
}

export function sagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktn.stringToTerraform(struct!.lifecycleConfigArn),
    sage_maker_image_arn: cdktn.stringToTerraform(struct!.sageMakerImageArn),
    sage_maker_image_version_arn: cdktn.stringToTerraform(struct!.sageMakerImageVersionArn),
  }
}


export function sagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktn.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sage_maker_image_arn: {
      value: cdktn.stringToHclTerraform(struct!.sageMakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sage_maker_image_version_arn: {
      value: cdktn.stringToHclTerraform(struct!.sageMakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sageMakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerImageArn = this._sageMakerImageArn;
    }
    if (this._sageMakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerImageVersionArn = this._sageMakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sageMakerImageArn = undefined;
      this._sageMakerImageVersionArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sageMakerImageArn = value.sageMakerImageArn;
      this._sageMakerImageVersionArn = value.sageMakerImageVersionArn;
    }
  }

  // instance_type - computed: true, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: true, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sage_maker_image_arn - computed: true, optional: true, required: false
  private _sageMakerImageArn?: string; 
  public get sageMakerImageArn() {
    return this.getStringAttribute('sage_maker_image_arn');
  }
  public set sageMakerImageArn(value: string) {
    this._sageMakerImageArn = value;
  }
  public resetSageMakerImageArn() {
    this._sageMakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerImageArnInput() {
    return this._sageMakerImageArn;
  }

  // sage_maker_image_version_arn - computed: true, optional: true, required: false
  private _sageMakerImageVersionArn?: string; 
  public get sageMakerImageVersionArn() {
    return this.getStringAttribute('sage_maker_image_version_arn');
  }
  public set sageMakerImageVersionArn(value: string) {
    this._sageMakerImageVersionArn = value;
  }
  public resetSageMakerImageVersionArn() {
    this._sageMakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerImageVersionArnInput() {
    return this._sageMakerImageVersionArn;
  }
}
export interface SagemakerUserProfileUserSettingsJupyterLabAppSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#app_lifecycle_management SagemakerUserProfile#app_lifecycle_management}
  */
  readonly appLifecycleManagement?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement;
  /**
  * The lifecycle configuration that runs before the default lifecycle configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#built_in_lifecycle_config_arn SagemakerUserProfile#built_in_lifecycle_config_arn}
  */
  readonly builtInLifecycleConfigArn?: string;
  /**
  * A list of CodeRepositories available for use with JupyterLab apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#code_repositories SagemakerUserProfile#code_repositories}
  */
  readonly codeRepositories?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories[] | cdktn.IResolvable;
  /**
  * A list of custom images available for use for JupyterLab apps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#custom_images SagemakerUserProfile#custom_images}
  */
  readonly customImages?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages[] | cdktn.IResolvable;
  /**
  * The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the JupyterLab app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}
  */
  readonly defaultResourceSpec?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec;
  /**
  * A list of LifecycleConfigArns available for use with JupyterLab apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}
  */
  readonly lifecycleConfigArns?: string[];
}

export function sagemakerUserProfileUserSettingsJupyterLabAppSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsJupyterLabAppSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    app_lifecycle_management: sagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementToTerraform(struct!.appLifecycleManagement),
    built_in_lifecycle_config_arn: cdktn.stringToTerraform(struct!.builtInLifecycleConfigArn),
    code_repositories: cdktn.listMapper(sagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesToTerraform, false)(struct!.codeRepositories),
    custom_images: cdktn.listMapper(sagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesToTerraform, false)(struct!.customImages),
    default_resource_spec: sagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
    lifecycle_config_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.lifecycleConfigArns),
  }
}


export function sagemakerUserProfileUserSettingsJupyterLabAppSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsJupyterLabAppSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    app_lifecycle_management: {
      value: sagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementToHclTerraform(struct!.appLifecycleManagement),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement",
    },
    built_in_lifecycle_config_arn: {
      value: cdktn.stringToHclTerraform(struct!.builtInLifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    code_repositories: {
      value: cdktn.listMapperHcl(sagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesToHclTerraform, false)(struct!.codeRepositories),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList",
    },
    custom_images: {
      value: cdktn.listMapperHcl(sagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesToHclTerraform, false)(struct!.customImages),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList",
    },
    default_resource_spec: {
      value: sagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec",
    },
    lifecycle_config_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.lifecycleConfigArns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsJupyterLabAppSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appLifecycleManagement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appLifecycleManagement = this._appLifecycleManagement?.internalValue;
    }
    if (this._builtInLifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.builtInLifecycleConfigArn = this._builtInLifecycleConfigArn;
    }
    if (this._codeRepositories?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRepositories = this._codeRepositories?.internalValue;
    }
    if (this._customImages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customImages = this._customImages?.internalValue;
    }
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    if (this._lifecycleConfigArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsJupyterLabAppSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appLifecycleManagement.internalValue = undefined;
      this._builtInLifecycleConfigArn = undefined;
      this._codeRepositories.internalValue = undefined;
      this._customImages.internalValue = undefined;
      this._defaultResourceSpec.internalValue = undefined;
      this._lifecycleConfigArns = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appLifecycleManagement.internalValue = value.appLifecycleManagement;
      this._builtInLifecycleConfigArn = value.builtInLifecycleConfigArn;
      this._codeRepositories.internalValue = value.codeRepositories;
      this._customImages.internalValue = value.customImages;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
      this._lifecycleConfigArns = value.lifecycleConfigArns;
    }
  }

  // app_lifecycle_management - computed: true, optional: true, required: false
  private _appLifecycleManagement = new SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference(this, "app_lifecycle_management");
  public get appLifecycleManagement() {
    return this._appLifecycleManagement;
  }
  public putAppLifecycleManagement(value: SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement) {
    this._appLifecycleManagement.internalValue = value;
  }
  public resetAppLifecycleManagement() {
    this._appLifecycleManagement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appLifecycleManagementInput() {
    return this._appLifecycleManagement.internalValue;
  }

  // built_in_lifecycle_config_arn - computed: true, optional: true, required: false
  private _builtInLifecycleConfigArn?: string; 
  public get builtInLifecycleConfigArn() {
    return this.getStringAttribute('built_in_lifecycle_config_arn');
  }
  public set builtInLifecycleConfigArn(value: string) {
    this._builtInLifecycleConfigArn = value;
  }
  public resetBuiltInLifecycleConfigArn() {
    this._builtInLifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get builtInLifecycleConfigArnInput() {
    return this._builtInLifecycleConfigArn;
  }

  // code_repositories - computed: true, optional: true, required: false
  private _codeRepositories = new SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList(this, "code_repositories", false);
  public get codeRepositories() {
    return this._codeRepositories;
  }
  public putCodeRepositories(value: SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories[] | cdktn.IResolvable) {
    this._codeRepositories.internalValue = value;
  }
  public resetCodeRepositories() {
    this._codeRepositories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRepositoriesInput() {
    return this._codeRepositories.internalValue;
  }

  // custom_images - computed: true, optional: true, required: false
  private _customImages = new SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList(this, "custom_images", false);
  public get customImages() {
    return this._customImages;
  }
  public putCustomImages(value: SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages[] | cdktn.IResolvable) {
    this._customImages.internalValue = value;
  }
  public resetCustomImages() {
    this._customImages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customImagesInput() {
    return this._customImages.internalValue;
  }

  // default_resource_spec - computed: true, optional: true, required: false
  private _defaultResourceSpec = new SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }

  // lifecycle_config_arns - computed: true, optional: true, required: false
  private _lifecycleConfigArns?: string[]; 
  public get lifecycleConfigArns() {
    return this.getListAttribute('lifecycle_config_arns');
  }
  public set lifecycleConfigArns(value: string[]) {
    this._lifecycleConfigArns = value;
  }
  public resetLifecycleConfigArns() {
    this._lifecycleConfigArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnsInput() {
    return this._lifecycleConfigArns;
  }
}
export interface SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec {
  /**
  * The instance type that the image version runs on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}
  */
  readonly instanceType?: string;
  /**
  * The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * The ARN of the SageMaker image that the image version belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#sage_maker_image_arn SagemakerUserProfile#sage_maker_image_arn}
  */
  readonly sageMakerImageArn?: string;
  /**
  * The ARN of the image version created on the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#sage_maker_image_version_arn SagemakerUserProfile#sage_maker_image_version_arn}
  */
  readonly sageMakerImageVersionArn?: string;
}

export function sagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktn.stringToTerraform(struct!.lifecycleConfigArn),
    sage_maker_image_arn: cdktn.stringToTerraform(struct!.sageMakerImageArn),
    sage_maker_image_version_arn: cdktn.stringToTerraform(struct!.sageMakerImageVersionArn),
  }
}


export function sagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktn.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sage_maker_image_arn: {
      value: cdktn.stringToHclTerraform(struct!.sageMakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sage_maker_image_version_arn: {
      value: cdktn.stringToHclTerraform(struct!.sageMakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sageMakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerImageArn = this._sageMakerImageArn;
    }
    if (this._sageMakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerImageVersionArn = this._sageMakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sageMakerImageArn = undefined;
      this._sageMakerImageVersionArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sageMakerImageArn = value.sageMakerImageArn;
      this._sageMakerImageVersionArn = value.sageMakerImageVersionArn;
    }
  }

  // instance_type - computed: true, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: true, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sage_maker_image_arn - computed: true, optional: true, required: false
  private _sageMakerImageArn?: string; 
  public get sageMakerImageArn() {
    return this.getStringAttribute('sage_maker_image_arn');
  }
  public set sageMakerImageArn(value: string) {
    this._sageMakerImageArn = value;
  }
  public resetSageMakerImageArn() {
    this._sageMakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerImageArnInput() {
    return this._sageMakerImageArn;
  }

  // sage_maker_image_version_arn - computed: true, optional: true, required: false
  private _sageMakerImageVersionArn?: string; 
  public get sageMakerImageVersionArn() {
    return this.getStringAttribute('sage_maker_image_version_arn');
  }
  public set sageMakerImageVersionArn(value: string) {
    this._sageMakerImageVersionArn = value;
  }
  public resetSageMakerImageVersionArn() {
    this._sageMakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerImageVersionArnInput() {
    return this._sageMakerImageVersionArn;
  }
}
export interface SagemakerUserProfileUserSettingsJupyterServerAppSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}
  */
  readonly defaultResourceSpec?: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec;
  /**
  * A list of LifecycleConfigArns available for use with JupyterServer apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}
  */
  readonly lifecycleConfigArns?: string[];
}

export function sagemakerUserProfileUserSettingsJupyterServerAppSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsJupyterServerAppSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_resource_spec: sagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
    lifecycle_config_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.lifecycleConfigArns),
  }
}


export function sagemakerUserProfileUserSettingsJupyterServerAppSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsJupyterServerAppSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_resource_spec: {
      value: sagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec",
    },
    lifecycle_config_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.lifecycleConfigArns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsJupyterServerAppSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    if (this._lifecycleConfigArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsJupyterServerAppSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultResourceSpec.internalValue = undefined;
      this._lifecycleConfigArns = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
      this._lifecycleConfigArns = value.lifecycleConfigArns;
    }
  }

  // default_resource_spec - computed: true, optional: true, required: false
  private _defaultResourceSpec = new SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }

  // lifecycle_config_arns - computed: true, optional: true, required: false
  private _lifecycleConfigArns?: string[]; 
  public get lifecycleConfigArns() {
    return this.getListAttribute('lifecycle_config_arns');
  }
  public set lifecycleConfigArns(value: string[]) {
    this._lifecycleConfigArns = value;
  }
  public resetLifecycleConfigArns() {
    this._lifecycleConfigArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnsInput() {
    return this._lifecycleConfigArns;
  }
}
export interface SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages {
  /**
  * The Name of the AppImageConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#app_image_config_name SagemakerUserProfile#app_image_config_name}
  */
  readonly appImageConfigName?: string;
  /**
  * The name of the CustomImage. Must be unique to your account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#image_name SagemakerUserProfile#image_name}
  */
  readonly imageName?: string;
  /**
  * The version number of the CustomImage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#image_version_number SagemakerUserProfile#image_version_number}
  */
  readonly imageVersionNumber?: number;
}

export function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesToTerraform(struct?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    app_image_config_name: cdktn.stringToTerraform(struct!.appImageConfigName),
    image_name: cdktn.stringToTerraform(struct!.imageName),
    image_version_number: cdktn.numberToTerraform(struct!.imageVersionNumber),
  }
}


export function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesToHclTerraform(struct?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    app_image_config_name: {
      value: cdktn.stringToHclTerraform(struct!.appImageConfigName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_name: {
      value: cdktn.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_version_number: {
      value: cdktn.numberToHclTerraform(struct!.imageVersionNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appImageConfigName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appImageConfigName = this._appImageConfigName;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._imageVersionNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageVersionNumber = this._imageVersionNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appImageConfigName = undefined;
      this._imageName = undefined;
      this._imageVersionNumber = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appImageConfigName = value.appImageConfigName;
      this._imageName = value.imageName;
      this._imageVersionNumber = value.imageVersionNumber;
    }
  }

  // app_image_config_name - computed: true, optional: true, required: false
  private _appImageConfigName?: string; 
  public get appImageConfigName() {
    return this.getStringAttribute('app_image_config_name');
  }
  public set appImageConfigName(value: string) {
    this._appImageConfigName = value;
  }
  public resetAppImageConfigName() {
    this._appImageConfigName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appImageConfigNameInput() {
    return this._appImageConfigName;
  }

  // image_name - computed: true, optional: true, required: false
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  public resetImageName() {
    this._imageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // image_version_number - computed: true, optional: true, required: false
  private _imageVersionNumber?: number; 
  public get imageVersionNumber() {
    return this.getNumberAttribute('image_version_number');
  }
  public set imageVersionNumber(value: number) {
    this._imageVersionNumber = value;
  }
  public resetImageVersionNumber() {
    this._imageVersionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionNumberInput() {
    return this._imageVersionNumber;
  }
}

export class SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList extends cdktn.ComplexList {
  public internalValue? : SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages[] | cdktn.IResolvable

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
  public get(index: number): SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference {
    return new SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec {
  /**
  * The instance type that the image version runs on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}
  */
  readonly instanceType?: string;
  /**
  * The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * The ARN of the SageMaker image that the image version belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#sage_maker_image_arn SagemakerUserProfile#sage_maker_image_arn}
  */
  readonly sageMakerImageArn?: string;
  /**
  * The ARN of the image version created on the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#sage_maker_image_version_arn SagemakerUserProfile#sage_maker_image_version_arn}
  */
  readonly sageMakerImageVersionArn?: string;
}

export function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktn.stringToTerraform(struct!.lifecycleConfigArn),
    sage_maker_image_arn: cdktn.stringToTerraform(struct!.sageMakerImageArn),
    sage_maker_image_version_arn: cdktn.stringToTerraform(struct!.sageMakerImageVersionArn),
  }
}


export function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktn.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sage_maker_image_arn: {
      value: cdktn.stringToHclTerraform(struct!.sageMakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sage_maker_image_version_arn: {
      value: cdktn.stringToHclTerraform(struct!.sageMakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sageMakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerImageArn = this._sageMakerImageArn;
    }
    if (this._sageMakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerImageVersionArn = this._sageMakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sageMakerImageArn = undefined;
      this._sageMakerImageVersionArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sageMakerImageArn = value.sageMakerImageArn;
      this._sageMakerImageVersionArn = value.sageMakerImageVersionArn;
    }
  }

  // instance_type - computed: true, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: true, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sage_maker_image_arn - computed: true, optional: true, required: false
  private _sageMakerImageArn?: string; 
  public get sageMakerImageArn() {
    return this.getStringAttribute('sage_maker_image_arn');
  }
  public set sageMakerImageArn(value: string) {
    this._sageMakerImageArn = value;
  }
  public resetSageMakerImageArn() {
    this._sageMakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerImageArnInput() {
    return this._sageMakerImageArn;
  }

  // sage_maker_image_version_arn - computed: true, optional: true, required: false
  private _sageMakerImageVersionArn?: string; 
  public get sageMakerImageVersionArn() {
    return this.getStringAttribute('sage_maker_image_version_arn');
  }
  public set sageMakerImageVersionArn(value: string) {
    this._sageMakerImageVersionArn = value;
  }
  public resetSageMakerImageVersionArn() {
    this._sageMakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerImageVersionArnInput() {
    return this._sageMakerImageVersionArn;
  }
}
export interface SagemakerUserProfileUserSettingsKernelGatewayAppSettings {
  /**
  * A list of custom SageMaker images that are configured to run as a KernelGateway app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#custom_images SagemakerUserProfile#custom_images}
  */
  readonly customImages?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages[] | cdktn.IResolvable;
  /**
  * The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the KernelGateway app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}
  */
  readonly defaultResourceSpec?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec;
  /**
  * A list of LifecycleConfigArns available for use with KernelGateway apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}
  */
  readonly lifecycleConfigArns?: string[];
}

export function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsKernelGatewayAppSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_images: cdktn.listMapper(sagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesToTerraform, false)(struct!.customImages),
    default_resource_spec: sagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
    lifecycle_config_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.lifecycleConfigArns),
  }
}


export function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsKernelGatewayAppSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_images: {
      value: cdktn.listMapperHcl(sagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesToHclTerraform, false)(struct!.customImages),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList",
    },
    default_resource_spec: {
      value: sagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec",
    },
    lifecycle_config_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.lifecycleConfigArns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsKernelGatewayAppSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customImages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customImages = this._customImages?.internalValue;
    }
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    if (this._lifecycleConfigArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsKernelGatewayAppSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customImages.internalValue = undefined;
      this._defaultResourceSpec.internalValue = undefined;
      this._lifecycleConfigArns = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customImages.internalValue = value.customImages;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
      this._lifecycleConfigArns = value.lifecycleConfigArns;
    }
  }

  // custom_images - computed: true, optional: true, required: false
  private _customImages = new SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList(this, "custom_images", false);
  public get customImages() {
    return this._customImages;
  }
  public putCustomImages(value: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages[] | cdktn.IResolvable) {
    this._customImages.internalValue = value;
  }
  public resetCustomImages() {
    this._customImages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customImagesInput() {
    return this._customImages.internalValue;
  }

  // default_resource_spec - computed: true, optional: true, required: false
  private _defaultResourceSpec = new SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }

  // lifecycle_config_arns - computed: true, optional: true, required: false
  private _lifecycleConfigArns?: string[]; 
  public get lifecycleConfigArns() {
    return this.getListAttribute('lifecycle_config_arns');
  }
  public set lifecycleConfigArns(value: string[]) {
    this._lifecycleConfigArns = value;
  }
  public resetLifecycleConfigArns() {
    this._lifecycleConfigArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnsInput() {
    return this._lifecycleConfigArns;
  }
}
export interface SagemakerUserProfileUserSettingsRStudioServerProAppSettings {
  /**
  * Indicates whether the current user has access to the RStudioServerPro app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#access_status SagemakerUserProfile#access_status}
  */
  readonly accessStatus?: string;
  /**
  * The level of permissions that the user has within the RStudioServerPro app. This value defaults to User. The Admin value allows the user access to the RStudio Administrative Dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#user_group SagemakerUserProfile#user_group}
  */
  readonly userGroup?: string;
}

export function sagemakerUserProfileUserSettingsRStudioServerProAppSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsRStudioServerProAppSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_status: cdktn.stringToTerraform(struct!.accessStatus),
    user_group: cdktn.stringToTerraform(struct!.userGroup),
  }
}


export function sagemakerUserProfileUserSettingsRStudioServerProAppSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsRStudioServerProAppSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_status: {
      value: cdktn.stringToHclTerraform(struct!.accessStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_group: {
      value: cdktn.stringToHclTerraform(struct!.userGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsRStudioServerProAppSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessStatus = this._accessStatus;
    }
    if (this._userGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroup = this._userGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsRStudioServerProAppSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessStatus = undefined;
      this._userGroup = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessStatus = value.accessStatus;
      this._userGroup = value.userGroup;
    }
  }

  // access_status - computed: true, optional: true, required: false
  private _accessStatus?: string; 
  public get accessStatus() {
    return this.getStringAttribute('access_status');
  }
  public set accessStatus(value: string) {
    this._accessStatus = value;
  }
  public resetAccessStatus() {
    this._accessStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessStatusInput() {
    return this._accessStatus;
  }

  // user_group - computed: true, optional: true, required: false
  private _userGroup?: string; 
  public get userGroup() {
    return this.getStringAttribute('user_group');
  }
  public set userGroup(value: string) {
    this._userGroup = value;
  }
  public resetUserGroup() {
    this._userGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupInput() {
    return this._userGroup;
  }
}
export interface SagemakerUserProfileUserSettingsSharingSettings {
  /**
  * Whether to include the notebook cell output when sharing the notebook. The default is Disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#notebook_output_option SagemakerUserProfile#notebook_output_option}
  */
  readonly notebookOutputOption?: string;
  /**
  * When NotebookOutputOption is Allowed, the AWS Key Management Service (KMS) encryption key ID used to encrypt the notebook cell output in the Amazon S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#s3_kms_key_id SagemakerUserProfile#s3_kms_key_id}
  */
  readonly s3KmsKeyId?: string;
  /**
  * When NotebookOutputOption is Allowed, the Amazon S3 bucket used to store the shared notebook snapshots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#s3_output_path SagemakerUserProfile#s3_output_path}
  */
  readonly s3OutputPath?: string;
}

export function sagemakerUserProfileUserSettingsSharingSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsSharingSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    notebook_output_option: cdktn.stringToTerraform(struct!.notebookOutputOption),
    s3_kms_key_id: cdktn.stringToTerraform(struct!.s3KmsKeyId),
    s3_output_path: cdktn.stringToTerraform(struct!.s3OutputPath),
  }
}


export function sagemakerUserProfileUserSettingsSharingSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsSharingSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    notebook_output_option: {
      value: cdktn.stringToHclTerraform(struct!.notebookOutputOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.s3KmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_output_path: {
      value: cdktn.stringToHclTerraform(struct!.s3OutputPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsSharingSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsSharingSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notebookOutputOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookOutputOption = this._notebookOutputOption;
    }
    if (this._s3KmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3KmsKeyId = this._s3KmsKeyId;
    }
    if (this._s3OutputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsSharingSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notebookOutputOption = undefined;
      this._s3KmsKeyId = undefined;
      this._s3OutputPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notebookOutputOption = value.notebookOutputOption;
      this._s3KmsKeyId = value.s3KmsKeyId;
      this._s3OutputPath = value.s3OutputPath;
    }
  }

  // notebook_output_option - computed: true, optional: true, required: false
  private _notebookOutputOption?: string; 
  public get notebookOutputOption() {
    return this.getStringAttribute('notebook_output_option');
  }
  public set notebookOutputOption(value: string) {
    this._notebookOutputOption = value;
  }
  public resetNotebookOutputOption() {
    this._notebookOutputOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookOutputOptionInput() {
    return this._notebookOutputOption;
  }

  // s3_kms_key_id - computed: true, optional: true, required: false
  private _s3KmsKeyId?: string; 
  public get s3KmsKeyId() {
    return this.getStringAttribute('s3_kms_key_id');
  }
  public set s3KmsKeyId(value: string) {
    this._s3KmsKeyId = value;
  }
  public resetS3KmsKeyId() {
    this._s3KmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KmsKeyIdInput() {
    return this._s3KmsKeyId;
  }

  // s3_output_path - computed: true, optional: true, required: false
  private _s3OutputPath?: string; 
  public get s3OutputPath() {
    return this.getStringAttribute('s3_output_path');
  }
  public set s3OutputPath(value: string) {
    this._s3OutputPath = value;
  }
  public resetS3OutputPath() {
    this._s3OutputPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputPathInput() {
    return this._s3OutputPath;
  }
}
export interface SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings {
  /**
  * Default size of the Amazon EBS volume in Gb
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#default_ebs_volume_size_in_gb SagemakerUserProfile#default_ebs_volume_size_in_gb}
  */
  readonly defaultEbsVolumeSizeInGb?: number;
  /**
  * Maximum size of the Amazon EBS volume in Gb. Must be greater than or equal to the DefaultEbsVolumeSizeInGb.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#maximum_ebs_volume_size_in_gb SagemakerUserProfile#maximum_ebs_volume_size_in_gb}
  */
  readonly maximumEbsVolumeSizeInGb?: number;
}

export function sagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_ebs_volume_size_in_gb: cdktn.numberToTerraform(struct!.defaultEbsVolumeSizeInGb),
    maximum_ebs_volume_size_in_gb: cdktn.numberToTerraform(struct!.maximumEbsVolumeSizeInGb),
  }
}


export function sagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_ebs_volume_size_in_gb: {
      value: cdktn.numberToHclTerraform(struct!.defaultEbsVolumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_ebs_volume_size_in_gb: {
      value: cdktn.numberToHclTerraform(struct!.maximumEbsVolumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultEbsVolumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultEbsVolumeSizeInGb = this._defaultEbsVolumeSizeInGb;
    }
    if (this._maximumEbsVolumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumEbsVolumeSizeInGb = this._maximumEbsVolumeSizeInGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultEbsVolumeSizeInGb = undefined;
      this._maximumEbsVolumeSizeInGb = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultEbsVolumeSizeInGb = value.defaultEbsVolumeSizeInGb;
      this._maximumEbsVolumeSizeInGb = value.maximumEbsVolumeSizeInGb;
    }
  }

  // default_ebs_volume_size_in_gb - computed: true, optional: true, required: false
  private _defaultEbsVolumeSizeInGb?: number; 
  public get defaultEbsVolumeSizeInGb() {
    return this.getNumberAttribute('default_ebs_volume_size_in_gb');
  }
  public set defaultEbsVolumeSizeInGb(value: number) {
    this._defaultEbsVolumeSizeInGb = value;
  }
  public resetDefaultEbsVolumeSizeInGb() {
    this._defaultEbsVolumeSizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEbsVolumeSizeInGbInput() {
    return this._defaultEbsVolumeSizeInGb;
  }

  // maximum_ebs_volume_size_in_gb - computed: true, optional: true, required: false
  private _maximumEbsVolumeSizeInGb?: number; 
  public get maximumEbsVolumeSizeInGb() {
    return this.getNumberAttribute('maximum_ebs_volume_size_in_gb');
  }
  public set maximumEbsVolumeSizeInGb(value: number) {
    this._maximumEbsVolumeSizeInGb = value;
  }
  public resetMaximumEbsVolumeSizeInGb() {
    this._maximumEbsVolumeSizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumEbsVolumeSizeInGbInput() {
    return this._maximumEbsVolumeSizeInGb;
  }
}
export interface SagemakerUserProfileUserSettingsSpaceStorageSettings {
  /**
  * Properties related to the Amazon Elastic Block Store volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#default_ebs_storage_settings SagemakerUserProfile#default_ebs_storage_settings}
  */
  readonly defaultEbsStorageSettings?: SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings;
}

export function sagemakerUserProfileUserSettingsSpaceStorageSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsSpaceStorageSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_ebs_storage_settings: sagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToTerraform(struct!.defaultEbsStorageSettings),
  }
}


export function sagemakerUserProfileUserSettingsSpaceStorageSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsSpaceStorageSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_ebs_storage_settings: {
      value: sagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToHclTerraform(struct!.defaultEbsStorageSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsSpaceStorageSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultEbsStorageSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultEbsStorageSettings = this._defaultEbsStorageSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsSpaceStorageSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultEbsStorageSettings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultEbsStorageSettings.internalValue = value.defaultEbsStorageSettings;
    }
  }

  // default_ebs_storage_settings - computed: true, optional: true, required: false
  private _defaultEbsStorageSettings = new SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference(this, "default_ebs_storage_settings");
  public get defaultEbsStorageSettings() {
    return this._defaultEbsStorageSettings;
  }
  public putDefaultEbsStorageSettings(value: SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings) {
    this._defaultEbsStorageSettings.internalValue = value;
  }
  public resetDefaultEbsStorageSettings() {
    this._defaultEbsStorageSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEbsStorageSettingsInput() {
    return this._defaultEbsStorageSettings.internalValue;
  }
}
export interface SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases {
  /**
  * The SageMaker image name that you are hiding from the Studio user interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#sage_maker_image_name SagemakerUserProfile#sage_maker_image_name}
  */
  readonly sageMakerImageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#version_aliases SagemakerUserProfile#version_aliases}
  */
  readonly versionAliases?: string[];
}

export function sagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesToTerraform(struct?: SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sage_maker_image_name: cdktn.stringToTerraform(struct!.sageMakerImageName),
    version_aliases: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.versionAliases),
  }
}


export function sagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesToHclTerraform(struct?: SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sage_maker_image_name: {
      value: cdktn.stringToHclTerraform(struct!.sageMakerImageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_aliases: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.versionAliases),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sageMakerImageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerImageName = this._sageMakerImageName;
    }
    if (this._versionAliases !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionAliases = this._versionAliases;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sageMakerImageName = undefined;
      this._versionAliases = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sageMakerImageName = value.sageMakerImageName;
      this._versionAliases = value.versionAliases;
    }
  }

  // sage_maker_image_name - computed: true, optional: true, required: false
  private _sageMakerImageName?: string; 
  public get sageMakerImageName() {
    return this.getStringAttribute('sage_maker_image_name');
  }
  public set sageMakerImageName(value: string) {
    this._sageMakerImageName = value;
  }
  public resetSageMakerImageName() {
    this._sageMakerImageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerImageNameInput() {
    return this._sageMakerImageName;
  }

  // version_aliases - computed: true, optional: true, required: false
  private _versionAliases?: string[]; 
  public get versionAliases() {
    return this.getListAttribute('version_aliases');
  }
  public set versionAliases(value: string[]) {
    this._versionAliases = value;
  }
  public resetVersionAliases() {
    this._versionAliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionAliasesInput() {
    return this._versionAliases;
  }
}

export class SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList extends cdktn.ComplexList {
  public internalValue? : SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases[] | cdktn.IResolvable

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
  public get(index: number): SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference {
    return new SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerUserProfileUserSettingsStudioWebPortalSettings {
  /**
  * Applications supported in Studio that are hidden from the Studio left navigation pane.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#hidden_app_types SagemakerUserProfile#hidden_app_types}
  */
  readonly hiddenAppTypes?: string[];
  /**
  * The instance types you are hiding from the Studio user interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#hidden_instance_types SagemakerUserProfile#hidden_instance_types}
  */
  readonly hiddenInstanceTypes?: string[];
  /**
  * The machine learning tools that are hidden from the Studio left navigation pane.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#hidden_ml_tools SagemakerUserProfile#hidden_ml_tools}
  */
  readonly hiddenMlTools?: string[];
  /**
  * The version aliases you are hiding from the Studio user interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#hidden_sage_maker_image_version_aliases SagemakerUserProfile#hidden_sage_maker_image_version_aliases}
  */
  readonly hiddenSageMakerImageVersionAliases?: SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases[] | cdktn.IResolvable;
}

export function sagemakerUserProfileUserSettingsStudioWebPortalSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsStudioWebPortalSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hidden_app_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.hiddenAppTypes),
    hidden_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.hiddenInstanceTypes),
    hidden_ml_tools: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.hiddenMlTools),
    hidden_sage_maker_image_version_aliases: cdktn.listMapper(sagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesToTerraform, false)(struct!.hiddenSageMakerImageVersionAliases),
  }
}


export function sagemakerUserProfileUserSettingsStudioWebPortalSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsStudioWebPortalSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hidden_app_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.hiddenAppTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    hidden_instance_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.hiddenInstanceTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    hidden_ml_tools: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.hiddenMlTools),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    hidden_sage_maker_image_version_aliases: {
      value: cdktn.listMapperHcl(sagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesToHclTerraform, false)(struct!.hiddenSageMakerImageVersionAliases),
      isBlock: true,
      type: "set",
      storageClassType: "SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsStudioWebPortalSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hiddenAppTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.hiddenAppTypes = this._hiddenAppTypes;
    }
    if (this._hiddenInstanceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.hiddenInstanceTypes = this._hiddenInstanceTypes;
    }
    if (this._hiddenMlTools !== undefined) {
      hasAnyValues = true;
      internalValueResult.hiddenMlTools = this._hiddenMlTools;
    }
    if (this._hiddenSageMakerImageVersionAliases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hiddenSageMakerImageVersionAliases = this._hiddenSageMakerImageVersionAliases?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsStudioWebPortalSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hiddenAppTypes = undefined;
      this._hiddenInstanceTypes = undefined;
      this._hiddenMlTools = undefined;
      this._hiddenSageMakerImageVersionAliases.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hiddenAppTypes = value.hiddenAppTypes;
      this._hiddenInstanceTypes = value.hiddenInstanceTypes;
      this._hiddenMlTools = value.hiddenMlTools;
      this._hiddenSageMakerImageVersionAliases.internalValue = value.hiddenSageMakerImageVersionAliases;
    }
  }

  // hidden_app_types - computed: true, optional: true, required: false
  private _hiddenAppTypes?: string[]; 
  public get hiddenAppTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('hidden_app_types'));
  }
  public set hiddenAppTypes(value: string[]) {
    this._hiddenAppTypes = value;
  }
  public resetHiddenAppTypes() {
    this._hiddenAppTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenAppTypesInput() {
    return this._hiddenAppTypes;
  }

  // hidden_instance_types - computed: true, optional: true, required: false
  private _hiddenInstanceTypes?: string[]; 
  public get hiddenInstanceTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('hidden_instance_types'));
  }
  public set hiddenInstanceTypes(value: string[]) {
    this._hiddenInstanceTypes = value;
  }
  public resetHiddenInstanceTypes() {
    this._hiddenInstanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenInstanceTypesInput() {
    return this._hiddenInstanceTypes;
  }

  // hidden_ml_tools - computed: true, optional: true, required: false
  private _hiddenMlTools?: string[]; 
  public get hiddenMlTools() {
    return cdktn.Fn.tolist(this.getListAttribute('hidden_ml_tools'));
  }
  public set hiddenMlTools(value: string[]) {
    this._hiddenMlTools = value;
  }
  public resetHiddenMlTools() {
    this._hiddenMlTools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenMlToolsInput() {
    return this._hiddenMlTools;
  }

  // hidden_sage_maker_image_version_aliases - computed: true, optional: true, required: false
  private _hiddenSageMakerImageVersionAliases = new SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList(this, "hidden_sage_maker_image_version_aliases", true);
  public get hiddenSageMakerImageVersionAliases() {
    return this._hiddenSageMakerImageVersionAliases;
  }
  public putHiddenSageMakerImageVersionAliases(value: SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases[] | cdktn.IResolvable) {
    this._hiddenSageMakerImageVersionAliases.internalValue = value;
  }
  public resetHiddenSageMakerImageVersionAliases() {
    this._hiddenSageMakerImageVersionAliases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenSageMakerImageVersionAliasesInput() {
    return this._hiddenSageMakerImageVersionAliases.internalValue;
  }
}
export interface SagemakerUserProfileUserSettings {
  /**
  * Indicates whether auto-mounting of an EFS volume is supported for the user profile. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#auto_mount_home_efs SagemakerUserProfile#auto_mount_home_efs}
  */
  readonly autoMountHomeEfs?: string;
  /**
  * The CodeEditor app settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#code_editor_app_settings SagemakerUserProfile#code_editor_app_settings}
  */
  readonly codeEditorAppSettings?: SagemakerUserProfileUserSettingsCodeEditorAppSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#custom_file_system_configs SagemakerUserProfile#custom_file_system_configs}
  */
  readonly customFileSystemConfigs?: SagemakerUserProfileUserSettingsCustomFileSystemConfigs[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#custom_posix_user_config SagemakerUserProfile#custom_posix_user_config}
  */
  readonly customPosixUserConfig?: SagemakerUserProfileUserSettingsCustomPosixUserConfig;
  /**
  * Defines which Amazon SageMaker application users are directed to by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#default_landing_uri SagemakerUserProfile#default_landing_uri}
  */
  readonly defaultLandingUri?: string;
  /**
  * The user profile Amazon Resource Name (ARN).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#execution_role SagemakerUserProfile#execution_role}
  */
  readonly executionRole?: string;
  /**
  * The JupyterLab app settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#jupyter_lab_app_settings SagemakerUserProfile#jupyter_lab_app_settings}
  */
  readonly jupyterLabAppSettings?: SagemakerUserProfileUserSettingsJupyterLabAppSettings;
  /**
  * The Jupyter server's app settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#jupyter_server_app_settings SagemakerUserProfile#jupyter_server_app_settings}
  */
  readonly jupyterServerAppSettings?: SagemakerUserProfileUserSettingsJupyterServerAppSettings;
  /**
  * The kernel gateway app settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#kernel_gateway_app_settings SagemakerUserProfile#kernel_gateway_app_settings}
  */
  readonly kernelGatewayAppSettings?: SagemakerUserProfileUserSettingsKernelGatewayAppSettings;
  /**
  * A collection of settings that configure user interaction with the RStudioServerPro app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#r_studio_server_pro_app_settings SagemakerUserProfile#r_studio_server_pro_app_settings}
  */
  readonly rStudioServerProAppSettings?: SagemakerUserProfileUserSettingsRStudioServerProAppSettings;
  /**
  * The security groups for the Amazon Virtual Private Cloud (VPC) that Studio uses for communication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#security_groups SagemakerUserProfile#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * The sharing settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#sharing_settings SagemakerUserProfile#sharing_settings}
  */
  readonly sharingSettings?: SagemakerUserProfileUserSettingsSharingSettings;
  /**
  * Default storage settings for a space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#space_storage_settings SagemakerUserProfile#space_storage_settings}
  */
  readonly spaceStorageSettings?: SagemakerUserProfileUserSettingsSpaceStorageSettings;
  /**
  * Indicates whether the Studio experience is available to users. If not, users cannot access Studio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#studio_web_portal SagemakerUserProfile#studio_web_portal}
  */
  readonly studioWebPortal?: string;
  /**
  * Studio settings. If these settings are applied on a user level, they take priority over the settings applied on a domain level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#studio_web_portal_settings SagemakerUserProfile#studio_web_portal_settings}
  */
  readonly studioWebPortalSettings?: SagemakerUserProfileUserSettingsStudioWebPortalSettings;
}

export function sagemakerUserProfileUserSettingsToTerraform(struct?: SagemakerUserProfileUserSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_mount_home_efs: cdktn.stringToTerraform(struct!.autoMountHomeEfs),
    code_editor_app_settings: sagemakerUserProfileUserSettingsCodeEditorAppSettingsToTerraform(struct!.codeEditorAppSettings),
    custom_file_system_configs: cdktn.listMapper(sagemakerUserProfileUserSettingsCustomFileSystemConfigsToTerraform, false)(struct!.customFileSystemConfigs),
    custom_posix_user_config: sagemakerUserProfileUserSettingsCustomPosixUserConfigToTerraform(struct!.customPosixUserConfig),
    default_landing_uri: cdktn.stringToTerraform(struct!.defaultLandingUri),
    execution_role: cdktn.stringToTerraform(struct!.executionRole),
    jupyter_lab_app_settings: sagemakerUserProfileUserSettingsJupyterLabAppSettingsToTerraform(struct!.jupyterLabAppSettings),
    jupyter_server_app_settings: sagemakerUserProfileUserSettingsJupyterServerAppSettingsToTerraform(struct!.jupyterServerAppSettings),
    kernel_gateway_app_settings: sagemakerUserProfileUserSettingsKernelGatewayAppSettingsToTerraform(struct!.kernelGatewayAppSettings),
    r_studio_server_pro_app_settings: sagemakerUserProfileUserSettingsRStudioServerProAppSettingsToTerraform(struct!.rStudioServerProAppSettings),
    security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroups),
    sharing_settings: sagemakerUserProfileUserSettingsSharingSettingsToTerraform(struct!.sharingSettings),
    space_storage_settings: sagemakerUserProfileUserSettingsSpaceStorageSettingsToTerraform(struct!.spaceStorageSettings),
    studio_web_portal: cdktn.stringToTerraform(struct!.studioWebPortal),
    studio_web_portal_settings: sagemakerUserProfileUserSettingsStudioWebPortalSettingsToTerraform(struct!.studioWebPortalSettings),
  }
}


export function sagemakerUserProfileUserSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_mount_home_efs: {
      value: cdktn.stringToHclTerraform(struct!.autoMountHomeEfs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    code_editor_app_settings: {
      value: sagemakerUserProfileUserSettingsCodeEditorAppSettingsToHclTerraform(struct!.codeEditorAppSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerUserProfileUserSettingsCodeEditorAppSettings",
    },
    custom_file_system_configs: {
      value: cdktn.listMapperHcl(sagemakerUserProfileUserSettingsCustomFileSystemConfigsToHclTerraform, false)(struct!.customFileSystemConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerUserProfileUserSettingsCustomFileSystemConfigsList",
    },
    custom_posix_user_config: {
      value: sagemakerUserProfileUserSettingsCustomPosixUserConfigToHclTerraform(struct!.customPosixUserConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerUserProfileUserSettingsCustomPosixUserConfig",
    },
    default_landing_uri: {
      value: cdktn.stringToHclTerraform(struct!.defaultLandingUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_role: {
      value: cdktn.stringToHclTerraform(struct!.executionRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jupyter_lab_app_settings: {
      value: sagemakerUserProfileUserSettingsJupyterLabAppSettingsToHclTerraform(struct!.jupyterLabAppSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerUserProfileUserSettingsJupyterLabAppSettings",
    },
    jupyter_server_app_settings: {
      value: sagemakerUserProfileUserSettingsJupyterServerAppSettingsToHclTerraform(struct!.jupyterServerAppSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerUserProfileUserSettingsJupyterServerAppSettings",
    },
    kernel_gateway_app_settings: {
      value: sagemakerUserProfileUserSettingsKernelGatewayAppSettingsToHclTerraform(struct!.kernelGatewayAppSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerUserProfileUserSettingsKernelGatewayAppSettings",
    },
    r_studio_server_pro_app_settings: {
      value: sagemakerUserProfileUserSettingsRStudioServerProAppSettingsToHclTerraform(struct!.rStudioServerProAppSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerUserProfileUserSettingsRStudioServerProAppSettings",
    },
    security_groups: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sharing_settings: {
      value: sagemakerUserProfileUserSettingsSharingSettingsToHclTerraform(struct!.sharingSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerUserProfileUserSettingsSharingSettings",
    },
    space_storage_settings: {
      value: sagemakerUserProfileUserSettingsSpaceStorageSettingsToHclTerraform(struct!.spaceStorageSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerUserProfileUserSettingsSpaceStorageSettings",
    },
    studio_web_portal: {
      value: cdktn.stringToHclTerraform(struct!.studioWebPortal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    studio_web_portal_settings: {
      value: sagemakerUserProfileUserSettingsStudioWebPortalSettingsToHclTerraform(struct!.studioWebPortalSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerUserProfileUserSettingsStudioWebPortalSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerUserProfileUserSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoMountHomeEfs !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoMountHomeEfs = this._autoMountHomeEfs;
    }
    if (this._codeEditorAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeEditorAppSettings = this._codeEditorAppSettings?.internalValue;
    }
    if (this._customFileSystemConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFileSystemConfigs = this._customFileSystemConfigs?.internalValue;
    }
    if (this._customPosixUserConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPosixUserConfig = this._customPosixUserConfig?.internalValue;
    }
    if (this._defaultLandingUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultLandingUri = this._defaultLandingUri;
    }
    if (this._executionRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRole = this._executionRole;
    }
    if (this._jupyterLabAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jupyterLabAppSettings = this._jupyterLabAppSettings?.internalValue;
    }
    if (this._jupyterServerAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jupyterServerAppSettings = this._jupyterServerAppSettings?.internalValue;
    }
    if (this._kernelGatewayAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernelGatewayAppSettings = this._kernelGatewayAppSettings?.internalValue;
    }
    if (this._rStudioServerProAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rStudioServerProAppSettings = this._rStudioServerProAppSettings?.internalValue;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._sharingSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharingSettings = this._sharingSettings?.internalValue;
    }
    if (this._spaceStorageSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spaceStorageSettings = this._spaceStorageSettings?.internalValue;
    }
    if (this._studioWebPortal !== undefined) {
      hasAnyValues = true;
      internalValueResult.studioWebPortal = this._studioWebPortal;
    }
    if (this._studioWebPortalSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.studioWebPortalSettings = this._studioWebPortalSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoMountHomeEfs = undefined;
      this._codeEditorAppSettings.internalValue = undefined;
      this._customFileSystemConfigs.internalValue = undefined;
      this._customPosixUserConfig.internalValue = undefined;
      this._defaultLandingUri = undefined;
      this._executionRole = undefined;
      this._jupyterLabAppSettings.internalValue = undefined;
      this._jupyterServerAppSettings.internalValue = undefined;
      this._kernelGatewayAppSettings.internalValue = undefined;
      this._rStudioServerProAppSettings.internalValue = undefined;
      this._securityGroups = undefined;
      this._sharingSettings.internalValue = undefined;
      this._spaceStorageSettings.internalValue = undefined;
      this._studioWebPortal = undefined;
      this._studioWebPortalSettings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoMountHomeEfs = value.autoMountHomeEfs;
      this._codeEditorAppSettings.internalValue = value.codeEditorAppSettings;
      this._customFileSystemConfigs.internalValue = value.customFileSystemConfigs;
      this._customPosixUserConfig.internalValue = value.customPosixUserConfig;
      this._defaultLandingUri = value.defaultLandingUri;
      this._executionRole = value.executionRole;
      this._jupyterLabAppSettings.internalValue = value.jupyterLabAppSettings;
      this._jupyterServerAppSettings.internalValue = value.jupyterServerAppSettings;
      this._kernelGatewayAppSettings.internalValue = value.kernelGatewayAppSettings;
      this._rStudioServerProAppSettings.internalValue = value.rStudioServerProAppSettings;
      this._securityGroups = value.securityGroups;
      this._sharingSettings.internalValue = value.sharingSettings;
      this._spaceStorageSettings.internalValue = value.spaceStorageSettings;
      this._studioWebPortal = value.studioWebPortal;
      this._studioWebPortalSettings.internalValue = value.studioWebPortalSettings;
    }
  }

  // auto_mount_home_efs - computed: true, optional: true, required: false
  private _autoMountHomeEfs?: string; 
  public get autoMountHomeEfs() {
    return this.getStringAttribute('auto_mount_home_efs');
  }
  public set autoMountHomeEfs(value: string) {
    this._autoMountHomeEfs = value;
  }
  public resetAutoMountHomeEfs() {
    this._autoMountHomeEfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMountHomeEfsInput() {
    return this._autoMountHomeEfs;
  }

  // code_editor_app_settings - computed: true, optional: true, required: false
  private _codeEditorAppSettings = new SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference(this, "code_editor_app_settings");
  public get codeEditorAppSettings() {
    return this._codeEditorAppSettings;
  }
  public putCodeEditorAppSettings(value: SagemakerUserProfileUserSettingsCodeEditorAppSettings) {
    this._codeEditorAppSettings.internalValue = value;
  }
  public resetCodeEditorAppSettings() {
    this._codeEditorAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeEditorAppSettingsInput() {
    return this._codeEditorAppSettings.internalValue;
  }

  // custom_file_system_configs - computed: true, optional: true, required: false
  private _customFileSystemConfigs = new SagemakerUserProfileUserSettingsCustomFileSystemConfigsList(this, "custom_file_system_configs", false);
  public get customFileSystemConfigs() {
    return this._customFileSystemConfigs;
  }
  public putCustomFileSystemConfigs(value: SagemakerUserProfileUserSettingsCustomFileSystemConfigs[] | cdktn.IResolvable) {
    this._customFileSystemConfigs.internalValue = value;
  }
  public resetCustomFileSystemConfigs() {
    this._customFileSystemConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFileSystemConfigsInput() {
    return this._customFileSystemConfigs.internalValue;
  }

  // custom_posix_user_config - computed: true, optional: true, required: false
  private _customPosixUserConfig = new SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference(this, "custom_posix_user_config");
  public get customPosixUserConfig() {
    return this._customPosixUserConfig;
  }
  public putCustomPosixUserConfig(value: SagemakerUserProfileUserSettingsCustomPosixUserConfig) {
    this._customPosixUserConfig.internalValue = value;
  }
  public resetCustomPosixUserConfig() {
    this._customPosixUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPosixUserConfigInput() {
    return this._customPosixUserConfig.internalValue;
  }

  // default_landing_uri - computed: true, optional: true, required: false
  private _defaultLandingUri?: string; 
  public get defaultLandingUri() {
    return this.getStringAttribute('default_landing_uri');
  }
  public set defaultLandingUri(value: string) {
    this._defaultLandingUri = value;
  }
  public resetDefaultLandingUri() {
    this._defaultLandingUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLandingUriInput() {
    return this._defaultLandingUri;
  }

  // execution_role - computed: true, optional: true, required: false
  private _executionRole?: string; 
  public get executionRole() {
    return this.getStringAttribute('execution_role');
  }
  public set executionRole(value: string) {
    this._executionRole = value;
  }
  public resetExecutionRole() {
    this._executionRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleInput() {
    return this._executionRole;
  }

  // jupyter_lab_app_settings - computed: true, optional: true, required: false
  private _jupyterLabAppSettings = new SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference(this, "jupyter_lab_app_settings");
  public get jupyterLabAppSettings() {
    return this._jupyterLabAppSettings;
  }
  public putJupyterLabAppSettings(value: SagemakerUserProfileUserSettingsJupyterLabAppSettings) {
    this._jupyterLabAppSettings.internalValue = value;
  }
  public resetJupyterLabAppSettings() {
    this._jupyterLabAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jupyterLabAppSettingsInput() {
    return this._jupyterLabAppSettings.internalValue;
  }

  // jupyter_server_app_settings - computed: true, optional: true, required: false
  private _jupyterServerAppSettings = new SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference(this, "jupyter_server_app_settings");
  public get jupyterServerAppSettings() {
    return this._jupyterServerAppSettings;
  }
  public putJupyterServerAppSettings(value: SagemakerUserProfileUserSettingsJupyterServerAppSettings) {
    this._jupyterServerAppSettings.internalValue = value;
  }
  public resetJupyterServerAppSettings() {
    this._jupyterServerAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jupyterServerAppSettingsInput() {
    return this._jupyterServerAppSettings.internalValue;
  }

  // kernel_gateway_app_settings - computed: true, optional: true, required: false
  private _kernelGatewayAppSettings = new SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference(this, "kernel_gateway_app_settings");
  public get kernelGatewayAppSettings() {
    return this._kernelGatewayAppSettings;
  }
  public putKernelGatewayAppSettings(value: SagemakerUserProfileUserSettingsKernelGatewayAppSettings) {
    this._kernelGatewayAppSettings.internalValue = value;
  }
  public resetKernelGatewayAppSettings() {
    this._kernelGatewayAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelGatewayAppSettingsInput() {
    return this._kernelGatewayAppSettings.internalValue;
  }

  // r_studio_server_pro_app_settings - computed: true, optional: true, required: false
  private _rStudioServerProAppSettings = new SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference(this, "r_studio_server_pro_app_settings");
  public get rStudioServerProAppSettings() {
    return this._rStudioServerProAppSettings;
  }
  public putRStudioServerProAppSettings(value: SagemakerUserProfileUserSettingsRStudioServerProAppSettings) {
    this._rStudioServerProAppSettings.internalValue = value;
  }
  public resetRStudioServerProAppSettings() {
    this._rStudioServerProAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rStudioServerProAppSettingsInput() {
    return this._rStudioServerProAppSettings.internalValue;
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // sharing_settings - computed: true, optional: true, required: false
  private _sharingSettings = new SagemakerUserProfileUserSettingsSharingSettingsOutputReference(this, "sharing_settings");
  public get sharingSettings() {
    return this._sharingSettings;
  }
  public putSharingSettings(value: SagemakerUserProfileUserSettingsSharingSettings) {
    this._sharingSettings.internalValue = value;
  }
  public resetSharingSettings() {
    this._sharingSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharingSettingsInput() {
    return this._sharingSettings.internalValue;
  }

  // space_storage_settings - computed: true, optional: true, required: false
  private _spaceStorageSettings = new SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference(this, "space_storage_settings");
  public get spaceStorageSettings() {
    return this._spaceStorageSettings;
  }
  public putSpaceStorageSettings(value: SagemakerUserProfileUserSettingsSpaceStorageSettings) {
    this._spaceStorageSettings.internalValue = value;
  }
  public resetSpaceStorageSettings() {
    this._spaceStorageSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceStorageSettingsInput() {
    return this._spaceStorageSettings.internalValue;
  }

  // studio_web_portal - computed: true, optional: true, required: false
  private _studioWebPortal?: string; 
  public get studioWebPortal() {
    return this.getStringAttribute('studio_web_portal');
  }
  public set studioWebPortal(value: string) {
    this._studioWebPortal = value;
  }
  public resetStudioWebPortal() {
    this._studioWebPortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get studioWebPortalInput() {
    return this._studioWebPortal;
  }

  // studio_web_portal_settings - computed: true, optional: true, required: false
  private _studioWebPortalSettings = new SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference(this, "studio_web_portal_settings");
  public get studioWebPortalSettings() {
    return this._studioWebPortalSettings;
  }
  public putStudioWebPortalSettings(value: SagemakerUserProfileUserSettingsStudioWebPortalSettings) {
    this._studioWebPortalSettings.internalValue = value;
  }
  public resetStudioWebPortalSettings() {
    this._studioWebPortalSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get studioWebPortalSettingsInput() {
    return this._studioWebPortalSettings.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile awscc_sagemaker_user_profile}
*/
export class SagemakerUserProfile extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_sagemaker_user_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SagemakerUserProfile resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerUserProfile to import
  * @param importFromId The id of the existing SagemakerUserProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerUserProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_user_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_user_profile awscc_sagemaker_user_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerUserProfileConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerUserProfileConfig) {
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
    this._domainId = config.domainId;
    this._singleSignOnUserIdentifier = config.singleSignOnUserIdentifier;
    this._singleSignOnUserValue = config.singleSignOnUserValue;
    this._tags.internalValue = config.tags;
    this._userProfileName = config.userProfileName;
    this._userSettings.internalValue = config.userSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_id - computed: false, optional: false, required: true
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // single_sign_on_user_identifier - computed: true, optional: true, required: false
  private _singleSignOnUserIdentifier?: string; 
  public get singleSignOnUserIdentifier() {
    return this.getStringAttribute('single_sign_on_user_identifier');
  }
  public set singleSignOnUserIdentifier(value: string) {
    this._singleSignOnUserIdentifier = value;
  }
  public resetSingleSignOnUserIdentifier() {
    this._singleSignOnUserIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleSignOnUserIdentifierInput() {
    return this._singleSignOnUserIdentifier;
  }

  // single_sign_on_user_value - computed: true, optional: true, required: false
  private _singleSignOnUserValue?: string; 
  public get singleSignOnUserValue() {
    return this.getStringAttribute('single_sign_on_user_value');
  }
  public set singleSignOnUserValue(value: string) {
    this._singleSignOnUserValue = value;
  }
  public resetSingleSignOnUserValue() {
    this._singleSignOnUserValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleSignOnUserValueInput() {
    return this._singleSignOnUserValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new SagemakerUserProfileTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: SagemakerUserProfileTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // user_profile_arn - computed: true, optional: false, required: false
  public get userProfileArn() {
    return this.getStringAttribute('user_profile_arn');
  }

  // user_profile_name - computed: false, optional: false, required: true
  private _userProfileName?: string; 
  public get userProfileName() {
    return this.getStringAttribute('user_profile_name');
  }
  public set userProfileName(value: string) {
    this._userProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userProfileNameInput() {
    return this._userProfileName;
  }

  // user_settings - computed: true, optional: true, required: false
  private _userSettings = new SagemakerUserProfileUserSettingsOutputReference(this, "user_settings");
  public get userSettings() {
    return this._userSettings;
  }
  public putUserSettings(value: SagemakerUserProfileUserSettings) {
    this._userSettings.internalValue = value;
  }
  public resetUserSettings() {
    this._userSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSettingsInput() {
    return this._userSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_id: cdktn.stringToTerraform(this._domainId),
      single_sign_on_user_identifier: cdktn.stringToTerraform(this._singleSignOnUserIdentifier),
      single_sign_on_user_value: cdktn.stringToTerraform(this._singleSignOnUserValue),
      tags: cdktn.listMapper(sagemakerUserProfileTagsToTerraform, false)(this._tags.internalValue),
      user_profile_name: cdktn.stringToTerraform(this._userProfileName),
      user_settings: sagemakerUserProfileUserSettingsToTerraform(this._userSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_id: {
        value: cdktn.stringToHclTerraform(this._domainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      single_sign_on_user_identifier: {
        value: cdktn.stringToHclTerraform(this._singleSignOnUserIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      single_sign_on_user_value: {
        value: cdktn.stringToHclTerraform(this._singleSignOnUserValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(sagemakerUserProfileTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerUserProfileTagsList",
      },
      user_profile_name: {
        value: cdktn.stringToHclTerraform(this._userProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_settings: {
        value: sagemakerUserProfileUserSettingsToHclTerraform(this._userSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerUserProfileUserSettings",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
