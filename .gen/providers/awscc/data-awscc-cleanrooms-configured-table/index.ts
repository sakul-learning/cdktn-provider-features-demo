// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/cleanrooms_configured_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccCleanroomsConfiguredTableConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/cleanrooms_configured_table#id DataAwsccCleanroomsConfiguredTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns {
}

export function dataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsToTerraform(struct?: DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsToHclTerraform(struct?: DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_names - computed: true, optional: false, required: false
  public get columnNames() {
    return this.getListAttribute('column_names');
  }

  // function - computed: true, optional: false, required: false
  public get function() {
    return this.getStringAttribute('function');
  }
}

export class DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference {
    return new DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints {
}

export function dataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsToTerraform(struct?: DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsToHclTerraform(struct?: DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference {
    return new DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation {
}

export function dataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationToTerraform(struct?: DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationToHclTerraform(struct?: DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_analyses - computed: true, optional: false, required: false
  public get additionalAnalyses() {
    return this.getStringAttribute('additional_analyses');
  }

  // aggregate_columns - computed: true, optional: false, required: false
  private _aggregateColumns = new DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList(this, "aggregate_columns", false);
  public get aggregateColumns() {
    return this._aggregateColumns;
  }

  // allowed_join_operators - computed: true, optional: false, required: false
  public get allowedJoinOperators() {
    return this.getListAttribute('allowed_join_operators');
  }

  // dimension_columns - computed: true, optional: false, required: false
  public get dimensionColumns() {
    return this.getListAttribute('dimension_columns');
  }

  // join_columns - computed: true, optional: false, required: false
  public get joinColumns() {
    return this.getListAttribute('join_columns');
  }

  // join_required - computed: true, optional: false, required: false
  public get joinRequired() {
    return this.getStringAttribute('join_required');
  }

  // output_constraints - computed: true, optional: false, required: false
  private _outputConstraints = new DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList(this, "output_constraints", false);
  public get outputConstraints() {
    return this._outputConstraints;
  }

  // scalar_functions - computed: true, optional: false, required: false
  public get scalarFunctions() {
    return this.getListAttribute('scalar_functions');
  }
}
export interface DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns {
}

export function dataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsToTerraform(struct?: DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsToHclTerraform(struct?: DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns | undefined) {
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

export class DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference {
    return new DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy {
}

export function dataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyToTerraform(struct?: DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyToHclTerraform(struct?: DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // columns - computed: true, optional: false, required: false
  private _columns = new DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
}
export interface DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1Custom {
}

export function dataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomToTerraform(struct?: DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1Custom): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomToHclTerraform(struct?: DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1Custom): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1Custom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1Custom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_analyses - computed: true, optional: false, required: false
  public get additionalAnalyses() {
    return this.getStringAttribute('additional_analyses');
  }

  // allowed_analyses - computed: true, optional: false, required: false
  public get allowedAnalyses() {
    return this.getListAttribute('allowed_analyses');
  }

  // allowed_analysis_providers - computed: true, optional: false, required: false
  public get allowedAnalysisProviders() {
    return this.getListAttribute('allowed_analysis_providers');
  }

  // differential_privacy - computed: true, optional: false, required: false
  private _differentialPrivacy = new DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference(this, "differential_privacy");
  public get differentialPrivacy() {
    return this._differentialPrivacy;
  }

  // disallowed_output_columns - computed: true, optional: false, required: false
  public get disallowedOutputColumns() {
    return this.getListAttribute('disallowed_output_columns');
  }
}
export interface DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct {
}

export function dataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructToTerraform(struct?: DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructToHclTerraform(struct?: DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_analyses - computed: true, optional: false, required: false
  public get additionalAnalyses() {
    return this.getStringAttribute('additional_analyses');
  }

  // allowed_join_operators - computed: true, optional: false, required: false
  public get allowedJoinOperators() {
    return this.getListAttribute('allowed_join_operators');
  }

  // join_columns - computed: true, optional: false, required: false
  public get joinColumns() {
    return this.getListAttribute('join_columns');
  }

  // list_columns - computed: true, optional: false, required: false
  public get listColumns() {
    return this.getListAttribute('list_columns');
  }
}
export interface DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1 {
}

export function dataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ToTerraform(struct?: DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ToHclTerraform(struct?: DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation - computed: true, optional: false, required: false
  private _aggregation = new DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference(this, "aggregation");
  public get aggregation() {
    return this._aggregation;
  }

  // custom - computed: true, optional: false, required: false
  private _custom = new DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }

  // list - computed: true, optional: false, required: false
  private _list = new DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference(this, "list");
  public get list() {
    return this._list;
  }
}
export interface DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicy {
}

export function dataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyToTerraform(struct?: DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyToHclTerraform(struct?: DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // v1 - computed: true, optional: false, required: false
  private _v1 = new DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference(this, "v1");
  public get v1() {
    return this._v1;
  }
}
export interface DataAwsccCleanroomsConfiguredTableAnalysisRules {
}

export function dataAwsccCleanroomsConfiguredTableAnalysisRulesToTerraform(struct?: DataAwsccCleanroomsConfiguredTableAnalysisRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsConfiguredTableAnalysisRulesToHclTerraform(struct?: DataAwsccCleanroomsConfiguredTableAnalysisRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCleanroomsConfiguredTableAnalysisRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsConfiguredTableAnalysisRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy - computed: true, optional: false, required: false
  private _policy = new DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference(this, "policy");
  public get policy() {
    return this._policy;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccCleanroomsConfiguredTableAnalysisRulesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference {
    return new DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCleanroomsConfiguredTableTableReferenceAthena {
}

export function dataAwsccCleanroomsConfiguredTableTableReferenceAthenaToTerraform(struct?: DataAwsccCleanroomsConfiguredTableTableReferenceAthena): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsConfiguredTableTableReferenceAthenaToHclTerraform(struct?: DataAwsccCleanroomsConfiguredTableTableReferenceAthena): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsConfiguredTableTableReferenceAthena | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsConfiguredTableTableReferenceAthena | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // catalog_name - computed: true, optional: false, required: false
  public get catalogName() {
    return this.getStringAttribute('catalog_name');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // output_location - computed: true, optional: false, required: false
  public get outputLocation() {
    return this.getStringAttribute('output_location');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // work_group - computed: true, optional: false, required: false
  public get workGroup() {
    return this.getStringAttribute('work_group');
  }
}
export interface DataAwsccCleanroomsConfiguredTableTableReferenceGlue {
}

export function dataAwsccCleanroomsConfiguredTableTableReferenceGlueToTerraform(struct?: DataAwsccCleanroomsConfiguredTableTableReferenceGlue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsConfiguredTableTableReferenceGlueToHclTerraform(struct?: DataAwsccCleanroomsConfiguredTableTableReferenceGlue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsConfiguredTableTableReferenceGlue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsConfiguredTableTableReferenceGlue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
}
export interface DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1 {
}

export function dataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1ToTerraform(struct?: DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1ToHclTerraform(struct?: DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // column_type - computed: true, optional: false, required: false
  public get columnType() {
    return this.getStringAttribute('column_type');
  }
}

export class DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference {
    return new DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchema {
}

export function dataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaToTerraform(struct?: DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaToHclTerraform(struct?: DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // v1 - computed: true, optional: false, required: false
  private _v1 = new DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List(this, "v1", false);
  public get v1() {
    return this._v1;
  }
}
export interface DataAwsccCleanroomsConfiguredTableTableReferenceSnowflake {
}

export function dataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeToTerraform(struct?: DataAwsccCleanroomsConfiguredTableTableReferenceSnowflake): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeToHclTerraform(struct?: DataAwsccCleanroomsConfiguredTableTableReferenceSnowflake): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsConfiguredTableTableReferenceSnowflake | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsConfiguredTableTableReferenceSnowflake | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_identifier - computed: true, optional: false, required: false
  public get accountIdentifier() {
    return this.getStringAttribute('account_identifier');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // table_schema - computed: true, optional: false, required: false
  private _tableSchema = new DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference(this, "table_schema");
  public get tableSchema() {
    return this._tableSchema;
  }
}
export interface DataAwsccCleanroomsConfiguredTableTableReference {
}

export function dataAwsccCleanroomsConfiguredTableTableReferenceToTerraform(struct?: DataAwsccCleanroomsConfiguredTableTableReference): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsConfiguredTableTableReferenceToHclTerraform(struct?: DataAwsccCleanroomsConfiguredTableTableReference): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsConfiguredTableTableReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsConfiguredTableTableReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // athena - computed: true, optional: false, required: false
  private _athena = new DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference(this, "athena");
  public get athena() {
    return this._athena;
  }

  // glue - computed: true, optional: false, required: false
  private _glue = new DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference(this, "glue");
  public get glue() {
    return this._glue;
  }

  // snowflake - computed: true, optional: false, required: false
  private _snowflake = new DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference(this, "snowflake");
  public get snowflake() {
    return this._snowflake;
  }
}
export interface DataAwsccCleanroomsConfiguredTableTags {
}

export function dataAwsccCleanroomsConfiguredTableTagsToTerraform(struct?: DataAwsccCleanroomsConfiguredTableTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsConfiguredTableTagsToHclTerraform(struct?: DataAwsccCleanroomsConfiguredTableTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsConfiguredTableTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCleanroomsConfiguredTableTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsConfiguredTableTags | undefined) {
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

export class DataAwsccCleanroomsConfiguredTableTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCleanroomsConfiguredTableTagsOutputReference {
    return new DataAwsccCleanroomsConfiguredTableTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/cleanrooms_configured_table awscc_cleanrooms_configured_table}
*/
export class DataAwsccCleanroomsConfiguredTable extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cleanrooms_configured_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccCleanroomsConfiguredTable resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccCleanroomsConfiguredTable to import
  * @param importFromId The id of the existing DataAwsccCleanroomsConfiguredTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/cleanrooms_configured_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccCleanroomsConfiguredTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cleanrooms_configured_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/cleanrooms_configured_table awscc_cleanrooms_configured_table} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCleanroomsConfiguredTableConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCleanroomsConfiguredTableConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cleanrooms_configured_table',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_columns - computed: true, optional: false, required: false
  public get allowedColumns() {
    return this.getListAttribute('allowed_columns');
  }

  // analysis_method - computed: true, optional: false, required: false
  public get analysisMethod() {
    return this.getStringAttribute('analysis_method');
  }

  // analysis_rules - computed: true, optional: false, required: false
  private _analysisRules = new DataAwsccCleanroomsConfiguredTableAnalysisRulesList(this, "analysis_rules", false);
  public get analysisRules() {
    return this._analysisRules;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // configured_table_identifier - computed: true, optional: false, required: false
  public get configuredTableIdentifier() {
    return this.getStringAttribute('configured_table_identifier');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // selected_analysis_methods - computed: true, optional: false, required: false
  public get selectedAnalysisMethods() {
    return this.getListAttribute('selected_analysis_methods');
  }

  // table_reference - computed: true, optional: false, required: false
  private _tableReference = new DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference(this, "table_reference");
  public get tableReference() {
    return this._tableReference;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccCleanroomsConfiguredTableTagsList(this, "tags", true);
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
