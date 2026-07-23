// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/datasync_location_fsx_windows
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DatasyncLocationFsxWindowsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/datasync_location_fsx_windows#cmk_secret_config DatasyncLocationFsxWindows#cmk_secret_config}
  */
  readonly cmkSecretConfig?: DatasyncLocationFsxWindowsCmkSecretConfig;
  /**
  * Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/datasync_location_fsx_windows#custom_secret_config DatasyncLocationFsxWindows#custom_secret_config}
  */
  readonly customSecretConfig?: DatasyncLocationFsxWindowsCustomSecretConfig;
  /**
  * The name of the Windows domain that the FSx for Windows server belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/datasync_location_fsx_windows#domain DatasyncLocationFsxWindows#domain}
  */
  readonly domain?: string;
  /**
  * The Amazon Resource Name (ARN) for the FSx for Windows file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/datasync_location_fsx_windows#fsx_filesystem_arn DatasyncLocationFsxWindows#fsx_filesystem_arn}
  */
  readonly fsxFilesystemArn?: string;
  /**
  * The password of the user who has the permissions to access files and folders in the FSx for Windows file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/datasync_location_fsx_windows#password DatasyncLocationFsxWindows#password}
  */
  readonly password?: string;
  /**
  * The ARNs of the security groups that are to use to configure the FSx for Windows file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/datasync_location_fsx_windows#security_group_arns DatasyncLocationFsxWindows#security_group_arns}
  */
  readonly securityGroupArns: string[];
  /**
  * A subdirectory in the location's path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/datasync_location_fsx_windows#subdirectory DatasyncLocationFsxWindows#subdirectory}
  */
  readonly subdirectory?: string;
  /**
  * An array of key-value pairs to apply to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/datasync_location_fsx_windows#tags DatasyncLocationFsxWindows#tags}
  */
  readonly tags?: DatasyncLocationFsxWindowsTags[] | cdktn.IResolvable;
  /**
  * The user who has the permissions to access files and folders in the FSx for Windows file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/datasync_location_fsx_windows#user DatasyncLocationFsxWindows#user}
  */
  readonly user: string;
}
export interface DatasyncLocationFsxWindowsCmkSecretConfig {
  /**
  * Specifies the ARN for the customer-managed AWS KMS key used to encrypt the secret specified for SecretArn. DataSync provides this key to AWS Secrets Manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/datasync_location_fsx_windows#kms_key_arn DatasyncLocationFsxWindows#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
}

export function datasyncLocationFsxWindowsCmkSecretConfigToTerraform(struct?: DatasyncLocationFsxWindowsCmkSecretConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
  }
}


export function datasyncLocationFsxWindowsCmkSecretConfigToHclTerraform(struct?: DatasyncLocationFsxWindowsCmkSecretConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasyncLocationFsxWindowsCmkSecretConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatasyncLocationFsxWindowsCmkSecretConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasyncLocationFsxWindowsCmkSecretConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyArn = value.kmsKeyArn;
    }
  }

  // kms_key_arn - computed: true, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
}
export interface DatasyncLocationFsxWindowsCustomSecretConfig {
  /**
  * Specifies the ARN for the AWS Identity and Access Management role that DataSync uses to access the secret specified for SecretArn.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/datasync_location_fsx_windows#secret_access_role_arn DatasyncLocationFsxWindows#secret_access_role_arn}
  */
  readonly secretAccessRoleArn?: string;
  /**
  * Specifies the ARN for a customer created AWS Secrets Manager secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/datasync_location_fsx_windows#secret_arn DatasyncLocationFsxWindows#secret_arn}
  */
  readonly secretArn?: string;
}

export function datasyncLocationFsxWindowsCustomSecretConfigToTerraform(struct?: DatasyncLocationFsxWindowsCustomSecretConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret_access_role_arn: cdktn.stringToTerraform(struct!.secretAccessRoleArn),
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
  }
}


export function datasyncLocationFsxWindowsCustomSecretConfigToHclTerraform(struct?: DatasyncLocationFsxWindowsCustomSecretConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    secret_access_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretAccessRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasyncLocationFsxWindowsCustomSecretConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatasyncLocationFsxWindowsCustomSecretConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretAccessRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessRoleArn = this._secretAccessRoleArn;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasyncLocationFsxWindowsCustomSecretConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretAccessRoleArn = undefined;
      this._secretArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretAccessRoleArn = value.secretAccessRoleArn;
      this._secretArn = value.secretArn;
    }
  }

  // secret_access_role_arn - computed: true, optional: true, required: false
  private _secretAccessRoleArn?: string; 
  public get secretAccessRoleArn() {
    return this.getStringAttribute('secret_access_role_arn');
  }
  public set secretAccessRoleArn(value: string) {
    this._secretAccessRoleArn = value;
  }
  public resetSecretAccessRoleArn() {
    this._secretAccessRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessRoleArnInput() {
    return this._secretAccessRoleArn;
  }

  // secret_arn - computed: true, optional: true, required: false
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }
}
export interface DatasyncLocationFsxWindowsManagedSecretConfig {
}

export function datasyncLocationFsxWindowsManagedSecretConfigToTerraform(struct?: DatasyncLocationFsxWindowsManagedSecretConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function datasyncLocationFsxWindowsManagedSecretConfigToHclTerraform(struct?: DatasyncLocationFsxWindowsManagedSecretConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DatasyncLocationFsxWindowsManagedSecretConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatasyncLocationFsxWindowsManagedSecretConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasyncLocationFsxWindowsManagedSecretConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
}
export interface DatasyncLocationFsxWindowsTags {
  /**
  * The key for an AWS resource tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/datasync_location_fsx_windows#key DatasyncLocationFsxWindows#key}
  */
  readonly key?: string;
  /**
  * The value for an AWS resource tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/datasync_location_fsx_windows#value DatasyncLocationFsxWindows#value}
  */
  readonly value?: string;
}

export function datasyncLocationFsxWindowsTagsToTerraform(struct?: DatasyncLocationFsxWindowsTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function datasyncLocationFsxWindowsTagsToHclTerraform(struct?: DatasyncLocationFsxWindowsTags | cdktn.IResolvable): any {
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

export class DatasyncLocationFsxWindowsTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatasyncLocationFsxWindowsTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DatasyncLocationFsxWindowsTags | cdktn.IResolvable | undefined) {
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

export class DatasyncLocationFsxWindowsTagsList extends cdktn.ComplexList {
  public internalValue? : DatasyncLocationFsxWindowsTags[] | cdktn.IResolvable

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
  public get(index: number): DatasyncLocationFsxWindowsTagsOutputReference {
    return new DatasyncLocationFsxWindowsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/datasync_location_fsx_windows awscc_datasync_location_fsx_windows}
*/
export class DatasyncLocationFsxWindows extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_datasync_location_fsx_windows";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DatasyncLocationFsxWindows resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatasyncLocationFsxWindows to import
  * @param importFromId The id of the existing DatasyncLocationFsxWindows that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/datasync_location_fsx_windows#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatasyncLocationFsxWindows to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datasync_location_fsx_windows", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/datasync_location_fsx_windows awscc_datasync_location_fsx_windows} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatasyncLocationFsxWindowsConfig
  */
  public constructor(scope: Construct, id: string, config: DatasyncLocationFsxWindowsConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_datasync_location_fsx_windows',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.94.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cmkSecretConfig.internalValue = config.cmkSecretConfig;
    this._customSecretConfig.internalValue = config.customSecretConfig;
    this._domain = config.domain;
    this._fsxFilesystemArn = config.fsxFilesystemArn;
    this._password = config.password;
    this._securityGroupArns = config.securityGroupArns;
    this._subdirectory = config.subdirectory;
    this._tags.internalValue = config.tags;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cmk_secret_config - computed: true, optional: true, required: false
  private _cmkSecretConfig = new DatasyncLocationFsxWindowsCmkSecretConfigOutputReference(this, "cmk_secret_config");
  public get cmkSecretConfig() {
    return this._cmkSecretConfig;
  }
  public putCmkSecretConfig(value: DatasyncLocationFsxWindowsCmkSecretConfig) {
    this._cmkSecretConfig.internalValue = value;
  }
  public resetCmkSecretConfig() {
    this._cmkSecretConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmkSecretConfigInput() {
    return this._cmkSecretConfig.internalValue;
  }

  // custom_secret_config - computed: true, optional: true, required: false
  private _customSecretConfig = new DatasyncLocationFsxWindowsCustomSecretConfigOutputReference(this, "custom_secret_config");
  public get customSecretConfig() {
    return this._customSecretConfig;
  }
  public putCustomSecretConfig(value: DatasyncLocationFsxWindowsCustomSecretConfig) {
    this._customSecretConfig.internalValue = value;
  }
  public resetCustomSecretConfig() {
    this._customSecretConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSecretConfigInput() {
    return this._customSecretConfig.internalValue;
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // fsx_filesystem_arn - computed: true, optional: true, required: false
  private _fsxFilesystemArn?: string; 
  public get fsxFilesystemArn() {
    return this.getStringAttribute('fsx_filesystem_arn');
  }
  public set fsxFilesystemArn(value: string) {
    this._fsxFilesystemArn = value;
  }
  public resetFsxFilesystemArn() {
    this._fsxFilesystemArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsxFilesystemArnInput() {
    return this._fsxFilesystemArn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location_arn - computed: true, optional: false, required: false
  public get locationArn() {
    return this.getStringAttribute('location_arn');
  }

  // location_uri - computed: true, optional: false, required: false
  public get locationUri() {
    return this.getStringAttribute('location_uri');
  }

  // managed_secret_config - computed: true, optional: false, required: false
  private _managedSecretConfig = new DatasyncLocationFsxWindowsManagedSecretConfigOutputReference(this, "managed_secret_config");
  public get managedSecretConfig() {
    return this._managedSecretConfig;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // security_group_arns - computed: false, optional: false, required: true
  private _securityGroupArns?: string[]; 
  public get securityGroupArns() {
    return this.getListAttribute('security_group_arns');
  }
  public set securityGroupArns(value: string[]) {
    this._securityGroupArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupArnsInput() {
    return this._securityGroupArns;
  }

  // subdirectory - computed: true, optional: true, required: false
  private _subdirectory?: string; 
  public get subdirectory() {
    return this.getStringAttribute('subdirectory');
  }
  public set subdirectory(value: string) {
    this._subdirectory = value;
  }
  public resetSubdirectory() {
    this._subdirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subdirectoryInput() {
    return this._subdirectory;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new DatasyncLocationFsxWindowsTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DatasyncLocationFsxWindowsTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cmk_secret_config: datasyncLocationFsxWindowsCmkSecretConfigToTerraform(this._cmkSecretConfig.internalValue),
      custom_secret_config: datasyncLocationFsxWindowsCustomSecretConfigToTerraform(this._customSecretConfig.internalValue),
      domain: cdktn.stringToTerraform(this._domain),
      fsx_filesystem_arn: cdktn.stringToTerraform(this._fsxFilesystemArn),
      password: cdktn.stringToTerraform(this._password),
      security_group_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._securityGroupArns),
      subdirectory: cdktn.stringToTerraform(this._subdirectory),
      tags: cdktn.listMapper(datasyncLocationFsxWindowsTagsToTerraform, false)(this._tags.internalValue),
      user: cdktn.stringToTerraform(this._user),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cmk_secret_config: {
        value: datasyncLocationFsxWindowsCmkSecretConfigToHclTerraform(this._cmkSecretConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatasyncLocationFsxWindowsCmkSecretConfig",
      },
      custom_secret_config: {
        value: datasyncLocationFsxWindowsCustomSecretConfigToHclTerraform(this._customSecretConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatasyncLocationFsxWindowsCustomSecretConfig",
      },
      domain: {
        value: cdktn.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fsx_filesystem_arn: {
        value: cdktn.stringToHclTerraform(this._fsxFilesystemArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktn.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_arns: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._securityGroupArns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      subdirectory: {
        value: cdktn.stringToHclTerraform(this._subdirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(datasyncLocationFsxWindowsTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DatasyncLocationFsxWindowsTagsList",
      },
      user: {
        value: cdktn.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
