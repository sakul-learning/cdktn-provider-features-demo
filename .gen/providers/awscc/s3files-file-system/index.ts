// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3files_file_system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface S3FilesFileSystemConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3files_file_system#accept_bucket_warning S3FilesFileSystem#accept_bucket_warning}
  */
  readonly acceptBucketWarning?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3files_file_system#bucket S3FilesFileSystem#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3files_file_system#client_token S3FilesFileSystem#client_token}
  */
  readonly clientToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3files_file_system#kms_key_id S3FilesFileSystem#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3files_file_system#prefix S3FilesFileSystem#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3files_file_system#role_arn S3FilesFileSystem#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3files_file_system#synchronization_configuration S3FilesFileSystem#synchronization_configuration}
  */
  readonly synchronizationConfiguration?: S3FilesFileSystemSynchronizationConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3files_file_system#tags S3FilesFileSystem#tags}
  */
  readonly tags?: S3FilesFileSystemTags[] | cdktn.IResolvable;
}
export interface S3FilesFileSystemSynchronizationConfigurationExpirationDataRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3files_file_system#days_after_last_access S3FilesFileSystem#days_after_last_access}
  */
  readonly daysAfterLastAccess?: number;
}

export function s3FilesFileSystemSynchronizationConfigurationExpirationDataRulesToTerraform(struct?: S3FilesFileSystemSynchronizationConfigurationExpirationDataRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    days_after_last_access: cdktn.numberToTerraform(struct!.daysAfterLastAccess),
  }
}


export function s3FilesFileSystemSynchronizationConfigurationExpirationDataRulesToHclTerraform(struct?: S3FilesFileSystemSynchronizationConfigurationExpirationDataRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    days_after_last_access: {
      value: cdktn.numberToHclTerraform(struct!.daysAfterLastAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3FilesFileSystemSynchronizationConfigurationExpirationDataRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysAfterLastAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysAfterLastAccess = this._daysAfterLastAccess;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3FilesFileSystemSynchronizationConfigurationExpirationDataRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daysAfterLastAccess = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daysAfterLastAccess = value.daysAfterLastAccess;
    }
  }

  // days_after_last_access - computed: true, optional: true, required: false
  private _daysAfterLastAccess?: number; 
  public get daysAfterLastAccess() {
    return this.getNumberAttribute('days_after_last_access');
  }
  public set daysAfterLastAccess(value: number) {
    this._daysAfterLastAccess = value;
  }
  public resetDaysAfterLastAccess() {
    this._daysAfterLastAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysAfterLastAccessInput() {
    return this._daysAfterLastAccess;
  }
}

export class S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList extends cdktn.ComplexList {
  public internalValue? : S3FilesFileSystemSynchronizationConfigurationExpirationDataRules[] | cdktn.IResolvable

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
  public get(index: number): S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference {
    return new S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3FilesFileSystemSynchronizationConfigurationImportDataRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3files_file_system#prefix S3FilesFileSystem#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3files_file_system#size_less_than S3FilesFileSystem#size_less_than}
  */
  readonly sizeLessThan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3files_file_system#trigger S3FilesFileSystem#trigger}
  */
  readonly trigger?: string;
}

export function s3FilesFileSystemSynchronizationConfigurationImportDataRulesToTerraform(struct?: S3FilesFileSystemSynchronizationConfigurationImportDataRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    prefix: cdktn.stringToTerraform(struct!.prefix),
    size_less_than: cdktn.numberToTerraform(struct!.sizeLessThan),
    trigger: cdktn.stringToTerraform(struct!.trigger),
  }
}


export function s3FilesFileSystemSynchronizationConfigurationImportDataRulesToHclTerraform(struct?: S3FilesFileSystemSynchronizationConfigurationImportDataRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_less_than: {
      value: cdktn.numberToHclTerraform(struct!.sizeLessThan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trigger: {
      value: cdktn.stringToHclTerraform(struct!.trigger),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3FilesFileSystemSynchronizationConfigurationImportDataRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._sizeLessThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeLessThan = this._sizeLessThan;
    }
    if (this._trigger !== undefined) {
      hasAnyValues = true;
      internalValueResult.trigger = this._trigger;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3FilesFileSystemSynchronizationConfigurationImportDataRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefix = undefined;
      this._sizeLessThan = undefined;
      this._trigger = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefix = value.prefix;
      this._sizeLessThan = value.sizeLessThan;
      this._trigger = value.trigger;
    }
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // size_less_than - computed: true, optional: true, required: false
  private _sizeLessThan?: number; 
  public get sizeLessThan() {
    return this.getNumberAttribute('size_less_than');
  }
  public set sizeLessThan(value: number) {
    this._sizeLessThan = value;
  }
  public resetSizeLessThan() {
    this._sizeLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeLessThanInput() {
    return this._sizeLessThan;
  }

  // trigger - computed: true, optional: true, required: false
  private _trigger?: string; 
  public get trigger() {
    return this.getStringAttribute('trigger');
  }
  public set trigger(value: string) {
    this._trigger = value;
  }
  public resetTrigger() {
    this._trigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger;
  }
}

export class S3FilesFileSystemSynchronizationConfigurationImportDataRulesList extends cdktn.ComplexList {
  public internalValue? : S3FilesFileSystemSynchronizationConfigurationImportDataRules[] | cdktn.IResolvable

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
  public get(index: number): S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference {
    return new S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3FilesFileSystemSynchronizationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3files_file_system#expiration_data_rules S3FilesFileSystem#expiration_data_rules}
  */
  readonly expirationDataRules?: S3FilesFileSystemSynchronizationConfigurationExpirationDataRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3files_file_system#import_data_rules S3FilesFileSystem#import_data_rules}
  */
  readonly importDataRules?: S3FilesFileSystemSynchronizationConfigurationImportDataRules[] | cdktn.IResolvable;
}

export function s3FilesFileSystemSynchronizationConfigurationToTerraform(struct?: S3FilesFileSystemSynchronizationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expiration_data_rules: cdktn.listMapper(s3FilesFileSystemSynchronizationConfigurationExpirationDataRulesToTerraform, false)(struct!.expirationDataRules),
    import_data_rules: cdktn.listMapper(s3FilesFileSystemSynchronizationConfigurationImportDataRulesToTerraform, false)(struct!.importDataRules),
  }
}


export function s3FilesFileSystemSynchronizationConfigurationToHclTerraform(struct?: S3FilesFileSystemSynchronizationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    expiration_data_rules: {
      value: cdktn.listMapperHcl(s3FilesFileSystemSynchronizationConfigurationExpirationDataRulesToHclTerraform, false)(struct!.expirationDataRules),
      isBlock: true,
      type: "list",
      storageClassType: "S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList",
    },
    import_data_rules: {
      value: cdktn.listMapperHcl(s3FilesFileSystemSynchronizationConfigurationImportDataRulesToHclTerraform, false)(struct!.importDataRules),
      isBlock: true,
      type: "list",
      storageClassType: "S3FilesFileSystemSynchronizationConfigurationImportDataRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3FilesFileSystemSynchronizationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3FilesFileSystemSynchronizationConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expirationDataRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationDataRules = this._expirationDataRules?.internalValue;
    }
    if (this._importDataRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.importDataRules = this._importDataRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3FilesFileSystemSynchronizationConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expirationDataRules.internalValue = undefined;
      this._importDataRules.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expirationDataRules.internalValue = value.expirationDataRules;
      this._importDataRules.internalValue = value.importDataRules;
    }
  }

  // expiration_data_rules - computed: true, optional: true, required: false
  private _expirationDataRules = new S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList(this, "expiration_data_rules", false);
  public get expirationDataRules() {
    return this._expirationDataRules;
  }
  public putExpirationDataRules(value: S3FilesFileSystemSynchronizationConfigurationExpirationDataRules[] | cdktn.IResolvable) {
    this._expirationDataRules.internalValue = value;
  }
  public resetExpirationDataRules() {
    this._expirationDataRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationDataRulesInput() {
    return this._expirationDataRules.internalValue;
  }

  // import_data_rules - computed: true, optional: true, required: false
  private _importDataRules = new S3FilesFileSystemSynchronizationConfigurationImportDataRulesList(this, "import_data_rules", false);
  public get importDataRules() {
    return this._importDataRules;
  }
  public putImportDataRules(value: S3FilesFileSystemSynchronizationConfigurationImportDataRules[] | cdktn.IResolvable) {
    this._importDataRules.internalValue = value;
  }
  public resetImportDataRules() {
    this._importDataRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importDataRulesInput() {
    return this._importDataRules.internalValue;
  }

  // latest_version_number - computed: true, optional: false, required: false
  public get latestVersionNumber() {
    return this.getNumberAttribute('latest_version_number');
  }
}
export interface S3FilesFileSystemTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3files_file_system#key S3FilesFileSystem#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3files_file_system#value S3FilesFileSystem#value}
  */
  readonly value?: string;
}

export function s3FilesFileSystemTagsToTerraform(struct?: S3FilesFileSystemTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function s3FilesFileSystemTagsToHclTerraform(struct?: S3FilesFileSystemTags | cdktn.IResolvable): any {
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

export class S3FilesFileSystemTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3FilesFileSystemTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: S3FilesFileSystemTags | cdktn.IResolvable | undefined) {
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

export class S3FilesFileSystemTagsList extends cdktn.ComplexList {
  public internalValue? : S3FilesFileSystemTags[] | cdktn.IResolvable

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
  public get(index: number): S3FilesFileSystemTagsOutputReference {
    return new S3FilesFileSystemTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3files_file_system awscc_s3files_file_system}
*/
export class S3FilesFileSystem extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_s3files_file_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a S3FilesFileSystem resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3FilesFileSystem to import
  * @param importFromId The id of the existing S3FilesFileSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3files_file_system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3FilesFileSystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_s3files_file_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3files_file_system awscc_s3files_file_system} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3FilesFileSystemConfig
  */
  public constructor(scope: Construct, id: string, config: S3FilesFileSystemConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_s3files_file_system',
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
    this._acceptBucketWarning = config.acceptBucketWarning;
    this._bucket = config.bucket;
    this._clientToken = config.clientToken;
    this._kmsKeyId = config.kmsKeyId;
    this._prefix = config.prefix;
    this._roleArn = config.roleArn;
    this._synchronizationConfiguration.internalValue = config.synchronizationConfiguration;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_bucket_warning - computed: true, optional: true, required: false
  private _acceptBucketWarning?: boolean | cdktn.IResolvable; 
  public get acceptBucketWarning() {
    return this.getBooleanAttribute('accept_bucket_warning');
  }
  public set acceptBucketWarning(value: boolean | cdktn.IResolvable) {
    this._acceptBucketWarning = value;
  }
  public resetAcceptBucketWarning() {
    this._acceptBucketWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptBucketWarningInput() {
    return this._acceptBucketWarning;
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // client_token - computed: true, optional: true, required: false
  private _clientToken?: string; 
  public get clientToken() {
    return this.getStringAttribute('client_token');
  }
  public set clientToken(value: string) {
    this._clientToken = value;
  }
  public resetClientToken() {
    this._clientToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTokenInput() {
    return this._clientToken;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // file_system_arn - computed: true, optional: false, required: false
  public get fileSystemArn() {
    return this.getStringAttribute('file_system_arn');
  }

  // file_system_id - computed: true, optional: false, required: false
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // synchronization_configuration - computed: true, optional: true, required: false
  private _synchronizationConfiguration = new S3FilesFileSystemSynchronizationConfigurationOutputReference(this, "synchronization_configuration");
  public get synchronizationConfiguration() {
    return this._synchronizationConfiguration;
  }
  public putSynchronizationConfiguration(value: S3FilesFileSystemSynchronizationConfiguration) {
    this._synchronizationConfiguration.internalValue = value;
  }
  public resetSynchronizationConfiguration() {
    this._synchronizationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synchronizationConfigurationInput() {
    return this._synchronizationConfiguration.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new S3FilesFileSystemTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: S3FilesFileSystemTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept_bucket_warning: cdktn.booleanToTerraform(this._acceptBucketWarning),
      bucket: cdktn.stringToTerraform(this._bucket),
      client_token: cdktn.stringToTerraform(this._clientToken),
      kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
      prefix: cdktn.stringToTerraform(this._prefix),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      synchronization_configuration: s3FilesFileSystemSynchronizationConfigurationToTerraform(this._synchronizationConfiguration.internalValue),
      tags: cdktn.listMapper(s3FilesFileSystemTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accept_bucket_warning: {
        value: cdktn.booleanToHclTerraform(this._acceptBucketWarning),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bucket: {
        value: cdktn.stringToHclTerraform(this._bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_token: {
        value: cdktn.stringToHclTerraform(this._clientToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_id: {
        value: cdktn.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix: {
        value: cdktn.stringToHclTerraform(this._prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      synchronization_configuration: {
        value: s3FilesFileSystemSynchronizationConfigurationToHclTerraform(this._synchronizationConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3FilesFileSystemSynchronizationConfiguration",
      },
      tags: {
        value: cdktn.listMapperHcl(s3FilesFileSystemTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "S3FilesFileSystemTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
