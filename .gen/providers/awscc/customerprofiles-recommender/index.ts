// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_recommender
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CustomerprofilesRecommenderConfig extends cdktn.TerraformMetaArguments {
  /**
  * The description of the recommender.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_recommender#description CustomerprofilesRecommender#description}
  */
  readonly description?: string;
  /**
  * The name of the domain for which the recommender will be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_recommender#domain_name CustomerprofilesRecommender#domain_name}
  */
  readonly domainName: string;
  /**
  * Configuration for the recommender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_recommender#recommender_config CustomerprofilesRecommender#recommender_config}
  */
  readonly recommenderConfig?: CustomerprofilesRecommenderRecommenderConfig;
  /**
  * The name of the recommender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_recommender#recommender_name CustomerprofilesRecommender#recommender_name}
  */
  readonly recommenderName: string;
  /**
  * The name of the recommender recipe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_recommender#recommender_recipe_name CustomerprofilesRecommender#recommender_recipe_name}
  */
  readonly recommenderRecipeName: string;
  /**
  * The tags used to organize, track, or control access for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_recommender#tags CustomerprofilesRecommender#tags}
  */
  readonly tags?: CustomerprofilesRecommenderTags[] | cdktn.IResolvable;
}
export interface CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct {
}

export function customerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructToTerraform(struct?: CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function customerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructToHclTerraform(struct?: CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event_type - computed: true, optional: false, required: false
  public get eventType() {
    return this.getStringAttribute('event_type');
  }

  // event_value_threshold - computed: true, optional: false, required: false
  public get eventValueThreshold() {
    return this.getNumberAttribute('event_value_threshold');
  }
}

export class CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList extends cdktn.ComplexList {

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
  public get(index: number): CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference {
    return new CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig {
}

export function customerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigToTerraform(struct?: CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function customerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigToHclTerraform(struct?: CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event_parameters_list - computed: true, optional: false, required: false
  private _eventParametersList = new CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList(this, "event_parameters_list", false);
  public get eventParametersList() {
    return this._eventParametersList;
  }
}
export interface CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig {
}

export function customerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigToTerraform(struct?: CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function customerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigToHclTerraform(struct?: CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // events_config - computed: true, optional: false, required: false
  private _eventsConfig = new CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference(this, "events_config");
  public get eventsConfig() {
    return this._eventsConfig;
  }
}
export interface CustomerprofilesRecommenderLatestRecommenderUpdate {
}

export function customerprofilesRecommenderLatestRecommenderUpdateToTerraform(struct?: CustomerprofilesRecommenderLatestRecommenderUpdate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function customerprofilesRecommenderLatestRecommenderUpdateToHclTerraform(struct?: CustomerprofilesRecommenderLatestRecommenderUpdate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesRecommenderLatestRecommenderUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesRecommenderLatestRecommenderUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // creation_date_time - computed: true, optional: false, required: false
  public get creationDateTime() {
    return this.getStringAttribute('creation_date_time');
  }

  // failure_reason - computed: true, optional: false, required: false
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
  }

  // last_updated_date_time - computed: true, optional: false, required: false
  public get lastUpdatedDateTime() {
    return this.getStringAttribute('last_updated_date_time');
  }

  // recommender_config - computed: true, optional: false, required: false
  private _recommenderConfig = new CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference(this, "recommender_config");
  public get recommenderConfig() {
    return this._recommenderConfig;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct {
  /**
  * The type of event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_recommender#event_type CustomerprofilesRecommender#event_type}
  */
  readonly eventType?: string;
  /**
  * The threshold of the event type. Only events with a value greater or equal to this threshold will be considered for solution creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_recommender#event_value_threshold CustomerprofilesRecommender#event_value_threshold}
  */
  readonly eventValueThreshold?: number;
}

export function customerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructToTerraform(struct?: CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_type: cdktn.stringToTerraform(struct!.eventType),
    event_value_threshold: cdktn.numberToTerraform(struct!.eventValueThreshold),
  }
}


export function customerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructToHclTerraform(struct?: CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event_type: {
      value: cdktn.stringToHclTerraform(struct!.eventType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_value_threshold: {
      value: cdktn.numberToHclTerraform(struct!.eventValueThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    if (this._eventValueThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventValueThreshold = this._eventValueThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventType = undefined;
      this._eventValueThreshold = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventType = value.eventType;
      this._eventValueThreshold = value.eventValueThreshold;
    }
  }

  // event_type - computed: true, optional: true, required: false
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  public resetEventType() {
    this._eventType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // event_value_threshold - computed: true, optional: true, required: false
  private _eventValueThreshold?: number; 
  public get eventValueThreshold() {
    return this.getNumberAttribute('event_value_threshold');
  }
  public set eventValueThreshold(value: number) {
    this._eventValueThreshold = value;
  }
  public resetEventValueThreshold() {
    this._eventValueThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventValueThresholdInput() {
    return this._eventValueThreshold;
  }
}

export class CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList extends cdktn.ComplexList {
  public internalValue? : CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct[] | cdktn.IResolvable

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
  public get(index: number): CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference {
    return new CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomerprofilesRecommenderRecommenderConfigEventsConfig {
  /**
  * List of event parameters with their value thresholds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_recommender#event_parameters_list CustomerprofilesRecommender#event_parameters_list}
  */
  readonly eventParametersList?: CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct[] | cdktn.IResolvable;
}

export function customerprofilesRecommenderRecommenderConfigEventsConfigToTerraform(struct?: CustomerprofilesRecommenderRecommenderConfigEventsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_parameters_list: cdktn.listMapper(customerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructToTerraform, false)(struct!.eventParametersList),
  }
}


export function customerprofilesRecommenderRecommenderConfigEventsConfigToHclTerraform(struct?: CustomerprofilesRecommenderRecommenderConfigEventsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event_parameters_list: {
      value: cdktn.listMapperHcl(customerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructToHclTerraform, false)(struct!.eventParametersList),
      isBlock: true,
      type: "list",
      storageClassType: "CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesRecommenderRecommenderConfigEventsConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventParametersList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventParametersList = this._eventParametersList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesRecommenderRecommenderConfigEventsConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventParametersList.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventParametersList.internalValue = value.eventParametersList;
    }
  }

  // event_parameters_list - computed: true, optional: true, required: false
  private _eventParametersList = new CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList(this, "event_parameters_list", false);
  public get eventParametersList() {
    return this._eventParametersList;
  }
  public putEventParametersList(value: CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct[] | cdktn.IResolvable) {
    this._eventParametersList.internalValue = value;
  }
  public resetEventParametersList() {
    this._eventParametersList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventParametersListInput() {
    return this._eventParametersList.internalValue;
  }
}
export interface CustomerprofilesRecommenderRecommenderConfig {
  /**
  * Configuration for events used in the recommender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_recommender#events_config CustomerprofilesRecommender#events_config}
  */
  readonly eventsConfig?: CustomerprofilesRecommenderRecommenderConfigEventsConfig;
}

export function customerprofilesRecommenderRecommenderConfigToTerraform(struct?: CustomerprofilesRecommenderRecommenderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    events_config: customerprofilesRecommenderRecommenderConfigEventsConfigToTerraform(struct!.eventsConfig),
  }
}


export function customerprofilesRecommenderRecommenderConfigToHclTerraform(struct?: CustomerprofilesRecommenderRecommenderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    events_config: {
      value: customerprofilesRecommenderRecommenderConfigEventsConfigToHclTerraform(struct!.eventsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesRecommenderRecommenderConfigEventsConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesRecommenderRecommenderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesRecommenderRecommenderConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventsConfig = this._eventsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesRecommenderRecommenderConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventsConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventsConfig.internalValue = value.eventsConfig;
    }
  }

  // events_config - computed: true, optional: true, required: false
  private _eventsConfig = new CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference(this, "events_config");
  public get eventsConfig() {
    return this._eventsConfig;
  }
  public putEventsConfig(value: CustomerprofilesRecommenderRecommenderConfigEventsConfig) {
    this._eventsConfig.internalValue = value;
  }
  public resetEventsConfig() {
    this._eventsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsConfigInput() {
    return this._eventsConfig.internalValue;
  }
}
export interface CustomerprofilesRecommenderTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_recommender#key CustomerprofilesRecommender#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_recommender#value CustomerprofilesRecommender#value}
  */
  readonly value?: string;
}

export function customerprofilesRecommenderTagsToTerraform(struct?: CustomerprofilesRecommenderTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function customerprofilesRecommenderTagsToHclTerraform(struct?: CustomerprofilesRecommenderTags | cdktn.IResolvable): any {
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

export class CustomerprofilesRecommenderTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CustomerprofilesRecommenderTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CustomerprofilesRecommenderTags | cdktn.IResolvable | undefined) {
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

export class CustomerprofilesRecommenderTagsList extends cdktn.ComplexList {
  public internalValue? : CustomerprofilesRecommenderTags[] | cdktn.IResolvable

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
  public get(index: number): CustomerprofilesRecommenderTagsOutputReference {
    return new CustomerprofilesRecommenderTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomerprofilesRecommenderTrainingMetricsMetrics {
}

export function customerprofilesRecommenderTrainingMetricsMetricsToTerraform(struct?: CustomerprofilesRecommenderTrainingMetricsMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function customerprofilesRecommenderTrainingMetricsMetricsToHclTerraform(struct?: CustomerprofilesRecommenderTrainingMetricsMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesRecommenderTrainingMetricsMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesRecommenderTrainingMetricsMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // coverage - computed: true, optional: false, required: false
  public get coverage() {
    return this.getNumberAttribute('coverage');
  }

  // freshness - computed: true, optional: false, required: false
  public get freshness() {
    return this.getNumberAttribute('freshness');
  }

  // hit - computed: true, optional: false, required: false
  public get hit() {
    return this.getNumberAttribute('hit');
  }

  // popularity - computed: true, optional: false, required: false
  public get popularity() {
    return this.getNumberAttribute('popularity');
  }

  // recall - computed: true, optional: false, required: false
  public get recall() {
    return this.getNumberAttribute('recall');
  }

  // similarity - computed: true, optional: false, required: false
  public get similarity() {
    return this.getNumberAttribute('similarity');
  }
}
export interface CustomerprofilesRecommenderTrainingMetrics {
}

export function customerprofilesRecommenderTrainingMetricsToTerraform(struct?: CustomerprofilesRecommenderTrainingMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function customerprofilesRecommenderTrainingMetricsToHclTerraform(struct?: CustomerprofilesRecommenderTrainingMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class CustomerprofilesRecommenderTrainingMetricsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CustomerprofilesRecommenderTrainingMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesRecommenderTrainingMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metrics - computed: true, optional: false, required: false
  private _metrics = new CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getStringAttribute('time');
  }
}

export class CustomerprofilesRecommenderTrainingMetricsList extends cdktn.ComplexList {

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
  public get(index: number): CustomerprofilesRecommenderTrainingMetricsOutputReference {
    return new CustomerprofilesRecommenderTrainingMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_recommender awscc_customerprofiles_recommender}
*/
export class CustomerprofilesRecommender extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_customerprofiles_recommender";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CustomerprofilesRecommender resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomerprofilesRecommender to import
  * @param importFromId The id of the existing CustomerprofilesRecommender that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_recommender#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomerprofilesRecommender to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_customerprofiles_recommender", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_recommender awscc_customerprofiles_recommender} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomerprofilesRecommenderConfig
  */
  public constructor(scope: Construct, id: string, config: CustomerprofilesRecommenderConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_customerprofiles_recommender',
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
    this._description = config.description;
    this._domainName = config.domainName;
    this._recommenderConfig.internalValue = config.recommenderConfig;
    this._recommenderName = config.recommenderName;
    this._recommenderRecipeName = config.recommenderRecipeName;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // failure_reason - computed: true, optional: false, required: false
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_at - computed: true, optional: false, required: false
  public get lastUpdatedAt() {
    return this.getStringAttribute('last_updated_at');
  }

  // latest_recommender_update - computed: true, optional: false, required: false
  private _latestRecommenderUpdate = new CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference(this, "latest_recommender_update");
  public get latestRecommenderUpdate() {
    return this._latestRecommenderUpdate;
  }

  // recommender_arn - computed: true, optional: false, required: false
  public get recommenderArn() {
    return this.getStringAttribute('recommender_arn');
  }

  // recommender_config - computed: true, optional: true, required: false
  private _recommenderConfig = new CustomerprofilesRecommenderRecommenderConfigOutputReference(this, "recommender_config");
  public get recommenderConfig() {
    return this._recommenderConfig;
  }
  public putRecommenderConfig(value: CustomerprofilesRecommenderRecommenderConfig) {
    this._recommenderConfig.internalValue = value;
  }
  public resetRecommenderConfig() {
    this._recommenderConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recommenderConfigInput() {
    return this._recommenderConfig.internalValue;
  }

  // recommender_name - computed: false, optional: false, required: true
  private _recommenderName?: string; 
  public get recommenderName() {
    return this.getStringAttribute('recommender_name');
  }
  public set recommenderName(value: string) {
    this._recommenderName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recommenderNameInput() {
    return this._recommenderName;
  }

  // recommender_recipe_name - computed: false, optional: false, required: true
  private _recommenderRecipeName?: string; 
  public get recommenderRecipeName() {
    return this.getStringAttribute('recommender_recipe_name');
  }
  public set recommenderRecipeName(value: string) {
    this._recommenderRecipeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recommenderRecipeNameInput() {
    return this._recommenderRecipeName;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new CustomerprofilesRecommenderTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: CustomerprofilesRecommenderTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // training_metrics - computed: true, optional: false, required: false
  private _trainingMetrics = new CustomerprofilesRecommenderTrainingMetricsList(this, "training_metrics", false);
  public get trainingMetrics() {
    return this._trainingMetrics;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      domain_name: cdktn.stringToTerraform(this._domainName),
      recommender_config: customerprofilesRecommenderRecommenderConfigToTerraform(this._recommenderConfig.internalValue),
      recommender_name: cdktn.stringToTerraform(this._recommenderName),
      recommender_recipe_name: cdktn.stringToTerraform(this._recommenderRecipeName),
      tags: cdktn.listMapper(customerprofilesRecommenderTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktn.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recommender_config: {
        value: customerprofilesRecommenderRecommenderConfigToHclTerraform(this._recommenderConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CustomerprofilesRecommenderRecommenderConfig",
      },
      recommender_name: {
        value: cdktn.stringToHclTerraform(this._recommenderName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recommender_recipe_name: {
        value: cdktn.stringToHclTerraform(this._recommenderRecipeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(customerprofilesRecommenderTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CustomerprofilesRecommenderTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
