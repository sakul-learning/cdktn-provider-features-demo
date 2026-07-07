// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/iot_job_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccIotJobTemplateConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/iot_job_template#id DataAwsccIotJobTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccIotJobTemplateAbortConfigCriteriaListStruct {
}

export function dataAwsccIotJobTemplateAbortConfigCriteriaListStructToTerraform(struct?: DataAwsccIotJobTemplateAbortConfigCriteriaListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotJobTemplateAbortConfigCriteriaListStructToHclTerraform(struct?: DataAwsccIotJobTemplateAbortConfigCriteriaListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotJobTemplateAbortConfigCriteriaListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotJobTemplateAbortConfigCriteriaListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotJobTemplateAbortConfigCriteriaListStruct | undefined) {
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

  // failure_type - computed: true, optional: false, required: false
  public get failureType() {
    return this.getStringAttribute('failure_type');
  }

  // min_number_of_executed_things - computed: true, optional: false, required: false
  public get minNumberOfExecutedThings() {
    return this.getNumberAttribute('min_number_of_executed_things');
  }

  // threshold_percentage - computed: true, optional: false, required: false
  public get thresholdPercentage() {
    return this.getNumberAttribute('threshold_percentage');
  }
}

export class DataAwsccIotJobTemplateAbortConfigCriteriaListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotJobTemplateAbortConfigCriteriaListStructOutputReference {
    return new DataAwsccIotJobTemplateAbortConfigCriteriaListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotJobTemplateAbortConfig {
}

export function dataAwsccIotJobTemplateAbortConfigToTerraform(struct?: DataAwsccIotJobTemplateAbortConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotJobTemplateAbortConfigToHclTerraform(struct?: DataAwsccIotJobTemplateAbortConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotJobTemplateAbortConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotJobTemplateAbortConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotJobTemplateAbortConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // criteria_list - computed: true, optional: false, required: false
  private _criteriaList = new DataAwsccIotJobTemplateAbortConfigCriteriaListStructList(this, "criteria_list", false);
  public get criteriaList() {
    return this._criteriaList;
  }
}
export interface DataAwsccIotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct {
}

export function dataAwsccIotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructToTerraform(struct?: DataAwsccIotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructToHclTerraform(struct?: DataAwsccIotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // failure_type - computed: true, optional: false, required: false
  public get failureType() {
    return this.getStringAttribute('failure_type');
  }

  // number_of_retries - computed: true, optional: false, required: false
  public get numberOfRetries() {
    return this.getNumberAttribute('number_of_retries');
  }
}

export class DataAwsccIotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference {
    return new DataAwsccIotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotJobTemplateJobExecutionsRetryConfig {
}

export function dataAwsccIotJobTemplateJobExecutionsRetryConfigToTerraform(struct?: DataAwsccIotJobTemplateJobExecutionsRetryConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotJobTemplateJobExecutionsRetryConfigToHclTerraform(struct?: DataAwsccIotJobTemplateJobExecutionsRetryConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotJobTemplateJobExecutionsRetryConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotJobTemplateJobExecutionsRetryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotJobTemplateJobExecutionsRetryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // retry_criteria_list - computed: true, optional: false, required: false
  private _retryCriteriaList = new DataAwsccIotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList(this, "retry_criteria_list", false);
  public get retryCriteriaList() {
    return this._retryCriteriaList;
  }
}
export interface DataAwsccIotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria {
}

export function dataAwsccIotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaToTerraform(struct?: DataAwsccIotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaToHclTerraform(struct?: DataAwsccIotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // number_of_notified_things - computed: true, optional: false, required: false
  public get numberOfNotifiedThings() {
    return this.getNumberAttribute('number_of_notified_things');
  }

  // number_of_succeeded_things - computed: true, optional: false, required: false
  public get numberOfSucceededThings() {
    return this.getNumberAttribute('number_of_succeeded_things');
  }
}
export interface DataAwsccIotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate {
}

export function dataAwsccIotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateToTerraform(struct?: DataAwsccIotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateToHclTerraform(struct?: DataAwsccIotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base_rate_per_minute - computed: true, optional: false, required: false
  public get baseRatePerMinute() {
    return this.getNumberAttribute('base_rate_per_minute');
  }

  // increment_factor - computed: true, optional: false, required: false
  public get incrementFactor() {
    return this.getNumberAttribute('increment_factor');
  }

  // rate_increase_criteria - computed: true, optional: false, required: false
  private _rateIncreaseCriteria = new DataAwsccIotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference(this, "rate_increase_criteria");
  public get rateIncreaseCriteria() {
    return this._rateIncreaseCriteria;
  }
}
export interface DataAwsccIotJobTemplateJobExecutionsRolloutConfig {
}

export function dataAwsccIotJobTemplateJobExecutionsRolloutConfigToTerraform(struct?: DataAwsccIotJobTemplateJobExecutionsRolloutConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotJobTemplateJobExecutionsRolloutConfigToHclTerraform(struct?: DataAwsccIotJobTemplateJobExecutionsRolloutConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotJobTemplateJobExecutionsRolloutConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotJobTemplateJobExecutionsRolloutConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotJobTemplateJobExecutionsRolloutConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exponential_rollout_rate - computed: true, optional: false, required: false
  private _exponentialRolloutRate = new DataAwsccIotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference(this, "exponential_rollout_rate");
  public get exponentialRolloutRate() {
    return this._exponentialRolloutRate;
  }

  // maximum_per_minute - computed: true, optional: false, required: false
  public get maximumPerMinute() {
    return this.getNumberAttribute('maximum_per_minute');
  }
}
export interface DataAwsccIotJobTemplateMaintenanceWindows {
}

export function dataAwsccIotJobTemplateMaintenanceWindowsToTerraform(struct?: DataAwsccIotJobTemplateMaintenanceWindows): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotJobTemplateMaintenanceWindowsToHclTerraform(struct?: DataAwsccIotJobTemplateMaintenanceWindows): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotJobTemplateMaintenanceWindowsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotJobTemplateMaintenanceWindows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotJobTemplateMaintenanceWindows | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration_in_minutes - computed: true, optional: false, required: false
  public get durationInMinutes() {
    return this.getNumberAttribute('duration_in_minutes');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}

export class DataAwsccIotJobTemplateMaintenanceWindowsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotJobTemplateMaintenanceWindowsOutputReference {
    return new DataAwsccIotJobTemplateMaintenanceWindowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotJobTemplatePresignedUrlConfig {
}

export function dataAwsccIotJobTemplatePresignedUrlConfigToTerraform(struct?: DataAwsccIotJobTemplatePresignedUrlConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotJobTemplatePresignedUrlConfigToHclTerraform(struct?: DataAwsccIotJobTemplatePresignedUrlConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotJobTemplatePresignedUrlConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotJobTemplatePresignedUrlConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotJobTemplatePresignedUrlConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expires_in_sec - computed: true, optional: false, required: false
  public get expiresInSec() {
    return this.getNumberAttribute('expires_in_sec');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccIotJobTemplateTags {
}

export function dataAwsccIotJobTemplateTagsToTerraform(struct?: DataAwsccIotJobTemplateTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotJobTemplateTagsToHclTerraform(struct?: DataAwsccIotJobTemplateTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotJobTemplateTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotJobTemplateTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotJobTemplateTags | undefined) {
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

export class DataAwsccIotJobTemplateTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotJobTemplateTagsOutputReference {
    return new DataAwsccIotJobTemplateTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotJobTemplateTimeoutConfig {
}

export function dataAwsccIotJobTemplateTimeoutConfigToTerraform(struct?: DataAwsccIotJobTemplateTimeoutConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotJobTemplateTimeoutConfigToHclTerraform(struct?: DataAwsccIotJobTemplateTimeoutConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotJobTemplateTimeoutConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotJobTemplateTimeoutConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotJobTemplateTimeoutConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // in_progress_timeout_in_minutes - computed: true, optional: false, required: false
  public get inProgressTimeoutInMinutes() {
    return this.getNumberAttribute('in_progress_timeout_in_minutes');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/iot_job_template awscc_iot_job_template}
*/
export class DataAwsccIotJobTemplate extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iot_job_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccIotJobTemplate resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccIotJobTemplate to import
  * @param importFromId The id of the existing DataAwsccIotJobTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/iot_job_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccIotJobTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iot_job_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/iot_job_template awscc_iot_job_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotJobTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotJobTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iot_job_template',
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

  // abort_config - computed: true, optional: false, required: false
  private _abortConfig = new DataAwsccIotJobTemplateAbortConfigOutputReference(this, "abort_config");
  public get abortConfig() {
    return this._abortConfig;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // destination_package_versions - computed: true, optional: false, required: false
  public get destinationPackageVersions() {
    return this.getListAttribute('destination_package_versions');
  }

  // document - computed: true, optional: false, required: false
  public get document() {
    return this.getStringAttribute('document');
  }

  // document_source - computed: true, optional: false, required: false
  public get documentSource() {
    return this.getStringAttribute('document_source');
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

  // job_arn - computed: true, optional: false, required: false
  public get jobArn() {
    return this.getStringAttribute('job_arn');
  }

  // job_executions_retry_config - computed: true, optional: false, required: false
  private _jobExecutionsRetryConfig = new DataAwsccIotJobTemplateJobExecutionsRetryConfigOutputReference(this, "job_executions_retry_config");
  public get jobExecutionsRetryConfig() {
    return this._jobExecutionsRetryConfig;
  }

  // job_executions_rollout_config - computed: true, optional: false, required: false
  private _jobExecutionsRolloutConfig = new DataAwsccIotJobTemplateJobExecutionsRolloutConfigOutputReference(this, "job_executions_rollout_config");
  public get jobExecutionsRolloutConfig() {
    return this._jobExecutionsRolloutConfig;
  }

  // job_template_id - computed: true, optional: false, required: false
  public get jobTemplateId() {
    return this.getStringAttribute('job_template_id');
  }

  // maintenance_windows - computed: true, optional: false, required: false
  private _maintenanceWindows = new DataAwsccIotJobTemplateMaintenanceWindowsList(this, "maintenance_windows", false);
  public get maintenanceWindows() {
    return this._maintenanceWindows;
  }

  // presigned_url_config - computed: true, optional: false, required: false
  private _presignedUrlConfig = new DataAwsccIotJobTemplatePresignedUrlConfigOutputReference(this, "presigned_url_config");
  public get presignedUrlConfig() {
    return this._presignedUrlConfig;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccIotJobTemplateTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // timeout_config - computed: true, optional: false, required: false
  private _timeoutConfig = new DataAwsccIotJobTemplateTimeoutConfigOutputReference(this, "timeout_config");
  public get timeoutConfig() {
    return this._timeoutConfig;
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
