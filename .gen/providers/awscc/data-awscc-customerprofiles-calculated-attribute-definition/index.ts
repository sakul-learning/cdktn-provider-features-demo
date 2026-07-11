// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/customerprofiles_calculated_attribute_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/customerprofiles_calculated_attribute_definition#id DataAwsccCustomerprofilesCalculatedAttributeDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes {
}

export function dataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesToTerraform(struct?: DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesToHclTerraform(struct?: DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference {
    return new DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetails {
}

export function dataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsToTerraform(struct?: DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsToHclTerraform(struct?: DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attributes - computed: true, optional: false, required: false
  private _attributes = new DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList(this, "attributes", true);
  public get attributes() {
    return this._attributes;
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }
}
export interface DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange {
}

export function dataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeToTerraform(struct?: DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeToHclTerraform(struct?: DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getNumberAttribute('end');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getNumberAttribute('start');
  }
}
export interface DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRange {
}

export function dataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeToTerraform(struct?: DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeToHclTerraform(struct?: DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timestamp_format - computed: true, optional: false, required: false
  public get timestampFormat() {
    return this.getStringAttribute('timestamp_format');
  }

  // timestamp_source - computed: true, optional: false, required: false
  public get timestampSource() {
    return this.getStringAttribute('timestamp_source');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }

  // value_range - computed: true, optional: false, required: false
  private _valueRange = new DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference(this, "value_range");
  public get valueRange() {
    return this._valueRange;
  }
}
export interface DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThreshold {
}

export function dataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdToTerraform(struct?: DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThreshold): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdToHclTerraform(struct?: DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThreshold): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditions {
}

export function dataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsToTerraform(struct?: DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsToHclTerraform(struct?: DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // object_count - computed: true, optional: false, required: false
  public get objectCount() {
    return this.getNumberAttribute('object_count');
  }

  // range - computed: true, optional: false, required: false
  private _range = new DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference(this, "range");
  public get range() {
    return this._range;
  }

  // threshold - computed: true, optional: false, required: false
  private _threshold = new DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference(this, "threshold");
  public get threshold() {
    return this._threshold;
  }
}
export interface DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadiness {
}

export function dataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessToTerraform(struct?: DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadiness): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessToHclTerraform(struct?: DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadiness): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadiness | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadiness | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // progress_percentage - computed: true, optional: false, required: false
  public get progressPercentage() {
    return this.getNumberAttribute('progress_percentage');
  }
}
export interface DataAwsccCustomerprofilesCalculatedAttributeDefinitionTags {
}

export function dataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsToTerraform(struct?: DataAwsccCustomerprofilesCalculatedAttributeDefinitionTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsToHclTerraform(struct?: DataAwsccCustomerprofilesCalculatedAttributeDefinitionTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCustomerprofilesCalculatedAttributeDefinitionTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesCalculatedAttributeDefinitionTags | undefined) {
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

export class DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference {
    return new DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/customerprofiles_calculated_attribute_definition awscc_customerprofiles_calculated_attribute_definition}
*/
export class DataAwsccCustomerprofilesCalculatedAttributeDefinition extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_customerprofiles_calculated_attribute_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccCustomerprofilesCalculatedAttributeDefinition resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccCustomerprofilesCalculatedAttributeDefinition to import
  * @param importFromId The id of the existing DataAwsccCustomerprofilesCalculatedAttributeDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/customerprofiles_calculated_attribute_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccCustomerprofilesCalculatedAttributeDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_customerprofiles_calculated_attribute_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/customerprofiles_calculated_attribute_definition awscc_customerprofiles_calculated_attribute_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_customerprofiles_calculated_attribute_definition',
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

  // attribute_details - computed: true, optional: false, required: false
  private _attributeDetails = new DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference(this, "attribute_details");
  public get attributeDetails() {
    return this._attributeDetails;
  }

  // calculated_attribute_name - computed: true, optional: false, required: false
  public get calculatedAttributeName() {
    return this.getStringAttribute('calculated_attribute_name');
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
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

  // readiness - computed: true, optional: false, required: false
  private _readiness = new DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference(this, "readiness");
  public get readiness() {
    return this._readiness;
  }

  // statistic - computed: true, optional: false, required: false
  public get statistic() {
    return this.getStringAttribute('statistic');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // use_historical_data - computed: true, optional: false, required: false
  public get useHistoricalData() {
    return this.getBooleanAttribute('use_historical_data');
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
