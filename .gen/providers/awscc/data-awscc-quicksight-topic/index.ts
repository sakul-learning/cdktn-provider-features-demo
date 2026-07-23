// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/quicksight_topic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccQuicksightTopicConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/quicksight_topic#id DataAwsccQuicksightTopic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccQuicksightTopicConfigOptions {
}

export function dataAwsccQuicksightTopicConfigOptionsToTerraform(struct?: DataAwsccQuicksightTopicConfigOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightTopicConfigOptionsToHclTerraform(struct?: DataAwsccQuicksightTopicConfigOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightTopicConfigOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightTopicConfigOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightTopicConfigOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // q_business_insights_enabled - computed: true, optional: false, required: false
  public get qBusinessInsightsEnabled() {
    return this.getBooleanAttribute('q_business_insights_enabled');
  }
}
export interface DataAwsccQuicksightTopicCustomInstructions {
}

export function dataAwsccQuicksightTopicCustomInstructionsToTerraform(struct?: DataAwsccQuicksightTopicCustomInstructions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightTopicCustomInstructionsToHclTerraform(struct?: DataAwsccQuicksightTopicCustomInstructions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightTopicCustomInstructionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightTopicCustomInstructions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightTopicCustomInstructions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_instructions_string - computed: true, optional: false, required: false
  public get customInstructionsString() {
    return this.getStringAttribute('custom_instructions_string');
  }
}
export interface DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonyms {
}

export function dataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsToTerraform(struct?: DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonyms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsToHclTerraform(struct?: DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonyms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonyms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonyms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cell_value - computed: true, optional: false, required: false
  public get cellValue() {
    return this.getStringAttribute('cell_value');
  }

  // synonyms - computed: true, optional: false, required: false
  public get synonyms() {
    return this.getListAttribute('synonyms');
  }
}

export class DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference {
    return new DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrder {
}

export function dataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderToTerraform(struct?: DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrder): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderToHclTerraform(struct?: DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrder): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // specifed_order - computed: true, optional: false, required: false
  public get specifedOrder() {
    return this.getListAttribute('specifed_order');
  }

  // treat_undefined_specified_values - computed: true, optional: false, required: false
  public get treatUndefinedSpecifiedValues() {
    return this.getStringAttribute('treat_undefined_specified_values');
  }

  // use_ordering - computed: true, optional: false, required: false
  public get useOrdering() {
    return this.getStringAttribute('use_ordering');
  }
}
export interface DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormat {
}

export function dataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatToTerraform(struct?: DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatToHclTerraform(struct?: DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // suffix - computed: true, optional: false, required: false
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
}
export interface DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptions {
}

export function dataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsToTerraform(struct?: DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsToHclTerraform(struct?: DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // blank_cell_format - computed: true, optional: false, required: false
  public get blankCellFormat() {
    return this.getStringAttribute('blank_cell_format');
  }

  // currency_symbol - computed: true, optional: false, required: false
  public get currencySymbol() {
    return this.getStringAttribute('currency_symbol');
  }

  // date_format - computed: true, optional: false, required: false
  public get dateFormat() {
    return this.getStringAttribute('date_format');
  }

  // decimal_separator - computed: true, optional: false, required: false
  public get decimalSeparator() {
    return this.getStringAttribute('decimal_separator');
  }

  // fraction_digits - computed: true, optional: false, required: false
  public get fractionDigits() {
    return this.getNumberAttribute('fraction_digits');
  }

  // grouping_separator - computed: true, optional: false, required: false
  public get groupingSeparator() {
    return this.getStringAttribute('grouping_separator');
  }

  // negative_format - computed: true, optional: false, required: false
  private _negativeFormat = new DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference(this, "negative_format");
  public get negativeFormat() {
    return this._negativeFormat;
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // suffix - computed: true, optional: false, required: false
  public get suffix() {
    return this.getStringAttribute('suffix');
  }

  // unit_scaler - computed: true, optional: false, required: false
  public get unitScaler() {
    return this.getStringAttribute('unit_scaler');
  }

  // use_blank_cell_format - computed: true, optional: false, required: false
  public get useBlankCellFormat() {
    return this.getBooleanAttribute('use_blank_cell_format');
  }

  // use_grouping - computed: true, optional: false, required: false
  public get useGrouping() {
    return this.getBooleanAttribute('use_grouping');
  }
}
export interface DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormatting {
}

export function dataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingToTerraform(struct?: DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormatting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingToHclTerraform(struct?: DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormatting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormatting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormatting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_format - computed: true, optional: false, required: false
  public get displayFormat() {
    return this.getStringAttribute('display_format');
  }

  // display_format_options - computed: true, optional: false, required: false
  private _displayFormatOptions = new DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference(this, "display_format_options");
  public get displayFormatOptions() {
    return this._displayFormatOptions;
  }
}
export interface DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticType {
}

export function dataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeToTerraform(struct?: DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticType): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeToHclTerraform(struct?: DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticType): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // falsey_cell_value - computed: true, optional: false, required: false
  public get falseyCellValue() {
    return this.getStringAttribute('falsey_cell_value');
  }

  // falsey_cell_value_synonyms - computed: true, optional: false, required: false
  public get falseyCellValueSynonyms() {
    return this.getListAttribute('falsey_cell_value_synonyms');
  }

  // sub_type_name - computed: true, optional: false, required: false
  public get subTypeName() {
    return this.getStringAttribute('sub_type_name');
  }

  // truthy_cell_value - computed: true, optional: false, required: false
  public get truthyCellValue() {
    return this.getStringAttribute('truthy_cell_value');
  }

  // truthy_cell_value_synonyms - computed: true, optional: false, required: false
  public get truthyCellValueSynonyms() {
    return this.getListAttribute('truthy_cell_value_synonyms');
  }

  // type_name - computed: true, optional: false, required: false
  public get typeName() {
    return this.getStringAttribute('type_name');
  }

  // type_parameters - computed: true, optional: false, required: false
  private _typeParameters = new cdktn.StringMap(this, "type_parameters");
  public get typeParameters() {
    return this._typeParameters;
  }
}
export interface DataAwsccQuicksightTopicDataSetsCalculatedFields {
}

export function dataAwsccQuicksightTopicDataSetsCalculatedFieldsToTerraform(struct?: DataAwsccQuicksightTopicDataSetsCalculatedFields): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightTopicDataSetsCalculatedFieldsToHclTerraform(struct?: DataAwsccQuicksightTopicDataSetsCalculatedFields): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccQuicksightTopicDataSetsCalculatedFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightTopicDataSetsCalculatedFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation - computed: true, optional: false, required: false
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }

  // allowed_aggregations - computed: true, optional: false, required: false
  public get allowedAggregations() {
    return this.getListAttribute('allowed_aggregations');
  }

  // calculated_field_description - computed: true, optional: false, required: false
  public get calculatedFieldDescription() {
    return this.getStringAttribute('calculated_field_description');
  }

  // calculated_field_name - computed: true, optional: false, required: false
  public get calculatedFieldName() {
    return this.getStringAttribute('calculated_field_name');
  }

  // calculated_field_synonyms - computed: true, optional: false, required: false
  public get calculatedFieldSynonyms() {
    return this.getListAttribute('calculated_field_synonyms');
  }

  // cell_value_synonyms - computed: true, optional: false, required: false
  private _cellValueSynonyms = new DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList(this, "cell_value_synonyms", false);
  public get cellValueSynonyms() {
    return this._cellValueSynonyms;
  }

  // column_data_role - computed: true, optional: false, required: false
  public get columnDataRole() {
    return this.getStringAttribute('column_data_role');
  }

  // comparative_order - computed: true, optional: false, required: false
  private _comparativeOrder = new DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference(this, "comparative_order");
  public get comparativeOrder() {
    return this._comparativeOrder;
  }

  // default_formatting - computed: true, optional: false, required: false
  private _defaultFormatting = new DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference(this, "default_formatting");
  public get defaultFormatting() {
    return this._defaultFormatting;
  }

  // disable_indexing - computed: true, optional: false, required: false
  public get disableIndexing() {
    return this.getBooleanAttribute('disable_indexing');
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // is_included_in_topic - computed: true, optional: false, required: false
  public get isIncludedInTopic() {
    return this.getBooleanAttribute('is_included_in_topic');
  }

  // never_aggregate_in_filter - computed: true, optional: false, required: false
  public get neverAggregateInFilter() {
    return this.getBooleanAttribute('never_aggregate_in_filter');
  }

  // non_additive - computed: true, optional: false, required: false
  public get nonAdditive() {
    return this.getBooleanAttribute('non_additive');
  }

  // not_allowed_aggregations - computed: true, optional: false, required: false
  public get notAllowedAggregations() {
    return this.getListAttribute('not_allowed_aggregations');
  }

  // semantic_type - computed: true, optional: false, required: false
  private _semanticType = new DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference(this, "semantic_type");
  public get semanticType() {
    return this._semanticType;
  }

  // time_granularity - computed: true, optional: false, required: false
  public get timeGranularity() {
    return this.getStringAttribute('time_granularity');
  }
}

export class DataAwsccQuicksightTopicDataSetsCalculatedFieldsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference {
    return new DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonyms {
}

export function dataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsToTerraform(struct?: DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonyms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsToHclTerraform(struct?: DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonyms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonyms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonyms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cell_value - computed: true, optional: false, required: false
  public get cellValue() {
    return this.getStringAttribute('cell_value');
  }

  // synonyms - computed: true, optional: false, required: false
  public get synonyms() {
    return this.getListAttribute('synonyms');
  }
}

export class DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference {
    return new DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccQuicksightTopicDataSetsColumnsComparativeOrder {
}

export function dataAwsccQuicksightTopicDataSetsColumnsComparativeOrderToTerraform(struct?: DataAwsccQuicksightTopicDataSetsColumnsComparativeOrder): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightTopicDataSetsColumnsComparativeOrderToHclTerraform(struct?: DataAwsccQuicksightTopicDataSetsColumnsComparativeOrder): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightTopicDataSetsColumnsComparativeOrder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightTopicDataSetsColumnsComparativeOrder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // specifed_order - computed: true, optional: false, required: false
  public get specifedOrder() {
    return this.getListAttribute('specifed_order');
  }

  // treat_undefined_specified_values - computed: true, optional: false, required: false
  public get treatUndefinedSpecifiedValues() {
    return this.getStringAttribute('treat_undefined_specified_values');
  }

  // use_ordering - computed: true, optional: false, required: false
  public get useOrdering() {
    return this.getStringAttribute('use_ordering');
  }
}
export interface DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormat {
}

export function dataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatToTerraform(struct?: DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatToHclTerraform(struct?: DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // suffix - computed: true, optional: false, required: false
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
}
export interface DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptions {
}

export function dataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsToTerraform(struct?: DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsToHclTerraform(struct?: DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // blank_cell_format - computed: true, optional: false, required: false
  public get blankCellFormat() {
    return this.getStringAttribute('blank_cell_format');
  }

  // currency_symbol - computed: true, optional: false, required: false
  public get currencySymbol() {
    return this.getStringAttribute('currency_symbol');
  }

  // date_format - computed: true, optional: false, required: false
  public get dateFormat() {
    return this.getStringAttribute('date_format');
  }

  // decimal_separator - computed: true, optional: false, required: false
  public get decimalSeparator() {
    return this.getStringAttribute('decimal_separator');
  }

  // fraction_digits - computed: true, optional: false, required: false
  public get fractionDigits() {
    return this.getNumberAttribute('fraction_digits');
  }

  // grouping_separator - computed: true, optional: false, required: false
  public get groupingSeparator() {
    return this.getStringAttribute('grouping_separator');
  }

  // negative_format - computed: true, optional: false, required: false
  private _negativeFormat = new DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference(this, "negative_format");
  public get negativeFormat() {
    return this._negativeFormat;
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // suffix - computed: true, optional: false, required: false
  public get suffix() {
    return this.getStringAttribute('suffix');
  }

  // unit_scaler - computed: true, optional: false, required: false
  public get unitScaler() {
    return this.getStringAttribute('unit_scaler');
  }

  // use_blank_cell_format - computed: true, optional: false, required: false
  public get useBlankCellFormat() {
    return this.getBooleanAttribute('use_blank_cell_format');
  }

  // use_grouping - computed: true, optional: false, required: false
  public get useGrouping() {
    return this.getBooleanAttribute('use_grouping');
  }
}
export interface DataAwsccQuicksightTopicDataSetsColumnsDefaultFormatting {
}

export function dataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingToTerraform(struct?: DataAwsccQuicksightTopicDataSetsColumnsDefaultFormatting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingToHclTerraform(struct?: DataAwsccQuicksightTopicDataSetsColumnsDefaultFormatting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightTopicDataSetsColumnsDefaultFormatting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightTopicDataSetsColumnsDefaultFormatting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_format - computed: true, optional: false, required: false
  public get displayFormat() {
    return this.getStringAttribute('display_format');
  }

  // display_format_options - computed: true, optional: false, required: false
  private _displayFormatOptions = new DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference(this, "display_format_options");
  public get displayFormatOptions() {
    return this._displayFormatOptions;
  }
}
export interface DataAwsccQuicksightTopicDataSetsColumnsSemanticType {
}

export function dataAwsccQuicksightTopicDataSetsColumnsSemanticTypeToTerraform(struct?: DataAwsccQuicksightTopicDataSetsColumnsSemanticType): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightTopicDataSetsColumnsSemanticTypeToHclTerraform(struct?: DataAwsccQuicksightTopicDataSetsColumnsSemanticType): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightTopicDataSetsColumnsSemanticType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightTopicDataSetsColumnsSemanticType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // falsey_cell_value - computed: true, optional: false, required: false
  public get falseyCellValue() {
    return this.getStringAttribute('falsey_cell_value');
  }

  // falsey_cell_value_synonyms - computed: true, optional: false, required: false
  public get falseyCellValueSynonyms() {
    return this.getListAttribute('falsey_cell_value_synonyms');
  }

  // sub_type_name - computed: true, optional: false, required: false
  public get subTypeName() {
    return this.getStringAttribute('sub_type_name');
  }

  // truthy_cell_value - computed: true, optional: false, required: false
  public get truthyCellValue() {
    return this.getStringAttribute('truthy_cell_value');
  }

  // truthy_cell_value_synonyms - computed: true, optional: false, required: false
  public get truthyCellValueSynonyms() {
    return this.getListAttribute('truthy_cell_value_synonyms');
  }

  // type_name - computed: true, optional: false, required: false
  public get typeName() {
    return this.getStringAttribute('type_name');
  }

  // type_parameters - computed: true, optional: false, required: false
  private _typeParameters = new cdktn.StringMap(this, "type_parameters");
  public get typeParameters() {
    return this._typeParameters;
  }
}
export interface DataAwsccQuicksightTopicDataSetsColumns {
}

export function dataAwsccQuicksightTopicDataSetsColumnsToTerraform(struct?: DataAwsccQuicksightTopicDataSetsColumns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightTopicDataSetsColumnsToHclTerraform(struct?: DataAwsccQuicksightTopicDataSetsColumns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightTopicDataSetsColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccQuicksightTopicDataSetsColumns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightTopicDataSetsColumns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation - computed: true, optional: false, required: false
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }

  // allowed_aggregations - computed: true, optional: false, required: false
  public get allowedAggregations() {
    return this.getListAttribute('allowed_aggregations');
  }

  // cell_value_synonyms - computed: true, optional: false, required: false
  private _cellValueSynonyms = new DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList(this, "cell_value_synonyms", false);
  public get cellValueSynonyms() {
    return this._cellValueSynonyms;
  }

  // column_data_role - computed: true, optional: false, required: false
  public get columnDataRole() {
    return this.getStringAttribute('column_data_role');
  }

  // column_description - computed: true, optional: false, required: false
  public get columnDescription() {
    return this.getStringAttribute('column_description');
  }

  // column_friendly_name - computed: true, optional: false, required: false
  public get columnFriendlyName() {
    return this.getStringAttribute('column_friendly_name');
  }

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // column_synonyms - computed: true, optional: false, required: false
  public get columnSynonyms() {
    return this.getListAttribute('column_synonyms');
  }

  // comparative_order - computed: true, optional: false, required: false
  private _comparativeOrder = new DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference(this, "comparative_order");
  public get comparativeOrder() {
    return this._comparativeOrder;
  }

  // default_formatting - computed: true, optional: false, required: false
  private _defaultFormatting = new DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference(this, "default_formatting");
  public get defaultFormatting() {
    return this._defaultFormatting;
  }

  // disable_indexing - computed: true, optional: false, required: false
  public get disableIndexing() {
    return this.getBooleanAttribute('disable_indexing');
  }

  // is_included_in_topic - computed: true, optional: false, required: false
  public get isIncludedInTopic() {
    return this.getBooleanAttribute('is_included_in_topic');
  }

  // never_aggregate_in_filter - computed: true, optional: false, required: false
  public get neverAggregateInFilter() {
    return this.getBooleanAttribute('never_aggregate_in_filter');
  }

  // non_additive - computed: true, optional: false, required: false
  public get nonAdditive() {
    return this.getBooleanAttribute('non_additive');
  }

  // not_allowed_aggregations - computed: true, optional: false, required: false
  public get notAllowedAggregations() {
    return this.getListAttribute('not_allowed_aggregations');
  }

  // semantic_type - computed: true, optional: false, required: false
  private _semanticType = new DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference(this, "semantic_type");
  public get semanticType() {
    return this._semanticType;
  }

  // time_granularity - computed: true, optional: false, required: false
  public get timeGranularity() {
    return this.getStringAttribute('time_granularity');
  }
}

export class DataAwsccQuicksightTopicDataSetsColumnsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccQuicksightTopicDataSetsColumnsOutputReference {
    return new DataAwsccQuicksightTopicDataSetsColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccQuicksightTopicDataSetsDataAggregation {
}

export function dataAwsccQuicksightTopicDataSetsDataAggregationToTerraform(struct?: DataAwsccQuicksightTopicDataSetsDataAggregation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightTopicDataSetsDataAggregationToHclTerraform(struct?: DataAwsccQuicksightTopicDataSetsDataAggregation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightTopicDataSetsDataAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightTopicDataSetsDataAggregation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dataset_row_date_granularity - computed: true, optional: false, required: false
  public get datasetRowDateGranularity() {
    return this.getStringAttribute('dataset_row_date_granularity');
  }

  // default_date_column_name - computed: true, optional: false, required: false
  public get defaultDateColumnName() {
    return this.getStringAttribute('default_date_column_name');
  }
}
export interface DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstant {
}

export function dataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantToTerraform(struct?: DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstant): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantToHclTerraform(struct?: DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstant): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstant | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstant | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value_list - computed: true, optional: false, required: false
  public get valueList() {
    return this.getListAttribute('value_list');
  }
}
export interface DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstant {
}

export function dataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantToTerraform(struct?: DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstant): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantToHclTerraform(struct?: DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstant): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstant | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstant | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // collective_constant - computed: true, optional: false, required: false
  private _collectiveConstant = new DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference(this, "collective_constant");
  public get collectiveConstant() {
    return this._collectiveConstant;
  }

  // constant_type - computed: true, optional: false, required: false
  public get constantType() {
    return this.getStringAttribute('constant_type');
  }

  // singular_constant - computed: true, optional: false, required: false
  public get singularConstant() {
    return this.getStringAttribute('singular_constant');
  }
}
export interface DataAwsccQuicksightTopicDataSetsFiltersCategoryFilter {
}

export function dataAwsccQuicksightTopicDataSetsFiltersCategoryFilterToTerraform(struct?: DataAwsccQuicksightTopicDataSetsFiltersCategoryFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightTopicDataSetsFiltersCategoryFilterToHclTerraform(struct?: DataAwsccQuicksightTopicDataSetsFiltersCategoryFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightTopicDataSetsFiltersCategoryFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightTopicDataSetsFiltersCategoryFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category_filter_function - computed: true, optional: false, required: false
  public get categoryFilterFunction() {
    return this.getStringAttribute('category_filter_function');
  }

  // category_filter_type - computed: true, optional: false, required: false
  public get categoryFilterType() {
    return this.getStringAttribute('category_filter_type');
  }

  // constant - computed: true, optional: false, required: false
  private _constant = new DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference(this, "constant");
  public get constant() {
    return this._constant;
  }

  // inverse - computed: true, optional: false, required: false
  public get inverse() {
    return this.getBooleanAttribute('inverse');
  }
}
export interface DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstant {
}

export function dataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantToTerraform(struct?: DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstant): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantToHclTerraform(struct?: DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstant): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstant | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstant | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getStringAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getStringAttribute('minimum');
  }
}
export interface DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstant {
}

export function dataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantToTerraform(struct?: DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstant): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantToHclTerraform(struct?: DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstant): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstant | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstant | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // constant_type - computed: true, optional: false, required: false
  public get constantType() {
    return this.getStringAttribute('constant_type');
  }

  // range_constant - computed: true, optional: false, required: false
  private _rangeConstant = new DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference(this, "range_constant");
  public get rangeConstant() {
    return this._rangeConstant;
  }
}
export interface DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilter {
}

export function dataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterToTerraform(struct?: DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterToHclTerraform(struct?: DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // constant - computed: true, optional: false, required: false
  private _constant = new DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference(this, "constant");
  public get constant() {
    return this._constant;
  }

  // inclusive - computed: true, optional: false, required: false
  public get inclusive() {
    return this.getBooleanAttribute('inclusive');
  }
}
export interface DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstant {
}

export function dataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantToTerraform(struct?: DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstant): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantToHclTerraform(struct?: DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstant): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstant | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstant | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // constant_type - computed: true, optional: false, required: false
  public get constantType() {
    return this.getStringAttribute('constant_type');
  }

  // singular_constant - computed: true, optional: false, required: false
  public get singularConstant() {
    return this.getStringAttribute('singular_constant');
  }
}
export interface DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilter {
}

export function dataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterToTerraform(struct?: DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterToHclTerraform(struct?: DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation - computed: true, optional: false, required: false
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }

  // constant - computed: true, optional: false, required: false
  private _constant = new DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference(this, "constant");
  public get constant() {
    return this._constant;
  }
}
export interface DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstant {
}

export function dataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantToTerraform(struct?: DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstant): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantToHclTerraform(struct?: DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstant): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstant | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstant | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getStringAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getStringAttribute('minimum');
  }
}
export interface DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstant {
}

export function dataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantToTerraform(struct?: DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstant): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantToHclTerraform(struct?: DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstant): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstant | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstant | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // constant_type - computed: true, optional: false, required: false
  public get constantType() {
    return this.getStringAttribute('constant_type');
  }

  // range_constant - computed: true, optional: false, required: false
  private _rangeConstant = new DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference(this, "range_constant");
  public get rangeConstant() {
    return this._rangeConstant;
  }
}
export interface DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilter {
}

export function dataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterToTerraform(struct?: DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterToHclTerraform(struct?: DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation - computed: true, optional: false, required: false
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }

  // constant - computed: true, optional: false, required: false
  private _constant = new DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference(this, "constant");
  public get constant() {
    return this._constant;
  }

  // inclusive - computed: true, optional: false, required: false
  public get inclusive() {
    return this.getBooleanAttribute('inclusive');
  }
}
export interface DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstant {
}

export function dataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantToTerraform(struct?: DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstant): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantToHclTerraform(struct?: DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstant): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstant | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstant | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // constant_type - computed: true, optional: false, required: false
  public get constantType() {
    return this.getStringAttribute('constant_type');
  }

  // singular_constant - computed: true, optional: false, required: false
  public get singularConstant() {
    return this.getStringAttribute('singular_constant');
  }
}
export interface DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilter {
}

export function dataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterToTerraform(struct?: DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterToHclTerraform(struct?: DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // constant - computed: true, optional: false, required: false
  private _constant = new DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference(this, "constant");
  public get constant() {
    return this._constant;
  }

  // relative_date_filter_function - computed: true, optional: false, required: false
  public get relativeDateFilterFunction() {
    return this.getStringAttribute('relative_date_filter_function');
  }

  // time_granularity - computed: true, optional: false, required: false
  public get timeGranularity() {
    return this.getStringAttribute('time_granularity');
  }
}
export interface DataAwsccQuicksightTopicDataSetsFilters {
}

export function dataAwsccQuicksightTopicDataSetsFiltersToTerraform(struct?: DataAwsccQuicksightTopicDataSetsFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightTopicDataSetsFiltersToHclTerraform(struct?: DataAwsccQuicksightTopicDataSetsFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightTopicDataSetsFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccQuicksightTopicDataSetsFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightTopicDataSetsFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category_filter - computed: true, optional: false, required: false
  private _categoryFilter = new DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference(this, "category_filter");
  public get categoryFilter() {
    return this._categoryFilter;
  }

  // date_range_filter - computed: true, optional: false, required: false
  private _dateRangeFilter = new DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference(this, "date_range_filter");
  public get dateRangeFilter() {
    return this._dateRangeFilter;
  }

  // filter_class - computed: true, optional: false, required: false
  public get filterClass() {
    return this.getStringAttribute('filter_class');
  }

  // filter_description - computed: true, optional: false, required: false
  public get filterDescription() {
    return this.getStringAttribute('filter_description');
  }

  // filter_name - computed: true, optional: false, required: false
  public get filterName() {
    return this.getStringAttribute('filter_name');
  }

  // filter_synonyms - computed: true, optional: false, required: false
  public get filterSynonyms() {
    return this.getListAttribute('filter_synonyms');
  }

  // filter_type - computed: true, optional: false, required: false
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }

  // numeric_equality_filter - computed: true, optional: false, required: false
  private _numericEqualityFilter = new DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference(this, "numeric_equality_filter");
  public get numericEqualityFilter() {
    return this._numericEqualityFilter;
  }

  // numeric_range_filter - computed: true, optional: false, required: false
  private _numericRangeFilter = new DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference(this, "numeric_range_filter");
  public get numericRangeFilter() {
    return this._numericRangeFilter;
  }

  // operand_field_name - computed: true, optional: false, required: false
  public get operandFieldName() {
    return this.getStringAttribute('operand_field_name');
  }

  // relative_date_filter - computed: true, optional: false, required: false
  private _relativeDateFilter = new DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference(this, "relative_date_filter");
  public get relativeDateFilter() {
    return this._relativeDateFilter;
  }
}

export class DataAwsccQuicksightTopicDataSetsFiltersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccQuicksightTopicDataSetsFiltersOutputReference {
    return new DataAwsccQuicksightTopicDataSetsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetric {
}

export function dataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricToTerraform(struct?: DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricToHclTerraform(struct?: DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation - computed: true, optional: false, required: false
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }

  // aggregation_function_parameters - computed: true, optional: false, required: false
  private _aggregationFunctionParameters = new cdktn.StringMap(this, "aggregation_function_parameters");
  public get aggregationFunctionParameters() {
    return this._aggregationFunctionParameters;
  }
}
export interface DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinition {
}

export function dataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionToTerraform(struct?: DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionToHclTerraform(struct?: DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_name - computed: true, optional: false, required: false
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }

  // metric - computed: true, optional: false, required: false
  private _metric = new DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }

  // property_name - computed: true, optional: false, required: false
  public get propertyName() {
    return this.getStringAttribute('property_name');
  }

  // property_role - computed: true, optional: false, required: false
  public get propertyRole() {
    return this.getStringAttribute('property_role');
  }

  // property_usage - computed: true, optional: false, required: false
  public get propertyUsage() {
    return this.getStringAttribute('property_usage');
  }
}

export class DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference {
    return new DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityType {
}

export function dataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeToTerraform(struct?: DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityType): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeToHclTerraform(struct?: DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityType): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sub_type_name - computed: true, optional: false, required: false
  public get subTypeName() {
    return this.getStringAttribute('sub_type_name');
  }

  // type_name - computed: true, optional: false, required: false
  public get typeName() {
    return this.getStringAttribute('type_name');
  }

  // type_parameters - computed: true, optional: false, required: false
  private _typeParameters = new cdktn.StringMap(this, "type_parameters");
  public get typeParameters() {
    return this._typeParameters;
  }
}
export interface DataAwsccQuicksightTopicDataSetsNamedEntities {
}

export function dataAwsccQuicksightTopicDataSetsNamedEntitiesToTerraform(struct?: DataAwsccQuicksightTopicDataSetsNamedEntities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightTopicDataSetsNamedEntitiesToHclTerraform(struct?: DataAwsccQuicksightTopicDataSetsNamedEntities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccQuicksightTopicDataSetsNamedEntities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightTopicDataSetsNamedEntities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // definition - computed: true, optional: false, required: false
  private _definition = new DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList(this, "definition", false);
  public get definition() {
    return this._definition;
  }

  // entity_description - computed: true, optional: false, required: false
  public get entityDescription() {
    return this.getStringAttribute('entity_description');
  }

  // entity_name - computed: true, optional: false, required: false
  public get entityName() {
    return this.getStringAttribute('entity_name');
  }

  // entity_synonyms - computed: true, optional: false, required: false
  public get entitySynonyms() {
    return this.getListAttribute('entity_synonyms');
  }

  // semantic_entity_type - computed: true, optional: false, required: false
  private _semanticEntityType = new DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference(this, "semantic_entity_type");
  public get semanticEntityType() {
    return this._semanticEntityType;
  }
}

export class DataAwsccQuicksightTopicDataSetsNamedEntitiesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference {
    return new DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccQuicksightTopicDataSets {
}

export function dataAwsccQuicksightTopicDataSetsToTerraform(struct?: DataAwsccQuicksightTopicDataSets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightTopicDataSetsToHclTerraform(struct?: DataAwsccQuicksightTopicDataSets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightTopicDataSetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccQuicksightTopicDataSets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightTopicDataSets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // calculated_fields - computed: true, optional: false, required: false
  private _calculatedFields = new DataAwsccQuicksightTopicDataSetsCalculatedFieldsList(this, "calculated_fields", false);
  public get calculatedFields() {
    return this._calculatedFields;
  }

  // columns - computed: true, optional: false, required: false
  private _columns = new DataAwsccQuicksightTopicDataSetsColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }

  // data_aggregation - computed: true, optional: false, required: false
  private _dataAggregation = new DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference(this, "data_aggregation");
  public get dataAggregation() {
    return this._dataAggregation;
  }

  // dataset_arn - computed: true, optional: false, required: false
  public get datasetArn() {
    return this.getStringAttribute('dataset_arn');
  }

  // dataset_description - computed: true, optional: false, required: false
  public get datasetDescription() {
    return this.getStringAttribute('dataset_description');
  }

  // dataset_name - computed: true, optional: false, required: false
  public get datasetName() {
    return this.getStringAttribute('dataset_name');
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataAwsccQuicksightTopicDataSetsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }

  // named_entities - computed: true, optional: false, required: false
  private _namedEntities = new DataAwsccQuicksightTopicDataSetsNamedEntitiesList(this, "named_entities", false);
  public get namedEntities() {
    return this._namedEntities;
  }
}

export class DataAwsccQuicksightTopicDataSetsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccQuicksightTopicDataSetsOutputReference {
    return new DataAwsccQuicksightTopicDataSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccQuicksightTopicTags {
}

export function dataAwsccQuicksightTopicTagsToTerraform(struct?: DataAwsccQuicksightTopicTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightTopicTagsToHclTerraform(struct?: DataAwsccQuicksightTopicTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightTopicTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccQuicksightTopicTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightTopicTags | undefined) {
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

export class DataAwsccQuicksightTopicTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccQuicksightTopicTagsOutputReference {
    return new DataAwsccQuicksightTopicTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/quicksight_topic awscc_quicksight_topic}
*/
export class DataAwsccQuicksightTopic extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_quicksight_topic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccQuicksightTopic resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccQuicksightTopic to import
  * @param importFromId The id of the existing DataAwsccQuicksightTopic that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/quicksight_topic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccQuicksightTopic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_quicksight_topic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/quicksight_topic awscc_quicksight_topic} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccQuicksightTopicConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccQuicksightTopicConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_quicksight_topic',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.94.0'
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

  // aws_account_id - computed: true, optional: false, required: false
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }

  // config_options - computed: true, optional: false, required: false
  private _configOptions = new DataAwsccQuicksightTopicConfigOptionsOutputReference(this, "config_options");
  public get configOptions() {
    return this._configOptions;
  }

  // custom_instructions - computed: true, optional: false, required: false
  private _customInstructions = new DataAwsccQuicksightTopicCustomInstructionsOutputReference(this, "custom_instructions");
  public get customInstructions() {
    return this._customInstructions;
  }

  // data_sets - computed: true, optional: false, required: false
  private _dataSets = new DataAwsccQuicksightTopicDataSetsList(this, "data_sets", false);
  public get dataSets() {
    return this._dataSets;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // folder_arns - computed: true, optional: false, required: false
  public get folderArns() {
    return this.getListAttribute('folder_arns');
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

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccQuicksightTopicTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // topic_id - computed: true, optional: false, required: false
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }

  // user_experience_version - computed: true, optional: false, required: false
  public get userExperienceVersion() {
    return this.getStringAttribute('user_experience_version');
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
