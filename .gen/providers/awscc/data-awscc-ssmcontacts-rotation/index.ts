// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ssmcontacts_rotation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccSsmcontactsRotationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ssmcontacts_rotation#id DataAwsccSsmcontactsRotation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccSsmcontactsRotationRecurrenceMonthlySettings {
}

export function dataAwsccSsmcontactsRotationRecurrenceMonthlySettingsToTerraform(struct?: DataAwsccSsmcontactsRotationRecurrenceMonthlySettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSsmcontactsRotationRecurrenceMonthlySettingsToHclTerraform(struct?: DataAwsccSsmcontactsRotationRecurrenceMonthlySettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSsmcontactsRotationRecurrenceMonthlySettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSsmcontactsRotationRecurrenceMonthlySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSsmcontactsRotationRecurrenceMonthlySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day_of_month - computed: true, optional: false, required: false
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }

  // hand_off_time - computed: true, optional: false, required: false
  public get handOffTime() {
    return this.getStringAttribute('hand_off_time');
  }
}

export class DataAwsccSsmcontactsRotationRecurrenceMonthlySettingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSsmcontactsRotationRecurrenceMonthlySettingsOutputReference {
    return new DataAwsccSsmcontactsRotationRecurrenceMonthlySettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes {
}

export function dataAwsccSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesToTerraform(struct?: DataAwsccSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesToHclTerraform(struct?: DataAwsccSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}

export class DataAwsccSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference {
    return new DataAwsccSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSsmcontactsRotationRecurrenceShiftCoverages {
}

export function dataAwsccSsmcontactsRotationRecurrenceShiftCoveragesToTerraform(struct?: DataAwsccSsmcontactsRotationRecurrenceShiftCoverages): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSsmcontactsRotationRecurrenceShiftCoveragesToHclTerraform(struct?: DataAwsccSsmcontactsRotationRecurrenceShiftCoverages): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSsmcontactsRotationRecurrenceShiftCoveragesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSsmcontactsRotationRecurrenceShiftCoverages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSsmcontactsRotationRecurrenceShiftCoverages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // coverage_times - computed: true, optional: false, required: false
  private _coverageTimes = new DataAwsccSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList(this, "coverage_times", false);
  public get coverageTimes() {
    return this._coverageTimes;
  }

  // day_of_week - computed: true, optional: false, required: false
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
}

export class DataAwsccSsmcontactsRotationRecurrenceShiftCoveragesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSsmcontactsRotationRecurrenceShiftCoveragesOutputReference {
    return new DataAwsccSsmcontactsRotationRecurrenceShiftCoveragesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSsmcontactsRotationRecurrenceWeeklySettings {
}

export function dataAwsccSsmcontactsRotationRecurrenceWeeklySettingsToTerraform(struct?: DataAwsccSsmcontactsRotationRecurrenceWeeklySettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSsmcontactsRotationRecurrenceWeeklySettingsToHclTerraform(struct?: DataAwsccSsmcontactsRotationRecurrenceWeeklySettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSsmcontactsRotationRecurrenceWeeklySettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSsmcontactsRotationRecurrenceWeeklySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSsmcontactsRotationRecurrenceWeeklySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day_of_week - computed: true, optional: false, required: false
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }

  // hand_off_time - computed: true, optional: false, required: false
  public get handOffTime() {
    return this.getStringAttribute('hand_off_time');
  }
}

export class DataAwsccSsmcontactsRotationRecurrenceWeeklySettingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSsmcontactsRotationRecurrenceWeeklySettingsOutputReference {
    return new DataAwsccSsmcontactsRotationRecurrenceWeeklySettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSsmcontactsRotationRecurrence {
}

export function dataAwsccSsmcontactsRotationRecurrenceToTerraform(struct?: DataAwsccSsmcontactsRotationRecurrence): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSsmcontactsRotationRecurrenceToHclTerraform(struct?: DataAwsccSsmcontactsRotationRecurrence): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSsmcontactsRotationRecurrenceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSsmcontactsRotationRecurrence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSsmcontactsRotationRecurrence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // daily_settings - computed: true, optional: false, required: false
  public get dailySettings() {
    return this.getListAttribute('daily_settings');
  }

  // monthly_settings - computed: true, optional: false, required: false
  private _monthlySettings = new DataAwsccSsmcontactsRotationRecurrenceMonthlySettingsList(this, "monthly_settings", false);
  public get monthlySettings() {
    return this._monthlySettings;
  }

  // number_of_on_calls - computed: true, optional: false, required: false
  public get numberOfOnCalls() {
    return this.getNumberAttribute('number_of_on_calls');
  }

  // recurrence_multiplier - computed: true, optional: false, required: false
  public get recurrenceMultiplier() {
    return this.getNumberAttribute('recurrence_multiplier');
  }

  // shift_coverages - computed: true, optional: false, required: false
  private _shiftCoverages = new DataAwsccSsmcontactsRotationRecurrenceShiftCoveragesList(this, "shift_coverages", false);
  public get shiftCoverages() {
    return this._shiftCoverages;
  }

  // weekly_settings - computed: true, optional: false, required: false
  private _weeklySettings = new DataAwsccSsmcontactsRotationRecurrenceWeeklySettingsList(this, "weekly_settings", false);
  public get weeklySettings() {
    return this._weeklySettings;
  }
}
export interface DataAwsccSsmcontactsRotationTags {
}

export function dataAwsccSsmcontactsRotationTagsToTerraform(struct?: DataAwsccSsmcontactsRotationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSsmcontactsRotationTagsToHclTerraform(struct?: DataAwsccSsmcontactsRotationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSsmcontactsRotationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSsmcontactsRotationTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSsmcontactsRotationTags | undefined) {
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

export class DataAwsccSsmcontactsRotationTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSsmcontactsRotationTagsOutputReference {
    return new DataAwsccSsmcontactsRotationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ssmcontacts_rotation awscc_ssmcontacts_rotation}
*/
export class DataAwsccSsmcontactsRotation extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ssmcontacts_rotation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccSsmcontactsRotation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccSsmcontactsRotation to import
  * @param importFromId The id of the existing DataAwsccSsmcontactsRotation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ssmcontacts_rotation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccSsmcontactsRotation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ssmcontacts_rotation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ssmcontacts_rotation awscc_ssmcontacts_rotation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSsmcontactsRotationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSsmcontactsRotationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ssmcontacts_rotation',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // contact_ids - computed: true, optional: false, required: false
  public get contactIds() {
    return this.getListAttribute('contact_ids');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // recurrence - computed: true, optional: false, required: false
  private _recurrence = new DataAwsccSsmcontactsRotationRecurrenceOutputReference(this, "recurrence");
  public get recurrence() {
    return this._recurrence;
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccSsmcontactsRotationTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // time_zone_id - computed: true, optional: false, required: false
  public get timeZoneId() {
    return this.getStringAttribute('time_zone_id');
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
