// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/customerprofiles_recommender
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccCustomerprofilesRecommenderConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/customerprofiles_recommender#id DataAwsccCustomerprofilesRecommender#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct {
}

export function dataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructToTerraform(struct?: DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructToHclTerraform(struct?: DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct | undefined) {
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

export class DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference {
    return new DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig {
}

export function dataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigToTerraform(struct?: DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigToHclTerraform(struct?: DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event_parameters_list - computed: true, optional: false, required: false
  private _eventParametersList = new DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList(this, "event_parameters_list", false);
  public get eventParametersList() {
    return this._eventParametersList;
  }
}
export interface DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig {
}

export function dataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigToTerraform(struct?: DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigToHclTerraform(struct?: DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // events_config - computed: true, optional: false, required: false
  private _eventsConfig = new DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference(this, "events_config");
  public get eventsConfig() {
    return this._eventsConfig;
  }
}
export interface DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdate {
}

export function dataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateToTerraform(struct?: DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateToHclTerraform(struct?: DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdate | undefined) {
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
  private _recommenderConfig = new DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference(this, "recommender_config");
  public get recommenderConfig() {
    return this._recommenderConfig;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct {
}

export function dataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructToTerraform(struct?: DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructToHclTerraform(struct?: DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct | undefined) {
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

export class DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference {
    return new DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfig {
}

export function dataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigToTerraform(struct?: DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigToHclTerraform(struct?: DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event_parameters_list - computed: true, optional: false, required: false
  private _eventParametersList = new DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList(this, "event_parameters_list", false);
  public get eventParametersList() {
    return this._eventParametersList;
  }
}
export interface DataAwsccCustomerprofilesRecommenderRecommenderConfig {
}

export function dataAwsccCustomerprofilesRecommenderRecommenderConfigToTerraform(struct?: DataAwsccCustomerprofilesRecommenderRecommenderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesRecommenderRecommenderConfigToHclTerraform(struct?: DataAwsccCustomerprofilesRecommenderRecommenderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesRecommenderRecommenderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesRecommenderRecommenderConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // events_config - computed: true, optional: false, required: false
  private _eventsConfig = new DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference(this, "events_config");
  public get eventsConfig() {
    return this._eventsConfig;
  }
}
export interface DataAwsccCustomerprofilesRecommenderTags {
}

export function dataAwsccCustomerprofilesRecommenderTagsToTerraform(struct?: DataAwsccCustomerprofilesRecommenderTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesRecommenderTagsToHclTerraform(struct?: DataAwsccCustomerprofilesRecommenderTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesRecommenderTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCustomerprofilesRecommenderTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesRecommenderTags | undefined) {
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

export class DataAwsccCustomerprofilesRecommenderTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCustomerprofilesRecommenderTagsOutputReference {
    return new DataAwsccCustomerprofilesRecommenderTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCustomerprofilesRecommenderTrainingMetricsMetrics {
}

export function dataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsToTerraform(struct?: DataAwsccCustomerprofilesRecommenderTrainingMetricsMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsToHclTerraform(struct?: DataAwsccCustomerprofilesRecommenderTrainingMetricsMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesRecommenderTrainingMetricsMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesRecommenderTrainingMetricsMetrics | undefined) {
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
export interface DataAwsccCustomerprofilesRecommenderTrainingMetrics {
}

export function dataAwsccCustomerprofilesRecommenderTrainingMetricsToTerraform(struct?: DataAwsccCustomerprofilesRecommenderTrainingMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesRecommenderTrainingMetricsToHclTerraform(struct?: DataAwsccCustomerprofilesRecommenderTrainingMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCustomerprofilesRecommenderTrainingMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesRecommenderTrainingMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metrics - computed: true, optional: false, required: false
  private _metrics = new DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getStringAttribute('time');
  }
}

export class DataAwsccCustomerprofilesRecommenderTrainingMetricsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference {
    return new DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/customerprofiles_recommender awscc_customerprofiles_recommender}
*/
export class DataAwsccCustomerprofilesRecommender extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_customerprofiles_recommender";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccCustomerprofilesRecommender resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccCustomerprofilesRecommender to import
  * @param importFromId The id of the existing DataAwsccCustomerprofilesRecommender that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/customerprofiles_recommender#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccCustomerprofilesRecommender to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_customerprofiles_recommender", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/customerprofiles_recommender awscc_customerprofiles_recommender} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCustomerprofilesRecommenderConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCustomerprofilesRecommenderConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_customerprofiles_recommender',
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // failure_reason - computed: true, optional: false, required: false
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
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

  // last_updated_at - computed: true, optional: false, required: false
  public get lastUpdatedAt() {
    return this.getStringAttribute('last_updated_at');
  }

  // latest_recommender_update - computed: true, optional: false, required: false
  private _latestRecommenderUpdate = new DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference(this, "latest_recommender_update");
  public get latestRecommenderUpdate() {
    return this._latestRecommenderUpdate;
  }

  // recommender_arn - computed: true, optional: false, required: false
  public get recommenderArn() {
    return this.getStringAttribute('recommender_arn');
  }

  // recommender_config - computed: true, optional: false, required: false
  private _recommenderConfig = new DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference(this, "recommender_config");
  public get recommenderConfig() {
    return this._recommenderConfig;
  }

  // recommender_name - computed: true, optional: false, required: false
  public get recommenderName() {
    return this.getStringAttribute('recommender_name');
  }

  // recommender_recipe_name - computed: true, optional: false, required: false
  public get recommenderRecipeName() {
    return this.getStringAttribute('recommender_recipe_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccCustomerprofilesRecommenderTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // training_metrics - computed: true, optional: false, required: false
  private _trainingMetrics = new DataAwsccCustomerprofilesRecommenderTrainingMetricsList(this, "training_metrics", false);
  public get trainingMetrics() {
    return this._trainingMetrics;
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
