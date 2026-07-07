// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/billingconductor_custom_line_item
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccBillingconductorCustomLineItemConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/billingconductor_custom_line_item#id DataAwsccBillingconductorCustomLineItem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccBillingconductorCustomLineItemBillingPeriodRange {
}

export function dataAwsccBillingconductorCustomLineItemBillingPeriodRangeToTerraform(struct?: DataAwsccBillingconductorCustomLineItemBillingPeriodRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBillingconductorCustomLineItemBillingPeriodRangeToHclTerraform(struct?: DataAwsccBillingconductorCustomLineItemBillingPeriodRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBillingconductorCustomLineItemBillingPeriodRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBillingconductorCustomLineItemBillingPeriodRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exclusive_end_billing_period - computed: true, optional: false, required: false
  public get exclusiveEndBillingPeriod() {
    return this.getStringAttribute('exclusive_end_billing_period');
  }

  // inclusive_start_billing_period - computed: true, optional: false, required: false
  public get inclusiveStartBillingPeriod() {
    return this.getStringAttribute('inclusive_start_billing_period');
  }
}
export interface DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlat {
}

export function dataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatToTerraform(struct?: DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatToHclTerraform(struct?: DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // charge_value - computed: true, optional: false, required: false
  public get chargeValue() {
    return this.getNumberAttribute('charge_value');
  }
}
export interface DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters {
}

export function dataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersToTerraform(struct?: DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersToHclTerraform(struct?: DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute - computed: true, optional: false, required: false
  public get attribute() {
    return this.getStringAttribute('attribute');
  }

  // attribute_values - computed: true, optional: false, required: false
  public get attributeValues() {
    return cdktn.Fn.tolist(this.getListAttribute('attribute_values'));
  }

  // match_option - computed: true, optional: false, required: false
  public get matchOption() {
    return this.getStringAttribute('match_option');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
}

export class DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference {
    return new DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage {
}

export function dataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageToTerraform(struct?: DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageToHclTerraform(struct?: DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // child_associated_resources - computed: true, optional: false, required: false
  public get childAssociatedResources() {
    return cdktn.Fn.tolist(this.getListAttribute('child_associated_resources'));
  }

  // percentage_value - computed: true, optional: false, required: false
  public get percentageValue() {
    return this.getNumberAttribute('percentage_value');
  }
}
export interface DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetails {
}

export function dataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsToTerraform(struct?: DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsToHclTerraform(struct?: DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // flat - computed: true, optional: false, required: false
  private _flat = new DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference(this, "flat");
  public get flat() {
    return this._flat;
  }

  // line_item_filters - computed: true, optional: false, required: false
  private _lineItemFilters = new DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList(this, "line_item_filters", true);
  public get lineItemFilters() {
    return this._lineItemFilters;
  }

  // percentage - computed: true, optional: false, required: false
  private _percentage = new DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference(this, "percentage");
  public get percentage() {
    return this._percentage;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccBillingconductorCustomLineItemPresentationDetails {
}

export function dataAwsccBillingconductorCustomLineItemPresentationDetailsToTerraform(struct?: DataAwsccBillingconductorCustomLineItemPresentationDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBillingconductorCustomLineItemPresentationDetailsToHclTerraform(struct?: DataAwsccBillingconductorCustomLineItemPresentationDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBillingconductorCustomLineItemPresentationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBillingconductorCustomLineItemPresentationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }
}
export interface DataAwsccBillingconductorCustomLineItemTags {
}

export function dataAwsccBillingconductorCustomLineItemTagsToTerraform(struct?: DataAwsccBillingconductorCustomLineItemTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBillingconductorCustomLineItemTagsToHclTerraform(struct?: DataAwsccBillingconductorCustomLineItemTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBillingconductorCustomLineItemTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBillingconductorCustomLineItemTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBillingconductorCustomLineItemTags | undefined) {
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

export class DataAwsccBillingconductorCustomLineItemTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBillingconductorCustomLineItemTagsOutputReference {
    return new DataAwsccBillingconductorCustomLineItemTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/billingconductor_custom_line_item awscc_billingconductor_custom_line_item}
*/
export class DataAwsccBillingconductorCustomLineItem extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_billingconductor_custom_line_item";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccBillingconductorCustomLineItem resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccBillingconductorCustomLineItem to import
  * @param importFromId The id of the existing DataAwsccBillingconductorCustomLineItem that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/billingconductor_custom_line_item#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccBillingconductorCustomLineItem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_billingconductor_custom_line_item", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/billingconductor_custom_line_item awscc_billingconductor_custom_line_item} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccBillingconductorCustomLineItemConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccBillingconductorCustomLineItemConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_billingconductor_custom_line_item',
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

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // association_size - computed: true, optional: false, required: false
  public get associationSize() {
    return this.getNumberAttribute('association_size');
  }

  // billing_group_arn - computed: true, optional: false, required: false
  public get billingGroupArn() {
    return this.getStringAttribute('billing_group_arn');
  }

  // billing_period_range - computed: true, optional: false, required: false
  private _billingPeriodRange = new DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference(this, "billing_period_range");
  public get billingPeriodRange() {
    return this._billingPeriodRange;
  }

  // computation_rule - computed: true, optional: false, required: false
  public get computationRule() {
    return this.getStringAttribute('computation_rule');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getNumberAttribute('creation_time');
  }

  // currency_code - computed: true, optional: false, required: false
  public get currencyCode() {
    return this.getStringAttribute('currency_code');
  }

  // custom_line_item_charge_details - computed: true, optional: false, required: false
  private _customLineItemChargeDetails = new DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference(this, "custom_line_item_charge_details");
  public get customLineItemChargeDetails() {
    return this._customLineItemChargeDetails;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getNumberAttribute('last_modified_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // presentation_details - computed: true, optional: false, required: false
  private _presentationDetails = new DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference(this, "presentation_details");
  public get presentationDetails() {
    return this._presentationDetails;
  }

  // product_code - computed: true, optional: false, required: false
  public get productCode() {
    return this.getStringAttribute('product_code');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccBillingconductorCustomLineItemTagsList(this, "tags", true);
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
