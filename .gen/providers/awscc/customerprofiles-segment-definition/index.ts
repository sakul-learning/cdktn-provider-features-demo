// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CustomerprofilesSegmentDefinitionConfig extends cdktn.TerraformMetaArguments {
  /**
  * The description of the segment definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#description CustomerprofilesSegmentDefinition#description}
  */
  readonly description?: string;
  /**
  * The display name of the segment definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#display_name CustomerprofilesSegmentDefinition#display_name}
  */
  readonly displayName: string;
  /**
  * The unique name of the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#domain_name CustomerprofilesSegmentDefinition#domain_name}
  */
  readonly domainName: string;
  /**
  * The unique name of the segment definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#segment_definition_name CustomerprofilesSegmentDefinition#segment_definition_name}
  */
  readonly segmentDefinitionName: string;
  /**
  * An array that defines the set of segment criteria to evaluate when handling segment groups for the segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#segment_groups CustomerprofilesSegmentDefinition#segment_groups}
  */
  readonly segmentGroups?: CustomerprofilesSegmentDefinitionSegmentGroups;
  /**
  * The segment sort configuration for ordering segment results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#segment_sort CustomerprofilesSegmentDefinition#segment_sort}
  */
  readonly segmentSort?: CustomerprofilesSegmentDefinitionSegmentSort;
  /**
  * The SQL query that defines the segment criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#segment_sql_query CustomerprofilesSegmentDefinition#segment_sql_query}
  */
  readonly segmentSqlQuery?: string;
  /**
  * The tags used to organize, track, or control access for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#tags CustomerprofilesSegmentDefinition#tags}
  */
  readonly tags?: CustomerprofilesSegmentDefinitionTags[] | cdktn.IResolvable;
}
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverridesRange {
  /**
  * The ending point for this overridden range. Positive numbers indicate how many days in the past data should be included, and negative numbers indicate how many days in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#end CustomerprofilesSegmentDefinition#end}
  */
  readonly end?: number;
  /**
  * The starting point for this overridden range. Positive numbers indicate how many days in the past data should be included, and negative numbers indicate how many days in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#start CustomerprofilesSegmentDefinition#start}
  */
  readonly start?: number;
  /**
  * The unit to be applied to the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#unit CustomerprofilesSegmentDefinition#unit}
  */
  readonly unit?: string;
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverridesRangeToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverridesRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: cdktn.numberToTerraform(struct!.end),
    start: cdktn.numberToTerraform(struct!.start),
    unit: cdktn.stringToTerraform(struct!.unit),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverridesRangeToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverridesRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: cdktn.numberToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktn.numberToHclTerraform(struct!.start),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverridesRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverridesRange | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverridesRange | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
      this._unit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
      this._unit = value.unit;
    }
  }

  // end - computed: true, optional: true, required: false
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: true, optional: true, required: false
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
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
}
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverrides {
  /**
  * Defines the range to be applied to the calculated attribute definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#range CustomerprofilesSegmentDefinition#range}
  */
  readonly range?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverridesRange;
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverridesToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    range: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverridesRangeToTerraform(struct!.range),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverridesToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    range: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverridesRangeToHclTerraform(struct!.range),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverridesRange",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverridesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._range.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._range.internalValue = value.range;
    }
  }

  // range - computed: true, optional: true, required: false
  private _range = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverridesRangeOutputReference(this, "range");
  public get range() {
    return this._range;
  }
  public putRange(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverridesRange) {
    this._range.internalValue = value;
  }
  public resetRange() {
    this._range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }
}
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributes {
  /**
  * Overrides the condition block within the original calculated attribute definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#condition_overrides CustomerprofilesSegmentDefinition#condition_overrides}
  */
  readonly conditionOverrides?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverrides;
  /**
  * The type of segment dimension to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition_overrides: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverridesToTerraform(struct!.conditionOverrides),
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition_overrides: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverridesToHclTerraform(struct!.conditionOverrides),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverrides",
    },
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionOverrides = this._conditionOverrides?.internalValue;
    }
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionOverrides.internalValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionOverrides.internalValue = value.conditionOverrides;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // condition_overrides - computed: true, optional: true, required: false
  private _conditionOverrides = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverridesOutputReference(this, "condition_overrides");
  public get conditionOverrides() {
    return this._conditionOverrides;
  }
  public putConditionOverrides(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverrides) {
    this._conditionOverrides.internalValue = value;
  }
  public resetConditionOverrides() {
    this._conditionOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionOverridesInput() {
    return this._conditionOverrides.internalValue;
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributes } | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute);
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesOutputReference {
    return new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAccountNumber {
  /**
  * The type of segment dimension to use for a string dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAccountNumberToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAccountNumber | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAccountNumberToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAccountNumber | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAccountNumberOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAccountNumber | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAccountNumber | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAdditionalInformation {
  /**
  * The type of segment dimension to use for a string dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAdditionalInformationToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAdditionalInformation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAdditionalInformationToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAdditionalInformation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAdditionalInformationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAdditionalInformation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAdditionalInformation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCity {
  /**
  * The type of segment dimension to use for a string dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCityToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCityToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCity | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCity | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCountry {
  /**
  * The type of segment dimension to use for a string dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCountryToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCountry | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCountryToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCountry | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCountryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCountry | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCountry | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCounty {
  /**
  * The type of segment dimension to use for a string dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCountyToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCounty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCountyToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCounty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCountyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCounty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCounty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressPostalCode {
  /**
  * The type of segment dimension to use for a string dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressPostalCodeToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressPostalCode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressPostalCodeToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressPostalCode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressPostalCodeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressPostalCode | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressPostalCode | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressProvince {
  /**
  * The type of segment dimension to use for a string dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressProvinceToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressProvince | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressProvinceToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressProvince | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressProvinceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressProvince | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressProvince | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressState {
  /**
  * The type of segment dimension to use for a string dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressStateToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressState | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressStateToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressState | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressStateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressState | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressState | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddress {
  /**
  * Specifies profile based criteria for a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#city CustomerprofilesSegmentDefinition#city}
  */
  readonly city?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCity;
  /**
  * Specifies profile based criteria for a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#country CustomerprofilesSegmentDefinition#country}
  */
  readonly country?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCountry;
  /**
  * Specifies profile based criteria for a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#county CustomerprofilesSegmentDefinition#county}
  */
  readonly county?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCounty;
  /**
  * Specifies profile based criteria for a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#postal_code CustomerprofilesSegmentDefinition#postal_code}
  */
  readonly postalCode?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressPostalCode;
  /**
  * Specifies profile based criteria for a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#province CustomerprofilesSegmentDefinition#province}
  */
  readonly province?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressProvince;
  /**
  * Specifies profile based criteria for a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#state CustomerprofilesSegmentDefinition#state}
  */
  readonly state?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressState;
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    city: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCityToTerraform(struct!.city),
    country: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCountryToTerraform(struct!.country),
    county: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCountyToTerraform(struct!.county),
    postal_code: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressPostalCodeToTerraform(struct!.postalCode),
    province: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressProvinceToTerraform(struct!.province),
    state: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressStateToTerraform(struct!.state),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    city: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCityToHclTerraform(struct!.city),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCity",
    },
    country: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCountryToHclTerraform(struct!.country),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCountry",
    },
    county: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCountyToHclTerraform(struct!.county),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCounty",
    },
    postal_code: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressPostalCodeToHclTerraform(struct!.postalCode),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressPostalCode",
    },
    province: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressProvinceToHclTerraform(struct!.province),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressProvince",
    },
    state: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressStateToHclTerraform(struct!.state),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressState",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddress | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._city?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city?.internalValue;
    }
    if (this._country?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country?.internalValue;
    }
    if (this._county?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.county = this._county?.internalValue;
    }
    if (this._postalCode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postalCode = this._postalCode?.internalValue;
    }
    if (this._province?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.province = this._province?.internalValue;
    }
    if (this._state?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddress | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._city.internalValue = undefined;
      this._country.internalValue = undefined;
      this._county.internalValue = undefined;
      this._postalCode.internalValue = undefined;
      this._province.internalValue = undefined;
      this._state.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._city.internalValue = value.city;
      this._country.internalValue = value.country;
      this._county.internalValue = value.county;
      this._postalCode.internalValue = value.postalCode;
      this._province.internalValue = value.province;
      this._state.internalValue = value.state;
    }
  }

  // city - computed: true, optional: true, required: false
  private _city = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCityOutputReference(this, "city");
  public get city() {
    return this._city;
  }
  public putCity(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCity) {
    this._city.internalValue = value;
  }
  public resetCity() {
    this._city.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city.internalValue;
  }

  // country - computed: true, optional: true, required: false
  private _country = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCountryOutputReference(this, "country");
  public get country() {
    return this._country;
  }
  public putCountry(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCountry) {
    this._country.internalValue = value;
  }
  public resetCountry() {
    this._country.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country.internalValue;
  }

  // county - computed: true, optional: true, required: false
  private _county = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCountyOutputReference(this, "county");
  public get county() {
    return this._county;
  }
  public putCounty(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCounty) {
    this._county.internalValue = value;
  }
  public resetCounty() {
    this._county.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countyInput() {
    return this._county.internalValue;
  }

  // postal_code - computed: true, optional: true, required: false
  private _postalCode = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressPostalCodeOutputReference(this, "postal_code");
  public get postalCode() {
    return this._postalCode;
  }
  public putPostalCode(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressPostalCode) {
    this._postalCode.internalValue = value;
  }
  public resetPostalCode() {
    this._postalCode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postalCodeInput() {
    return this._postalCode.internalValue;
  }

  // province - computed: true, optional: true, required: false
  private _province = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressProvinceOutputReference(this, "province");
  public get province() {
    return this._province;
  }
  public putProvince(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressProvince) {
    this._province.internalValue = value;
  }
  public resetProvince() {
    this._province.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provinceInput() {
    return this._province.internalValue;
  }

  // state - computed: true, optional: true, required: false
  private _state = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressStateOutputReference(this, "state");
  public get state() {
    return this._state;
  }
  public putState(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressState) {
    this._state.internalValue = value;
  }
  public resetState() {
    this._state.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state.internalValue;
  }
}
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAttributes {
  /**
  * The type of segment dimension to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAttributesToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAttributesToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAttributes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAttributes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAttributesMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAttributes } | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute);
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAttributesOutputReference {
    return new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAttributesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCity {
  /**
  * The type of segment dimension to use for a string dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCityToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCityToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCity | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCity | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountry {
  /**
  * The type of segment dimension to use for a string dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountryToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountry | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountryToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountry | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountry | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountry | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCounty {
  /**
  * The type of segment dimension to use for a string dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountyToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCounty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountyToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCounty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCounty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCounty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressPostalCode {
  /**
  * The type of segment dimension to use for a string dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressPostalCodeToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressPostalCode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressPostalCodeToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressPostalCode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressPostalCodeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressPostalCode | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressPostalCode | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressProvince {
  /**
  * The type of segment dimension to use for a string dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressProvinceToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressProvince | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressProvinceToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressProvince | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressProvinceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressProvince | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressProvince | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressState {
  /**
  * The type of segment dimension to use for a string dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressStateToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressState | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressStateToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressState | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressStateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressState | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressState | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddress {
  /**
  * Specifies profile based criteria for a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#city CustomerprofilesSegmentDefinition#city}
  */
  readonly city?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCity;
  /**
  * Specifies profile based criteria for a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#country CustomerprofilesSegmentDefinition#country}
  */
  readonly country?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountry;
  /**
  * Specifies profile based criteria for a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#county CustomerprofilesSegmentDefinition#county}
  */
  readonly county?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCounty;
  /**
  * Specifies profile based criteria for a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#postal_code CustomerprofilesSegmentDefinition#postal_code}
  */
  readonly postalCode?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressPostalCode;
  /**
  * Specifies profile based criteria for a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#province CustomerprofilesSegmentDefinition#province}
  */
  readonly province?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressProvince;
  /**
  * Specifies profile based criteria for a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#state CustomerprofilesSegmentDefinition#state}
  */
  readonly state?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressState;
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    city: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCityToTerraform(struct!.city),
    country: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountryToTerraform(struct!.country),
    county: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountyToTerraform(struct!.county),
    postal_code: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressPostalCodeToTerraform(struct!.postalCode),
    province: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressProvinceToTerraform(struct!.province),
    state: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressStateToTerraform(struct!.state),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    city: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCityToHclTerraform(struct!.city),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCity",
    },
    country: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountryToHclTerraform(struct!.country),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountry",
    },
    county: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountyToHclTerraform(struct!.county),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCounty",
    },
    postal_code: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressPostalCodeToHclTerraform(struct!.postalCode),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressPostalCode",
    },
    province: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressProvinceToHclTerraform(struct!.province),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressProvince",
    },
    state: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressStateToHclTerraform(struct!.state),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressState",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddress | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._city?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city?.internalValue;
    }
    if (this._country?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country?.internalValue;
    }
    if (this._county?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.county = this._county?.internalValue;
    }
    if (this._postalCode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postalCode = this._postalCode?.internalValue;
    }
    if (this._province?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.province = this._province?.internalValue;
    }
    if (this._state?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddress | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._city.internalValue = undefined;
      this._country.internalValue = undefined;
      this._county.internalValue = undefined;
      this._postalCode.internalValue = undefined;
      this._province.internalValue = undefined;
      this._state.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._city.internalValue = value.city;
      this._country.internalValue = value.country;
      this._county.internalValue = value.county;
      this._postalCode.internalValue = value.postalCode;
      this._province.internalValue = value.province;
      this._state.internalValue = value.state;
    }
  }

  // city - computed: true, optional: true, required: false
  private _city = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCityOutputReference(this, "city");
  public get city() {
    return this._city;
  }
  public putCity(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCity) {
    this._city.internalValue = value;
  }
  public resetCity() {
    this._city.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city.internalValue;
  }

  // country - computed: true, optional: true, required: false
  private _country = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountryOutputReference(this, "country");
  public get country() {
    return this._country;
  }
  public putCountry(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountry) {
    this._country.internalValue = value;
  }
  public resetCountry() {
    this._country.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country.internalValue;
  }

  // county - computed: true, optional: true, required: false
  private _county = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountyOutputReference(this, "county");
  public get county() {
    return this._county;
  }
  public putCounty(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCounty) {
    this._county.internalValue = value;
  }
  public resetCounty() {
    this._county.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countyInput() {
    return this._county.internalValue;
  }

  // postal_code - computed: true, optional: true, required: false
  private _postalCode = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressPostalCodeOutputReference(this, "postal_code");
  public get postalCode() {
    return this._postalCode;
  }
  public putPostalCode(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressPostalCode) {
    this._postalCode.internalValue = value;
  }
  public resetPostalCode() {
    this._postalCode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postalCodeInput() {
    return this._postalCode.internalValue;
  }

  // province - computed: true, optional: true, required: false
  private _province = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressProvinceOutputReference(this, "province");
  public get province() {
    return this._province;
  }
  public putProvince(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressProvince) {
    this._province.internalValue = value;
  }
  public resetProvince() {
    this._province.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provinceInput() {
    return this._province.internalValue;
  }

  // state - computed: true, optional: true, required: false
  private _state = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressStateOutputReference(this, "state");
  public get state() {
    return this._state;
  }
  public putState(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressState) {
    this._state.internalValue = value;
  }
  public resetState() {
    this._state.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state.internalValue;
  }
}
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBirthDate {
  /**
  * The type of segment dimension to use for a date dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBirthDateToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBirthDate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBirthDateToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBirthDate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBirthDateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBirthDate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBirthDate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessEmailAddress {
  /**
  * The type of segment dimension to use for a string dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessEmailAddressToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessEmailAddress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessEmailAddressToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessEmailAddress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessEmailAddressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessEmailAddress | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessEmailAddress | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessName {
  /**
  * The type of segment dimension to use for a string dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessNameToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessNameToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessNameOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessName | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessName | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessPhoneNumber {
  /**
  * The type of segment dimension to use for a string dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessPhoneNumberToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessPhoneNumber | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessPhoneNumberToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessPhoneNumber | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessPhoneNumberOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessPhoneNumber | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessPhoneNumber | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesEmailAddress {
  /**
  * The type of segment dimension to use for a string dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesEmailAddressToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesEmailAddress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesEmailAddressToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesEmailAddress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesEmailAddressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesEmailAddress | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesEmailAddress | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesFirstName {
  /**
  * The type of segment dimension to use for a string dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesFirstNameToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesFirstName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesFirstNameToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesFirstName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesFirstNameOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesFirstName | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesFirstName | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesGenderString {
  /**
  * The type of segment dimension to use for a string dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesGenderStringToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesGenderString | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesGenderStringToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesGenderString | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesGenderStringOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesGenderString | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesGenderString | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesHomePhoneNumber {
  /**
  * The type of segment dimension to use for a string dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesHomePhoneNumberToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesHomePhoneNumber | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesHomePhoneNumberToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesHomePhoneNumber | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesHomePhoneNumberOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesHomePhoneNumber | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesHomePhoneNumber | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesLastName {
  /**
  * The type of segment dimension to use for a string dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesLastNameToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesLastName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesLastNameToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesLastName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesLastNameOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesLastName | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesLastName | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCity {
  /**
  * The type of segment dimension to use for a string dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCityToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCityToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCity | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCity | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountry {
  /**
  * The type of segment dimension to use for a string dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountryToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountry | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountryToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountry | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountry | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountry | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCounty {
  /**
  * The type of segment dimension to use for a string dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountyToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCounty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountyToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCounty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCounty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCounty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressPostalCode {
  /**
  * The type of segment dimension to use for a string dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressPostalCodeToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressPostalCode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressPostalCodeToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressPostalCode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressPostalCodeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressPostalCode | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressPostalCode | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressProvince {
  /**
  * The type of segment dimension to use for a string dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressProvinceToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressProvince | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressProvinceToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressProvince | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressProvinceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressProvince | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressProvince | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressState {
  /**
  * The type of segment dimension to use for a string dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressStateToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressState | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressStateToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressState | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressStateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressState | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressState | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddress {
  /**
  * Specifies profile based criteria for a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#city CustomerprofilesSegmentDefinition#city}
  */
  readonly city?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCity;
  /**
  * Specifies profile based criteria for a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#country CustomerprofilesSegmentDefinition#country}
  */
  readonly country?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountry;
  /**
  * Specifies profile based criteria for a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#county CustomerprofilesSegmentDefinition#county}
  */
  readonly county?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCounty;
  /**
  * Specifies profile based criteria for a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#postal_code CustomerprofilesSegmentDefinition#postal_code}
  */
  readonly postalCode?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressPostalCode;
  /**
  * Specifies profile based criteria for a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#province CustomerprofilesSegmentDefinition#province}
  */
  readonly province?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressProvince;
  /**
  * Specifies profile based criteria for a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#state CustomerprofilesSegmentDefinition#state}
  */
  readonly state?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressState;
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    city: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCityToTerraform(struct!.city),
    country: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountryToTerraform(struct!.country),
    county: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountyToTerraform(struct!.county),
    postal_code: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressPostalCodeToTerraform(struct!.postalCode),
    province: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressProvinceToTerraform(struct!.province),
    state: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressStateToTerraform(struct!.state),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    city: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCityToHclTerraform(struct!.city),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCity",
    },
    country: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountryToHclTerraform(struct!.country),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountry",
    },
    county: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountyToHclTerraform(struct!.county),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCounty",
    },
    postal_code: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressPostalCodeToHclTerraform(struct!.postalCode),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressPostalCode",
    },
    province: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressProvinceToHclTerraform(struct!.province),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressProvince",
    },
    state: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressStateToHclTerraform(struct!.state),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressState",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddress | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._city?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city?.internalValue;
    }
    if (this._country?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country?.internalValue;
    }
    if (this._county?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.county = this._county?.internalValue;
    }
    if (this._postalCode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postalCode = this._postalCode?.internalValue;
    }
    if (this._province?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.province = this._province?.internalValue;
    }
    if (this._state?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddress | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._city.internalValue = undefined;
      this._country.internalValue = undefined;
      this._county.internalValue = undefined;
      this._postalCode.internalValue = undefined;
      this._province.internalValue = undefined;
      this._state.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._city.internalValue = value.city;
      this._country.internalValue = value.country;
      this._county.internalValue = value.county;
      this._postalCode.internalValue = value.postalCode;
      this._province.internalValue = value.province;
      this._state.internalValue = value.state;
    }
  }

  // city - computed: true, optional: true, required: false
  private _city = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCityOutputReference(this, "city");
  public get city() {
    return this._city;
  }
  public putCity(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCity) {
    this._city.internalValue = value;
  }
  public resetCity() {
    this._city.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city.internalValue;
  }

  // country - computed: true, optional: true, required: false
  private _country = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountryOutputReference(this, "country");
  public get country() {
    return this._country;
  }
  public putCountry(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountry) {
    this._country.internalValue = value;
  }
  public resetCountry() {
    this._country.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country.internalValue;
  }

  // county - computed: true, optional: true, required: false
  private _county = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountyOutputReference(this, "county");
  public get county() {
    return this._county;
  }
  public putCounty(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCounty) {
    this._county.internalValue = value;
  }
  public resetCounty() {
    this._county.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countyInput() {
    return this._county.internalValue;
  }

  // postal_code - computed: true, optional: true, required: false
  private _postalCode = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressPostalCodeOutputReference(this, "postal_code");
  public get postalCode() {
    return this._postalCode;
  }
  public putPostalCode(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressPostalCode) {
    this._postalCode.internalValue = value;
  }
  public resetPostalCode() {
    this._postalCode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postalCodeInput() {
    return this._postalCode.internalValue;
  }

  // province - computed: true, optional: true, required: false
  private _province = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressProvinceOutputReference(this, "province");
  public get province() {
    return this._province;
  }
  public putProvince(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressProvince) {
    this._province.internalValue = value;
  }
  public resetProvince() {
    this._province.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provinceInput() {
    return this._province.internalValue;
  }

  // state - computed: true, optional: true, required: false
  private _state = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressStateOutputReference(this, "state");
  public get state() {
    return this._state;
  }
  public putState(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressState) {
    this._state.internalValue = value;
  }
  public resetState() {
    this._state.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state.internalValue;
  }
}
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMiddleName {
  /**
  * The type of segment dimension to use for a string dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMiddleNameToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMiddleName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMiddleNameToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMiddleName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMiddleNameOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMiddleName | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMiddleName | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMobilePhoneNumber {
  /**
  * The type of segment dimension to use for a string dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMobilePhoneNumberToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMobilePhoneNumber | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMobilePhoneNumberToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMobilePhoneNumber | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMobilePhoneNumberOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMobilePhoneNumber | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMobilePhoneNumber | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPartyTypeString {
  /**
  * The type of segment dimension to use for a string dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPartyTypeStringToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPartyTypeString | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPartyTypeStringToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPartyTypeString | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPartyTypeStringOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPartyTypeString | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPartyTypeString | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPersonalEmailAddress {
  /**
  * The type of segment dimension to use for a string dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPersonalEmailAddressToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPersonalEmailAddress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPersonalEmailAddressToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPersonalEmailAddress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPersonalEmailAddressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPersonalEmailAddress | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPersonalEmailAddress | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPhoneNumber {
  /**
  * The type of segment dimension to use for a string dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPhoneNumberToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPhoneNumber | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPhoneNumberToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPhoneNumber | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPhoneNumberOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPhoneNumber | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPhoneNumber | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesProfileType {
  /**
  * The type of segment dimension to use for a profile type dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesProfileTypeToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesProfileType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesProfileTypeToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesProfileType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesProfileTypeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesProfileType | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesProfileType | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCity {
  /**
  * The type of segment dimension to use for a string dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCityToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCityToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCity | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCity | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountry {
  /**
  * The type of segment dimension to use for a string dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountryToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountry | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountryToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountry | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountry | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountry | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCounty {
  /**
  * The type of segment dimension to use for a string dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountyToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCounty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountyToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCounty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCounty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCounty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressPostalCode {
  /**
  * The type of segment dimension to use for a string dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressPostalCodeToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressPostalCode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressPostalCodeToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressPostalCode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressPostalCodeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressPostalCode | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressPostalCode | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressProvince {
  /**
  * The type of segment dimension to use for a string dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressProvinceToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressProvince | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressProvinceToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressProvince | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressProvinceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressProvince | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressProvince | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressState {
  /**
  * The type of segment dimension to use for a string dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimension_type CustomerprofilesSegmentDefinition#dimension_type}
  */
  readonly dimensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#values CustomerprofilesSegmentDefinition#values}
  */
  readonly values?: string[];
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressStateToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressState | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressStateToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressState | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressStateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressState | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionType = this._dimensionType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressState | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionType = value.dimensionType;
      this._values = value.values;
    }
  }

  // dimension_type - computed: true, optional: true, required: false
  private _dimensionType?: string; 
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }
  public set dimensionType(value: string) {
    this._dimensionType = value;
  }
  public resetDimensionType() {
    this._dimensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionTypeInput() {
    return this._dimensionType;
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
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddress {
  /**
  * Specifies profile based criteria for a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#city CustomerprofilesSegmentDefinition#city}
  */
  readonly city?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCity;
  /**
  * Specifies profile based criteria for a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#country CustomerprofilesSegmentDefinition#country}
  */
  readonly country?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountry;
  /**
  * Specifies profile based criteria for a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#county CustomerprofilesSegmentDefinition#county}
  */
  readonly county?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCounty;
  /**
  * Specifies profile based criteria for a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#postal_code CustomerprofilesSegmentDefinition#postal_code}
  */
  readonly postalCode?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressPostalCode;
  /**
  * Specifies profile based criteria for a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#province CustomerprofilesSegmentDefinition#province}
  */
  readonly province?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressProvince;
  /**
  * Specifies profile based criteria for a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#state CustomerprofilesSegmentDefinition#state}
  */
  readonly state?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressState;
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    city: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCityToTerraform(struct!.city),
    country: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountryToTerraform(struct!.country),
    county: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountyToTerraform(struct!.county),
    postal_code: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressPostalCodeToTerraform(struct!.postalCode),
    province: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressProvinceToTerraform(struct!.province),
    state: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressStateToTerraform(struct!.state),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    city: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCityToHclTerraform(struct!.city),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCity",
    },
    country: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountryToHclTerraform(struct!.country),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountry",
    },
    county: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountyToHclTerraform(struct!.county),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCounty",
    },
    postal_code: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressPostalCodeToHclTerraform(struct!.postalCode),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressPostalCode",
    },
    province: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressProvinceToHclTerraform(struct!.province),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressProvince",
    },
    state: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressStateToHclTerraform(struct!.state),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressState",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddress | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._city?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city?.internalValue;
    }
    if (this._country?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country?.internalValue;
    }
    if (this._county?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.county = this._county?.internalValue;
    }
    if (this._postalCode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postalCode = this._postalCode?.internalValue;
    }
    if (this._province?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.province = this._province?.internalValue;
    }
    if (this._state?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddress | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._city.internalValue = undefined;
      this._country.internalValue = undefined;
      this._county.internalValue = undefined;
      this._postalCode.internalValue = undefined;
      this._province.internalValue = undefined;
      this._state.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._city.internalValue = value.city;
      this._country.internalValue = value.country;
      this._county.internalValue = value.county;
      this._postalCode.internalValue = value.postalCode;
      this._province.internalValue = value.province;
      this._state.internalValue = value.state;
    }
  }

  // city - computed: true, optional: true, required: false
  private _city = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCityOutputReference(this, "city");
  public get city() {
    return this._city;
  }
  public putCity(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCity) {
    this._city.internalValue = value;
  }
  public resetCity() {
    this._city.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city.internalValue;
  }

  // country - computed: true, optional: true, required: false
  private _country = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountryOutputReference(this, "country");
  public get country() {
    return this._country;
  }
  public putCountry(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountry) {
    this._country.internalValue = value;
  }
  public resetCountry() {
    this._country.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country.internalValue;
  }

  // county - computed: true, optional: true, required: false
  private _county = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountyOutputReference(this, "county");
  public get county() {
    return this._county;
  }
  public putCounty(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCounty) {
    this._county.internalValue = value;
  }
  public resetCounty() {
    this._county.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countyInput() {
    return this._county.internalValue;
  }

  // postal_code - computed: true, optional: true, required: false
  private _postalCode = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressPostalCodeOutputReference(this, "postal_code");
  public get postalCode() {
    return this._postalCode;
  }
  public putPostalCode(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressPostalCode) {
    this._postalCode.internalValue = value;
  }
  public resetPostalCode() {
    this._postalCode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postalCodeInput() {
    return this._postalCode.internalValue;
  }

  // province - computed: true, optional: true, required: false
  private _province = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressProvinceOutputReference(this, "province");
  public get province() {
    return this._province;
  }
  public putProvince(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressProvince) {
    this._province.internalValue = value;
  }
  public resetProvince() {
    this._province.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provinceInput() {
    return this._province.internalValue;
  }

  // state - computed: true, optional: true, required: false
  private _state = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressStateOutputReference(this, "state");
  public get state() {
    return this._state;
  }
  public putState(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressState) {
    this._state.internalValue = value;
  }
  public resetState() {
    this._state.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state.internalValue;
  }
}
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributes {
  /**
  * Specifies profile based criteria for a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#account_number CustomerprofilesSegmentDefinition#account_number}
  */
  readonly accountNumber?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAccountNumber;
  /**
  * Specifies criteria for a segment using extended-length string values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#additional_information CustomerprofilesSegmentDefinition#additional_information}
  */
  readonly additionalInformation?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAdditionalInformation;
  /**
  * The address based criteria for the segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#address CustomerprofilesSegmentDefinition#address}
  */
  readonly address?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddress;
  /**
  * One or more custom attributes to use as criteria for the segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#attributes CustomerprofilesSegmentDefinition#attributes}
  */
  readonly attributes?: { [key: string]: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAttributes } | cdktn.IResolvable;
  /**
  * The address based criteria for the segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#billing_address CustomerprofilesSegmentDefinition#billing_address}
  */
  readonly billingAddress?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddress;
  /**
  * Specifies date based criteria for a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#birth_date CustomerprofilesSegmentDefinition#birth_date}
  */
  readonly birthDate?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBirthDate;
  /**
  * Specifies profile based criteria for a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#business_email_address CustomerprofilesSegmentDefinition#business_email_address}
  */
  readonly businessEmailAddress?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessEmailAddress;
  /**
  * Specifies profile based criteria for a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#business_name CustomerprofilesSegmentDefinition#business_name}
  */
  readonly businessName?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessName;
  /**
  * Specifies profile based criteria for a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#business_phone_number CustomerprofilesSegmentDefinition#business_phone_number}
  */
  readonly businessPhoneNumber?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessPhoneNumber;
  /**
  * Specifies profile based criteria for a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#email_address CustomerprofilesSegmentDefinition#email_address}
  */
  readonly emailAddress?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesEmailAddress;
  /**
  * Specifies profile based criteria for a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#first_name CustomerprofilesSegmentDefinition#first_name}
  */
  readonly firstName?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesFirstName;
  /**
  * Specifies profile based criteria for a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#gender_string CustomerprofilesSegmentDefinition#gender_string}
  */
  readonly genderString?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesGenderString;
  /**
  * Specifies profile based criteria for a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#home_phone_number CustomerprofilesSegmentDefinition#home_phone_number}
  */
  readonly homePhoneNumber?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesHomePhoneNumber;
  /**
  * Specifies profile based criteria for a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#last_name CustomerprofilesSegmentDefinition#last_name}
  */
  readonly lastName?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesLastName;
  /**
  * The address based criteria for the segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#mailing_address CustomerprofilesSegmentDefinition#mailing_address}
  */
  readonly mailingAddress?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddress;
  /**
  * Specifies profile based criteria for a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#middle_name CustomerprofilesSegmentDefinition#middle_name}
  */
  readonly middleName?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMiddleName;
  /**
  * Specifies profile based criteria for a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#mobile_phone_number CustomerprofilesSegmentDefinition#mobile_phone_number}
  */
  readonly mobilePhoneNumber?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMobilePhoneNumber;
  /**
  * Specifies profile based criteria for a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#party_type_string CustomerprofilesSegmentDefinition#party_type_string}
  */
  readonly partyTypeString?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPartyTypeString;
  /**
  * Specifies profile based criteria for a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#personal_email_address CustomerprofilesSegmentDefinition#personal_email_address}
  */
  readonly personalEmailAddress?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPersonalEmailAddress;
  /**
  * Specifies profile based criteria for a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#phone_number CustomerprofilesSegmentDefinition#phone_number}
  */
  readonly phoneNumber?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPhoneNumber;
  /**
  * Specifies profile type based criteria for a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#profile_type CustomerprofilesSegmentDefinition#profile_type}
  */
  readonly profileType?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesProfileType;
  /**
  * The address based criteria for the segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#shipping_address CustomerprofilesSegmentDefinition#shipping_address}
  */
  readonly shippingAddress?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddress;
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_number: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAccountNumberToTerraform(struct!.accountNumber),
    additional_information: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAdditionalInformationToTerraform(struct!.additionalInformation),
    address: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressToTerraform(struct!.address),
    attributes: cdktn.hashMapper(customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAttributesToTerraform)(struct!.attributes),
    billing_address: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressToTerraform(struct!.billingAddress),
    birth_date: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBirthDateToTerraform(struct!.birthDate),
    business_email_address: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessEmailAddressToTerraform(struct!.businessEmailAddress),
    business_name: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessNameToTerraform(struct!.businessName),
    business_phone_number: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessPhoneNumberToTerraform(struct!.businessPhoneNumber),
    email_address: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesEmailAddressToTerraform(struct!.emailAddress),
    first_name: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesFirstNameToTerraform(struct!.firstName),
    gender_string: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesGenderStringToTerraform(struct!.genderString),
    home_phone_number: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesHomePhoneNumberToTerraform(struct!.homePhoneNumber),
    last_name: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesLastNameToTerraform(struct!.lastName),
    mailing_address: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressToTerraform(struct!.mailingAddress),
    middle_name: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMiddleNameToTerraform(struct!.middleName),
    mobile_phone_number: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMobilePhoneNumberToTerraform(struct!.mobilePhoneNumber),
    party_type_string: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPartyTypeStringToTerraform(struct!.partyTypeString),
    personal_email_address: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPersonalEmailAddressToTerraform(struct!.personalEmailAddress),
    phone_number: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPhoneNumberToTerraform(struct!.phoneNumber),
    profile_type: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesProfileTypeToTerraform(struct!.profileType),
    shipping_address: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressToTerraform(struct!.shippingAddress),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_number: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAccountNumberToHclTerraform(struct!.accountNumber),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAccountNumber",
    },
    additional_information: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAdditionalInformationToHclTerraform(struct!.additionalInformation),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAdditionalInformation",
    },
    address: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressToHclTerraform(struct!.address),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddress",
    },
    attributes: {
      value: cdktn.hashMapperHcl(customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAttributesToHclTerraform)(struct!.attributes),
      isBlock: true,
      type: "map",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAttributesMap",
    },
    billing_address: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressToHclTerraform(struct!.billingAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddress",
    },
    birth_date: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBirthDateToHclTerraform(struct!.birthDate),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBirthDate",
    },
    business_email_address: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessEmailAddressToHclTerraform(struct!.businessEmailAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessEmailAddress",
    },
    business_name: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessNameToHclTerraform(struct!.businessName),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessName",
    },
    business_phone_number: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessPhoneNumberToHclTerraform(struct!.businessPhoneNumber),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessPhoneNumber",
    },
    email_address: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesEmailAddressToHclTerraform(struct!.emailAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesEmailAddress",
    },
    first_name: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesFirstNameToHclTerraform(struct!.firstName),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesFirstName",
    },
    gender_string: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesGenderStringToHclTerraform(struct!.genderString),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesGenderString",
    },
    home_phone_number: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesHomePhoneNumberToHclTerraform(struct!.homePhoneNumber),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesHomePhoneNumber",
    },
    last_name: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesLastNameToHclTerraform(struct!.lastName),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesLastName",
    },
    mailing_address: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressToHclTerraform(struct!.mailingAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddress",
    },
    middle_name: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMiddleNameToHclTerraform(struct!.middleName),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMiddleName",
    },
    mobile_phone_number: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMobilePhoneNumberToHclTerraform(struct!.mobilePhoneNumber),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMobilePhoneNumber",
    },
    party_type_string: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPartyTypeStringToHclTerraform(struct!.partyTypeString),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPartyTypeString",
    },
    personal_email_address: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPersonalEmailAddressToHclTerraform(struct!.personalEmailAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPersonalEmailAddress",
    },
    phone_number: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPhoneNumberToHclTerraform(struct!.phoneNumber),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPhoneNumber",
    },
    profile_type: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesProfileTypeToHclTerraform(struct!.profileType),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesProfileType",
    },
    shipping_address: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressToHclTerraform(struct!.shippingAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddress",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountNumber?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountNumber = this._accountNumber?.internalValue;
    }
    if (this._additionalInformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalInformation = this._additionalInformation?.internalValue;
    }
    if (this._address?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address?.internalValue;
    }
    if (this._attributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes?.internalValue;
    }
    if (this._billingAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.billingAddress = this._billingAddress?.internalValue;
    }
    if (this._birthDate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.birthDate = this._birthDate?.internalValue;
    }
    if (this._businessEmailAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.businessEmailAddress = this._businessEmailAddress?.internalValue;
    }
    if (this._businessName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.businessName = this._businessName?.internalValue;
    }
    if (this._businessPhoneNumber?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.businessPhoneNumber = this._businessPhoneNumber?.internalValue;
    }
    if (this._emailAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddress = this._emailAddress?.internalValue;
    }
    if (this._firstName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstName = this._firstName?.internalValue;
    }
    if (this._genderString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.genderString = this._genderString?.internalValue;
    }
    if (this._homePhoneNumber?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.homePhoneNumber = this._homePhoneNumber?.internalValue;
    }
    if (this._lastName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastName = this._lastName?.internalValue;
    }
    if (this._mailingAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mailingAddress = this._mailingAddress?.internalValue;
    }
    if (this._middleName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.middleName = this._middleName?.internalValue;
    }
    if (this._mobilePhoneNumber?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobilePhoneNumber = this._mobilePhoneNumber?.internalValue;
    }
    if (this._partyTypeString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.partyTypeString = this._partyTypeString?.internalValue;
    }
    if (this._personalEmailAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.personalEmailAddress = this._personalEmailAddress?.internalValue;
    }
    if (this._phoneNumber?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber?.internalValue;
    }
    if (this._profileType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileType = this._profileType?.internalValue;
    }
    if (this._shippingAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shippingAddress = this._shippingAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountNumber.internalValue = undefined;
      this._additionalInformation.internalValue = undefined;
      this._address.internalValue = undefined;
      this._attributes.internalValue = undefined;
      this._billingAddress.internalValue = undefined;
      this._birthDate.internalValue = undefined;
      this._businessEmailAddress.internalValue = undefined;
      this._businessName.internalValue = undefined;
      this._businessPhoneNumber.internalValue = undefined;
      this._emailAddress.internalValue = undefined;
      this._firstName.internalValue = undefined;
      this._genderString.internalValue = undefined;
      this._homePhoneNumber.internalValue = undefined;
      this._lastName.internalValue = undefined;
      this._mailingAddress.internalValue = undefined;
      this._middleName.internalValue = undefined;
      this._mobilePhoneNumber.internalValue = undefined;
      this._partyTypeString.internalValue = undefined;
      this._personalEmailAddress.internalValue = undefined;
      this._phoneNumber.internalValue = undefined;
      this._profileType.internalValue = undefined;
      this._shippingAddress.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountNumber.internalValue = value.accountNumber;
      this._additionalInformation.internalValue = value.additionalInformation;
      this._address.internalValue = value.address;
      this._attributes.internalValue = value.attributes;
      this._billingAddress.internalValue = value.billingAddress;
      this._birthDate.internalValue = value.birthDate;
      this._businessEmailAddress.internalValue = value.businessEmailAddress;
      this._businessName.internalValue = value.businessName;
      this._businessPhoneNumber.internalValue = value.businessPhoneNumber;
      this._emailAddress.internalValue = value.emailAddress;
      this._firstName.internalValue = value.firstName;
      this._genderString.internalValue = value.genderString;
      this._homePhoneNumber.internalValue = value.homePhoneNumber;
      this._lastName.internalValue = value.lastName;
      this._mailingAddress.internalValue = value.mailingAddress;
      this._middleName.internalValue = value.middleName;
      this._mobilePhoneNumber.internalValue = value.mobilePhoneNumber;
      this._partyTypeString.internalValue = value.partyTypeString;
      this._personalEmailAddress.internalValue = value.personalEmailAddress;
      this._phoneNumber.internalValue = value.phoneNumber;
      this._profileType.internalValue = value.profileType;
      this._shippingAddress.internalValue = value.shippingAddress;
    }
  }

  // account_number - computed: true, optional: true, required: false
  private _accountNumber = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAccountNumberOutputReference(this, "account_number");
  public get accountNumber() {
    return this._accountNumber;
  }
  public putAccountNumber(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAccountNumber) {
    this._accountNumber.internalValue = value;
  }
  public resetAccountNumber() {
    this._accountNumber.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNumberInput() {
    return this._accountNumber.internalValue;
  }

  // additional_information - computed: true, optional: true, required: false
  private _additionalInformation = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAdditionalInformationOutputReference(this, "additional_information");
  public get additionalInformation() {
    return this._additionalInformation;
  }
  public putAdditionalInformation(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAdditionalInformation) {
    this._additionalInformation.internalValue = value;
  }
  public resetAdditionalInformation() {
    this._additionalInformation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalInformationInput() {
    return this._additionalInformation.internalValue;
  }

  // address - computed: true, optional: true, required: false
  private _address = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressOutputReference(this, "address");
  public get address() {
    return this._address;
  }
  public putAddress(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddress) {
    this._address.internalValue = value;
  }
  public resetAddress() {
    this._address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address.internalValue;
  }

  // attributes - computed: true, optional: true, required: false
  private _attributes = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAttributesMap(this, "attributes");
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: { [key: string]: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAttributes } | cdktn.IResolvable) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // billing_address - computed: true, optional: true, required: false
  private _billingAddress = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressOutputReference(this, "billing_address");
  public get billingAddress() {
    return this._billingAddress;
  }
  public putBillingAddress(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddress) {
    this._billingAddress.internalValue = value;
  }
  public resetBillingAddress() {
    this._billingAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingAddressInput() {
    return this._billingAddress.internalValue;
  }

  // birth_date - computed: true, optional: true, required: false
  private _birthDate = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBirthDateOutputReference(this, "birth_date");
  public get birthDate() {
    return this._birthDate;
  }
  public putBirthDate(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBirthDate) {
    this._birthDate.internalValue = value;
  }
  public resetBirthDate() {
    this._birthDate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get birthDateInput() {
    return this._birthDate.internalValue;
  }

  // business_email_address - computed: true, optional: true, required: false
  private _businessEmailAddress = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessEmailAddressOutputReference(this, "business_email_address");
  public get businessEmailAddress() {
    return this._businessEmailAddress;
  }
  public putBusinessEmailAddress(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessEmailAddress) {
    this._businessEmailAddress.internalValue = value;
  }
  public resetBusinessEmailAddress() {
    this._businessEmailAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessEmailAddressInput() {
    return this._businessEmailAddress.internalValue;
  }

  // business_name - computed: true, optional: true, required: false
  private _businessName = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessNameOutputReference(this, "business_name");
  public get businessName() {
    return this._businessName;
  }
  public putBusinessName(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessName) {
    this._businessName.internalValue = value;
  }
  public resetBusinessName() {
    this._businessName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessNameInput() {
    return this._businessName.internalValue;
  }

  // business_phone_number - computed: true, optional: true, required: false
  private _businessPhoneNumber = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessPhoneNumberOutputReference(this, "business_phone_number");
  public get businessPhoneNumber() {
    return this._businessPhoneNumber;
  }
  public putBusinessPhoneNumber(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessPhoneNumber) {
    this._businessPhoneNumber.internalValue = value;
  }
  public resetBusinessPhoneNumber() {
    this._businessPhoneNumber.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessPhoneNumberInput() {
    return this._businessPhoneNumber.internalValue;
  }

  // email_address - computed: true, optional: true, required: false
  private _emailAddress = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesEmailAddressOutputReference(this, "email_address");
  public get emailAddress() {
    return this._emailAddress;
  }
  public putEmailAddress(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesEmailAddress) {
    this._emailAddress.internalValue = value;
  }
  public resetEmailAddress() {
    this._emailAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress.internalValue;
  }

  // first_name - computed: true, optional: true, required: false
  private _firstName = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesFirstNameOutputReference(this, "first_name");
  public get firstName() {
    return this._firstName;
  }
  public putFirstName(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesFirstName) {
    this._firstName.internalValue = value;
  }
  public resetFirstName() {
    this._firstName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName.internalValue;
  }

  // gender_string - computed: true, optional: true, required: false
  private _genderString = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesGenderStringOutputReference(this, "gender_string");
  public get genderString() {
    return this._genderString;
  }
  public putGenderString(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesGenderString) {
    this._genderString.internalValue = value;
  }
  public resetGenderString() {
    this._genderString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genderStringInput() {
    return this._genderString.internalValue;
  }

  // home_phone_number - computed: true, optional: true, required: false
  private _homePhoneNumber = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesHomePhoneNumberOutputReference(this, "home_phone_number");
  public get homePhoneNumber() {
    return this._homePhoneNumber;
  }
  public putHomePhoneNumber(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesHomePhoneNumber) {
    this._homePhoneNumber.internalValue = value;
  }
  public resetHomePhoneNumber() {
    this._homePhoneNumber.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homePhoneNumberInput() {
    return this._homePhoneNumber.internalValue;
  }

  // last_name - computed: true, optional: true, required: false
  private _lastName = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesLastNameOutputReference(this, "last_name");
  public get lastName() {
    return this._lastName;
  }
  public putLastName(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesLastName) {
    this._lastName.internalValue = value;
  }
  public resetLastName() {
    this._lastName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName.internalValue;
  }

  // mailing_address - computed: true, optional: true, required: false
  private _mailingAddress = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressOutputReference(this, "mailing_address");
  public get mailingAddress() {
    return this._mailingAddress;
  }
  public putMailingAddress(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddress) {
    this._mailingAddress.internalValue = value;
  }
  public resetMailingAddress() {
    this._mailingAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailingAddressInput() {
    return this._mailingAddress.internalValue;
  }

  // middle_name - computed: true, optional: true, required: false
  private _middleName = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMiddleNameOutputReference(this, "middle_name");
  public get middleName() {
    return this._middleName;
  }
  public putMiddleName(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMiddleName) {
    this._middleName.internalValue = value;
  }
  public resetMiddleName() {
    this._middleName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get middleNameInput() {
    return this._middleName.internalValue;
  }

  // mobile_phone_number - computed: true, optional: true, required: false
  private _mobilePhoneNumber = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMobilePhoneNumberOutputReference(this, "mobile_phone_number");
  public get mobilePhoneNumber() {
    return this._mobilePhoneNumber;
  }
  public putMobilePhoneNumber(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMobilePhoneNumber) {
    this._mobilePhoneNumber.internalValue = value;
  }
  public resetMobilePhoneNumber() {
    this._mobilePhoneNumber.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobilePhoneNumberInput() {
    return this._mobilePhoneNumber.internalValue;
  }

  // party_type_string - computed: true, optional: true, required: false
  private _partyTypeString = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPartyTypeStringOutputReference(this, "party_type_string");
  public get partyTypeString() {
    return this._partyTypeString;
  }
  public putPartyTypeString(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPartyTypeString) {
    this._partyTypeString.internalValue = value;
  }
  public resetPartyTypeString() {
    this._partyTypeString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partyTypeStringInput() {
    return this._partyTypeString.internalValue;
  }

  // personal_email_address - computed: true, optional: true, required: false
  private _personalEmailAddress = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPersonalEmailAddressOutputReference(this, "personal_email_address");
  public get personalEmailAddress() {
    return this._personalEmailAddress;
  }
  public putPersonalEmailAddress(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPersonalEmailAddress) {
    this._personalEmailAddress.internalValue = value;
  }
  public resetPersonalEmailAddress() {
    this._personalEmailAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personalEmailAddressInput() {
    return this._personalEmailAddress.internalValue;
  }

  // phone_number - computed: true, optional: true, required: false
  private _phoneNumber = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPhoneNumberOutputReference(this, "phone_number");
  public get phoneNumber() {
    return this._phoneNumber;
  }
  public putPhoneNumber(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPhoneNumber) {
    this._phoneNumber.internalValue = value;
  }
  public resetPhoneNumber() {
    this._phoneNumber.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber.internalValue;
  }

  // profile_type - computed: true, optional: true, required: false
  private _profileType = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesProfileTypeOutputReference(this, "profile_type");
  public get profileType() {
    return this._profileType;
  }
  public putProfileType(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesProfileType) {
    this._profileType.internalValue = value;
  }
  public resetProfileType() {
    this._profileType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileTypeInput() {
    return this._profileType.internalValue;
  }

  // shipping_address - computed: true, optional: true, required: false
  private _shippingAddress = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressOutputReference(this, "shipping_address");
  public get shippingAddress() {
    return this._shippingAddress;
  }
  public putShippingAddress(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddress) {
    this._shippingAddress.internalValue = value;
  }
  public resetShippingAddress() {
    this._shippingAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shippingAddressInput() {
    return this._shippingAddress.internalValue;
  }
}
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensions {
  /**
  * One or more calculated attributes to use as criteria for the segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#calculated_attributes CustomerprofilesSegmentDefinition#calculated_attributes}
  */
  readonly calculatedAttributes?: { [key: string]: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributes } | cdktn.IResolvable;
  /**
  * Specifies the dimension settings within profile attributes for a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#profile_attributes CustomerprofilesSegmentDefinition#profile_attributes}
  */
  readonly profileAttributes?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributes;
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    calculated_attributes: cdktn.hashMapper(customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesToTerraform)(struct!.calculatedAttributes),
    profile_attributes: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesToTerraform(struct!.profileAttributes),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    calculated_attributes: {
      value: cdktn.hashMapperHcl(customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesToHclTerraform)(struct!.calculatedAttributes),
      isBlock: true,
      type: "map",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesMap",
    },
    profile_attributes: {
      value: customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesToHclTerraform(struct!.profileAttributes),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributes",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._calculatedAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.calculatedAttributes = this._calculatedAttributes?.internalValue;
    }
    if (this._profileAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileAttributes = this._profileAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._calculatedAttributes.internalValue = undefined;
      this._profileAttributes.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._calculatedAttributes.internalValue = value.calculatedAttributes;
      this._profileAttributes.internalValue = value.profileAttributes;
    }
  }

  // calculated_attributes - computed: true, optional: true, required: false
  private _calculatedAttributes = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesMap(this, "calculated_attributes");
  public get calculatedAttributes() {
    return this._calculatedAttributes;
  }
  public putCalculatedAttributes(value: { [key: string]: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributes } | cdktn.IResolvable) {
    this._calculatedAttributes.internalValue = value;
  }
  public resetCalculatedAttributes() {
    this._calculatedAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calculatedAttributesInput() {
    return this._calculatedAttributes.internalValue;
  }

  // profile_attributes - computed: true, optional: true, required: false
  private _profileAttributes = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesOutputReference(this, "profile_attributes");
  public get profileAttributes() {
    return this._profileAttributes;
  }
  public putProfileAttributes(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributes) {
    this._profileAttributes.internalValue = value;
  }
  public resetProfileAttributes() {
    this._profileAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileAttributesInput() {
    return this._profileAttributes.internalValue;
  }
}

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsList extends cdktn.ComplexList {
  public internalValue? : CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensions[] | cdktn.IResolvable

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
  public get(index: number): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsOutputReference {
    return new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroupsSourceSegments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#segment_definition_name CustomerprofilesSegmentDefinition#segment_definition_name}
  */
  readonly segmentDefinitionName?: string;
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsSourceSegmentsToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsSourceSegments | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    segment_definition_name: cdktn.stringToTerraform(struct!.segmentDefinitionName),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsSourceSegmentsToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsSourceSegments | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    segment_definition_name: {
      value: cdktn.stringToHclTerraform(struct!.segmentDefinitionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsSourceSegmentsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsSourceSegments | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._segmentDefinitionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentDefinitionName = this._segmentDefinitionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsSourceSegments | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._segmentDefinitionName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._segmentDefinitionName = value.segmentDefinitionName;
    }
  }

  // segment_definition_name - computed: true, optional: true, required: false
  private _segmentDefinitionName?: string; 
  public get segmentDefinitionName() {
    return this.getStringAttribute('segment_definition_name');
  }
  public set segmentDefinitionName(value: string) {
    this._segmentDefinitionName = value;
  }
  public resetSegmentDefinitionName() {
    this._segmentDefinitionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentDefinitionNameInput() {
    return this._segmentDefinitionName;
  }
}

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsSourceSegmentsList extends cdktn.ComplexList {
  public internalValue? : CustomerprofilesSegmentDefinitionSegmentGroupsGroupsSourceSegments[] | cdktn.IResolvable

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
  public get(index: number): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsSourceSegmentsOutputReference {
    return new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsSourceSegmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomerprofilesSegmentDefinitionSegmentGroupsGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#dimensions CustomerprofilesSegmentDefinition#dimensions}
  */
  readonly dimensions?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#source_segments CustomerprofilesSegmentDefinition#source_segments}
  */
  readonly sourceSegments?: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsSourceSegments[] | cdktn.IResolvable;
  /**
  * Specifies the operator on how to handle multiple groups within the same segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#source_type CustomerprofilesSegmentDefinition#source_type}
  */
  readonly sourceType?: string;
  /**
  * Specifies the operator on how to handle multiple groups within the same segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#type CustomerprofilesSegmentDefinition#type}
  */
  readonly type?: string;
}

export function customerprofilesSegmentDefinitionSegmentGroupsGroupsToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroups | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimensions: cdktn.listMapper(customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsToTerraform, false)(struct!.dimensions),
    source_segments: cdktn.listMapper(customerprofilesSegmentDefinitionSegmentGroupsGroupsSourceSegmentsToTerraform, false)(struct!.sourceSegments),
    source_type: cdktn.stringToTerraform(struct!.sourceType),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsGroupsToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroupsGroups | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimensions: {
      value: cdktn.listMapperHcl(customerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsToHclTerraform, false)(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsList",
    },
    source_segments: {
      value: cdktn.listMapperHcl(customerprofilesSegmentDefinitionSegmentGroupsGroupsSourceSegmentsToHclTerraform, false)(struct!.sourceSegments),
      isBlock: true,
      type: "list",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsSourceSegmentsList",
    },
    source_type: {
      value: cdktn.stringToHclTerraform(struct!.sourceType),
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroupsGroups | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    if (this._sourceSegments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceSegments = this._sourceSegments?.internalValue;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroups | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensions.internalValue = undefined;
      this._sourceSegments.internalValue = undefined;
      this._sourceType = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensions.internalValue = value.dimensions;
      this._sourceSegments.internalValue = value.sourceSegments;
      this._sourceType = value.sourceType;
      this._type = value.type;
    }
  }

  // dimensions - computed: true, optional: true, required: false
  private _dimensions = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensions[] | cdktn.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // source_segments - computed: true, optional: true, required: false
  private _sourceSegments = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsSourceSegmentsList(this, "source_segments", false);
  public get sourceSegments() {
    return this._sourceSegments;
  }
  public putSourceSegments(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroupsSourceSegments[] | cdktn.IResolvable) {
    this._sourceSegments.internalValue = value;
  }
  public resetSourceSegments() {
    this._sourceSegments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSegmentsInput() {
    return this._sourceSegments.internalValue;
  }

  // source_type - computed: true, optional: true, required: false
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  public resetSourceType() {
    this._sourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
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

export class CustomerprofilesSegmentDefinitionSegmentGroupsGroupsList extends cdktn.ComplexList {
  public internalValue? : CustomerprofilesSegmentDefinitionSegmentGroupsGroups[] | cdktn.IResolvable

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
  public get(index: number): CustomerprofilesSegmentDefinitionSegmentGroupsGroupsOutputReference {
    return new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomerprofilesSegmentDefinitionSegmentGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#groups CustomerprofilesSegmentDefinition#groups}
  */
  readonly groups?: CustomerprofilesSegmentDefinitionSegmentGroupsGroups[] | cdktn.IResolvable;
  /**
  * Specifies the operator on how to handle multiple groups within the same segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#include CustomerprofilesSegmentDefinition#include}
  */
  readonly include?: string;
}

export function customerprofilesSegmentDefinitionSegmentGroupsToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroups | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    groups: cdktn.listMapper(customerprofilesSegmentDefinitionSegmentGroupsGroupsToTerraform, false)(struct!.groups),
    include: cdktn.stringToTerraform(struct!.include),
  }
}


export function customerprofilesSegmentDefinitionSegmentGroupsToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentGroups | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    groups: {
      value: cdktn.listMapperHcl(customerprofilesSegmentDefinitionSegmentGroupsGroupsToHclTerraform, false)(struct!.groups),
      isBlock: true,
      type: "list",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroupsGroupsList",
    },
    include: {
      value: cdktn.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesSegmentDefinitionSegmentGroupsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentGroups | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups?.internalValue;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentGroups | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groups.internalValue = undefined;
      this._include = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groups.internalValue = value.groups;
      this._include = value.include;
    }
  }

  // groups - computed: true, optional: true, required: false
  private _groups = new CustomerprofilesSegmentDefinitionSegmentGroupsGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: CustomerprofilesSegmentDefinitionSegmentGroupsGroups[] | cdktn.IResolvable) {
    this._groups.internalValue = value;
  }
  public resetGroups() {
    this._groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }

  // include - computed: true, optional: true, required: false
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }
}
export interface CustomerprofilesSegmentDefinitionSegmentSortAttributes {
  /**
  * The data type of the sort attribute (e.g., string, number, date).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#data_type CustomerprofilesSegmentDefinition#data_type}
  */
  readonly dataType?: string;
  /**
  * The name of the attribute to sort by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#name CustomerprofilesSegmentDefinition#name}
  */
  readonly name?: string;
  /**
  * The sort order for the attribute (ascending or descending).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#order CustomerprofilesSegmentDefinition#order}
  */
  readonly order?: string;
  /**
  * The type of attribute (e.g., profile, calculated).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#type CustomerprofilesSegmentDefinition#type}
  */
  readonly type?: string;
}

export function customerprofilesSegmentDefinitionSegmentSortAttributesToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentSortAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_type: cdktn.stringToTerraform(struct!.dataType),
    name: cdktn.stringToTerraform(struct!.name),
    order: cdktn.stringToTerraform(struct!.order),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function customerprofilesSegmentDefinitionSegmentSortAttributesToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentSortAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_type: {
      value: cdktn.stringToHclTerraform(struct!.dataType),
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
    order: {
      value: cdktn.stringToHclTerraform(struct!.order),
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

export class CustomerprofilesSegmentDefinitionSegmentSortAttributesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentSortAttributes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentSortAttributes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataType = undefined;
      this._name = undefined;
      this._order = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataType = value.dataType;
      this._name = value.name;
      this._order = value.order;
      this._type = value.type;
    }
  }

  // data_type - computed: true, optional: true, required: false
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
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

  // order - computed: true, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
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

export class CustomerprofilesSegmentDefinitionSegmentSortAttributesList extends cdktn.ComplexList {
  public internalValue? : CustomerprofilesSegmentDefinitionSegmentSortAttributes[] | cdktn.IResolvable

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
  public get(index: number): CustomerprofilesSegmentDefinitionSegmentSortAttributesOutputReference {
    return new CustomerprofilesSegmentDefinitionSegmentSortAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomerprofilesSegmentDefinitionSegmentSort {
  /**
  * A list of attributes used to sort the segments and their ordering preferences.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#attributes CustomerprofilesSegmentDefinition#attributes}
  */
  readonly attributes?: CustomerprofilesSegmentDefinitionSegmentSortAttributes[] | cdktn.IResolvable;
}

export function customerprofilesSegmentDefinitionSegmentSortToTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentSort | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attributes: cdktn.listMapper(customerprofilesSegmentDefinitionSegmentSortAttributesToTerraform, false)(struct!.attributes),
  }
}


export function customerprofilesSegmentDefinitionSegmentSortToHclTerraform(struct?: CustomerprofilesSegmentDefinitionSegmentSort | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attributes: {
      value: cdktn.listMapperHcl(customerprofilesSegmentDefinitionSegmentSortAttributesToHclTerraform, false)(struct!.attributes),
      isBlock: true,
      type: "list",
      storageClassType: "CustomerprofilesSegmentDefinitionSegmentSortAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesSegmentDefinitionSegmentSortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesSegmentDefinitionSegmentSort | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesSegmentDefinitionSegmentSort | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes.internalValue = value.attributes;
    }
  }

  // attributes - computed: true, optional: true, required: false
  private _attributes = new CustomerprofilesSegmentDefinitionSegmentSortAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: CustomerprofilesSegmentDefinitionSegmentSortAttributes[] | cdktn.IResolvable) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }
}
export interface CustomerprofilesSegmentDefinitionTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#key CustomerprofilesSegmentDefinition#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#value CustomerprofilesSegmentDefinition#value}
  */
  readonly value?: string;
}

export function customerprofilesSegmentDefinitionTagsToTerraform(struct?: CustomerprofilesSegmentDefinitionTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function customerprofilesSegmentDefinitionTagsToHclTerraform(struct?: CustomerprofilesSegmentDefinitionTags | cdktn.IResolvable): any {
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

export class CustomerprofilesSegmentDefinitionTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CustomerprofilesSegmentDefinitionTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CustomerprofilesSegmentDefinitionTags | cdktn.IResolvable | undefined) {
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

export class CustomerprofilesSegmentDefinitionTagsList extends cdktn.ComplexList {
  public internalValue? : CustomerprofilesSegmentDefinitionTags[] | cdktn.IResolvable

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
  public get(index: number): CustomerprofilesSegmentDefinitionTagsOutputReference {
    return new CustomerprofilesSegmentDefinitionTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition awscc_customerprofiles_segment_definition}
*/
export class CustomerprofilesSegmentDefinition extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_customerprofiles_segment_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CustomerprofilesSegmentDefinition resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomerprofilesSegmentDefinition to import
  * @param importFromId The id of the existing CustomerprofilesSegmentDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomerprofilesSegmentDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_customerprofiles_segment_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/customerprofiles_segment_definition awscc_customerprofiles_segment_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomerprofilesSegmentDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: CustomerprofilesSegmentDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_customerprofiles_segment_definition',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.93.0'
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
    this._displayName = config.displayName;
    this._domainName = config.domainName;
    this._segmentDefinitionName = config.segmentDefinitionName;
    this._segmentGroups.internalValue = config.segmentGroups;
    this._segmentSort.internalValue = config.segmentSort;
    this._segmentSqlQuery = config.segmentSqlQuery;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // segment_definition_arn - computed: true, optional: false, required: false
  public get segmentDefinitionArn() {
    return this.getStringAttribute('segment_definition_arn');
  }

  // segment_definition_name - computed: false, optional: false, required: true
  private _segmentDefinitionName?: string; 
  public get segmentDefinitionName() {
    return this.getStringAttribute('segment_definition_name');
  }
  public set segmentDefinitionName(value: string) {
    this._segmentDefinitionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentDefinitionNameInput() {
    return this._segmentDefinitionName;
  }

  // segment_groups - computed: true, optional: true, required: false
  private _segmentGroups = new CustomerprofilesSegmentDefinitionSegmentGroupsOutputReference(this, "segment_groups");
  public get segmentGroups() {
    return this._segmentGroups;
  }
  public putSegmentGroups(value: CustomerprofilesSegmentDefinitionSegmentGroups) {
    this._segmentGroups.internalValue = value;
  }
  public resetSegmentGroups() {
    this._segmentGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentGroupsInput() {
    return this._segmentGroups.internalValue;
  }

  // segment_sort - computed: true, optional: true, required: false
  private _segmentSort = new CustomerprofilesSegmentDefinitionSegmentSortOutputReference(this, "segment_sort");
  public get segmentSort() {
    return this._segmentSort;
  }
  public putSegmentSort(value: CustomerprofilesSegmentDefinitionSegmentSort) {
    this._segmentSort.internalValue = value;
  }
  public resetSegmentSort() {
    this._segmentSort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentSortInput() {
    return this._segmentSort.internalValue;
  }

  // segment_sql_query - computed: true, optional: true, required: false
  private _segmentSqlQuery?: string; 
  public get segmentSqlQuery() {
    return this.getStringAttribute('segment_sql_query');
  }
  public set segmentSqlQuery(value: string) {
    this._segmentSqlQuery = value;
  }
  public resetSegmentSqlQuery() {
    this._segmentSqlQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentSqlQueryInput() {
    return this._segmentSqlQuery;
  }

  // segment_type - computed: true, optional: false, required: false
  public get segmentType() {
    return this.getStringAttribute('segment_type');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new CustomerprofilesSegmentDefinitionTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: CustomerprofilesSegmentDefinitionTags[] | cdktn.IResolvable) {
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
      display_name: cdktn.stringToTerraform(this._displayName),
      domain_name: cdktn.stringToTerraform(this._domainName),
      segment_definition_name: cdktn.stringToTerraform(this._segmentDefinitionName),
      segment_groups: customerprofilesSegmentDefinitionSegmentGroupsToTerraform(this._segmentGroups.internalValue),
      segment_sort: customerprofilesSegmentDefinitionSegmentSortToTerraform(this._segmentSort.internalValue),
      segment_sql_query: cdktn.stringToTerraform(this._segmentSqlQuery),
      tags: cdktn.listMapper(customerprofilesSegmentDefinitionTagsToTerraform, false)(this._tags.internalValue),
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
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
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
      segment_definition_name: {
        value: cdktn.stringToHclTerraform(this._segmentDefinitionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      segment_groups: {
        value: customerprofilesSegmentDefinitionSegmentGroupsToHclTerraform(this._segmentGroups.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CustomerprofilesSegmentDefinitionSegmentGroups",
      },
      segment_sort: {
        value: customerprofilesSegmentDefinitionSegmentSortToHclTerraform(this._segmentSort.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CustomerprofilesSegmentDefinitionSegmentSort",
      },
      segment_sql_query: {
        value: cdktn.stringToHclTerraform(this._segmentSqlQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(customerprofilesSegmentDefinitionTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CustomerprofilesSegmentDefinitionTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
