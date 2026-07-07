// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ComputeoptimizerAutomationRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Filter criteria that specify which recommended actions qualify for implementation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#criteria ComputeoptimizerAutomationRule#criteria}
  */
  readonly criteria?: ComputeoptimizerAutomationRuleCriteria;
  /**
  * The description of the automation rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#description ComputeoptimizerAutomationRule#description}
  */
  readonly description?: string;
  /**
  * The name of the automation rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#name ComputeoptimizerAutomationRule#name}
  */
  readonly name: string;
  /**
  * Organization configuration for organization rules, including rule apply order and account scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#organization_configuration ComputeoptimizerAutomationRule#organization_configuration}
  */
  readonly organizationConfiguration?: ComputeoptimizerAutomationRuleOrganizationConfiguration;
  /**
  * Rule priority within its group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#priority ComputeoptimizerAutomationRule#priority}
  */
  readonly priority?: string;
  /**
  * The types of recommended actions this rule will implement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#recommended_action_types ComputeoptimizerAutomationRule#recommended_action_types}
  */
  readonly recommendedActionTypes: string[];
  /**
  * The type of automation rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#rule_type ComputeoptimizerAutomationRule#rule_type}
  */
  readonly ruleType: string;
  /**
  * The schedule configuration for when the rule runs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#schedule ComputeoptimizerAutomationRule#schedule}
  */
  readonly schedule: ComputeoptimizerAutomationRuleSchedule;
  /**
  * The status of the automation rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#status ComputeoptimizerAutomationRule#status}
  */
  readonly status: string;
  /**
  * Tags associated with the automation rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#tags ComputeoptimizerAutomationRule#tags}
  */
  readonly tags?: ComputeoptimizerAutomationRuleTags[] | cdktn.IResolvable;
}
export interface ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}
  */
  readonly values?: number[];
}

export function computeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibToTerraform(struct?: ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    values: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.values),
  }
}


export function computeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibToHclTerraform(struct?: ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._values = value.values;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
  }

  // values - computed: true, optional: true, required: false
  private _values?: number[]; 
  public get values() {
    return this.getNumberListAttribute('values');
  }
  public set values(value: number[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList extends cdktn.ComplexList {
  public internalValue? : ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib[] | cdktn.IResolvable

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
  public get(index: number): ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference {
    return new ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeoptimizerAutomationRuleCriteriaEbsVolumeType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}
  */
  readonly values?: string[];
}

export function computeoptimizerAutomationRuleCriteriaEbsVolumeTypeToTerraform(struct?: ComputeoptimizerAutomationRuleCriteriaEbsVolumeType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function computeoptimizerAutomationRuleCriteriaEbsVolumeTypeToHclTerraform(struct?: ComputeoptimizerAutomationRuleCriteriaEbsVolumeType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeoptimizerAutomationRuleCriteriaEbsVolumeType | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeoptimizerAutomationRuleCriteriaEbsVolumeType | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._values = value.values;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList extends cdktn.ComplexList {
  public internalValue? : ComputeoptimizerAutomationRuleCriteriaEbsVolumeType[] | cdktn.IResolvable

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
  public get(index: number): ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference {
    return new ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}
  */
  readonly values?: number[];
}

export function computeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsToTerraform(struct?: ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    values: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.values),
  }
}


export function computeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsToHclTerraform(struct?: ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._values = value.values;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
  }

  // values - computed: true, optional: true, required: false
  private _values?: number[]; 
  public get values() {
    return this.getNumberListAttribute('values');
  }
  public set values(value: number[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList extends cdktn.ComplexList {
  public internalValue? : ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings[] | cdktn.IResolvable

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
  public get(index: number): ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference {
    return new ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}
  */
  readonly values?: number[];
}

export function computeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysToTerraform(struct?: ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    values: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.values),
  }
}


export function computeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysToHclTerraform(struct?: ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._values = value.values;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
  }

  // values - computed: true, optional: true, required: false
  private _values?: number[]; 
  public get values() {
    return this.getNumberListAttribute('values');
  }
  public set values(value: number[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList extends cdktn.ComplexList {
  public internalValue? : ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays[] | cdktn.IResolvable

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
  public get(index: number): ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference {
    return new ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeoptimizerAutomationRuleCriteriaRegion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}
  */
  readonly values?: string[];
}

export function computeoptimizerAutomationRuleCriteriaRegionToTerraform(struct?: ComputeoptimizerAutomationRuleCriteriaRegion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function computeoptimizerAutomationRuleCriteriaRegionToHclTerraform(struct?: ComputeoptimizerAutomationRuleCriteriaRegion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeoptimizerAutomationRuleCriteriaRegionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeoptimizerAutomationRuleCriteriaRegion | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeoptimizerAutomationRuleCriteriaRegion | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._values = value.values;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ComputeoptimizerAutomationRuleCriteriaRegionList extends cdktn.ComplexList {
  public internalValue? : ComputeoptimizerAutomationRuleCriteriaRegion[] | cdktn.IResolvable

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
  public get(index: number): ComputeoptimizerAutomationRuleCriteriaRegionOutputReference {
    return new ComputeoptimizerAutomationRuleCriteriaRegionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeoptimizerAutomationRuleCriteriaResourceArn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}
  */
  readonly values?: string[];
}

export function computeoptimizerAutomationRuleCriteriaResourceArnToTerraform(struct?: ComputeoptimizerAutomationRuleCriteriaResourceArn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function computeoptimizerAutomationRuleCriteriaResourceArnToHclTerraform(struct?: ComputeoptimizerAutomationRuleCriteriaResourceArn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeoptimizerAutomationRuleCriteriaResourceArn | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeoptimizerAutomationRuleCriteriaResourceArn | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._values = value.values;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ComputeoptimizerAutomationRuleCriteriaResourceArnList extends cdktn.ComplexList {
  public internalValue? : ComputeoptimizerAutomationRuleCriteriaResourceArn[] | cdktn.IResolvable

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
  public get(index: number): ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference {
    return new ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeoptimizerAutomationRuleCriteriaResourceTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#key ComputeoptimizerAutomationRule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}
  */
  readonly values?: string[];
}

export function computeoptimizerAutomationRuleCriteriaResourceTagToTerraform(struct?: ComputeoptimizerAutomationRuleCriteriaResourceTag | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    key: cdktn.stringToTerraform(struct!.key),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function computeoptimizerAutomationRuleCriteriaResourceTagToHclTerraform(struct?: ComputeoptimizerAutomationRuleCriteriaResourceTag | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeoptimizerAutomationRuleCriteriaResourceTag | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeoptimizerAutomationRuleCriteriaResourceTag | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ComputeoptimizerAutomationRuleCriteriaResourceTagList extends cdktn.ComplexList {
  public internalValue? : ComputeoptimizerAutomationRuleCriteriaResourceTag[] | cdktn.IResolvable

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
  public get(index: number): ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference {
    return new ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeoptimizerAutomationRuleCriteriaRestartNeeded {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}
  */
  readonly values?: string[];
}

export function computeoptimizerAutomationRuleCriteriaRestartNeededToTerraform(struct?: ComputeoptimizerAutomationRuleCriteriaRestartNeeded | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function computeoptimizerAutomationRuleCriteriaRestartNeededToHclTerraform(struct?: ComputeoptimizerAutomationRuleCriteriaRestartNeeded | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeoptimizerAutomationRuleCriteriaRestartNeeded | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeoptimizerAutomationRuleCriteriaRestartNeeded | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._values = value.values;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ComputeoptimizerAutomationRuleCriteriaRestartNeededList extends cdktn.ComplexList {
  public internalValue? : ComputeoptimizerAutomationRuleCriteriaRestartNeeded[] | cdktn.IResolvable

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
  public get(index: number): ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference {
    return new ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeoptimizerAutomationRuleCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#ebs_volume_size_in_gib ComputeoptimizerAutomationRule#ebs_volume_size_in_gib}
  */
  readonly ebsVolumeSizeInGib?: ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#ebs_volume_type ComputeoptimizerAutomationRule#ebs_volume_type}
  */
  readonly ebsVolumeType?: ComputeoptimizerAutomationRuleCriteriaEbsVolumeType[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#estimated_monthly_savings ComputeoptimizerAutomationRule#estimated_monthly_savings}
  */
  readonly estimatedMonthlySavings?: ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#look_back_period_in_days ComputeoptimizerAutomationRule#look_back_period_in_days}
  */
  readonly lookBackPeriodInDays?: ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#region ComputeoptimizerAutomationRule#region}
  */
  readonly region?: ComputeoptimizerAutomationRuleCriteriaRegion[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#resource_arn ComputeoptimizerAutomationRule#resource_arn}
  */
  readonly resourceArn?: ComputeoptimizerAutomationRuleCriteriaResourceArn[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#resource_tag ComputeoptimizerAutomationRule#resource_tag}
  */
  readonly resourceTag?: ComputeoptimizerAutomationRuleCriteriaResourceTag[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#restart_needed ComputeoptimizerAutomationRule#restart_needed}
  */
  readonly restartNeeded?: ComputeoptimizerAutomationRuleCriteriaRestartNeeded[] | cdktn.IResolvable;
}

export function computeoptimizerAutomationRuleCriteriaToTerraform(struct?: ComputeoptimizerAutomationRuleCriteria | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ebs_volume_size_in_gib: cdktn.listMapper(computeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibToTerraform, false)(struct!.ebsVolumeSizeInGib),
    ebs_volume_type: cdktn.listMapper(computeoptimizerAutomationRuleCriteriaEbsVolumeTypeToTerraform, false)(struct!.ebsVolumeType),
    estimated_monthly_savings: cdktn.listMapper(computeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsToTerraform, false)(struct!.estimatedMonthlySavings),
    look_back_period_in_days: cdktn.listMapper(computeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysToTerraform, false)(struct!.lookBackPeriodInDays),
    region: cdktn.listMapper(computeoptimizerAutomationRuleCriteriaRegionToTerraform, false)(struct!.region),
    resource_arn: cdktn.listMapper(computeoptimizerAutomationRuleCriteriaResourceArnToTerraform, false)(struct!.resourceArn),
    resource_tag: cdktn.listMapper(computeoptimizerAutomationRuleCriteriaResourceTagToTerraform, false)(struct!.resourceTag),
    restart_needed: cdktn.listMapper(computeoptimizerAutomationRuleCriteriaRestartNeededToTerraform, false)(struct!.restartNeeded),
  }
}


export function computeoptimizerAutomationRuleCriteriaToHclTerraform(struct?: ComputeoptimizerAutomationRuleCriteria | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ebs_volume_size_in_gib: {
      value: cdktn.listMapperHcl(computeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibToHclTerraform, false)(struct!.ebsVolumeSizeInGib),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList",
    },
    ebs_volume_type: {
      value: cdktn.listMapperHcl(computeoptimizerAutomationRuleCriteriaEbsVolumeTypeToHclTerraform, false)(struct!.ebsVolumeType),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList",
    },
    estimated_monthly_savings: {
      value: cdktn.listMapperHcl(computeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsToHclTerraform, false)(struct!.estimatedMonthlySavings),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList",
    },
    look_back_period_in_days: {
      value: cdktn.listMapperHcl(computeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysToHclTerraform, false)(struct!.lookBackPeriodInDays),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList",
    },
    region: {
      value: cdktn.listMapperHcl(computeoptimizerAutomationRuleCriteriaRegionToHclTerraform, false)(struct!.region),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeoptimizerAutomationRuleCriteriaRegionList",
    },
    resource_arn: {
      value: cdktn.listMapperHcl(computeoptimizerAutomationRuleCriteriaResourceArnToHclTerraform, false)(struct!.resourceArn),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeoptimizerAutomationRuleCriteriaResourceArnList",
    },
    resource_tag: {
      value: cdktn.listMapperHcl(computeoptimizerAutomationRuleCriteriaResourceTagToHclTerraform, false)(struct!.resourceTag),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeoptimizerAutomationRuleCriteriaResourceTagList",
    },
    restart_needed: {
      value: cdktn.listMapperHcl(computeoptimizerAutomationRuleCriteriaRestartNeededToHclTerraform, false)(struct!.restartNeeded),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeoptimizerAutomationRuleCriteriaRestartNeededList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeoptimizerAutomationRuleCriteriaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeoptimizerAutomationRuleCriteria | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ebsVolumeSizeInGib?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeSizeInGib = this._ebsVolumeSizeInGib?.internalValue;
    }
    if (this._ebsVolumeType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeType = this._ebsVolumeType?.internalValue;
    }
    if (this._estimatedMonthlySavings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.estimatedMonthlySavings = this._estimatedMonthlySavings?.internalValue;
    }
    if (this._lookBackPeriodInDays?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookBackPeriodInDays = this._lookBackPeriodInDays?.internalValue;
    }
    if (this._region?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region?.internalValue;
    }
    if (this._resourceArn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArn = this._resourceArn?.internalValue;
    }
    if (this._resourceTag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTag = this._resourceTag?.internalValue;
    }
    if (this._restartNeeded?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartNeeded = this._restartNeeded?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeoptimizerAutomationRuleCriteria | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ebsVolumeSizeInGib.internalValue = undefined;
      this._ebsVolumeType.internalValue = undefined;
      this._estimatedMonthlySavings.internalValue = undefined;
      this._lookBackPeriodInDays.internalValue = undefined;
      this._region.internalValue = undefined;
      this._resourceArn.internalValue = undefined;
      this._resourceTag.internalValue = undefined;
      this._restartNeeded.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ebsVolumeSizeInGib.internalValue = value.ebsVolumeSizeInGib;
      this._ebsVolumeType.internalValue = value.ebsVolumeType;
      this._estimatedMonthlySavings.internalValue = value.estimatedMonthlySavings;
      this._lookBackPeriodInDays.internalValue = value.lookBackPeriodInDays;
      this._region.internalValue = value.region;
      this._resourceArn.internalValue = value.resourceArn;
      this._resourceTag.internalValue = value.resourceTag;
      this._restartNeeded.internalValue = value.restartNeeded;
    }
  }

  // ebs_volume_size_in_gib - computed: true, optional: true, required: false
  private _ebsVolumeSizeInGib = new ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList(this, "ebs_volume_size_in_gib", false);
  public get ebsVolumeSizeInGib() {
    return this._ebsVolumeSizeInGib;
  }
  public putEbsVolumeSizeInGib(value: ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib[] | cdktn.IResolvable) {
    this._ebsVolumeSizeInGib.internalValue = value;
  }
  public resetEbsVolumeSizeInGib() {
    this._ebsVolumeSizeInGib.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeSizeInGibInput() {
    return this._ebsVolumeSizeInGib.internalValue;
  }

  // ebs_volume_type - computed: true, optional: true, required: false
  private _ebsVolumeType = new ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList(this, "ebs_volume_type", false);
  public get ebsVolumeType() {
    return this._ebsVolumeType;
  }
  public putEbsVolumeType(value: ComputeoptimizerAutomationRuleCriteriaEbsVolumeType[] | cdktn.IResolvable) {
    this._ebsVolumeType.internalValue = value;
  }
  public resetEbsVolumeType() {
    this._ebsVolumeType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeTypeInput() {
    return this._ebsVolumeType.internalValue;
  }

  // estimated_monthly_savings - computed: true, optional: true, required: false
  private _estimatedMonthlySavings = new ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList(this, "estimated_monthly_savings", false);
  public get estimatedMonthlySavings() {
    return this._estimatedMonthlySavings;
  }
  public putEstimatedMonthlySavings(value: ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings[] | cdktn.IResolvable) {
    this._estimatedMonthlySavings.internalValue = value;
  }
  public resetEstimatedMonthlySavings() {
    this._estimatedMonthlySavings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estimatedMonthlySavingsInput() {
    return this._estimatedMonthlySavings.internalValue;
  }

  // look_back_period_in_days - computed: true, optional: true, required: false
  private _lookBackPeriodInDays = new ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList(this, "look_back_period_in_days", false);
  public get lookBackPeriodInDays() {
    return this._lookBackPeriodInDays;
  }
  public putLookBackPeriodInDays(value: ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays[] | cdktn.IResolvable) {
    this._lookBackPeriodInDays.internalValue = value;
  }
  public resetLookBackPeriodInDays() {
    this._lookBackPeriodInDays.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookBackPeriodInDaysInput() {
    return this._lookBackPeriodInDays.internalValue;
  }

  // region - computed: true, optional: true, required: false
  private _region = new ComputeoptimizerAutomationRuleCriteriaRegionList(this, "region", false);
  public get region() {
    return this._region;
  }
  public putRegion(value: ComputeoptimizerAutomationRuleCriteriaRegion[] | cdktn.IResolvable) {
    this._region.internalValue = value;
  }
  public resetRegion() {
    this._region.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region.internalValue;
  }

  // resource_arn - computed: true, optional: true, required: false
  private _resourceArn = new ComputeoptimizerAutomationRuleCriteriaResourceArnList(this, "resource_arn", false);
  public get resourceArn() {
    return this._resourceArn;
  }
  public putResourceArn(value: ComputeoptimizerAutomationRuleCriteriaResourceArn[] | cdktn.IResolvable) {
    this._resourceArn.internalValue = value;
  }
  public resetResourceArn() {
    this._resourceArn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn.internalValue;
  }

  // resource_tag - computed: true, optional: true, required: false
  private _resourceTag = new ComputeoptimizerAutomationRuleCriteriaResourceTagList(this, "resource_tag", false);
  public get resourceTag() {
    return this._resourceTag;
  }
  public putResourceTag(value: ComputeoptimizerAutomationRuleCriteriaResourceTag[] | cdktn.IResolvable) {
    this._resourceTag.internalValue = value;
  }
  public resetResourceTag() {
    this._resourceTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagInput() {
    return this._resourceTag.internalValue;
  }

  // restart_needed - computed: true, optional: true, required: false
  private _restartNeeded = new ComputeoptimizerAutomationRuleCriteriaRestartNeededList(this, "restart_needed", false);
  public get restartNeeded() {
    return this._restartNeeded;
  }
  public putRestartNeeded(value: ComputeoptimizerAutomationRuleCriteriaRestartNeeded[] | cdktn.IResolvable) {
    this._restartNeeded.internalValue = value;
  }
  public resetRestartNeeded() {
    this._restartNeeded.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartNeededInput() {
    return this._restartNeeded.internalValue;
  }
}
export interface ComputeoptimizerAutomationRuleOrganizationConfiguration {
  /**
  * List of account IDs where the organization rule applies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#account_ids ComputeoptimizerAutomationRule#account_ids}
  */
  readonly accountIds?: string[];
  /**
  * When the rule should be applied relative to account rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#rule_apply_order ComputeoptimizerAutomationRule#rule_apply_order}
  */
  readonly ruleApplyOrder?: string;
}

export function computeoptimizerAutomationRuleOrganizationConfigurationToTerraform(struct?: ComputeoptimizerAutomationRuleOrganizationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.accountIds),
    rule_apply_order: cdktn.stringToTerraform(struct!.ruleApplyOrder),
  }
}


export function computeoptimizerAutomationRuleOrganizationConfigurationToHclTerraform(struct?: ComputeoptimizerAutomationRuleOrganizationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.accountIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rule_apply_order: {
      value: cdktn.stringToHclTerraform(struct!.ruleApplyOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeoptimizerAutomationRuleOrganizationConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountIds = this._accountIds;
    }
    if (this._ruleApplyOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleApplyOrder = this._ruleApplyOrder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeoptimizerAutomationRuleOrganizationConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountIds = undefined;
      this._ruleApplyOrder = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountIds = value.accountIds;
      this._ruleApplyOrder = value.ruleApplyOrder;
    }
  }

  // account_ids - computed: true, optional: true, required: false
  private _accountIds?: string[]; 
  public get accountIds() {
    return this.getListAttribute('account_ids');
  }
  public set accountIds(value: string[]) {
    this._accountIds = value;
  }
  public resetAccountIds() {
    this._accountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdsInput() {
    return this._accountIds;
  }

  // rule_apply_order - computed: true, optional: true, required: false
  private _ruleApplyOrder?: string; 
  public get ruleApplyOrder() {
    return this.getStringAttribute('rule_apply_order');
  }
  public set ruleApplyOrder(value: string) {
    this._ruleApplyOrder = value;
  }
  public resetRuleApplyOrder() {
    this._ruleApplyOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleApplyOrderInput() {
    return this._ruleApplyOrder;
  }
}
export interface ComputeoptimizerAutomationRuleSchedule {
  /**
  * Execution window duration in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#execution_window_in_minutes ComputeoptimizerAutomationRule#execution_window_in_minutes}
  */
  readonly executionWindowInMinutes?: number;
  /**
  * Schedule expression (e.g., cron or rate expression)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#schedule_expression ComputeoptimizerAutomationRule#schedule_expression}
  */
  readonly scheduleExpression?: string;
  /**
  * IANA timezone identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#schedule_expression_timezone ComputeoptimizerAutomationRule#schedule_expression_timezone}
  */
  readonly scheduleExpressionTimezone?: string;
}

export function computeoptimizerAutomationRuleScheduleToTerraform(struct?: ComputeoptimizerAutomationRuleSchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    execution_window_in_minutes: cdktn.numberToTerraform(struct!.executionWindowInMinutes),
    schedule_expression: cdktn.stringToTerraform(struct!.scheduleExpression),
    schedule_expression_timezone: cdktn.stringToTerraform(struct!.scheduleExpressionTimezone),
  }
}


export function computeoptimizerAutomationRuleScheduleToHclTerraform(struct?: ComputeoptimizerAutomationRuleSchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    execution_window_in_minutes: {
      value: cdktn.numberToHclTerraform(struct!.executionWindowInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    schedule_expression: {
      value: cdktn.stringToHclTerraform(struct!.scheduleExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_expression_timezone: {
      value: cdktn.stringToHclTerraform(struct!.scheduleExpressionTimezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeoptimizerAutomationRuleScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeoptimizerAutomationRuleSchedule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executionWindowInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionWindowInMinutes = this._executionWindowInMinutes;
    }
    if (this._scheduleExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleExpression = this._scheduleExpression;
    }
    if (this._scheduleExpressionTimezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleExpressionTimezone = this._scheduleExpressionTimezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeoptimizerAutomationRuleSchedule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._executionWindowInMinutes = undefined;
      this._scheduleExpression = undefined;
      this._scheduleExpressionTimezone = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._executionWindowInMinutes = value.executionWindowInMinutes;
      this._scheduleExpression = value.scheduleExpression;
      this._scheduleExpressionTimezone = value.scheduleExpressionTimezone;
    }
  }

  // execution_window_in_minutes - computed: true, optional: true, required: false
  private _executionWindowInMinutes?: number; 
  public get executionWindowInMinutes() {
    return this.getNumberAttribute('execution_window_in_minutes');
  }
  public set executionWindowInMinutes(value: number) {
    this._executionWindowInMinutes = value;
  }
  public resetExecutionWindowInMinutes() {
    this._executionWindowInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionWindowInMinutesInput() {
    return this._executionWindowInMinutes;
  }

  // schedule_expression - computed: true, optional: true, required: false
  private _scheduleExpression?: string; 
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }
  public set scheduleExpression(value: string) {
    this._scheduleExpression = value;
  }
  public resetScheduleExpression() {
    this._scheduleExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleExpressionInput() {
    return this._scheduleExpression;
  }

  // schedule_expression_timezone - computed: true, optional: true, required: false
  private _scheduleExpressionTimezone?: string; 
  public get scheduleExpressionTimezone() {
    return this.getStringAttribute('schedule_expression_timezone');
  }
  public set scheduleExpressionTimezone(value: string) {
    this._scheduleExpressionTimezone = value;
  }
  public resetScheduleExpressionTimezone() {
    this._scheduleExpressionTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleExpressionTimezoneInput() {
    return this._scheduleExpressionTimezone;
  }
}
export interface ComputeoptimizerAutomationRuleTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#key ComputeoptimizerAutomationRule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#value ComputeoptimizerAutomationRule#value}
  */
  readonly value?: string;
}

export function computeoptimizerAutomationRuleTagsToTerraform(struct?: ComputeoptimizerAutomationRuleTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function computeoptimizerAutomationRuleTagsToHclTerraform(struct?: ComputeoptimizerAutomationRuleTags | cdktn.IResolvable): any {
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

export class ComputeoptimizerAutomationRuleTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeoptimizerAutomationRuleTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ComputeoptimizerAutomationRuleTags | cdktn.IResolvable | undefined) {
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

export class ComputeoptimizerAutomationRuleTagsList extends cdktn.ComplexList {
  public internalValue? : ComputeoptimizerAutomationRuleTags[] | cdktn.IResolvable

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
  public get(index: number): ComputeoptimizerAutomationRuleTagsOutputReference {
    return new ComputeoptimizerAutomationRuleTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule awscc_computeoptimizer_automation_rule}
*/
export class ComputeoptimizerAutomationRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_computeoptimizer_automation_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ComputeoptimizerAutomationRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeoptimizerAutomationRule to import
  * @param importFromId The id of the existing ComputeoptimizerAutomationRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeoptimizerAutomationRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_computeoptimizer_automation_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/computeoptimizer_automation_rule awscc_computeoptimizer_automation_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeoptimizerAutomationRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeoptimizerAutomationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_computeoptimizer_automation_rule',
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
    this._criteria.internalValue = config.criteria;
    this._description = config.description;
    this._name = config.name;
    this._organizationConfiguration.internalValue = config.organizationConfiguration;
    this._priority = config.priority;
    this._recommendedActionTypes = config.recommendedActionTypes;
    this._ruleType = config.ruleType;
    this._schedule.internalValue = config.schedule;
    this._status = config.status;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // created_timestamp - computed: true, optional: false, required: false
  public get createdTimestamp() {
    return this.getStringAttribute('created_timestamp');
  }

  // criteria - computed: true, optional: true, required: false
  private _criteria = new ComputeoptimizerAutomationRuleCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: ComputeoptimizerAutomationRuleCriteria) {
    this._criteria.internalValue = value;
  }
  public resetCriteria() {
    this._criteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_timestamp - computed: true, optional: false, required: false
  public get lastUpdatedTimestamp() {
    return this.getStringAttribute('last_updated_timestamp');
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

  // organization_configuration - computed: true, optional: true, required: false
  private _organizationConfiguration = new ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference(this, "organization_configuration");
  public get organizationConfiguration() {
    return this._organizationConfiguration;
  }
  public putOrganizationConfiguration(value: ComputeoptimizerAutomationRuleOrganizationConfiguration) {
    this._organizationConfiguration.internalValue = value;
  }
  public resetOrganizationConfiguration() {
    this._organizationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationConfigurationInput() {
    return this._organizationConfiguration.internalValue;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // recommended_action_types - computed: false, optional: false, required: true
  private _recommendedActionTypes?: string[]; 
  public get recommendedActionTypes() {
    return this.getListAttribute('recommended_action_types');
  }
  public set recommendedActionTypes(value: string[]) {
    this._recommendedActionTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendedActionTypesInput() {
    return this._recommendedActionTypes;
  }

  // rule_arn - computed: true, optional: false, required: false
  public get ruleArn() {
    return this.getStringAttribute('rule_arn');
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // rule_revision - computed: true, optional: false, required: false
  public get ruleRevision() {
    return this.getStringAttribute('rule_revision');
  }

  // rule_type - computed: false, optional: false, required: true
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule = new ComputeoptimizerAutomationRuleScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: ComputeoptimizerAutomationRuleSchedule) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ComputeoptimizerAutomationRuleTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ComputeoptimizerAutomationRuleTags[] | cdktn.IResolvable) {
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
      criteria: computeoptimizerAutomationRuleCriteriaToTerraform(this._criteria.internalValue),
      description: cdktn.stringToTerraform(this._description),
      name: cdktn.stringToTerraform(this._name),
      organization_configuration: computeoptimizerAutomationRuleOrganizationConfigurationToTerraform(this._organizationConfiguration.internalValue),
      priority: cdktn.stringToTerraform(this._priority),
      recommended_action_types: cdktn.listMapper(cdktn.stringToTerraform, false)(this._recommendedActionTypes),
      rule_type: cdktn.stringToTerraform(this._ruleType),
      schedule: computeoptimizerAutomationRuleScheduleToTerraform(this._schedule.internalValue),
      status: cdktn.stringToTerraform(this._status),
      tags: cdktn.listMapper(computeoptimizerAutomationRuleTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      criteria: {
        value: computeoptimizerAutomationRuleCriteriaToHclTerraform(this._criteria.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeoptimizerAutomationRuleCriteria",
      },
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
      organization_configuration: {
        value: computeoptimizerAutomationRuleOrganizationConfigurationToHclTerraform(this._organizationConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeoptimizerAutomationRuleOrganizationConfiguration",
      },
      priority: {
        value: cdktn.stringToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recommended_action_types: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._recommendedActionTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      rule_type: {
        value: cdktn.stringToHclTerraform(this._ruleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: computeoptimizerAutomationRuleScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeoptimizerAutomationRuleSchedule",
      },
      status: {
        value: cdktn.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(computeoptimizerAutomationRuleTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeoptimizerAutomationRuleTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
