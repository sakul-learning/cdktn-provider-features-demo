// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sagemaker_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccSagemakerDomainConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sagemaker_domain#id DataAwsccSagemakerDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccSagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsEfsFileSystemConfig {
}

export function dataAwsccSagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsEfsFileSystemConfigToTerraform(struct?: DataAwsccSagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsEfsFileSystemConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsEfsFileSystemConfigToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsEfsFileSystemConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsEfsFileSystemConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsEfsFileSystemConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_system_id - computed: true, optional: false, required: false
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }

  // file_system_path - computed: true, optional: false, required: false
  public get fileSystemPath() {
    return this.getStringAttribute('file_system_path');
  }
}
export interface DataAwsccSagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig {
}

export function dataAwsccSagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigToTerraform(struct?: DataAwsccSagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_system_id - computed: true, optional: false, required: false
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }

  // file_system_path - computed: true, optional: false, required: false
  public get fileSystemPath() {
    return this.getStringAttribute('file_system_path');
  }
}
export interface DataAwsccSagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsS3FileSystemConfig {
}

export function dataAwsccSagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsS3FileSystemConfigToTerraform(struct?: DataAwsccSagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsS3FileSystemConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsS3FileSystemConfigToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsS3FileSystemConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsS3FileSystemConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsS3FileSystemConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mount_path - computed: true, optional: false, required: false
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
}
export interface DataAwsccSagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigs {
}

export function dataAwsccSagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsToTerraform(struct?: DataAwsccSagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // efs_file_system_config - computed: true, optional: false, required: false
  private _efsFileSystemConfig = new DataAwsccSagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference(this, "efs_file_system_config");
  public get efsFileSystemConfig() {
    return this._efsFileSystemConfig;
  }

  // fsx_lustre_file_system_config - computed: true, optional: false, required: false
  private _fsxLustreFileSystemConfig = new DataAwsccSagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference(this, "fsx_lustre_file_system_config");
  public get fsxLustreFileSystemConfig() {
    return this._fsxLustreFileSystemConfig;
  }

  // s3_file_system_config - computed: true, optional: false, required: false
  private _s3FileSystemConfig = new DataAwsccSagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference(this, "s3_file_system_config");
  public get s3FileSystemConfig() {
    return this._s3FileSystemConfig;
  }
}

export class DataAwsccSagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsOutputReference {
    return new DataAwsccSagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerDomainDefaultSpaceSettingsCustomPosixUserConfig {
}

export function dataAwsccSagemakerDomainDefaultSpaceSettingsCustomPosixUserConfigToTerraform(struct?: DataAwsccSagemakerDomainDefaultSpaceSettingsCustomPosixUserConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultSpaceSettingsCustomPosixUserConfigToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultSpaceSettingsCustomPosixUserConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultSpaceSettingsCustomPosixUserConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDefaultSpaceSettingsCustomPosixUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultSpaceSettingsCustomPosixUserConfig | undefined) {
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

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getNumberAttribute('uid');
  }
}
export interface DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings {
}

export function dataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsToTerraform(struct?: DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // idle_timeout_in_minutes - computed: true, optional: false, required: false
  public get idleTimeoutInMinutes() {
    return this.getNumberAttribute('idle_timeout_in_minutes');
  }

  // lifecycle_management - computed: true, optional: false, required: false
  public get lifecycleManagement() {
    return this.getStringAttribute('lifecycle_management');
  }

  // max_idle_timeout_in_minutes - computed: true, optional: false, required: false
  public get maxIdleTimeoutInMinutes() {
    return this.getNumberAttribute('max_idle_timeout_in_minutes');
  }

  // min_idle_timeout_in_minutes - computed: true, optional: false, required: false
  public get minIdleTimeoutInMinutes() {
    return this.getNumberAttribute('min_idle_timeout_in_minutes');
  }
}
export interface DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement {
}

export function dataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementToTerraform(struct?: DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // idle_settings - computed: true, optional: false, required: false
  private _idleSettings = new DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference(this, "idle_settings");
  public get idleSettings() {
    return this._idleSettings;
  }
}
export interface DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositories {
}

export function dataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoriesToTerraform(struct?: DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositories): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoriesToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositories): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositories | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // repository_url - computed: true, optional: false, required: false
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }
}

export class DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference {
    return new DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImages {
}

export function dataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImagesToTerraform(struct?: DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImages): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImagesToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImages): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImagesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_image_config_name - computed: true, optional: false, required: false
  public get appImageConfigName() {
    return this.getStringAttribute('app_image_config_name');
  }

  // image_name - computed: true, optional: false, required: false
  public get imageName() {
    return this.getStringAttribute('image_name');
  }

  // image_version_number - computed: true, optional: false, required: false
  public get imageVersionNumber() {
    return this.getNumberAttribute('image_version_number');
  }
}

export class DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImagesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImagesOutputReference {
    return new DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec {
}

export function dataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecToTerraform(struct?: DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // lifecycle_config_arn - computed: true, optional: false, required: false
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }

  // sage_maker_image_arn - computed: true, optional: false, required: false
  public get sageMakerImageArn() {
    return this.getStringAttribute('sage_maker_image_arn');
  }

  // sage_maker_image_version_arn - computed: true, optional: false, required: false
  public get sageMakerImageVersionArn() {
    return this.getStringAttribute('sage_maker_image_version_arn');
  }

  // training_plan_arn - computed: true, optional: false, required: false
  public get trainingPlanArn() {
    return this.getStringAttribute('training_plan_arn');
  }
}
export interface DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettings {
}

export function dataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsToTerraform(struct?: DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_lifecycle_management - computed: true, optional: false, required: false
  private _appLifecycleManagement = new DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference(this, "app_lifecycle_management");
  public get appLifecycleManagement() {
    return this._appLifecycleManagement;
  }

  // built_in_lifecycle_config_arn - computed: true, optional: false, required: false
  public get builtInLifecycleConfigArn() {
    return this.getStringAttribute('built_in_lifecycle_config_arn');
  }

  // code_repositories - computed: true, optional: false, required: false
  private _codeRepositories = new DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList(this, "code_repositories", false);
  public get codeRepositories() {
    return this._codeRepositories;
  }

  // custom_images - computed: true, optional: false, required: false
  private _customImages = new DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImagesList(this, "custom_images", false);
  public get customImages() {
    return this._customImages;
  }

  // default_resource_spec - computed: true, optional: false, required: false
  private _defaultResourceSpec = new DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }

  // lifecycle_config_arns - computed: true, optional: false, required: false
  public get lifecycleConfigArns() {
    return this.getListAttribute('lifecycle_config_arns');
  }
}
export interface DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec {
}

export function dataAwsccSagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct?: DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // lifecycle_config_arn - computed: true, optional: false, required: false
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }

  // sage_maker_image_arn - computed: true, optional: false, required: false
  public get sageMakerImageArn() {
    return this.getStringAttribute('sage_maker_image_arn');
  }

  // sage_maker_image_version_arn - computed: true, optional: false, required: false
  public get sageMakerImageVersionArn() {
    return this.getStringAttribute('sage_maker_image_version_arn');
  }

  // training_plan_arn - computed: true, optional: false, required: false
  public get trainingPlanArn() {
    return this.getStringAttribute('training_plan_arn');
  }
}
export interface DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings {
}

export function dataAwsccSagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsToTerraform(struct?: DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_resource_spec - computed: true, optional: false, required: false
  private _defaultResourceSpec = new DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }

  // lifecycle_config_arns - computed: true, optional: false, required: false
  public get lifecycleConfigArns() {
    return this.getListAttribute('lifecycle_config_arns');
  }
}
export interface DataAwsccSagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImages {
}

export function dataAwsccSagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImagesToTerraform(struct?: DataAwsccSagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImages): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImagesToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImages): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_image_config_name - computed: true, optional: false, required: false
  public get appImageConfigName() {
    return this.getStringAttribute('app_image_config_name');
  }

  // image_name - computed: true, optional: false, required: false
  public get imageName() {
    return this.getStringAttribute('image_name');
  }

  // image_version_number - computed: true, optional: false, required: false
  public get imageVersionNumber() {
    return this.getNumberAttribute('image_version_number');
  }
}

export class DataAwsccSagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImagesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference {
    return new DataAwsccSagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec {
}

export function dataAwsccSagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct?: DataAwsccSagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // lifecycle_config_arn - computed: true, optional: false, required: false
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }

  // sage_maker_image_arn - computed: true, optional: false, required: false
  public get sageMakerImageArn() {
    return this.getStringAttribute('sage_maker_image_arn');
  }

  // sage_maker_image_version_arn - computed: true, optional: false, required: false
  public get sageMakerImageVersionArn() {
    return this.getStringAttribute('sage_maker_image_version_arn');
  }

  // training_plan_arn - computed: true, optional: false, required: false
  public get trainingPlanArn() {
    return this.getStringAttribute('training_plan_arn');
  }
}
export interface DataAwsccSagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings {
}

export function dataAwsccSagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsToTerraform(struct?: DataAwsccSagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_images - computed: true, optional: false, required: false
  private _customImages = new DataAwsccSagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImagesList(this, "custom_images", false);
  public get customImages() {
    return this._customImages;
  }

  // default_resource_spec - computed: true, optional: false, required: false
  private _defaultResourceSpec = new DataAwsccSagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }

  // lifecycle_config_arns - computed: true, optional: false, required: false
  public get lifecycleConfigArns() {
    return this.getListAttribute('lifecycle_config_arns');
  }
}
export interface DataAwsccSagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettings {
}

export function dataAwsccSagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToTerraform(struct?: DataAwsccSagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_ebs_volume_size_in_gb - computed: true, optional: false, required: false
  public get defaultEbsVolumeSizeInGb() {
    return this.getNumberAttribute('default_ebs_volume_size_in_gb');
  }

  // maximum_ebs_volume_size_in_gb - computed: true, optional: false, required: false
  public get maximumEbsVolumeSizeInGb() {
    return this.getNumberAttribute('maximum_ebs_volume_size_in_gb');
  }
}
export interface DataAwsccSagemakerDomainDefaultSpaceSettingsSpaceStorageSettings {
}

export function dataAwsccSagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsToTerraform(struct?: DataAwsccSagemakerDomainDefaultSpaceSettingsSpaceStorageSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultSpaceSettingsSpaceStorageSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDefaultSpaceSettingsSpaceStorageSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultSpaceSettingsSpaceStorageSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_ebs_storage_settings - computed: true, optional: false, required: false
  private _defaultEbsStorageSettings = new DataAwsccSagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference(this, "default_ebs_storage_settings");
  public get defaultEbsStorageSettings() {
    return this._defaultEbsStorageSettings;
  }
}
export interface DataAwsccSagemakerDomainDefaultSpaceSettings {
}

export function dataAwsccSagemakerDomainDefaultSpaceSettingsToTerraform(struct?: DataAwsccSagemakerDomainDefaultSpaceSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultSpaceSettingsToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultSpaceSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultSpaceSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDefaultSpaceSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultSpaceSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_file_system_configs - computed: true, optional: false, required: false
  private _customFileSystemConfigs = new DataAwsccSagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigsList(this, "custom_file_system_configs", false);
  public get customFileSystemConfigs() {
    return this._customFileSystemConfigs;
  }

  // custom_posix_user_config - computed: true, optional: false, required: false
  private _customPosixUserConfig = new DataAwsccSagemakerDomainDefaultSpaceSettingsCustomPosixUserConfigOutputReference(this, "custom_posix_user_config");
  public get customPosixUserConfig() {
    return this._customPosixUserConfig;
  }

  // execution_role - computed: true, optional: false, required: false
  public get executionRole() {
    return this.getStringAttribute('execution_role');
  }

  // jupyter_lab_app_settings - computed: true, optional: false, required: false
  private _jupyterLabAppSettings = new DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsOutputReference(this, "jupyter_lab_app_settings");
  public get jupyterLabAppSettings() {
    return this._jupyterLabAppSettings;
  }

  // jupyter_server_app_settings - computed: true, optional: false, required: false
  private _jupyterServerAppSettings = new DataAwsccSagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference(this, "jupyter_server_app_settings");
  public get jupyterServerAppSettings() {
    return this._jupyterServerAppSettings;
  }

  // kernel_gateway_app_settings - computed: true, optional: false, required: false
  private _kernelGatewayAppSettings = new DataAwsccSagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference(this, "kernel_gateway_app_settings");
  public get kernelGatewayAppSettings() {
    return this._kernelGatewayAppSettings;
  }

  // security_groups - computed: true, optional: false, required: false
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }

  // space_storage_settings - computed: true, optional: false, required: false
  private _spaceStorageSettings = new DataAwsccSagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsOutputReference(this, "space_storage_settings");
  public get spaceStorageSettings() {
    return this._spaceStorageSettings;
  }
}
export interface DataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings {
}

export function dataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // idle_timeout_in_minutes - computed: true, optional: false, required: false
  public get idleTimeoutInMinutes() {
    return this.getNumberAttribute('idle_timeout_in_minutes');
  }

  // lifecycle_management - computed: true, optional: false, required: false
  public get lifecycleManagement() {
    return this.getStringAttribute('lifecycle_management');
  }

  // max_idle_timeout_in_minutes - computed: true, optional: false, required: false
  public get maxIdleTimeoutInMinutes() {
    return this.getNumberAttribute('max_idle_timeout_in_minutes');
  }

  // min_idle_timeout_in_minutes - computed: true, optional: false, required: false
  public get minIdleTimeoutInMinutes() {
    return this.getNumberAttribute('min_idle_timeout_in_minutes');
  }
}
export interface DataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagement {
}

export function dataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // idle_settings - computed: true, optional: false, required: false
  private _idleSettings = new DataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference(this, "idle_settings");
  public get idleSettings() {
    return this._idleSettings;
  }
}
export interface DataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImages {
}

export function dataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImagesToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImages): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImagesToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImages): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImagesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_image_config_name - computed: true, optional: false, required: false
  public get appImageConfigName() {
    return this.getStringAttribute('app_image_config_name');
  }

  // image_name - computed: true, optional: false, required: false
  public get imageName() {
    return this.getStringAttribute('image_name');
  }

  // image_version_number - computed: true, optional: false, required: false
  public get imageVersionNumber() {
    return this.getNumberAttribute('image_version_number');
  }
}

export class DataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImagesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImagesOutputReference {
    return new DataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec {
}

export function dataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // lifecycle_config_arn - computed: true, optional: false, required: false
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }

  // sage_maker_image_arn - computed: true, optional: false, required: false
  public get sageMakerImageArn() {
    return this.getStringAttribute('sage_maker_image_arn');
  }

  // sage_maker_image_version_arn - computed: true, optional: false, required: false
  public get sageMakerImageVersionArn() {
    return this.getStringAttribute('sage_maker_image_version_arn');
  }

  // training_plan_arn - computed: true, optional: false, required: false
  public get trainingPlanArn() {
    return this.getStringAttribute('training_plan_arn');
  }
}
export interface DataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettings {
}

export function dataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_lifecycle_management - computed: true, optional: false, required: false
  private _appLifecycleManagement = new DataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference(this, "app_lifecycle_management");
  public get appLifecycleManagement() {
    return this._appLifecycleManagement;
  }

  // built_in_lifecycle_config_arn - computed: true, optional: false, required: false
  public get builtInLifecycleConfigArn() {
    return this.getStringAttribute('built_in_lifecycle_config_arn');
  }

  // custom_images - computed: true, optional: false, required: false
  private _customImages = new DataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImagesList(this, "custom_images", false);
  public get customImages() {
    return this._customImages;
  }

  // default_resource_spec - computed: true, optional: false, required: false
  private _defaultResourceSpec = new DataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }

  // lifecycle_config_arns - computed: true, optional: false, required: false
  public get lifecycleConfigArns() {
    return this.getListAttribute('lifecycle_config_arns');
  }
}
export interface DataAwsccSagemakerDomainDefaultUserSettingsCustomFileSystemConfigsEfsFileSystemConfig {
}

export function dataAwsccSagemakerDomainDefaultUserSettingsCustomFileSystemConfigsEfsFileSystemConfigToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsCustomFileSystemConfigsEfsFileSystemConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultUserSettingsCustomFileSystemConfigsEfsFileSystemConfigToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsCustomFileSystemConfigsEfsFileSystemConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDefaultUserSettingsCustomFileSystemConfigsEfsFileSystemConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultUserSettingsCustomFileSystemConfigsEfsFileSystemConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_system_id - computed: true, optional: false, required: false
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }

  // file_system_path - computed: true, optional: false, required: false
  public get fileSystemPath() {
    return this.getStringAttribute('file_system_path');
  }
}
export interface DataAwsccSagemakerDomainDefaultUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig {
}

export function dataAwsccSagemakerDomainDefaultUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDefaultUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_system_id - computed: true, optional: false, required: false
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }

  // file_system_path - computed: true, optional: false, required: false
  public get fileSystemPath() {
    return this.getStringAttribute('file_system_path');
  }
}
export interface DataAwsccSagemakerDomainDefaultUserSettingsCustomFileSystemConfigsS3FileSystemConfig {
}

export function dataAwsccSagemakerDomainDefaultUserSettingsCustomFileSystemConfigsS3FileSystemConfigToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsCustomFileSystemConfigsS3FileSystemConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultUserSettingsCustomFileSystemConfigsS3FileSystemConfigToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsCustomFileSystemConfigsS3FileSystemConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDefaultUserSettingsCustomFileSystemConfigsS3FileSystemConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultUserSettingsCustomFileSystemConfigsS3FileSystemConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mount_path - computed: true, optional: false, required: false
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
}
export interface DataAwsccSagemakerDomainDefaultUserSettingsCustomFileSystemConfigs {
}

export function dataAwsccSagemakerDomainDefaultUserSettingsCustomFileSystemConfigsToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsCustomFileSystemConfigs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultUserSettingsCustomFileSystemConfigsToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsCustomFileSystemConfigs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultUserSettingsCustomFileSystemConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerDomainDefaultUserSettingsCustomFileSystemConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultUserSettingsCustomFileSystemConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // efs_file_system_config - computed: true, optional: false, required: false
  private _efsFileSystemConfig = new DataAwsccSagemakerDomainDefaultUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference(this, "efs_file_system_config");
  public get efsFileSystemConfig() {
    return this._efsFileSystemConfig;
  }

  // fsx_lustre_file_system_config - computed: true, optional: false, required: false
  private _fsxLustreFileSystemConfig = new DataAwsccSagemakerDomainDefaultUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference(this, "fsx_lustre_file_system_config");
  public get fsxLustreFileSystemConfig() {
    return this._fsxLustreFileSystemConfig;
  }

  // s3_file_system_config - computed: true, optional: false, required: false
  private _s3FileSystemConfig = new DataAwsccSagemakerDomainDefaultUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference(this, "s3_file_system_config");
  public get s3FileSystemConfig() {
    return this._s3FileSystemConfig;
  }
}

export class DataAwsccSagemakerDomainDefaultUserSettingsCustomFileSystemConfigsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerDomainDefaultUserSettingsCustomFileSystemConfigsOutputReference {
    return new DataAwsccSagemakerDomainDefaultUserSettingsCustomFileSystemConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerDomainDefaultUserSettingsCustomPosixUserConfig {
}

export function dataAwsccSagemakerDomainDefaultUserSettingsCustomPosixUserConfigToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsCustomPosixUserConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultUserSettingsCustomPosixUserConfigToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsCustomPosixUserConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultUserSettingsCustomPosixUserConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDefaultUserSettingsCustomPosixUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultUserSettingsCustomPosixUserConfig | undefined) {
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

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getNumberAttribute('uid');
  }
}
export interface DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings {
}

export function dataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // idle_timeout_in_minutes - computed: true, optional: false, required: false
  public get idleTimeoutInMinutes() {
    return this.getNumberAttribute('idle_timeout_in_minutes');
  }

  // lifecycle_management - computed: true, optional: false, required: false
  public get lifecycleManagement() {
    return this.getStringAttribute('lifecycle_management');
  }

  // max_idle_timeout_in_minutes - computed: true, optional: false, required: false
  public get maxIdleTimeoutInMinutes() {
    return this.getNumberAttribute('max_idle_timeout_in_minutes');
  }

  // min_idle_timeout_in_minutes - computed: true, optional: false, required: false
  public get minIdleTimeoutInMinutes() {
    return this.getNumberAttribute('min_idle_timeout_in_minutes');
  }
}
export interface DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagement {
}

export function dataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // idle_settings - computed: true, optional: false, required: false
  private _idleSettings = new DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference(this, "idle_settings");
  public get idleSettings() {
    return this._idleSettings;
  }
}
export interface DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositories {
}

export function dataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositoriesToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositories): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositoriesToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositories): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositories | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // repository_url - computed: true, optional: false, required: false
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }
}

export class DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositoriesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference {
    return new DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImages {
}

export function dataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImagesToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImages): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImagesToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImages): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImagesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_image_config_name - computed: true, optional: false, required: false
  public get appImageConfigName() {
    return this.getStringAttribute('app_image_config_name');
  }

  // image_name - computed: true, optional: false, required: false
  public get imageName() {
    return this.getStringAttribute('image_name');
  }

  // image_version_number - computed: true, optional: false, required: false
  public get imageVersionNumber() {
    return this.getNumberAttribute('image_version_number');
  }
}

export class DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImagesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImagesOutputReference {
    return new DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec {
}

export function dataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // lifecycle_config_arn - computed: true, optional: false, required: false
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }

  // sage_maker_image_arn - computed: true, optional: false, required: false
  public get sageMakerImageArn() {
    return this.getStringAttribute('sage_maker_image_arn');
  }

  // sage_maker_image_version_arn - computed: true, optional: false, required: false
  public get sageMakerImageVersionArn() {
    return this.getStringAttribute('sage_maker_image_version_arn');
  }

  // training_plan_arn - computed: true, optional: false, required: false
  public get trainingPlanArn() {
    return this.getStringAttribute('training_plan_arn');
  }
}
export interface DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettings {
}

export function dataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_lifecycle_management - computed: true, optional: false, required: false
  private _appLifecycleManagement = new DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference(this, "app_lifecycle_management");
  public get appLifecycleManagement() {
    return this._appLifecycleManagement;
  }

  // built_in_lifecycle_config_arn - computed: true, optional: false, required: false
  public get builtInLifecycleConfigArn() {
    return this.getStringAttribute('built_in_lifecycle_config_arn');
  }

  // code_repositories - computed: true, optional: false, required: false
  private _codeRepositories = new DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositoriesList(this, "code_repositories", false);
  public get codeRepositories() {
    return this._codeRepositories;
  }

  // custom_images - computed: true, optional: false, required: false
  private _customImages = new DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImagesList(this, "custom_images", false);
  public get customImages() {
    return this._customImages;
  }

  // default_resource_spec - computed: true, optional: false, required: false
  private _defaultResourceSpec = new DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }

  // lifecycle_config_arns - computed: true, optional: false, required: false
  public get lifecycleConfigArns() {
    return this.getListAttribute('lifecycle_config_arns');
  }
}
export interface DataAwsccSagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec {
}

export function dataAwsccSagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // lifecycle_config_arn - computed: true, optional: false, required: false
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }

  // sage_maker_image_arn - computed: true, optional: false, required: false
  public get sageMakerImageArn() {
    return this.getStringAttribute('sage_maker_image_arn');
  }

  // sage_maker_image_version_arn - computed: true, optional: false, required: false
  public get sageMakerImageVersionArn() {
    return this.getStringAttribute('sage_maker_image_version_arn');
  }

  // training_plan_arn - computed: true, optional: false, required: false
  public get trainingPlanArn() {
    return this.getStringAttribute('training_plan_arn');
  }
}
export interface DataAwsccSagemakerDomainDefaultUserSettingsJupyterServerAppSettings {
}

export function dataAwsccSagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsJupyterServerAppSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsJupyterServerAppSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDefaultUserSettingsJupyterServerAppSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultUserSettingsJupyterServerAppSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_resource_spec - computed: true, optional: false, required: false
  private _defaultResourceSpec = new DataAwsccSagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }

  // lifecycle_config_arns - computed: true, optional: false, required: false
  public get lifecycleConfigArns() {
    return this.getListAttribute('lifecycle_config_arns');
  }
}
export interface DataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImages {
}

export function dataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImagesToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImages): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImagesToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImages): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_image_config_name - computed: true, optional: false, required: false
  public get appImageConfigName() {
    return this.getStringAttribute('app_image_config_name');
  }

  // image_name - computed: true, optional: false, required: false
  public get imageName() {
    return this.getStringAttribute('image_name');
  }

  // image_version_number - computed: true, optional: false, required: false
  public get imageVersionNumber() {
    return this.getNumberAttribute('image_version_number');
  }
}

export class DataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImagesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference {
    return new DataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec {
}

export function dataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // lifecycle_config_arn - computed: true, optional: false, required: false
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }

  // sage_maker_image_arn - computed: true, optional: false, required: false
  public get sageMakerImageArn() {
    return this.getStringAttribute('sage_maker_image_arn');
  }

  // sage_maker_image_version_arn - computed: true, optional: false, required: false
  public get sageMakerImageVersionArn() {
    return this.getStringAttribute('sage_maker_image_version_arn');
  }

  // training_plan_arn - computed: true, optional: false, required: false
  public get trainingPlanArn() {
    return this.getStringAttribute('training_plan_arn');
  }
}
export interface DataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettings {
}

export function dataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_images - computed: true, optional: false, required: false
  private _customImages = new DataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImagesList(this, "custom_images", false);
  public get customImages() {
    return this._customImages;
  }

  // default_resource_spec - computed: true, optional: false, required: false
  private _defaultResourceSpec = new DataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }

  // lifecycle_config_arns - computed: true, optional: false, required: false
  public get lifecycleConfigArns() {
    return this.getListAttribute('lifecycle_config_arns');
  }
}
export interface DataAwsccSagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImages {
}

export function dataAwsccSagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImagesToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImages): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImagesToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImages): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImagesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_image_config_name - computed: true, optional: false, required: false
  public get appImageConfigName() {
    return this.getStringAttribute('app_image_config_name');
  }

  // image_name - computed: true, optional: false, required: false
  public get imageName() {
    return this.getStringAttribute('image_name');
  }

  // image_version_number - computed: true, optional: false, required: false
  public get imageVersionNumber() {
    return this.getNumberAttribute('image_version_number');
  }
}

export class DataAwsccSagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImagesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImagesOutputReference {
    return new DataAwsccSagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec {
}

export function dataAwsccSagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // lifecycle_config_arn - computed: true, optional: false, required: false
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }

  // sage_maker_image_arn - computed: true, optional: false, required: false
  public get sageMakerImageArn() {
    return this.getStringAttribute('sage_maker_image_arn');
  }

  // sage_maker_image_version_arn - computed: true, optional: false, required: false
  public get sageMakerImageVersionArn() {
    return this.getStringAttribute('sage_maker_image_version_arn');
  }

  // training_plan_arn - computed: true, optional: false, required: false
  public get trainingPlanArn() {
    return this.getStringAttribute('training_plan_arn');
  }
}
export interface DataAwsccSagemakerDomainDefaultUserSettingsRSessionAppSettings {
}

export function dataAwsccSagemakerDomainDefaultUserSettingsRSessionAppSettingsToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsRSessionAppSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultUserSettingsRSessionAppSettingsToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsRSessionAppSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDefaultUserSettingsRSessionAppSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultUserSettingsRSessionAppSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_images - computed: true, optional: false, required: false
  private _customImages = new DataAwsccSagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImagesList(this, "custom_images", false);
  public get customImages() {
    return this._customImages;
  }

  // default_resource_spec - computed: true, optional: false, required: false
  private _defaultResourceSpec = new DataAwsccSagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
}
export interface DataAwsccSagemakerDomainDefaultUserSettingsRStudioServerProAppSettings {
}

export function dataAwsccSagemakerDomainDefaultUserSettingsRStudioServerProAppSettingsToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsRStudioServerProAppSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultUserSettingsRStudioServerProAppSettingsToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsRStudioServerProAppSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultUserSettingsRStudioServerProAppSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDefaultUserSettingsRStudioServerProAppSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultUserSettingsRStudioServerProAppSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_status - computed: true, optional: false, required: false
  public get accessStatus() {
    return this.getStringAttribute('access_status');
  }

  // user_group - computed: true, optional: false, required: false
  public get userGroup() {
    return this.getStringAttribute('user_group');
  }
}
export interface DataAwsccSagemakerDomainDefaultUserSettingsSharingSettings {
}

export function dataAwsccSagemakerDomainDefaultUserSettingsSharingSettingsToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsSharingSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultUserSettingsSharingSettingsToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsSharingSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultUserSettingsSharingSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDefaultUserSettingsSharingSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultUserSettingsSharingSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // notebook_output_option - computed: true, optional: false, required: false
  public get notebookOutputOption() {
    return this.getStringAttribute('notebook_output_option');
  }

  // s3_kms_key_id - computed: true, optional: false, required: false
  public get s3KmsKeyId() {
    return this.getStringAttribute('s3_kms_key_id');
  }

  // s3_output_path - computed: true, optional: false, required: false
  public get s3OutputPath() {
    return this.getStringAttribute('s3_output_path');
  }
}
export interface DataAwsccSagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings {
}

export function dataAwsccSagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_ebs_volume_size_in_gb - computed: true, optional: false, required: false
  public get defaultEbsVolumeSizeInGb() {
    return this.getNumberAttribute('default_ebs_volume_size_in_gb');
  }

  // maximum_ebs_volume_size_in_gb - computed: true, optional: false, required: false
  public get maximumEbsVolumeSizeInGb() {
    return this.getNumberAttribute('maximum_ebs_volume_size_in_gb');
  }
}
export interface DataAwsccSagemakerDomainDefaultUserSettingsSpaceStorageSettings {
}

export function dataAwsccSagemakerDomainDefaultUserSettingsSpaceStorageSettingsToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsSpaceStorageSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultUserSettingsSpaceStorageSettingsToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsSpaceStorageSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultUserSettingsSpaceStorageSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDefaultUserSettingsSpaceStorageSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultUserSettingsSpaceStorageSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_ebs_storage_settings - computed: true, optional: false, required: false
  private _defaultEbsStorageSettings = new DataAwsccSagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference(this, "default_ebs_storage_settings");
  public get defaultEbsStorageSettings() {
    return this._defaultEbsStorageSettings;
  }
}
export interface DataAwsccSagemakerDomainDefaultUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases {
}

export function dataAwsccSagemakerDomainDefaultUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerDomainDefaultUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sage_maker_image_name - computed: true, optional: false, required: false
  public get sageMakerImageName() {
    return this.getStringAttribute('sage_maker_image_name');
  }

  // version_aliases - computed: true, optional: false, required: false
  public get versionAliases() {
    return this.getListAttribute('version_aliases');
  }
}

export class DataAwsccSagemakerDomainDefaultUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerDomainDefaultUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference {
    return new DataAwsccSagemakerDomainDefaultUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerDomainDefaultUserSettingsStudioWebPortalSettings {
}

export function dataAwsccSagemakerDomainDefaultUserSettingsStudioWebPortalSettingsToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsStudioWebPortalSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultUserSettingsStudioWebPortalSettingsToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsStudioWebPortalSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultUserSettingsStudioWebPortalSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDefaultUserSettingsStudioWebPortalSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultUserSettingsStudioWebPortalSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hidden_app_types - computed: true, optional: false, required: false
  public get hiddenAppTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('hidden_app_types'));
  }

  // hidden_instance_types - computed: true, optional: false, required: false
  public get hiddenInstanceTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('hidden_instance_types'));
  }

  // hidden_ml_tools - computed: true, optional: false, required: false
  public get hiddenMlTools() {
    return cdktn.Fn.tolist(this.getListAttribute('hidden_ml_tools'));
  }

  // hidden_sage_maker_image_version_aliases - computed: true, optional: false, required: false
  private _hiddenSageMakerImageVersionAliases = new DataAwsccSagemakerDomainDefaultUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList(this, "hidden_sage_maker_image_version_aliases", true);
  public get hiddenSageMakerImageVersionAliases() {
    return this._hiddenSageMakerImageVersionAliases;
  }
}
export interface DataAwsccSagemakerDomainDefaultUserSettings {
}

export function dataAwsccSagemakerDomainDefaultUserSettingsToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDefaultUserSettingsToHclTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDefaultUserSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDefaultUserSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDefaultUserSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_mount_home_efs - computed: true, optional: false, required: false
  public get autoMountHomeEfs() {
    return this.getStringAttribute('auto_mount_home_efs');
  }

  // code_editor_app_settings - computed: true, optional: false, required: false
  private _codeEditorAppSettings = new DataAwsccSagemakerDomainDefaultUserSettingsCodeEditorAppSettingsOutputReference(this, "code_editor_app_settings");
  public get codeEditorAppSettings() {
    return this._codeEditorAppSettings;
  }

  // custom_file_system_configs - computed: true, optional: false, required: false
  private _customFileSystemConfigs = new DataAwsccSagemakerDomainDefaultUserSettingsCustomFileSystemConfigsList(this, "custom_file_system_configs", false);
  public get customFileSystemConfigs() {
    return this._customFileSystemConfigs;
  }

  // custom_posix_user_config - computed: true, optional: false, required: false
  private _customPosixUserConfig = new DataAwsccSagemakerDomainDefaultUserSettingsCustomPosixUserConfigOutputReference(this, "custom_posix_user_config");
  public get customPosixUserConfig() {
    return this._customPosixUserConfig;
  }

  // default_landing_uri - computed: true, optional: false, required: false
  public get defaultLandingUri() {
    return this.getStringAttribute('default_landing_uri');
  }

  // execution_role - computed: true, optional: false, required: false
  public get executionRole() {
    return this.getStringAttribute('execution_role');
  }

  // jupyter_lab_app_settings - computed: true, optional: false, required: false
  private _jupyterLabAppSettings = new DataAwsccSagemakerDomainDefaultUserSettingsJupyterLabAppSettingsOutputReference(this, "jupyter_lab_app_settings");
  public get jupyterLabAppSettings() {
    return this._jupyterLabAppSettings;
  }

  // jupyter_server_app_settings - computed: true, optional: false, required: false
  private _jupyterServerAppSettings = new DataAwsccSagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference(this, "jupyter_server_app_settings");
  public get jupyterServerAppSettings() {
    return this._jupyterServerAppSettings;
  }

  // kernel_gateway_app_settings - computed: true, optional: false, required: false
  private _kernelGatewayAppSettings = new DataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference(this, "kernel_gateway_app_settings");
  public get kernelGatewayAppSettings() {
    return this._kernelGatewayAppSettings;
  }

  // r_session_app_settings - computed: true, optional: false, required: false
  private _rSessionAppSettings = new DataAwsccSagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference(this, "r_session_app_settings");
  public get rSessionAppSettings() {
    return this._rSessionAppSettings;
  }

  // r_studio_server_pro_app_settings - computed: true, optional: false, required: false
  private _rStudioServerProAppSettings = new DataAwsccSagemakerDomainDefaultUserSettingsRStudioServerProAppSettingsOutputReference(this, "r_studio_server_pro_app_settings");
  public get rStudioServerProAppSettings() {
    return this._rStudioServerProAppSettings;
  }

  // security_groups - computed: true, optional: false, required: false
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }

  // sharing_settings - computed: true, optional: false, required: false
  private _sharingSettings = new DataAwsccSagemakerDomainDefaultUserSettingsSharingSettingsOutputReference(this, "sharing_settings");
  public get sharingSettings() {
    return this._sharingSettings;
  }

  // space_storage_settings - computed: true, optional: false, required: false
  private _spaceStorageSettings = new DataAwsccSagemakerDomainDefaultUserSettingsSpaceStorageSettingsOutputReference(this, "space_storage_settings");
  public get spaceStorageSettings() {
    return this._spaceStorageSettings;
  }

  // studio_web_portal - computed: true, optional: false, required: false
  public get studioWebPortal() {
    return this.getStringAttribute('studio_web_portal');
  }

  // studio_web_portal_settings - computed: true, optional: false, required: false
  private _studioWebPortalSettings = new DataAwsccSagemakerDomainDefaultUserSettingsStudioWebPortalSettingsOutputReference(this, "studio_web_portal_settings");
  public get studioWebPortalSettings() {
    return this._studioWebPortalSettings;
  }
}
export interface DataAwsccSagemakerDomainDomainSettingsDockerSettings {
}

export function dataAwsccSagemakerDomainDomainSettingsDockerSettingsToTerraform(struct?: DataAwsccSagemakerDomainDomainSettingsDockerSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDomainSettingsDockerSettingsToHclTerraform(struct?: DataAwsccSagemakerDomainDomainSettingsDockerSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDomainSettingsDockerSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDomainSettingsDockerSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDomainSettingsDockerSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_docker_access - computed: true, optional: false, required: false
  public get enableDockerAccess() {
    return this.getStringAttribute('enable_docker_access');
  }

  // vpc_only_trusted_accounts - computed: true, optional: false, required: false
  public get vpcOnlyTrustedAccounts() {
    return this.getListAttribute('vpc_only_trusted_accounts');
  }
}
export interface DataAwsccSagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec {
}

export function dataAwsccSagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecToTerraform(struct?: DataAwsccSagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecToHclTerraform(struct?: DataAwsccSagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // lifecycle_config_arn - computed: true, optional: false, required: false
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }

  // sage_maker_image_arn - computed: true, optional: false, required: false
  public get sageMakerImageArn() {
    return this.getStringAttribute('sage_maker_image_arn');
  }

  // sage_maker_image_version_arn - computed: true, optional: false, required: false
  public get sageMakerImageVersionArn() {
    return this.getStringAttribute('sage_maker_image_version_arn');
  }

  // training_plan_arn - computed: true, optional: false, required: false
  public get trainingPlanArn() {
    return this.getStringAttribute('training_plan_arn');
  }
}
export interface DataAwsccSagemakerDomainDomainSettingsRStudioServerProDomainSettings {
}

export function dataAwsccSagemakerDomainDomainSettingsRStudioServerProDomainSettingsToTerraform(struct?: DataAwsccSagemakerDomainDomainSettingsRStudioServerProDomainSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDomainSettingsRStudioServerProDomainSettingsToHclTerraform(struct?: DataAwsccSagemakerDomainDomainSettingsRStudioServerProDomainSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDomainSettingsRStudioServerProDomainSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDomainSettingsRStudioServerProDomainSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDomainSettingsRStudioServerProDomainSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_resource_spec - computed: true, optional: false, required: false
  private _defaultResourceSpec = new DataAwsccSagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }

  // domain_execution_role_arn - computed: true, optional: false, required: false
  public get domainExecutionRoleArn() {
    return this.getStringAttribute('domain_execution_role_arn');
  }

  // r_studio_connect_url - computed: true, optional: false, required: false
  public get rStudioConnectUrl() {
    return this.getStringAttribute('r_studio_connect_url');
  }

  // r_studio_package_manager_url - computed: true, optional: false, required: false
  public get rStudioPackageManagerUrl() {
    return this.getStringAttribute('r_studio_package_manager_url');
  }
}
export interface DataAwsccSagemakerDomainDomainSettingsUnifiedStudioSettings {
}

export function dataAwsccSagemakerDomainDomainSettingsUnifiedStudioSettingsToTerraform(struct?: DataAwsccSagemakerDomainDomainSettingsUnifiedStudioSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDomainSettingsUnifiedStudioSettingsToHclTerraform(struct?: DataAwsccSagemakerDomainDomainSettingsUnifiedStudioSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDomainSettingsUnifiedStudioSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDomainSettingsUnifiedStudioSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDomainSettingsUnifiedStudioSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_account_id - computed: true, optional: false, required: false
  public get domainAccountId() {
    return this.getStringAttribute('domain_account_id');
  }

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }

  // domain_region - computed: true, optional: false, required: false
  public get domainRegion() {
    return this.getStringAttribute('domain_region');
  }

  // environment_id - computed: true, optional: false, required: false
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // project_s3_path - computed: true, optional: false, required: false
  public get projectS3Path() {
    return this.getStringAttribute('project_s3_path');
  }

  // studio_web_portal_access - computed: true, optional: false, required: false
  public get studioWebPortalAccess() {
    return this.getStringAttribute('studio_web_portal_access');
  }
}
export interface DataAwsccSagemakerDomainDomainSettings {
}

export function dataAwsccSagemakerDomainDomainSettingsToTerraform(struct?: DataAwsccSagemakerDomainDomainSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainDomainSettingsToHclTerraform(struct?: DataAwsccSagemakerDomainDomainSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainDomainSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerDomainDomainSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainDomainSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // docker_settings - computed: true, optional: false, required: false
  private _dockerSettings = new DataAwsccSagemakerDomainDomainSettingsDockerSettingsOutputReference(this, "docker_settings");
  public get dockerSettings() {
    return this._dockerSettings;
  }

  // execution_role_identity_config - computed: true, optional: false, required: false
  public get executionRoleIdentityConfig() {
    return this.getStringAttribute('execution_role_identity_config');
  }

  // ip_address_type - computed: true, optional: false, required: false
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }

  // r_studio_server_pro_domain_settings - computed: true, optional: false, required: false
  private _rStudioServerProDomainSettings = new DataAwsccSagemakerDomainDomainSettingsRStudioServerProDomainSettingsOutputReference(this, "r_studio_server_pro_domain_settings");
  public get rStudioServerProDomainSettings() {
    return this._rStudioServerProDomainSettings;
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // unified_studio_settings - computed: true, optional: false, required: false
  private _unifiedStudioSettings = new DataAwsccSagemakerDomainDomainSettingsUnifiedStudioSettingsOutputReference(this, "unified_studio_settings");
  public get unifiedStudioSettings() {
    return this._unifiedStudioSettings;
  }
}
export interface DataAwsccSagemakerDomainTags {
}

export function dataAwsccSagemakerDomainTagsToTerraform(struct?: DataAwsccSagemakerDomainTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerDomainTagsToHclTerraform(struct?: DataAwsccSagemakerDomainTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerDomainTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerDomainTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerDomainTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccSagemakerDomainTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerDomainTagsOutputReference {
    return new DataAwsccSagemakerDomainTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sagemaker_domain awscc_sagemaker_domain}
*/
export class DataAwsccSagemakerDomain extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_sagemaker_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccSagemakerDomain resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccSagemakerDomain to import
  * @param importFromId The id of the existing DataAwsccSagemakerDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sagemaker_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccSagemakerDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sagemaker_domain awscc_sagemaker_domain} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSagemakerDomainConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSagemakerDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_domain',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_network_access_type - computed: true, optional: false, required: false
  public get appNetworkAccessType() {
    return this.getStringAttribute('app_network_access_type');
  }

  // app_security_group_management - computed: true, optional: false, required: false
  public get appSecurityGroupManagement() {
    return this.getStringAttribute('app_security_group_management');
  }

  // auth_mode - computed: true, optional: false, required: false
  public get authMode() {
    return this.getStringAttribute('auth_mode');
  }

  // default_space_settings - computed: true, optional: false, required: false
  private _defaultSpaceSettings = new DataAwsccSagemakerDomainDefaultSpaceSettingsOutputReference(this, "default_space_settings");
  public get defaultSpaceSettings() {
    return this._defaultSpaceSettings;
  }

  // default_user_settings - computed: true, optional: false, required: false
  private _defaultUserSettings = new DataAwsccSagemakerDomainDefaultUserSettingsOutputReference(this, "default_user_settings");
  public get defaultUserSettings() {
    return this._defaultUserSettings;
  }

  // domain_arn - computed: true, optional: false, required: false
  public get domainArn() {
    return this.getStringAttribute('domain_arn');
  }

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // domain_settings - computed: true, optional: false, required: false
  private _domainSettings = new DataAwsccSagemakerDomainDomainSettingsOutputReference(this, "domain_settings");
  public get domainSettings() {
    return this._domainSettings;
  }

  // home_efs_file_system_creation - computed: true, optional: false, required: false
  public get homeEfsFileSystemCreation() {
    return this.getStringAttribute('home_efs_file_system_creation');
  }

  // home_efs_file_system_id - computed: true, optional: false, required: false
  public get homeEfsFileSystemId() {
    return this.getStringAttribute('home_efs_file_system_id');
  }

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

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
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

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }

  // tag_propagation - computed: true, optional: false, required: false
  public get tagPropagation() {
    return this.getStringAttribute('tag_propagation');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccSagemakerDomainTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
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
