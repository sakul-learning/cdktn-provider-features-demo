// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_cis_scan_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Inspectorv2CisScanConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Name of the scan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_cis_scan_configuration#scan_name Inspectorv2CisScanConfiguration#scan_name}
  */
  readonly scanName: string;
  /**
  * Choose a Schedule cadence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_cis_scan_configuration#schedule Inspectorv2CisScanConfiguration#schedule}
  */
  readonly schedule: Inspectorv2CisScanConfigurationSchedule;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_cis_scan_configuration#security_level Inspectorv2CisScanConfiguration#security_level}
  */
  readonly securityLevel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_cis_scan_configuration#tags Inspectorv2CisScanConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_cis_scan_configuration#targets Inspectorv2CisScanConfiguration#targets}
  */
  readonly targets: Inspectorv2CisScanConfigurationTargets;
}
export interface Inspectorv2CisScanConfigurationScheduleDailyStartTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_cis_scan_configuration#time_of_day Inspectorv2CisScanConfiguration#time_of_day}
  */
  readonly timeOfDay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_cis_scan_configuration#time_zone Inspectorv2CisScanConfiguration#time_zone}
  */
  readonly timeZone?: string;
}

export function inspectorv2CisScanConfigurationScheduleDailyStartTimeToTerraform(struct?: Inspectorv2CisScanConfigurationScheduleDailyStartTime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    time_of_day: cdktn.stringToTerraform(struct!.timeOfDay),
    time_zone: cdktn.stringToTerraform(struct!.timeZone),
  }
}


export function inspectorv2CisScanConfigurationScheduleDailyStartTimeToHclTerraform(struct?: Inspectorv2CisScanConfigurationScheduleDailyStartTime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    time_of_day: {
      value: cdktn.stringToHclTerraform(struct!.timeOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktn.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Inspectorv2CisScanConfigurationScheduleDailyStartTime | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOfDay = this._timeOfDay;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2CisScanConfigurationScheduleDailyStartTime | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeOfDay = undefined;
      this._timeZone = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeOfDay = value.timeOfDay;
      this._timeZone = value.timeZone;
    }
  }

  // time_of_day - computed: true, optional: true, required: false
  private _timeOfDay?: string;
  public get timeOfDay() {
    return this.getStringAttribute('time_of_day');
  }
  public set timeOfDay(value: string) {
    this._timeOfDay = value;
  }
  public resetTimeOfDay() {
    this._timeOfDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOfDayInput() {
    return this._timeOfDay;
  }

  // time_zone - computed: true, optional: true, required: false
  private _timeZone?: string;
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}
export interface Inspectorv2CisScanConfigurationScheduleDaily {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_cis_scan_configuration#start_time Inspectorv2CisScanConfiguration#start_time}
  */
  readonly startTime?: Inspectorv2CisScanConfigurationScheduleDailyStartTime;
}

export function inspectorv2CisScanConfigurationScheduleDailyToTerraform(struct?: Inspectorv2CisScanConfigurationScheduleDaily | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    start_time: inspectorv2CisScanConfigurationScheduleDailyStartTimeToTerraform(struct!.startTime),
  }
}


export function inspectorv2CisScanConfigurationScheduleDailyToHclTerraform(struct?: Inspectorv2CisScanConfigurationScheduleDaily | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    start_time: {
      value: inspectorv2CisScanConfigurationScheduleDailyStartTimeToHclTerraform(struct!.startTime),
      isBlock: true,
      type: "struct",
      storageClassType: "Inspectorv2CisScanConfigurationScheduleDailyStartTime",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspectorv2CisScanConfigurationScheduleDailyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Inspectorv2CisScanConfigurationScheduleDaily | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._startTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2CisScanConfigurationScheduleDaily | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._startTime.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._startTime.internalValue = value.startTime;
    }
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime = new Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference(this, "start_time");
  public get startTime() {
    return this._startTime;
  }
  public putStartTime(value: Inspectorv2CisScanConfigurationScheduleDailyStartTime) {
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
export interface Inspectorv2CisScanConfigurationScheduleMonthlyStartTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_cis_scan_configuration#time_of_day Inspectorv2CisScanConfiguration#time_of_day}
  */
  readonly timeOfDay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_cis_scan_configuration#time_zone Inspectorv2CisScanConfiguration#time_zone}
  */
  readonly timeZone?: string;
}

export function inspectorv2CisScanConfigurationScheduleMonthlyStartTimeToTerraform(struct?: Inspectorv2CisScanConfigurationScheduleMonthlyStartTime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    time_of_day: cdktn.stringToTerraform(struct!.timeOfDay),
    time_zone: cdktn.stringToTerraform(struct!.timeZone),
  }
}


export function inspectorv2CisScanConfigurationScheduleMonthlyStartTimeToHclTerraform(struct?: Inspectorv2CisScanConfigurationScheduleMonthlyStartTime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    time_of_day: {
      value: cdktn.stringToHclTerraform(struct!.timeOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktn.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Inspectorv2CisScanConfigurationScheduleMonthlyStartTime | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOfDay = this._timeOfDay;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2CisScanConfigurationScheduleMonthlyStartTime | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeOfDay = undefined;
      this._timeZone = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeOfDay = value.timeOfDay;
      this._timeZone = value.timeZone;
    }
  }

  // time_of_day - computed: true, optional: true, required: false
  private _timeOfDay?: string;
  public get timeOfDay() {
    return this.getStringAttribute('time_of_day');
  }
  public set timeOfDay(value: string) {
    this._timeOfDay = value;
  }
  public resetTimeOfDay() {
    this._timeOfDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOfDayInput() {
    return this._timeOfDay;
  }

  // time_zone - computed: true, optional: true, required: false
  private _timeZone?: string;
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}
export interface Inspectorv2CisScanConfigurationScheduleMonthly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_cis_scan_configuration#day Inspectorv2CisScanConfiguration#day}
  */
  readonly day?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_cis_scan_configuration#start_time Inspectorv2CisScanConfiguration#start_time}
  */
  readonly startTime?: Inspectorv2CisScanConfigurationScheduleMonthlyStartTime;
}

export function inspectorv2CisScanConfigurationScheduleMonthlyToTerraform(struct?: Inspectorv2CisScanConfigurationScheduleMonthly | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    day: cdktn.stringToTerraform(struct!.day),
    start_time: inspectorv2CisScanConfigurationScheduleMonthlyStartTimeToTerraform(struct!.startTime),
  }
}


export function inspectorv2CisScanConfigurationScheduleMonthlyToHclTerraform(struct?: Inspectorv2CisScanConfigurationScheduleMonthly | cdktn.IResolvable): any {
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
    start_time: {
      value: inspectorv2CisScanConfigurationScheduleMonthlyStartTimeToHclTerraform(struct!.startTime),
      isBlock: true,
      type: "struct",
      storageClassType: "Inspectorv2CisScanConfigurationScheduleMonthlyStartTime",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Inspectorv2CisScanConfigurationScheduleMonthly | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._startTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2CisScanConfigurationScheduleMonthly | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._day = undefined;
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

  // start_time - computed: true, optional: true, required: false
  private _startTime = new Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference(this, "start_time");
  public get startTime() {
    return this._startTime;
  }
  public putStartTime(value: Inspectorv2CisScanConfigurationScheduleMonthlyStartTime) {
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
export interface Inspectorv2CisScanConfigurationScheduleWeeklyStartTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_cis_scan_configuration#time_of_day Inspectorv2CisScanConfiguration#time_of_day}
  */
  readonly timeOfDay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_cis_scan_configuration#time_zone Inspectorv2CisScanConfiguration#time_zone}
  */
  readonly timeZone?: string;
}

export function inspectorv2CisScanConfigurationScheduleWeeklyStartTimeToTerraform(struct?: Inspectorv2CisScanConfigurationScheduleWeeklyStartTime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    time_of_day: cdktn.stringToTerraform(struct!.timeOfDay),
    time_zone: cdktn.stringToTerraform(struct!.timeZone),
  }
}


export function inspectorv2CisScanConfigurationScheduleWeeklyStartTimeToHclTerraform(struct?: Inspectorv2CisScanConfigurationScheduleWeeklyStartTime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    time_of_day: {
      value: cdktn.stringToHclTerraform(struct!.timeOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktn.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Inspectorv2CisScanConfigurationScheduleWeeklyStartTime | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOfDay = this._timeOfDay;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2CisScanConfigurationScheduleWeeklyStartTime | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeOfDay = undefined;
      this._timeZone = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeOfDay = value.timeOfDay;
      this._timeZone = value.timeZone;
    }
  }

  // time_of_day - computed: true, optional: true, required: false
  private _timeOfDay?: string;
  public get timeOfDay() {
    return this.getStringAttribute('time_of_day');
  }
  public set timeOfDay(value: string) {
    this._timeOfDay = value;
  }
  public resetTimeOfDay() {
    this._timeOfDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOfDayInput() {
    return this._timeOfDay;
  }

  // time_zone - computed: true, optional: true, required: false
  private _timeZone?: string;
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}
export interface Inspectorv2CisScanConfigurationScheduleWeekly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_cis_scan_configuration#days Inspectorv2CisScanConfiguration#days}
  */
  readonly days?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_cis_scan_configuration#start_time Inspectorv2CisScanConfiguration#start_time}
  */
  readonly startTime?: Inspectorv2CisScanConfigurationScheduleWeeklyStartTime;
}

export function inspectorv2CisScanConfigurationScheduleWeeklyToTerraform(struct?: Inspectorv2CisScanConfigurationScheduleWeekly | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    days: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.days),
    start_time: inspectorv2CisScanConfigurationScheduleWeeklyStartTimeToTerraform(struct!.startTime),
  }
}


export function inspectorv2CisScanConfigurationScheduleWeeklyToHclTerraform(struct?: Inspectorv2CisScanConfigurationScheduleWeekly | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    days: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.days),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    start_time: {
      value: inspectorv2CisScanConfigurationScheduleWeeklyStartTimeToHclTerraform(struct!.startTime),
      isBlock: true,
      type: "struct",
      storageClassType: "Inspectorv2CisScanConfigurationScheduleWeeklyStartTime",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Inspectorv2CisScanConfigurationScheduleWeekly | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._startTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2CisScanConfigurationScheduleWeekly | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._days = undefined;
      this._startTime.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._days = value.days;
      this._startTime.internalValue = value.startTime;
    }
  }

  // days - computed: true, optional: true, required: false
  private _days?: string[];
  public get days() {
    return this.getListAttribute('days');
  }
  public set days(value: string[]) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime = new Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference(this, "start_time");
  public get startTime() {
    return this._startTime;
  }
  public putStartTime(value: Inspectorv2CisScanConfigurationScheduleWeeklyStartTime) {
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
export interface Inspectorv2CisScanConfigurationSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_cis_scan_configuration#daily Inspectorv2CisScanConfiguration#daily}
  */
  readonly daily?: Inspectorv2CisScanConfigurationScheduleDaily;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_cis_scan_configuration#monthly Inspectorv2CisScanConfiguration#monthly}
  */
  readonly monthly?: Inspectorv2CisScanConfigurationScheduleMonthly;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_cis_scan_configuration#one_time Inspectorv2CisScanConfiguration#one_time}
  */
  readonly oneTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_cis_scan_configuration#weekly Inspectorv2CisScanConfiguration#weekly}
  */
  readonly weekly?: Inspectorv2CisScanConfigurationScheduleWeekly;
}

export function inspectorv2CisScanConfigurationScheduleToTerraform(struct?: Inspectorv2CisScanConfigurationSchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    daily: inspectorv2CisScanConfigurationScheduleDailyToTerraform(struct!.daily),
    monthly: inspectorv2CisScanConfigurationScheduleMonthlyToTerraform(struct!.monthly),
    one_time: cdktn.stringToTerraform(struct!.oneTime),
    weekly: inspectorv2CisScanConfigurationScheduleWeeklyToTerraform(struct!.weekly),
  }
}


export function inspectorv2CisScanConfigurationScheduleToHclTerraform(struct?: Inspectorv2CisScanConfigurationSchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    daily: {
      value: inspectorv2CisScanConfigurationScheduleDailyToHclTerraform(struct!.daily),
      isBlock: true,
      type: "struct",
      storageClassType: "Inspectorv2CisScanConfigurationScheduleDaily",
    },
    monthly: {
      value: inspectorv2CisScanConfigurationScheduleMonthlyToHclTerraform(struct!.monthly),
      isBlock: true,
      type: "struct",
      storageClassType: "Inspectorv2CisScanConfigurationScheduleMonthly",
    },
    one_time: {
      value: cdktn.stringToHclTerraform(struct!.oneTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weekly: {
      value: inspectorv2CisScanConfigurationScheduleWeeklyToHclTerraform(struct!.weekly),
      isBlock: true,
      type: "struct",
      storageClassType: "Inspectorv2CisScanConfigurationScheduleWeekly",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspectorv2CisScanConfigurationScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Inspectorv2CisScanConfigurationSchedule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daily?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.daily = this._daily?.internalValue;
    }
    if (this._monthly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthly = this._monthly?.internalValue;
    }
    if (this._oneTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.oneTime = this._oneTime;
    }
    if (this._weekly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekly = this._weekly?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2CisScanConfigurationSchedule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daily.internalValue = undefined;
      this._monthly.internalValue = undefined;
      this._oneTime = undefined;
      this._weekly.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daily.internalValue = value.daily;
      this._monthly.internalValue = value.monthly;
      this._oneTime = value.oneTime;
      this._weekly.internalValue = value.weekly;
    }
  }

  // daily - computed: true, optional: true, required: false
  private _daily = new Inspectorv2CisScanConfigurationScheduleDailyOutputReference(this, "daily");
  public get daily() {
    return this._daily;
  }
  public putDaily(value: Inspectorv2CisScanConfigurationScheduleDaily) {
    this._daily.internalValue = value;
  }
  public resetDaily() {
    this._daily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyInput() {
    return this._daily.internalValue;
  }

  // monthly - computed: true, optional: true, required: false
  private _monthly = new Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference(this, "monthly");
  public get monthly() {
    return this._monthly;
  }
  public putMonthly(value: Inspectorv2CisScanConfigurationScheduleMonthly) {
    this._monthly.internalValue = value;
  }
  public resetMonthly() {
    this._monthly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyInput() {
    return this._monthly.internalValue;
  }

  // one_time - computed: true, optional: true, required: false
  private _oneTime?: string;
  public get oneTime() {
    return this.getStringAttribute('one_time');
  }
  public set oneTime(value: string) {
    this._oneTime = value;
  }
  public resetOneTime() {
    this._oneTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneTimeInput() {
    return this._oneTime;
  }

  // weekly - computed: true, optional: true, required: false
  private _weekly = new Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference(this, "weekly");
  public get weekly() {
    return this._weekly;
  }
  public putWeekly(value: Inspectorv2CisScanConfigurationScheduleWeekly) {
    this._weekly.internalValue = value;
  }
  public resetWeekly() {
    this._weekly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyInput() {
    return this._weekly.internalValue;
  }
}
export interface Inspectorv2CisScanConfigurationTargets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_cis_scan_configuration#account_ids Inspectorv2CisScanConfiguration#account_ids}
  */
  readonly accountIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_cis_scan_configuration#target_resource_tags Inspectorv2CisScanConfiguration#target_resource_tags}
  */
  readonly targetResourceTags: { [key: string]: string[] } | cdktn.IResolvable;
}

export function inspectorv2CisScanConfigurationTargetsToTerraform(struct?: Inspectorv2CisScanConfigurationTargets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.accountIds),
    target_resource_tags: cdktn.hashMapper(cdktn.listMapper(cdktn.stringToTerraform, false))(struct!.targetResourceTags),
  }
}


export function inspectorv2CisScanConfigurationTargetsToHclTerraform(struct?: Inspectorv2CisScanConfigurationTargets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.accountIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_resource_tags: {
      value: cdktn.hashMapperHcl(cdktn.listMapperHcl(cdktn.stringToHclTerraform, false))(struct!.targetResourceTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspectorv2CisScanConfigurationTargetsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Inspectorv2CisScanConfigurationTargets | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountIds = this._accountIds;
    }
    if (this._targetResourceTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetResourceTags = this._targetResourceTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2CisScanConfigurationTargets | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountIds = undefined;
      this._targetResourceTags = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountIds = value.accountIds;
      this._targetResourceTags = value.targetResourceTags;
    }
  }

  // account_ids - computed: false, optional: false, required: true
  private _accountIds?: string[];
  public get accountIds() {
    return this.getListAttribute('account_ids');
  }
  public set accountIds(value: string[]) {
    this._accountIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdsInput() {
    return this._accountIds;
  }

  // target_resource_tags - computed: false, optional: false, required: true
  private _targetResourceTags?: { [key: string]: string[] } | cdktn.IResolvable;
  public get targetResourceTags() {
    return this.interpolationForAttribute('target_resource_tags');
  }
  public set targetResourceTags(value: { [key: string]: string[] } | cdktn.IResolvable) {
    this._targetResourceTags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceTagsInput() {
    return this._targetResourceTags;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_cis_scan_configuration awscc_inspectorv2_cis_scan_configuration}
*/
export class Inspectorv2CisScanConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_inspectorv2_cis_scan_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Inspectorv2CisScanConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Inspectorv2CisScanConfiguration to import
  * @param importFromId The id of the existing Inspectorv2CisScanConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_cis_scan_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Inspectorv2CisScanConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_inspectorv2_cis_scan_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_cis_scan_configuration awscc_inspectorv2_cis_scan_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Inspectorv2CisScanConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: Inspectorv2CisScanConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_inspectorv2_cis_scan_configuration',
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
    this._scanName = config.scanName;
    this._schedule.internalValue = config.schedule;
    this._securityLevel = config.securityLevel;
    this._tags = config.tags;
    this._targets.internalValue = config.targets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // scan_name - computed: false, optional: false, required: true
  private _scanName?: string;
  public get scanName() {
    return this.getStringAttribute('scan_name');
  }
  public set scanName(value: string) {
    this._scanName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scanNameInput() {
    return this._scanName;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule = new Inspectorv2CisScanConfigurationScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: Inspectorv2CisScanConfigurationSchedule) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // security_level - computed: false, optional: false, required: true
  private _securityLevel?: string;
  public get securityLevel() {
    return this.getStringAttribute('security_level');
  }
  public set securityLevel(value: string) {
    this._securityLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityLevelInput() {
    return this._securityLevel;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // targets - computed: false, optional: false, required: true
  private _targets = new Inspectorv2CisScanConfigurationTargetsOutputReference(this, "targets");
  public get targets() {
    return this._targets;
  }
  public putTargets(value: Inspectorv2CisScanConfigurationTargets) {
    this._targets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      scan_name: cdktn.stringToTerraform(this._scanName),
      schedule: inspectorv2CisScanConfigurationScheduleToTerraform(this._schedule.internalValue),
      security_level: cdktn.stringToTerraform(this._securityLevel),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      targets: inspectorv2CisScanConfigurationTargetsToTerraform(this._targets.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      scan_name: {
        value: cdktn.stringToHclTerraform(this._scanName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: inspectorv2CisScanConfigurationScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Inspectorv2CisScanConfigurationSchedule",
      },
      security_level: {
        value: cdktn.stringToHclTerraform(this._securityLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      targets: {
        value: inspectorv2CisScanConfigurationTargetsToHclTerraform(this._targets.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Inspectorv2CisScanConfigurationTargets",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
