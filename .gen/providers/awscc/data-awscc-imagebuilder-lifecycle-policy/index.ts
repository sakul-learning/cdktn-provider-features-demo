// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/imagebuilder_lifecycle_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccImagebuilderLifecyclePolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/imagebuilder_lifecycle_policy#id DataAwsccImagebuilderLifecyclePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources {
}

export function dataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesToTerraform(struct?: DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesToHclTerraform(struct?: DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // amis - computed: true, optional: false, required: false
  public get amis() {
    return this.getBooleanAttribute('amis');
  }

  // containers - computed: true, optional: false, required: false
  public get containers() {
    return this.getBooleanAttribute('containers');
  }

  // snapshots - computed: true, optional: false, required: false
  public get snapshots() {
    return this.getBooleanAttribute('snapshots');
  }
}
export interface DataAwsccImagebuilderLifecyclePolicyPolicyDetailsAction {
}

export function dataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionToTerraform(struct?: DataAwsccImagebuilderLifecyclePolicyPolicyDetailsAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionToHclTerraform(struct?: DataAwsccImagebuilderLifecyclePolicyPolicyDetailsAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccImagebuilderLifecyclePolicyPolicyDetailsAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccImagebuilderLifecyclePolicyPolicyDetailsAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // include_resources - computed: true, optional: false, required: false
  private _includeResources = new DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference(this, "include_resources");
  public get includeResources() {
    return this._includeResources;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched {
}

export function dataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedToTerraform(struct?: DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedToHclTerraform(struct?: DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis {
}

export function dataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisToTerraform(struct?: DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisToHclTerraform(struct?: DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_public - computed: true, optional: false, required: false
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }

  // last_launched - computed: true, optional: false, required: false
  private _lastLaunched = new DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference(this, "last_launched");
  public get lastLaunched() {
    return this._lastLaunched;
  }

  // regions - computed: true, optional: false, required: false
  public get regions() {
    return this.getListAttribute('regions');
  }

  // shared_accounts - computed: true, optional: false, required: false
  public get sharedAccounts() {
    return this.getListAttribute('shared_accounts');
  }

  // tag_map - computed: true, optional: false, required: false
  private _tagMap = new cdktn.StringMap(this, "tag_map");
  public get tagMap() {
    return this._tagMap;
  }
}
export interface DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRules {
}

export function dataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesToTerraform(struct?: DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesToHclTerraform(struct?: DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // amis - computed: true, optional: false, required: false
  private _amis = new DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference(this, "amis");
  public get amis() {
    return this._amis;
  }

  // tag_map - computed: true, optional: false, required: false
  private _tagMap = new cdktn.StringMap(this, "tag_map");
  public get tagMap() {
    return this._tagMap;
  }
}
export interface DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilter {
}

export function dataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterToTerraform(struct?: DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterToHclTerraform(struct?: DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // retain_at_least - computed: true, optional: false, required: false
  public get retainAtLeast() {
    return this.getNumberAttribute('retain_at_least');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataAwsccImagebuilderLifecyclePolicyPolicyDetails {
}

export function dataAwsccImagebuilderLifecyclePolicyPolicyDetailsToTerraform(struct?: DataAwsccImagebuilderLifecyclePolicyPolicyDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccImagebuilderLifecyclePolicyPolicyDetailsToHclTerraform(struct?: DataAwsccImagebuilderLifecyclePolicyPolicyDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccImagebuilderLifecyclePolicyPolicyDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccImagebuilderLifecyclePolicyPolicyDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  private _action = new DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }

  // exclusion_rules - computed: true, optional: false, required: false
  private _exclusionRules = new DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference(this, "exclusion_rules");
  public get exclusionRules() {
    return this._exclusionRules;
  }

  // filter - computed: true, optional: false, required: false
  private _filter = new DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
}

export class DataAwsccImagebuilderLifecyclePolicyPolicyDetailsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference {
    return new DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipes {
}

export function dataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesToTerraform(struct?: DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesToHclTerraform(struct?: DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipes | undefined) {
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

  // semantic_version - computed: true, optional: false, required: false
  public get semanticVersion() {
    return this.getStringAttribute('semantic_version');
  }
}

export class DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference {
    return new DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccImagebuilderLifecyclePolicyResourceSelection {
}

export function dataAwsccImagebuilderLifecyclePolicyResourceSelectionToTerraform(struct?: DataAwsccImagebuilderLifecyclePolicyResourceSelection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccImagebuilderLifecyclePolicyResourceSelectionToHclTerraform(struct?: DataAwsccImagebuilderLifecyclePolicyResourceSelection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccImagebuilderLifecyclePolicyResourceSelection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccImagebuilderLifecyclePolicyResourceSelection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // recipes - computed: true, optional: false, required: false
  private _recipes = new DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesList(this, "recipes", false);
  public get recipes() {
    return this._recipes;
  }

  // tag_map - computed: true, optional: false, required: false
  private _tagMap = new cdktn.StringMap(this, "tag_map");
  public get tagMap() {
    return this._tagMap;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/imagebuilder_lifecycle_policy awscc_imagebuilder_lifecycle_policy}
*/
export class DataAwsccImagebuilderLifecyclePolicy extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_imagebuilder_lifecycle_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccImagebuilderLifecyclePolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccImagebuilderLifecyclePolicy to import
  * @param importFromId The id of the existing DataAwsccImagebuilderLifecyclePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/imagebuilder_lifecycle_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccImagebuilderLifecyclePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_imagebuilder_lifecycle_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/imagebuilder_lifecycle_policy awscc_imagebuilder_lifecycle_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccImagebuilderLifecyclePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccImagebuilderLifecyclePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_imagebuilder_lifecycle_policy',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // execution_role - computed: true, optional: false, required: false
  public get executionRole() {
    return this.getStringAttribute('execution_role');
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

  // policy_details - computed: true, optional: false, required: false
  private _policyDetails = new DataAwsccImagebuilderLifecyclePolicyPolicyDetailsList(this, "policy_details", false);
  public get policyDetails() {
    return this._policyDetails;
  }

  // resource_selection - computed: true, optional: false, required: false
  private _resourceSelection = new DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference(this, "resource_selection");
  public get resourceSelection() {
    return this._resourceSelection;
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
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
