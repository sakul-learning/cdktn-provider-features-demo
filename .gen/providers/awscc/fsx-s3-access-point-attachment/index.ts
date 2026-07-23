// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/fsx_s3_access_point_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface FsxS3AccessPointAttachmentConfig extends cdktn.TerraformMetaArguments {
  /**
  * The name of the S3 access point attachment; also used for the name of the S3 access point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/fsx_s3_access_point_attachment#name FsxS3AccessPointAttachment#name}
  */
  readonly name: string;
  /**
  * The OntapConfiguration of the S3 access point attachment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/fsx_s3_access_point_attachment#ontap_configuration FsxS3AccessPointAttachment#ontap_configuration}
  */
  readonly ontapConfiguration?: FsxS3AccessPointAttachmentOntapConfiguration;
  /**
  * The OpenZFSConfiguration of the S3 access point attachment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/fsx_s3_access_point_attachment#open_zfs_configuration FsxS3AccessPointAttachment#open_zfs_configuration}
  */
  readonly openZfsConfiguration?: FsxS3AccessPointAttachmentOpenZfsConfiguration;
  /**
  * The S3 access point configuration of the S3 access point attachment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/fsx_s3_access_point_attachment#s3_access_point FsxS3AccessPointAttachment#s3_access_point}
  */
  readonly s3AccessPoint?: FsxS3AccessPointAttachmentS3AccessPoint;
  /**
  * The type of Amazon FSx volume that the S3 access point is attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/fsx_s3_access_point_attachment#type FsxS3AccessPointAttachment#type}
  */
  readonly type: string;
}
export interface FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser {
  /**
  * The name of the UNIX user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/fsx_s3_access_point_attachment#name FsxS3AccessPointAttachment#name}
  */
  readonly name?: string;
}

export function fsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserToTerraform(struct?: FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function fsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserToHclTerraform(struct?: FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser {
  /**
  * The name of the Windows user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/fsx_s3_access_point_attachment#name FsxS3AccessPointAttachment#name}
  */
  readonly name?: string;
}

export function fsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserToTerraform(struct?: FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function fsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserToHclTerraform(struct?: FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity {
  /**
  * Specifies the FSx for ONTAP user identity type, accepts either UNIX or WINDOWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/fsx_s3_access_point_attachment#type FsxS3AccessPointAttachment#type}
  */
  readonly type?: string;
  /**
  * Specifies the properties of the file system UNIX user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/fsx_s3_access_point_attachment#unix_user FsxS3AccessPointAttachment#unix_user}
  */
  readonly unixUser?: FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser;
  /**
  * Specifies the properties of the file system Windows user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/fsx_s3_access_point_attachment#windows_user FsxS3AccessPointAttachment#windows_user}
  */
  readonly windowsUser?: FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser;
}

export function fsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityToTerraform(struct?: FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    unix_user: fsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserToTerraform(struct!.unixUser),
    windows_user: fsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserToTerraform(struct!.windowsUser),
  }
}


export function fsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityToHclTerraform(struct?: FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unix_user: {
      value: fsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserToHclTerraform(struct!.unixUser),
      isBlock: true,
      type: "struct",
      storageClassType: "FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser",
    },
    windows_user: {
      value: fsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserToHclTerraform(struct!.windowsUser),
      isBlock: true,
      type: "struct",
      storageClassType: "FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unixUser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unixUser = this._unixUser?.internalValue;
    }
    if (this._windowsUser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsUser = this._windowsUser?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._unixUser.internalValue = undefined;
      this._windowsUser.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._unixUser.internalValue = value.unixUser;
      this._windowsUser.internalValue = value.windowsUser;
    }
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unix_user - computed: true, optional: true, required: false
  private _unixUser = new FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference(this, "unix_user");
  public get unixUser() {
    return this._unixUser;
  }
  public putUnixUser(value: FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser) {
    this._unixUser.internalValue = value;
  }
  public resetUnixUser() {
    this._unixUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unixUserInput() {
    return this._unixUser.internalValue;
  }

  // windows_user - computed: true, optional: true, required: false
  private _windowsUser = new FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference(this, "windows_user");
  public get windowsUser() {
    return this._windowsUser;
  }
  public putWindowsUser(value: FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser) {
    this._windowsUser.internalValue = value;
  }
  public resetWindowsUser() {
    this._windowsUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsUserInput() {
    return this._windowsUser.internalValue;
  }
}
export interface FsxS3AccessPointAttachmentOntapConfiguration {
  /**
  * The file system identity used to authorize file access requests made using the S3 access point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/fsx_s3_access_point_attachment#file_system_identity FsxS3AccessPointAttachment#file_system_identity}
  */
  readonly fileSystemIdentity?: FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity;
  /**
  * The ID of the FSx for ONTAP volume that the S3 access point is attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/fsx_s3_access_point_attachment#volume_id FsxS3AccessPointAttachment#volume_id}
  */
  readonly volumeId?: string;
}

export function fsxS3AccessPointAttachmentOntapConfigurationToTerraform(struct?: FsxS3AccessPointAttachmentOntapConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_system_identity: fsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityToTerraform(struct!.fileSystemIdentity),
    volume_id: cdktn.stringToTerraform(struct!.volumeId),
  }
}


export function fsxS3AccessPointAttachmentOntapConfigurationToHclTerraform(struct?: FsxS3AccessPointAttachmentOntapConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_system_identity: {
      value: fsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityToHclTerraform(struct!.fileSystemIdentity),
      isBlock: true,
      type: "struct",
      storageClassType: "FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity",
    },
    volume_id: {
      value: cdktn.stringToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxS3AccessPointAttachmentOntapConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FsxS3AccessPointAttachmentOntapConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemIdentity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemIdentity = this._fileSystemIdentity?.internalValue;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxS3AccessPointAttachmentOntapConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileSystemIdentity.internalValue = undefined;
      this._volumeId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileSystemIdentity.internalValue = value.fileSystemIdentity;
      this._volumeId = value.volumeId;
    }
  }

  // file_system_identity - computed: true, optional: true, required: false
  private _fileSystemIdentity = new FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference(this, "file_system_identity");
  public get fileSystemIdentity() {
    return this._fileSystemIdentity;
  }
  public putFileSystemIdentity(value: FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity) {
    this._fileSystemIdentity.internalValue = value;
  }
  public resetFileSystemIdentity() {
    this._fileSystemIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdentityInput() {
    return this._fileSystemIdentity.internalValue;
  }

  // volume_id - computed: true, optional: true, required: false
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  public resetVolumeId() {
    this._volumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}
export interface FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids {
  /**
  * The GID of the file system user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/fsx_s3_access_point_attachment#gid FsxS3AccessPointAttachment#gid}
  */
  readonly gid?: number;
}

export function fsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsToTerraform(struct?: FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    gid: cdktn.numberToTerraform(struct!.gid),
  }
}


export function fsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsToHclTerraform(struct?: FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gid = this._gid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gid = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gid = value.gid;
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
}

export class FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList extends cdktn.ComplexList {
  public internalValue? : FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids[] | cdktn.IResolvable

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
  public get(index: number): FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference {
    return new FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser {
  /**
  * The GID of the file system user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/fsx_s3_access_point_attachment#gid FsxS3AccessPointAttachment#gid}
  */
  readonly gid?: number;
  /**
  * The list of secondary GIDs for the file system user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/fsx_s3_access_point_attachment#secondary_gids FsxS3AccessPointAttachment#secondary_gids}
  */
  readonly secondaryGids?: FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids[] | cdktn.IResolvable;
  /**
  * The UID of the file system user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/fsx_s3_access_point_attachment#uid FsxS3AccessPointAttachment#uid}
  */
  readonly uid?: number;
}

export function fsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserToTerraform(struct?: FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    gid: cdktn.numberToTerraform(struct!.gid),
    secondary_gids: cdktn.listMapper(fsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsToTerraform, false)(struct!.secondaryGids),
    uid: cdktn.numberToTerraform(struct!.uid),
  }
}


export function fsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserToHclTerraform(struct?: FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser | cdktn.IResolvable): any {
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
    secondary_gids: {
      value: cdktn.listMapperHcl(fsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsToHclTerraform, false)(struct!.secondaryGids),
      isBlock: true,
      type: "list",
      storageClassType: "FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList",
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

export class FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gid = this._gid;
    }
    if (this._secondaryGids?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryGids = this._secondaryGids?.internalValue;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gid = undefined;
      this._secondaryGids.internalValue = undefined;
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
      this._secondaryGids.internalValue = value.secondaryGids;
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

  // secondary_gids - computed: true, optional: true, required: false
  private _secondaryGids = new FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList(this, "secondary_gids", false);
  public get secondaryGids() {
    return this._secondaryGids;
  }
  public putSecondaryGids(value: FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids[] | cdktn.IResolvable) {
    this._secondaryGids.internalValue = value;
  }
  public resetSecondaryGids() {
    this._secondaryGids.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryGidsInput() {
    return this._secondaryGids.internalValue;
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
export interface FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity {
  /**
  * Specifies the UID and GIDs of the file system POSIX user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/fsx_s3_access_point_attachment#posix_user FsxS3AccessPointAttachment#posix_user}
  */
  readonly posixUser?: FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser;
  /**
  * Specifies the FSx for OpenZFS user identity type, accepts only POSIX.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/fsx_s3_access_point_attachment#type FsxS3AccessPointAttachment#type}
  */
  readonly type?: string;
}

export function fsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityToTerraform(struct?: FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    posix_user: fsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserToTerraform(struct!.posixUser),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function fsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityToHclTerraform(struct?: FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    posix_user: {
      value: fsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserToHclTerraform(struct!.posixUser),
      isBlock: true,
      type: "struct",
      storageClassType: "FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._posixUser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.posixUser = this._posixUser?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._posixUser.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._posixUser.internalValue = value.posixUser;
      this._type = value.type;
    }
  }

  // posix_user - computed: true, optional: true, required: false
  private _posixUser = new FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference(this, "posix_user");
  public get posixUser() {
    return this._posixUser;
  }
  public putPosixUser(value: FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser) {
    this._posixUser.internalValue = value;
  }
  public resetPosixUser() {
    this._posixUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get posixUserInput() {
    return this._posixUser.internalValue;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface FsxS3AccessPointAttachmentOpenZfsConfiguration {
  /**
  * The file system identity used to authorize file access requests made using the S3 access point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/fsx_s3_access_point_attachment#file_system_identity FsxS3AccessPointAttachment#file_system_identity}
  */
  readonly fileSystemIdentity?: FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity;
  /**
  * The ID of the FSx for OpenZFS volume that the S3 access point is attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/fsx_s3_access_point_attachment#volume_id FsxS3AccessPointAttachment#volume_id}
  */
  readonly volumeId?: string;
}

export function fsxS3AccessPointAttachmentOpenZfsConfigurationToTerraform(struct?: FsxS3AccessPointAttachmentOpenZfsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_system_identity: fsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityToTerraform(struct!.fileSystemIdentity),
    volume_id: cdktn.stringToTerraform(struct!.volumeId),
  }
}


export function fsxS3AccessPointAttachmentOpenZfsConfigurationToHclTerraform(struct?: FsxS3AccessPointAttachmentOpenZfsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_system_identity: {
      value: fsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityToHclTerraform(struct!.fileSystemIdentity),
      isBlock: true,
      type: "struct",
      storageClassType: "FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity",
    },
    volume_id: {
      value: cdktn.stringToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FsxS3AccessPointAttachmentOpenZfsConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemIdentity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemIdentity = this._fileSystemIdentity?.internalValue;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxS3AccessPointAttachmentOpenZfsConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileSystemIdentity.internalValue = undefined;
      this._volumeId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileSystemIdentity.internalValue = value.fileSystemIdentity;
      this._volumeId = value.volumeId;
    }
  }

  // file_system_identity - computed: true, optional: true, required: false
  private _fileSystemIdentity = new FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference(this, "file_system_identity");
  public get fileSystemIdentity() {
    return this._fileSystemIdentity;
  }
  public putFileSystemIdentity(value: FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity) {
    this._fileSystemIdentity.internalValue = value;
  }
  public resetFileSystemIdentity() {
    this._fileSystemIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdentityInput() {
    return this._fileSystemIdentity.internalValue;
  }

  // volume_id - computed: true, optional: true, required: false
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  public resetVolumeId() {
    this._volumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}
export interface FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration {
  /**
  * Specifies the virtual private cloud (VPC) for the S3 access point VPC configuration, if one exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/fsx_s3_access_point_attachment#vpc_id FsxS3AccessPointAttachment#vpc_id}
  */
  readonly vpcId?: string;
}

export function fsxS3AccessPointAttachmentS3AccessPointVpcConfigurationToTerraform(struct?: FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    vpc_id: cdktn.stringToTerraform(struct!.vpcId),
  }
}


export function fsxS3AccessPointAttachmentS3AccessPointVpcConfigurationToHclTerraform(struct?: FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    vpc_id: {
      value: cdktn.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vpcId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vpcId = value.vpcId;
    }
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
}
export interface FsxS3AccessPointAttachmentS3AccessPoint {
  /**
  * The S3 access point's policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/fsx_s3_access_point_attachment#policy FsxS3AccessPointAttachment#policy}
  */
  readonly policy?: string;
  /**
  * The S3 access point's virtual private cloud (VPC) configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/fsx_s3_access_point_attachment#vpc_configuration FsxS3AccessPointAttachment#vpc_configuration}
  */
  readonly vpcConfiguration?: FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration;
}

export function fsxS3AccessPointAttachmentS3AccessPointToTerraform(struct?: FsxS3AccessPointAttachmentS3AccessPoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    policy: cdktn.stringToTerraform(struct!.policy),
    vpc_configuration: fsxS3AccessPointAttachmentS3AccessPointVpcConfigurationToTerraform(struct!.vpcConfiguration),
  }
}


export function fsxS3AccessPointAttachmentS3AccessPointToHclTerraform(struct?: FsxS3AccessPointAttachmentS3AccessPoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    policy: {
      value: cdktn.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_configuration: {
      value: fsxS3AccessPointAttachmentS3AccessPointVpcConfigurationToHclTerraform(struct!.vpcConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxS3AccessPointAttachmentS3AccessPointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FsxS3AccessPointAttachmentS3AccessPoint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._vpcConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConfiguration = this._vpcConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxS3AccessPointAttachmentS3AccessPoint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policy = undefined;
      this._vpcConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policy = value.policy;
      this._vpcConfiguration.internalValue = value.vpcConfiguration;
    }
  }

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // policy - computed: true, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }

  // vpc_configuration - computed: true, optional: true, required: false
  private _vpcConfiguration = new FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference(this, "vpc_configuration");
  public get vpcConfiguration() {
    return this._vpcConfiguration;
  }
  public putVpcConfiguration(value: FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration) {
    this._vpcConfiguration.internalValue = value;
  }
  public resetVpcConfiguration() {
    this._vpcConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigurationInput() {
    return this._vpcConfiguration.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/fsx_s3_access_point_attachment awscc_fsx_s3_access_point_attachment}
*/
export class FsxS3AccessPointAttachment extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_fsx_s3_access_point_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a FsxS3AccessPointAttachment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FsxS3AccessPointAttachment to import
  * @param importFromId The id of the existing FsxS3AccessPointAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/fsx_s3_access_point_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FsxS3AccessPointAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_fsx_s3_access_point_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/fsx_s3_access_point_attachment awscc_fsx_s3_access_point_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FsxS3AccessPointAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: FsxS3AccessPointAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_fsx_s3_access_point_attachment',
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
    this._name = config.name;
    this._ontapConfiguration.internalValue = config.ontapConfiguration;
    this._openZfsConfiguration.internalValue = config.openZfsConfiguration;
    this._s3AccessPoint.internalValue = config.s3AccessPoint;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // ontap_configuration - computed: true, optional: true, required: false
  private _ontapConfiguration = new FsxS3AccessPointAttachmentOntapConfigurationOutputReference(this, "ontap_configuration");
  public get ontapConfiguration() {
    return this._ontapConfiguration;
  }
  public putOntapConfiguration(value: FsxS3AccessPointAttachmentOntapConfiguration) {
    this._ontapConfiguration.internalValue = value;
  }
  public resetOntapConfiguration() {
    this._ontapConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ontapConfigurationInput() {
    return this._ontapConfiguration.internalValue;
  }

  // open_zfs_configuration - computed: true, optional: true, required: false
  private _openZfsConfiguration = new FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference(this, "open_zfs_configuration");
  public get openZfsConfiguration() {
    return this._openZfsConfiguration;
  }
  public putOpenZfsConfiguration(value: FsxS3AccessPointAttachmentOpenZfsConfiguration) {
    this._openZfsConfiguration.internalValue = value;
  }
  public resetOpenZfsConfiguration() {
    this._openZfsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openZfsConfigurationInput() {
    return this._openZfsConfiguration.internalValue;
  }

  // s3_access_point - computed: true, optional: true, required: false
  private _s3AccessPoint = new FsxS3AccessPointAttachmentS3AccessPointOutputReference(this, "s3_access_point");
  public get s3AccessPoint() {
    return this._s3AccessPoint;
  }
  public putS3AccessPoint(value: FsxS3AccessPointAttachmentS3AccessPoint) {
    this._s3AccessPoint.internalValue = value;
  }
  public resetS3AccessPoint() {
    this._s3AccessPoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3AccessPointInput() {
    return this._s3AccessPoint.internalValue;
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
      name: cdktn.stringToTerraform(this._name),
      ontap_configuration: fsxS3AccessPointAttachmentOntapConfigurationToTerraform(this._ontapConfiguration.internalValue),
      open_zfs_configuration: fsxS3AccessPointAttachmentOpenZfsConfigurationToTerraform(this._openZfsConfiguration.internalValue),
      s3_access_point: fsxS3AccessPointAttachmentS3AccessPointToTerraform(this._s3AccessPoint.internalValue),
      type: cdktn.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ontap_configuration: {
        value: fsxS3AccessPointAttachmentOntapConfigurationToHclTerraform(this._ontapConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FsxS3AccessPointAttachmentOntapConfiguration",
      },
      open_zfs_configuration: {
        value: fsxS3AccessPointAttachmentOpenZfsConfigurationToHclTerraform(this._openZfsConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FsxS3AccessPointAttachmentOpenZfsConfiguration",
      },
      s3_access_point: {
        value: fsxS3AccessPointAttachmentS3AccessPointToHclTerraform(this._s3AccessPoint.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FsxS3AccessPointAttachmentS3AccessPoint",
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
