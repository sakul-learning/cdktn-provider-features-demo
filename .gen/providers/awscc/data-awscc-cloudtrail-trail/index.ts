// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cloudtrail_trail
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccCloudtrailTrailConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cloudtrail_trail#id DataAwsccCloudtrailTrail#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectors {
}

export function dataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsToTerraform(struct?: DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsToHclTerraform(struct?: DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ends_with - computed: true, optional: false, required: false
  public get endsWith() {
    return cdktn.Fn.tolist(this.getListAttribute('ends_with'));
  }

  // equals - computed: true, optional: false, required: false
  public get equalTo() {
    return cdktn.Fn.tolist(this.getListAttribute('equals'));
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // not_ends_with - computed: true, optional: false, required: false
  public get notEndsWith() {
    return cdktn.Fn.tolist(this.getListAttribute('not_ends_with'));
  }

  // not_equals - computed: true, optional: false, required: false
  public get notEquals() {
    return cdktn.Fn.tolist(this.getListAttribute('not_equals'));
  }

  // not_starts_with - computed: true, optional: false, required: false
  public get notStartsWith() {
    return cdktn.Fn.tolist(this.getListAttribute('not_starts_with'));
  }

  // starts_with - computed: true, optional: false, required: false
  public get startsWith() {
    return cdktn.Fn.tolist(this.getListAttribute('starts_with'));
  }
}

export class DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference {
    return new DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCloudtrailTrailAdvancedEventSelectors {
}

export function dataAwsccCloudtrailTrailAdvancedEventSelectorsToTerraform(struct?: DataAwsccCloudtrailTrailAdvancedEventSelectors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudtrailTrailAdvancedEventSelectorsToHclTerraform(struct?: DataAwsccCloudtrailTrailAdvancedEventSelectors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCloudtrailTrailAdvancedEventSelectors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudtrailTrailAdvancedEventSelectors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_selectors - computed: true, optional: false, required: false
  private _fieldSelectors = new DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList(this, "field_selectors", true);
  public get fieldSelectors() {
    return this._fieldSelectors;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsccCloudtrailTrailAdvancedEventSelectorsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference {
    return new DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCloudtrailTrailAggregationConfigurations {
}

export function dataAwsccCloudtrailTrailAggregationConfigurationsToTerraform(struct?: DataAwsccCloudtrailTrailAggregationConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudtrailTrailAggregationConfigurationsToHclTerraform(struct?: DataAwsccCloudtrailTrailAggregationConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCloudtrailTrailAggregationConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudtrailTrailAggregationConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event_category - computed: true, optional: false, required: false
  public get eventCategory() {
    return this.getStringAttribute('event_category');
  }

  // templates - computed: true, optional: false, required: false
  public get templates() {
    return cdktn.Fn.tolist(this.getListAttribute('templates'));
  }
}

export class DataAwsccCloudtrailTrailAggregationConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference {
    return new DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCloudtrailTrailEventSelectorsDataResources {
}

export function dataAwsccCloudtrailTrailEventSelectorsDataResourcesToTerraform(struct?: DataAwsccCloudtrailTrailEventSelectorsDataResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudtrailTrailEventSelectorsDataResourcesToHclTerraform(struct?: DataAwsccCloudtrailTrailEventSelectorsDataResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCloudtrailTrailEventSelectorsDataResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudtrailTrailEventSelectorsDataResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
}

export class DataAwsccCloudtrailTrailEventSelectorsDataResourcesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference {
    return new DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCloudtrailTrailEventSelectors {
}

export function dataAwsccCloudtrailTrailEventSelectorsToTerraform(struct?: DataAwsccCloudtrailTrailEventSelectors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudtrailTrailEventSelectorsToHclTerraform(struct?: DataAwsccCloudtrailTrailEventSelectors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudtrailTrailEventSelectorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCloudtrailTrailEventSelectors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudtrailTrailEventSelectors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_resources - computed: true, optional: false, required: false
  private _dataResources = new DataAwsccCloudtrailTrailEventSelectorsDataResourcesList(this, "data_resources", true);
  public get dataResources() {
    return this._dataResources;
  }

  // exclude_management_event_sources - computed: true, optional: false, required: false
  public get excludeManagementEventSources() {
    return cdktn.Fn.tolist(this.getListAttribute('exclude_management_event_sources'));
  }

  // include_management_events - computed: true, optional: false, required: false
  public get includeManagementEvents() {
    return this.getBooleanAttribute('include_management_events');
  }

  // read_write_type - computed: true, optional: false, required: false
  public get readWriteType() {
    return this.getStringAttribute('read_write_type');
  }
}

export class DataAwsccCloudtrailTrailEventSelectorsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCloudtrailTrailEventSelectorsOutputReference {
    return new DataAwsccCloudtrailTrailEventSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCloudtrailTrailInsightSelectors {
}

export function dataAwsccCloudtrailTrailInsightSelectorsToTerraform(struct?: DataAwsccCloudtrailTrailInsightSelectors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudtrailTrailInsightSelectorsToHclTerraform(struct?: DataAwsccCloudtrailTrailInsightSelectors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudtrailTrailInsightSelectorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCloudtrailTrailInsightSelectors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudtrailTrailInsightSelectors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event_categories - computed: true, optional: false, required: false
  public get eventCategories() {
    return cdktn.Fn.tolist(this.getListAttribute('event_categories'));
  }

  // insight_type - computed: true, optional: false, required: false
  public get insightType() {
    return this.getStringAttribute('insight_type');
  }
}

export class DataAwsccCloudtrailTrailInsightSelectorsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCloudtrailTrailInsightSelectorsOutputReference {
    return new DataAwsccCloudtrailTrailInsightSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCloudtrailTrailTags {
}

export function dataAwsccCloudtrailTrailTagsToTerraform(struct?: DataAwsccCloudtrailTrailTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudtrailTrailTagsToHclTerraform(struct?: DataAwsccCloudtrailTrailTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudtrailTrailTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCloudtrailTrailTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudtrailTrailTags | undefined) {
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

export class DataAwsccCloudtrailTrailTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCloudtrailTrailTagsOutputReference {
    return new DataAwsccCloudtrailTrailTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cloudtrail_trail awscc_cloudtrail_trail}
*/
export class DataAwsccCloudtrailTrail extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cloudtrail_trail";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccCloudtrailTrail resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccCloudtrailTrail to import
  * @param importFromId The id of the existing DataAwsccCloudtrailTrail that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cloudtrail_trail#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccCloudtrailTrail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudtrail_trail", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cloudtrail_trail awscc_cloudtrail_trail} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCloudtrailTrailConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCloudtrailTrailConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudtrail_trail',
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

  // advanced_event_selectors - computed: true, optional: false, required: false
  private _advancedEventSelectors = new DataAwsccCloudtrailTrailAdvancedEventSelectorsList(this, "advanced_event_selectors", true);
  public get advancedEventSelectors() {
    return this._advancedEventSelectors;
  }

  // aggregation_configurations - computed: true, optional: false, required: false
  private _aggregationConfigurations = new DataAwsccCloudtrailTrailAggregationConfigurationsList(this, "aggregation_configurations", true);
  public get aggregationConfigurations() {
    return this._aggregationConfigurations;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cloudwatch_logs_log_group_arn - computed: true, optional: false, required: false
  public get cloudwatchLogsLogGroupArn() {
    return this.getStringAttribute('cloudwatch_logs_log_group_arn');
  }

  // cloudwatch_logs_role_arn - computed: true, optional: false, required: false
  public get cloudwatchLogsRoleArn() {
    return this.getStringAttribute('cloudwatch_logs_role_arn');
  }

  // enable_log_file_validation - computed: true, optional: false, required: false
  public get enableLogFileValidation() {
    return this.getBooleanAttribute('enable_log_file_validation');
  }

  // event_selectors - computed: true, optional: false, required: false
  private _eventSelectors = new DataAwsccCloudtrailTrailEventSelectorsList(this, "event_selectors", true);
  public get eventSelectors() {
    return this._eventSelectors;
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

  // include_global_service_events - computed: true, optional: false, required: false
  public get includeGlobalServiceEvents() {
    return this.getBooleanAttribute('include_global_service_events');
  }

  // insight_selectors - computed: true, optional: false, required: false
  private _insightSelectors = new DataAwsccCloudtrailTrailInsightSelectorsList(this, "insight_selectors", true);
  public get insightSelectors() {
    return this._insightSelectors;
  }

  // is_logging - computed: true, optional: false, required: false
  public get isLogging() {
    return this.getBooleanAttribute('is_logging');
  }

  // is_multi_region_trail - computed: true, optional: false, required: false
  public get isMultiRegionTrail() {
    return this.getBooleanAttribute('is_multi_region_trail');
  }

  // is_organization_trail - computed: true, optional: false, required: false
  public get isOrganizationTrail() {
    return this.getBooleanAttribute('is_organization_trail');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // s3_bucket_name - computed: true, optional: false, required: false
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }

  // s3_key_prefix - computed: true, optional: false, required: false
  public get s3KeyPrefix() {
    return this.getStringAttribute('s3_key_prefix');
  }

  // sns_topic_arn - computed: true, optional: false, required: false
  public get snsTopicArn() {
    return this.getStringAttribute('sns_topic_arn');
  }

  // sns_topic_name - computed: true, optional: false, required: false
  public get snsTopicName() {
    return this.getStringAttribute('sns_topic_name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccCloudtrailTrailTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // trail_name - computed: true, optional: false, required: false
  public get trailName() {
    return this.getStringAttribute('trail_name');
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
