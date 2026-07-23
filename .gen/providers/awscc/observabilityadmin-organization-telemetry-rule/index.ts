// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ObservabilityadminOrganizationTelemetryRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * The telemetry rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#rule ObservabilityadminOrganizationTelemetryRule#rule}
  */
  readonly rule: ObservabilityadminOrganizationTelemetryRuleRule;
  /**
  * The name of the organization telemetry rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#rule_name ObservabilityadminOrganizationTelemetryRule#rule_name}
  */
  readonly ruleName: string;
  /**
  * An array of key-value pairs to apply to this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#tags ObservabilityadminOrganizationTelemetryRule#tags}
  */
  readonly tags?: ObservabilityadminOrganizationTelemetryRuleTags[] | cdktn.IResolvable;
}
export interface ObservabilityadminOrganizationTelemetryRuleRegionStatuses {
}

export function observabilityadminOrganizationTelemetryRuleRegionStatusesToTerraform(struct?: ObservabilityadminOrganizationTelemetryRuleRegionStatuses): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function observabilityadminOrganizationTelemetryRuleRegionStatusesToHclTerraform(struct?: ObservabilityadminOrganizationTelemetryRuleRegionStatuses): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminOrganizationTelemetryRuleRegionStatuses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminOrganizationTelemetryRuleRegionStatuses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // rule_arn - computed: true, optional: false, required: false
  public get ruleArn() {
    return this.getStringAttribute('rule_arn');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class ObservabilityadminOrganizationTelemetryRuleRegionStatusesList extends cdktn.ComplexList {

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
  public get(index: number): ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference {
    return new ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors {
  /**
  * An operator that includes events that match the last few characters of the event record field specified as the value of Field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#ends_with ObservabilityadminOrganizationTelemetryRule#ends_with}
  */
  readonly endsWith?: string[];
  /**
  * An operator that includes events that match the exact value of the event record field specified as the value of Field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#equals ObservabilityadminOrganizationTelemetryRule#equals}
  */
  readonly equalTo?: string[];
  /**
  * A field in a CloudTrail event record on which to filter events to be logged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#field ObservabilityadminOrganizationTelemetryRule#field}
  */
  readonly field?: string;
  /**
  * An operator that excludes events that match the last few characters of the event record field specified as the value of Field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#not_ends_with ObservabilityadminOrganizationTelemetryRule#not_ends_with}
  */
  readonly notEndsWith?: string[];
  /**
  * An operator that excludes events that match the exact value of the event record field specified as the value of Field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#not_equals ObservabilityadminOrganizationTelemetryRule#not_equals}
  */
  readonly notEquals?: string[];
  /**
  * An operator that excludes events that match the first few characters of the event record field specified as the value of Field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#not_starts_with ObservabilityadminOrganizationTelemetryRule#not_starts_with}
  */
  readonly notStartsWith?: string[];
  /**
  * An operator that includes events that match the first few characters of the event record field specified as the value of Field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#starts_with ObservabilityadminOrganizationTelemetryRule#starts_with}
  */
  readonly startsWith?: string[];
}

export function observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsToTerraform(struct?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ends_with: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.endsWith),
    equals: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.equalTo),
    field: cdktn.stringToTerraform(struct!.field),
    not_ends_with: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.notEndsWith),
    not_equals: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.notEquals),
    not_starts_with: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.notStartsWith),
    starts_with: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.startsWith),
  }
}


export function observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsToHclTerraform(struct?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ends_with: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.endsWith),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    equals: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.equalTo),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    field: {
      value: cdktn.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_ends_with: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.notEndsWith),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    not_equals: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.notEquals),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    not_starts_with: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.notStartsWith),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    starts_with: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.startsWith),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.endsWith = this._endsWith;
    }
    if (this._equals !== undefined) {
      hasAnyValues = true;
      internalValueResult.equalTo = this._equals;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._notEndsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.notEndsWith = this._notEndsWith;
    }
    if (this._notEquals !== undefined) {
      hasAnyValues = true;
      internalValueResult.notEquals = this._notEquals;
    }
    if (this._notStartsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.notStartsWith = this._notStartsWith;
    }
    if (this._startsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.startsWith = this._startsWith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endsWith = undefined;
      this._equals = undefined;
      this._field = undefined;
      this._notEndsWith = undefined;
      this._notEquals = undefined;
      this._notStartsWith = undefined;
      this._startsWith = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endsWith = value.endsWith;
      this._equals = value.equalTo;
      this._field = value.field;
      this._notEndsWith = value.notEndsWith;
      this._notEquals = value.notEquals;
      this._notStartsWith = value.notStartsWith;
      this._startsWith = value.startsWith;
    }
  }

  // ends_with - computed: true, optional: true, required: false
  private _endsWith?: string[]; 
  public get endsWith() {
    return cdktn.Fn.tolist(this.getListAttribute('ends_with'));
  }
  public set endsWith(value: string[]) {
    this._endsWith = value;
  }
  public resetEndsWith() {
    this._endsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endsWithInput() {
    return this._endsWith;
  }

  // equals - computed: true, optional: true, required: false
  private _equals?: string[]; 
  public get equalTo() {
    return cdktn.Fn.tolist(this.getListAttribute('equals'));
  }
  public set equalTo(value: string[]) {
    this._equals = value;
  }
  public resetEqualTo() {
    this._equals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalToInput() {
    return this._equals;
  }

  // field - computed: true, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // not_ends_with - computed: true, optional: true, required: false
  private _notEndsWith?: string[]; 
  public get notEndsWith() {
    return cdktn.Fn.tolist(this.getListAttribute('not_ends_with'));
  }
  public set notEndsWith(value: string[]) {
    this._notEndsWith = value;
  }
  public resetNotEndsWith() {
    this._notEndsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notEndsWithInput() {
    return this._notEndsWith;
  }

  // not_equals - computed: true, optional: true, required: false
  private _notEquals?: string[]; 
  public get notEquals() {
    return cdktn.Fn.tolist(this.getListAttribute('not_equals'));
  }
  public set notEquals(value: string[]) {
    this._notEquals = value;
  }
  public resetNotEquals() {
    this._notEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notEqualsInput() {
    return this._notEquals;
  }

  // not_starts_with - computed: true, optional: true, required: false
  private _notStartsWith?: string[]; 
  public get notStartsWith() {
    return cdktn.Fn.tolist(this.getListAttribute('not_starts_with'));
  }
  public set notStartsWith(value: string[]) {
    this._notStartsWith = value;
  }
  public resetNotStartsWith() {
    this._notStartsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notStartsWithInput() {
    return this._notStartsWith;
  }

  // starts_with - computed: true, optional: true, required: false
  private _startsWith?: string[]; 
  public get startsWith() {
    return cdktn.Fn.tolist(this.getListAttribute('starts_with'));
  }
  public set startsWith(value: string[]) {
    this._startsWith = value;
  }
  public resetStartsWith() {
    this._startsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startsWithInput() {
    return this._startsWith;
  }
}

export class ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference {
    return new ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors {
  /**
  * Contains all selector statements in an advanced event selector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#field_selectors ObservabilityadminOrganizationTelemetryRule#field_selectors}
  */
  readonly fieldSelectors?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors[] | cdktn.IResolvable;
  /**
  * An optional descriptive name for the advanced event selector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#name ObservabilityadminOrganizationTelemetryRule#name}
  */
  readonly name?: string;
}

export function observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsToTerraform(struct?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field_selectors: cdktn.listMapper(observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsToTerraform, false)(struct!.fieldSelectors),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsToHclTerraform(struct?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field_selectors: {
      value: cdktn.listMapperHcl(observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsToHclTerraform, false)(struct!.fieldSelectors),
      isBlock: true,
      type: "set",
      storageClassType: "ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList",
    },
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

export class ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldSelectors = this._fieldSelectors?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldSelectors.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldSelectors.internalValue = value.fieldSelectors;
      this._name = value.name;
    }
  }

  // field_selectors - computed: true, optional: true, required: false
  private _fieldSelectors = new ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList(this, "field_selectors", true);
  public get fieldSelectors() {
    return this._fieldSelectors;
  }
  public putFieldSelectors(value: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors[] | cdktn.IResolvable) {
    this._fieldSelectors.internalValue = value;
  }
  public resetFieldSelectors() {
    this._fieldSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldSelectorsInput() {
    return this._fieldSelectors.internalValue;
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

export class ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference {
    return new ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters {
  /**
  * Create fine-grained selectors for AWS CloudTrail management and data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#advanced_event_selectors ObservabilityadminOrganizationTelemetryRule#advanced_event_selectors}
  */
  readonly advancedEventSelectors?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors[] | cdktn.IResolvable;
}

export function observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersToTerraform(struct?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    advanced_event_selectors: cdktn.listMapper(observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsToTerraform, false)(struct!.advancedEventSelectors),
  }
}


export function observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersToHclTerraform(struct?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    advanced_event_selectors: {
      value: cdktn.listMapperHcl(observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsToHclTerraform, false)(struct!.advancedEventSelectors),
      isBlock: true,
      type: "set",
      storageClassType: "ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedEventSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedEventSelectors = this._advancedEventSelectors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advancedEventSelectors.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advancedEventSelectors.internalValue = value.advancedEventSelectors;
    }
  }

  // advanced_event_selectors - computed: true, optional: true, required: false
  private _advancedEventSelectors = new ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList(this, "advanced_event_selectors", true);
  public get advancedEventSelectors() {
    return this._advancedEventSelectors;
  }
  public putAdvancedEventSelectors(value: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors[] | cdktn.IResolvable) {
    this._advancedEventSelectors.internalValue = value;
  }
  public resetAdvancedEventSelectors() {
    this._advancedEventSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedEventSelectorsInput() {
    return this._advancedEventSelectors.internalValue;
  }
}
export interface ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters {
  /**
  * A delimiter to delineate log fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#field_delimiter ObservabilityadminOrganizationTelemetryRule#field_delimiter}
  */
  readonly fieldDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#output_format ObservabilityadminOrganizationTelemetryRule#output_format}
  */
  readonly outputFormat?: string;
}

export function observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersToTerraform(struct?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field_delimiter: cdktn.stringToTerraform(struct!.fieldDelimiter),
    output_format: cdktn.stringToTerraform(struct!.outputFormat),
  }
}


export function observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersToHclTerraform(struct?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field_delimiter: {
      value: cdktn.stringToHclTerraform(struct!.fieldDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_format: {
      value: cdktn.stringToHclTerraform(struct!.outputFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldDelimiter = this._fieldDelimiter;
    }
    if (this._outputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFormat = this._outputFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldDelimiter = undefined;
      this._outputFormat = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldDelimiter = value.fieldDelimiter;
      this._outputFormat = value.outputFormat;
    }
  }

  // field_delimiter - computed: true, optional: true, required: false
  private _fieldDelimiter?: string; 
  public get fieldDelimiter() {
    return this.getStringAttribute('field_delimiter');
  }
  public set fieldDelimiter(value: string) {
    this._fieldDelimiter = value;
  }
  public resetFieldDelimiter() {
    this._fieldDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldDelimiterInput() {
    return this._fieldDelimiter;
  }

  // output_format - computed: true, optional: true, required: false
  private _outputFormat?: string; 
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }
  public set outputFormat(value: string) {
    this._outputFormat = value;
  }
  public resetOutputFormat() {
    this._outputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatInput() {
    return this._outputFormat;
  }
}
export interface ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters {
  /**
  * Types of logs to deliver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#log_types ObservabilityadminOrganizationTelemetryRule#log_types}
  */
  readonly logTypes?: string[];
}

export function observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersToTerraform(struct?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    log_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.logTypes),
  }
}


export function observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersToHclTerraform(struct?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    log_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.logTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypes = this._logTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logTypes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logTypes = value.logTypes;
    }
  }

  // log_types - computed: true, optional: true, required: false
  private _logTypes?: string[]; 
  public get logTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('log_types'));
  }
  public set logTypes(value: string[]) {
    this._logTypes = value;
  }
  public resetLogTypes() {
    this._logTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypesInput() {
    return this._logTypes;
  }
}
export interface ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters {
  /**
  * The fields to include in the flow log record. If you omit this parameter, the flow log is created using the default format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#log_format ObservabilityadminOrganizationTelemetryRule#log_format}
  */
  readonly logFormat?: string;
  /**
  * The maximum interval of time, in seconds, during which a flow of packets is captured and aggregated into a flow log record. Default is 600s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#max_aggregation_interval ObservabilityadminOrganizationTelemetryRule#max_aggregation_interval}
  */
  readonly maxAggregationInterval?: number;
  /**
  * The type of traffic captured for the flow log. Default is ALL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#traffic_type ObservabilityadminOrganizationTelemetryRule#traffic_type}
  */
  readonly trafficType?: string;
}

export function observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersToTerraform(struct?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    log_format: cdktn.stringToTerraform(struct!.logFormat),
    max_aggregation_interval: cdktn.numberToTerraform(struct!.maxAggregationInterval),
    traffic_type: cdktn.stringToTerraform(struct!.trafficType),
  }
}


export function observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersToHclTerraform(struct?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    log_format: {
      value: cdktn.stringToHclTerraform(struct!.logFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_aggregation_interval: {
      value: cdktn.numberToHclTerraform(struct!.maxAggregationInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    traffic_type: {
      value: cdktn.stringToHclTerraform(struct!.trafficType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFormat = this._logFormat;
    }
    if (this._maxAggregationInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAggregationInterval = this._maxAggregationInterval;
    }
    if (this._trafficType !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficType = this._trafficType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logFormat = undefined;
      this._maxAggregationInterval = undefined;
      this._trafficType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logFormat = value.logFormat;
      this._maxAggregationInterval = value.maxAggregationInterval;
      this._trafficType = value.trafficType;
    }
  }

  // log_format - computed: true, optional: true, required: false
  private _logFormat?: string; 
  public get logFormat() {
    return this.getStringAttribute('log_format');
  }
  public set logFormat(value: string) {
    this._logFormat = value;
  }
  public resetLogFormat() {
    this._logFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFormatInput() {
    return this._logFormat;
  }

  // max_aggregation_interval - computed: true, optional: true, required: false
  private _maxAggregationInterval?: number; 
  public get maxAggregationInterval() {
    return this.getNumberAttribute('max_aggregation_interval');
  }
  public set maxAggregationInterval(value: number) {
    this._maxAggregationInterval = value;
  }
  public resetMaxAggregationInterval() {
    this._maxAggregationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAggregationIntervalInput() {
    return this._maxAggregationInterval;
  }

  // traffic_type - computed: true, optional: true, required: false
  private _trafficType?: string; 
  public get trafficType() {
    return this.getStringAttribute('traffic_type');
  }
  public set trafficType(value: string) {
    this._trafficType = value;
  }
  public resetTrafficType() {
    this._trafficType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficTypeInput() {
    return this._trafficType;
  }
}
export interface ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition {
  /**
  * The enumerated action to take.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#action ObservabilityadminOrganizationTelemetryRule#action}
  */
  readonly action?: string;
}

export function observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionToTerraform(struct?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
  }
}


export function observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionToHclTerraform(struct?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition | cdktn.IResolvable): any {
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

export class ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition | cdktn.IResolvable | undefined) {
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
export interface ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition {
  /**
  * The label name of the condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#label_name ObservabilityadminOrganizationTelemetryRule#label_name}
  */
  readonly labelName?: string;
}

export function observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionToTerraform(struct?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    label_name: cdktn.stringToTerraform(struct!.labelName),
  }
}


export function observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionToHclTerraform(struct?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition | cdktn.IResolvable): any {
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

export class ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition | cdktn.IResolvable | undefined) {
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
export interface ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions {
  /**
  * The condition of the action desired in the filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#action_condition ObservabilityadminOrganizationTelemetryRule#action_condition}
  */
  readonly actionCondition?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition;
  /**
  * The label name of the condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#label_name_condition ObservabilityadminOrganizationTelemetryRule#label_name_condition}
  */
  readonly labelNameCondition?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition;
}

export function observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsToTerraform(struct?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_condition: observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionToTerraform(struct!.actionCondition),
    label_name_condition: observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionToTerraform(struct!.labelNameCondition),
  }
}


export function observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsToHclTerraform(struct?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_condition: {
      value: observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionToHclTerraform(struct!.actionCondition),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition",
    },
    label_name_condition: {
      value: observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionToHclTerraform(struct!.labelNameCondition),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions | cdktn.IResolvable | undefined) {
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
  private _actionCondition = new ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference(this, "action_condition");
  public get actionCondition() {
    return this._actionCondition;
  }
  public putActionCondition(value: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition) {
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
  private _labelNameCondition = new ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference(this, "label_name_condition");
  public get labelNameCondition() {
    return this._labelNameCondition;
  }
  public putLabelNameCondition(value: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition) {
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

export class ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference {
    return new ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters {
  /**
  * The behavior required of the filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#behavior ObservabilityadminOrganizationTelemetryRule#behavior}
  */
  readonly behavior?: string;
  /**
  * A list of conditions for a filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#conditions ObservabilityadminOrganizationTelemetryRule#conditions}
  */
  readonly conditions?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions[] | cdktn.IResolvable;
  /**
  * The requirement portion of the filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#requirement ObservabilityadminOrganizationTelemetryRule#requirement}
  */
  readonly requirement?: string;
}

export function observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersToTerraform(struct?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    behavior: cdktn.stringToTerraform(struct!.behavior),
    conditions: cdktn.listMapper(observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsToTerraform, false)(struct!.conditions),
    requirement: cdktn.stringToTerraform(struct!.requirement),
  }
}


export function observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersToHclTerraform(struct?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "set",
      storageClassType: "ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList",
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

export class ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters | cdktn.IResolvable | undefined) {
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
  private _conditions = new ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList(this, "conditions", true);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions[] | cdktn.IResolvable) {
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

export class ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference {
    return new ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter {
  /**
  * The behavior required of the filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#default_behavior ObservabilityadminOrganizationTelemetryRule#default_behavior}
  */
  readonly defaultBehavior?: string;
  /**
  * A list of filters to be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#filters ObservabilityadminOrganizationTelemetryRule#filters}
  */
  readonly filters?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters[] | cdktn.IResolvable;
}

export function observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterToTerraform(struct?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_behavior: cdktn.stringToTerraform(struct!.defaultBehavior),
    filters: cdktn.listMapper(observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersToTerraform, false)(struct!.filters),
  }
}


export function observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterToHclTerraform(struct?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersToHclTerraform, false)(struct!.filters),
      isBlock: true,
      type: "set",
      storageClassType: "ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter | cdktn.IResolvable | undefined) {
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
  private _filters = new ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList(this, "filters", true);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters[] | cdktn.IResolvable) {
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
export interface ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader {
  /**
  * The name of the header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#name ObservabilityadminOrganizationTelemetryRule#name}
  */
  readonly name?: string;
}

export function observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderToTerraform(struct?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderToHclTerraform(struct?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader | cdktn.IResolvable): any {
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

export class ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader | cdktn.IResolvable | undefined) {
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
export interface ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields {
  /**
  * The method with which to match this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#method ObservabilityadminOrganizationTelemetryRule#method}
  */
  readonly method?: string;
  /**
  * The query string to find the resource to match this field to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#query_string ObservabilityadminOrganizationTelemetryRule#query_string}
  */
  readonly queryString?: string;
  /**
  * Header for the field to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#single_header ObservabilityadminOrganizationTelemetryRule#single_header}
  */
  readonly singleHeader?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader;
  /**
  * This is the URI path to match this rule to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#uri_path ObservabilityadminOrganizationTelemetryRule#uri_path}
  */
  readonly uriPath?: string;
}

export function observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsToTerraform(struct?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    method: cdktn.stringToTerraform(struct!.method),
    query_string: cdktn.stringToTerraform(struct!.queryString),
    single_header: observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderToTerraform(struct!.singleHeader),
    uri_path: cdktn.stringToTerraform(struct!.uriPath),
  }
}


export function observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsToHclTerraform(struct?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields | cdktn.IResolvable): any {
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
      value: observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderToHclTerraform(struct!.singleHeader),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader",
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

export class ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields | cdktn.IResolvable | undefined) {
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
  private _singleHeader = new ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference(this, "single_header");
  public get singleHeader() {
    return this._singleHeader;
  }
  public putSingleHeader(value: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader) {
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

export class ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference {
    return new ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters {
  /**
  * The type of logs to generate for WAF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#log_type ObservabilityadminOrganizationTelemetryRule#log_type}
  */
  readonly logType?: string;
  /**
  * Default handling for logs that don't match any of the specified filtering conditions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#logging_filter ObservabilityadminOrganizationTelemetryRule#logging_filter}
  */
  readonly loggingFilter?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter;
  /**
  * Fields not to be included in the logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#redacted_fields ObservabilityadminOrganizationTelemetryRule#redacted_fields}
  */
  readonly redactedFields?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields[] | cdktn.IResolvable;
}

export function observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersToTerraform(struct?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    log_type: cdktn.stringToTerraform(struct!.logType),
    logging_filter: observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterToTerraform(struct!.loggingFilter),
    redacted_fields: cdktn.listMapper(observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsToTerraform, false)(struct!.redactedFields),
  }
}


export function observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersToHclTerraform(struct?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    log_type: {
      value: cdktn.stringToHclTerraform(struct!.logType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging_filter: {
      value: observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterToHclTerraform(struct!.loggingFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter",
    },
    redacted_fields: {
      value: cdktn.listMapperHcl(observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsToHclTerraform, false)(struct!.redactedFields),
      isBlock: true,
      type: "set",
      storageClassType: "ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logType !== undefined) {
      hasAnyValues = true;
      internalValueResult.logType = this._logType;
    }
    if (this._loggingFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingFilter = this._loggingFilter?.internalValue;
    }
    if (this._redactedFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redactedFields = this._redactedFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logType = undefined;
      this._loggingFilter.internalValue = undefined;
      this._redactedFields.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logType = value.logType;
      this._loggingFilter.internalValue = value.loggingFilter;
      this._redactedFields.internalValue = value.redactedFields;
    }
  }

  // log_type - computed: true, optional: true, required: false
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  public resetLogType() {
    this._logType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }

  // logging_filter - computed: true, optional: true, required: false
  private _loggingFilter = new ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference(this, "logging_filter");
  public get loggingFilter() {
    return this._loggingFilter;
  }
  public putLoggingFilter(value: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter) {
    this._loggingFilter.internalValue = value;
  }
  public resetLoggingFilter() {
    this._loggingFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingFilterInput() {
    return this._loggingFilter.internalValue;
  }

  // redacted_fields - computed: true, optional: true, required: false
  private _redactedFields = new ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList(this, "redacted_fields", true);
  public get redactedFields() {
    return this._redactedFields;
  }
  public putRedactedFields(value: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields[] | cdktn.IResolvable) {
    this._redactedFields.internalValue = value;
  }
  public resetRedactedFields() {
    this._redactedFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactedFieldsInput() {
    return this._redactedFields.internalValue;
  }
}
export interface ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration {
  /**
  * Telemetry parameters for Cloudtrail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#cloudtrail_parameters ObservabilityadminOrganizationTelemetryRule#cloudtrail_parameters}
  */
  readonly cloudtrailParameters?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters;
  /**
  * Pattern for telemetry data destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#destination_pattern ObservabilityadminOrganizationTelemetryRule#destination_pattern}
  */
  readonly destinationPattern?: string;
  /**
  * Type of telemetry destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#destination_type ObservabilityadminOrganizationTelemetryRule#destination_type}
  */
  readonly destinationType?: string;
  /**
  * Telemetry parameters for ELB/NLB Load Balancer Logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#elb_load_balancer_logging_parameters ObservabilityadminOrganizationTelemetryRule#elb_load_balancer_logging_parameters}
  */
  readonly elbLoadBalancerLoggingParameters?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters;
  /**
  * Parameters for log delivery configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#log_delivery_parameters ObservabilityadminOrganizationTelemetryRule#log_delivery_parameters}
  */
  readonly logDeliveryParameters?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters;
  /**
  * Number of days to retain the telemetry data in the specified destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#retention_in_days ObservabilityadminOrganizationTelemetryRule#retention_in_days}
  */
  readonly retentionInDays?: number;
  /**
  * Telemetry parameters for VPC Flow logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#vpc_flow_log_parameters ObservabilityadminOrganizationTelemetryRule#vpc_flow_log_parameters}
  */
  readonly vpcFlowLogParameters?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters;
  /**
  * Telemetry parameters for WAF v2 Web ACL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#waf_logging_parameters ObservabilityadminOrganizationTelemetryRule#waf_logging_parameters}
  */
  readonly wafLoggingParameters?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters;
}

export function observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationToTerraform(struct?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudtrail_parameters: observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersToTerraform(struct!.cloudtrailParameters),
    destination_pattern: cdktn.stringToTerraform(struct!.destinationPattern),
    destination_type: cdktn.stringToTerraform(struct!.destinationType),
    elb_load_balancer_logging_parameters: observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersToTerraform(struct!.elbLoadBalancerLoggingParameters),
    log_delivery_parameters: observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersToTerraform(struct!.logDeliveryParameters),
    retention_in_days: cdktn.numberToTerraform(struct!.retentionInDays),
    vpc_flow_log_parameters: observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersToTerraform(struct!.vpcFlowLogParameters),
    waf_logging_parameters: observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersToTerraform(struct!.wafLoggingParameters),
  }
}


export function observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationToHclTerraform(struct?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudtrail_parameters: {
      value: observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersToHclTerraform(struct!.cloudtrailParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters",
    },
    destination_pattern: {
      value: cdktn.stringToHclTerraform(struct!.destinationPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_type: {
      value: cdktn.stringToHclTerraform(struct!.destinationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elb_load_balancer_logging_parameters: {
      value: observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersToHclTerraform(struct!.elbLoadBalancerLoggingParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters",
    },
    log_delivery_parameters: {
      value: observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersToHclTerraform(struct!.logDeliveryParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters",
    },
    retention_in_days: {
      value: cdktn.numberToHclTerraform(struct!.retentionInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpc_flow_log_parameters: {
      value: observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersToHclTerraform(struct!.vpcFlowLogParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters",
    },
    waf_logging_parameters: {
      value: observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersToHclTerraform(struct!.wafLoggingParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudtrailParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudtrailParameters = this._cloudtrailParameters?.internalValue;
    }
    if (this._destinationPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPattern = this._destinationPattern;
    }
    if (this._destinationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationType = this._destinationType;
    }
    if (this._elbLoadBalancerLoggingParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elbLoadBalancerLoggingParameters = this._elbLoadBalancerLoggingParameters?.internalValue;
    }
    if (this._logDeliveryParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logDeliveryParameters = this._logDeliveryParameters?.internalValue;
    }
    if (this._retentionInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionInDays = this._retentionInDays;
    }
    if (this._vpcFlowLogParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcFlowLogParameters = this._vpcFlowLogParameters?.internalValue;
    }
    if (this._wafLoggingParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafLoggingParameters = this._wafLoggingParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudtrailParameters.internalValue = undefined;
      this._destinationPattern = undefined;
      this._destinationType = undefined;
      this._elbLoadBalancerLoggingParameters.internalValue = undefined;
      this._logDeliveryParameters.internalValue = undefined;
      this._retentionInDays = undefined;
      this._vpcFlowLogParameters.internalValue = undefined;
      this._wafLoggingParameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudtrailParameters.internalValue = value.cloudtrailParameters;
      this._destinationPattern = value.destinationPattern;
      this._destinationType = value.destinationType;
      this._elbLoadBalancerLoggingParameters.internalValue = value.elbLoadBalancerLoggingParameters;
      this._logDeliveryParameters.internalValue = value.logDeliveryParameters;
      this._retentionInDays = value.retentionInDays;
      this._vpcFlowLogParameters.internalValue = value.vpcFlowLogParameters;
      this._wafLoggingParameters.internalValue = value.wafLoggingParameters;
    }
  }

  // cloudtrail_parameters - computed: true, optional: true, required: false
  private _cloudtrailParameters = new ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference(this, "cloudtrail_parameters");
  public get cloudtrailParameters() {
    return this._cloudtrailParameters;
  }
  public putCloudtrailParameters(value: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters) {
    this._cloudtrailParameters.internalValue = value;
  }
  public resetCloudtrailParameters() {
    this._cloudtrailParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudtrailParametersInput() {
    return this._cloudtrailParameters.internalValue;
  }

  // destination_pattern - computed: true, optional: true, required: false
  private _destinationPattern?: string; 
  public get destinationPattern() {
    return this.getStringAttribute('destination_pattern');
  }
  public set destinationPattern(value: string) {
    this._destinationPattern = value;
  }
  public resetDestinationPattern() {
    this._destinationPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPatternInput() {
    return this._destinationPattern;
  }

  // destination_type - computed: true, optional: true, required: false
  private _destinationType?: string; 
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }
  public set destinationType(value: string) {
    this._destinationType = value;
  }
  public resetDestinationType() {
    this._destinationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTypeInput() {
    return this._destinationType;
  }

  // elb_load_balancer_logging_parameters - computed: true, optional: true, required: false
  private _elbLoadBalancerLoggingParameters = new ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference(this, "elb_load_balancer_logging_parameters");
  public get elbLoadBalancerLoggingParameters() {
    return this._elbLoadBalancerLoggingParameters;
  }
  public putElbLoadBalancerLoggingParameters(value: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters) {
    this._elbLoadBalancerLoggingParameters.internalValue = value;
  }
  public resetElbLoadBalancerLoggingParameters() {
    this._elbLoadBalancerLoggingParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elbLoadBalancerLoggingParametersInput() {
    return this._elbLoadBalancerLoggingParameters.internalValue;
  }

  // log_delivery_parameters - computed: true, optional: true, required: false
  private _logDeliveryParameters = new ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference(this, "log_delivery_parameters");
  public get logDeliveryParameters() {
    return this._logDeliveryParameters;
  }
  public putLogDeliveryParameters(value: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters) {
    this._logDeliveryParameters.internalValue = value;
  }
  public resetLogDeliveryParameters() {
    this._logDeliveryParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDeliveryParametersInput() {
    return this._logDeliveryParameters.internalValue;
  }

  // retention_in_days - computed: true, optional: true, required: false
  private _retentionInDays?: number; 
  public get retentionInDays() {
    return this.getNumberAttribute('retention_in_days');
  }
  public set retentionInDays(value: number) {
    this._retentionInDays = value;
  }
  public resetRetentionInDays() {
    this._retentionInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInDaysInput() {
    return this._retentionInDays;
  }

  // vpc_flow_log_parameters - computed: true, optional: true, required: false
  private _vpcFlowLogParameters = new ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference(this, "vpc_flow_log_parameters");
  public get vpcFlowLogParameters() {
    return this._vpcFlowLogParameters;
  }
  public putVpcFlowLogParameters(value: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters) {
    this._vpcFlowLogParameters.internalValue = value;
  }
  public resetVpcFlowLogParameters() {
    this._vpcFlowLogParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcFlowLogParametersInput() {
    return this._vpcFlowLogParameters.internalValue;
  }

  // waf_logging_parameters - computed: true, optional: true, required: false
  private _wafLoggingParameters = new ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference(this, "waf_logging_parameters");
  public get wafLoggingParameters() {
    return this._wafLoggingParameters;
  }
  public putWafLoggingParameters(value: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters) {
    this._wafLoggingParameters.internalValue = value;
  }
  public resetWafLoggingParameters() {
    this._wafLoggingParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafLoggingParametersInput() {
    return this._wafLoggingParameters.internalValue;
  }
}
export interface ObservabilityadminOrganizationTelemetryRuleRule {
  /**
  * When true, the rule is replicated to all supported regions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#all_regions ObservabilityadminOrganizationTelemetryRule#all_regions}
  */
  readonly allRegions?: boolean | cdktn.IResolvable;
  /**
  * When true, configuration drift in managed telemetry resources will be detected and remediated for resource-level fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#allow_field_updates ObservabilityadminOrganizationTelemetryRule#allow_field_updates}
  */
  readonly allowFieldUpdates?: boolean | cdktn.IResolvable;
  /**
  * The destination configuration for telemetry data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#destination_configuration ObservabilityadminOrganizationTelemetryRule#destination_configuration}
  */
  readonly destinationConfiguration?: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration;
  /**
  * List of AWS region codes where the rule should be replicated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#regions ObservabilityadminOrganizationTelemetryRule#regions}
  */
  readonly regions?: string[];
  /**
  * Resource Type associated with the Organization Telemetry Rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#resource_type ObservabilityadminOrganizationTelemetryRule#resource_type}
  */
  readonly resourceType: string;
  /**
  * Selection Criteria on scope level for rule application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#scope ObservabilityadminOrganizationTelemetryRule#scope}
  */
  readonly scope?: string;
  /**
  * Selection Criteria on resource level for rule application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#selection_criteria ObservabilityadminOrganizationTelemetryRule#selection_criteria}
  */
  readonly selectionCriteria?: string;
  /**
  * The telemetry source types for a telemetry rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#telemetry_source_types ObservabilityadminOrganizationTelemetryRule#telemetry_source_types}
  */
  readonly telemetrySourceTypes?: string[];
  /**
  * Telemetry Type associated with the Organization Telemetry Rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#telemetry_type ObservabilityadminOrganizationTelemetryRule#telemetry_type}
  */
  readonly telemetryType: string;
}

export function observabilityadminOrganizationTelemetryRuleRuleToTerraform(struct?: ObservabilityadminOrganizationTelemetryRuleRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    all_regions: cdktn.booleanToTerraform(struct!.allRegions),
    allow_field_updates: cdktn.booleanToTerraform(struct!.allowFieldUpdates),
    destination_configuration: observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationToTerraform(struct!.destinationConfiguration),
    regions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.regions),
    resource_type: cdktn.stringToTerraform(struct!.resourceType),
    scope: cdktn.stringToTerraform(struct!.scope),
    selection_criteria: cdktn.stringToTerraform(struct!.selectionCriteria),
    telemetry_source_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.telemetrySourceTypes),
    telemetry_type: cdktn.stringToTerraform(struct!.telemetryType),
  }
}


export function observabilityadminOrganizationTelemetryRuleRuleToHclTerraform(struct?: ObservabilityadminOrganizationTelemetryRuleRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    all_regions: {
      value: cdktn.booleanToHclTerraform(struct!.allRegions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_field_updates: {
      value: cdktn.booleanToHclTerraform(struct!.allowFieldUpdates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    destination_configuration: {
      value: observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationToHclTerraform(struct!.destinationConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration",
    },
    regions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    resource_type: {
      value: cdktn.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktn.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selection_criteria: {
      value: cdktn.stringToHclTerraform(struct!.selectionCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    telemetry_source_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.telemetrySourceTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    telemetry_type: {
      value: cdktn.stringToHclTerraform(struct!.telemetryType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminOrganizationTelemetryRuleRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityadminOrganizationTelemetryRuleRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRegions = this._allRegions;
    }
    if (this._allowFieldUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowFieldUpdates = this._allowFieldUpdates;
    }
    if (this._destinationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationConfiguration = this._destinationConfiguration?.internalValue;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._selectionCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectionCriteria = this._selectionCriteria;
    }
    if (this._telemetrySourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.telemetrySourceTypes = this._telemetrySourceTypes;
    }
    if (this._telemetryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.telemetryType = this._telemetryType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminOrganizationTelemetryRuleRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allRegions = undefined;
      this._allowFieldUpdates = undefined;
      this._destinationConfiguration.internalValue = undefined;
      this._regions = undefined;
      this._resourceType = undefined;
      this._scope = undefined;
      this._selectionCriteria = undefined;
      this._telemetrySourceTypes = undefined;
      this._telemetryType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allRegions = value.allRegions;
      this._allowFieldUpdates = value.allowFieldUpdates;
      this._destinationConfiguration.internalValue = value.destinationConfiguration;
      this._regions = value.regions;
      this._resourceType = value.resourceType;
      this._scope = value.scope;
      this._selectionCriteria = value.selectionCriteria;
      this._telemetrySourceTypes = value.telemetrySourceTypes;
      this._telemetryType = value.telemetryType;
    }
  }

  // all_regions - computed: true, optional: true, required: false
  private _allRegions?: boolean | cdktn.IResolvable; 
  public get allRegions() {
    return this.getBooleanAttribute('all_regions');
  }
  public set allRegions(value: boolean | cdktn.IResolvable) {
    this._allRegions = value;
  }
  public resetAllRegions() {
    this._allRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allRegionsInput() {
    return this._allRegions;
  }

  // allow_field_updates - computed: true, optional: true, required: false
  private _allowFieldUpdates?: boolean | cdktn.IResolvable; 
  public get allowFieldUpdates() {
    return this.getBooleanAttribute('allow_field_updates');
  }
  public set allowFieldUpdates(value: boolean | cdktn.IResolvable) {
    this._allowFieldUpdates = value;
  }
  public resetAllowFieldUpdates() {
    this._allowFieldUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowFieldUpdatesInput() {
    return this._allowFieldUpdates;
  }

  // destination_configuration - computed: true, optional: true, required: false
  private _destinationConfiguration = new ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference(this, "destination_configuration");
  public get destinationConfiguration() {
    return this._destinationConfiguration;
  }
  public putDestinationConfiguration(value: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration) {
    this._destinationConfiguration.internalValue = value;
  }
  public resetDestinationConfiguration() {
    this._destinationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationConfigurationInput() {
    return this._destinationConfiguration.internalValue;
  }

  // regions - computed: true, optional: true, required: false
  private _regions?: string[]; 
  public get regions() {
    return cdktn.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // selection_criteria - computed: true, optional: true, required: false
  private _selectionCriteria?: string; 
  public get selectionCriteria() {
    return this.getStringAttribute('selection_criteria');
  }
  public set selectionCriteria(value: string) {
    this._selectionCriteria = value;
  }
  public resetSelectionCriteria() {
    this._selectionCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionCriteriaInput() {
    return this._selectionCriteria;
  }

  // telemetry_source_types - computed: true, optional: true, required: false
  private _telemetrySourceTypes?: string[]; 
  public get telemetrySourceTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('telemetry_source_types'));
  }
  public set telemetrySourceTypes(value: string[]) {
    this._telemetrySourceTypes = value;
  }
  public resetTelemetrySourceTypes() {
    this._telemetrySourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetrySourceTypesInput() {
    return this._telemetrySourceTypes;
  }

  // telemetry_type - computed: false, optional: false, required: true
  private _telemetryType?: string; 
  public get telemetryType() {
    return this.getStringAttribute('telemetry_type');
  }
  public set telemetryType(value: string) {
    this._telemetryType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetryTypeInput() {
    return this._telemetryType;
  }
}
export interface ObservabilityadminOrganizationTelemetryRuleTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#key ObservabilityadminOrganizationTelemetryRule#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#value ObservabilityadminOrganizationTelemetryRule#value}
  */
  readonly value?: string;
}

export function observabilityadminOrganizationTelemetryRuleTagsToTerraform(struct?: ObservabilityadminOrganizationTelemetryRuleTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function observabilityadminOrganizationTelemetryRuleTagsToHclTerraform(struct?: ObservabilityadminOrganizationTelemetryRuleTags | cdktn.IResolvable): any {
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

export class ObservabilityadminOrganizationTelemetryRuleTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminOrganizationTelemetryRuleTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityadminOrganizationTelemetryRuleTags | cdktn.IResolvable | undefined) {
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

export class ObservabilityadminOrganizationTelemetryRuleTagsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminOrganizationTelemetryRuleTags[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminOrganizationTelemetryRuleTagsOutputReference {
    return new ObservabilityadminOrganizationTelemetryRuleTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule awscc_observabilityadmin_organization_telemetry_rule}
*/
export class ObservabilityadminOrganizationTelemetryRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_observabilityadmin_organization_telemetry_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ObservabilityadminOrganizationTelemetryRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObservabilityadminOrganizationTelemetryRule to import
  * @param importFromId The id of the existing ObservabilityadminOrganizationTelemetryRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObservabilityadminOrganizationTelemetryRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_observabilityadmin_organization_telemetry_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_telemetry_rule awscc_observabilityadmin_organization_telemetry_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObservabilityadminOrganizationTelemetryRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ObservabilityadminOrganizationTelemetryRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_observabilityadmin_organization_telemetry_rule',
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
    this._rule.internalValue = config.rule;
    this._ruleName = config.ruleName;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // region_statuses - computed: true, optional: false, required: false
  private _regionStatuses = new ObservabilityadminOrganizationTelemetryRuleRegionStatusesList(this, "region_statuses", false);
  public get regionStatuses() {
    return this._regionStatuses;
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new ObservabilityadminOrganizationTelemetryRuleRuleOutputReference(this, "rule");
  public get rule() {
    return this._rule;
  }
  public putRule(value: ObservabilityadminOrganizationTelemetryRuleRule) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // rule_arn - computed: true, optional: false, required: false
  public get ruleArn() {
    return this.getStringAttribute('rule_arn');
  }

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ObservabilityadminOrganizationTelemetryRuleTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ObservabilityadminOrganizationTelemetryRuleTags[] | cdktn.IResolvable) {
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
      rule: observabilityadminOrganizationTelemetryRuleRuleToTerraform(this._rule.internalValue),
      rule_name: cdktn.stringToTerraform(this._ruleName),
      tags: cdktn.listMapper(observabilityadminOrganizationTelemetryRuleTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      rule: {
        value: observabilityadminOrganizationTelemetryRuleRuleToHclTerraform(this._rule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ObservabilityadminOrganizationTelemetryRuleRule",
      },
      rule_name: {
        value: cdktn.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(observabilityadminOrganizationTelemetryRuleTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ObservabilityadminOrganizationTelemetryRuleTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
