// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_partner_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SagemakerPartnerAppConfig extends cdktn.TerraformMetaArguments {
  /**
  * The version of the PartnerApp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_partner_app#app_version SagemakerPartnerApp#app_version}
  */
  readonly appVersion?: string;
  /**
  * A collection of settings that specify the maintenance schedule for the PartnerApp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_partner_app#application_config SagemakerPartnerApp#application_config}
  */
  readonly applicationConfig?: SagemakerPartnerAppApplicationConfig;
  /**
  * The Auth type of PartnerApp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_partner_app#auth_type SagemakerPartnerApp#auth_type}
  */
  readonly authType: string;
  /**
  * The client token for the PartnerApp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_partner_app#client_token SagemakerPartnerApp#client_token}
  */
  readonly clientToken?: string;
  /**
  * Enables automatic minor version upgrades for the PartnerApp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_partner_app#enable_auto_minor_version_upgrade SagemakerPartnerApp#enable_auto_minor_version_upgrade}
  */
  readonly enableAutoMinorVersionUpgrade?: boolean | cdktn.IResolvable;
  /**
  * Enables IAM Session based Identity for PartnerApp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_partner_app#enable_iam_session_based_identity SagemakerPartnerApp#enable_iam_session_based_identity}
  */
  readonly enableIamSessionBasedIdentity?: boolean | cdktn.IResolvable;
  /**
  * The execution role for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_partner_app#execution_role_arn SagemakerPartnerApp#execution_role_arn}
  */
  readonly executionRoleArn: string;
  /**
  * The AWS KMS customer managed key used to encrypt the data associated with the PartnerApp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_partner_app#kms_key_id SagemakerPartnerApp#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * A collection of settings that specify the maintenance schedule for the PartnerApp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_partner_app#maintenance_config SagemakerPartnerApp#maintenance_config}
  */
  readonly maintenanceConfig?: SagemakerPartnerAppMaintenanceConfig;
  /**
  * A name for the PartnerApp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_partner_app#name SagemakerPartnerApp#name}
  */
  readonly name: string;
  /**
  * A list of tags to apply to the PartnerApp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_partner_app#tags SagemakerPartnerApp#tags}
  */
  readonly tags?: SagemakerPartnerAppTags[] | cdktn.IResolvable;
  /**
  * The tier of the PartnerApp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_partner_app#tier SagemakerPartnerApp#tier}
  */
  readonly tier: string;
  /**
  * The type of PartnerApp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_partner_app#type SagemakerPartnerApp#type}
  */
  readonly type: string;
}
export interface SagemakerPartnerAppApplicationConfig {
  /**
  * A list of users with administrator privileges for the PartnerApp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_partner_app#admin_users SagemakerPartnerApp#admin_users}
  */
  readonly adminUsers?: string[];
  /**
  * A list of arguments to pass to the PartnerApp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_partner_app#arguments SagemakerPartnerApp#arguments}
  */
  readonly arguments?: { [key: string]: string };
}

export function sagemakerPartnerAppApplicationConfigToTerraform(struct?: SagemakerPartnerAppApplicationConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    admin_users: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.adminUsers),
    arguments: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.arguments),
  }
}


export function sagemakerPartnerAppApplicationConfigToHclTerraform(struct?: SagemakerPartnerAppApplicationConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    admin_users: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.adminUsers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    arguments: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.arguments),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerPartnerAppApplicationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerPartnerAppApplicationConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUsers = this._adminUsers;
    }
    if (this._arguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.arguments = this._arguments;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerPartnerAppApplicationConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminUsers = undefined;
      this._arguments = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminUsers = value.adminUsers;
      this._arguments = value.arguments;
    }
  }

  // admin_users - computed: true, optional: true, required: false
  private _adminUsers?: string[]; 
  public get adminUsers() {
    return cdktn.Fn.tolist(this.getListAttribute('admin_users'));
  }
  public set adminUsers(value: string[]) {
    this._adminUsers = value;
  }
  public resetAdminUsers() {
    this._adminUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsersInput() {
    return this._adminUsers;
  }

  // arguments - computed: true, optional: true, required: false
  private _arguments?: { [key: string]: string }; 
  public get arguments() {
    return this.getStringMapAttribute('arguments');
  }
  public set arguments(value: { [key: string]: string }) {
    this._arguments = value;
  }
  public resetArguments() {
    this._arguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsInput() {
    return this._arguments;
  }
}
export interface SagemakerPartnerAppMaintenanceConfig {
  /**
  * The maintenance window start day and time for the PartnerApp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_partner_app#maintenance_window_start SagemakerPartnerApp#maintenance_window_start}
  */
  readonly maintenanceWindowStart?: string;
}

export function sagemakerPartnerAppMaintenanceConfigToTerraform(struct?: SagemakerPartnerAppMaintenanceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    maintenance_window_start: cdktn.stringToTerraform(struct!.maintenanceWindowStart),
  }
}


export function sagemakerPartnerAppMaintenanceConfigToHclTerraform(struct?: SagemakerPartnerAppMaintenanceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    maintenance_window_start: {
      value: cdktn.stringToHclTerraform(struct!.maintenanceWindowStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerPartnerAppMaintenanceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerPartnerAppMaintenanceConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maintenanceWindowStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindowStart = this._maintenanceWindowStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerPartnerAppMaintenanceConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maintenanceWindowStart = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maintenanceWindowStart = value.maintenanceWindowStart;
    }
  }

  // maintenance_window_start - computed: true, optional: true, required: false
  private _maintenanceWindowStart?: string; 
  public get maintenanceWindowStart() {
    return this.getStringAttribute('maintenance_window_start');
  }
  public set maintenanceWindowStart(value: string) {
    this._maintenanceWindowStart = value;
  }
  public resetMaintenanceWindowStart() {
    this._maintenanceWindowStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowStartInput() {
    return this._maintenanceWindowStart;
  }
}
export interface SagemakerPartnerAppTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_partner_app#key SagemakerPartnerApp#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_partner_app#value SagemakerPartnerApp#value}
  */
  readonly value?: string;
}

export function sagemakerPartnerAppTagsToTerraform(struct?: SagemakerPartnerAppTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function sagemakerPartnerAppTagsToHclTerraform(struct?: SagemakerPartnerAppTags | cdktn.IResolvable): any {
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

export class SagemakerPartnerAppTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerPartnerAppTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerPartnerAppTags | cdktn.IResolvable | undefined) {
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

export class SagemakerPartnerAppTagsList extends cdktn.ComplexList {
  public internalValue? : SagemakerPartnerAppTags[] | cdktn.IResolvable

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
  public get(index: number): SagemakerPartnerAppTagsOutputReference {
    return new SagemakerPartnerAppTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_partner_app awscc_sagemaker_partner_app}
*/
export class SagemakerPartnerApp extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_sagemaker_partner_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SagemakerPartnerApp resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerPartnerApp to import
  * @param importFromId The id of the existing SagemakerPartnerApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_partner_app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerPartnerApp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_partner_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_partner_app awscc_sagemaker_partner_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerPartnerAppConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerPartnerAppConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_partner_app',
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
    this._appVersion = config.appVersion;
    this._applicationConfig.internalValue = config.applicationConfig;
    this._authType = config.authType;
    this._clientToken = config.clientToken;
    this._enableAutoMinorVersionUpgrade = config.enableAutoMinorVersionUpgrade;
    this._enableIamSessionBasedIdentity = config.enableIamSessionBasedIdentity;
    this._executionRoleArn = config.executionRoleArn;
    this._kmsKeyId = config.kmsKeyId;
    this._maintenanceConfig.internalValue = config.maintenanceConfig;
    this._name = config.name;
    this._tags.internalValue = config.tags;
    this._tier = config.tier;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_version - computed: true, optional: true, required: false
  private _appVersion?: string; 
  public get appVersion() {
    return this.getStringAttribute('app_version');
  }
  public set appVersion(value: string) {
    this._appVersion = value;
  }
  public resetAppVersion() {
    this._appVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appVersionInput() {
    return this._appVersion;
  }

  // application_config - computed: true, optional: true, required: false
  private _applicationConfig = new SagemakerPartnerAppApplicationConfigOutputReference(this, "application_config");
  public get applicationConfig() {
    return this._applicationConfig;
  }
  public putApplicationConfig(value: SagemakerPartnerAppApplicationConfig) {
    this._applicationConfig.internalValue = value;
  }
  public resetApplicationConfig() {
    this._applicationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationConfigInput() {
    return this._applicationConfig.internalValue;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auth_type - computed: false, optional: false, required: true
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // base_url - computed: true, optional: false, required: false
  public get baseUrl() {
    return this.getStringAttribute('base_url');
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

  // current_version_eol_date - computed: true, optional: false, required: false
  public get currentVersionEolDate() {
    return this.getStringAttribute('current_version_eol_date');
  }

  // enable_auto_minor_version_upgrade - computed: true, optional: true, required: false
  private _enableAutoMinorVersionUpgrade?: boolean | cdktn.IResolvable; 
  public get enableAutoMinorVersionUpgrade() {
    return this.getBooleanAttribute('enable_auto_minor_version_upgrade');
  }
  public set enableAutoMinorVersionUpgrade(value: boolean | cdktn.IResolvable) {
    this._enableAutoMinorVersionUpgrade = value;
  }
  public resetEnableAutoMinorVersionUpgrade() {
    this._enableAutoMinorVersionUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoMinorVersionUpgradeInput() {
    return this._enableAutoMinorVersionUpgrade;
  }

  // enable_iam_session_based_identity - computed: true, optional: true, required: false
  private _enableIamSessionBasedIdentity?: boolean | cdktn.IResolvable; 
  public get enableIamSessionBasedIdentity() {
    return this.getBooleanAttribute('enable_iam_session_based_identity');
  }
  public set enableIamSessionBasedIdentity(value: boolean | cdktn.IResolvable) {
    this._enableIamSessionBasedIdentity = value;
  }
  public resetEnableIamSessionBasedIdentity() {
    this._enableIamSessionBasedIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIamSessionBasedIdentityInput() {
    return this._enableIamSessionBasedIdentity;
  }

  // execution_role_arn - computed: false, optional: false, required: true
  private _executionRoleArn?: string; 
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn;
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

  // maintenance_config - computed: true, optional: true, required: false
  private _maintenanceConfig = new SagemakerPartnerAppMaintenanceConfigOutputReference(this, "maintenance_config");
  public get maintenanceConfig() {
    return this._maintenanceConfig;
  }
  public putMaintenanceConfig(value: SagemakerPartnerAppMaintenanceConfig) {
    this._maintenanceConfig.internalValue = value;
  }
  public resetMaintenanceConfig() {
    this._maintenanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceConfigInput() {
    return this._maintenanceConfig.internalValue;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new SagemakerPartnerAppTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: SagemakerPartnerAppTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // tier - computed: false, optional: false, required: true
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_version: cdktn.stringToTerraform(this._appVersion),
      application_config: sagemakerPartnerAppApplicationConfigToTerraform(this._applicationConfig.internalValue),
      auth_type: cdktn.stringToTerraform(this._authType),
      client_token: cdktn.stringToTerraform(this._clientToken),
      enable_auto_minor_version_upgrade: cdktn.booleanToTerraform(this._enableAutoMinorVersionUpgrade),
      enable_iam_session_based_identity: cdktn.booleanToTerraform(this._enableIamSessionBasedIdentity),
      execution_role_arn: cdktn.stringToTerraform(this._executionRoleArn),
      kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
      maintenance_config: sagemakerPartnerAppMaintenanceConfigToTerraform(this._maintenanceConfig.internalValue),
      name: cdktn.stringToTerraform(this._name),
      tags: cdktn.listMapper(sagemakerPartnerAppTagsToTerraform, false)(this._tags.internalValue),
      tier: cdktn.stringToTerraform(this._tier),
      type: cdktn.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_version: {
        value: cdktn.stringToHclTerraform(this._appVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_config: {
        value: sagemakerPartnerAppApplicationConfigToHclTerraform(this._applicationConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerPartnerAppApplicationConfig",
      },
      auth_type: {
        value: cdktn.stringToHclTerraform(this._authType),
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
      enable_auto_minor_version_upgrade: {
        value: cdktn.booleanToHclTerraform(this._enableAutoMinorVersionUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_iam_session_based_identity: {
        value: cdktn.booleanToHclTerraform(this._enableIamSessionBasedIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      execution_role_arn: {
        value: cdktn.stringToHclTerraform(this._executionRoleArn),
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
      maintenance_config: {
        value: sagemakerPartnerAppMaintenanceConfigToHclTerraform(this._maintenanceConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerPartnerAppMaintenanceConfig",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(sagemakerPartnerAppTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerPartnerAppTagsList",
      },
      tier: {
        value: cdktn.stringToHclTerraform(this._tier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
