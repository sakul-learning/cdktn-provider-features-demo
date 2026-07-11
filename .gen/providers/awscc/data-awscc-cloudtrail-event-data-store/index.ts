// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cloudtrail_event_data_store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccCloudtrailEventDataStoreConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cloudtrail_event_data_store#id DataAwsccCloudtrailEventDataStore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors {
}

export function dataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsToTerraform(struct?: DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsToHclTerraform(struct?: DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors | undefined) {
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

export class DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference {
    return new DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCloudtrailEventDataStoreAdvancedEventSelectors {
}

export function dataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsToTerraform(struct?: DataAwsccCloudtrailEventDataStoreAdvancedEventSelectors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsToHclTerraform(struct?: DataAwsccCloudtrailEventDataStoreAdvancedEventSelectors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCloudtrailEventDataStoreAdvancedEventSelectors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudtrailEventDataStoreAdvancedEventSelectors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_selectors - computed: true, optional: false, required: false
  private _fieldSelectors = new DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList(this, "field_selectors", true);
  public get fieldSelectors() {
    return this._fieldSelectors;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference {
    return new DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCloudtrailEventDataStoreContextKeySelectors {
}

export function dataAwsccCloudtrailEventDataStoreContextKeySelectorsToTerraform(struct?: DataAwsccCloudtrailEventDataStoreContextKeySelectors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudtrailEventDataStoreContextKeySelectorsToHclTerraform(struct?: DataAwsccCloudtrailEventDataStoreContextKeySelectors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCloudtrailEventDataStoreContextKeySelectors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudtrailEventDataStoreContextKeySelectors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // equals - computed: true, optional: false, required: false
  public get equalTo() {
    return cdktn.Fn.tolist(this.getListAttribute('equals'));
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccCloudtrailEventDataStoreContextKeySelectorsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference {
    return new DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCloudtrailEventDataStoreInsightSelectors {
}

export function dataAwsccCloudtrailEventDataStoreInsightSelectorsToTerraform(struct?: DataAwsccCloudtrailEventDataStoreInsightSelectors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudtrailEventDataStoreInsightSelectorsToHclTerraform(struct?: DataAwsccCloudtrailEventDataStoreInsightSelectors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCloudtrailEventDataStoreInsightSelectors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudtrailEventDataStoreInsightSelectors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // insight_type - computed: true, optional: false, required: false
  public get insightType() {
    return this.getStringAttribute('insight_type');
  }
}

export class DataAwsccCloudtrailEventDataStoreInsightSelectorsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference {
    return new DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCloudtrailEventDataStoreTags {
}

export function dataAwsccCloudtrailEventDataStoreTagsToTerraform(struct?: DataAwsccCloudtrailEventDataStoreTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudtrailEventDataStoreTagsToHclTerraform(struct?: DataAwsccCloudtrailEventDataStoreTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudtrailEventDataStoreTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCloudtrailEventDataStoreTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudtrailEventDataStoreTags | undefined) {
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

export class DataAwsccCloudtrailEventDataStoreTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCloudtrailEventDataStoreTagsOutputReference {
    return new DataAwsccCloudtrailEventDataStoreTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cloudtrail_event_data_store awscc_cloudtrail_event_data_store}
*/
export class DataAwsccCloudtrailEventDataStore extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cloudtrail_event_data_store";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccCloudtrailEventDataStore resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccCloudtrailEventDataStore to import
  * @param importFromId The id of the existing DataAwsccCloudtrailEventDataStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cloudtrail_event_data_store#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccCloudtrailEventDataStore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudtrail_event_data_store", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cloudtrail_event_data_store awscc_cloudtrail_event_data_store} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCloudtrailEventDataStoreConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCloudtrailEventDataStoreConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudtrail_event_data_store',
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

  // advanced_event_selectors - computed: true, optional: false, required: false
  private _advancedEventSelectors = new DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList(this, "advanced_event_selectors", true);
  public get advancedEventSelectors() {
    return this._advancedEventSelectors;
  }

  // billing_mode - computed: true, optional: false, required: false
  public get billingMode() {
    return this.getStringAttribute('billing_mode');
  }

  // context_key_selectors - computed: true, optional: false, required: false
  private _contextKeySelectors = new DataAwsccCloudtrailEventDataStoreContextKeySelectorsList(this, "context_key_selectors", true);
  public get contextKeySelectors() {
    return this._contextKeySelectors;
  }

  // created_timestamp - computed: true, optional: false, required: false
  public get createdTimestamp() {
    return this.getStringAttribute('created_timestamp');
  }

  // event_data_store_arn - computed: true, optional: false, required: false
  public get eventDataStoreArn() {
    return this.getStringAttribute('event_data_store_arn');
  }

  // federation_enabled - computed: true, optional: false, required: false
  public get federationEnabled() {
    return this.getBooleanAttribute('federation_enabled');
  }

  // federation_role_arn - computed: true, optional: false, required: false
  public get federationRoleArn() {
    return this.getStringAttribute('federation_role_arn');
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

  // ingestion_enabled - computed: true, optional: false, required: false
  public get ingestionEnabled() {
    return this.getBooleanAttribute('ingestion_enabled');
  }

  // insight_selectors - computed: true, optional: false, required: false
  private _insightSelectors = new DataAwsccCloudtrailEventDataStoreInsightSelectorsList(this, "insight_selectors", true);
  public get insightSelectors() {
    return this._insightSelectors;
  }

  // insights_destination - computed: true, optional: false, required: false
  public get insightsDestination() {
    return this.getStringAttribute('insights_destination');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // max_event_size - computed: true, optional: false, required: false
  public get maxEventSize() {
    return this.getStringAttribute('max_event_size');
  }

  // multi_region_enabled - computed: true, optional: false, required: false
  public get multiRegionEnabled() {
    return this.getBooleanAttribute('multi_region_enabled');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // organization_enabled - computed: true, optional: false, required: false
  public get organizationEnabled() {
    return this.getBooleanAttribute('organization_enabled');
  }

  // retention_period - computed: true, optional: false, required: false
  public get retentionPeriod() {
    return this.getNumberAttribute('retention_period');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccCloudtrailEventDataStoreTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // termination_protection_enabled - computed: true, optional: false, required: false
  public get terminationProtectionEnabled() {
    return this.getBooleanAttribute('termination_protection_enabled');
  }

  // updated_timestamp - computed: true, optional: false, required: false
  public get updatedTimestamp() {
    return this.getStringAttribute('updated_timestamp');
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
