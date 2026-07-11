// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface WisdomAiAgentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#assistant_id WisdomAiAgent#assistant_id}
  */
  readonly assistantId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#configuration WisdomAiAgent#configuration}
  */
  readonly configuration: WisdomAiAgentConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#description WisdomAiAgent#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#name WisdomAiAgent#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#tags WisdomAiAgent#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#type WisdomAiAgent#type}
  */
  readonly type: string;
}
export interface WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#key WisdomAiAgent#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#value WisdomAiAgent#value}
  */
  readonly value?: string;
}

export function wisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsToTerraform(struct?: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function wisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsToHclTerraform(struct?: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions | cdktn.IResolvable): any {
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

export class WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions | cdktn.IResolvable | undefined) {
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

export class WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsList extends cdktn.ComplexList {
  public internalValue? : WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions[] | cdktn.IResolvable

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
  public get(index: number): WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsOutputReference {
    return new WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#key WisdomAiAgent#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#value WisdomAiAgent#value}
  */
  readonly value?: string;
}

export function wisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsToTerraform(struct?: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function wisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsToHclTerraform(struct?: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions | cdktn.IResolvable): any {
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

export class WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions | cdktn.IResolvable | undefined) {
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

export class WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsList extends cdktn.ComplexList {
  public internalValue? : WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions[] | cdktn.IResolvable

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
  public get(index: number): WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsOutputReference {
    return new WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#key WisdomAiAgent#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#value WisdomAiAgent#value}
  */
  readonly value?: string;
}

export function wisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionToTerraform(struct?: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function wisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionToHclTerraform(struct?: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition | cdktn.IResolvable): any {
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

export class WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition | cdktn.IResolvable | undefined) {
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
export interface WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#and_conditions WisdomAiAgent#and_conditions}
  */
  readonly andConditions?: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#tag_condition WisdomAiAgent#tag_condition}
  */
  readonly tagCondition?: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition;
}

export function wisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsToTerraform(struct?: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    and_conditions: cdktn.listMapper(wisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsToTerraform, false)(struct!.andConditions),
    tag_condition: wisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionToTerraform(struct!.tagCondition),
  }
}


export function wisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsToHclTerraform(struct?: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    and_conditions: {
      value: cdktn.listMapperHcl(wisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsToHclTerraform, false)(struct!.andConditions),
      isBlock: true,
      type: "list",
      storageClassType: "WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsList",
    },
    tag_condition: {
      value: wisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionToHclTerraform(struct!.tagCondition),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._andConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.andConditions = this._andConditions?.internalValue;
    }
    if (this._tagCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagCondition = this._tagCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._andConditions.internalValue = undefined;
      this._tagCondition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._andConditions.internalValue = value.andConditions;
      this._tagCondition.internalValue = value.tagCondition;
    }
  }

  // and_conditions - computed: true, optional: true, required: false
  private _andConditions = new WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsList(this, "and_conditions", false);
  public get andConditions() {
    return this._andConditions;
  }
  public putAndConditions(value: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions[] | cdktn.IResolvable) {
    this._andConditions.internalValue = value;
  }
  public resetAndConditions() {
    this._andConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andConditionsInput() {
    return this._andConditions.internalValue;
  }

  // tag_condition - computed: true, optional: true, required: false
  private _tagCondition = new WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionOutputReference(this, "tag_condition");
  public get tagCondition() {
    return this._tagCondition;
  }
  public putTagCondition(value: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition) {
    this._tagCondition.internalValue = value;
  }
  public resetTagCondition() {
    this._tagCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagConditionInput() {
    return this._tagCondition.internalValue;
  }
}

export class WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsList extends cdktn.ComplexList {
  public internalValue? : WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions[] | cdktn.IResolvable

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
  public get(index: number): WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsOutputReference {
    return new WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#key WisdomAiAgent#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#value WisdomAiAgent#value}
  */
  readonly value?: string;
}

export function wisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionToTerraform(struct?: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function wisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionToHclTerraform(struct?: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition | cdktn.IResolvable): any {
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

export class WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition | cdktn.IResolvable | undefined) {
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
export interface WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#and_conditions WisdomAiAgent#and_conditions}
  */
  readonly andConditions?: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#or_conditions WisdomAiAgent#or_conditions}
  */
  readonly orConditions?: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#tag_condition WisdomAiAgent#tag_condition}
  */
  readonly tagCondition?: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition;
}

export function wisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterToTerraform(struct?: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    and_conditions: cdktn.listMapper(wisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsToTerraform, false)(struct!.andConditions),
    or_conditions: cdktn.listMapper(wisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsToTerraform, false)(struct!.orConditions),
    tag_condition: wisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionToTerraform(struct!.tagCondition),
  }
}


export function wisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterToHclTerraform(struct?: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    and_conditions: {
      value: cdktn.listMapperHcl(wisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsToHclTerraform, false)(struct!.andConditions),
      isBlock: true,
      type: "list",
      storageClassType: "WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsList",
    },
    or_conditions: {
      value: cdktn.listMapperHcl(wisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsToHclTerraform, false)(struct!.orConditions),
      isBlock: true,
      type: "list",
      storageClassType: "WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsList",
    },
    tag_condition: {
      value: wisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionToHclTerraform(struct!.tagCondition),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._andConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.andConditions = this._andConditions?.internalValue;
    }
    if (this._orConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orConditions = this._orConditions?.internalValue;
    }
    if (this._tagCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagCondition = this._tagCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._andConditions.internalValue = undefined;
      this._orConditions.internalValue = undefined;
      this._tagCondition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._andConditions.internalValue = value.andConditions;
      this._orConditions.internalValue = value.orConditions;
      this._tagCondition.internalValue = value.tagCondition;
    }
  }

  // and_conditions - computed: true, optional: true, required: false
  private _andConditions = new WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsList(this, "and_conditions", false);
  public get andConditions() {
    return this._andConditions;
  }
  public putAndConditions(value: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions[] | cdktn.IResolvable) {
    this._andConditions.internalValue = value;
  }
  public resetAndConditions() {
    this._andConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andConditionsInput() {
    return this._andConditions.internalValue;
  }

  // or_conditions - computed: true, optional: true, required: false
  private _orConditions = new WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsList(this, "or_conditions", false);
  public get orConditions() {
    return this._orConditions;
  }
  public putOrConditions(value: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions[] | cdktn.IResolvable) {
    this._orConditions.internalValue = value;
  }
  public resetOrConditions() {
    this._orConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orConditionsInput() {
    return this._orConditions.internalValue;
  }

  // tag_condition - computed: true, optional: true, required: false
  private _tagCondition = new WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionOutputReference(this, "tag_condition");
  public get tagCondition() {
    return this._tagCondition;
  }
  public putTagCondition(value: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition) {
    this._tagCondition.internalValue = value;
  }
  public resetTagCondition() {
    this._tagCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagConditionInput() {
    return this._tagCondition.internalValue;
  }
}
export interface WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#content_tag_filter WisdomAiAgent#content_tag_filter}
  */
  readonly contentTagFilter?: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#max_results WisdomAiAgent#max_results}
  */
  readonly maxResults?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#override_knowledge_base_search_type WisdomAiAgent#override_knowledge_base_search_type}
  */
  readonly overrideKnowledgeBaseSearchType?: string;
}

export function wisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataToTerraform(struct?: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_tag_filter: wisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterToTerraform(struct!.contentTagFilter),
    max_results: cdktn.numberToTerraform(struct!.maxResults),
    override_knowledge_base_search_type: cdktn.stringToTerraform(struct!.overrideKnowledgeBaseSearchType),
  }
}


export function wisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataToHclTerraform(struct?: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_tag_filter: {
      value: wisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterToHclTerraform(struct!.contentTagFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter",
    },
    max_results: {
      value: cdktn.numberToHclTerraform(struct!.maxResults),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    override_knowledge_base_search_type: {
      value: cdktn.stringToHclTerraform(struct!.overrideKnowledgeBaseSearchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentTagFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentTagFilter = this._contentTagFilter?.internalValue;
    }
    if (this._maxResults !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxResults = this._maxResults;
    }
    if (this._overrideKnowledgeBaseSearchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideKnowledgeBaseSearchType = this._overrideKnowledgeBaseSearchType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentTagFilter.internalValue = undefined;
      this._maxResults = undefined;
      this._overrideKnowledgeBaseSearchType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentTagFilter.internalValue = value.contentTagFilter;
      this._maxResults = value.maxResults;
      this._overrideKnowledgeBaseSearchType = value.overrideKnowledgeBaseSearchType;
    }
  }

  // content_tag_filter - computed: true, optional: true, required: false
  private _contentTagFilter = new WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOutputReference(this, "content_tag_filter");
  public get contentTagFilter() {
    return this._contentTagFilter;
  }
  public putContentTagFilter(value: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter) {
    this._contentTagFilter.internalValue = value;
  }
  public resetContentTagFilter() {
    this._contentTagFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTagFilterInput() {
    return this._contentTagFilter.internalValue;
  }

  // max_results - computed: true, optional: true, required: false
  private _maxResults?: number;
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }
  public set maxResults(value: number) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
  }

  // override_knowledge_base_search_type - computed: true, optional: true, required: false
  private _overrideKnowledgeBaseSearchType?: string;
  public get overrideKnowledgeBaseSearchType() {
    return this.getStringAttribute('override_knowledge_base_search_type');
  }
  public set overrideKnowledgeBaseSearchType(value: string) {
    this._overrideKnowledgeBaseSearchType = value;
  }
  public resetOverrideKnowledgeBaseSearchType() {
    this._overrideKnowledgeBaseSearchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideKnowledgeBaseSearchTypeInput() {
    return this._overrideKnowledgeBaseSearchType;
  }
}
export interface WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#knowledge_base_association_configuration_data WisdomAiAgent#knowledge_base_association_configuration_data}
  */
  readonly knowledgeBaseAssociationConfigurationData?: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData;
}

export function wisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataToTerraform(struct?: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    knowledge_base_association_configuration_data: wisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataToTerraform(struct!.knowledgeBaseAssociationConfigurationData),
  }
}


export function wisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataToHclTerraform(struct?: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    knowledge_base_association_configuration_data: {
      value: wisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataToHclTerraform(struct!.knowledgeBaseAssociationConfigurationData),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._knowledgeBaseAssociationConfigurationData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.knowledgeBaseAssociationConfigurationData = this._knowledgeBaseAssociationConfigurationData?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._knowledgeBaseAssociationConfigurationData.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._knowledgeBaseAssociationConfigurationData.internalValue = value.knowledgeBaseAssociationConfigurationData;
    }
  }

  // knowledge_base_association_configuration_data - computed: true, optional: true, required: false
  private _knowledgeBaseAssociationConfigurationData = new WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataOutputReference(this, "knowledge_base_association_configuration_data");
  public get knowledgeBaseAssociationConfigurationData() {
    return this._knowledgeBaseAssociationConfigurationData;
  }
  public putKnowledgeBaseAssociationConfigurationData(value: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData) {
    this._knowledgeBaseAssociationConfigurationData.internalValue = value;
  }
  public resetKnowledgeBaseAssociationConfigurationData() {
    this._knowledgeBaseAssociationConfigurationData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeBaseAssociationConfigurationDataInput() {
    return this._knowledgeBaseAssociationConfigurationData.internalValue;
  }
}
export interface WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#association_configuration_data WisdomAiAgent#association_configuration_data}
  */
  readonly associationConfigurationData?: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#association_id WisdomAiAgent#association_id}
  */
  readonly associationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#association_type WisdomAiAgent#association_type}
  */
  readonly associationType?: string;
}

export function wisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsToTerraform(struct?: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    association_configuration_data: wisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataToTerraform(struct!.associationConfigurationData),
    association_id: cdktn.stringToTerraform(struct!.associationId),
    association_type: cdktn.stringToTerraform(struct!.associationType),
  }
}


export function wisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsToHclTerraform(struct?: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    association_configuration_data: {
      value: wisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataToHclTerraform(struct!.associationConfigurationData),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData",
    },
    association_id: {
      value: cdktn.stringToHclTerraform(struct!.associationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    association_type: {
      value: cdktn.stringToHclTerraform(struct!.associationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._associationConfigurationData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.associationConfigurationData = this._associationConfigurationData?.internalValue;
    }
    if (this._associationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.associationId = this._associationId;
    }
    if (this._associationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.associationType = this._associationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._associationConfigurationData.internalValue = undefined;
      this._associationId = undefined;
      this._associationType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._associationConfigurationData.internalValue = value.associationConfigurationData;
      this._associationId = value.associationId;
      this._associationType = value.associationType;
    }
  }

  // association_configuration_data - computed: true, optional: true, required: false
  private _associationConfigurationData = new WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataOutputReference(this, "association_configuration_data");
  public get associationConfigurationData() {
    return this._associationConfigurationData;
  }
  public putAssociationConfigurationData(value: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData) {
    this._associationConfigurationData.internalValue = value;
  }
  public resetAssociationConfigurationData() {
    this._associationConfigurationData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationConfigurationDataInput() {
    return this._associationConfigurationData.internalValue;
  }

  // association_id - computed: true, optional: true, required: false
  private _associationId?: string;
  public get associationId() {
    return this.getStringAttribute('association_id');
  }
  public set associationId(value: string) {
    this._associationId = value;
  }
  public resetAssociationId() {
    this._associationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationIdInput() {
    return this._associationId;
  }

  // association_type - computed: true, optional: true, required: false
  private _associationType?: string;
  public get associationType() {
    return this.getStringAttribute('association_type');
  }
  public set associationType(value: string) {
    this._associationType = value;
  }
  public resetAssociationType() {
    this._associationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationTypeInput() {
    return this._associationType;
  }
}

export class WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsList extends cdktn.ComplexList {
  public internalValue? : WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurations[] | cdktn.IResolvable

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
  public get(index: number): WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsOutputReference {
    return new WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#answer_generation_ai_guardrail_id WisdomAiAgent#answer_generation_ai_guardrail_id}
  */
  readonly answerGenerationAiGuardrailId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#answer_generation_ai_prompt_id WisdomAiAgent#answer_generation_ai_prompt_id}
  */
  readonly answerGenerationAiPromptId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#association_configurations WisdomAiAgent#association_configurations}
  */
  readonly associationConfigurations?: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurations[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#intent_labeling_generation_ai_prompt_id WisdomAiAgent#intent_labeling_generation_ai_prompt_id}
  */
  readonly intentLabelingGenerationAiPromptId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#locale WisdomAiAgent#locale}
  */
  readonly locale?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#query_reformulation_ai_prompt_id WisdomAiAgent#query_reformulation_ai_prompt_id}
  */
  readonly queryReformulationAiPromptId?: string;
}

export function wisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationToTerraform(struct?: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    answer_generation_ai_guardrail_id: cdktn.stringToTerraform(struct!.answerGenerationAiGuardrailId),
    answer_generation_ai_prompt_id: cdktn.stringToTerraform(struct!.answerGenerationAiPromptId),
    association_configurations: cdktn.listMapper(wisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsToTerraform, false)(struct!.associationConfigurations),
    intent_labeling_generation_ai_prompt_id: cdktn.stringToTerraform(struct!.intentLabelingGenerationAiPromptId),
    locale: cdktn.stringToTerraform(struct!.locale),
    query_reformulation_ai_prompt_id: cdktn.stringToTerraform(struct!.queryReformulationAiPromptId),
  }
}


export function wisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationToHclTerraform(struct?: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    answer_generation_ai_guardrail_id: {
      value: cdktn.stringToHclTerraform(struct!.answerGenerationAiGuardrailId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    answer_generation_ai_prompt_id: {
      value: cdktn.stringToHclTerraform(struct!.answerGenerationAiPromptId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    association_configurations: {
      value: cdktn.listMapperHcl(wisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsToHclTerraform, false)(struct!.associationConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsList",
    },
    intent_labeling_generation_ai_prompt_id: {
      value: cdktn.stringToHclTerraform(struct!.intentLabelingGenerationAiPromptId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locale: {
      value: cdktn.stringToHclTerraform(struct!.locale),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_reformulation_ai_prompt_id: {
      value: cdktn.stringToHclTerraform(struct!.queryReformulationAiPromptId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._answerGenerationAiGuardrailId !== undefined) {
      hasAnyValues = true;
      internalValueResult.answerGenerationAiGuardrailId = this._answerGenerationAiGuardrailId;
    }
    if (this._answerGenerationAiPromptId !== undefined) {
      hasAnyValues = true;
      internalValueResult.answerGenerationAiPromptId = this._answerGenerationAiPromptId;
    }
    if (this._associationConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.associationConfigurations = this._associationConfigurations?.internalValue;
    }
    if (this._intentLabelingGenerationAiPromptId !== undefined) {
      hasAnyValues = true;
      internalValueResult.intentLabelingGenerationAiPromptId = this._intentLabelingGenerationAiPromptId;
    }
    if (this._locale !== undefined) {
      hasAnyValues = true;
      internalValueResult.locale = this._locale;
    }
    if (this._queryReformulationAiPromptId !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryReformulationAiPromptId = this._queryReformulationAiPromptId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._answerGenerationAiGuardrailId = undefined;
      this._answerGenerationAiPromptId = undefined;
      this._associationConfigurations.internalValue = undefined;
      this._intentLabelingGenerationAiPromptId = undefined;
      this._locale = undefined;
      this._queryReformulationAiPromptId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._answerGenerationAiGuardrailId = value.answerGenerationAiGuardrailId;
      this._answerGenerationAiPromptId = value.answerGenerationAiPromptId;
      this._associationConfigurations.internalValue = value.associationConfigurations;
      this._intentLabelingGenerationAiPromptId = value.intentLabelingGenerationAiPromptId;
      this._locale = value.locale;
      this._queryReformulationAiPromptId = value.queryReformulationAiPromptId;
    }
  }

  // answer_generation_ai_guardrail_id - computed: true, optional: true, required: false
  private _answerGenerationAiGuardrailId?: string;
  public get answerGenerationAiGuardrailId() {
    return this.getStringAttribute('answer_generation_ai_guardrail_id');
  }
  public set answerGenerationAiGuardrailId(value: string) {
    this._answerGenerationAiGuardrailId = value;
  }
  public resetAnswerGenerationAiGuardrailId() {
    this._answerGenerationAiGuardrailId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get answerGenerationAiGuardrailIdInput() {
    return this._answerGenerationAiGuardrailId;
  }

  // answer_generation_ai_prompt_id - computed: true, optional: true, required: false
  private _answerGenerationAiPromptId?: string;
  public get answerGenerationAiPromptId() {
    return this.getStringAttribute('answer_generation_ai_prompt_id');
  }
  public set answerGenerationAiPromptId(value: string) {
    this._answerGenerationAiPromptId = value;
  }
  public resetAnswerGenerationAiPromptId() {
    this._answerGenerationAiPromptId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get answerGenerationAiPromptIdInput() {
    return this._answerGenerationAiPromptId;
  }

  // association_configurations - computed: true, optional: true, required: false
  private _associationConfigurations = new WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurationsList(this, "association_configurations", false);
  public get associationConfigurations() {
    return this._associationConfigurations;
  }
  public putAssociationConfigurations(value: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationAssociationConfigurations[] | cdktn.IResolvable) {
    this._associationConfigurations.internalValue = value;
  }
  public resetAssociationConfigurations() {
    this._associationConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationConfigurationsInput() {
    return this._associationConfigurations.internalValue;
  }

  // intent_labeling_generation_ai_prompt_id - computed: true, optional: true, required: false
  private _intentLabelingGenerationAiPromptId?: string;
  public get intentLabelingGenerationAiPromptId() {
    return this.getStringAttribute('intent_labeling_generation_ai_prompt_id');
  }
  public set intentLabelingGenerationAiPromptId(value: string) {
    this._intentLabelingGenerationAiPromptId = value;
  }
  public resetIntentLabelingGenerationAiPromptId() {
    this._intentLabelingGenerationAiPromptId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intentLabelingGenerationAiPromptIdInput() {
    return this._intentLabelingGenerationAiPromptId;
  }

  // locale - computed: true, optional: true, required: false
  private _locale?: string;
  public get locale() {
    return this.getStringAttribute('locale');
  }
  public set locale(value: string) {
    this._locale = value;
  }
  public resetLocale() {
    this._locale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localeInput() {
    return this._locale;
  }

  // query_reformulation_ai_prompt_id - computed: true, optional: true, required: false
  private _queryReformulationAiPromptId?: string;
  public get queryReformulationAiPromptId() {
    return this.getStringAttribute('query_reformulation_ai_prompt_id');
  }
  public set queryReformulationAiPromptId(value: string) {
    this._queryReformulationAiPromptId = value;
  }
  public resetQueryReformulationAiPromptId() {
    this._queryReformulationAiPromptId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryReformulationAiPromptIdInput() {
    return this._queryReformulationAiPromptId;
  }
}
export interface WisdomAiAgentConfigurationCaseSummarizationAiAgentConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#case_summarization_ai_guardrail_id WisdomAiAgent#case_summarization_ai_guardrail_id}
  */
  readonly caseSummarizationAiGuardrailId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#case_summarization_ai_prompt_id WisdomAiAgent#case_summarization_ai_prompt_id}
  */
  readonly caseSummarizationAiPromptId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#locale WisdomAiAgent#locale}
  */
  readonly locale?: string;
}

export function wisdomAiAgentConfigurationCaseSummarizationAiAgentConfigurationToTerraform(struct?: WisdomAiAgentConfigurationCaseSummarizationAiAgentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    case_summarization_ai_guardrail_id: cdktn.stringToTerraform(struct!.caseSummarizationAiGuardrailId),
    case_summarization_ai_prompt_id: cdktn.stringToTerraform(struct!.caseSummarizationAiPromptId),
    locale: cdktn.stringToTerraform(struct!.locale),
  }
}


export function wisdomAiAgentConfigurationCaseSummarizationAiAgentConfigurationToHclTerraform(struct?: WisdomAiAgentConfigurationCaseSummarizationAiAgentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    case_summarization_ai_guardrail_id: {
      value: cdktn.stringToHclTerraform(struct!.caseSummarizationAiGuardrailId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    case_summarization_ai_prompt_id: {
      value: cdktn.stringToHclTerraform(struct!.caseSummarizationAiPromptId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locale: {
      value: cdktn.stringToHclTerraform(struct!.locale),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiAgentConfigurationCaseSummarizationAiAgentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiAgentConfigurationCaseSummarizationAiAgentConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSummarizationAiGuardrailId !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSummarizationAiGuardrailId = this._caseSummarizationAiGuardrailId;
    }
    if (this._caseSummarizationAiPromptId !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSummarizationAiPromptId = this._caseSummarizationAiPromptId;
    }
    if (this._locale !== undefined) {
      hasAnyValues = true;
      internalValueResult.locale = this._locale;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfigurationCaseSummarizationAiAgentConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSummarizationAiGuardrailId = undefined;
      this._caseSummarizationAiPromptId = undefined;
      this._locale = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSummarizationAiGuardrailId = value.caseSummarizationAiGuardrailId;
      this._caseSummarizationAiPromptId = value.caseSummarizationAiPromptId;
      this._locale = value.locale;
    }
  }

  // case_summarization_ai_guardrail_id - computed: true, optional: true, required: false
  private _caseSummarizationAiGuardrailId?: string;
  public get caseSummarizationAiGuardrailId() {
    return this.getStringAttribute('case_summarization_ai_guardrail_id');
  }
  public set caseSummarizationAiGuardrailId(value: string) {
    this._caseSummarizationAiGuardrailId = value;
  }
  public resetCaseSummarizationAiGuardrailId() {
    this._caseSummarizationAiGuardrailId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSummarizationAiGuardrailIdInput() {
    return this._caseSummarizationAiGuardrailId;
  }

  // case_summarization_ai_prompt_id - computed: true, optional: true, required: false
  private _caseSummarizationAiPromptId?: string;
  public get caseSummarizationAiPromptId() {
    return this.getStringAttribute('case_summarization_ai_prompt_id');
  }
  public set caseSummarizationAiPromptId(value: string) {
    this._caseSummarizationAiPromptId = value;
  }
  public resetCaseSummarizationAiPromptId() {
    this._caseSummarizationAiPromptId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSummarizationAiPromptIdInput() {
    return this._caseSummarizationAiPromptId;
  }

  // locale - computed: true, optional: true, required: false
  private _locale?: string;
  public get locale() {
    return this.getStringAttribute('locale');
  }
  public set locale(value: string) {
    this._locale = value;
  }
  public resetLocale() {
    this._locale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localeInput() {
    return this._locale;
  }
}
export interface WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#key WisdomAiAgent#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#value WisdomAiAgent#value}
  */
  readonly value?: string;
}

export function wisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsToTerraform(struct?: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function wisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsToHclTerraform(struct?: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions | cdktn.IResolvable): any {
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

export class WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions | cdktn.IResolvable | undefined) {
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

export class WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsList extends cdktn.ComplexList {
  public internalValue? : WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions[] | cdktn.IResolvable

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
  public get(index: number): WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsOutputReference {
    return new WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#key WisdomAiAgent#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#value WisdomAiAgent#value}
  */
  readonly value?: string;
}

export function wisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsToTerraform(struct?: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function wisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsToHclTerraform(struct?: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions | cdktn.IResolvable): any {
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

export class WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions | cdktn.IResolvable | undefined) {
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

export class WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsList extends cdktn.ComplexList {
  public internalValue? : WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions[] | cdktn.IResolvable

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
  public get(index: number): WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsOutputReference {
    return new WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#key WisdomAiAgent#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#value WisdomAiAgent#value}
  */
  readonly value?: string;
}

export function wisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionToTerraform(struct?: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function wisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionToHclTerraform(struct?: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition | cdktn.IResolvable): any {
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

export class WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition | cdktn.IResolvable | undefined) {
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
export interface WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#and_conditions WisdomAiAgent#and_conditions}
  */
  readonly andConditions?: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#tag_condition WisdomAiAgent#tag_condition}
  */
  readonly tagCondition?: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition;
}

export function wisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsToTerraform(struct?: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    and_conditions: cdktn.listMapper(wisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsToTerraform, false)(struct!.andConditions),
    tag_condition: wisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionToTerraform(struct!.tagCondition),
  }
}


export function wisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsToHclTerraform(struct?: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    and_conditions: {
      value: cdktn.listMapperHcl(wisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsToHclTerraform, false)(struct!.andConditions),
      isBlock: true,
      type: "list",
      storageClassType: "WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsList",
    },
    tag_condition: {
      value: wisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionToHclTerraform(struct!.tagCondition),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._andConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.andConditions = this._andConditions?.internalValue;
    }
    if (this._tagCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagCondition = this._tagCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._andConditions.internalValue = undefined;
      this._tagCondition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._andConditions.internalValue = value.andConditions;
      this._tagCondition.internalValue = value.tagCondition;
    }
  }

  // and_conditions - computed: true, optional: true, required: false
  private _andConditions = new WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsList(this, "and_conditions", false);
  public get andConditions() {
    return this._andConditions;
  }
  public putAndConditions(value: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions[] | cdktn.IResolvable) {
    this._andConditions.internalValue = value;
  }
  public resetAndConditions() {
    this._andConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andConditionsInput() {
    return this._andConditions.internalValue;
  }

  // tag_condition - computed: true, optional: true, required: false
  private _tagCondition = new WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionOutputReference(this, "tag_condition");
  public get tagCondition() {
    return this._tagCondition;
  }
  public putTagCondition(value: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition) {
    this._tagCondition.internalValue = value;
  }
  public resetTagCondition() {
    this._tagCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagConditionInput() {
    return this._tagCondition.internalValue;
  }
}

export class WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsList extends cdktn.ComplexList {
  public internalValue? : WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions[] | cdktn.IResolvable

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
  public get(index: number): WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsOutputReference {
    return new WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#key WisdomAiAgent#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#value WisdomAiAgent#value}
  */
  readonly value?: string;
}

export function wisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionToTerraform(struct?: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function wisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionToHclTerraform(struct?: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition | cdktn.IResolvable): any {
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

export class WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition | cdktn.IResolvable | undefined) {
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
export interface WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#and_conditions WisdomAiAgent#and_conditions}
  */
  readonly andConditions?: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#or_conditions WisdomAiAgent#or_conditions}
  */
  readonly orConditions?: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#tag_condition WisdomAiAgent#tag_condition}
  */
  readonly tagCondition?: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition;
}

export function wisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterToTerraform(struct?: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    and_conditions: cdktn.listMapper(wisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsToTerraform, false)(struct!.andConditions),
    or_conditions: cdktn.listMapper(wisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsToTerraform, false)(struct!.orConditions),
    tag_condition: wisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionToTerraform(struct!.tagCondition),
  }
}


export function wisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterToHclTerraform(struct?: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    and_conditions: {
      value: cdktn.listMapperHcl(wisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsToHclTerraform, false)(struct!.andConditions),
      isBlock: true,
      type: "list",
      storageClassType: "WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsList",
    },
    or_conditions: {
      value: cdktn.listMapperHcl(wisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsToHclTerraform, false)(struct!.orConditions),
      isBlock: true,
      type: "list",
      storageClassType: "WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsList",
    },
    tag_condition: {
      value: wisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionToHclTerraform(struct!.tagCondition),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._andConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.andConditions = this._andConditions?.internalValue;
    }
    if (this._orConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orConditions = this._orConditions?.internalValue;
    }
    if (this._tagCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagCondition = this._tagCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._andConditions.internalValue = undefined;
      this._orConditions.internalValue = undefined;
      this._tagCondition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._andConditions.internalValue = value.andConditions;
      this._orConditions.internalValue = value.orConditions;
      this._tagCondition.internalValue = value.tagCondition;
    }
  }

  // and_conditions - computed: true, optional: true, required: false
  private _andConditions = new WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsList(this, "and_conditions", false);
  public get andConditions() {
    return this._andConditions;
  }
  public putAndConditions(value: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions[] | cdktn.IResolvable) {
    this._andConditions.internalValue = value;
  }
  public resetAndConditions() {
    this._andConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andConditionsInput() {
    return this._andConditions.internalValue;
  }

  // or_conditions - computed: true, optional: true, required: false
  private _orConditions = new WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsList(this, "or_conditions", false);
  public get orConditions() {
    return this._orConditions;
  }
  public putOrConditions(value: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions[] | cdktn.IResolvable) {
    this._orConditions.internalValue = value;
  }
  public resetOrConditions() {
    this._orConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orConditionsInput() {
    return this._orConditions.internalValue;
  }

  // tag_condition - computed: true, optional: true, required: false
  private _tagCondition = new WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionOutputReference(this, "tag_condition");
  public get tagCondition() {
    return this._tagCondition;
  }
  public putTagCondition(value: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition) {
    this._tagCondition.internalValue = value;
  }
  public resetTagCondition() {
    this._tagCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagConditionInput() {
    return this._tagCondition.internalValue;
  }
}
export interface WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#content_tag_filter WisdomAiAgent#content_tag_filter}
  */
  readonly contentTagFilter?: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#max_results WisdomAiAgent#max_results}
  */
  readonly maxResults?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#override_knowledge_base_search_type WisdomAiAgent#override_knowledge_base_search_type}
  */
  readonly overrideKnowledgeBaseSearchType?: string;
}

export function wisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataToTerraform(struct?: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_tag_filter: wisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterToTerraform(struct!.contentTagFilter),
    max_results: cdktn.numberToTerraform(struct!.maxResults),
    override_knowledge_base_search_type: cdktn.stringToTerraform(struct!.overrideKnowledgeBaseSearchType),
  }
}


export function wisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataToHclTerraform(struct?: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_tag_filter: {
      value: wisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterToHclTerraform(struct!.contentTagFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter",
    },
    max_results: {
      value: cdktn.numberToHclTerraform(struct!.maxResults),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    override_knowledge_base_search_type: {
      value: cdktn.stringToHclTerraform(struct!.overrideKnowledgeBaseSearchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentTagFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentTagFilter = this._contentTagFilter?.internalValue;
    }
    if (this._maxResults !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxResults = this._maxResults;
    }
    if (this._overrideKnowledgeBaseSearchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideKnowledgeBaseSearchType = this._overrideKnowledgeBaseSearchType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentTagFilter.internalValue = undefined;
      this._maxResults = undefined;
      this._overrideKnowledgeBaseSearchType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentTagFilter.internalValue = value.contentTagFilter;
      this._maxResults = value.maxResults;
      this._overrideKnowledgeBaseSearchType = value.overrideKnowledgeBaseSearchType;
    }
  }

  // content_tag_filter - computed: true, optional: true, required: false
  private _contentTagFilter = new WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOutputReference(this, "content_tag_filter");
  public get contentTagFilter() {
    return this._contentTagFilter;
  }
  public putContentTagFilter(value: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter) {
    this._contentTagFilter.internalValue = value;
  }
  public resetContentTagFilter() {
    this._contentTagFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTagFilterInput() {
    return this._contentTagFilter.internalValue;
  }

  // max_results - computed: true, optional: true, required: false
  private _maxResults?: number;
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }
  public set maxResults(value: number) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
  }

  // override_knowledge_base_search_type - computed: true, optional: true, required: false
  private _overrideKnowledgeBaseSearchType?: string;
  public get overrideKnowledgeBaseSearchType() {
    return this.getStringAttribute('override_knowledge_base_search_type');
  }
  public set overrideKnowledgeBaseSearchType(value: string) {
    this._overrideKnowledgeBaseSearchType = value;
  }
  public resetOverrideKnowledgeBaseSearchType() {
    this._overrideKnowledgeBaseSearchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideKnowledgeBaseSearchTypeInput() {
    return this._overrideKnowledgeBaseSearchType;
  }
}
export interface WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#knowledge_base_association_configuration_data WisdomAiAgent#knowledge_base_association_configuration_data}
  */
  readonly knowledgeBaseAssociationConfigurationData?: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData;
}

export function wisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataToTerraform(struct?: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    knowledge_base_association_configuration_data: wisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataToTerraform(struct!.knowledgeBaseAssociationConfigurationData),
  }
}


export function wisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataToHclTerraform(struct?: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    knowledge_base_association_configuration_data: {
      value: wisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataToHclTerraform(struct!.knowledgeBaseAssociationConfigurationData),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._knowledgeBaseAssociationConfigurationData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.knowledgeBaseAssociationConfigurationData = this._knowledgeBaseAssociationConfigurationData?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._knowledgeBaseAssociationConfigurationData.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._knowledgeBaseAssociationConfigurationData.internalValue = value.knowledgeBaseAssociationConfigurationData;
    }
  }

  // knowledge_base_association_configuration_data - computed: true, optional: true, required: false
  private _knowledgeBaseAssociationConfigurationData = new WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataOutputReference(this, "knowledge_base_association_configuration_data");
  public get knowledgeBaseAssociationConfigurationData() {
    return this._knowledgeBaseAssociationConfigurationData;
  }
  public putKnowledgeBaseAssociationConfigurationData(value: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData) {
    this._knowledgeBaseAssociationConfigurationData.internalValue = value;
  }
  public resetKnowledgeBaseAssociationConfigurationData() {
    this._knowledgeBaseAssociationConfigurationData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeBaseAssociationConfigurationDataInput() {
    return this._knowledgeBaseAssociationConfigurationData.internalValue;
  }
}
export interface WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#association_configuration_data WisdomAiAgent#association_configuration_data}
  */
  readonly associationConfigurationData?: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#association_id WisdomAiAgent#association_id}
  */
  readonly associationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#association_type WisdomAiAgent#association_type}
  */
  readonly associationType?: string;
}

export function wisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsToTerraform(struct?: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    association_configuration_data: wisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataToTerraform(struct!.associationConfigurationData),
    association_id: cdktn.stringToTerraform(struct!.associationId),
    association_type: cdktn.stringToTerraform(struct!.associationType),
  }
}


export function wisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsToHclTerraform(struct?: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    association_configuration_data: {
      value: wisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataToHclTerraform(struct!.associationConfigurationData),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData",
    },
    association_id: {
      value: cdktn.stringToHclTerraform(struct!.associationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    association_type: {
      value: cdktn.stringToHclTerraform(struct!.associationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._associationConfigurationData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.associationConfigurationData = this._associationConfigurationData?.internalValue;
    }
    if (this._associationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.associationId = this._associationId;
    }
    if (this._associationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.associationType = this._associationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._associationConfigurationData.internalValue = undefined;
      this._associationId = undefined;
      this._associationType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._associationConfigurationData.internalValue = value.associationConfigurationData;
      this._associationId = value.associationId;
      this._associationType = value.associationType;
    }
  }

  // association_configuration_data - computed: true, optional: true, required: false
  private _associationConfigurationData = new WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataOutputReference(this, "association_configuration_data");
  public get associationConfigurationData() {
    return this._associationConfigurationData;
  }
  public putAssociationConfigurationData(value: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData) {
    this._associationConfigurationData.internalValue = value;
  }
  public resetAssociationConfigurationData() {
    this._associationConfigurationData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationConfigurationDataInput() {
    return this._associationConfigurationData.internalValue;
  }

  // association_id - computed: true, optional: true, required: false
  private _associationId?: string;
  public get associationId() {
    return this.getStringAttribute('association_id');
  }
  public set associationId(value: string) {
    this._associationId = value;
  }
  public resetAssociationId() {
    this._associationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationIdInput() {
    return this._associationId;
  }

  // association_type - computed: true, optional: true, required: false
  private _associationType?: string;
  public get associationType() {
    return this.getStringAttribute('association_type');
  }
  public set associationType(value: string) {
    this._associationType = value;
  }
  public resetAssociationType() {
    this._associationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationTypeInput() {
    return this._associationType;
  }
}

export class WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsList extends cdktn.ComplexList {
  public internalValue? : WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurations[] | cdktn.IResolvable

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
  public get(index: number): WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsOutputReference {
    return new WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#association_configurations WisdomAiAgent#association_configurations}
  */
  readonly associationConfigurations?: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurations[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#email_generative_answer_ai_prompt_id WisdomAiAgent#email_generative_answer_ai_prompt_id}
  */
  readonly emailGenerativeAnswerAiPromptId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#email_query_reformulation_ai_prompt_id WisdomAiAgent#email_query_reformulation_ai_prompt_id}
  */
  readonly emailQueryReformulationAiPromptId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#locale WisdomAiAgent#locale}
  */
  readonly locale?: string;
}

export function wisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationToTerraform(struct?: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    association_configurations: cdktn.listMapper(wisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsToTerraform, false)(struct!.associationConfigurations),
    email_generative_answer_ai_prompt_id: cdktn.stringToTerraform(struct!.emailGenerativeAnswerAiPromptId),
    email_query_reformulation_ai_prompt_id: cdktn.stringToTerraform(struct!.emailQueryReformulationAiPromptId),
    locale: cdktn.stringToTerraform(struct!.locale),
  }
}


export function wisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationToHclTerraform(struct?: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    association_configurations: {
      value: cdktn.listMapperHcl(wisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsToHclTerraform, false)(struct!.associationConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsList",
    },
    email_generative_answer_ai_prompt_id: {
      value: cdktn.stringToHclTerraform(struct!.emailGenerativeAnswerAiPromptId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_query_reformulation_ai_prompt_id: {
      value: cdktn.stringToHclTerraform(struct!.emailQueryReformulationAiPromptId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locale: {
      value: cdktn.stringToHclTerraform(struct!.locale),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._associationConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.associationConfigurations = this._associationConfigurations?.internalValue;
    }
    if (this._emailGenerativeAnswerAiPromptId !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailGenerativeAnswerAiPromptId = this._emailGenerativeAnswerAiPromptId;
    }
    if (this._emailQueryReformulationAiPromptId !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailQueryReformulationAiPromptId = this._emailQueryReformulationAiPromptId;
    }
    if (this._locale !== undefined) {
      hasAnyValues = true;
      internalValueResult.locale = this._locale;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._associationConfigurations.internalValue = undefined;
      this._emailGenerativeAnswerAiPromptId = undefined;
      this._emailQueryReformulationAiPromptId = undefined;
      this._locale = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._associationConfigurations.internalValue = value.associationConfigurations;
      this._emailGenerativeAnswerAiPromptId = value.emailGenerativeAnswerAiPromptId;
      this._emailQueryReformulationAiPromptId = value.emailQueryReformulationAiPromptId;
      this._locale = value.locale;
    }
  }

  // association_configurations - computed: true, optional: true, required: false
  private _associationConfigurations = new WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurationsList(this, "association_configurations", false);
  public get associationConfigurations() {
    return this._associationConfigurations;
  }
  public putAssociationConfigurations(value: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationAssociationConfigurations[] | cdktn.IResolvable) {
    this._associationConfigurations.internalValue = value;
  }
  public resetAssociationConfigurations() {
    this._associationConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationConfigurationsInput() {
    return this._associationConfigurations.internalValue;
  }

  // email_generative_answer_ai_prompt_id - computed: true, optional: true, required: false
  private _emailGenerativeAnswerAiPromptId?: string;
  public get emailGenerativeAnswerAiPromptId() {
    return this.getStringAttribute('email_generative_answer_ai_prompt_id');
  }
  public set emailGenerativeAnswerAiPromptId(value: string) {
    this._emailGenerativeAnswerAiPromptId = value;
  }
  public resetEmailGenerativeAnswerAiPromptId() {
    this._emailGenerativeAnswerAiPromptId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailGenerativeAnswerAiPromptIdInput() {
    return this._emailGenerativeAnswerAiPromptId;
  }

  // email_query_reformulation_ai_prompt_id - computed: true, optional: true, required: false
  private _emailQueryReformulationAiPromptId?: string;
  public get emailQueryReformulationAiPromptId() {
    return this.getStringAttribute('email_query_reformulation_ai_prompt_id');
  }
  public set emailQueryReformulationAiPromptId(value: string) {
    this._emailQueryReformulationAiPromptId = value;
  }
  public resetEmailQueryReformulationAiPromptId() {
    this._emailQueryReformulationAiPromptId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailQueryReformulationAiPromptIdInput() {
    return this._emailQueryReformulationAiPromptId;
  }

  // locale - computed: true, optional: true, required: false
  private _locale?: string;
  public get locale() {
    return this.getStringAttribute('locale');
  }
  public set locale(value: string) {
    this._locale = value;
  }
  public resetLocale() {
    this._locale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localeInput() {
    return this._locale;
  }
}
export interface WisdomAiAgentConfigurationEmailOverviewAiAgentConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#email_overview_ai_prompt_id WisdomAiAgent#email_overview_ai_prompt_id}
  */
  readonly emailOverviewAiPromptId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#locale WisdomAiAgent#locale}
  */
  readonly locale?: string;
}

export function wisdomAiAgentConfigurationEmailOverviewAiAgentConfigurationToTerraform(struct?: WisdomAiAgentConfigurationEmailOverviewAiAgentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    email_overview_ai_prompt_id: cdktn.stringToTerraform(struct!.emailOverviewAiPromptId),
    locale: cdktn.stringToTerraform(struct!.locale),
  }
}


export function wisdomAiAgentConfigurationEmailOverviewAiAgentConfigurationToHclTerraform(struct?: WisdomAiAgentConfigurationEmailOverviewAiAgentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    email_overview_ai_prompt_id: {
      value: cdktn.stringToHclTerraform(struct!.emailOverviewAiPromptId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locale: {
      value: cdktn.stringToHclTerraform(struct!.locale),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiAgentConfigurationEmailOverviewAiAgentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiAgentConfigurationEmailOverviewAiAgentConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailOverviewAiPromptId !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailOverviewAiPromptId = this._emailOverviewAiPromptId;
    }
    if (this._locale !== undefined) {
      hasAnyValues = true;
      internalValueResult.locale = this._locale;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfigurationEmailOverviewAiAgentConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emailOverviewAiPromptId = undefined;
      this._locale = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emailOverviewAiPromptId = value.emailOverviewAiPromptId;
      this._locale = value.locale;
    }
  }

  // email_overview_ai_prompt_id - computed: true, optional: true, required: false
  private _emailOverviewAiPromptId?: string;
  public get emailOverviewAiPromptId() {
    return this.getStringAttribute('email_overview_ai_prompt_id');
  }
  public set emailOverviewAiPromptId(value: string) {
    this._emailOverviewAiPromptId = value;
  }
  public resetEmailOverviewAiPromptId() {
    this._emailOverviewAiPromptId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailOverviewAiPromptIdInput() {
    return this._emailOverviewAiPromptId;
  }

  // locale - computed: true, optional: true, required: false
  private _locale?: string;
  public get locale() {
    return this.getStringAttribute('locale');
  }
  public set locale(value: string) {
    this._locale = value;
  }
  public resetLocale() {
    this._locale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localeInput() {
    return this._locale;
  }
}
export interface WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#key WisdomAiAgent#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#value WisdomAiAgent#value}
  */
  readonly value?: string;
}

export function wisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsToTerraform(struct?: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function wisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsToHclTerraform(struct?: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions | cdktn.IResolvable): any {
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

export class WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions | cdktn.IResolvable | undefined) {
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

export class WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsList extends cdktn.ComplexList {
  public internalValue? : WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions[] | cdktn.IResolvable

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
  public get(index: number): WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsOutputReference {
    return new WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#key WisdomAiAgent#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#value WisdomAiAgent#value}
  */
  readonly value?: string;
}

export function wisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsToTerraform(struct?: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function wisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsToHclTerraform(struct?: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions | cdktn.IResolvable): any {
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

export class WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions | cdktn.IResolvable | undefined) {
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

export class WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsList extends cdktn.ComplexList {
  public internalValue? : WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions[] | cdktn.IResolvable

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
  public get(index: number): WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsOutputReference {
    return new WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#key WisdomAiAgent#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#value WisdomAiAgent#value}
  */
  readonly value?: string;
}

export function wisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionToTerraform(struct?: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function wisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionToHclTerraform(struct?: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition | cdktn.IResolvable): any {
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

export class WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition | cdktn.IResolvable | undefined) {
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
export interface WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#and_conditions WisdomAiAgent#and_conditions}
  */
  readonly andConditions?: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#tag_condition WisdomAiAgent#tag_condition}
  */
  readonly tagCondition?: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition;
}

export function wisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsToTerraform(struct?: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    and_conditions: cdktn.listMapper(wisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsToTerraform, false)(struct!.andConditions),
    tag_condition: wisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionToTerraform(struct!.tagCondition),
  }
}


export function wisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsToHclTerraform(struct?: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    and_conditions: {
      value: cdktn.listMapperHcl(wisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsToHclTerraform, false)(struct!.andConditions),
      isBlock: true,
      type: "list",
      storageClassType: "WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsList",
    },
    tag_condition: {
      value: wisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionToHclTerraform(struct!.tagCondition),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._andConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.andConditions = this._andConditions?.internalValue;
    }
    if (this._tagCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagCondition = this._tagCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._andConditions.internalValue = undefined;
      this._tagCondition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._andConditions.internalValue = value.andConditions;
      this._tagCondition.internalValue = value.tagCondition;
    }
  }

  // and_conditions - computed: true, optional: true, required: false
  private _andConditions = new WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsList(this, "and_conditions", false);
  public get andConditions() {
    return this._andConditions;
  }
  public putAndConditions(value: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions[] | cdktn.IResolvable) {
    this._andConditions.internalValue = value;
  }
  public resetAndConditions() {
    this._andConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andConditionsInput() {
    return this._andConditions.internalValue;
  }

  // tag_condition - computed: true, optional: true, required: false
  private _tagCondition = new WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionOutputReference(this, "tag_condition");
  public get tagCondition() {
    return this._tagCondition;
  }
  public putTagCondition(value: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition) {
    this._tagCondition.internalValue = value;
  }
  public resetTagCondition() {
    this._tagCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagConditionInput() {
    return this._tagCondition.internalValue;
  }
}

export class WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsList extends cdktn.ComplexList {
  public internalValue? : WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions[] | cdktn.IResolvable

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
  public get(index: number): WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsOutputReference {
    return new WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#key WisdomAiAgent#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#value WisdomAiAgent#value}
  */
  readonly value?: string;
}

export function wisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionToTerraform(struct?: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function wisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionToHclTerraform(struct?: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition | cdktn.IResolvable): any {
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

export class WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition | cdktn.IResolvable | undefined) {
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
export interface WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#and_conditions WisdomAiAgent#and_conditions}
  */
  readonly andConditions?: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#or_conditions WisdomAiAgent#or_conditions}
  */
  readonly orConditions?: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#tag_condition WisdomAiAgent#tag_condition}
  */
  readonly tagCondition?: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition;
}

export function wisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterToTerraform(struct?: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    and_conditions: cdktn.listMapper(wisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsToTerraform, false)(struct!.andConditions),
    or_conditions: cdktn.listMapper(wisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsToTerraform, false)(struct!.orConditions),
    tag_condition: wisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionToTerraform(struct!.tagCondition),
  }
}


export function wisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterToHclTerraform(struct?: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    and_conditions: {
      value: cdktn.listMapperHcl(wisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsToHclTerraform, false)(struct!.andConditions),
      isBlock: true,
      type: "list",
      storageClassType: "WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsList",
    },
    or_conditions: {
      value: cdktn.listMapperHcl(wisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsToHclTerraform, false)(struct!.orConditions),
      isBlock: true,
      type: "list",
      storageClassType: "WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsList",
    },
    tag_condition: {
      value: wisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionToHclTerraform(struct!.tagCondition),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._andConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.andConditions = this._andConditions?.internalValue;
    }
    if (this._orConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orConditions = this._orConditions?.internalValue;
    }
    if (this._tagCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagCondition = this._tagCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._andConditions.internalValue = undefined;
      this._orConditions.internalValue = undefined;
      this._tagCondition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._andConditions.internalValue = value.andConditions;
      this._orConditions.internalValue = value.orConditions;
      this._tagCondition.internalValue = value.tagCondition;
    }
  }

  // and_conditions - computed: true, optional: true, required: false
  private _andConditions = new WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsList(this, "and_conditions", false);
  public get andConditions() {
    return this._andConditions;
  }
  public putAndConditions(value: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions[] | cdktn.IResolvable) {
    this._andConditions.internalValue = value;
  }
  public resetAndConditions() {
    this._andConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andConditionsInput() {
    return this._andConditions.internalValue;
  }

  // or_conditions - computed: true, optional: true, required: false
  private _orConditions = new WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsList(this, "or_conditions", false);
  public get orConditions() {
    return this._orConditions;
  }
  public putOrConditions(value: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions[] | cdktn.IResolvable) {
    this._orConditions.internalValue = value;
  }
  public resetOrConditions() {
    this._orConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orConditionsInput() {
    return this._orConditions.internalValue;
  }

  // tag_condition - computed: true, optional: true, required: false
  private _tagCondition = new WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionOutputReference(this, "tag_condition");
  public get tagCondition() {
    return this._tagCondition;
  }
  public putTagCondition(value: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition) {
    this._tagCondition.internalValue = value;
  }
  public resetTagCondition() {
    this._tagCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagConditionInput() {
    return this._tagCondition.internalValue;
  }
}
export interface WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#content_tag_filter WisdomAiAgent#content_tag_filter}
  */
  readonly contentTagFilter?: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#max_results WisdomAiAgent#max_results}
  */
  readonly maxResults?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#override_knowledge_base_search_type WisdomAiAgent#override_knowledge_base_search_type}
  */
  readonly overrideKnowledgeBaseSearchType?: string;
}

export function wisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataToTerraform(struct?: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_tag_filter: wisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterToTerraform(struct!.contentTagFilter),
    max_results: cdktn.numberToTerraform(struct!.maxResults),
    override_knowledge_base_search_type: cdktn.stringToTerraform(struct!.overrideKnowledgeBaseSearchType),
  }
}


export function wisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataToHclTerraform(struct?: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_tag_filter: {
      value: wisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterToHclTerraform(struct!.contentTagFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter",
    },
    max_results: {
      value: cdktn.numberToHclTerraform(struct!.maxResults),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    override_knowledge_base_search_type: {
      value: cdktn.stringToHclTerraform(struct!.overrideKnowledgeBaseSearchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentTagFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentTagFilter = this._contentTagFilter?.internalValue;
    }
    if (this._maxResults !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxResults = this._maxResults;
    }
    if (this._overrideKnowledgeBaseSearchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideKnowledgeBaseSearchType = this._overrideKnowledgeBaseSearchType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentTagFilter.internalValue = undefined;
      this._maxResults = undefined;
      this._overrideKnowledgeBaseSearchType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentTagFilter.internalValue = value.contentTagFilter;
      this._maxResults = value.maxResults;
      this._overrideKnowledgeBaseSearchType = value.overrideKnowledgeBaseSearchType;
    }
  }

  // content_tag_filter - computed: true, optional: true, required: false
  private _contentTagFilter = new WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOutputReference(this, "content_tag_filter");
  public get contentTagFilter() {
    return this._contentTagFilter;
  }
  public putContentTagFilter(value: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter) {
    this._contentTagFilter.internalValue = value;
  }
  public resetContentTagFilter() {
    this._contentTagFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTagFilterInput() {
    return this._contentTagFilter.internalValue;
  }

  // max_results - computed: true, optional: true, required: false
  private _maxResults?: number;
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }
  public set maxResults(value: number) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
  }

  // override_knowledge_base_search_type - computed: true, optional: true, required: false
  private _overrideKnowledgeBaseSearchType?: string;
  public get overrideKnowledgeBaseSearchType() {
    return this.getStringAttribute('override_knowledge_base_search_type');
  }
  public set overrideKnowledgeBaseSearchType(value: string) {
    this._overrideKnowledgeBaseSearchType = value;
  }
  public resetOverrideKnowledgeBaseSearchType() {
    this._overrideKnowledgeBaseSearchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideKnowledgeBaseSearchTypeInput() {
    return this._overrideKnowledgeBaseSearchType;
  }
}
export interface WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#knowledge_base_association_configuration_data WisdomAiAgent#knowledge_base_association_configuration_data}
  */
  readonly knowledgeBaseAssociationConfigurationData?: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData;
}

export function wisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataToTerraform(struct?: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    knowledge_base_association_configuration_data: wisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataToTerraform(struct!.knowledgeBaseAssociationConfigurationData),
  }
}


export function wisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataToHclTerraform(struct?: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    knowledge_base_association_configuration_data: {
      value: wisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataToHclTerraform(struct!.knowledgeBaseAssociationConfigurationData),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._knowledgeBaseAssociationConfigurationData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.knowledgeBaseAssociationConfigurationData = this._knowledgeBaseAssociationConfigurationData?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._knowledgeBaseAssociationConfigurationData.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._knowledgeBaseAssociationConfigurationData.internalValue = value.knowledgeBaseAssociationConfigurationData;
    }
  }

  // knowledge_base_association_configuration_data - computed: true, optional: true, required: false
  private _knowledgeBaseAssociationConfigurationData = new WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataOutputReference(this, "knowledge_base_association_configuration_data");
  public get knowledgeBaseAssociationConfigurationData() {
    return this._knowledgeBaseAssociationConfigurationData;
  }
  public putKnowledgeBaseAssociationConfigurationData(value: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData) {
    this._knowledgeBaseAssociationConfigurationData.internalValue = value;
  }
  public resetKnowledgeBaseAssociationConfigurationData() {
    this._knowledgeBaseAssociationConfigurationData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeBaseAssociationConfigurationDataInput() {
    return this._knowledgeBaseAssociationConfigurationData.internalValue;
  }
}
export interface WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#association_configuration_data WisdomAiAgent#association_configuration_data}
  */
  readonly associationConfigurationData?: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#association_id WisdomAiAgent#association_id}
  */
  readonly associationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#association_type WisdomAiAgent#association_type}
  */
  readonly associationType?: string;
}

export function wisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsToTerraform(struct?: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    association_configuration_data: wisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataToTerraform(struct!.associationConfigurationData),
    association_id: cdktn.stringToTerraform(struct!.associationId),
    association_type: cdktn.stringToTerraform(struct!.associationType),
  }
}


export function wisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsToHclTerraform(struct?: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    association_configuration_data: {
      value: wisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataToHclTerraform(struct!.associationConfigurationData),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData",
    },
    association_id: {
      value: cdktn.stringToHclTerraform(struct!.associationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    association_type: {
      value: cdktn.stringToHclTerraform(struct!.associationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._associationConfigurationData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.associationConfigurationData = this._associationConfigurationData?.internalValue;
    }
    if (this._associationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.associationId = this._associationId;
    }
    if (this._associationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.associationType = this._associationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._associationConfigurationData.internalValue = undefined;
      this._associationId = undefined;
      this._associationType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._associationConfigurationData.internalValue = value.associationConfigurationData;
      this._associationId = value.associationId;
      this._associationType = value.associationType;
    }
  }

  // association_configuration_data - computed: true, optional: true, required: false
  private _associationConfigurationData = new WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataOutputReference(this, "association_configuration_data");
  public get associationConfigurationData() {
    return this._associationConfigurationData;
  }
  public putAssociationConfigurationData(value: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData) {
    this._associationConfigurationData.internalValue = value;
  }
  public resetAssociationConfigurationData() {
    this._associationConfigurationData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationConfigurationDataInput() {
    return this._associationConfigurationData.internalValue;
  }

  // association_id - computed: true, optional: true, required: false
  private _associationId?: string;
  public get associationId() {
    return this.getStringAttribute('association_id');
  }
  public set associationId(value: string) {
    this._associationId = value;
  }
  public resetAssociationId() {
    this._associationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationIdInput() {
    return this._associationId;
  }

  // association_type - computed: true, optional: true, required: false
  private _associationType?: string;
  public get associationType() {
    return this.getStringAttribute('association_type');
  }
  public set associationType(value: string) {
    this._associationType = value;
  }
  public resetAssociationType() {
    this._associationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationTypeInput() {
    return this._associationType;
  }
}

export class WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsList extends cdktn.ComplexList {
  public internalValue? : WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurations[] | cdktn.IResolvable

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
  public get(index: number): WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsOutputReference {
    return new WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WisdomAiAgentConfigurationEmailResponseAiAgentConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#association_configurations WisdomAiAgent#association_configurations}
  */
  readonly associationConfigurations?: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurations[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#email_query_reformulation_ai_prompt_id WisdomAiAgent#email_query_reformulation_ai_prompt_id}
  */
  readonly emailQueryReformulationAiPromptId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#email_response_ai_prompt_id WisdomAiAgent#email_response_ai_prompt_id}
  */
  readonly emailResponseAiPromptId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#locale WisdomAiAgent#locale}
  */
  readonly locale?: string;
}

export function wisdomAiAgentConfigurationEmailResponseAiAgentConfigurationToTerraform(struct?: WisdomAiAgentConfigurationEmailResponseAiAgentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    association_configurations: cdktn.listMapper(wisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsToTerraform, false)(struct!.associationConfigurations),
    email_query_reformulation_ai_prompt_id: cdktn.stringToTerraform(struct!.emailQueryReformulationAiPromptId),
    email_response_ai_prompt_id: cdktn.stringToTerraform(struct!.emailResponseAiPromptId),
    locale: cdktn.stringToTerraform(struct!.locale),
  }
}


export function wisdomAiAgentConfigurationEmailResponseAiAgentConfigurationToHclTerraform(struct?: WisdomAiAgentConfigurationEmailResponseAiAgentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    association_configurations: {
      value: cdktn.listMapperHcl(wisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsToHclTerraform, false)(struct!.associationConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsList",
    },
    email_query_reformulation_ai_prompt_id: {
      value: cdktn.stringToHclTerraform(struct!.emailQueryReformulationAiPromptId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_response_ai_prompt_id: {
      value: cdktn.stringToHclTerraform(struct!.emailResponseAiPromptId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locale: {
      value: cdktn.stringToHclTerraform(struct!.locale),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiAgentConfigurationEmailResponseAiAgentConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._associationConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.associationConfigurations = this._associationConfigurations?.internalValue;
    }
    if (this._emailQueryReformulationAiPromptId !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailQueryReformulationAiPromptId = this._emailQueryReformulationAiPromptId;
    }
    if (this._emailResponseAiPromptId !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailResponseAiPromptId = this._emailResponseAiPromptId;
    }
    if (this._locale !== undefined) {
      hasAnyValues = true;
      internalValueResult.locale = this._locale;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfigurationEmailResponseAiAgentConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._associationConfigurations.internalValue = undefined;
      this._emailQueryReformulationAiPromptId = undefined;
      this._emailResponseAiPromptId = undefined;
      this._locale = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._associationConfigurations.internalValue = value.associationConfigurations;
      this._emailQueryReformulationAiPromptId = value.emailQueryReformulationAiPromptId;
      this._emailResponseAiPromptId = value.emailResponseAiPromptId;
      this._locale = value.locale;
    }
  }

  // association_configurations - computed: true, optional: true, required: false
  private _associationConfigurations = new WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurationsList(this, "association_configurations", false);
  public get associationConfigurations() {
    return this._associationConfigurations;
  }
  public putAssociationConfigurations(value: WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationAssociationConfigurations[] | cdktn.IResolvable) {
    this._associationConfigurations.internalValue = value;
  }
  public resetAssociationConfigurations() {
    this._associationConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationConfigurationsInput() {
    return this._associationConfigurations.internalValue;
  }

  // email_query_reformulation_ai_prompt_id - computed: true, optional: true, required: false
  private _emailQueryReformulationAiPromptId?: string;
  public get emailQueryReformulationAiPromptId() {
    return this.getStringAttribute('email_query_reformulation_ai_prompt_id');
  }
  public set emailQueryReformulationAiPromptId(value: string) {
    this._emailQueryReformulationAiPromptId = value;
  }
  public resetEmailQueryReformulationAiPromptId() {
    this._emailQueryReformulationAiPromptId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailQueryReformulationAiPromptIdInput() {
    return this._emailQueryReformulationAiPromptId;
  }

  // email_response_ai_prompt_id - computed: true, optional: true, required: false
  private _emailResponseAiPromptId?: string;
  public get emailResponseAiPromptId() {
    return this.getStringAttribute('email_response_ai_prompt_id');
  }
  public set emailResponseAiPromptId(value: string) {
    this._emailResponseAiPromptId = value;
  }
  public resetEmailResponseAiPromptId() {
    this._emailResponseAiPromptId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailResponseAiPromptIdInput() {
    return this._emailResponseAiPromptId;
  }

  // locale - computed: true, optional: true, required: false
  private _locale?: string;
  public get locale() {
    return this.getStringAttribute('locale');
  }
  public set locale(value: string) {
    this._locale = value;
  }
  public resetLocale() {
    this._locale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localeInput() {
    return this._locale;
  }
}
export interface WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#key WisdomAiAgent#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#value WisdomAiAgent#value}
  */
  readonly value?: string;
}

export function wisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsToTerraform(struct?: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function wisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsToHclTerraform(struct?: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions | cdktn.IResolvable): any {
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

export class WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions | cdktn.IResolvable | undefined) {
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

export class WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsList extends cdktn.ComplexList {
  public internalValue? : WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions[] | cdktn.IResolvable

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
  public get(index: number): WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsOutputReference {
    return new WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#key WisdomAiAgent#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#value WisdomAiAgent#value}
  */
  readonly value?: string;
}

export function wisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsToTerraform(struct?: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function wisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsToHclTerraform(struct?: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions | cdktn.IResolvable): any {
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

export class WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions | cdktn.IResolvable | undefined) {
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

export class WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsList extends cdktn.ComplexList {
  public internalValue? : WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions[] | cdktn.IResolvable

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
  public get(index: number): WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsOutputReference {
    return new WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#key WisdomAiAgent#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#value WisdomAiAgent#value}
  */
  readonly value?: string;
}

export function wisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionToTerraform(struct?: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function wisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionToHclTerraform(struct?: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition | cdktn.IResolvable): any {
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

export class WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition | cdktn.IResolvable | undefined) {
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
export interface WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#and_conditions WisdomAiAgent#and_conditions}
  */
  readonly andConditions?: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#tag_condition WisdomAiAgent#tag_condition}
  */
  readonly tagCondition?: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition;
}

export function wisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsToTerraform(struct?: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    and_conditions: cdktn.listMapper(wisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsToTerraform, false)(struct!.andConditions),
    tag_condition: wisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionToTerraform(struct!.tagCondition),
  }
}


export function wisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsToHclTerraform(struct?: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    and_conditions: {
      value: cdktn.listMapperHcl(wisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsToHclTerraform, false)(struct!.andConditions),
      isBlock: true,
      type: "list",
      storageClassType: "WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsList",
    },
    tag_condition: {
      value: wisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionToHclTerraform(struct!.tagCondition),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._andConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.andConditions = this._andConditions?.internalValue;
    }
    if (this._tagCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagCondition = this._tagCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._andConditions.internalValue = undefined;
      this._tagCondition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._andConditions.internalValue = value.andConditions;
      this._tagCondition.internalValue = value.tagCondition;
    }
  }

  // and_conditions - computed: true, optional: true, required: false
  private _andConditions = new WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsList(this, "and_conditions", false);
  public get andConditions() {
    return this._andConditions;
  }
  public putAndConditions(value: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions[] | cdktn.IResolvable) {
    this._andConditions.internalValue = value;
  }
  public resetAndConditions() {
    this._andConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andConditionsInput() {
    return this._andConditions.internalValue;
  }

  // tag_condition - computed: true, optional: true, required: false
  private _tagCondition = new WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionOutputReference(this, "tag_condition");
  public get tagCondition() {
    return this._tagCondition;
  }
  public putTagCondition(value: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition) {
    this._tagCondition.internalValue = value;
  }
  public resetTagCondition() {
    this._tagCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagConditionInput() {
    return this._tagCondition.internalValue;
  }
}

export class WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsList extends cdktn.ComplexList {
  public internalValue? : WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions[] | cdktn.IResolvable

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
  public get(index: number): WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsOutputReference {
    return new WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#key WisdomAiAgent#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#value WisdomAiAgent#value}
  */
  readonly value?: string;
}

export function wisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionToTerraform(struct?: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function wisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionToHclTerraform(struct?: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition | cdktn.IResolvable): any {
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

export class WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition | cdktn.IResolvable | undefined) {
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
export interface WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#and_conditions WisdomAiAgent#and_conditions}
  */
  readonly andConditions?: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#or_conditions WisdomAiAgent#or_conditions}
  */
  readonly orConditions?: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#tag_condition WisdomAiAgent#tag_condition}
  */
  readonly tagCondition?: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition;
}

export function wisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterToTerraform(struct?: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    and_conditions: cdktn.listMapper(wisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsToTerraform, false)(struct!.andConditions),
    or_conditions: cdktn.listMapper(wisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsToTerraform, false)(struct!.orConditions),
    tag_condition: wisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionToTerraform(struct!.tagCondition),
  }
}


export function wisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterToHclTerraform(struct?: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    and_conditions: {
      value: cdktn.listMapperHcl(wisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsToHclTerraform, false)(struct!.andConditions),
      isBlock: true,
      type: "list",
      storageClassType: "WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsList",
    },
    or_conditions: {
      value: cdktn.listMapperHcl(wisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsToHclTerraform, false)(struct!.orConditions),
      isBlock: true,
      type: "list",
      storageClassType: "WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsList",
    },
    tag_condition: {
      value: wisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionToHclTerraform(struct!.tagCondition),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._andConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.andConditions = this._andConditions?.internalValue;
    }
    if (this._orConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orConditions = this._orConditions?.internalValue;
    }
    if (this._tagCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagCondition = this._tagCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._andConditions.internalValue = undefined;
      this._orConditions.internalValue = undefined;
      this._tagCondition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._andConditions.internalValue = value.andConditions;
      this._orConditions.internalValue = value.orConditions;
      this._tagCondition.internalValue = value.tagCondition;
    }
  }

  // and_conditions - computed: true, optional: true, required: false
  private _andConditions = new WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsList(this, "and_conditions", false);
  public get andConditions() {
    return this._andConditions;
  }
  public putAndConditions(value: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions[] | cdktn.IResolvable) {
    this._andConditions.internalValue = value;
  }
  public resetAndConditions() {
    this._andConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andConditionsInput() {
    return this._andConditions.internalValue;
  }

  // or_conditions - computed: true, optional: true, required: false
  private _orConditions = new WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsList(this, "or_conditions", false);
  public get orConditions() {
    return this._orConditions;
  }
  public putOrConditions(value: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions[] | cdktn.IResolvable) {
    this._orConditions.internalValue = value;
  }
  public resetOrConditions() {
    this._orConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orConditionsInput() {
    return this._orConditions.internalValue;
  }

  // tag_condition - computed: true, optional: true, required: false
  private _tagCondition = new WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionOutputReference(this, "tag_condition");
  public get tagCondition() {
    return this._tagCondition;
  }
  public putTagCondition(value: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition) {
    this._tagCondition.internalValue = value;
  }
  public resetTagCondition() {
    this._tagCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagConditionInput() {
    return this._tagCondition.internalValue;
  }
}
export interface WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#content_tag_filter WisdomAiAgent#content_tag_filter}
  */
  readonly contentTagFilter?: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#max_results WisdomAiAgent#max_results}
  */
  readonly maxResults?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#override_knowledge_base_search_type WisdomAiAgent#override_knowledge_base_search_type}
  */
  readonly overrideKnowledgeBaseSearchType?: string;
}

export function wisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataToTerraform(struct?: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_tag_filter: wisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterToTerraform(struct!.contentTagFilter),
    max_results: cdktn.numberToTerraform(struct!.maxResults),
    override_knowledge_base_search_type: cdktn.stringToTerraform(struct!.overrideKnowledgeBaseSearchType),
  }
}


export function wisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataToHclTerraform(struct?: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_tag_filter: {
      value: wisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterToHclTerraform(struct!.contentTagFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter",
    },
    max_results: {
      value: cdktn.numberToHclTerraform(struct!.maxResults),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    override_knowledge_base_search_type: {
      value: cdktn.stringToHclTerraform(struct!.overrideKnowledgeBaseSearchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentTagFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentTagFilter = this._contentTagFilter?.internalValue;
    }
    if (this._maxResults !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxResults = this._maxResults;
    }
    if (this._overrideKnowledgeBaseSearchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideKnowledgeBaseSearchType = this._overrideKnowledgeBaseSearchType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentTagFilter.internalValue = undefined;
      this._maxResults = undefined;
      this._overrideKnowledgeBaseSearchType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentTagFilter.internalValue = value.contentTagFilter;
      this._maxResults = value.maxResults;
      this._overrideKnowledgeBaseSearchType = value.overrideKnowledgeBaseSearchType;
    }
  }

  // content_tag_filter - computed: true, optional: true, required: false
  private _contentTagFilter = new WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOutputReference(this, "content_tag_filter");
  public get contentTagFilter() {
    return this._contentTagFilter;
  }
  public putContentTagFilter(value: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter) {
    this._contentTagFilter.internalValue = value;
  }
  public resetContentTagFilter() {
    this._contentTagFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTagFilterInput() {
    return this._contentTagFilter.internalValue;
  }

  // max_results - computed: true, optional: true, required: false
  private _maxResults?: number;
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }
  public set maxResults(value: number) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
  }

  // override_knowledge_base_search_type - computed: true, optional: true, required: false
  private _overrideKnowledgeBaseSearchType?: string;
  public get overrideKnowledgeBaseSearchType() {
    return this.getStringAttribute('override_knowledge_base_search_type');
  }
  public set overrideKnowledgeBaseSearchType(value: string) {
    this._overrideKnowledgeBaseSearchType = value;
  }
  public resetOverrideKnowledgeBaseSearchType() {
    this._overrideKnowledgeBaseSearchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideKnowledgeBaseSearchTypeInput() {
    return this._overrideKnowledgeBaseSearchType;
  }
}
export interface WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#knowledge_base_association_configuration_data WisdomAiAgent#knowledge_base_association_configuration_data}
  */
  readonly knowledgeBaseAssociationConfigurationData?: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData;
}

export function wisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataToTerraform(struct?: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    knowledge_base_association_configuration_data: wisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataToTerraform(struct!.knowledgeBaseAssociationConfigurationData),
  }
}


export function wisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataToHclTerraform(struct?: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    knowledge_base_association_configuration_data: {
      value: wisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataToHclTerraform(struct!.knowledgeBaseAssociationConfigurationData),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._knowledgeBaseAssociationConfigurationData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.knowledgeBaseAssociationConfigurationData = this._knowledgeBaseAssociationConfigurationData?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._knowledgeBaseAssociationConfigurationData.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._knowledgeBaseAssociationConfigurationData.internalValue = value.knowledgeBaseAssociationConfigurationData;
    }
  }

  // knowledge_base_association_configuration_data - computed: true, optional: true, required: false
  private _knowledgeBaseAssociationConfigurationData = new WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataOutputReference(this, "knowledge_base_association_configuration_data");
  public get knowledgeBaseAssociationConfigurationData() {
    return this._knowledgeBaseAssociationConfigurationData;
  }
  public putKnowledgeBaseAssociationConfigurationData(value: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData) {
    this._knowledgeBaseAssociationConfigurationData.internalValue = value;
  }
  public resetKnowledgeBaseAssociationConfigurationData() {
    this._knowledgeBaseAssociationConfigurationData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeBaseAssociationConfigurationDataInput() {
    return this._knowledgeBaseAssociationConfigurationData.internalValue;
  }
}
export interface WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#association_configuration_data WisdomAiAgent#association_configuration_data}
  */
  readonly associationConfigurationData?: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#association_id WisdomAiAgent#association_id}
  */
  readonly associationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#association_type WisdomAiAgent#association_type}
  */
  readonly associationType?: string;
}

export function wisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsToTerraform(struct?: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    association_configuration_data: wisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataToTerraform(struct!.associationConfigurationData),
    association_id: cdktn.stringToTerraform(struct!.associationId),
    association_type: cdktn.stringToTerraform(struct!.associationType),
  }
}


export function wisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsToHclTerraform(struct?: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    association_configuration_data: {
      value: wisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataToHclTerraform(struct!.associationConfigurationData),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData",
    },
    association_id: {
      value: cdktn.stringToHclTerraform(struct!.associationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    association_type: {
      value: cdktn.stringToHclTerraform(struct!.associationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._associationConfigurationData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.associationConfigurationData = this._associationConfigurationData?.internalValue;
    }
    if (this._associationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.associationId = this._associationId;
    }
    if (this._associationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.associationType = this._associationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._associationConfigurationData.internalValue = undefined;
      this._associationId = undefined;
      this._associationType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._associationConfigurationData.internalValue = value.associationConfigurationData;
      this._associationId = value.associationId;
      this._associationType = value.associationType;
    }
  }

  // association_configuration_data - computed: true, optional: true, required: false
  private _associationConfigurationData = new WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataOutputReference(this, "association_configuration_data");
  public get associationConfigurationData() {
    return this._associationConfigurationData;
  }
  public putAssociationConfigurationData(value: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData) {
    this._associationConfigurationData.internalValue = value;
  }
  public resetAssociationConfigurationData() {
    this._associationConfigurationData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationConfigurationDataInput() {
    return this._associationConfigurationData.internalValue;
  }

  // association_id - computed: true, optional: true, required: false
  private _associationId?: string;
  public get associationId() {
    return this.getStringAttribute('association_id');
  }
  public set associationId(value: string) {
    this._associationId = value;
  }
  public resetAssociationId() {
    this._associationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationIdInput() {
    return this._associationId;
  }

  // association_type - computed: true, optional: true, required: false
  private _associationType?: string;
  public get associationType() {
    return this.getStringAttribute('association_type');
  }
  public set associationType(value: string) {
    this._associationType = value;
  }
  public resetAssociationType() {
    this._associationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationTypeInput() {
    return this._associationType;
  }
}

export class WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsList extends cdktn.ComplexList {
  public internalValue? : WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurations[] | cdktn.IResolvable

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
  public get(index: number): WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsOutputReference {
    return new WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WisdomAiAgentConfigurationManualSearchAiAgentConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#answer_generation_ai_guardrail_id WisdomAiAgent#answer_generation_ai_guardrail_id}
  */
  readonly answerGenerationAiGuardrailId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#answer_generation_ai_prompt_id WisdomAiAgent#answer_generation_ai_prompt_id}
  */
  readonly answerGenerationAiPromptId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#association_configurations WisdomAiAgent#association_configurations}
  */
  readonly associationConfigurations?: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurations[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#locale WisdomAiAgent#locale}
  */
  readonly locale?: string;
}

export function wisdomAiAgentConfigurationManualSearchAiAgentConfigurationToTerraform(struct?: WisdomAiAgentConfigurationManualSearchAiAgentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    answer_generation_ai_guardrail_id: cdktn.stringToTerraform(struct!.answerGenerationAiGuardrailId),
    answer_generation_ai_prompt_id: cdktn.stringToTerraform(struct!.answerGenerationAiPromptId),
    association_configurations: cdktn.listMapper(wisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsToTerraform, false)(struct!.associationConfigurations),
    locale: cdktn.stringToTerraform(struct!.locale),
  }
}


export function wisdomAiAgentConfigurationManualSearchAiAgentConfigurationToHclTerraform(struct?: WisdomAiAgentConfigurationManualSearchAiAgentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    answer_generation_ai_guardrail_id: {
      value: cdktn.stringToHclTerraform(struct!.answerGenerationAiGuardrailId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    answer_generation_ai_prompt_id: {
      value: cdktn.stringToHclTerraform(struct!.answerGenerationAiPromptId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    association_configurations: {
      value: cdktn.listMapperHcl(wisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsToHclTerraform, false)(struct!.associationConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsList",
    },
    locale: {
      value: cdktn.stringToHclTerraform(struct!.locale),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiAgentConfigurationManualSearchAiAgentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiAgentConfigurationManualSearchAiAgentConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._answerGenerationAiGuardrailId !== undefined) {
      hasAnyValues = true;
      internalValueResult.answerGenerationAiGuardrailId = this._answerGenerationAiGuardrailId;
    }
    if (this._answerGenerationAiPromptId !== undefined) {
      hasAnyValues = true;
      internalValueResult.answerGenerationAiPromptId = this._answerGenerationAiPromptId;
    }
    if (this._associationConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.associationConfigurations = this._associationConfigurations?.internalValue;
    }
    if (this._locale !== undefined) {
      hasAnyValues = true;
      internalValueResult.locale = this._locale;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfigurationManualSearchAiAgentConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._answerGenerationAiGuardrailId = undefined;
      this._answerGenerationAiPromptId = undefined;
      this._associationConfigurations.internalValue = undefined;
      this._locale = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._answerGenerationAiGuardrailId = value.answerGenerationAiGuardrailId;
      this._answerGenerationAiPromptId = value.answerGenerationAiPromptId;
      this._associationConfigurations.internalValue = value.associationConfigurations;
      this._locale = value.locale;
    }
  }

  // answer_generation_ai_guardrail_id - computed: true, optional: true, required: false
  private _answerGenerationAiGuardrailId?: string;
  public get answerGenerationAiGuardrailId() {
    return this.getStringAttribute('answer_generation_ai_guardrail_id');
  }
  public set answerGenerationAiGuardrailId(value: string) {
    this._answerGenerationAiGuardrailId = value;
  }
  public resetAnswerGenerationAiGuardrailId() {
    this._answerGenerationAiGuardrailId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get answerGenerationAiGuardrailIdInput() {
    return this._answerGenerationAiGuardrailId;
  }

  // answer_generation_ai_prompt_id - computed: true, optional: true, required: false
  private _answerGenerationAiPromptId?: string;
  public get answerGenerationAiPromptId() {
    return this.getStringAttribute('answer_generation_ai_prompt_id');
  }
  public set answerGenerationAiPromptId(value: string) {
    this._answerGenerationAiPromptId = value;
  }
  public resetAnswerGenerationAiPromptId() {
    this._answerGenerationAiPromptId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get answerGenerationAiPromptIdInput() {
    return this._answerGenerationAiPromptId;
  }

  // association_configurations - computed: true, optional: true, required: false
  private _associationConfigurations = new WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurationsList(this, "association_configurations", false);
  public get associationConfigurations() {
    return this._associationConfigurations;
  }
  public putAssociationConfigurations(value: WisdomAiAgentConfigurationManualSearchAiAgentConfigurationAssociationConfigurations[] | cdktn.IResolvable) {
    this._associationConfigurations.internalValue = value;
  }
  public resetAssociationConfigurations() {
    this._associationConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationConfigurationsInput() {
    return this._associationConfigurations.internalValue;
  }

  // locale - computed: true, optional: true, required: false
  private _locale?: string;
  public get locale() {
    return this.getStringAttribute('locale');
  }
  public set locale(value: string) {
    this._locale = value;
  }
  public resetLocale() {
    this._locale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localeInput() {
    return this._locale;
  }
}
export interface WisdomAiAgentConfigurationNoteTakingAiAgentConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#locale WisdomAiAgent#locale}
  */
  readonly locale?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#note_taking_ai_guardrail_id WisdomAiAgent#note_taking_ai_guardrail_id}
  */
  readonly noteTakingAiGuardrailId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#note_taking_ai_prompt_id WisdomAiAgent#note_taking_ai_prompt_id}
  */
  readonly noteTakingAiPromptId?: string;
}

export function wisdomAiAgentConfigurationNoteTakingAiAgentConfigurationToTerraform(struct?: WisdomAiAgentConfigurationNoteTakingAiAgentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    locale: cdktn.stringToTerraform(struct!.locale),
    note_taking_ai_guardrail_id: cdktn.stringToTerraform(struct!.noteTakingAiGuardrailId),
    note_taking_ai_prompt_id: cdktn.stringToTerraform(struct!.noteTakingAiPromptId),
  }
}


export function wisdomAiAgentConfigurationNoteTakingAiAgentConfigurationToHclTerraform(struct?: WisdomAiAgentConfigurationNoteTakingAiAgentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    locale: {
      value: cdktn.stringToHclTerraform(struct!.locale),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    note_taking_ai_guardrail_id: {
      value: cdktn.stringToHclTerraform(struct!.noteTakingAiGuardrailId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    note_taking_ai_prompt_id: {
      value: cdktn.stringToHclTerraform(struct!.noteTakingAiPromptId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiAgentConfigurationNoteTakingAiAgentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiAgentConfigurationNoteTakingAiAgentConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locale !== undefined) {
      hasAnyValues = true;
      internalValueResult.locale = this._locale;
    }
    if (this._noteTakingAiGuardrailId !== undefined) {
      hasAnyValues = true;
      internalValueResult.noteTakingAiGuardrailId = this._noteTakingAiGuardrailId;
    }
    if (this._noteTakingAiPromptId !== undefined) {
      hasAnyValues = true;
      internalValueResult.noteTakingAiPromptId = this._noteTakingAiPromptId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfigurationNoteTakingAiAgentConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._locale = undefined;
      this._noteTakingAiGuardrailId = undefined;
      this._noteTakingAiPromptId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._locale = value.locale;
      this._noteTakingAiGuardrailId = value.noteTakingAiGuardrailId;
      this._noteTakingAiPromptId = value.noteTakingAiPromptId;
    }
  }

  // locale - computed: true, optional: true, required: false
  private _locale?: string;
  public get locale() {
    return this.getStringAttribute('locale');
  }
  public set locale(value: string) {
    this._locale = value;
  }
  public resetLocale() {
    this._locale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localeInput() {
    return this._locale;
  }

  // note_taking_ai_guardrail_id - computed: true, optional: true, required: false
  private _noteTakingAiGuardrailId?: string;
  public get noteTakingAiGuardrailId() {
    return this.getStringAttribute('note_taking_ai_guardrail_id');
  }
  public set noteTakingAiGuardrailId(value: string) {
    this._noteTakingAiGuardrailId = value;
  }
  public resetNoteTakingAiGuardrailId() {
    this._noteTakingAiGuardrailId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteTakingAiGuardrailIdInput() {
    return this._noteTakingAiGuardrailId;
  }

  // note_taking_ai_prompt_id - computed: true, optional: true, required: false
  private _noteTakingAiPromptId?: string;
  public get noteTakingAiPromptId() {
    return this.getStringAttribute('note_taking_ai_prompt_id');
  }
  public set noteTakingAiPromptId(value: string) {
    this._noteTakingAiPromptId = value;
  }
  public resetNoteTakingAiPromptId() {
    this._noteTakingAiPromptId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteTakingAiPromptIdInput() {
    return this._noteTakingAiPromptId;
  }
}
export interface WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsInstruction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#examples WisdomAiAgent#examples}
  */
  readonly examples?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#instruction WisdomAiAgent#instruction}
  */
  readonly instruction?: string;
}

export function wisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsInstructionToTerraform(struct?: WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsInstruction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    examples: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.examples),
    instruction: cdktn.stringToTerraform(struct!.instruction),
  }
}


export function wisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsInstructionToHclTerraform(struct?: WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsInstruction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    examples: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.examples),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    instruction: {
      value: cdktn.stringToHclTerraform(struct!.instruction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsInstructionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsInstruction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._examples !== undefined) {
      hasAnyValues = true;
      internalValueResult.examples = this._examples;
    }
    if (this._instruction !== undefined) {
      hasAnyValues = true;
      internalValueResult.instruction = this._instruction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsInstruction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._examples = undefined;
      this._instruction = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._examples = value.examples;
      this._instruction = value.instruction;
    }
  }

  // examples - computed: true, optional: true, required: false
  private _examples?: string[];
  public get examples() {
    return this.getListAttribute('examples');
  }
  public set examples(value: string[]) {
    this._examples = value;
  }
  public resetExamples() {
    this._examples = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get examplesInput() {
    return this._examples;
  }

  // instruction - computed: true, optional: true, required: false
  private _instruction?: string;
  public get instruction() {
    return this.getStringAttribute('instruction');
  }
  public set instruction(value: string) {
    this._instruction = value;
  }
  public resetInstruction() {
    this._instruction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instructionInput() {
    return this._instruction;
  }
}
export interface WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFiltersOutputConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#output_variable_name_override WisdomAiAgent#output_variable_name_override}
  */
  readonly outputVariableNameOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#session_data_namespace WisdomAiAgent#session_data_namespace}
  */
  readonly sessionDataNamespace?: string;
}

export function wisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFiltersOutputConfigurationToTerraform(struct?: WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFiltersOutputConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    output_variable_name_override: cdktn.stringToTerraform(struct!.outputVariableNameOverride),
    session_data_namespace: cdktn.stringToTerraform(struct!.sessionDataNamespace),
  }
}


export function wisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFiltersOutputConfigurationToHclTerraform(struct?: WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFiltersOutputConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    output_variable_name_override: {
      value: cdktn.stringToHclTerraform(struct!.outputVariableNameOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_data_namespace: {
      value: cdktn.stringToHclTerraform(struct!.sessionDataNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFiltersOutputConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFiltersOutputConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outputVariableNameOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputVariableNameOverride = this._outputVariableNameOverride;
    }
    if (this._sessionDataNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionDataNamespace = this._sessionDataNamespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFiltersOutputConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._outputVariableNameOverride = undefined;
      this._sessionDataNamespace = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._outputVariableNameOverride = value.outputVariableNameOverride;
      this._sessionDataNamespace = value.sessionDataNamespace;
    }
  }

  // output_variable_name_override - computed: true, optional: true, required: false
  private _outputVariableNameOverride?: string;
  public get outputVariableNameOverride() {
    return this.getStringAttribute('output_variable_name_override');
  }
  public set outputVariableNameOverride(value: string) {
    this._outputVariableNameOverride = value;
  }
  public resetOutputVariableNameOverride() {
    this._outputVariableNameOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputVariableNameOverrideInput() {
    return this._outputVariableNameOverride;
  }

  // session_data_namespace - computed: true, optional: true, required: false
  private _sessionDataNamespace?: string;
  public get sessionDataNamespace() {
    return this.getStringAttribute('session_data_namespace');
  }
  public set sessionDataNamespace(value: string) {
    this._sessionDataNamespace = value;
  }
  public resetSessionDataNamespace() {
    this._sessionDataNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionDataNamespaceInput() {
    return this._sessionDataNamespace;
  }
}
export interface WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#json_path WisdomAiAgent#json_path}
  */
  readonly jsonPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#output_configuration WisdomAiAgent#output_configuration}
  */
  readonly outputConfiguration?: WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFiltersOutputConfiguration;
}

export function wisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFiltersToTerraform(struct?: WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    json_path: cdktn.stringToTerraform(struct!.jsonPath),
    output_configuration: wisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFiltersOutputConfigurationToTerraform(struct!.outputConfiguration),
  }
}


export function wisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFiltersToHclTerraform(struct?: WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    json_path: {
      value: cdktn.stringToHclTerraform(struct!.jsonPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_configuration: {
      value: wisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFiltersOutputConfigurationToHclTerraform(struct!.outputConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFiltersOutputConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonPath = this._jsonPath;
    }
    if (this._outputConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputConfiguration = this._outputConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jsonPath = undefined;
      this._outputConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jsonPath = value.jsonPath;
      this._outputConfiguration.internalValue = value.outputConfiguration;
    }
  }

  // json_path - computed: true, optional: true, required: false
  private _jsonPath?: string;
  public get jsonPath() {
    return this.getStringAttribute('json_path');
  }
  public set jsonPath(value: string) {
    this._jsonPath = value;
  }
  public resetJsonPath() {
    this._jsonPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonPathInput() {
    return this._jsonPath;
  }

  // output_configuration - computed: true, optional: true, required: false
  private _outputConfiguration = new WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFiltersOutputConfigurationOutputReference(this, "output_configuration");
  public get outputConfiguration() {
    return this._outputConfiguration;
  }
  public putOutputConfiguration(value: WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFiltersOutputConfiguration) {
    this._outputConfiguration.internalValue = value;
  }
  public resetOutputConfiguration() {
    this._outputConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputConfigurationInput() {
    return this._outputConfiguration.internalValue;
  }
}

export class WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFiltersList extends cdktn.ComplexList {
  public internalValue? : WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFilters[] | cdktn.IResolvable

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
  public get(index: number): WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFiltersOutputReference {
    return new WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValueConstant {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#type WisdomAiAgent#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#value WisdomAiAgent#value}
  */
  readonly value?: string;
}

export function wisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValueConstantToTerraform(struct?: WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValueConstant | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function wisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValueConstantToHclTerraform(struct?: WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValueConstant | cdktn.IResolvable): any {
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

export class WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValueConstantOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValueConstant | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValueConstant | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
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
export interface WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#constant WisdomAiAgent#constant}
  */
  readonly constant?: WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValueConstant;
}

export function wisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValueToTerraform(struct?: WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    constant: wisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValueConstantToTerraform(struct!.constant),
  }
}


export function wisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValueToHclTerraform(struct?: WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    constant: {
      value: wisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValueConstantToHclTerraform(struct!.constant),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValueConstant",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constant?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.constant = this._constant?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._constant.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._constant.internalValue = value.constant;
    }
  }

  // constant - computed: true, optional: true, required: false
  private _constant = new WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValueConstantOutputReference(this, "constant");
  public get constant() {
    return this._constant;
  }
  public putConstant(value: WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValueConstant) {
    this._constant.internalValue = value;
  }
  public resetConstant() {
    this._constant.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantInput() {
    return this._constant.internalValue;
  }
}
export interface WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#json_path WisdomAiAgent#json_path}
  */
  readonly jsonPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#value WisdomAiAgent#value}
  */
  readonly value?: WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValue;
}

export function wisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesToTerraform(struct?: WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    json_path: cdktn.stringToTerraform(struct!.jsonPath),
    value: wisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValueToTerraform(struct!.value),
  }
}


export function wisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesToHclTerraform(struct?: WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    json_path: {
      value: cdktn.stringToHclTerraform(struct!.jsonPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: wisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValues | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonPath = this._jsonPath;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValues | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jsonPath = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jsonPath = value.jsonPath;
      this._value.internalValue = value.value;
    }
  }

  // json_path - computed: true, optional: true, required: false
  private _jsonPath?: string;
  public get jsonPath() {
    return this.getStringAttribute('json_path');
  }
  public set jsonPath(value: string) {
    this._jsonPath = value;
  }
  public resetJsonPath() {
    this._jsonPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonPathInput() {
    return this._jsonPath;
  }

  // value - computed: true, optional: true, required: false
  private _value = new WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesList extends cdktn.ComplexList {
  public internalValue? : WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValues[] | cdktn.IResolvable

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
  public get(index: number): WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesOutputReference {
    return new WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsUserInteractionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#is_user_confirmation_required WisdomAiAgent#is_user_confirmation_required}
  */
  readonly isUserConfirmationRequired?: boolean | cdktn.IResolvable;
}

export function wisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsUserInteractionConfigurationToTerraform(struct?: WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsUserInteractionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_user_confirmation_required: cdktn.booleanToTerraform(struct!.isUserConfirmationRequired),
  }
}


export function wisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsUserInteractionConfigurationToHclTerraform(struct?: WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsUserInteractionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_user_confirmation_required: {
      value: cdktn.booleanToHclTerraform(struct!.isUserConfirmationRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsUserInteractionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsUserInteractionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isUserConfirmationRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.isUserConfirmationRequired = this._isUserConfirmationRequired;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsUserInteractionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isUserConfirmationRequired = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isUserConfirmationRequired = value.isUserConfirmationRequired;
    }
  }

  // is_user_confirmation_required - computed: true, optional: true, required: false
  private _isUserConfirmationRequired?: boolean | cdktn.IResolvable;
  public get isUserConfirmationRequired() {
    return this.getBooleanAttribute('is_user_confirmation_required');
  }
  public set isUserConfirmationRequired(value: boolean | cdktn.IResolvable) {
    this._isUserConfirmationRequired = value;
  }
  public resetIsUserConfirmationRequired() {
    this._isUserConfirmationRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUserConfirmationRequiredInput() {
    return this._isUserConfirmationRequired;
  }
}
export interface WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#annotations WisdomAiAgent#annotations}
  */
  readonly annotations?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#description WisdomAiAgent#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#input_schema WisdomAiAgent#input_schema}
  */
  readonly inputSchema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#instruction WisdomAiAgent#instruction}
  */
  readonly instruction?: WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsInstruction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#output_filters WisdomAiAgent#output_filters}
  */
  readonly outputFilters?: WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFilters[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#output_schema WisdomAiAgent#output_schema}
  */
  readonly outputSchema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#override_input_values WisdomAiAgent#override_input_values}
  */
  readonly overrideInputValues?: WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValues[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#title WisdomAiAgent#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#tool_id WisdomAiAgent#tool_id}
  */
  readonly toolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#tool_name WisdomAiAgent#tool_name}
  */
  readonly toolName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#tool_type WisdomAiAgent#tool_type}
  */
  readonly toolType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#user_interaction_configuration WisdomAiAgent#user_interaction_configuration}
  */
  readonly userInteractionConfiguration?: WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsUserInteractionConfiguration;
}

export function wisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsToTerraform(struct?: WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    annotations: cdktn.stringToTerraform(struct!.annotations),
    description: cdktn.stringToTerraform(struct!.description),
    input_schema: cdktn.stringToTerraform(struct!.inputSchema),
    instruction: wisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsInstructionToTerraform(struct!.instruction),
    output_filters: cdktn.listMapper(wisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFiltersToTerraform, false)(struct!.outputFilters),
    output_schema: cdktn.stringToTerraform(struct!.outputSchema),
    override_input_values: cdktn.listMapper(wisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesToTerraform, false)(struct!.overrideInputValues),
    title: cdktn.stringToTerraform(struct!.title),
    tool_id: cdktn.stringToTerraform(struct!.toolId),
    tool_name: cdktn.stringToTerraform(struct!.toolName),
    tool_type: cdktn.stringToTerraform(struct!.toolType),
    user_interaction_configuration: wisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsUserInteractionConfigurationToTerraform(struct!.userInteractionConfiguration),
  }
}


export function wisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsToHclTerraform(struct?: WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    annotations: {
      value: cdktn.stringToHclTerraform(struct!.annotations),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_schema: {
      value: cdktn.stringToHclTerraform(struct!.inputSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instruction: {
      value: wisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsInstructionToHclTerraform(struct!.instruction),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsInstruction",
    },
    output_filters: {
      value: cdktn.listMapperHcl(wisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFiltersToHclTerraform, false)(struct!.outputFilters),
      isBlock: true,
      type: "list",
      storageClassType: "WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFiltersList",
    },
    output_schema: {
      value: cdktn.stringToHclTerraform(struct!.outputSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_input_values: {
      value: cdktn.listMapperHcl(wisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesToHclTerraform, false)(struct!.overrideInputValues),
      isBlock: true,
      type: "list",
      storageClassType: "WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesList",
    },
    title: {
      value: cdktn.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tool_id: {
      value: cdktn.stringToHclTerraform(struct!.toolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tool_name: {
      value: cdktn.stringToHclTerraform(struct!.toolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tool_type: {
      value: cdktn.stringToHclTerraform(struct!.toolType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_interaction_configuration: {
      value: wisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsUserInteractionConfigurationToHclTerraform(struct!.userInteractionConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsUserInteractionConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._inputSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputSchema = this._inputSchema;
    }
    if (this._instruction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instruction = this._instruction?.internalValue;
    }
    if (this._outputFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFilters = this._outputFilters?.internalValue;
    }
    if (this._outputSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputSchema = this._outputSchema;
    }
    if (this._overrideInputValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideInputValues = this._overrideInputValues?.internalValue;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._toolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolId = this._toolId;
    }
    if (this._toolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolName = this._toolName;
    }
    if (this._toolType !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolType = this._toolType;
    }
    if (this._userInteractionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userInteractionConfiguration = this._userInteractionConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._description = undefined;
      this._inputSchema = undefined;
      this._instruction.internalValue = undefined;
      this._outputFilters.internalValue = undefined;
      this._outputSchema = undefined;
      this._overrideInputValues.internalValue = undefined;
      this._title = undefined;
      this._toolId = undefined;
      this._toolName = undefined;
      this._toolType = undefined;
      this._userInteractionConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._description = value.description;
      this._inputSchema = value.inputSchema;
      this._instruction.internalValue = value.instruction;
      this._outputFilters.internalValue = value.outputFilters;
      this._outputSchema = value.outputSchema;
      this._overrideInputValues.internalValue = value.overrideInputValues;
      this._title = value.title;
      this._toolId = value.toolId;
      this._toolName = value.toolName;
      this._toolType = value.toolType;
      this._userInteractionConfiguration.internalValue = value.userInteractionConfiguration;
    }
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations?: string;
  public get annotations() {
    return this.getStringAttribute('annotations');
  }
  public set annotations(value: string) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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

  // input_schema - computed: true, optional: true, required: false
  private _inputSchema?: string;
  public get inputSchema() {
    return this.getStringAttribute('input_schema');
  }
  public set inputSchema(value: string) {
    this._inputSchema = value;
  }
  public resetInputSchema() {
    this._inputSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputSchemaInput() {
    return this._inputSchema;
  }

  // instruction - computed: true, optional: true, required: false
  private _instruction = new WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsInstructionOutputReference(this, "instruction");
  public get instruction() {
    return this._instruction;
  }
  public putInstruction(value: WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsInstruction) {
    this._instruction.internalValue = value;
  }
  public resetInstruction() {
    this._instruction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instructionInput() {
    return this._instruction.internalValue;
  }

  // output_filters - computed: true, optional: true, required: false
  private _outputFilters = new WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFiltersList(this, "output_filters", false);
  public get outputFilters() {
    return this._outputFilters;
  }
  public putOutputFilters(value: WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputFilters[] | cdktn.IResolvable) {
    this._outputFilters.internalValue = value;
  }
  public resetOutputFilters() {
    this._outputFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFiltersInput() {
    return this._outputFilters.internalValue;
  }

  // output_schema - computed: true, optional: true, required: false
  private _outputSchema?: string;
  public get outputSchema() {
    return this.getStringAttribute('output_schema');
  }
  public set outputSchema(value: string) {
    this._outputSchema = value;
  }
  public resetOutputSchema() {
    this._outputSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputSchemaInput() {
    return this._outputSchema;
  }

  // override_input_values - computed: true, optional: true, required: false
  private _overrideInputValues = new WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValuesList(this, "override_input_values", false);
  public get overrideInputValues() {
    return this._overrideInputValues;
  }
  public putOverrideInputValues(value: WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOverrideInputValues[] | cdktn.IResolvable) {
    this._overrideInputValues.internalValue = value;
  }
  public resetOverrideInputValues() {
    this._overrideInputValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInputValuesInput() {
    return this._overrideInputValues.internalValue;
  }

  // title - computed: true, optional: true, required: false
  private _title?: string;
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // tool_id - computed: true, optional: true, required: false
  private _toolId?: string;
  public get toolId() {
    return this.getStringAttribute('tool_id');
  }
  public set toolId(value: string) {
    this._toolId = value;
  }
  public resetToolId() {
    this._toolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolIdInput() {
    return this._toolId;
  }

  // tool_name - computed: true, optional: true, required: false
  private _toolName?: string;
  public get toolName() {
    return this.getStringAttribute('tool_name');
  }
  public set toolName(value: string) {
    this._toolName = value;
  }
  public resetToolName() {
    this._toolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolNameInput() {
    return this._toolName;
  }

  // tool_type - computed: true, optional: true, required: false
  private _toolType?: string;
  public get toolType() {
    return this.getStringAttribute('tool_type');
  }
  public set toolType(value: string) {
    this._toolType = value;
  }
  public resetToolType() {
    this._toolType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolTypeInput() {
    return this._toolType;
  }

  // user_interaction_configuration - computed: true, optional: true, required: false
  private _userInteractionConfiguration = new WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsUserInteractionConfigurationOutputReference(this, "user_interaction_configuration");
  public get userInteractionConfiguration() {
    return this._userInteractionConfiguration;
  }
  public putUserInteractionConfiguration(value: WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsUserInteractionConfiguration) {
    this._userInteractionConfiguration.internalValue = value;
  }
  public resetUserInteractionConfiguration() {
    this._userInteractionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInteractionConfigurationInput() {
    return this._userInteractionConfiguration.internalValue;
  }
}

export class WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsList extends cdktn.ComplexList {
  public internalValue? : WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurations[] | cdktn.IResolvable

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
  public get(index: number): WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputReference {
    return new WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WisdomAiAgentConfigurationOrchestrationAiAgentConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#connect_instance_arn WisdomAiAgent#connect_instance_arn}
  */
  readonly connectInstanceArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#locale WisdomAiAgent#locale}
  */
  readonly locale?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#orchestration_ai_guardrail_id WisdomAiAgent#orchestration_ai_guardrail_id}
  */
  readonly orchestrationAiGuardrailId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#orchestration_ai_prompt_id WisdomAiAgent#orchestration_ai_prompt_id}
  */
  readonly orchestrationAiPromptId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#tool_configurations WisdomAiAgent#tool_configurations}
  */
  readonly toolConfigurations?: WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurations[] | cdktn.IResolvable;
}

export function wisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToTerraform(struct?: WisdomAiAgentConfigurationOrchestrationAiAgentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connect_instance_arn: cdktn.stringToTerraform(struct!.connectInstanceArn),
    locale: cdktn.stringToTerraform(struct!.locale),
    orchestration_ai_guardrail_id: cdktn.stringToTerraform(struct!.orchestrationAiGuardrailId),
    orchestration_ai_prompt_id: cdktn.stringToTerraform(struct!.orchestrationAiPromptId),
    tool_configurations: cdktn.listMapper(wisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsToTerraform, false)(struct!.toolConfigurations),
  }
}


export function wisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToHclTerraform(struct?: WisdomAiAgentConfigurationOrchestrationAiAgentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connect_instance_arn: {
      value: cdktn.stringToHclTerraform(struct!.connectInstanceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locale: {
      value: cdktn.stringToHclTerraform(struct!.locale),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    orchestration_ai_guardrail_id: {
      value: cdktn.stringToHclTerraform(struct!.orchestrationAiGuardrailId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    orchestration_ai_prompt_id: {
      value: cdktn.stringToHclTerraform(struct!.orchestrationAiPromptId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tool_configurations: {
      value: cdktn.listMapperHcl(wisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsToHclTerraform, false)(struct!.toolConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiAgentConfigurationOrchestrationAiAgentConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectInstanceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectInstanceArn = this._connectInstanceArn;
    }
    if (this._locale !== undefined) {
      hasAnyValues = true;
      internalValueResult.locale = this._locale;
    }
    if (this._orchestrationAiGuardrailId !== undefined) {
      hasAnyValues = true;
      internalValueResult.orchestrationAiGuardrailId = this._orchestrationAiGuardrailId;
    }
    if (this._orchestrationAiPromptId !== undefined) {
      hasAnyValues = true;
      internalValueResult.orchestrationAiPromptId = this._orchestrationAiPromptId;
    }
    if (this._toolConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolConfigurations = this._toolConfigurations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfigurationOrchestrationAiAgentConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectInstanceArn = undefined;
      this._locale = undefined;
      this._orchestrationAiGuardrailId = undefined;
      this._orchestrationAiPromptId = undefined;
      this._toolConfigurations.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectInstanceArn = value.connectInstanceArn;
      this._locale = value.locale;
      this._orchestrationAiGuardrailId = value.orchestrationAiGuardrailId;
      this._orchestrationAiPromptId = value.orchestrationAiPromptId;
      this._toolConfigurations.internalValue = value.toolConfigurations;
    }
  }

  // connect_instance_arn - computed: true, optional: true, required: false
  private _connectInstanceArn?: string;
  public get connectInstanceArn() {
    return this.getStringAttribute('connect_instance_arn');
  }
  public set connectInstanceArn(value: string) {
    this._connectInstanceArn = value;
  }
  public resetConnectInstanceArn() {
    this._connectInstanceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectInstanceArnInput() {
    return this._connectInstanceArn;
  }

  // locale - computed: true, optional: true, required: false
  private _locale?: string;
  public get locale() {
    return this.getStringAttribute('locale');
  }
  public set locale(value: string) {
    this._locale = value;
  }
  public resetLocale() {
    this._locale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localeInput() {
    return this._locale;
  }

  // orchestration_ai_guardrail_id - computed: true, optional: true, required: false
  private _orchestrationAiGuardrailId?: string;
  public get orchestrationAiGuardrailId() {
    return this.getStringAttribute('orchestration_ai_guardrail_id');
  }
  public set orchestrationAiGuardrailId(value: string) {
    this._orchestrationAiGuardrailId = value;
  }
  public resetOrchestrationAiGuardrailId() {
    this._orchestrationAiGuardrailId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orchestrationAiGuardrailIdInput() {
    return this._orchestrationAiGuardrailId;
  }

  // orchestration_ai_prompt_id - computed: true, optional: true, required: false
  private _orchestrationAiPromptId?: string;
  public get orchestrationAiPromptId() {
    return this.getStringAttribute('orchestration_ai_prompt_id');
  }
  public set orchestrationAiPromptId(value: string) {
    this._orchestrationAiPromptId = value;
  }
  public resetOrchestrationAiPromptId() {
    this._orchestrationAiPromptId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orchestrationAiPromptIdInput() {
    return this._orchestrationAiPromptId;
  }

  // tool_configurations - computed: true, optional: true, required: false
  private _toolConfigurations = new WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurationsList(this, "tool_configurations", false);
  public get toolConfigurations() {
    return this._toolConfigurations;
  }
  public putToolConfigurations(value: WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToolConfigurations[] | cdktn.IResolvable) {
    this._toolConfigurations.internalValue = value;
  }
  public resetToolConfigurations() {
    this._toolConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolConfigurationsInput() {
    return this._toolConfigurations.internalValue;
  }
}
export interface WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#key WisdomAiAgent#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#value WisdomAiAgent#value}
  */
  readonly value?: string;
}

export function wisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsToTerraform(struct?: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function wisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsToHclTerraform(struct?: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions | cdktn.IResolvable): any {
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

export class WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions | cdktn.IResolvable | undefined) {
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

export class WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsList extends cdktn.ComplexList {
  public internalValue? : WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions[] | cdktn.IResolvable

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
  public get(index: number): WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsOutputReference {
    return new WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#key WisdomAiAgent#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#value WisdomAiAgent#value}
  */
  readonly value?: string;
}

export function wisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsToTerraform(struct?: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function wisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsToHclTerraform(struct?: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions | cdktn.IResolvable): any {
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

export class WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions | cdktn.IResolvable | undefined) {
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

export class WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsList extends cdktn.ComplexList {
  public internalValue? : WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions[] | cdktn.IResolvable

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
  public get(index: number): WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsOutputReference {
    return new WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#key WisdomAiAgent#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#value WisdomAiAgent#value}
  */
  readonly value?: string;
}

export function wisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionToTerraform(struct?: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function wisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionToHclTerraform(struct?: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition | cdktn.IResolvable): any {
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

export class WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition | cdktn.IResolvable | undefined) {
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
export interface WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#and_conditions WisdomAiAgent#and_conditions}
  */
  readonly andConditions?: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#tag_condition WisdomAiAgent#tag_condition}
  */
  readonly tagCondition?: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition;
}

export function wisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsToTerraform(struct?: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    and_conditions: cdktn.listMapper(wisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsToTerraform, false)(struct!.andConditions),
    tag_condition: wisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionToTerraform(struct!.tagCondition),
  }
}


export function wisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsToHclTerraform(struct?: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    and_conditions: {
      value: cdktn.listMapperHcl(wisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsToHclTerraform, false)(struct!.andConditions),
      isBlock: true,
      type: "list",
      storageClassType: "WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsList",
    },
    tag_condition: {
      value: wisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionToHclTerraform(struct!.tagCondition),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._andConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.andConditions = this._andConditions?.internalValue;
    }
    if (this._tagCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagCondition = this._tagCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._andConditions.internalValue = undefined;
      this._tagCondition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._andConditions.internalValue = value.andConditions;
      this._tagCondition.internalValue = value.tagCondition;
    }
  }

  // and_conditions - computed: true, optional: true, required: false
  private _andConditions = new WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditionsList(this, "and_conditions", false);
  public get andConditions() {
    return this._andConditions;
  }
  public putAndConditions(value: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsAndConditions[] | cdktn.IResolvable) {
    this._andConditions.internalValue = value;
  }
  public resetAndConditions() {
    this._andConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andConditionsInput() {
    return this._andConditions.internalValue;
  }

  // tag_condition - computed: true, optional: true, required: false
  private _tagCondition = new WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagConditionOutputReference(this, "tag_condition");
  public get tagCondition() {
    return this._tagCondition;
  }
  public putTagCondition(value: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsTagCondition) {
    this._tagCondition.internalValue = value;
  }
  public resetTagCondition() {
    this._tagCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagConditionInput() {
    return this._tagCondition.internalValue;
  }
}

export class WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsList extends cdktn.ComplexList {
  public internalValue? : WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions[] | cdktn.IResolvable

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
  public get(index: number): WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsOutputReference {
    return new WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#key WisdomAiAgent#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#value WisdomAiAgent#value}
  */
  readonly value?: string;
}

export function wisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionToTerraform(struct?: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function wisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionToHclTerraform(struct?: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition | cdktn.IResolvable): any {
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

export class WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition | cdktn.IResolvable | undefined) {
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
export interface WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#and_conditions WisdomAiAgent#and_conditions}
  */
  readonly andConditions?: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#or_conditions WisdomAiAgent#or_conditions}
  */
  readonly orConditions?: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#tag_condition WisdomAiAgent#tag_condition}
  */
  readonly tagCondition?: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition;
}

export function wisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterToTerraform(struct?: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    and_conditions: cdktn.listMapper(wisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsToTerraform, false)(struct!.andConditions),
    or_conditions: cdktn.listMapper(wisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsToTerraform, false)(struct!.orConditions),
    tag_condition: wisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionToTerraform(struct!.tagCondition),
  }
}


export function wisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterToHclTerraform(struct?: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    and_conditions: {
      value: cdktn.listMapperHcl(wisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsToHclTerraform, false)(struct!.andConditions),
      isBlock: true,
      type: "list",
      storageClassType: "WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsList",
    },
    or_conditions: {
      value: cdktn.listMapperHcl(wisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsToHclTerraform, false)(struct!.orConditions),
      isBlock: true,
      type: "list",
      storageClassType: "WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsList",
    },
    tag_condition: {
      value: wisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionToHclTerraform(struct!.tagCondition),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._andConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.andConditions = this._andConditions?.internalValue;
    }
    if (this._orConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orConditions = this._orConditions?.internalValue;
    }
    if (this._tagCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagCondition = this._tagCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._andConditions.internalValue = undefined;
      this._orConditions.internalValue = undefined;
      this._tagCondition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._andConditions.internalValue = value.andConditions;
      this._orConditions.internalValue = value.orConditions;
      this._tagCondition.internalValue = value.tagCondition;
    }
  }

  // and_conditions - computed: true, optional: true, required: false
  private _andConditions = new WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditionsList(this, "and_conditions", false);
  public get andConditions() {
    return this._andConditions;
  }
  public putAndConditions(value: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterAndConditions[] | cdktn.IResolvable) {
    this._andConditions.internalValue = value;
  }
  public resetAndConditions() {
    this._andConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andConditionsInput() {
    return this._andConditions.internalValue;
  }

  // or_conditions - computed: true, optional: true, required: false
  private _orConditions = new WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditionsList(this, "or_conditions", false);
  public get orConditions() {
    return this._orConditions;
  }
  public putOrConditions(value: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOrConditions[] | cdktn.IResolvable) {
    this._orConditions.internalValue = value;
  }
  public resetOrConditions() {
    this._orConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orConditionsInput() {
    return this._orConditions.internalValue;
  }

  // tag_condition - computed: true, optional: true, required: false
  private _tagCondition = new WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagConditionOutputReference(this, "tag_condition");
  public get tagCondition() {
    return this._tagCondition;
  }
  public putTagCondition(value: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterTagCondition) {
    this._tagCondition.internalValue = value;
  }
  public resetTagCondition() {
    this._tagCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagConditionInput() {
    return this._tagCondition.internalValue;
  }
}
export interface WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#content_tag_filter WisdomAiAgent#content_tag_filter}
  */
  readonly contentTagFilter?: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#max_results WisdomAiAgent#max_results}
  */
  readonly maxResults?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#override_knowledge_base_search_type WisdomAiAgent#override_knowledge_base_search_type}
  */
  readonly overrideKnowledgeBaseSearchType?: string;
}

export function wisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataToTerraform(struct?: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_tag_filter: wisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterToTerraform(struct!.contentTagFilter),
    max_results: cdktn.numberToTerraform(struct!.maxResults),
    override_knowledge_base_search_type: cdktn.stringToTerraform(struct!.overrideKnowledgeBaseSearchType),
  }
}


export function wisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataToHclTerraform(struct?: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_tag_filter: {
      value: wisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterToHclTerraform(struct!.contentTagFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter",
    },
    max_results: {
      value: cdktn.numberToHclTerraform(struct!.maxResults),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    override_knowledge_base_search_type: {
      value: cdktn.stringToHclTerraform(struct!.overrideKnowledgeBaseSearchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentTagFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentTagFilter = this._contentTagFilter?.internalValue;
    }
    if (this._maxResults !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxResults = this._maxResults;
    }
    if (this._overrideKnowledgeBaseSearchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideKnowledgeBaseSearchType = this._overrideKnowledgeBaseSearchType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentTagFilter.internalValue = undefined;
      this._maxResults = undefined;
      this._overrideKnowledgeBaseSearchType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentTagFilter.internalValue = value.contentTagFilter;
      this._maxResults = value.maxResults;
      this._overrideKnowledgeBaseSearchType = value.overrideKnowledgeBaseSearchType;
    }
  }

  // content_tag_filter - computed: true, optional: true, required: false
  private _contentTagFilter = new WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilterOutputReference(this, "content_tag_filter");
  public get contentTagFilter() {
    return this._contentTagFilter;
  }
  public putContentTagFilter(value: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataContentTagFilter) {
    this._contentTagFilter.internalValue = value;
  }
  public resetContentTagFilter() {
    this._contentTagFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTagFilterInput() {
    return this._contentTagFilter.internalValue;
  }

  // max_results - computed: true, optional: true, required: false
  private _maxResults?: number;
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }
  public set maxResults(value: number) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
  }

  // override_knowledge_base_search_type - computed: true, optional: true, required: false
  private _overrideKnowledgeBaseSearchType?: string;
  public get overrideKnowledgeBaseSearchType() {
    return this.getStringAttribute('override_knowledge_base_search_type');
  }
  public set overrideKnowledgeBaseSearchType(value: string) {
    this._overrideKnowledgeBaseSearchType = value;
  }
  public resetOverrideKnowledgeBaseSearchType() {
    this._overrideKnowledgeBaseSearchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideKnowledgeBaseSearchTypeInput() {
    return this._overrideKnowledgeBaseSearchType;
  }
}
export interface WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#knowledge_base_association_configuration_data WisdomAiAgent#knowledge_base_association_configuration_data}
  */
  readonly knowledgeBaseAssociationConfigurationData?: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData;
}

export function wisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataToTerraform(struct?: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    knowledge_base_association_configuration_data: wisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataToTerraform(struct!.knowledgeBaseAssociationConfigurationData),
  }
}


export function wisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataToHclTerraform(struct?: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    knowledge_base_association_configuration_data: {
      value: wisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataToHclTerraform(struct!.knowledgeBaseAssociationConfigurationData),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._knowledgeBaseAssociationConfigurationData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.knowledgeBaseAssociationConfigurationData = this._knowledgeBaseAssociationConfigurationData?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._knowledgeBaseAssociationConfigurationData.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._knowledgeBaseAssociationConfigurationData.internalValue = value.knowledgeBaseAssociationConfigurationData;
    }
  }

  // knowledge_base_association_configuration_data - computed: true, optional: true, required: false
  private _knowledgeBaseAssociationConfigurationData = new WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationDataOutputReference(this, "knowledge_base_association_configuration_data");
  public get knowledgeBaseAssociationConfigurationData() {
    return this._knowledgeBaseAssociationConfigurationData;
  }
  public putKnowledgeBaseAssociationConfigurationData(value: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataKnowledgeBaseAssociationConfigurationData) {
    this._knowledgeBaseAssociationConfigurationData.internalValue = value;
  }
  public resetKnowledgeBaseAssociationConfigurationData() {
    this._knowledgeBaseAssociationConfigurationData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeBaseAssociationConfigurationDataInput() {
    return this._knowledgeBaseAssociationConfigurationData.internalValue;
  }
}
export interface WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#association_configuration_data WisdomAiAgent#association_configuration_data}
  */
  readonly associationConfigurationData?: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#association_id WisdomAiAgent#association_id}
  */
  readonly associationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#association_type WisdomAiAgent#association_type}
  */
  readonly associationType?: string;
}

export function wisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsToTerraform(struct?: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    association_configuration_data: wisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataToTerraform(struct!.associationConfigurationData),
    association_id: cdktn.stringToTerraform(struct!.associationId),
    association_type: cdktn.stringToTerraform(struct!.associationType),
  }
}


export function wisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsToHclTerraform(struct?: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    association_configuration_data: {
      value: wisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataToHclTerraform(struct!.associationConfigurationData),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData",
    },
    association_id: {
      value: cdktn.stringToHclTerraform(struct!.associationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    association_type: {
      value: cdktn.stringToHclTerraform(struct!.associationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._associationConfigurationData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.associationConfigurationData = this._associationConfigurationData?.internalValue;
    }
    if (this._associationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.associationId = this._associationId;
    }
    if (this._associationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.associationType = this._associationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._associationConfigurationData.internalValue = undefined;
      this._associationId = undefined;
      this._associationType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._associationConfigurationData.internalValue = value.associationConfigurationData;
      this._associationId = value.associationId;
      this._associationType = value.associationType;
    }
  }

  // association_configuration_data - computed: true, optional: true, required: false
  private _associationConfigurationData = new WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationDataOutputReference(this, "association_configuration_data");
  public get associationConfigurationData() {
    return this._associationConfigurationData;
  }
  public putAssociationConfigurationData(value: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsAssociationConfigurationData) {
    this._associationConfigurationData.internalValue = value;
  }
  public resetAssociationConfigurationData() {
    this._associationConfigurationData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationConfigurationDataInput() {
    return this._associationConfigurationData.internalValue;
  }

  // association_id - computed: true, optional: true, required: false
  private _associationId?: string;
  public get associationId() {
    return this.getStringAttribute('association_id');
  }
  public set associationId(value: string) {
    this._associationId = value;
  }
  public resetAssociationId() {
    this._associationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationIdInput() {
    return this._associationId;
  }

  // association_type - computed: true, optional: true, required: false
  private _associationType?: string;
  public get associationType() {
    return this.getStringAttribute('association_type');
  }
  public set associationType(value: string) {
    this._associationType = value;
  }
  public resetAssociationType() {
    this._associationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationTypeInput() {
    return this._associationType;
  }
}

export class WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsList extends cdktn.ComplexList {
  public internalValue? : WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurations[] | cdktn.IResolvable

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
  public get(index: number): WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsOutputReference {
    return new WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WisdomAiAgentConfigurationSelfServiceAiAgentConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#association_configurations WisdomAiAgent#association_configurations}
  */
  readonly associationConfigurations?: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurations[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#self_service_ai_guardrail_id WisdomAiAgent#self_service_ai_guardrail_id}
  */
  readonly selfServiceAiGuardrailId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#self_service_answer_generation_ai_prompt_id WisdomAiAgent#self_service_answer_generation_ai_prompt_id}
  */
  readonly selfServiceAnswerGenerationAiPromptId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#self_service_pre_processing_ai_prompt_id WisdomAiAgent#self_service_pre_processing_ai_prompt_id}
  */
  readonly selfServicePreProcessingAiPromptId?: string;
}

export function wisdomAiAgentConfigurationSelfServiceAiAgentConfigurationToTerraform(struct?: WisdomAiAgentConfigurationSelfServiceAiAgentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    association_configurations: cdktn.listMapper(wisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsToTerraform, false)(struct!.associationConfigurations),
    self_service_ai_guardrail_id: cdktn.stringToTerraform(struct!.selfServiceAiGuardrailId),
    self_service_answer_generation_ai_prompt_id: cdktn.stringToTerraform(struct!.selfServiceAnswerGenerationAiPromptId),
    self_service_pre_processing_ai_prompt_id: cdktn.stringToTerraform(struct!.selfServicePreProcessingAiPromptId),
  }
}


export function wisdomAiAgentConfigurationSelfServiceAiAgentConfigurationToHclTerraform(struct?: WisdomAiAgentConfigurationSelfServiceAiAgentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    association_configurations: {
      value: cdktn.listMapperHcl(wisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsToHclTerraform, false)(struct!.associationConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsList",
    },
    self_service_ai_guardrail_id: {
      value: cdktn.stringToHclTerraform(struct!.selfServiceAiGuardrailId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    self_service_answer_generation_ai_prompt_id: {
      value: cdktn.stringToHclTerraform(struct!.selfServiceAnswerGenerationAiPromptId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    self_service_pre_processing_ai_prompt_id: {
      value: cdktn.stringToHclTerraform(struct!.selfServicePreProcessingAiPromptId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiAgentConfigurationSelfServiceAiAgentConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._associationConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.associationConfigurations = this._associationConfigurations?.internalValue;
    }
    if (this._selfServiceAiGuardrailId !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfServiceAiGuardrailId = this._selfServiceAiGuardrailId;
    }
    if (this._selfServiceAnswerGenerationAiPromptId !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfServiceAnswerGenerationAiPromptId = this._selfServiceAnswerGenerationAiPromptId;
    }
    if (this._selfServicePreProcessingAiPromptId !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfServicePreProcessingAiPromptId = this._selfServicePreProcessingAiPromptId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfigurationSelfServiceAiAgentConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._associationConfigurations.internalValue = undefined;
      this._selfServiceAiGuardrailId = undefined;
      this._selfServiceAnswerGenerationAiPromptId = undefined;
      this._selfServicePreProcessingAiPromptId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._associationConfigurations.internalValue = value.associationConfigurations;
      this._selfServiceAiGuardrailId = value.selfServiceAiGuardrailId;
      this._selfServiceAnswerGenerationAiPromptId = value.selfServiceAnswerGenerationAiPromptId;
      this._selfServicePreProcessingAiPromptId = value.selfServicePreProcessingAiPromptId;
    }
  }

  // association_configurations - computed: true, optional: true, required: false
  private _associationConfigurations = new WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurationsList(this, "association_configurations", false);
  public get associationConfigurations() {
    return this._associationConfigurations;
  }
  public putAssociationConfigurations(value: WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationAssociationConfigurations[] | cdktn.IResolvable) {
    this._associationConfigurations.internalValue = value;
  }
  public resetAssociationConfigurations() {
    this._associationConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationConfigurationsInput() {
    return this._associationConfigurations.internalValue;
  }

  // self_service_ai_guardrail_id - computed: true, optional: true, required: false
  private _selfServiceAiGuardrailId?: string;
  public get selfServiceAiGuardrailId() {
    return this.getStringAttribute('self_service_ai_guardrail_id');
  }
  public set selfServiceAiGuardrailId(value: string) {
    this._selfServiceAiGuardrailId = value;
  }
  public resetSelfServiceAiGuardrailId() {
    this._selfServiceAiGuardrailId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfServiceAiGuardrailIdInput() {
    return this._selfServiceAiGuardrailId;
  }

  // self_service_answer_generation_ai_prompt_id - computed: true, optional: true, required: false
  private _selfServiceAnswerGenerationAiPromptId?: string;
  public get selfServiceAnswerGenerationAiPromptId() {
    return this.getStringAttribute('self_service_answer_generation_ai_prompt_id');
  }
  public set selfServiceAnswerGenerationAiPromptId(value: string) {
    this._selfServiceAnswerGenerationAiPromptId = value;
  }
  public resetSelfServiceAnswerGenerationAiPromptId() {
    this._selfServiceAnswerGenerationAiPromptId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfServiceAnswerGenerationAiPromptIdInput() {
    return this._selfServiceAnswerGenerationAiPromptId;
  }

  // self_service_pre_processing_ai_prompt_id - computed: true, optional: true, required: false
  private _selfServicePreProcessingAiPromptId?: string;
  public get selfServicePreProcessingAiPromptId() {
    return this.getStringAttribute('self_service_pre_processing_ai_prompt_id');
  }
  public set selfServicePreProcessingAiPromptId(value: string) {
    this._selfServicePreProcessingAiPromptId = value;
  }
  public resetSelfServicePreProcessingAiPromptId() {
    this._selfServicePreProcessingAiPromptId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfServicePreProcessingAiPromptIdInput() {
    return this._selfServicePreProcessingAiPromptId;
  }
}
export interface WisdomAiAgentConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#answer_recommendation_ai_agent_configuration WisdomAiAgent#answer_recommendation_ai_agent_configuration}
  */
  readonly answerRecommendationAiAgentConfiguration?: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#case_summarization_ai_agent_configuration WisdomAiAgent#case_summarization_ai_agent_configuration}
  */
  readonly caseSummarizationAiAgentConfiguration?: WisdomAiAgentConfigurationCaseSummarizationAiAgentConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#email_generative_answer_ai_agent_configuration WisdomAiAgent#email_generative_answer_ai_agent_configuration}
  */
  readonly emailGenerativeAnswerAiAgentConfiguration?: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#email_overview_ai_agent_configuration WisdomAiAgent#email_overview_ai_agent_configuration}
  */
  readonly emailOverviewAiAgentConfiguration?: WisdomAiAgentConfigurationEmailOverviewAiAgentConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#email_response_ai_agent_configuration WisdomAiAgent#email_response_ai_agent_configuration}
  */
  readonly emailResponseAiAgentConfiguration?: WisdomAiAgentConfigurationEmailResponseAiAgentConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#manual_search_ai_agent_configuration WisdomAiAgent#manual_search_ai_agent_configuration}
  */
  readonly manualSearchAiAgentConfiguration?: WisdomAiAgentConfigurationManualSearchAiAgentConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#note_taking_ai_agent_configuration WisdomAiAgent#note_taking_ai_agent_configuration}
  */
  readonly noteTakingAiAgentConfiguration?: WisdomAiAgentConfigurationNoteTakingAiAgentConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#orchestration_ai_agent_configuration WisdomAiAgent#orchestration_ai_agent_configuration}
  */
  readonly orchestrationAiAgentConfiguration?: WisdomAiAgentConfigurationOrchestrationAiAgentConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#self_service_ai_agent_configuration WisdomAiAgent#self_service_ai_agent_configuration}
  */
  readonly selfServiceAiAgentConfiguration?: WisdomAiAgentConfigurationSelfServiceAiAgentConfiguration;
}

export function wisdomAiAgentConfigurationToTerraform(struct?: WisdomAiAgentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    answer_recommendation_ai_agent_configuration: wisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationToTerraform(struct!.answerRecommendationAiAgentConfiguration),
    case_summarization_ai_agent_configuration: wisdomAiAgentConfigurationCaseSummarizationAiAgentConfigurationToTerraform(struct!.caseSummarizationAiAgentConfiguration),
    email_generative_answer_ai_agent_configuration: wisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationToTerraform(struct!.emailGenerativeAnswerAiAgentConfiguration),
    email_overview_ai_agent_configuration: wisdomAiAgentConfigurationEmailOverviewAiAgentConfigurationToTerraform(struct!.emailOverviewAiAgentConfiguration),
    email_response_ai_agent_configuration: wisdomAiAgentConfigurationEmailResponseAiAgentConfigurationToTerraform(struct!.emailResponseAiAgentConfiguration),
    manual_search_ai_agent_configuration: wisdomAiAgentConfigurationManualSearchAiAgentConfigurationToTerraform(struct!.manualSearchAiAgentConfiguration),
    note_taking_ai_agent_configuration: wisdomAiAgentConfigurationNoteTakingAiAgentConfigurationToTerraform(struct!.noteTakingAiAgentConfiguration),
    orchestration_ai_agent_configuration: wisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToTerraform(struct!.orchestrationAiAgentConfiguration),
    self_service_ai_agent_configuration: wisdomAiAgentConfigurationSelfServiceAiAgentConfigurationToTerraform(struct!.selfServiceAiAgentConfiguration),
  }
}


export function wisdomAiAgentConfigurationToHclTerraform(struct?: WisdomAiAgentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    answer_recommendation_ai_agent_configuration: {
      value: wisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationToHclTerraform(struct!.answerRecommendationAiAgentConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfiguration",
    },
    case_summarization_ai_agent_configuration: {
      value: wisdomAiAgentConfigurationCaseSummarizationAiAgentConfigurationToHclTerraform(struct!.caseSummarizationAiAgentConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomAiAgentConfigurationCaseSummarizationAiAgentConfiguration",
    },
    email_generative_answer_ai_agent_configuration: {
      value: wisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationToHclTerraform(struct!.emailGenerativeAnswerAiAgentConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfiguration",
    },
    email_overview_ai_agent_configuration: {
      value: wisdomAiAgentConfigurationEmailOverviewAiAgentConfigurationToHclTerraform(struct!.emailOverviewAiAgentConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomAiAgentConfigurationEmailOverviewAiAgentConfiguration",
    },
    email_response_ai_agent_configuration: {
      value: wisdomAiAgentConfigurationEmailResponseAiAgentConfigurationToHclTerraform(struct!.emailResponseAiAgentConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomAiAgentConfigurationEmailResponseAiAgentConfiguration",
    },
    manual_search_ai_agent_configuration: {
      value: wisdomAiAgentConfigurationManualSearchAiAgentConfigurationToHclTerraform(struct!.manualSearchAiAgentConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomAiAgentConfigurationManualSearchAiAgentConfiguration",
    },
    note_taking_ai_agent_configuration: {
      value: wisdomAiAgentConfigurationNoteTakingAiAgentConfigurationToHclTerraform(struct!.noteTakingAiAgentConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomAiAgentConfigurationNoteTakingAiAgentConfiguration",
    },
    orchestration_ai_agent_configuration: {
      value: wisdomAiAgentConfigurationOrchestrationAiAgentConfigurationToHclTerraform(struct!.orchestrationAiAgentConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomAiAgentConfigurationOrchestrationAiAgentConfiguration",
    },
    self_service_ai_agent_configuration: {
      value: wisdomAiAgentConfigurationSelfServiceAiAgentConfigurationToHclTerraform(struct!.selfServiceAiAgentConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomAiAgentConfigurationSelfServiceAiAgentConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiAgentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiAgentConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._answerRecommendationAiAgentConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.answerRecommendationAiAgentConfiguration = this._answerRecommendationAiAgentConfiguration?.internalValue;
    }
    if (this._caseSummarizationAiAgentConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSummarizationAiAgentConfiguration = this._caseSummarizationAiAgentConfiguration?.internalValue;
    }
    if (this._emailGenerativeAnswerAiAgentConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailGenerativeAnswerAiAgentConfiguration = this._emailGenerativeAnswerAiAgentConfiguration?.internalValue;
    }
    if (this._emailOverviewAiAgentConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailOverviewAiAgentConfiguration = this._emailOverviewAiAgentConfiguration?.internalValue;
    }
    if (this._emailResponseAiAgentConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailResponseAiAgentConfiguration = this._emailResponseAiAgentConfiguration?.internalValue;
    }
    if (this._manualSearchAiAgentConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualSearchAiAgentConfiguration = this._manualSearchAiAgentConfiguration?.internalValue;
    }
    if (this._noteTakingAiAgentConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noteTakingAiAgentConfiguration = this._noteTakingAiAgentConfiguration?.internalValue;
    }
    if (this._orchestrationAiAgentConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orchestrationAiAgentConfiguration = this._orchestrationAiAgentConfiguration?.internalValue;
    }
    if (this._selfServiceAiAgentConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfServiceAiAgentConfiguration = this._selfServiceAiAgentConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiAgentConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._answerRecommendationAiAgentConfiguration.internalValue = undefined;
      this._caseSummarizationAiAgentConfiguration.internalValue = undefined;
      this._emailGenerativeAnswerAiAgentConfiguration.internalValue = undefined;
      this._emailOverviewAiAgentConfiguration.internalValue = undefined;
      this._emailResponseAiAgentConfiguration.internalValue = undefined;
      this._manualSearchAiAgentConfiguration.internalValue = undefined;
      this._noteTakingAiAgentConfiguration.internalValue = undefined;
      this._orchestrationAiAgentConfiguration.internalValue = undefined;
      this._selfServiceAiAgentConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._answerRecommendationAiAgentConfiguration.internalValue = value.answerRecommendationAiAgentConfiguration;
      this._caseSummarizationAiAgentConfiguration.internalValue = value.caseSummarizationAiAgentConfiguration;
      this._emailGenerativeAnswerAiAgentConfiguration.internalValue = value.emailGenerativeAnswerAiAgentConfiguration;
      this._emailOverviewAiAgentConfiguration.internalValue = value.emailOverviewAiAgentConfiguration;
      this._emailResponseAiAgentConfiguration.internalValue = value.emailResponseAiAgentConfiguration;
      this._manualSearchAiAgentConfiguration.internalValue = value.manualSearchAiAgentConfiguration;
      this._noteTakingAiAgentConfiguration.internalValue = value.noteTakingAiAgentConfiguration;
      this._orchestrationAiAgentConfiguration.internalValue = value.orchestrationAiAgentConfiguration;
      this._selfServiceAiAgentConfiguration.internalValue = value.selfServiceAiAgentConfiguration;
    }
  }

  // answer_recommendation_ai_agent_configuration - computed: true, optional: true, required: false
  private _answerRecommendationAiAgentConfiguration = new WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfigurationOutputReference(this, "answer_recommendation_ai_agent_configuration");
  public get answerRecommendationAiAgentConfiguration() {
    return this._answerRecommendationAiAgentConfiguration;
  }
  public putAnswerRecommendationAiAgentConfiguration(value: WisdomAiAgentConfigurationAnswerRecommendationAiAgentConfiguration) {
    this._answerRecommendationAiAgentConfiguration.internalValue = value;
  }
  public resetAnswerRecommendationAiAgentConfiguration() {
    this._answerRecommendationAiAgentConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get answerRecommendationAiAgentConfigurationInput() {
    return this._answerRecommendationAiAgentConfiguration.internalValue;
  }

  // case_summarization_ai_agent_configuration - computed: true, optional: true, required: false
  private _caseSummarizationAiAgentConfiguration = new WisdomAiAgentConfigurationCaseSummarizationAiAgentConfigurationOutputReference(this, "case_summarization_ai_agent_configuration");
  public get caseSummarizationAiAgentConfiguration() {
    return this._caseSummarizationAiAgentConfiguration;
  }
  public putCaseSummarizationAiAgentConfiguration(value: WisdomAiAgentConfigurationCaseSummarizationAiAgentConfiguration) {
    this._caseSummarizationAiAgentConfiguration.internalValue = value;
  }
  public resetCaseSummarizationAiAgentConfiguration() {
    this._caseSummarizationAiAgentConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSummarizationAiAgentConfigurationInput() {
    return this._caseSummarizationAiAgentConfiguration.internalValue;
  }

  // email_generative_answer_ai_agent_configuration - computed: true, optional: true, required: false
  private _emailGenerativeAnswerAiAgentConfiguration = new WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfigurationOutputReference(this, "email_generative_answer_ai_agent_configuration");
  public get emailGenerativeAnswerAiAgentConfiguration() {
    return this._emailGenerativeAnswerAiAgentConfiguration;
  }
  public putEmailGenerativeAnswerAiAgentConfiguration(value: WisdomAiAgentConfigurationEmailGenerativeAnswerAiAgentConfiguration) {
    this._emailGenerativeAnswerAiAgentConfiguration.internalValue = value;
  }
  public resetEmailGenerativeAnswerAiAgentConfiguration() {
    this._emailGenerativeAnswerAiAgentConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailGenerativeAnswerAiAgentConfigurationInput() {
    return this._emailGenerativeAnswerAiAgentConfiguration.internalValue;
  }

  // email_overview_ai_agent_configuration - computed: true, optional: true, required: false
  private _emailOverviewAiAgentConfiguration = new WisdomAiAgentConfigurationEmailOverviewAiAgentConfigurationOutputReference(this, "email_overview_ai_agent_configuration");
  public get emailOverviewAiAgentConfiguration() {
    return this._emailOverviewAiAgentConfiguration;
  }
  public putEmailOverviewAiAgentConfiguration(value: WisdomAiAgentConfigurationEmailOverviewAiAgentConfiguration) {
    this._emailOverviewAiAgentConfiguration.internalValue = value;
  }
  public resetEmailOverviewAiAgentConfiguration() {
    this._emailOverviewAiAgentConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailOverviewAiAgentConfigurationInput() {
    return this._emailOverviewAiAgentConfiguration.internalValue;
  }

  // email_response_ai_agent_configuration - computed: true, optional: true, required: false
  private _emailResponseAiAgentConfiguration = new WisdomAiAgentConfigurationEmailResponseAiAgentConfigurationOutputReference(this, "email_response_ai_agent_configuration");
  public get emailResponseAiAgentConfiguration() {
    return this._emailResponseAiAgentConfiguration;
  }
  public putEmailResponseAiAgentConfiguration(value: WisdomAiAgentConfigurationEmailResponseAiAgentConfiguration) {
    this._emailResponseAiAgentConfiguration.internalValue = value;
  }
  public resetEmailResponseAiAgentConfiguration() {
    this._emailResponseAiAgentConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailResponseAiAgentConfigurationInput() {
    return this._emailResponseAiAgentConfiguration.internalValue;
  }

  // manual_search_ai_agent_configuration - computed: true, optional: true, required: false
  private _manualSearchAiAgentConfiguration = new WisdomAiAgentConfigurationManualSearchAiAgentConfigurationOutputReference(this, "manual_search_ai_agent_configuration");
  public get manualSearchAiAgentConfiguration() {
    return this._manualSearchAiAgentConfiguration;
  }
  public putManualSearchAiAgentConfiguration(value: WisdomAiAgentConfigurationManualSearchAiAgentConfiguration) {
    this._manualSearchAiAgentConfiguration.internalValue = value;
  }
  public resetManualSearchAiAgentConfiguration() {
    this._manualSearchAiAgentConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualSearchAiAgentConfigurationInput() {
    return this._manualSearchAiAgentConfiguration.internalValue;
  }

  // note_taking_ai_agent_configuration - computed: true, optional: true, required: false
  private _noteTakingAiAgentConfiguration = new WisdomAiAgentConfigurationNoteTakingAiAgentConfigurationOutputReference(this, "note_taking_ai_agent_configuration");
  public get noteTakingAiAgentConfiguration() {
    return this._noteTakingAiAgentConfiguration;
  }
  public putNoteTakingAiAgentConfiguration(value: WisdomAiAgentConfigurationNoteTakingAiAgentConfiguration) {
    this._noteTakingAiAgentConfiguration.internalValue = value;
  }
  public resetNoteTakingAiAgentConfiguration() {
    this._noteTakingAiAgentConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteTakingAiAgentConfigurationInput() {
    return this._noteTakingAiAgentConfiguration.internalValue;
  }

  // orchestration_ai_agent_configuration - computed: true, optional: true, required: false
  private _orchestrationAiAgentConfiguration = new WisdomAiAgentConfigurationOrchestrationAiAgentConfigurationOutputReference(this, "orchestration_ai_agent_configuration");
  public get orchestrationAiAgentConfiguration() {
    return this._orchestrationAiAgentConfiguration;
  }
  public putOrchestrationAiAgentConfiguration(value: WisdomAiAgentConfigurationOrchestrationAiAgentConfiguration) {
    this._orchestrationAiAgentConfiguration.internalValue = value;
  }
  public resetOrchestrationAiAgentConfiguration() {
    this._orchestrationAiAgentConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orchestrationAiAgentConfigurationInput() {
    return this._orchestrationAiAgentConfiguration.internalValue;
  }

  // self_service_ai_agent_configuration - computed: true, optional: true, required: false
  private _selfServiceAiAgentConfiguration = new WisdomAiAgentConfigurationSelfServiceAiAgentConfigurationOutputReference(this, "self_service_ai_agent_configuration");
  public get selfServiceAiAgentConfiguration() {
    return this._selfServiceAiAgentConfiguration;
  }
  public putSelfServiceAiAgentConfiguration(value: WisdomAiAgentConfigurationSelfServiceAiAgentConfiguration) {
    this._selfServiceAiAgentConfiguration.internalValue = value;
  }
  public resetSelfServiceAiAgentConfiguration() {
    this._selfServiceAiAgentConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfServiceAiAgentConfigurationInput() {
    return this._selfServiceAiAgentConfiguration.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent awscc_wisdom_ai_agent}
*/
export class WisdomAiAgent extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_wisdom_ai_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a WisdomAiAgent resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WisdomAiAgent to import
  * @param importFromId The id of the existing WisdomAiAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WisdomAiAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_wisdom_ai_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_agent awscc_wisdom_ai_agent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WisdomAiAgentConfig
  */
  public constructor(scope: Construct, id: string, config: WisdomAiAgentConfig) {
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
    this._assistantId = config.assistantId;
    this._configuration.internalValue = config.configuration;
    this._description = config.description;
    this._name = config.name;
    this._tags = config.tags;
    this._type = config.type;
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

  // assistant_id - computed: false, optional: false, required: true
  private _assistantId?: string;
  public get assistantId() {
    return this.getStringAttribute('assistant_id');
  }
  public set assistantId(value: string) {
    this._assistantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assistantIdInput() {
    return this._assistantId;
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration = new WisdomAiAgentConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: WisdomAiAgentConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
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

  // modified_time_seconds - computed: true, optional: false, required: false
  public get modifiedTimeSeconds() {
    return this.getNumberAttribute('modified_time_seconds');
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

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assistant_id: cdktn.stringToTerraform(this._assistantId),
      configuration: wisdomAiAgentConfigurationToTerraform(this._configuration.internalValue),
      description: cdktn.stringToTerraform(this._description),
      name: cdktn.stringToTerraform(this._name),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      type: cdktn.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assistant_id: {
        value: cdktn.stringToHclTerraform(this._assistantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: wisdomAiAgentConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WisdomAiAgentConfiguration",
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
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
