// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/cases_case_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccCasesCaseRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/cases_case_rule#id DataAwsccCasesCaseRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOne {
}

export function dataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneToTerraform(struct?: DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOne): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneToHclTerraform(struct?: DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOne): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOne | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOne | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_id - computed: true, optional: false, required: false
  public get fieldId() {
    return this.getStringAttribute('field_id');
  }
}
export interface DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwo {
}

export function dataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoToTerraform(struct?: DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoToHclTerraform(struct?: DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boolean_value - computed: true, optional: false, required: false
  public get booleanValue() {
    return this.getBooleanAttribute('boolean_value');
  }

  // double_value - computed: true, optional: false, required: false
  public get doubleValue() {
    return this.getNumberAttribute('double_value');
  }

  // empty_value - computed: true, optional: false, required: false
  public get emptyValue() {
    return this.getStringAttribute('empty_value');
  }

  // string_value - computed: true, optional: false, required: false
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
}
export interface DataAwsccCasesCaseRuleRuleHiddenConditionsEqualTo {
}

export function dataAwsccCasesCaseRuleRuleHiddenConditionsEqualToToTerraform(struct?: DataAwsccCasesCaseRuleRuleHiddenConditionsEqualTo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCasesCaseRuleRuleHiddenConditionsEqualToToHclTerraform(struct?: DataAwsccCasesCaseRuleRuleHiddenConditionsEqualTo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCasesCaseRuleRuleHiddenConditionsEqualTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCasesCaseRuleRuleHiddenConditionsEqualTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operand_one - computed: true, optional: false, required: false
  private _operandOne = new DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference(this, "operand_one");
  public get operandOne() {
    return this._operandOne;
  }

  // operand_two - computed: true, optional: false, required: false
  private _operandTwo = new DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference(this, "operand_two");
  public get operandTwo() {
    return this._operandTwo;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getBooleanAttribute('result');
  }
}
export interface DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne {
}

export function dataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneToTerraform(struct?: DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneToHclTerraform(struct?: DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_id - computed: true, optional: false, required: false
  public get fieldId() {
    return this.getStringAttribute('field_id');
  }
}
export interface DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo {
}

export function dataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoToTerraform(struct?: DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoToHclTerraform(struct?: DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boolean_value - computed: true, optional: false, required: false
  public get booleanValue() {
    return this.getBooleanAttribute('boolean_value');
  }

  // double_value - computed: true, optional: false, required: false
  public get doubleValue() {
    return this.getNumberAttribute('double_value');
  }

  // empty_value - computed: true, optional: false, required: false
  public get emptyValue() {
    return this.getStringAttribute('empty_value');
  }

  // string_value - computed: true, optional: false, required: false
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
}
export interface DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualTo {
}

export function dataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToToTerraform(struct?: DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualTo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToToHclTerraform(struct?: DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualTo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operand_one - computed: true, optional: false, required: false
  private _operandOne = new DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference(this, "operand_one");
  public get operandOne() {
    return this._operandOne;
  }

  // operand_two - computed: true, optional: false, required: false
  private _operandTwo = new DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference(this, "operand_two");
  public get operandTwo() {
    return this._operandTwo;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getBooleanAttribute('result');
  }
}
export interface DataAwsccCasesCaseRuleRuleHiddenConditions {
}

export function dataAwsccCasesCaseRuleRuleHiddenConditionsToTerraform(struct?: DataAwsccCasesCaseRuleRuleHiddenConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCasesCaseRuleRuleHiddenConditionsToHclTerraform(struct?: DataAwsccCasesCaseRuleRuleHiddenConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCasesCaseRuleRuleHiddenConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCasesCaseRuleRuleHiddenConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // equal_to - computed: true, optional: false, required: false
  private _equalTo = new DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference(this, "equal_to");
  public get equalTo() {
    return this._equalTo;
  }

  // not_equal_to - computed: true, optional: false, required: false
  private _notEqualTo = new DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference(this, "not_equal_to");
  public get notEqualTo() {
    return this._notEqualTo;
  }
}

export class DataAwsccCasesCaseRuleRuleHiddenConditionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference {
    return new DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCasesCaseRuleRuleHidden {
}

export function dataAwsccCasesCaseRuleRuleHiddenToTerraform(struct?: DataAwsccCasesCaseRuleRuleHidden): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCasesCaseRuleRuleHiddenToHclTerraform(struct?: DataAwsccCasesCaseRuleRuleHidden): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCasesCaseRuleRuleHiddenOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCasesCaseRuleRuleHidden | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCasesCaseRuleRuleHidden | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new DataAwsccCasesCaseRuleRuleHiddenConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getBooleanAttribute('default_value');
  }
}
export interface DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOne {
}

export function dataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneToTerraform(struct?: DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOne): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneToHclTerraform(struct?: DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOne): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOne | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOne | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_id - computed: true, optional: false, required: false
  public get fieldId() {
    return this.getStringAttribute('field_id');
  }
}
export interface DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwo {
}

export function dataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoToTerraform(struct?: DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoToHclTerraform(struct?: DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boolean_value - computed: true, optional: false, required: false
  public get booleanValue() {
    return this.getBooleanAttribute('boolean_value');
  }

  // double_value - computed: true, optional: false, required: false
  public get doubleValue() {
    return this.getNumberAttribute('double_value');
  }

  // empty_value - computed: true, optional: false, required: false
  public get emptyValue() {
    return this.getStringAttribute('empty_value');
  }

  // string_value - computed: true, optional: false, required: false
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
}
export interface DataAwsccCasesCaseRuleRuleRequiredConditionsEqualTo {
}

export function dataAwsccCasesCaseRuleRuleRequiredConditionsEqualToToTerraform(struct?: DataAwsccCasesCaseRuleRuleRequiredConditionsEqualTo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCasesCaseRuleRuleRequiredConditionsEqualToToHclTerraform(struct?: DataAwsccCasesCaseRuleRuleRequiredConditionsEqualTo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCasesCaseRuleRuleRequiredConditionsEqualTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCasesCaseRuleRuleRequiredConditionsEqualTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operand_one - computed: true, optional: false, required: false
  private _operandOne = new DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference(this, "operand_one");
  public get operandOne() {
    return this._operandOne;
  }

  // operand_two - computed: true, optional: false, required: false
  private _operandTwo = new DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference(this, "operand_two");
  public get operandTwo() {
    return this._operandTwo;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getBooleanAttribute('result');
  }
}
export interface DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne {
}

export function dataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneToTerraform(struct?: DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneToHclTerraform(struct?: DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_id - computed: true, optional: false, required: false
  public get fieldId() {
    return this.getStringAttribute('field_id');
  }
}
export interface DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo {
}

export function dataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoToTerraform(struct?: DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoToHclTerraform(struct?: DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boolean_value - computed: true, optional: false, required: false
  public get booleanValue() {
    return this.getBooleanAttribute('boolean_value');
  }

  // double_value - computed: true, optional: false, required: false
  public get doubleValue() {
    return this.getNumberAttribute('double_value');
  }

  // empty_value - computed: true, optional: false, required: false
  public get emptyValue() {
    return this.getStringAttribute('empty_value');
  }

  // string_value - computed: true, optional: false, required: false
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
}
export interface DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualTo {
}

export function dataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToToTerraform(struct?: DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualTo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToToHclTerraform(struct?: DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualTo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operand_one - computed: true, optional: false, required: false
  private _operandOne = new DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference(this, "operand_one");
  public get operandOne() {
    return this._operandOne;
  }

  // operand_two - computed: true, optional: false, required: false
  private _operandTwo = new DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference(this, "operand_two");
  public get operandTwo() {
    return this._operandTwo;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getBooleanAttribute('result');
  }
}
export interface DataAwsccCasesCaseRuleRuleRequiredConditions {
}

export function dataAwsccCasesCaseRuleRuleRequiredConditionsToTerraform(struct?: DataAwsccCasesCaseRuleRuleRequiredConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCasesCaseRuleRuleRequiredConditionsToHclTerraform(struct?: DataAwsccCasesCaseRuleRuleRequiredConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCasesCaseRuleRuleRequiredConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCasesCaseRuleRuleRequiredConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // equal_to - computed: true, optional: false, required: false
  private _equalTo = new DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference(this, "equal_to");
  public get equalTo() {
    return this._equalTo;
  }

  // not_equal_to - computed: true, optional: false, required: false
  private _notEqualTo = new DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference(this, "not_equal_to");
  public get notEqualTo() {
    return this._notEqualTo;
  }
}

export class DataAwsccCasesCaseRuleRuleRequiredConditionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference {
    return new DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCasesCaseRuleRuleRequired {
}

export function dataAwsccCasesCaseRuleRuleRequiredToTerraform(struct?: DataAwsccCasesCaseRuleRuleRequired): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCasesCaseRuleRuleRequiredToHclTerraform(struct?: DataAwsccCasesCaseRuleRuleRequired): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCasesCaseRuleRuleRequiredOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCasesCaseRuleRuleRequired | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCasesCaseRuleRuleRequired | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new DataAwsccCasesCaseRuleRuleRequiredConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getBooleanAttribute('default_value');
  }
}
export interface DataAwsccCasesCaseRuleRule {
}

export function dataAwsccCasesCaseRuleRuleToTerraform(struct?: DataAwsccCasesCaseRuleRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCasesCaseRuleRuleToHclTerraform(struct?: DataAwsccCasesCaseRuleRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCasesCaseRuleRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCasesCaseRuleRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCasesCaseRuleRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hidden - computed: true, optional: false, required: false
  private _hidden = new DataAwsccCasesCaseRuleRuleHiddenOutputReference(this, "hidden");
  public get hidden() {
    return this._hidden;
  }

  // required - computed: true, optional: false, required: false
  private _required = new DataAwsccCasesCaseRuleRuleRequiredOutputReference(this, "required");
  public get required() {
    return this._required;
  }
}
export interface DataAwsccCasesCaseRuleTags {
}

export function dataAwsccCasesCaseRuleTagsToTerraform(struct?: DataAwsccCasesCaseRuleTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCasesCaseRuleTagsToHclTerraform(struct?: DataAwsccCasesCaseRuleTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCasesCaseRuleTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCasesCaseRuleTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCasesCaseRuleTags | undefined) {
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

export class DataAwsccCasesCaseRuleTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCasesCaseRuleTagsOutputReference {
    return new DataAwsccCasesCaseRuleTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/cases_case_rule awscc_cases_case_rule}
*/
export class DataAwsccCasesCaseRule extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cases_case_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccCasesCaseRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccCasesCaseRule to import
  * @param importFromId The id of the existing DataAwsccCasesCaseRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/cases_case_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccCasesCaseRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cases_case_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/cases_case_rule awscc_cases_case_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCasesCaseRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCasesCaseRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cases_case_rule',
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

  // case_rule_arn - computed: true, optional: false, required: false
  public get caseRuleArn() {
    return this.getStringAttribute('case_rule_arn');
  }

  // case_rule_id - computed: true, optional: false, required: false
  public get caseRuleId() {
    return this.getStringAttribute('case_rule_id');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
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
    return this.getStringAttribute('last_modified_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // rule - computed: true, optional: false, required: false
  private _rule = new DataAwsccCasesCaseRuleRuleOutputReference(this, "rule");
  public get rule() {
    return this._rule;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccCasesCaseRuleTagsList(this, "tags", false);
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
