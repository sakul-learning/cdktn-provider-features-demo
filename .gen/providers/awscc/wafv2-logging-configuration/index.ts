// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wafv2_logging_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Wafv2LoggingConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * The Amazon Resource Names (ARNs) of the logging destinations that you want to associate with the web ACL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wafv2_logging_configuration#log_destination_configs Wafv2LoggingConfiguration#log_destination_configs}
  */
  readonly logDestinationConfigs: string[];
  /**
  * Filtering that specifies which web requests are kept in the logs and which are dropped. You can filter on the rule action and on the web request labels that were applied by matching rules during web ACL evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wafv2_logging_configuration#logging_filter Wafv2LoggingConfiguration#logging_filter}
  */
  readonly loggingFilter?: Wafv2LoggingConfigurationLoggingFilter;
  /**
  * The parts of the request that you want to keep out of the logs. For example, if you redact the HEADER field, the HEADER field in the firehose will be xxx.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wafv2_logging_configuration#redacted_fields Wafv2LoggingConfiguration#redacted_fields}
  */
  readonly redactedFields?: Wafv2LoggingConfigurationRedactedFields[] | cdktn.IResolvable;
  /**
  * The Amazon Resource Name (ARN) of the web ACL that you want to associate with LogDestinationConfigs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wafv2_logging_configuration#resource_arn Wafv2LoggingConfiguration#resource_arn}
  */
  readonly resourceArn: string;
}
export interface Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition {
  /**
  * Logic to apply to the filtering conditions. You can specify that, in order to satisfy the filter, a log must match all conditions or must match at least one condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wafv2_logging_configuration#action Wafv2LoggingConfiguration#action}
  */
  readonly action?: string;
}

export function wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionToTerraform(struct?: Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
  }
}


export function wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionToHclTerraform(struct?: Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }
}
export interface Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition {
  /**
  * The label name that a log record must contain in order to meet the condition. This must be a fully qualified label name. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wafv2_logging_configuration#label_name Wafv2LoggingConfiguration#label_name}
  */
  readonly labelName?: string;
}

export function wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionToTerraform(struct?: Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    label_name: cdktn.stringToTerraform(struct!.labelName),
  }
}


export function wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionToHclTerraform(struct?: Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    label_name: {
      value: cdktn.stringToHclTerraform(struct!.labelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelName = this._labelName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelName = value.labelName;
    }
  }

  // label_name - computed: true, optional: true, required: false
  private _labelName?: string; 
  public get labelName() {
    return this.getStringAttribute('label_name');
  }
  public set labelName(value: string) {
    this._labelName = value;
  }
  public resetLabelName() {
    this._labelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelNameInput() {
    return this._labelName;
  }
}
export interface Wafv2LoggingConfigurationLoggingFilterFiltersConditions {
  /**
  * A single action condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wafv2_logging_configuration#action_condition Wafv2LoggingConfiguration#action_condition}
  */
  readonly actionCondition?: Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition;
  /**
  * A single label name condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wafv2_logging_configuration#label_name_condition Wafv2LoggingConfiguration#label_name_condition}
  */
  readonly labelNameCondition?: Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition;
}

export function wafv2LoggingConfigurationLoggingFilterFiltersConditionsToTerraform(struct?: Wafv2LoggingConfigurationLoggingFilterFiltersConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_condition: wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionToTerraform(struct!.actionCondition),
    label_name_condition: wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionToTerraform(struct!.labelNameCondition),
  }
}


export function wafv2LoggingConfigurationLoggingFilterFiltersConditionsToHclTerraform(struct?: Wafv2LoggingConfigurationLoggingFilterFiltersConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_condition: {
      value: wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionToHclTerraform(struct!.actionCondition),
      isBlock: true,
      type: "struct",
      storageClassType: "Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition",
    },
    label_name_condition: {
      value: wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionToHclTerraform(struct!.labelNameCondition),
      isBlock: true,
      type: "struct",
      storageClassType: "Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2LoggingConfigurationLoggingFilterFiltersConditions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionCondition = this._actionCondition?.internalValue;
    }
    if (this._labelNameCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelNameCondition = this._labelNameCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2LoggingConfigurationLoggingFilterFiltersConditions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionCondition.internalValue = undefined;
      this._labelNameCondition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionCondition.internalValue = value.actionCondition;
      this._labelNameCondition.internalValue = value.labelNameCondition;
    }
  }

  // action_condition - computed: true, optional: true, required: false
  private _actionCondition = new Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference(this, "action_condition");
  public get actionCondition() {
    return this._actionCondition;
  }
  public putActionCondition(value: Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition) {
    this._actionCondition.internalValue = value;
  }
  public resetActionCondition() {
    this._actionCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionConditionInput() {
    return this._actionCondition.internalValue;
  }

  // label_name_condition - computed: true, optional: true, required: false
  private _labelNameCondition = new Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference(this, "label_name_condition");
  public get labelNameCondition() {
    return this._labelNameCondition;
  }
  public putLabelNameCondition(value: Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition) {
    this._labelNameCondition.internalValue = value;
  }
  public resetLabelNameCondition() {
    this._labelNameCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelNameConditionInput() {
    return this._labelNameCondition.internalValue;
  }
}

export class Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList extends cdktn.ComplexList {
  public internalValue? : Wafv2LoggingConfigurationLoggingFilterFiltersConditions[] | cdktn.IResolvable

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
  public get(index: number): Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference {
    return new Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2LoggingConfigurationLoggingFilterFilters {
  /**
  * How to handle logs that satisfy the filter's conditions and requirement. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wafv2_logging_configuration#behavior Wafv2LoggingConfiguration#behavior}
  */
  readonly behavior?: string;
  /**
  * Match conditions for the filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wafv2_logging_configuration#conditions Wafv2LoggingConfiguration#conditions}
  */
  readonly conditions?: Wafv2LoggingConfigurationLoggingFilterFiltersConditions[] | cdktn.IResolvable;
  /**
  * Logic to apply to the filtering conditions. You can specify that, in order to satisfy the filter, a log must match all conditions or must match at least one condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wafv2_logging_configuration#requirement Wafv2LoggingConfiguration#requirement}
  */
  readonly requirement?: string;
}

export function wafv2LoggingConfigurationLoggingFilterFiltersToTerraform(struct?: Wafv2LoggingConfigurationLoggingFilterFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    behavior: cdktn.stringToTerraform(struct!.behavior),
    conditions: cdktn.listMapper(wafv2LoggingConfigurationLoggingFilterFiltersConditionsToTerraform, false)(struct!.conditions),
    requirement: cdktn.stringToTerraform(struct!.requirement),
  }
}


export function wafv2LoggingConfigurationLoggingFilterFiltersToHclTerraform(struct?: Wafv2LoggingConfigurationLoggingFilterFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    behavior: {
      value: cdktn.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditions: {
      value: cdktn.listMapperHcl(wafv2LoggingConfigurationLoggingFilterFiltersConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList",
    },
    requirement: {
      value: cdktn.stringToHclTerraform(struct!.requirement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2LoggingConfigurationLoggingFilterFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._requirement !== undefined) {
      hasAnyValues = true;
      internalValueResult.requirement = this._requirement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2LoggingConfigurationLoggingFilterFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
      this._conditions.internalValue = undefined;
      this._requirement = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behavior = value.behavior;
      this._conditions.internalValue = value.conditions;
      this._requirement = value.requirement;
    }
  }

  // behavior - computed: true, optional: true, required: false
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  public resetBehavior() {
    this._behavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }

  // conditions - computed: true, optional: true, required: false
  private _conditions = new Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: Wafv2LoggingConfigurationLoggingFilterFiltersConditions[] | cdktn.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // requirement - computed: true, optional: true, required: false
  private _requirement?: string; 
  public get requirement() {
    return this.getStringAttribute('requirement');
  }
  public set requirement(value: string) {
    this._requirement = value;
  }
  public resetRequirement() {
    this._requirement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirementInput() {
    return this._requirement;
  }
}

export class Wafv2LoggingConfigurationLoggingFilterFiltersList extends cdktn.ComplexList {
  public internalValue? : Wafv2LoggingConfigurationLoggingFilterFilters[] | cdktn.IResolvable

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
  public get(index: number): Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference {
    return new Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2LoggingConfigurationLoggingFilter {
  /**
  * Default handling for logs that don't match any of the specified filtering conditions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wafv2_logging_configuration#default_behavior Wafv2LoggingConfiguration#default_behavior}
  */
  readonly defaultBehavior?: string;
  /**
  * The filters that you want to apply to the logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wafv2_logging_configuration#filters Wafv2LoggingConfiguration#filters}
  */
  readonly filters?: Wafv2LoggingConfigurationLoggingFilterFilters[] | cdktn.IResolvable;
}

export function wafv2LoggingConfigurationLoggingFilterToTerraform(struct?: Wafv2LoggingConfigurationLoggingFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_behavior: cdktn.stringToTerraform(struct!.defaultBehavior),
    filters: cdktn.listMapper(wafv2LoggingConfigurationLoggingFilterFiltersToTerraform, false)(struct!.filters),
  }
}


export function wafv2LoggingConfigurationLoggingFilterToHclTerraform(struct?: Wafv2LoggingConfigurationLoggingFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_behavior: {
      value: cdktn.stringToHclTerraform(struct!.defaultBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filters: {
      value: cdktn.listMapperHcl(wafv2LoggingConfigurationLoggingFilterFiltersToHclTerraform, false)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2LoggingConfigurationLoggingFilterFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2LoggingConfigurationLoggingFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Wafv2LoggingConfigurationLoggingFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultBehavior = this._defaultBehavior;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2LoggingConfigurationLoggingFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultBehavior = undefined;
      this._filters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultBehavior = value.defaultBehavior;
      this._filters.internalValue = value.filters;
    }
  }

  // default_behavior - computed: true, optional: true, required: false
  private _defaultBehavior?: string; 
  public get defaultBehavior() {
    return this.getStringAttribute('default_behavior');
  }
  public set defaultBehavior(value: string) {
    this._defaultBehavior = value;
  }
  public resetDefaultBehavior() {
    this._defaultBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBehaviorInput() {
    return this._defaultBehavior;
  }

  // filters - computed: true, optional: true, required: false
  private _filters = new Wafv2LoggingConfigurationLoggingFilterFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: Wafv2LoggingConfigurationLoggingFilterFilters[] | cdktn.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }
}
export interface Wafv2LoggingConfigurationRedactedFieldsSingleHeader {
  /**
  * The name of the query header to inspect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wafv2_logging_configuration#name Wafv2LoggingConfiguration#name}
  */
  readonly name?: string;
}

export function wafv2LoggingConfigurationRedactedFieldsSingleHeaderToTerraform(struct?: Wafv2LoggingConfigurationRedactedFieldsSingleHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function wafv2LoggingConfigurationRedactedFieldsSingleHeaderToHclTerraform(struct?: Wafv2LoggingConfigurationRedactedFieldsSingleHeader | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Wafv2LoggingConfigurationRedactedFieldsSingleHeader | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2LoggingConfigurationRedactedFieldsSingleHeader | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}
export interface Wafv2LoggingConfigurationRedactedFields {
  /**
  * Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wafv2_logging_configuration#method Wafv2LoggingConfiguration#method}
  */
  readonly method?: string;
  /**
  * Inspect the query string. This is the part of a URL that appears after a ? character, if any. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wafv2_logging_configuration#query_string Wafv2LoggingConfiguration#query_string}
  */
  readonly queryString?: string;
  /**
  * Inspect a single header. Provide the name of the header to inspect, for example, User-Agent or Referer. This setting isn't case sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wafv2_logging_configuration#single_header Wafv2LoggingConfiguration#single_header}
  */
  readonly singleHeader?: Wafv2LoggingConfigurationRedactedFieldsSingleHeader;
  /**
  * Inspect the request URI path. This is the part of a web request that identifies a resource, for example, /images/daily-ad.jpg. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wafv2_logging_configuration#uri_path Wafv2LoggingConfiguration#uri_path}
  */
  readonly uriPath?: string;
}

export function wafv2LoggingConfigurationRedactedFieldsToTerraform(struct?: Wafv2LoggingConfigurationRedactedFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    method: cdktn.stringToTerraform(struct!.method),
    query_string: cdktn.stringToTerraform(struct!.queryString),
    single_header: wafv2LoggingConfigurationRedactedFieldsSingleHeaderToTerraform(struct!.singleHeader),
    uri_path: cdktn.stringToTerraform(struct!.uriPath),
  }
}


export function wafv2LoggingConfigurationRedactedFieldsToHclTerraform(struct?: Wafv2LoggingConfigurationRedactedFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    method: {
      value: cdktn.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_string: {
      value: cdktn.stringToHclTerraform(struct!.queryString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    single_header: {
      value: wafv2LoggingConfigurationRedactedFieldsSingleHeaderToHclTerraform(struct!.singleHeader),
      isBlock: true,
      type: "struct",
      storageClassType: "Wafv2LoggingConfigurationRedactedFieldsSingleHeader",
    },
    uri_path: {
      value: cdktn.stringToHclTerraform(struct!.uriPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2LoggingConfigurationRedactedFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2LoggingConfigurationRedactedFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._queryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString;
    }
    if (this._singleHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleHeader = this._singleHeader?.internalValue;
    }
    if (this._uriPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriPath = this._uriPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2LoggingConfigurationRedactedFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._method = undefined;
      this._queryString = undefined;
      this._singleHeader.internalValue = undefined;
      this._uriPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._method = value.method;
      this._queryString = value.queryString;
      this._singleHeader.internalValue = value.singleHeader;
      this._uriPath = value.uriPath;
    }
  }

  // method - computed: true, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // query_string - computed: true, optional: true, required: false
  private _queryString?: string; 
  public get queryString() {
    return this.getStringAttribute('query_string');
  }
  public set queryString(value: string) {
    this._queryString = value;
  }
  public resetQueryString() {
    this._queryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString;
  }

  // single_header - computed: true, optional: true, required: false
  private _singleHeader = new Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference(this, "single_header");
  public get singleHeader() {
    return this._singleHeader;
  }
  public putSingleHeader(value: Wafv2LoggingConfigurationRedactedFieldsSingleHeader) {
    this._singleHeader.internalValue = value;
  }
  public resetSingleHeader() {
    this._singleHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleHeaderInput() {
    return this._singleHeader.internalValue;
  }

  // uri_path - computed: true, optional: true, required: false
  private _uriPath?: string; 
  public get uriPath() {
    return this.getStringAttribute('uri_path');
  }
  public set uriPath(value: string) {
    this._uriPath = value;
  }
  public resetUriPath() {
    this._uriPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriPathInput() {
    return this._uriPath;
  }
}

export class Wafv2LoggingConfigurationRedactedFieldsList extends cdktn.ComplexList {
  public internalValue? : Wafv2LoggingConfigurationRedactedFields[] | cdktn.IResolvable

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
  public get(index: number): Wafv2LoggingConfigurationRedactedFieldsOutputReference {
    return new Wafv2LoggingConfigurationRedactedFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wafv2_logging_configuration awscc_wafv2_logging_configuration}
*/
export class Wafv2LoggingConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_wafv2_logging_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Wafv2LoggingConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Wafv2LoggingConfiguration to import
  * @param importFromId The id of the existing Wafv2LoggingConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wafv2_logging_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Wafv2LoggingConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_wafv2_logging_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wafv2_logging_configuration awscc_wafv2_logging_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Wafv2LoggingConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: Wafv2LoggingConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_wafv2_logging_configuration',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.94.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._logDestinationConfigs = config.logDestinationConfigs;
    this._loggingFilter.internalValue = config.loggingFilter;
    this._redactedFields.internalValue = config.redactedFields;
    this._resourceArn = config.resourceArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_destination_configs - computed: false, optional: false, required: true
  private _logDestinationConfigs?: string[]; 
  public get logDestinationConfigs() {
    return this.getListAttribute('log_destination_configs');
  }
  public set logDestinationConfigs(value: string[]) {
    this._logDestinationConfigs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logDestinationConfigsInput() {
    return this._logDestinationConfigs;
  }

  // logging_filter - computed: true, optional: true, required: false
  private _loggingFilter = new Wafv2LoggingConfigurationLoggingFilterOutputReference(this, "logging_filter");
  public get loggingFilter() {
    return this._loggingFilter;
  }
  public putLoggingFilter(value: Wafv2LoggingConfigurationLoggingFilter) {
    this._loggingFilter.internalValue = value;
  }
  public resetLoggingFilter() {
    this._loggingFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingFilterInput() {
    return this._loggingFilter.internalValue;
  }

  // managed_by_firewall_manager - computed: true, optional: false, required: false
  public get managedByFirewallManager() {
    return this.getBooleanAttribute('managed_by_firewall_manager');
  }

  // redacted_fields - computed: true, optional: true, required: false
  private _redactedFields = new Wafv2LoggingConfigurationRedactedFieldsList(this, "redacted_fields", false);
  public get redactedFields() {
    return this._redactedFields;
  }
  public putRedactedFields(value: Wafv2LoggingConfigurationRedactedFields[] | cdktn.IResolvable) {
    this._redactedFields.internalValue = value;
  }
  public resetRedactedFields() {
    this._redactedFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactedFieldsInput() {
    return this._redactedFields.internalValue;
  }

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      log_destination_configs: cdktn.listMapper(cdktn.stringToTerraform, false)(this._logDestinationConfigs),
      logging_filter: wafv2LoggingConfigurationLoggingFilterToTerraform(this._loggingFilter.internalValue),
      redacted_fields: cdktn.listMapper(wafv2LoggingConfigurationRedactedFieldsToTerraform, false)(this._redactedFields.internalValue),
      resource_arn: cdktn.stringToTerraform(this._resourceArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      log_destination_configs: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._logDestinationConfigs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      logging_filter: {
        value: wafv2LoggingConfigurationLoggingFilterToHclTerraform(this._loggingFilter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Wafv2LoggingConfigurationLoggingFilter",
      },
      redacted_fields: {
        value: cdktn.listMapperHcl(wafv2LoggingConfigurationRedactedFieldsToHclTerraform, false)(this._redactedFields.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Wafv2LoggingConfigurationRedactedFieldsList",
      },
      resource_arn: {
        value: cdktn.stringToHclTerraform(this._resourceArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
