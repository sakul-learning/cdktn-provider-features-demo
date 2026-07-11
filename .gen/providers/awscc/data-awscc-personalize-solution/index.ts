// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/personalize_solution
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccPersonalizeSolutionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/personalize_solution#id DataAwsccPersonalizeSolution#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfig {
}

export function dataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigToTerraform(struct?: DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigToHclTerraform(struct?: DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // recipe_list - computed: true, optional: false, required: false
  public get recipeList() {
    return this.getListAttribute('recipe_list');
  }
}
export interface DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges {
}

export function dataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesToTerraform(struct?: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesToHclTerraform(struct?: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges | undefined) {
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

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference {
    return new DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges {
}

export function dataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesToTerraform(struct?: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesToHclTerraform(struct?: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_value - computed: true, optional: false, required: false
  public get maxValue() {
    return this.getNumberAttribute('max_value');
  }

  // min_value - computed: true, optional: false, required: false
  public get minValue() {
    return this.getNumberAttribute('min_value');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference {
    return new DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges {
}

export function dataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesToTerraform(struct?: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesToHclTerraform(struct?: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_value - computed: true, optional: false, required: false
  public get maxValue() {
    return this.getNumberAttribute('max_value');
  }

  // min_value - computed: true, optional: false, required: false
  public get minValue() {
    return this.getNumberAttribute('min_value');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference {
    return new DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges {
}

export function dataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesToTerraform(struct?: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesToHclTerraform(struct?: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // categorical_hyper_parameter_ranges - computed: true, optional: false, required: false
  private _categoricalHyperParameterRanges = new DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList(this, "categorical_hyper_parameter_ranges", false);
  public get categoricalHyperParameterRanges() {
    return this._categoricalHyperParameterRanges;
  }

  // continuous_hyper_parameter_ranges - computed: true, optional: false, required: false
  private _continuousHyperParameterRanges = new DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList(this, "continuous_hyper_parameter_ranges", false);
  public get continuousHyperParameterRanges() {
    return this._continuousHyperParameterRanges;
  }

  // integer_hyper_parameter_ranges - computed: true, optional: false, required: false
  private _integerHyperParameterRanges = new DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList(this, "integer_hyper_parameter_ranges", false);
  public get integerHyperParameterRanges() {
    return this._integerHyperParameterRanges;
  }
}
export interface DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjective {
}

export function dataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveToTerraform(struct?: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjective): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveToHclTerraform(struct?: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjective): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjective | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjective | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // metric_regex - computed: true, optional: false, required: false
  public get metricRegex() {
    return this.getStringAttribute('metric_regex');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig {
}

export function dataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigToTerraform(struct?: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigToHclTerraform(struct?: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_number_of_training_jobs - computed: true, optional: false, required: false
  public get maxNumberOfTrainingJobs() {
    return this.getStringAttribute('max_number_of_training_jobs');
  }

  // max_parallel_training_jobs - computed: true, optional: false, required: false
  public get maxParallelTrainingJobs() {
    return this.getStringAttribute('max_parallel_training_jobs');
  }
}
export interface DataAwsccPersonalizeSolutionSolutionConfigHpoConfig {
}

export function dataAwsccPersonalizeSolutionSolutionConfigHpoConfigToTerraform(struct?: DataAwsccPersonalizeSolutionSolutionConfigHpoConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPersonalizeSolutionSolutionConfigHpoConfigToHclTerraform(struct?: DataAwsccPersonalizeSolutionSolutionConfigHpoConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPersonalizeSolutionSolutionConfigHpoConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPersonalizeSolutionSolutionConfigHpoConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm_hyper_parameter_ranges - computed: true, optional: false, required: false
  private _algorithmHyperParameterRanges = new DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference(this, "algorithm_hyper_parameter_ranges");
  public get algorithmHyperParameterRanges() {
    return this._algorithmHyperParameterRanges;
  }

  // hpo_objective - computed: true, optional: false, required: false
  private _hpoObjective = new DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference(this, "hpo_objective");
  public get hpoObjective() {
    return this._hpoObjective;
  }

  // hpo_resource_config - computed: true, optional: false, required: false
  private _hpoResourceConfig = new DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference(this, "hpo_resource_config");
  public get hpoResourceConfig() {
    return this._hpoResourceConfig;
  }
}
export interface DataAwsccPersonalizeSolutionSolutionConfig {
}

export function dataAwsccPersonalizeSolutionSolutionConfigToTerraform(struct?: DataAwsccPersonalizeSolutionSolutionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPersonalizeSolutionSolutionConfigToHclTerraform(struct?: DataAwsccPersonalizeSolutionSolutionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPersonalizeSolutionSolutionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPersonalizeSolutionSolutionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPersonalizeSolutionSolutionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm_hyper_parameters - computed: true, optional: false, required: false
  private _algorithmHyperParameters = new cdktn.StringMap(this, "algorithm_hyper_parameters");
  public get algorithmHyperParameters() {
    return this._algorithmHyperParameters;
  }

  // auto_ml_config - computed: true, optional: false, required: false
  private _autoMlConfig = new DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference(this, "auto_ml_config");
  public get autoMlConfig() {
    return this._autoMlConfig;
  }

  // event_value_threshold - computed: true, optional: false, required: false
  public get eventValueThreshold() {
    return this.getStringAttribute('event_value_threshold');
  }

  // feature_transformation_parameters - computed: true, optional: false, required: false
  private _featureTransformationParameters = new cdktn.StringMap(this, "feature_transformation_parameters");
  public get featureTransformationParameters() {
    return this._featureTransformationParameters;
  }

  // hpo_config - computed: true, optional: false, required: false
  private _hpoConfig = new DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference(this, "hpo_config");
  public get hpoConfig() {
    return this._hpoConfig;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/personalize_solution awscc_personalize_solution}
*/
export class DataAwsccPersonalizeSolution extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_personalize_solution";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccPersonalizeSolution resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccPersonalizeSolution to import
  * @param importFromId The id of the existing DataAwsccPersonalizeSolution that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/personalize_solution#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccPersonalizeSolution to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_personalize_solution", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/personalize_solution awscc_personalize_solution} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccPersonalizeSolutionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccPersonalizeSolutionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_personalize_solution',
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

  // dataset_group_arn - computed: true, optional: false, required: false
  public get datasetGroupArn() {
    return this.getStringAttribute('dataset_group_arn');
  }

  // event_type - computed: true, optional: false, required: false
  public get eventType() {
    return this.getStringAttribute('event_type');
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

  // perform_auto_ml - computed: true, optional: false, required: false
  public get performAutoMl() {
    return this.getBooleanAttribute('perform_auto_ml');
  }

  // perform_hpo - computed: true, optional: false, required: false
  public get performHpo() {
    return this.getBooleanAttribute('perform_hpo');
  }

  // recipe_arn - computed: true, optional: false, required: false
  public get recipeArn() {
    return this.getStringAttribute('recipe_arn');
  }

  // solution_arn - computed: true, optional: false, required: false
  public get solutionArn() {
    return this.getStringAttribute('solution_arn');
  }

  // solution_config - computed: true, optional: false, required: false
  private _solutionConfig = new DataAwsccPersonalizeSolutionSolutionConfigOutputReference(this, "solution_config");
  public get solutionConfig() {
    return this._solutionConfig;
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
