// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datasync_location_fsx_ontap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DatasyncLocationFsxOntapConfig extends cdktn.TerraformMetaArguments {
  /**
  * Configuration settings for NFS or SMB protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datasync_location_fsx_ontap#protocol DatasyncLocationFsxOntap#protocol}
  */
  readonly protocol?: DatasyncLocationFsxOntapProtocol;
  /**
  * The ARNs of the security groups that are to use to configure the FSx ONTAP file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datasync_location_fsx_ontap#security_group_arns DatasyncLocationFsxOntap#security_group_arns}
  */
  readonly securityGroupArns: string[];
  /**
  * The Amazon Resource Name (ARN) for the FSx ONTAP SVM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datasync_location_fsx_ontap#storage_virtual_machine_arn DatasyncLocationFsxOntap#storage_virtual_machine_arn}
  */
  readonly storageVirtualMachineArn: string;
  /**
  * A subdirectory in the location's path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datasync_location_fsx_ontap#subdirectory DatasyncLocationFsxOntap#subdirectory}
  */
  readonly subdirectory?: string;
  /**
  * An array of key-value pairs to apply to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datasync_location_fsx_ontap#tags DatasyncLocationFsxOntap#tags}
  */
  readonly tags?: DatasyncLocationFsxOntapTags[] | cdktn.IResolvable;
}
export interface DatasyncLocationFsxOntapProtocolNfsMountOptions {
  /**
  * The specific NFS version that you want DataSync to use to mount your NFS share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datasync_location_fsx_ontap#version DatasyncLocationFsxOntap#version}
  */
  readonly version?: string;
}

export function datasyncLocationFsxOntapProtocolNfsMountOptionsToTerraform(struct?: DatasyncLocationFsxOntapProtocolNfsMountOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function datasyncLocationFsxOntapProtocolNfsMountOptionsToHclTerraform(struct?: DatasyncLocationFsxOntapProtocolNfsMountOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatasyncLocationFsxOntapProtocolNfsMountOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasyncLocationFsxOntapProtocolNfsMountOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DatasyncLocationFsxOntapProtocolNfs {
  /**
  * The NFS mount options that DataSync can use to mount your NFS share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datasync_location_fsx_ontap#mount_options DatasyncLocationFsxOntap#mount_options}
  */
  readonly mountOptions?: DatasyncLocationFsxOntapProtocolNfsMountOptions;
}

export function datasyncLocationFsxOntapProtocolNfsToTerraform(struct?: DatasyncLocationFsxOntapProtocolNfs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mount_options: datasyncLocationFsxOntapProtocolNfsMountOptionsToTerraform(struct!.mountOptions),
  }
}


export function datasyncLocationFsxOntapProtocolNfsToHclTerraform(struct?: DatasyncLocationFsxOntapProtocolNfs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mount_options: {
      value: datasyncLocationFsxOntapProtocolNfsMountOptionsToHclTerraform(struct!.mountOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DatasyncLocationFsxOntapProtocolNfsMountOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasyncLocationFsxOntapProtocolNfsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatasyncLocationFsxOntapProtocolNfs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountOptions = this._mountOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasyncLocationFsxOntapProtocolNfs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountOptions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountOptions.internalValue = value.mountOptions;
    }
  }

  // mount_options - computed: true, optional: true, required: false
  private _mountOptions = new DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference(this, "mount_options");
  public get mountOptions() {
    return this._mountOptions;
  }
  public putMountOptions(value: DatasyncLocationFsxOntapProtocolNfsMountOptions) {
    this._mountOptions.internalValue = value;
  }
  public resetMountOptions() {
    this._mountOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions.internalValue;
  }
}
export interface DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig {
  /**
  * Specifies the ARN for the customer-managed AWS KMS key used to encrypt the secret specified for SecretArn. DataSync provides this key to AWS Secrets Manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datasync_location_fsx_ontap#kms_key_arn DatasyncLocationFsxOntap#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
}

export function datasyncLocationFsxOntapProtocolSmbCmkSecretConfigToTerraform(struct?: DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
  }
}


export function datasyncLocationFsxOntapProtocolSmbCmkSecretConfigToHclTerraform(struct?: DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig | cdktn.IResolvable): any {
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

export class DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig | cdktn.IResolvable | undefined) {
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
export interface DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig {
  /**
  * Specifies the ARN for the AWS Identity and Access Management role that DataSync uses to access the secret specified for SecretArn.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datasync_location_fsx_ontap#secret_access_role_arn DatasyncLocationFsxOntap#secret_access_role_arn}
  */
  readonly secretAccessRoleArn?: string;
  /**
  * Specifies the ARN for a customer created AWS Secrets Manager secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datasync_location_fsx_ontap#secret_arn DatasyncLocationFsxOntap#secret_arn}
  */
  readonly secretArn?: string;
}

export function datasyncLocationFsxOntapProtocolSmbCustomSecretConfigToTerraform(struct?: DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret_access_role_arn: cdktn.stringToTerraform(struct!.secretAccessRoleArn),
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
  }
}


export function datasyncLocationFsxOntapProtocolSmbCustomSecretConfigToHclTerraform(struct?: DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig | cdktn.IResolvable): any {
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

export class DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig | cdktn.IResolvable | undefined) {
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
export interface DatasyncLocationFsxOntapProtocolSmbManagedSecretConfig {
}

export function datasyncLocationFsxOntapProtocolSmbManagedSecretConfigToTerraform(struct?: DatasyncLocationFsxOntapProtocolSmbManagedSecretConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function datasyncLocationFsxOntapProtocolSmbManagedSecretConfigToHclTerraform(struct?: DatasyncLocationFsxOntapProtocolSmbManagedSecretConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatasyncLocationFsxOntapProtocolSmbManagedSecretConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasyncLocationFsxOntapProtocolSmbManagedSecretConfig | undefined) {
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
export interface DatasyncLocationFsxOntapProtocolSmbMountOptions {
  /**
  * The specific SMB version that you want DataSync to use to mount your SMB share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datasync_location_fsx_ontap#version DatasyncLocationFsxOntap#version}
  */
  readonly version?: string;
}

export function datasyncLocationFsxOntapProtocolSmbMountOptionsToTerraform(struct?: DatasyncLocationFsxOntapProtocolSmbMountOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function datasyncLocationFsxOntapProtocolSmbMountOptionsToHclTerraform(struct?: DatasyncLocationFsxOntapProtocolSmbMountOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatasyncLocationFsxOntapProtocolSmbMountOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasyncLocationFsxOntapProtocolSmbMountOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DatasyncLocationFsxOntapProtocolSmb {
  /**
  * Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datasync_location_fsx_ontap#cmk_secret_config DatasyncLocationFsxOntap#cmk_secret_config}
  */
  readonly cmkSecretConfig?: DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig;
  /**
  * Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datasync_location_fsx_ontap#custom_secret_config DatasyncLocationFsxOntap#custom_secret_config}
  */
  readonly customSecretConfig?: DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig;
  /**
  * The name of the Windows domain that the SMB server belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datasync_location_fsx_ontap#domain DatasyncLocationFsxOntap#domain}
  */
  readonly domain?: string;
  /**
  * The mount options used by DataSync to access the SMB server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datasync_location_fsx_ontap#mount_options DatasyncLocationFsxOntap#mount_options}
  */
  readonly mountOptions?: DatasyncLocationFsxOntapProtocolSmbMountOptions;
  /**
  * The password of the user who can mount the share and has the permissions to access files and folders in the SMB share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datasync_location_fsx_ontap#password DatasyncLocationFsxOntap#password}
  */
  readonly password?: string;
  /**
  * The user who can mount the share, has the permissions to access files and folders in the SMB share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datasync_location_fsx_ontap#user DatasyncLocationFsxOntap#user}
  */
  readonly user?: string;
}

export function datasyncLocationFsxOntapProtocolSmbToTerraform(struct?: DatasyncLocationFsxOntapProtocolSmb | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cmk_secret_config: datasyncLocationFsxOntapProtocolSmbCmkSecretConfigToTerraform(struct!.cmkSecretConfig),
    custom_secret_config: datasyncLocationFsxOntapProtocolSmbCustomSecretConfigToTerraform(struct!.customSecretConfig),
    domain: cdktn.stringToTerraform(struct!.domain),
    mount_options: datasyncLocationFsxOntapProtocolSmbMountOptionsToTerraform(struct!.mountOptions),
    password: cdktn.stringToTerraform(struct!.password),
    user: cdktn.stringToTerraform(struct!.user),
  }
}


export function datasyncLocationFsxOntapProtocolSmbToHclTerraform(struct?: DatasyncLocationFsxOntapProtocolSmb | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cmk_secret_config: {
      value: datasyncLocationFsxOntapProtocolSmbCmkSecretConfigToHclTerraform(struct!.cmkSecretConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig",
    },
    custom_secret_config: {
      value: datasyncLocationFsxOntapProtocolSmbCustomSecretConfigToHclTerraform(struct!.customSecretConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig",
    },
    domain: {
      value: cdktn.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_options: {
      value: datasyncLocationFsxOntapProtocolSmbMountOptionsToHclTerraform(struct!.mountOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DatasyncLocationFsxOntapProtocolSmbMountOptions",
    },
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktn.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasyncLocationFsxOntapProtocolSmbOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatasyncLocationFsxOntapProtocolSmb | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cmkSecretConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmkSecretConfig = this._cmkSecretConfig?.internalValue;
    }
    if (this._customSecretConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSecretConfig = this._customSecretConfig?.internalValue;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._mountOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountOptions = this._mountOptions?.internalValue;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasyncLocationFsxOntapProtocolSmb | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cmkSecretConfig.internalValue = undefined;
      this._customSecretConfig.internalValue = undefined;
      this._domain = undefined;
      this._mountOptions.internalValue = undefined;
      this._password = undefined;
      this._user = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cmkSecretConfig.internalValue = value.cmkSecretConfig;
      this._customSecretConfig.internalValue = value.customSecretConfig;
      this._domain = value.domain;
      this._mountOptions.internalValue = value.mountOptions;
      this._password = value.password;
      this._user = value.user;
    }
  }

  // cmk_secret_config - computed: true, optional: true, required: false
  private _cmkSecretConfig = new DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference(this, "cmk_secret_config");
  public get cmkSecretConfig() {
    return this._cmkSecretConfig;
  }
  public putCmkSecretConfig(value: DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig) {
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
  private _customSecretConfig = new DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference(this, "custom_secret_config");
  public get customSecretConfig() {
    return this._customSecretConfig;
  }
  public putCustomSecretConfig(value: DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig) {
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

  // managed_secret_config - computed: true, optional: false, required: false
  private _managedSecretConfig = new DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference(this, "managed_secret_config");
  public get managedSecretConfig() {
    return this._managedSecretConfig;
  }

  // mount_options - computed: true, optional: true, required: false
  private _mountOptions = new DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference(this, "mount_options");
  public get mountOptions() {
    return this._mountOptions;
  }
  public putMountOptions(value: DatasyncLocationFsxOntapProtocolSmbMountOptions) {
    this._mountOptions.internalValue = value;
  }
  public resetMountOptions() {
    this._mountOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions.internalValue;
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

  // user - computed: true, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DatasyncLocationFsxOntapProtocol {
  /**
  * NFS protocol configuration for FSx ONTAP file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datasync_location_fsx_ontap#nfs DatasyncLocationFsxOntap#nfs}
  */
  readonly nfs?: DatasyncLocationFsxOntapProtocolNfs;
  /**
  * SMB protocol configuration for FSx ONTAP file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datasync_location_fsx_ontap#smb DatasyncLocationFsxOntap#smb}
  */
  readonly smb?: DatasyncLocationFsxOntapProtocolSmb;
}

export function datasyncLocationFsxOntapProtocolToTerraform(struct?: DatasyncLocationFsxOntapProtocol | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    nfs: datasyncLocationFsxOntapProtocolNfsToTerraform(struct!.nfs),
    smb: datasyncLocationFsxOntapProtocolSmbToTerraform(struct!.smb),
  }
}


export function datasyncLocationFsxOntapProtocolToHclTerraform(struct?: DatasyncLocationFsxOntapProtocol | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    nfs: {
      value: datasyncLocationFsxOntapProtocolNfsToHclTerraform(struct!.nfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DatasyncLocationFsxOntapProtocolNfs",
    },
    smb: {
      value: datasyncLocationFsxOntapProtocolSmbToHclTerraform(struct!.smb),
      isBlock: true,
      type: "struct",
      storageClassType: "DatasyncLocationFsxOntapProtocolSmb",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasyncLocationFsxOntapProtocolOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatasyncLocationFsxOntapProtocol | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfs = this._nfs?.internalValue;
    }
    if (this._smb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smb = this._smb?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasyncLocationFsxOntapProtocol | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nfs.internalValue = undefined;
      this._smb.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nfs.internalValue = value.nfs;
      this._smb.internalValue = value.smb;
    }
  }

  // nfs - computed: true, optional: true, required: false
  private _nfs = new DatasyncLocationFsxOntapProtocolNfsOutputReference(this, "nfs");
  public get nfs() {
    return this._nfs;
  }
  public putNfs(value: DatasyncLocationFsxOntapProtocolNfs) {
    this._nfs.internalValue = value;
  }
  public resetNfs() {
    this._nfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsInput() {
    return this._nfs.internalValue;
  }

  // smb - computed: true, optional: true, required: false
  private _smb = new DatasyncLocationFsxOntapProtocolSmbOutputReference(this, "smb");
  public get smb() {
    return this._smb;
  }
  public putSmb(value: DatasyncLocationFsxOntapProtocolSmb) {
    this._smb.internalValue = value;
  }
  public resetSmb() {
    this._smb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smbInput() {
    return this._smb.internalValue;
  }
}
export interface DatasyncLocationFsxOntapTags {
  /**
  * The key for an AWS resource tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datasync_location_fsx_ontap#key DatasyncLocationFsxOntap#key}
  */
  readonly key?: string;
  /**
  * The value for an AWS resource tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datasync_location_fsx_ontap#value DatasyncLocationFsxOntap#value}
  */
  readonly value?: string;
}

export function datasyncLocationFsxOntapTagsToTerraform(struct?: DatasyncLocationFsxOntapTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function datasyncLocationFsxOntapTagsToHclTerraform(struct?: DatasyncLocationFsxOntapTags | cdktn.IResolvable): any {
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

export class DatasyncLocationFsxOntapTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatasyncLocationFsxOntapTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DatasyncLocationFsxOntapTags | cdktn.IResolvable | undefined) {
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

export class DatasyncLocationFsxOntapTagsList extends cdktn.ComplexList {
  public internalValue? : DatasyncLocationFsxOntapTags[] | cdktn.IResolvable

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
  public get(index: number): DatasyncLocationFsxOntapTagsOutputReference {
    return new DatasyncLocationFsxOntapTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datasync_location_fsx_ontap awscc_datasync_location_fsx_ontap}
*/
export class DatasyncLocationFsxOntap extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_datasync_location_fsx_ontap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DatasyncLocationFsxOntap resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatasyncLocationFsxOntap to import
  * @param importFromId The id of the existing DatasyncLocationFsxOntap that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datasync_location_fsx_ontap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatasyncLocationFsxOntap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datasync_location_fsx_ontap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datasync_location_fsx_ontap awscc_datasync_location_fsx_ontap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatasyncLocationFsxOntapConfig
  */
  public constructor(scope: Construct, id: string, config: DatasyncLocationFsxOntapConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_datasync_location_fsx_ontap',
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
    this._protocol.internalValue = config.protocol;
    this._securityGroupArns = config.securityGroupArns;
    this._storageVirtualMachineArn = config.storageVirtualMachineArn;
    this._subdirectory = config.subdirectory;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fsx_filesystem_arn - computed: true, optional: false, required: false
  public get fsxFilesystemArn() {
    return this.getStringAttribute('fsx_filesystem_arn');
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

  // protocol - computed: true, optional: true, required: false
  private _protocol = new DatasyncLocationFsxOntapProtocolOutputReference(this, "protocol");
  public get protocol() {
    return this._protocol;
  }
  public putProtocol(value: DatasyncLocationFsxOntapProtocol) {
    this._protocol.internalValue = value;
  }
  public resetProtocol() {
    this._protocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol.internalValue;
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

  // storage_virtual_machine_arn - computed: false, optional: false, required: true
  private _storageVirtualMachineArn?: string; 
  public get storageVirtualMachineArn() {
    return this.getStringAttribute('storage_virtual_machine_arn');
  }
  public set storageVirtualMachineArn(value: string) {
    this._storageVirtualMachineArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageVirtualMachineArnInput() {
    return this._storageVirtualMachineArn;
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
  private _tags = new DatasyncLocationFsxOntapTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DatasyncLocationFsxOntapTags[] | cdktn.IResolvable) {
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
      protocol: datasyncLocationFsxOntapProtocolToTerraform(this._protocol.internalValue),
      security_group_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._securityGroupArns),
      storage_virtual_machine_arn: cdktn.stringToTerraform(this._storageVirtualMachineArn),
      subdirectory: cdktn.stringToTerraform(this._subdirectory),
      tags: cdktn.listMapper(datasyncLocationFsxOntapTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      protocol: {
        value: datasyncLocationFsxOntapProtocolToHclTerraform(this._protocol.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatasyncLocationFsxOntapProtocol",
      },
      security_group_arns: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._securityGroupArns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      storage_virtual_machine_arn: {
        value: cdktn.stringToHclTerraform(this._storageVirtualMachineArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subdirectory: {
        value: cdktn.stringToHclTerraform(this._subdirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(datasyncLocationFsxOntapTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DatasyncLocationFsxOntapTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
