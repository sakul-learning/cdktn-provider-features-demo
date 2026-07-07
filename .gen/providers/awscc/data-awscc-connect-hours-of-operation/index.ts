// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/connect_hours_of_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccConnectHoursOfOperationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/connect_hours_of_operation#id DataAwsccConnectHoursOfOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccConnectHoursOfOperationChildHoursOfOperations {
}

export function dataAwsccConnectHoursOfOperationChildHoursOfOperationsToTerraform(struct?: DataAwsccConnectHoursOfOperationChildHoursOfOperations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectHoursOfOperationChildHoursOfOperationsToHclTerraform(struct?: DataAwsccConnectHoursOfOperationChildHoursOfOperations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccConnectHoursOfOperationChildHoursOfOperations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectHoursOfOperationChildHoursOfOperations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsccConnectHoursOfOperationChildHoursOfOperationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference {
    return new DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccConnectHoursOfOperationConfigEndTime {
}

export function dataAwsccConnectHoursOfOperationConfigEndTimeToTerraform(struct?: DataAwsccConnectHoursOfOperationConfigEndTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectHoursOfOperationConfigEndTimeToHclTerraform(struct?: DataAwsccConnectHoursOfOperationConfigEndTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectHoursOfOperationConfigEndTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectHoursOfOperationConfigEndTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hours - computed: true, optional: false, required: false
  public get hours() {
    return this.getNumberAttribute('hours');
  }

  // minutes - computed: true, optional: false, required: false
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
}
export interface DataAwsccConnectHoursOfOperationConfigStartTime {
}

export function dataAwsccConnectHoursOfOperationConfigStartTimeToTerraform(struct?: DataAwsccConnectHoursOfOperationConfigStartTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectHoursOfOperationConfigStartTimeToHclTerraform(struct?: DataAwsccConnectHoursOfOperationConfigStartTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectHoursOfOperationConfigStartTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectHoursOfOperationConfigStartTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hours - computed: true, optional: false, required: false
  public get hours() {
    return this.getNumberAttribute('hours');
  }

  // minutes - computed: true, optional: false, required: false
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
}
export interface DataAwsccConnectHoursOfOperationConfigA {
}

export function dataAwsccConnectHoursOfOperationConfigAToTerraform(struct?: DataAwsccConnectHoursOfOperationConfigA): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectHoursOfOperationConfigAToHclTerraform(struct?: DataAwsccConnectHoursOfOperationConfigA): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectHoursOfOperationConfigAOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccConnectHoursOfOperationConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectHoursOfOperationConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day - computed: true, optional: false, required: false
  public get day() {
    return this.getStringAttribute('day');
  }

  // end_time - computed: true, optional: false, required: false
  private _endTime = new DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference(this, "end_time");
  public get endTime() {
    return this._endTime;
  }

  // start_time - computed: true, optional: false, required: false
  private _startTime = new DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference(this, "start_time");
  public get startTime() {
    return this._startTime;
  }
}

export class DataAwsccConnectHoursOfOperationConfigAList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccConnectHoursOfOperationConfigAOutputReference {
    return new DataAwsccConnectHoursOfOperationConfigAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime {
}

export function dataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeToTerraform(struct?: DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeToHclTerraform(struct?: DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hours - computed: true, optional: false, required: false
  public get hours() {
    return this.getNumberAttribute('hours');
  }

  // minutes - computed: true, optional: false, required: false
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
}
export interface DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime {
}

export function dataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeToTerraform(struct?: DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeToHclTerraform(struct?: DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hours - computed: true, optional: false, required: false
  public get hours() {
    return this.getNumberAttribute('hours');
  }

  // minutes - computed: true, optional: false, required: false
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
}
export interface DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig {
}

export function dataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigToTerraform(struct?: DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigToHclTerraform(struct?: DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day - computed: true, optional: false, required: false
  public get day() {
    return this.getStringAttribute('day');
  }

  // end_time - computed: true, optional: false, required: false
  private _endTime = new DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference(this, "end_time");
  public get endTime() {
    return this._endTime;
  }

  // start_time - computed: true, optional: false, required: false
  private _startTime = new DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference(this, "start_time");
  public get startTime() {
    return this._startTime;
  }
}

export class DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference {
    return new DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern {
}

export function dataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternToTerraform(struct?: DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternToHclTerraform(struct?: DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // by_month - computed: true, optional: false, required: false
  public get byMonth() {
    return this.getNumberListAttribute('by_month');
  }

  // by_month_day - computed: true, optional: false, required: false
  public get byMonthDay() {
    return this.getNumberListAttribute('by_month_day');
  }

  // by_weekday_occurrence - computed: true, optional: false, required: false
  public get byWeekdayOccurrence() {
    return this.getNumberListAttribute('by_weekday_occurrence');
  }

  // frequency - computed: true, optional: false, required: false
  public get frequency() {
    return this.getStringAttribute('frequency');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }
}
export interface DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig {
}

export function dataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigToTerraform(struct?: DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigToHclTerraform(struct?: DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // recurrence_pattern - computed: true, optional: false, required: false
  private _recurrencePattern = new DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference(this, "recurrence_pattern");
  public get recurrencePattern() {
    return this._recurrencePattern;
  }
}
export interface DataAwsccConnectHoursOfOperationHoursOfOperationOverrides {
}

export function dataAwsccConnectHoursOfOperationHoursOfOperationOverridesToTerraform(struct?: DataAwsccConnectHoursOfOperationHoursOfOperationOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectHoursOfOperationHoursOfOperationOverridesToHclTerraform(struct?: DataAwsccConnectHoursOfOperationHoursOfOperationOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccConnectHoursOfOperationHoursOfOperationOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectHoursOfOperationHoursOfOperationOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // effective_from - computed: true, optional: false, required: false
  public get effectiveFrom() {
    return this.getStringAttribute('effective_from');
  }

  // effective_till - computed: true, optional: false, required: false
  public get effectiveTill() {
    return this.getStringAttribute('effective_till');
  }

  // hours_of_operation_override_id - computed: true, optional: false, required: false
  public get hoursOfOperationOverrideId() {
    return this.getStringAttribute('hours_of_operation_override_id');
  }

  // override_config - computed: true, optional: false, required: false
  private _overrideConfig = new DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList(this, "override_config", true);
  public get overrideConfig() {
    return this._overrideConfig;
  }

  // override_description - computed: true, optional: false, required: false
  public get overrideDescription() {
    return this.getStringAttribute('override_description');
  }

  // override_name - computed: true, optional: false, required: false
  public get overrideName() {
    return this.getStringAttribute('override_name');
  }

  // override_type - computed: true, optional: false, required: false
  public get overrideType() {
    return this.getStringAttribute('override_type');
  }

  // recurrence_config - computed: true, optional: false, required: false
  private _recurrenceConfig = new DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference(this, "recurrence_config");
  public get recurrenceConfig() {
    return this._recurrenceConfig;
  }
}

export class DataAwsccConnectHoursOfOperationHoursOfOperationOverridesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference {
    return new DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccConnectHoursOfOperationParentHoursOfOperations {
}

export function dataAwsccConnectHoursOfOperationParentHoursOfOperationsToTerraform(struct?: DataAwsccConnectHoursOfOperationParentHoursOfOperations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectHoursOfOperationParentHoursOfOperationsToHclTerraform(struct?: DataAwsccConnectHoursOfOperationParentHoursOfOperations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccConnectHoursOfOperationParentHoursOfOperations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectHoursOfOperationParentHoursOfOperations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsccConnectHoursOfOperationParentHoursOfOperationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference {
    return new DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccConnectHoursOfOperationTags {
}

export function dataAwsccConnectHoursOfOperationTagsToTerraform(struct?: DataAwsccConnectHoursOfOperationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectHoursOfOperationTagsToHclTerraform(struct?: DataAwsccConnectHoursOfOperationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectHoursOfOperationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccConnectHoursOfOperationTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectHoursOfOperationTags | undefined) {
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

export class DataAwsccConnectHoursOfOperationTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccConnectHoursOfOperationTagsOutputReference {
    return new DataAwsccConnectHoursOfOperationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/connect_hours_of_operation awscc_connect_hours_of_operation}
*/
export class DataAwsccConnectHoursOfOperation extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_connect_hours_of_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccConnectHoursOfOperation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccConnectHoursOfOperation to import
  * @param importFromId The id of the existing DataAwsccConnectHoursOfOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/connect_hours_of_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccConnectHoursOfOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_connect_hours_of_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/connect_hours_of_operation awscc_connect_hours_of_operation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccConnectHoursOfOperationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccConnectHoursOfOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_connect_hours_of_operation',
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

  // child_hours_of_operations - computed: true, optional: false, required: false
  private _childHoursOfOperations = new DataAwsccConnectHoursOfOperationChildHoursOfOperationsList(this, "child_hours_of_operations", false);
  public get childHoursOfOperations() {
    return this._childHoursOfOperations;
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataAwsccConnectHoursOfOperationConfigAList(this, "config", true);
  public get config() {
    return this._config;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // hours_of_operation_arn - computed: true, optional: false, required: false
  public get hoursOfOperationArn() {
    return this.getStringAttribute('hours_of_operation_arn');
  }

  // hours_of_operation_overrides - computed: true, optional: false, required: false
  private _hoursOfOperationOverrides = new DataAwsccConnectHoursOfOperationHoursOfOperationOverridesList(this, "hours_of_operation_overrides", false);
  public get hoursOfOperationOverrides() {
    return this._hoursOfOperationOverrides;
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

  // instance_arn - computed: true, optional: false, required: false
  public get instanceArn() {
    return this.getStringAttribute('instance_arn');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_hours_of_operations - computed: true, optional: false, required: false
  private _parentHoursOfOperations = new DataAwsccConnectHoursOfOperationParentHoursOfOperationsList(this, "parent_hours_of_operations", false);
  public get parentHoursOfOperations() {
    return this._parentHoursOfOperations;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccConnectHoursOfOperationTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
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
