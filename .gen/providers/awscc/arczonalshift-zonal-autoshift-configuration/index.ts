// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/arczonalshift_zonal_autoshift_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ArczonalshiftZonalAutoshiftConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/arczonalshift_zonal_autoshift_configuration#practice_run_configuration ArczonalshiftZonalAutoshiftConfiguration#practice_run_configuration}
  */
  readonly practiceRunConfiguration?: ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/arczonalshift_zonal_autoshift_configuration#resource_identifier ArczonalshiftZonalAutoshiftConfiguration#resource_identifier}
  */
  readonly resourceIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/arczonalshift_zonal_autoshift_configuration#zonal_autoshift_status ArczonalshiftZonalAutoshiftConfiguration#zonal_autoshift_status}
  */
  readonly zonalAutoshiftStatus?: string;
}
export interface ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/arczonalshift_zonal_autoshift_configuration#alarm_identifier ArczonalshiftZonalAutoshiftConfiguration#alarm_identifier}
  */
  readonly alarmIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/arczonalshift_zonal_autoshift_configuration#type ArczonalshiftZonalAutoshiftConfiguration#type}
  */
  readonly type?: string;
}

export function arczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsToTerraform(struct?: ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alarm_identifier: cdktn.stringToTerraform(struct!.alarmIdentifier),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function arczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsToHclTerraform(struct?: ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alarm_identifier: {
      value: cdktn.stringToHclTerraform(struct!.alarmIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmIdentifier = this._alarmIdentifier;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmIdentifier = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarmIdentifier = value.alarmIdentifier;
      this._type = value.type;
    }
  }

  // alarm_identifier - computed: true, optional: true, required: false
  private _alarmIdentifier?: string;
  public get alarmIdentifier() {
    return this.getStringAttribute('alarm_identifier');
  }
  public set alarmIdentifier(value: string) {
    this._alarmIdentifier = value;
  }
  public resetAlarmIdentifier() {
    this._alarmIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmIdentifierInput() {
    return this._alarmIdentifier;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList extends cdktn.ComplexList {
  public internalValue? : ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms[] | cdktn.IResolvable

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
  public get(index: number): ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference {
    return new ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/arczonalshift_zonal_autoshift_configuration#alarm_identifier ArczonalshiftZonalAutoshiftConfiguration#alarm_identifier}
  */
  readonly alarmIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/arczonalshift_zonal_autoshift_configuration#type ArczonalshiftZonalAutoshiftConfiguration#type}
  */
  readonly type?: string;
}

export function arczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsToTerraform(struct?: ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alarm_identifier: cdktn.stringToTerraform(struct!.alarmIdentifier),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function arczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsToHclTerraform(struct?: ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alarm_identifier: {
      value: cdktn.stringToHclTerraform(struct!.alarmIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmIdentifier = this._alarmIdentifier;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmIdentifier = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarmIdentifier = value.alarmIdentifier;
      this._type = value.type;
    }
  }

  // alarm_identifier - computed: true, optional: true, required: false
  private _alarmIdentifier?: string;
  public get alarmIdentifier() {
    return this.getStringAttribute('alarm_identifier');
  }
  public set alarmIdentifier(value: string) {
    this._alarmIdentifier = value;
  }
  public resetAlarmIdentifier() {
    this._alarmIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmIdentifierInput() {
    return this._alarmIdentifier;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList extends cdktn.ComplexList {
  public internalValue? : ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms[] | cdktn.IResolvable

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
  public get(index: number): ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference {
    return new ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/arczonalshift_zonal_autoshift_configuration#blocked_dates ArczonalshiftZonalAutoshiftConfiguration#blocked_dates}
  */
  readonly blockedDates?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/arczonalshift_zonal_autoshift_configuration#blocked_windows ArczonalshiftZonalAutoshiftConfiguration#blocked_windows}
  */
  readonly blockedWindows?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/arczonalshift_zonal_autoshift_configuration#blocking_alarms ArczonalshiftZonalAutoshiftConfiguration#blocking_alarms}
  */
  readonly blockingAlarms?: ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/arczonalshift_zonal_autoshift_configuration#outcome_alarms ArczonalshiftZonalAutoshiftConfiguration#outcome_alarms}
  */
  readonly outcomeAlarms?: ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms[] | cdktn.IResolvable;
}

export function arczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationToTerraform(struct?: ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    blocked_dates: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.blockedDates),
    blocked_windows: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.blockedWindows),
    blocking_alarms: cdktn.listMapper(arczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsToTerraform, false)(struct!.blockingAlarms),
    outcome_alarms: cdktn.listMapper(arczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsToTerraform, false)(struct!.outcomeAlarms),
  }
}


export function arczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationToHclTerraform(struct?: ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    blocked_dates: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.blockedDates),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    blocked_windows: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.blockedWindows),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    blocking_alarms: {
      value: cdktn.listMapperHcl(arczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsToHclTerraform, false)(struct!.blockingAlarms),
      isBlock: true,
      type: "list",
      storageClassType: "ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList",
    },
    outcome_alarms: {
      value: cdktn.listMapperHcl(arczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsToHclTerraform, false)(struct!.outcomeAlarms),
      isBlock: true,
      type: "list",
      storageClassType: "ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockedDates !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockedDates = this._blockedDates;
    }
    if (this._blockedWindows !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockedWindows = this._blockedWindows;
    }
    if (this._blockingAlarms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockingAlarms = this._blockingAlarms?.internalValue;
    }
    if (this._outcomeAlarms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outcomeAlarms = this._outcomeAlarms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockedDates = undefined;
      this._blockedWindows = undefined;
      this._blockingAlarms.internalValue = undefined;
      this._outcomeAlarms.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockedDates = value.blockedDates;
      this._blockedWindows = value.blockedWindows;
      this._blockingAlarms.internalValue = value.blockingAlarms;
      this._outcomeAlarms.internalValue = value.outcomeAlarms;
    }
  }

  // blocked_dates - computed: true, optional: true, required: false
  private _blockedDates?: string[];
  public get blockedDates() {
    return this.getListAttribute('blocked_dates');
  }
  public set blockedDates(value: string[]) {
    this._blockedDates = value;
  }
  public resetBlockedDates() {
    this._blockedDates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedDatesInput() {
    return this._blockedDates;
  }

  // blocked_windows - computed: true, optional: true, required: false
  private _blockedWindows?: string[];
  public get blockedWindows() {
    return this.getListAttribute('blocked_windows');
  }
  public set blockedWindows(value: string[]) {
    this._blockedWindows = value;
  }
  public resetBlockedWindows() {
    this._blockedWindows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedWindowsInput() {
    return this._blockedWindows;
  }

  // blocking_alarms - computed: true, optional: true, required: false
  private _blockingAlarms = new ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList(this, "blocking_alarms", false);
  public get blockingAlarms() {
    return this._blockingAlarms;
  }
  public putBlockingAlarms(value: ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms[] | cdktn.IResolvable) {
    this._blockingAlarms.internalValue = value;
  }
  public resetBlockingAlarms() {
    this._blockingAlarms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockingAlarmsInput() {
    return this._blockingAlarms.internalValue;
  }

  // outcome_alarms - computed: true, optional: true, required: false
  private _outcomeAlarms = new ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList(this, "outcome_alarms", false);
  public get outcomeAlarms() {
    return this._outcomeAlarms;
  }
  public putOutcomeAlarms(value: ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms[] | cdktn.IResolvable) {
    this._outcomeAlarms.internalValue = value;
  }
  public resetOutcomeAlarms() {
    this._outcomeAlarms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outcomeAlarmsInput() {
    return this._outcomeAlarms.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/arczonalshift_zonal_autoshift_configuration awscc_arczonalshift_zonal_autoshift_configuration}
*/
export class ArczonalshiftZonalAutoshiftConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_arczonalshift_zonal_autoshift_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ArczonalshiftZonalAutoshiftConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ArczonalshiftZonalAutoshiftConfiguration to import
  * @param importFromId The id of the existing ArczonalshiftZonalAutoshiftConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/arczonalshift_zonal_autoshift_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ArczonalshiftZonalAutoshiftConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_arczonalshift_zonal_autoshift_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/arczonalshift_zonal_autoshift_configuration awscc_arczonalshift_zonal_autoshift_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ArczonalshiftZonalAutoshiftConfigurationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ArczonalshiftZonalAutoshiftConfigurationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_arczonalshift_zonal_autoshift_configuration',
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
    this._practiceRunConfiguration.internalValue = config.practiceRunConfiguration;
    this._resourceIdentifier = config.resourceIdentifier;
    this._zonalAutoshiftStatus = config.zonalAutoshiftStatus;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // practice_run_configuration - computed: true, optional: true, required: false
  private _practiceRunConfiguration = new ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference(this, "practice_run_configuration");
  public get practiceRunConfiguration() {
    return this._practiceRunConfiguration;
  }
  public putPracticeRunConfiguration(value: ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration) {
    this._practiceRunConfiguration.internalValue = value;
  }
  public resetPracticeRunConfiguration() {
    this._practiceRunConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get practiceRunConfigurationInput() {
    return this._practiceRunConfiguration.internalValue;
  }

  // resource_identifier - computed: true, optional: true, required: false
  private _resourceIdentifier?: string;
  public get resourceIdentifier() {
    return this.getStringAttribute('resource_identifier');
  }
  public set resourceIdentifier(value: string) {
    this._resourceIdentifier = value;
  }
  public resetResourceIdentifier() {
    this._resourceIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdentifierInput() {
    return this._resourceIdentifier;
  }

  // zonal_autoshift_status - computed: true, optional: true, required: false
  private _zonalAutoshiftStatus?: string;
  public get zonalAutoshiftStatus() {
    return this.getStringAttribute('zonal_autoshift_status');
  }
  public set zonalAutoshiftStatus(value: string) {
    this._zonalAutoshiftStatus = value;
  }
  public resetZonalAutoshiftStatus() {
    this._zonalAutoshiftStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonalAutoshiftStatusInput() {
    return this._zonalAutoshiftStatus;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      practice_run_configuration: arczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationToTerraform(this._practiceRunConfiguration.internalValue),
      resource_identifier: cdktn.stringToTerraform(this._resourceIdentifier),
      zonal_autoshift_status: cdktn.stringToTerraform(this._zonalAutoshiftStatus),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      practice_run_configuration: {
        value: arczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationToHclTerraform(this._practiceRunConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration",
      },
      resource_identifier: {
        value: cdktn.stringToHclTerraform(this._resourceIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zonal_autoshift_status: {
        value: cdktn.stringToHclTerraform(this._zonalAutoshiftStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
