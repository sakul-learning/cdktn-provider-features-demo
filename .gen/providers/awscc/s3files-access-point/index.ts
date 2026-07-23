// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/s3files_access_point
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface S3FilesAccessPointConfig extends cdktn.TerraformMetaArguments {
  /**
  * (optional) A string of up to 64 ASCII characters that Amazon EFS uses to ensure idempotent creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/s3files_access_point#client_token S3FilesAccessPoint#client_token}
  */
  readonly clientToken?: string;
  /**
  * The ID of the S3 Files file system that the access point provides access to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/s3files_access_point#file_system_id S3FilesAccessPoint#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * The operating system user and group applied to all compute drive requests made using the access point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/s3files_access_point#posix_user S3FilesAccessPoint#posix_user}
  */
  readonly posixUser?: S3FilesAccessPointPosixUser;
  /**
  * Specifies the directory on the Amazon EFS file system that the access point exposes as the root directory of your file system to NFS clients using the access point. The clients using the access point can only access the root directory and below. If the RootDirectory>Path specified does not exist, EFS creates it and applies the CreationPermissions settings when a client connects to an access point. When specifying a RootDirectory, you need to provide the Path, and the CreationPermissions is optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/s3files_access_point#root_directory S3FilesAccessPoint#root_directory}
  */
  readonly rootDirectory?: S3FilesAccessPointRootDirectory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/s3files_access_point#tags S3FilesAccessPoint#tags}
  */
  readonly tags?: S3FilesAccessPointTags[] | cdktn.IResolvable;
}
export interface S3FilesAccessPointPosixUser {
  /**
  * The POSIX group ID used for all file system operations using this access point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/s3files_access_point#gid S3FilesAccessPoint#gid}
  */
  readonly gid?: string;
  /**
  * Secondary POSIX group IDs used for all file system operations using this access point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/s3files_access_point#secondary_gids S3FilesAccessPoint#secondary_gids}
  */
  readonly secondaryGids?: string[];
  /**
  * The POSIX user ID used for all file system operations using this access point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/s3files_access_point#uid S3FilesAccessPoint#uid}
  */
  readonly uid?: string;
}

export function s3FilesAccessPointPosixUserToTerraform(struct?: S3FilesAccessPointPosixUser | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    gid: cdktn.stringToTerraform(struct!.gid),
    secondary_gids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.secondaryGids),
    uid: cdktn.stringToTerraform(struct!.uid),
  }
}


export function s3FilesAccessPointPosixUserToHclTerraform(struct?: S3FilesAccessPointPosixUser | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    gid: {
      value: cdktn.stringToHclTerraform(struct!.gid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_gids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.secondaryGids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    uid: {
      value: cdktn.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3FilesAccessPointPosixUserOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3FilesAccessPointPosixUser | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gid = this._gid;
    }
    if (this._secondaryGids !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryGids = this._secondaryGids;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3FilesAccessPointPosixUser | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gid = undefined;
      this._secondaryGids = undefined;
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
      this._secondaryGids = value.secondaryGids;
      this._uid = value.uid;
    }
  }

  // gid - computed: true, optional: true, required: false
  private _gid?: string; 
  public get gid() {
    return this.getStringAttribute('gid');
  }
  public set gid(value: string) {
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
  private _secondaryGids?: string[]; 
  public get secondaryGids() {
    return this.getListAttribute('secondary_gids');
  }
  public set secondaryGids(value: string[]) {
    this._secondaryGids = value;
  }
  public resetSecondaryGids() {
    this._secondaryGids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryGidsInput() {
    return this._secondaryGids;
  }

  // uid - computed: true, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
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
export interface S3FilesAccessPointRootDirectoryCreationPermissions {
  /**
  * Specifies the POSIX group ID to apply to the RootDirectory. Accepts values from 0 to 2^32 (4294967295).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/s3files_access_point#owner_gid S3FilesAccessPoint#owner_gid}
  */
  readonly ownerGid?: string;
  /**
  * Specifies the POSIX user ID to apply to the RootDirectory. Accepts values from 0 to 2^32 (4294967295).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/s3files_access_point#owner_uid S3FilesAccessPoint#owner_uid}
  */
  readonly ownerUid?: string;
  /**
  * Specifies the POSIX permissions to apply to the RootDirectory, in the format of an octal number representing the file's mode bits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/s3files_access_point#permissions S3FilesAccessPoint#permissions}
  */
  readonly permissions?: string;
}

export function s3FilesAccessPointRootDirectoryCreationPermissionsToTerraform(struct?: S3FilesAccessPointRootDirectoryCreationPermissions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    owner_gid: cdktn.stringToTerraform(struct!.ownerGid),
    owner_uid: cdktn.stringToTerraform(struct!.ownerUid),
    permissions: cdktn.stringToTerraform(struct!.permissions),
  }
}


export function s3FilesAccessPointRootDirectoryCreationPermissionsToHclTerraform(struct?: S3FilesAccessPointRootDirectoryCreationPermissions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    owner_gid: {
      value: cdktn.stringToHclTerraform(struct!.ownerGid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner_uid: {
      value: cdktn.stringToHclTerraform(struct!.ownerUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permissions: {
      value: cdktn.stringToHclTerraform(struct!.permissions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3FilesAccessPointRootDirectoryCreationPermissions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ownerGid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerGid = this._ownerGid;
    }
    if (this._ownerUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerUid = this._ownerUid;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3FilesAccessPointRootDirectoryCreationPermissions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ownerGid = undefined;
      this._ownerUid = undefined;
      this._permissions = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ownerGid = value.ownerGid;
      this._ownerUid = value.ownerUid;
      this._permissions = value.permissions;
    }
  }

  // owner_gid - computed: true, optional: true, required: false
  private _ownerGid?: string; 
  public get ownerGid() {
    return this.getStringAttribute('owner_gid');
  }
  public set ownerGid(value: string) {
    this._ownerGid = value;
  }
  public resetOwnerGid() {
    this._ownerGid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerGidInput() {
    return this._ownerGid;
  }

  // owner_uid - computed: true, optional: true, required: false
  private _ownerUid?: string; 
  public get ownerUid() {
    return this.getStringAttribute('owner_uid');
  }
  public set ownerUid(value: string) {
    this._ownerUid = value;
  }
  public resetOwnerUid() {
    this._ownerUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerUidInput() {
    return this._ownerUid;
  }

  // permissions - computed: true, optional: true, required: false
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }
}
export interface S3FilesAccessPointRootDirectory {
  /**
  * (Optional) Specifies the POSIX IDs and permissions to apply to the access point's RootDirectory. If the RootDirectory>Path specified does not exist, EFS creates the root directory using the CreationPermissions settings when a client connects to an access point. When specifying the CreationPermissions, you must provide values for all properties.   If you do not provide CreationPermissions and the specified RootDirectory>Path does not exist, attempts to mount the file system using the access point will fail. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/s3files_access_point#creation_permissions S3FilesAccessPoint#creation_permissions}
  */
  readonly creationPermissions?: S3FilesAccessPointRootDirectoryCreationPermissions;
  /**
  * Specifies the path on the EFS file system to expose as the root directory to NFS clients using the access point to access the EFS file system. A path can have up to four subdirectories. If the specified path does not exist, you are required to provide the CreationPermissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/s3files_access_point#path S3FilesAccessPoint#path}
  */
  readonly path?: string;
}

export function s3FilesAccessPointRootDirectoryToTerraform(struct?: S3FilesAccessPointRootDirectory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    creation_permissions: s3FilesAccessPointRootDirectoryCreationPermissionsToTerraform(struct!.creationPermissions),
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function s3FilesAccessPointRootDirectoryToHclTerraform(struct?: S3FilesAccessPointRootDirectory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    creation_permissions: {
      value: s3FilesAccessPointRootDirectoryCreationPermissionsToHclTerraform(struct!.creationPermissions),
      isBlock: true,
      type: "struct",
      storageClassType: "S3FilesAccessPointRootDirectoryCreationPermissions",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3FilesAccessPointRootDirectoryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3FilesAccessPointRootDirectory | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._creationPermissions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.creationPermissions = this._creationPermissions?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3FilesAccessPointRootDirectory | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._creationPermissions.internalValue = undefined;
      this._path = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._creationPermissions.internalValue = value.creationPermissions;
      this._path = value.path;
    }
  }

  // creation_permissions - computed: true, optional: true, required: false
  private _creationPermissions = new S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference(this, "creation_permissions");
  public get creationPermissions() {
    return this._creationPermissions;
  }
  public putCreationPermissions(value: S3FilesAccessPointRootDirectoryCreationPermissions) {
    this._creationPermissions.internalValue = value;
  }
  public resetCreationPermissions() {
    this._creationPermissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationPermissionsInput() {
    return this._creationPermissions.internalValue;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface S3FilesAccessPointTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/s3files_access_point#key S3FilesAccessPoint#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/s3files_access_point#value S3FilesAccessPoint#value}
  */
  readonly value?: string;
}

export function s3FilesAccessPointTagsToTerraform(struct?: S3FilesAccessPointTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function s3FilesAccessPointTagsToHclTerraform(struct?: S3FilesAccessPointTags | cdktn.IResolvable): any {
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

export class S3FilesAccessPointTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3FilesAccessPointTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: S3FilesAccessPointTags | cdktn.IResolvable | undefined) {
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

export class S3FilesAccessPointTagsList extends cdktn.ComplexList {
  public internalValue? : S3FilesAccessPointTags[] | cdktn.IResolvable

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
  public get(index: number): S3FilesAccessPointTagsOutputReference {
    return new S3FilesAccessPointTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/s3files_access_point awscc_s3files_access_point}
*/
export class S3FilesAccessPoint extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_s3files_access_point";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a S3FilesAccessPoint resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3FilesAccessPoint to import
  * @param importFromId The id of the existing S3FilesAccessPoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/s3files_access_point#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3FilesAccessPoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_s3files_access_point", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/s3files_access_point awscc_s3files_access_point} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3FilesAccessPointConfig
  */
  public constructor(scope: Construct, id: string, config: S3FilesAccessPointConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_s3files_access_point',
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
    this._clientToken = config.clientToken;
    this._fileSystemId = config.fileSystemId;
    this._posixUser.internalValue = config.posixUser;
    this._rootDirectory.internalValue = config.rootDirectory;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_point_arn - computed: true, optional: false, required: false
  public get accessPointArn() {
    return this.getStringAttribute('access_point_arn');
  }

  // access_point_id - computed: true, optional: false, required: false
  public get accessPointId() {
    return this.getStringAttribute('access_point_id');
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

  // file_system_id - computed: false, optional: false, required: true
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // posix_user - computed: true, optional: true, required: false
  private _posixUser = new S3FilesAccessPointPosixUserOutputReference(this, "posix_user");
  public get posixUser() {
    return this._posixUser;
  }
  public putPosixUser(value: S3FilesAccessPointPosixUser) {
    this._posixUser.internalValue = value;
  }
  public resetPosixUser() {
    this._posixUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get posixUserInput() {
    return this._posixUser.internalValue;
  }

  // root_directory - computed: true, optional: true, required: false
  private _rootDirectory = new S3FilesAccessPointRootDirectoryOutputReference(this, "root_directory");
  public get rootDirectory() {
    return this._rootDirectory;
  }
  public putRootDirectory(value: S3FilesAccessPointRootDirectory) {
    this._rootDirectory.internalValue = value;
  }
  public resetRootDirectory() {
    this._rootDirectory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDirectoryInput() {
    return this._rootDirectory.internalValue;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new S3FilesAccessPointTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: S3FilesAccessPointTags[] | cdktn.IResolvable) {
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
      client_token: cdktn.stringToTerraform(this._clientToken),
      file_system_id: cdktn.stringToTerraform(this._fileSystemId),
      posix_user: s3FilesAccessPointPosixUserToTerraform(this._posixUser.internalValue),
      root_directory: s3FilesAccessPointRootDirectoryToTerraform(this._rootDirectory.internalValue),
      tags: cdktn.listMapper(s3FilesAccessPointTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_token: {
        value: cdktn.stringToHclTerraform(this._clientToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_system_id: {
        value: cdktn.stringToHclTerraform(this._fileSystemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      posix_user: {
        value: s3FilesAccessPointPosixUserToHclTerraform(this._posixUser.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3FilesAccessPointPosixUser",
      },
      root_directory: {
        value: s3FilesAccessPointRootDirectoryToHclTerraform(this._rootDirectory.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3FilesAccessPointRootDirectory",
      },
      tags: {
        value: cdktn.listMapperHcl(s3FilesAccessPointTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "S3FilesAccessPointTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
