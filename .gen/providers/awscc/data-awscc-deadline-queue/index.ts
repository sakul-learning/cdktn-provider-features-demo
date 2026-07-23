// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/deadline_queue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccDeadlineQueueConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/deadline_queue#id DataAwsccDeadlineQueue#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccDeadlineQueueJobAttachmentSettings {
}

export function dataAwsccDeadlineQueueJobAttachmentSettingsToTerraform(struct?: DataAwsccDeadlineQueueJobAttachmentSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDeadlineQueueJobAttachmentSettingsToHclTerraform(struct?: DataAwsccDeadlineQueueJobAttachmentSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDeadlineQueueJobAttachmentSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDeadlineQueueJobAttachmentSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // root_prefix - computed: true, optional: false, required: false
  public get rootPrefix() {
    return this.getStringAttribute('root_prefix');
  }

  // s3_bucket_name - computed: true, optional: false, required: false
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
}
export interface DataAwsccDeadlineQueueJobRunAsUserPosix {
}

export function dataAwsccDeadlineQueueJobRunAsUserPosixToTerraform(struct?: DataAwsccDeadlineQueueJobRunAsUserPosix): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDeadlineQueueJobRunAsUserPosixToHclTerraform(struct?: DataAwsccDeadlineQueueJobRunAsUserPosix): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDeadlineQueueJobRunAsUserPosix | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDeadlineQueueJobRunAsUserPosix | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}
export interface DataAwsccDeadlineQueueJobRunAsUserWindows {
}

export function dataAwsccDeadlineQueueJobRunAsUserWindowsToTerraform(struct?: DataAwsccDeadlineQueueJobRunAsUserWindows): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDeadlineQueueJobRunAsUserWindowsToHclTerraform(struct?: DataAwsccDeadlineQueueJobRunAsUserWindows): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDeadlineQueueJobRunAsUserWindows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDeadlineQueueJobRunAsUserWindows | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password_arn - computed: true, optional: false, required: false
  public get passwordArn() {
    return this.getStringAttribute('password_arn');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}
export interface DataAwsccDeadlineQueueJobRunAsUser {
}

export function dataAwsccDeadlineQueueJobRunAsUserToTerraform(struct?: DataAwsccDeadlineQueueJobRunAsUser): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDeadlineQueueJobRunAsUserToHclTerraform(struct?: DataAwsccDeadlineQueueJobRunAsUser): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDeadlineQueueJobRunAsUserOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDeadlineQueueJobRunAsUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDeadlineQueueJobRunAsUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // posix - computed: true, optional: false, required: false
  private _posix = new DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference(this, "posix");
  public get posix() {
    return this._posix;
  }

  // run_as - computed: true, optional: false, required: false
  public get runAs() {
    return this.getStringAttribute('run_as');
  }

  // windows - computed: true, optional: false, required: false
  private _windows = new DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference(this, "windows");
  public get windows() {
    return this._windows;
  }
}
export interface DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalanced {
}

export function dataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedToTerraform(struct?: DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalanced): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedToHclTerraform(struct?: DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalanced): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalanced | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalanced | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rendering_task_buffer - computed: true, optional: false, required: false
  public get renderingTaskBuffer() {
    return this.getNumberAttribute('rendering_task_buffer');
  }
}
export interface DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride {
}

export function dataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideToTerraform(struct?: DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideToHclTerraform(struct?: DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // always_schedule_first - computed: true, optional: false, required: false
  public get alwaysScheduleFirst() {
    return this.getStringAttribute('always_schedule_first');
  }
}
export interface DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride {
}

export function dataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideToTerraform(struct?: DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideToHclTerraform(struct?: DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // always_schedule_last - computed: true, optional: false, required: false
  public get alwaysScheduleLast() {
    return this.getStringAttribute('always_schedule_last');
  }
}
export interface DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalanced {
}

export function dataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedToTerraform(struct?: DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalanced): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedToHclTerraform(struct?: DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalanced): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalanced | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalanced | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_weight - computed: true, optional: false, required: false
  public get errorWeight() {
    return this.getNumberAttribute('error_weight');
  }

  // max_priority_override - computed: true, optional: false, required: false
  private _maxPriorityOverride = new DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference(this, "max_priority_override");
  public get maxPriorityOverride() {
    return this._maxPriorityOverride;
  }

  // min_priority_override - computed: true, optional: false, required: false
  private _minPriorityOverride = new DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference(this, "min_priority_override");
  public get minPriorityOverride() {
    return this._minPriorityOverride;
  }

  // priority_weight - computed: true, optional: false, required: false
  public get priorityWeight() {
    return this.getNumberAttribute('priority_weight');
  }

  // rendering_task_buffer - computed: true, optional: false, required: false
  public get renderingTaskBuffer() {
    return this.getNumberAttribute('rendering_task_buffer');
  }

  // rendering_task_weight - computed: true, optional: false, required: false
  public get renderingTaskWeight() {
    return this.getNumberAttribute('rendering_task_weight');
  }

  // submission_time_weight - computed: true, optional: false, required: false
  public get submissionTimeWeight() {
    return this.getNumberAttribute('submission_time_weight');
  }
}
export interface DataAwsccDeadlineQueueSchedulingConfiguration {
}

export function dataAwsccDeadlineQueueSchedulingConfigurationToTerraform(struct?: DataAwsccDeadlineQueueSchedulingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDeadlineQueueSchedulingConfigurationToHclTerraform(struct?: DataAwsccDeadlineQueueSchedulingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDeadlineQueueSchedulingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDeadlineQueueSchedulingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDeadlineQueueSchedulingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // priority_balanced - computed: true, optional: false, required: false
  private _priorityBalanced = new DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference(this, "priority_balanced");
  public get priorityBalanced() {
    return this._priorityBalanced;
  }

  // priority_fifo - computed: true, optional: false, required: false
  public get priorityFifo() {
    return this.getStringAttribute('priority_fifo');
  }

  // weighted_balanced - computed: true, optional: false, required: false
  private _weightedBalanced = new DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference(this, "weighted_balanced");
  public get weightedBalanced() {
    return this._weightedBalanced;
  }
}
export interface DataAwsccDeadlineQueueTags {
}

export function dataAwsccDeadlineQueueTagsToTerraform(struct?: DataAwsccDeadlineQueueTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDeadlineQueueTagsToHclTerraform(struct?: DataAwsccDeadlineQueueTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDeadlineQueueTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDeadlineQueueTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDeadlineQueueTags | undefined) {
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

export class DataAwsccDeadlineQueueTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDeadlineQueueTagsOutputReference {
    return new DataAwsccDeadlineQueueTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/deadline_queue awscc_deadline_queue}
*/
export class DataAwsccDeadlineQueue extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_deadline_queue";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccDeadlineQueue resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccDeadlineQueue to import
  * @param importFromId The id of the existing DataAwsccDeadlineQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/deadline_queue#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccDeadlineQueue to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_deadline_queue", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/deadline_queue awscc_deadline_queue} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccDeadlineQueueConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccDeadlineQueueConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_deadline_queue',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.93.0'
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

  // allowed_storage_profile_ids - computed: true, optional: false, required: false
  public get allowedStorageProfileIds() {
    return this.getListAttribute('allowed_storage_profile_ids');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // default_budget_action - computed: true, optional: false, required: false
  public get defaultBudgetAction() {
    return this.getStringAttribute('default_budget_action');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // farm_id - computed: true, optional: false, required: false
  public get farmId() {
    return this.getStringAttribute('farm_id');
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

  // job_attachment_settings - computed: true, optional: false, required: false
  private _jobAttachmentSettings = new DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference(this, "job_attachment_settings");
  public get jobAttachmentSettings() {
    return this._jobAttachmentSettings;
  }

  // job_run_as_user - computed: true, optional: false, required: false
  private _jobRunAsUser = new DataAwsccDeadlineQueueJobRunAsUserOutputReference(this, "job_run_as_user");
  public get jobRunAsUser() {
    return this._jobRunAsUser;
  }

  // queue_id - computed: true, optional: false, required: false
  public get queueId() {
    return this.getStringAttribute('queue_id');
  }

  // required_file_system_location_names - computed: true, optional: false, required: false
  public get requiredFileSystemLocationNames() {
    return this.getListAttribute('required_file_system_location_names');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // scheduling_configuration - computed: true, optional: false, required: false
  private _schedulingConfiguration = new DataAwsccDeadlineQueueSchedulingConfigurationOutputReference(this, "scheduling_configuration");
  public get schedulingConfiguration() {
    return this._schedulingConfiguration;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccDeadlineQueueTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
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
