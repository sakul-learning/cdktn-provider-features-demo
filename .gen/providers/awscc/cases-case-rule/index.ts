// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CasesCaseRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * A description explaining the purpose and behavior of this case rule. Helps administrators understand when and why this rule applies to case fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#description CasesCaseRule#description}
  */
  readonly description?: string;
  /**
  * The unique identifier of the Cases domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#domain_id CasesCaseRule#domain_id}
  */
  readonly domainId?: string;
  /**
  * A descriptive name for the case rule. Must be unique within the domain and should clearly indicate the rule's purpose (e.g., 'Priority Field Required for Urgent Cases').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#name CasesCaseRule#name}
  */
  readonly name: string;
  /**
  * Defines the rule behavior and conditions. Specifies the rule type and the conditions under which it applies. In the Amazon Connect admin website, this corresponds to case field conditions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#rule CasesCaseRule#rule}
  */
  readonly rule: CasesCaseRuleRule;
  /**
  * The tags that you attach to this case rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#tags CasesCaseRule#tags}
  */
  readonly tags?: CasesCaseRuleTags[] | cdktn.IResolvable;
}
export interface CasesCaseRuleRuleHiddenConditionsEqualToOperandOne {
  /**
  * The field ID this operand should take the value of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#field_id CasesCaseRule#field_id}
  */
  readonly fieldId?: string;
}

export function casesCaseRuleRuleHiddenConditionsEqualToOperandOneToTerraform(struct?: CasesCaseRuleRuleHiddenConditionsEqualToOperandOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field_id: cdktn.stringToTerraform(struct!.fieldId),
  }
}


export function casesCaseRuleRuleHiddenConditionsEqualToOperandOneToHclTerraform(struct?: CasesCaseRuleRuleHiddenConditionsEqualToOperandOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field_id: {
      value: cdktn.stringToHclTerraform(struct!.fieldId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CasesCaseRuleRuleHiddenConditionsEqualToOperandOne | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldId = this._fieldId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasesCaseRuleRuleHiddenConditionsEqualToOperandOne | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldId = value.fieldId;
    }
  }

  // field_id - computed: true, optional: true, required: false
  private _fieldId?: string; 
  public get fieldId() {
    return this.getStringAttribute('field_id');
  }
  public set fieldId(value: string) {
    this._fieldId = value;
  }
  public resetFieldId() {
    this._fieldId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldIdInput() {
    return this._fieldId;
  }
}
export interface CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo {
  /**
  * A boolean value to compare against the field value in the condition evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#boolean_value CasesCaseRule#boolean_value}
  */
  readonly booleanValue?: boolean | cdktn.IResolvable;
  /**
  * A numeric value to compare against the field value in the condition evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#double_value CasesCaseRule#double_value}
  */
  readonly doubleValue?: number;
  /**
  * An empty operand value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#empty_value CasesCaseRule#empty_value}
  */
  readonly emptyValue?: string;
  /**
  * A string value to compare against the field value in the condition evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#string_value CasesCaseRule#string_value}
  */
  readonly stringValue?: string;
}

export function casesCaseRuleRuleHiddenConditionsEqualToOperandTwoToTerraform(struct?: CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    boolean_value: cdktn.booleanToTerraform(struct!.booleanValue),
    double_value: cdktn.numberToTerraform(struct!.doubleValue),
    empty_value: cdktn.stringToTerraform(struct!.emptyValue),
    string_value: cdktn.stringToTerraform(struct!.stringValue),
  }
}


export function casesCaseRuleRuleHiddenConditionsEqualToOperandTwoToHclTerraform(struct?: CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    boolean_value: {
      value: cdktn.booleanToHclTerraform(struct!.booleanValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    double_value: {
      value: cdktn.numberToHclTerraform(struct!.doubleValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    empty_value: {
      value: cdktn.stringToHclTerraform(struct!.emptyValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_value: {
      value: cdktn.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanValue = this._booleanValue;
    }
    if (this._doubleValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleValue = this._doubleValue;
    }
    if (this._emptyValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyValue = this._emptyValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._booleanValue = undefined;
      this._doubleValue = undefined;
      this._emptyValue = undefined;
      this._stringValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._booleanValue = value.booleanValue;
      this._doubleValue = value.doubleValue;
      this._emptyValue = value.emptyValue;
      this._stringValue = value.stringValue;
    }
  }

  // boolean_value - computed: true, optional: true, required: false
  private _booleanValue?: boolean | cdktn.IResolvable; 
  public get booleanValue() {
    return this.getBooleanAttribute('boolean_value');
  }
  public set booleanValue(value: boolean | cdktn.IResolvable) {
    this._booleanValue = value;
  }
  public resetBooleanValue() {
    this._booleanValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanValueInput() {
    return this._booleanValue;
  }

  // double_value - computed: true, optional: true, required: false
  private _doubleValue?: number; 
  public get doubleValue() {
    return this.getNumberAttribute('double_value');
  }
  public set doubleValue(value: number) {
    this._doubleValue = value;
  }
  public resetDoubleValue() {
    this._doubleValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleValueInput() {
    return this._doubleValue;
  }

  // empty_value - computed: true, optional: true, required: false
  private _emptyValue?: string; 
  public get emptyValue() {
    return this.getStringAttribute('empty_value');
  }
  public set emptyValue(value: string) {
    this._emptyValue = value;
  }
  public resetEmptyValue() {
    this._emptyValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyValueInput() {
    return this._emptyValue;
  }

  // string_value - computed: true, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}
export interface CasesCaseRuleRuleHiddenConditionsEqualTo {
  /**
  * The left hand operand in the condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#operand_one CasesCaseRule#operand_one}
  */
  readonly operandOne?: CasesCaseRuleRuleHiddenConditionsEqualToOperandOne;
  /**
  * The right hand operand in the condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#operand_two CasesCaseRule#operand_two}
  */
  readonly operandTwo?: CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo;
  /**
  * The value of the outer rule if the condition evaluates to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#result CasesCaseRule#result}
  */
  readonly result?: boolean | cdktn.IResolvable;
}

export function casesCaseRuleRuleHiddenConditionsEqualToToTerraform(struct?: CasesCaseRuleRuleHiddenConditionsEqualTo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operand_one: casesCaseRuleRuleHiddenConditionsEqualToOperandOneToTerraform(struct!.operandOne),
    operand_two: casesCaseRuleRuleHiddenConditionsEqualToOperandTwoToTerraform(struct!.operandTwo),
    result: cdktn.booleanToTerraform(struct!.result),
  }
}


export function casesCaseRuleRuleHiddenConditionsEqualToToHclTerraform(struct?: CasesCaseRuleRuleHiddenConditionsEqualTo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operand_one: {
      value: casesCaseRuleRuleHiddenConditionsEqualToOperandOneToHclTerraform(struct!.operandOne),
      isBlock: true,
      type: "struct",
      storageClassType: "CasesCaseRuleRuleHiddenConditionsEqualToOperandOne",
    },
    operand_two: {
      value: casesCaseRuleRuleHiddenConditionsEqualToOperandTwoToHclTerraform(struct!.operandTwo),
      isBlock: true,
      type: "struct",
      storageClassType: "CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo",
    },
    result: {
      value: cdktn.booleanToHclTerraform(struct!.result),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CasesCaseRuleRuleHiddenConditionsEqualToOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CasesCaseRuleRuleHiddenConditionsEqualTo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operandOne?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operandOne = this._operandOne?.internalValue;
    }
    if (this._operandTwo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operandTwo = this._operandTwo?.internalValue;
    }
    if (this._result !== undefined) {
      hasAnyValues = true;
      internalValueResult.result = this._result;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasesCaseRuleRuleHiddenConditionsEqualTo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operandOne.internalValue = undefined;
      this._operandTwo.internalValue = undefined;
      this._result = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operandOne.internalValue = value.operandOne;
      this._operandTwo.internalValue = value.operandTwo;
      this._result = value.result;
    }
  }

  // operand_one - computed: true, optional: true, required: false
  private _operandOne = new CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference(this, "operand_one");
  public get operandOne() {
    return this._operandOne;
  }
  public putOperandOne(value: CasesCaseRuleRuleHiddenConditionsEqualToOperandOne) {
    this._operandOne.internalValue = value;
  }
  public resetOperandOne() {
    this._operandOne.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operandOneInput() {
    return this._operandOne.internalValue;
  }

  // operand_two - computed: true, optional: true, required: false
  private _operandTwo = new CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference(this, "operand_two");
  public get operandTwo() {
    return this._operandTwo;
  }
  public putOperandTwo(value: CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo) {
    this._operandTwo.internalValue = value;
  }
  public resetOperandTwo() {
    this._operandTwo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operandTwoInput() {
    return this._operandTwo.internalValue;
  }

  // result - computed: true, optional: true, required: false
  private _result?: boolean | cdktn.IResolvable; 
  public get result() {
    return this.getBooleanAttribute('result');
  }
  public set result(value: boolean | cdktn.IResolvable) {
    this._result = value;
  }
  public resetResult() {
    this._result = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultInput() {
    return this._result;
  }
}
export interface CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne {
  /**
  * The field ID this operand should take the value of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#field_id CasesCaseRule#field_id}
  */
  readonly fieldId?: string;
}

export function casesCaseRuleRuleHiddenConditionsNotEqualToOperandOneToTerraform(struct?: CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field_id: cdktn.stringToTerraform(struct!.fieldId),
  }
}


export function casesCaseRuleRuleHiddenConditionsNotEqualToOperandOneToHclTerraform(struct?: CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field_id: {
      value: cdktn.stringToHclTerraform(struct!.fieldId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldId = this._fieldId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldId = value.fieldId;
    }
  }

  // field_id - computed: true, optional: true, required: false
  private _fieldId?: string; 
  public get fieldId() {
    return this.getStringAttribute('field_id');
  }
  public set fieldId(value: string) {
    this._fieldId = value;
  }
  public resetFieldId() {
    this._fieldId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldIdInput() {
    return this._fieldId;
  }
}
export interface CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo {
  /**
  * A boolean value to compare against the field value in the condition evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#boolean_value CasesCaseRule#boolean_value}
  */
  readonly booleanValue?: boolean | cdktn.IResolvable;
  /**
  * A numeric value to compare against the field value in the condition evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#double_value CasesCaseRule#double_value}
  */
  readonly doubleValue?: number;
  /**
  * An empty operand value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#empty_value CasesCaseRule#empty_value}
  */
  readonly emptyValue?: string;
  /**
  * A string value to compare against the field value in the condition evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#string_value CasesCaseRule#string_value}
  */
  readonly stringValue?: string;
}

export function casesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoToTerraform(struct?: CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    boolean_value: cdktn.booleanToTerraform(struct!.booleanValue),
    double_value: cdktn.numberToTerraform(struct!.doubleValue),
    empty_value: cdktn.stringToTerraform(struct!.emptyValue),
    string_value: cdktn.stringToTerraform(struct!.stringValue),
  }
}


export function casesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoToHclTerraform(struct?: CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    boolean_value: {
      value: cdktn.booleanToHclTerraform(struct!.booleanValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    double_value: {
      value: cdktn.numberToHclTerraform(struct!.doubleValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    empty_value: {
      value: cdktn.stringToHclTerraform(struct!.emptyValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_value: {
      value: cdktn.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanValue = this._booleanValue;
    }
    if (this._doubleValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleValue = this._doubleValue;
    }
    if (this._emptyValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyValue = this._emptyValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._booleanValue = undefined;
      this._doubleValue = undefined;
      this._emptyValue = undefined;
      this._stringValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._booleanValue = value.booleanValue;
      this._doubleValue = value.doubleValue;
      this._emptyValue = value.emptyValue;
      this._stringValue = value.stringValue;
    }
  }

  // boolean_value - computed: true, optional: true, required: false
  private _booleanValue?: boolean | cdktn.IResolvable; 
  public get booleanValue() {
    return this.getBooleanAttribute('boolean_value');
  }
  public set booleanValue(value: boolean | cdktn.IResolvable) {
    this._booleanValue = value;
  }
  public resetBooleanValue() {
    this._booleanValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanValueInput() {
    return this._booleanValue;
  }

  // double_value - computed: true, optional: true, required: false
  private _doubleValue?: number; 
  public get doubleValue() {
    return this.getNumberAttribute('double_value');
  }
  public set doubleValue(value: number) {
    this._doubleValue = value;
  }
  public resetDoubleValue() {
    this._doubleValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleValueInput() {
    return this._doubleValue;
  }

  // empty_value - computed: true, optional: true, required: false
  private _emptyValue?: string; 
  public get emptyValue() {
    return this.getStringAttribute('empty_value');
  }
  public set emptyValue(value: string) {
    this._emptyValue = value;
  }
  public resetEmptyValue() {
    this._emptyValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyValueInput() {
    return this._emptyValue;
  }

  // string_value - computed: true, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}
export interface CasesCaseRuleRuleHiddenConditionsNotEqualTo {
  /**
  * The left hand operand in the condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#operand_one CasesCaseRule#operand_one}
  */
  readonly operandOne?: CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne;
  /**
  * The right hand operand in the condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#operand_two CasesCaseRule#operand_two}
  */
  readonly operandTwo?: CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo;
  /**
  * The value of the outer rule if the condition evaluates to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#result CasesCaseRule#result}
  */
  readonly result?: boolean | cdktn.IResolvable;
}

export function casesCaseRuleRuleHiddenConditionsNotEqualToToTerraform(struct?: CasesCaseRuleRuleHiddenConditionsNotEqualTo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operand_one: casesCaseRuleRuleHiddenConditionsNotEqualToOperandOneToTerraform(struct!.operandOne),
    operand_two: casesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoToTerraform(struct!.operandTwo),
    result: cdktn.booleanToTerraform(struct!.result),
  }
}


export function casesCaseRuleRuleHiddenConditionsNotEqualToToHclTerraform(struct?: CasesCaseRuleRuleHiddenConditionsNotEqualTo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operand_one: {
      value: casesCaseRuleRuleHiddenConditionsNotEqualToOperandOneToHclTerraform(struct!.operandOne),
      isBlock: true,
      type: "struct",
      storageClassType: "CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne",
    },
    operand_two: {
      value: casesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoToHclTerraform(struct!.operandTwo),
      isBlock: true,
      type: "struct",
      storageClassType: "CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo",
    },
    result: {
      value: cdktn.booleanToHclTerraform(struct!.result),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CasesCaseRuleRuleHiddenConditionsNotEqualTo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operandOne?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operandOne = this._operandOne?.internalValue;
    }
    if (this._operandTwo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operandTwo = this._operandTwo?.internalValue;
    }
    if (this._result !== undefined) {
      hasAnyValues = true;
      internalValueResult.result = this._result;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasesCaseRuleRuleHiddenConditionsNotEqualTo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operandOne.internalValue = undefined;
      this._operandTwo.internalValue = undefined;
      this._result = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operandOne.internalValue = value.operandOne;
      this._operandTwo.internalValue = value.operandTwo;
      this._result = value.result;
    }
  }

  // operand_one - computed: true, optional: true, required: false
  private _operandOne = new CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference(this, "operand_one");
  public get operandOne() {
    return this._operandOne;
  }
  public putOperandOne(value: CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne) {
    this._operandOne.internalValue = value;
  }
  public resetOperandOne() {
    this._operandOne.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operandOneInput() {
    return this._operandOne.internalValue;
  }

  // operand_two - computed: true, optional: true, required: false
  private _operandTwo = new CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference(this, "operand_two");
  public get operandTwo() {
    return this._operandTwo;
  }
  public putOperandTwo(value: CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo) {
    this._operandTwo.internalValue = value;
  }
  public resetOperandTwo() {
    this._operandTwo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operandTwoInput() {
    return this._operandTwo.internalValue;
  }

  // result - computed: true, optional: true, required: false
  private _result?: boolean | cdktn.IResolvable; 
  public get result() {
    return this.getBooleanAttribute('result');
  }
  public set result(value: boolean | cdktn.IResolvable) {
    this._result = value;
  }
  public resetResult() {
    this._result = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultInput() {
    return this._result;
  }
}
export interface CasesCaseRuleRuleHiddenConditions {
  /**
  * Boolean operands for a condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#equal_to CasesCaseRule#equal_to}
  */
  readonly equalTo?: CasesCaseRuleRuleHiddenConditionsEqualTo;
  /**
  * Boolean operands for a condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#not_equal_to CasesCaseRule#not_equal_to}
  */
  readonly notEqualTo?: CasesCaseRuleRuleHiddenConditionsNotEqualTo;
}

export function casesCaseRuleRuleHiddenConditionsToTerraform(struct?: CasesCaseRuleRuleHiddenConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    equal_to: casesCaseRuleRuleHiddenConditionsEqualToToTerraform(struct!.equalTo),
    not_equal_to: casesCaseRuleRuleHiddenConditionsNotEqualToToTerraform(struct!.notEqualTo),
  }
}


export function casesCaseRuleRuleHiddenConditionsToHclTerraform(struct?: CasesCaseRuleRuleHiddenConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    equal_to: {
      value: casesCaseRuleRuleHiddenConditionsEqualToToHclTerraform(struct!.equalTo),
      isBlock: true,
      type: "struct",
      storageClassType: "CasesCaseRuleRuleHiddenConditionsEqualTo",
    },
    not_equal_to: {
      value: casesCaseRuleRuleHiddenConditionsNotEqualToToHclTerraform(struct!.notEqualTo),
      isBlock: true,
      type: "struct",
      storageClassType: "CasesCaseRuleRuleHiddenConditionsNotEqualTo",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CasesCaseRuleRuleHiddenConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CasesCaseRuleRuleHiddenConditions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._equalTo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.equalTo = this._equalTo?.internalValue;
    }
    if (this._notEqualTo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notEqualTo = this._notEqualTo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasesCaseRuleRuleHiddenConditions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._equalTo.internalValue = undefined;
      this._notEqualTo.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._equalTo.internalValue = value.equalTo;
      this._notEqualTo.internalValue = value.notEqualTo;
    }
  }

  // equal_to - computed: true, optional: true, required: false
  private _equalTo = new CasesCaseRuleRuleHiddenConditionsEqualToOutputReference(this, "equal_to");
  public get equalTo() {
    return this._equalTo;
  }
  public putEqualTo(value: CasesCaseRuleRuleHiddenConditionsEqualTo) {
    this._equalTo.internalValue = value;
  }
  public resetEqualTo() {
    this._equalTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalToInput() {
    return this._equalTo.internalValue;
  }

  // not_equal_to - computed: true, optional: true, required: false
  private _notEqualTo = new CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference(this, "not_equal_to");
  public get notEqualTo() {
    return this._notEqualTo;
  }
  public putNotEqualTo(value: CasesCaseRuleRuleHiddenConditionsNotEqualTo) {
    this._notEqualTo.internalValue = value;
  }
  public resetNotEqualTo() {
    this._notEqualTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notEqualToInput() {
    return this._notEqualTo.internalValue;
  }
}

export class CasesCaseRuleRuleHiddenConditionsList extends cdktn.ComplexList {
  public internalValue? : CasesCaseRuleRuleHiddenConditions[] | cdktn.IResolvable

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
  public get(index: number): CasesCaseRuleRuleHiddenConditionsOutputReference {
    return new CasesCaseRuleRuleHiddenConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CasesCaseRuleRuleHidden {
  /**
  * List of conditions for the hidden rule; the first condition to evaluate to true dictates the value of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#conditions CasesCaseRule#conditions}
  */
  readonly conditions?: CasesCaseRuleRuleHiddenConditions[] | cdktn.IResolvable;
  /**
  * The value of the rule (i.e. whether the field is hidden) should none of the conditions evaluate to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#default_value CasesCaseRule#default_value}
  */
  readonly defaultValue?: boolean | cdktn.IResolvable;
}

export function casesCaseRuleRuleHiddenToTerraform(struct?: CasesCaseRuleRuleHidden | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    conditions: cdktn.listMapper(casesCaseRuleRuleHiddenConditionsToTerraform, false)(struct!.conditions),
    default_value: cdktn.booleanToTerraform(struct!.defaultValue),
  }
}


export function casesCaseRuleRuleHiddenToHclTerraform(struct?: CasesCaseRuleRuleHidden | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    conditions: {
      value: cdktn.listMapperHcl(casesCaseRuleRuleHiddenConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "CasesCaseRuleRuleHiddenConditionsList",
    },
    default_value: {
      value: cdktn.booleanToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CasesCaseRuleRuleHiddenOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CasesCaseRuleRuleHidden | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasesCaseRuleRuleHidden | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditions.internalValue = undefined;
      this._defaultValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditions.internalValue = value.conditions;
      this._defaultValue = value.defaultValue;
    }
  }

  // conditions - computed: true, optional: true, required: false
  private _conditions = new CasesCaseRuleRuleHiddenConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: CasesCaseRuleRuleHiddenConditions[] | cdktn.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: boolean | cdktn.IResolvable; 
  public get defaultValue() {
    return this.getBooleanAttribute('default_value');
  }
  public set defaultValue(value: boolean | cdktn.IResolvable) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }
}
export interface CasesCaseRuleRuleRequiredConditionsEqualToOperandOne {
  /**
  * The field ID this operand should take the value of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#field_id CasesCaseRule#field_id}
  */
  readonly fieldId?: string;
}

export function casesCaseRuleRuleRequiredConditionsEqualToOperandOneToTerraform(struct?: CasesCaseRuleRuleRequiredConditionsEqualToOperandOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field_id: cdktn.stringToTerraform(struct!.fieldId),
  }
}


export function casesCaseRuleRuleRequiredConditionsEqualToOperandOneToHclTerraform(struct?: CasesCaseRuleRuleRequiredConditionsEqualToOperandOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field_id: {
      value: cdktn.stringToHclTerraform(struct!.fieldId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CasesCaseRuleRuleRequiredConditionsEqualToOperandOne | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldId = this._fieldId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasesCaseRuleRuleRequiredConditionsEqualToOperandOne | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldId = value.fieldId;
    }
  }

  // field_id - computed: true, optional: true, required: false
  private _fieldId?: string; 
  public get fieldId() {
    return this.getStringAttribute('field_id');
  }
  public set fieldId(value: string) {
    this._fieldId = value;
  }
  public resetFieldId() {
    this._fieldId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldIdInput() {
    return this._fieldId;
  }
}
export interface CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo {
  /**
  * A boolean value to compare against the field value in the condition evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#boolean_value CasesCaseRule#boolean_value}
  */
  readonly booleanValue?: boolean | cdktn.IResolvable;
  /**
  * A numeric value to compare against the field value in the condition evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#double_value CasesCaseRule#double_value}
  */
  readonly doubleValue?: number;
  /**
  * An empty operand value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#empty_value CasesCaseRule#empty_value}
  */
  readonly emptyValue?: string;
  /**
  * A string value to compare against the field value in the condition evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#string_value CasesCaseRule#string_value}
  */
  readonly stringValue?: string;
}

export function casesCaseRuleRuleRequiredConditionsEqualToOperandTwoToTerraform(struct?: CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    boolean_value: cdktn.booleanToTerraform(struct!.booleanValue),
    double_value: cdktn.numberToTerraform(struct!.doubleValue),
    empty_value: cdktn.stringToTerraform(struct!.emptyValue),
    string_value: cdktn.stringToTerraform(struct!.stringValue),
  }
}


export function casesCaseRuleRuleRequiredConditionsEqualToOperandTwoToHclTerraform(struct?: CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    boolean_value: {
      value: cdktn.booleanToHclTerraform(struct!.booleanValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    double_value: {
      value: cdktn.numberToHclTerraform(struct!.doubleValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    empty_value: {
      value: cdktn.stringToHclTerraform(struct!.emptyValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_value: {
      value: cdktn.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanValue = this._booleanValue;
    }
    if (this._doubleValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleValue = this._doubleValue;
    }
    if (this._emptyValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyValue = this._emptyValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._booleanValue = undefined;
      this._doubleValue = undefined;
      this._emptyValue = undefined;
      this._stringValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._booleanValue = value.booleanValue;
      this._doubleValue = value.doubleValue;
      this._emptyValue = value.emptyValue;
      this._stringValue = value.stringValue;
    }
  }

  // boolean_value - computed: true, optional: true, required: false
  private _booleanValue?: boolean | cdktn.IResolvable; 
  public get booleanValue() {
    return this.getBooleanAttribute('boolean_value');
  }
  public set booleanValue(value: boolean | cdktn.IResolvable) {
    this._booleanValue = value;
  }
  public resetBooleanValue() {
    this._booleanValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanValueInput() {
    return this._booleanValue;
  }

  // double_value - computed: true, optional: true, required: false
  private _doubleValue?: number; 
  public get doubleValue() {
    return this.getNumberAttribute('double_value');
  }
  public set doubleValue(value: number) {
    this._doubleValue = value;
  }
  public resetDoubleValue() {
    this._doubleValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleValueInput() {
    return this._doubleValue;
  }

  // empty_value - computed: true, optional: true, required: false
  private _emptyValue?: string; 
  public get emptyValue() {
    return this.getStringAttribute('empty_value');
  }
  public set emptyValue(value: string) {
    this._emptyValue = value;
  }
  public resetEmptyValue() {
    this._emptyValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyValueInput() {
    return this._emptyValue;
  }

  // string_value - computed: true, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}
export interface CasesCaseRuleRuleRequiredConditionsEqualTo {
  /**
  * The left hand operand in the condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#operand_one CasesCaseRule#operand_one}
  */
  readonly operandOne?: CasesCaseRuleRuleRequiredConditionsEqualToOperandOne;
  /**
  * The right hand operand in the condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#operand_two CasesCaseRule#operand_two}
  */
  readonly operandTwo?: CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo;
  /**
  * The value of the outer rule if the condition evaluates to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#result CasesCaseRule#result}
  */
  readonly result?: boolean | cdktn.IResolvable;
}

export function casesCaseRuleRuleRequiredConditionsEqualToToTerraform(struct?: CasesCaseRuleRuleRequiredConditionsEqualTo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operand_one: casesCaseRuleRuleRequiredConditionsEqualToOperandOneToTerraform(struct!.operandOne),
    operand_two: casesCaseRuleRuleRequiredConditionsEqualToOperandTwoToTerraform(struct!.operandTwo),
    result: cdktn.booleanToTerraform(struct!.result),
  }
}


export function casesCaseRuleRuleRequiredConditionsEqualToToHclTerraform(struct?: CasesCaseRuleRuleRequiredConditionsEqualTo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operand_one: {
      value: casesCaseRuleRuleRequiredConditionsEqualToOperandOneToHclTerraform(struct!.operandOne),
      isBlock: true,
      type: "struct",
      storageClassType: "CasesCaseRuleRuleRequiredConditionsEqualToOperandOne",
    },
    operand_two: {
      value: casesCaseRuleRuleRequiredConditionsEqualToOperandTwoToHclTerraform(struct!.operandTwo),
      isBlock: true,
      type: "struct",
      storageClassType: "CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo",
    },
    result: {
      value: cdktn.booleanToHclTerraform(struct!.result),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CasesCaseRuleRuleRequiredConditionsEqualToOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CasesCaseRuleRuleRequiredConditionsEqualTo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operandOne?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operandOne = this._operandOne?.internalValue;
    }
    if (this._operandTwo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operandTwo = this._operandTwo?.internalValue;
    }
    if (this._result !== undefined) {
      hasAnyValues = true;
      internalValueResult.result = this._result;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasesCaseRuleRuleRequiredConditionsEqualTo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operandOne.internalValue = undefined;
      this._operandTwo.internalValue = undefined;
      this._result = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operandOne.internalValue = value.operandOne;
      this._operandTwo.internalValue = value.operandTwo;
      this._result = value.result;
    }
  }

  // operand_one - computed: true, optional: true, required: false
  private _operandOne = new CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference(this, "operand_one");
  public get operandOne() {
    return this._operandOne;
  }
  public putOperandOne(value: CasesCaseRuleRuleRequiredConditionsEqualToOperandOne) {
    this._operandOne.internalValue = value;
  }
  public resetOperandOne() {
    this._operandOne.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operandOneInput() {
    return this._operandOne.internalValue;
  }

  // operand_two - computed: true, optional: true, required: false
  private _operandTwo = new CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference(this, "operand_two");
  public get operandTwo() {
    return this._operandTwo;
  }
  public putOperandTwo(value: CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo) {
    this._operandTwo.internalValue = value;
  }
  public resetOperandTwo() {
    this._operandTwo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operandTwoInput() {
    return this._operandTwo.internalValue;
  }

  // result - computed: true, optional: true, required: false
  private _result?: boolean | cdktn.IResolvable; 
  public get result() {
    return this.getBooleanAttribute('result');
  }
  public set result(value: boolean | cdktn.IResolvable) {
    this._result = value;
  }
  public resetResult() {
    this._result = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultInput() {
    return this._result;
  }
}
export interface CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne {
  /**
  * The field ID this operand should take the value of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#field_id CasesCaseRule#field_id}
  */
  readonly fieldId?: string;
}

export function casesCaseRuleRuleRequiredConditionsNotEqualToOperandOneToTerraform(struct?: CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field_id: cdktn.stringToTerraform(struct!.fieldId),
  }
}


export function casesCaseRuleRuleRequiredConditionsNotEqualToOperandOneToHclTerraform(struct?: CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field_id: {
      value: cdktn.stringToHclTerraform(struct!.fieldId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldId = this._fieldId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldId = value.fieldId;
    }
  }

  // field_id - computed: true, optional: true, required: false
  private _fieldId?: string; 
  public get fieldId() {
    return this.getStringAttribute('field_id');
  }
  public set fieldId(value: string) {
    this._fieldId = value;
  }
  public resetFieldId() {
    this._fieldId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldIdInput() {
    return this._fieldId;
  }
}
export interface CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo {
  /**
  * A boolean value to compare against the field value in the condition evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#boolean_value CasesCaseRule#boolean_value}
  */
  readonly booleanValue?: boolean | cdktn.IResolvable;
  /**
  * A numeric value to compare against the field value in the condition evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#double_value CasesCaseRule#double_value}
  */
  readonly doubleValue?: number;
  /**
  * An empty operand value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#empty_value CasesCaseRule#empty_value}
  */
  readonly emptyValue?: string;
  /**
  * A string value to compare against the field value in the condition evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#string_value CasesCaseRule#string_value}
  */
  readonly stringValue?: string;
}

export function casesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoToTerraform(struct?: CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    boolean_value: cdktn.booleanToTerraform(struct!.booleanValue),
    double_value: cdktn.numberToTerraform(struct!.doubleValue),
    empty_value: cdktn.stringToTerraform(struct!.emptyValue),
    string_value: cdktn.stringToTerraform(struct!.stringValue),
  }
}


export function casesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoToHclTerraform(struct?: CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    boolean_value: {
      value: cdktn.booleanToHclTerraform(struct!.booleanValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    double_value: {
      value: cdktn.numberToHclTerraform(struct!.doubleValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    empty_value: {
      value: cdktn.stringToHclTerraform(struct!.emptyValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_value: {
      value: cdktn.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanValue = this._booleanValue;
    }
    if (this._doubleValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleValue = this._doubleValue;
    }
    if (this._emptyValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyValue = this._emptyValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._booleanValue = undefined;
      this._doubleValue = undefined;
      this._emptyValue = undefined;
      this._stringValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._booleanValue = value.booleanValue;
      this._doubleValue = value.doubleValue;
      this._emptyValue = value.emptyValue;
      this._stringValue = value.stringValue;
    }
  }

  // boolean_value - computed: true, optional: true, required: false
  private _booleanValue?: boolean | cdktn.IResolvable; 
  public get booleanValue() {
    return this.getBooleanAttribute('boolean_value');
  }
  public set booleanValue(value: boolean | cdktn.IResolvable) {
    this._booleanValue = value;
  }
  public resetBooleanValue() {
    this._booleanValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanValueInput() {
    return this._booleanValue;
  }

  // double_value - computed: true, optional: true, required: false
  private _doubleValue?: number; 
  public get doubleValue() {
    return this.getNumberAttribute('double_value');
  }
  public set doubleValue(value: number) {
    this._doubleValue = value;
  }
  public resetDoubleValue() {
    this._doubleValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleValueInput() {
    return this._doubleValue;
  }

  // empty_value - computed: true, optional: true, required: false
  private _emptyValue?: string; 
  public get emptyValue() {
    return this.getStringAttribute('empty_value');
  }
  public set emptyValue(value: string) {
    this._emptyValue = value;
  }
  public resetEmptyValue() {
    this._emptyValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyValueInput() {
    return this._emptyValue;
  }

  // string_value - computed: true, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}
export interface CasesCaseRuleRuleRequiredConditionsNotEqualTo {
  /**
  * The left hand operand in the condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#operand_one CasesCaseRule#operand_one}
  */
  readonly operandOne?: CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne;
  /**
  * The right hand operand in the condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#operand_two CasesCaseRule#operand_two}
  */
  readonly operandTwo?: CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo;
  /**
  * The value of the outer rule if the condition evaluates to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#result CasesCaseRule#result}
  */
  readonly result?: boolean | cdktn.IResolvable;
}

export function casesCaseRuleRuleRequiredConditionsNotEqualToToTerraform(struct?: CasesCaseRuleRuleRequiredConditionsNotEqualTo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operand_one: casesCaseRuleRuleRequiredConditionsNotEqualToOperandOneToTerraform(struct!.operandOne),
    operand_two: casesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoToTerraform(struct!.operandTwo),
    result: cdktn.booleanToTerraform(struct!.result),
  }
}


export function casesCaseRuleRuleRequiredConditionsNotEqualToToHclTerraform(struct?: CasesCaseRuleRuleRequiredConditionsNotEqualTo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operand_one: {
      value: casesCaseRuleRuleRequiredConditionsNotEqualToOperandOneToHclTerraform(struct!.operandOne),
      isBlock: true,
      type: "struct",
      storageClassType: "CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne",
    },
    operand_two: {
      value: casesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoToHclTerraform(struct!.operandTwo),
      isBlock: true,
      type: "struct",
      storageClassType: "CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo",
    },
    result: {
      value: cdktn.booleanToHclTerraform(struct!.result),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CasesCaseRuleRuleRequiredConditionsNotEqualTo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operandOne?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operandOne = this._operandOne?.internalValue;
    }
    if (this._operandTwo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operandTwo = this._operandTwo?.internalValue;
    }
    if (this._result !== undefined) {
      hasAnyValues = true;
      internalValueResult.result = this._result;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasesCaseRuleRuleRequiredConditionsNotEqualTo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operandOne.internalValue = undefined;
      this._operandTwo.internalValue = undefined;
      this._result = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operandOne.internalValue = value.operandOne;
      this._operandTwo.internalValue = value.operandTwo;
      this._result = value.result;
    }
  }

  // operand_one - computed: true, optional: true, required: false
  private _operandOne = new CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference(this, "operand_one");
  public get operandOne() {
    return this._operandOne;
  }
  public putOperandOne(value: CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne) {
    this._operandOne.internalValue = value;
  }
  public resetOperandOne() {
    this._operandOne.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operandOneInput() {
    return this._operandOne.internalValue;
  }

  // operand_two - computed: true, optional: true, required: false
  private _operandTwo = new CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference(this, "operand_two");
  public get operandTwo() {
    return this._operandTwo;
  }
  public putOperandTwo(value: CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo) {
    this._operandTwo.internalValue = value;
  }
  public resetOperandTwo() {
    this._operandTwo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operandTwoInput() {
    return this._operandTwo.internalValue;
  }

  // result - computed: true, optional: true, required: false
  private _result?: boolean | cdktn.IResolvable; 
  public get result() {
    return this.getBooleanAttribute('result');
  }
  public set result(value: boolean | cdktn.IResolvable) {
    this._result = value;
  }
  public resetResult() {
    this._result = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultInput() {
    return this._result;
  }
}
export interface CasesCaseRuleRuleRequiredConditions {
  /**
  * Boolean operands for a condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#equal_to CasesCaseRule#equal_to}
  */
  readonly equalTo?: CasesCaseRuleRuleRequiredConditionsEqualTo;
  /**
  * Boolean operands for a condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#not_equal_to CasesCaseRule#not_equal_to}
  */
  readonly notEqualTo?: CasesCaseRuleRuleRequiredConditionsNotEqualTo;
}

export function casesCaseRuleRuleRequiredConditionsToTerraform(struct?: CasesCaseRuleRuleRequiredConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    equal_to: casesCaseRuleRuleRequiredConditionsEqualToToTerraform(struct!.equalTo),
    not_equal_to: casesCaseRuleRuleRequiredConditionsNotEqualToToTerraform(struct!.notEqualTo),
  }
}


export function casesCaseRuleRuleRequiredConditionsToHclTerraform(struct?: CasesCaseRuleRuleRequiredConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    equal_to: {
      value: casesCaseRuleRuleRequiredConditionsEqualToToHclTerraform(struct!.equalTo),
      isBlock: true,
      type: "struct",
      storageClassType: "CasesCaseRuleRuleRequiredConditionsEqualTo",
    },
    not_equal_to: {
      value: casesCaseRuleRuleRequiredConditionsNotEqualToToHclTerraform(struct!.notEqualTo),
      isBlock: true,
      type: "struct",
      storageClassType: "CasesCaseRuleRuleRequiredConditionsNotEqualTo",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CasesCaseRuleRuleRequiredConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CasesCaseRuleRuleRequiredConditions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._equalTo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.equalTo = this._equalTo?.internalValue;
    }
    if (this._notEqualTo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notEqualTo = this._notEqualTo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasesCaseRuleRuleRequiredConditions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._equalTo.internalValue = undefined;
      this._notEqualTo.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._equalTo.internalValue = value.equalTo;
      this._notEqualTo.internalValue = value.notEqualTo;
    }
  }

  // equal_to - computed: true, optional: true, required: false
  private _equalTo = new CasesCaseRuleRuleRequiredConditionsEqualToOutputReference(this, "equal_to");
  public get equalTo() {
    return this._equalTo;
  }
  public putEqualTo(value: CasesCaseRuleRuleRequiredConditionsEqualTo) {
    this._equalTo.internalValue = value;
  }
  public resetEqualTo() {
    this._equalTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalToInput() {
    return this._equalTo.internalValue;
  }

  // not_equal_to - computed: true, optional: true, required: false
  private _notEqualTo = new CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference(this, "not_equal_to");
  public get notEqualTo() {
    return this._notEqualTo;
  }
  public putNotEqualTo(value: CasesCaseRuleRuleRequiredConditionsNotEqualTo) {
    this._notEqualTo.internalValue = value;
  }
  public resetNotEqualTo() {
    this._notEqualTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notEqualToInput() {
    return this._notEqualTo.internalValue;
  }
}

export class CasesCaseRuleRuleRequiredConditionsList extends cdktn.ComplexList {
  public internalValue? : CasesCaseRuleRuleRequiredConditions[] | cdktn.IResolvable

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
  public get(index: number): CasesCaseRuleRuleRequiredConditionsOutputReference {
    return new CasesCaseRuleRuleRequiredConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CasesCaseRuleRuleRequired {
  /**
  * An ordered list of boolean conditions that determine when the field should be required. Conditions are evaluated in order, and the first condition that evaluates to true determines whether the field is required, overriding the default value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#conditions CasesCaseRule#conditions}
  */
  readonly conditions?: CasesCaseRuleRuleRequiredConditions[] | cdktn.IResolvable;
  /**
  * The default required state for the field when none of the specified conditions are met. If true, the field is required by default; if false, the field is optional by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#default_value CasesCaseRule#default_value}
  */
  readonly defaultValue?: boolean | cdktn.IResolvable;
}

export function casesCaseRuleRuleRequiredToTerraform(struct?: CasesCaseRuleRuleRequired | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    conditions: cdktn.listMapper(casesCaseRuleRuleRequiredConditionsToTerraform, false)(struct!.conditions),
    default_value: cdktn.booleanToTerraform(struct!.defaultValue),
  }
}


export function casesCaseRuleRuleRequiredToHclTerraform(struct?: CasesCaseRuleRuleRequired | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    conditions: {
      value: cdktn.listMapperHcl(casesCaseRuleRuleRequiredConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "CasesCaseRuleRuleRequiredConditionsList",
    },
    default_value: {
      value: cdktn.booleanToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CasesCaseRuleRuleRequiredOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CasesCaseRuleRuleRequired | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasesCaseRuleRuleRequired | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditions.internalValue = undefined;
      this._defaultValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditions.internalValue = value.conditions;
      this._defaultValue = value.defaultValue;
    }
  }

  // conditions - computed: true, optional: true, required: false
  private _conditions = new CasesCaseRuleRuleRequiredConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: CasesCaseRuleRuleRequiredConditions[] | cdktn.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: boolean | cdktn.IResolvable; 
  public get defaultValue() {
    return this.getBooleanAttribute('default_value');
  }
  public set defaultValue(value: boolean | cdktn.IResolvable) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }
}
export interface CasesCaseRuleRule {
  /**
  * Hidden rule type, used to indicate whether a field is hidden
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#hidden CasesCaseRule#hidden}
  */
  readonly hidden?: CasesCaseRuleRuleHidden;
  /**
  * A required rule type, used to indicate whether a field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#required CasesCaseRule#required}
  */
  readonly required?: CasesCaseRuleRuleRequired;
}

export function casesCaseRuleRuleToTerraform(struct?: CasesCaseRuleRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hidden: casesCaseRuleRuleHiddenToTerraform(struct!.hidden),
    required: casesCaseRuleRuleRequiredToTerraform(struct!.required),
  }
}


export function casesCaseRuleRuleToHclTerraform(struct?: CasesCaseRuleRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hidden: {
      value: casesCaseRuleRuleHiddenToHclTerraform(struct!.hidden),
      isBlock: true,
      type: "struct",
      storageClassType: "CasesCaseRuleRuleHidden",
    },
    required: {
      value: casesCaseRuleRuleRequiredToHclTerraform(struct!.required),
      isBlock: true,
      type: "struct",
      storageClassType: "CasesCaseRuleRuleRequired",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CasesCaseRuleRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CasesCaseRuleRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hidden?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hidden = this._hidden?.internalValue;
    }
    if (this._required?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasesCaseRuleRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hidden.internalValue = undefined;
      this._required.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hidden.internalValue = value.hidden;
      this._required.internalValue = value.required;
    }
  }

  // hidden - computed: true, optional: true, required: false
  private _hidden = new CasesCaseRuleRuleHiddenOutputReference(this, "hidden");
  public get hidden() {
    return this._hidden;
  }
  public putHidden(value: CasesCaseRuleRuleHidden) {
    this._hidden.internalValue = value;
  }
  public resetHidden() {
    this._hidden.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenInput() {
    return this._hidden.internalValue;
  }

  // required - computed: true, optional: true, required: false
  private _required = new CasesCaseRuleRuleRequiredOutputReference(this, "required");
  public get required() {
    return this._required;
  }
  public putRequired(value: CasesCaseRuleRuleRequired) {
    this._required.internalValue = value;
  }
  public resetRequired() {
    this._required.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required.internalValue;
  }
}
export interface CasesCaseRuleTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#key CasesCaseRule#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#value CasesCaseRule#value}
  */
  readonly value?: string;
}

export function casesCaseRuleTagsToTerraform(struct?: CasesCaseRuleTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function casesCaseRuleTagsToHclTerraform(struct?: CasesCaseRuleTags | cdktn.IResolvable): any {
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

export class CasesCaseRuleTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CasesCaseRuleTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CasesCaseRuleTags | cdktn.IResolvable | undefined) {
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

export class CasesCaseRuleTagsList extends cdktn.ComplexList {
  public internalValue? : CasesCaseRuleTags[] | cdktn.IResolvable

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
  public get(index: number): CasesCaseRuleTagsOutputReference {
    return new CasesCaseRuleTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule awscc_cases_case_rule}
*/
export class CasesCaseRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cases_case_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CasesCaseRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CasesCaseRule to import
  * @param importFromId The id of the existing CasesCaseRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CasesCaseRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cases_case_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_case_rule awscc_cases_case_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CasesCaseRuleConfig
  */
  public constructor(scope: Construct, id: string, config: CasesCaseRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cases_case_rule',
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
    this._description = config.description;
    this._domainId = config.domainId;
    this._name = config.name;
    this._rule.internalValue = config.rule;
    this._tags.internalValue = config.tags;
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

  // domain_id - computed: true, optional: true, required: false
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  public resetDomainId() {
    this._domainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new CasesCaseRuleRuleOutputReference(this, "rule");
  public get rule() {
    return this._rule;
  }
  public putRule(value: CasesCaseRuleRule) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new CasesCaseRuleTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: CasesCaseRuleTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      domain_id: cdktn.stringToTerraform(this._domainId),
      name: cdktn.stringToTerraform(this._name),
      rule: casesCaseRuleRuleToTerraform(this._rule.internalValue),
      tags: cdktn.listMapper(casesCaseRuleTagsToTerraform, false)(this._tags.internalValue),
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
      domain_id: {
        value: cdktn.stringToHclTerraform(this._domainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: casesCaseRuleRuleToHclTerraform(this._rule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CasesCaseRuleRule",
      },
      tags: {
        value: cdktn.listMapperHcl(casesCaseRuleTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CasesCaseRuleTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
