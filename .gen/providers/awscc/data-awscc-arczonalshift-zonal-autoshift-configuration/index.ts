// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/arczonalshift_zonal_autoshift_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccArczonalshiftZonalAutoshiftConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/arczonalshift_zonal_autoshift_configuration#id DataAwsccArczonalshiftZonalAutoshiftConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms {
}

export function dataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsToTerraform(struct?: DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsToHclTerraform(struct?: DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_identifier - computed: true, optional: false, required: false
  public get alarmIdentifier() {
    return this.getStringAttribute('alarm_identifier');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference {
    return new DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms {
}

export function dataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsToTerraform(struct?: DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsToHclTerraform(struct?: DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_identifier - computed: true, optional: false, required: false
  public get alarmIdentifier() {
    return this.getStringAttribute('alarm_identifier');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference {
    return new DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration {
}

export function dataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationToTerraform(struct?: DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationToHclTerraform(struct?: DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // blocked_dates - computed: true, optional: false, required: false
  public get blockedDates() {
    return this.getListAttribute('blocked_dates');
  }

  // blocked_windows - computed: true, optional: false, required: false
  public get blockedWindows() {
    return this.getListAttribute('blocked_windows');
  }

  // blocking_alarms - computed: true, optional: false, required: false
  private _blockingAlarms = new DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList(this, "blocking_alarms", false);
  public get blockingAlarms() {
    return this._blockingAlarms;
  }

  // outcome_alarms - computed: true, optional: false, required: false
  private _outcomeAlarms = new DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList(this, "outcome_alarms", false);
  public get outcomeAlarms() {
    return this._outcomeAlarms;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/arczonalshift_zonal_autoshift_configuration awscc_arczonalshift_zonal_autoshift_configuration}
*/
export class DataAwsccArczonalshiftZonalAutoshiftConfiguration extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_arczonalshift_zonal_autoshift_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccArczonalshiftZonalAutoshiftConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccArczonalshiftZonalAutoshiftConfiguration to import
  * @param importFromId The id of the existing DataAwsccArczonalshiftZonalAutoshiftConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/arczonalshift_zonal_autoshift_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccArczonalshiftZonalAutoshiftConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_arczonalshift_zonal_autoshift_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/arczonalshift_zonal_autoshift_configuration awscc_arczonalshift_zonal_autoshift_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccArczonalshiftZonalAutoshiftConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccArczonalshiftZonalAutoshiftConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_arczonalshift_zonal_autoshift_configuration',
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

  // practice_run_configuration - computed: true, optional: false, required: false
  private _practiceRunConfiguration = new DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference(this, "practice_run_configuration");
  public get practiceRunConfiguration() {
    return this._practiceRunConfiguration;
  }

  // resource_identifier - computed: true, optional: false, required: false
  public get resourceIdentifier() {
    return this.getStringAttribute('resource_identifier');
  }

  // zonal_autoshift_status - computed: true, optional: false, required: false
  public get zonalAutoshiftStatus() {
    return this.getStringAttribute('zonal_autoshift_status');
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
