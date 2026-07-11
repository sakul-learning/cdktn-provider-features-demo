// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/customerprofiles_segment_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccCustomerprofilesSegmentDefinitionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/customerprofiles_segment_definition#id DataAwsccCustomerprofilesSegmentDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverridesRange {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverridesRangeToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverridesRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverridesRangeToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverridesRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverridesRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverridesRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverridesRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getNumberAttribute('end');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getNumberAttribute('start');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverrides {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverridesToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverridesToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverridesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // range - computed: true, optional: false, required: false
  private _range = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverridesRangeOutputReference(this, "range");
  public get range() {
    return this._range;
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributes {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition_overrides - computed: true, optional: false, required: false
  private _conditionOverrides = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesConditionOverridesOutputReference(this, "condition_overrides");
  public get conditionOverrides() {
    return this._conditionOverrides;
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesMap extends cdktn.ComplexMap {

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
  public get(key: string): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesOutputReference {
    return new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAccountNumber {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAccountNumberToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAccountNumber): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAccountNumberToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAccountNumber): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAccountNumberOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAccountNumber | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAccountNumber | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAdditionalInformation {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAdditionalInformationToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAdditionalInformation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAdditionalInformationToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAdditionalInformation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAdditionalInformationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAdditionalInformation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAdditionalInformation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCity {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCityToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCityToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCountry {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCountryToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCountry): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCountryToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCountry): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCountryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCountry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCountry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCounty {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCountyToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCounty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCountyToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCounty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCountyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCounty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCounty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressPostalCode {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressPostalCodeToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressPostalCode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressPostalCodeToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressPostalCode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressPostalCodeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressPostalCode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressPostalCode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressProvince {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressProvinceToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressProvince): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressProvinceToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressProvince): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressProvinceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressProvince | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressProvince | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressState {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressStateToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressState): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressStateToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressState): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressStateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddress {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // city - computed: true, optional: false, required: false
  private _city = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCityOutputReference(this, "city");
  public get city() {
    return this._city;
  }

  // country - computed: true, optional: false, required: false
  private _country = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCountryOutputReference(this, "country");
  public get country() {
    return this._country;
  }

  // county - computed: true, optional: false, required: false
  private _county = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCountyOutputReference(this, "county");
  public get county() {
    return this._county;
  }

  // postal_code - computed: true, optional: false, required: false
  private _postalCode = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressPostalCodeOutputReference(this, "postal_code");
  public get postalCode() {
    return this._postalCode;
  }

  // province - computed: true, optional: false, required: false
  private _province = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressProvinceOutputReference(this, "province");
  public get province() {
    return this._province;
  }

  // state - computed: true, optional: false, required: false
  private _state = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressStateOutputReference(this, "state");
  public get state() {
    return this._state;
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAttributes {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAttributesToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAttributesToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAttributesMap extends cdktn.ComplexMap {

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
  public get(key: string): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAttributesOutputReference {
    return new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAttributesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCity {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCityToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCityToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountry {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountryToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountry): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountryToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountry): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCounty {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountyToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCounty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountyToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCounty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCounty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCounty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressPostalCode {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressPostalCodeToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressPostalCode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressPostalCodeToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressPostalCode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressPostalCodeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressPostalCode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressPostalCode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressProvince {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressProvinceToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressProvince): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressProvinceToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressProvince): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressProvinceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressProvince | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressProvince | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressState {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressStateToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressState): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressStateToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressState): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressStateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddress {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // city - computed: true, optional: false, required: false
  private _city = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCityOutputReference(this, "city");
  public get city() {
    return this._city;
  }

  // country - computed: true, optional: false, required: false
  private _country = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountryOutputReference(this, "country");
  public get country() {
    return this._country;
  }

  // county - computed: true, optional: false, required: false
  private _county = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountyOutputReference(this, "county");
  public get county() {
    return this._county;
  }

  // postal_code - computed: true, optional: false, required: false
  private _postalCode = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressPostalCodeOutputReference(this, "postal_code");
  public get postalCode() {
    return this._postalCode;
  }

  // province - computed: true, optional: false, required: false
  private _province = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressProvinceOutputReference(this, "province");
  public get province() {
    return this._province;
  }

  // state - computed: true, optional: false, required: false
  private _state = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressStateOutputReference(this, "state");
  public get state() {
    return this._state;
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBirthDate {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBirthDateToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBirthDate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBirthDateToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBirthDate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBirthDateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBirthDate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBirthDate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessEmailAddress {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessEmailAddressToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessEmailAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessEmailAddressToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessEmailAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessEmailAddressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessEmailAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessEmailAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessName {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessNameToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessName): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessNameToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessName): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessNameOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessPhoneNumber {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessPhoneNumberToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessPhoneNumber): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessPhoneNumberToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessPhoneNumber): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessPhoneNumberOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessPhoneNumber | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessPhoneNumber | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesEmailAddress {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesEmailAddressToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesEmailAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesEmailAddressToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesEmailAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesEmailAddressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesEmailAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesEmailAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesFirstName {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesFirstNameToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesFirstName): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesFirstNameToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesFirstName): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesFirstNameOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesFirstName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesFirstName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesGenderString {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesGenderStringToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesGenderString): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesGenderStringToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesGenderString): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesGenderStringOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesGenderString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesGenderString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesHomePhoneNumber {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesHomePhoneNumberToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesHomePhoneNumber): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesHomePhoneNumberToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesHomePhoneNumber): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesHomePhoneNumberOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesHomePhoneNumber | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesHomePhoneNumber | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesLastName {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesLastNameToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesLastName): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesLastNameToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesLastName): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesLastNameOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesLastName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesLastName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCity {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCityToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCityToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountry {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountryToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountry): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountryToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountry): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCounty {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountyToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCounty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountyToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCounty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCounty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCounty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressPostalCode {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressPostalCodeToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressPostalCode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressPostalCodeToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressPostalCode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressPostalCodeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressPostalCode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressPostalCode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressProvince {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressProvinceToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressProvince): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressProvinceToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressProvince): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressProvinceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressProvince | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressProvince | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressState {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressStateToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressState): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressStateToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressState): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressStateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddress {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // city - computed: true, optional: false, required: false
  private _city = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCityOutputReference(this, "city");
  public get city() {
    return this._city;
  }

  // country - computed: true, optional: false, required: false
  private _country = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountryOutputReference(this, "country");
  public get country() {
    return this._country;
  }

  // county - computed: true, optional: false, required: false
  private _county = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountyOutputReference(this, "county");
  public get county() {
    return this._county;
  }

  // postal_code - computed: true, optional: false, required: false
  private _postalCode = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressPostalCodeOutputReference(this, "postal_code");
  public get postalCode() {
    return this._postalCode;
  }

  // province - computed: true, optional: false, required: false
  private _province = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressProvinceOutputReference(this, "province");
  public get province() {
    return this._province;
  }

  // state - computed: true, optional: false, required: false
  private _state = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressStateOutputReference(this, "state");
  public get state() {
    return this._state;
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMiddleName {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMiddleNameToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMiddleName): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMiddleNameToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMiddleName): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMiddleNameOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMiddleName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMiddleName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMobilePhoneNumber {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMobilePhoneNumberToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMobilePhoneNumber): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMobilePhoneNumberToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMobilePhoneNumber): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMobilePhoneNumberOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMobilePhoneNumber | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMobilePhoneNumber | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPartyTypeString {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPartyTypeStringToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPartyTypeString): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPartyTypeStringToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPartyTypeString): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPartyTypeStringOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPartyTypeString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPartyTypeString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPersonalEmailAddress {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPersonalEmailAddressToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPersonalEmailAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPersonalEmailAddressToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPersonalEmailAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPersonalEmailAddressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPersonalEmailAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPersonalEmailAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPhoneNumber {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPhoneNumberToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPhoneNumber): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPhoneNumberToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPhoneNumber): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPhoneNumberOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPhoneNumber | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPhoneNumber | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesProfileType {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesProfileTypeToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesProfileType): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesProfileTypeToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesProfileType): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesProfileTypeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesProfileType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesProfileType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCity {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCityToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCityToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountry {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountryToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountry): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountryToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountry): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCounty {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountyToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCounty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountyToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCounty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCounty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCounty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressPostalCode {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressPostalCodeToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressPostalCode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressPostalCodeToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressPostalCode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressPostalCodeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressPostalCode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressPostalCode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressProvince {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressProvinceToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressProvince): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressProvinceToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressProvince): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressProvinceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressProvince | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressProvince | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressState {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressStateToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressState): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressStateToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressState): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressStateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_type - computed: true, optional: false, required: false
  public get dimensionType() {
    return this.getStringAttribute('dimension_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddress {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // city - computed: true, optional: false, required: false
  private _city = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCityOutputReference(this, "city");
  public get city() {
    return this._city;
  }

  // country - computed: true, optional: false, required: false
  private _country = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountryOutputReference(this, "country");
  public get country() {
    return this._country;
  }

  // county - computed: true, optional: false, required: false
  private _county = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountyOutputReference(this, "county");
  public get county() {
    return this._county;
  }

  // postal_code - computed: true, optional: false, required: false
  private _postalCode = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressPostalCodeOutputReference(this, "postal_code");
  public get postalCode() {
    return this._postalCode;
  }

  // province - computed: true, optional: false, required: false
  private _province = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressProvinceOutputReference(this, "province");
  public get province() {
    return this._province;
  }

  // state - computed: true, optional: false, required: false
  private _state = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressStateOutputReference(this, "state");
  public get state() {
    return this._state;
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributes {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_number - computed: true, optional: false, required: false
  private _accountNumber = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAccountNumberOutputReference(this, "account_number");
  public get accountNumber() {
    return this._accountNumber;
  }

  // additional_information - computed: true, optional: false, required: false
  private _additionalInformation = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAdditionalInformationOutputReference(this, "additional_information");
  public get additionalInformation() {
    return this._additionalInformation;
  }

  // address - computed: true, optional: false, required: false
  private _address = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressOutputReference(this, "address");
  public get address() {
    return this._address;
  }

  // attributes - computed: true, optional: false, required: false
  private _attributes = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAttributesMap(this, "attributes");
  public get attributes() {
    return this._attributes;
  }

  // billing_address - computed: true, optional: false, required: false
  private _billingAddress = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressOutputReference(this, "billing_address");
  public get billingAddress() {
    return this._billingAddress;
  }

  // birth_date - computed: true, optional: false, required: false
  private _birthDate = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBirthDateOutputReference(this, "birth_date");
  public get birthDate() {
    return this._birthDate;
  }

  // business_email_address - computed: true, optional: false, required: false
  private _businessEmailAddress = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessEmailAddressOutputReference(this, "business_email_address");
  public get businessEmailAddress() {
    return this._businessEmailAddress;
  }

  // business_name - computed: true, optional: false, required: false
  private _businessName = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessNameOutputReference(this, "business_name");
  public get businessName() {
    return this._businessName;
  }

  // business_phone_number - computed: true, optional: false, required: false
  private _businessPhoneNumber = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBusinessPhoneNumberOutputReference(this, "business_phone_number");
  public get businessPhoneNumber() {
    return this._businessPhoneNumber;
  }

  // email_address - computed: true, optional: false, required: false
  private _emailAddress = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesEmailAddressOutputReference(this, "email_address");
  public get emailAddress() {
    return this._emailAddress;
  }

  // first_name - computed: true, optional: false, required: false
  private _firstName = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesFirstNameOutputReference(this, "first_name");
  public get firstName() {
    return this._firstName;
  }

  // gender_string - computed: true, optional: false, required: false
  private _genderString = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesGenderStringOutputReference(this, "gender_string");
  public get genderString() {
    return this._genderString;
  }

  // home_phone_number - computed: true, optional: false, required: false
  private _homePhoneNumber = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesHomePhoneNumberOutputReference(this, "home_phone_number");
  public get homePhoneNumber() {
    return this._homePhoneNumber;
  }

  // last_name - computed: true, optional: false, required: false
  private _lastName = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesLastNameOutputReference(this, "last_name");
  public get lastName() {
    return this._lastName;
  }

  // mailing_address - computed: true, optional: false, required: false
  private _mailingAddress = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressOutputReference(this, "mailing_address");
  public get mailingAddress() {
    return this._mailingAddress;
  }

  // middle_name - computed: true, optional: false, required: false
  private _middleName = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMiddleNameOutputReference(this, "middle_name");
  public get middleName() {
    return this._middleName;
  }

  // mobile_phone_number - computed: true, optional: false, required: false
  private _mobilePhoneNumber = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMobilePhoneNumberOutputReference(this, "mobile_phone_number");
  public get mobilePhoneNumber() {
    return this._mobilePhoneNumber;
  }

  // party_type_string - computed: true, optional: false, required: false
  private _partyTypeString = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPartyTypeStringOutputReference(this, "party_type_string");
  public get partyTypeString() {
    return this._partyTypeString;
  }

  // personal_email_address - computed: true, optional: false, required: false
  private _personalEmailAddress = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPersonalEmailAddressOutputReference(this, "personal_email_address");
  public get personalEmailAddress() {
    return this._personalEmailAddress;
  }

  // phone_number - computed: true, optional: false, required: false
  private _phoneNumber = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesPhoneNumberOutputReference(this, "phone_number");
  public get phoneNumber() {
    return this._phoneNumber;
  }

  // profile_type - computed: true, optional: false, required: false
  private _profileType = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesProfileTypeOutputReference(this, "profile_type");
  public get profileType() {
    return this._profileType;
  }

  // shipping_address - computed: true, optional: false, required: false
  private _shippingAddress = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressOutputReference(this, "shipping_address");
  public get shippingAddress() {
    return this._shippingAddress;
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensions {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // calculated_attributes - computed: true, optional: false, required: false
  private _calculatedAttributes = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsCalculatedAttributesMap(this, "calculated_attributes");
  public get calculatedAttributes() {
    return this._calculatedAttributes;
  }

  // profile_attributes - computed: true, optional: false, required: false
  private _profileAttributes = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesOutputReference(this, "profile_attributes");
  public get profileAttributes() {
    return this._profileAttributes;
  }
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsOutputReference {
    return new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsSourceSegments {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsSourceSegmentsToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsSourceSegments): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsSourceSegmentsToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsSourceSegments): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsSourceSegmentsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsSourceSegments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsSourceSegments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // segment_definition_name - computed: true, optional: false, required: false
  public get segmentDefinitionName() {
    return this.getStringAttribute('segment_definition_name');
  }
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsSourceSegmentsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsSourceSegmentsOutputReference {
    return new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsSourceSegmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroups {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimensions - computed: true, optional: false, required: false
  private _dimensions = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }

  // source_segments - computed: true, optional: false, required: false
  private _sourceSegments = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsSourceSegmentsList(this, "source_segments", false);
  public get sourceSegments() {
    return this._sourceSegments;
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsOutputReference {
    return new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentGroups {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }

  // include - computed: true, optional: false, required: false
  public get include() {
    return this.getStringAttribute('include');
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentSortAttributes {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentSortAttributesToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentSortAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentSortAttributesToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentSortAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentSortAttributesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentSortAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentSortAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // order - computed: true, optional: false, required: false
  public get order() {
    return this.getStringAttribute('order');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentSortAttributesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCustomerprofilesSegmentDefinitionSegmentSortAttributesOutputReference {
    return new DataAwsccCustomerprofilesSegmentDefinitionSegmentSortAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionSegmentSort {
}

export function dataAwsccCustomerprofilesSegmentDefinitionSegmentSortToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentSort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionSegmentSortToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionSegmentSort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionSegmentSortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionSegmentSort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionSegmentSort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attributes - computed: true, optional: false, required: false
  private _attributes = new DataAwsccCustomerprofilesSegmentDefinitionSegmentSortAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }
}
export interface DataAwsccCustomerprofilesSegmentDefinitionTags {
}

export function dataAwsccCustomerprofilesSegmentDefinitionTagsToTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesSegmentDefinitionTagsToHclTerraform(struct?: DataAwsccCustomerprofilesSegmentDefinitionTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesSegmentDefinitionTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCustomerprofilesSegmentDefinitionTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesSegmentDefinitionTags | undefined) {
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

export class DataAwsccCustomerprofilesSegmentDefinitionTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCustomerprofilesSegmentDefinitionTagsOutputReference {
    return new DataAwsccCustomerprofilesSegmentDefinitionTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/customerprofiles_segment_definition awscc_customerprofiles_segment_definition}
*/
export class DataAwsccCustomerprofilesSegmentDefinition extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_customerprofiles_segment_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccCustomerprofilesSegmentDefinition resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccCustomerprofilesSegmentDefinition to import
  * @param importFromId The id of the existing DataAwsccCustomerprofilesSegmentDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/customerprofiles_segment_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccCustomerprofilesSegmentDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_customerprofiles_segment_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/customerprofiles_segment_definition awscc_customerprofiles_segment_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCustomerprofilesSegmentDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCustomerprofilesSegmentDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_customerprofiles_segment_definition',
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
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

  // segment_definition_arn - computed: true, optional: false, required: false
  public get segmentDefinitionArn() {
    return this.getStringAttribute('segment_definition_arn');
  }

  // segment_definition_name - computed: true, optional: false, required: false
  public get segmentDefinitionName() {
    return this.getStringAttribute('segment_definition_name');
  }

  // segment_groups - computed: true, optional: false, required: false
  private _segmentGroups = new DataAwsccCustomerprofilesSegmentDefinitionSegmentGroupsOutputReference(this, "segment_groups");
  public get segmentGroups() {
    return this._segmentGroups;
  }

  // segment_sort - computed: true, optional: false, required: false
  private _segmentSort = new DataAwsccCustomerprofilesSegmentDefinitionSegmentSortOutputReference(this, "segment_sort");
  public get segmentSort() {
    return this._segmentSort;
  }

  // segment_sql_query - computed: true, optional: false, required: false
  public get segmentSqlQuery() {
    return this.getStringAttribute('segment_sql_query');
  }

  // segment_type - computed: true, optional: false, required: false
  public get segmentType() {
    return this.getStringAttribute('segment_type');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccCustomerprofilesSegmentDefinitionTagsList(this, "tags", true);
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
