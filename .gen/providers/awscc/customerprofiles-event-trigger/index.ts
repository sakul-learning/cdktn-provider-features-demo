// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/customerprofiles_event_trigger
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CustomerprofilesEventTriggerConfig extends cdktn.TerraformMetaArguments {
  /**
  * The description of the event trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/customerprofiles_event_trigger#description CustomerprofilesEventTrigger#description}
  */
  readonly description?: string;
  /**
  * The unique name of the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/customerprofiles_event_trigger#domain_name CustomerprofilesEventTrigger#domain_name}
  */
  readonly domainName: string;
  /**
  * A list of conditions that determine when an event should trigger the destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/customerprofiles_event_trigger#event_trigger_conditions CustomerprofilesEventTrigger#event_trigger_conditions}
  */
  readonly eventTriggerConditions: CustomerprofilesEventTriggerEventTriggerConditions[] | cdktn.IResolvable;
  /**
  * Defines limits controlling whether an event triggers the destination, based on ingestion latency and the number of invocations per profile over specific time periods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/customerprofiles_event_trigger#event_trigger_limits CustomerprofilesEventTrigger#event_trigger_limits}
  */
  readonly eventTriggerLimits?: CustomerprofilesEventTriggerEventTriggerLimits;
  /**
  * The unique name of the event trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/customerprofiles_event_trigger#event_trigger_name CustomerprofilesEventTrigger#event_trigger_name}
  */
  readonly eventTriggerName: string;
  /**
  * The unique name of the object type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/customerprofiles_event_trigger#object_type_name CustomerprofilesEventTrigger#object_type_name}
  */
  readonly objectTypeName: string;
  /**
  * The destination is triggered only for profiles that meet the criteria of a segment definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/customerprofiles_event_trigger#segment_filter CustomerprofilesEventTrigger#segment_filter}
  */
  readonly segmentFilter?: string;
  /**
  * An array of key-value pairs to apply to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/customerprofiles_event_trigger#tags CustomerprofilesEventTrigger#tags}
  */
  readonly tags?: CustomerprofilesEventTriggerTags[] | cdktn.IResolvable;
}
export interface CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes {
  /**
  * The operator used to compare an attribute against a list of values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/customerprofiles_event_trigger#comparison_operator CustomerprofilesEventTrigger#comparison_operator}
  */
  readonly comparisonOperator: string;
  /**
  * A field defined within an object type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/customerprofiles_event_trigger#field_name CustomerprofilesEventTrigger#field_name}
  */
  readonly fieldName?: string;
  /**
  * An attribute contained within a source object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/customerprofiles_event_trigger#source CustomerprofilesEventTrigger#source}
  */
  readonly source?: string;
  /**
  * A list of attribute values used for comparison.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/customerprofiles_event_trigger#values CustomerprofilesEventTrigger#values}
  */
  readonly values: string[];
}

export function customerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesToTerraform(struct?: CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison_operator: cdktn.stringToTerraform(struct!.comparisonOperator),
    field_name: cdktn.stringToTerraform(struct!.fieldName),
    source: cdktn.stringToTerraform(struct!.source),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesToHclTerraform(struct?: CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison_operator: {
      value: cdktn.stringToHclTerraform(struct!.comparisonOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_name: {
      value: cdktn.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
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

export class CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonOperator = this._comparisonOperator;
    }
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparisonOperator = undefined;
      this._fieldName = undefined;
      this._source = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparisonOperator = value.comparisonOperator;
      this._fieldName = value.fieldName;
      this._source = value.source;
      this._values = value.values;
    }
  }

  // comparison_operator - computed: false, optional: false, required: true
  private _comparisonOperator?: string;
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
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

  // source - computed: true, optional: true, required: false
  private _source?: string;
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[];
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList extends cdktn.ComplexList {
  public internalValue? : CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes[] | cdktn.IResolvable

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
  public get(index: number): CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference {
    return new CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions {
  /**
  * A list of object attributes to be evaluated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/customerprofiles_event_trigger#object_attributes CustomerprofilesEventTrigger#object_attributes}
  */
  readonly objectAttributes: CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes[] | cdktn.IResolvable;
}

export function customerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsToTerraform(struct?: CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    object_attributes: cdktn.listMapper(customerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesToTerraform, false)(struct!.objectAttributes),
  }
}


export function customerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsToHclTerraform(struct?: CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    object_attributes: {
      value: cdktn.listMapperHcl(customerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesToHclTerraform, false)(struct!.objectAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectAttributes = this._objectAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectAttributes.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectAttributes.internalValue = value.objectAttributes;
    }
  }

  // object_attributes - computed: false, optional: false, required: true
  private _objectAttributes = new CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList(this, "object_attributes", false);
  public get objectAttributes() {
    return this._objectAttributes;
  }
  public putObjectAttributes(value: CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes[] | cdktn.IResolvable) {
    this._objectAttributes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectAttributesInput() {
    return this._objectAttributes.internalValue;
  }
}

export class CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList extends cdktn.ComplexList {
  public internalValue? : CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions[] | cdktn.IResolvable

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
  public get(index: number): CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference {
    return new CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomerprofilesEventTriggerEventTriggerConditions {
  /**
  * A list of dimensions to be evaluated for the event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/customerprofiles_event_trigger#event_trigger_dimensions CustomerprofilesEventTrigger#event_trigger_dimensions}
  */
  readonly eventTriggerDimensions: CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions[] | cdktn.IResolvable;
  /**
  * The operator used to combine multiple dimensions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/customerprofiles_event_trigger#logical_operator CustomerprofilesEventTrigger#logical_operator}
  */
  readonly logicalOperator: string;
}

export function customerprofilesEventTriggerEventTriggerConditionsToTerraform(struct?: CustomerprofilesEventTriggerEventTriggerConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_trigger_dimensions: cdktn.listMapper(customerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsToTerraform, false)(struct!.eventTriggerDimensions),
    logical_operator: cdktn.stringToTerraform(struct!.logicalOperator),
  }
}


export function customerprofilesEventTriggerEventTriggerConditionsToHclTerraform(struct?: CustomerprofilesEventTriggerEventTriggerConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event_trigger_dimensions: {
      value: cdktn.listMapperHcl(customerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsToHclTerraform, false)(struct!.eventTriggerDimensions),
      isBlock: true,
      type: "list",
      storageClassType: "CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList",
    },
    logical_operator: {
      value: cdktn.stringToHclTerraform(struct!.logicalOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesEventTriggerEventTriggerConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CustomerprofilesEventTriggerEventTriggerConditions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventTriggerDimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventTriggerDimensions = this._eventTriggerDimensions?.internalValue;
    }
    if (this._logicalOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalOperator = this._logicalOperator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesEventTriggerEventTriggerConditions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventTriggerDimensions.internalValue = undefined;
      this._logicalOperator = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventTriggerDimensions.internalValue = value.eventTriggerDimensions;
      this._logicalOperator = value.logicalOperator;
    }
  }

  // event_trigger_dimensions - computed: false, optional: false, required: true
  private _eventTriggerDimensions = new CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList(this, "event_trigger_dimensions", false);
  public get eventTriggerDimensions() {
    return this._eventTriggerDimensions;
  }
  public putEventTriggerDimensions(value: CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions[] | cdktn.IResolvable) {
    this._eventTriggerDimensions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTriggerDimensionsInput() {
    return this._eventTriggerDimensions.internalValue;
  }

  // logical_operator - computed: false, optional: false, required: true
  private _logicalOperator?: string;
  public get logicalOperator() {
    return this.getStringAttribute('logical_operator');
  }
  public set logicalOperator(value: string) {
    this._logicalOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalOperatorInput() {
    return this._logicalOperator;
  }
}

export class CustomerprofilesEventTriggerEventTriggerConditionsList extends cdktn.ComplexList {
  public internalValue? : CustomerprofilesEventTriggerEventTriggerConditions[] | cdktn.IResolvable

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
  public get(index: number): CustomerprofilesEventTriggerEventTriggerConditionsOutputReference {
    return new CustomerprofilesEventTriggerEventTriggerConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomerprofilesEventTriggerEventTriggerLimitsPeriods {
  /**
  * The maximum allowed number of destination invocations per profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/customerprofiles_event_trigger#max_invocations_per_profile CustomerprofilesEventTrigger#max_invocations_per_profile}
  */
  readonly maxInvocationsPerProfile?: number;
  /**
  * The unit of time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/customerprofiles_event_trigger#unit CustomerprofilesEventTrigger#unit}
  */
  readonly unit?: string;
  /**
  * If set to true, there is no limit on the number of destination invocations per profile. The default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/customerprofiles_event_trigger#unlimited CustomerprofilesEventTrigger#unlimited}
  */
  readonly unlimited?: boolean | cdktn.IResolvable;
  /**
  * The amount of time of the specified unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/customerprofiles_event_trigger#value CustomerprofilesEventTrigger#value}
  */
  readonly value?: number;
}

export function customerprofilesEventTriggerEventTriggerLimitsPeriodsToTerraform(struct?: CustomerprofilesEventTriggerEventTriggerLimitsPeriods | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_invocations_per_profile: cdktn.numberToTerraform(struct!.maxInvocationsPerProfile),
    unit: cdktn.stringToTerraform(struct!.unit),
    unlimited: cdktn.booleanToTerraform(struct!.unlimited),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function customerprofilesEventTriggerEventTriggerLimitsPeriodsToHclTerraform(struct?: CustomerprofilesEventTriggerEventTriggerLimitsPeriods | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_invocations_per_profile: {
      value: cdktn.numberToHclTerraform(struct!.maxInvocationsPerProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unlimited: {
      value: cdktn.booleanToHclTerraform(struct!.unlimited),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CustomerprofilesEventTriggerEventTriggerLimitsPeriods | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxInvocationsPerProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInvocationsPerProfile = this._maxInvocationsPerProfile;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._unlimited !== undefined) {
      hasAnyValues = true;
      internalValueResult.unlimited = this._unlimited;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesEventTriggerEventTriggerLimitsPeriods | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxInvocationsPerProfile = undefined;
      this._unit = undefined;
      this._unlimited = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxInvocationsPerProfile = value.maxInvocationsPerProfile;
      this._unit = value.unit;
      this._unlimited = value.unlimited;
      this._value = value.value;
    }
  }

  // max_invocations_per_profile - computed: true, optional: true, required: false
  private _maxInvocationsPerProfile?: number;
  public get maxInvocationsPerProfile() {
    return this.getNumberAttribute('max_invocations_per_profile');
  }
  public set maxInvocationsPerProfile(value: number) {
    this._maxInvocationsPerProfile = value;
  }
  public resetMaxInvocationsPerProfile() {
    this._maxInvocationsPerProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInvocationsPerProfileInput() {
    return this._maxInvocationsPerProfile;
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string;
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // unlimited - computed: true, optional: true, required: false
  private _unlimited?: boolean | cdktn.IResolvable;
  public get unlimited() {
    return this.getBooleanAttribute('unlimited');
  }
  public set unlimited(value: boolean | cdktn.IResolvable) {
    this._unlimited = value;
  }
  public resetUnlimited() {
    this._unlimited = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unlimitedInput() {
    return this._unlimited;
  }

  // value - computed: true, optional: true, required: false
  private _value?: number;
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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

export class CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList extends cdktn.ComplexList {
  public internalValue? : CustomerprofilesEventTriggerEventTriggerLimitsPeriods[] | cdktn.IResolvable

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
  public get(index: number): CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference {
    return new CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomerprofilesEventTriggerEventTriggerLimits {
  /**
  * Specifies that an event will only trigger the destination if it is processed within a certain latency period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/customerprofiles_event_trigger#event_expiration CustomerprofilesEventTrigger#event_expiration}
  */
  readonly eventExpiration?: number;
  /**
  * A list of time periods during which the limits apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/customerprofiles_event_trigger#periods CustomerprofilesEventTrigger#periods}
  */
  readonly periods?: CustomerprofilesEventTriggerEventTriggerLimitsPeriods[] | cdktn.IResolvable;
}

export function customerprofilesEventTriggerEventTriggerLimitsToTerraform(struct?: CustomerprofilesEventTriggerEventTriggerLimits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_expiration: cdktn.numberToTerraform(struct!.eventExpiration),
    periods: cdktn.listMapper(customerprofilesEventTriggerEventTriggerLimitsPeriodsToTerraform, false)(struct!.periods),
  }
}


export function customerprofilesEventTriggerEventTriggerLimitsToHclTerraform(struct?: CustomerprofilesEventTriggerEventTriggerLimits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event_expiration: {
      value: cdktn.numberToHclTerraform(struct!.eventExpiration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    periods: {
      value: cdktn.listMapperHcl(customerprofilesEventTriggerEventTriggerLimitsPeriodsToHclTerraform, false)(struct!.periods),
      isBlock: true,
      type: "list",
      storageClassType: "CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesEventTriggerEventTriggerLimitsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesEventTriggerEventTriggerLimits | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventExpiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventExpiration = this._eventExpiration;
    }
    if (this._periods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.periods = this._periods?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesEventTriggerEventTriggerLimits | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventExpiration = undefined;
      this._periods.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventExpiration = value.eventExpiration;
      this._periods.internalValue = value.periods;
    }
  }

  // event_expiration - computed: true, optional: true, required: false
  private _eventExpiration?: number;
  public get eventExpiration() {
    return this.getNumberAttribute('event_expiration');
  }
  public set eventExpiration(value: number) {
    this._eventExpiration = value;
  }
  public resetEventExpiration() {
    this._eventExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventExpirationInput() {
    return this._eventExpiration;
  }

  // periods - computed: true, optional: true, required: false
  private _periods = new CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList(this, "periods", false);
  public get periods() {
    return this._periods;
  }
  public putPeriods(value: CustomerprofilesEventTriggerEventTriggerLimitsPeriods[] | cdktn.IResolvable) {
    this._periods.internalValue = value;
  }
  public resetPeriods() {
    this._periods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodsInput() {
    return this._periods.internalValue;
  }
}
export interface CustomerprofilesEventTriggerTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/customerprofiles_event_trigger#key CustomerprofilesEventTrigger#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/customerprofiles_event_trigger#value CustomerprofilesEventTrigger#value}
  */
  readonly value?: string;
}

export function customerprofilesEventTriggerTagsToTerraform(struct?: CustomerprofilesEventTriggerTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function customerprofilesEventTriggerTagsToHclTerraform(struct?: CustomerprofilesEventTriggerTags | cdktn.IResolvable): any {
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

export class CustomerprofilesEventTriggerTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CustomerprofilesEventTriggerTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CustomerprofilesEventTriggerTags | cdktn.IResolvable | undefined) {
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

export class CustomerprofilesEventTriggerTagsList extends cdktn.ComplexList {
  public internalValue? : CustomerprofilesEventTriggerTags[] | cdktn.IResolvable

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
  public get(index: number): CustomerprofilesEventTriggerTagsOutputReference {
    return new CustomerprofilesEventTriggerTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/customerprofiles_event_trigger awscc_customerprofiles_event_trigger}
*/
export class CustomerprofilesEventTrigger extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_customerprofiles_event_trigger";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CustomerprofilesEventTrigger resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomerprofilesEventTrigger to import
  * @param importFromId The id of the existing CustomerprofilesEventTrigger that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/customerprofiles_event_trigger#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomerprofilesEventTrigger to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_customerprofiles_event_trigger", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/customerprofiles_event_trigger awscc_customerprofiles_event_trigger} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomerprofilesEventTriggerConfig
  */
  public constructor(scope: Construct, id: string, config: CustomerprofilesEventTriggerConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_customerprofiles_event_trigger',
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
    this._domainName = config.domainName;
    this._eventTriggerConditions.internalValue = config.eventTriggerConditions;
    this._eventTriggerLimits.internalValue = config.eventTriggerLimits;
    this._eventTriggerName = config.eventTriggerName;
    this._objectTypeName = config.objectTypeName;
    this._segmentFilter = config.segmentFilter;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string;
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // event_trigger_conditions - computed: false, optional: false, required: true
  private _eventTriggerConditions = new CustomerprofilesEventTriggerEventTriggerConditionsList(this, "event_trigger_conditions", false);
  public get eventTriggerConditions() {
    return this._eventTriggerConditions;
  }
  public putEventTriggerConditions(value: CustomerprofilesEventTriggerEventTriggerConditions[] | cdktn.IResolvable) {
    this._eventTriggerConditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTriggerConditionsInput() {
    return this._eventTriggerConditions.internalValue;
  }

  // event_trigger_limits - computed: true, optional: true, required: false
  private _eventTriggerLimits = new CustomerprofilesEventTriggerEventTriggerLimitsOutputReference(this, "event_trigger_limits");
  public get eventTriggerLimits() {
    return this._eventTriggerLimits;
  }
  public putEventTriggerLimits(value: CustomerprofilesEventTriggerEventTriggerLimits) {
    this._eventTriggerLimits.internalValue = value;
  }
  public resetEventTriggerLimits() {
    this._eventTriggerLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTriggerLimitsInput() {
    return this._eventTriggerLimits.internalValue;
  }

  // event_trigger_name - computed: false, optional: false, required: true
  private _eventTriggerName?: string;
  public get eventTriggerName() {
    return this.getStringAttribute('event_trigger_name');
  }
  public set eventTriggerName(value: string) {
    this._eventTriggerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTriggerNameInput() {
    return this._eventTriggerName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_at - computed: true, optional: false, required: false
  public get lastUpdatedAt() {
    return this.getStringAttribute('last_updated_at');
  }

  // object_type_name - computed: false, optional: false, required: true
  private _objectTypeName?: string;
  public get objectTypeName() {
    return this.getStringAttribute('object_type_name');
  }
  public set objectTypeName(value: string) {
    this._objectTypeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeNameInput() {
    return this._objectTypeName;
  }

  // segment_filter - computed: true, optional: true, required: false
  private _segmentFilter?: string;
  public get segmentFilter() {
    return this.getStringAttribute('segment_filter');
  }
  public set segmentFilter(value: string) {
    this._segmentFilter = value;
  }
  public resetSegmentFilter() {
    this._segmentFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentFilterInput() {
    return this._segmentFilter;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new CustomerprofilesEventTriggerTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: CustomerprofilesEventTriggerTags[] | cdktn.IResolvable) {
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
      description: cdktn.stringToTerraform(this._description),
      domain_name: cdktn.stringToTerraform(this._domainName),
      event_trigger_conditions: cdktn.listMapper(customerprofilesEventTriggerEventTriggerConditionsToTerraform, false)(this._eventTriggerConditions.internalValue),
      event_trigger_limits: customerprofilesEventTriggerEventTriggerLimitsToTerraform(this._eventTriggerLimits.internalValue),
      event_trigger_name: cdktn.stringToTerraform(this._eventTriggerName),
      object_type_name: cdktn.stringToTerraform(this._objectTypeName),
      segment_filter: cdktn.stringToTerraform(this._segmentFilter),
      tags: cdktn.listMapper(customerprofilesEventTriggerTagsToTerraform, false)(this._tags.internalValue),
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
      domain_name: {
        value: cdktn.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_trigger_conditions: {
        value: cdktn.listMapperHcl(customerprofilesEventTriggerEventTriggerConditionsToHclTerraform, false)(this._eventTriggerConditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CustomerprofilesEventTriggerEventTriggerConditionsList",
      },
      event_trigger_limits: {
        value: customerprofilesEventTriggerEventTriggerLimitsToHclTerraform(this._eventTriggerLimits.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CustomerprofilesEventTriggerEventTriggerLimits",
      },
      event_trigger_name: {
        value: cdktn.stringToHclTerraform(this._eventTriggerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_type_name: {
        value: cdktn.stringToHclTerraform(this._objectTypeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      segment_filter: {
        value: cdktn.stringToHclTerraform(this._segmentFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(customerprofilesEventTriggerTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CustomerprofilesEventTriggerTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
