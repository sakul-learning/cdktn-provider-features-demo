// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/wisdom_ai_agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccWisdomAiAgentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/wisdom_ai_agent#id DataAwsccWisdomAiAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions {
}

export function dataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions | undefined) {
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

export class DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsOutputReference {
    return new DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions {
}

export function dataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions | undefined) {
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

export class DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsOutputReference {
    return new DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition {
}

export function dataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition | undefined) {
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
export interface DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions {
}

export function dataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // and_conditions - computed: true, optional: false, required: false
  private _andConditions = new DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsList(this, "and_conditions", false);
  public get andConditions() {
    return this._andConditions;
  }

  // tag_condition - computed: true, optional: false, required: false
  private _tagCondition = new DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionOutputReference(this, "tag_condition");
  public get tagCondition() {
    return this._tagCondition;
  }
}

export class DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsOutputReference {
    return new DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition {
}

export function dataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition | undefined) {
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
export interface DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter {
}

export function dataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // and_conditions - computed: true, optional: false, required: false
  private _andConditions = new DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsList(this, "and_conditions", false);
  public get andConditions() {
    return this._andConditions;
  }

  // or_conditions - computed: true, optional: false, required: false
  private _orConditions = new DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsList(this, "or_conditions", false);
  public get orConditions() {
    return this._orConditions;
  }

  // tag_condition - computed: true, optional: false, required: false
  private _tagCondition = new DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionOutputReference(this, "tag_condition");
  public get tagCondition() {
    return this._tagCondition;
  }
}
export interface DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData {
}

export function dataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_tag_filter - computed: true, optional: false, required: false
  private _contentTagFilter = new DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOutputReference(this, "content_tag_filter");
  public get contentTagFilter() {
    return this._contentTagFilter;
  }

  // max_results - computed: true, optional: false, required: false
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }

  // override_knowledge_base_search_type - computed: true, optional: false, required: false
  public get overrideKnowledgeBaseSearchType() {
    return this.getStringAttribute('override_knowledge_base_search_type');
  }
}
export interface DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData {
}

export function dataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // knowledge_base_association_configuration_data - computed: true, optional: false, required: false
  private _knowledgeBaseAssociationConfigurationData = new DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataOutputReference(this, "knowledge_base_association_configuration_data");
  public get knowledgeBaseAssociationConfigurationData() {
    return this._knowledgeBaseAssociationConfigurationData;
  }
}
export interface DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurations {
}

export function dataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // association_configuration_data - computed: true, optional: false, required: false
  private _associationConfigurationData = new DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataOutputReference(this, "association_configuration_data");
  public get associationConfigurationData() {
    return this._associationConfigurationData;
  }

  // association_id - computed: true, optional: false, required: false
  public get associationId() {
    return this.getStringAttribute('association_id');
  }

  // association_type - computed: true, optional: false, required: false
  public get associationType() {
    return this.getStringAttribute('association_type');
  }
}

export class DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsOutputReference {
    return new DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfiguration {
}

export function dataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // answer_generation_ai_guardrail_id - computed: true, optional: false, required: false
  public get answerGenerationAiGuardrailId() {
    return this.getStringAttribute('answer_generation_ai_guardrail_id');
  }

  // answer_generation_ai_prompt_id - computed: true, optional: false, required: false
  public get answerGenerationAiPromptId() {
    return this.getStringAttribute('answer_generation_ai_prompt_id');
  }

  // association_configurations - computed: true, optional: false, required: false
  private _associationConfigurations = new DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsList(this, "association_configurations", false);
  public get associationConfigurations() {
    return this._associationConfigurations;
  }

  // intent_labeling_generation_ai_prompt_id - computed: true, optional: false, required: false
  public get intentLabelingGenerationAiPromptId() {
    return this.getStringAttribute('intent_labeling_generation_ai_prompt_id');
  }

  // locale - computed: true, optional: false, required: false
  public get locale() {
    return this.getStringAttribute('locale');
  }

  // query_reformulation_ai_prompt_id - computed: true, optional: false, required: false
  public get queryReformulationAiPromptId() {
    return this.getStringAttribute('query_reformulation_ai_prompt_id');
  }
}
export interface DataAwsccWisdomAiAgentConfigurationCaseSummarizationAiAgentConfiguration {
}

export function dataAwsccWisdomAiAgentConfigurationCaseSummarizationAiAgentConfigurationToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationCaseSummarizationAiAgentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationCaseSummarizationAiAgentConfigurationToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationCaseSummarizationAiAgentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationCaseSummarizationAiAgentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationCaseSummarizationAiAgentConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationCaseSummarizationAiAgentConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // case_summarization_ai_guardrail_id - computed: true, optional: false, required: false
  public get caseSummarizationAiGuardrailId() {
    return this.getStringAttribute('case_summarization_ai_guardrail_id');
  }

  // case_summarization_ai_prompt_id - computed: true, optional: false, required: false
  public get caseSummarizationAiPromptId() {
    return this.getStringAttribute('case_summarization_ai_prompt_id');
  }

  // locale - computed: true, optional: false, required: false
  public get locale() {
    return this.getStringAttribute('locale');
  }
}
export interface DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions {
}

export function dataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions | undefined) {
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

export class DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsOutputReference {
    return new DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions {
}

export function dataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions | undefined) {
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

export class DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsOutputReference {
    return new DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition {
}

export function dataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition | undefined) {
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
export interface DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions {
}

export function dataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // and_conditions - computed: true, optional: false, required: false
  private _andConditions = new DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsList(this, "and_conditions", false);
  public get andConditions() {
    return this._andConditions;
  }

  // tag_condition - computed: true, optional: false, required: false
  private _tagCondition = new DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionOutputReference(this, "tag_condition");
  public get tagCondition() {
    return this._tagCondition;
  }
}

export class DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsOutputReference {
    return new DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition {
}

export function dataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition | undefined) {
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
export interface DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter {
}

export function dataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // and_conditions - computed: true, optional: false, required: false
  private _andConditions = new DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsList(this, "and_conditions", false);
  public get andConditions() {
    return this._andConditions;
  }

  // or_conditions - computed: true, optional: false, required: false
  private _orConditions = new DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsList(this, "or_conditions", false);
  public get orConditions() {
    return this._orConditions;
  }

  // tag_condition - computed: true, optional: false, required: false
  private _tagCondition = new DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionOutputReference(this, "tag_condition");
  public get tagCondition() {
    return this._tagCondition;
  }
}
export interface DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData {
}

export function dataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_tag_filter - computed: true, optional: false, required: false
  private _contentTagFilter = new DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOutputReference(this, "content_tag_filter");
  public get contentTagFilter() {
    return this._contentTagFilter;
  }

  // max_results - computed: true, optional: false, required: false
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }

  // override_knowledge_base_search_type - computed: true, optional: false, required: false
  public get overrideKnowledgeBaseSearchType() {
    return this.getStringAttribute('override_knowledge_base_search_type');
  }
}
export interface DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData {
}

export function dataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // knowledge_base_association_configuration_data - computed: true, optional: false, required: false
  private _knowledgeBaseAssociationConfigurationData = new DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataOutputReference(this, "knowledge_base_association_configuration_data");
  public get knowledgeBaseAssociationConfigurationData() {
    return this._knowledgeBaseAssociationConfigurationData;
  }
}
export interface DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurations {
}

export function dataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // association_configuration_data - computed: true, optional: false, required: false
  private _associationConfigurationData = new DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataOutputReference(this, "association_configuration_data");
  public get associationConfigurationData() {
    return this._associationConfigurationData;
  }

  // association_id - computed: true, optional: false, required: false
  public get associationId() {
    return this.getStringAttribute('association_id');
  }

  // association_type - computed: true, optional: false, required: false
  public get associationType() {
    return this.getStringAttribute('association_type');
  }
}

export class DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsOutputReference {
    return new DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfiguration {
}

export function dataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // association_configurations - computed: true, optional: false, required: false
  private _associationConfigurations = new DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsList(this, "association_configurations", false);
  public get associationConfigurations() {
    return this._associationConfigurations;
  }

  // email_generative_answer_ai_prompt_id - computed: true, optional: false, required: false
  public get emailGenerativeAnswerAiPromptId() {
    return this.getStringAttribute('email_generative_answer_ai_prompt_id');
  }

  // email_query_reformulation_ai_prompt_id - computed: true, optional: false, required: false
  public get emailQueryReformulationAiPromptId() {
    return this.getStringAttribute('email_query_reformulation_ai_prompt_id');
  }

  // locale - computed: true, optional: false, required: false
  public get locale() {
    return this.getStringAttribute('locale');
  }
}
export interface DataAwsccWisdomAiAgentConfigurationEmailOverviewAiAgentConfiguration {
}

export function dataAwsccWisdomAiAgentConfigurationEmailOverviewAiAgentConfigurationToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationEmailOverviewAiAgentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationEmailOverviewAiAgentConfigurationToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationEmailOverviewAiAgentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationEmailOverviewAiAgentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationEmailOverviewAiAgentConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationEmailOverviewAiAgentConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email_overview_ai_prompt_id - computed: true, optional: false, required: false
  public get emailOverviewAiPromptId() {
    return this.getStringAttribute('email_overview_ai_prompt_id');
  }

  // locale - computed: true, optional: false, required: false
  public get locale() {
    return this.getStringAttribute('locale');
  }
}
export interface DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions {
}

export function dataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions | undefined) {
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

export class DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsOutputReference {
    return new DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions {
}

export function dataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions | undefined) {
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

export class DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsOutputReference {
    return new DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition {
}

export function dataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition | undefined) {
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
export interface DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions {
}

export function dataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // and_conditions - computed: true, optional: false, required: false
  private _andConditions = new DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsList(this, "and_conditions", false);
  public get andConditions() {
    return this._andConditions;
  }

  // tag_condition - computed: true, optional: false, required: false
  private _tagCondition = new DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionOutputReference(this, "tag_condition");
  public get tagCondition() {
    return this._tagCondition;
  }
}

export class DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsOutputReference {
    return new DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition {
}

export function dataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition | undefined) {
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
export interface DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter {
}

export function dataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // and_conditions - computed: true, optional: false, required: false
  private _andConditions = new DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsList(this, "and_conditions", false);
  public get andConditions() {
    return this._andConditions;
  }

  // or_conditions - computed: true, optional: false, required: false
  private _orConditions = new DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsList(this, "or_conditions", false);
  public get orConditions() {
    return this._orConditions;
  }

  // tag_condition - computed: true, optional: false, required: false
  private _tagCondition = new DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionOutputReference(this, "tag_condition");
  public get tagCondition() {
    return this._tagCondition;
  }
}
export interface DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData {
}

export function dataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_tag_filter - computed: true, optional: false, required: false
  private _contentTagFilter = new DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOutputReference(this, "content_tag_filter");
  public get contentTagFilter() {
    return this._contentTagFilter;
  }

  // max_results - computed: true, optional: false, required: false
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }

  // override_knowledge_base_search_type - computed: true, optional: false, required: false
  public get overrideKnowledgeBaseSearchType() {
    return this.getStringAttribute('override_knowledge_base_search_type');
  }
}
export interface DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData {
}

export function dataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // knowledge_base_association_configuration_data - computed: true, optional: false, required: false
  private _knowledgeBaseAssociationConfigurationData = new DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataOutputReference(this, "knowledge_base_association_configuration_data");
  public get knowledgeBaseAssociationConfigurationData() {
    return this._knowledgeBaseAssociationConfigurationData;
  }
}
export interface DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurations {
}

export function dataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // association_configuration_data - computed: true, optional: false, required: false
  private _associationConfigurationData = new DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataOutputReference(this, "association_configuration_data");
  public get associationConfigurationData() {
    return this._associationConfigurationData;
  }

  // association_id - computed: true, optional: false, required: false
  public get associationId() {
    return this.getStringAttribute('association_id');
  }

  // association_type - computed: true, optional: false, required: false
  public get associationType() {
    return this.getStringAttribute('association_type');
  }
}

export class DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsOutputReference {
    return new DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfiguration {
}

export function dataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // association_configurations - computed: true, optional: false, required: false
  private _associationConfigurations = new DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsList(this, "association_configurations", false);
  public get associationConfigurations() {
    return this._associationConfigurations;
  }

  // email_query_reformulation_ai_prompt_id - computed: true, optional: false, required: false
  public get emailQueryReformulationAiPromptId() {
    return this.getStringAttribute('email_query_reformulation_ai_prompt_id');
  }

  // email_response_ai_prompt_id - computed: true, optional: false, required: false
  public get emailResponseAiPromptId() {
    return this.getStringAttribute('email_response_ai_prompt_id');
  }

  // locale - computed: true, optional: false, required: false
  public get locale() {
    return this.getStringAttribute('locale');
  }
}
export interface DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions {
}

export function dataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions | undefined) {
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

export class DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsOutputReference {
    return new DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions {
}

export function dataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions | undefined) {
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

export class DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsOutputReference {
    return new DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition {
}

export function dataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition | undefined) {
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
export interface DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions {
}

export function dataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // and_conditions - computed: true, optional: false, required: false
  private _andConditions = new DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsList(this, "and_conditions", false);
  public get andConditions() {
    return this._andConditions;
  }

  // tag_condition - computed: true, optional: false, required: false
  private _tagCondition = new DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionOutputReference(this, "tag_condition");
  public get tagCondition() {
    return this._tagCondition;
  }
}

export class DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsOutputReference {
    return new DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition {
}

export function dataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition | undefined) {
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
export interface DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter {
}

export function dataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // and_conditions - computed: true, optional: false, required: false
  private _andConditions = new DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsList(this, "and_conditions", false);
  public get andConditions() {
    return this._andConditions;
  }

  // or_conditions - computed: true, optional: false, required: false
  private _orConditions = new DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsList(this, "or_conditions", false);
  public get orConditions() {
    return this._orConditions;
  }

  // tag_condition - computed: true, optional: false, required: false
  private _tagCondition = new DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionOutputReference(this, "tag_condition");
  public get tagCondition() {
    return this._tagCondition;
  }
}
export interface DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData {
}

export function dataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_tag_filter - computed: true, optional: false, required: false
  private _contentTagFilter = new DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOutputReference(this, "content_tag_filter");
  public get contentTagFilter() {
    return this._contentTagFilter;
  }

  // max_results - computed: true, optional: false, required: false
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }

  // override_knowledge_base_search_type - computed: true, optional: false, required: false
  public get overrideKnowledgeBaseSearchType() {
    return this.getStringAttribute('override_knowledge_base_search_type');
  }
}
export interface DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData {
}

export function dataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // knowledge_base_association_configuration_data - computed: true, optional: false, required: false
  private _knowledgeBaseAssociationConfigurationData = new DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataOutputReference(this, "knowledge_base_association_configuration_data");
  public get knowledgeBaseAssociationConfigurationData() {
    return this._knowledgeBaseAssociationConfigurationData;
  }
}
export interface DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurations {
}

export function dataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // association_configuration_data - computed: true, optional: false, required: false
  private _associationConfigurationData = new DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataOutputReference(this, "association_configuration_data");
  public get associationConfigurationData() {
    return this._associationConfigurationData;
  }

  // association_id - computed: true, optional: false, required: false
  public get associationId() {
    return this.getStringAttribute('association_id');
  }

  // association_type - computed: true, optional: false, required: false
  public get associationType() {
    return this.getStringAttribute('association_type');
  }
}

export class DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsOutputReference {
    return new DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfiguration {
}

export function dataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // answer_generation_ai_guardrail_id - computed: true, optional: false, required: false
  public get answerGenerationAiGuardrailId() {
    return this.getStringAttribute('answer_generation_ai_guardrail_id');
  }

  // answer_generation_ai_prompt_id - computed: true, optional: false, required: false
  public get answerGenerationAiPromptId() {
    return this.getStringAttribute('answer_generation_ai_prompt_id');
  }

  // association_configurations - computed: true, optional: false, required: false
  private _associationConfigurations = new DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsList(this, "association_configurations", false);
  public get associationConfigurations() {
    return this._associationConfigurations;
  }

  // locale - computed: true, optional: false, required: false
  public get locale() {
    return this.getStringAttribute('locale');
  }
}
export interface DataAwsccWisdomAiAgentConfigurationNoteTakingAiAgentConfiguration {
}

export function dataAwsccWisdomAiAgentConfigurationNoteTakingAiAgentConfigurationToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationNoteTakingAiAgentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationNoteTakingAiAgentConfigurationToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationNoteTakingAiAgentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationNoteTakingAiAgentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationNoteTakingAiAgentConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationNoteTakingAiAgentConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // locale - computed: true, optional: false, required: false
  public get locale() {
    return this.getStringAttribute('locale');
  }

  // note_taking_ai_guardrail_id - computed: true, optional: false, required: false
  public get noteTakingAiGuardrailId() {
    return this.getStringAttribute('note_taking_ai_guardrail_id');
  }

  // note_taking_ai_prompt_id - computed: true, optional: false, required: false
  public get noteTakingAiPromptId() {
    return this.getStringAttribute('note_taking_ai_prompt_id');
  }
}
export interface DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsInstruction {
}

export function dataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsInstructionToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsInstruction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsInstructionToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsInstruction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsInstructionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsInstruction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsInstruction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // examples - computed: true, optional: false, required: false
  public get examples() {
    return this.getListAttribute('examples');
  }

  // instruction - computed: true, optional: false, required: false
  public get instruction() {
    return this.getStringAttribute('instruction');
  }
}
export interface DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFiltersOutputConfiguration {
}

export function dataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFiltersOutputConfigurationToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFiltersOutputConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFiltersOutputConfigurationToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFiltersOutputConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFiltersOutputConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFiltersOutputConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFiltersOutputConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // output_variable_name_override - computed: true, optional: false, required: false
  public get outputVariableNameOverride() {
    return this.getStringAttribute('output_variable_name_override');
  }

  // session_data_namespace - computed: true, optional: false, required: false
  public get sessionDataNamespace() {
    return this.getStringAttribute('session_data_namespace');
  }
}
export interface DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFilters {
}

export function dataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFiltersToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFiltersToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // json_path - computed: true, optional: false, required: false
  public get jsonPath() {
    return this.getStringAttribute('json_path');
  }

  // output_configuration - computed: true, optional: false, required: false
  private _outputConfiguration = new DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFiltersOutputConfigurationOutputReference(this, "output_configuration");
  public get outputConfiguration() {
    return this._outputConfiguration;
  }
}

export class DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFiltersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFiltersOutputReference {
    return new DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValueConstant {
}

export function dataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValueConstantToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValueConstant): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValueConstantToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValueConstant): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValueConstantOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValueConstant | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValueConstant | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValue {
}

export function dataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValueToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValueToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // constant - computed: true, optional: false, required: false
  private _constant = new DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValueConstantOutputReference(this, "constant");
  public get constant() {
    return this._constant;
  }
}
export interface DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValues {
}

export function dataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValues): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValues): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // json_path - computed: true, optional: false, required: false
  public get jsonPath() {
    return this.getStringAttribute('json_path');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesOutputReference {
    return new DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsUserInteractionConfiguration {
}

export function dataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsUserInteractionConfigurationToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsUserInteractionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsUserInteractionConfigurationToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsUserInteractionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsUserInteractionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsUserInteractionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsUserInteractionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_user_confirmation_required - computed: true, optional: false, required: false
  public get isUserConfirmationRequired() {
    return this.getBooleanAttribute('is_user_confirmation_required');
  }
}
export interface DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurations {
}

export function dataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // annotations - computed: true, optional: false, required: false
  public get annotations() {
    return this.getStringAttribute('annotations');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // input_schema - computed: true, optional: false, required: false
  public get inputSchema() {
    return this.getStringAttribute('input_schema');
  }

  // instruction - computed: true, optional: false, required: false
  private _instruction = new DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsInstructionOutputReference(this, "instruction");
  public get instruction() {
    return this._instruction;
  }

  // output_filters - computed: true, optional: false, required: false
  private _outputFilters = new DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFiltersList(this, "output_filters", false);
  public get outputFilters() {
    return this._outputFilters;
  }

  // output_schema - computed: true, optional: false, required: false
  public get outputSchema() {
    return this.getStringAttribute('output_schema');
  }

  // override_input_values - computed: true, optional: false, required: false
  private _overrideInputValues = new DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesList(this, "override_input_values", false);
  public get overrideInputValues() {
    return this._overrideInputValues;
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // tool_id - computed: true, optional: false, required: false
  public get toolId() {
    return this.getStringAttribute('tool_id');
  }

  // tool_name - computed: true, optional: false, required: false
  public get toolName() {
    return this.getStringAttribute('tool_name');
  }

  // tool_type - computed: true, optional: false, required: false
  public get toolType() {
    return this.getStringAttribute('tool_type');
  }

  // user_interaction_configuration - computed: true, optional: false, required: false
  private _userInteractionConfiguration = new DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsUserInteractionConfigurationOutputReference(this, "user_interaction_configuration");
  public get userInteractionConfiguration() {
    return this._userInteractionConfiguration;
  }
}

export class DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputReference {
    return new DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfiguration {
}

export function dataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connect_instance_arn - computed: true, optional: false, required: false
  public get connectInstanceArn() {
    return this.getStringAttribute('connect_instance_arn');
  }

  // locale - computed: true, optional: false, required: false
  public get locale() {
    return this.getStringAttribute('locale');
  }

  // orchestration_ai_guardrail_id - computed: true, optional: false, required: false
  public get orchestrationAiGuardrailId() {
    return this.getStringAttribute('orchestration_ai_guardrail_id');
  }

  // orchestration_ai_prompt_id - computed: true, optional: false, required: false
  public get orchestrationAiPromptId() {
    return this.getStringAttribute('orchestration_ai_prompt_id');
  }

  // tool_configurations - computed: true, optional: false, required: false
  private _toolConfigurations = new DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsList(this, "tool_configurations", false);
  public get toolConfigurations() {
    return this._toolConfigurations;
  }
}
export interface DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions {
}

export function dataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions | undefined) {
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

export class DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsOutputReference {
    return new DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions {
}

export function dataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions | undefined) {
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

export class DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsOutputReference {
    return new DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition {
}

export function dataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition | undefined) {
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
export interface DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions {
}

export function dataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // and_conditions - computed: true, optional: false, required: false
  private _andConditions = new DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsList(this, "and_conditions", false);
  public get andConditions() {
    return this._andConditions;
  }

  // tag_condition - computed: true, optional: false, required: false
  private _tagCondition = new DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionOutputReference(this, "tag_condition");
  public get tagCondition() {
    return this._tagCondition;
  }
}

export class DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsOutputReference {
    return new DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition {
}

export function dataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition | undefined) {
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
export interface DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter {
}

export function dataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // and_conditions - computed: true, optional: false, required: false
  private _andConditions = new DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsList(this, "and_conditions", false);
  public get andConditions() {
    return this._andConditions;
  }

  // or_conditions - computed: true, optional: false, required: false
  private _orConditions = new DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsList(this, "or_conditions", false);
  public get orConditions() {
    return this._orConditions;
  }

  // tag_condition - computed: true, optional: false, required: false
  private _tagCondition = new DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionOutputReference(this, "tag_condition");
  public get tagCondition() {
    return this._tagCondition;
  }
}
export interface DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData {
}

export function dataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_tag_filter - computed: true, optional: false, required: false
  private _contentTagFilter = new DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOutputReference(this, "content_tag_filter");
  public get contentTagFilter() {
    return this._contentTagFilter;
  }

  // max_results - computed: true, optional: false, required: false
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }

  // override_knowledge_base_search_type - computed: true, optional: false, required: false
  public get overrideKnowledgeBaseSearchType() {
    return this.getStringAttribute('override_knowledge_base_search_type');
  }
}
export interface DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData {
}

export function dataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // knowledge_base_association_configuration_data - computed: true, optional: false, required: false
  private _knowledgeBaseAssociationConfigurationData = new DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataOutputReference(this, "knowledge_base_association_configuration_data");
  public get knowledgeBaseAssociationConfigurationData() {
    return this._knowledgeBaseAssociationConfigurationData;
  }
}
export interface DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurations {
}

export function dataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // association_configuration_data - computed: true, optional: false, required: false
  private _associationConfigurationData = new DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataOutputReference(this, "association_configuration_data");
  public get associationConfigurationData() {
    return this._associationConfigurationData;
  }

  // association_id - computed: true, optional: false, required: false
  public get associationId() {
    return this.getStringAttribute('association_id');
  }

  // association_type - computed: true, optional: false, required: false
  public get associationType() {
    return this.getStringAttribute('association_type');
  }
}

export class DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsOutputReference {
    return new DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfiguration {
}

export function dataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationToTerraform(struct?: DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationToHclTerraform(struct?: DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // association_configurations - computed: true, optional: false, required: false
  private _associationConfigurations = new DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsList(this, "association_configurations", false);
  public get associationConfigurations() {
    return this._associationConfigurations;
  }

  // self_service_ai_guardrail_id - computed: true, optional: false, required: false
  public get selfServiceAiGuardrailId() {
    return this.getStringAttribute('self_service_ai_guardrail_id');
  }

  // self_service_answer_generation_ai_prompt_id - computed: true, optional: false, required: false
  public get selfServiceAnswerGenerationAiPromptId() {
    return this.getStringAttribute('self_service_answer_generation_ai_prompt_id');
  }

  // self_service_pre_processing_ai_prompt_id - computed: true, optional: false, required: false
  public get selfServicePreProcessingAiPromptId() {
    return this.getStringAttribute('self_service_pre_processing_ai_prompt_id');
  }
}
export interface DataAwsccWisdomAiAgentConfiguration {
}

export function dataAwsccWisdomAiAgentConfigurationToTerraform(struct?: DataAwsccWisdomAiAgentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiAgentConfigurationToHclTerraform(struct?: DataAwsccWisdomAiAgentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiAgentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiAgentConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiAgentConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // answer_recommendation_ai_agent_configuration - computed: true, optional: false, required: false
  private _answerRecommendationAiAgentConfiguration = new DataAwsccWisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationOutputReference(this, "answer_recommendation_ai_agent_configuration");
  public get answerRecommendationAiAgentConfiguration() {
    return this._answerRecommendationAiAgentConfiguration;
  }

  // case_summarization_ai_agent_configuration - computed: true, optional: false, required: false
  private _caseSummarizationAiAgentConfiguration = new DataAwsccWisdomAiAgentConfigurationCaseSummarizationAiAgentConfigurationOutputReference(this, "case_summarization_ai_agent_configuration");
  public get caseSummarizationAiAgentConfiguration() {
    return this._caseSummarizationAiAgentConfiguration;
  }

  // email_generative_answer_ai_agent_configuration - computed: true, optional: false, required: false
  private _emailGenerativeAnswerAiAgentConfiguration = new DataAwsccWisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationOutputReference(this, "email_generative_answer_ai_agent_configuration");
  public get emailGenerativeAnswerAiAgentConfiguration() {
    return this._emailGenerativeAnswerAiAgentConfiguration;
  }

  // email_overview_ai_agent_configuration - computed: true, optional: false, required: false
  private _emailOverviewAiAgentConfiguration = new DataAwsccWisdomAiAgentConfigurationEmailOverviewAiAgentConfigurationOutputReference(this, "email_overview_ai_agent_configuration");
  public get emailOverviewAiAgentConfiguration() {
    return this._emailOverviewAiAgentConfiguration;
  }

  // email_response_ai_agent_configuration - computed: true, optional: false, required: false
  private _emailResponseAiAgentConfiguration = new DataAwsccWisdomAiAgentConfigurationEmailResponseAiAgentConfigurationOutputReference(this, "email_response_ai_agent_configuration");
  public get emailResponseAiAgentConfiguration() {
    return this._emailResponseAiAgentConfiguration;
  }

  // manual_search_ai_agent_configuration - computed: true, optional: false, required: false
  private _manualSearchAiAgentConfiguration = new DataAwsccWisdomAiAgentConfigurationManualSearchAiAgentConfigurationOutputReference(this, "manual_search_ai_agent_configuration");
  public get manualSearchAiAgentConfiguration() {
    return this._manualSearchAiAgentConfiguration;
  }

  // note_taking_ai_agent_configuration - computed: true, optional: false, required: false
  private _noteTakingAiAgentConfiguration = new DataAwsccWisdomAiAgentConfigurationNoteTakingAiAgentConfigurationOutputReference(this, "note_taking_ai_agent_configuration");
  public get noteTakingAiAgentConfiguration() {
    return this._noteTakingAiAgentConfiguration;
  }

  // orchestration_ai_agent_configuration - computed: true, optional: false, required: false
  private _orchestrationAiAgentConfiguration = new DataAwsccWisdomAiAgentConfigurationOrchestrationAiAgentConfigurationOutputReference(this, "orchestration_ai_agent_configuration");
  public get orchestrationAiAgentConfiguration() {
    return this._orchestrationAiAgentConfiguration;
  }

  // self_service_ai_agent_configuration - computed: true, optional: false, required: false
  private _selfServiceAiAgentConfiguration = new DataAwsccWisdomAiAgentConfigurationSelfServiceAiAgentConfigurationOutputReference(this, "self_service_ai_agent_configuration");
  public get selfServiceAiAgentConfiguration() {
    return this._selfServiceAiAgentConfiguration;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/wisdom_ai_agent awscc_wisdom_ai_agent}
*/
export class DataAwsccWisdomAiAgent extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_wisdom_ai_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccWisdomAiAgent resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccWisdomAiAgent to import
  * @param importFromId The id of the existing DataAwsccWisdomAiAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/wisdom_ai_agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccWisdomAiAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_wisdom_ai_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/wisdom_ai_agent awscc_wisdom_ai_agent} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccWisdomAiAgentConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccWisdomAiAgentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_wisdom_ai_agent',
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

  // ai_agent_arn - computed: true, optional: false, required: false
  public get aiAgentArn() {
    return this.getStringAttribute('ai_agent_arn');
  }

  // ai_agent_id - computed: true, optional: false, required: false
  public get aiAgentId() {
    return this.getStringAttribute('ai_agent_id');
  }

  // assistant_arn - computed: true, optional: false, required: false
  public get assistantArn() {
    return this.getStringAttribute('assistant_arn');
  }

  // assistant_id - computed: true, optional: false, required: false
  public get assistantId() {
    return this.getStringAttribute('assistant_id');
  }

  // configuration - computed: true, optional: false, required: false
  private _configuration = new DataAwsccWisdomAiAgentConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
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

  // modified_time_seconds - computed: true, optional: false, required: false
  public get modifiedTimeSeconds() {
    return this.getNumberAttribute('modified_time_seconds');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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
