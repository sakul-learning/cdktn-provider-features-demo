// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/b2bi_transformer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccB2BiTransformerConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/b2bi_transformer#id DataAwsccB2BiTransformer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccB2BiTransformerEdiTypeX12Details {
}

export function dataAwsccB2BiTransformerEdiTypeX12DetailsToTerraform(struct?: DataAwsccB2BiTransformerEdiTypeX12Details): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccB2BiTransformerEdiTypeX12DetailsToHclTerraform(struct?: DataAwsccB2BiTransformerEdiTypeX12Details): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccB2BiTransformerEdiTypeX12Details | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccB2BiTransformerEdiTypeX12Details | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // transaction_set - computed: true, optional: false, required: false
  public get transactionSet() {
    return this.getStringAttribute('transaction_set');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface DataAwsccB2BiTransformerEdiType {
}

export function dataAwsccB2BiTransformerEdiTypeToTerraform(struct?: DataAwsccB2BiTransformerEdiType): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccB2BiTransformerEdiTypeToHclTerraform(struct?: DataAwsccB2BiTransformerEdiType): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccB2BiTransformerEdiTypeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccB2BiTransformerEdiType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccB2BiTransformerEdiType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // x12_details - computed: true, optional: false, required: false
  private _x12Details = new DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference(this, "x12_details");
  public get x12Details() {
    return this._x12Details;
  }
}
export interface DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptions {
}

export function dataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsToTerraform(struct?: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsToHclTerraform(struct?: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // split_by - computed: true, optional: false, required: false
  public get splitBy() {
    return this.getStringAttribute('split_by');
  }
}
export interface DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule {
}

export function dataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleToTerraform(struct?: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleToHclTerraform(struct?: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // codes_to_add - computed: true, optional: false, required: false
  public get codesToAdd() {
    return this.getListAttribute('codes_to_add');
  }

  // codes_to_remove - computed: true, optional: false, required: false
  public get codesToRemove() {
    return this.getListAttribute('codes_to_remove');
  }

  // element_id - computed: true, optional: false, required: false
  public get elementId() {
    return this.getStringAttribute('element_id');
  }
}
export interface DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule {
}

export function dataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleToTerraform(struct?: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleToHclTerraform(struct?: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // element_id - computed: true, optional: false, required: false
  public get elementId() {
    return this.getStringAttribute('element_id');
  }

  // max_length - computed: true, optional: false, required: false
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }

  // min_length - computed: true, optional: false, required: false
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
}
export interface DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule {
}

export function dataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleToTerraform(struct?: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleToHclTerraform(struct?: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // element_position - computed: true, optional: false, required: false
  public get elementPosition() {
    return this.getStringAttribute('element_position');
  }

  // requirement - computed: true, optional: false, required: false
  public get requirement() {
    return this.getStringAttribute('requirement');
  }
}
export interface DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules {
}

export function dataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesToTerraform(struct?: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesToHclTerraform(struct?: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code_list_validation_rule - computed: true, optional: false, required: false
  private _codeListValidationRule = new DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference(this, "code_list_validation_rule");
  public get codeListValidationRule() {
    return this._codeListValidationRule;
  }

  // element_length_validation_rule - computed: true, optional: false, required: false
  private _elementLengthValidationRule = new DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference(this, "element_length_validation_rule");
  public get elementLengthValidationRule() {
    return this._elementLengthValidationRule;
  }

  // element_requirement_validation_rule - computed: true, optional: false, required: false
  private _elementRequirementValidationRule = new DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference(this, "element_requirement_validation_rule");
  public get elementRequirementValidationRule() {
    return this._elementRequirementValidationRule;
  }
}

export class DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference {
    return new DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions {
}

export function dataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsToTerraform(struct?: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsToHclTerraform(struct?: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // validation_rules - computed: true, optional: false, required: false
  private _validationRules = new DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList(this, "validation_rules", false);
  public get validationRules() {
    return this._validationRules;
  }
}
export interface DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12 {
}

export function dataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ToTerraform(struct?: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ToHclTerraform(struct?: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // split_options - computed: true, optional: false, required: false
  private _splitOptions = new DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference(this, "split_options");
  public get splitOptions() {
    return this._splitOptions;
  }

  // validation_options - computed: true, optional: false, required: false
  private _validationOptions = new DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference(this, "validation_options");
  public get validationOptions() {
    return this._validationOptions;
  }
}
export interface DataAwsccB2BiTransformerInputConversionAdvancedOptions {
}

export function dataAwsccB2BiTransformerInputConversionAdvancedOptionsToTerraform(struct?: DataAwsccB2BiTransformerInputConversionAdvancedOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccB2BiTransformerInputConversionAdvancedOptionsToHclTerraform(struct?: DataAwsccB2BiTransformerInputConversionAdvancedOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccB2BiTransformerInputConversionAdvancedOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccB2BiTransformerInputConversionAdvancedOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // x12 - computed: true, optional: false, required: false
  private _x12 = new DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference(this, "x12");
  public get x12() {
    return this._x12;
  }
}
export interface DataAwsccB2BiTransformerInputConversionFormatOptionsX12 {
}

export function dataAwsccB2BiTransformerInputConversionFormatOptionsX12ToTerraform(struct?: DataAwsccB2BiTransformerInputConversionFormatOptionsX12): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccB2BiTransformerInputConversionFormatOptionsX12ToHclTerraform(struct?: DataAwsccB2BiTransformerInputConversionFormatOptionsX12): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccB2BiTransformerInputConversionFormatOptionsX12 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccB2BiTransformerInputConversionFormatOptionsX12 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // transaction_set - computed: true, optional: false, required: false
  public get transactionSet() {
    return this.getStringAttribute('transaction_set');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface DataAwsccB2BiTransformerInputConversionFormatOptions {
}

export function dataAwsccB2BiTransformerInputConversionFormatOptionsToTerraform(struct?: DataAwsccB2BiTransformerInputConversionFormatOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccB2BiTransformerInputConversionFormatOptionsToHclTerraform(struct?: DataAwsccB2BiTransformerInputConversionFormatOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccB2BiTransformerInputConversionFormatOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccB2BiTransformerInputConversionFormatOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // x12 - computed: true, optional: false, required: false
  private _x12 = new DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference(this, "x12");
  public get x12() {
    return this._x12;
  }
}
export interface DataAwsccB2BiTransformerInputConversion {
}

export function dataAwsccB2BiTransformerInputConversionToTerraform(struct?: DataAwsccB2BiTransformerInputConversion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccB2BiTransformerInputConversionToHclTerraform(struct?: DataAwsccB2BiTransformerInputConversion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccB2BiTransformerInputConversionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccB2BiTransformerInputConversion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccB2BiTransformerInputConversion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advanced_options - computed: true, optional: false, required: false
  private _advancedOptions = new DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference(this, "advanced_options");
  public get advancedOptions() {
    return this._advancedOptions;
  }

  // format_options - computed: true, optional: false, required: false
  private _formatOptions = new DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference(this, "format_options");
  public get formatOptions() {
    return this._formatOptions;
  }

  // from_format - computed: true, optional: false, required: false
  public get fromFormat() {
    return this.getStringAttribute('from_format');
  }
}
export interface DataAwsccB2BiTransformerMapping {
}

export function dataAwsccB2BiTransformerMappingToTerraform(struct?: DataAwsccB2BiTransformerMapping): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccB2BiTransformerMappingToHclTerraform(struct?: DataAwsccB2BiTransformerMapping): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccB2BiTransformerMappingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccB2BiTransformerMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccB2BiTransformerMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // template - computed: true, optional: false, required: false
  public get template() {
    return this.getStringAttribute('template');
  }

  // template_language - computed: true, optional: false, required: false
  public get templateLanguage() {
    return this.getStringAttribute('template_language');
  }
}
export interface DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions {
}

export function dataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsToTerraform(struct?: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsToHclTerraform(struct?: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // split_by - computed: true, optional: false, required: false
  public get splitBy() {
    return this.getStringAttribute('split_by');
  }
}
export interface DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule {
}

export function dataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleToTerraform(struct?: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleToHclTerraform(struct?: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // codes_to_add - computed: true, optional: false, required: false
  public get codesToAdd() {
    return this.getListAttribute('codes_to_add');
  }

  // codes_to_remove - computed: true, optional: false, required: false
  public get codesToRemove() {
    return this.getListAttribute('codes_to_remove');
  }

  // element_id - computed: true, optional: false, required: false
  public get elementId() {
    return this.getStringAttribute('element_id');
  }
}
export interface DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule {
}

export function dataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleToTerraform(struct?: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleToHclTerraform(struct?: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // element_id - computed: true, optional: false, required: false
  public get elementId() {
    return this.getStringAttribute('element_id');
  }

  // max_length - computed: true, optional: false, required: false
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }

  // min_length - computed: true, optional: false, required: false
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
}
export interface DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule {
}

export function dataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleToTerraform(struct?: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleToHclTerraform(struct?: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // element_position - computed: true, optional: false, required: false
  public get elementPosition() {
    return this.getStringAttribute('element_position');
  }

  // requirement - computed: true, optional: false, required: false
  public get requirement() {
    return this.getStringAttribute('requirement');
  }
}
export interface DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules {
}

export function dataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesToTerraform(struct?: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesToHclTerraform(struct?: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code_list_validation_rule - computed: true, optional: false, required: false
  private _codeListValidationRule = new DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference(this, "code_list_validation_rule");
  public get codeListValidationRule() {
    return this._codeListValidationRule;
  }

  // element_length_validation_rule - computed: true, optional: false, required: false
  private _elementLengthValidationRule = new DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference(this, "element_length_validation_rule");
  public get elementLengthValidationRule() {
    return this._elementLengthValidationRule;
  }

  // element_requirement_validation_rule - computed: true, optional: false, required: false
  private _elementRequirementValidationRule = new DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference(this, "element_requirement_validation_rule");
  public get elementRequirementValidationRule() {
    return this._elementRequirementValidationRule;
  }
}

export class DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference {
    return new DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions {
}

export function dataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsToTerraform(struct?: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsToHclTerraform(struct?: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // validation_rules - computed: true, optional: false, required: false
  private _validationRules = new DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList(this, "validation_rules", false);
  public get validationRules() {
    return this._validationRules;
  }
}
export interface DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12 {
}

export function dataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ToTerraform(struct?: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ToHclTerraform(struct?: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // split_options - computed: true, optional: false, required: false
  private _splitOptions = new DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference(this, "split_options");
  public get splitOptions() {
    return this._splitOptions;
  }

  // validation_options - computed: true, optional: false, required: false
  private _validationOptions = new DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference(this, "validation_options");
  public get validationOptions() {
    return this._validationOptions;
  }
}
export interface DataAwsccB2BiTransformerOutputConversionAdvancedOptions {
}

export function dataAwsccB2BiTransformerOutputConversionAdvancedOptionsToTerraform(struct?: DataAwsccB2BiTransformerOutputConversionAdvancedOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccB2BiTransformerOutputConversionAdvancedOptionsToHclTerraform(struct?: DataAwsccB2BiTransformerOutputConversionAdvancedOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccB2BiTransformerOutputConversionAdvancedOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccB2BiTransformerOutputConversionAdvancedOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // x12 - computed: true, optional: false, required: false
  private _x12 = new DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference(this, "x12");
  public get x12() {
    return this._x12;
  }
}
export interface DataAwsccB2BiTransformerOutputConversionFormatOptionsX12 {
}

export function dataAwsccB2BiTransformerOutputConversionFormatOptionsX12ToTerraform(struct?: DataAwsccB2BiTransformerOutputConversionFormatOptionsX12): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccB2BiTransformerOutputConversionFormatOptionsX12ToHclTerraform(struct?: DataAwsccB2BiTransformerOutputConversionFormatOptionsX12): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccB2BiTransformerOutputConversionFormatOptionsX12 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccB2BiTransformerOutputConversionFormatOptionsX12 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // transaction_set - computed: true, optional: false, required: false
  public get transactionSet() {
    return this.getStringAttribute('transaction_set');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface DataAwsccB2BiTransformerOutputConversionFormatOptions {
}

export function dataAwsccB2BiTransformerOutputConversionFormatOptionsToTerraform(struct?: DataAwsccB2BiTransformerOutputConversionFormatOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccB2BiTransformerOutputConversionFormatOptionsToHclTerraform(struct?: DataAwsccB2BiTransformerOutputConversionFormatOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccB2BiTransformerOutputConversionFormatOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccB2BiTransformerOutputConversionFormatOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // x12 - computed: true, optional: false, required: false
  private _x12 = new DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference(this, "x12");
  public get x12() {
    return this._x12;
  }
}
export interface DataAwsccB2BiTransformerOutputConversion {
}

export function dataAwsccB2BiTransformerOutputConversionToTerraform(struct?: DataAwsccB2BiTransformerOutputConversion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccB2BiTransformerOutputConversionToHclTerraform(struct?: DataAwsccB2BiTransformerOutputConversion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccB2BiTransformerOutputConversionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccB2BiTransformerOutputConversion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccB2BiTransformerOutputConversion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advanced_options - computed: true, optional: false, required: false
  private _advancedOptions = new DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference(this, "advanced_options");
  public get advancedOptions() {
    return this._advancedOptions;
  }

  // format_options - computed: true, optional: false, required: false
  private _formatOptions = new DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference(this, "format_options");
  public get formatOptions() {
    return this._formatOptions;
  }

  // to_format - computed: true, optional: false, required: false
  public get toFormat() {
    return this.getStringAttribute('to_format');
  }
}
export interface DataAwsccB2BiTransformerSampleDocumentsKeys {
}

export function dataAwsccB2BiTransformerSampleDocumentsKeysToTerraform(struct?: DataAwsccB2BiTransformerSampleDocumentsKeys): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccB2BiTransformerSampleDocumentsKeysToHclTerraform(struct?: DataAwsccB2BiTransformerSampleDocumentsKeys): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccB2BiTransformerSampleDocumentsKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccB2BiTransformerSampleDocumentsKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // input - computed: true, optional: false, required: false
  public get input() {
    return this.getStringAttribute('input');
  }

  // output - computed: true, optional: false, required: false
  public get output() {
    return this.getStringAttribute('output');
  }
}

export class DataAwsccB2BiTransformerSampleDocumentsKeysList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference {
    return new DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccB2BiTransformerSampleDocuments {
}

export function dataAwsccB2BiTransformerSampleDocumentsToTerraform(struct?: DataAwsccB2BiTransformerSampleDocuments): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccB2BiTransformerSampleDocumentsToHclTerraform(struct?: DataAwsccB2BiTransformerSampleDocuments): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccB2BiTransformerSampleDocumentsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccB2BiTransformerSampleDocuments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccB2BiTransformerSampleDocuments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // keys - computed: true, optional: false, required: false
  private _keys = new DataAwsccB2BiTransformerSampleDocumentsKeysList(this, "keys", false);
  public get keys() {
    return this._keys;
  }
}
export interface DataAwsccB2BiTransformerTags {
}

export function dataAwsccB2BiTransformerTagsToTerraform(struct?: DataAwsccB2BiTransformerTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccB2BiTransformerTagsToHclTerraform(struct?: DataAwsccB2BiTransformerTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccB2BiTransformerTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccB2BiTransformerTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccB2BiTransformerTags | undefined) {
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

export class DataAwsccB2BiTransformerTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccB2BiTransformerTagsOutputReference {
    return new DataAwsccB2BiTransformerTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/b2bi_transformer awscc_b2bi_transformer}
*/
export class DataAwsccB2BiTransformer extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_b2bi_transformer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccB2BiTransformer resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccB2BiTransformer to import
  * @param importFromId The id of the existing DataAwsccB2BiTransformer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/b2bi_transformer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccB2BiTransformer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_b2bi_transformer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/b2bi_transformer awscc_b2bi_transformer} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccB2BiTransformerConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccB2BiTransformerConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_b2bi_transformer',
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

  // edi_type - computed: true, optional: false, required: false
  private _ediType = new DataAwsccB2BiTransformerEdiTypeOutputReference(this, "edi_type");
  public get ediType() {
    return this._ediType;
  }

  // file_format - computed: true, optional: false, required: false
  public get fileFormat() {
    return this.getStringAttribute('file_format');
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

  // input_conversion - computed: true, optional: false, required: false
  private _inputConversion = new DataAwsccB2BiTransformerInputConversionOutputReference(this, "input_conversion");
  public get inputConversion() {
    return this._inputConversion;
  }

  // mapping - computed: true, optional: false, required: false
  private _mapping = new DataAwsccB2BiTransformerMappingOutputReference(this, "mapping");
  public get mapping() {
    return this._mapping;
  }

  // mapping_template - computed: true, optional: false, required: false
  public get mappingTemplate() {
    return this.getStringAttribute('mapping_template');
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // output_conversion - computed: true, optional: false, required: false
  private _outputConversion = new DataAwsccB2BiTransformerOutputConversionOutputReference(this, "output_conversion");
  public get outputConversion() {
    return this._outputConversion;
  }

  // sample_document - computed: true, optional: false, required: false
  public get sampleDocument() {
    return this.getStringAttribute('sample_document');
  }

  // sample_documents - computed: true, optional: false, required: false
  private _sampleDocuments = new DataAwsccB2BiTransformerSampleDocumentsOutputReference(this, "sample_documents");
  public get sampleDocuments() {
    return this._sampleDocuments;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccB2BiTransformerTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // transformer_arn - computed: true, optional: false, required: false
  public get transformerArn() {
    return this.getStringAttribute('transformer_arn');
  }

  // transformer_id - computed: true, optional: false, required: false
  public get transformerId() {
    return this.getStringAttribute('transformer_id');
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
