// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SagemakerDomainConfig extends cdktn.TerraformMetaArguments {
  /**
  * Specifies the VPC used for non-EFS traffic. The default value is PublicInternetOnly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#app_network_access_type SagemakerDomain#app_network_access_type}
  */
  readonly appNetworkAccessType?: string;
  /**
  * The entity that creates and manages the required security groups for inter-app communication in VPCOnly mode. Required when CreateDomain.AppNetworkAccessType is VPCOnly and DomainSettings.RStudioServerProDomainSettings.DomainExecutionRoleArn is provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#app_security_group_management SagemakerDomain#app_security_group_management}
  */
  readonly appSecurityGroupManagement?: string;
  /**
  * The mode of authentication that members use to access the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#auth_mode SagemakerDomain#auth_mode}
  */
  readonly authMode: string;
  /**
  * The default space settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#default_space_settings SagemakerDomain#default_space_settings}
  */
  readonly defaultSpaceSettings?: SagemakerDomainDefaultSpaceSettings;
  /**
  * The default user settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#default_user_settings SagemakerDomain#default_user_settings}
  */
  readonly defaultUserSettings: SagemakerDomainDefaultUserSettings;
  /**
  * A name for the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#domain_name SagemakerDomain#domain_name}
  */
  readonly domainName: string;
  /**
  * A collection of Domain settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#domain_settings SagemakerDomain#domain_settings}
  */
  readonly domainSettings?: SagemakerDomainDomainSettings;
  /**
  * Indicates whether a home EFS file system is created for the domain. Set to Disabled to skip EFS creation and reduce domain creation time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#home_efs_file_system_creation SagemakerDomain#home_efs_file_system_creation}
  */
  readonly homeEfsFileSystemCreation?: string;
  /**
  * SageMaker uses AWS KMS to encrypt the EFS volume attached to the domain with an AWS managed customer master key (CMK) by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#kms_key_id SagemakerDomain#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * The VPC subnets that Studio uses for communication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#subnet_ids SagemakerDomain#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * Indicates whether the tags added to Domain, User Profile and Space entity is propagated to all SageMaker resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#tag_propagation SagemakerDomain#tag_propagation}
  */
  readonly tagPropagation?: string;
  /**
  * A list of tags to apply to the user profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#tags SagemakerDomain#tags}
  */
  readonly tags?: SagemakerDomainTags[] | cdktn.IResolvable;
  /**
  * The ID of the Amazon Virtual Private Cloud (VPC) that Studio uses for communication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#vpc_id SagemakerDomain#vpc_id}
  */
  readonly vpcId?: string;
}
export interface SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsEfsFileSystemConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#file_system_id SagemakerDomain#file_system_id}
  */
  readonly fileSystemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#file_system_path SagemakerDomain#file_system_path}
  */
  readonly fileSystemPath?: string;
}

export function sagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsEfsFileSystemConfigToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsEfsFileSystemConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_system_id: cdktn.stringToTerraform(struct!.fileSystemId),
    file_system_path: cdktn.stringToTerraform(struct!.fileSystemPath),
  }
}


export function sagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsEfsFileSystemConfigToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsEfsFileSystemConfig | cdktn.IResolvable): any {
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

export class SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsEfsFileSystemConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsEfsFileSystemConfig | cdktn.IResolvable | undefined) {
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
export interface SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#file_system_id SagemakerDomain#file_system_id}
  */
  readonly fileSystemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#file_system_path SagemakerDomain#file_system_path}
  */
  readonly fileSystemPath?: string;
}

export function sagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_system_id: cdktn.stringToTerraform(struct!.fileSystemId),
    file_system_path: cdktn.stringToTerraform(struct!.fileSystemPath),
  }
}


export function sagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig | cdktn.IResolvable): any {
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

export class SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig | cdktn.IResolvable | undefined) {
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
export interface SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsS3FileSystemConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#mount_path SagemakerDomain#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#s3_uri SagemakerDomain#s3_uri}
  */
  readonly s3Uri?: string;
}

export function sagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsS3FileSystemConfigToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsS3FileSystemConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mount_path: cdktn.stringToTerraform(struct!.mountPath),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function sagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsS3FileSystemConfigToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsS3FileSystemConfig | cdktn.IResolvable): any {
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

export class SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsS3FileSystemConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsS3FileSystemConfig | cdktn.IResolvable | undefined) {
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
export interface SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#efs_file_system_config SagemakerDomain#efs_file_system_config}
  */
  readonly efsFileSystemConfig?: SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsEfsFileSystemConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#fsx_lustre_file_system_config SagemakerDomain#fsx_lustre_file_system_config}
  */
  readonly fsxLustreFileSystemConfig?: SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#s3_file_system_config SagemakerDomain#s3_file_system_config}
  */
  readonly s3FileSystemConfig?: SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsS3FileSystemConfig;
}

export function sagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    efs_file_system_config: sagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsEfsFileSystemConfigToTerraform(struct!.efsFileSystemConfig),
    fsx_lustre_file_system_config: sagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigToTerraform(struct!.fsxLustreFileSystemConfig),
    s3_file_system_config: sagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsS3FileSystemConfigToTerraform(struct!.s3FileSystemConfig),
  }
}


export function sagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    efs_file_system_config: {
      value: sagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsEfsFileSystemConfigToHclTerraform(struct!.efsFileSystemConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsEfsFileSystemConfig",
    },
    fsx_lustre_file_system_config: {
      value: sagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigToHclTerraform(struct!.fsxLustreFileSystemConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig",
    },
    s3_file_system_config: {
      value: sagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsS3FileSystemConfigToHclTerraform(struct!.s3FileSystemConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsS3FileSystemConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigs | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigs | cdktn.IResolvable | undefined) {
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
  private _efsFileSystemConfig = new SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference(this, "efs_file_system_config");
  public get efsFileSystemConfig() {
    return this._efsFileSystemConfig;
  }
  public putEfsFileSystemConfig(value: SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsEfsFileSystemConfig) {
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
  private _fsxLustreFileSystemConfig = new SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference(this, "fsx_lustre_file_system_config");
  public get fsxLustreFileSystemConfig() {
    return this._fsxLustreFileSystemConfig;
  }
  public putFsxLustreFileSystemConfig(value: SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig) {
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
  private _s3FileSystemConfig = new SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference(this, "s3_file_system_config");
  public get s3FileSystemConfig() {
    return this._s3FileSystemConfig;
  }
  public putS3FileSystemConfig(value: SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsS3FileSystemConfig) {
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

export class SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsList extends cdktn.ComplexList {
  public internalValue? : SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigs[] | cdktn.IResolvable

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
  public get(index: number): SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsOutputReference {
    return new SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerDomainDefaultSpaceSettingsCustomPosixUserConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#gid SagemakerDomain#gid}
  */
  readonly gid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#uid SagemakerDomain#uid}
  */
  readonly uid?: number;
}

export function sagemakerDomainDefaultSpaceSettingsCustomPosixUserConfigToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsCustomPosixUserConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    gid: cdktn.numberToTerraform(struct!.gid),
    uid: cdktn.numberToTerraform(struct!.uid),
  }
}


export function sagemakerDomainDefaultSpaceSettingsCustomPosixUserConfigToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsCustomPosixUserConfig | cdktn.IResolvable): any {
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

export class SagemakerDomainDefaultSpaceSettingsCustomPosixUserConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDefaultSpaceSettingsCustomPosixUserConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDomainDefaultSpaceSettingsCustomPosixUserConfig | cdktn.IResolvable | undefined) {
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
export interface SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings {
  /**
  * The idle timeout value set in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#idle_timeout_in_minutes SagemakerDomain#idle_timeout_in_minutes}
  */
  readonly idleTimeoutInMinutes?: number;
  /**
  * A flag to enable/disable AppLifecycleManagement settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#lifecycle_management SagemakerDomain#lifecycle_management}
  */
  readonly lifecycleManagement?: string;
  /**
  * The maximum idle timeout value set in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#max_idle_timeout_in_minutes SagemakerDomain#max_idle_timeout_in_minutes}
  */
  readonly maxIdleTimeoutInMinutes?: number;
  /**
  * The minimum idle timeout value set in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#min_idle_timeout_in_minutes SagemakerDomain#min_idle_timeout_in_minutes}
  */
  readonly minIdleTimeoutInMinutes?: number;
}

export function sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings | cdktn.IResolvable): any {
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


export function sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings | cdktn.IResolvable): any {
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

export class SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings | cdktn.IResolvable | undefined) {
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
export interface SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#idle_settings SagemakerDomain#idle_settings}
  */
  readonly idleSettings?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings;
}

export function sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    idle_settings: sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsToTerraform(struct!.idleSettings),
  }
}


export function sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    idle_settings: {
      value: sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsToHclTerraform(struct!.idleSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement | cdktn.IResolvable | undefined) {
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
  private _idleSettings = new SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference(this, "idle_settings");
  public get idleSettings() {
    return this._idleSettings;
  }
  public putIdleSettings(value: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings) {
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
export interface SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositories {
  /**
  * A CodeRepository (valid URL) to be used within Jupyter's Git extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#repository_url SagemakerDomain#repository_url}
  */
  readonly repositoryUrl?: string;
}

export function sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoriesToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositories | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    repository_url: cdktn.stringToTerraform(struct!.repositoryUrl),
  }
}


export function sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoriesToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositories | cdktn.IResolvable): any {
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

export class SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositories | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositories | cdktn.IResolvable | undefined) {
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

export class SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList extends cdktn.ComplexList {
  public internalValue? : SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositories[] | cdktn.IResolvable

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
  public get(index: number): SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference {
    return new SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImages {
  /**
  * The Name of the AppImageConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#app_image_config_name SagemakerDomain#app_image_config_name}
  */
  readonly appImageConfigName?: string;
  /**
  * The name of the CustomImage. Must be unique to your account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#image_name SagemakerDomain#image_name}
  */
  readonly imageName?: string;
  /**
  * The version number of the CustomImage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#image_version_number SagemakerDomain#image_version_number}
  */
  readonly imageVersionNumber?: number;
}

export function sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImagesToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImages | cdktn.IResolvable): any {
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


export function sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImagesToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImages | cdktn.IResolvable): any {
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

export class SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImagesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImages | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImages | cdktn.IResolvable | undefined) {
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

export class SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImagesList extends cdktn.ComplexList {
  public internalValue? : SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImages[] | cdktn.IResolvable

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
  public get(index: number): SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImagesOutputReference {
    return new SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec {
  /**
  * The instance type that the image version runs on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#instance_type SagemakerDomain#instance_type}
  */
  readonly instanceType?: string;
  /**
  * The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * The Amazon Resource Name (ARN) of the SageMaker image that the image version belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#sage_maker_image_arn SagemakerDomain#sage_maker_image_arn}
  */
  readonly sageMakerImageArn?: string;
  /**
  * The Amazon Resource Name (ARN) of the image version created on the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#sage_maker_image_version_arn SagemakerDomain#sage_maker_image_version_arn}
  */
  readonly sageMakerImageVersionArn?: string;
  /**
  * The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#training_plan_arn SagemakerDomain#training_plan_arn}
  */
  readonly trainingPlanArn?: string;
}

export function sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktn.stringToTerraform(struct!.lifecycleConfigArn),
    sage_maker_image_arn: cdktn.stringToTerraform(struct!.sageMakerImageArn),
    sage_maker_image_version_arn: cdktn.stringToTerraform(struct!.sageMakerImageVersionArn),
    training_plan_arn: cdktn.stringToTerraform(struct!.trainingPlanArn),
  }
}


export function sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec | cdktn.IResolvable): any {
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
    training_plan_arn: {
      value: cdktn.stringToHclTerraform(struct!.trainingPlanArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec | cdktn.IResolvable | undefined {
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
    if (this._trainingPlanArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingPlanArn = this._trainingPlanArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sageMakerImageArn = undefined;
      this._sageMakerImageVersionArn = undefined;
      this._trainingPlanArn = undefined;
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
      this._trainingPlanArn = value.trainingPlanArn;
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

  // training_plan_arn - computed: true, optional: true, required: false
  private _trainingPlanArn?: string; 
  public get trainingPlanArn() {
    return this.getStringAttribute('training_plan_arn');
  }
  public set trainingPlanArn(value: string) {
    this._trainingPlanArn = value;
  }
  public resetTrainingPlanArn() {
    this._trainingPlanArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingPlanArnInput() {
    return this._trainingPlanArn;
  }
}
export interface SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#app_lifecycle_management SagemakerDomain#app_lifecycle_management}
  */
  readonly appLifecycleManagement?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement;
  /**
  * The lifecycle configuration that runs before the default lifecycle configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#built_in_lifecycle_config_arn SagemakerDomain#built_in_lifecycle_config_arn}
  */
  readonly builtInLifecycleConfigArn?: string;
  /**
  * A list of CodeRepositories available for use with JupyterLab apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#code_repositories SagemakerDomain#code_repositories}
  */
  readonly codeRepositories?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositories[] | cdktn.IResolvable;
  /**
  * A list of custom images for use for JupyterLab apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#custom_images SagemakerDomain#custom_images}
  */
  readonly customImages?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImages[] | cdktn.IResolvable;
  /**
  * The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the JupyterLab app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}
  */
  readonly defaultResourceSpec?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec;
  /**
  * A list of LifecycleConfigArns available for use with JupyterLab apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}
  */
  readonly lifecycleConfigArns?: string[];
}

export function sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    app_lifecycle_management: sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementToTerraform(struct!.appLifecycleManagement),
    built_in_lifecycle_config_arn: cdktn.stringToTerraform(struct!.builtInLifecycleConfigArn),
    code_repositories: cdktn.listMapper(sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoriesToTerraform, false)(struct!.codeRepositories),
    custom_images: cdktn.listMapper(sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImagesToTerraform, false)(struct!.customImages),
    default_resource_spec: sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
    lifecycle_config_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.lifecycleConfigArns),
  }
}


export function sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    app_lifecycle_management: {
      value: sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementToHclTerraform(struct!.appLifecycleManagement),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement",
    },
    built_in_lifecycle_config_arn: {
      value: cdktn.stringToHclTerraform(struct!.builtInLifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    code_repositories: {
      value: cdktn.listMapperHcl(sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoriesToHclTerraform, false)(struct!.codeRepositories),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList",
    },
    custom_images: {
      value: cdktn.listMapperHcl(sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImagesToHclTerraform, false)(struct!.customImages),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImagesList",
    },
    default_resource_spec: {
      value: sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec",
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

export class SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettings | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettings | cdktn.IResolvable | undefined) {
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
  private _appLifecycleManagement = new SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference(this, "app_lifecycle_management");
  public get appLifecycleManagement() {
    return this._appLifecycleManagement;
  }
  public putAppLifecycleManagement(value: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement) {
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
  private _codeRepositories = new SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList(this, "code_repositories", false);
  public get codeRepositories() {
    return this._codeRepositories;
  }
  public putCodeRepositories(value: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositories[] | cdktn.IResolvable) {
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
  private _customImages = new SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImagesList(this, "custom_images", false);
  public get customImages() {
    return this._customImages;
  }
  public putCustomImages(value: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImages[] | cdktn.IResolvable) {
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
  private _defaultResourceSpec = new SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec) {
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
export interface SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec {
  /**
  * The instance type that the image version runs on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#instance_type SagemakerDomain#instance_type}
  */
  readonly instanceType?: string;
  /**
  * The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * The Amazon Resource Name (ARN) of the SageMaker image that the image version belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#sage_maker_image_arn SagemakerDomain#sage_maker_image_arn}
  */
  readonly sageMakerImageArn?: string;
  /**
  * The Amazon Resource Name (ARN) of the image version created on the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#sage_maker_image_version_arn SagemakerDomain#sage_maker_image_version_arn}
  */
  readonly sageMakerImageVersionArn?: string;
  /**
  * The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#training_plan_arn SagemakerDomain#training_plan_arn}
  */
  readonly trainingPlanArn?: string;
}

export function sagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktn.stringToTerraform(struct!.lifecycleConfigArn),
    sage_maker_image_arn: cdktn.stringToTerraform(struct!.sageMakerImageArn),
    sage_maker_image_version_arn: cdktn.stringToTerraform(struct!.sageMakerImageVersionArn),
    training_plan_arn: cdktn.stringToTerraform(struct!.trainingPlanArn),
  }
}


export function sagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec | cdktn.IResolvable): any {
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
    training_plan_arn: {
      value: cdktn.stringToHclTerraform(struct!.trainingPlanArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec | cdktn.IResolvable | undefined {
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
    if (this._trainingPlanArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingPlanArn = this._trainingPlanArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sageMakerImageArn = undefined;
      this._sageMakerImageVersionArn = undefined;
      this._trainingPlanArn = undefined;
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
      this._trainingPlanArn = value.trainingPlanArn;
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

  // training_plan_arn - computed: true, optional: true, required: false
  private _trainingPlanArn?: string; 
  public get trainingPlanArn() {
    return this.getStringAttribute('training_plan_arn');
  }
  public set trainingPlanArn(value: string) {
    this._trainingPlanArn = value;
  }
  public resetTrainingPlanArn() {
    this._trainingPlanArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingPlanArnInput() {
    return this._trainingPlanArn;
  }
}
export interface SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}
  */
  readonly defaultResourceSpec?: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec;
  /**
  * A list of LifecycleConfigArns available for use with JupyterServer apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}
  */
  readonly lifecycleConfigArns?: string[];
}

export function sagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_resource_spec: sagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
    lifecycle_config_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.lifecycleConfigArns),
  }
}


export function sagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_resource_spec: {
      value: sagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec",
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

export class SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings | cdktn.IResolvable | undefined) {
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
  private _defaultResourceSpec = new SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec) {
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
export interface SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImages {
  /**
  * The Name of the AppImageConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#app_image_config_name SagemakerDomain#app_image_config_name}
  */
  readonly appImageConfigName?: string;
  /**
  * The name of the CustomImage. Must be unique to your account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#image_name SagemakerDomain#image_name}
  */
  readonly imageName?: string;
  /**
  * The version number of the CustomImage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#image_version_number SagemakerDomain#image_version_number}
  */
  readonly imageVersionNumber?: number;
}

export function sagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImagesToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImages | cdktn.IResolvable): any {
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


export function sagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImagesToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImages | cdktn.IResolvable): any {
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

export class SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImages | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImages | cdktn.IResolvable | undefined) {
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

export class SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImagesList extends cdktn.ComplexList {
  public internalValue? : SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImages[] | cdktn.IResolvable

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
  public get(index: number): SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference {
    return new SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec {
  /**
  * The instance type that the image version runs on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#instance_type SagemakerDomain#instance_type}
  */
  readonly instanceType?: string;
  /**
  * The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * The Amazon Resource Name (ARN) of the SageMaker image that the image version belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#sage_maker_image_arn SagemakerDomain#sage_maker_image_arn}
  */
  readonly sageMakerImageArn?: string;
  /**
  * The Amazon Resource Name (ARN) of the image version created on the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#sage_maker_image_version_arn SagemakerDomain#sage_maker_image_version_arn}
  */
  readonly sageMakerImageVersionArn?: string;
  /**
  * The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#training_plan_arn SagemakerDomain#training_plan_arn}
  */
  readonly trainingPlanArn?: string;
}

export function sagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktn.stringToTerraform(struct!.lifecycleConfigArn),
    sage_maker_image_arn: cdktn.stringToTerraform(struct!.sageMakerImageArn),
    sage_maker_image_version_arn: cdktn.stringToTerraform(struct!.sageMakerImageVersionArn),
    training_plan_arn: cdktn.stringToTerraform(struct!.trainingPlanArn),
  }
}


export function sagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec | cdktn.IResolvable): any {
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
    training_plan_arn: {
      value: cdktn.stringToHclTerraform(struct!.trainingPlanArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec | cdktn.IResolvable | undefined {
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
    if (this._trainingPlanArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingPlanArn = this._trainingPlanArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sageMakerImageArn = undefined;
      this._sageMakerImageVersionArn = undefined;
      this._trainingPlanArn = undefined;
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
      this._trainingPlanArn = value.trainingPlanArn;
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

  // training_plan_arn - computed: true, optional: true, required: false
  private _trainingPlanArn?: string; 
  public get trainingPlanArn() {
    return this.getStringAttribute('training_plan_arn');
  }
  public set trainingPlanArn(value: string) {
    this._trainingPlanArn = value;
  }
  public resetTrainingPlanArn() {
    this._trainingPlanArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingPlanArnInput() {
    return this._trainingPlanArn;
  }
}
export interface SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings {
  /**
  * A list of custom SageMaker images that are configured to run as a KernelGateway app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#custom_images SagemakerDomain#custom_images}
  */
  readonly customImages?: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImages[] | cdktn.IResolvable;
  /**
  * The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the KernelGateway app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}
  */
  readonly defaultResourceSpec?: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec;
  /**
  * A list of LifecycleConfigArns available for use with KernelGateway apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}
  */
  readonly lifecycleConfigArns?: string[];
}

export function sagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_images: cdktn.listMapper(sagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImagesToTerraform, false)(struct!.customImages),
    default_resource_spec: sagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
    lifecycle_config_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.lifecycleConfigArns),
  }
}


export function sagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_images: {
      value: cdktn.listMapperHcl(sagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImagesToHclTerraform, false)(struct!.customImages),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImagesList",
    },
    default_resource_spec: {
      value: sagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec",
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

export class SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings | cdktn.IResolvable | undefined) {
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
  private _customImages = new SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImagesList(this, "custom_images", false);
  public get customImages() {
    return this._customImages;
  }
  public putCustomImages(value: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImages[] | cdktn.IResolvable) {
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
  private _defaultResourceSpec = new SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec) {
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
export interface SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettings {
  /**
  * Default size of the Amazon EBS volume in Gb
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#default_ebs_volume_size_in_gb SagemakerDomain#default_ebs_volume_size_in_gb}
  */
  readonly defaultEbsVolumeSizeInGb?: number;
  /**
  * Maximum size of the Amazon EBS volume in Gb. Must be greater than or equal to the DefaultEbsVolumeSizeInGb.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#maximum_ebs_volume_size_in_gb SagemakerDomain#maximum_ebs_volume_size_in_gb}
  */
  readonly maximumEbsVolumeSizeInGb?: number;
}

export function sagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_ebs_volume_size_in_gb: cdktn.numberToTerraform(struct!.defaultEbsVolumeSizeInGb),
    maximum_ebs_volume_size_in_gb: cdktn.numberToTerraform(struct!.maximumEbsVolumeSizeInGb),
  }
}


export function sagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettings | cdktn.IResolvable): any {
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

export class SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettings | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettings | cdktn.IResolvable | undefined) {
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
export interface SagemakerDomainDefaultSpaceSettingsSpaceStorageSettings {
  /**
  * Properties related to the Amazon Elastic Block Store volume. Must be provided if storage type is Amazon EBS and must not be provided if storage type is not Amazon EBS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#default_ebs_storage_settings SagemakerDomain#default_ebs_storage_settings}
  */
  readonly defaultEbsStorageSettings?: SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettings;
}

export function sagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsSpaceStorageSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_ebs_storage_settings: sagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToTerraform(struct!.defaultEbsStorageSettings),
  }
}


export function sagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsSpaceStorageSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_ebs_storage_settings: {
      value: sagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToHclTerraform(struct!.defaultEbsStorageSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDefaultSpaceSettingsSpaceStorageSettings | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDomainDefaultSpaceSettingsSpaceStorageSettings | cdktn.IResolvable | undefined) {
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
  private _defaultEbsStorageSettings = new SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference(this, "default_ebs_storage_settings");
  public get defaultEbsStorageSettings() {
    return this._defaultEbsStorageSettings;
  }
  public putDefaultEbsStorageSettings(value: SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettings) {
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
export interface SagemakerDomainDefaultSpaceSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#custom_file_system_configs SagemakerDomain#custom_file_system_configs}
  */
  readonly customFileSystemConfigs?: SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigs[] | cdktn.IResolvable;
  /**
  * The Jupyter lab's custom posix user configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#custom_posix_user_config SagemakerDomain#custom_posix_user_config}
  */
  readonly customPosixUserConfig?: SagemakerDomainDefaultSpaceSettingsCustomPosixUserConfig;
  /**
  * The execution role for the space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#execution_role SagemakerDomain#execution_role}
  */
  readonly executionRole?: string;
  /**
  * The Jupyter lab's app settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#jupyter_lab_app_settings SagemakerDomain#jupyter_lab_app_settings}
  */
  readonly jupyterLabAppSettings?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettings;
  /**
  * The Jupyter server's app settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#jupyter_server_app_settings SagemakerDomain#jupyter_server_app_settings}
  */
  readonly jupyterServerAppSettings?: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings;
  /**
  * The kernel gateway app settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#kernel_gateway_app_settings SagemakerDomain#kernel_gateway_app_settings}
  */
  readonly kernelGatewayAppSettings?: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings;
  /**
  * The security groups for the Amazon Virtual Private Cloud (VPC) that Studio uses for communication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#security_groups SagemakerDomain#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * The Jupyter lab's space storage settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#space_storage_settings SagemakerDomain#space_storage_settings}
  */
  readonly spaceStorageSettings?: SagemakerDomainDefaultSpaceSettingsSpaceStorageSettings;
}

export function sagemakerDomainDefaultSpaceSettingsToTerraform(struct?: SagemakerDomainDefaultSpaceSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_file_system_configs: cdktn.listMapper(sagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsToTerraform, false)(struct!.customFileSystemConfigs),
    custom_posix_user_config: sagemakerDomainDefaultSpaceSettingsCustomPosixUserConfigToTerraform(struct!.customPosixUserConfig),
    execution_role: cdktn.stringToTerraform(struct!.executionRole),
    jupyter_lab_app_settings: sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsToTerraform(struct!.jupyterLabAppSettings),
    jupyter_server_app_settings: sagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsToTerraform(struct!.jupyterServerAppSettings),
    kernel_gateway_app_settings: sagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsToTerraform(struct!.kernelGatewayAppSettings),
    security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroups),
    space_storage_settings: sagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsToTerraform(struct!.spaceStorageSettings),
  }
}


export function sagemakerDomainDefaultSpaceSettingsToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_file_system_configs: {
      value: cdktn.listMapperHcl(sagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsToHclTerraform, false)(struct!.customFileSystemConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsList",
    },
    custom_posix_user_config: {
      value: sagemakerDomainDefaultSpaceSettingsCustomPosixUserConfigToHclTerraform(struct!.customPosixUserConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDomainDefaultSpaceSettingsCustomPosixUserConfig",
    },
    execution_role: {
      value: cdktn.stringToHclTerraform(struct!.executionRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jupyter_lab_app_settings: {
      value: sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsToHclTerraform(struct!.jupyterLabAppSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettings",
    },
    jupyter_server_app_settings: {
      value: sagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsToHclTerraform(struct!.jupyterServerAppSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings",
    },
    kernel_gateway_app_settings: {
      value: sagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsToHclTerraform(struct!.kernelGatewayAppSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings",
    },
    security_groups: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    space_storage_settings: {
      value: sagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsToHclTerraform(struct!.spaceStorageSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDomainDefaultSpaceSettingsSpaceStorageSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultSpaceSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDefaultSpaceSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customFileSystemConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFileSystemConfigs = this._customFileSystemConfigs?.internalValue;
    }
    if (this._customPosixUserConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPosixUserConfig = this._customPosixUserConfig?.internalValue;
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
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._spaceStorageSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spaceStorageSettings = this._spaceStorageSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultSpaceSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customFileSystemConfigs.internalValue = undefined;
      this._customPosixUserConfig.internalValue = undefined;
      this._executionRole = undefined;
      this._jupyterLabAppSettings.internalValue = undefined;
      this._jupyterServerAppSettings.internalValue = undefined;
      this._kernelGatewayAppSettings.internalValue = undefined;
      this._securityGroups = undefined;
      this._spaceStorageSettings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customFileSystemConfigs.internalValue = value.customFileSystemConfigs;
      this._customPosixUserConfig.internalValue = value.customPosixUserConfig;
      this._executionRole = value.executionRole;
      this._jupyterLabAppSettings.internalValue = value.jupyterLabAppSettings;
      this._jupyterServerAppSettings.internalValue = value.jupyterServerAppSettings;
      this._kernelGatewayAppSettings.internalValue = value.kernelGatewayAppSettings;
      this._securityGroups = value.securityGroups;
      this._spaceStorageSettings.internalValue = value.spaceStorageSettings;
    }
  }

  // custom_file_system_configs - computed: true, optional: true, required: false
  private _customFileSystemConfigs = new SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsList(this, "custom_file_system_configs", false);
  public get customFileSystemConfigs() {
    return this._customFileSystemConfigs;
  }
  public putCustomFileSystemConfigs(value: SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigs[] | cdktn.IResolvable) {
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
  private _customPosixUserConfig = new SagemakerDomainDefaultSpaceSettingsCustomPosixUserConfigOutputReference(this, "custom_posix_user_config");
  public get customPosixUserConfig() {
    return this._customPosixUserConfig;
  }
  public putCustomPosixUserConfig(value: SagemakerDomainDefaultSpaceSettingsCustomPosixUserConfig) {
    this._customPosixUserConfig.internalValue = value;
  }
  public resetCustomPosixUserConfig() {
    this._customPosixUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPosixUserConfigInput() {
    return this._customPosixUserConfig.internalValue;
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
  private _jupyterLabAppSettings = new SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsOutputReference(this, "jupyter_lab_app_settings");
  public get jupyterLabAppSettings() {
    return this._jupyterLabAppSettings;
  }
  public putJupyterLabAppSettings(value: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettings) {
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
  private _jupyterServerAppSettings = new SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference(this, "jupyter_server_app_settings");
  public get jupyterServerAppSettings() {
    return this._jupyterServerAppSettings;
  }
  public putJupyterServerAppSettings(value: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings) {
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
  private _kernelGatewayAppSettings = new SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference(this, "kernel_gateway_app_settings");
  public get kernelGatewayAppSettings() {
    return this._kernelGatewayAppSettings;
  }
  public putKernelGatewayAppSettings(value: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings) {
    this._kernelGatewayAppSettings.internalValue = value;
  }
  public resetKernelGatewayAppSettings() {
    this._kernelGatewayAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelGatewayAppSettingsInput() {
    return this._kernelGatewayAppSettings.internalValue;
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

  // space_storage_settings - computed: true, optional: true, required: false
  private _spaceStorageSettings = new SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsOutputReference(this, "space_storage_settings");
  public get spaceStorageSettings() {
    return this._spaceStorageSettings;
  }
  public putSpaceStorageSettings(value: SagemakerDomainDefaultSpaceSettingsSpaceStorageSettings) {
    this._spaceStorageSettings.internalValue = value;
  }
  public resetSpaceStorageSettings() {
    this._spaceStorageSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceStorageSettingsInput() {
    return this._spaceStorageSettings.internalValue;
  }
}
export interface SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings {
  /**
  * The idle timeout value set in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#idle_timeout_in_minutes SagemakerDomain#idle_timeout_in_minutes}
  */
  readonly idleTimeoutInMinutes?: number;
  /**
  * A flag to enable/disable AppLifecycleManagement settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#lifecycle_management SagemakerDomain#lifecycle_management}
  */
  readonly lifecycleManagement?: string;
  /**
  * The maximum idle timeout value set in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#max_idle_timeout_in_minutes SagemakerDomain#max_idle_timeout_in_minutes}
  */
  readonly maxIdleTimeoutInMinutes?: number;
  /**
  * The minimum idle timeout value set in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#min_idle_timeout_in_minutes SagemakerDomain#min_idle_timeout_in_minutes}
  */
  readonly minIdleTimeoutInMinutes?: number;
}

export function sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings | cdktn.IResolvable): any {
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


export function sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings | cdktn.IResolvable): any {
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

export class SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings | cdktn.IResolvable | undefined) {
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
export interface SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#idle_settings SagemakerDomain#idle_settings}
  */
  readonly idleSettings?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings;
}

export function sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementToTerraform(struct?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    idle_settings: sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsToTerraform(struct!.idleSettings),
  }
}


export function sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    idle_settings: {
      value: sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsToHclTerraform(struct!.idleSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagement | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagement | cdktn.IResolvable | undefined) {
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
  private _idleSettings = new SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference(this, "idle_settings");
  public get idleSettings() {
    return this._idleSettings;
  }
  public putIdleSettings(value: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings) {
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
export interface SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImages {
  /**
  * The Name of the AppImageConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#app_image_config_name SagemakerDomain#app_image_config_name}
  */
  readonly appImageConfigName?: string;
  /**
  * The name of the CustomImage. Must be unique to your account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#image_name SagemakerDomain#image_name}
  */
  readonly imageName?: string;
  /**
  * The version number of the CustomImage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#image_version_number SagemakerDomain#image_version_number}
  */
  readonly imageVersionNumber?: number;
}

export function sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImagesToTerraform(struct?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImages | cdktn.IResolvable): any {
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


export function sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImagesToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImages | cdktn.IResolvable): any {
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

export class SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImagesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImages | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImages | cdktn.IResolvable | undefined) {
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

export class SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImagesList extends cdktn.ComplexList {
  public internalValue? : SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImages[] | cdktn.IResolvable

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
  public get(index: number): SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImagesOutputReference {
    return new SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec {
  /**
  * The instance type that the image version runs on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#instance_type SagemakerDomain#instance_type}
  */
  readonly instanceType?: string;
  /**
  * The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * The Amazon Resource Name (ARN) of the SageMaker image that the image version belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#sage_maker_image_arn SagemakerDomain#sage_maker_image_arn}
  */
  readonly sageMakerImageArn?: string;
  /**
  * The Amazon Resource Name (ARN) of the image version created on the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#sage_maker_image_version_arn SagemakerDomain#sage_maker_image_version_arn}
  */
  readonly sageMakerImageVersionArn?: string;
  /**
  * The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#training_plan_arn SagemakerDomain#training_plan_arn}
  */
  readonly trainingPlanArn?: string;
}

export function sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktn.stringToTerraform(struct!.lifecycleConfigArn),
    sage_maker_image_arn: cdktn.stringToTerraform(struct!.sageMakerImageArn),
    sage_maker_image_version_arn: cdktn.stringToTerraform(struct!.sageMakerImageVersionArn),
    training_plan_arn: cdktn.stringToTerraform(struct!.trainingPlanArn),
  }
}


export function sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec | cdktn.IResolvable): any {
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
    training_plan_arn: {
      value: cdktn.stringToHclTerraform(struct!.trainingPlanArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec | cdktn.IResolvable | undefined {
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
    if (this._trainingPlanArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingPlanArn = this._trainingPlanArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sageMakerImageArn = undefined;
      this._sageMakerImageVersionArn = undefined;
      this._trainingPlanArn = undefined;
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
      this._trainingPlanArn = value.trainingPlanArn;
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

  // training_plan_arn - computed: true, optional: true, required: false
  private _trainingPlanArn?: string; 
  public get trainingPlanArn() {
    return this.getStringAttribute('training_plan_arn');
  }
  public set trainingPlanArn(value: string) {
    this._trainingPlanArn = value;
  }
  public resetTrainingPlanArn() {
    this._trainingPlanArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingPlanArnInput() {
    return this._trainingPlanArn;
  }
}
export interface SagemakerDomainDefaultUserSettingsCodeEditorAppSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#app_lifecycle_management SagemakerDomain#app_lifecycle_management}
  */
  readonly appLifecycleManagement?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagement;
  /**
  * The lifecycle configuration that runs before the default lifecycle configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#built_in_lifecycle_config_arn SagemakerDomain#built_in_lifecycle_config_arn}
  */
  readonly builtInLifecycleConfigArn?: string;
  /**
  * A list of custom images for use for CodeEditor apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#custom_images SagemakerDomain#custom_images}
  */
  readonly customImages?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImages[] | cdktn.IResolvable;
  /**
  * The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the CodeEditor app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}
  */
  readonly defaultResourceSpec?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec;
  /**
  * A list of LifecycleConfigArns available for use with CodeEditor apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}
  */
  readonly lifecycleConfigArns?: string[];
}

export function sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    app_lifecycle_management: sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementToTerraform(struct!.appLifecycleManagement),
    built_in_lifecycle_config_arn: cdktn.stringToTerraform(struct!.builtInLifecycleConfigArn),
    custom_images: cdktn.listMapper(sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImagesToTerraform, false)(struct!.customImages),
    default_resource_spec: sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
    lifecycle_config_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.lifecycleConfigArns),
  }
}


export function sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    app_lifecycle_management: {
      value: sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementToHclTerraform(struct!.appLifecycleManagement),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagement",
    },
    built_in_lifecycle_config_arn: {
      value: cdktn.stringToHclTerraform(struct!.builtInLifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_images: {
      value: cdktn.listMapperHcl(sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImagesToHclTerraform, false)(struct!.customImages),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImagesList",
    },
    default_resource_spec: {
      value: sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec",
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

export class SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsCodeEditorAppSettings | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDomainDefaultUserSettingsCodeEditorAppSettings | cdktn.IResolvable | undefined) {
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
  private _appLifecycleManagement = new SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference(this, "app_lifecycle_management");
  public get appLifecycleManagement() {
    return this._appLifecycleManagement;
  }
  public putAppLifecycleManagement(value: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagement) {
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
  private _customImages = new SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImagesList(this, "custom_images", false);
  public get customImages() {
    return this._customImages;
  }
  public putCustomImages(value: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImages[] | cdktn.IResolvable) {
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
  private _defaultResourceSpec = new SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec) {
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
export interface SagemakerDomainDefaultUserSettingsCustomFileSystemConfigsEfsFileSystemConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#file_system_id SagemakerDomain#file_system_id}
  */
  readonly fileSystemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#file_system_path SagemakerDomain#file_system_path}
  */
  readonly fileSystemPath?: string;
}

export function sagemakerDomainDefaultUserSettingsCustomFileSystemConfigsEfsFileSystemConfigToTerraform(struct?: SagemakerDomainDefaultUserSettingsCustomFileSystemConfigsEfsFileSystemConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_system_id: cdktn.stringToTerraform(struct!.fileSystemId),
    file_system_path: cdktn.stringToTerraform(struct!.fileSystemPath),
  }
}


export function sagemakerDomainDefaultUserSettingsCustomFileSystemConfigsEfsFileSystemConfigToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCustomFileSystemConfigsEfsFileSystemConfig | cdktn.IResolvable): any {
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

export class SagemakerDomainDefaultUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsCustomFileSystemConfigsEfsFileSystemConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDomainDefaultUserSettingsCustomFileSystemConfigsEfsFileSystemConfig | cdktn.IResolvable | undefined) {
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
export interface SagemakerDomainDefaultUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#file_system_id SagemakerDomain#file_system_id}
  */
  readonly fileSystemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#file_system_path SagemakerDomain#file_system_path}
  */
  readonly fileSystemPath?: string;
}

export function sagemakerDomainDefaultUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigToTerraform(struct?: SagemakerDomainDefaultUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_system_id: cdktn.stringToTerraform(struct!.fileSystemId),
    file_system_path: cdktn.stringToTerraform(struct!.fileSystemPath),
  }
}


export function sagemakerDomainDefaultUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig | cdktn.IResolvable): any {
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

export class SagemakerDomainDefaultUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDomainDefaultUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig | cdktn.IResolvable | undefined) {
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
export interface SagemakerDomainDefaultUserSettingsCustomFileSystemConfigsS3FileSystemConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#mount_path SagemakerDomain#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#s3_uri SagemakerDomain#s3_uri}
  */
  readonly s3Uri?: string;
}

export function sagemakerDomainDefaultUserSettingsCustomFileSystemConfigsS3FileSystemConfigToTerraform(struct?: SagemakerDomainDefaultUserSettingsCustomFileSystemConfigsS3FileSystemConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mount_path: cdktn.stringToTerraform(struct!.mountPath),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function sagemakerDomainDefaultUserSettingsCustomFileSystemConfigsS3FileSystemConfigToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCustomFileSystemConfigsS3FileSystemConfig | cdktn.IResolvable): any {
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

export class SagemakerDomainDefaultUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsCustomFileSystemConfigsS3FileSystemConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDomainDefaultUserSettingsCustomFileSystemConfigsS3FileSystemConfig | cdktn.IResolvable | undefined) {
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
export interface SagemakerDomainDefaultUserSettingsCustomFileSystemConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#efs_file_system_config SagemakerDomain#efs_file_system_config}
  */
  readonly efsFileSystemConfig?: SagemakerDomainDefaultUserSettingsCustomFileSystemConfigsEfsFileSystemConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#fsx_lustre_file_system_config SagemakerDomain#fsx_lustre_file_system_config}
  */
  readonly fsxLustreFileSystemConfig?: SagemakerDomainDefaultUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#s3_file_system_config SagemakerDomain#s3_file_system_config}
  */
  readonly s3FileSystemConfig?: SagemakerDomainDefaultUserSettingsCustomFileSystemConfigsS3FileSystemConfig;
}

export function sagemakerDomainDefaultUserSettingsCustomFileSystemConfigsToTerraform(struct?: SagemakerDomainDefaultUserSettingsCustomFileSystemConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    efs_file_system_config: sagemakerDomainDefaultUserSettingsCustomFileSystemConfigsEfsFileSystemConfigToTerraform(struct!.efsFileSystemConfig),
    fsx_lustre_file_system_config: sagemakerDomainDefaultUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigToTerraform(struct!.fsxLustreFileSystemConfig),
    s3_file_system_config: sagemakerDomainDefaultUserSettingsCustomFileSystemConfigsS3FileSystemConfigToTerraform(struct!.s3FileSystemConfig),
  }
}


export function sagemakerDomainDefaultUserSettingsCustomFileSystemConfigsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCustomFileSystemConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    efs_file_system_config: {
      value: sagemakerDomainDefaultUserSettingsCustomFileSystemConfigsEfsFileSystemConfigToHclTerraform(struct!.efsFileSystemConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDomainDefaultUserSettingsCustomFileSystemConfigsEfsFileSystemConfig",
    },
    fsx_lustre_file_system_config: {
      value: sagemakerDomainDefaultUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigToHclTerraform(struct!.fsxLustreFileSystemConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDomainDefaultUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig",
    },
    s3_file_system_config: {
      value: sagemakerDomainDefaultUserSettingsCustomFileSystemConfigsS3FileSystemConfigToHclTerraform(struct!.s3FileSystemConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDomainDefaultUserSettingsCustomFileSystemConfigsS3FileSystemConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsCustomFileSystemConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerDomainDefaultUserSettingsCustomFileSystemConfigs | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDomainDefaultUserSettingsCustomFileSystemConfigs | cdktn.IResolvable | undefined) {
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
  private _efsFileSystemConfig = new SagemakerDomainDefaultUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference(this, "efs_file_system_config");
  public get efsFileSystemConfig() {
    return this._efsFileSystemConfig;
  }
  public putEfsFileSystemConfig(value: SagemakerDomainDefaultUserSettingsCustomFileSystemConfigsEfsFileSystemConfig) {
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
  private _fsxLustreFileSystemConfig = new SagemakerDomainDefaultUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference(this, "fsx_lustre_file_system_config");
  public get fsxLustreFileSystemConfig() {
    return this._fsxLustreFileSystemConfig;
  }
  public putFsxLustreFileSystemConfig(value: SagemakerDomainDefaultUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig) {
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
  private _s3FileSystemConfig = new SagemakerDomainDefaultUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference(this, "s3_file_system_config");
  public get s3FileSystemConfig() {
    return this._s3FileSystemConfig;
  }
  public putS3FileSystemConfig(value: SagemakerDomainDefaultUserSettingsCustomFileSystemConfigsS3FileSystemConfig) {
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

export class SagemakerDomainDefaultUserSettingsCustomFileSystemConfigsList extends cdktn.ComplexList {
  public internalValue? : SagemakerDomainDefaultUserSettingsCustomFileSystemConfigs[] | cdktn.IResolvable

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
  public get(index: number): SagemakerDomainDefaultUserSettingsCustomFileSystemConfigsOutputReference {
    return new SagemakerDomainDefaultUserSettingsCustomFileSystemConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerDomainDefaultUserSettingsCustomPosixUserConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#gid SagemakerDomain#gid}
  */
  readonly gid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#uid SagemakerDomain#uid}
  */
  readonly uid?: number;
}

export function sagemakerDomainDefaultUserSettingsCustomPosixUserConfigToTerraform(struct?: SagemakerDomainDefaultUserSettingsCustomPosixUserConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    gid: cdktn.numberToTerraform(struct!.gid),
    uid: cdktn.numberToTerraform(struct!.uid),
  }
}


export function sagemakerDomainDefaultUserSettingsCustomPosixUserConfigToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCustomPosixUserConfig | cdktn.IResolvable): any {
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

export class SagemakerDomainDefaultUserSettingsCustomPosixUserConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsCustomPosixUserConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDomainDefaultUserSettingsCustomPosixUserConfig | cdktn.IResolvable | undefined) {
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
export interface SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings {
  /**
  * The idle timeout value set in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#idle_timeout_in_minutes SagemakerDomain#idle_timeout_in_minutes}
  */
  readonly idleTimeoutInMinutes?: number;
  /**
  * A flag to enable/disable AppLifecycleManagement settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#lifecycle_management SagemakerDomain#lifecycle_management}
  */
  readonly lifecycleManagement?: string;
  /**
  * The maximum idle timeout value set in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#max_idle_timeout_in_minutes SagemakerDomain#max_idle_timeout_in_minutes}
  */
  readonly maxIdleTimeoutInMinutes?: number;
  /**
  * The minimum idle timeout value set in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#min_idle_timeout_in_minutes SagemakerDomain#min_idle_timeout_in_minutes}
  */
  readonly minIdleTimeoutInMinutes?: number;
}

export function sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings | cdktn.IResolvable): any {
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


export function sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings | cdktn.IResolvable): any {
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

export class SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings | cdktn.IResolvable | undefined) {
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
export interface SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#idle_settings SagemakerDomain#idle_settings}
  */
  readonly idleSettings?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings;
}

export function sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementToTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    idle_settings: sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsToTerraform(struct!.idleSettings),
  }
}


export function sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    idle_settings: {
      value: sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsToHclTerraform(struct!.idleSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagement | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagement | cdktn.IResolvable | undefined) {
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
  private _idleSettings = new SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference(this, "idle_settings");
  public get idleSettings() {
    return this._idleSettings;
  }
  public putIdleSettings(value: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings) {
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
export interface SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositories {
  /**
  * A CodeRepository (valid URL) to be used within Jupyter's Git extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#repository_url SagemakerDomain#repository_url}
  */
  readonly repositoryUrl?: string;
}

export function sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositoriesToTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositories | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    repository_url: cdktn.stringToTerraform(struct!.repositoryUrl),
  }
}


export function sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositoriesToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositories | cdktn.IResolvable): any {
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

export class SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositories | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositories | cdktn.IResolvable | undefined) {
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

export class SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositoriesList extends cdktn.ComplexList {
  public internalValue? : SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositories[] | cdktn.IResolvable

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
  public get(index: number): SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference {
    return new SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImages {
  /**
  * The Name of the AppImageConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#app_image_config_name SagemakerDomain#app_image_config_name}
  */
  readonly appImageConfigName?: string;
  /**
  * The name of the CustomImage. Must be unique to your account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#image_name SagemakerDomain#image_name}
  */
  readonly imageName?: string;
  /**
  * The version number of the CustomImage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#image_version_number SagemakerDomain#image_version_number}
  */
  readonly imageVersionNumber?: number;
}

export function sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImagesToTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImages | cdktn.IResolvable): any {
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


export function sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImagesToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImages | cdktn.IResolvable): any {
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

export class SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImagesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImages | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImages | cdktn.IResolvable | undefined) {
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

export class SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImagesList extends cdktn.ComplexList {
  public internalValue? : SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImages[] | cdktn.IResolvable

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
  public get(index: number): SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImagesOutputReference {
    return new SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec {
  /**
  * The instance type that the image version runs on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#instance_type SagemakerDomain#instance_type}
  */
  readonly instanceType?: string;
  /**
  * The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * The Amazon Resource Name (ARN) of the SageMaker image that the image version belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#sage_maker_image_arn SagemakerDomain#sage_maker_image_arn}
  */
  readonly sageMakerImageArn?: string;
  /**
  * The Amazon Resource Name (ARN) of the image version created on the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#sage_maker_image_version_arn SagemakerDomain#sage_maker_image_version_arn}
  */
  readonly sageMakerImageVersionArn?: string;
  /**
  * The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#training_plan_arn SagemakerDomain#training_plan_arn}
  */
  readonly trainingPlanArn?: string;
}

export function sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktn.stringToTerraform(struct!.lifecycleConfigArn),
    sage_maker_image_arn: cdktn.stringToTerraform(struct!.sageMakerImageArn),
    sage_maker_image_version_arn: cdktn.stringToTerraform(struct!.sageMakerImageVersionArn),
    training_plan_arn: cdktn.stringToTerraform(struct!.trainingPlanArn),
  }
}


export function sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec | cdktn.IResolvable): any {
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
    training_plan_arn: {
      value: cdktn.stringToHclTerraform(struct!.trainingPlanArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec | cdktn.IResolvable | undefined {
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
    if (this._trainingPlanArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingPlanArn = this._trainingPlanArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sageMakerImageArn = undefined;
      this._sageMakerImageVersionArn = undefined;
      this._trainingPlanArn = undefined;
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
      this._trainingPlanArn = value.trainingPlanArn;
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

  // training_plan_arn - computed: true, optional: true, required: false
  private _trainingPlanArn?: string; 
  public get trainingPlanArn() {
    return this.getStringAttribute('training_plan_arn');
  }
  public set trainingPlanArn(value: string) {
    this._trainingPlanArn = value;
  }
  public resetTrainingPlanArn() {
    this._trainingPlanArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingPlanArnInput() {
    return this._trainingPlanArn;
  }
}
export interface SagemakerDomainDefaultUserSettingsJupyterLabAppSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#app_lifecycle_management SagemakerDomain#app_lifecycle_management}
  */
  readonly appLifecycleManagement?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagement;
  /**
  * The lifecycle configuration that runs before the default lifecycle configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#built_in_lifecycle_config_arn SagemakerDomain#built_in_lifecycle_config_arn}
  */
  readonly builtInLifecycleConfigArn?: string;
  /**
  * A list of CodeRepositories available for use with JupyterLab apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#code_repositories SagemakerDomain#code_repositories}
  */
  readonly codeRepositories?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositories[] | cdktn.IResolvable;
  /**
  * A list of custom images for use for JupyterLab apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#custom_images SagemakerDomain#custom_images}
  */
  readonly customImages?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImages[] | cdktn.IResolvable;
  /**
  * The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the JupyterLab app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}
  */
  readonly defaultResourceSpec?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec;
  /**
  * A list of LifecycleConfigArns available for use with JupyterLab apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}
  */
  readonly lifecycleConfigArns?: string[];
}

export function sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    app_lifecycle_management: sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementToTerraform(struct!.appLifecycleManagement),
    built_in_lifecycle_config_arn: cdktn.stringToTerraform(struct!.builtInLifecycleConfigArn),
    code_repositories: cdktn.listMapper(sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositoriesToTerraform, false)(struct!.codeRepositories),
    custom_images: cdktn.listMapper(sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImagesToTerraform, false)(struct!.customImages),
    default_resource_spec: sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
    lifecycle_config_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.lifecycleConfigArns),
  }
}


export function sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    app_lifecycle_management: {
      value: sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementToHclTerraform(struct!.appLifecycleManagement),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagement",
    },
    built_in_lifecycle_config_arn: {
      value: cdktn.stringToHclTerraform(struct!.builtInLifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    code_repositories: {
      value: cdktn.listMapperHcl(sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositoriesToHclTerraform, false)(struct!.codeRepositories),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositoriesList",
    },
    custom_images: {
      value: cdktn.listMapperHcl(sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImagesToHclTerraform, false)(struct!.customImages),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImagesList",
    },
    default_resource_spec: {
      value: sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec",
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

export class SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsJupyterLabAppSettings | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDomainDefaultUserSettingsJupyterLabAppSettings | cdktn.IResolvable | undefined) {
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
  private _appLifecycleManagement = new SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference(this, "app_lifecycle_management");
  public get appLifecycleManagement() {
    return this._appLifecycleManagement;
  }
  public putAppLifecycleManagement(value: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagement) {
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
  private _codeRepositories = new SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositoriesList(this, "code_repositories", false);
  public get codeRepositories() {
    return this._codeRepositories;
  }
  public putCodeRepositories(value: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositories[] | cdktn.IResolvable) {
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
  private _customImages = new SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImagesList(this, "custom_images", false);
  public get customImages() {
    return this._customImages;
  }
  public putCustomImages(value: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImages[] | cdktn.IResolvable) {
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
  private _defaultResourceSpec = new SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec) {
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
export interface SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec {
  /**
  * The instance type that the image version runs on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#instance_type SagemakerDomain#instance_type}
  */
  readonly instanceType?: string;
  /**
  * The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * The Amazon Resource Name (ARN) of the SageMaker image that the image version belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#sage_maker_image_arn SagemakerDomain#sage_maker_image_arn}
  */
  readonly sageMakerImageArn?: string;
  /**
  * The Amazon Resource Name (ARN) of the image version created on the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#sage_maker_image_version_arn SagemakerDomain#sage_maker_image_version_arn}
  */
  readonly sageMakerImageVersionArn?: string;
  /**
  * The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#training_plan_arn SagemakerDomain#training_plan_arn}
  */
  readonly trainingPlanArn?: string;
}

export function sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktn.stringToTerraform(struct!.lifecycleConfigArn),
    sage_maker_image_arn: cdktn.stringToTerraform(struct!.sageMakerImageArn),
    sage_maker_image_version_arn: cdktn.stringToTerraform(struct!.sageMakerImageVersionArn),
    training_plan_arn: cdktn.stringToTerraform(struct!.trainingPlanArn),
  }
}


export function sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec | cdktn.IResolvable): any {
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
    training_plan_arn: {
      value: cdktn.stringToHclTerraform(struct!.trainingPlanArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec | cdktn.IResolvable | undefined {
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
    if (this._trainingPlanArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingPlanArn = this._trainingPlanArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sageMakerImageArn = undefined;
      this._sageMakerImageVersionArn = undefined;
      this._trainingPlanArn = undefined;
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
      this._trainingPlanArn = value.trainingPlanArn;
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

  // training_plan_arn - computed: true, optional: true, required: false
  private _trainingPlanArn?: string; 
  public get trainingPlanArn() {
    return this.getStringAttribute('training_plan_arn');
  }
  public set trainingPlanArn(value: string) {
    this._trainingPlanArn = value;
  }
  public resetTrainingPlanArn() {
    this._trainingPlanArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingPlanArnInput() {
    return this._trainingPlanArn;
  }
}
export interface SagemakerDomainDefaultUserSettingsJupyterServerAppSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}
  */
  readonly defaultResourceSpec?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec;
  /**
  * A list of LifecycleConfigArns available for use with JupyterServer apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}
  */
  readonly lifecycleConfigArns?: string[];
}

export function sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_resource_spec: sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
    lifecycle_config_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.lifecycleConfigArns),
  }
}


export function sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_resource_spec: {
      value: sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec",
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

export class SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsJupyterServerAppSettings | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDomainDefaultUserSettingsJupyterServerAppSettings | cdktn.IResolvable | undefined) {
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
  private _defaultResourceSpec = new SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec) {
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
export interface SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImages {
  /**
  * The Name of the AppImageConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#app_image_config_name SagemakerDomain#app_image_config_name}
  */
  readonly appImageConfigName?: string;
  /**
  * The name of the CustomImage. Must be unique to your account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#image_name SagemakerDomain#image_name}
  */
  readonly imageName?: string;
  /**
  * The version number of the CustomImage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#image_version_number SagemakerDomain#image_version_number}
  */
  readonly imageVersionNumber?: number;
}

export function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImagesToTerraform(struct?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImages | cdktn.IResolvable): any {
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


export function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImagesToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImages | cdktn.IResolvable): any {
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

export class SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImages | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImages | cdktn.IResolvable | undefined) {
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

export class SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImagesList extends cdktn.ComplexList {
  public internalValue? : SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImages[] | cdktn.IResolvable

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
  public get(index: number): SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference {
    return new SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec {
  /**
  * The instance type that the image version runs on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#instance_type SagemakerDomain#instance_type}
  */
  readonly instanceType?: string;
  /**
  * The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * The Amazon Resource Name (ARN) of the SageMaker image that the image version belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#sage_maker_image_arn SagemakerDomain#sage_maker_image_arn}
  */
  readonly sageMakerImageArn?: string;
  /**
  * The Amazon Resource Name (ARN) of the image version created on the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#sage_maker_image_version_arn SagemakerDomain#sage_maker_image_version_arn}
  */
  readonly sageMakerImageVersionArn?: string;
  /**
  * The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#training_plan_arn SagemakerDomain#training_plan_arn}
  */
  readonly trainingPlanArn?: string;
}

export function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktn.stringToTerraform(struct!.lifecycleConfigArn),
    sage_maker_image_arn: cdktn.stringToTerraform(struct!.sageMakerImageArn),
    sage_maker_image_version_arn: cdktn.stringToTerraform(struct!.sageMakerImageVersionArn),
    training_plan_arn: cdktn.stringToTerraform(struct!.trainingPlanArn),
  }
}


export function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | cdktn.IResolvable): any {
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
    training_plan_arn: {
      value: cdktn.stringToHclTerraform(struct!.trainingPlanArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | cdktn.IResolvable | undefined {
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
    if (this._trainingPlanArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingPlanArn = this._trainingPlanArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sageMakerImageArn = undefined;
      this._sageMakerImageVersionArn = undefined;
      this._trainingPlanArn = undefined;
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
      this._trainingPlanArn = value.trainingPlanArn;
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

  // training_plan_arn - computed: true, optional: true, required: false
  private _trainingPlanArn?: string; 
  public get trainingPlanArn() {
    return this.getStringAttribute('training_plan_arn');
  }
  public set trainingPlanArn(value: string) {
    this._trainingPlanArn = value;
  }
  public resetTrainingPlanArn() {
    this._trainingPlanArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingPlanArnInput() {
    return this._trainingPlanArn;
  }
}
export interface SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings {
  /**
  * A list of custom SageMaker images that are configured to run as a KernelGateway app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#custom_images SagemakerDomain#custom_images}
  */
  readonly customImages?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImages[] | cdktn.IResolvable;
  /**
  * The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the KernelGateway app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}
  */
  readonly defaultResourceSpec?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec;
  /**
  * A list of LifecycleConfigArns available for use with KernelGateway apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}
  */
  readonly lifecycleConfigArns?: string[];
}

export function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_images: cdktn.listMapper(sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImagesToTerraform, false)(struct!.customImages),
    default_resource_spec: sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
    lifecycle_config_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.lifecycleConfigArns),
  }
}


export function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_images: {
      value: cdktn.listMapperHcl(sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImagesToHclTerraform, false)(struct!.customImages),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImagesList",
    },
    default_resource_spec: {
      value: sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec",
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

export class SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings | cdktn.IResolvable | undefined) {
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
  private _customImages = new SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImagesList(this, "custom_images", false);
  public get customImages() {
    return this._customImages;
  }
  public putCustomImages(value: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImages[] | cdktn.IResolvable) {
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
  private _defaultResourceSpec = new SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec) {
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
export interface SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImages {
  /**
  * The Name of the AppImageConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#app_image_config_name SagemakerDomain#app_image_config_name}
  */
  readonly appImageConfigName?: string;
  /**
  * The name of the CustomImage. Must be unique to your account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#image_name SagemakerDomain#image_name}
  */
  readonly imageName?: string;
  /**
  * The version number of the CustomImage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#image_version_number SagemakerDomain#image_version_number}
  */
  readonly imageVersionNumber?: number;
}

export function sagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImagesToTerraform(struct?: SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImages | cdktn.IResolvable): any {
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


export function sagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImagesToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImages | cdktn.IResolvable): any {
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

export class SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImagesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImages | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImages | cdktn.IResolvable | undefined) {
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

export class SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImagesList extends cdktn.ComplexList {
  public internalValue? : SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImages[] | cdktn.IResolvable

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
  public get(index: number): SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImagesOutputReference {
    return new SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec {
  /**
  * The instance type that the image version runs on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#instance_type SagemakerDomain#instance_type}
  */
  readonly instanceType?: string;
  /**
  * The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * The Amazon Resource Name (ARN) of the SageMaker image that the image version belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#sage_maker_image_arn SagemakerDomain#sage_maker_image_arn}
  */
  readonly sageMakerImageArn?: string;
  /**
  * The Amazon Resource Name (ARN) of the image version created on the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#sage_maker_image_version_arn SagemakerDomain#sage_maker_image_version_arn}
  */
  readonly sageMakerImageVersionArn?: string;
  /**
  * The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#training_plan_arn SagemakerDomain#training_plan_arn}
  */
  readonly trainingPlanArn?: string;
}

export function sagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktn.stringToTerraform(struct!.lifecycleConfigArn),
    sage_maker_image_arn: cdktn.stringToTerraform(struct!.sageMakerImageArn),
    sage_maker_image_version_arn: cdktn.stringToTerraform(struct!.sageMakerImageVersionArn),
    training_plan_arn: cdktn.stringToTerraform(struct!.trainingPlanArn),
  }
}


export function sagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec | cdktn.IResolvable): any {
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
    training_plan_arn: {
      value: cdktn.stringToHclTerraform(struct!.trainingPlanArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec | cdktn.IResolvable | undefined {
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
    if (this._trainingPlanArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingPlanArn = this._trainingPlanArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sageMakerImageArn = undefined;
      this._sageMakerImageVersionArn = undefined;
      this._trainingPlanArn = undefined;
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
      this._trainingPlanArn = value.trainingPlanArn;
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

  // training_plan_arn - computed: true, optional: true, required: false
  private _trainingPlanArn?: string; 
  public get trainingPlanArn() {
    return this.getStringAttribute('training_plan_arn');
  }
  public set trainingPlanArn(value: string) {
    this._trainingPlanArn = value;
  }
  public resetTrainingPlanArn() {
    this._trainingPlanArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingPlanArnInput() {
    return this._trainingPlanArn;
  }
}
export interface SagemakerDomainDefaultUserSettingsRSessionAppSettings {
  /**
  * A list of custom SageMaker images that are configured to run as a KernelGateway app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#custom_images SagemakerDomain#custom_images}
  */
  readonly customImages?: SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImages[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}
  */
  readonly defaultResourceSpec?: SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec;
}

export function sagemakerDomainDefaultUserSettingsRSessionAppSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsRSessionAppSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_images: cdktn.listMapper(sagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImagesToTerraform, false)(struct!.customImages),
    default_resource_spec: sagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
  }
}


export function sagemakerDomainDefaultUserSettingsRSessionAppSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsRSessionAppSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_images: {
      value: cdktn.listMapperHcl(sagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImagesToHclTerraform, false)(struct!.customImages),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImagesList",
    },
    default_resource_spec: {
      value: sagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsRSessionAppSettings | cdktn.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsRSessionAppSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customImages.internalValue = undefined;
      this._defaultResourceSpec.internalValue = undefined;
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
    }
  }

  // custom_images - computed: true, optional: true, required: false
  private _customImages = new SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImagesList(this, "custom_images", false);
  public get customImages() {
    return this._customImages;
  }
  public putCustomImages(value: SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImages[] | cdktn.IResolvable) {
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
  private _defaultResourceSpec = new SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }
}
export interface SagemakerDomainDefaultUserSettingsRStudioServerProAppSettings {
  /**
  * Indicates whether the current user has access to the RStudioServerPro app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#access_status SagemakerDomain#access_status}
  */
  readonly accessStatus?: string;
  /**
  * The level of permissions that the user has within the RStudioServerPro app. This value defaults to User. The Admin value allows the user access to the RStudio Administrative Dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#user_group SagemakerDomain#user_group}
  */
  readonly userGroup?: string;
}

export function sagemakerDomainDefaultUserSettingsRStudioServerProAppSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsRStudioServerProAppSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_status: cdktn.stringToTerraform(struct!.accessStatus),
    user_group: cdktn.stringToTerraform(struct!.userGroup),
  }
}


export function sagemakerDomainDefaultUserSettingsRStudioServerProAppSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsRStudioServerProAppSettings | cdktn.IResolvable): any {
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

export class SagemakerDomainDefaultUserSettingsRStudioServerProAppSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsRStudioServerProAppSettings | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDomainDefaultUserSettingsRStudioServerProAppSettings | cdktn.IResolvable | undefined) {
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
export interface SagemakerDomainDefaultUserSettingsSharingSettings {
  /**
  * Whether to include the notebook cell output when sharing the notebook. The default is Disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#notebook_output_option SagemakerDomain#notebook_output_option}
  */
  readonly notebookOutputOption?: string;
  /**
  * When NotebookOutputOption is Allowed, the AWS Key Management Service (KMS) encryption key ID used to encrypt the notebook cell output in the Amazon S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#s3_kms_key_id SagemakerDomain#s3_kms_key_id}
  */
  readonly s3KmsKeyId?: string;
  /**
  * When NotebookOutputOption is Allowed, the Amazon S3 bucket used to store the shared notebook snapshots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#s3_output_path SagemakerDomain#s3_output_path}
  */
  readonly s3OutputPath?: string;
}

export function sagemakerDomainDefaultUserSettingsSharingSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsSharingSettings | cdktn.IResolvable): any {
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


export function sagemakerDomainDefaultUserSettingsSharingSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsSharingSettings | cdktn.IResolvable): any {
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

export class SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsSharingSettings | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDomainDefaultUserSettingsSharingSettings | cdktn.IResolvable | undefined) {
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
export interface SagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings {
  /**
  * Default size of the Amazon EBS volume in Gb
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#default_ebs_volume_size_in_gb SagemakerDomain#default_ebs_volume_size_in_gb}
  */
  readonly defaultEbsVolumeSizeInGb?: number;
  /**
  * Maximum size of the Amazon EBS volume in Gb. Must be greater than or equal to the DefaultEbsVolumeSizeInGb.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#maximum_ebs_volume_size_in_gb SagemakerDomain#maximum_ebs_volume_size_in_gb}
  */
  readonly maximumEbsVolumeSizeInGb?: number;
}

export function sagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_ebs_volume_size_in_gb: cdktn.numberToTerraform(struct!.defaultEbsVolumeSizeInGb),
    maximum_ebs_volume_size_in_gb: cdktn.numberToTerraform(struct!.maximumEbsVolumeSizeInGb),
  }
}


export function sagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings | cdktn.IResolvable): any {
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

export class SagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings | cdktn.IResolvable | undefined) {
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
export interface SagemakerDomainDefaultUserSettingsSpaceStorageSettings {
  /**
  * Properties related to the Amazon Elastic Block Store volume. Must be provided if storage type is Amazon EBS and must not be provided if storage type is not Amazon EBS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#default_ebs_storage_settings SagemakerDomain#default_ebs_storage_settings}
  */
  readonly defaultEbsStorageSettings?: SagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings;
}

export function sagemakerDomainDefaultUserSettingsSpaceStorageSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsSpaceStorageSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_ebs_storage_settings: sagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToTerraform(struct!.defaultEbsStorageSettings),
  }
}


export function sagemakerDomainDefaultUserSettingsSpaceStorageSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsSpaceStorageSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_ebs_storage_settings: {
      value: sagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToHclTerraform(struct!.defaultEbsStorageSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsSpaceStorageSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsSpaceStorageSettings | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDomainDefaultUserSettingsSpaceStorageSettings | cdktn.IResolvable | undefined) {
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
  private _defaultEbsStorageSettings = new SagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference(this, "default_ebs_storage_settings");
  public get defaultEbsStorageSettings() {
    return this._defaultEbsStorageSettings;
  }
  public putDefaultEbsStorageSettings(value: SagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings) {
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
export interface SagemakerDomainDefaultUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases {
  /**
  * The SageMaker image name that you are hiding from the Studio user interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#sage_maker_image_name SagemakerDomain#sage_maker_image_name}
  */
  readonly sageMakerImageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#version_aliases SagemakerDomain#version_aliases}
  */
  readonly versionAliases?: string[];
}

export function sagemakerDomainDefaultUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesToTerraform(struct?: SagemakerDomainDefaultUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sage_maker_image_name: cdktn.stringToTerraform(struct!.sageMakerImageName),
    version_aliases: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.versionAliases),
  }
}


export function sagemakerDomainDefaultUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases | cdktn.IResolvable): any {
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

export class SagemakerDomainDefaultUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerDomainDefaultUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDomainDefaultUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases | cdktn.IResolvable | undefined) {
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

export class SagemakerDomainDefaultUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList extends cdktn.ComplexList {
  public internalValue? : SagemakerDomainDefaultUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases[] | cdktn.IResolvable

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
  public get(index: number): SagemakerDomainDefaultUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference {
    return new SagemakerDomainDefaultUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerDomainDefaultUserSettingsStudioWebPortalSettings {
  /**
  * Applications supported in Studio that are hidden from the Studio left navigation pane.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#hidden_app_types SagemakerDomain#hidden_app_types}
  */
  readonly hiddenAppTypes?: string[];
  /**
  * The instance types you are hiding from the Studio user interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#hidden_instance_types SagemakerDomain#hidden_instance_types}
  */
  readonly hiddenInstanceTypes?: string[];
  /**
  * The machine learning tools that are hidden from the Studio left navigation pane.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#hidden_ml_tools SagemakerDomain#hidden_ml_tools}
  */
  readonly hiddenMlTools?: string[];
  /**
  * The version aliases you are hiding from the Studio user interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#hidden_sage_maker_image_version_aliases SagemakerDomain#hidden_sage_maker_image_version_aliases}
  */
  readonly hiddenSageMakerImageVersionAliases?: SagemakerDomainDefaultUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases[] | cdktn.IResolvable;
}

export function sagemakerDomainDefaultUserSettingsStudioWebPortalSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsStudioWebPortalSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hidden_app_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.hiddenAppTypes),
    hidden_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.hiddenInstanceTypes),
    hidden_ml_tools: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.hiddenMlTools),
    hidden_sage_maker_image_version_aliases: cdktn.listMapper(sagemakerDomainDefaultUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesToTerraform, false)(struct!.hiddenSageMakerImageVersionAliases),
  }
}


export function sagemakerDomainDefaultUserSettingsStudioWebPortalSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsStudioWebPortalSettings | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(sagemakerDomainDefaultUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesToHclTerraform, false)(struct!.hiddenSageMakerImageVersionAliases),
      isBlock: true,
      type: "set",
      storageClassType: "SagemakerDomainDefaultUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsStudioWebPortalSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsStudioWebPortalSettings | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDomainDefaultUserSettingsStudioWebPortalSettings | cdktn.IResolvable | undefined) {
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
  private _hiddenSageMakerImageVersionAliases = new SagemakerDomainDefaultUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList(this, "hidden_sage_maker_image_version_aliases", true);
  public get hiddenSageMakerImageVersionAliases() {
    return this._hiddenSageMakerImageVersionAliases;
  }
  public putHiddenSageMakerImageVersionAliases(value: SagemakerDomainDefaultUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases[] | cdktn.IResolvable) {
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
export interface SagemakerDomainDefaultUserSettings {
  /**
  * Indicates whether auto-mounting of an EFS volume is supported for the user profile. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#auto_mount_home_efs SagemakerDomain#auto_mount_home_efs}
  */
  readonly autoMountHomeEfs?: string;
  /**
  * The CodeEditor app settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#code_editor_app_settings SagemakerDomain#code_editor_app_settings}
  */
  readonly codeEditorAppSettings?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#custom_file_system_configs SagemakerDomain#custom_file_system_configs}
  */
  readonly customFileSystemConfigs?: SagemakerDomainDefaultUserSettingsCustomFileSystemConfigs[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#custom_posix_user_config SagemakerDomain#custom_posix_user_config}
  */
  readonly customPosixUserConfig?: SagemakerDomainDefaultUserSettingsCustomPosixUserConfig;
  /**
  * Defines which Amazon SageMaker application users are directed to by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#default_landing_uri SagemakerDomain#default_landing_uri}
  */
  readonly defaultLandingUri?: string;
  /**
  * The execution role for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#execution_role SagemakerDomain#execution_role}
  */
  readonly executionRole: string;
  /**
  * The JupyterLab app settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#jupyter_lab_app_settings SagemakerDomain#jupyter_lab_app_settings}
  */
  readonly jupyterLabAppSettings?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettings;
  /**
  * The Jupyter server's app settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#jupyter_server_app_settings SagemakerDomain#jupyter_server_app_settings}
  */
  readonly jupyterServerAppSettings?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettings;
  /**
  * The kernel gateway app settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#kernel_gateway_app_settings SagemakerDomain#kernel_gateway_app_settings}
  */
  readonly kernelGatewayAppSettings?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings;
  /**
  * A collection of settings that apply to an RSessionGateway app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#r_session_app_settings SagemakerDomain#r_session_app_settings}
  */
  readonly rSessionAppSettings?: SagemakerDomainDefaultUserSettingsRSessionAppSettings;
  /**
  * A collection of settings that configure user interaction with the RStudioServerPro app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#r_studio_server_pro_app_settings SagemakerDomain#r_studio_server_pro_app_settings}
  */
  readonly rStudioServerProAppSettings?: SagemakerDomainDefaultUserSettingsRStudioServerProAppSettings;
  /**
  * The security groups for the Amazon Virtual Private Cloud (VPC) that Studio uses for communication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#security_groups SagemakerDomain#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * The sharing settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#sharing_settings SagemakerDomain#sharing_settings}
  */
  readonly sharingSettings?: SagemakerDomainDefaultUserSettingsSharingSettings;
  /**
  * Default storage settings for a space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#space_storage_settings SagemakerDomain#space_storage_settings}
  */
  readonly spaceStorageSettings?: SagemakerDomainDefaultUserSettingsSpaceStorageSettings;
  /**
  * Indicates whether the Studio experience is available to users. If not, users cannot access Studio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#studio_web_portal SagemakerDomain#studio_web_portal}
  */
  readonly studioWebPortal?: string;
  /**
  * Studio settings. If these settings are applied on a user level, they take priority over the settings applied on a domain level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#studio_web_portal_settings SagemakerDomain#studio_web_portal_settings}
  */
  readonly studioWebPortalSettings?: SagemakerDomainDefaultUserSettingsStudioWebPortalSettings;
}

export function sagemakerDomainDefaultUserSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_mount_home_efs: cdktn.stringToTerraform(struct!.autoMountHomeEfs),
    code_editor_app_settings: sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsToTerraform(struct!.codeEditorAppSettings),
    custom_file_system_configs: cdktn.listMapper(sagemakerDomainDefaultUserSettingsCustomFileSystemConfigsToTerraform, false)(struct!.customFileSystemConfigs),
    custom_posix_user_config: sagemakerDomainDefaultUserSettingsCustomPosixUserConfigToTerraform(struct!.customPosixUserConfig),
    default_landing_uri: cdktn.stringToTerraform(struct!.defaultLandingUri),
    execution_role: cdktn.stringToTerraform(struct!.executionRole),
    jupyter_lab_app_settings: sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsToTerraform(struct!.jupyterLabAppSettings),
    jupyter_server_app_settings: sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToTerraform(struct!.jupyterServerAppSettings),
    kernel_gateway_app_settings: sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToTerraform(struct!.kernelGatewayAppSettings),
    r_session_app_settings: sagemakerDomainDefaultUserSettingsRSessionAppSettingsToTerraform(struct!.rSessionAppSettings),
    r_studio_server_pro_app_settings: sagemakerDomainDefaultUserSettingsRStudioServerProAppSettingsToTerraform(struct!.rStudioServerProAppSettings),
    security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroups),
    sharing_settings: sagemakerDomainDefaultUserSettingsSharingSettingsToTerraform(struct!.sharingSettings),
    space_storage_settings: sagemakerDomainDefaultUserSettingsSpaceStorageSettingsToTerraform(struct!.spaceStorageSettings),
    studio_web_portal: cdktn.stringToTerraform(struct!.studioWebPortal),
    studio_web_portal_settings: sagemakerDomainDefaultUserSettingsStudioWebPortalSettingsToTerraform(struct!.studioWebPortalSettings),
  }
}


export function sagemakerDomainDefaultUserSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettings | cdktn.IResolvable): any {
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
      value: sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsToHclTerraform(struct!.codeEditorAppSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDomainDefaultUserSettingsCodeEditorAppSettings",
    },
    custom_file_system_configs: {
      value: cdktn.listMapperHcl(sagemakerDomainDefaultUserSettingsCustomFileSystemConfigsToHclTerraform, false)(struct!.customFileSystemConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsCustomFileSystemConfigsList",
    },
    custom_posix_user_config: {
      value: sagemakerDomainDefaultUserSettingsCustomPosixUserConfigToHclTerraform(struct!.customPosixUserConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDomainDefaultUserSettingsCustomPosixUserConfig",
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
      value: sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsToHclTerraform(struct!.jupyterLabAppSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDomainDefaultUserSettingsJupyterLabAppSettings",
    },
    jupyter_server_app_settings: {
      value: sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToHclTerraform(struct!.jupyterServerAppSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDomainDefaultUserSettingsJupyterServerAppSettings",
    },
    kernel_gateway_app_settings: {
      value: sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToHclTerraform(struct!.kernelGatewayAppSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings",
    },
    r_session_app_settings: {
      value: sagemakerDomainDefaultUserSettingsRSessionAppSettingsToHclTerraform(struct!.rSessionAppSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDomainDefaultUserSettingsRSessionAppSettings",
    },
    r_studio_server_pro_app_settings: {
      value: sagemakerDomainDefaultUserSettingsRStudioServerProAppSettingsToHclTerraform(struct!.rStudioServerProAppSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDomainDefaultUserSettingsRStudioServerProAppSettings",
    },
    security_groups: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sharing_settings: {
      value: sagemakerDomainDefaultUserSettingsSharingSettingsToHclTerraform(struct!.sharingSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDomainDefaultUserSettingsSharingSettings",
    },
    space_storage_settings: {
      value: sagemakerDomainDefaultUserSettingsSpaceStorageSettingsToHclTerraform(struct!.spaceStorageSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDomainDefaultUserSettingsSpaceStorageSettings",
    },
    studio_web_portal: {
      value: cdktn.stringToHclTerraform(struct!.studioWebPortal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    studio_web_portal_settings: {
      value: sagemakerDomainDefaultUserSettingsStudioWebPortalSettingsToHclTerraform(struct!.studioWebPortalSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDomainDefaultUserSettingsStudioWebPortalSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettings | cdktn.IResolvable | undefined {
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
    if (this._rSessionAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rSessionAppSettings = this._rSessionAppSettings?.internalValue;
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

  public set internalValue(value: SagemakerDomainDefaultUserSettings | cdktn.IResolvable | undefined) {
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
      this._rSessionAppSettings.internalValue = undefined;
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
      this._rSessionAppSettings.internalValue = value.rSessionAppSettings;
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
  private _codeEditorAppSettings = new SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsOutputReference(this, "code_editor_app_settings");
  public get codeEditorAppSettings() {
    return this._codeEditorAppSettings;
  }
  public putCodeEditorAppSettings(value: SagemakerDomainDefaultUserSettingsCodeEditorAppSettings) {
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
  private _customFileSystemConfigs = new SagemakerDomainDefaultUserSettingsCustomFileSystemConfigsList(this, "custom_file_system_configs", false);
  public get customFileSystemConfigs() {
    return this._customFileSystemConfigs;
  }
  public putCustomFileSystemConfigs(value: SagemakerDomainDefaultUserSettingsCustomFileSystemConfigs[] | cdktn.IResolvable) {
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
  private _customPosixUserConfig = new SagemakerDomainDefaultUserSettingsCustomPosixUserConfigOutputReference(this, "custom_posix_user_config");
  public get customPosixUserConfig() {
    return this._customPosixUserConfig;
  }
  public putCustomPosixUserConfig(value: SagemakerDomainDefaultUserSettingsCustomPosixUserConfig) {
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

  // execution_role - computed: false, optional: false, required: true
  private _executionRole?: string; 
  public get executionRole() {
    return this.getStringAttribute('execution_role');
  }
  public set executionRole(value: string) {
    this._executionRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleInput() {
    return this._executionRole;
  }

  // jupyter_lab_app_settings - computed: true, optional: true, required: false
  private _jupyterLabAppSettings = new SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsOutputReference(this, "jupyter_lab_app_settings");
  public get jupyterLabAppSettings() {
    return this._jupyterLabAppSettings;
  }
  public putJupyterLabAppSettings(value: SagemakerDomainDefaultUserSettingsJupyterLabAppSettings) {
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
  private _jupyterServerAppSettings = new SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference(this, "jupyter_server_app_settings");
  public get jupyterServerAppSettings() {
    return this._jupyterServerAppSettings;
  }
  public putJupyterServerAppSettings(value: SagemakerDomainDefaultUserSettingsJupyterServerAppSettings) {
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
  private _kernelGatewayAppSettings = new SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference(this, "kernel_gateway_app_settings");
  public get kernelGatewayAppSettings() {
    return this._kernelGatewayAppSettings;
  }
  public putKernelGatewayAppSettings(value: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings) {
    this._kernelGatewayAppSettings.internalValue = value;
  }
  public resetKernelGatewayAppSettings() {
    this._kernelGatewayAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelGatewayAppSettingsInput() {
    return this._kernelGatewayAppSettings.internalValue;
  }

  // r_session_app_settings - computed: true, optional: true, required: false
  private _rSessionAppSettings = new SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference(this, "r_session_app_settings");
  public get rSessionAppSettings() {
    return this._rSessionAppSettings;
  }
  public putRSessionAppSettings(value: SagemakerDomainDefaultUserSettingsRSessionAppSettings) {
    this._rSessionAppSettings.internalValue = value;
  }
  public resetRSessionAppSettings() {
    this._rSessionAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rSessionAppSettingsInput() {
    return this._rSessionAppSettings.internalValue;
  }

  // r_studio_server_pro_app_settings - computed: true, optional: true, required: false
  private _rStudioServerProAppSettings = new SagemakerDomainDefaultUserSettingsRStudioServerProAppSettingsOutputReference(this, "r_studio_server_pro_app_settings");
  public get rStudioServerProAppSettings() {
    return this._rStudioServerProAppSettings;
  }
  public putRStudioServerProAppSettings(value: SagemakerDomainDefaultUserSettingsRStudioServerProAppSettings) {
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
  private _sharingSettings = new SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference(this, "sharing_settings");
  public get sharingSettings() {
    return this._sharingSettings;
  }
  public putSharingSettings(value: SagemakerDomainDefaultUserSettingsSharingSettings) {
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
  private _spaceStorageSettings = new SagemakerDomainDefaultUserSettingsSpaceStorageSettingsOutputReference(this, "space_storage_settings");
  public get spaceStorageSettings() {
    return this._spaceStorageSettings;
  }
  public putSpaceStorageSettings(value: SagemakerDomainDefaultUserSettingsSpaceStorageSettings) {
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
  private _studioWebPortalSettings = new SagemakerDomainDefaultUserSettingsStudioWebPortalSettingsOutputReference(this, "studio_web_portal_settings");
  public get studioWebPortalSettings() {
    return this._studioWebPortalSettings;
  }
  public putStudioWebPortalSettings(value: SagemakerDomainDefaultUserSettingsStudioWebPortalSettings) {
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
export interface SagemakerDomainDomainSettingsDockerSettings {
  /**
  * The flag to enable/disable docker-proxy server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#enable_docker_access SagemakerDomain#enable_docker_access}
  */
  readonly enableDockerAccess?: string;
  /**
  * A list of account id's that would be used to pull images from in VpcOnly mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#vpc_only_trusted_accounts SagemakerDomain#vpc_only_trusted_accounts}
  */
  readonly vpcOnlyTrustedAccounts?: string[];
}

export function sagemakerDomainDomainSettingsDockerSettingsToTerraform(struct?: SagemakerDomainDomainSettingsDockerSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_docker_access: cdktn.stringToTerraform(struct!.enableDockerAccess),
    vpc_only_trusted_accounts: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.vpcOnlyTrustedAccounts),
  }
}


export function sagemakerDomainDomainSettingsDockerSettingsToHclTerraform(struct?: SagemakerDomainDomainSettingsDockerSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_docker_access: {
      value: cdktn.stringToHclTerraform(struct!.enableDockerAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_only_trusted_accounts: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.vpcOnlyTrustedAccounts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDomainSettingsDockerSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDomainSettingsDockerSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableDockerAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDockerAccess = this._enableDockerAccess;
    }
    if (this._vpcOnlyTrustedAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcOnlyTrustedAccounts = this._vpcOnlyTrustedAccounts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDomainSettingsDockerSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableDockerAccess = undefined;
      this._vpcOnlyTrustedAccounts = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableDockerAccess = value.enableDockerAccess;
      this._vpcOnlyTrustedAccounts = value.vpcOnlyTrustedAccounts;
    }
  }

  // enable_docker_access - computed: true, optional: true, required: false
  private _enableDockerAccess?: string; 
  public get enableDockerAccess() {
    return this.getStringAttribute('enable_docker_access');
  }
  public set enableDockerAccess(value: string) {
    this._enableDockerAccess = value;
  }
  public resetEnableDockerAccess() {
    this._enableDockerAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDockerAccessInput() {
    return this._enableDockerAccess;
  }

  // vpc_only_trusted_accounts - computed: true, optional: true, required: false
  private _vpcOnlyTrustedAccounts?: string[]; 
  public get vpcOnlyTrustedAccounts() {
    return this.getListAttribute('vpc_only_trusted_accounts');
  }
  public set vpcOnlyTrustedAccounts(value: string[]) {
    this._vpcOnlyTrustedAccounts = value;
  }
  public resetVpcOnlyTrustedAccounts() {
    this._vpcOnlyTrustedAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcOnlyTrustedAccountsInput() {
    return this._vpcOnlyTrustedAccounts;
  }
}
export interface SagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec {
  /**
  * The instance type that the image version runs on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#instance_type SagemakerDomain#instance_type}
  */
  readonly instanceType?: string;
  /**
  * The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * The Amazon Resource Name (ARN) of the SageMaker image that the image version belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#sage_maker_image_arn SagemakerDomain#sage_maker_image_arn}
  */
  readonly sageMakerImageArn?: string;
  /**
  * The Amazon Resource Name (ARN) of the image version created on the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#sage_maker_image_version_arn SagemakerDomain#sage_maker_image_version_arn}
  */
  readonly sageMakerImageVersionArn?: string;
  /**
  * The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#training_plan_arn SagemakerDomain#training_plan_arn}
  */
  readonly trainingPlanArn?: string;
}

export function sagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktn.stringToTerraform(struct!.lifecycleConfigArn),
    sage_maker_image_arn: cdktn.stringToTerraform(struct!.sageMakerImageArn),
    sage_maker_image_version_arn: cdktn.stringToTerraform(struct!.sageMakerImageVersionArn),
    training_plan_arn: cdktn.stringToTerraform(struct!.trainingPlanArn),
  }
}


export function sagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec | cdktn.IResolvable): any {
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
    training_plan_arn: {
      value: cdktn.stringToHclTerraform(struct!.trainingPlanArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec | cdktn.IResolvable | undefined {
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
    if (this._trainingPlanArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingPlanArn = this._trainingPlanArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sageMakerImageArn = undefined;
      this._sageMakerImageVersionArn = undefined;
      this._trainingPlanArn = undefined;
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
      this._trainingPlanArn = value.trainingPlanArn;
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

  // training_plan_arn - computed: true, optional: true, required: false
  private _trainingPlanArn?: string; 
  public get trainingPlanArn() {
    return this.getStringAttribute('training_plan_arn');
  }
  public set trainingPlanArn(value: string) {
    this._trainingPlanArn = value;
  }
  public resetTrainingPlanArn() {
    this._trainingPlanArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingPlanArnInput() {
    return this._trainingPlanArn;
  }
}
export interface SagemakerDomainDomainSettingsRStudioServerProDomainSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}
  */
  readonly defaultResourceSpec?: SagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec;
  /**
  * The ARN of the execution role for the RStudioServerPro Domain-level app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#domain_execution_role_arn SagemakerDomain#domain_execution_role_arn}
  */
  readonly domainExecutionRoleArn?: string;
  /**
  * A URL pointing to an RStudio Connect server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#r_studio_connect_url SagemakerDomain#r_studio_connect_url}
  */
  readonly rStudioConnectUrl?: string;
  /**
  * A URL pointing to an RStudio Package Manager server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#r_studio_package_manager_url SagemakerDomain#r_studio_package_manager_url}
  */
  readonly rStudioPackageManagerUrl?: string;
}

export function sagemakerDomainDomainSettingsRStudioServerProDomainSettingsToTerraform(struct?: SagemakerDomainDomainSettingsRStudioServerProDomainSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_resource_spec: sagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
    domain_execution_role_arn: cdktn.stringToTerraform(struct!.domainExecutionRoleArn),
    r_studio_connect_url: cdktn.stringToTerraform(struct!.rStudioConnectUrl),
    r_studio_package_manager_url: cdktn.stringToTerraform(struct!.rStudioPackageManagerUrl),
  }
}


export function sagemakerDomainDomainSettingsRStudioServerProDomainSettingsToHclTerraform(struct?: SagemakerDomainDomainSettingsRStudioServerProDomainSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_resource_spec: {
      value: sagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec",
    },
    domain_execution_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.domainExecutionRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    r_studio_connect_url: {
      value: cdktn.stringToHclTerraform(struct!.rStudioConnectUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    r_studio_package_manager_url: {
      value: cdktn.stringToHclTerraform(struct!.rStudioPackageManagerUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDomainSettingsRStudioServerProDomainSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDomainSettingsRStudioServerProDomainSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    if (this._domainExecutionRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainExecutionRoleArn = this._domainExecutionRoleArn;
    }
    if (this._rStudioConnectUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.rStudioConnectUrl = this._rStudioConnectUrl;
    }
    if (this._rStudioPackageManagerUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.rStudioPackageManagerUrl = this._rStudioPackageManagerUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDomainSettingsRStudioServerProDomainSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultResourceSpec.internalValue = undefined;
      this._domainExecutionRoleArn = undefined;
      this._rStudioConnectUrl = undefined;
      this._rStudioPackageManagerUrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
      this._domainExecutionRoleArn = value.domainExecutionRoleArn;
      this._rStudioConnectUrl = value.rStudioConnectUrl;
      this._rStudioPackageManagerUrl = value.rStudioPackageManagerUrl;
    }
  }

  // default_resource_spec - computed: true, optional: true, required: false
  private _defaultResourceSpec = new SagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: SagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }

  // domain_execution_role_arn - computed: true, optional: true, required: false
  private _domainExecutionRoleArn?: string; 
  public get domainExecutionRoleArn() {
    return this.getStringAttribute('domain_execution_role_arn');
  }
  public set domainExecutionRoleArn(value: string) {
    this._domainExecutionRoleArn = value;
  }
  public resetDomainExecutionRoleArn() {
    this._domainExecutionRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainExecutionRoleArnInput() {
    return this._domainExecutionRoleArn;
  }

  // r_studio_connect_url - computed: true, optional: true, required: false
  private _rStudioConnectUrl?: string; 
  public get rStudioConnectUrl() {
    return this.getStringAttribute('r_studio_connect_url');
  }
  public set rStudioConnectUrl(value: string) {
    this._rStudioConnectUrl = value;
  }
  public resetRStudioConnectUrl() {
    this._rStudioConnectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rStudioConnectUrlInput() {
    return this._rStudioConnectUrl;
  }

  // r_studio_package_manager_url - computed: true, optional: true, required: false
  private _rStudioPackageManagerUrl?: string; 
  public get rStudioPackageManagerUrl() {
    return this.getStringAttribute('r_studio_package_manager_url');
  }
  public set rStudioPackageManagerUrl(value: string) {
    this._rStudioPackageManagerUrl = value;
  }
  public resetRStudioPackageManagerUrl() {
    this._rStudioPackageManagerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rStudioPackageManagerUrlInput() {
    return this._rStudioPackageManagerUrl;
  }
}
export interface SagemakerDomainDomainSettingsUnifiedStudioSettings {
  /**
  * The ID of the AWS account that has the Amazon SageMaker Unified Studio domain. The default value, if you don't specify an ID, is the ID of the account that has the Amazon SageMaker AI domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#domain_account_id SagemakerDomain#domain_account_id}
  */
  readonly domainAccountId?: string;
  /**
  * The ID of the Amazon SageMaker Unified Studio domain associated with this domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#domain_id SagemakerDomain#domain_id}
  */
  readonly domainId?: string;
  /**
  * The AWS Region where the domain is located in Amazon SageMaker Unified Studio. The default value, if you don't specify a Region, is the Region where the Amazon SageMaker AI domain is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#domain_region SagemakerDomain#domain_region}
  */
  readonly domainRegion?: string;
  /**
  * The ID of the environment that Amazon SageMaker Unified Studio associates with the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#environment_id SagemakerDomain#environment_id}
  */
  readonly environmentId?: string;
  /**
  * The ID of the Amazon SageMaker Unified Studio project that corresponds to the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#project_id SagemakerDomain#project_id}
  */
  readonly projectId?: string;
  /**
  * The location where Amazon S3 stores temporary execution data and other artifacts for the project that corresponds to the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#project_s3_path SagemakerDomain#project_s3_path}
  */
  readonly projectS3Path?: string;
  /**
  * Sets whether you can access the domain in Amazon SageMaker Studio:
  * 
  * ENABLED
  * You can access the domain in Amazon SageMaker Studio. If you migrate the domain to Amazon SageMaker Unified Studio, you can access it in both studio interfaces.
  * DISABLED
  * You can't access the domain in Amazon SageMaker Studio. If you migrate the domain to Amazon SageMaker Unified Studio, you can access it only in that studio interface.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#studio_web_portal_access SagemakerDomain#studio_web_portal_access}
  */
  readonly studioWebPortalAccess?: string;
}

export function sagemakerDomainDomainSettingsUnifiedStudioSettingsToTerraform(struct?: SagemakerDomainDomainSettingsUnifiedStudioSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    domain_account_id: cdktn.stringToTerraform(struct!.domainAccountId),
    domain_id: cdktn.stringToTerraform(struct!.domainId),
    domain_region: cdktn.stringToTerraform(struct!.domainRegion),
    environment_id: cdktn.stringToTerraform(struct!.environmentId),
    project_id: cdktn.stringToTerraform(struct!.projectId),
    project_s3_path: cdktn.stringToTerraform(struct!.projectS3Path),
    studio_web_portal_access: cdktn.stringToTerraform(struct!.studioWebPortalAccess),
  }
}


export function sagemakerDomainDomainSettingsUnifiedStudioSettingsToHclTerraform(struct?: SagemakerDomainDomainSettingsUnifiedStudioSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    domain_account_id: {
      value: cdktn.stringToHclTerraform(struct!.domainAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_id: {
      value: cdktn.stringToHclTerraform(struct!.domainId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_region: {
      value: cdktn.stringToHclTerraform(struct!.domainRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_id: {
      value: cdktn.stringToHclTerraform(struct!.environmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktn.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_s3_path: {
      value: cdktn.stringToHclTerraform(struct!.projectS3Path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    studio_web_portal_access: {
      value: cdktn.stringToHclTerraform(struct!.studioWebPortalAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDomainSettingsUnifiedStudioSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDomainSettingsUnifiedStudioSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainAccountId = this._domainAccountId;
    }
    if (this._domainId !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainId = this._domainId;
    }
    if (this._domainRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainRegion = this._domainRegion;
    }
    if (this._environmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentId = this._environmentId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._projectS3Path !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectS3Path = this._projectS3Path;
    }
    if (this._studioWebPortalAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.studioWebPortalAccess = this._studioWebPortalAccess;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDomainSettingsUnifiedStudioSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainAccountId = undefined;
      this._domainId = undefined;
      this._domainRegion = undefined;
      this._environmentId = undefined;
      this._projectId = undefined;
      this._projectS3Path = undefined;
      this._studioWebPortalAccess = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainAccountId = value.domainAccountId;
      this._domainId = value.domainId;
      this._domainRegion = value.domainRegion;
      this._environmentId = value.environmentId;
      this._projectId = value.projectId;
      this._projectS3Path = value.projectS3Path;
      this._studioWebPortalAccess = value.studioWebPortalAccess;
    }
  }

  // domain_account_id - computed: true, optional: true, required: false
  private _domainAccountId?: string; 
  public get domainAccountId() {
    return this.getStringAttribute('domain_account_id');
  }
  public set domainAccountId(value: string) {
    this._domainAccountId = value;
  }
  public resetDomainAccountId() {
    this._domainAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainAccountIdInput() {
    return this._domainAccountId;
  }

  // domain_id - computed: true, optional: true, required: false
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  public resetDomainId() {
    this._domainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // domain_region - computed: true, optional: true, required: false
  private _domainRegion?: string; 
  public get domainRegion() {
    return this.getStringAttribute('domain_region');
  }
  public set domainRegion(value: string) {
    this._domainRegion = value;
  }
  public resetDomainRegion() {
    this._domainRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainRegionInput() {
    return this._domainRegion;
  }

  // environment_id - computed: true, optional: true, required: false
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  public resetEnvironmentId() {
    this._environmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // project_s3_path - computed: true, optional: true, required: false
  private _projectS3Path?: string; 
  public get projectS3Path() {
    return this.getStringAttribute('project_s3_path');
  }
  public set projectS3Path(value: string) {
    this._projectS3Path = value;
  }
  public resetProjectS3Path() {
    this._projectS3Path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectS3PathInput() {
    return this._projectS3Path;
  }

  // studio_web_portal_access - computed: true, optional: true, required: false
  private _studioWebPortalAccess?: string; 
  public get studioWebPortalAccess() {
    return this.getStringAttribute('studio_web_portal_access');
  }
  public set studioWebPortalAccess(value: string) {
    this._studioWebPortalAccess = value;
  }
  public resetStudioWebPortalAccess() {
    this._studioWebPortalAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get studioWebPortalAccessInput() {
    return this._studioWebPortalAccess;
  }
}
export interface SagemakerDomainDomainSettings {
  /**
  * A collection of settings that are required to start docker-proxy server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#docker_settings SagemakerDomain#docker_settings}
  */
  readonly dockerSettings?: SagemakerDomainDomainSettingsDockerSettings;
  /**
  * The configuration for attaching a SageMaker user profile name to the execution role as a sts:SourceIdentity key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#execution_role_identity_config SagemakerDomain#execution_role_identity_config}
  */
  readonly executionRoleIdentityConfig?: string;
  /**
  * A setting to indicate if IPv6 routing should be enabled along with IPv4 or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#ip_address_type SagemakerDomain#ip_address_type}
  */
  readonly ipAddressType?: string;
  /**
  * A collection of settings that update the current configuration for the RStudioServerPro Domain-level app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#r_studio_server_pro_domain_settings SagemakerDomain#r_studio_server_pro_domain_settings}
  */
  readonly rStudioServerProDomainSettings?: SagemakerDomainDomainSettingsRStudioServerProDomainSettings;
  /**
  * The security groups for the Amazon Virtual Private Cloud that the Domain uses for communication between Domain-level apps and user apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#security_group_ids SagemakerDomain#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * A collection of settings that apply to an Amazon SageMaker AI domain when you use it in Amazon SageMaker Unified Studio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#unified_studio_settings SagemakerDomain#unified_studio_settings}
  */
  readonly unifiedStudioSettings?: SagemakerDomainDomainSettingsUnifiedStudioSettings;
}

export function sagemakerDomainDomainSettingsToTerraform(struct?: SagemakerDomainDomainSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    docker_settings: sagemakerDomainDomainSettingsDockerSettingsToTerraform(struct!.dockerSettings),
    execution_role_identity_config: cdktn.stringToTerraform(struct!.executionRoleIdentityConfig),
    ip_address_type: cdktn.stringToTerraform(struct!.ipAddressType),
    r_studio_server_pro_domain_settings: sagemakerDomainDomainSettingsRStudioServerProDomainSettingsToTerraform(struct!.rStudioServerProDomainSettings),
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    unified_studio_settings: sagemakerDomainDomainSettingsUnifiedStudioSettingsToTerraform(struct!.unifiedStudioSettings),
  }
}


export function sagemakerDomainDomainSettingsToHclTerraform(struct?: SagemakerDomainDomainSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    docker_settings: {
      value: sagemakerDomainDomainSettingsDockerSettingsToHclTerraform(struct!.dockerSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDomainDomainSettingsDockerSettings",
    },
    execution_role_identity_config: {
      value: cdktn.stringToHclTerraform(struct!.executionRoleIdentityConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address_type: {
      value: cdktn.stringToHclTerraform(struct!.ipAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    r_studio_server_pro_domain_settings: {
      value: sagemakerDomainDomainSettingsRStudioServerProDomainSettingsToHclTerraform(struct!.rStudioServerProDomainSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDomainDomainSettingsRStudioServerProDomainSettings",
    },
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    unified_studio_settings: {
      value: sagemakerDomainDomainSettingsUnifiedStudioSettingsToHclTerraform(struct!.unifiedStudioSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDomainDomainSettingsUnifiedStudioSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDomainSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDomainDomainSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dockerSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerSettings = this._dockerSettings?.internalValue;
    }
    if (this._executionRoleIdentityConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRoleIdentityConfig = this._executionRoleIdentityConfig;
    }
    if (this._ipAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressType = this._ipAddressType;
    }
    if (this._rStudioServerProDomainSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rStudioServerProDomainSettings = this._rStudioServerProDomainSettings?.internalValue;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._unifiedStudioSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unifiedStudioSettings = this._unifiedStudioSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDomainSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dockerSettings.internalValue = undefined;
      this._executionRoleIdentityConfig = undefined;
      this._ipAddressType = undefined;
      this._rStudioServerProDomainSettings.internalValue = undefined;
      this._securityGroupIds = undefined;
      this._unifiedStudioSettings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dockerSettings.internalValue = value.dockerSettings;
      this._executionRoleIdentityConfig = value.executionRoleIdentityConfig;
      this._ipAddressType = value.ipAddressType;
      this._rStudioServerProDomainSettings.internalValue = value.rStudioServerProDomainSettings;
      this._securityGroupIds = value.securityGroupIds;
      this._unifiedStudioSettings.internalValue = value.unifiedStudioSettings;
    }
  }

  // docker_settings - computed: true, optional: true, required: false
  private _dockerSettings = new SagemakerDomainDomainSettingsDockerSettingsOutputReference(this, "docker_settings");
  public get dockerSettings() {
    return this._dockerSettings;
  }
  public putDockerSettings(value: SagemakerDomainDomainSettingsDockerSettings) {
    this._dockerSettings.internalValue = value;
  }
  public resetDockerSettings() {
    this._dockerSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerSettingsInput() {
    return this._dockerSettings.internalValue;
  }

  // execution_role_identity_config - computed: true, optional: true, required: false
  private _executionRoleIdentityConfig?: string; 
  public get executionRoleIdentityConfig() {
    return this.getStringAttribute('execution_role_identity_config');
  }
  public set executionRoleIdentityConfig(value: string) {
    this._executionRoleIdentityConfig = value;
  }
  public resetExecutionRoleIdentityConfig() {
    this._executionRoleIdentityConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleIdentityConfigInput() {
    return this._executionRoleIdentityConfig;
  }

  // ip_address_type - computed: true, optional: true, required: false
  private _ipAddressType?: string; 
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }
  public set ipAddressType(value: string) {
    this._ipAddressType = value;
  }
  public resetIpAddressType() {
    this._ipAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressTypeInput() {
    return this._ipAddressType;
  }

  // r_studio_server_pro_domain_settings - computed: true, optional: true, required: false
  private _rStudioServerProDomainSettings = new SagemakerDomainDomainSettingsRStudioServerProDomainSettingsOutputReference(this, "r_studio_server_pro_domain_settings");
  public get rStudioServerProDomainSettings() {
    return this._rStudioServerProDomainSettings;
  }
  public putRStudioServerProDomainSettings(value: SagemakerDomainDomainSettingsRStudioServerProDomainSettings) {
    this._rStudioServerProDomainSettings.internalValue = value;
  }
  public resetRStudioServerProDomainSettings() {
    this._rStudioServerProDomainSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rStudioServerProDomainSettingsInput() {
    return this._rStudioServerProDomainSettings.internalValue;
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // unified_studio_settings - computed: true, optional: true, required: false
  private _unifiedStudioSettings = new SagemakerDomainDomainSettingsUnifiedStudioSettingsOutputReference(this, "unified_studio_settings");
  public get unifiedStudioSettings() {
    return this._unifiedStudioSettings;
  }
  public putUnifiedStudioSettings(value: SagemakerDomainDomainSettingsUnifiedStudioSettings) {
    this._unifiedStudioSettings.internalValue = value;
  }
  public resetUnifiedStudioSettings() {
    this._unifiedStudioSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unifiedStudioSettingsInput() {
    return this._unifiedStudioSettings.internalValue;
  }
}
export interface SagemakerDomainTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#key SagemakerDomain#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#value SagemakerDomain#value}
  */
  readonly value?: string;
}

export function sagemakerDomainTagsToTerraform(struct?: SagemakerDomainTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function sagemakerDomainTagsToHclTerraform(struct?: SagemakerDomainTags | cdktn.IResolvable): any {
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

export class SagemakerDomainTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerDomainTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDomainTags | cdktn.IResolvable | undefined) {
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

export class SagemakerDomainTagsList extends cdktn.ComplexList {
  public internalValue? : SagemakerDomainTags[] | cdktn.IResolvable

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
  public get(index: number): SagemakerDomainTagsOutputReference {
    return new SagemakerDomainTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain awscc_sagemaker_domain}
*/
export class SagemakerDomain extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_sagemaker_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SagemakerDomain resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerDomain to import
  * @param importFromId The id of the existing SagemakerDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_domain awscc_sagemaker_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerDomainConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_domain',
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
    this._appNetworkAccessType = config.appNetworkAccessType;
    this._appSecurityGroupManagement = config.appSecurityGroupManagement;
    this._authMode = config.authMode;
    this._defaultSpaceSettings.internalValue = config.defaultSpaceSettings;
    this._defaultUserSettings.internalValue = config.defaultUserSettings;
    this._domainName = config.domainName;
    this._domainSettings.internalValue = config.domainSettings;
    this._homeEfsFileSystemCreation = config.homeEfsFileSystemCreation;
    this._kmsKeyId = config.kmsKeyId;
    this._subnetIds = config.subnetIds;
    this._tagPropagation = config.tagPropagation;
    this._tags.internalValue = config.tags;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_network_access_type - computed: true, optional: true, required: false
  private _appNetworkAccessType?: string; 
  public get appNetworkAccessType() {
    return this.getStringAttribute('app_network_access_type');
  }
  public set appNetworkAccessType(value: string) {
    this._appNetworkAccessType = value;
  }
  public resetAppNetworkAccessType() {
    this._appNetworkAccessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appNetworkAccessTypeInput() {
    return this._appNetworkAccessType;
  }

  // app_security_group_management - computed: true, optional: true, required: false
  private _appSecurityGroupManagement?: string; 
  public get appSecurityGroupManagement() {
    return this.getStringAttribute('app_security_group_management');
  }
  public set appSecurityGroupManagement(value: string) {
    this._appSecurityGroupManagement = value;
  }
  public resetAppSecurityGroupManagement() {
    this._appSecurityGroupManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSecurityGroupManagementInput() {
    return this._appSecurityGroupManagement;
  }

  // auth_mode - computed: false, optional: false, required: true
  private _authMode?: string; 
  public get authMode() {
    return this.getStringAttribute('auth_mode');
  }
  public set authMode(value: string) {
    this._authMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authModeInput() {
    return this._authMode;
  }

  // default_space_settings - computed: true, optional: true, required: false
  private _defaultSpaceSettings = new SagemakerDomainDefaultSpaceSettingsOutputReference(this, "default_space_settings");
  public get defaultSpaceSettings() {
    return this._defaultSpaceSettings;
  }
  public putDefaultSpaceSettings(value: SagemakerDomainDefaultSpaceSettings) {
    this._defaultSpaceSettings.internalValue = value;
  }
  public resetDefaultSpaceSettings() {
    this._defaultSpaceSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSpaceSettingsInput() {
    return this._defaultSpaceSettings.internalValue;
  }

  // default_user_settings - computed: false, optional: false, required: true
  private _defaultUserSettings = new SagemakerDomainDefaultUserSettingsOutputReference(this, "default_user_settings");
  public get defaultUserSettings() {
    return this._defaultUserSettings;
  }
  public putDefaultUserSettings(value: SagemakerDomainDefaultUserSettings) {
    this._defaultUserSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUserSettingsInput() {
    return this._defaultUserSettings.internalValue;
  }

  // domain_arn - computed: true, optional: false, required: false
  public get domainArn() {
    return this.getStringAttribute('domain_arn');
  }

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // domain_settings - computed: true, optional: true, required: false
  private _domainSettings = new SagemakerDomainDomainSettingsOutputReference(this, "domain_settings");
  public get domainSettings() {
    return this._domainSettings;
  }
  public putDomainSettings(value: SagemakerDomainDomainSettings) {
    this._domainSettings.internalValue = value;
  }
  public resetDomainSettings() {
    this._domainSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainSettingsInput() {
    return this._domainSettings.internalValue;
  }

  // home_efs_file_system_creation - computed: true, optional: true, required: false
  private _homeEfsFileSystemCreation?: string; 
  public get homeEfsFileSystemCreation() {
    return this.getStringAttribute('home_efs_file_system_creation');
  }
  public set homeEfsFileSystemCreation(value: string) {
    this._homeEfsFileSystemCreation = value;
  }
  public resetHomeEfsFileSystemCreation() {
    this._homeEfsFileSystemCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeEfsFileSystemCreationInput() {
    return this._homeEfsFileSystemCreation;
  }

  // home_efs_file_system_id - computed: true, optional: false, required: false
  public get homeEfsFileSystemId() {
    return this.getStringAttribute('home_efs_file_system_id');
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

  // security_group_id_for_domain_boundary - computed: true, optional: false, required: false
  public get securityGroupIdForDomainBoundary() {
    return this.getStringAttribute('security_group_id_for_domain_boundary');
  }

  // single_sign_on_application_arn - computed: true, optional: false, required: false
  public get singleSignOnApplicationArn() {
    return this.getStringAttribute('single_sign_on_application_arn');
  }

  // single_sign_on_managed_application_instance_id - computed: true, optional: false, required: false
  public get singleSignOnManagedApplicationInstanceId() {
    return this.getStringAttribute('single_sign_on_managed_application_instance_id');
  }

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // tag_propagation - computed: true, optional: true, required: false
  private _tagPropagation?: string; 
  public get tagPropagation() {
    return this.getStringAttribute('tag_propagation');
  }
  public set tagPropagation(value: string) {
    this._tagPropagation = value;
  }
  public resetTagPropagation() {
    this._tagPropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagPropagationInput() {
    return this._tagPropagation;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new SagemakerDomainTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: SagemakerDomainTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_network_access_type: cdktn.stringToTerraform(this._appNetworkAccessType),
      app_security_group_management: cdktn.stringToTerraform(this._appSecurityGroupManagement),
      auth_mode: cdktn.stringToTerraform(this._authMode),
      default_space_settings: sagemakerDomainDefaultSpaceSettingsToTerraform(this._defaultSpaceSettings.internalValue),
      default_user_settings: sagemakerDomainDefaultUserSettingsToTerraform(this._defaultUserSettings.internalValue),
      domain_name: cdktn.stringToTerraform(this._domainName),
      domain_settings: sagemakerDomainDomainSettingsToTerraform(this._domainSettings.internalValue),
      home_efs_file_system_creation: cdktn.stringToTerraform(this._homeEfsFileSystemCreation),
      kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
      subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._subnetIds),
      tag_propagation: cdktn.stringToTerraform(this._tagPropagation),
      tags: cdktn.listMapper(sagemakerDomainTagsToTerraform, false)(this._tags.internalValue),
      vpc_id: cdktn.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_network_access_type: {
        value: cdktn.stringToHclTerraform(this._appNetworkAccessType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_security_group_management: {
        value: cdktn.stringToHclTerraform(this._appSecurityGroupManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_mode: {
        value: cdktn.stringToHclTerraform(this._authMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_space_settings: {
        value: sagemakerDomainDefaultSpaceSettingsToHclTerraform(this._defaultSpaceSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerDomainDefaultSpaceSettings",
      },
      default_user_settings: {
        value: sagemakerDomainDefaultUserSettingsToHclTerraform(this._defaultUserSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerDomainDefaultUserSettings",
      },
      domain_name: {
        value: cdktn.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_settings: {
        value: sagemakerDomainDomainSettingsToHclTerraform(this._domainSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerDomainDomainSettings",
      },
      home_efs_file_system_creation: {
        value: cdktn.stringToHclTerraform(this._homeEfsFileSystemCreation),
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
      subnet_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._subnetIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tag_propagation: {
        value: cdktn.stringToHclTerraform(this._tagPropagation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(sagemakerDomainTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerDomainTagsList",
      },
      vpc_id: {
        value: cdktn.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
