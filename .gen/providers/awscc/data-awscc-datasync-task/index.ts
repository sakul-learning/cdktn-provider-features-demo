// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/datasync_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccDatasyncTaskConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/datasync_task#id DataAwsccDatasyncTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccDatasyncTaskExcludes {
}

export function dataAwsccDatasyncTaskExcludesToTerraform(struct?: DataAwsccDatasyncTaskExcludes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatasyncTaskExcludesToHclTerraform(struct?: DataAwsccDatasyncTaskExcludes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatasyncTaskExcludesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDatasyncTaskExcludes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatasyncTaskExcludes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filter_type - computed: true, optional: false, required: false
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccDatasyncTaskExcludesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDatasyncTaskExcludesOutputReference {
    return new DataAwsccDatasyncTaskExcludesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDatasyncTaskIncludes {
}

export function dataAwsccDatasyncTaskIncludesToTerraform(struct?: DataAwsccDatasyncTaskIncludes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatasyncTaskIncludesToHclTerraform(struct?: DataAwsccDatasyncTaskIncludes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatasyncTaskIncludesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDatasyncTaskIncludes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatasyncTaskIncludes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filter_type - computed: true, optional: false, required: false
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccDatasyncTaskIncludesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDatasyncTaskIncludesOutputReference {
    return new DataAwsccDatasyncTaskIncludesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDatasyncTaskManifestConfigSourceS3 {
}

export function dataAwsccDatasyncTaskManifestConfigSourceS3ToTerraform(struct?: DataAwsccDatasyncTaskManifestConfigSourceS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatasyncTaskManifestConfigSourceS3ToHclTerraform(struct?: DataAwsccDatasyncTaskManifestConfigSourceS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatasyncTaskManifestConfigSourceS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatasyncTaskManifestConfigSourceS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_access_role_arn - computed: true, optional: false, required: false
  public get bucketAccessRoleArn() {
    return this.getStringAttribute('bucket_access_role_arn');
  }

  // manifest_object_path - computed: true, optional: false, required: false
  public get manifestObjectPath() {
    return this.getStringAttribute('manifest_object_path');
  }

  // manifest_object_version_id - computed: true, optional: false, required: false
  public get manifestObjectVersionId() {
    return this.getStringAttribute('manifest_object_version_id');
  }

  // s3_bucket_arn - computed: true, optional: false, required: false
  public get s3BucketArn() {
    return this.getStringAttribute('s3_bucket_arn');
  }
}
export interface DataAwsccDatasyncTaskManifestConfigSource {
}

export function dataAwsccDatasyncTaskManifestConfigSourceToTerraform(struct?: DataAwsccDatasyncTaskManifestConfigSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatasyncTaskManifestConfigSourceToHclTerraform(struct?: DataAwsccDatasyncTaskManifestConfigSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatasyncTaskManifestConfigSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatasyncTaskManifestConfigSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatasyncTaskManifestConfigSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3 - computed: true, optional: false, required: false
  private _s3 = new DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
}
export interface DataAwsccDatasyncTaskManifestConfig {
}

export function dataAwsccDatasyncTaskManifestConfigToTerraform(struct?: DataAwsccDatasyncTaskManifestConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatasyncTaskManifestConfigToHclTerraform(struct?: DataAwsccDatasyncTaskManifestConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatasyncTaskManifestConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatasyncTaskManifestConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatasyncTaskManifestConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataAwsccDatasyncTaskManifestConfigSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
}
export interface DataAwsccDatasyncTaskOptions {
}

export function dataAwsccDatasyncTaskOptionsToTerraform(struct?: DataAwsccDatasyncTaskOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatasyncTaskOptionsToHclTerraform(struct?: DataAwsccDatasyncTaskOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatasyncTaskOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatasyncTaskOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatasyncTaskOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // atime - computed: true, optional: false, required: false
  public get atime() {
    return this.getStringAttribute('atime');
  }

  // bytes_per_second - computed: true, optional: false, required: false
  public get bytesPerSecond() {
    return this.getNumberAttribute('bytes_per_second');
  }

  // gid - computed: true, optional: false, required: false
  public get gid() {
    return this.getStringAttribute('gid');
  }

  // log_level - computed: true, optional: false, required: false
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }

  // mtime - computed: true, optional: false, required: false
  public get mtime() {
    return this.getStringAttribute('mtime');
  }

  // object_tags - computed: true, optional: false, required: false
  public get objectTags() {
    return this.getStringAttribute('object_tags');
  }

  // overwrite_mode - computed: true, optional: false, required: false
  public get overwriteMode() {
    return this.getStringAttribute('overwrite_mode');
  }

  // posix_permissions - computed: true, optional: false, required: false
  public get posixPermissions() {
    return this.getStringAttribute('posix_permissions');
  }

  // preserve_deleted_files - computed: true, optional: false, required: false
  public get preserveDeletedFiles() {
    return this.getStringAttribute('preserve_deleted_files');
  }

  // preserve_devices - computed: true, optional: false, required: false
  public get preserveDevices() {
    return this.getStringAttribute('preserve_devices');
  }

  // security_descriptor_copy_flags - computed: true, optional: false, required: false
  public get securityDescriptorCopyFlags() {
    return this.getStringAttribute('security_descriptor_copy_flags');
  }

  // task_queueing - computed: true, optional: false, required: false
  public get taskQueueing() {
    return this.getStringAttribute('task_queueing');
  }

  // transfer_mode - computed: true, optional: false, required: false
  public get transferMode() {
    return this.getStringAttribute('transfer_mode');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // verify_mode - computed: true, optional: false, required: false
  public get verifyMode() {
    return this.getStringAttribute('verify_mode');
  }
}
export interface DataAwsccDatasyncTaskSchedule {
}

export function dataAwsccDatasyncTaskScheduleToTerraform(struct?: DataAwsccDatasyncTaskSchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatasyncTaskScheduleToHclTerraform(struct?: DataAwsccDatasyncTaskSchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatasyncTaskScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatasyncTaskSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatasyncTaskSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // schedule_expression - computed: true, optional: false, required: false
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface DataAwsccDatasyncTaskTags {
}

export function dataAwsccDatasyncTaskTagsToTerraform(struct?: DataAwsccDatasyncTaskTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatasyncTaskTagsToHclTerraform(struct?: DataAwsccDatasyncTaskTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatasyncTaskTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDatasyncTaskTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatasyncTaskTags | undefined) {
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

export class DataAwsccDatasyncTaskTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDatasyncTaskTagsOutputReference {
    return new DataAwsccDatasyncTaskTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDatasyncTaskTaskReportConfigDestinationS3 {
}

export function dataAwsccDatasyncTaskTaskReportConfigDestinationS3ToTerraform(struct?: DataAwsccDatasyncTaskTaskReportConfigDestinationS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatasyncTaskTaskReportConfigDestinationS3ToHclTerraform(struct?: DataAwsccDatasyncTaskTaskReportConfigDestinationS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatasyncTaskTaskReportConfigDestinationS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatasyncTaskTaskReportConfigDestinationS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_access_role_arn - computed: true, optional: false, required: false
  public get bucketAccessRoleArn() {
    return this.getStringAttribute('bucket_access_role_arn');
  }

  // s3_bucket_arn - computed: true, optional: false, required: false
  public get s3BucketArn() {
    return this.getStringAttribute('s3_bucket_arn');
  }

  // subdirectory - computed: true, optional: false, required: false
  public get subdirectory() {
    return this.getStringAttribute('subdirectory');
  }
}
export interface DataAwsccDatasyncTaskTaskReportConfigDestination {
}

export function dataAwsccDatasyncTaskTaskReportConfigDestinationToTerraform(struct?: DataAwsccDatasyncTaskTaskReportConfigDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatasyncTaskTaskReportConfigDestinationToHclTerraform(struct?: DataAwsccDatasyncTaskTaskReportConfigDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatasyncTaskTaskReportConfigDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatasyncTaskTaskReportConfigDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3 - computed: true, optional: false, required: false
  private _s3 = new DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
}
export interface DataAwsccDatasyncTaskTaskReportConfigOverridesDeleted {
}

export function dataAwsccDatasyncTaskTaskReportConfigOverridesDeletedToTerraform(struct?: DataAwsccDatasyncTaskTaskReportConfigOverridesDeleted): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatasyncTaskTaskReportConfigOverridesDeletedToHclTerraform(struct?: DataAwsccDatasyncTaskTaskReportConfigOverridesDeleted): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatasyncTaskTaskReportConfigOverridesDeleted | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatasyncTaskTaskReportConfigOverridesDeleted | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // report_level - computed: true, optional: false, required: false
  public get reportLevel() {
    return this.getStringAttribute('report_level');
  }
}
export interface DataAwsccDatasyncTaskTaskReportConfigOverridesSkipped {
}

export function dataAwsccDatasyncTaskTaskReportConfigOverridesSkippedToTerraform(struct?: DataAwsccDatasyncTaskTaskReportConfigOverridesSkipped): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatasyncTaskTaskReportConfigOverridesSkippedToHclTerraform(struct?: DataAwsccDatasyncTaskTaskReportConfigOverridesSkipped): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatasyncTaskTaskReportConfigOverridesSkipped | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatasyncTaskTaskReportConfigOverridesSkipped | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // report_level - computed: true, optional: false, required: false
  public get reportLevel() {
    return this.getStringAttribute('report_level');
  }
}
export interface DataAwsccDatasyncTaskTaskReportConfigOverridesTransferred {
}

export function dataAwsccDatasyncTaskTaskReportConfigOverridesTransferredToTerraform(struct?: DataAwsccDatasyncTaskTaskReportConfigOverridesTransferred): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatasyncTaskTaskReportConfigOverridesTransferredToHclTerraform(struct?: DataAwsccDatasyncTaskTaskReportConfigOverridesTransferred): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatasyncTaskTaskReportConfigOverridesTransferred | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatasyncTaskTaskReportConfigOverridesTransferred | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // report_level - computed: true, optional: false, required: false
  public get reportLevel() {
    return this.getStringAttribute('report_level');
  }
}
export interface DataAwsccDatasyncTaskTaskReportConfigOverridesVerified {
}

export function dataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedToTerraform(struct?: DataAwsccDatasyncTaskTaskReportConfigOverridesVerified): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedToHclTerraform(struct?: DataAwsccDatasyncTaskTaskReportConfigOverridesVerified): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatasyncTaskTaskReportConfigOverridesVerified | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatasyncTaskTaskReportConfigOverridesVerified | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // report_level - computed: true, optional: false, required: false
  public get reportLevel() {
    return this.getStringAttribute('report_level');
  }
}
export interface DataAwsccDatasyncTaskTaskReportConfigOverrides {
}

export function dataAwsccDatasyncTaskTaskReportConfigOverridesToTerraform(struct?: DataAwsccDatasyncTaskTaskReportConfigOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatasyncTaskTaskReportConfigOverridesToHclTerraform(struct?: DataAwsccDatasyncTaskTaskReportConfigOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatasyncTaskTaskReportConfigOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatasyncTaskTaskReportConfigOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deleted - computed: true, optional: false, required: false
  private _deleted = new DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference(this, "deleted");
  public get deleted() {
    return this._deleted;
  }

  // skipped - computed: true, optional: false, required: false
  private _skipped = new DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference(this, "skipped");
  public get skipped() {
    return this._skipped;
  }

  // transferred - computed: true, optional: false, required: false
  private _transferred = new DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference(this, "transferred");
  public get transferred() {
    return this._transferred;
  }

  // verified - computed: true, optional: false, required: false
  private _verified = new DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference(this, "verified");
  public get verified() {
    return this._verified;
  }
}
export interface DataAwsccDatasyncTaskTaskReportConfig {
}

export function dataAwsccDatasyncTaskTaskReportConfigToTerraform(struct?: DataAwsccDatasyncTaskTaskReportConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatasyncTaskTaskReportConfigToHclTerraform(struct?: DataAwsccDatasyncTaskTaskReportConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatasyncTaskTaskReportConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatasyncTaskTaskReportConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatasyncTaskTaskReportConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination - computed: true, optional: false, required: false
  private _destination = new DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }

  // object_version_ids - computed: true, optional: false, required: false
  public get objectVersionIds() {
    return this.getStringAttribute('object_version_ids');
  }

  // output_type - computed: true, optional: false, required: false
  public get outputType() {
    return this.getStringAttribute('output_type');
  }

  // overrides - computed: true, optional: false, required: false
  private _overrides = new DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference(this, "overrides");
  public get overrides() {
    return this._overrides;
  }

  // report_level - computed: true, optional: false, required: false
  public get reportLevel() {
    return this.getStringAttribute('report_level');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/datasync_task awscc_datasync_task}
*/
export class DataAwsccDatasyncTask extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_datasync_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccDatasyncTask resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccDatasyncTask to import
  * @param importFromId The id of the existing DataAwsccDatasyncTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/datasync_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccDatasyncTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datasync_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/datasync_task awscc_datasync_task} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccDatasyncTaskConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccDatasyncTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_datasync_task',
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

  // cloudwatch_log_group_arn - computed: true, optional: false, required: false
  public get cloudwatchLogGroupArn() {
    return this.getStringAttribute('cloudwatch_log_group_arn');
  }

  // destination_location_arn - computed: true, optional: false, required: false
  public get destinationLocationArn() {
    return this.getStringAttribute('destination_location_arn');
  }

  // destination_network_interface_arns - computed: true, optional: false, required: false
  public get destinationNetworkInterfaceArns() {
    return this.getListAttribute('destination_network_interface_arns');
  }

  // excludes - computed: true, optional: false, required: false
  private _excludes = new DataAwsccDatasyncTaskExcludesList(this, "excludes", false);
  public get excludes() {
    return this._excludes;
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

  // includes - computed: true, optional: false, required: false
  private _includes = new DataAwsccDatasyncTaskIncludesList(this, "includes", false);
  public get includes() {
    return this._includes;
  }

  // manifest_config - computed: true, optional: false, required: false
  private _manifestConfig = new DataAwsccDatasyncTaskManifestConfigOutputReference(this, "manifest_config");
  public get manifestConfig() {
    return this._manifestConfig;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // options - computed: true, optional: false, required: false
  private _options = new DataAwsccDatasyncTaskOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }

  // schedule - computed: true, optional: false, required: false
  private _schedule = new DataAwsccDatasyncTaskScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }

  // source_location_arn - computed: true, optional: false, required: false
  public get sourceLocationArn() {
    return this.getStringAttribute('source_location_arn');
  }

  // source_network_interface_arns - computed: true, optional: false, required: false
  public get sourceNetworkInterfaceArns() {
    return this.getListAttribute('source_network_interface_arns');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccDatasyncTaskTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // task_arn - computed: true, optional: false, required: false
  public get taskArn() {
    return this.getStringAttribute('task_arn');
  }

  // task_mode - computed: true, optional: false, required: false
  public get taskMode() {
    return this.getStringAttribute('task_mode');
  }

  // task_report_config - computed: true, optional: false, required: false
  private _taskReportConfig = new DataAwsccDatasyncTaskTaskReportConfigOutputReference(this, "task_report_config");
  public get taskReportConfig() {
    return this._taskReportConfig;
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
