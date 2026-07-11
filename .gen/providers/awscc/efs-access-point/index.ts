// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/efs_access_point
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EfsAccessPointConfig extends cdktn.TerraformMetaArguments {
  /**
  * An array of key-value pairs to apply to this resource.
  *  For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/efs_access_point#access_point_tags EfsAccessPoint#access_point_tags}
  */
  readonly accessPointTags?: EfsAccessPointAccessPointTags[] | cdktn.IResolvable;
  /**
  * The opaque string specified in the request to ensure idempotent creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/efs_access_point#client_token EfsAccessPoint#client_token}
  */
  readonly clientToken?: string;
  /**
  * The ID of the EFS file system that the access point applies to. Accepts only the ID format for input when specifying a file system, for example ``fs-0123456789abcedf2``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/efs_access_point#file_system_id EfsAccessPoint#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * The full POSIX identity, including the user ID, group ID, and secondary group IDs on the access point that is used for all file operations by NFS clients using the access point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/efs_access_point#posix_user EfsAccessPoint#posix_user}
  */
  readonly posixUser?: EfsAccessPointPosixUser;
  /**
  * The directory on the EFS file system that the access point exposes as the root directory to NFS clients using the access point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/efs_access_point#root_directory EfsAccessPoint#root_directory}
  */
  readonly rootDirectory?: EfsAccessPointRootDirectory;
}
export interface EfsAccessPointAccessPointTags {
  /**
  * The tag key (String). The key can't start with ``aws:``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/efs_access_point#key EfsAccessPoint#key}
  */
  readonly key?: string;
  /**
  * The value of the tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/efs_access_point#value EfsAccessPoint#value}
  */
  readonly value?: string;
}

export function efsAccessPointAccessPointTagsToTerraform(struct?: EfsAccessPointAccessPointTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function efsAccessPointAccessPointTagsToHclTerraform(struct?: EfsAccessPointAccessPointTags | cdktn.IResolvable): any {
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

export class EfsAccessPointAccessPointTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EfsAccessPointAccessPointTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: EfsAccessPointAccessPointTags | cdktn.IResolvable | undefined) {
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

export class EfsAccessPointAccessPointTagsList extends cdktn.ComplexList {
  public internalValue? : EfsAccessPointAccessPointTags[] | cdktn.IResolvable

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
  public get(index: number): EfsAccessPointAccessPointTagsOutputReference {
    return new EfsAccessPointAccessPointTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EfsAccessPointPosixUser {
  /**
  * The POSIX group ID used for all file system operations using this access point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/efs_access_point#gid EfsAccessPoint#gid}
  */
  readonly gid?: string;
  /**
  * Secondary POSIX group IDs used for all file system operations using this access point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/efs_access_point#secondary_gids EfsAccessPoint#secondary_gids}
  */
  readonly secondaryGids?: string[];
  /**
  * The POSIX user ID used for all file system operations using this access point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/efs_access_point#uid EfsAccessPoint#uid}
  */
  readonly uid?: string;
}

export function efsAccessPointPosixUserToTerraform(struct?: EfsAccessPointPosixUser | cdktn.IResolvable): any {
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


export function efsAccessPointPosixUserToHclTerraform(struct?: EfsAccessPointPosixUser | cdktn.IResolvable): any {
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

export class EfsAccessPointPosixUserOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EfsAccessPointPosixUser | cdktn.IResolvable | undefined {
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

  public set internalValue(value: EfsAccessPointPosixUser | cdktn.IResolvable | undefined) {
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
export interface EfsAccessPointRootDirectoryCreationInfo {
  /**
  * Specifies the POSIX group ID to apply to the ``RootDirectory``. Accepts values from 0 to 2^32 (4294967295).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/efs_access_point#owner_gid EfsAccessPoint#owner_gid}
  */
  readonly ownerGid?: string;
  /**
  * Specifies the POSIX user ID to apply to the ``RootDirectory``. Accepts values from 0 to 2^32 (4294967295).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/efs_access_point#owner_uid EfsAccessPoint#owner_uid}
  */
  readonly ownerUid?: string;
  /**
  * Specifies the POSIX permissions to apply to the ``RootDirectory``, in the format of an octal number representing the file's mode bits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/efs_access_point#permissions EfsAccessPoint#permissions}
  */
  readonly permissions?: string;
}

export function efsAccessPointRootDirectoryCreationInfoToTerraform(struct?: EfsAccessPointRootDirectoryCreationInfo | cdktn.IResolvable): any {
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


export function efsAccessPointRootDirectoryCreationInfoToHclTerraform(struct?: EfsAccessPointRootDirectoryCreationInfo | cdktn.IResolvable): any {
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

export class EfsAccessPointRootDirectoryCreationInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EfsAccessPointRootDirectoryCreationInfo | cdktn.IResolvable | undefined {
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

  public set internalValue(value: EfsAccessPointRootDirectoryCreationInfo | cdktn.IResolvable | undefined) {
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
export interface EfsAccessPointRootDirectory {
  /**
  * (Optional) Specifies the POSIX IDs and permissions to apply to the access point's ``RootDirectory``. If the ``RootDirectory`` > ``Path`` specified does not exist, EFS creates the root directory using the ``CreationInfo`` settings when a client connects to an access point. When specifying the ``CreationInfo``, you must provide values for all properties.
  *   If you do not provide ``CreationInfo`` and the specified ``RootDirectory`` > ``Path`` does not exist, attempts to mount the file system using the access point will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/efs_access_point#creation_info EfsAccessPoint#creation_info}
  */
  readonly creationInfo?: EfsAccessPointRootDirectoryCreationInfo;
  /**
  * Specifies the path on the EFS file system to expose as the root directory to NFS clients using the access point to access the EFS file system. A path can have up to four subdirectories. If the specified path does not exist, you are required to provide the ``CreationInfo``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/efs_access_point#path EfsAccessPoint#path}
  */
  readonly path?: string;
}

export function efsAccessPointRootDirectoryToTerraform(struct?: EfsAccessPointRootDirectory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    creation_info: efsAccessPointRootDirectoryCreationInfoToTerraform(struct!.creationInfo),
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function efsAccessPointRootDirectoryToHclTerraform(struct?: EfsAccessPointRootDirectory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    creation_info: {
      value: efsAccessPointRootDirectoryCreationInfoToHclTerraform(struct!.creationInfo),
      isBlock: true,
      type: "struct",
      storageClassType: "EfsAccessPointRootDirectoryCreationInfo",
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

export class EfsAccessPointRootDirectoryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EfsAccessPointRootDirectory | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._creationInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.creationInfo = this._creationInfo?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EfsAccessPointRootDirectory | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._creationInfo.internalValue = undefined;
      this._path = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._creationInfo.internalValue = value.creationInfo;
      this._path = value.path;
    }
  }

  // creation_info - computed: true, optional: true, required: false
  private _creationInfo = new EfsAccessPointRootDirectoryCreationInfoOutputReference(this, "creation_info");
  public get creationInfo() {
    return this._creationInfo;
  }
  public putCreationInfo(value: EfsAccessPointRootDirectoryCreationInfo) {
    this._creationInfo.internalValue = value;
  }
  public resetCreationInfo() {
    this._creationInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationInfoInput() {
    return this._creationInfo.internalValue;
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/efs_access_point awscc_efs_access_point}
*/
export class EfsAccessPoint extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_efs_access_point";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a EfsAccessPoint resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EfsAccessPoint to import
  * @param importFromId The id of the existing EfsAccessPoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/efs_access_point#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EfsAccessPoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_efs_access_point", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/efs_access_point awscc_efs_access_point} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EfsAccessPointConfig
  */
  public constructor(scope: Construct, id: string, config: EfsAccessPointConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_efs_access_point',
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
    this._accessPointTags.internalValue = config.accessPointTags;
    this._clientToken = config.clientToken;
    this._fileSystemId = config.fileSystemId;
    this._posixUser.internalValue = config.posixUser;
    this._rootDirectory.internalValue = config.rootDirectory;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_point_id - computed: true, optional: false, required: false
  public get accessPointId() {
    return this.getStringAttribute('access_point_id');
  }

  // access_point_tags - computed: true, optional: true, required: false
  private _accessPointTags = new EfsAccessPointAccessPointTagsList(this, "access_point_tags", true);
  public get accessPointTags() {
    return this._accessPointTags;
  }
  public putAccessPointTags(value: EfsAccessPointAccessPointTags[] | cdktn.IResolvable) {
    this._accessPointTags.internalValue = value;
  }
  public resetAccessPointTags() {
    this._accessPointTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPointTagsInput() {
    return this._accessPointTags.internalValue;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // posix_user - computed: true, optional: true, required: false
  private _posixUser = new EfsAccessPointPosixUserOutputReference(this, "posix_user");
  public get posixUser() {
    return this._posixUser;
  }
  public putPosixUser(value: EfsAccessPointPosixUser) {
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
  private _rootDirectory = new EfsAccessPointRootDirectoryOutputReference(this, "root_directory");
  public get rootDirectory() {
    return this._rootDirectory;
  }
  public putRootDirectory(value: EfsAccessPointRootDirectory) {
    this._rootDirectory.internalValue = value;
  }
  public resetRootDirectory() {
    this._rootDirectory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDirectoryInput() {
    return this._rootDirectory.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_point_tags: cdktn.listMapper(efsAccessPointAccessPointTagsToTerraform, false)(this._accessPointTags.internalValue),
      client_token: cdktn.stringToTerraform(this._clientToken),
      file_system_id: cdktn.stringToTerraform(this._fileSystemId),
      posix_user: efsAccessPointPosixUserToTerraform(this._posixUser.internalValue),
      root_directory: efsAccessPointRootDirectoryToTerraform(this._rootDirectory.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_point_tags: {
        value: cdktn.listMapperHcl(efsAccessPointAccessPointTagsToHclTerraform, false)(this._accessPointTags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EfsAccessPointAccessPointTagsList",
      },
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
        value: efsAccessPointPosixUserToHclTerraform(this._posixUser.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EfsAccessPointPosixUser",
      },
      root_directory: {
        value: efsAccessPointRootDirectoryToHclTerraform(this._rootDirectory.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EfsAccessPointRootDirectory",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
