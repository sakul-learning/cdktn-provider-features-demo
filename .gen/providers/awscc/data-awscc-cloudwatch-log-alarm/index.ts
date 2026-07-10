// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cloudwatch_log_alarm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccCloudwatchLogAlarmConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cloudwatch_log_alarm#id DataAwsccCloudwatchLogAlarm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration {
}

export function dataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationToTerraform(struct?: DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationToHclTerraform(struct?: DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time_offset - computed: true, optional: false, required: false
  public get endTimeOffset() {
    return this.getNumberAttribute('end_time_offset');
  }

  // schedule_expression - computed: true, optional: false, required: false
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }

  // start_time_offset - computed: true, optional: false, required: false
  public get startTimeOffset() {
    return this.getNumberAttribute('start_time_offset');
  }
}
export interface DataAwsccCloudwatchLogAlarmScheduledQueryConfiguration {
}

export function dataAwsccCloudwatchLogAlarmScheduledQueryConfigurationToTerraform(struct?: DataAwsccCloudwatchLogAlarmScheduledQueryConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudwatchLogAlarmScheduledQueryConfigurationToHclTerraform(struct?: DataAwsccCloudwatchLogAlarmScheduledQueryConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudwatchLogAlarmScheduledQueryConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudwatchLogAlarmScheduledQueryConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation_expression - computed: true, optional: false, required: false
  public get aggregationExpression() {
    return this.getStringAttribute('aggregation_expression');
  }

  // log_group_identifiers - computed: true, optional: false, required: false
  public get logGroupIdentifiers() {
    return this.getListAttribute('log_group_identifiers');
  }

  // query_string - computed: true, optional: false, required: false
  public get queryString() {
    return this.getStringAttribute('query_string');
  }

  // schedule_configuration - computed: true, optional: false, required: false
  private _scheduleConfiguration = new DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference(this, "schedule_configuration");
  public get scheduleConfiguration() {
    return this._scheduleConfiguration;
  }

  // scheduled_query_role_arn - computed: true, optional: false, required: false
  public get scheduledQueryRoleArn() {
    return this.getStringAttribute('scheduled_query_role_arn');
  }
}
export interface DataAwsccCloudwatchLogAlarmTags {
}

export function dataAwsccCloudwatchLogAlarmTagsToTerraform(struct?: DataAwsccCloudwatchLogAlarmTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudwatchLogAlarmTagsToHclTerraform(struct?: DataAwsccCloudwatchLogAlarmTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudwatchLogAlarmTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCloudwatchLogAlarmTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudwatchLogAlarmTags | undefined) {
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

export class DataAwsccCloudwatchLogAlarmTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCloudwatchLogAlarmTagsOutputReference {
    return new DataAwsccCloudwatchLogAlarmTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cloudwatch_log_alarm awscc_cloudwatch_log_alarm}
*/
export class DataAwsccCloudwatchLogAlarm extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cloudwatch_log_alarm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccCloudwatchLogAlarm resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccCloudwatchLogAlarm to import
  * @param importFromId The id of the existing DataAwsccCloudwatchLogAlarm that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cloudwatch_log_alarm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccCloudwatchLogAlarm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudwatch_log_alarm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cloudwatch_log_alarm awscc_cloudwatch_log_alarm} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCloudwatchLogAlarmConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCloudwatchLogAlarmConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudwatch_log_alarm',
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

  // action_log_line_count - computed: true, optional: false, required: false
  public get actionLogLineCount() {
    return this.getNumberAttribute('action_log_line_count');
  }

  // action_log_line_role_arn - computed: true, optional: false, required: false
  public get actionLogLineRoleArn() {
    return this.getStringAttribute('action_log_line_role_arn');
  }

  // actions_enabled - computed: true, optional: false, required: false
  public get actionsEnabled() {
    return this.getBooleanAttribute('actions_enabled');
  }

  // alarm_actions - computed: true, optional: false, required: false
  public get alarmActions() {
    return this.getListAttribute('alarm_actions');
  }

  // alarm_description - computed: true, optional: false, required: false
  public get alarmDescription() {
    return this.getStringAttribute('alarm_description');
  }

  // alarm_name - computed: true, optional: false, required: false
  public get alarmName() {
    return this.getStringAttribute('alarm_name');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // comparison_operator - computed: true, optional: false, required: false
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
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

  // insufficient_data_actions - computed: true, optional: false, required: false
  public get insufficientDataActions() {
    return this.getListAttribute('insufficient_data_actions');
  }

  // ok_actions - computed: true, optional: false, required: false
  public get okActions() {
    return this.getListAttribute('ok_actions');
  }

  // query_results_to_alarm - computed: true, optional: false, required: false
  public get queryResultsToAlarm() {
    return this.getNumberAttribute('query_results_to_alarm');
  }

  // query_results_to_evaluate - computed: true, optional: false, required: false
  public get queryResultsToEvaluate() {
    return this.getNumberAttribute('query_results_to_evaluate');
  }

  // scheduled_query_configuration - computed: true, optional: false, required: false
  private _scheduledQueryConfiguration = new DataAwsccCloudwatchLogAlarmScheduledQueryConfigurationOutputReference(this, "scheduled_query_configuration");
  public get scheduledQueryConfiguration() {
    return this._scheduledQueryConfiguration;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccCloudwatchLogAlarmTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }

  // treat_missing_data - computed: true, optional: false, required: false
  public get treatMissingData() {
    return this.getStringAttribute('treat_missing_data');
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
