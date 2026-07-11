// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/securityhub_automation_rule_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccSecurityhubAutomationRuleV2Config extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/securityhub_automation_rule_v2#id DataAwsccSecurityhubAutomationRuleV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration {
}

export function dataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationToTerraform(struct?: DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationToHclTerraform(struct?: DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connector_arn - computed: true, optional: false, required: false
  public get connectorArn() {
    return this.getStringAttribute('connector_arn');
  }
}
export interface DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdate {
}

export function dataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateToTerraform(struct?: DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateToHclTerraform(struct?: DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // severity_id - computed: true, optional: false, required: false
  public get severityId() {
    return this.getNumberAttribute('severity_id');
  }

  // status_id - computed: true, optional: false, required: false
  public get statusId() {
    return this.getNumberAttribute('status_id');
  }
}
export interface DataAwsccSecurityhubAutomationRuleV2Actions {
}

export function dataAwsccSecurityhubAutomationRuleV2ActionsToTerraform(struct?: DataAwsccSecurityhubAutomationRuleV2Actions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecurityhubAutomationRuleV2ActionsToHclTerraform(struct?: DataAwsccSecurityhubAutomationRuleV2Actions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSecurityhubAutomationRuleV2Actions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecurityhubAutomationRuleV2Actions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_integration_configuration - computed: true, optional: false, required: false
  private _externalIntegrationConfiguration = new DataAwsccSecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference(this, "external_integration_configuration");
  public get externalIntegrationConfiguration() {
    return this._externalIntegrationConfiguration;
  }

  // finding_fields_update - computed: true, optional: false, required: false
  private _findingFieldsUpdate = new DataAwsccSecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference(this, "finding_fields_update");
  public get findingFieldsUpdate() {
    return this._findingFieldsUpdate;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccSecurityhubAutomationRuleV2ActionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference {
    return new DataAwsccSecurityhubAutomationRuleV2ActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter {
}

export function dataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterToTerraform(struct?: DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterToHclTerraform(struct?: DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters {
}

export function dataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersToTerraform(struct?: DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersToHclTerraform(struct?: DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_name - computed: true, optional: false, required: false
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }

  // filter - computed: true, optional: false, required: false
  private _filter = new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
}

export class DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference {
    return new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange {
}

export function dataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeToTerraform(struct?: DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeToHclTerraform(struct?: DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange | undefined) {
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
export interface DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter {
}

export function dataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterToTerraform(struct?: DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterToHclTerraform(struct?: DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // date_range - computed: true, optional: false, required: false
  private _dateRange = new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference(this, "date_range");
  public get dateRange() {
    return this._dateRange;
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }
}
export interface DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters {
}

export function dataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersToTerraform(struct?: DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersToHclTerraform(struct?: DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_name - computed: true, optional: false, required: false
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }

  // filter - computed: true, optional: false, required: false
  private _filter = new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
}

export class DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference {
    return new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter {
}

export function dataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterToTerraform(struct?: DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterToHclTerraform(struct?: DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
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
export interface DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters {
}

export function dataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersToTerraform(struct?: DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersToHclTerraform(struct?: DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_name - computed: true, optional: false, required: false
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }

  // filter - computed: true, optional: false, required: false
  private _filter = new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
}

export class DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference {
    return new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter {
}

export function dataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterToTerraform(struct?: DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterToHclTerraform(struct?: DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // eq - computed: true, optional: false, required: false
  public get eq() {
    return this.getNumberAttribute('eq');
  }

  // gte - computed: true, optional: false, required: false
  public get gte() {
    return this.getNumberAttribute('gte');
  }

  // lte - computed: true, optional: false, required: false
  public get lte() {
    return this.getNumberAttribute('lte');
  }
}
export interface DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters {
}

export function dataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersToTerraform(struct?: DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersToHclTerraform(struct?: DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_name - computed: true, optional: false, required: false
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }

  // filter - computed: true, optional: false, required: false
  private _filter = new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
}

export class DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference {
    return new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter {
}

export function dataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterToTerraform(struct?: DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterToHclTerraform(struct?: DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters {
}

export function dataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersToTerraform(struct?: DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersToHclTerraform(struct?: DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_name - computed: true, optional: false, required: false
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }

  // filter - computed: true, optional: false, required: false
  private _filter = new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
}

export class DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference {
    return new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters {
}

export function dataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersToTerraform(struct?: DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersToHclTerraform(struct?: DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boolean_filters - computed: true, optional: false, required: false
  private _booleanFilters = new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList(this, "boolean_filters", false);
  public get booleanFilters() {
    return this._booleanFilters;
  }

  // date_filters - computed: true, optional: false, required: false
  private _dateFilters = new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList(this, "date_filters", false);
  public get dateFilters() {
    return this._dateFilters;
  }

  // map_filters - computed: true, optional: false, required: false
  private _mapFilters = new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList(this, "map_filters", false);
  public get mapFilters() {
    return this._mapFilters;
  }

  // number_filters - computed: true, optional: false, required: false
  private _numberFilters = new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList(this, "number_filters", false);
  public get numberFilters() {
    return this._numberFilters;
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // string_filters - computed: true, optional: false, required: false
  private _stringFilters = new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList(this, "string_filters", false);
  public get stringFilters() {
    return this._stringFilters;
  }
}

export class DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference {
    return new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria {
}

export function dataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaToTerraform(struct?: DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaToHclTerraform(struct?: DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // composite_filters - computed: true, optional: false, required: false
  private _compositeFilters = new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList(this, "composite_filters", false);
  public get compositeFilters() {
    return this._compositeFilters;
  }

  // composite_operator - computed: true, optional: false, required: false
  public get compositeOperator() {
    return this.getStringAttribute('composite_operator');
  }
}
export interface DataAwsccSecurityhubAutomationRuleV2Criteria {
}

export function dataAwsccSecurityhubAutomationRuleV2CriteriaToTerraform(struct?: DataAwsccSecurityhubAutomationRuleV2Criteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecurityhubAutomationRuleV2CriteriaToHclTerraform(struct?: DataAwsccSecurityhubAutomationRuleV2Criteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSecurityhubAutomationRuleV2Criteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecurityhubAutomationRuleV2Criteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ocsf_finding_criteria - computed: true, optional: false, required: false
  private _ocsfFindingCriteria = new DataAwsccSecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference(this, "ocsf_finding_criteria");
  public get ocsfFindingCriteria() {
    return this._ocsfFindingCriteria;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/securityhub_automation_rule_v2 awscc_securityhub_automation_rule_v2}
*/
export class DataAwsccSecurityhubAutomationRuleV2 extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_securityhub_automation_rule_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccSecurityhubAutomationRuleV2 resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccSecurityhubAutomationRuleV2 to import
  * @param importFromId The id of the existing DataAwsccSecurityhubAutomationRuleV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/securityhub_automation_rule_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccSecurityhubAutomationRuleV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_securityhub_automation_rule_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/securityhub_automation_rule_v2 awscc_securityhub_automation_rule_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSecurityhubAutomationRuleV2Config
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSecurityhubAutomationRuleV2Config) {
    super(scope, id, {
      terraformResourceType: 'awscc_securityhub_automation_rule_v2',
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

  // actions - computed: true, optional: false, required: false
  private _actions = new DataAwsccSecurityhubAutomationRuleV2ActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // criteria - computed: true, optional: false, required: false
  private _criteria = new DataAwsccSecurityhubAutomationRuleV2CriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
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

  // rule_arn - computed: true, optional: false, required: false
  public get ruleArn() {
    return this.getStringAttribute('rule_arn');
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // rule_name - computed: true, optional: false, required: false
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }

  // rule_order - computed: true, optional: false, required: false
  public get ruleOrder() {
    return this.getNumberAttribute('rule_order');
  }

  // rule_status - computed: true, optional: false, required: false
  public get ruleStatus() {
    return this.getStringAttribute('rule_status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
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
