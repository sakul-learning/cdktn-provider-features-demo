// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/databrew_ruleset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DatabrewRulesetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Description of the Ruleset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/databrew_ruleset#description DatabrewRuleset#description}
  */
  readonly description?: string;
  /**
  * Name of the Ruleset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/databrew_ruleset#name DatabrewRuleset#name}
  */
  readonly name: string;
  /**
  * List of the data quality rules in the ruleset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/databrew_ruleset#rules DatabrewRuleset#rules}
  */
  readonly rules: DatabrewRulesetRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/databrew_ruleset#tags DatabrewRuleset#tags}
  */
  readonly tags?: DatabrewRulesetTags[] | cdktn.IResolvable;
  /**
  * Arn of the target resource (dataset) to apply the ruleset to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/databrew_ruleset#target_arn DatabrewRuleset#target_arn}
  */
  readonly targetArn: string;
}
export interface DatabrewRulesetRulesColumnSelectors {
  /**
  * The name of a column from a dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/databrew_ruleset#name DatabrewRuleset#name}
  */
  readonly name?: string;
  /**
  * A regular expression for selecting a column from a dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/databrew_ruleset#regex DatabrewRuleset#regex}
  */
  readonly regex?: string;
}

export function databrewRulesetRulesColumnSelectorsToTerraform(struct?: DatabrewRulesetRulesColumnSelectors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    regex: cdktn.stringToTerraform(struct!.regex),
  }
}


export function databrewRulesetRulesColumnSelectorsToHclTerraform(struct?: DatabrewRulesetRulesColumnSelectors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktn.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewRulesetRulesColumnSelectorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatabrewRulesetRulesColumnSelectors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewRulesetRulesColumnSelectors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // regex - computed: true, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}

export class DatabrewRulesetRulesColumnSelectorsList extends cdktn.ComplexList {
  public internalValue? : DatabrewRulesetRulesColumnSelectors[] | cdktn.IResolvable

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
  public get(index: number): DatabrewRulesetRulesColumnSelectorsOutputReference {
    return new DatabrewRulesetRulesColumnSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabrewRulesetRulesSubstitutionMap {
  /**
  * Value or column name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/databrew_ruleset#value DatabrewRuleset#value}
  */
  readonly value?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/databrew_ruleset#value_reference DatabrewRuleset#value_reference}
  */
  readonly valueReference?: string;
}

export function databrewRulesetRulesSubstitutionMapToTerraform(struct?: DatabrewRulesetRulesSubstitutionMap | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
    value_reference: cdktn.stringToTerraform(struct!.valueReference),
  }
}


export function databrewRulesetRulesSubstitutionMapToHclTerraform(struct?: DatabrewRulesetRulesSubstitutionMap | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_reference: {
      value: cdktn.stringToHclTerraform(struct!.valueReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewRulesetRulesSubstitutionMapOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatabrewRulesetRulesSubstitutionMap | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueReference = this._valueReference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewRulesetRulesSubstitutionMap | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
      this._valueReference = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
      this._valueReference = value.valueReference;
    }
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

  // value_reference - computed: true, optional: true, required: false
  private _valueReference?: string; 
  public get valueReference() {
    return this.getStringAttribute('value_reference');
  }
  public set valueReference(value: string) {
    this._valueReference = value;
  }
  public resetValueReference() {
    this._valueReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueReferenceInput() {
    return this._valueReference;
  }
}

export class DatabrewRulesetRulesSubstitutionMapList extends cdktn.ComplexList {
  public internalValue? : DatabrewRulesetRulesSubstitutionMap[] | cdktn.IResolvable

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
  public get(index: number): DatabrewRulesetRulesSubstitutionMapOutputReference {
    return new DatabrewRulesetRulesSubstitutionMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabrewRulesetRulesThreshold {
  /**
  * Threshold type for a rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/databrew_ruleset#type DatabrewRuleset#type}
  */
  readonly type?: string;
  /**
  * Threshold unit for a rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/databrew_ruleset#unit DatabrewRuleset#unit}
  */
  readonly unit?: string;
  /**
  * Threshold value for a rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/databrew_ruleset#value DatabrewRuleset#value}
  */
  readonly value?: number;
}

export function databrewRulesetRulesThresholdToTerraform(struct?: DatabrewRulesetRulesThreshold | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function databrewRulesetRulesThresholdToHclTerraform(struct?: DatabrewRulesetRulesThreshold | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewRulesetRulesThresholdOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabrewRulesetRulesThreshold | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewRulesetRulesThreshold | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: true, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface DatabrewRulesetRules {
  /**
  * Expression with rule conditions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/databrew_ruleset#check_expression DatabrewRuleset#check_expression}
  */
  readonly checkExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/databrew_ruleset#column_selectors DatabrewRuleset#column_selectors}
  */
  readonly columnSelectors?: DatabrewRulesetRulesColumnSelectors[] | cdktn.IResolvable;
  /**
  * Boolean value to disable/enable a rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/databrew_ruleset#disabled DatabrewRuleset#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * Name of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/databrew_ruleset#name DatabrewRuleset#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/databrew_ruleset#substitution_map DatabrewRuleset#substitution_map}
  */
  readonly substitutionMap?: DatabrewRulesetRulesSubstitutionMap[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/databrew_ruleset#threshold DatabrewRuleset#threshold}
  */
  readonly threshold?: DatabrewRulesetRulesThreshold;
}

export function databrewRulesetRulesToTerraform(struct?: DatabrewRulesetRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    check_expression: cdktn.stringToTerraform(struct!.checkExpression),
    column_selectors: cdktn.listMapper(databrewRulesetRulesColumnSelectorsToTerraform, false)(struct!.columnSelectors),
    disabled: cdktn.booleanToTerraform(struct!.disabled),
    name: cdktn.stringToTerraform(struct!.name),
    substitution_map: cdktn.listMapper(databrewRulesetRulesSubstitutionMapToTerraform, false)(struct!.substitutionMap),
    threshold: databrewRulesetRulesThresholdToTerraform(struct!.threshold),
  }
}


export function databrewRulesetRulesToHclTerraform(struct?: DatabrewRulesetRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    check_expression: {
      value: cdktn.stringToHclTerraform(struct!.checkExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column_selectors: {
      value: cdktn.listMapperHcl(databrewRulesetRulesColumnSelectorsToHclTerraform, false)(struct!.columnSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "DatabrewRulesetRulesColumnSelectorsList",
    },
    disabled: {
      value: cdktn.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    substitution_map: {
      value: cdktn.listMapperHcl(databrewRulesetRulesSubstitutionMapToHclTerraform, false)(struct!.substitutionMap),
      isBlock: true,
      type: "list",
      storageClassType: "DatabrewRulesetRulesSubstitutionMapList",
    },
    threshold: {
      value: databrewRulesetRulesThresholdToHclTerraform(struct!.threshold),
      isBlock: true,
      type: "struct",
      storageClassType: "DatabrewRulesetRulesThreshold",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewRulesetRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatabrewRulesetRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkExpression = this._checkExpression;
    }
    if (this._columnSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnSelectors = this._columnSelectors?.internalValue;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._substitutionMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.substitutionMap = this._substitutionMap?.internalValue;
    }
    if (this._threshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewRulesetRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkExpression = undefined;
      this._columnSelectors.internalValue = undefined;
      this._disabled = undefined;
      this._name = undefined;
      this._substitutionMap.internalValue = undefined;
      this._threshold.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkExpression = value.checkExpression;
      this._columnSelectors.internalValue = value.columnSelectors;
      this._disabled = value.disabled;
      this._name = value.name;
      this._substitutionMap.internalValue = value.substitutionMap;
      this._threshold.internalValue = value.threshold;
    }
  }

  // check_expression - computed: false, optional: false, required: true
  private _checkExpression?: string; 
  public get checkExpression() {
    return this.getStringAttribute('check_expression');
  }
  public set checkExpression(value: string) {
    this._checkExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checkExpressionInput() {
    return this._checkExpression;
  }

  // column_selectors - computed: true, optional: true, required: false
  private _columnSelectors = new DatabrewRulesetRulesColumnSelectorsList(this, "column_selectors", false);
  public get columnSelectors() {
    return this._columnSelectors;
  }
  public putColumnSelectors(value: DatabrewRulesetRulesColumnSelectors[] | cdktn.IResolvable) {
    this._columnSelectors.internalValue = value;
  }
  public resetColumnSelectors() {
    this._columnSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnSelectorsInput() {
    return this._columnSelectors.internalValue;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktn.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktn.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // substitution_map - computed: true, optional: true, required: false
  private _substitutionMap = new DatabrewRulesetRulesSubstitutionMapList(this, "substitution_map", false);
  public get substitutionMap() {
    return this._substitutionMap;
  }
  public putSubstitutionMap(value: DatabrewRulesetRulesSubstitutionMap[] | cdktn.IResolvable) {
    this._substitutionMap.internalValue = value;
  }
  public resetSubstitutionMap() {
    this._substitutionMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substitutionMapInput() {
    return this._substitutionMap.internalValue;
  }

  // threshold - computed: true, optional: true, required: false
  private _threshold = new DatabrewRulesetRulesThresholdOutputReference(this, "threshold");
  public get threshold() {
    return this._threshold;
  }
  public putThreshold(value: DatabrewRulesetRulesThreshold) {
    this._threshold.internalValue = value;
  }
  public resetThreshold() {
    this._threshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold.internalValue;
  }
}

export class DatabrewRulesetRulesList extends cdktn.ComplexList {
  public internalValue? : DatabrewRulesetRules[] | cdktn.IResolvable

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
  public get(index: number): DatabrewRulesetRulesOutputReference {
    return new DatabrewRulesetRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabrewRulesetTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/databrew_ruleset#key DatabrewRuleset#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/databrew_ruleset#value DatabrewRuleset#value}
  */
  readonly value?: string;
}

export function databrewRulesetTagsToTerraform(struct?: DatabrewRulesetTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function databrewRulesetTagsToHclTerraform(struct?: DatabrewRulesetTags | cdktn.IResolvable): any {
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

export class DatabrewRulesetTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatabrewRulesetTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DatabrewRulesetTags | cdktn.IResolvable | undefined) {
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

export class DatabrewRulesetTagsList extends cdktn.ComplexList {
  public internalValue? : DatabrewRulesetTags[] | cdktn.IResolvable

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
  public get(index: number): DatabrewRulesetTagsOutputReference {
    return new DatabrewRulesetTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/databrew_ruleset awscc_databrew_ruleset}
*/
export class DatabrewRuleset extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_databrew_ruleset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DatabrewRuleset resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabrewRuleset to import
  * @param importFromId The id of the existing DatabrewRuleset that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/databrew_ruleset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabrewRuleset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_databrew_ruleset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/databrew_ruleset awscc_databrew_ruleset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabrewRulesetConfig
  */
  public constructor(scope: Construct, id: string, config: DatabrewRulesetConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_databrew_ruleset',
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
    this._name = config.name;
    this._rules.internalValue = config.rules;
    this._tags.internalValue = config.tags;
    this._targetArn = config.targetArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // rules - computed: false, optional: false, required: true
  private _rules = new DatabrewRulesetRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DatabrewRulesetRules[] | cdktn.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new DatabrewRulesetTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DatabrewRulesetTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // target_arn - computed: false, optional: false, required: true
  private _targetArn?: string; 
  public get targetArn() {
    return this.getStringAttribute('target_arn');
  }
  public set targetArn(value: string) {
    this._targetArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetArnInput() {
    return this._targetArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      name: cdktn.stringToTerraform(this._name),
      rules: cdktn.listMapper(databrewRulesetRulesToTerraform, false)(this._rules.internalValue),
      tags: cdktn.listMapper(databrewRulesetTagsToTerraform, false)(this._tags.internalValue),
      target_arn: cdktn.stringToTerraform(this._targetArn),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktn.listMapperHcl(databrewRulesetRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabrewRulesetRulesList",
      },
      tags: {
        value: cdktn.listMapperHcl(databrewRulesetTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabrewRulesetTagsList",
      },
      target_arn: {
        value: cdktn.stringToHclTerraform(this._targetArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
