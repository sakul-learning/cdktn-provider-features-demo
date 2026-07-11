// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_automated_reasoning_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BedrockAutomatedReasoningPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_automated_reasoning_policy#description BedrockAutomatedReasoningPolicy#description}
  */
  readonly description?: string;
  /**
  * Specifies whether to force delete the automated reasoning policy even if it has active resources. When false , Amazon Bedrock validates if all artifacts have been deleted (e.g. policy version, test case, test result) for a policy before deletion. When true , Amazon Bedrock will delete the policy and all its artifacts without validation. Default is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_automated_reasoning_policy#force_delete BedrockAutomatedReasoningPolicy#force_delete}
  */
  readonly forceDelete?: boolean | cdktn.IResolvable;
  /**
  * The KMS key with which the Policy's assets will be encrypted at rest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_automated_reasoning_policy#kms_key_id BedrockAutomatedReasoningPolicy#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_automated_reasoning_policy#name BedrockAutomatedReasoningPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_automated_reasoning_policy#policy_definition BedrockAutomatedReasoningPolicy#policy_definition}
  */
  readonly policyDefinition?: BedrockAutomatedReasoningPolicyPolicyDefinition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_automated_reasoning_policy#tags BedrockAutomatedReasoningPolicy#tags}
  */
  readonly tags?: BedrockAutomatedReasoningPolicyTags[] | cdktn.IResolvable;
}
export interface BedrockAutomatedReasoningPolicyPolicyDefinitionRules {
  /**
  * An alternate expression for this rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_automated_reasoning_policy#alternate_expression BedrockAutomatedReasoningPolicy#alternate_expression}
  */
  readonly alternateExpression?: string;
  /**
  * The SMT expression for this rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_automated_reasoning_policy#expression BedrockAutomatedReasoningPolicy#expression}
  */
  readonly expression?: string;
  /**
  * A unique id within the PolicyDefinition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_automated_reasoning_policy#id BedrockAutomatedReasoningPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function bedrockAutomatedReasoningPolicyPolicyDefinitionRulesToTerraform(struct?: BedrockAutomatedReasoningPolicyPolicyDefinitionRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alternate_expression: cdktn.stringToTerraform(struct!.alternateExpression),
    expression: cdktn.stringToTerraform(struct!.expression),
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function bedrockAutomatedReasoningPolicyPolicyDefinitionRulesToHclTerraform(struct?: BedrockAutomatedReasoningPolicyPolicyDefinitionRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alternate_expression: {
      value: cdktn.stringToHclTerraform(struct!.alternateExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockAutomatedReasoningPolicyPolicyDefinitionRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alternateExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.alternateExpression = this._alternateExpression;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockAutomatedReasoningPolicyPolicyDefinitionRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alternateExpression = undefined;
      this._expression = undefined;
      this._id = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alternateExpression = value.alternateExpression;
      this._expression = value.expression;
      this._id = value.id;
    }
  }

  // alternate_expression - computed: true, optional: true, required: false
  private _alternateExpression?: string;
  public get alternateExpression() {
    return this.getStringAttribute('alternate_expression');
  }
  public set alternateExpression(value: string) {
    this._alternateExpression = value;
  }
  public resetAlternateExpression() {
    this._alternateExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateExpressionInput() {
    return this._alternateExpression;
  }

  // expression - computed: true, optional: true, required: false
  private _expression?: string;
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList extends cdktn.ComplexList {
  public internalValue? : BedrockAutomatedReasoningPolicyPolicyDefinitionRules[] | cdktn.IResolvable

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
  public get(index: number): BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference {
    return new BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues {
  /**
  * A natural language description of the type's value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_automated_reasoning_policy#description BedrockAutomatedReasoningPolicy#description}
  */
  readonly description?: string;
  /**
  * The value of the type value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_automated_reasoning_policy#value BedrockAutomatedReasoningPolicy#value}
  */
  readonly value?: string;
}

export function bedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesToTerraform(struct?: BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function bedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesToHclTerraform(struct?: BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
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

export class BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._value = value.value;
    }
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

export class BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList extends cdktn.ComplexList {
  public internalValue? : BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues[] | cdktn.IResolvable

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
  public get(index: number): BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference {
    return new BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockAutomatedReasoningPolicyPolicyDefinitionTypes {
  /**
  * A natural language description of this type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_automated_reasoning_policy#description BedrockAutomatedReasoningPolicy#description}
  */
  readonly description?: string;
  /**
  * A name for this type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_automated_reasoning_policy#name BedrockAutomatedReasoningPolicy#name}
  */
  readonly name?: string;
  /**
  * A list of valid values for this type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_automated_reasoning_policy#values BedrockAutomatedReasoningPolicy#values}
  */
  readonly values?: BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues[] | cdktn.IResolvable;
}

export function bedrockAutomatedReasoningPolicyPolicyDefinitionTypesToTerraform(struct?: BedrockAutomatedReasoningPolicyPolicyDefinitionTypes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    name: cdktn.stringToTerraform(struct!.name),
    values: cdktn.listMapper(bedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesToTerraform, false)(struct!.values),
  }
}


export function bedrockAutomatedReasoningPolicyPolicyDefinitionTypesToHclTerraform(struct?: BedrockAutomatedReasoningPolicyPolicyDefinitionTypes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(bedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesToHclTerraform, false)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockAutomatedReasoningPolicyPolicyDefinitionTypes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockAutomatedReasoningPolicyPolicyDefinitionTypes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._values.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._values.internalValue = value.values;
    }
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

  // values - computed: true, optional: true, required: false
  private _values = new BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues[] | cdktn.IResolvable) {
    this._values.internalValue = value;
  }
  public resetValues() {
    this._values.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}

export class BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList extends cdktn.ComplexList {
  public internalValue? : BedrockAutomatedReasoningPolicyPolicyDefinitionTypes[] | cdktn.IResolvable

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
  public get(index: number): BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference {
    return new BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockAutomatedReasoningPolicyPolicyDefinitionVariables {
  /**
  * A natural language description of this variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_automated_reasoning_policy#description BedrockAutomatedReasoningPolicy#description}
  */
  readonly description?: string;
  /**
  * A name from this variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_automated_reasoning_policy#name BedrockAutomatedReasoningPolicy#name}
  */
  readonly name?: string;
  /**
  * A type for this variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_automated_reasoning_policy#type BedrockAutomatedReasoningPolicy#type}
  */
  readonly type?: string;
}

export function bedrockAutomatedReasoningPolicyPolicyDefinitionVariablesToTerraform(struct?: BedrockAutomatedReasoningPolicyPolicyDefinitionVariables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function bedrockAutomatedReasoningPolicyPolicyDefinitionVariablesToHclTerraform(struct?: BedrockAutomatedReasoningPolicyPolicyDefinitionVariables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockAutomatedReasoningPolicyPolicyDefinitionVariables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockAutomatedReasoningPolicyPolicyDefinitionVariables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._type = value.type;
    }
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
}

export class BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList extends cdktn.ComplexList {
  public internalValue? : BedrockAutomatedReasoningPolicyPolicyDefinitionVariables[] | cdktn.IResolvable

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
  public get(index: number): BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference {
    return new BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockAutomatedReasoningPolicyPolicyDefinition {
  /**
  * The rules definition block of an AutomatedReasoningPolicyDefinition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_automated_reasoning_policy#rules BedrockAutomatedReasoningPolicy#rules}
  */
  readonly rules?: BedrockAutomatedReasoningPolicyPolicyDefinitionRules[] | cdktn.IResolvable;
  /**
  * The types definition block of an AutomatedReasoningPolicyDefinition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_automated_reasoning_policy#types BedrockAutomatedReasoningPolicy#types}
  */
  readonly types?: BedrockAutomatedReasoningPolicyPolicyDefinitionTypes[] | cdktn.IResolvable;
  /**
  * The variables definition block of an AutomatedReasoningPolicyDefinition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_automated_reasoning_policy#variables BedrockAutomatedReasoningPolicy#variables}
  */
  readonly variables?: BedrockAutomatedReasoningPolicyPolicyDefinitionVariables[] | cdktn.IResolvable;
  /**
  * The policy format version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_automated_reasoning_policy#version BedrockAutomatedReasoningPolicy#version}
  */
  readonly version?: string;
}

export function bedrockAutomatedReasoningPolicyPolicyDefinitionToTerraform(struct?: BedrockAutomatedReasoningPolicyPolicyDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rules: cdktn.listMapper(bedrockAutomatedReasoningPolicyPolicyDefinitionRulesToTerraform, false)(struct!.rules),
    types: cdktn.listMapper(bedrockAutomatedReasoningPolicyPolicyDefinitionTypesToTerraform, false)(struct!.types),
    variables: cdktn.listMapper(bedrockAutomatedReasoningPolicyPolicyDefinitionVariablesToTerraform, false)(struct!.variables),
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function bedrockAutomatedReasoningPolicyPolicyDefinitionToHclTerraform(struct?: BedrockAutomatedReasoningPolicyPolicyDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rules: {
      value: cdktn.listMapperHcl(bedrockAutomatedReasoningPolicyPolicyDefinitionRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList",
    },
    types: {
      value: cdktn.listMapperHcl(bedrockAutomatedReasoningPolicyPolicyDefinitionTypesToHclTerraform, false)(struct!.types),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList",
    },
    variables: {
      value: cdktn.listMapperHcl(bedrockAutomatedReasoningPolicyPolicyDefinitionVariablesToHclTerraform, false)(struct!.variables),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList",
    },
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockAutomatedReasoningPolicyPolicyDefinition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    if (this._types?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types?.internalValue;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockAutomatedReasoningPolicyPolicyDefinition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rules.internalValue = undefined;
      this._types.internalValue = undefined;
      this._variables.internalValue = undefined;
      this._version = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rules.internalValue = value.rules;
      this._types.internalValue = value.types;
      this._variables.internalValue = value.variables;
      this._version = value.version;
    }
  }

  // rules - computed: true, optional: true, required: false
  private _rules = new BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: BedrockAutomatedReasoningPolicyPolicyDefinitionRules[] | cdktn.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // types - computed: true, optional: true, required: false
  private _types = new BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList(this, "types", false);
  public get types() {
    return this._types;
  }
  public putTypes(value: BedrockAutomatedReasoningPolicyPolicyDefinitionTypes[] | cdktn.IResolvable) {
    this._types.internalValue = value;
  }
  public resetTypes() {
    this._types.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types.internalValue;
  }

  // variables - computed: true, optional: true, required: false
  private _variables = new BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
  public putVariables(value: BedrockAutomatedReasoningPolicyPolicyDefinitionVariables[] | cdktn.IResolvable) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string;
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface BedrockAutomatedReasoningPolicyTags {
  /**
  * Tag Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_automated_reasoning_policy#key BedrockAutomatedReasoningPolicy#key}
  */
  readonly key?: string;
  /**
  * Tag Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_automated_reasoning_policy#value BedrockAutomatedReasoningPolicy#value}
  */
  readonly value?: string;
}

export function bedrockAutomatedReasoningPolicyTagsToTerraform(struct?: BedrockAutomatedReasoningPolicyTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function bedrockAutomatedReasoningPolicyTagsToHclTerraform(struct?: BedrockAutomatedReasoningPolicyTags | cdktn.IResolvable): any {
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

export class BedrockAutomatedReasoningPolicyTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockAutomatedReasoningPolicyTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockAutomatedReasoningPolicyTags | cdktn.IResolvable | undefined) {
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

export class BedrockAutomatedReasoningPolicyTagsList extends cdktn.ComplexList {
  public internalValue? : BedrockAutomatedReasoningPolicyTags[] | cdktn.IResolvable

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
  public get(index: number): BedrockAutomatedReasoningPolicyTagsOutputReference {
    return new BedrockAutomatedReasoningPolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_automated_reasoning_policy awscc_bedrock_automated_reasoning_policy}
*/
export class BedrockAutomatedReasoningPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_bedrock_automated_reasoning_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BedrockAutomatedReasoningPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockAutomatedReasoningPolicy to import
  * @param importFromId The id of the existing BedrockAutomatedReasoningPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_automated_reasoning_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockAutomatedReasoningPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrock_automated_reasoning_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_automated_reasoning_policy awscc_bedrock_automated_reasoning_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockAutomatedReasoningPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockAutomatedReasoningPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_bedrock_automated_reasoning_policy',
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
    this._description = config.description;
    this._forceDelete = config.forceDelete;
    this._kmsKeyId = config.kmsKeyId;
    this._name = config.name;
    this._policyDefinition.internalValue = config.policyDefinition;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // definition_hash - computed: true, optional: false, required: false
  public get definitionHash() {
    return this.getStringAttribute('definition_hash');
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

  // force_delete - computed: true, optional: true, required: false
  private _forceDelete?: boolean | cdktn.IResolvable;
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktn.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_arn - computed: true, optional: false, required: false
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
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

  // policy_arn - computed: true, optional: false, required: false
  public get policyArn() {
    return this.getStringAttribute('policy_arn');
  }

  // policy_definition - computed: true, optional: true, required: false
  private _policyDefinition = new BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference(this, "policy_definition");
  public get policyDefinition() {
    return this._policyDefinition;
  }
  public putPolicyDefinition(value: BedrockAutomatedReasoningPolicyPolicyDefinition) {
    this._policyDefinition.internalValue = value;
  }
  public resetPolicyDefinition() {
    this._policyDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDefinitionInput() {
    return this._policyDefinition.internalValue;
  }

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new BedrockAutomatedReasoningPolicyTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: BedrockAutomatedReasoningPolicyTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      force_delete: cdktn.booleanToTerraform(this._forceDelete),
      kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
      name: cdktn.stringToTerraform(this._name),
      policy_definition: bedrockAutomatedReasoningPolicyPolicyDefinitionToTerraform(this._policyDefinition.internalValue),
      tags: cdktn.listMapper(bedrockAutomatedReasoningPolicyTagsToTerraform, false)(this._tags.internalValue),
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
      force_delete: {
        value: cdktn.booleanToHclTerraform(this._forceDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kms_key_id: {
        value: cdktn.stringToHclTerraform(this._kmsKeyId),
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
      policy_definition: {
        value: bedrockAutomatedReasoningPolicyPolicyDefinitionToHclTerraform(this._policyDefinition.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockAutomatedReasoningPolicyPolicyDefinition",
      },
      tags: {
        value: cdktn.listMapperHcl(bedrockAutomatedReasoningPolicyTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockAutomatedReasoningPolicyTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
