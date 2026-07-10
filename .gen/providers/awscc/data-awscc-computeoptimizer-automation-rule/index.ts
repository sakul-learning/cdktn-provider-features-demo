// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/computeoptimizer_automation_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccComputeoptimizerAutomationRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/computeoptimizer_automation_rule#id DataAwsccComputeoptimizerAutomationRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib {
}

export function dataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibToTerraform(struct?: DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibToHclTerraform(struct?: DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getNumberListAttribute('values');
  }
}

export class DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference {
    return new DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeType {
}

export function dataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeToTerraform(struct?: DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeType): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeToHclTerraform(struct?: DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeType): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference {
    return new DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings {
}

export function dataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsToTerraform(struct?: DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsToHclTerraform(struct?: DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getNumberListAttribute('values');
  }
}

export class DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference {
    return new DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays {
}

export function dataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysToTerraform(struct?: DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysToHclTerraform(struct?: DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getNumberListAttribute('values');
  }
}

export class DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference {
    return new DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccComputeoptimizerAutomationRuleCriteriaRegion {
}

export function dataAwsccComputeoptimizerAutomationRuleCriteriaRegionToTerraform(struct?: DataAwsccComputeoptimizerAutomationRuleCriteriaRegion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccComputeoptimizerAutomationRuleCriteriaRegionToHclTerraform(struct?: DataAwsccComputeoptimizerAutomationRuleCriteriaRegion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccComputeoptimizerAutomationRuleCriteriaRegion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccComputeoptimizerAutomationRuleCriteriaRegion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference {
    return new DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArn {
}

export function dataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnToTerraform(struct?: DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnToHclTerraform(struct?: DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference {
    return new DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTag {
}

export function dataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagToTerraform(struct?: DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTag): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagToHclTerraform(struct?: DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTag): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference {
    return new DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeeded {
}

export function dataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededToTerraform(struct?: DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeeded): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededToHclTerraform(struct?: DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeeded): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeeded | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeeded | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference {
    return new DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccComputeoptimizerAutomationRuleCriteria {
}

export function dataAwsccComputeoptimizerAutomationRuleCriteriaToTerraform(struct?: DataAwsccComputeoptimizerAutomationRuleCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccComputeoptimizerAutomationRuleCriteriaToHclTerraform(struct?: DataAwsccComputeoptimizerAutomationRuleCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccComputeoptimizerAutomationRuleCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccComputeoptimizerAutomationRuleCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ebs_volume_size_in_gib - computed: true, optional: false, required: false
  private _ebsVolumeSizeInGib = new DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList(this, "ebs_volume_size_in_gib", false);
  public get ebsVolumeSizeInGib() {
    return this._ebsVolumeSizeInGib;
  }

  // ebs_volume_type - computed: true, optional: false, required: false
  private _ebsVolumeType = new DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList(this, "ebs_volume_type", false);
  public get ebsVolumeType() {
    return this._ebsVolumeType;
  }

  // estimated_monthly_savings - computed: true, optional: false, required: false
  private _estimatedMonthlySavings = new DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList(this, "estimated_monthly_savings", false);
  public get estimatedMonthlySavings() {
    return this._estimatedMonthlySavings;
  }

  // look_back_period_in_days - computed: true, optional: false, required: false
  private _lookBackPeriodInDays = new DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList(this, "look_back_period_in_days", false);
  public get lookBackPeriodInDays() {
    return this._lookBackPeriodInDays;
  }

  // region - computed: true, optional: false, required: false
  private _region = new DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList(this, "region", false);
  public get region() {
    return this._region;
  }

  // resource_arn - computed: true, optional: false, required: false
  private _resourceArn = new DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList(this, "resource_arn", false);
  public get resourceArn() {
    return this._resourceArn;
  }

  // resource_tag - computed: true, optional: false, required: false
  private _resourceTag = new DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList(this, "resource_tag", false);
  public get resourceTag() {
    return this._resourceTag;
  }

  // restart_needed - computed: true, optional: false, required: false
  private _restartNeeded = new DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList(this, "restart_needed", false);
  public get restartNeeded() {
    return this._restartNeeded;
  }
}
export interface DataAwsccComputeoptimizerAutomationRuleOrganizationConfiguration {
}

export function dataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationToTerraform(struct?: DataAwsccComputeoptimizerAutomationRuleOrganizationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationToHclTerraform(struct?: DataAwsccComputeoptimizerAutomationRuleOrganizationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccComputeoptimizerAutomationRuleOrganizationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccComputeoptimizerAutomationRuleOrganizationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_ids - computed: true, optional: false, required: false
  public get accountIds() {
    return this.getListAttribute('account_ids');
  }

  // rule_apply_order - computed: true, optional: false, required: false
  public get ruleApplyOrder() {
    return this.getStringAttribute('rule_apply_order');
  }
}
export interface DataAwsccComputeoptimizerAutomationRuleSchedule {
}

export function dataAwsccComputeoptimizerAutomationRuleScheduleToTerraform(struct?: DataAwsccComputeoptimizerAutomationRuleSchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccComputeoptimizerAutomationRuleScheduleToHclTerraform(struct?: DataAwsccComputeoptimizerAutomationRuleSchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccComputeoptimizerAutomationRuleSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccComputeoptimizerAutomationRuleSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // execution_window_in_minutes - computed: true, optional: false, required: false
  public get executionWindowInMinutes() {
    return this.getNumberAttribute('execution_window_in_minutes');
  }

  // schedule_expression - computed: true, optional: false, required: false
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }

  // schedule_expression_timezone - computed: true, optional: false, required: false
  public get scheduleExpressionTimezone() {
    return this.getStringAttribute('schedule_expression_timezone');
  }
}
export interface DataAwsccComputeoptimizerAutomationRuleTags {
}

export function dataAwsccComputeoptimizerAutomationRuleTagsToTerraform(struct?: DataAwsccComputeoptimizerAutomationRuleTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccComputeoptimizerAutomationRuleTagsToHclTerraform(struct?: DataAwsccComputeoptimizerAutomationRuleTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccComputeoptimizerAutomationRuleTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccComputeoptimizerAutomationRuleTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccComputeoptimizerAutomationRuleTags | undefined) {
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

export class DataAwsccComputeoptimizerAutomationRuleTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccComputeoptimizerAutomationRuleTagsOutputReference {
    return new DataAwsccComputeoptimizerAutomationRuleTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/computeoptimizer_automation_rule awscc_computeoptimizer_automation_rule}
*/
export class DataAwsccComputeoptimizerAutomationRule extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_computeoptimizer_automation_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccComputeoptimizerAutomationRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccComputeoptimizerAutomationRule to import
  * @param importFromId The id of the existing DataAwsccComputeoptimizerAutomationRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/computeoptimizer_automation_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccComputeoptimizerAutomationRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_computeoptimizer_automation_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/computeoptimizer_automation_rule awscc_computeoptimizer_automation_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccComputeoptimizerAutomationRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccComputeoptimizerAutomationRuleConfig) {
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
    this._id = config.id;
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

  // criteria - computed: true, optional: false, required: false
  private _criteria = new DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
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

  // last_updated_timestamp - computed: true, optional: false, required: false
  public get lastUpdatedTimestamp() {
    return this.getStringAttribute('last_updated_timestamp');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // organization_configuration - computed: true, optional: false, required: false
  private _organizationConfiguration = new DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference(this, "organization_configuration");
  public get organizationConfiguration() {
    return this._organizationConfiguration;
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
  }

  // recommended_action_types - computed: true, optional: false, required: false
  public get recommendedActionTypes() {
    return this.getListAttribute('recommended_action_types');
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

  // rule_type - computed: true, optional: false, required: false
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }

  // schedule - computed: true, optional: false, required: false
  private _schedule = new DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccComputeoptimizerAutomationRuleTagsList(this, "tags", false);
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
