// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface QuicksightTopicConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#aws_account_id QuicksightTopic#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * Model for configuration of a Topic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#config_options QuicksightTopic#config_options}
  */
  readonly configOptions?: QuicksightTopicConfigOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#custom_instructions QuicksightTopic#custom_instructions}
  */
  readonly customInstructions?: QuicksightTopicCustomInstructions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#data_sets QuicksightTopic#data_sets}
  */
  readonly dataSets?: QuicksightTopicDataSets[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#description QuicksightTopic#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#folder_arns QuicksightTopic#folder_arns}
  */
  readonly folderArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#name QuicksightTopic#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#tags QuicksightTopic#tags}
  */
  readonly tags?: QuicksightTopicTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#topic_id QuicksightTopic#topic_id}
  */
  readonly topicId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#user_experience_version QuicksightTopic#user_experience_version}
  */
  readonly userExperienceVersion?: string;
}
export interface QuicksightTopicConfigOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#q_business_insights_enabled QuicksightTopic#q_business_insights_enabled}
  */
  readonly qBusinessInsightsEnabled?: boolean | cdktn.IResolvable;
}

export function quicksightTopicConfigOptionsToTerraform(struct?: QuicksightTopicConfigOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    q_business_insights_enabled: cdktn.booleanToTerraform(struct!.qBusinessInsightsEnabled),
  }
}


export function quicksightTopicConfigOptionsToHclTerraform(struct?: QuicksightTopicConfigOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    q_business_insights_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.qBusinessInsightsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTopicConfigOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightTopicConfigOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._qBusinessInsightsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.qBusinessInsightsEnabled = this._qBusinessInsightsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTopicConfigOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._qBusinessInsightsEnabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._qBusinessInsightsEnabled = value.qBusinessInsightsEnabled;
    }
  }

  // q_business_insights_enabled - computed: true, optional: true, required: false
  private _qBusinessInsightsEnabled?: boolean | cdktn.IResolvable; 
  public get qBusinessInsightsEnabled() {
    return this.getBooleanAttribute('q_business_insights_enabled');
  }
  public set qBusinessInsightsEnabled(value: boolean | cdktn.IResolvable) {
    this._qBusinessInsightsEnabled = value;
  }
  public resetQBusinessInsightsEnabled() {
    this._qBusinessInsightsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qBusinessInsightsEnabledInput() {
    return this._qBusinessInsightsEnabled;
  }
}
export interface QuicksightTopicCustomInstructions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#custom_instructions_string QuicksightTopic#custom_instructions_string}
  */
  readonly customInstructionsString?: string;
}

export function quicksightTopicCustomInstructionsToTerraform(struct?: QuicksightTopicCustomInstructions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_instructions_string: cdktn.stringToTerraform(struct!.customInstructionsString),
  }
}


export function quicksightTopicCustomInstructionsToHclTerraform(struct?: QuicksightTopicCustomInstructions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_instructions_string: {
      value: cdktn.stringToHclTerraform(struct!.customInstructionsString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTopicCustomInstructionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightTopicCustomInstructions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customInstructionsString !== undefined) {
      hasAnyValues = true;
      internalValueResult.customInstructionsString = this._customInstructionsString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTopicCustomInstructions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customInstructionsString = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customInstructionsString = value.customInstructionsString;
    }
  }

  // custom_instructions_string - computed: true, optional: true, required: false
  private _customInstructionsString?: string; 
  public get customInstructionsString() {
    return this.getStringAttribute('custom_instructions_string');
  }
  public set customInstructionsString(value: string) {
    this._customInstructionsString = value;
  }
  public resetCustomInstructionsString() {
    this._customInstructionsString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInstructionsStringInput() {
    return this._customInstructionsString;
  }
}
export interface QuicksightTopicDataSetsCalculatedFieldsCellValueSynonyms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#cell_value QuicksightTopic#cell_value}
  */
  readonly cellValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#synonyms QuicksightTopic#synonyms}
  */
  readonly synonyms?: string[];
}

export function quicksightTopicDataSetsCalculatedFieldsCellValueSynonymsToTerraform(struct?: QuicksightTopicDataSetsCalculatedFieldsCellValueSynonyms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cell_value: cdktn.stringToTerraform(struct!.cellValue),
    synonyms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.synonyms),
  }
}


export function quicksightTopicDataSetsCalculatedFieldsCellValueSynonymsToHclTerraform(struct?: QuicksightTopicDataSetsCalculatedFieldsCellValueSynonyms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cell_value: {
      value: cdktn.stringToHclTerraform(struct!.cellValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synonyms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.synonyms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightTopicDataSetsCalculatedFieldsCellValueSynonyms | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cellValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cellValue = this._cellValue;
    }
    if (this._synonyms !== undefined) {
      hasAnyValues = true;
      internalValueResult.synonyms = this._synonyms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTopicDataSetsCalculatedFieldsCellValueSynonyms | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cellValue = undefined;
      this._synonyms = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cellValue = value.cellValue;
      this._synonyms = value.synonyms;
    }
  }

  // cell_value - computed: true, optional: true, required: false
  private _cellValue?: string; 
  public get cellValue() {
    return this.getStringAttribute('cell_value');
  }
  public set cellValue(value: string) {
    this._cellValue = value;
  }
  public resetCellValue() {
    this._cellValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cellValueInput() {
    return this._cellValue;
  }

  // synonyms - computed: true, optional: true, required: false
  private _synonyms?: string[]; 
  public get synonyms() {
    return this.getListAttribute('synonyms');
  }
  public set synonyms(value: string[]) {
    this._synonyms = value;
  }
  public resetSynonyms() {
    this._synonyms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synonymsInput() {
    return this._synonyms;
  }
}

export class QuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList extends cdktn.ComplexList {
  public internalValue? : QuicksightTopicDataSetsCalculatedFieldsCellValueSynonyms[] | cdktn.IResolvable

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
  public get(index: number): QuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference {
    return new QuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTopicDataSetsCalculatedFieldsComparativeOrder {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#specifed_order QuicksightTopic#specifed_order}
  */
  readonly specifedOrder?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#treat_undefined_specified_values QuicksightTopic#treat_undefined_specified_values}
  */
  readonly treatUndefinedSpecifiedValues?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#use_ordering QuicksightTopic#use_ordering}
  */
  readonly useOrdering?: string;
}

export function quicksightTopicDataSetsCalculatedFieldsComparativeOrderToTerraform(struct?: QuicksightTopicDataSetsCalculatedFieldsComparativeOrder | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    specifed_order: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.specifedOrder),
    treat_undefined_specified_values: cdktn.stringToTerraform(struct!.treatUndefinedSpecifiedValues),
    use_ordering: cdktn.stringToTerraform(struct!.useOrdering),
  }
}


export function quicksightTopicDataSetsCalculatedFieldsComparativeOrderToHclTerraform(struct?: QuicksightTopicDataSetsCalculatedFieldsComparativeOrder | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    specifed_order: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.specifedOrder),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    treat_undefined_specified_values: {
      value: cdktn.stringToHclTerraform(struct!.treatUndefinedSpecifiedValues),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_ordering: {
      value: cdktn.stringToHclTerraform(struct!.useOrdering),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightTopicDataSetsCalculatedFieldsComparativeOrder | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._specifedOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.specifedOrder = this._specifedOrder;
    }
    if (this._treatUndefinedSpecifiedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.treatUndefinedSpecifiedValues = this._treatUndefinedSpecifiedValues;
    }
    if (this._useOrdering !== undefined) {
      hasAnyValues = true;
      internalValueResult.useOrdering = this._useOrdering;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTopicDataSetsCalculatedFieldsComparativeOrder | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._specifedOrder = undefined;
      this._treatUndefinedSpecifiedValues = undefined;
      this._useOrdering = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._specifedOrder = value.specifedOrder;
      this._treatUndefinedSpecifiedValues = value.treatUndefinedSpecifiedValues;
      this._useOrdering = value.useOrdering;
    }
  }

  // specifed_order - computed: true, optional: true, required: false
  private _specifedOrder?: string[]; 
  public get specifedOrder() {
    return this.getListAttribute('specifed_order');
  }
  public set specifedOrder(value: string[]) {
    this._specifedOrder = value;
  }
  public resetSpecifedOrder() {
    this._specifedOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specifedOrderInput() {
    return this._specifedOrder;
  }

  // treat_undefined_specified_values - computed: true, optional: true, required: false
  private _treatUndefinedSpecifiedValues?: string; 
  public get treatUndefinedSpecifiedValues() {
    return this.getStringAttribute('treat_undefined_specified_values');
  }
  public set treatUndefinedSpecifiedValues(value: string) {
    this._treatUndefinedSpecifiedValues = value;
  }
  public resetTreatUndefinedSpecifiedValues() {
    this._treatUndefinedSpecifiedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get treatUndefinedSpecifiedValuesInput() {
    return this._treatUndefinedSpecifiedValues;
  }

  // use_ordering - computed: true, optional: true, required: false
  private _useOrdering?: string; 
  public get useOrdering() {
    return this.getStringAttribute('use_ordering');
  }
  public set useOrdering(value: string) {
    this._useOrdering = value;
  }
  public resetUseOrdering() {
    this._useOrdering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOrderingInput() {
    return this._useOrdering;
  }
}
export interface QuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#prefix QuicksightTopic#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#suffix QuicksightTopic#suffix}
  */
  readonly suffix?: string;
}

export function quicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatToTerraform(struct?: QuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    prefix: cdktn.stringToTerraform(struct!.prefix),
    suffix: cdktn.stringToTerraform(struct!.suffix),
  }
}


export function quicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatToHclTerraform(struct?: QuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktn.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormat | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormat | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
    }
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: true, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}
export interface QuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#blank_cell_format QuicksightTopic#blank_cell_format}
  */
  readonly blankCellFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#currency_symbol QuicksightTopic#currency_symbol}
  */
  readonly currencySymbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#date_format QuicksightTopic#date_format}
  */
  readonly dateFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#decimal_separator QuicksightTopic#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#fraction_digits QuicksightTopic#fraction_digits}
  */
  readonly fractionDigits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#grouping_separator QuicksightTopic#grouping_separator}
  */
  readonly groupingSeparator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#negative_format QuicksightTopic#negative_format}
  */
  readonly negativeFormat?: QuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormat;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#prefix QuicksightTopic#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#suffix QuicksightTopic#suffix}
  */
  readonly suffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#unit_scaler QuicksightTopic#unit_scaler}
  */
  readonly unitScaler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#use_blank_cell_format QuicksightTopic#use_blank_cell_format}
  */
  readonly useBlankCellFormat?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#use_grouping QuicksightTopic#use_grouping}
  */
  readonly useGrouping?: boolean | cdktn.IResolvable;
}

export function quicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsToTerraform(struct?: QuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    blank_cell_format: cdktn.stringToTerraform(struct!.blankCellFormat),
    currency_symbol: cdktn.stringToTerraform(struct!.currencySymbol),
    date_format: cdktn.stringToTerraform(struct!.dateFormat),
    decimal_separator: cdktn.stringToTerraform(struct!.decimalSeparator),
    fraction_digits: cdktn.numberToTerraform(struct!.fractionDigits),
    grouping_separator: cdktn.stringToTerraform(struct!.groupingSeparator),
    negative_format: quicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatToTerraform(struct!.negativeFormat),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    suffix: cdktn.stringToTerraform(struct!.suffix),
    unit_scaler: cdktn.stringToTerraform(struct!.unitScaler),
    use_blank_cell_format: cdktn.booleanToTerraform(struct!.useBlankCellFormat),
    use_grouping: cdktn.booleanToTerraform(struct!.useGrouping),
  }
}


export function quicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsToHclTerraform(struct?: QuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    blank_cell_format: {
      value: cdktn.stringToHclTerraform(struct!.blankCellFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    currency_symbol: {
      value: cdktn.stringToHclTerraform(struct!.currencySymbol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_format: {
      value: cdktn.stringToHclTerraform(struct!.dateFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    decimal_separator: {
      value: cdktn.stringToHclTerraform(struct!.decimalSeparator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fraction_digits: {
      value: cdktn.numberToHclTerraform(struct!.fractionDigits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grouping_separator: {
      value: cdktn.stringToHclTerraform(struct!.groupingSeparator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negative_format: {
      value: quicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatToHclTerraform(struct!.negativeFormat),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormat",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktn.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit_scaler: {
      value: cdktn.stringToHclTerraform(struct!.unitScaler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_blank_cell_format: {
      value: cdktn.booleanToHclTerraform(struct!.useBlankCellFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_grouping: {
      value: cdktn.booleanToHclTerraform(struct!.useGrouping),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blankCellFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.blankCellFormat = this._blankCellFormat;
    }
    if (this._currencySymbol !== undefined) {
      hasAnyValues = true;
      internalValueResult.currencySymbol = this._currencySymbol;
    }
    if (this._dateFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateFormat = this._dateFormat;
    }
    if (this._decimalSeparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalSeparator = this._decimalSeparator;
    }
    if (this._fractionDigits !== undefined) {
      hasAnyValues = true;
      internalValueResult.fractionDigits = this._fractionDigits;
    }
    if (this._groupingSeparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupingSeparator = this._groupingSeparator;
    }
    if (this._negativeFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.negativeFormat = this._negativeFormat?.internalValue;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    if (this._unitScaler !== undefined) {
      hasAnyValues = true;
      internalValueResult.unitScaler = this._unitScaler;
    }
    if (this._useBlankCellFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.useBlankCellFormat = this._useBlankCellFormat;
    }
    if (this._useGrouping !== undefined) {
      hasAnyValues = true;
      internalValueResult.useGrouping = this._useGrouping;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blankCellFormat = undefined;
      this._currencySymbol = undefined;
      this._dateFormat = undefined;
      this._decimalSeparator = undefined;
      this._fractionDigits = undefined;
      this._groupingSeparator = undefined;
      this._negativeFormat.internalValue = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
      this._unitScaler = undefined;
      this._useBlankCellFormat = undefined;
      this._useGrouping = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blankCellFormat = value.blankCellFormat;
      this._currencySymbol = value.currencySymbol;
      this._dateFormat = value.dateFormat;
      this._decimalSeparator = value.decimalSeparator;
      this._fractionDigits = value.fractionDigits;
      this._groupingSeparator = value.groupingSeparator;
      this._negativeFormat.internalValue = value.negativeFormat;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
      this._unitScaler = value.unitScaler;
      this._useBlankCellFormat = value.useBlankCellFormat;
      this._useGrouping = value.useGrouping;
    }
  }

  // blank_cell_format - computed: true, optional: true, required: false
  private _blankCellFormat?: string; 
  public get blankCellFormat() {
    return this.getStringAttribute('blank_cell_format');
  }
  public set blankCellFormat(value: string) {
    this._blankCellFormat = value;
  }
  public resetBlankCellFormat() {
    this._blankCellFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blankCellFormatInput() {
    return this._blankCellFormat;
  }

  // currency_symbol - computed: true, optional: true, required: false
  private _currencySymbol?: string; 
  public get currencySymbol() {
    return this.getStringAttribute('currency_symbol');
  }
  public set currencySymbol(value: string) {
    this._currencySymbol = value;
  }
  public resetCurrencySymbol() {
    this._currencySymbol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currencySymbolInput() {
    return this._currencySymbol;
  }

  // date_format - computed: true, optional: true, required: false
  private _dateFormat?: string; 
  public get dateFormat() {
    return this.getStringAttribute('date_format');
  }
  public set dateFormat(value: string) {
    this._dateFormat = value;
  }
  public resetDateFormat() {
    this._dateFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateFormatInput() {
    return this._dateFormat;
  }

  // decimal_separator - computed: true, optional: true, required: false
  private _decimalSeparator?: string; 
  public get decimalSeparator() {
    return this.getStringAttribute('decimal_separator');
  }
  public set decimalSeparator(value: string) {
    this._decimalSeparator = value;
  }
  public resetDecimalSeparator() {
    this._decimalSeparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decimalSeparatorInput() {
    return this._decimalSeparator;
  }

  // fraction_digits - computed: true, optional: true, required: false
  private _fractionDigits?: number; 
  public get fractionDigits() {
    return this.getNumberAttribute('fraction_digits');
  }
  public set fractionDigits(value: number) {
    this._fractionDigits = value;
  }
  public resetFractionDigits() {
    this._fractionDigits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fractionDigitsInput() {
    return this._fractionDigits;
  }

  // grouping_separator - computed: true, optional: true, required: false
  private _groupingSeparator?: string; 
  public get groupingSeparator() {
    return this.getStringAttribute('grouping_separator');
  }
  public set groupingSeparator(value: string) {
    this._groupingSeparator = value;
  }
  public resetGroupingSeparator() {
    this._groupingSeparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupingSeparatorInput() {
    return this._groupingSeparator;
  }

  // negative_format - computed: true, optional: true, required: false
  private _negativeFormat = new QuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference(this, "negative_format");
  public get negativeFormat() {
    return this._negativeFormat;
  }
  public putNegativeFormat(value: QuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormat) {
    this._negativeFormat.internalValue = value;
  }
  public resetNegativeFormat() {
    this._negativeFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeFormatInput() {
    return this._negativeFormat.internalValue;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: true, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }

  // unit_scaler - computed: true, optional: true, required: false
  private _unitScaler?: string; 
  public get unitScaler() {
    return this.getStringAttribute('unit_scaler');
  }
  public set unitScaler(value: string) {
    this._unitScaler = value;
  }
  public resetUnitScaler() {
    this._unitScaler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitScalerInput() {
    return this._unitScaler;
  }

  // use_blank_cell_format - computed: true, optional: true, required: false
  private _useBlankCellFormat?: boolean | cdktn.IResolvable; 
  public get useBlankCellFormat() {
    return this.getBooleanAttribute('use_blank_cell_format');
  }
  public set useBlankCellFormat(value: boolean | cdktn.IResolvable) {
    this._useBlankCellFormat = value;
  }
  public resetUseBlankCellFormat() {
    this._useBlankCellFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useBlankCellFormatInput() {
    return this._useBlankCellFormat;
  }

  // use_grouping - computed: true, optional: true, required: false
  private _useGrouping?: boolean | cdktn.IResolvable; 
  public get useGrouping() {
    return this.getBooleanAttribute('use_grouping');
  }
  public set useGrouping(value: boolean | cdktn.IResolvable) {
    this._useGrouping = value;
  }
  public resetUseGrouping() {
    this._useGrouping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useGroupingInput() {
    return this._useGrouping;
  }
}
export interface QuicksightTopicDataSetsCalculatedFieldsDefaultFormatting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#display_format QuicksightTopic#display_format}
  */
  readonly displayFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#display_format_options QuicksightTopic#display_format_options}
  */
  readonly displayFormatOptions?: QuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptions;
}

export function quicksightTopicDataSetsCalculatedFieldsDefaultFormattingToTerraform(struct?: QuicksightTopicDataSetsCalculatedFieldsDefaultFormatting | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    display_format: cdktn.stringToTerraform(struct!.displayFormat),
    display_format_options: quicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsToTerraform(struct!.displayFormatOptions),
  }
}


export function quicksightTopicDataSetsCalculatedFieldsDefaultFormattingToHclTerraform(struct?: QuicksightTopicDataSetsCalculatedFieldsDefaultFormatting | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    display_format: {
      value: cdktn.stringToHclTerraform(struct!.displayFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_format_options: {
      value: quicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsToHclTerraform(struct!.displayFormatOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightTopicDataSetsCalculatedFieldsDefaultFormatting | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayFormat = this._displayFormat;
    }
    if (this._displayFormatOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayFormatOptions = this._displayFormatOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTopicDataSetsCalculatedFieldsDefaultFormatting | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayFormat = undefined;
      this._displayFormatOptions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayFormat = value.displayFormat;
      this._displayFormatOptions.internalValue = value.displayFormatOptions;
    }
  }

  // display_format - computed: true, optional: true, required: false
  private _displayFormat?: string; 
  public get displayFormat() {
    return this.getStringAttribute('display_format');
  }
  public set displayFormat(value: string) {
    this._displayFormat = value;
  }
  public resetDisplayFormat() {
    this._displayFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayFormatInput() {
    return this._displayFormat;
  }

  // display_format_options - computed: true, optional: true, required: false
  private _displayFormatOptions = new QuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference(this, "display_format_options");
  public get displayFormatOptions() {
    return this._displayFormatOptions;
  }
  public putDisplayFormatOptions(value: QuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptions) {
    this._displayFormatOptions.internalValue = value;
  }
  public resetDisplayFormatOptions() {
    this._displayFormatOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayFormatOptionsInput() {
    return this._displayFormatOptions.internalValue;
  }
}
export interface QuicksightTopicDataSetsCalculatedFieldsSemanticType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#falsey_cell_value QuicksightTopic#falsey_cell_value}
  */
  readonly falseyCellValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#falsey_cell_value_synonyms QuicksightTopic#falsey_cell_value_synonyms}
  */
  readonly falseyCellValueSynonyms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#sub_type_name QuicksightTopic#sub_type_name}
  */
  readonly subTypeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#truthy_cell_value QuicksightTopic#truthy_cell_value}
  */
  readonly truthyCellValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#truthy_cell_value_synonyms QuicksightTopic#truthy_cell_value_synonyms}
  */
  readonly truthyCellValueSynonyms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#type_name QuicksightTopic#type_name}
  */
  readonly typeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#type_parameters QuicksightTopic#type_parameters}
  */
  readonly typeParameters?: { [key: string]: string };
}

export function quicksightTopicDataSetsCalculatedFieldsSemanticTypeToTerraform(struct?: QuicksightTopicDataSetsCalculatedFieldsSemanticType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    falsey_cell_value: cdktn.stringToTerraform(struct!.falseyCellValue),
    falsey_cell_value_synonyms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.falseyCellValueSynonyms),
    sub_type_name: cdktn.stringToTerraform(struct!.subTypeName),
    truthy_cell_value: cdktn.stringToTerraform(struct!.truthyCellValue),
    truthy_cell_value_synonyms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.truthyCellValueSynonyms),
    type_name: cdktn.stringToTerraform(struct!.typeName),
    type_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.typeParameters),
  }
}


export function quicksightTopicDataSetsCalculatedFieldsSemanticTypeToHclTerraform(struct?: QuicksightTopicDataSetsCalculatedFieldsSemanticType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    falsey_cell_value: {
      value: cdktn.stringToHclTerraform(struct!.falseyCellValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    falsey_cell_value_synonyms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.falseyCellValueSynonyms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sub_type_name: {
      value: cdktn.stringToHclTerraform(struct!.subTypeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    truthy_cell_value: {
      value: cdktn.stringToHclTerraform(struct!.truthyCellValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    truthy_cell_value_synonyms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.truthyCellValueSynonyms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type_name: {
      value: cdktn.stringToHclTerraform(struct!.typeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.typeParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightTopicDataSetsCalculatedFieldsSemanticType | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._falseyCellValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.falseyCellValue = this._falseyCellValue;
    }
    if (this._falseyCellValueSynonyms !== undefined) {
      hasAnyValues = true;
      internalValueResult.falseyCellValueSynonyms = this._falseyCellValueSynonyms;
    }
    if (this._subTypeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subTypeName = this._subTypeName;
    }
    if (this._truthyCellValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.truthyCellValue = this._truthyCellValue;
    }
    if (this._truthyCellValueSynonyms !== undefined) {
      hasAnyValues = true;
      internalValueResult.truthyCellValueSynonyms = this._truthyCellValueSynonyms;
    }
    if (this._typeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeName = this._typeName;
    }
    if (this._typeParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeParameters = this._typeParameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTopicDataSetsCalculatedFieldsSemanticType | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._falseyCellValue = undefined;
      this._falseyCellValueSynonyms = undefined;
      this._subTypeName = undefined;
      this._truthyCellValue = undefined;
      this._truthyCellValueSynonyms = undefined;
      this._typeName = undefined;
      this._typeParameters = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._falseyCellValue = value.falseyCellValue;
      this._falseyCellValueSynonyms = value.falseyCellValueSynonyms;
      this._subTypeName = value.subTypeName;
      this._truthyCellValue = value.truthyCellValue;
      this._truthyCellValueSynonyms = value.truthyCellValueSynonyms;
      this._typeName = value.typeName;
      this._typeParameters = value.typeParameters;
    }
  }

  // falsey_cell_value - computed: true, optional: true, required: false
  private _falseyCellValue?: string; 
  public get falseyCellValue() {
    return this.getStringAttribute('falsey_cell_value');
  }
  public set falseyCellValue(value: string) {
    this._falseyCellValue = value;
  }
  public resetFalseyCellValue() {
    this._falseyCellValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get falseyCellValueInput() {
    return this._falseyCellValue;
  }

  // falsey_cell_value_synonyms - computed: true, optional: true, required: false
  private _falseyCellValueSynonyms?: string[]; 
  public get falseyCellValueSynonyms() {
    return this.getListAttribute('falsey_cell_value_synonyms');
  }
  public set falseyCellValueSynonyms(value: string[]) {
    this._falseyCellValueSynonyms = value;
  }
  public resetFalseyCellValueSynonyms() {
    this._falseyCellValueSynonyms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get falseyCellValueSynonymsInput() {
    return this._falseyCellValueSynonyms;
  }

  // sub_type_name - computed: true, optional: true, required: false
  private _subTypeName?: string; 
  public get subTypeName() {
    return this.getStringAttribute('sub_type_name');
  }
  public set subTypeName(value: string) {
    this._subTypeName = value;
  }
  public resetSubTypeName() {
    this._subTypeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subTypeNameInput() {
    return this._subTypeName;
  }

  // truthy_cell_value - computed: true, optional: true, required: false
  private _truthyCellValue?: string; 
  public get truthyCellValue() {
    return this.getStringAttribute('truthy_cell_value');
  }
  public set truthyCellValue(value: string) {
    this._truthyCellValue = value;
  }
  public resetTruthyCellValue() {
    this._truthyCellValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get truthyCellValueInput() {
    return this._truthyCellValue;
  }

  // truthy_cell_value_synonyms - computed: true, optional: true, required: false
  private _truthyCellValueSynonyms?: string[]; 
  public get truthyCellValueSynonyms() {
    return this.getListAttribute('truthy_cell_value_synonyms');
  }
  public set truthyCellValueSynonyms(value: string[]) {
    this._truthyCellValueSynonyms = value;
  }
  public resetTruthyCellValueSynonyms() {
    this._truthyCellValueSynonyms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get truthyCellValueSynonymsInput() {
    return this._truthyCellValueSynonyms;
  }

  // type_name - computed: true, optional: true, required: false
  private _typeName?: string; 
  public get typeName() {
    return this.getStringAttribute('type_name');
  }
  public set typeName(value: string) {
    this._typeName = value;
  }
  public resetTypeName() {
    this._typeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNameInput() {
    return this._typeName;
  }

  // type_parameters - computed: true, optional: true, required: false
  private _typeParameters?: { [key: string]: string }; 
  public get typeParameters() {
    return this.getStringMapAttribute('type_parameters');
  }
  public set typeParameters(value: { [key: string]: string }) {
    this._typeParameters = value;
  }
  public resetTypeParameters() {
    this._typeParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeParametersInput() {
    return this._typeParameters;
  }
}
export interface QuicksightTopicDataSetsCalculatedFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#aggregation QuicksightTopic#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#allowed_aggregations QuicksightTopic#allowed_aggregations}
  */
  readonly allowedAggregations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#calculated_field_description QuicksightTopic#calculated_field_description}
  */
  readonly calculatedFieldDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#calculated_field_name QuicksightTopic#calculated_field_name}
  */
  readonly calculatedFieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#calculated_field_synonyms QuicksightTopic#calculated_field_synonyms}
  */
  readonly calculatedFieldSynonyms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#cell_value_synonyms QuicksightTopic#cell_value_synonyms}
  */
  readonly cellValueSynonyms?: QuicksightTopicDataSetsCalculatedFieldsCellValueSynonyms[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#column_data_role QuicksightTopic#column_data_role}
  */
  readonly columnDataRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#comparative_order QuicksightTopic#comparative_order}
  */
  readonly comparativeOrder?: QuicksightTopicDataSetsCalculatedFieldsComparativeOrder;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#default_formatting QuicksightTopic#default_formatting}
  */
  readonly defaultFormatting?: QuicksightTopicDataSetsCalculatedFieldsDefaultFormatting;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#disable_indexing QuicksightTopic#disable_indexing}
  */
  readonly disableIndexing?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#expression QuicksightTopic#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#is_included_in_topic QuicksightTopic#is_included_in_topic}
  */
  readonly isIncludedInTopic?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#never_aggregate_in_filter QuicksightTopic#never_aggregate_in_filter}
  */
  readonly neverAggregateInFilter?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#non_additive QuicksightTopic#non_additive}
  */
  readonly nonAdditive?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#not_allowed_aggregations QuicksightTopic#not_allowed_aggregations}
  */
  readonly notAllowedAggregations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#semantic_type QuicksightTopic#semantic_type}
  */
  readonly semanticType?: QuicksightTopicDataSetsCalculatedFieldsSemanticType;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#time_granularity QuicksightTopic#time_granularity}
  */
  readonly timeGranularity?: string;
}

export function quicksightTopicDataSetsCalculatedFieldsToTerraform(struct?: QuicksightTopicDataSetsCalculatedFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    allowed_aggregations: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedAggregations),
    calculated_field_description: cdktn.stringToTerraform(struct!.calculatedFieldDescription),
    calculated_field_name: cdktn.stringToTerraform(struct!.calculatedFieldName),
    calculated_field_synonyms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.calculatedFieldSynonyms),
    cell_value_synonyms: cdktn.listMapper(quicksightTopicDataSetsCalculatedFieldsCellValueSynonymsToTerraform, false)(struct!.cellValueSynonyms),
    column_data_role: cdktn.stringToTerraform(struct!.columnDataRole),
    comparative_order: quicksightTopicDataSetsCalculatedFieldsComparativeOrderToTerraform(struct!.comparativeOrder),
    default_formatting: quicksightTopicDataSetsCalculatedFieldsDefaultFormattingToTerraform(struct!.defaultFormatting),
    disable_indexing: cdktn.booleanToTerraform(struct!.disableIndexing),
    expression: cdktn.stringToTerraform(struct!.expression),
    is_included_in_topic: cdktn.booleanToTerraform(struct!.isIncludedInTopic),
    never_aggregate_in_filter: cdktn.booleanToTerraform(struct!.neverAggregateInFilter),
    non_additive: cdktn.booleanToTerraform(struct!.nonAdditive),
    not_allowed_aggregations: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.notAllowedAggregations),
    semantic_type: quicksightTopicDataSetsCalculatedFieldsSemanticTypeToTerraform(struct!.semanticType),
    time_granularity: cdktn.stringToTerraform(struct!.timeGranularity),
  }
}


export function quicksightTopicDataSetsCalculatedFieldsToHclTerraform(struct?: QuicksightTopicDataSetsCalculatedFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aggregation: {
      value: cdktn.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowed_aggregations: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedAggregations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    calculated_field_description: {
      value: cdktn.stringToHclTerraform(struct!.calculatedFieldDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    calculated_field_name: {
      value: cdktn.stringToHclTerraform(struct!.calculatedFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    calculated_field_synonyms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.calculatedFieldSynonyms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cell_value_synonyms: {
      value: cdktn.listMapperHcl(quicksightTopicDataSetsCalculatedFieldsCellValueSynonymsToHclTerraform, false)(struct!.cellValueSynonyms),
      isBlock: true,
      type: "list",
      storageClassType: "QuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList",
    },
    column_data_role: {
      value: cdktn.stringToHclTerraform(struct!.columnDataRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comparative_order: {
      value: quicksightTopicDataSetsCalculatedFieldsComparativeOrderToHclTerraform(struct!.comparativeOrder),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightTopicDataSetsCalculatedFieldsComparativeOrder",
    },
    default_formatting: {
      value: quicksightTopicDataSetsCalculatedFieldsDefaultFormattingToHclTerraform(struct!.defaultFormatting),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightTopicDataSetsCalculatedFieldsDefaultFormatting",
    },
    disable_indexing: {
      value: cdktn.booleanToHclTerraform(struct!.disableIndexing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_included_in_topic: {
      value: cdktn.booleanToHclTerraform(struct!.isIncludedInTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    never_aggregate_in_filter: {
      value: cdktn.booleanToHclTerraform(struct!.neverAggregateInFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    non_additive: {
      value: cdktn.booleanToHclTerraform(struct!.nonAdditive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    not_allowed_aggregations: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.notAllowedAggregations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    semantic_type: {
      value: quicksightTopicDataSetsCalculatedFieldsSemanticTypeToHclTerraform(struct!.semanticType),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightTopicDataSetsCalculatedFieldsSemanticType",
    },
    time_granularity: {
      value: cdktn.stringToHclTerraform(struct!.timeGranularity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTopicDataSetsCalculatedFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightTopicDataSetsCalculatedFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._allowedAggregations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedAggregations = this._allowedAggregations;
    }
    if (this._calculatedFieldDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.calculatedFieldDescription = this._calculatedFieldDescription;
    }
    if (this._calculatedFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.calculatedFieldName = this._calculatedFieldName;
    }
    if (this._calculatedFieldSynonyms !== undefined) {
      hasAnyValues = true;
      internalValueResult.calculatedFieldSynonyms = this._calculatedFieldSynonyms;
    }
    if (this._cellValueSynonyms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cellValueSynonyms = this._cellValueSynonyms?.internalValue;
    }
    if (this._columnDataRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnDataRole = this._columnDataRole;
    }
    if (this._comparativeOrder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparativeOrder = this._comparativeOrder?.internalValue;
    }
    if (this._defaultFormatting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultFormatting = this._defaultFormatting?.internalValue;
    }
    if (this._disableIndexing !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableIndexing = this._disableIndexing;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._isIncludedInTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.isIncludedInTopic = this._isIncludedInTopic;
    }
    if (this._neverAggregateInFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.neverAggregateInFilter = this._neverAggregateInFilter;
    }
    if (this._nonAdditive !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonAdditive = this._nonAdditive;
    }
    if (this._notAllowedAggregations !== undefined) {
      hasAnyValues = true;
      internalValueResult.notAllowedAggregations = this._notAllowedAggregations;
    }
    if (this._semanticType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.semanticType = this._semanticType?.internalValue;
    }
    if (this._timeGranularity !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeGranularity = this._timeGranularity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTopicDataSetsCalculatedFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._allowedAggregations = undefined;
      this._calculatedFieldDescription = undefined;
      this._calculatedFieldName = undefined;
      this._calculatedFieldSynonyms = undefined;
      this._cellValueSynonyms.internalValue = undefined;
      this._columnDataRole = undefined;
      this._comparativeOrder.internalValue = undefined;
      this._defaultFormatting.internalValue = undefined;
      this._disableIndexing = undefined;
      this._expression = undefined;
      this._isIncludedInTopic = undefined;
      this._neverAggregateInFilter = undefined;
      this._nonAdditive = undefined;
      this._notAllowedAggregations = undefined;
      this._semanticType.internalValue = undefined;
      this._timeGranularity = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._allowedAggregations = value.allowedAggregations;
      this._calculatedFieldDescription = value.calculatedFieldDescription;
      this._calculatedFieldName = value.calculatedFieldName;
      this._calculatedFieldSynonyms = value.calculatedFieldSynonyms;
      this._cellValueSynonyms.internalValue = value.cellValueSynonyms;
      this._columnDataRole = value.columnDataRole;
      this._comparativeOrder.internalValue = value.comparativeOrder;
      this._defaultFormatting.internalValue = value.defaultFormatting;
      this._disableIndexing = value.disableIndexing;
      this._expression = value.expression;
      this._isIncludedInTopic = value.isIncludedInTopic;
      this._neverAggregateInFilter = value.neverAggregateInFilter;
      this._nonAdditive = value.nonAdditive;
      this._notAllowedAggregations = value.notAllowedAggregations;
      this._semanticType.internalValue = value.semanticType;
      this._timeGranularity = value.timeGranularity;
    }
  }

  // aggregation - computed: true, optional: true, required: false
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  public resetAggregation() {
    this._aggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // allowed_aggregations - computed: true, optional: true, required: false
  private _allowedAggregations?: string[]; 
  public get allowedAggregations() {
    return this.getListAttribute('allowed_aggregations');
  }
  public set allowedAggregations(value: string[]) {
    this._allowedAggregations = value;
  }
  public resetAllowedAggregations() {
    this._allowedAggregations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAggregationsInput() {
    return this._allowedAggregations;
  }

  // calculated_field_description - computed: true, optional: true, required: false
  private _calculatedFieldDescription?: string; 
  public get calculatedFieldDescription() {
    return this.getStringAttribute('calculated_field_description');
  }
  public set calculatedFieldDescription(value: string) {
    this._calculatedFieldDescription = value;
  }
  public resetCalculatedFieldDescription() {
    this._calculatedFieldDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calculatedFieldDescriptionInput() {
    return this._calculatedFieldDescription;
  }

  // calculated_field_name - computed: true, optional: true, required: false
  private _calculatedFieldName?: string; 
  public get calculatedFieldName() {
    return this.getStringAttribute('calculated_field_name');
  }
  public set calculatedFieldName(value: string) {
    this._calculatedFieldName = value;
  }
  public resetCalculatedFieldName() {
    this._calculatedFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calculatedFieldNameInput() {
    return this._calculatedFieldName;
  }

  // calculated_field_synonyms - computed: true, optional: true, required: false
  private _calculatedFieldSynonyms?: string[]; 
  public get calculatedFieldSynonyms() {
    return this.getListAttribute('calculated_field_synonyms');
  }
  public set calculatedFieldSynonyms(value: string[]) {
    this._calculatedFieldSynonyms = value;
  }
  public resetCalculatedFieldSynonyms() {
    this._calculatedFieldSynonyms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calculatedFieldSynonymsInput() {
    return this._calculatedFieldSynonyms;
  }

  // cell_value_synonyms - computed: true, optional: true, required: false
  private _cellValueSynonyms = new QuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList(this, "cell_value_synonyms", false);
  public get cellValueSynonyms() {
    return this._cellValueSynonyms;
  }
  public putCellValueSynonyms(value: QuicksightTopicDataSetsCalculatedFieldsCellValueSynonyms[] | cdktn.IResolvable) {
    this._cellValueSynonyms.internalValue = value;
  }
  public resetCellValueSynonyms() {
    this._cellValueSynonyms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cellValueSynonymsInput() {
    return this._cellValueSynonyms.internalValue;
  }

  // column_data_role - computed: true, optional: true, required: false
  private _columnDataRole?: string; 
  public get columnDataRole() {
    return this.getStringAttribute('column_data_role');
  }
  public set columnDataRole(value: string) {
    this._columnDataRole = value;
  }
  public resetColumnDataRole() {
    this._columnDataRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnDataRoleInput() {
    return this._columnDataRole;
  }

  // comparative_order - computed: true, optional: true, required: false
  private _comparativeOrder = new QuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference(this, "comparative_order");
  public get comparativeOrder() {
    return this._comparativeOrder;
  }
  public putComparativeOrder(value: QuicksightTopicDataSetsCalculatedFieldsComparativeOrder) {
    this._comparativeOrder.internalValue = value;
  }
  public resetComparativeOrder() {
    this._comparativeOrder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparativeOrderInput() {
    return this._comparativeOrder.internalValue;
  }

  // default_formatting - computed: true, optional: true, required: false
  private _defaultFormatting = new QuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference(this, "default_formatting");
  public get defaultFormatting() {
    return this._defaultFormatting;
  }
  public putDefaultFormatting(value: QuicksightTopicDataSetsCalculatedFieldsDefaultFormatting) {
    this._defaultFormatting.internalValue = value;
  }
  public resetDefaultFormatting() {
    this._defaultFormatting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultFormattingInput() {
    return this._defaultFormatting.internalValue;
  }

  // disable_indexing - computed: true, optional: true, required: false
  private _disableIndexing?: boolean | cdktn.IResolvable; 
  public get disableIndexing() {
    return this.getBooleanAttribute('disable_indexing');
  }
  public set disableIndexing(value: boolean | cdktn.IResolvable) {
    this._disableIndexing = value;
  }
  public resetDisableIndexing() {
    this._disableIndexing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableIndexingInput() {
    return this._disableIndexing;
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

  // is_included_in_topic - computed: true, optional: true, required: false
  private _isIncludedInTopic?: boolean | cdktn.IResolvable; 
  public get isIncludedInTopic() {
    return this.getBooleanAttribute('is_included_in_topic');
  }
  public set isIncludedInTopic(value: boolean | cdktn.IResolvable) {
    this._isIncludedInTopic = value;
  }
  public resetIsIncludedInTopic() {
    this._isIncludedInTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIncludedInTopicInput() {
    return this._isIncludedInTopic;
  }

  // never_aggregate_in_filter - computed: true, optional: true, required: false
  private _neverAggregateInFilter?: boolean | cdktn.IResolvable; 
  public get neverAggregateInFilter() {
    return this.getBooleanAttribute('never_aggregate_in_filter');
  }
  public set neverAggregateInFilter(value: boolean | cdktn.IResolvable) {
    this._neverAggregateInFilter = value;
  }
  public resetNeverAggregateInFilter() {
    this._neverAggregateInFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neverAggregateInFilterInput() {
    return this._neverAggregateInFilter;
  }

  // non_additive - computed: true, optional: true, required: false
  private _nonAdditive?: boolean | cdktn.IResolvable; 
  public get nonAdditive() {
    return this.getBooleanAttribute('non_additive');
  }
  public set nonAdditive(value: boolean | cdktn.IResolvable) {
    this._nonAdditive = value;
  }
  public resetNonAdditive() {
    this._nonAdditive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonAdditiveInput() {
    return this._nonAdditive;
  }

  // not_allowed_aggregations - computed: true, optional: true, required: false
  private _notAllowedAggregations?: string[]; 
  public get notAllowedAggregations() {
    return this.getListAttribute('not_allowed_aggregations');
  }
  public set notAllowedAggregations(value: string[]) {
    this._notAllowedAggregations = value;
  }
  public resetNotAllowedAggregations() {
    this._notAllowedAggregations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAllowedAggregationsInput() {
    return this._notAllowedAggregations;
  }

  // semantic_type - computed: true, optional: true, required: false
  private _semanticType = new QuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference(this, "semantic_type");
  public get semanticType() {
    return this._semanticType;
  }
  public putSemanticType(value: QuicksightTopicDataSetsCalculatedFieldsSemanticType) {
    this._semanticType.internalValue = value;
  }
  public resetSemanticType() {
    this._semanticType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get semanticTypeInput() {
    return this._semanticType.internalValue;
  }

  // time_granularity - computed: true, optional: true, required: false
  private _timeGranularity?: string; 
  public get timeGranularity() {
    return this.getStringAttribute('time_granularity');
  }
  public set timeGranularity(value: string) {
    this._timeGranularity = value;
  }
  public resetTimeGranularity() {
    this._timeGranularity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeGranularityInput() {
    return this._timeGranularity;
  }
}

export class QuicksightTopicDataSetsCalculatedFieldsList extends cdktn.ComplexList {
  public internalValue? : QuicksightTopicDataSetsCalculatedFields[] | cdktn.IResolvable

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
  public get(index: number): QuicksightTopicDataSetsCalculatedFieldsOutputReference {
    return new QuicksightTopicDataSetsCalculatedFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTopicDataSetsColumnsCellValueSynonyms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#cell_value QuicksightTopic#cell_value}
  */
  readonly cellValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#synonyms QuicksightTopic#synonyms}
  */
  readonly synonyms?: string[];
}

export function quicksightTopicDataSetsColumnsCellValueSynonymsToTerraform(struct?: QuicksightTopicDataSetsColumnsCellValueSynonyms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cell_value: cdktn.stringToTerraform(struct!.cellValue),
    synonyms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.synonyms),
  }
}


export function quicksightTopicDataSetsColumnsCellValueSynonymsToHclTerraform(struct?: QuicksightTopicDataSetsColumnsCellValueSynonyms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cell_value: {
      value: cdktn.stringToHclTerraform(struct!.cellValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synonyms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.synonyms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightTopicDataSetsColumnsCellValueSynonyms | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cellValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cellValue = this._cellValue;
    }
    if (this._synonyms !== undefined) {
      hasAnyValues = true;
      internalValueResult.synonyms = this._synonyms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTopicDataSetsColumnsCellValueSynonyms | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cellValue = undefined;
      this._synonyms = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cellValue = value.cellValue;
      this._synonyms = value.synonyms;
    }
  }

  // cell_value - computed: true, optional: true, required: false
  private _cellValue?: string; 
  public get cellValue() {
    return this.getStringAttribute('cell_value');
  }
  public set cellValue(value: string) {
    this._cellValue = value;
  }
  public resetCellValue() {
    this._cellValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cellValueInput() {
    return this._cellValue;
  }

  // synonyms - computed: true, optional: true, required: false
  private _synonyms?: string[]; 
  public get synonyms() {
    return this.getListAttribute('synonyms');
  }
  public set synonyms(value: string[]) {
    this._synonyms = value;
  }
  public resetSynonyms() {
    this._synonyms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synonymsInput() {
    return this._synonyms;
  }
}

export class QuicksightTopicDataSetsColumnsCellValueSynonymsList extends cdktn.ComplexList {
  public internalValue? : QuicksightTopicDataSetsColumnsCellValueSynonyms[] | cdktn.IResolvable

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
  public get(index: number): QuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference {
    return new QuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTopicDataSetsColumnsComparativeOrder {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#specifed_order QuicksightTopic#specifed_order}
  */
  readonly specifedOrder?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#treat_undefined_specified_values QuicksightTopic#treat_undefined_specified_values}
  */
  readonly treatUndefinedSpecifiedValues?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#use_ordering QuicksightTopic#use_ordering}
  */
  readonly useOrdering?: string;
}

export function quicksightTopicDataSetsColumnsComparativeOrderToTerraform(struct?: QuicksightTopicDataSetsColumnsComparativeOrder | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    specifed_order: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.specifedOrder),
    treat_undefined_specified_values: cdktn.stringToTerraform(struct!.treatUndefinedSpecifiedValues),
    use_ordering: cdktn.stringToTerraform(struct!.useOrdering),
  }
}


export function quicksightTopicDataSetsColumnsComparativeOrderToHclTerraform(struct?: QuicksightTopicDataSetsColumnsComparativeOrder | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    specifed_order: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.specifedOrder),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    treat_undefined_specified_values: {
      value: cdktn.stringToHclTerraform(struct!.treatUndefinedSpecifiedValues),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_ordering: {
      value: cdktn.stringToHclTerraform(struct!.useOrdering),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTopicDataSetsColumnsComparativeOrderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightTopicDataSetsColumnsComparativeOrder | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._specifedOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.specifedOrder = this._specifedOrder;
    }
    if (this._treatUndefinedSpecifiedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.treatUndefinedSpecifiedValues = this._treatUndefinedSpecifiedValues;
    }
    if (this._useOrdering !== undefined) {
      hasAnyValues = true;
      internalValueResult.useOrdering = this._useOrdering;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTopicDataSetsColumnsComparativeOrder | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._specifedOrder = undefined;
      this._treatUndefinedSpecifiedValues = undefined;
      this._useOrdering = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._specifedOrder = value.specifedOrder;
      this._treatUndefinedSpecifiedValues = value.treatUndefinedSpecifiedValues;
      this._useOrdering = value.useOrdering;
    }
  }

  // specifed_order - computed: true, optional: true, required: false
  private _specifedOrder?: string[]; 
  public get specifedOrder() {
    return this.getListAttribute('specifed_order');
  }
  public set specifedOrder(value: string[]) {
    this._specifedOrder = value;
  }
  public resetSpecifedOrder() {
    this._specifedOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specifedOrderInput() {
    return this._specifedOrder;
  }

  // treat_undefined_specified_values - computed: true, optional: true, required: false
  private _treatUndefinedSpecifiedValues?: string; 
  public get treatUndefinedSpecifiedValues() {
    return this.getStringAttribute('treat_undefined_specified_values');
  }
  public set treatUndefinedSpecifiedValues(value: string) {
    this._treatUndefinedSpecifiedValues = value;
  }
  public resetTreatUndefinedSpecifiedValues() {
    this._treatUndefinedSpecifiedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get treatUndefinedSpecifiedValuesInput() {
    return this._treatUndefinedSpecifiedValues;
  }

  // use_ordering - computed: true, optional: true, required: false
  private _useOrdering?: string; 
  public get useOrdering() {
    return this.getStringAttribute('use_ordering');
  }
  public set useOrdering(value: string) {
    this._useOrdering = value;
  }
  public resetUseOrdering() {
    this._useOrdering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOrderingInput() {
    return this._useOrdering;
  }
}
export interface QuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#prefix QuicksightTopic#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#suffix QuicksightTopic#suffix}
  */
  readonly suffix?: string;
}

export function quicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatToTerraform(struct?: QuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    prefix: cdktn.stringToTerraform(struct!.prefix),
    suffix: cdktn.stringToTerraform(struct!.suffix),
  }
}


export function quicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatToHclTerraform(struct?: QuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktn.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormat | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormat | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
    }
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: true, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}
export interface QuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#blank_cell_format QuicksightTopic#blank_cell_format}
  */
  readonly blankCellFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#currency_symbol QuicksightTopic#currency_symbol}
  */
  readonly currencySymbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#date_format QuicksightTopic#date_format}
  */
  readonly dateFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#decimal_separator QuicksightTopic#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#fraction_digits QuicksightTopic#fraction_digits}
  */
  readonly fractionDigits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#grouping_separator QuicksightTopic#grouping_separator}
  */
  readonly groupingSeparator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#negative_format QuicksightTopic#negative_format}
  */
  readonly negativeFormat?: QuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormat;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#prefix QuicksightTopic#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#suffix QuicksightTopic#suffix}
  */
  readonly suffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#unit_scaler QuicksightTopic#unit_scaler}
  */
  readonly unitScaler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#use_blank_cell_format QuicksightTopic#use_blank_cell_format}
  */
  readonly useBlankCellFormat?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#use_grouping QuicksightTopic#use_grouping}
  */
  readonly useGrouping?: boolean | cdktn.IResolvable;
}

export function quicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsToTerraform(struct?: QuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    blank_cell_format: cdktn.stringToTerraform(struct!.blankCellFormat),
    currency_symbol: cdktn.stringToTerraform(struct!.currencySymbol),
    date_format: cdktn.stringToTerraform(struct!.dateFormat),
    decimal_separator: cdktn.stringToTerraform(struct!.decimalSeparator),
    fraction_digits: cdktn.numberToTerraform(struct!.fractionDigits),
    grouping_separator: cdktn.stringToTerraform(struct!.groupingSeparator),
    negative_format: quicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatToTerraform(struct!.negativeFormat),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    suffix: cdktn.stringToTerraform(struct!.suffix),
    unit_scaler: cdktn.stringToTerraform(struct!.unitScaler),
    use_blank_cell_format: cdktn.booleanToTerraform(struct!.useBlankCellFormat),
    use_grouping: cdktn.booleanToTerraform(struct!.useGrouping),
  }
}


export function quicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsToHclTerraform(struct?: QuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    blank_cell_format: {
      value: cdktn.stringToHclTerraform(struct!.blankCellFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    currency_symbol: {
      value: cdktn.stringToHclTerraform(struct!.currencySymbol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_format: {
      value: cdktn.stringToHclTerraform(struct!.dateFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    decimal_separator: {
      value: cdktn.stringToHclTerraform(struct!.decimalSeparator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fraction_digits: {
      value: cdktn.numberToHclTerraform(struct!.fractionDigits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grouping_separator: {
      value: cdktn.stringToHclTerraform(struct!.groupingSeparator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negative_format: {
      value: quicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatToHclTerraform(struct!.negativeFormat),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormat",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktn.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit_scaler: {
      value: cdktn.stringToHclTerraform(struct!.unitScaler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_blank_cell_format: {
      value: cdktn.booleanToHclTerraform(struct!.useBlankCellFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_grouping: {
      value: cdktn.booleanToHclTerraform(struct!.useGrouping),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blankCellFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.blankCellFormat = this._blankCellFormat;
    }
    if (this._currencySymbol !== undefined) {
      hasAnyValues = true;
      internalValueResult.currencySymbol = this._currencySymbol;
    }
    if (this._dateFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateFormat = this._dateFormat;
    }
    if (this._decimalSeparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalSeparator = this._decimalSeparator;
    }
    if (this._fractionDigits !== undefined) {
      hasAnyValues = true;
      internalValueResult.fractionDigits = this._fractionDigits;
    }
    if (this._groupingSeparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupingSeparator = this._groupingSeparator;
    }
    if (this._negativeFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.negativeFormat = this._negativeFormat?.internalValue;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    if (this._unitScaler !== undefined) {
      hasAnyValues = true;
      internalValueResult.unitScaler = this._unitScaler;
    }
    if (this._useBlankCellFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.useBlankCellFormat = this._useBlankCellFormat;
    }
    if (this._useGrouping !== undefined) {
      hasAnyValues = true;
      internalValueResult.useGrouping = this._useGrouping;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blankCellFormat = undefined;
      this._currencySymbol = undefined;
      this._dateFormat = undefined;
      this._decimalSeparator = undefined;
      this._fractionDigits = undefined;
      this._groupingSeparator = undefined;
      this._negativeFormat.internalValue = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
      this._unitScaler = undefined;
      this._useBlankCellFormat = undefined;
      this._useGrouping = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blankCellFormat = value.blankCellFormat;
      this._currencySymbol = value.currencySymbol;
      this._dateFormat = value.dateFormat;
      this._decimalSeparator = value.decimalSeparator;
      this._fractionDigits = value.fractionDigits;
      this._groupingSeparator = value.groupingSeparator;
      this._negativeFormat.internalValue = value.negativeFormat;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
      this._unitScaler = value.unitScaler;
      this._useBlankCellFormat = value.useBlankCellFormat;
      this._useGrouping = value.useGrouping;
    }
  }

  // blank_cell_format - computed: true, optional: true, required: false
  private _blankCellFormat?: string; 
  public get blankCellFormat() {
    return this.getStringAttribute('blank_cell_format');
  }
  public set blankCellFormat(value: string) {
    this._blankCellFormat = value;
  }
  public resetBlankCellFormat() {
    this._blankCellFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blankCellFormatInput() {
    return this._blankCellFormat;
  }

  // currency_symbol - computed: true, optional: true, required: false
  private _currencySymbol?: string; 
  public get currencySymbol() {
    return this.getStringAttribute('currency_symbol');
  }
  public set currencySymbol(value: string) {
    this._currencySymbol = value;
  }
  public resetCurrencySymbol() {
    this._currencySymbol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currencySymbolInput() {
    return this._currencySymbol;
  }

  // date_format - computed: true, optional: true, required: false
  private _dateFormat?: string; 
  public get dateFormat() {
    return this.getStringAttribute('date_format');
  }
  public set dateFormat(value: string) {
    this._dateFormat = value;
  }
  public resetDateFormat() {
    this._dateFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateFormatInput() {
    return this._dateFormat;
  }

  // decimal_separator - computed: true, optional: true, required: false
  private _decimalSeparator?: string; 
  public get decimalSeparator() {
    return this.getStringAttribute('decimal_separator');
  }
  public set decimalSeparator(value: string) {
    this._decimalSeparator = value;
  }
  public resetDecimalSeparator() {
    this._decimalSeparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decimalSeparatorInput() {
    return this._decimalSeparator;
  }

  // fraction_digits - computed: true, optional: true, required: false
  private _fractionDigits?: number; 
  public get fractionDigits() {
    return this.getNumberAttribute('fraction_digits');
  }
  public set fractionDigits(value: number) {
    this._fractionDigits = value;
  }
  public resetFractionDigits() {
    this._fractionDigits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fractionDigitsInput() {
    return this._fractionDigits;
  }

  // grouping_separator - computed: true, optional: true, required: false
  private _groupingSeparator?: string; 
  public get groupingSeparator() {
    return this.getStringAttribute('grouping_separator');
  }
  public set groupingSeparator(value: string) {
    this._groupingSeparator = value;
  }
  public resetGroupingSeparator() {
    this._groupingSeparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupingSeparatorInput() {
    return this._groupingSeparator;
  }

  // negative_format - computed: true, optional: true, required: false
  private _negativeFormat = new QuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference(this, "negative_format");
  public get negativeFormat() {
    return this._negativeFormat;
  }
  public putNegativeFormat(value: QuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormat) {
    this._negativeFormat.internalValue = value;
  }
  public resetNegativeFormat() {
    this._negativeFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeFormatInput() {
    return this._negativeFormat.internalValue;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: true, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }

  // unit_scaler - computed: true, optional: true, required: false
  private _unitScaler?: string; 
  public get unitScaler() {
    return this.getStringAttribute('unit_scaler');
  }
  public set unitScaler(value: string) {
    this._unitScaler = value;
  }
  public resetUnitScaler() {
    this._unitScaler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitScalerInput() {
    return this._unitScaler;
  }

  // use_blank_cell_format - computed: true, optional: true, required: false
  private _useBlankCellFormat?: boolean | cdktn.IResolvable; 
  public get useBlankCellFormat() {
    return this.getBooleanAttribute('use_blank_cell_format');
  }
  public set useBlankCellFormat(value: boolean | cdktn.IResolvable) {
    this._useBlankCellFormat = value;
  }
  public resetUseBlankCellFormat() {
    this._useBlankCellFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useBlankCellFormatInput() {
    return this._useBlankCellFormat;
  }

  // use_grouping - computed: true, optional: true, required: false
  private _useGrouping?: boolean | cdktn.IResolvable; 
  public get useGrouping() {
    return this.getBooleanAttribute('use_grouping');
  }
  public set useGrouping(value: boolean | cdktn.IResolvable) {
    this._useGrouping = value;
  }
  public resetUseGrouping() {
    this._useGrouping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useGroupingInput() {
    return this._useGrouping;
  }
}
export interface QuicksightTopicDataSetsColumnsDefaultFormatting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#display_format QuicksightTopic#display_format}
  */
  readonly displayFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#display_format_options QuicksightTopic#display_format_options}
  */
  readonly displayFormatOptions?: QuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptions;
}

export function quicksightTopicDataSetsColumnsDefaultFormattingToTerraform(struct?: QuicksightTopicDataSetsColumnsDefaultFormatting | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    display_format: cdktn.stringToTerraform(struct!.displayFormat),
    display_format_options: quicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsToTerraform(struct!.displayFormatOptions),
  }
}


export function quicksightTopicDataSetsColumnsDefaultFormattingToHclTerraform(struct?: QuicksightTopicDataSetsColumnsDefaultFormatting | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    display_format: {
      value: cdktn.stringToHclTerraform(struct!.displayFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_format_options: {
      value: quicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsToHclTerraform(struct!.displayFormatOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTopicDataSetsColumnsDefaultFormattingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightTopicDataSetsColumnsDefaultFormatting | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayFormat = this._displayFormat;
    }
    if (this._displayFormatOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayFormatOptions = this._displayFormatOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTopicDataSetsColumnsDefaultFormatting | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayFormat = undefined;
      this._displayFormatOptions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayFormat = value.displayFormat;
      this._displayFormatOptions.internalValue = value.displayFormatOptions;
    }
  }

  // display_format - computed: true, optional: true, required: false
  private _displayFormat?: string; 
  public get displayFormat() {
    return this.getStringAttribute('display_format');
  }
  public set displayFormat(value: string) {
    this._displayFormat = value;
  }
  public resetDisplayFormat() {
    this._displayFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayFormatInput() {
    return this._displayFormat;
  }

  // display_format_options - computed: true, optional: true, required: false
  private _displayFormatOptions = new QuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference(this, "display_format_options");
  public get displayFormatOptions() {
    return this._displayFormatOptions;
  }
  public putDisplayFormatOptions(value: QuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptions) {
    this._displayFormatOptions.internalValue = value;
  }
  public resetDisplayFormatOptions() {
    this._displayFormatOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayFormatOptionsInput() {
    return this._displayFormatOptions.internalValue;
  }
}
export interface QuicksightTopicDataSetsColumnsSemanticType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#falsey_cell_value QuicksightTopic#falsey_cell_value}
  */
  readonly falseyCellValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#falsey_cell_value_synonyms QuicksightTopic#falsey_cell_value_synonyms}
  */
  readonly falseyCellValueSynonyms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#sub_type_name QuicksightTopic#sub_type_name}
  */
  readonly subTypeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#truthy_cell_value QuicksightTopic#truthy_cell_value}
  */
  readonly truthyCellValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#truthy_cell_value_synonyms QuicksightTopic#truthy_cell_value_synonyms}
  */
  readonly truthyCellValueSynonyms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#type_name QuicksightTopic#type_name}
  */
  readonly typeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#type_parameters QuicksightTopic#type_parameters}
  */
  readonly typeParameters?: { [key: string]: string };
}

export function quicksightTopicDataSetsColumnsSemanticTypeToTerraform(struct?: QuicksightTopicDataSetsColumnsSemanticType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    falsey_cell_value: cdktn.stringToTerraform(struct!.falseyCellValue),
    falsey_cell_value_synonyms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.falseyCellValueSynonyms),
    sub_type_name: cdktn.stringToTerraform(struct!.subTypeName),
    truthy_cell_value: cdktn.stringToTerraform(struct!.truthyCellValue),
    truthy_cell_value_synonyms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.truthyCellValueSynonyms),
    type_name: cdktn.stringToTerraform(struct!.typeName),
    type_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.typeParameters),
  }
}


export function quicksightTopicDataSetsColumnsSemanticTypeToHclTerraform(struct?: QuicksightTopicDataSetsColumnsSemanticType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    falsey_cell_value: {
      value: cdktn.stringToHclTerraform(struct!.falseyCellValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    falsey_cell_value_synonyms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.falseyCellValueSynonyms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sub_type_name: {
      value: cdktn.stringToHclTerraform(struct!.subTypeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    truthy_cell_value: {
      value: cdktn.stringToHclTerraform(struct!.truthyCellValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    truthy_cell_value_synonyms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.truthyCellValueSynonyms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type_name: {
      value: cdktn.stringToHclTerraform(struct!.typeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.typeParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTopicDataSetsColumnsSemanticTypeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightTopicDataSetsColumnsSemanticType | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._falseyCellValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.falseyCellValue = this._falseyCellValue;
    }
    if (this._falseyCellValueSynonyms !== undefined) {
      hasAnyValues = true;
      internalValueResult.falseyCellValueSynonyms = this._falseyCellValueSynonyms;
    }
    if (this._subTypeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subTypeName = this._subTypeName;
    }
    if (this._truthyCellValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.truthyCellValue = this._truthyCellValue;
    }
    if (this._truthyCellValueSynonyms !== undefined) {
      hasAnyValues = true;
      internalValueResult.truthyCellValueSynonyms = this._truthyCellValueSynonyms;
    }
    if (this._typeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeName = this._typeName;
    }
    if (this._typeParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeParameters = this._typeParameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTopicDataSetsColumnsSemanticType | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._falseyCellValue = undefined;
      this._falseyCellValueSynonyms = undefined;
      this._subTypeName = undefined;
      this._truthyCellValue = undefined;
      this._truthyCellValueSynonyms = undefined;
      this._typeName = undefined;
      this._typeParameters = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._falseyCellValue = value.falseyCellValue;
      this._falseyCellValueSynonyms = value.falseyCellValueSynonyms;
      this._subTypeName = value.subTypeName;
      this._truthyCellValue = value.truthyCellValue;
      this._truthyCellValueSynonyms = value.truthyCellValueSynonyms;
      this._typeName = value.typeName;
      this._typeParameters = value.typeParameters;
    }
  }

  // falsey_cell_value - computed: true, optional: true, required: false
  private _falseyCellValue?: string; 
  public get falseyCellValue() {
    return this.getStringAttribute('falsey_cell_value');
  }
  public set falseyCellValue(value: string) {
    this._falseyCellValue = value;
  }
  public resetFalseyCellValue() {
    this._falseyCellValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get falseyCellValueInput() {
    return this._falseyCellValue;
  }

  // falsey_cell_value_synonyms - computed: true, optional: true, required: false
  private _falseyCellValueSynonyms?: string[]; 
  public get falseyCellValueSynonyms() {
    return this.getListAttribute('falsey_cell_value_synonyms');
  }
  public set falseyCellValueSynonyms(value: string[]) {
    this._falseyCellValueSynonyms = value;
  }
  public resetFalseyCellValueSynonyms() {
    this._falseyCellValueSynonyms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get falseyCellValueSynonymsInput() {
    return this._falseyCellValueSynonyms;
  }

  // sub_type_name - computed: true, optional: true, required: false
  private _subTypeName?: string; 
  public get subTypeName() {
    return this.getStringAttribute('sub_type_name');
  }
  public set subTypeName(value: string) {
    this._subTypeName = value;
  }
  public resetSubTypeName() {
    this._subTypeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subTypeNameInput() {
    return this._subTypeName;
  }

  // truthy_cell_value - computed: true, optional: true, required: false
  private _truthyCellValue?: string; 
  public get truthyCellValue() {
    return this.getStringAttribute('truthy_cell_value');
  }
  public set truthyCellValue(value: string) {
    this._truthyCellValue = value;
  }
  public resetTruthyCellValue() {
    this._truthyCellValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get truthyCellValueInput() {
    return this._truthyCellValue;
  }

  // truthy_cell_value_synonyms - computed: true, optional: true, required: false
  private _truthyCellValueSynonyms?: string[]; 
  public get truthyCellValueSynonyms() {
    return this.getListAttribute('truthy_cell_value_synonyms');
  }
  public set truthyCellValueSynonyms(value: string[]) {
    this._truthyCellValueSynonyms = value;
  }
  public resetTruthyCellValueSynonyms() {
    this._truthyCellValueSynonyms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get truthyCellValueSynonymsInput() {
    return this._truthyCellValueSynonyms;
  }

  // type_name - computed: true, optional: true, required: false
  private _typeName?: string; 
  public get typeName() {
    return this.getStringAttribute('type_name');
  }
  public set typeName(value: string) {
    this._typeName = value;
  }
  public resetTypeName() {
    this._typeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNameInput() {
    return this._typeName;
  }

  // type_parameters - computed: true, optional: true, required: false
  private _typeParameters?: { [key: string]: string }; 
  public get typeParameters() {
    return this.getStringMapAttribute('type_parameters');
  }
  public set typeParameters(value: { [key: string]: string }) {
    this._typeParameters = value;
  }
  public resetTypeParameters() {
    this._typeParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeParametersInput() {
    return this._typeParameters;
  }
}
export interface QuicksightTopicDataSetsColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#aggregation QuicksightTopic#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#allowed_aggregations QuicksightTopic#allowed_aggregations}
  */
  readonly allowedAggregations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#cell_value_synonyms QuicksightTopic#cell_value_synonyms}
  */
  readonly cellValueSynonyms?: QuicksightTopicDataSetsColumnsCellValueSynonyms[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#column_data_role QuicksightTopic#column_data_role}
  */
  readonly columnDataRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#column_description QuicksightTopic#column_description}
  */
  readonly columnDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#column_friendly_name QuicksightTopic#column_friendly_name}
  */
  readonly columnFriendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#column_name QuicksightTopic#column_name}
  */
  readonly columnName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#column_synonyms QuicksightTopic#column_synonyms}
  */
  readonly columnSynonyms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#comparative_order QuicksightTopic#comparative_order}
  */
  readonly comparativeOrder?: QuicksightTopicDataSetsColumnsComparativeOrder;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#default_formatting QuicksightTopic#default_formatting}
  */
  readonly defaultFormatting?: QuicksightTopicDataSetsColumnsDefaultFormatting;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#disable_indexing QuicksightTopic#disable_indexing}
  */
  readonly disableIndexing?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#is_included_in_topic QuicksightTopic#is_included_in_topic}
  */
  readonly isIncludedInTopic?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#never_aggregate_in_filter QuicksightTopic#never_aggregate_in_filter}
  */
  readonly neverAggregateInFilter?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#non_additive QuicksightTopic#non_additive}
  */
  readonly nonAdditive?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#not_allowed_aggregations QuicksightTopic#not_allowed_aggregations}
  */
  readonly notAllowedAggregations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#semantic_type QuicksightTopic#semantic_type}
  */
  readonly semanticType?: QuicksightTopicDataSetsColumnsSemanticType;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#time_granularity QuicksightTopic#time_granularity}
  */
  readonly timeGranularity?: string;
}

export function quicksightTopicDataSetsColumnsToTerraform(struct?: QuicksightTopicDataSetsColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    allowed_aggregations: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedAggregations),
    cell_value_synonyms: cdktn.listMapper(quicksightTopicDataSetsColumnsCellValueSynonymsToTerraform, false)(struct!.cellValueSynonyms),
    column_data_role: cdktn.stringToTerraform(struct!.columnDataRole),
    column_description: cdktn.stringToTerraform(struct!.columnDescription),
    column_friendly_name: cdktn.stringToTerraform(struct!.columnFriendlyName),
    column_name: cdktn.stringToTerraform(struct!.columnName),
    column_synonyms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.columnSynonyms),
    comparative_order: quicksightTopicDataSetsColumnsComparativeOrderToTerraform(struct!.comparativeOrder),
    default_formatting: quicksightTopicDataSetsColumnsDefaultFormattingToTerraform(struct!.defaultFormatting),
    disable_indexing: cdktn.booleanToTerraform(struct!.disableIndexing),
    is_included_in_topic: cdktn.booleanToTerraform(struct!.isIncludedInTopic),
    never_aggregate_in_filter: cdktn.booleanToTerraform(struct!.neverAggregateInFilter),
    non_additive: cdktn.booleanToTerraform(struct!.nonAdditive),
    not_allowed_aggregations: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.notAllowedAggregations),
    semantic_type: quicksightTopicDataSetsColumnsSemanticTypeToTerraform(struct!.semanticType),
    time_granularity: cdktn.stringToTerraform(struct!.timeGranularity),
  }
}


export function quicksightTopicDataSetsColumnsToHclTerraform(struct?: QuicksightTopicDataSetsColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aggregation: {
      value: cdktn.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowed_aggregations: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedAggregations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cell_value_synonyms: {
      value: cdktn.listMapperHcl(quicksightTopicDataSetsColumnsCellValueSynonymsToHclTerraform, false)(struct!.cellValueSynonyms),
      isBlock: true,
      type: "list",
      storageClassType: "QuicksightTopicDataSetsColumnsCellValueSynonymsList",
    },
    column_data_role: {
      value: cdktn.stringToHclTerraform(struct!.columnDataRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column_description: {
      value: cdktn.stringToHclTerraform(struct!.columnDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column_friendly_name: {
      value: cdktn.stringToHclTerraform(struct!.columnFriendlyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column_name: {
      value: cdktn.stringToHclTerraform(struct!.columnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column_synonyms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.columnSynonyms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    comparative_order: {
      value: quicksightTopicDataSetsColumnsComparativeOrderToHclTerraform(struct!.comparativeOrder),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightTopicDataSetsColumnsComparativeOrder",
    },
    default_formatting: {
      value: quicksightTopicDataSetsColumnsDefaultFormattingToHclTerraform(struct!.defaultFormatting),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightTopicDataSetsColumnsDefaultFormatting",
    },
    disable_indexing: {
      value: cdktn.booleanToHclTerraform(struct!.disableIndexing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_included_in_topic: {
      value: cdktn.booleanToHclTerraform(struct!.isIncludedInTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    never_aggregate_in_filter: {
      value: cdktn.booleanToHclTerraform(struct!.neverAggregateInFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    non_additive: {
      value: cdktn.booleanToHclTerraform(struct!.nonAdditive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    not_allowed_aggregations: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.notAllowedAggregations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    semantic_type: {
      value: quicksightTopicDataSetsColumnsSemanticTypeToHclTerraform(struct!.semanticType),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightTopicDataSetsColumnsSemanticType",
    },
    time_granularity: {
      value: cdktn.stringToHclTerraform(struct!.timeGranularity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTopicDataSetsColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightTopicDataSetsColumns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._allowedAggregations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedAggregations = this._allowedAggregations;
    }
    if (this._cellValueSynonyms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cellValueSynonyms = this._cellValueSynonyms?.internalValue;
    }
    if (this._columnDataRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnDataRole = this._columnDataRole;
    }
    if (this._columnDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnDescription = this._columnDescription;
    }
    if (this._columnFriendlyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnFriendlyName = this._columnFriendlyName;
    }
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._columnSynonyms !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnSynonyms = this._columnSynonyms;
    }
    if (this._comparativeOrder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparativeOrder = this._comparativeOrder?.internalValue;
    }
    if (this._defaultFormatting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultFormatting = this._defaultFormatting?.internalValue;
    }
    if (this._disableIndexing !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableIndexing = this._disableIndexing;
    }
    if (this._isIncludedInTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.isIncludedInTopic = this._isIncludedInTopic;
    }
    if (this._neverAggregateInFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.neverAggregateInFilter = this._neverAggregateInFilter;
    }
    if (this._nonAdditive !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonAdditive = this._nonAdditive;
    }
    if (this._notAllowedAggregations !== undefined) {
      hasAnyValues = true;
      internalValueResult.notAllowedAggregations = this._notAllowedAggregations;
    }
    if (this._semanticType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.semanticType = this._semanticType?.internalValue;
    }
    if (this._timeGranularity !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeGranularity = this._timeGranularity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTopicDataSetsColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._allowedAggregations = undefined;
      this._cellValueSynonyms.internalValue = undefined;
      this._columnDataRole = undefined;
      this._columnDescription = undefined;
      this._columnFriendlyName = undefined;
      this._columnName = undefined;
      this._columnSynonyms = undefined;
      this._comparativeOrder.internalValue = undefined;
      this._defaultFormatting.internalValue = undefined;
      this._disableIndexing = undefined;
      this._isIncludedInTopic = undefined;
      this._neverAggregateInFilter = undefined;
      this._nonAdditive = undefined;
      this._notAllowedAggregations = undefined;
      this._semanticType.internalValue = undefined;
      this._timeGranularity = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._allowedAggregations = value.allowedAggregations;
      this._cellValueSynonyms.internalValue = value.cellValueSynonyms;
      this._columnDataRole = value.columnDataRole;
      this._columnDescription = value.columnDescription;
      this._columnFriendlyName = value.columnFriendlyName;
      this._columnName = value.columnName;
      this._columnSynonyms = value.columnSynonyms;
      this._comparativeOrder.internalValue = value.comparativeOrder;
      this._defaultFormatting.internalValue = value.defaultFormatting;
      this._disableIndexing = value.disableIndexing;
      this._isIncludedInTopic = value.isIncludedInTopic;
      this._neverAggregateInFilter = value.neverAggregateInFilter;
      this._nonAdditive = value.nonAdditive;
      this._notAllowedAggregations = value.notAllowedAggregations;
      this._semanticType.internalValue = value.semanticType;
      this._timeGranularity = value.timeGranularity;
    }
  }

  // aggregation - computed: true, optional: true, required: false
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  public resetAggregation() {
    this._aggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // allowed_aggregations - computed: true, optional: true, required: false
  private _allowedAggregations?: string[]; 
  public get allowedAggregations() {
    return this.getListAttribute('allowed_aggregations');
  }
  public set allowedAggregations(value: string[]) {
    this._allowedAggregations = value;
  }
  public resetAllowedAggregations() {
    this._allowedAggregations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAggregationsInput() {
    return this._allowedAggregations;
  }

  // cell_value_synonyms - computed: true, optional: true, required: false
  private _cellValueSynonyms = new QuicksightTopicDataSetsColumnsCellValueSynonymsList(this, "cell_value_synonyms", false);
  public get cellValueSynonyms() {
    return this._cellValueSynonyms;
  }
  public putCellValueSynonyms(value: QuicksightTopicDataSetsColumnsCellValueSynonyms[] | cdktn.IResolvable) {
    this._cellValueSynonyms.internalValue = value;
  }
  public resetCellValueSynonyms() {
    this._cellValueSynonyms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cellValueSynonymsInput() {
    return this._cellValueSynonyms.internalValue;
  }

  // column_data_role - computed: true, optional: true, required: false
  private _columnDataRole?: string; 
  public get columnDataRole() {
    return this.getStringAttribute('column_data_role');
  }
  public set columnDataRole(value: string) {
    this._columnDataRole = value;
  }
  public resetColumnDataRole() {
    this._columnDataRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnDataRoleInput() {
    return this._columnDataRole;
  }

  // column_description - computed: true, optional: true, required: false
  private _columnDescription?: string; 
  public get columnDescription() {
    return this.getStringAttribute('column_description');
  }
  public set columnDescription(value: string) {
    this._columnDescription = value;
  }
  public resetColumnDescription() {
    this._columnDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnDescriptionInput() {
    return this._columnDescription;
  }

  // column_friendly_name - computed: true, optional: true, required: false
  private _columnFriendlyName?: string; 
  public get columnFriendlyName() {
    return this.getStringAttribute('column_friendly_name');
  }
  public set columnFriendlyName(value: string) {
    this._columnFriendlyName = value;
  }
  public resetColumnFriendlyName() {
    this._columnFriendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnFriendlyNameInput() {
    return this._columnFriendlyName;
  }

  // column_name - computed: true, optional: true, required: false
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  public resetColumnName() {
    this._columnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // column_synonyms - computed: true, optional: true, required: false
  private _columnSynonyms?: string[]; 
  public get columnSynonyms() {
    return this.getListAttribute('column_synonyms');
  }
  public set columnSynonyms(value: string[]) {
    this._columnSynonyms = value;
  }
  public resetColumnSynonyms() {
    this._columnSynonyms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnSynonymsInput() {
    return this._columnSynonyms;
  }

  // comparative_order - computed: true, optional: true, required: false
  private _comparativeOrder = new QuicksightTopicDataSetsColumnsComparativeOrderOutputReference(this, "comparative_order");
  public get comparativeOrder() {
    return this._comparativeOrder;
  }
  public putComparativeOrder(value: QuicksightTopicDataSetsColumnsComparativeOrder) {
    this._comparativeOrder.internalValue = value;
  }
  public resetComparativeOrder() {
    this._comparativeOrder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparativeOrderInput() {
    return this._comparativeOrder.internalValue;
  }

  // default_formatting - computed: true, optional: true, required: false
  private _defaultFormatting = new QuicksightTopicDataSetsColumnsDefaultFormattingOutputReference(this, "default_formatting");
  public get defaultFormatting() {
    return this._defaultFormatting;
  }
  public putDefaultFormatting(value: QuicksightTopicDataSetsColumnsDefaultFormatting) {
    this._defaultFormatting.internalValue = value;
  }
  public resetDefaultFormatting() {
    this._defaultFormatting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultFormattingInput() {
    return this._defaultFormatting.internalValue;
  }

  // disable_indexing - computed: true, optional: true, required: false
  private _disableIndexing?: boolean | cdktn.IResolvable; 
  public get disableIndexing() {
    return this.getBooleanAttribute('disable_indexing');
  }
  public set disableIndexing(value: boolean | cdktn.IResolvable) {
    this._disableIndexing = value;
  }
  public resetDisableIndexing() {
    this._disableIndexing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableIndexingInput() {
    return this._disableIndexing;
  }

  // is_included_in_topic - computed: true, optional: true, required: false
  private _isIncludedInTopic?: boolean | cdktn.IResolvable; 
  public get isIncludedInTopic() {
    return this.getBooleanAttribute('is_included_in_topic');
  }
  public set isIncludedInTopic(value: boolean | cdktn.IResolvable) {
    this._isIncludedInTopic = value;
  }
  public resetIsIncludedInTopic() {
    this._isIncludedInTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIncludedInTopicInput() {
    return this._isIncludedInTopic;
  }

  // never_aggregate_in_filter - computed: true, optional: true, required: false
  private _neverAggregateInFilter?: boolean | cdktn.IResolvable; 
  public get neverAggregateInFilter() {
    return this.getBooleanAttribute('never_aggregate_in_filter');
  }
  public set neverAggregateInFilter(value: boolean | cdktn.IResolvable) {
    this._neverAggregateInFilter = value;
  }
  public resetNeverAggregateInFilter() {
    this._neverAggregateInFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neverAggregateInFilterInput() {
    return this._neverAggregateInFilter;
  }

  // non_additive - computed: true, optional: true, required: false
  private _nonAdditive?: boolean | cdktn.IResolvable; 
  public get nonAdditive() {
    return this.getBooleanAttribute('non_additive');
  }
  public set nonAdditive(value: boolean | cdktn.IResolvable) {
    this._nonAdditive = value;
  }
  public resetNonAdditive() {
    this._nonAdditive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonAdditiveInput() {
    return this._nonAdditive;
  }

  // not_allowed_aggregations - computed: true, optional: true, required: false
  private _notAllowedAggregations?: string[]; 
  public get notAllowedAggregations() {
    return this.getListAttribute('not_allowed_aggregations');
  }
  public set notAllowedAggregations(value: string[]) {
    this._notAllowedAggregations = value;
  }
  public resetNotAllowedAggregations() {
    this._notAllowedAggregations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAllowedAggregationsInput() {
    return this._notAllowedAggregations;
  }

  // semantic_type - computed: true, optional: true, required: false
  private _semanticType = new QuicksightTopicDataSetsColumnsSemanticTypeOutputReference(this, "semantic_type");
  public get semanticType() {
    return this._semanticType;
  }
  public putSemanticType(value: QuicksightTopicDataSetsColumnsSemanticType) {
    this._semanticType.internalValue = value;
  }
  public resetSemanticType() {
    this._semanticType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get semanticTypeInput() {
    return this._semanticType.internalValue;
  }

  // time_granularity - computed: true, optional: true, required: false
  private _timeGranularity?: string; 
  public get timeGranularity() {
    return this.getStringAttribute('time_granularity');
  }
  public set timeGranularity(value: string) {
    this._timeGranularity = value;
  }
  public resetTimeGranularity() {
    this._timeGranularity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeGranularityInput() {
    return this._timeGranularity;
  }
}

export class QuicksightTopicDataSetsColumnsList extends cdktn.ComplexList {
  public internalValue? : QuicksightTopicDataSetsColumns[] | cdktn.IResolvable

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
  public get(index: number): QuicksightTopicDataSetsColumnsOutputReference {
    return new QuicksightTopicDataSetsColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTopicDataSetsDataAggregation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#dataset_row_date_granularity QuicksightTopic#dataset_row_date_granularity}
  */
  readonly datasetRowDateGranularity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#default_date_column_name QuicksightTopic#default_date_column_name}
  */
  readonly defaultDateColumnName?: string;
}

export function quicksightTopicDataSetsDataAggregationToTerraform(struct?: QuicksightTopicDataSetsDataAggregation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dataset_row_date_granularity: cdktn.stringToTerraform(struct!.datasetRowDateGranularity),
    default_date_column_name: cdktn.stringToTerraform(struct!.defaultDateColumnName),
  }
}


export function quicksightTopicDataSetsDataAggregationToHclTerraform(struct?: QuicksightTopicDataSetsDataAggregation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dataset_row_date_granularity: {
      value: cdktn.stringToHclTerraform(struct!.datasetRowDateGranularity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_date_column_name: {
      value: cdktn.stringToHclTerraform(struct!.defaultDateColumnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTopicDataSetsDataAggregationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightTopicDataSetsDataAggregation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetRowDateGranularity !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetRowDateGranularity = this._datasetRowDateGranularity;
    }
    if (this._defaultDateColumnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultDateColumnName = this._defaultDateColumnName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTopicDataSetsDataAggregation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasetRowDateGranularity = undefined;
      this._defaultDateColumnName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasetRowDateGranularity = value.datasetRowDateGranularity;
      this._defaultDateColumnName = value.defaultDateColumnName;
    }
  }

  // dataset_row_date_granularity - computed: true, optional: true, required: false
  private _datasetRowDateGranularity?: string; 
  public get datasetRowDateGranularity() {
    return this.getStringAttribute('dataset_row_date_granularity');
  }
  public set datasetRowDateGranularity(value: string) {
    this._datasetRowDateGranularity = value;
  }
  public resetDatasetRowDateGranularity() {
    this._datasetRowDateGranularity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetRowDateGranularityInput() {
    return this._datasetRowDateGranularity;
  }

  // default_date_column_name - computed: true, optional: true, required: false
  private _defaultDateColumnName?: string; 
  public get defaultDateColumnName() {
    return this.getStringAttribute('default_date_column_name');
  }
  public set defaultDateColumnName(value: string) {
    this._defaultDateColumnName = value;
  }
  public resetDefaultDateColumnName() {
    this._defaultDateColumnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDateColumnNameInput() {
    return this._defaultDateColumnName;
  }
}
export interface QuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstant {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#value_list QuicksightTopic#value_list}
  */
  readonly valueList?: string[];
}

export function quicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantToTerraform(struct?: QuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstant | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.valueList),
  }
}


export function quicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantToHclTerraform(struct?: QuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstant | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    value_list: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.valueList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstant | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._valueList !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueList = this._valueList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstant | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._valueList = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._valueList = value.valueList;
    }
  }

  // value_list - computed: true, optional: true, required: false
  private _valueList?: string[]; 
  public get valueList() {
    return this.getListAttribute('value_list');
  }
  public set valueList(value: string[]) {
    this._valueList = value;
  }
  public resetValueList() {
    this._valueList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueListInput() {
    return this._valueList;
  }
}
export interface QuicksightTopicDataSetsFiltersCategoryFilterConstant {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#collective_constant QuicksightTopic#collective_constant}
  */
  readonly collectiveConstant?: QuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstant;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#constant_type QuicksightTopic#constant_type}
  */
  readonly constantType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#singular_constant QuicksightTopic#singular_constant}
  */
  readonly singularConstant?: string;
}

export function quicksightTopicDataSetsFiltersCategoryFilterConstantToTerraform(struct?: QuicksightTopicDataSetsFiltersCategoryFilterConstant | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    collective_constant: quicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantToTerraform(struct!.collectiveConstant),
    constant_type: cdktn.stringToTerraform(struct!.constantType),
    singular_constant: cdktn.stringToTerraform(struct!.singularConstant),
  }
}


export function quicksightTopicDataSetsFiltersCategoryFilterConstantToHclTerraform(struct?: QuicksightTopicDataSetsFiltersCategoryFilterConstant | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    collective_constant: {
      value: quicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantToHclTerraform(struct!.collectiveConstant),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstant",
    },
    constant_type: {
      value: cdktn.stringToHclTerraform(struct!.constantType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    singular_constant: {
      value: cdktn.stringToHclTerraform(struct!.singularConstant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightTopicDataSetsFiltersCategoryFilterConstant | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectiveConstant?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectiveConstant = this._collectiveConstant?.internalValue;
    }
    if (this._constantType !== undefined) {
      hasAnyValues = true;
      internalValueResult.constantType = this._constantType;
    }
    if (this._singularConstant !== undefined) {
      hasAnyValues = true;
      internalValueResult.singularConstant = this._singularConstant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTopicDataSetsFiltersCategoryFilterConstant | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collectiveConstant.internalValue = undefined;
      this._constantType = undefined;
      this._singularConstant = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collectiveConstant.internalValue = value.collectiveConstant;
      this._constantType = value.constantType;
      this._singularConstant = value.singularConstant;
    }
  }

  // collective_constant - computed: true, optional: true, required: false
  private _collectiveConstant = new QuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference(this, "collective_constant");
  public get collectiveConstant() {
    return this._collectiveConstant;
  }
  public putCollectiveConstant(value: QuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstant) {
    this._collectiveConstant.internalValue = value;
  }
  public resetCollectiveConstant() {
    this._collectiveConstant.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectiveConstantInput() {
    return this._collectiveConstant.internalValue;
  }

  // constant_type - computed: true, optional: true, required: false
  private _constantType?: string; 
  public get constantType() {
    return this.getStringAttribute('constant_type');
  }
  public set constantType(value: string) {
    this._constantType = value;
  }
  public resetConstantType() {
    this._constantType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantTypeInput() {
    return this._constantType;
  }

  // singular_constant - computed: true, optional: true, required: false
  private _singularConstant?: string; 
  public get singularConstant() {
    return this.getStringAttribute('singular_constant');
  }
  public set singularConstant(value: string) {
    this._singularConstant = value;
  }
  public resetSingularConstant() {
    this._singularConstant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singularConstantInput() {
    return this._singularConstant;
  }
}
export interface QuicksightTopicDataSetsFiltersCategoryFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#category_filter_function QuicksightTopic#category_filter_function}
  */
  readonly categoryFilterFunction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#category_filter_type QuicksightTopic#category_filter_type}
  */
  readonly categoryFilterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#constant QuicksightTopic#constant}
  */
  readonly constant?: QuicksightTopicDataSetsFiltersCategoryFilterConstant;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#inverse QuicksightTopic#inverse}
  */
  readonly inverse?: boolean | cdktn.IResolvable;
}

export function quicksightTopicDataSetsFiltersCategoryFilterToTerraform(struct?: QuicksightTopicDataSetsFiltersCategoryFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    category_filter_function: cdktn.stringToTerraform(struct!.categoryFilterFunction),
    category_filter_type: cdktn.stringToTerraform(struct!.categoryFilterType),
    constant: quicksightTopicDataSetsFiltersCategoryFilterConstantToTerraform(struct!.constant),
    inverse: cdktn.booleanToTerraform(struct!.inverse),
  }
}


export function quicksightTopicDataSetsFiltersCategoryFilterToHclTerraform(struct?: QuicksightTopicDataSetsFiltersCategoryFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    category_filter_function: {
      value: cdktn.stringToHclTerraform(struct!.categoryFilterFunction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    category_filter_type: {
      value: cdktn.stringToHclTerraform(struct!.categoryFilterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    constant: {
      value: quicksightTopicDataSetsFiltersCategoryFilterConstantToHclTerraform(struct!.constant),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightTopicDataSetsFiltersCategoryFilterConstant",
    },
    inverse: {
      value: cdktn.booleanToHclTerraform(struct!.inverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTopicDataSetsFiltersCategoryFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightTopicDataSetsFiltersCategoryFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categoryFilterFunction !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryFilterFunction = this._categoryFilterFunction;
    }
    if (this._categoryFilterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryFilterType = this._categoryFilterType;
    }
    if (this._constant?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.constant = this._constant?.internalValue;
    }
    if (this._inverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverse = this._inverse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTopicDataSetsFiltersCategoryFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._categoryFilterFunction = undefined;
      this._categoryFilterType = undefined;
      this._constant.internalValue = undefined;
      this._inverse = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._categoryFilterFunction = value.categoryFilterFunction;
      this._categoryFilterType = value.categoryFilterType;
      this._constant.internalValue = value.constant;
      this._inverse = value.inverse;
    }
  }

  // category_filter_function - computed: true, optional: true, required: false
  private _categoryFilterFunction?: string; 
  public get categoryFilterFunction() {
    return this.getStringAttribute('category_filter_function');
  }
  public set categoryFilterFunction(value: string) {
    this._categoryFilterFunction = value;
  }
  public resetCategoryFilterFunction() {
    this._categoryFilterFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryFilterFunctionInput() {
    return this._categoryFilterFunction;
  }

  // category_filter_type - computed: true, optional: true, required: false
  private _categoryFilterType?: string; 
  public get categoryFilterType() {
    return this.getStringAttribute('category_filter_type');
  }
  public set categoryFilterType(value: string) {
    this._categoryFilterType = value;
  }
  public resetCategoryFilterType() {
    this._categoryFilterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryFilterTypeInput() {
    return this._categoryFilterType;
  }

  // constant - computed: true, optional: true, required: false
  private _constant = new QuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference(this, "constant");
  public get constant() {
    return this._constant;
  }
  public putConstant(value: QuicksightTopicDataSetsFiltersCategoryFilterConstant) {
    this._constant.internalValue = value;
  }
  public resetConstant() {
    this._constant.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantInput() {
    return this._constant.internalValue;
  }

  // inverse - computed: true, optional: true, required: false
  private _inverse?: boolean | cdktn.IResolvable; 
  public get inverse() {
    return this.getBooleanAttribute('inverse');
  }
  public set inverse(value: boolean | cdktn.IResolvable) {
    this._inverse = value;
  }
  public resetInverse() {
    this._inverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseInput() {
    return this._inverse;
  }
}
export interface QuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstant {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#maximum QuicksightTopic#maximum}
  */
  readonly maximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#minimum QuicksightTopic#minimum}
  */
  readonly minimum?: string;
}

export function quicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantToTerraform(struct?: QuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstant | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    maximum: cdktn.stringToTerraform(struct!.maximum),
    minimum: cdktn.stringToTerraform(struct!.minimum),
  }
}


export function quicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantToHclTerraform(struct?: QuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstant | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    maximum: {
      value: cdktn.stringToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum: {
      value: cdktn.stringToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstant | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstant | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximum = undefined;
      this._minimum = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximum = value.maximum;
      this._minimum = value.minimum;
    }
  }

  // maximum - computed: true, optional: true, required: false
  private _maximum?: string; 
  public get maximum() {
    return this.getStringAttribute('maximum');
  }
  public set maximum(value: string) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // minimum - computed: true, optional: true, required: false
  private _minimum?: string; 
  public get minimum() {
    return this.getStringAttribute('minimum');
  }
  public set minimum(value: string) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }
}
export interface QuicksightTopicDataSetsFiltersDateRangeFilterConstant {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#constant_type QuicksightTopic#constant_type}
  */
  readonly constantType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#range_constant QuicksightTopic#range_constant}
  */
  readonly rangeConstant?: QuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstant;
}

export function quicksightTopicDataSetsFiltersDateRangeFilterConstantToTerraform(struct?: QuicksightTopicDataSetsFiltersDateRangeFilterConstant | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    constant_type: cdktn.stringToTerraform(struct!.constantType),
    range_constant: quicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantToTerraform(struct!.rangeConstant),
  }
}


export function quicksightTopicDataSetsFiltersDateRangeFilterConstantToHclTerraform(struct?: QuicksightTopicDataSetsFiltersDateRangeFilterConstant | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    constant_type: {
      value: cdktn.stringToHclTerraform(struct!.constantType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_constant: {
      value: quicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantToHclTerraform(struct!.rangeConstant),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstant",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightTopicDataSetsFiltersDateRangeFilterConstant | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constantType !== undefined) {
      hasAnyValues = true;
      internalValueResult.constantType = this._constantType;
    }
    if (this._rangeConstant?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeConstant = this._rangeConstant?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTopicDataSetsFiltersDateRangeFilterConstant | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._constantType = undefined;
      this._rangeConstant.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._constantType = value.constantType;
      this._rangeConstant.internalValue = value.rangeConstant;
    }
  }

  // constant_type - computed: true, optional: true, required: false
  private _constantType?: string; 
  public get constantType() {
    return this.getStringAttribute('constant_type');
  }
  public set constantType(value: string) {
    this._constantType = value;
  }
  public resetConstantType() {
    this._constantType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantTypeInput() {
    return this._constantType;
  }

  // range_constant - computed: true, optional: true, required: false
  private _rangeConstant = new QuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference(this, "range_constant");
  public get rangeConstant() {
    return this._rangeConstant;
  }
  public putRangeConstant(value: QuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstant) {
    this._rangeConstant.internalValue = value;
  }
  public resetRangeConstant() {
    this._rangeConstant.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeConstantInput() {
    return this._rangeConstant.internalValue;
  }
}
export interface QuicksightTopicDataSetsFiltersDateRangeFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#constant QuicksightTopic#constant}
  */
  readonly constant?: QuicksightTopicDataSetsFiltersDateRangeFilterConstant;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#inclusive QuicksightTopic#inclusive}
  */
  readonly inclusive?: boolean | cdktn.IResolvable;
}

export function quicksightTopicDataSetsFiltersDateRangeFilterToTerraform(struct?: QuicksightTopicDataSetsFiltersDateRangeFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    constant: quicksightTopicDataSetsFiltersDateRangeFilterConstantToTerraform(struct!.constant),
    inclusive: cdktn.booleanToTerraform(struct!.inclusive),
  }
}


export function quicksightTopicDataSetsFiltersDateRangeFilterToHclTerraform(struct?: QuicksightTopicDataSetsFiltersDateRangeFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    constant: {
      value: quicksightTopicDataSetsFiltersDateRangeFilterConstantToHclTerraform(struct!.constant),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightTopicDataSetsFiltersDateRangeFilterConstant",
    },
    inclusive: {
      value: cdktn.booleanToHclTerraform(struct!.inclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTopicDataSetsFiltersDateRangeFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightTopicDataSetsFiltersDateRangeFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constant?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.constant = this._constant?.internalValue;
    }
    if (this._inclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusive = this._inclusive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTopicDataSetsFiltersDateRangeFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._constant.internalValue = undefined;
      this._inclusive = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._constant.internalValue = value.constant;
      this._inclusive = value.inclusive;
    }
  }

  // constant - computed: true, optional: true, required: false
  private _constant = new QuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference(this, "constant");
  public get constant() {
    return this._constant;
  }
  public putConstant(value: QuicksightTopicDataSetsFiltersDateRangeFilterConstant) {
    this._constant.internalValue = value;
  }
  public resetConstant() {
    this._constant.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantInput() {
    return this._constant.internalValue;
  }

  // inclusive - computed: true, optional: true, required: false
  private _inclusive?: boolean | cdktn.IResolvable; 
  public get inclusive() {
    return this.getBooleanAttribute('inclusive');
  }
  public set inclusive(value: boolean | cdktn.IResolvable) {
    this._inclusive = value;
  }
  public resetInclusive() {
    this._inclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusiveInput() {
    return this._inclusive;
  }
}
export interface QuicksightTopicDataSetsFiltersNumericEqualityFilterConstant {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#constant_type QuicksightTopic#constant_type}
  */
  readonly constantType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#singular_constant QuicksightTopic#singular_constant}
  */
  readonly singularConstant?: string;
}

export function quicksightTopicDataSetsFiltersNumericEqualityFilterConstantToTerraform(struct?: QuicksightTopicDataSetsFiltersNumericEqualityFilterConstant | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    constant_type: cdktn.stringToTerraform(struct!.constantType),
    singular_constant: cdktn.stringToTerraform(struct!.singularConstant),
  }
}


export function quicksightTopicDataSetsFiltersNumericEqualityFilterConstantToHclTerraform(struct?: QuicksightTopicDataSetsFiltersNumericEqualityFilterConstant | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    constant_type: {
      value: cdktn.stringToHclTerraform(struct!.constantType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    singular_constant: {
      value: cdktn.stringToHclTerraform(struct!.singularConstant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightTopicDataSetsFiltersNumericEqualityFilterConstant | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constantType !== undefined) {
      hasAnyValues = true;
      internalValueResult.constantType = this._constantType;
    }
    if (this._singularConstant !== undefined) {
      hasAnyValues = true;
      internalValueResult.singularConstant = this._singularConstant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTopicDataSetsFiltersNumericEqualityFilterConstant | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._constantType = undefined;
      this._singularConstant = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._constantType = value.constantType;
      this._singularConstant = value.singularConstant;
    }
  }

  // constant_type - computed: true, optional: true, required: false
  private _constantType?: string; 
  public get constantType() {
    return this.getStringAttribute('constant_type');
  }
  public set constantType(value: string) {
    this._constantType = value;
  }
  public resetConstantType() {
    this._constantType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantTypeInput() {
    return this._constantType;
  }

  // singular_constant - computed: true, optional: true, required: false
  private _singularConstant?: string; 
  public get singularConstant() {
    return this.getStringAttribute('singular_constant');
  }
  public set singularConstant(value: string) {
    this._singularConstant = value;
  }
  public resetSingularConstant() {
    this._singularConstant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singularConstantInput() {
    return this._singularConstant;
  }
}
export interface QuicksightTopicDataSetsFiltersNumericEqualityFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#aggregation QuicksightTopic#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#constant QuicksightTopic#constant}
  */
  readonly constant?: QuicksightTopicDataSetsFiltersNumericEqualityFilterConstant;
}

export function quicksightTopicDataSetsFiltersNumericEqualityFilterToTerraform(struct?: QuicksightTopicDataSetsFiltersNumericEqualityFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    constant: quicksightTopicDataSetsFiltersNumericEqualityFilterConstantToTerraform(struct!.constant),
  }
}


export function quicksightTopicDataSetsFiltersNumericEqualityFilterToHclTerraform(struct?: QuicksightTopicDataSetsFiltersNumericEqualityFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aggregation: {
      value: cdktn.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    constant: {
      value: quicksightTopicDataSetsFiltersNumericEqualityFilterConstantToHclTerraform(struct!.constant),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightTopicDataSetsFiltersNumericEqualityFilterConstant",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightTopicDataSetsFiltersNumericEqualityFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._constant?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.constant = this._constant?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTopicDataSetsFiltersNumericEqualityFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._constant.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._constant.internalValue = value.constant;
    }
  }

  // aggregation - computed: true, optional: true, required: false
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  public resetAggregation() {
    this._aggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // constant - computed: true, optional: true, required: false
  private _constant = new QuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference(this, "constant");
  public get constant() {
    return this._constant;
  }
  public putConstant(value: QuicksightTopicDataSetsFiltersNumericEqualityFilterConstant) {
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
export interface QuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstant {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#maximum QuicksightTopic#maximum}
  */
  readonly maximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#minimum QuicksightTopic#minimum}
  */
  readonly minimum?: string;
}

export function quicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantToTerraform(struct?: QuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstant | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    maximum: cdktn.stringToTerraform(struct!.maximum),
    minimum: cdktn.stringToTerraform(struct!.minimum),
  }
}


export function quicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantToHclTerraform(struct?: QuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstant | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    maximum: {
      value: cdktn.stringToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum: {
      value: cdktn.stringToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstant | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstant | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximum = undefined;
      this._minimum = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximum = value.maximum;
      this._minimum = value.minimum;
    }
  }

  // maximum - computed: true, optional: true, required: false
  private _maximum?: string; 
  public get maximum() {
    return this.getStringAttribute('maximum');
  }
  public set maximum(value: string) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // minimum - computed: true, optional: true, required: false
  private _minimum?: string; 
  public get minimum() {
    return this.getStringAttribute('minimum');
  }
  public set minimum(value: string) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }
}
export interface QuicksightTopicDataSetsFiltersNumericRangeFilterConstant {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#constant_type QuicksightTopic#constant_type}
  */
  readonly constantType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#range_constant QuicksightTopic#range_constant}
  */
  readonly rangeConstant?: QuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstant;
}

export function quicksightTopicDataSetsFiltersNumericRangeFilterConstantToTerraform(struct?: QuicksightTopicDataSetsFiltersNumericRangeFilterConstant | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    constant_type: cdktn.stringToTerraform(struct!.constantType),
    range_constant: quicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantToTerraform(struct!.rangeConstant),
  }
}


export function quicksightTopicDataSetsFiltersNumericRangeFilterConstantToHclTerraform(struct?: QuicksightTopicDataSetsFiltersNumericRangeFilterConstant | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    constant_type: {
      value: cdktn.stringToHclTerraform(struct!.constantType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_constant: {
      value: quicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantToHclTerraform(struct!.rangeConstant),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstant",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightTopicDataSetsFiltersNumericRangeFilterConstant | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constantType !== undefined) {
      hasAnyValues = true;
      internalValueResult.constantType = this._constantType;
    }
    if (this._rangeConstant?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeConstant = this._rangeConstant?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTopicDataSetsFiltersNumericRangeFilterConstant | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._constantType = undefined;
      this._rangeConstant.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._constantType = value.constantType;
      this._rangeConstant.internalValue = value.rangeConstant;
    }
  }

  // constant_type - computed: true, optional: true, required: false
  private _constantType?: string; 
  public get constantType() {
    return this.getStringAttribute('constant_type');
  }
  public set constantType(value: string) {
    this._constantType = value;
  }
  public resetConstantType() {
    this._constantType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantTypeInput() {
    return this._constantType;
  }

  // range_constant - computed: true, optional: true, required: false
  private _rangeConstant = new QuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference(this, "range_constant");
  public get rangeConstant() {
    return this._rangeConstant;
  }
  public putRangeConstant(value: QuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstant) {
    this._rangeConstant.internalValue = value;
  }
  public resetRangeConstant() {
    this._rangeConstant.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeConstantInput() {
    return this._rangeConstant.internalValue;
  }
}
export interface QuicksightTopicDataSetsFiltersNumericRangeFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#aggregation QuicksightTopic#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#constant QuicksightTopic#constant}
  */
  readonly constant?: QuicksightTopicDataSetsFiltersNumericRangeFilterConstant;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#inclusive QuicksightTopic#inclusive}
  */
  readonly inclusive?: boolean | cdktn.IResolvable;
}

export function quicksightTopicDataSetsFiltersNumericRangeFilterToTerraform(struct?: QuicksightTopicDataSetsFiltersNumericRangeFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    constant: quicksightTopicDataSetsFiltersNumericRangeFilterConstantToTerraform(struct!.constant),
    inclusive: cdktn.booleanToTerraform(struct!.inclusive),
  }
}


export function quicksightTopicDataSetsFiltersNumericRangeFilterToHclTerraform(struct?: QuicksightTopicDataSetsFiltersNumericRangeFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aggregation: {
      value: cdktn.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    constant: {
      value: quicksightTopicDataSetsFiltersNumericRangeFilterConstantToHclTerraform(struct!.constant),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightTopicDataSetsFiltersNumericRangeFilterConstant",
    },
    inclusive: {
      value: cdktn.booleanToHclTerraform(struct!.inclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightTopicDataSetsFiltersNumericRangeFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._constant?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.constant = this._constant?.internalValue;
    }
    if (this._inclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusive = this._inclusive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTopicDataSetsFiltersNumericRangeFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._constant.internalValue = undefined;
      this._inclusive = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._constant.internalValue = value.constant;
      this._inclusive = value.inclusive;
    }
  }

  // aggregation - computed: true, optional: true, required: false
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  public resetAggregation() {
    this._aggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // constant - computed: true, optional: true, required: false
  private _constant = new QuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference(this, "constant");
  public get constant() {
    return this._constant;
  }
  public putConstant(value: QuicksightTopicDataSetsFiltersNumericRangeFilterConstant) {
    this._constant.internalValue = value;
  }
  public resetConstant() {
    this._constant.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantInput() {
    return this._constant.internalValue;
  }

  // inclusive - computed: true, optional: true, required: false
  private _inclusive?: boolean | cdktn.IResolvable; 
  public get inclusive() {
    return this.getBooleanAttribute('inclusive');
  }
  public set inclusive(value: boolean | cdktn.IResolvable) {
    this._inclusive = value;
  }
  public resetInclusive() {
    this._inclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusiveInput() {
    return this._inclusive;
  }
}
export interface QuicksightTopicDataSetsFiltersRelativeDateFilterConstant {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#constant_type QuicksightTopic#constant_type}
  */
  readonly constantType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#singular_constant QuicksightTopic#singular_constant}
  */
  readonly singularConstant?: string;
}

export function quicksightTopicDataSetsFiltersRelativeDateFilterConstantToTerraform(struct?: QuicksightTopicDataSetsFiltersRelativeDateFilterConstant | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    constant_type: cdktn.stringToTerraform(struct!.constantType),
    singular_constant: cdktn.stringToTerraform(struct!.singularConstant),
  }
}


export function quicksightTopicDataSetsFiltersRelativeDateFilterConstantToHclTerraform(struct?: QuicksightTopicDataSetsFiltersRelativeDateFilterConstant | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    constant_type: {
      value: cdktn.stringToHclTerraform(struct!.constantType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    singular_constant: {
      value: cdktn.stringToHclTerraform(struct!.singularConstant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightTopicDataSetsFiltersRelativeDateFilterConstant | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constantType !== undefined) {
      hasAnyValues = true;
      internalValueResult.constantType = this._constantType;
    }
    if (this._singularConstant !== undefined) {
      hasAnyValues = true;
      internalValueResult.singularConstant = this._singularConstant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTopicDataSetsFiltersRelativeDateFilterConstant | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._constantType = undefined;
      this._singularConstant = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._constantType = value.constantType;
      this._singularConstant = value.singularConstant;
    }
  }

  // constant_type - computed: true, optional: true, required: false
  private _constantType?: string; 
  public get constantType() {
    return this.getStringAttribute('constant_type');
  }
  public set constantType(value: string) {
    this._constantType = value;
  }
  public resetConstantType() {
    this._constantType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantTypeInput() {
    return this._constantType;
  }

  // singular_constant - computed: true, optional: true, required: false
  private _singularConstant?: string; 
  public get singularConstant() {
    return this.getStringAttribute('singular_constant');
  }
  public set singularConstant(value: string) {
    this._singularConstant = value;
  }
  public resetSingularConstant() {
    this._singularConstant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singularConstantInput() {
    return this._singularConstant;
  }
}
export interface QuicksightTopicDataSetsFiltersRelativeDateFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#constant QuicksightTopic#constant}
  */
  readonly constant?: QuicksightTopicDataSetsFiltersRelativeDateFilterConstant;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#relative_date_filter_function QuicksightTopic#relative_date_filter_function}
  */
  readonly relativeDateFilterFunction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#time_granularity QuicksightTopic#time_granularity}
  */
  readonly timeGranularity?: string;
}

export function quicksightTopicDataSetsFiltersRelativeDateFilterToTerraform(struct?: QuicksightTopicDataSetsFiltersRelativeDateFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    constant: quicksightTopicDataSetsFiltersRelativeDateFilterConstantToTerraform(struct!.constant),
    relative_date_filter_function: cdktn.stringToTerraform(struct!.relativeDateFilterFunction),
    time_granularity: cdktn.stringToTerraform(struct!.timeGranularity),
  }
}


export function quicksightTopicDataSetsFiltersRelativeDateFilterToHclTerraform(struct?: QuicksightTopicDataSetsFiltersRelativeDateFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    constant: {
      value: quicksightTopicDataSetsFiltersRelativeDateFilterConstantToHclTerraform(struct!.constant),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightTopicDataSetsFiltersRelativeDateFilterConstant",
    },
    relative_date_filter_function: {
      value: cdktn.stringToHclTerraform(struct!.relativeDateFilterFunction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_granularity: {
      value: cdktn.stringToHclTerraform(struct!.timeGranularity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightTopicDataSetsFiltersRelativeDateFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constant?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.constant = this._constant?.internalValue;
    }
    if (this._relativeDateFilterFunction !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeDateFilterFunction = this._relativeDateFilterFunction;
    }
    if (this._timeGranularity !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeGranularity = this._timeGranularity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTopicDataSetsFiltersRelativeDateFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._constant.internalValue = undefined;
      this._relativeDateFilterFunction = undefined;
      this._timeGranularity = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._constant.internalValue = value.constant;
      this._relativeDateFilterFunction = value.relativeDateFilterFunction;
      this._timeGranularity = value.timeGranularity;
    }
  }

  // constant - computed: true, optional: true, required: false
  private _constant = new QuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference(this, "constant");
  public get constant() {
    return this._constant;
  }
  public putConstant(value: QuicksightTopicDataSetsFiltersRelativeDateFilterConstant) {
    this._constant.internalValue = value;
  }
  public resetConstant() {
    this._constant.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantInput() {
    return this._constant.internalValue;
  }

  // relative_date_filter_function - computed: true, optional: true, required: false
  private _relativeDateFilterFunction?: string; 
  public get relativeDateFilterFunction() {
    return this.getStringAttribute('relative_date_filter_function');
  }
  public set relativeDateFilterFunction(value: string) {
    this._relativeDateFilterFunction = value;
  }
  public resetRelativeDateFilterFunction() {
    this._relativeDateFilterFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeDateFilterFunctionInput() {
    return this._relativeDateFilterFunction;
  }

  // time_granularity - computed: true, optional: true, required: false
  private _timeGranularity?: string; 
  public get timeGranularity() {
    return this.getStringAttribute('time_granularity');
  }
  public set timeGranularity(value: string) {
    this._timeGranularity = value;
  }
  public resetTimeGranularity() {
    this._timeGranularity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeGranularityInput() {
    return this._timeGranularity;
  }
}
export interface QuicksightTopicDataSetsFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#category_filter QuicksightTopic#category_filter}
  */
  readonly categoryFilter?: QuicksightTopicDataSetsFiltersCategoryFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#date_range_filter QuicksightTopic#date_range_filter}
  */
  readonly dateRangeFilter?: QuicksightTopicDataSetsFiltersDateRangeFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#filter_class QuicksightTopic#filter_class}
  */
  readonly filterClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#filter_description QuicksightTopic#filter_description}
  */
  readonly filterDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#filter_name QuicksightTopic#filter_name}
  */
  readonly filterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#filter_synonyms QuicksightTopic#filter_synonyms}
  */
  readonly filterSynonyms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#filter_type QuicksightTopic#filter_type}
  */
  readonly filterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#numeric_equality_filter QuicksightTopic#numeric_equality_filter}
  */
  readonly numericEqualityFilter?: QuicksightTopicDataSetsFiltersNumericEqualityFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#numeric_range_filter QuicksightTopic#numeric_range_filter}
  */
  readonly numericRangeFilter?: QuicksightTopicDataSetsFiltersNumericRangeFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#operand_field_name QuicksightTopic#operand_field_name}
  */
  readonly operandFieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#relative_date_filter QuicksightTopic#relative_date_filter}
  */
  readonly relativeDateFilter?: QuicksightTopicDataSetsFiltersRelativeDateFilter;
}

export function quicksightTopicDataSetsFiltersToTerraform(struct?: QuicksightTopicDataSetsFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    category_filter: quicksightTopicDataSetsFiltersCategoryFilterToTerraform(struct!.categoryFilter),
    date_range_filter: quicksightTopicDataSetsFiltersDateRangeFilterToTerraform(struct!.dateRangeFilter),
    filter_class: cdktn.stringToTerraform(struct!.filterClass),
    filter_description: cdktn.stringToTerraform(struct!.filterDescription),
    filter_name: cdktn.stringToTerraform(struct!.filterName),
    filter_synonyms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.filterSynonyms),
    filter_type: cdktn.stringToTerraform(struct!.filterType),
    numeric_equality_filter: quicksightTopicDataSetsFiltersNumericEqualityFilterToTerraform(struct!.numericEqualityFilter),
    numeric_range_filter: quicksightTopicDataSetsFiltersNumericRangeFilterToTerraform(struct!.numericRangeFilter),
    operand_field_name: cdktn.stringToTerraform(struct!.operandFieldName),
    relative_date_filter: quicksightTopicDataSetsFiltersRelativeDateFilterToTerraform(struct!.relativeDateFilter),
  }
}


export function quicksightTopicDataSetsFiltersToHclTerraform(struct?: QuicksightTopicDataSetsFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    category_filter: {
      value: quicksightTopicDataSetsFiltersCategoryFilterToHclTerraform(struct!.categoryFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightTopicDataSetsFiltersCategoryFilter",
    },
    date_range_filter: {
      value: quicksightTopicDataSetsFiltersDateRangeFilterToHclTerraform(struct!.dateRangeFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightTopicDataSetsFiltersDateRangeFilter",
    },
    filter_class: {
      value: cdktn.stringToHclTerraform(struct!.filterClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_description: {
      value: cdktn.stringToHclTerraform(struct!.filterDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_name: {
      value: cdktn.stringToHclTerraform(struct!.filterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_synonyms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.filterSynonyms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filter_type: {
      value: cdktn.stringToHclTerraform(struct!.filterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    numeric_equality_filter: {
      value: quicksightTopicDataSetsFiltersNumericEqualityFilterToHclTerraform(struct!.numericEqualityFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightTopicDataSetsFiltersNumericEqualityFilter",
    },
    numeric_range_filter: {
      value: quicksightTopicDataSetsFiltersNumericRangeFilterToHclTerraform(struct!.numericRangeFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightTopicDataSetsFiltersNumericRangeFilter",
    },
    operand_field_name: {
      value: cdktn.stringToHclTerraform(struct!.operandFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relative_date_filter: {
      value: quicksightTopicDataSetsFiltersRelativeDateFilterToHclTerraform(struct!.relativeDateFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightTopicDataSetsFiltersRelativeDateFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTopicDataSetsFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightTopicDataSetsFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categoryFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryFilter = this._categoryFilter?.internalValue;
    }
    if (this._dateRangeFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateRangeFilter = this._dateRangeFilter?.internalValue;
    }
    if (this._filterClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterClass = this._filterClass;
    }
    if (this._filterDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterDescription = this._filterDescription;
    }
    if (this._filterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterName = this._filterName;
    }
    if (this._filterSynonyms !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterSynonyms = this._filterSynonyms;
    }
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    if (this._numericEqualityFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numericEqualityFilter = this._numericEqualityFilter?.internalValue;
    }
    if (this._numericRangeFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numericRangeFilter = this._numericRangeFilter?.internalValue;
    }
    if (this._operandFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.operandFieldName = this._operandFieldName;
    }
    if (this._relativeDateFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeDateFilter = this._relativeDateFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTopicDataSetsFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._categoryFilter.internalValue = undefined;
      this._dateRangeFilter.internalValue = undefined;
      this._filterClass = undefined;
      this._filterDescription = undefined;
      this._filterName = undefined;
      this._filterSynonyms = undefined;
      this._filterType = undefined;
      this._numericEqualityFilter.internalValue = undefined;
      this._numericRangeFilter.internalValue = undefined;
      this._operandFieldName = undefined;
      this._relativeDateFilter.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._categoryFilter.internalValue = value.categoryFilter;
      this._dateRangeFilter.internalValue = value.dateRangeFilter;
      this._filterClass = value.filterClass;
      this._filterDescription = value.filterDescription;
      this._filterName = value.filterName;
      this._filterSynonyms = value.filterSynonyms;
      this._filterType = value.filterType;
      this._numericEqualityFilter.internalValue = value.numericEqualityFilter;
      this._numericRangeFilter.internalValue = value.numericRangeFilter;
      this._operandFieldName = value.operandFieldName;
      this._relativeDateFilter.internalValue = value.relativeDateFilter;
    }
  }

  // category_filter - computed: true, optional: true, required: false
  private _categoryFilter = new QuicksightTopicDataSetsFiltersCategoryFilterOutputReference(this, "category_filter");
  public get categoryFilter() {
    return this._categoryFilter;
  }
  public putCategoryFilter(value: QuicksightTopicDataSetsFiltersCategoryFilter) {
    this._categoryFilter.internalValue = value;
  }
  public resetCategoryFilter() {
    this._categoryFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryFilterInput() {
    return this._categoryFilter.internalValue;
  }

  // date_range_filter - computed: true, optional: true, required: false
  private _dateRangeFilter = new QuicksightTopicDataSetsFiltersDateRangeFilterOutputReference(this, "date_range_filter");
  public get dateRangeFilter() {
    return this._dateRangeFilter;
  }
  public putDateRangeFilter(value: QuicksightTopicDataSetsFiltersDateRangeFilter) {
    this._dateRangeFilter.internalValue = value;
  }
  public resetDateRangeFilter() {
    this._dateRangeFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateRangeFilterInput() {
    return this._dateRangeFilter.internalValue;
  }

  // filter_class - computed: true, optional: true, required: false
  private _filterClass?: string; 
  public get filterClass() {
    return this.getStringAttribute('filter_class');
  }
  public set filterClass(value: string) {
    this._filterClass = value;
  }
  public resetFilterClass() {
    this._filterClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterClassInput() {
    return this._filterClass;
  }

  // filter_description - computed: true, optional: true, required: false
  private _filterDescription?: string; 
  public get filterDescription() {
    return this.getStringAttribute('filter_description');
  }
  public set filterDescription(value: string) {
    this._filterDescription = value;
  }
  public resetFilterDescription() {
    this._filterDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterDescriptionInput() {
    return this._filterDescription;
  }

  // filter_name - computed: true, optional: true, required: false
  private _filterName?: string; 
  public get filterName() {
    return this.getStringAttribute('filter_name');
  }
  public set filterName(value: string) {
    this._filterName = value;
  }
  public resetFilterName() {
    this._filterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterNameInput() {
    return this._filterName;
  }

  // filter_synonyms - computed: true, optional: true, required: false
  private _filterSynonyms?: string[]; 
  public get filterSynonyms() {
    return this.getListAttribute('filter_synonyms');
  }
  public set filterSynonyms(value: string[]) {
    this._filterSynonyms = value;
  }
  public resetFilterSynonyms() {
    this._filterSynonyms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSynonymsInput() {
    return this._filterSynonyms;
  }

  // filter_type - computed: true, optional: true, required: false
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  public resetFilterType() {
    this._filterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }

  // numeric_equality_filter - computed: true, optional: true, required: false
  private _numericEqualityFilter = new QuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference(this, "numeric_equality_filter");
  public get numericEqualityFilter() {
    return this._numericEqualityFilter;
  }
  public putNumericEqualityFilter(value: QuicksightTopicDataSetsFiltersNumericEqualityFilter) {
    this._numericEqualityFilter.internalValue = value;
  }
  public resetNumericEqualityFilter() {
    this._numericEqualityFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numericEqualityFilterInput() {
    return this._numericEqualityFilter.internalValue;
  }

  // numeric_range_filter - computed: true, optional: true, required: false
  private _numericRangeFilter = new QuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference(this, "numeric_range_filter");
  public get numericRangeFilter() {
    return this._numericRangeFilter;
  }
  public putNumericRangeFilter(value: QuicksightTopicDataSetsFiltersNumericRangeFilter) {
    this._numericRangeFilter.internalValue = value;
  }
  public resetNumericRangeFilter() {
    this._numericRangeFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numericRangeFilterInput() {
    return this._numericRangeFilter.internalValue;
  }

  // operand_field_name - computed: true, optional: true, required: false
  private _operandFieldName?: string; 
  public get operandFieldName() {
    return this.getStringAttribute('operand_field_name');
  }
  public set operandFieldName(value: string) {
    this._operandFieldName = value;
  }
  public resetOperandFieldName() {
    this._operandFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operandFieldNameInput() {
    return this._operandFieldName;
  }

  // relative_date_filter - computed: true, optional: true, required: false
  private _relativeDateFilter = new QuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference(this, "relative_date_filter");
  public get relativeDateFilter() {
    return this._relativeDateFilter;
  }
  public putRelativeDateFilter(value: QuicksightTopicDataSetsFiltersRelativeDateFilter) {
    this._relativeDateFilter.internalValue = value;
  }
  public resetRelativeDateFilter() {
    this._relativeDateFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeDateFilterInput() {
    return this._relativeDateFilter.internalValue;
  }
}

export class QuicksightTopicDataSetsFiltersList extends cdktn.ComplexList {
  public internalValue? : QuicksightTopicDataSetsFilters[] | cdktn.IResolvable

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
  public get(index: number): QuicksightTopicDataSetsFiltersOutputReference {
    return new QuicksightTopicDataSetsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTopicDataSetsNamedEntitiesDefinitionMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#aggregation QuicksightTopic#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#aggregation_function_parameters QuicksightTopic#aggregation_function_parameters}
  */
  readonly aggregationFunctionParameters?: { [key: string]: string };
}

export function quicksightTopicDataSetsNamedEntitiesDefinitionMetricToTerraform(struct?: QuicksightTopicDataSetsNamedEntitiesDefinitionMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation: cdktn.stringToTerraform(struct!.aggregation),
    aggregation_function_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.aggregationFunctionParameters),
  }
}


export function quicksightTopicDataSetsNamedEntitiesDefinitionMetricToHclTerraform(struct?: QuicksightTopicDataSetsNamedEntitiesDefinitionMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aggregation: {
      value: cdktn.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aggregation_function_parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.aggregationFunctionParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightTopicDataSetsNamedEntitiesDefinitionMetric | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._aggregationFunctionParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationFunctionParameters = this._aggregationFunctionParameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTopicDataSetsNamedEntitiesDefinitionMetric | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._aggregationFunctionParameters = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._aggregationFunctionParameters = value.aggregationFunctionParameters;
    }
  }

  // aggregation - computed: true, optional: true, required: false
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  public resetAggregation() {
    this._aggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // aggregation_function_parameters - computed: true, optional: true, required: false
  private _aggregationFunctionParameters?: { [key: string]: string }; 
  public get aggregationFunctionParameters() {
    return this.getStringMapAttribute('aggregation_function_parameters');
  }
  public set aggregationFunctionParameters(value: { [key: string]: string }) {
    this._aggregationFunctionParameters = value;
  }
  public resetAggregationFunctionParameters() {
    this._aggregationFunctionParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationFunctionParametersInput() {
    return this._aggregationFunctionParameters;
  }
}
export interface QuicksightTopicDataSetsNamedEntitiesDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#field_name QuicksightTopic#field_name}
  */
  readonly fieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#metric QuicksightTopic#metric}
  */
  readonly metric?: QuicksightTopicDataSetsNamedEntitiesDefinitionMetric;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#property_name QuicksightTopic#property_name}
  */
  readonly propertyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#property_role QuicksightTopic#property_role}
  */
  readonly propertyRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#property_usage QuicksightTopic#property_usage}
  */
  readonly propertyUsage?: string;
}

export function quicksightTopicDataSetsNamedEntitiesDefinitionToTerraform(struct?: QuicksightTopicDataSetsNamedEntitiesDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field_name: cdktn.stringToTerraform(struct!.fieldName),
    metric: quicksightTopicDataSetsNamedEntitiesDefinitionMetricToTerraform(struct!.metric),
    property_name: cdktn.stringToTerraform(struct!.propertyName),
    property_role: cdktn.stringToTerraform(struct!.propertyRole),
    property_usage: cdktn.stringToTerraform(struct!.propertyUsage),
  }
}


export function quicksightTopicDataSetsNamedEntitiesDefinitionToHclTerraform(struct?: QuicksightTopicDataSetsNamedEntitiesDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field_name: {
      value: cdktn.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: quicksightTopicDataSetsNamedEntitiesDefinitionMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightTopicDataSetsNamedEntitiesDefinitionMetric",
    },
    property_name: {
      value: cdktn.stringToHclTerraform(struct!.propertyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_role: {
      value: cdktn.stringToHclTerraform(struct!.propertyRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_usage: {
      value: cdktn.stringToHclTerraform(struct!.propertyUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightTopicDataSetsNamedEntitiesDefinition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._propertyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyName = this._propertyName;
    }
    if (this._propertyRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyRole = this._propertyRole;
    }
    if (this._propertyUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyUsage = this._propertyUsage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTopicDataSetsNamedEntitiesDefinition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldName = undefined;
      this._metric.internalValue = undefined;
      this._propertyName = undefined;
      this._propertyRole = undefined;
      this._propertyUsage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldName = value.fieldName;
      this._metric.internalValue = value.metric;
      this._propertyName = value.propertyName;
      this._propertyRole = value.propertyRole;
      this._propertyUsage = value.propertyUsage;
    }
  }

  // field_name - computed: true, optional: true, required: false
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  public resetFieldName() {
    this._fieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // metric - computed: true, optional: true, required: false
  private _metric = new QuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: QuicksightTopicDataSetsNamedEntitiesDefinitionMetric) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // property_name - computed: true, optional: true, required: false
  private _propertyName?: string; 
  public get propertyName() {
    return this.getStringAttribute('property_name');
  }
  public set propertyName(value: string) {
    this._propertyName = value;
  }
  public resetPropertyName() {
    this._propertyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyNameInput() {
    return this._propertyName;
  }

  // property_role - computed: true, optional: true, required: false
  private _propertyRole?: string; 
  public get propertyRole() {
    return this.getStringAttribute('property_role');
  }
  public set propertyRole(value: string) {
    this._propertyRole = value;
  }
  public resetPropertyRole() {
    this._propertyRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyRoleInput() {
    return this._propertyRole;
  }

  // property_usage - computed: true, optional: true, required: false
  private _propertyUsage?: string; 
  public get propertyUsage() {
    return this.getStringAttribute('property_usage');
  }
  public set propertyUsage(value: string) {
    this._propertyUsage = value;
  }
  public resetPropertyUsage() {
    this._propertyUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyUsageInput() {
    return this._propertyUsage;
  }
}

export class QuicksightTopicDataSetsNamedEntitiesDefinitionList extends cdktn.ComplexList {
  public internalValue? : QuicksightTopicDataSetsNamedEntitiesDefinition[] | cdktn.IResolvable

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
  public get(index: number): QuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference {
    return new QuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTopicDataSetsNamedEntitiesSemanticEntityType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#sub_type_name QuicksightTopic#sub_type_name}
  */
  readonly subTypeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#type_name QuicksightTopic#type_name}
  */
  readonly typeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#type_parameters QuicksightTopic#type_parameters}
  */
  readonly typeParameters?: { [key: string]: string };
}

export function quicksightTopicDataSetsNamedEntitiesSemanticEntityTypeToTerraform(struct?: QuicksightTopicDataSetsNamedEntitiesSemanticEntityType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sub_type_name: cdktn.stringToTerraform(struct!.subTypeName),
    type_name: cdktn.stringToTerraform(struct!.typeName),
    type_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.typeParameters),
  }
}


export function quicksightTopicDataSetsNamedEntitiesSemanticEntityTypeToHclTerraform(struct?: QuicksightTopicDataSetsNamedEntitiesSemanticEntityType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sub_type_name: {
      value: cdktn.stringToHclTerraform(struct!.subTypeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_name: {
      value: cdktn.stringToHclTerraform(struct!.typeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.typeParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightTopicDataSetsNamedEntitiesSemanticEntityType | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subTypeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subTypeName = this._subTypeName;
    }
    if (this._typeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeName = this._typeName;
    }
    if (this._typeParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeParameters = this._typeParameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTopicDataSetsNamedEntitiesSemanticEntityType | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subTypeName = undefined;
      this._typeName = undefined;
      this._typeParameters = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subTypeName = value.subTypeName;
      this._typeName = value.typeName;
      this._typeParameters = value.typeParameters;
    }
  }

  // sub_type_name - computed: true, optional: true, required: false
  private _subTypeName?: string; 
  public get subTypeName() {
    return this.getStringAttribute('sub_type_name');
  }
  public set subTypeName(value: string) {
    this._subTypeName = value;
  }
  public resetSubTypeName() {
    this._subTypeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subTypeNameInput() {
    return this._subTypeName;
  }

  // type_name - computed: true, optional: true, required: false
  private _typeName?: string; 
  public get typeName() {
    return this.getStringAttribute('type_name');
  }
  public set typeName(value: string) {
    this._typeName = value;
  }
  public resetTypeName() {
    this._typeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNameInput() {
    return this._typeName;
  }

  // type_parameters - computed: true, optional: true, required: false
  private _typeParameters?: { [key: string]: string }; 
  public get typeParameters() {
    return this.getStringMapAttribute('type_parameters');
  }
  public set typeParameters(value: { [key: string]: string }) {
    this._typeParameters = value;
  }
  public resetTypeParameters() {
    this._typeParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeParametersInput() {
    return this._typeParameters;
  }
}
export interface QuicksightTopicDataSetsNamedEntities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#definition QuicksightTopic#definition}
  */
  readonly definition?: QuicksightTopicDataSetsNamedEntitiesDefinition[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#entity_description QuicksightTopic#entity_description}
  */
  readonly entityDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#entity_name QuicksightTopic#entity_name}
  */
  readonly entityName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#entity_synonyms QuicksightTopic#entity_synonyms}
  */
  readonly entitySynonyms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#semantic_entity_type QuicksightTopic#semantic_entity_type}
  */
  readonly semanticEntityType?: QuicksightTopicDataSetsNamedEntitiesSemanticEntityType;
}

export function quicksightTopicDataSetsNamedEntitiesToTerraform(struct?: QuicksightTopicDataSetsNamedEntities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    definition: cdktn.listMapper(quicksightTopicDataSetsNamedEntitiesDefinitionToTerraform, false)(struct!.definition),
    entity_description: cdktn.stringToTerraform(struct!.entityDescription),
    entity_name: cdktn.stringToTerraform(struct!.entityName),
    entity_synonyms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.entitySynonyms),
    semantic_entity_type: quicksightTopicDataSetsNamedEntitiesSemanticEntityTypeToTerraform(struct!.semanticEntityType),
  }
}


export function quicksightTopicDataSetsNamedEntitiesToHclTerraform(struct?: QuicksightTopicDataSetsNamedEntities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    definition: {
      value: cdktn.listMapperHcl(quicksightTopicDataSetsNamedEntitiesDefinitionToHclTerraform, false)(struct!.definition),
      isBlock: true,
      type: "list",
      storageClassType: "QuicksightTopicDataSetsNamedEntitiesDefinitionList",
    },
    entity_description: {
      value: cdktn.stringToHclTerraform(struct!.entityDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entity_name: {
      value: cdktn.stringToHclTerraform(struct!.entityName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entity_synonyms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.entitySynonyms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    semantic_entity_type: {
      value: quicksightTopicDataSetsNamedEntitiesSemanticEntityTypeToHclTerraform(struct!.semanticEntityType),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightTopicDataSetsNamedEntitiesSemanticEntityType",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTopicDataSetsNamedEntitiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightTopicDataSetsNamedEntities | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition?.internalValue;
    }
    if (this._entityDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityDescription = this._entityDescription;
    }
    if (this._entityName !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityName = this._entityName;
    }
    if (this._entitySynonyms !== undefined) {
      hasAnyValues = true;
      internalValueResult.entitySynonyms = this._entitySynonyms;
    }
    if (this._semanticEntityType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.semanticEntityType = this._semanticEntityType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTopicDataSetsNamedEntities | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition.internalValue = undefined;
      this._entityDescription = undefined;
      this._entityName = undefined;
      this._entitySynonyms = undefined;
      this._semanticEntityType.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definition.internalValue = value.definition;
      this._entityDescription = value.entityDescription;
      this._entityName = value.entityName;
      this._entitySynonyms = value.entitySynonyms;
      this._semanticEntityType.internalValue = value.semanticEntityType;
    }
  }

  // definition - computed: true, optional: true, required: false
  private _definition = new QuicksightTopicDataSetsNamedEntitiesDefinitionList(this, "definition", false);
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: QuicksightTopicDataSetsNamedEntitiesDefinition[] | cdktn.IResolvable) {
    this._definition.internalValue = value;
  }
  public resetDefinition() {
    this._definition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition.internalValue;
  }

  // entity_description - computed: true, optional: true, required: false
  private _entityDescription?: string; 
  public get entityDescription() {
    return this.getStringAttribute('entity_description');
  }
  public set entityDescription(value: string) {
    this._entityDescription = value;
  }
  public resetEntityDescription() {
    this._entityDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityDescriptionInput() {
    return this._entityDescription;
  }

  // entity_name - computed: true, optional: true, required: false
  private _entityName?: string; 
  public get entityName() {
    return this.getStringAttribute('entity_name');
  }
  public set entityName(value: string) {
    this._entityName = value;
  }
  public resetEntityName() {
    this._entityName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityNameInput() {
    return this._entityName;
  }

  // entity_synonyms - computed: true, optional: true, required: false
  private _entitySynonyms?: string[]; 
  public get entitySynonyms() {
    return this.getListAttribute('entity_synonyms');
  }
  public set entitySynonyms(value: string[]) {
    this._entitySynonyms = value;
  }
  public resetEntitySynonyms() {
    this._entitySynonyms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitySynonymsInput() {
    return this._entitySynonyms;
  }

  // semantic_entity_type - computed: true, optional: true, required: false
  private _semanticEntityType = new QuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference(this, "semantic_entity_type");
  public get semanticEntityType() {
    return this._semanticEntityType;
  }
  public putSemanticEntityType(value: QuicksightTopicDataSetsNamedEntitiesSemanticEntityType) {
    this._semanticEntityType.internalValue = value;
  }
  public resetSemanticEntityType() {
    this._semanticEntityType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get semanticEntityTypeInput() {
    return this._semanticEntityType.internalValue;
  }
}

export class QuicksightTopicDataSetsNamedEntitiesList extends cdktn.ComplexList {
  public internalValue? : QuicksightTopicDataSetsNamedEntities[] | cdktn.IResolvable

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
  public get(index: number): QuicksightTopicDataSetsNamedEntitiesOutputReference {
    return new QuicksightTopicDataSetsNamedEntitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTopicDataSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#calculated_fields QuicksightTopic#calculated_fields}
  */
  readonly calculatedFields?: QuicksightTopicDataSetsCalculatedFields[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#columns QuicksightTopic#columns}
  */
  readonly columns?: QuicksightTopicDataSetsColumns[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#data_aggregation QuicksightTopic#data_aggregation}
  */
  readonly dataAggregation?: QuicksightTopicDataSetsDataAggregation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#dataset_arn QuicksightTopic#dataset_arn}
  */
  readonly datasetArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#dataset_description QuicksightTopic#dataset_description}
  */
  readonly datasetDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#dataset_name QuicksightTopic#dataset_name}
  */
  readonly datasetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#filters QuicksightTopic#filters}
  */
  readonly filters?: QuicksightTopicDataSetsFilters[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#named_entities QuicksightTopic#named_entities}
  */
  readonly namedEntities?: QuicksightTopicDataSetsNamedEntities[] | cdktn.IResolvable;
}

export function quicksightTopicDataSetsToTerraform(struct?: QuicksightTopicDataSets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    calculated_fields: cdktn.listMapper(quicksightTopicDataSetsCalculatedFieldsToTerraform, false)(struct!.calculatedFields),
    columns: cdktn.listMapper(quicksightTopicDataSetsColumnsToTerraform, false)(struct!.columns),
    data_aggregation: quicksightTopicDataSetsDataAggregationToTerraform(struct!.dataAggregation),
    dataset_arn: cdktn.stringToTerraform(struct!.datasetArn),
    dataset_description: cdktn.stringToTerraform(struct!.datasetDescription),
    dataset_name: cdktn.stringToTerraform(struct!.datasetName),
    filters: cdktn.listMapper(quicksightTopicDataSetsFiltersToTerraform, false)(struct!.filters),
    named_entities: cdktn.listMapper(quicksightTopicDataSetsNamedEntitiesToTerraform, false)(struct!.namedEntities),
  }
}


export function quicksightTopicDataSetsToHclTerraform(struct?: QuicksightTopicDataSets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    calculated_fields: {
      value: cdktn.listMapperHcl(quicksightTopicDataSetsCalculatedFieldsToHclTerraform, false)(struct!.calculatedFields),
      isBlock: true,
      type: "list",
      storageClassType: "QuicksightTopicDataSetsCalculatedFieldsList",
    },
    columns: {
      value: cdktn.listMapperHcl(quicksightTopicDataSetsColumnsToHclTerraform, false)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "QuicksightTopicDataSetsColumnsList",
    },
    data_aggregation: {
      value: quicksightTopicDataSetsDataAggregationToHclTerraform(struct!.dataAggregation),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightTopicDataSetsDataAggregation",
    },
    dataset_arn: {
      value: cdktn.stringToHclTerraform(struct!.datasetArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataset_description: {
      value: cdktn.stringToHclTerraform(struct!.datasetDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataset_name: {
      value: cdktn.stringToHclTerraform(struct!.datasetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filters: {
      value: cdktn.listMapperHcl(quicksightTopicDataSetsFiltersToHclTerraform, false)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "QuicksightTopicDataSetsFiltersList",
    },
    named_entities: {
      value: cdktn.listMapperHcl(quicksightTopicDataSetsNamedEntitiesToHclTerraform, false)(struct!.namedEntities),
      isBlock: true,
      type: "list",
      storageClassType: "QuicksightTopicDataSetsNamedEntitiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTopicDataSetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightTopicDataSets | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._calculatedFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.calculatedFields = this._calculatedFields?.internalValue;
    }
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    if (this._dataAggregation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataAggregation = this._dataAggregation?.internalValue;
    }
    if (this._datasetArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetArn = this._datasetArn;
    }
    if (this._datasetDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetDescription = this._datasetDescription;
    }
    if (this._datasetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetName = this._datasetName;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    if (this._namedEntities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namedEntities = this._namedEntities?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTopicDataSets | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._calculatedFields.internalValue = undefined;
      this._columns.internalValue = undefined;
      this._dataAggregation.internalValue = undefined;
      this._datasetArn = undefined;
      this._datasetDescription = undefined;
      this._datasetName = undefined;
      this._filters.internalValue = undefined;
      this._namedEntities.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._calculatedFields.internalValue = value.calculatedFields;
      this._columns.internalValue = value.columns;
      this._dataAggregation.internalValue = value.dataAggregation;
      this._datasetArn = value.datasetArn;
      this._datasetDescription = value.datasetDescription;
      this._datasetName = value.datasetName;
      this._filters.internalValue = value.filters;
      this._namedEntities.internalValue = value.namedEntities;
    }
  }

  // calculated_fields - computed: true, optional: true, required: false
  private _calculatedFields = new QuicksightTopicDataSetsCalculatedFieldsList(this, "calculated_fields", false);
  public get calculatedFields() {
    return this._calculatedFields;
  }
  public putCalculatedFields(value: QuicksightTopicDataSetsCalculatedFields[] | cdktn.IResolvable) {
    this._calculatedFields.internalValue = value;
  }
  public resetCalculatedFields() {
    this._calculatedFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calculatedFieldsInput() {
    return this._calculatedFields.internalValue;
  }

  // columns - computed: true, optional: true, required: false
  private _columns = new QuicksightTopicDataSetsColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: QuicksightTopicDataSetsColumns[] | cdktn.IResolvable) {
    this._columns.internalValue = value;
  }
  public resetColumns() {
    this._columns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }

  // data_aggregation - computed: true, optional: true, required: false
  private _dataAggregation = new QuicksightTopicDataSetsDataAggregationOutputReference(this, "data_aggregation");
  public get dataAggregation() {
    return this._dataAggregation;
  }
  public putDataAggregation(value: QuicksightTopicDataSetsDataAggregation) {
    this._dataAggregation.internalValue = value;
  }
  public resetDataAggregation() {
    this._dataAggregation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataAggregationInput() {
    return this._dataAggregation.internalValue;
  }

  // dataset_arn - computed: true, optional: true, required: false
  private _datasetArn?: string; 
  public get datasetArn() {
    return this.getStringAttribute('dataset_arn');
  }
  public set datasetArn(value: string) {
    this._datasetArn = value;
  }
  public resetDatasetArn() {
    this._datasetArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetArnInput() {
    return this._datasetArn;
  }

  // dataset_description - computed: true, optional: true, required: false
  private _datasetDescription?: string; 
  public get datasetDescription() {
    return this.getStringAttribute('dataset_description');
  }
  public set datasetDescription(value: string) {
    this._datasetDescription = value;
  }
  public resetDatasetDescription() {
    this._datasetDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetDescriptionInput() {
    return this._datasetDescription;
  }

  // dataset_name - computed: true, optional: true, required: false
  private _datasetName?: string; 
  public get datasetName() {
    return this.getStringAttribute('dataset_name');
  }
  public set datasetName(value: string) {
    this._datasetName = value;
  }
  public resetDatasetName() {
    this._datasetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetNameInput() {
    return this._datasetName;
  }

  // filters - computed: true, optional: true, required: false
  private _filters = new QuicksightTopicDataSetsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: QuicksightTopicDataSetsFilters[] | cdktn.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // named_entities - computed: true, optional: true, required: false
  private _namedEntities = new QuicksightTopicDataSetsNamedEntitiesList(this, "named_entities", false);
  public get namedEntities() {
    return this._namedEntities;
  }
  public putNamedEntities(value: QuicksightTopicDataSetsNamedEntities[] | cdktn.IResolvable) {
    this._namedEntities.internalValue = value;
  }
  public resetNamedEntities() {
    this._namedEntities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedEntitiesInput() {
    return this._namedEntities.internalValue;
  }
}

export class QuicksightTopicDataSetsList extends cdktn.ComplexList {
  public internalValue? : QuicksightTopicDataSets[] | cdktn.IResolvable

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
  public get(index: number): QuicksightTopicDataSetsOutputReference {
    return new QuicksightTopicDataSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTopicTags {
  /**
  * <p>Tag key.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#key QuicksightTopic#key}
  */
  readonly key?: string;
  /**
  * <p>Tag value.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#value QuicksightTopic#value}
  */
  readonly value?: string;
}

export function quicksightTopicTagsToTerraform(struct?: QuicksightTopicTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function quicksightTopicTagsToHclTerraform(struct?: QuicksightTopicTags | cdktn.IResolvable): any {
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

export class QuicksightTopicTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightTopicTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: QuicksightTopicTags | cdktn.IResolvable | undefined) {
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

export class QuicksightTopicTagsList extends cdktn.ComplexList {
  public internalValue? : QuicksightTopicTags[] | cdktn.IResolvable

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
  public get(index: number): QuicksightTopicTagsOutputReference {
    return new QuicksightTopicTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic awscc_quicksight_topic}
*/
export class QuicksightTopic extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_quicksight_topic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a QuicksightTopic resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QuicksightTopic to import
  * @param importFromId The id of the existing QuicksightTopic that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QuicksightTopic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_quicksight_topic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_topic awscc_quicksight_topic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuicksightTopicConfig = {}
  */
  public constructor(scope: Construct, id: string, config: QuicksightTopicConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_quicksight_topic',
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
    this._awsAccountId = config.awsAccountId;
    this._configOptions.internalValue = config.configOptions;
    this._customInstructions.internalValue = config.customInstructions;
    this._dataSets.internalValue = config.dataSets;
    this._description = config.description;
    this._folderArns = config.folderArns;
    this._name = config.name;
    this._tags.internalValue = config.tags;
    this._topicId = config.topicId;
    this._userExperienceVersion = config.userExperienceVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_account_id - computed: true, optional: true, required: false
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // config_options - computed: true, optional: true, required: false
  private _configOptions = new QuicksightTopicConfigOptionsOutputReference(this, "config_options");
  public get configOptions() {
    return this._configOptions;
  }
  public putConfigOptions(value: QuicksightTopicConfigOptions) {
    this._configOptions.internalValue = value;
  }
  public resetConfigOptions() {
    this._configOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configOptionsInput() {
    return this._configOptions.internalValue;
  }

  // custom_instructions - computed: true, optional: true, required: false
  private _customInstructions = new QuicksightTopicCustomInstructionsOutputReference(this, "custom_instructions");
  public get customInstructions() {
    return this._customInstructions;
  }
  public putCustomInstructions(value: QuicksightTopicCustomInstructions) {
    this._customInstructions.internalValue = value;
  }
  public resetCustomInstructions() {
    this._customInstructions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInstructionsInput() {
    return this._customInstructions.internalValue;
  }

  // data_sets - computed: true, optional: true, required: false
  private _dataSets = new QuicksightTopicDataSetsList(this, "data_sets", false);
  public get dataSets() {
    return this._dataSets;
  }
  public putDataSets(value: QuicksightTopicDataSets[] | cdktn.IResolvable) {
    this._dataSets.internalValue = value;
  }
  public resetDataSets() {
    this._dataSets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetsInput() {
    return this._dataSets.internalValue;
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

  // folder_arns - computed: true, optional: true, required: false
  private _folderArns?: string[]; 
  public get folderArns() {
    return this.getListAttribute('folder_arns');
  }
  public set folderArns(value: string[]) {
    this._folderArns = value;
  }
  public resetFolderArns() {
    this._folderArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderArnsInput() {
    return this._folderArns;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
  private _tags = new QuicksightTopicTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: QuicksightTopicTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // topic_id - computed: true, optional: true, required: false
  private _topicId?: string; 
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }
  public set topicId(value: string) {
    this._topicId = value;
  }
  public resetTopicId() {
    this._topicId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicIdInput() {
    return this._topicId;
  }

  // user_experience_version - computed: true, optional: true, required: false
  private _userExperienceVersion?: string; 
  public get userExperienceVersion() {
    return this.getStringAttribute('user_experience_version');
  }
  public set userExperienceVersion(value: string) {
    this._userExperienceVersion = value;
  }
  public resetUserExperienceVersion() {
    this._userExperienceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userExperienceVersionInput() {
    return this._userExperienceVersion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_account_id: cdktn.stringToTerraform(this._awsAccountId),
      config_options: quicksightTopicConfigOptionsToTerraform(this._configOptions.internalValue),
      custom_instructions: quicksightTopicCustomInstructionsToTerraform(this._customInstructions.internalValue),
      data_sets: cdktn.listMapper(quicksightTopicDataSetsToTerraform, false)(this._dataSets.internalValue),
      description: cdktn.stringToTerraform(this._description),
      folder_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._folderArns),
      name: cdktn.stringToTerraform(this._name),
      tags: cdktn.listMapper(quicksightTopicTagsToTerraform, false)(this._tags.internalValue),
      topic_id: cdktn.stringToTerraform(this._topicId),
      user_experience_version: cdktn.stringToTerraform(this._userExperienceVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_account_id: {
        value: cdktn.stringToHclTerraform(this._awsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_options: {
        value: quicksightTopicConfigOptionsToHclTerraform(this._configOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "QuicksightTopicConfigOptions",
      },
      custom_instructions: {
        value: quicksightTopicCustomInstructionsToHclTerraform(this._customInstructions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "QuicksightTopicCustomInstructions",
      },
      data_sets: {
        value: cdktn.listMapperHcl(quicksightTopicDataSetsToHclTerraform, false)(this._dataSets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QuicksightTopicDataSetsList",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_arns: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._folderArns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(quicksightTopicTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QuicksightTopicTagsList",
      },
      topic_id: {
        value: cdktn.stringToHclTerraform(this._topicId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_experience_version: {
        value: cdktn.stringToHclTerraform(this._userExperienceVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
