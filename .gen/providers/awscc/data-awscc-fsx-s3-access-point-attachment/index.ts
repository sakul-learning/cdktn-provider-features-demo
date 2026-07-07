// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/fsx_s3_access_point_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccFsxS3AccessPointAttachmentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/fsx_s3_access_point_attachment#id DataAwsccFsxS3AccessPointAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser {
}

export function dataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserToTerraform(struct?: DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserToHclTerraform(struct?: DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser {
}

export function dataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserToTerraform(struct?: DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserToHclTerraform(struct?: DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity {
}

export function dataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityToTerraform(struct?: DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityToHclTerraform(struct?: DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unix_user - computed: true, optional: false, required: false
  private _unixUser = new DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference(this, "unix_user");
  public get unixUser() {
    return this._unixUser;
  }

  // windows_user - computed: true, optional: false, required: false
  private _windowsUser = new DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference(this, "windows_user");
  public get windowsUser() {
    return this._windowsUser;
  }
}
export interface DataAwsccFsxS3AccessPointAttachmentOntapConfiguration {
}

export function dataAwsccFsxS3AccessPointAttachmentOntapConfigurationToTerraform(struct?: DataAwsccFsxS3AccessPointAttachmentOntapConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFsxS3AccessPointAttachmentOntapConfigurationToHclTerraform(struct?: DataAwsccFsxS3AccessPointAttachmentOntapConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccFsxS3AccessPointAttachmentOntapConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFsxS3AccessPointAttachmentOntapConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_system_identity - computed: true, optional: false, required: false
  private _fileSystemIdentity = new DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference(this, "file_system_identity");
  public get fileSystemIdentity() {
    return this._fileSystemIdentity;
  }

  // volume_id - computed: true, optional: false, required: false
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
}
export interface DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids {
}

export function dataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsToTerraform(struct?: DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsToHclTerraform(struct?: DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gid - computed: true, optional: false, required: false
  public get gid() {
    return this.getNumberAttribute('gid');
  }
}

export class DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference {
    return new DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser {
}

export function dataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserToTerraform(struct?: DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserToHclTerraform(struct?: DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gid - computed: true, optional: false, required: false
  public get gid() {
    return this.getNumberAttribute('gid');
  }

  // secondary_gids - computed: true, optional: false, required: false
  private _secondaryGids = new DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList(this, "secondary_gids", false);
  public get secondaryGids() {
    return this._secondaryGids;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getNumberAttribute('uid');
  }
}
export interface DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity {
}

export function dataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityToTerraform(struct?: DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityToHclTerraform(struct?: DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // posix_user - computed: true, optional: false, required: false
  private _posixUser = new DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference(this, "posix_user");
  public get posixUser() {
    return this._posixUser;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccFsxS3AccessPointAttachmentOpenZfsConfiguration {
}

export function dataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationToTerraform(struct?: DataAwsccFsxS3AccessPointAttachmentOpenZfsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationToHclTerraform(struct?: DataAwsccFsxS3AccessPointAttachmentOpenZfsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccFsxS3AccessPointAttachmentOpenZfsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFsxS3AccessPointAttachmentOpenZfsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_system_identity - computed: true, optional: false, required: false
  private _fileSystemIdentity = new DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference(this, "file_system_identity");
  public get fileSystemIdentity() {
    return this._fileSystemIdentity;
  }

  // volume_id - computed: true, optional: false, required: false
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
}
export interface DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfiguration {
}

export function dataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationToTerraform(struct?: DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationToHclTerraform(struct?: DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}
export interface DataAwsccFsxS3AccessPointAttachmentS3AccessPoint {
}

export function dataAwsccFsxS3AccessPointAttachmentS3AccessPointToTerraform(struct?: DataAwsccFsxS3AccessPointAttachmentS3AccessPoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFsxS3AccessPointAttachmentS3AccessPointToHclTerraform(struct?: DataAwsccFsxS3AccessPointAttachmentS3AccessPoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccFsxS3AccessPointAttachmentS3AccessPoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFsxS3AccessPointAttachmentS3AccessPoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
  }

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }

  // vpc_configuration - computed: true, optional: false, required: false
  private _vpcConfiguration = new DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference(this, "vpc_configuration");
  public get vpcConfiguration() {
    return this._vpcConfiguration;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/fsx_s3_access_point_attachment awscc_fsx_s3_access_point_attachment}
*/
export class DataAwsccFsxS3AccessPointAttachment extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_fsx_s3_access_point_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccFsxS3AccessPointAttachment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccFsxS3AccessPointAttachment to import
  * @param importFromId The id of the existing DataAwsccFsxS3AccessPointAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/fsx_s3_access_point_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccFsxS3AccessPointAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_fsx_s3_access_point_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/fsx_s3_access_point_attachment awscc_fsx_s3_access_point_attachment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccFsxS3AccessPointAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccFsxS3AccessPointAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_fsx_s3_access_point_attachment',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.91.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ontap_configuration - computed: true, optional: false, required: false
  private _ontapConfiguration = new DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference(this, "ontap_configuration");
  public get ontapConfiguration() {
    return this._ontapConfiguration;
  }

  // open_zfs_configuration - computed: true, optional: false, required: false
  private _openZfsConfiguration = new DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference(this, "open_zfs_configuration");
  public get openZfsConfiguration() {
    return this._openZfsConfiguration;
  }

  // s3_access_point - computed: true, optional: false, required: false
  private _s3AccessPoint = new DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference(this, "s3_access_point");
  public get s3AccessPoint() {
    return this._s3AccessPoint;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
