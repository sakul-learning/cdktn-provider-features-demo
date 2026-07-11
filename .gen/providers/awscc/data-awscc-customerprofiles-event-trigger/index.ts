// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/customerprofiles_event_trigger
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccCustomerprofilesEventTriggerConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/customerprofiles_event_trigger#id DataAwsccCustomerprofilesEventTrigger#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes {
}

export function dataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesToTerraform(struct?: DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesToHclTerraform(struct?: DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison_operator - computed: true, optional: false, required: false
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }

  // field_name - computed: true, optional: false, required: false
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference {
    return new DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions {
}

export function dataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsToTerraform(struct?: DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsToHclTerraform(struct?: DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // object_attributes - computed: true, optional: false, required: false
  private _objectAttributes = new DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList(this, "object_attributes", false);
  public get objectAttributes() {
    return this._objectAttributes;
  }
}

export class DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference {
    return new DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCustomerprofilesEventTriggerEventTriggerConditions {
}

export function dataAwsccCustomerprofilesEventTriggerEventTriggerConditionsToTerraform(struct?: DataAwsccCustomerprofilesEventTriggerEventTriggerConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesEventTriggerEventTriggerConditionsToHclTerraform(struct?: DataAwsccCustomerprofilesEventTriggerEventTriggerConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCustomerprofilesEventTriggerEventTriggerConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesEventTriggerEventTriggerConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event_trigger_dimensions - computed: true, optional: false, required: false
  private _eventTriggerDimensions = new DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList(this, "event_trigger_dimensions", false);
  public get eventTriggerDimensions() {
    return this._eventTriggerDimensions;
  }

  // logical_operator - computed: true, optional: false, required: false
  public get logicalOperator() {
    return this.getStringAttribute('logical_operator');
  }
}

export class DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference {
    return new DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriods {
}

export function dataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsToTerraform(struct?: DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriods): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsToHclTerraform(struct?: DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriods): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriods | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriods | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_invocations_per_profile - computed: true, optional: false, required: false
  public get maxInvocationsPerProfile() {
    return this.getNumberAttribute('max_invocations_per_profile');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // unlimited - computed: true, optional: false, required: false
  public get unlimited() {
    return this.getBooleanAttribute('unlimited');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference {
    return new DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCustomerprofilesEventTriggerEventTriggerLimits {
}

export function dataAwsccCustomerprofilesEventTriggerEventTriggerLimitsToTerraform(struct?: DataAwsccCustomerprofilesEventTriggerEventTriggerLimits): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesEventTriggerEventTriggerLimitsToHclTerraform(struct?: DataAwsccCustomerprofilesEventTriggerEventTriggerLimits): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesEventTriggerEventTriggerLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesEventTriggerEventTriggerLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event_expiration - computed: true, optional: false, required: false
  public get eventExpiration() {
    return this.getNumberAttribute('event_expiration');
  }

  // periods - computed: true, optional: false, required: false
  private _periods = new DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsList(this, "periods", false);
  public get periods() {
    return this._periods;
  }
}
export interface DataAwsccCustomerprofilesEventTriggerTags {
}

export function dataAwsccCustomerprofilesEventTriggerTagsToTerraform(struct?: DataAwsccCustomerprofilesEventTriggerTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesEventTriggerTagsToHclTerraform(struct?: DataAwsccCustomerprofilesEventTriggerTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesEventTriggerTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCustomerprofilesEventTriggerTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesEventTriggerTags | undefined) {
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

export class DataAwsccCustomerprofilesEventTriggerTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCustomerprofilesEventTriggerTagsOutputReference {
    return new DataAwsccCustomerprofilesEventTriggerTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/customerprofiles_event_trigger awscc_customerprofiles_event_trigger}
*/
export class DataAwsccCustomerprofilesEventTrigger extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_customerprofiles_event_trigger";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccCustomerprofilesEventTrigger resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccCustomerprofilesEventTrigger to import
  * @param importFromId The id of the existing DataAwsccCustomerprofilesEventTrigger that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/customerprofiles_event_trigger#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccCustomerprofilesEventTrigger to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_customerprofiles_event_trigger", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/customerprofiles_event_trigger awscc_customerprofiles_event_trigger} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCustomerprofilesEventTriggerConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCustomerprofilesEventTriggerConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_customerprofiles_event_trigger',
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

  // event_trigger_conditions - computed: true, optional: false, required: false
  private _eventTriggerConditions = new DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsList(this, "event_trigger_conditions", false);
  public get eventTriggerConditions() {
    return this._eventTriggerConditions;
  }

  // event_trigger_limits - computed: true, optional: false, required: false
  private _eventTriggerLimits = new DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference(this, "event_trigger_limits");
  public get eventTriggerLimits() {
    return this._eventTriggerLimits;
  }

  // event_trigger_name - computed: true, optional: false, required: false
  public get eventTriggerName() {
    return this.getStringAttribute('event_trigger_name');
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

  // object_type_name - computed: true, optional: false, required: false
  public get objectTypeName() {
    return this.getStringAttribute('object_type_name');
  }

  // segment_filter - computed: true, optional: false, required: false
  public get segmentFilter() {
    return this.getStringAttribute('segment_filter');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccCustomerprofilesEventTriggerTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
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
