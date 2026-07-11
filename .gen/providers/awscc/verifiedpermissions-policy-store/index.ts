// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_policy_store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface VerifiedpermissionsPolicyStoreConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_policy_store#deletion_protection VerifiedpermissionsPolicyStore#deletion_protection}
  */
  readonly deletionProtection?: VerifiedpermissionsPolicyStoreDeletionProtection;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_policy_store#description VerifiedpermissionsPolicyStore#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_policy_store#encryption_settings VerifiedpermissionsPolicyStore#encryption_settings}
  */
  readonly encryptionSettings?: VerifiedpermissionsPolicyStoreEncryptionSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_policy_store#schema VerifiedpermissionsPolicyStore#schema}
  */
  readonly schema?: VerifiedpermissionsPolicyStoreSchema;
  /**
  * The tags to add to the policy store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_policy_store#tags VerifiedpermissionsPolicyStore#tags}
  */
  readonly tags?: VerifiedpermissionsPolicyStoreTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_policy_store#validation_settings VerifiedpermissionsPolicyStore#validation_settings}
  */
  readonly validationSettings: VerifiedpermissionsPolicyStoreValidationSettings;
}
export interface VerifiedpermissionsPolicyStoreDeletionProtection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_policy_store#mode VerifiedpermissionsPolicyStore#mode}
  */
  readonly mode?: string;
}

export function verifiedpermissionsPolicyStoreDeletionProtectionToTerraform(struct?: VerifiedpermissionsPolicyStoreDeletionProtection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mode: cdktn.stringToTerraform(struct!.mode),
  }
}


export function verifiedpermissionsPolicyStoreDeletionProtectionToHclTerraform(struct?: VerifiedpermissionsPolicyStoreDeletionProtection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifiedpermissionsPolicyStoreDeletionProtection | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedpermissionsPolicyStoreDeletionProtection | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
    }
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_policy_store#encryption_context VerifiedpermissionsPolicyStore#encryption_context}
  */
  readonly encryptionContext?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_policy_store#key VerifiedpermissionsPolicyStore#key}
  */
  readonly key?: string;
}

export function verifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsToTerraform(struct?: VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_context: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.encryptionContext),
    key: cdktn.stringToTerraform(struct!.key),
  }
}


export function verifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsToHclTerraform(struct?: VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_context: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.encryptionContext),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionContext !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionContext = this._encryptionContext;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionContext = undefined;
      this._key = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionContext = value.encryptionContext;
      this._key = value.key;
    }
  }

  // encryption_context - computed: true, optional: true, required: false
  private _encryptionContext?: { [key: string]: string }; 
  public get encryptionContext() {
    return this.getStringMapAttribute('encryption_context');
  }
  public set encryptionContext(value: { [key: string]: string }) {
    this._encryptionContext = value;
  }
  public resetEncryptionContext() {
    this._encryptionContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionContextInput() {
    return this._encryptionContext;
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
}
export interface VerifiedpermissionsPolicyStoreEncryptionSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_policy_store#default VerifiedpermissionsPolicyStore#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_policy_store#kms_encryption_settings VerifiedpermissionsPolicyStore#kms_encryption_settings}
  */
  readonly kmsEncryptionSettings?: VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings;
}

export function verifiedpermissionsPolicyStoreEncryptionSettingsToTerraform(struct?: VerifiedpermissionsPolicyStoreEncryptionSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default: cdktn.stringToTerraform(struct!.default),
    kms_encryption_settings: verifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsToTerraform(struct!.kmsEncryptionSettings),
  }
}


export function verifiedpermissionsPolicyStoreEncryptionSettingsToHclTerraform(struct?: VerifiedpermissionsPolicyStoreEncryptionSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default: {
      value: cdktn.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_encryption_settings: {
      value: verifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsToHclTerraform(struct!.kmsEncryptionSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifiedpermissionsPolicyStoreEncryptionSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._kmsEncryptionSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsEncryptionSettings = this._kmsEncryptionSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedpermissionsPolicyStoreEncryptionSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._kmsEncryptionSettings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._kmsEncryptionSettings.internalValue = value.kmsEncryptionSettings;
    }
  }

  // default - computed: true, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // kms_encryption_settings - computed: true, optional: true, required: false
  private _kmsEncryptionSettings = new VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference(this, "kms_encryption_settings");
  public get kmsEncryptionSettings() {
    return this._kmsEncryptionSettings;
  }
  public putKmsEncryptionSettings(value: VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings) {
    this._kmsEncryptionSettings.internalValue = value;
  }
  public resetKmsEncryptionSettings() {
    this._kmsEncryptionSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsEncryptionSettingsInput() {
    return this._kmsEncryptionSettings.internalValue;
  }
}
export interface VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState {
}

export function verifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateToTerraform(struct?: VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function verifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateToHclTerraform(struct?: VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_context - computed: true, optional: false, required: false
  private _encryptionContext = new cdktn.StringMap(this, "encryption_context");
  public get encryptionContext() {
    return this._encryptionContext;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}
export interface VerifiedpermissionsPolicyStoreEncryptionState {
}

export function verifiedpermissionsPolicyStoreEncryptionStateToTerraform(struct?: VerifiedpermissionsPolicyStoreEncryptionState): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function verifiedpermissionsPolicyStoreEncryptionStateToHclTerraform(struct?: VerifiedpermissionsPolicyStoreEncryptionState): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class VerifiedpermissionsPolicyStoreEncryptionStateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifiedpermissionsPolicyStoreEncryptionState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedpermissionsPolicyStoreEncryptionState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // kms_encryption_state - computed: true, optional: false, required: false
  private _kmsEncryptionState = new VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference(this, "kms_encryption_state");
  public get kmsEncryptionState() {
    return this._kmsEncryptionState;
  }
}
export interface VerifiedpermissionsPolicyStoreSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_policy_store#cedar_json VerifiedpermissionsPolicyStore#cedar_json}
  */
  readonly cedarJson?: string;
}

export function verifiedpermissionsPolicyStoreSchemaToTerraform(struct?: VerifiedpermissionsPolicyStoreSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cedar_json: cdktn.stringToTerraform(struct!.cedarJson),
  }
}


export function verifiedpermissionsPolicyStoreSchemaToHclTerraform(struct?: VerifiedpermissionsPolicyStoreSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cedar_json: {
      value: cdktn.stringToHclTerraform(struct!.cedarJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifiedpermissionsPolicyStoreSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifiedpermissionsPolicyStoreSchema | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cedarJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.cedarJson = this._cedarJson;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedpermissionsPolicyStoreSchema | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cedarJson = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cedarJson = value.cedarJson;
    }
  }

  // cedar_json - computed: true, optional: true, required: false
  private _cedarJson?: string; 
  public get cedarJson() {
    return this.getStringAttribute('cedar_json');
  }
  public set cedarJson(value: string) {
    this._cedarJson = value;
  }
  public resetCedarJson() {
    this._cedarJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cedarJsonInput() {
    return this._cedarJson;
  }
}
export interface VerifiedpermissionsPolicyStoreTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_policy_store#key VerifiedpermissionsPolicyStore#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_policy_store#value VerifiedpermissionsPolicyStore#value}
  */
  readonly value?: string;
}

export function verifiedpermissionsPolicyStoreTagsToTerraform(struct?: VerifiedpermissionsPolicyStoreTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function verifiedpermissionsPolicyStoreTagsToHclTerraform(struct?: VerifiedpermissionsPolicyStoreTags | cdktn.IResolvable): any {
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

export class VerifiedpermissionsPolicyStoreTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VerifiedpermissionsPolicyStoreTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: VerifiedpermissionsPolicyStoreTags | cdktn.IResolvable | undefined) {
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

export class VerifiedpermissionsPolicyStoreTagsList extends cdktn.ComplexList {
  public internalValue? : VerifiedpermissionsPolicyStoreTags[] | cdktn.IResolvable

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
  public get(index: number): VerifiedpermissionsPolicyStoreTagsOutputReference {
    return new VerifiedpermissionsPolicyStoreTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VerifiedpermissionsPolicyStoreValidationSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_policy_store#mode VerifiedpermissionsPolicyStore#mode}
  */
  readonly mode: string;
}

export function verifiedpermissionsPolicyStoreValidationSettingsToTerraform(struct?: VerifiedpermissionsPolicyStoreValidationSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mode: cdktn.stringToTerraform(struct!.mode),
  }
}


export function verifiedpermissionsPolicyStoreValidationSettingsToHclTerraform(struct?: VerifiedpermissionsPolicyStoreValidationSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifiedpermissionsPolicyStoreValidationSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifiedpermissionsPolicyStoreValidationSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedpermissionsPolicyStoreValidationSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_policy_store awscc_verifiedpermissions_policy_store}
*/
export class VerifiedpermissionsPolicyStore extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_verifiedpermissions_policy_store";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a VerifiedpermissionsPolicyStore resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VerifiedpermissionsPolicyStore to import
  * @param importFromId The id of the existing VerifiedpermissionsPolicyStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_policy_store#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VerifiedpermissionsPolicyStore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_verifiedpermissions_policy_store", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_policy_store awscc_verifiedpermissions_policy_store} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VerifiedpermissionsPolicyStoreConfig
  */
  public constructor(scope: Construct, id: string, config: VerifiedpermissionsPolicyStoreConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_verifiedpermissions_policy_store',
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
    this._deletionProtection.internalValue = config.deletionProtection;
    this._description = config.description;
    this._encryptionSettings.internalValue = config.encryptionSettings;
    this._schema.internalValue = config.schema;
    this._tags.internalValue = config.tags;
    this._validationSettings.internalValue = config.validationSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // deletion_protection - computed: true, optional: true, required: false
  private _deletionProtection = new VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference(this, "deletion_protection");
  public get deletionProtection() {
    return this._deletionProtection;
  }
  public putDeletionProtection(value: VerifiedpermissionsPolicyStoreDeletionProtection) {
    this._deletionProtection.internalValue = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection.internalValue;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // encryption_settings - computed: true, optional: true, required: false
  private _encryptionSettings = new VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference(this, "encryption_settings");
  public get encryptionSettings() {
    return this._encryptionSettings;
  }
  public putEncryptionSettings(value: VerifiedpermissionsPolicyStoreEncryptionSettings) {
    this._encryptionSettings.internalValue = value;
  }
  public resetEncryptionSettings() {
    this._encryptionSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionSettingsInput() {
    return this._encryptionSettings.internalValue;
  }

  // encryption_state - computed: true, optional: false, required: false
  private _encryptionState = new VerifiedpermissionsPolicyStoreEncryptionStateOutputReference(this, "encryption_state");
  public get encryptionState() {
    return this._encryptionState;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy_store_id - computed: true, optional: false, required: false
  public get policyStoreId() {
    return this.getStringAttribute('policy_store_id');
  }

  // schema - computed: true, optional: true, required: false
  private _schema = new VerifiedpermissionsPolicyStoreSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: VerifiedpermissionsPolicyStoreSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new VerifiedpermissionsPolicyStoreTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: VerifiedpermissionsPolicyStoreTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // validation_settings - computed: false, optional: false, required: true
  private _validationSettings = new VerifiedpermissionsPolicyStoreValidationSettingsOutputReference(this, "validation_settings");
  public get validationSettings() {
    return this._validationSettings;
  }
  public putValidationSettings(value: VerifiedpermissionsPolicyStoreValidationSettings) {
    this._validationSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validationSettingsInput() {
    return this._validationSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_protection: verifiedpermissionsPolicyStoreDeletionProtectionToTerraform(this._deletionProtection.internalValue),
      description: cdktn.stringToTerraform(this._description),
      encryption_settings: verifiedpermissionsPolicyStoreEncryptionSettingsToTerraform(this._encryptionSettings.internalValue),
      schema: verifiedpermissionsPolicyStoreSchemaToTerraform(this._schema.internalValue),
      tags: cdktn.listMapper(verifiedpermissionsPolicyStoreTagsToTerraform, false)(this._tags.internalValue),
      validation_settings: verifiedpermissionsPolicyStoreValidationSettingsToTerraform(this._validationSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_protection: {
        value: verifiedpermissionsPolicyStoreDeletionProtectionToHclTerraform(this._deletionProtection.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VerifiedpermissionsPolicyStoreDeletionProtection",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_settings: {
        value: verifiedpermissionsPolicyStoreEncryptionSettingsToHclTerraform(this._encryptionSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VerifiedpermissionsPolicyStoreEncryptionSettings",
      },
      schema: {
        value: verifiedpermissionsPolicyStoreSchemaToHclTerraform(this._schema.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VerifiedpermissionsPolicyStoreSchema",
      },
      tags: {
        value: cdktn.listMapperHcl(verifiedpermissionsPolicyStoreTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VerifiedpermissionsPolicyStoreTagsList",
      },
      validation_settings: {
        value: verifiedpermissionsPolicyStoreValidationSettingsToHclTerraform(this._validationSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VerifiedpermissionsPolicyStoreValidationSettings",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
