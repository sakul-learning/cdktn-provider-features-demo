// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/stepfunctions_state_machine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccStepfunctionsStateMachineConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/stepfunctions_state_machine#id DataAwsccStepfunctionsStateMachine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccStepfunctionsStateMachineDefinitionS3Location {
}

export function dataAwsccStepfunctionsStateMachineDefinitionS3LocationToTerraform(struct?: DataAwsccStepfunctionsStateMachineDefinitionS3Location): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccStepfunctionsStateMachineDefinitionS3LocationToHclTerraform(struct?: DataAwsccStepfunctionsStateMachineDefinitionS3Location): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccStepfunctionsStateMachineDefinitionS3Location | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccStepfunctionsStateMachineDefinitionS3Location | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup {
}

export function dataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupToTerraform(struct?: DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupToHclTerraform(struct?: DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_group_arn - computed: true, optional: false, required: false
  public get logGroupArn() {
    return this.getStringAttribute('log_group_arn');
  }
}
export interface DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinations {
}

export function dataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsToTerraform(struct?: DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsToHclTerraform(struct?: DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudwatch_logs_log_group - computed: true, optional: false, required: false
  private _cloudwatchLogsLogGroup = new DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference(this, "cloudwatch_logs_log_group");
  public get cloudwatchLogsLogGroup() {
    return this._cloudwatchLogsLogGroup;
  }
}

export class DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference {
    return new DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccStepfunctionsStateMachineLoggingConfiguration {
}

export function dataAwsccStepfunctionsStateMachineLoggingConfigurationToTerraform(struct?: DataAwsccStepfunctionsStateMachineLoggingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccStepfunctionsStateMachineLoggingConfigurationToHclTerraform(struct?: DataAwsccStepfunctionsStateMachineLoggingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccStepfunctionsStateMachineLoggingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccStepfunctionsStateMachineLoggingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destinations - computed: true, optional: false, required: false
  private _destinations = new DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }

  // include_execution_data - computed: true, optional: false, required: false
  public get includeExecutionData() {
    return this.getBooleanAttribute('include_execution_data');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }
}
export interface DataAwsccStepfunctionsStateMachineTags {
}

export function dataAwsccStepfunctionsStateMachineTagsToTerraform(struct?: DataAwsccStepfunctionsStateMachineTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccStepfunctionsStateMachineTagsToHclTerraform(struct?: DataAwsccStepfunctionsStateMachineTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccStepfunctionsStateMachineTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccStepfunctionsStateMachineTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccStepfunctionsStateMachineTags | undefined) {
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

export class DataAwsccStepfunctionsStateMachineTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccStepfunctionsStateMachineTagsOutputReference {
    return new DataAwsccStepfunctionsStateMachineTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccStepfunctionsStateMachineTracingConfiguration {
}

export function dataAwsccStepfunctionsStateMachineTracingConfigurationToTerraform(struct?: DataAwsccStepfunctionsStateMachineTracingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccStepfunctionsStateMachineTracingConfigurationToHclTerraform(struct?: DataAwsccStepfunctionsStateMachineTracingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccStepfunctionsStateMachineTracingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccStepfunctionsStateMachineTracingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/stepfunctions_state_machine awscc_stepfunctions_state_machine}
*/
export class DataAwsccStepfunctionsStateMachine extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_stepfunctions_state_machine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccStepfunctionsStateMachine resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccStepfunctionsStateMachine to import
  * @param importFromId The id of the existing DataAwsccStepfunctionsStateMachine that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/stepfunctions_state_machine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccStepfunctionsStateMachine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_stepfunctions_state_machine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/stepfunctions_state_machine awscc_stepfunctions_state_machine} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccStepfunctionsStateMachineConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccStepfunctionsStateMachineConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_stepfunctions_state_machine',
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

  // definition - computed: true, optional: false, required: false
  public get definition() {
    return this.getStringAttribute('definition');
  }

  // definition_s3_location - computed: true, optional: false, required: false
  private _definitionS3Location = new DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference(this, "definition_s3_location");
  public get definitionS3Location() {
    return this._definitionS3Location;
  }

  // definition_string - computed: true, optional: false, required: false
  public get definitionString() {
    return this.getStringAttribute('definition_string');
  }

  // definition_substitutions - computed: true, optional: false, required: false
  private _definitionSubstitutions = new cdktn.StringMap(this, "definition_substitutions");
  public get definitionSubstitutions() {
    return this._definitionSubstitutions;
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

  // logging_configuration - computed: true, optional: false, required: false
  private _loggingConfiguration = new DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference(this, "logging_configuration");
  public get loggingConfiguration() {
    return this._loggingConfiguration;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // state_machine_name - computed: true, optional: false, required: false
  public get stateMachineName() {
    return this.getStringAttribute('state_machine_name');
  }

  // state_machine_type - computed: true, optional: false, required: false
  public get stateMachineType() {
    return this.getStringAttribute('state_machine_type');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccStepfunctionsStateMachineTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // tracing_configuration - computed: true, optional: false, required: false
  private _tracingConfiguration = new DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference(this, "tracing_configuration");
  public get tracingConfiguration() {
    return this._tracingConfiguration;
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
