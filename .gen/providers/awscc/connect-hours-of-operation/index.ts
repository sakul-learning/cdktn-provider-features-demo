// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ConnectHoursOfOperationConfig extends cdktn.TerraformMetaArguments {
  /**
  * List of child hours of operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#child_hours_of_operations ConnectHoursOfOperation#child_hours_of_operations}
  */
  readonly childHoursOfOperations?: ConnectHoursOfOperationChildHoursOfOperations[] | cdktn.IResolvable;
  /**
  * Configuration information for the hours of operation: day, start time, and end time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#config ConnectHoursOfOperation#config}
  */
  readonly config: ConnectHoursOfOperationConfigA[] | cdktn.IResolvable;
  /**
  * The description of the hours of operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#description ConnectHoursOfOperation#description}
  */
  readonly description?: string;
  /**
  * One or more hours of operation overrides assigned to an hour of operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#hours_of_operation_overrides ConnectHoursOfOperation#hours_of_operation_overrides}
  */
  readonly hoursOfOperationOverrides?: ConnectHoursOfOperationHoursOfOperationOverrides[] | cdktn.IResolvable;
  /**
  * The identifier of the Amazon Connect instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#instance_arn ConnectHoursOfOperation#instance_arn}
  */
  readonly instanceArn: string;
  /**
  * The name of the hours of operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#name ConnectHoursOfOperation#name}
  */
  readonly name: string;
  /**
  * List of parent hours of operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#parent_hours_of_operations ConnectHoursOfOperation#parent_hours_of_operations}
  */
  readonly parentHoursOfOperations?: ConnectHoursOfOperationParentHoursOfOperations[] | cdktn.IResolvable;
  /**
  * One or more tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#tags ConnectHoursOfOperation#tags}
  */
  readonly tags?: ConnectHoursOfOperationTags[] | cdktn.IResolvable;
  /**
  * The time zone of the hours of operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#time_zone ConnectHoursOfOperation#time_zone}
  */
  readonly timeZone: string;
}
export interface ConnectHoursOfOperationChildHoursOfOperations {
  /**
  * The identifier for the hours of operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#id ConnectHoursOfOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the hours of operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#name ConnectHoursOfOperation#name}
  */
  readonly name?: string;
}

export function connectHoursOfOperationChildHoursOfOperationsToTerraform(struct?: ConnectHoursOfOperationChildHoursOfOperations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function connectHoursOfOperationChildHoursOfOperationsToHclTerraform(struct?: ConnectHoursOfOperationChildHoursOfOperations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class ConnectHoursOfOperationChildHoursOfOperationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConnectHoursOfOperationChildHoursOfOperations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectHoursOfOperationChildHoursOfOperations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

export class ConnectHoursOfOperationChildHoursOfOperationsList extends cdktn.ComplexList {
  public internalValue? : ConnectHoursOfOperationChildHoursOfOperations[] | cdktn.IResolvable

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
  public get(index: number): ConnectHoursOfOperationChildHoursOfOperationsOutputReference {
    return new ConnectHoursOfOperationChildHoursOfOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectHoursOfOperationConfigEndTime {
  /**
  * The hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#hours ConnectHoursOfOperation#hours}
  */
  readonly hours: number;
  /**
  * The minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#minutes ConnectHoursOfOperation#minutes}
  */
  readonly minutes: number;
}

export function connectHoursOfOperationConfigEndTimeToTerraform(struct?: ConnectHoursOfOperationConfigEndTime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hours: cdktn.numberToTerraform(struct!.hours),
    minutes: cdktn.numberToTerraform(struct!.minutes),
  }
}


export function connectHoursOfOperationConfigEndTimeToHclTerraform(struct?: ConnectHoursOfOperationConfigEndTime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hours: {
      value: cdktn.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktn.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectHoursOfOperationConfigEndTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectHoursOfOperationConfigEndTime | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectHoursOfOperationConfigEndTime | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hours = undefined;
      this._minutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hours = value.hours;
      this._minutes = value.minutes;
    }
  }

  // hours - computed: false, optional: false, required: true
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: false, required: true
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }
}
export interface ConnectHoursOfOperationConfigStartTime {
  /**
  * The hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#hours ConnectHoursOfOperation#hours}
  */
  readonly hours: number;
  /**
  * The minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#minutes ConnectHoursOfOperation#minutes}
  */
  readonly minutes: number;
}

export function connectHoursOfOperationConfigStartTimeToTerraform(struct?: ConnectHoursOfOperationConfigStartTime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hours: cdktn.numberToTerraform(struct!.hours),
    minutes: cdktn.numberToTerraform(struct!.minutes),
  }
}


export function connectHoursOfOperationConfigStartTimeToHclTerraform(struct?: ConnectHoursOfOperationConfigStartTime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hours: {
      value: cdktn.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktn.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectHoursOfOperationConfigStartTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectHoursOfOperationConfigStartTime | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectHoursOfOperationConfigStartTime | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hours = undefined;
      this._minutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hours = value.hours;
      this._minutes = value.minutes;
    }
  }

  // hours - computed: false, optional: false, required: true
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: false, required: true
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }
}
export interface ConnectHoursOfOperationConfigA {
  /**
  * The day that the hours of operation applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#day ConnectHoursOfOperation#day}
  */
  readonly day: string;
  /**
  * The end time that your contact center closes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#end_time ConnectHoursOfOperation#end_time}
  */
  readonly endTime: ConnectHoursOfOperationConfigEndTime;
  /**
  * The start time that your contact center opens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#start_time ConnectHoursOfOperation#start_time}
  */
  readonly startTime: ConnectHoursOfOperationConfigStartTime;
}

export function connectHoursOfOperationConfigAToTerraform(struct?: ConnectHoursOfOperationConfigA | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    day: cdktn.stringToTerraform(struct!.day),
    end_time: connectHoursOfOperationConfigEndTimeToTerraform(struct!.endTime),
    start_time: connectHoursOfOperationConfigStartTimeToTerraform(struct!.startTime),
  }
}


export function connectHoursOfOperationConfigAToHclTerraform(struct?: ConnectHoursOfOperationConfigA | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    day: {
      value: cdktn.stringToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_time: {
      value: connectHoursOfOperationConfigEndTimeToHclTerraform(struct!.endTime),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectHoursOfOperationConfigEndTime",
    },
    start_time: {
      value: connectHoursOfOperationConfigStartTimeToHclTerraform(struct!.startTime),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectHoursOfOperationConfigStartTime",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectHoursOfOperationConfigAOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConnectHoursOfOperationConfigA | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._endTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime?.internalValue;
    }
    if (this._startTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectHoursOfOperationConfigA | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._day = undefined;
      this._endTime.internalValue = undefined;
      this._startTime.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._day = value.day;
      this._endTime.internalValue = value.endTime;
      this._startTime.internalValue = value.startTime;
    }
  }

  // day - computed: false, optional: false, required: true
  private _day?: string; 
  public get day() {
    return this.getStringAttribute('day');
  }
  public set day(value: string) {
    this._day = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // end_time - computed: false, optional: false, required: true
  private _endTime = new ConnectHoursOfOperationConfigEndTimeOutputReference(this, "end_time");
  public get endTime() {
    return this._endTime;
  }
  public putEndTime(value: ConnectHoursOfOperationConfigEndTime) {
    this._endTime.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime.internalValue;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime = new ConnectHoursOfOperationConfigStartTimeOutputReference(this, "start_time");
  public get startTime() {
    return this._startTime;
  }
  public putStartTime(value: ConnectHoursOfOperationConfigStartTime) {
    this._startTime.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime.internalValue;
  }
}

export class ConnectHoursOfOperationConfigAList extends cdktn.ComplexList {
  public internalValue? : ConnectHoursOfOperationConfigA[] | cdktn.IResolvable

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
  public get(index: number): ConnectHoursOfOperationConfigAOutputReference {
    return new ConnectHoursOfOperationConfigAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime {
  /**
  * The hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#hours ConnectHoursOfOperation#hours}
  */
  readonly hours?: number;
  /**
  * The minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#minutes ConnectHoursOfOperation#minutes}
  */
  readonly minutes?: number;
}

export function connectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeToTerraform(struct?: ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hours: cdktn.numberToTerraform(struct!.hours),
    minutes: cdktn.numberToTerraform(struct!.minutes),
  }
}


export function connectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeToHclTerraform(struct?: ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hours: {
      value: cdktn.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktn.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hours = undefined;
      this._minutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hours = value.hours;
      this._minutes = value.minutes;
    }
  }

  // hours - computed: true, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: true, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }
}
export interface ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime {
  /**
  * The hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#hours ConnectHoursOfOperation#hours}
  */
  readonly hours?: number;
  /**
  * The minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#minutes ConnectHoursOfOperation#minutes}
  */
  readonly minutes?: number;
}

export function connectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeToTerraform(struct?: ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hours: cdktn.numberToTerraform(struct!.hours),
    minutes: cdktn.numberToTerraform(struct!.minutes),
  }
}


export function connectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeToHclTerraform(struct?: ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hours: {
      value: cdktn.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktn.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hours = undefined;
      this._minutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hours = value.hours;
      this._minutes = value.minutes;
    }
  }

  // hours - computed: true, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: true, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }
}
export interface ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig {
  /**
  * The day that the hours of operation override applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#day ConnectHoursOfOperation#day}
  */
  readonly day?: string;
  /**
  * The new end time that your contact center closes for the overriden days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#end_time ConnectHoursOfOperation#end_time}
  */
  readonly endTime?: ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime;
  /**
  * The new start time that your contact center opens for the overriden days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#start_time ConnectHoursOfOperation#start_time}
  */
  readonly startTime?: ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime;
}

export function connectHoursOfOperationHoursOfOperationOverridesOverrideConfigToTerraform(struct?: ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    day: cdktn.stringToTerraform(struct!.day),
    end_time: connectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeToTerraform(struct!.endTime),
    start_time: connectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeToTerraform(struct!.startTime),
  }
}


export function connectHoursOfOperationHoursOfOperationOverridesOverrideConfigToHclTerraform(struct?: ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    day: {
      value: cdktn.stringToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_time: {
      value: connectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeToHclTerraform(struct!.endTime),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime",
    },
    start_time: {
      value: connectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeToHclTerraform(struct!.startTime),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._endTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime?.internalValue;
    }
    if (this._startTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._day = undefined;
      this._endTime.internalValue = undefined;
      this._startTime.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._day = value.day;
      this._endTime.internalValue = value.endTime;
      this._startTime.internalValue = value.startTime;
    }
  }

  // day - computed: true, optional: true, required: false
  private _day?: string; 
  public get day() {
    return this.getStringAttribute('day');
  }
  public set day(value: string) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime = new ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference(this, "end_time");
  public get endTime() {
    return this._endTime;
  }
  public putEndTime(value: ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime) {
    this._endTime.internalValue = value;
  }
  public resetEndTime() {
    this._endTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime.internalValue;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime = new ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference(this, "start_time");
  public get startTime() {
    return this._startTime;
  }
  public putStartTime(value: ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime) {
    this._startTime.internalValue = value;
  }
  public resetStartTime() {
    this._startTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime.internalValue;
  }
}

export class ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList extends cdktn.ComplexList {
  public internalValue? : ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig[] | cdktn.IResolvable

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
  public get(index: number): ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference {
    return new ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern {
  /**
  * List of months (1-12) for recurrence pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#by_month ConnectHoursOfOperation#by_month}
  */
  readonly byMonth?: number[];
  /**
  * List of month days (-1 to 31) for recurrence pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#by_month_day ConnectHoursOfOperation#by_month_day}
  */
  readonly byMonthDay?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#by_weekday_occurrence ConnectHoursOfOperation#by_weekday_occurrence}
  */
  readonly byWeekdayOccurrence?: number[];
  /**
  * The frequency of recurrence for hours of operation overrides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#frequency ConnectHoursOfOperation#frequency}
  */
  readonly frequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#interval ConnectHoursOfOperation#interval}
  */
  readonly interval?: number;
}

export function connectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternToTerraform(struct?: ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    by_month: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.byMonth),
    by_month_day: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.byMonthDay),
    by_weekday_occurrence: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.byWeekdayOccurrence),
    frequency: cdktn.stringToTerraform(struct!.frequency),
    interval: cdktn.numberToTerraform(struct!.interval),
  }
}


export function connectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternToHclTerraform(struct?: ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    by_month: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.byMonth),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    by_month_day: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.byMonthDay),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    by_weekday_occurrence: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.byWeekdayOccurrence),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    frequency: {
      value: cdktn.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._byMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.byMonth = this._byMonth;
    }
    if (this._byMonthDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.byMonthDay = this._byMonthDay;
    }
    if (this._byWeekdayOccurrence !== undefined) {
      hasAnyValues = true;
      internalValueResult.byWeekdayOccurrence = this._byWeekdayOccurrence;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._byMonth = undefined;
      this._byMonthDay = undefined;
      this._byWeekdayOccurrence = undefined;
      this._frequency = undefined;
      this._interval = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._byMonth = value.byMonth;
      this._byMonthDay = value.byMonthDay;
      this._byWeekdayOccurrence = value.byWeekdayOccurrence;
      this._frequency = value.frequency;
      this._interval = value.interval;
    }
  }

  // by_month - computed: true, optional: true, required: false
  private _byMonth?: number[]; 
  public get byMonth() {
    return this.getNumberListAttribute('by_month');
  }
  public set byMonth(value: number[]) {
    this._byMonth = value;
  }
  public resetByMonth() {
    this._byMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byMonthInput() {
    return this._byMonth;
  }

  // by_month_day - computed: true, optional: true, required: false
  private _byMonthDay?: number[]; 
  public get byMonthDay() {
    return this.getNumberListAttribute('by_month_day');
  }
  public set byMonthDay(value: number[]) {
    this._byMonthDay = value;
  }
  public resetByMonthDay() {
    this._byMonthDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byMonthDayInput() {
    return this._byMonthDay;
  }

  // by_weekday_occurrence - computed: true, optional: true, required: false
  private _byWeekdayOccurrence?: number[]; 
  public get byWeekdayOccurrence() {
    return this.getNumberListAttribute('by_weekday_occurrence');
  }
  public set byWeekdayOccurrence(value: number[]) {
    this._byWeekdayOccurrence = value;
  }
  public resetByWeekdayOccurrence() {
    this._byWeekdayOccurrence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byWeekdayOccurrenceInput() {
    return this._byWeekdayOccurrence;
  }

  // frequency - computed: true, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}
export interface ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig {
  /**
  * Pattern for recurring hours of operation overrides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#recurrence_pattern ConnectHoursOfOperation#recurrence_pattern}
  */
  readonly recurrencePattern?: ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern;
}

export function connectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigToTerraform(struct?: ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    recurrence_pattern: connectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternToTerraform(struct!.recurrencePattern),
  }
}


export function connectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigToHclTerraform(struct?: ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    recurrence_pattern: {
      value: connectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternToHclTerraform(struct!.recurrencePattern),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recurrencePattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrencePattern = this._recurrencePattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._recurrencePattern.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._recurrencePattern.internalValue = value.recurrencePattern;
    }
  }

  // recurrence_pattern - computed: true, optional: true, required: false
  private _recurrencePattern = new ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference(this, "recurrence_pattern");
  public get recurrencePattern() {
    return this._recurrencePattern;
  }
  public putRecurrencePattern(value: ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern) {
    this._recurrencePattern.internalValue = value;
  }
  public resetRecurrencePattern() {
    this._recurrencePattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrencePatternInput() {
    return this._recurrencePattern.internalValue;
  }
}
export interface ConnectHoursOfOperationHoursOfOperationOverrides {
  /**
  * The date from which the hours of operation override would be effective.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#effective_from ConnectHoursOfOperation#effective_from}
  */
  readonly effectiveFrom?: string;
  /**
  * The date till which the hours of operation override would be effective.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#effective_till ConnectHoursOfOperation#effective_till}
  */
  readonly effectiveTill?: string;
  /**
  * The Resource Identifier for the hours of operation override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#hours_of_operation_override_id ConnectHoursOfOperation#hours_of_operation_override_id}
  */
  readonly hoursOfOperationOverrideId?: string;
  /**
  * Configuration information for the hours of operation override: day, start time, and end time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#override_config ConnectHoursOfOperation#override_config}
  */
  readonly overrideConfig?: ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig[] | cdktn.IResolvable;
  /**
  * The description of the hours of operation override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#override_description ConnectHoursOfOperation#override_description}
  */
  readonly overrideDescription?: string;
  /**
  * The name of the hours of operation override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#override_name ConnectHoursOfOperation#override_name}
  */
  readonly overrideName?: string;
  /**
  * The type of hours of operation override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#override_type ConnectHoursOfOperation#override_type}
  */
  readonly overrideType?: string;
  /**
  * Configuration for recurring hours of operation overrides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#recurrence_config ConnectHoursOfOperation#recurrence_config}
  */
  readonly recurrenceConfig?: ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig;
}

export function connectHoursOfOperationHoursOfOperationOverridesToTerraform(struct?: ConnectHoursOfOperationHoursOfOperationOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    effective_from: cdktn.stringToTerraform(struct!.effectiveFrom),
    effective_till: cdktn.stringToTerraform(struct!.effectiveTill),
    hours_of_operation_override_id: cdktn.stringToTerraform(struct!.hoursOfOperationOverrideId),
    override_config: cdktn.listMapper(connectHoursOfOperationHoursOfOperationOverridesOverrideConfigToTerraform, false)(struct!.overrideConfig),
    override_description: cdktn.stringToTerraform(struct!.overrideDescription),
    override_name: cdktn.stringToTerraform(struct!.overrideName),
    override_type: cdktn.stringToTerraform(struct!.overrideType),
    recurrence_config: connectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigToTerraform(struct!.recurrenceConfig),
  }
}


export function connectHoursOfOperationHoursOfOperationOverridesToHclTerraform(struct?: ConnectHoursOfOperationHoursOfOperationOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    effective_from: {
      value: cdktn.stringToHclTerraform(struct!.effectiveFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    effective_till: {
      value: cdktn.stringToHclTerraform(struct!.effectiveTill),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hours_of_operation_override_id: {
      value: cdktn.stringToHclTerraform(struct!.hoursOfOperationOverrideId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_config: {
      value: cdktn.listMapperHcl(connectHoursOfOperationHoursOfOperationOverridesOverrideConfigToHclTerraform, false)(struct!.overrideConfig),
      isBlock: true,
      type: "set",
      storageClassType: "ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList",
    },
    override_description: {
      value: cdktn.stringToHclTerraform(struct!.overrideDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_name: {
      value: cdktn.stringToHclTerraform(struct!.overrideName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_type: {
      value: cdktn.stringToHclTerraform(struct!.overrideType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recurrence_config: {
      value: connectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigToHclTerraform(struct!.recurrenceConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectHoursOfOperationHoursOfOperationOverridesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConnectHoursOfOperationHoursOfOperationOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effectiveFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.effectiveFrom = this._effectiveFrom;
    }
    if (this._effectiveTill !== undefined) {
      hasAnyValues = true;
      internalValueResult.effectiveTill = this._effectiveTill;
    }
    if (this._hoursOfOperationOverrideId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hoursOfOperationOverrideId = this._hoursOfOperationOverrideId;
    }
    if (this._overrideConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideConfig = this._overrideConfig?.internalValue;
    }
    if (this._overrideDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideDescription = this._overrideDescription;
    }
    if (this._overrideName !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideName = this._overrideName;
    }
    if (this._overrideType !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideType = this._overrideType;
    }
    if (this._recurrenceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrenceConfig = this._recurrenceConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectHoursOfOperationHoursOfOperationOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effectiveFrom = undefined;
      this._effectiveTill = undefined;
      this._hoursOfOperationOverrideId = undefined;
      this._overrideConfig.internalValue = undefined;
      this._overrideDescription = undefined;
      this._overrideName = undefined;
      this._overrideType = undefined;
      this._recurrenceConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effectiveFrom = value.effectiveFrom;
      this._effectiveTill = value.effectiveTill;
      this._hoursOfOperationOverrideId = value.hoursOfOperationOverrideId;
      this._overrideConfig.internalValue = value.overrideConfig;
      this._overrideDescription = value.overrideDescription;
      this._overrideName = value.overrideName;
      this._overrideType = value.overrideType;
      this._recurrenceConfig.internalValue = value.recurrenceConfig;
    }
  }

  // effective_from - computed: true, optional: true, required: false
  private _effectiveFrom?: string; 
  public get effectiveFrom() {
    return this.getStringAttribute('effective_from');
  }
  public set effectiveFrom(value: string) {
    this._effectiveFrom = value;
  }
  public resetEffectiveFrom() {
    this._effectiveFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveFromInput() {
    return this._effectiveFrom;
  }

  // effective_till - computed: true, optional: true, required: false
  private _effectiveTill?: string; 
  public get effectiveTill() {
    return this.getStringAttribute('effective_till');
  }
  public set effectiveTill(value: string) {
    this._effectiveTill = value;
  }
  public resetEffectiveTill() {
    this._effectiveTill = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveTillInput() {
    return this._effectiveTill;
  }

  // hours_of_operation_override_id - computed: true, optional: true, required: false
  private _hoursOfOperationOverrideId?: string; 
  public get hoursOfOperationOverrideId() {
    return this.getStringAttribute('hours_of_operation_override_id');
  }
  public set hoursOfOperationOverrideId(value: string) {
    this._hoursOfOperationOverrideId = value;
  }
  public resetHoursOfOperationOverrideId() {
    this._hoursOfOperationOverrideId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursOfOperationOverrideIdInput() {
    return this._hoursOfOperationOverrideId;
  }

  // override_config - computed: true, optional: true, required: false
  private _overrideConfig = new ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList(this, "override_config", true);
  public get overrideConfig() {
    return this._overrideConfig;
  }
  public putOverrideConfig(value: ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig[] | cdktn.IResolvable) {
    this._overrideConfig.internalValue = value;
  }
  public resetOverrideConfig() {
    this._overrideConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideConfigInput() {
    return this._overrideConfig.internalValue;
  }

  // override_description - computed: true, optional: true, required: false
  private _overrideDescription?: string; 
  public get overrideDescription() {
    return this.getStringAttribute('override_description');
  }
  public set overrideDescription(value: string) {
    this._overrideDescription = value;
  }
  public resetOverrideDescription() {
    this._overrideDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideDescriptionInput() {
    return this._overrideDescription;
  }

  // override_name - computed: true, optional: true, required: false
  private _overrideName?: string; 
  public get overrideName() {
    return this.getStringAttribute('override_name');
  }
  public set overrideName(value: string) {
    this._overrideName = value;
  }
  public resetOverrideName() {
    this._overrideName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideNameInput() {
    return this._overrideName;
  }

  // override_type - computed: true, optional: true, required: false
  private _overrideType?: string; 
  public get overrideType() {
    return this.getStringAttribute('override_type');
  }
  public set overrideType(value: string) {
    this._overrideType = value;
  }
  public resetOverrideType() {
    this._overrideType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideTypeInput() {
    return this._overrideType;
  }

  // recurrence_config - computed: true, optional: true, required: false
  private _recurrenceConfig = new ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference(this, "recurrence_config");
  public get recurrenceConfig() {
    return this._recurrenceConfig;
  }
  public putRecurrenceConfig(value: ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig) {
    this._recurrenceConfig.internalValue = value;
  }
  public resetRecurrenceConfig() {
    this._recurrenceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceConfigInput() {
    return this._recurrenceConfig.internalValue;
  }
}

export class ConnectHoursOfOperationHoursOfOperationOverridesList extends cdktn.ComplexList {
  public internalValue? : ConnectHoursOfOperationHoursOfOperationOverrides[] | cdktn.IResolvable

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
  public get(index: number): ConnectHoursOfOperationHoursOfOperationOverridesOutputReference {
    return new ConnectHoursOfOperationHoursOfOperationOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectHoursOfOperationParentHoursOfOperations {
  /**
  * The identifier for the hours of operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#id ConnectHoursOfOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the hours of operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#name ConnectHoursOfOperation#name}
  */
  readonly name?: string;
}

export function connectHoursOfOperationParentHoursOfOperationsToTerraform(struct?: ConnectHoursOfOperationParentHoursOfOperations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function connectHoursOfOperationParentHoursOfOperationsToHclTerraform(struct?: ConnectHoursOfOperationParentHoursOfOperations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class ConnectHoursOfOperationParentHoursOfOperationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConnectHoursOfOperationParentHoursOfOperations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectHoursOfOperationParentHoursOfOperations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

export class ConnectHoursOfOperationParentHoursOfOperationsList extends cdktn.ComplexList {
  public internalValue? : ConnectHoursOfOperationParentHoursOfOperations[] | cdktn.IResolvable

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
  public get(index: number): ConnectHoursOfOperationParentHoursOfOperationsOutputReference {
    return new ConnectHoursOfOperationParentHoursOfOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectHoursOfOperationTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#key ConnectHoursOfOperation#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#value ConnectHoursOfOperation#value}
  */
  readonly value?: string;
}

export function connectHoursOfOperationTagsToTerraform(struct?: ConnectHoursOfOperationTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function connectHoursOfOperationTagsToHclTerraform(struct?: ConnectHoursOfOperationTags | cdktn.IResolvable): any {
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

export class ConnectHoursOfOperationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConnectHoursOfOperationTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ConnectHoursOfOperationTags | cdktn.IResolvable | undefined) {
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

export class ConnectHoursOfOperationTagsList extends cdktn.ComplexList {
  public internalValue? : ConnectHoursOfOperationTags[] | cdktn.IResolvable

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
  public get(index: number): ConnectHoursOfOperationTagsOutputReference {
    return new ConnectHoursOfOperationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation awscc_connect_hours_of_operation}
*/
export class ConnectHoursOfOperation extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_connect_hours_of_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ConnectHoursOfOperation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectHoursOfOperation to import
  * @param importFromId The id of the existing ConnectHoursOfOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectHoursOfOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_connect_hours_of_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_hours_of_operation awscc_connect_hours_of_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectHoursOfOperationConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectHoursOfOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_connect_hours_of_operation',
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
    this._childHoursOfOperations.internalValue = config.childHoursOfOperations;
    this._config.internalValue = config.config;
    this._description = config.description;
    this._hoursOfOperationOverrides.internalValue = config.hoursOfOperationOverrides;
    this._instanceArn = config.instanceArn;
    this._name = config.name;
    this._parentHoursOfOperations.internalValue = config.parentHoursOfOperations;
    this._tags.internalValue = config.tags;
    this._timeZone = config.timeZone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // child_hours_of_operations - computed: true, optional: true, required: false
  private _childHoursOfOperations = new ConnectHoursOfOperationChildHoursOfOperationsList(this, "child_hours_of_operations", false);
  public get childHoursOfOperations() {
    return this._childHoursOfOperations;
  }
  public putChildHoursOfOperations(value: ConnectHoursOfOperationChildHoursOfOperations[] | cdktn.IResolvable) {
    this._childHoursOfOperations.internalValue = value;
  }
  public resetChildHoursOfOperations() {
    this._childHoursOfOperations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childHoursOfOperationsInput() {
    return this._childHoursOfOperations.internalValue;
  }

  // config - computed: false, optional: false, required: true
  private _config = new ConnectHoursOfOperationConfigAList(this, "config", true);
  public get config() {
    return this._config;
  }
  public putConfig(value: ConnectHoursOfOperationConfigA[] | cdktn.IResolvable) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // hours_of_operation_arn - computed: true, optional: false, required: false
  public get hoursOfOperationArn() {
    return this.getStringAttribute('hours_of_operation_arn');
  }

  // hours_of_operation_overrides - computed: true, optional: true, required: false
  private _hoursOfOperationOverrides = new ConnectHoursOfOperationHoursOfOperationOverridesList(this, "hours_of_operation_overrides", false);
  public get hoursOfOperationOverrides() {
    return this._hoursOfOperationOverrides;
  }
  public putHoursOfOperationOverrides(value: ConnectHoursOfOperationHoursOfOperationOverrides[] | cdktn.IResolvable) {
    this._hoursOfOperationOverrides.internalValue = value;
  }
  public resetHoursOfOperationOverrides() {
    this._hoursOfOperationOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursOfOperationOverridesInput() {
    return this._hoursOfOperationOverrides.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_arn - computed: false, optional: false, required: true
  private _instanceArn?: string; 
  public get instanceArn() {
    return this.getStringAttribute('instance_arn');
  }
  public set instanceArn(value: string) {
    this._instanceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceArnInput() {
    return this._instanceArn;
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

  // parent_hours_of_operations - computed: true, optional: true, required: false
  private _parentHoursOfOperations = new ConnectHoursOfOperationParentHoursOfOperationsList(this, "parent_hours_of_operations", false);
  public get parentHoursOfOperations() {
    return this._parentHoursOfOperations;
  }
  public putParentHoursOfOperations(value: ConnectHoursOfOperationParentHoursOfOperations[] | cdktn.IResolvable) {
    this._parentHoursOfOperations.internalValue = value;
  }
  public resetParentHoursOfOperations() {
    this._parentHoursOfOperations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentHoursOfOperationsInput() {
    return this._parentHoursOfOperations.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ConnectHoursOfOperationTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ConnectHoursOfOperationTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // time_zone - computed: false, optional: false, required: true
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      child_hours_of_operations: cdktn.listMapper(connectHoursOfOperationChildHoursOfOperationsToTerraform, false)(this._childHoursOfOperations.internalValue),
      config: cdktn.listMapper(connectHoursOfOperationConfigAToTerraform, false)(this._config.internalValue),
      description: cdktn.stringToTerraform(this._description),
      hours_of_operation_overrides: cdktn.listMapper(connectHoursOfOperationHoursOfOperationOverridesToTerraform, false)(this._hoursOfOperationOverrides.internalValue),
      instance_arn: cdktn.stringToTerraform(this._instanceArn),
      name: cdktn.stringToTerraform(this._name),
      parent_hours_of_operations: cdktn.listMapper(connectHoursOfOperationParentHoursOfOperationsToTerraform, false)(this._parentHoursOfOperations.internalValue),
      tags: cdktn.listMapper(connectHoursOfOperationTagsToTerraform, false)(this._tags.internalValue),
      time_zone: cdktn.stringToTerraform(this._timeZone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      child_hours_of_operations: {
        value: cdktn.listMapperHcl(connectHoursOfOperationChildHoursOfOperationsToHclTerraform, false)(this._childHoursOfOperations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectHoursOfOperationChildHoursOfOperationsList",
      },
      config: {
        value: cdktn.listMapperHcl(connectHoursOfOperationConfigAToHclTerraform, false)(this._config.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConnectHoursOfOperationConfigAList",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hours_of_operation_overrides: {
        value: cdktn.listMapperHcl(connectHoursOfOperationHoursOfOperationOverridesToHclTerraform, false)(this._hoursOfOperationOverrides.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectHoursOfOperationHoursOfOperationOverridesList",
      },
      instance_arn: {
        value: cdktn.stringToHclTerraform(this._instanceArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_hours_of_operations: {
        value: cdktn.listMapperHcl(connectHoursOfOperationParentHoursOfOperationsToHclTerraform, false)(this._parentHoursOfOperations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectHoursOfOperationParentHoursOfOperationsList",
      },
      tags: {
        value: cdktn.listMapperHcl(connectHoursOfOperationTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConnectHoursOfOperationTagsList",
      },
      time_zone: {
        value: cdktn.stringToHclTerraform(this._timeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
