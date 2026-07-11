// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/gamelift_game_session_queue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccGameliftGameSessionQueueConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/gamelift_game_session_queue#id DataAwsccGameliftGameSessionQueue#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccGameliftGameSessionQueueDestinations {
}

export function dataAwsccGameliftGameSessionQueueDestinationsToTerraform(struct?: DataAwsccGameliftGameSessionQueueDestinations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGameliftGameSessionQueueDestinationsToHclTerraform(struct?: DataAwsccGameliftGameSessionQueueDestinations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGameliftGameSessionQueueDestinationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGameliftGameSessionQueueDestinations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGameliftGameSessionQueueDestinations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_arn - computed: true, optional: false, required: false
  public get destinationArn() {
    return this.getStringAttribute('destination_arn');
  }
}

export class DataAwsccGameliftGameSessionQueueDestinationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGameliftGameSessionQueueDestinationsOutputReference {
    return new DataAwsccGameliftGameSessionQueueDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccGameliftGameSessionQueueFilterConfiguration {
}

export function dataAwsccGameliftGameSessionQueueFilterConfigurationToTerraform(struct?: DataAwsccGameliftGameSessionQueueFilterConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGameliftGameSessionQueueFilterConfigurationToHclTerraform(struct?: DataAwsccGameliftGameSessionQueueFilterConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGameliftGameSessionQueueFilterConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGameliftGameSessionQueueFilterConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_locations - computed: true, optional: false, required: false
  public get allowedLocations() {
    return this.getListAttribute('allowed_locations');
  }
}
export interface DataAwsccGameliftGameSessionQueuePlayerLatencyPolicies {
}

export function dataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesToTerraform(struct?: DataAwsccGameliftGameSessionQueuePlayerLatencyPolicies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesToHclTerraform(struct?: DataAwsccGameliftGameSessionQueuePlayerLatencyPolicies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGameliftGameSessionQueuePlayerLatencyPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGameliftGameSessionQueuePlayerLatencyPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // maximum_individual_player_latency_milliseconds - computed: true, optional: false, required: false
  public get maximumIndividualPlayerLatencyMilliseconds() {
    return this.getNumberAttribute('maximum_individual_player_latency_milliseconds');
  }

  // policy_duration_seconds - computed: true, optional: false, required: false
  public get policyDurationSeconds() {
    return this.getNumberAttribute('policy_duration_seconds');
  }
}

export class DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference {
    return new DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccGameliftGameSessionQueuePriorityConfiguration {
}

export function dataAwsccGameliftGameSessionQueuePriorityConfigurationToTerraform(struct?: DataAwsccGameliftGameSessionQueuePriorityConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGameliftGameSessionQueuePriorityConfigurationToHclTerraform(struct?: DataAwsccGameliftGameSessionQueuePriorityConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGameliftGameSessionQueuePriorityConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGameliftGameSessionQueuePriorityConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // location_order - computed: true, optional: false, required: false
  public get locationOrder() {
    return this.getListAttribute('location_order');
  }

  // priority_order - computed: true, optional: false, required: false
  public get priorityOrder() {
    return this.getListAttribute('priority_order');
  }
}
export interface DataAwsccGameliftGameSessionQueueTags {
}

export function dataAwsccGameliftGameSessionQueueTagsToTerraform(struct?: DataAwsccGameliftGameSessionQueueTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGameliftGameSessionQueueTagsToHclTerraform(struct?: DataAwsccGameliftGameSessionQueueTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGameliftGameSessionQueueTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGameliftGameSessionQueueTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGameliftGameSessionQueueTags | undefined) {
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

export class DataAwsccGameliftGameSessionQueueTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGameliftGameSessionQueueTagsOutputReference {
    return new DataAwsccGameliftGameSessionQueueTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/gamelift_game_session_queue awscc_gamelift_game_session_queue}
*/
export class DataAwsccGameliftGameSessionQueue extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_gamelift_game_session_queue";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccGameliftGameSessionQueue resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccGameliftGameSessionQueue to import
  * @param importFromId The id of the existing DataAwsccGameliftGameSessionQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/gamelift_game_session_queue#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccGameliftGameSessionQueue to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_gamelift_game_session_queue", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/gamelift_game_session_queue awscc_gamelift_game_session_queue} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccGameliftGameSessionQueueConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccGameliftGameSessionQueueConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_gamelift_game_session_queue',
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

  // custom_event_data - computed: true, optional: false, required: false
  public get customEventData() {
    return this.getStringAttribute('custom_event_data');
  }

  // destinations - computed: true, optional: false, required: false
  private _destinations = new DataAwsccGameliftGameSessionQueueDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }

  // filter_configuration - computed: true, optional: false, required: false
  private _filterConfiguration = new DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference(this, "filter_configuration");
  public get filterConfiguration() {
    return this._filterConfiguration;
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

  // notification_target - computed: true, optional: false, required: false
  public get notificationTarget() {
    return this.getStringAttribute('notification_target');
  }

  // player_latency_policies - computed: true, optional: false, required: false
  private _playerLatencyPolicies = new DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesList(this, "player_latency_policies", false);
  public get playerLatencyPolicies() {
    return this._playerLatencyPolicies;
  }

  // priority_configuration - computed: true, optional: false, required: false
  private _priorityConfiguration = new DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference(this, "priority_configuration");
  public get priorityConfiguration() {
    return this._priorityConfiguration;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccGameliftGameSessionQueueTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // timeout_in_seconds - computed: true, optional: false, required: false
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
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
