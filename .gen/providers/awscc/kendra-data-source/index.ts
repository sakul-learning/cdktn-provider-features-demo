// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface KendraDataSourceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#custom_document_enrichment_configuration KendraDataSource#custom_document_enrichment_configuration}
  */
  readonly customDocumentEnrichmentConfiguration?: KendraDataSourceCustomDocumentEnrichmentConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#data_source_configuration KendraDataSource#data_source_configuration}
  */
  readonly dataSourceConfiguration?: KendraDataSourceDataSourceConfiguration;
  /**
  * Description of data source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#description KendraDataSource#description}
  */
  readonly description?: string;
  /**
  * ID of Index
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#index_id KendraDataSource#index_id}
  */
  readonly indexId: string;
  /**
  * The code for a language.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#language_code KendraDataSource#language_code}
  */
  readonly languageCode?: string;
  /**
  * Name of data source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#name KendraDataSource#name}
  */
  readonly name: string;
  /**
  * Role ARN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#role_arn KendraDataSource#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#schedule KendraDataSource#schedule}
  */
  readonly schedule?: string;
  /**
  * Tags for labeling the data source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#tags KendraDataSource#tags}
  */
  readonly tags?: KendraDataSourceTags[] | cdktn.IResolvable;
  /**
  * Data source type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#type KendraDataSource#type}
  */
  readonly type: string;
}
export interface KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#date_value KendraDataSource#date_value}
  */
  readonly dateValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#long_value KendraDataSource#long_value}
  */
  readonly longValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#string_list_value KendraDataSource#string_list_value}
  */
  readonly stringListValue?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#string_value KendraDataSource#string_value}
  */
  readonly stringValue?: string;
}

export function kendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueToTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    date_value: cdktn.stringToTerraform(struct!.dateValue),
    long_value: cdktn.numberToTerraform(struct!.longValue),
    string_list_value: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.stringListValue),
    string_value: cdktn.stringToTerraform(struct!.stringValue),
  }
}


export function kendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueToHclTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    date_value: {
      value: cdktn.stringToHclTerraform(struct!.dateValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    long_value: {
      value: cdktn.numberToHclTerraform(struct!.longValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    string_list_value: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.stringListValue),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    string_value: {
      value: cdktn.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dateValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateValue = this._dateValue;
    }
    if (this._longValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.longValue = this._longValue;
    }
    if (this._stringListValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringListValue = this._stringListValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dateValue = undefined;
      this._longValue = undefined;
      this._stringListValue = undefined;
      this._stringValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dateValue = value.dateValue;
      this._longValue = value.longValue;
      this._stringListValue = value.stringListValue;
      this._stringValue = value.stringValue;
    }
  }

  // date_value - computed: true, optional: true, required: false
  private _dateValue?: string;
  public get dateValue() {
    return this.getStringAttribute('date_value');
  }
  public set dateValue(value: string) {
    this._dateValue = value;
  }
  public resetDateValue() {
    this._dateValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateValueInput() {
    return this._dateValue;
  }

  // long_value - computed: true, optional: true, required: false
  private _longValue?: number;
  public get longValue() {
    return this.getNumberAttribute('long_value');
  }
  public set longValue(value: number) {
    this._longValue = value;
  }
  public resetLongValue() {
    this._longValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longValueInput() {
    return this._longValue;
  }

  // string_list_value - computed: true, optional: true, required: false
  private _stringListValue?: string[];
  public get stringListValue() {
    return this.getListAttribute('string_list_value');
  }
  public set stringListValue(value: string[]) {
    this._stringListValue = value;
  }
  public resetStringListValue() {
    this._stringListValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringListValueInput() {
    return this._stringListValue;
  }

  // string_value - computed: true, optional: true, required: false
  private _stringValue?: string;
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}
export interface KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#condition_document_attribute_key KendraDataSource#condition_document_attribute_key}
  */
  readonly conditionDocumentAttributeKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#condition_on_value KendraDataSource#condition_on_value}
  */
  readonly conditionOnValue?: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#operator KendraDataSource#operator}
  */
  readonly operator?: string;
}

export function kendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionToTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition_document_attribute_key: cdktn.stringToTerraform(struct!.conditionDocumentAttributeKey),
    condition_on_value: kendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueToTerraform(struct!.conditionOnValue),
    operator: cdktn.stringToTerraform(struct!.operator),
  }
}


export function kendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionToHclTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition_document_attribute_key: {
      value: cdktn.stringToHclTerraform(struct!.conditionDocumentAttributeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition_on_value: {
      value: kendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueToHclTerraform(struct!.conditionOnValue),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionDocumentAttributeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionDocumentAttributeKey = this._conditionDocumentAttributeKey;
    }
    if (this._conditionOnValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionOnValue = this._conditionOnValue?.internalValue;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionDocumentAttributeKey = undefined;
      this._conditionOnValue.internalValue = undefined;
      this._operator = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionDocumentAttributeKey = value.conditionDocumentAttributeKey;
      this._conditionOnValue.internalValue = value.conditionOnValue;
      this._operator = value.operator;
    }
  }

  // condition_document_attribute_key - computed: true, optional: true, required: false
  private _conditionDocumentAttributeKey?: string;
  public get conditionDocumentAttributeKey() {
    return this.getStringAttribute('condition_document_attribute_key');
  }
  public set conditionDocumentAttributeKey(value: string) {
    this._conditionDocumentAttributeKey = value;
  }
  public resetConditionDocumentAttributeKey() {
    this._conditionDocumentAttributeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionDocumentAttributeKeyInput() {
    return this._conditionDocumentAttributeKey;
  }

  // condition_on_value - computed: true, optional: true, required: false
  private _conditionOnValue = new KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference(this, "condition_on_value");
  public get conditionOnValue() {
    return this._conditionOnValue;
  }
  public putConditionOnValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue) {
    this._conditionOnValue.internalValue = value;
  }
  public resetConditionOnValue() {
    this._conditionOnValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionOnValueInput() {
    return this._conditionOnValue.internalValue;
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string;
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }
}
export interface KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#date_value KendraDataSource#date_value}
  */
  readonly dateValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#long_value KendraDataSource#long_value}
  */
  readonly longValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#string_list_value KendraDataSource#string_list_value}
  */
  readonly stringListValue?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#string_value KendraDataSource#string_value}
  */
  readonly stringValue?: string;
}

export function kendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueToTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    date_value: cdktn.stringToTerraform(struct!.dateValue),
    long_value: cdktn.numberToTerraform(struct!.longValue),
    string_list_value: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.stringListValue),
    string_value: cdktn.stringToTerraform(struct!.stringValue),
  }
}


export function kendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueToHclTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    date_value: {
      value: cdktn.stringToHclTerraform(struct!.dateValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    long_value: {
      value: cdktn.numberToHclTerraform(struct!.longValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    string_list_value: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.stringListValue),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    string_value: {
      value: cdktn.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dateValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateValue = this._dateValue;
    }
    if (this._longValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.longValue = this._longValue;
    }
    if (this._stringListValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringListValue = this._stringListValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dateValue = undefined;
      this._longValue = undefined;
      this._stringListValue = undefined;
      this._stringValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dateValue = value.dateValue;
      this._longValue = value.longValue;
      this._stringListValue = value.stringListValue;
      this._stringValue = value.stringValue;
    }
  }

  // date_value - computed: true, optional: true, required: false
  private _dateValue?: string;
  public get dateValue() {
    return this.getStringAttribute('date_value');
  }
  public set dateValue(value: string) {
    this._dateValue = value;
  }
  public resetDateValue() {
    this._dateValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateValueInput() {
    return this._dateValue;
  }

  // long_value - computed: true, optional: true, required: false
  private _longValue?: number;
  public get longValue() {
    return this.getNumberAttribute('long_value');
  }
  public set longValue(value: number) {
    this._longValue = value;
  }
  public resetLongValue() {
    this._longValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longValueInput() {
    return this._longValue;
  }

  // string_list_value - computed: true, optional: true, required: false
  private _stringListValue?: string[];
  public get stringListValue() {
    return this.getListAttribute('string_list_value');
  }
  public set stringListValue(value: string[]) {
    this._stringListValue = value;
  }
  public resetStringListValue() {
    this._stringListValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringListValueInput() {
    return this._stringListValue;
  }

  // string_value - computed: true, optional: true, required: false
  private _stringValue?: string;
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}
export interface KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#target_document_attribute_key KendraDataSource#target_document_attribute_key}
  */
  readonly targetDocumentAttributeKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#target_document_attribute_value KendraDataSource#target_document_attribute_value}
  */
  readonly targetDocumentAttributeValue?: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#target_document_attribute_value_deletion KendraDataSource#target_document_attribute_value_deletion}
  */
  readonly targetDocumentAttributeValueDeletion?: boolean | cdktn.IResolvable;
}

export function kendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetToTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    target_document_attribute_key: cdktn.stringToTerraform(struct!.targetDocumentAttributeKey),
    target_document_attribute_value: kendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueToTerraform(struct!.targetDocumentAttributeValue),
    target_document_attribute_value_deletion: cdktn.booleanToTerraform(struct!.targetDocumentAttributeValueDeletion),
  }
}


export function kendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetToHclTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    target_document_attribute_key: {
      value: cdktn.stringToHclTerraform(struct!.targetDocumentAttributeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_document_attribute_value: {
      value: kendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueToHclTerraform(struct!.targetDocumentAttributeValue),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue",
    },
    target_document_attribute_value_deletion: {
      value: cdktn.booleanToHclTerraform(struct!.targetDocumentAttributeValueDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetDocumentAttributeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDocumentAttributeKey = this._targetDocumentAttributeKey;
    }
    if (this._targetDocumentAttributeValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDocumentAttributeValue = this._targetDocumentAttributeValue?.internalValue;
    }
    if (this._targetDocumentAttributeValueDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDocumentAttributeValueDeletion = this._targetDocumentAttributeValueDeletion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetDocumentAttributeKey = undefined;
      this._targetDocumentAttributeValue.internalValue = undefined;
      this._targetDocumentAttributeValueDeletion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetDocumentAttributeKey = value.targetDocumentAttributeKey;
      this._targetDocumentAttributeValue.internalValue = value.targetDocumentAttributeValue;
      this._targetDocumentAttributeValueDeletion = value.targetDocumentAttributeValueDeletion;
    }
  }

  // target_document_attribute_key - computed: true, optional: true, required: false
  private _targetDocumentAttributeKey?: string;
  public get targetDocumentAttributeKey() {
    return this.getStringAttribute('target_document_attribute_key');
  }
  public set targetDocumentAttributeKey(value: string) {
    this._targetDocumentAttributeKey = value;
  }
  public resetTargetDocumentAttributeKey() {
    this._targetDocumentAttributeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDocumentAttributeKeyInput() {
    return this._targetDocumentAttributeKey;
  }

  // target_document_attribute_value - computed: true, optional: true, required: false
  private _targetDocumentAttributeValue = new KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference(this, "target_document_attribute_value");
  public get targetDocumentAttributeValue() {
    return this._targetDocumentAttributeValue;
  }
  public putTargetDocumentAttributeValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue) {
    this._targetDocumentAttributeValue.internalValue = value;
  }
  public resetTargetDocumentAttributeValue() {
    this._targetDocumentAttributeValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDocumentAttributeValueInput() {
    return this._targetDocumentAttributeValue.internalValue;
  }

  // target_document_attribute_value_deletion - computed: true, optional: true, required: false
  private _targetDocumentAttributeValueDeletion?: boolean | cdktn.IResolvable;
  public get targetDocumentAttributeValueDeletion() {
    return this.getBooleanAttribute('target_document_attribute_value_deletion');
  }
  public set targetDocumentAttributeValueDeletion(value: boolean | cdktn.IResolvable) {
    this._targetDocumentAttributeValueDeletion = value;
  }
  public resetTargetDocumentAttributeValueDeletion() {
    this._targetDocumentAttributeValueDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDocumentAttributeValueDeletionInput() {
    return this._targetDocumentAttributeValueDeletion;
  }
}
export interface KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#condition KendraDataSource#condition}
  */
  readonly condition?: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#document_content_deletion KendraDataSource#document_content_deletion}
  */
  readonly documentContentDeletion?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#target KendraDataSource#target}
  */
  readonly target?: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget;
}

export function kendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsToTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition: kendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionToTerraform(struct!.condition),
    document_content_deletion: cdktn.booleanToTerraform(struct!.documentContentDeletion),
    target: kendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetToTerraform(struct!.target),
  }
}


export function kendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsToHclTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition: {
      value: kendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition",
    },
    document_content_deletion: {
      value: cdktn.booleanToHclTerraform(struct!.documentContentDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target: {
      value: kendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._documentContentDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentContentDeletion = this._documentContentDeletion;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition.internalValue = undefined;
      this._documentContentDeletion = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition.internalValue = value.condition;
      this._documentContentDeletion = value.documentContentDeletion;
      this._target.internalValue = value.target;
    }
  }

  // condition - computed: true, optional: true, required: false
  private _condition = new KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // document_content_deletion - computed: true, optional: true, required: false
  private _documentContentDeletion?: boolean | cdktn.IResolvable;
  public get documentContentDeletion() {
    return this.getBooleanAttribute('document_content_deletion');
  }
  public set documentContentDeletion(value: boolean | cdktn.IResolvable) {
    this._documentContentDeletion = value;
  }
  public resetDocumentContentDeletion() {
    this._documentContentDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentContentDeletionInput() {
    return this._documentContentDeletion;
  }

  // target - computed: true, optional: true, required: false
  private _target = new KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList extends cdktn.ComplexList {
  public internalValue? : KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations[] | cdktn.IResolvable

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
  public get(index: number): KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference {
    return new KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#date_value KendraDataSource#date_value}
  */
  readonly dateValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#long_value KendraDataSource#long_value}
  */
  readonly longValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#string_list_value KendraDataSource#string_list_value}
  */
  readonly stringListValue?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#string_value KendraDataSource#string_value}
  */
  readonly stringValue?: string;
}

export function kendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueToTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    date_value: cdktn.stringToTerraform(struct!.dateValue),
    long_value: cdktn.numberToTerraform(struct!.longValue),
    string_list_value: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.stringListValue),
    string_value: cdktn.stringToTerraform(struct!.stringValue),
  }
}


export function kendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueToHclTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    date_value: {
      value: cdktn.stringToHclTerraform(struct!.dateValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    long_value: {
      value: cdktn.numberToHclTerraform(struct!.longValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    string_list_value: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.stringListValue),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    string_value: {
      value: cdktn.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dateValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateValue = this._dateValue;
    }
    if (this._longValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.longValue = this._longValue;
    }
    if (this._stringListValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringListValue = this._stringListValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dateValue = undefined;
      this._longValue = undefined;
      this._stringListValue = undefined;
      this._stringValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dateValue = value.dateValue;
      this._longValue = value.longValue;
      this._stringListValue = value.stringListValue;
      this._stringValue = value.stringValue;
    }
  }

  // date_value - computed: true, optional: true, required: false
  private _dateValue?: string;
  public get dateValue() {
    return this.getStringAttribute('date_value');
  }
  public set dateValue(value: string) {
    this._dateValue = value;
  }
  public resetDateValue() {
    this._dateValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateValueInput() {
    return this._dateValue;
  }

  // long_value - computed: true, optional: true, required: false
  private _longValue?: number;
  public get longValue() {
    return this.getNumberAttribute('long_value');
  }
  public set longValue(value: number) {
    this._longValue = value;
  }
  public resetLongValue() {
    this._longValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longValueInput() {
    return this._longValue;
  }

  // string_list_value - computed: true, optional: true, required: false
  private _stringListValue?: string[];
  public get stringListValue() {
    return this.getListAttribute('string_list_value');
  }
  public set stringListValue(value: string[]) {
    this._stringListValue = value;
  }
  public resetStringListValue() {
    this._stringListValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringListValueInput() {
    return this._stringListValue;
  }

  // string_value - computed: true, optional: true, required: false
  private _stringValue?: string;
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}
export interface KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#condition_document_attribute_key KendraDataSource#condition_document_attribute_key}
  */
  readonly conditionDocumentAttributeKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#condition_on_value KendraDataSource#condition_on_value}
  */
  readonly conditionOnValue?: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#operator KendraDataSource#operator}
  */
  readonly operator?: string;
}

export function kendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionToTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition_document_attribute_key: cdktn.stringToTerraform(struct!.conditionDocumentAttributeKey),
    condition_on_value: kendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueToTerraform(struct!.conditionOnValue),
    operator: cdktn.stringToTerraform(struct!.operator),
  }
}


export function kendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionToHclTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition_document_attribute_key: {
      value: cdktn.stringToHclTerraform(struct!.conditionDocumentAttributeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition_on_value: {
      value: kendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueToHclTerraform(struct!.conditionOnValue),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionDocumentAttributeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionDocumentAttributeKey = this._conditionDocumentAttributeKey;
    }
    if (this._conditionOnValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionOnValue = this._conditionOnValue?.internalValue;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionDocumentAttributeKey = undefined;
      this._conditionOnValue.internalValue = undefined;
      this._operator = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionDocumentAttributeKey = value.conditionDocumentAttributeKey;
      this._conditionOnValue.internalValue = value.conditionOnValue;
      this._operator = value.operator;
    }
  }

  // condition_document_attribute_key - computed: true, optional: true, required: false
  private _conditionDocumentAttributeKey?: string;
  public get conditionDocumentAttributeKey() {
    return this.getStringAttribute('condition_document_attribute_key');
  }
  public set conditionDocumentAttributeKey(value: string) {
    this._conditionDocumentAttributeKey = value;
  }
  public resetConditionDocumentAttributeKey() {
    this._conditionDocumentAttributeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionDocumentAttributeKeyInput() {
    return this._conditionDocumentAttributeKey;
  }

  // condition_on_value - computed: true, optional: true, required: false
  private _conditionOnValue = new KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference(this, "condition_on_value");
  public get conditionOnValue() {
    return this._conditionOnValue;
  }
  public putConditionOnValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue) {
    this._conditionOnValue.internalValue = value;
  }
  public resetConditionOnValue() {
    this._conditionOnValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionOnValueInput() {
    return this._conditionOnValue.internalValue;
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string;
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }
}
export interface KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#invocation_condition KendraDataSource#invocation_condition}
  */
  readonly invocationCondition?: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#lambda_arn KendraDataSource#lambda_arn}
  */
  readonly lambdaArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#s3_bucket KendraDataSource#s3_bucket}
  */
  readonly s3Bucket?: string;
}

export function kendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationToTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    invocation_condition: kendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionToTerraform(struct!.invocationCondition),
    lambda_arn: cdktn.stringToTerraform(struct!.lambdaArn),
    s3_bucket: cdktn.stringToTerraform(struct!.s3Bucket),
  }
}


export function kendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationToHclTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    invocation_condition: {
      value: kendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionToHclTerraform(struct!.invocationCondition),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition",
    },
    lambda_arn: {
      value: cdktn.stringToHclTerraform(struct!.lambdaArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_bucket: {
      value: cdktn.stringToHclTerraform(struct!.s3Bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invocationCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.invocationCondition = this._invocationCondition?.internalValue;
    }
    if (this._lambdaArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaArn = this._lambdaArn;
    }
    if (this._s3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invocationCondition.internalValue = undefined;
      this._lambdaArn = undefined;
      this._s3Bucket = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invocationCondition.internalValue = value.invocationCondition;
      this._lambdaArn = value.lambdaArn;
      this._s3Bucket = value.s3Bucket;
    }
  }

  // invocation_condition - computed: true, optional: true, required: false
  private _invocationCondition = new KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference(this, "invocation_condition");
  public get invocationCondition() {
    return this._invocationCondition;
  }
  public putInvocationCondition(value: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition) {
    this._invocationCondition.internalValue = value;
  }
  public resetInvocationCondition() {
    this._invocationCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationConditionInput() {
    return this._invocationCondition.internalValue;
  }

  // lambda_arn - computed: true, optional: true, required: false
  private _lambdaArn?: string;
  public get lambdaArn() {
    return this.getStringAttribute('lambda_arn');
  }
  public set lambdaArn(value: string) {
    this._lambdaArn = value;
  }
  public resetLambdaArn() {
    this._lambdaArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaArnInput() {
    return this._lambdaArn;
  }

  // s3_bucket - computed: true, optional: true, required: false
  private _s3Bucket?: string;
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  public resetS3Bucket() {
    this._s3Bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }
}
export interface KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#date_value KendraDataSource#date_value}
  */
  readonly dateValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#long_value KendraDataSource#long_value}
  */
  readonly longValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#string_list_value KendraDataSource#string_list_value}
  */
  readonly stringListValue?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#string_value KendraDataSource#string_value}
  */
  readonly stringValue?: string;
}

export function kendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueToTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    date_value: cdktn.stringToTerraform(struct!.dateValue),
    long_value: cdktn.numberToTerraform(struct!.longValue),
    string_list_value: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.stringListValue),
    string_value: cdktn.stringToTerraform(struct!.stringValue),
  }
}


export function kendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueToHclTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    date_value: {
      value: cdktn.stringToHclTerraform(struct!.dateValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    long_value: {
      value: cdktn.numberToHclTerraform(struct!.longValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    string_list_value: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.stringListValue),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    string_value: {
      value: cdktn.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dateValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateValue = this._dateValue;
    }
    if (this._longValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.longValue = this._longValue;
    }
    if (this._stringListValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringListValue = this._stringListValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dateValue = undefined;
      this._longValue = undefined;
      this._stringListValue = undefined;
      this._stringValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dateValue = value.dateValue;
      this._longValue = value.longValue;
      this._stringListValue = value.stringListValue;
      this._stringValue = value.stringValue;
    }
  }

  // date_value - computed: true, optional: true, required: false
  private _dateValue?: string;
  public get dateValue() {
    return this.getStringAttribute('date_value');
  }
  public set dateValue(value: string) {
    this._dateValue = value;
  }
  public resetDateValue() {
    this._dateValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateValueInput() {
    return this._dateValue;
  }

  // long_value - computed: true, optional: true, required: false
  private _longValue?: number;
  public get longValue() {
    return this.getNumberAttribute('long_value');
  }
  public set longValue(value: number) {
    this._longValue = value;
  }
  public resetLongValue() {
    this._longValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longValueInput() {
    return this._longValue;
  }

  // string_list_value - computed: true, optional: true, required: false
  private _stringListValue?: string[];
  public get stringListValue() {
    return this.getListAttribute('string_list_value');
  }
  public set stringListValue(value: string[]) {
    this._stringListValue = value;
  }
  public resetStringListValue() {
    this._stringListValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringListValueInput() {
    return this._stringListValue;
  }

  // string_value - computed: true, optional: true, required: false
  private _stringValue?: string;
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}
export interface KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#condition_document_attribute_key KendraDataSource#condition_document_attribute_key}
  */
  readonly conditionDocumentAttributeKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#condition_on_value KendraDataSource#condition_on_value}
  */
  readonly conditionOnValue?: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#operator KendraDataSource#operator}
  */
  readonly operator?: string;
}

export function kendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionToTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition_document_attribute_key: cdktn.stringToTerraform(struct!.conditionDocumentAttributeKey),
    condition_on_value: kendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueToTerraform(struct!.conditionOnValue),
    operator: cdktn.stringToTerraform(struct!.operator),
  }
}


export function kendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionToHclTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition_document_attribute_key: {
      value: cdktn.stringToHclTerraform(struct!.conditionDocumentAttributeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition_on_value: {
      value: kendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueToHclTerraform(struct!.conditionOnValue),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionDocumentAttributeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionDocumentAttributeKey = this._conditionDocumentAttributeKey;
    }
    if (this._conditionOnValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionOnValue = this._conditionOnValue?.internalValue;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionDocumentAttributeKey = undefined;
      this._conditionOnValue.internalValue = undefined;
      this._operator = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionDocumentAttributeKey = value.conditionDocumentAttributeKey;
      this._conditionOnValue.internalValue = value.conditionOnValue;
      this._operator = value.operator;
    }
  }

  // condition_document_attribute_key - computed: true, optional: true, required: false
  private _conditionDocumentAttributeKey?: string;
  public get conditionDocumentAttributeKey() {
    return this.getStringAttribute('condition_document_attribute_key');
  }
  public set conditionDocumentAttributeKey(value: string) {
    this._conditionDocumentAttributeKey = value;
  }
  public resetConditionDocumentAttributeKey() {
    this._conditionDocumentAttributeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionDocumentAttributeKeyInput() {
    return this._conditionDocumentAttributeKey;
  }

  // condition_on_value - computed: true, optional: true, required: false
  private _conditionOnValue = new KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference(this, "condition_on_value");
  public get conditionOnValue() {
    return this._conditionOnValue;
  }
  public putConditionOnValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue) {
    this._conditionOnValue.internalValue = value;
  }
  public resetConditionOnValue() {
    this._conditionOnValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionOnValueInput() {
    return this._conditionOnValue.internalValue;
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string;
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }
}
export interface KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#invocation_condition KendraDataSource#invocation_condition}
  */
  readonly invocationCondition?: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#lambda_arn KendraDataSource#lambda_arn}
  */
  readonly lambdaArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#s3_bucket KendraDataSource#s3_bucket}
  */
  readonly s3Bucket?: string;
}

export function kendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationToTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    invocation_condition: kendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionToTerraform(struct!.invocationCondition),
    lambda_arn: cdktn.stringToTerraform(struct!.lambdaArn),
    s3_bucket: cdktn.stringToTerraform(struct!.s3Bucket),
  }
}


export function kendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationToHclTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    invocation_condition: {
      value: kendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionToHclTerraform(struct!.invocationCondition),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition",
    },
    lambda_arn: {
      value: cdktn.stringToHclTerraform(struct!.lambdaArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_bucket: {
      value: cdktn.stringToHclTerraform(struct!.s3Bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invocationCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.invocationCondition = this._invocationCondition?.internalValue;
    }
    if (this._lambdaArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaArn = this._lambdaArn;
    }
    if (this._s3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invocationCondition.internalValue = undefined;
      this._lambdaArn = undefined;
      this._s3Bucket = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invocationCondition.internalValue = value.invocationCondition;
      this._lambdaArn = value.lambdaArn;
      this._s3Bucket = value.s3Bucket;
    }
  }

  // invocation_condition - computed: true, optional: true, required: false
  private _invocationCondition = new KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference(this, "invocation_condition");
  public get invocationCondition() {
    return this._invocationCondition;
  }
  public putInvocationCondition(value: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition) {
    this._invocationCondition.internalValue = value;
  }
  public resetInvocationCondition() {
    this._invocationCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationConditionInput() {
    return this._invocationCondition.internalValue;
  }

  // lambda_arn - computed: true, optional: true, required: false
  private _lambdaArn?: string;
  public get lambdaArn() {
    return this.getStringAttribute('lambda_arn');
  }
  public set lambdaArn(value: string) {
    this._lambdaArn = value;
  }
  public resetLambdaArn() {
    this._lambdaArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaArnInput() {
    return this._lambdaArn;
  }

  // s3_bucket - computed: true, optional: true, required: false
  private _s3Bucket?: string;
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  public resetS3Bucket() {
    this._s3Bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }
}
export interface KendraDataSourceCustomDocumentEnrichmentConfiguration {
  /**
  * List of InlineCustomDocumentEnrichmentConfigurations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#inline_configurations KendraDataSource#inline_configurations}
  */
  readonly inlineConfigurations?: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#post_extraction_hook_configuration KendraDataSource#post_extraction_hook_configuration}
  */
  readonly postExtractionHookConfiguration?: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#pre_extraction_hook_configuration KendraDataSource#pre_extraction_hook_configuration}
  */
  readonly preExtractionHookConfiguration?: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration;
  /**
  * Role ARN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#role_arn KendraDataSource#role_arn}
  */
  readonly roleArn?: string;
}

export function kendraDataSourceCustomDocumentEnrichmentConfigurationToTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    inline_configurations: cdktn.listMapper(kendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsToTerraform, false)(struct!.inlineConfigurations),
    post_extraction_hook_configuration: kendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationToTerraform(struct!.postExtractionHookConfiguration),
    pre_extraction_hook_configuration: kendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationToTerraform(struct!.preExtractionHookConfiguration),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function kendraDataSourceCustomDocumentEnrichmentConfigurationToHclTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    inline_configurations: {
      value: cdktn.listMapperHcl(kendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsToHclTerraform, false)(struct!.inlineConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList",
    },
    post_extraction_hook_configuration: {
      value: kendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationToHclTerraform(struct!.postExtractionHookConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration",
    },
    pre_extraction_hook_configuration: {
      value: kendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationToHclTerraform(struct!.preExtractionHookConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceCustomDocumentEnrichmentConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inlineConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlineConfigurations = this._inlineConfigurations?.internalValue;
    }
    if (this._postExtractionHookConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postExtractionHookConfiguration = this._postExtractionHookConfiguration?.internalValue;
    }
    if (this._preExtractionHookConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preExtractionHookConfiguration = this._preExtractionHookConfiguration?.internalValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceCustomDocumentEnrichmentConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inlineConfigurations.internalValue = undefined;
      this._postExtractionHookConfiguration.internalValue = undefined;
      this._preExtractionHookConfiguration.internalValue = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inlineConfigurations.internalValue = value.inlineConfigurations;
      this._postExtractionHookConfiguration.internalValue = value.postExtractionHookConfiguration;
      this._preExtractionHookConfiguration.internalValue = value.preExtractionHookConfiguration;
      this._roleArn = value.roleArn;
    }
  }

  // inline_configurations - computed: true, optional: true, required: false
  private _inlineConfigurations = new KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList(this, "inline_configurations", false);
  public get inlineConfigurations() {
    return this._inlineConfigurations;
  }
  public putInlineConfigurations(value: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations[] | cdktn.IResolvable) {
    this._inlineConfigurations.internalValue = value;
  }
  public resetInlineConfigurations() {
    this._inlineConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineConfigurationsInput() {
    return this._inlineConfigurations.internalValue;
  }

  // post_extraction_hook_configuration - computed: true, optional: true, required: false
  private _postExtractionHookConfiguration = new KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference(this, "post_extraction_hook_configuration");
  public get postExtractionHookConfiguration() {
    return this._postExtractionHookConfiguration;
  }
  public putPostExtractionHookConfiguration(value: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration) {
    this._postExtractionHookConfiguration.internalValue = value;
  }
  public resetPostExtractionHookConfiguration() {
    this._postExtractionHookConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postExtractionHookConfigurationInput() {
    return this._postExtractionHookConfiguration.internalValue;
  }

  // pre_extraction_hook_configuration - computed: true, optional: true, required: false
  private _preExtractionHookConfiguration = new KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference(this, "pre_extraction_hook_configuration");
  public get preExtractionHookConfiguration() {
    return this._preExtractionHookConfiguration;
  }
  public putPreExtractionHookConfiguration(value: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration) {
    this._preExtractionHookConfiguration.internalValue = value;
  }
  public resetPreExtractionHookConfiguration() {
    this._preExtractionHookConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preExtractionHookConfigurationInput() {
    return this._preExtractionHookConfiguration.internalValue;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface KendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#data_source_field_name KendraDataSource#data_source_field_name}
  */
  readonly dataSourceFieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#date_field_format KendraDataSource#date_field_format}
  */
  readonly dateFieldFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#index_field_name KendraDataSource#index_field_name}
  */
  readonly indexFieldName?: string;
}

export function kendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source_field_name: cdktn.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktn.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktn.stringToTerraform(struct!.indexFieldName),
  }
}


export function kendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappingsToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_source_field_name: {
      value: cdktn.stringToHclTerraform(struct!.dataSourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_field_format: {
      value: cdktn.stringToHclTerraform(struct!.dateFieldFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_field_name: {
      value: cdktn.stringToHclTerraform(struct!.indexFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceFieldName = this._dataSourceFieldName;
    }
    if (this._dateFieldFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateFieldFormat = this._dateFieldFormat;
    }
    if (this._indexFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexFieldName = this._indexFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSourceFieldName = undefined;
      this._dateFieldFormat = undefined;
      this._indexFieldName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSourceFieldName = value.dataSourceFieldName;
      this._dateFieldFormat = value.dateFieldFormat;
      this._indexFieldName = value.indexFieldName;
    }
  }

  // data_source_field_name - computed: true, optional: true, required: false
  private _dataSourceFieldName?: string;
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }
  public set dataSourceFieldName(value: string) {
    this._dataSourceFieldName = value;
  }
  public resetDataSourceFieldName() {
    this._dataSourceFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceFieldNameInput() {
    return this._dataSourceFieldName;
  }

  // date_field_format - computed: true, optional: true, required: false
  private _dateFieldFormat?: string;
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }
  public set dateFieldFormat(value: string) {
    this._dateFieldFormat = value;
  }
  public resetDateFieldFormat() {
    this._dateFieldFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateFieldFormatInput() {
    return this._dateFieldFormat;
  }

  // index_field_name - computed: true, optional: true, required: false
  private _indexFieldName?: string;
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
  public set indexFieldName(value: string) {
    this._indexFieldName = value;
  }
  public resetIndexFieldName() {
    this._indexFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexFieldNameInput() {
    return this._indexFieldName;
  }
}

export class KendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappingsList extends cdktn.ComplexList {
  public internalValue? : KendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappings[] | cdktn.IResolvable

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
  public get(index: number): KendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappingsOutputReference {
    return new KendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#attachment_field_mappings KendraDataSource#attachment_field_mappings}
  */
  readonly attachmentFieldMappings?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappings[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#crawl_attachments KendraDataSource#crawl_attachments}
  */
  readonly crawlAttachments?: boolean | cdktn.IResolvable;
}

export function kendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attachment_field_mappings: cdktn.listMapper(kendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappingsToTerraform, false)(struct!.attachmentFieldMappings),
    crawl_attachments: cdktn.booleanToTerraform(struct!.crawlAttachments),
  }
}


export function kendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attachment_field_mappings: {
      value: cdktn.listMapperHcl(kendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappingsToHclTerraform, false)(struct!.attachmentFieldMappings),
      isBlock: true,
      type: "list",
      storageClassType: "KendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappingsList",
    },
    crawl_attachments: {
      value: cdktn.booleanToHclTerraform(struct!.crawlAttachments),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attachmentFieldMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachmentFieldMappings = this._attachmentFieldMappings?.internalValue;
    }
    if (this._crawlAttachments !== undefined) {
      hasAnyValues = true;
      internalValueResult.crawlAttachments = this._crawlAttachments;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attachmentFieldMappings.internalValue = undefined;
      this._crawlAttachments = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attachmentFieldMappings.internalValue = value.attachmentFieldMappings;
      this._crawlAttachments = value.crawlAttachments;
    }
  }

  // attachment_field_mappings - computed: true, optional: true, required: false
  private _attachmentFieldMappings = new KendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappingsList(this, "attachment_field_mappings", false);
  public get attachmentFieldMappings() {
    return this._attachmentFieldMappings;
  }
  public putAttachmentFieldMappings(value: KendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappings[] | cdktn.IResolvable) {
    this._attachmentFieldMappings.internalValue = value;
  }
  public resetAttachmentFieldMappings() {
    this._attachmentFieldMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentFieldMappingsInput() {
    return this._attachmentFieldMappings.internalValue;
  }

  // crawl_attachments - computed: true, optional: true, required: false
  private _crawlAttachments?: boolean | cdktn.IResolvable;
  public get crawlAttachments() {
    return this.getBooleanAttribute('crawl_attachments');
  }
  public set crawlAttachments(value: boolean | cdktn.IResolvable) {
    this._crawlAttachments = value;
  }
  public resetCrawlAttachments() {
    this._crawlAttachments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlAttachmentsInput() {
    return this._crawlAttachments;
  }
}
export interface KendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#data_source_field_name KendraDataSource#data_source_field_name}
  */
  readonly dataSourceFieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#date_field_format KendraDataSource#date_field_format}
  */
  readonly dateFieldFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#index_field_name KendraDataSource#index_field_name}
  */
  readonly indexFieldName?: string;
}

export function kendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source_field_name: cdktn.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktn.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktn.stringToTerraform(struct!.indexFieldName),
  }
}


export function kendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappingsToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_source_field_name: {
      value: cdktn.stringToHclTerraform(struct!.dataSourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_field_format: {
      value: cdktn.stringToHclTerraform(struct!.dateFieldFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_field_name: {
      value: cdktn.stringToHclTerraform(struct!.indexFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceFieldName = this._dataSourceFieldName;
    }
    if (this._dateFieldFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateFieldFormat = this._dateFieldFormat;
    }
    if (this._indexFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexFieldName = this._indexFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSourceFieldName = undefined;
      this._dateFieldFormat = undefined;
      this._indexFieldName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSourceFieldName = value.dataSourceFieldName;
      this._dateFieldFormat = value.dateFieldFormat;
      this._indexFieldName = value.indexFieldName;
    }
  }

  // data_source_field_name - computed: true, optional: true, required: false
  private _dataSourceFieldName?: string;
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }
  public set dataSourceFieldName(value: string) {
    this._dataSourceFieldName = value;
  }
  public resetDataSourceFieldName() {
    this._dataSourceFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceFieldNameInput() {
    return this._dataSourceFieldName;
  }

  // date_field_format - computed: true, optional: true, required: false
  private _dateFieldFormat?: string;
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }
  public set dateFieldFormat(value: string) {
    this._dateFieldFormat = value;
  }
  public resetDateFieldFormat() {
    this._dateFieldFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateFieldFormatInput() {
    return this._dateFieldFormat;
  }

  // index_field_name - computed: true, optional: true, required: false
  private _indexFieldName?: string;
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
  public set indexFieldName(value: string) {
    this._indexFieldName = value;
  }
  public resetIndexFieldName() {
    this._indexFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexFieldNameInput() {
    return this._indexFieldName;
  }
}

export class KendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappingsList extends cdktn.ComplexList {
  public internalValue? : KendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappings[] | cdktn.IResolvable

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
  public get(index: number): KendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappingsOutputReference {
    return new KendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#blog_field_mappings KendraDataSource#blog_field_mappings}
  */
  readonly blogFieldMappings?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappings[] | cdktn.IResolvable;
}

export function kendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    blog_field_mappings: cdktn.listMapper(kendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappingsToTerraform, false)(struct!.blogFieldMappings),
  }
}


export function kendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    blog_field_mappings: {
      value: cdktn.listMapperHcl(kendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappingsToHclTerraform, false)(struct!.blogFieldMappings),
      isBlock: true,
      type: "list",
      storageClassType: "KendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blogFieldMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blogFieldMappings = this._blogFieldMappings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blogFieldMappings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blogFieldMappings.internalValue = value.blogFieldMappings;
    }
  }

  // blog_field_mappings - computed: true, optional: true, required: false
  private _blogFieldMappings = new KendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappingsList(this, "blog_field_mappings", false);
  public get blogFieldMappings() {
    return this._blogFieldMappings;
  }
  public putBlogFieldMappings(value: KendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappings[] | cdktn.IResolvable) {
    this._blogFieldMappings.internalValue = value;
  }
  public resetBlogFieldMappings() {
    this._blogFieldMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blogFieldMappingsInput() {
    return this._blogFieldMappings.internalValue;
  }
}
export interface KendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#data_source_field_name KendraDataSource#data_source_field_name}
  */
  readonly dataSourceFieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#date_field_format KendraDataSource#date_field_format}
  */
  readonly dateFieldFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#index_field_name KendraDataSource#index_field_name}
  */
  readonly indexFieldName?: string;
}

export function kendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source_field_name: cdktn.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktn.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktn.stringToTerraform(struct!.indexFieldName),
  }
}


export function kendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappingsToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_source_field_name: {
      value: cdktn.stringToHclTerraform(struct!.dataSourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_field_format: {
      value: cdktn.stringToHclTerraform(struct!.dateFieldFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_field_name: {
      value: cdktn.stringToHclTerraform(struct!.indexFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceFieldName = this._dataSourceFieldName;
    }
    if (this._dateFieldFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateFieldFormat = this._dateFieldFormat;
    }
    if (this._indexFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexFieldName = this._indexFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSourceFieldName = undefined;
      this._dateFieldFormat = undefined;
      this._indexFieldName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSourceFieldName = value.dataSourceFieldName;
      this._dateFieldFormat = value.dateFieldFormat;
      this._indexFieldName = value.indexFieldName;
    }
  }

  // data_source_field_name - computed: true, optional: true, required: false
  private _dataSourceFieldName?: string;
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }
  public set dataSourceFieldName(value: string) {
    this._dataSourceFieldName = value;
  }
  public resetDataSourceFieldName() {
    this._dataSourceFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceFieldNameInput() {
    return this._dataSourceFieldName;
  }

  // date_field_format - computed: true, optional: true, required: false
  private _dateFieldFormat?: string;
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }
  public set dateFieldFormat(value: string) {
    this._dateFieldFormat = value;
  }
  public resetDateFieldFormat() {
    this._dateFieldFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateFieldFormatInput() {
    return this._dateFieldFormat;
  }

  // index_field_name - computed: true, optional: true, required: false
  private _indexFieldName?: string;
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
  public set indexFieldName(value: string) {
    this._indexFieldName = value;
  }
  public resetIndexFieldName() {
    this._indexFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexFieldNameInput() {
    return this._indexFieldName;
  }
}

export class KendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappingsList extends cdktn.ComplexList {
  public internalValue? : KendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappings[] | cdktn.IResolvable

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
  public get(index: number): KendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappingsOutputReference {
    return new KendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#page_field_mappings KendraDataSource#page_field_mappings}
  */
  readonly pageFieldMappings?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappings[] | cdktn.IResolvable;
}

export function kendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    page_field_mappings: cdktn.listMapper(kendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappingsToTerraform, false)(struct!.pageFieldMappings),
  }
}


export function kendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    page_field_mappings: {
      value: cdktn.listMapperHcl(kendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappingsToHclTerraform, false)(struct!.pageFieldMappings),
      isBlock: true,
      type: "list",
      storageClassType: "KendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pageFieldMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageFieldMappings = this._pageFieldMappings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pageFieldMappings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pageFieldMappings.internalValue = value.pageFieldMappings;
    }
  }

  // page_field_mappings - computed: true, optional: true, required: false
  private _pageFieldMappings = new KendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappingsList(this, "page_field_mappings", false);
  public get pageFieldMappings() {
    return this._pageFieldMappings;
  }
  public putPageFieldMappings(value: KendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappings[] | cdktn.IResolvable) {
    this._pageFieldMappings.internalValue = value;
  }
  public resetPageFieldMappings() {
    this._pageFieldMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageFieldMappingsInput() {
    return this._pageFieldMappings.internalValue;
  }
}
export interface KendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#data_source_field_name KendraDataSource#data_source_field_name}
  */
  readonly dataSourceFieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#date_field_format KendraDataSource#date_field_format}
  */
  readonly dateFieldFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#index_field_name KendraDataSource#index_field_name}
  */
  readonly indexFieldName?: string;
}

export function kendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source_field_name: cdktn.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktn.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktn.stringToTerraform(struct!.indexFieldName),
  }
}


export function kendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappingsToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_source_field_name: {
      value: cdktn.stringToHclTerraform(struct!.dataSourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_field_format: {
      value: cdktn.stringToHclTerraform(struct!.dateFieldFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_field_name: {
      value: cdktn.stringToHclTerraform(struct!.indexFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceFieldName = this._dataSourceFieldName;
    }
    if (this._dateFieldFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateFieldFormat = this._dateFieldFormat;
    }
    if (this._indexFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexFieldName = this._indexFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSourceFieldName = undefined;
      this._dateFieldFormat = undefined;
      this._indexFieldName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSourceFieldName = value.dataSourceFieldName;
      this._dateFieldFormat = value.dateFieldFormat;
      this._indexFieldName = value.indexFieldName;
    }
  }

  // data_source_field_name - computed: true, optional: true, required: false
  private _dataSourceFieldName?: string;
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }
  public set dataSourceFieldName(value: string) {
    this._dataSourceFieldName = value;
  }
  public resetDataSourceFieldName() {
    this._dataSourceFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceFieldNameInput() {
    return this._dataSourceFieldName;
  }

  // date_field_format - computed: true, optional: true, required: false
  private _dateFieldFormat?: string;
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }
  public set dateFieldFormat(value: string) {
    this._dateFieldFormat = value;
  }
  public resetDateFieldFormat() {
    this._dateFieldFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateFieldFormatInput() {
    return this._dateFieldFormat;
  }

  // index_field_name - computed: true, optional: true, required: false
  private _indexFieldName?: string;
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
  public set indexFieldName(value: string) {
    this._indexFieldName = value;
  }
  public resetIndexFieldName() {
    this._indexFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexFieldNameInput() {
    return this._indexFieldName;
  }
}

export class KendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappingsList extends cdktn.ComplexList {
  public internalValue? : KendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappings[] | cdktn.IResolvable

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
  public get(index: number): KendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappingsOutputReference {
    return new KendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#crawl_archived_spaces KendraDataSource#crawl_archived_spaces}
  */
  readonly crawlArchivedSpaces?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#crawl_personal_spaces KendraDataSource#crawl_personal_spaces}
  */
  readonly crawlPersonalSpaces?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#exclude_spaces KendraDataSource#exclude_spaces}
  */
  readonly excludeSpaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#include_spaces KendraDataSource#include_spaces}
  */
  readonly includeSpaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#space_field_mappings KendraDataSource#space_field_mappings}
  */
  readonly spaceFieldMappings?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappings[] | cdktn.IResolvable;
}

export function kendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    crawl_archived_spaces: cdktn.booleanToTerraform(struct!.crawlArchivedSpaces),
    crawl_personal_spaces: cdktn.booleanToTerraform(struct!.crawlPersonalSpaces),
    exclude_spaces: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludeSpaces),
    include_spaces: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includeSpaces),
    space_field_mappings: cdktn.listMapper(kendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappingsToTerraform, false)(struct!.spaceFieldMappings),
  }
}


export function kendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    crawl_archived_spaces: {
      value: cdktn.booleanToHclTerraform(struct!.crawlArchivedSpaces),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    crawl_personal_spaces: {
      value: cdktn.booleanToHclTerraform(struct!.crawlPersonalSpaces),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude_spaces: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludeSpaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_spaces: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includeSpaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    space_field_mappings: {
      value: cdktn.listMapperHcl(kendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappingsToHclTerraform, false)(struct!.spaceFieldMappings),
      isBlock: true,
      type: "list",
      storageClassType: "KendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crawlArchivedSpaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.crawlArchivedSpaces = this._crawlArchivedSpaces;
    }
    if (this._crawlPersonalSpaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.crawlPersonalSpaces = this._crawlPersonalSpaces;
    }
    if (this._excludeSpaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeSpaces = this._excludeSpaces;
    }
    if (this._includeSpaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSpaces = this._includeSpaces;
    }
    if (this._spaceFieldMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spaceFieldMappings = this._spaceFieldMappings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crawlArchivedSpaces = undefined;
      this._crawlPersonalSpaces = undefined;
      this._excludeSpaces = undefined;
      this._includeSpaces = undefined;
      this._spaceFieldMappings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crawlArchivedSpaces = value.crawlArchivedSpaces;
      this._crawlPersonalSpaces = value.crawlPersonalSpaces;
      this._excludeSpaces = value.excludeSpaces;
      this._includeSpaces = value.includeSpaces;
      this._spaceFieldMappings.internalValue = value.spaceFieldMappings;
    }
  }

  // crawl_archived_spaces - computed: true, optional: true, required: false
  private _crawlArchivedSpaces?: boolean | cdktn.IResolvable;
  public get crawlArchivedSpaces() {
    return this.getBooleanAttribute('crawl_archived_spaces');
  }
  public set crawlArchivedSpaces(value: boolean | cdktn.IResolvable) {
    this._crawlArchivedSpaces = value;
  }
  public resetCrawlArchivedSpaces() {
    this._crawlArchivedSpaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlArchivedSpacesInput() {
    return this._crawlArchivedSpaces;
  }

  // crawl_personal_spaces - computed: true, optional: true, required: false
  private _crawlPersonalSpaces?: boolean | cdktn.IResolvable;
  public get crawlPersonalSpaces() {
    return this.getBooleanAttribute('crawl_personal_spaces');
  }
  public set crawlPersonalSpaces(value: boolean | cdktn.IResolvable) {
    this._crawlPersonalSpaces = value;
  }
  public resetCrawlPersonalSpaces() {
    this._crawlPersonalSpaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlPersonalSpacesInput() {
    return this._crawlPersonalSpaces;
  }

  // exclude_spaces - computed: true, optional: true, required: false
  private _excludeSpaces?: string[];
  public get excludeSpaces() {
    return this.getListAttribute('exclude_spaces');
  }
  public set excludeSpaces(value: string[]) {
    this._excludeSpaces = value;
  }
  public resetExcludeSpaces() {
    this._excludeSpaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeSpacesInput() {
    return this._excludeSpaces;
  }

  // include_spaces - computed: true, optional: true, required: false
  private _includeSpaces?: string[];
  public get includeSpaces() {
    return this.getListAttribute('include_spaces');
  }
  public set includeSpaces(value: string[]) {
    this._includeSpaces = value;
  }
  public resetIncludeSpaces() {
    this._includeSpaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSpacesInput() {
    return this._includeSpaces;
  }

  // space_field_mappings - computed: true, optional: true, required: false
  private _spaceFieldMappings = new KendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappingsList(this, "space_field_mappings", false);
  public get spaceFieldMappings() {
    return this._spaceFieldMappings;
  }
  public putSpaceFieldMappings(value: KendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappings[] | cdktn.IResolvable) {
    this._spaceFieldMappings.internalValue = value;
  }
  public resetSpaceFieldMappings() {
    this._spaceFieldMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceFieldMappingsInput() {
    return this._spaceFieldMappings.internalValue;
  }
}
export interface KendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#security_group_ids KendraDataSource#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#subnet_ids KendraDataSource#subnet_ids}
  */
  readonly subnetIds?: string[];
}

export function kendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function kendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfigurationToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
    }
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[];
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[];
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }
}
export interface KendraDataSourceDataSourceConfigurationConfluenceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#attachment_configuration KendraDataSource#attachment_configuration}
  */
  readonly attachmentConfiguration?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#blog_configuration KendraDataSource#blog_configuration}
  */
  readonly blogConfiguration?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#exclusion_patterns KendraDataSource#exclusion_patterns}
  */
  readonly exclusionPatterns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#inclusion_patterns KendraDataSource#inclusion_patterns}
  */
  readonly inclusionPatterns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#page_configuration KendraDataSource#page_configuration}
  */
  readonly pageConfiguration?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#secret_arn KendraDataSource#secret_arn}
  */
  readonly secretArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#server_url KendraDataSource#server_url}
  */
  readonly serverUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#space_configuration KendraDataSource#space_configuration}
  */
  readonly spaceConfiguration?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#version KendraDataSource#version}
  */
  readonly version?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#vpc_configuration KendraDataSource#vpc_configuration}
  */
  readonly vpcConfiguration?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfiguration;
}

export function kendraDataSourceDataSourceConfigurationConfluenceConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationConfluenceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attachment_configuration: kendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationToTerraform(struct!.attachmentConfiguration),
    blog_configuration: kendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationToTerraform(struct!.blogConfiguration),
    exclusion_patterns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclusionPatterns),
    inclusion_patterns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.inclusionPatterns),
    page_configuration: kendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationToTerraform(struct!.pageConfiguration),
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    server_url: cdktn.stringToTerraform(struct!.serverUrl),
    space_configuration: kendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationToTerraform(struct!.spaceConfiguration),
    version: cdktn.stringToTerraform(struct!.version),
    vpc_configuration: kendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfigurationToTerraform(struct!.vpcConfiguration),
  }
}


export function kendraDataSourceDataSourceConfigurationConfluenceConfigurationToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationConfluenceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attachment_configuration: {
      value: kendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationToHclTerraform(struct!.attachmentConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfiguration",
    },
    blog_configuration: {
      value: kendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationToHclTerraform(struct!.blogConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfiguration",
    },
    exclusion_patterns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exclusionPatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    inclusion_patterns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.inclusionPatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    page_configuration: {
      value: kendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationToHclTerraform(struct!.pageConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfiguration",
    },
    secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_url: {
      value: cdktn.stringToHclTerraform(struct!.serverUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    space_configuration: {
      value: kendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationToHclTerraform(struct!.spaceConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfiguration",
    },
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_configuration: {
      value: kendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfigurationToHclTerraform(struct!.vpcConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationConfluenceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceDataSourceConfigurationConfluenceConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attachmentConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachmentConfiguration = this._attachmentConfiguration?.internalValue;
    }
    if (this._blogConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blogConfiguration = this._blogConfiguration?.internalValue;
    }
    if (this._exclusionPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionPatterns = this._exclusionPatterns;
    }
    if (this._inclusionPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusionPatterns = this._inclusionPatterns;
    }
    if (this._pageConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageConfiguration = this._pageConfiguration?.internalValue;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    if (this._serverUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverUrl = this._serverUrl;
    }
    if (this._spaceConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spaceConfiguration = this._spaceConfiguration?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._vpcConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConfiguration = this._vpcConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationConfluenceConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attachmentConfiguration.internalValue = undefined;
      this._blogConfiguration.internalValue = undefined;
      this._exclusionPatterns = undefined;
      this._inclusionPatterns = undefined;
      this._pageConfiguration.internalValue = undefined;
      this._secretArn = undefined;
      this._serverUrl = undefined;
      this._spaceConfiguration.internalValue = undefined;
      this._version = undefined;
      this._vpcConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attachmentConfiguration.internalValue = value.attachmentConfiguration;
      this._blogConfiguration.internalValue = value.blogConfiguration;
      this._exclusionPatterns = value.exclusionPatterns;
      this._inclusionPatterns = value.inclusionPatterns;
      this._pageConfiguration.internalValue = value.pageConfiguration;
      this._secretArn = value.secretArn;
      this._serverUrl = value.serverUrl;
      this._spaceConfiguration.internalValue = value.spaceConfiguration;
      this._version = value.version;
      this._vpcConfiguration.internalValue = value.vpcConfiguration;
    }
  }

  // attachment_configuration - computed: true, optional: true, required: false
  private _attachmentConfiguration = new KendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationOutputReference(this, "attachment_configuration");
  public get attachmentConfiguration() {
    return this._attachmentConfiguration;
  }
  public putAttachmentConfiguration(value: KendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfiguration) {
    this._attachmentConfiguration.internalValue = value;
  }
  public resetAttachmentConfiguration() {
    this._attachmentConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentConfigurationInput() {
    return this._attachmentConfiguration.internalValue;
  }

  // blog_configuration - computed: true, optional: true, required: false
  private _blogConfiguration = new KendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationOutputReference(this, "blog_configuration");
  public get blogConfiguration() {
    return this._blogConfiguration;
  }
  public putBlogConfiguration(value: KendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfiguration) {
    this._blogConfiguration.internalValue = value;
  }
  public resetBlogConfiguration() {
    this._blogConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blogConfigurationInput() {
    return this._blogConfiguration.internalValue;
  }

  // exclusion_patterns - computed: true, optional: true, required: false
  private _exclusionPatterns?: string[];
  public get exclusionPatterns() {
    return this.getListAttribute('exclusion_patterns');
  }
  public set exclusionPatterns(value: string[]) {
    this._exclusionPatterns = value;
  }
  public resetExclusionPatterns() {
    this._exclusionPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionPatternsInput() {
    return this._exclusionPatterns;
  }

  // inclusion_patterns - computed: true, optional: true, required: false
  private _inclusionPatterns?: string[];
  public get inclusionPatterns() {
    return this.getListAttribute('inclusion_patterns');
  }
  public set inclusionPatterns(value: string[]) {
    this._inclusionPatterns = value;
  }
  public resetInclusionPatterns() {
    this._inclusionPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionPatternsInput() {
    return this._inclusionPatterns;
  }

  // page_configuration - computed: true, optional: true, required: false
  private _pageConfiguration = new KendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationOutputReference(this, "page_configuration");
  public get pageConfiguration() {
    return this._pageConfiguration;
  }
  public putPageConfiguration(value: KendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfiguration) {
    this._pageConfiguration.internalValue = value;
  }
  public resetPageConfiguration() {
    this._pageConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageConfigurationInput() {
    return this._pageConfiguration.internalValue;
  }

  // secret_arn - computed: true, optional: true, required: false
  private _secretArn?: string;
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }

  // server_url - computed: true, optional: true, required: false
  private _serverUrl?: string;
  public get serverUrl() {
    return this.getStringAttribute('server_url');
  }
  public set serverUrl(value: string) {
    this._serverUrl = value;
  }
  public resetServerUrl() {
    this._serverUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverUrlInput() {
    return this._serverUrl;
  }

  // space_configuration - computed: true, optional: true, required: false
  private _spaceConfiguration = new KendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationOutputReference(this, "space_configuration");
  public get spaceConfiguration() {
    return this._spaceConfiguration;
  }
  public putSpaceConfiguration(value: KendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfiguration) {
    this._spaceConfiguration.internalValue = value;
  }
  public resetSpaceConfiguration() {
    this._spaceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceConfigurationInput() {
    return this._spaceConfiguration.internalValue;
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

  // vpc_configuration - computed: true, optional: true, required: false
  private _vpcConfiguration = new KendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfigurationOutputReference(this, "vpc_configuration");
  public get vpcConfiguration() {
    return this._vpcConfiguration;
  }
  public putVpcConfiguration(value: KendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfiguration) {
    this._vpcConfiguration.internalValue = value;
  }
  public resetVpcConfiguration() {
    this._vpcConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigurationInput() {
    return this._vpcConfiguration.internalValue;
  }
}
export interface KendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#allowed_groups_column_name KendraDataSource#allowed_groups_column_name}
  */
  readonly allowedGroupsColumnName?: string;
}

export function kendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_groups_column_name: cdktn.stringToTerraform(struct!.allowedGroupsColumnName),
  }
}


export function kendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfigurationToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_groups_column_name: {
      value: cdktn.stringToHclTerraform(struct!.allowedGroupsColumnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedGroupsColumnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedGroupsColumnName = this._allowedGroupsColumnName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedGroupsColumnName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedGroupsColumnName = value.allowedGroupsColumnName;
    }
  }

  // allowed_groups_column_name - computed: true, optional: true, required: false
  private _allowedGroupsColumnName?: string;
  public get allowedGroupsColumnName() {
    return this.getStringAttribute('allowed_groups_column_name');
  }
  public set allowedGroupsColumnName(value: string) {
    this._allowedGroupsColumnName = value;
  }
  public resetAllowedGroupsColumnName() {
    this._allowedGroupsColumnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedGroupsColumnNameInput() {
    return this._allowedGroupsColumnName;
  }
}
export interface KendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#data_source_field_name KendraDataSource#data_source_field_name}
  */
  readonly dataSourceFieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#date_field_format KendraDataSource#date_field_format}
  */
  readonly dateFieldFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#index_field_name KendraDataSource#index_field_name}
  */
  readonly indexFieldName?: string;
}

export function kendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source_field_name: cdktn.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktn.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktn.stringToTerraform(struct!.indexFieldName),
  }
}


export function kendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappingsToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_source_field_name: {
      value: cdktn.stringToHclTerraform(struct!.dataSourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_field_format: {
      value: cdktn.stringToHclTerraform(struct!.dateFieldFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_field_name: {
      value: cdktn.stringToHclTerraform(struct!.indexFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceFieldName = this._dataSourceFieldName;
    }
    if (this._dateFieldFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateFieldFormat = this._dateFieldFormat;
    }
    if (this._indexFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexFieldName = this._indexFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSourceFieldName = undefined;
      this._dateFieldFormat = undefined;
      this._indexFieldName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSourceFieldName = value.dataSourceFieldName;
      this._dateFieldFormat = value.dateFieldFormat;
      this._indexFieldName = value.indexFieldName;
    }
  }

  // data_source_field_name - computed: true, optional: true, required: false
  private _dataSourceFieldName?: string;
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }
  public set dataSourceFieldName(value: string) {
    this._dataSourceFieldName = value;
  }
  public resetDataSourceFieldName() {
    this._dataSourceFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceFieldNameInput() {
    return this._dataSourceFieldName;
  }

  // date_field_format - computed: true, optional: true, required: false
  private _dateFieldFormat?: string;
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }
  public set dateFieldFormat(value: string) {
    this._dateFieldFormat = value;
  }
  public resetDateFieldFormat() {
    this._dateFieldFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateFieldFormatInput() {
    return this._dateFieldFormat;
  }

  // index_field_name - computed: true, optional: true, required: false
  private _indexFieldName?: string;
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
  public set indexFieldName(value: string) {
    this._indexFieldName = value;
  }
  public resetIndexFieldName() {
    this._indexFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexFieldNameInput() {
    return this._indexFieldName;
  }
}

export class KendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappingsList extends cdktn.ComplexList {
  public internalValue? : KendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappings[] | cdktn.IResolvable

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
  public get(index: number): KendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappingsOutputReference {
    return new KendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#change_detecting_columns KendraDataSource#change_detecting_columns}
  */
  readonly changeDetectingColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#document_data_column_name KendraDataSource#document_data_column_name}
  */
  readonly documentDataColumnName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#document_id_column_name KendraDataSource#document_id_column_name}
  */
  readonly documentIdColumnName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#document_title_column_name KendraDataSource#document_title_column_name}
  */
  readonly documentTitleColumnName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#field_mappings KendraDataSource#field_mappings}
  */
  readonly fieldMappings?: KendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappings[] | cdktn.IResolvable;
}

export function kendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    change_detecting_columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.changeDetectingColumns),
    document_data_column_name: cdktn.stringToTerraform(struct!.documentDataColumnName),
    document_id_column_name: cdktn.stringToTerraform(struct!.documentIdColumnName),
    document_title_column_name: cdktn.stringToTerraform(struct!.documentTitleColumnName),
    field_mappings: cdktn.listMapper(kendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappingsToTerraform, false)(struct!.fieldMappings),
  }
}


export function kendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    change_detecting_columns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.changeDetectingColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    document_data_column_name: {
      value: cdktn.stringToHclTerraform(struct!.documentDataColumnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    document_id_column_name: {
      value: cdktn.stringToHclTerraform(struct!.documentIdColumnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    document_title_column_name: {
      value: cdktn.stringToHclTerraform(struct!.documentTitleColumnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_mappings: {
      value: cdktn.listMapperHcl(kendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappingsToHclTerraform, false)(struct!.fieldMappings),
      isBlock: true,
      type: "list",
      storageClassType: "KendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._changeDetectingColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.changeDetectingColumns = this._changeDetectingColumns;
    }
    if (this._documentDataColumnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentDataColumnName = this._documentDataColumnName;
    }
    if (this._documentIdColumnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentIdColumnName = this._documentIdColumnName;
    }
    if (this._documentTitleColumnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentTitleColumnName = this._documentTitleColumnName;
    }
    if (this._fieldMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldMappings = this._fieldMappings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._changeDetectingColumns = undefined;
      this._documentDataColumnName = undefined;
      this._documentIdColumnName = undefined;
      this._documentTitleColumnName = undefined;
      this._fieldMappings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._changeDetectingColumns = value.changeDetectingColumns;
      this._documentDataColumnName = value.documentDataColumnName;
      this._documentIdColumnName = value.documentIdColumnName;
      this._documentTitleColumnName = value.documentTitleColumnName;
      this._fieldMappings.internalValue = value.fieldMappings;
    }
  }

  // change_detecting_columns - computed: true, optional: true, required: false
  private _changeDetectingColumns?: string[];
  public get changeDetectingColumns() {
    return this.getListAttribute('change_detecting_columns');
  }
  public set changeDetectingColumns(value: string[]) {
    this._changeDetectingColumns = value;
  }
  public resetChangeDetectingColumns() {
    this._changeDetectingColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeDetectingColumnsInput() {
    return this._changeDetectingColumns;
  }

  // document_data_column_name - computed: true, optional: true, required: false
  private _documentDataColumnName?: string;
  public get documentDataColumnName() {
    return this.getStringAttribute('document_data_column_name');
  }
  public set documentDataColumnName(value: string) {
    this._documentDataColumnName = value;
  }
  public resetDocumentDataColumnName() {
    this._documentDataColumnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentDataColumnNameInput() {
    return this._documentDataColumnName;
  }

  // document_id_column_name - computed: true, optional: true, required: false
  private _documentIdColumnName?: string;
  public get documentIdColumnName() {
    return this.getStringAttribute('document_id_column_name');
  }
  public set documentIdColumnName(value: string) {
    this._documentIdColumnName = value;
  }
  public resetDocumentIdColumnName() {
    this._documentIdColumnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentIdColumnNameInput() {
    return this._documentIdColumnName;
  }

  // document_title_column_name - computed: true, optional: true, required: false
  private _documentTitleColumnName?: string;
  public get documentTitleColumnName() {
    return this.getStringAttribute('document_title_column_name');
  }
  public set documentTitleColumnName(value: string) {
    this._documentTitleColumnName = value;
  }
  public resetDocumentTitleColumnName() {
    this._documentTitleColumnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentTitleColumnNameInput() {
    return this._documentTitleColumnName;
  }

  // field_mappings - computed: true, optional: true, required: false
  private _fieldMappings = new KendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappingsList(this, "field_mappings", false);
  public get fieldMappings() {
    return this._fieldMappings;
  }
  public putFieldMappings(value: KendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappings[] | cdktn.IResolvable) {
    this._fieldMappings.internalValue = value;
  }
  public resetFieldMappings() {
    this._fieldMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldMappingsInput() {
    return this._fieldMappings.internalValue;
  }
}
export interface KendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#database_host KendraDataSource#database_host}
  */
  readonly databaseHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#database_name KendraDataSource#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#database_port KendraDataSource#database_port}
  */
  readonly databasePort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#secret_arn KendraDataSource#secret_arn}
  */
  readonly secretArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#table_name KendraDataSource#table_name}
  */
  readonly tableName?: string;
}

export function kendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database_host: cdktn.stringToTerraform(struct!.databaseHost),
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    database_port: cdktn.numberToTerraform(struct!.databasePort),
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    table_name: cdktn.stringToTerraform(struct!.tableName),
  }
}


export function kendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfigurationToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database_host: {
      value: cdktn.stringToHclTerraform(struct!.databaseHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_name: {
      value: cdktn.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_port: {
      value: cdktn.numberToHclTerraform(struct!.databasePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktn.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseHost = this._databaseHost;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._databasePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.databasePort = this._databasePort;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseHost = undefined;
      this._databaseName = undefined;
      this._databasePort = undefined;
      this._secretArn = undefined;
      this._tableName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseHost = value.databaseHost;
      this._databaseName = value.databaseName;
      this._databasePort = value.databasePort;
      this._secretArn = value.secretArn;
      this._tableName = value.tableName;
    }
  }

  // database_host - computed: true, optional: true, required: false
  private _databaseHost?: string;
  public get databaseHost() {
    return this.getStringAttribute('database_host');
  }
  public set databaseHost(value: string) {
    this._databaseHost = value;
  }
  public resetDatabaseHost() {
    this._databaseHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseHostInput() {
    return this._databaseHost;
  }

  // database_name - computed: true, optional: true, required: false
  private _databaseName?: string;
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // database_port - computed: true, optional: true, required: false
  private _databasePort?: number;
  public get databasePort() {
    return this.getNumberAttribute('database_port');
  }
  public set databasePort(value: number) {
    this._databasePort = value;
  }
  public resetDatabasePort() {
    this._databasePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databasePortInput() {
    return this._databasePort;
  }

  // secret_arn - computed: true, optional: true, required: false
  private _secretArn?: string;
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }

  // table_name - computed: true, optional: true, required: false
  private _tableName?: string;
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  public resetTableName() {
    this._tableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }
}
export interface KendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#query_identifiers_enclosing_option KendraDataSource#query_identifiers_enclosing_option}
  */
  readonly queryIdentifiersEnclosingOption?: string;
}

export function kendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query_identifiers_enclosing_option: cdktn.stringToTerraform(struct!.queryIdentifiersEnclosingOption),
  }
}


export function kendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfigurationToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    query_identifiers_enclosing_option: {
      value: cdktn.stringToHclTerraform(struct!.queryIdentifiersEnclosingOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryIdentifiersEnclosingOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryIdentifiersEnclosingOption = this._queryIdentifiersEnclosingOption;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._queryIdentifiersEnclosingOption = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._queryIdentifiersEnclosingOption = value.queryIdentifiersEnclosingOption;
    }
  }

  // query_identifiers_enclosing_option - computed: true, optional: true, required: false
  private _queryIdentifiersEnclosingOption?: string;
  public get queryIdentifiersEnclosingOption() {
    return this.getStringAttribute('query_identifiers_enclosing_option');
  }
  public set queryIdentifiersEnclosingOption(value: string) {
    this._queryIdentifiersEnclosingOption = value;
  }
  public resetQueryIdentifiersEnclosingOption() {
    this._queryIdentifiersEnclosingOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryIdentifiersEnclosingOptionInput() {
    return this._queryIdentifiersEnclosingOption;
  }
}
export interface KendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#security_group_ids KendraDataSource#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#subnet_ids KendraDataSource#subnet_ids}
  */
  readonly subnetIds?: string[];
}

export function kendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function kendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfigurationToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
    }
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[];
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[];
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }
}
export interface KendraDataSourceDataSourceConfigurationDatabaseConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#acl_configuration KendraDataSource#acl_configuration}
  */
  readonly aclConfiguration?: KendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#column_configuration KendraDataSource#column_configuration}
  */
  readonly columnConfiguration?: KendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#connection_configuration KendraDataSource#connection_configuration}
  */
  readonly connectionConfiguration?: KendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#database_engine_type KendraDataSource#database_engine_type}
  */
  readonly databaseEngineType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#sql_configuration KendraDataSource#sql_configuration}
  */
  readonly sqlConfiguration?: KendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#vpc_configuration KendraDataSource#vpc_configuration}
  */
  readonly vpcConfiguration?: KendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfiguration;
}

export function kendraDataSourceDataSourceConfigurationDatabaseConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationDatabaseConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    acl_configuration: kendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfigurationToTerraform(struct!.aclConfiguration),
    column_configuration: kendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationToTerraform(struct!.columnConfiguration),
    connection_configuration: kendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfigurationToTerraform(struct!.connectionConfiguration),
    database_engine_type: cdktn.stringToTerraform(struct!.databaseEngineType),
    sql_configuration: kendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfigurationToTerraform(struct!.sqlConfiguration),
    vpc_configuration: kendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfigurationToTerraform(struct!.vpcConfiguration),
  }
}


export function kendraDataSourceDataSourceConfigurationDatabaseConfigurationToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationDatabaseConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    acl_configuration: {
      value: kendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfigurationToHclTerraform(struct!.aclConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfiguration",
    },
    column_configuration: {
      value: kendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationToHclTerraform(struct!.columnConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfiguration",
    },
    connection_configuration: {
      value: kendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfigurationToHclTerraform(struct!.connectionConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfiguration",
    },
    database_engine_type: {
      value: cdktn.stringToHclTerraform(struct!.databaseEngineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql_configuration: {
      value: kendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfigurationToHclTerraform(struct!.sqlConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfiguration",
    },
    vpc_configuration: {
      value: kendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfigurationToHclTerraform(struct!.vpcConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationDatabaseConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceDataSourceConfigurationDatabaseConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aclConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclConfiguration = this._aclConfiguration?.internalValue;
    }
    if (this._columnConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnConfiguration = this._columnConfiguration?.internalValue;
    }
    if (this._connectionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionConfiguration = this._connectionConfiguration?.internalValue;
    }
    if (this._databaseEngineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseEngineType = this._databaseEngineType;
    }
    if (this._sqlConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlConfiguration = this._sqlConfiguration?.internalValue;
    }
    if (this._vpcConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConfiguration = this._vpcConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationDatabaseConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aclConfiguration.internalValue = undefined;
      this._columnConfiguration.internalValue = undefined;
      this._connectionConfiguration.internalValue = undefined;
      this._databaseEngineType = undefined;
      this._sqlConfiguration.internalValue = undefined;
      this._vpcConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aclConfiguration.internalValue = value.aclConfiguration;
      this._columnConfiguration.internalValue = value.columnConfiguration;
      this._connectionConfiguration.internalValue = value.connectionConfiguration;
      this._databaseEngineType = value.databaseEngineType;
      this._sqlConfiguration.internalValue = value.sqlConfiguration;
      this._vpcConfiguration.internalValue = value.vpcConfiguration;
    }
  }

  // acl_configuration - computed: true, optional: true, required: false
  private _aclConfiguration = new KendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfigurationOutputReference(this, "acl_configuration");
  public get aclConfiguration() {
    return this._aclConfiguration;
  }
  public putAclConfiguration(value: KendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfiguration) {
    this._aclConfiguration.internalValue = value;
  }
  public resetAclConfiguration() {
    this._aclConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclConfigurationInput() {
    return this._aclConfiguration.internalValue;
  }

  // column_configuration - computed: true, optional: true, required: false
  private _columnConfiguration = new KendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationOutputReference(this, "column_configuration");
  public get columnConfiguration() {
    return this._columnConfiguration;
  }
  public putColumnConfiguration(value: KendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfiguration) {
    this._columnConfiguration.internalValue = value;
  }
  public resetColumnConfiguration() {
    this._columnConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnConfigurationInput() {
    return this._columnConfiguration.internalValue;
  }

  // connection_configuration - computed: true, optional: true, required: false
  private _connectionConfiguration = new KendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfigurationOutputReference(this, "connection_configuration");
  public get connectionConfiguration() {
    return this._connectionConfiguration;
  }
  public putConnectionConfiguration(value: KendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfiguration) {
    this._connectionConfiguration.internalValue = value;
  }
  public resetConnectionConfiguration() {
    this._connectionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionConfigurationInput() {
    return this._connectionConfiguration.internalValue;
  }

  // database_engine_type - computed: true, optional: true, required: false
  private _databaseEngineType?: string;
  public get databaseEngineType() {
    return this.getStringAttribute('database_engine_type');
  }
  public set databaseEngineType(value: string) {
    this._databaseEngineType = value;
  }
  public resetDatabaseEngineType() {
    this._databaseEngineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseEngineTypeInput() {
    return this._databaseEngineType;
  }

  // sql_configuration - computed: true, optional: true, required: false
  private _sqlConfiguration = new KendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfigurationOutputReference(this, "sql_configuration");
  public get sqlConfiguration() {
    return this._sqlConfiguration;
  }
  public putSqlConfiguration(value: KendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfiguration) {
    this._sqlConfiguration.internalValue = value;
  }
  public resetSqlConfiguration() {
    this._sqlConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlConfigurationInput() {
    return this._sqlConfiguration.internalValue;
  }

  // vpc_configuration - computed: true, optional: true, required: false
  private _vpcConfiguration = new KendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfigurationOutputReference(this, "vpc_configuration");
  public get vpcConfiguration() {
    return this._vpcConfiguration;
  }
  public putVpcConfiguration(value: KendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfiguration) {
    this._vpcConfiguration.internalValue = value;
  }
  public resetVpcConfiguration() {
    this._vpcConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigurationInput() {
    return this._vpcConfiguration.internalValue;
  }
}
export interface KendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#data_source_field_name KendraDataSource#data_source_field_name}
  */
  readonly dataSourceFieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#date_field_format KendraDataSource#date_field_format}
  */
  readonly dateFieldFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#index_field_name KendraDataSource#index_field_name}
  */
  readonly indexFieldName?: string;
}

export function kendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source_field_name: cdktn.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktn.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktn.stringToTerraform(struct!.indexFieldName),
  }
}


export function kendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappingsToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_source_field_name: {
      value: cdktn.stringToHclTerraform(struct!.dataSourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_field_format: {
      value: cdktn.stringToHclTerraform(struct!.dateFieldFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_field_name: {
      value: cdktn.stringToHclTerraform(struct!.indexFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceFieldName = this._dataSourceFieldName;
    }
    if (this._dateFieldFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateFieldFormat = this._dateFieldFormat;
    }
    if (this._indexFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexFieldName = this._indexFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSourceFieldName = undefined;
      this._dateFieldFormat = undefined;
      this._indexFieldName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSourceFieldName = value.dataSourceFieldName;
      this._dateFieldFormat = value.dateFieldFormat;
      this._indexFieldName = value.indexFieldName;
    }
  }

  // data_source_field_name - computed: true, optional: true, required: false
  private _dataSourceFieldName?: string;
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }
  public set dataSourceFieldName(value: string) {
    this._dataSourceFieldName = value;
  }
  public resetDataSourceFieldName() {
    this._dataSourceFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceFieldNameInput() {
    return this._dataSourceFieldName;
  }

  // date_field_format - computed: true, optional: true, required: false
  private _dateFieldFormat?: string;
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }
  public set dateFieldFormat(value: string) {
    this._dateFieldFormat = value;
  }
  public resetDateFieldFormat() {
    this._dateFieldFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateFieldFormatInput() {
    return this._dateFieldFormat;
  }

  // index_field_name - computed: true, optional: true, required: false
  private _indexFieldName?: string;
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
  public set indexFieldName(value: string) {
    this._indexFieldName = value;
  }
  public resetIndexFieldName() {
    this._indexFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexFieldNameInput() {
    return this._indexFieldName;
  }
}

export class KendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappingsList extends cdktn.ComplexList {
  public internalValue? : KendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappings[] | cdktn.IResolvable

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
  public get(index: number): KendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappingsOutputReference {
    return new KendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KendraDataSourceDataSourceConfigurationGoogleDriveConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#exclude_mime_types KendraDataSource#exclude_mime_types}
  */
  readonly excludeMimeTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#exclude_shared_drives KendraDataSource#exclude_shared_drives}
  */
  readonly excludeSharedDrives?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#exclude_user_accounts KendraDataSource#exclude_user_accounts}
  */
  readonly excludeUserAccounts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#exclusion_patterns KendraDataSource#exclusion_patterns}
  */
  readonly exclusionPatterns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#field_mappings KendraDataSource#field_mappings}
  */
  readonly fieldMappings?: KendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappings[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#inclusion_patterns KendraDataSource#inclusion_patterns}
  */
  readonly inclusionPatterns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#secret_arn KendraDataSource#secret_arn}
  */
  readonly secretArn?: string;
}

export function kendraDataSourceDataSourceConfigurationGoogleDriveConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationGoogleDriveConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exclude_mime_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludeMimeTypes),
    exclude_shared_drives: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludeSharedDrives),
    exclude_user_accounts: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludeUserAccounts),
    exclusion_patterns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclusionPatterns),
    field_mappings: cdktn.listMapper(kendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappingsToTerraform, false)(struct!.fieldMappings),
    inclusion_patterns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.inclusionPatterns),
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
  }
}


export function kendraDataSourceDataSourceConfigurationGoogleDriveConfigurationToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationGoogleDriveConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exclude_mime_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludeMimeTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exclude_shared_drives: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludeSharedDrives),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exclude_user_accounts: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludeUserAccounts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exclusion_patterns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exclusionPatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    field_mappings: {
      value: cdktn.listMapperHcl(kendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappingsToHclTerraform, false)(struct!.fieldMappings),
      isBlock: true,
      type: "list",
      storageClassType: "KendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappingsList",
    },
    inclusion_patterns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.inclusionPatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationGoogleDriveConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceDataSourceConfigurationGoogleDriveConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeMimeTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeMimeTypes = this._excludeMimeTypes;
    }
    if (this._excludeSharedDrives !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeSharedDrives = this._excludeSharedDrives;
    }
    if (this._excludeUserAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeUserAccounts = this._excludeUserAccounts;
    }
    if (this._exclusionPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionPatterns = this._exclusionPatterns;
    }
    if (this._fieldMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldMappings = this._fieldMappings?.internalValue;
    }
    if (this._inclusionPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusionPatterns = this._inclusionPatterns;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationGoogleDriveConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludeMimeTypes = undefined;
      this._excludeSharedDrives = undefined;
      this._excludeUserAccounts = undefined;
      this._exclusionPatterns = undefined;
      this._fieldMappings.internalValue = undefined;
      this._inclusionPatterns = undefined;
      this._secretArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludeMimeTypes = value.excludeMimeTypes;
      this._excludeSharedDrives = value.excludeSharedDrives;
      this._excludeUserAccounts = value.excludeUserAccounts;
      this._exclusionPatterns = value.exclusionPatterns;
      this._fieldMappings.internalValue = value.fieldMappings;
      this._inclusionPatterns = value.inclusionPatterns;
      this._secretArn = value.secretArn;
    }
  }

  // exclude_mime_types - computed: true, optional: true, required: false
  private _excludeMimeTypes?: string[];
  public get excludeMimeTypes() {
    return this.getListAttribute('exclude_mime_types');
  }
  public set excludeMimeTypes(value: string[]) {
    this._excludeMimeTypes = value;
  }
  public resetExcludeMimeTypes() {
    this._excludeMimeTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeMimeTypesInput() {
    return this._excludeMimeTypes;
  }

  // exclude_shared_drives - computed: true, optional: true, required: false
  private _excludeSharedDrives?: string[];
  public get excludeSharedDrives() {
    return this.getListAttribute('exclude_shared_drives');
  }
  public set excludeSharedDrives(value: string[]) {
    this._excludeSharedDrives = value;
  }
  public resetExcludeSharedDrives() {
    this._excludeSharedDrives = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeSharedDrivesInput() {
    return this._excludeSharedDrives;
  }

  // exclude_user_accounts - computed: true, optional: true, required: false
  private _excludeUserAccounts?: string[];
  public get excludeUserAccounts() {
    return this.getListAttribute('exclude_user_accounts');
  }
  public set excludeUserAccounts(value: string[]) {
    this._excludeUserAccounts = value;
  }
  public resetExcludeUserAccounts() {
    this._excludeUserAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeUserAccountsInput() {
    return this._excludeUserAccounts;
  }

  // exclusion_patterns - computed: true, optional: true, required: false
  private _exclusionPatterns?: string[];
  public get exclusionPatterns() {
    return this.getListAttribute('exclusion_patterns');
  }
  public set exclusionPatterns(value: string[]) {
    this._exclusionPatterns = value;
  }
  public resetExclusionPatterns() {
    this._exclusionPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionPatternsInput() {
    return this._exclusionPatterns;
  }

  // field_mappings - computed: true, optional: true, required: false
  private _fieldMappings = new KendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappingsList(this, "field_mappings", false);
  public get fieldMappings() {
    return this._fieldMappings;
  }
  public putFieldMappings(value: KendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappings[] | cdktn.IResolvable) {
    this._fieldMappings.internalValue = value;
  }
  public resetFieldMappings() {
    this._fieldMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldMappingsInput() {
    return this._fieldMappings.internalValue;
  }

  // inclusion_patterns - computed: true, optional: true, required: false
  private _inclusionPatterns?: string[];
  public get inclusionPatterns() {
    return this.getListAttribute('inclusion_patterns');
  }
  public set inclusionPatterns(value: string[]) {
    this._inclusionPatterns = value;
  }
  public resetInclusionPatterns() {
    this._inclusionPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionPatternsInput() {
    return this._inclusionPatterns;
  }

  // secret_arn - computed: true, optional: true, required: false
  private _secretArn?: string;
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }
}
export interface KendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#data_source_field_name KendraDataSource#data_source_field_name}
  */
  readonly dataSourceFieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#date_field_format KendraDataSource#date_field_format}
  */
  readonly dateFieldFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#index_field_name KendraDataSource#index_field_name}
  */
  readonly indexFieldName?: string;
}

export function kendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source_field_name: cdktn.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktn.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktn.stringToTerraform(struct!.indexFieldName),
  }
}


export function kendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappingsToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_source_field_name: {
      value: cdktn.stringToHclTerraform(struct!.dataSourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_field_format: {
      value: cdktn.stringToHclTerraform(struct!.dateFieldFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_field_name: {
      value: cdktn.stringToHclTerraform(struct!.indexFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceFieldName = this._dataSourceFieldName;
    }
    if (this._dateFieldFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateFieldFormat = this._dateFieldFormat;
    }
    if (this._indexFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexFieldName = this._indexFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSourceFieldName = undefined;
      this._dateFieldFormat = undefined;
      this._indexFieldName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSourceFieldName = value.dataSourceFieldName;
      this._dateFieldFormat = value.dateFieldFormat;
      this._indexFieldName = value.indexFieldName;
    }
  }

  // data_source_field_name - computed: true, optional: true, required: false
  private _dataSourceFieldName?: string;
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }
  public set dataSourceFieldName(value: string) {
    this._dataSourceFieldName = value;
  }
  public resetDataSourceFieldName() {
    this._dataSourceFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceFieldNameInput() {
    return this._dataSourceFieldName;
  }

  // date_field_format - computed: true, optional: true, required: false
  private _dateFieldFormat?: string;
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }
  public set dateFieldFormat(value: string) {
    this._dateFieldFormat = value;
  }
  public resetDateFieldFormat() {
    this._dateFieldFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateFieldFormatInput() {
    return this._dateFieldFormat;
  }

  // index_field_name - computed: true, optional: true, required: false
  private _indexFieldName?: string;
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
  public set indexFieldName(value: string) {
    this._indexFieldName = value;
  }
  public resetIndexFieldName() {
    this._indexFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexFieldNameInput() {
    return this._indexFieldName;
  }
}

export class KendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappingsList extends cdktn.ComplexList {
  public internalValue? : KendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappings[] | cdktn.IResolvable

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
  public get(index: number): KendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappingsOutputReference {
    return new KendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3Path {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#bucket KendraDataSource#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#key KendraDataSource#key}
  */
  readonly key?: string;
}

export function kendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3PathToTerraform(struct?: KendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3Path | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    key: cdktn.stringToTerraform(struct!.key),
  }
}


export function kendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3PathToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3Path | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3PathOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3Path | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3Path | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._key = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._key = value.key;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string;
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
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
}
export interface KendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#one_drive_user_list KendraDataSource#one_drive_user_list}
  */
  readonly oneDriveUserList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#one_drive_user_s3_path KendraDataSource#one_drive_user_s3_path}
  */
  readonly oneDriveUserS3Path?: KendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3Path;
}

export function kendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersToTerraform(struct?: KendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    one_drive_user_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.oneDriveUserList),
    one_drive_user_s3_path: kendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3PathToTerraform(struct!.oneDriveUserS3Path),
  }
}


export function kendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    one_drive_user_list: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.oneDriveUserList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    one_drive_user_s3_path: {
      value: kendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3PathToHclTerraform(struct!.oneDriveUserS3Path),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3Path",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsers | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oneDriveUserList !== undefined) {
      hasAnyValues = true;
      internalValueResult.oneDriveUserList = this._oneDriveUserList;
    }
    if (this._oneDriveUserS3Path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oneDriveUserS3Path = this._oneDriveUserS3Path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsers | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._oneDriveUserList = undefined;
      this._oneDriveUserS3Path.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._oneDriveUserList = value.oneDriveUserList;
      this._oneDriveUserS3Path.internalValue = value.oneDriveUserS3Path;
    }
  }

  // one_drive_user_list - computed: true, optional: true, required: false
  private _oneDriveUserList?: string[];
  public get oneDriveUserList() {
    return this.getListAttribute('one_drive_user_list');
  }
  public set oneDriveUserList(value: string[]) {
    this._oneDriveUserList = value;
  }
  public resetOneDriveUserList() {
    this._oneDriveUserList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneDriveUserListInput() {
    return this._oneDriveUserList;
  }

  // one_drive_user_s3_path - computed: true, optional: true, required: false
  private _oneDriveUserS3Path = new KendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3PathOutputReference(this, "one_drive_user_s3_path");
  public get oneDriveUserS3Path() {
    return this._oneDriveUserS3Path;
  }
  public putOneDriveUserS3Path(value: KendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3Path) {
    this._oneDriveUserS3Path.internalValue = value;
  }
  public resetOneDriveUserS3Path() {
    this._oneDriveUserS3Path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneDriveUserS3PathInput() {
    return this._oneDriveUserS3Path.internalValue;
  }
}
export interface KendraDataSourceDataSourceConfigurationOneDriveConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#disable_local_groups KendraDataSource#disable_local_groups}
  */
  readonly disableLocalGroups?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#exclusion_patterns KendraDataSource#exclusion_patterns}
  */
  readonly exclusionPatterns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#field_mappings KendraDataSource#field_mappings}
  */
  readonly fieldMappings?: KendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappings[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#inclusion_patterns KendraDataSource#inclusion_patterns}
  */
  readonly inclusionPatterns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#one_drive_users KendraDataSource#one_drive_users}
  */
  readonly oneDriveUsers?: KendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsers;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#secret_arn KendraDataSource#secret_arn}
  */
  readonly secretArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#tenant_domain KendraDataSource#tenant_domain}
  */
  readonly tenantDomain?: string;
}

export function kendraDataSourceDataSourceConfigurationOneDriveConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationOneDriveConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disable_local_groups: cdktn.booleanToTerraform(struct!.disableLocalGroups),
    exclusion_patterns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclusionPatterns),
    field_mappings: cdktn.listMapper(kendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappingsToTerraform, false)(struct!.fieldMappings),
    inclusion_patterns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.inclusionPatterns),
    one_drive_users: kendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersToTerraform(struct!.oneDriveUsers),
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    tenant_domain: cdktn.stringToTerraform(struct!.tenantDomain),
  }
}


export function kendraDataSourceDataSourceConfigurationOneDriveConfigurationToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationOneDriveConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disable_local_groups: {
      value: cdktn.booleanToHclTerraform(struct!.disableLocalGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclusion_patterns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exclusionPatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    field_mappings: {
      value: cdktn.listMapperHcl(kendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappingsToHclTerraform, false)(struct!.fieldMappings),
      isBlock: true,
      type: "list",
      storageClassType: "KendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappingsList",
    },
    inclusion_patterns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.inclusionPatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    one_drive_users: {
      value: kendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersToHclTerraform(struct!.oneDriveUsers),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsers",
    },
    secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_domain: {
      value: cdktn.stringToHclTerraform(struct!.tenantDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationOneDriveConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceDataSourceConfigurationOneDriveConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableLocalGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableLocalGroups = this._disableLocalGroups;
    }
    if (this._exclusionPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionPatterns = this._exclusionPatterns;
    }
    if (this._fieldMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldMappings = this._fieldMappings?.internalValue;
    }
    if (this._inclusionPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusionPatterns = this._inclusionPatterns;
    }
    if (this._oneDriveUsers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oneDriveUsers = this._oneDriveUsers?.internalValue;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    if (this._tenantDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantDomain = this._tenantDomain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationOneDriveConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableLocalGroups = undefined;
      this._exclusionPatterns = undefined;
      this._fieldMappings.internalValue = undefined;
      this._inclusionPatterns = undefined;
      this._oneDriveUsers.internalValue = undefined;
      this._secretArn = undefined;
      this._tenantDomain = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableLocalGroups = value.disableLocalGroups;
      this._exclusionPatterns = value.exclusionPatterns;
      this._fieldMappings.internalValue = value.fieldMappings;
      this._inclusionPatterns = value.inclusionPatterns;
      this._oneDriveUsers.internalValue = value.oneDriveUsers;
      this._secretArn = value.secretArn;
      this._tenantDomain = value.tenantDomain;
    }
  }

  // disable_local_groups - computed: true, optional: true, required: false
  private _disableLocalGroups?: boolean | cdktn.IResolvable;
  public get disableLocalGroups() {
    return this.getBooleanAttribute('disable_local_groups');
  }
  public set disableLocalGroups(value: boolean | cdktn.IResolvable) {
    this._disableLocalGroups = value;
  }
  public resetDisableLocalGroups() {
    this._disableLocalGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableLocalGroupsInput() {
    return this._disableLocalGroups;
  }

  // exclusion_patterns - computed: true, optional: true, required: false
  private _exclusionPatterns?: string[];
  public get exclusionPatterns() {
    return this.getListAttribute('exclusion_patterns');
  }
  public set exclusionPatterns(value: string[]) {
    this._exclusionPatterns = value;
  }
  public resetExclusionPatterns() {
    this._exclusionPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionPatternsInput() {
    return this._exclusionPatterns;
  }

  // field_mappings - computed: true, optional: true, required: false
  private _fieldMappings = new KendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappingsList(this, "field_mappings", false);
  public get fieldMappings() {
    return this._fieldMappings;
  }
  public putFieldMappings(value: KendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappings[] | cdktn.IResolvable) {
    this._fieldMappings.internalValue = value;
  }
  public resetFieldMappings() {
    this._fieldMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldMappingsInput() {
    return this._fieldMappings.internalValue;
  }

  // inclusion_patterns - computed: true, optional: true, required: false
  private _inclusionPatterns?: string[];
  public get inclusionPatterns() {
    return this.getListAttribute('inclusion_patterns');
  }
  public set inclusionPatterns(value: string[]) {
    this._inclusionPatterns = value;
  }
  public resetInclusionPatterns() {
    this._inclusionPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionPatternsInput() {
    return this._inclusionPatterns;
  }

  // one_drive_users - computed: true, optional: true, required: false
  private _oneDriveUsers = new KendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOutputReference(this, "one_drive_users");
  public get oneDriveUsers() {
    return this._oneDriveUsers;
  }
  public putOneDriveUsers(value: KendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsers) {
    this._oneDriveUsers.internalValue = value;
  }
  public resetOneDriveUsers() {
    this._oneDriveUsers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneDriveUsersInput() {
    return this._oneDriveUsers.internalValue;
  }

  // secret_arn - computed: true, optional: true, required: false
  private _secretArn?: string;
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }

  // tenant_domain - computed: true, optional: true, required: false
  private _tenantDomain?: string;
  public get tenantDomain() {
    return this.getStringAttribute('tenant_domain');
  }
  public set tenantDomain(value: string) {
    this._tenantDomain = value;
  }
  public resetTenantDomain() {
    this._tenantDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantDomainInput() {
    return this._tenantDomain;
  }
}
export interface KendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#key_path KendraDataSource#key_path}
  */
  readonly keyPath?: string;
}

export function kendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key_path: cdktn.stringToTerraform(struct!.keyPath),
  }
}


export function kendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfigurationToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key_path: {
      value: cdktn.stringToHclTerraform(struct!.keyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPath = this._keyPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyPath = value.keyPath;
    }
  }

  // key_path - computed: true, optional: true, required: false
  private _keyPath?: string;
  public get keyPath() {
    return this.getStringAttribute('key_path');
  }
  public set keyPath(value: string) {
    this._keyPath = value;
  }
  public resetKeyPath() {
    this._keyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPathInput() {
    return this._keyPath;
  }
}
export interface KendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#s3_prefix KendraDataSource#s3_prefix}
  */
  readonly s3Prefix?: string;
}

export function kendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_prefix: cdktn.stringToTerraform(struct!.s3Prefix),
  }
}


export function kendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_prefix: {
      value: cdktn.stringToHclTerraform(struct!.s3Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Prefix = this._s3Prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Prefix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Prefix = value.s3Prefix;
    }
  }

  // s3_prefix - computed: true, optional: true, required: false
  private _s3Prefix?: string;
  public get s3Prefix() {
    return this.getStringAttribute('s3_prefix');
  }
  public set s3Prefix(value: string) {
    this._s3Prefix = value;
  }
  public resetS3Prefix() {
    this._s3Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3PrefixInput() {
    return this._s3Prefix;
  }
}
export interface KendraDataSourceDataSourceConfigurationS3Configuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#access_control_list_configuration KendraDataSource#access_control_list_configuration}
  */
  readonly accessControlListConfiguration?: KendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#bucket_name KendraDataSource#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#documents_metadata_configuration KendraDataSource#documents_metadata_configuration}
  */
  readonly documentsMetadataConfiguration?: KendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#exclusion_patterns KendraDataSource#exclusion_patterns}
  */
  readonly exclusionPatterns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#inclusion_patterns KendraDataSource#inclusion_patterns}
  */
  readonly inclusionPatterns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#inclusion_prefixes KendraDataSource#inclusion_prefixes}
  */
  readonly inclusionPrefixes?: string[];
}

export function kendraDataSourceDataSourceConfigurationS3ConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationS3Configuration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_control_list_configuration: kendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfigurationToTerraform(struct!.accessControlListConfiguration),
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    documents_metadata_configuration: kendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationToTerraform(struct!.documentsMetadataConfiguration),
    exclusion_patterns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclusionPatterns),
    inclusion_patterns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.inclusionPatterns),
    inclusion_prefixes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.inclusionPrefixes),
  }
}


export function kendraDataSourceDataSourceConfigurationS3ConfigurationToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationS3Configuration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_control_list_configuration: {
      value: kendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfigurationToHclTerraform(struct!.accessControlListConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfiguration",
    },
    bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    documents_metadata_configuration: {
      value: kendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationToHclTerraform(struct!.documentsMetadataConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration",
    },
    exclusion_patterns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exclusionPatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    inclusion_patterns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.inclusionPatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    inclusion_prefixes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.inclusionPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationS3ConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceDataSourceConfigurationS3Configuration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessControlListConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlListConfiguration = this._accessControlListConfiguration?.internalValue;
    }
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._documentsMetadataConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentsMetadataConfiguration = this._documentsMetadataConfiguration?.internalValue;
    }
    if (this._exclusionPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionPatterns = this._exclusionPatterns;
    }
    if (this._inclusionPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusionPatterns = this._inclusionPatterns;
    }
    if (this._inclusionPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusionPrefixes = this._inclusionPrefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationS3Configuration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessControlListConfiguration.internalValue = undefined;
      this._bucketName = undefined;
      this._documentsMetadataConfiguration.internalValue = undefined;
      this._exclusionPatterns = undefined;
      this._inclusionPatterns = undefined;
      this._inclusionPrefixes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessControlListConfiguration.internalValue = value.accessControlListConfiguration;
      this._bucketName = value.bucketName;
      this._documentsMetadataConfiguration.internalValue = value.documentsMetadataConfiguration;
      this._exclusionPatterns = value.exclusionPatterns;
      this._inclusionPatterns = value.inclusionPatterns;
      this._inclusionPrefixes = value.inclusionPrefixes;
    }
  }

  // access_control_list_configuration - computed: true, optional: true, required: false
  private _accessControlListConfiguration = new KendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference(this, "access_control_list_configuration");
  public get accessControlListConfiguration() {
    return this._accessControlListConfiguration;
  }
  public putAccessControlListConfiguration(value: KendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfiguration) {
    this._accessControlListConfiguration.internalValue = value;
  }
  public resetAccessControlListConfiguration() {
    this._accessControlListConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlListConfigurationInput() {
    return this._accessControlListConfiguration.internalValue;
  }

  // bucket_name - computed: true, optional: true, required: false
  private _bucketName?: string;
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // documents_metadata_configuration - computed: true, optional: true, required: false
  private _documentsMetadataConfiguration = new KendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference(this, "documents_metadata_configuration");
  public get documentsMetadataConfiguration() {
    return this._documentsMetadataConfiguration;
  }
  public putDocumentsMetadataConfiguration(value: KendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration) {
    this._documentsMetadataConfiguration.internalValue = value;
  }
  public resetDocumentsMetadataConfiguration() {
    this._documentsMetadataConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentsMetadataConfigurationInput() {
    return this._documentsMetadataConfiguration.internalValue;
  }

  // exclusion_patterns - computed: true, optional: true, required: false
  private _exclusionPatterns?: string[];
  public get exclusionPatterns() {
    return this.getListAttribute('exclusion_patterns');
  }
  public set exclusionPatterns(value: string[]) {
    this._exclusionPatterns = value;
  }
  public resetExclusionPatterns() {
    this._exclusionPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionPatternsInput() {
    return this._exclusionPatterns;
  }

  // inclusion_patterns - computed: true, optional: true, required: false
  private _inclusionPatterns?: string[];
  public get inclusionPatterns() {
    return this.getListAttribute('inclusion_patterns');
  }
  public set inclusionPatterns(value: string[]) {
    this._inclusionPatterns = value;
  }
  public resetInclusionPatterns() {
    this._inclusionPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionPatternsInput() {
    return this._inclusionPatterns;
  }

  // inclusion_prefixes - computed: true, optional: true, required: false
  private _inclusionPrefixes?: string[];
  public get inclusionPrefixes() {
    return this.getListAttribute('inclusion_prefixes');
  }
  public set inclusionPrefixes(value: string[]) {
    this._inclusionPrefixes = value;
  }
  public resetInclusionPrefixes() {
    this._inclusionPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionPrefixesInput() {
    return this._inclusionPrefixes;
  }
}
export interface KendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#data_source_field_name KendraDataSource#data_source_field_name}
  */
  readonly dataSourceFieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#date_field_format KendraDataSource#date_field_format}
  */
  readonly dateFieldFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#index_field_name KendraDataSource#index_field_name}
  */
  readonly indexFieldName?: string;
}

export function kendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source_field_name: cdktn.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktn.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktn.stringToTerraform(struct!.indexFieldName),
  }
}


export function kendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappingsToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_source_field_name: {
      value: cdktn.stringToHclTerraform(struct!.dataSourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_field_format: {
      value: cdktn.stringToHclTerraform(struct!.dateFieldFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_field_name: {
      value: cdktn.stringToHclTerraform(struct!.indexFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceFieldName = this._dataSourceFieldName;
    }
    if (this._dateFieldFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateFieldFormat = this._dateFieldFormat;
    }
    if (this._indexFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexFieldName = this._indexFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSourceFieldName = undefined;
      this._dateFieldFormat = undefined;
      this._indexFieldName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSourceFieldName = value.dataSourceFieldName;
      this._dateFieldFormat = value.dateFieldFormat;
      this._indexFieldName = value.indexFieldName;
    }
  }

  // data_source_field_name - computed: true, optional: true, required: false
  private _dataSourceFieldName?: string;
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }
  public set dataSourceFieldName(value: string) {
    this._dataSourceFieldName = value;
  }
  public resetDataSourceFieldName() {
    this._dataSourceFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceFieldNameInput() {
    return this._dataSourceFieldName;
  }

  // date_field_format - computed: true, optional: true, required: false
  private _dateFieldFormat?: string;
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }
  public set dateFieldFormat(value: string) {
    this._dateFieldFormat = value;
  }
  public resetDateFieldFormat() {
    this._dateFieldFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateFieldFormatInput() {
    return this._dateFieldFormat;
  }

  // index_field_name - computed: true, optional: true, required: false
  private _indexFieldName?: string;
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
  public set indexFieldName(value: string) {
    this._indexFieldName = value;
  }
  public resetIndexFieldName() {
    this._indexFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexFieldNameInput() {
    return this._indexFieldName;
  }
}

export class KendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappingsList extends cdktn.ComplexList {
  public internalValue? : KendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappings[] | cdktn.IResolvable

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
  public get(index: number): KendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappingsOutputReference {
    return new KendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#document_data_field_name KendraDataSource#document_data_field_name}
  */
  readonly documentDataFieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#document_title_field_name KendraDataSource#document_title_field_name}
  */
  readonly documentTitleFieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#field_mappings KendraDataSource#field_mappings}
  */
  readonly fieldMappings?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappings[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#include_filter_types KendraDataSource#include_filter_types}
  */
  readonly includeFilterTypes?: string[];
}

export function kendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    document_data_field_name: cdktn.stringToTerraform(struct!.documentDataFieldName),
    document_title_field_name: cdktn.stringToTerraform(struct!.documentTitleFieldName),
    field_mappings: cdktn.listMapper(kendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappingsToTerraform, false)(struct!.fieldMappings),
    include_filter_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includeFilterTypes),
  }
}


export function kendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    document_data_field_name: {
      value: cdktn.stringToHclTerraform(struct!.documentDataFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    document_title_field_name: {
      value: cdktn.stringToHclTerraform(struct!.documentTitleFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_mappings: {
      value: cdktn.listMapperHcl(kendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappingsToHclTerraform, false)(struct!.fieldMappings),
      isBlock: true,
      type: "list",
      storageClassType: "KendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappingsList",
    },
    include_filter_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includeFilterTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._documentDataFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentDataFieldName = this._documentDataFieldName;
    }
    if (this._documentTitleFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentTitleFieldName = this._documentTitleFieldName;
    }
    if (this._fieldMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldMappings = this._fieldMappings?.internalValue;
    }
    if (this._includeFilterTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeFilterTypes = this._includeFilterTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._documentDataFieldName = undefined;
      this._documentTitleFieldName = undefined;
      this._fieldMappings.internalValue = undefined;
      this._includeFilterTypes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._documentDataFieldName = value.documentDataFieldName;
      this._documentTitleFieldName = value.documentTitleFieldName;
      this._fieldMappings.internalValue = value.fieldMappings;
      this._includeFilterTypes = value.includeFilterTypes;
    }
  }

  // document_data_field_name - computed: true, optional: true, required: false
  private _documentDataFieldName?: string;
  public get documentDataFieldName() {
    return this.getStringAttribute('document_data_field_name');
  }
  public set documentDataFieldName(value: string) {
    this._documentDataFieldName = value;
  }
  public resetDocumentDataFieldName() {
    this._documentDataFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentDataFieldNameInput() {
    return this._documentDataFieldName;
  }

  // document_title_field_name - computed: true, optional: true, required: false
  private _documentTitleFieldName?: string;
  public get documentTitleFieldName() {
    return this.getStringAttribute('document_title_field_name');
  }
  public set documentTitleFieldName(value: string) {
    this._documentTitleFieldName = value;
  }
  public resetDocumentTitleFieldName() {
    this._documentTitleFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentTitleFieldNameInput() {
    return this._documentTitleFieldName;
  }

  // field_mappings - computed: true, optional: true, required: false
  private _fieldMappings = new KendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappingsList(this, "field_mappings", false);
  public get fieldMappings() {
    return this._fieldMappings;
  }
  public putFieldMappings(value: KendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappings[] | cdktn.IResolvable) {
    this._fieldMappings.internalValue = value;
  }
  public resetFieldMappings() {
    this._fieldMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldMappingsInput() {
    return this._fieldMappings.internalValue;
  }

  // include_filter_types - computed: true, optional: true, required: false
  private _includeFilterTypes?: string[];
  public get includeFilterTypes() {
    return this.getListAttribute('include_filter_types');
  }
  public set includeFilterTypes(value: string[]) {
    this._includeFilterTypes = value;
  }
  public resetIncludeFilterTypes() {
    this._includeFilterTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeFilterTypesInput() {
    return this._includeFilterTypes;
  }
}
export interface KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#data_source_field_name KendraDataSource#data_source_field_name}
  */
  readonly dataSourceFieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#date_field_format KendraDataSource#date_field_format}
  */
  readonly dateFieldFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#index_field_name KendraDataSource#index_field_name}
  */
  readonly indexFieldName?: string;
}

export function kendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source_field_name: cdktn.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktn.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktn.stringToTerraform(struct!.indexFieldName),
  }
}


export function kendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappingsToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_source_field_name: {
      value: cdktn.stringToHclTerraform(struct!.dataSourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_field_format: {
      value: cdktn.stringToHclTerraform(struct!.dateFieldFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_field_name: {
      value: cdktn.stringToHclTerraform(struct!.indexFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceFieldName = this._dataSourceFieldName;
    }
    if (this._dateFieldFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateFieldFormat = this._dateFieldFormat;
    }
    if (this._indexFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexFieldName = this._indexFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSourceFieldName = undefined;
      this._dateFieldFormat = undefined;
      this._indexFieldName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSourceFieldName = value.dataSourceFieldName;
      this._dateFieldFormat = value.dateFieldFormat;
      this._indexFieldName = value.indexFieldName;
    }
  }

  // data_source_field_name - computed: true, optional: true, required: false
  private _dataSourceFieldName?: string;
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }
  public set dataSourceFieldName(value: string) {
    this._dataSourceFieldName = value;
  }
  public resetDataSourceFieldName() {
    this._dataSourceFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceFieldNameInput() {
    return this._dataSourceFieldName;
  }

  // date_field_format - computed: true, optional: true, required: false
  private _dateFieldFormat?: string;
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }
  public set dateFieldFormat(value: string) {
    this._dateFieldFormat = value;
  }
  public resetDateFieldFormat() {
    this._dateFieldFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateFieldFormatInput() {
    return this._dateFieldFormat;
  }

  // index_field_name - computed: true, optional: true, required: false
  private _indexFieldName?: string;
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
  public set indexFieldName(value: string) {
    this._indexFieldName = value;
  }
  public resetIndexFieldName() {
    this._indexFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexFieldNameInput() {
    return this._indexFieldName;
  }
}

export class KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappingsList extends cdktn.ComplexList {
  public internalValue? : KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappings[] | cdktn.IResolvable

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
  public get(index: number): KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappingsOutputReference {
    return new KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#document_data_field_name KendraDataSource#document_data_field_name}
  */
  readonly documentDataFieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#document_title_field_name KendraDataSource#document_title_field_name}
  */
  readonly documentTitleFieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#field_mappings KendraDataSource#field_mappings}
  */
  readonly fieldMappings?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappings[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#name KendraDataSource#name}
  */
  readonly name?: string;
}

export function kendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsToTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    document_data_field_name: cdktn.stringToTerraform(struct!.documentDataFieldName),
    document_title_field_name: cdktn.stringToTerraform(struct!.documentTitleFieldName),
    field_mappings: cdktn.listMapper(kendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappingsToTerraform, false)(struct!.fieldMappings),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function kendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    document_data_field_name: {
      value: cdktn.stringToHclTerraform(struct!.documentDataFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    document_title_field_name: {
      value: cdktn.stringToHclTerraform(struct!.documentTitleFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_mappings: {
      value: cdktn.listMapperHcl(kendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappingsToHclTerraform, false)(struct!.fieldMappings),
      isBlock: true,
      type: "list",
      storageClassType: "KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappingsList",
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

export class KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._documentDataFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentDataFieldName = this._documentDataFieldName;
    }
    if (this._documentTitleFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentTitleFieldName = this._documentTitleFieldName;
    }
    if (this._fieldMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldMappings = this._fieldMappings?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._documentDataFieldName = undefined;
      this._documentTitleFieldName = undefined;
      this._fieldMappings.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._documentDataFieldName = value.documentDataFieldName;
      this._documentTitleFieldName = value.documentTitleFieldName;
      this._fieldMappings.internalValue = value.fieldMappings;
      this._name = value.name;
    }
  }

  // document_data_field_name - computed: true, optional: true, required: false
  private _documentDataFieldName?: string;
  public get documentDataFieldName() {
    return this.getStringAttribute('document_data_field_name');
  }
  public set documentDataFieldName(value: string) {
    this._documentDataFieldName = value;
  }
  public resetDocumentDataFieldName() {
    this._documentDataFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentDataFieldNameInput() {
    return this._documentDataFieldName;
  }

  // document_title_field_name - computed: true, optional: true, required: false
  private _documentTitleFieldName?: string;
  public get documentTitleFieldName() {
    return this.getStringAttribute('document_title_field_name');
  }
  public set documentTitleFieldName(value: string) {
    this._documentTitleFieldName = value;
  }
  public resetDocumentTitleFieldName() {
    this._documentTitleFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentTitleFieldNameInput() {
    return this._documentTitleFieldName;
  }

  // field_mappings - computed: true, optional: true, required: false
  private _fieldMappings = new KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappingsList(this, "field_mappings", false);
  public get fieldMappings() {
    return this._fieldMappings;
  }
  public putFieldMappings(value: KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappings[] | cdktn.IResolvable) {
    this._fieldMappings.internalValue = value;
  }
  public resetFieldMappings() {
    this._fieldMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldMappingsInput() {
    return this._fieldMappings.internalValue;
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

export class KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsList extends cdktn.ComplexList {
  public internalValue? : KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurations[] | cdktn.IResolvable

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
  public get(index: number): KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsOutputReference {
    return new KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#data_source_field_name KendraDataSource#data_source_field_name}
  */
  readonly dataSourceFieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#date_field_format KendraDataSource#date_field_format}
  */
  readonly dateFieldFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#index_field_name KendraDataSource#index_field_name}
  */
  readonly indexFieldName?: string;
}

export function kendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source_field_name: cdktn.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktn.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktn.stringToTerraform(struct!.indexFieldName),
  }
}


export function kendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappingsToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_source_field_name: {
      value: cdktn.stringToHclTerraform(struct!.dataSourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_field_format: {
      value: cdktn.stringToHclTerraform(struct!.dateFieldFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_field_name: {
      value: cdktn.stringToHclTerraform(struct!.indexFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceFieldName = this._dataSourceFieldName;
    }
    if (this._dateFieldFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateFieldFormat = this._dateFieldFormat;
    }
    if (this._indexFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexFieldName = this._indexFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSourceFieldName = undefined;
      this._dateFieldFormat = undefined;
      this._indexFieldName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSourceFieldName = value.dataSourceFieldName;
      this._dateFieldFormat = value.dateFieldFormat;
      this._indexFieldName = value.indexFieldName;
    }
  }

  // data_source_field_name - computed: true, optional: true, required: false
  private _dataSourceFieldName?: string;
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }
  public set dataSourceFieldName(value: string) {
    this._dataSourceFieldName = value;
  }
  public resetDataSourceFieldName() {
    this._dataSourceFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceFieldNameInput() {
    return this._dataSourceFieldName;
  }

  // date_field_format - computed: true, optional: true, required: false
  private _dateFieldFormat?: string;
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }
  public set dateFieldFormat(value: string) {
    this._dateFieldFormat = value;
  }
  public resetDateFieldFormat() {
    this._dateFieldFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateFieldFormatInput() {
    return this._dateFieldFormat;
  }

  // index_field_name - computed: true, optional: true, required: false
  private _indexFieldName?: string;
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
  public set indexFieldName(value: string) {
    this._indexFieldName = value;
  }
  public resetIndexFieldName() {
    this._indexFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexFieldNameInput() {
    return this._indexFieldName;
  }
}

export class KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappingsList extends cdktn.ComplexList {
  public internalValue? : KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappings[] | cdktn.IResolvable

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
  public get(index: number): KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappingsOutputReference {
    return new KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#document_data_field_name KendraDataSource#document_data_field_name}
  */
  readonly documentDataFieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#document_title_field_name KendraDataSource#document_title_field_name}
  */
  readonly documentTitleFieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#field_mappings KendraDataSource#field_mappings}
  */
  readonly fieldMappings?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappings[] | cdktn.IResolvable;
}

export function kendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    document_data_field_name: cdktn.stringToTerraform(struct!.documentDataFieldName),
    document_title_field_name: cdktn.stringToTerraform(struct!.documentTitleFieldName),
    field_mappings: cdktn.listMapper(kendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappingsToTerraform, false)(struct!.fieldMappings),
  }
}


export function kendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    document_data_field_name: {
      value: cdktn.stringToHclTerraform(struct!.documentDataFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    document_title_field_name: {
      value: cdktn.stringToHclTerraform(struct!.documentTitleFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_mappings: {
      value: cdktn.listMapperHcl(kendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappingsToHclTerraform, false)(struct!.fieldMappings),
      isBlock: true,
      type: "list",
      storageClassType: "KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._documentDataFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentDataFieldName = this._documentDataFieldName;
    }
    if (this._documentTitleFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentTitleFieldName = this._documentTitleFieldName;
    }
    if (this._fieldMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldMappings = this._fieldMappings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._documentDataFieldName = undefined;
      this._documentTitleFieldName = undefined;
      this._fieldMappings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._documentDataFieldName = value.documentDataFieldName;
      this._documentTitleFieldName = value.documentTitleFieldName;
      this._fieldMappings.internalValue = value.fieldMappings;
    }
  }

  // document_data_field_name - computed: true, optional: true, required: false
  private _documentDataFieldName?: string;
  public get documentDataFieldName() {
    return this.getStringAttribute('document_data_field_name');
  }
  public set documentDataFieldName(value: string) {
    this._documentDataFieldName = value;
  }
  public resetDocumentDataFieldName() {
    this._documentDataFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentDataFieldNameInput() {
    return this._documentDataFieldName;
  }

  // document_title_field_name - computed: true, optional: true, required: false
  private _documentTitleFieldName?: string;
  public get documentTitleFieldName() {
    return this.getStringAttribute('document_title_field_name');
  }
  public set documentTitleFieldName(value: string) {
    this._documentTitleFieldName = value;
  }
  public resetDocumentTitleFieldName() {
    this._documentTitleFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentTitleFieldNameInput() {
    return this._documentTitleFieldName;
  }

  // field_mappings - computed: true, optional: true, required: false
  private _fieldMappings = new KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappingsList(this, "field_mappings", false);
  public get fieldMappings() {
    return this._fieldMappings;
  }
  public putFieldMappings(value: KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappings[] | cdktn.IResolvable) {
    this._fieldMappings.internalValue = value;
  }
  public resetFieldMappings() {
    this._fieldMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldMappingsInput() {
    return this._fieldMappings.internalValue;
  }
}
export interface KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#custom_knowledge_article_type_configurations KendraDataSource#custom_knowledge_article_type_configurations}
  */
  readonly customKnowledgeArticleTypeConfigurations?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurations[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#included_states KendraDataSource#included_states}
  */
  readonly includedStates?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#standard_knowledge_article_type_configuration KendraDataSource#standard_knowledge_article_type_configuration}
  */
  readonly standardKnowledgeArticleTypeConfiguration?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfiguration;
}

export function kendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_knowledge_article_type_configurations: cdktn.listMapper(kendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsToTerraform, false)(struct!.customKnowledgeArticleTypeConfigurations),
    included_states: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includedStates),
    standard_knowledge_article_type_configuration: kendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationToTerraform(struct!.standardKnowledgeArticleTypeConfiguration),
  }
}


export function kendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_knowledge_article_type_configurations: {
      value: cdktn.listMapperHcl(kendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsToHclTerraform, false)(struct!.customKnowledgeArticleTypeConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsList",
    },
    included_states: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includedStates),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    standard_knowledge_article_type_configuration: {
      value: kendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationToHclTerraform(struct!.standardKnowledgeArticleTypeConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customKnowledgeArticleTypeConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customKnowledgeArticleTypeConfigurations = this._customKnowledgeArticleTypeConfigurations?.internalValue;
    }
    if (this._includedStates !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedStates = this._includedStates;
    }
    if (this._standardKnowledgeArticleTypeConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardKnowledgeArticleTypeConfiguration = this._standardKnowledgeArticleTypeConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customKnowledgeArticleTypeConfigurations.internalValue = undefined;
      this._includedStates = undefined;
      this._standardKnowledgeArticleTypeConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customKnowledgeArticleTypeConfigurations.internalValue = value.customKnowledgeArticleTypeConfigurations;
      this._includedStates = value.includedStates;
      this._standardKnowledgeArticleTypeConfiguration.internalValue = value.standardKnowledgeArticleTypeConfiguration;
    }
  }

  // custom_knowledge_article_type_configurations - computed: true, optional: true, required: false
  private _customKnowledgeArticleTypeConfigurations = new KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsList(this, "custom_knowledge_article_type_configurations", false);
  public get customKnowledgeArticleTypeConfigurations() {
    return this._customKnowledgeArticleTypeConfigurations;
  }
  public putCustomKnowledgeArticleTypeConfigurations(value: KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurations[] | cdktn.IResolvable) {
    this._customKnowledgeArticleTypeConfigurations.internalValue = value;
  }
  public resetCustomKnowledgeArticleTypeConfigurations() {
    this._customKnowledgeArticleTypeConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customKnowledgeArticleTypeConfigurationsInput() {
    return this._customKnowledgeArticleTypeConfigurations.internalValue;
  }

  // included_states - computed: true, optional: true, required: false
  private _includedStates?: string[];
  public get includedStates() {
    return this.getListAttribute('included_states');
  }
  public set includedStates(value: string[]) {
    this._includedStates = value;
  }
  public resetIncludedStates() {
    this._includedStates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedStatesInput() {
    return this._includedStates;
  }

  // standard_knowledge_article_type_configuration - computed: true, optional: true, required: false
  private _standardKnowledgeArticleTypeConfiguration = new KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationOutputReference(this, "standard_knowledge_article_type_configuration");
  public get standardKnowledgeArticleTypeConfiguration() {
    return this._standardKnowledgeArticleTypeConfiguration;
  }
  public putStandardKnowledgeArticleTypeConfiguration(value: KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfiguration) {
    this._standardKnowledgeArticleTypeConfiguration.internalValue = value;
  }
  public resetStandardKnowledgeArticleTypeConfiguration() {
    this._standardKnowledgeArticleTypeConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardKnowledgeArticleTypeConfigurationInput() {
    return this._standardKnowledgeArticleTypeConfiguration.internalValue;
  }
}
export interface KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#data_source_field_name KendraDataSource#data_source_field_name}
  */
  readonly dataSourceFieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#date_field_format KendraDataSource#date_field_format}
  */
  readonly dateFieldFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#index_field_name KendraDataSource#index_field_name}
  */
  readonly indexFieldName?: string;
}

export function kendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source_field_name: cdktn.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktn.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktn.stringToTerraform(struct!.indexFieldName),
  }
}


export function kendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappingsToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_source_field_name: {
      value: cdktn.stringToHclTerraform(struct!.dataSourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_field_format: {
      value: cdktn.stringToHclTerraform(struct!.dateFieldFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_field_name: {
      value: cdktn.stringToHclTerraform(struct!.indexFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceFieldName = this._dataSourceFieldName;
    }
    if (this._dateFieldFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateFieldFormat = this._dateFieldFormat;
    }
    if (this._indexFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexFieldName = this._indexFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSourceFieldName = undefined;
      this._dateFieldFormat = undefined;
      this._indexFieldName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSourceFieldName = value.dataSourceFieldName;
      this._dateFieldFormat = value.dateFieldFormat;
      this._indexFieldName = value.indexFieldName;
    }
  }

  // data_source_field_name - computed: true, optional: true, required: false
  private _dataSourceFieldName?: string;
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }
  public set dataSourceFieldName(value: string) {
    this._dataSourceFieldName = value;
  }
  public resetDataSourceFieldName() {
    this._dataSourceFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceFieldNameInput() {
    return this._dataSourceFieldName;
  }

  // date_field_format - computed: true, optional: true, required: false
  private _dateFieldFormat?: string;
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }
  public set dateFieldFormat(value: string) {
    this._dateFieldFormat = value;
  }
  public resetDateFieldFormat() {
    this._dateFieldFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateFieldFormatInput() {
    return this._dateFieldFormat;
  }

  // index_field_name - computed: true, optional: true, required: false
  private _indexFieldName?: string;
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
  public set indexFieldName(value: string) {
    this._indexFieldName = value;
  }
  public resetIndexFieldName() {
    this._indexFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexFieldNameInput() {
    return this._indexFieldName;
  }
}

export class KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappingsList extends cdktn.ComplexList {
  public internalValue? : KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappings[] | cdktn.IResolvable

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
  public get(index: number): KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappingsOutputReference {
    return new KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#document_title_field_name KendraDataSource#document_title_field_name}
  */
  readonly documentTitleFieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#field_mappings KendraDataSource#field_mappings}
  */
  readonly fieldMappings?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappings[] | cdktn.IResolvable;
}

export function kendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    document_title_field_name: cdktn.stringToTerraform(struct!.documentTitleFieldName),
    field_mappings: cdktn.listMapper(kendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappingsToTerraform, false)(struct!.fieldMappings),
  }
}


export function kendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    document_title_field_name: {
      value: cdktn.stringToHclTerraform(struct!.documentTitleFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_mappings: {
      value: cdktn.listMapperHcl(kendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappingsToHclTerraform, false)(struct!.fieldMappings),
      isBlock: true,
      type: "list",
      storageClassType: "KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._documentTitleFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentTitleFieldName = this._documentTitleFieldName;
    }
    if (this._fieldMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldMappings = this._fieldMappings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._documentTitleFieldName = undefined;
      this._fieldMappings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._documentTitleFieldName = value.documentTitleFieldName;
      this._fieldMappings.internalValue = value.fieldMappings;
    }
  }

  // document_title_field_name - computed: true, optional: true, required: false
  private _documentTitleFieldName?: string;
  public get documentTitleFieldName() {
    return this.getStringAttribute('document_title_field_name');
  }
  public set documentTitleFieldName(value: string) {
    this._documentTitleFieldName = value;
  }
  public resetDocumentTitleFieldName() {
    this._documentTitleFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentTitleFieldNameInput() {
    return this._documentTitleFieldName;
  }

  // field_mappings - computed: true, optional: true, required: false
  private _fieldMappings = new KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappingsList(this, "field_mappings", false);
  public get fieldMappings() {
    return this._fieldMappings;
  }
  public putFieldMappings(value: KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappings[] | cdktn.IResolvable) {
    this._fieldMappings.internalValue = value;
  }
  public resetFieldMappings() {
    this._fieldMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldMappingsInput() {
    return this._fieldMappings.internalValue;
  }
}
export interface KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#data_source_field_name KendraDataSource#data_source_field_name}
  */
  readonly dataSourceFieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#date_field_format KendraDataSource#date_field_format}
  */
  readonly dateFieldFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#index_field_name KendraDataSource#index_field_name}
  */
  readonly indexFieldName?: string;
}

export function kendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source_field_name: cdktn.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktn.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktn.stringToTerraform(struct!.indexFieldName),
  }
}


export function kendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappingsToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_source_field_name: {
      value: cdktn.stringToHclTerraform(struct!.dataSourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_field_format: {
      value: cdktn.stringToHclTerraform(struct!.dateFieldFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_field_name: {
      value: cdktn.stringToHclTerraform(struct!.indexFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceFieldName = this._dataSourceFieldName;
    }
    if (this._dateFieldFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateFieldFormat = this._dateFieldFormat;
    }
    if (this._indexFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexFieldName = this._indexFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSourceFieldName = undefined;
      this._dateFieldFormat = undefined;
      this._indexFieldName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSourceFieldName = value.dataSourceFieldName;
      this._dateFieldFormat = value.dateFieldFormat;
      this._indexFieldName = value.indexFieldName;
    }
  }

  // data_source_field_name - computed: true, optional: true, required: false
  private _dataSourceFieldName?: string;
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }
  public set dataSourceFieldName(value: string) {
    this._dataSourceFieldName = value;
  }
  public resetDataSourceFieldName() {
    this._dataSourceFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceFieldNameInput() {
    return this._dataSourceFieldName;
  }

  // date_field_format - computed: true, optional: true, required: false
  private _dateFieldFormat?: string;
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }
  public set dateFieldFormat(value: string) {
    this._dateFieldFormat = value;
  }
  public resetDateFieldFormat() {
    this._dateFieldFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateFieldFormatInput() {
    return this._dateFieldFormat;
  }

  // index_field_name - computed: true, optional: true, required: false
  private _indexFieldName?: string;
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
  public set indexFieldName(value: string) {
    this._indexFieldName = value;
  }
  public resetIndexFieldName() {
    this._indexFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexFieldNameInput() {
    return this._indexFieldName;
  }
}

export class KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappingsList extends cdktn.ComplexList {
  public internalValue? : KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappings[] | cdktn.IResolvable

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
  public get(index: number): KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappingsOutputReference {
    return new KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#document_data_field_name KendraDataSource#document_data_field_name}
  */
  readonly documentDataFieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#document_title_field_name KendraDataSource#document_title_field_name}
  */
  readonly documentTitleFieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#field_mappings KendraDataSource#field_mappings}
  */
  readonly fieldMappings?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappings[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#name KendraDataSource#name}
  */
  readonly name?: string;
}

export function kendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsToTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    document_data_field_name: cdktn.stringToTerraform(struct!.documentDataFieldName),
    document_title_field_name: cdktn.stringToTerraform(struct!.documentTitleFieldName),
    field_mappings: cdktn.listMapper(kendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappingsToTerraform, false)(struct!.fieldMappings),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function kendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    document_data_field_name: {
      value: cdktn.stringToHclTerraform(struct!.documentDataFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    document_title_field_name: {
      value: cdktn.stringToHclTerraform(struct!.documentTitleFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_mappings: {
      value: cdktn.listMapperHcl(kendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappingsToHclTerraform, false)(struct!.fieldMappings),
      isBlock: true,
      type: "list",
      storageClassType: "KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappingsList",
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

export class KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._documentDataFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentDataFieldName = this._documentDataFieldName;
    }
    if (this._documentTitleFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentTitleFieldName = this._documentTitleFieldName;
    }
    if (this._fieldMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldMappings = this._fieldMappings?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._documentDataFieldName = undefined;
      this._documentTitleFieldName = undefined;
      this._fieldMappings.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._documentDataFieldName = value.documentDataFieldName;
      this._documentTitleFieldName = value.documentTitleFieldName;
      this._fieldMappings.internalValue = value.fieldMappings;
      this._name = value.name;
    }
  }

  // document_data_field_name - computed: true, optional: true, required: false
  private _documentDataFieldName?: string;
  public get documentDataFieldName() {
    return this.getStringAttribute('document_data_field_name');
  }
  public set documentDataFieldName(value: string) {
    this._documentDataFieldName = value;
  }
  public resetDocumentDataFieldName() {
    this._documentDataFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentDataFieldNameInput() {
    return this._documentDataFieldName;
  }

  // document_title_field_name - computed: true, optional: true, required: false
  private _documentTitleFieldName?: string;
  public get documentTitleFieldName() {
    return this.getStringAttribute('document_title_field_name');
  }
  public set documentTitleFieldName(value: string) {
    this._documentTitleFieldName = value;
  }
  public resetDocumentTitleFieldName() {
    this._documentTitleFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentTitleFieldNameInput() {
    return this._documentTitleFieldName;
  }

  // field_mappings - computed: true, optional: true, required: false
  private _fieldMappings = new KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappingsList(this, "field_mappings", false);
  public get fieldMappings() {
    return this._fieldMappings;
  }
  public putFieldMappings(value: KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappings[] | cdktn.IResolvable) {
    this._fieldMappings.internalValue = value;
  }
  public resetFieldMappings() {
    this._fieldMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldMappingsInput() {
    return this._fieldMappings.internalValue;
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

export class KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsList extends cdktn.ComplexList {
  public internalValue? : KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurations[] | cdktn.IResolvable

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
  public get(index: number): KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsOutputReference {
    return new KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KendraDataSourceDataSourceConfigurationSalesforceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#chatter_feed_configuration KendraDataSource#chatter_feed_configuration}
  */
  readonly chatterFeedConfiguration?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#crawl_attachments KendraDataSource#crawl_attachments}
  */
  readonly crawlAttachments?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#exclude_attachment_file_patterns KendraDataSource#exclude_attachment_file_patterns}
  */
  readonly excludeAttachmentFilePatterns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#include_attachment_file_patterns KendraDataSource#include_attachment_file_patterns}
  */
  readonly includeAttachmentFilePatterns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#knowledge_article_configuration KendraDataSource#knowledge_article_configuration}
  */
  readonly knowledgeArticleConfiguration?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#secret_arn KendraDataSource#secret_arn}
  */
  readonly secretArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#server_url KendraDataSource#server_url}
  */
  readonly serverUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#standard_object_attachment_configuration KendraDataSource#standard_object_attachment_configuration}
  */
  readonly standardObjectAttachmentConfiguration?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#standard_object_configurations KendraDataSource#standard_object_configurations}
  */
  readonly standardObjectConfigurations?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurations[] | cdktn.IResolvable;
}

export function kendraDataSourceDataSourceConfigurationSalesforceConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    chatter_feed_configuration: kendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationToTerraform(struct!.chatterFeedConfiguration),
    crawl_attachments: cdktn.booleanToTerraform(struct!.crawlAttachments),
    exclude_attachment_file_patterns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludeAttachmentFilePatterns),
    include_attachment_file_patterns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includeAttachmentFilePatterns),
    knowledge_article_configuration: kendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationToTerraform(struct!.knowledgeArticleConfiguration),
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    server_url: cdktn.stringToTerraform(struct!.serverUrl),
    standard_object_attachment_configuration: kendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationToTerraform(struct!.standardObjectAttachmentConfiguration),
    standard_object_configurations: cdktn.listMapper(kendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsToTerraform, false)(struct!.standardObjectConfigurations),
  }
}


export function kendraDataSourceDataSourceConfigurationSalesforceConfigurationToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    chatter_feed_configuration: {
      value: kendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationToHclTerraform(struct!.chatterFeedConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfiguration",
    },
    crawl_attachments: {
      value: cdktn.booleanToHclTerraform(struct!.crawlAttachments),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude_attachment_file_patterns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludeAttachmentFilePatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_attachment_file_patterns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includeAttachmentFilePatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    knowledge_article_configuration: {
      value: kendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationToHclTerraform(struct!.knowledgeArticleConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfiguration",
    },
    secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_url: {
      value: cdktn.stringToHclTerraform(struct!.serverUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    standard_object_attachment_configuration: {
      value: kendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationToHclTerraform(struct!.standardObjectAttachmentConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfiguration",
    },
    standard_object_configurations: {
      value: cdktn.listMapperHcl(kendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsToHclTerraform, false)(struct!.standardObjectConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationSalesforceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceDataSourceConfigurationSalesforceConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chatterFeedConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chatterFeedConfiguration = this._chatterFeedConfiguration?.internalValue;
    }
    if (this._crawlAttachments !== undefined) {
      hasAnyValues = true;
      internalValueResult.crawlAttachments = this._crawlAttachments;
    }
    if (this._excludeAttachmentFilePatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeAttachmentFilePatterns = this._excludeAttachmentFilePatterns;
    }
    if (this._includeAttachmentFilePatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeAttachmentFilePatterns = this._includeAttachmentFilePatterns;
    }
    if (this._knowledgeArticleConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.knowledgeArticleConfiguration = this._knowledgeArticleConfiguration?.internalValue;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    if (this._serverUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverUrl = this._serverUrl;
    }
    if (this._standardObjectAttachmentConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardObjectAttachmentConfiguration = this._standardObjectAttachmentConfiguration?.internalValue;
    }
    if (this._standardObjectConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardObjectConfigurations = this._standardObjectConfigurations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationSalesforceConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chatterFeedConfiguration.internalValue = undefined;
      this._crawlAttachments = undefined;
      this._excludeAttachmentFilePatterns = undefined;
      this._includeAttachmentFilePatterns = undefined;
      this._knowledgeArticleConfiguration.internalValue = undefined;
      this._secretArn = undefined;
      this._serverUrl = undefined;
      this._standardObjectAttachmentConfiguration.internalValue = undefined;
      this._standardObjectConfigurations.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chatterFeedConfiguration.internalValue = value.chatterFeedConfiguration;
      this._crawlAttachments = value.crawlAttachments;
      this._excludeAttachmentFilePatterns = value.excludeAttachmentFilePatterns;
      this._includeAttachmentFilePatterns = value.includeAttachmentFilePatterns;
      this._knowledgeArticleConfiguration.internalValue = value.knowledgeArticleConfiguration;
      this._secretArn = value.secretArn;
      this._serverUrl = value.serverUrl;
      this._standardObjectAttachmentConfiguration.internalValue = value.standardObjectAttachmentConfiguration;
      this._standardObjectConfigurations.internalValue = value.standardObjectConfigurations;
    }
  }

  // chatter_feed_configuration - computed: true, optional: true, required: false
  private _chatterFeedConfiguration = new KendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationOutputReference(this, "chatter_feed_configuration");
  public get chatterFeedConfiguration() {
    return this._chatterFeedConfiguration;
  }
  public putChatterFeedConfiguration(value: KendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfiguration) {
    this._chatterFeedConfiguration.internalValue = value;
  }
  public resetChatterFeedConfiguration() {
    this._chatterFeedConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chatterFeedConfigurationInput() {
    return this._chatterFeedConfiguration.internalValue;
  }

  // crawl_attachments - computed: true, optional: true, required: false
  private _crawlAttachments?: boolean | cdktn.IResolvable;
  public get crawlAttachments() {
    return this.getBooleanAttribute('crawl_attachments');
  }
  public set crawlAttachments(value: boolean | cdktn.IResolvable) {
    this._crawlAttachments = value;
  }
  public resetCrawlAttachments() {
    this._crawlAttachments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlAttachmentsInput() {
    return this._crawlAttachments;
  }

  // exclude_attachment_file_patterns - computed: true, optional: true, required: false
  private _excludeAttachmentFilePatterns?: string[];
  public get excludeAttachmentFilePatterns() {
    return this.getListAttribute('exclude_attachment_file_patterns');
  }
  public set excludeAttachmentFilePatterns(value: string[]) {
    this._excludeAttachmentFilePatterns = value;
  }
  public resetExcludeAttachmentFilePatterns() {
    this._excludeAttachmentFilePatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeAttachmentFilePatternsInput() {
    return this._excludeAttachmentFilePatterns;
  }

  // include_attachment_file_patterns - computed: true, optional: true, required: false
  private _includeAttachmentFilePatterns?: string[];
  public get includeAttachmentFilePatterns() {
    return this.getListAttribute('include_attachment_file_patterns');
  }
  public set includeAttachmentFilePatterns(value: string[]) {
    this._includeAttachmentFilePatterns = value;
  }
  public resetIncludeAttachmentFilePatterns() {
    this._includeAttachmentFilePatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAttachmentFilePatternsInput() {
    return this._includeAttachmentFilePatterns;
  }

  // knowledge_article_configuration - computed: true, optional: true, required: false
  private _knowledgeArticleConfiguration = new KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationOutputReference(this, "knowledge_article_configuration");
  public get knowledgeArticleConfiguration() {
    return this._knowledgeArticleConfiguration;
  }
  public putKnowledgeArticleConfiguration(value: KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfiguration) {
    this._knowledgeArticleConfiguration.internalValue = value;
  }
  public resetKnowledgeArticleConfiguration() {
    this._knowledgeArticleConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeArticleConfigurationInput() {
    return this._knowledgeArticleConfiguration.internalValue;
  }

  // secret_arn - computed: true, optional: true, required: false
  private _secretArn?: string;
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }

  // server_url - computed: true, optional: true, required: false
  private _serverUrl?: string;
  public get serverUrl() {
    return this.getStringAttribute('server_url');
  }
  public set serverUrl(value: string) {
    this._serverUrl = value;
  }
  public resetServerUrl() {
    this._serverUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverUrlInput() {
    return this._serverUrl;
  }

  // standard_object_attachment_configuration - computed: true, optional: true, required: false
  private _standardObjectAttachmentConfiguration = new KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationOutputReference(this, "standard_object_attachment_configuration");
  public get standardObjectAttachmentConfiguration() {
    return this._standardObjectAttachmentConfiguration;
  }
  public putStandardObjectAttachmentConfiguration(value: KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfiguration) {
    this._standardObjectAttachmentConfiguration.internalValue = value;
  }
  public resetStandardObjectAttachmentConfiguration() {
    this._standardObjectAttachmentConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardObjectAttachmentConfigurationInput() {
    return this._standardObjectAttachmentConfiguration.internalValue;
  }

  // standard_object_configurations - computed: true, optional: true, required: false
  private _standardObjectConfigurations = new KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsList(this, "standard_object_configurations", false);
  public get standardObjectConfigurations() {
    return this._standardObjectConfigurations;
  }
  public putStandardObjectConfigurations(value: KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurations[] | cdktn.IResolvable) {
    this._standardObjectConfigurations.internalValue = value;
  }
  public resetStandardObjectConfigurations() {
    this._standardObjectConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardObjectConfigurationsInput() {
    return this._standardObjectConfigurations.internalValue;
  }
}
export interface KendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#data_source_field_name KendraDataSource#data_source_field_name}
  */
  readonly dataSourceFieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#date_field_format KendraDataSource#date_field_format}
  */
  readonly dateFieldFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#index_field_name KendraDataSource#index_field_name}
  */
  readonly indexFieldName?: string;
}

export function kendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source_field_name: cdktn.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktn.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktn.stringToTerraform(struct!.indexFieldName),
  }
}


export function kendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappingsToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_source_field_name: {
      value: cdktn.stringToHclTerraform(struct!.dataSourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_field_format: {
      value: cdktn.stringToHclTerraform(struct!.dateFieldFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_field_name: {
      value: cdktn.stringToHclTerraform(struct!.indexFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceFieldName = this._dataSourceFieldName;
    }
    if (this._dateFieldFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateFieldFormat = this._dateFieldFormat;
    }
    if (this._indexFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexFieldName = this._indexFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSourceFieldName = undefined;
      this._dateFieldFormat = undefined;
      this._indexFieldName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSourceFieldName = value.dataSourceFieldName;
      this._dateFieldFormat = value.dateFieldFormat;
      this._indexFieldName = value.indexFieldName;
    }
  }

  // data_source_field_name - computed: true, optional: true, required: false
  private _dataSourceFieldName?: string;
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }
  public set dataSourceFieldName(value: string) {
    this._dataSourceFieldName = value;
  }
  public resetDataSourceFieldName() {
    this._dataSourceFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceFieldNameInput() {
    return this._dataSourceFieldName;
  }

  // date_field_format - computed: true, optional: true, required: false
  private _dateFieldFormat?: string;
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }
  public set dateFieldFormat(value: string) {
    this._dateFieldFormat = value;
  }
  public resetDateFieldFormat() {
    this._dateFieldFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateFieldFormatInput() {
    return this._dateFieldFormat;
  }

  // index_field_name - computed: true, optional: true, required: false
  private _indexFieldName?: string;
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
  public set indexFieldName(value: string) {
    this._indexFieldName = value;
  }
  public resetIndexFieldName() {
    this._indexFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexFieldNameInput() {
    return this._indexFieldName;
  }
}

export class KendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappingsList extends cdktn.ComplexList {
  public internalValue? : KendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappings[] | cdktn.IResolvable

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
  public get(index: number): KendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappingsOutputReference {
    return new KendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#crawl_attachments KendraDataSource#crawl_attachments}
  */
  readonly crawlAttachments?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#document_data_field_name KendraDataSource#document_data_field_name}
  */
  readonly documentDataFieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#document_title_field_name KendraDataSource#document_title_field_name}
  */
  readonly documentTitleFieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#exclude_attachment_file_patterns KendraDataSource#exclude_attachment_file_patterns}
  */
  readonly excludeAttachmentFilePatterns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#field_mappings KendraDataSource#field_mappings}
  */
  readonly fieldMappings?: KendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappings[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#filter_query KendraDataSource#filter_query}
  */
  readonly filterQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#include_attachment_file_patterns KendraDataSource#include_attachment_file_patterns}
  */
  readonly includeAttachmentFilePatterns?: string[];
}

export function kendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    crawl_attachments: cdktn.booleanToTerraform(struct!.crawlAttachments),
    document_data_field_name: cdktn.stringToTerraform(struct!.documentDataFieldName),
    document_title_field_name: cdktn.stringToTerraform(struct!.documentTitleFieldName),
    exclude_attachment_file_patterns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludeAttachmentFilePatterns),
    field_mappings: cdktn.listMapper(kendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappingsToTerraform, false)(struct!.fieldMappings),
    filter_query: cdktn.stringToTerraform(struct!.filterQuery),
    include_attachment_file_patterns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includeAttachmentFilePatterns),
  }
}


export function kendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    crawl_attachments: {
      value: cdktn.booleanToHclTerraform(struct!.crawlAttachments),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    document_data_field_name: {
      value: cdktn.stringToHclTerraform(struct!.documentDataFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    document_title_field_name: {
      value: cdktn.stringToHclTerraform(struct!.documentTitleFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_attachment_file_patterns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludeAttachmentFilePatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    field_mappings: {
      value: cdktn.listMapperHcl(kendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappingsToHclTerraform, false)(struct!.fieldMappings),
      isBlock: true,
      type: "list",
      storageClassType: "KendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappingsList",
    },
    filter_query: {
      value: cdktn.stringToHclTerraform(struct!.filterQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_attachment_file_patterns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includeAttachmentFilePatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crawlAttachments !== undefined) {
      hasAnyValues = true;
      internalValueResult.crawlAttachments = this._crawlAttachments;
    }
    if (this._documentDataFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentDataFieldName = this._documentDataFieldName;
    }
    if (this._documentTitleFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentTitleFieldName = this._documentTitleFieldName;
    }
    if (this._excludeAttachmentFilePatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeAttachmentFilePatterns = this._excludeAttachmentFilePatterns;
    }
    if (this._fieldMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldMappings = this._fieldMappings?.internalValue;
    }
    if (this._filterQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterQuery = this._filterQuery;
    }
    if (this._includeAttachmentFilePatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeAttachmentFilePatterns = this._includeAttachmentFilePatterns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crawlAttachments = undefined;
      this._documentDataFieldName = undefined;
      this._documentTitleFieldName = undefined;
      this._excludeAttachmentFilePatterns = undefined;
      this._fieldMappings.internalValue = undefined;
      this._filterQuery = undefined;
      this._includeAttachmentFilePatterns = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crawlAttachments = value.crawlAttachments;
      this._documentDataFieldName = value.documentDataFieldName;
      this._documentTitleFieldName = value.documentTitleFieldName;
      this._excludeAttachmentFilePatterns = value.excludeAttachmentFilePatterns;
      this._fieldMappings.internalValue = value.fieldMappings;
      this._filterQuery = value.filterQuery;
      this._includeAttachmentFilePatterns = value.includeAttachmentFilePatterns;
    }
  }

  // crawl_attachments - computed: true, optional: true, required: false
  private _crawlAttachments?: boolean | cdktn.IResolvable;
  public get crawlAttachments() {
    return this.getBooleanAttribute('crawl_attachments');
  }
  public set crawlAttachments(value: boolean | cdktn.IResolvable) {
    this._crawlAttachments = value;
  }
  public resetCrawlAttachments() {
    this._crawlAttachments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlAttachmentsInput() {
    return this._crawlAttachments;
  }

  // document_data_field_name - computed: true, optional: true, required: false
  private _documentDataFieldName?: string;
  public get documentDataFieldName() {
    return this.getStringAttribute('document_data_field_name');
  }
  public set documentDataFieldName(value: string) {
    this._documentDataFieldName = value;
  }
  public resetDocumentDataFieldName() {
    this._documentDataFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentDataFieldNameInput() {
    return this._documentDataFieldName;
  }

  // document_title_field_name - computed: true, optional: true, required: false
  private _documentTitleFieldName?: string;
  public get documentTitleFieldName() {
    return this.getStringAttribute('document_title_field_name');
  }
  public set documentTitleFieldName(value: string) {
    this._documentTitleFieldName = value;
  }
  public resetDocumentTitleFieldName() {
    this._documentTitleFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentTitleFieldNameInput() {
    return this._documentTitleFieldName;
  }

  // exclude_attachment_file_patterns - computed: true, optional: true, required: false
  private _excludeAttachmentFilePatterns?: string[];
  public get excludeAttachmentFilePatterns() {
    return this.getListAttribute('exclude_attachment_file_patterns');
  }
  public set excludeAttachmentFilePatterns(value: string[]) {
    this._excludeAttachmentFilePatterns = value;
  }
  public resetExcludeAttachmentFilePatterns() {
    this._excludeAttachmentFilePatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeAttachmentFilePatternsInput() {
    return this._excludeAttachmentFilePatterns;
  }

  // field_mappings - computed: true, optional: true, required: false
  private _fieldMappings = new KendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappingsList(this, "field_mappings", false);
  public get fieldMappings() {
    return this._fieldMappings;
  }
  public putFieldMappings(value: KendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappings[] | cdktn.IResolvable) {
    this._fieldMappings.internalValue = value;
  }
  public resetFieldMappings() {
    this._fieldMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldMappingsInput() {
    return this._fieldMappings.internalValue;
  }

  // filter_query - computed: true, optional: true, required: false
  private _filterQuery?: string;
  public get filterQuery() {
    return this.getStringAttribute('filter_query');
  }
  public set filterQuery(value: string) {
    this._filterQuery = value;
  }
  public resetFilterQuery() {
    this._filterQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterQueryInput() {
    return this._filterQuery;
  }

  // include_attachment_file_patterns - computed: true, optional: true, required: false
  private _includeAttachmentFilePatterns?: string[];
  public get includeAttachmentFilePatterns() {
    return this.getListAttribute('include_attachment_file_patterns');
  }
  public set includeAttachmentFilePatterns(value: string[]) {
    this._includeAttachmentFilePatterns = value;
  }
  public resetIncludeAttachmentFilePatterns() {
    this._includeAttachmentFilePatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAttachmentFilePatternsInput() {
    return this._includeAttachmentFilePatterns;
  }
}
export interface KendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#data_source_field_name KendraDataSource#data_source_field_name}
  */
  readonly dataSourceFieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#date_field_format KendraDataSource#date_field_format}
  */
  readonly dateFieldFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#index_field_name KendraDataSource#index_field_name}
  */
  readonly indexFieldName?: string;
}

export function kendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source_field_name: cdktn.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktn.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktn.stringToTerraform(struct!.indexFieldName),
  }
}


export function kendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappingsToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_source_field_name: {
      value: cdktn.stringToHclTerraform(struct!.dataSourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_field_format: {
      value: cdktn.stringToHclTerraform(struct!.dateFieldFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_field_name: {
      value: cdktn.stringToHclTerraform(struct!.indexFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceFieldName = this._dataSourceFieldName;
    }
    if (this._dateFieldFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateFieldFormat = this._dateFieldFormat;
    }
    if (this._indexFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexFieldName = this._indexFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSourceFieldName = undefined;
      this._dateFieldFormat = undefined;
      this._indexFieldName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSourceFieldName = value.dataSourceFieldName;
      this._dateFieldFormat = value.dateFieldFormat;
      this._indexFieldName = value.indexFieldName;
    }
  }

  // data_source_field_name - computed: true, optional: true, required: false
  private _dataSourceFieldName?: string;
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }
  public set dataSourceFieldName(value: string) {
    this._dataSourceFieldName = value;
  }
  public resetDataSourceFieldName() {
    this._dataSourceFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceFieldNameInput() {
    return this._dataSourceFieldName;
  }

  // date_field_format - computed: true, optional: true, required: false
  private _dateFieldFormat?: string;
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }
  public set dateFieldFormat(value: string) {
    this._dateFieldFormat = value;
  }
  public resetDateFieldFormat() {
    this._dateFieldFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateFieldFormatInput() {
    return this._dateFieldFormat;
  }

  // index_field_name - computed: true, optional: true, required: false
  private _indexFieldName?: string;
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
  public set indexFieldName(value: string) {
    this._indexFieldName = value;
  }
  public resetIndexFieldName() {
    this._indexFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexFieldNameInput() {
    return this._indexFieldName;
  }
}

export class KendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappingsList extends cdktn.ComplexList {
  public internalValue? : KendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappings[] | cdktn.IResolvable

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
  public get(index: number): KendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappingsOutputReference {
    return new KendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#crawl_attachments KendraDataSource#crawl_attachments}
  */
  readonly crawlAttachments?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#document_data_field_name KendraDataSource#document_data_field_name}
  */
  readonly documentDataFieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#document_title_field_name KendraDataSource#document_title_field_name}
  */
  readonly documentTitleFieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#exclude_attachment_file_patterns KendraDataSource#exclude_attachment_file_patterns}
  */
  readonly excludeAttachmentFilePatterns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#field_mappings KendraDataSource#field_mappings}
  */
  readonly fieldMappings?: KendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappings[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#include_attachment_file_patterns KendraDataSource#include_attachment_file_patterns}
  */
  readonly includeAttachmentFilePatterns?: string[];
}

export function kendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    crawl_attachments: cdktn.booleanToTerraform(struct!.crawlAttachments),
    document_data_field_name: cdktn.stringToTerraform(struct!.documentDataFieldName),
    document_title_field_name: cdktn.stringToTerraform(struct!.documentTitleFieldName),
    exclude_attachment_file_patterns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludeAttachmentFilePatterns),
    field_mappings: cdktn.listMapper(kendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappingsToTerraform, false)(struct!.fieldMappings),
    include_attachment_file_patterns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includeAttachmentFilePatterns),
  }
}


export function kendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    crawl_attachments: {
      value: cdktn.booleanToHclTerraform(struct!.crawlAttachments),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    document_data_field_name: {
      value: cdktn.stringToHclTerraform(struct!.documentDataFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    document_title_field_name: {
      value: cdktn.stringToHclTerraform(struct!.documentTitleFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_attachment_file_patterns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludeAttachmentFilePatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    field_mappings: {
      value: cdktn.listMapperHcl(kendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappingsToHclTerraform, false)(struct!.fieldMappings),
      isBlock: true,
      type: "list",
      storageClassType: "KendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappingsList",
    },
    include_attachment_file_patterns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includeAttachmentFilePatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crawlAttachments !== undefined) {
      hasAnyValues = true;
      internalValueResult.crawlAttachments = this._crawlAttachments;
    }
    if (this._documentDataFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentDataFieldName = this._documentDataFieldName;
    }
    if (this._documentTitleFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentTitleFieldName = this._documentTitleFieldName;
    }
    if (this._excludeAttachmentFilePatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeAttachmentFilePatterns = this._excludeAttachmentFilePatterns;
    }
    if (this._fieldMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldMappings = this._fieldMappings?.internalValue;
    }
    if (this._includeAttachmentFilePatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeAttachmentFilePatterns = this._includeAttachmentFilePatterns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crawlAttachments = undefined;
      this._documentDataFieldName = undefined;
      this._documentTitleFieldName = undefined;
      this._excludeAttachmentFilePatterns = undefined;
      this._fieldMappings.internalValue = undefined;
      this._includeAttachmentFilePatterns = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crawlAttachments = value.crawlAttachments;
      this._documentDataFieldName = value.documentDataFieldName;
      this._documentTitleFieldName = value.documentTitleFieldName;
      this._excludeAttachmentFilePatterns = value.excludeAttachmentFilePatterns;
      this._fieldMappings.internalValue = value.fieldMappings;
      this._includeAttachmentFilePatterns = value.includeAttachmentFilePatterns;
    }
  }

  // crawl_attachments - computed: true, optional: true, required: false
  private _crawlAttachments?: boolean | cdktn.IResolvable;
  public get crawlAttachments() {
    return this.getBooleanAttribute('crawl_attachments');
  }
  public set crawlAttachments(value: boolean | cdktn.IResolvable) {
    this._crawlAttachments = value;
  }
  public resetCrawlAttachments() {
    this._crawlAttachments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlAttachmentsInput() {
    return this._crawlAttachments;
  }

  // document_data_field_name - computed: true, optional: true, required: false
  private _documentDataFieldName?: string;
  public get documentDataFieldName() {
    return this.getStringAttribute('document_data_field_name');
  }
  public set documentDataFieldName(value: string) {
    this._documentDataFieldName = value;
  }
  public resetDocumentDataFieldName() {
    this._documentDataFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentDataFieldNameInput() {
    return this._documentDataFieldName;
  }

  // document_title_field_name - computed: true, optional: true, required: false
  private _documentTitleFieldName?: string;
  public get documentTitleFieldName() {
    return this.getStringAttribute('document_title_field_name');
  }
  public set documentTitleFieldName(value: string) {
    this._documentTitleFieldName = value;
  }
  public resetDocumentTitleFieldName() {
    this._documentTitleFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentTitleFieldNameInput() {
    return this._documentTitleFieldName;
  }

  // exclude_attachment_file_patterns - computed: true, optional: true, required: false
  private _excludeAttachmentFilePatterns?: string[];
  public get excludeAttachmentFilePatterns() {
    return this.getListAttribute('exclude_attachment_file_patterns');
  }
  public set excludeAttachmentFilePatterns(value: string[]) {
    this._excludeAttachmentFilePatterns = value;
  }
  public resetExcludeAttachmentFilePatterns() {
    this._excludeAttachmentFilePatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeAttachmentFilePatternsInput() {
    return this._excludeAttachmentFilePatterns;
  }

  // field_mappings - computed: true, optional: true, required: false
  private _fieldMappings = new KendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappingsList(this, "field_mappings", false);
  public get fieldMappings() {
    return this._fieldMappings;
  }
  public putFieldMappings(value: KendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappings[] | cdktn.IResolvable) {
    this._fieldMappings.internalValue = value;
  }
  public resetFieldMappings() {
    this._fieldMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldMappingsInput() {
    return this._fieldMappings.internalValue;
  }

  // include_attachment_file_patterns - computed: true, optional: true, required: false
  private _includeAttachmentFilePatterns?: string[];
  public get includeAttachmentFilePatterns() {
    return this.getListAttribute('include_attachment_file_patterns');
  }
  public set includeAttachmentFilePatterns(value: string[]) {
    this._includeAttachmentFilePatterns = value;
  }
  public resetIncludeAttachmentFilePatterns() {
    this._includeAttachmentFilePatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAttachmentFilePatternsInput() {
    return this._includeAttachmentFilePatterns;
  }
}
export interface KendraDataSourceDataSourceConfigurationServiceNowConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#authentication_type KendraDataSource#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#host_url KendraDataSource#host_url}
  */
  readonly hostUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#knowledge_article_configuration KendraDataSource#knowledge_article_configuration}
  */
  readonly knowledgeArticleConfiguration?: KendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#secret_arn KendraDataSource#secret_arn}
  */
  readonly secretArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#service_catalog_configuration KendraDataSource#service_catalog_configuration}
  */
  readonly serviceCatalogConfiguration?: KendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#service_now_build_version KendraDataSource#service_now_build_version}
  */
  readonly serviceNowBuildVersion?: string;
}

export function kendraDataSourceDataSourceConfigurationServiceNowConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationServiceNowConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication_type: cdktn.stringToTerraform(struct!.authenticationType),
    host_url: cdktn.stringToTerraform(struct!.hostUrl),
    knowledge_article_configuration: kendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationToTerraform(struct!.knowledgeArticleConfiguration),
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    service_catalog_configuration: kendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationToTerraform(struct!.serviceCatalogConfiguration),
    service_now_build_version: cdktn.stringToTerraform(struct!.serviceNowBuildVersion),
  }
}


export function kendraDataSourceDataSourceConfigurationServiceNowConfigurationToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationServiceNowConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication_type: {
      value: cdktn.stringToHclTerraform(struct!.authenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_url: {
      value: cdktn.stringToHclTerraform(struct!.hostUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    knowledge_article_configuration: {
      value: kendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationToHclTerraform(struct!.knowledgeArticleConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfiguration",
    },
    secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_catalog_configuration: {
      value: kendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationToHclTerraform(struct!.serviceCatalogConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfiguration",
    },
    service_now_build_version: {
      value: cdktn.stringToHclTerraform(struct!.serviceNowBuildVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationServiceNowConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceDataSourceConfigurationServiceNowConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType;
    }
    if (this._hostUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostUrl = this._hostUrl;
    }
    if (this._knowledgeArticleConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.knowledgeArticleConfiguration = this._knowledgeArticleConfiguration?.internalValue;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    if (this._serviceCatalogConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceCatalogConfiguration = this._serviceCatalogConfiguration?.internalValue;
    }
    if (this._serviceNowBuildVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNowBuildVersion = this._serviceNowBuildVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationServiceNowConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationType = undefined;
      this._hostUrl = undefined;
      this._knowledgeArticleConfiguration.internalValue = undefined;
      this._secretArn = undefined;
      this._serviceCatalogConfiguration.internalValue = undefined;
      this._serviceNowBuildVersion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationType = value.authenticationType;
      this._hostUrl = value.hostUrl;
      this._knowledgeArticleConfiguration.internalValue = value.knowledgeArticleConfiguration;
      this._secretArn = value.secretArn;
      this._serviceCatalogConfiguration.internalValue = value.serviceCatalogConfiguration;
      this._serviceNowBuildVersion = value.serviceNowBuildVersion;
    }
  }

  // authentication_type - computed: true, optional: true, required: false
  private _authenticationType?: string;
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  public resetAuthenticationType() {
    this._authenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // host_url - computed: true, optional: true, required: false
  private _hostUrl?: string;
  public get hostUrl() {
    return this.getStringAttribute('host_url');
  }
  public set hostUrl(value: string) {
    this._hostUrl = value;
  }
  public resetHostUrl() {
    this._hostUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostUrlInput() {
    return this._hostUrl;
  }

  // knowledge_article_configuration - computed: true, optional: true, required: false
  private _knowledgeArticleConfiguration = new KendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationOutputReference(this, "knowledge_article_configuration");
  public get knowledgeArticleConfiguration() {
    return this._knowledgeArticleConfiguration;
  }
  public putKnowledgeArticleConfiguration(value: KendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfiguration) {
    this._knowledgeArticleConfiguration.internalValue = value;
  }
  public resetKnowledgeArticleConfiguration() {
    this._knowledgeArticleConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeArticleConfigurationInput() {
    return this._knowledgeArticleConfiguration.internalValue;
  }

  // secret_arn - computed: true, optional: true, required: false
  private _secretArn?: string;
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }

  // service_catalog_configuration - computed: true, optional: true, required: false
  private _serviceCatalogConfiguration = new KendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationOutputReference(this, "service_catalog_configuration");
  public get serviceCatalogConfiguration() {
    return this._serviceCatalogConfiguration;
  }
  public putServiceCatalogConfiguration(value: KendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfiguration) {
    this._serviceCatalogConfiguration.internalValue = value;
  }
  public resetServiceCatalogConfiguration() {
    this._serviceCatalogConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCatalogConfigurationInput() {
    return this._serviceCatalogConfiguration.internalValue;
  }

  // service_now_build_version - computed: true, optional: true, required: false
  private _serviceNowBuildVersion?: string;
  public get serviceNowBuildVersion() {
    return this.getStringAttribute('service_now_build_version');
  }
  public set serviceNowBuildVersion(value: string) {
    this._serviceNowBuildVersion = value;
  }
  public resetServiceNowBuildVersion() {
    this._serviceNowBuildVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNowBuildVersionInput() {
    return this._serviceNowBuildVersion;
  }
}
export interface KendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#data_source_field_name KendraDataSource#data_source_field_name}
  */
  readonly dataSourceFieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#date_field_format KendraDataSource#date_field_format}
  */
  readonly dateFieldFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#index_field_name KendraDataSource#index_field_name}
  */
  readonly indexFieldName?: string;
}

export function kendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source_field_name: cdktn.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktn.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktn.stringToTerraform(struct!.indexFieldName),
  }
}


export function kendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappingsToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_source_field_name: {
      value: cdktn.stringToHclTerraform(struct!.dataSourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_field_format: {
      value: cdktn.stringToHclTerraform(struct!.dateFieldFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_field_name: {
      value: cdktn.stringToHclTerraform(struct!.indexFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceFieldName = this._dataSourceFieldName;
    }
    if (this._dateFieldFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateFieldFormat = this._dateFieldFormat;
    }
    if (this._indexFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexFieldName = this._indexFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSourceFieldName = undefined;
      this._dateFieldFormat = undefined;
      this._indexFieldName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSourceFieldName = value.dataSourceFieldName;
      this._dateFieldFormat = value.dateFieldFormat;
      this._indexFieldName = value.indexFieldName;
    }
  }

  // data_source_field_name - computed: true, optional: true, required: false
  private _dataSourceFieldName?: string;
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }
  public set dataSourceFieldName(value: string) {
    this._dataSourceFieldName = value;
  }
  public resetDataSourceFieldName() {
    this._dataSourceFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceFieldNameInput() {
    return this._dataSourceFieldName;
  }

  // date_field_format - computed: true, optional: true, required: false
  private _dateFieldFormat?: string;
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }
  public set dateFieldFormat(value: string) {
    this._dateFieldFormat = value;
  }
  public resetDateFieldFormat() {
    this._dateFieldFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateFieldFormatInput() {
    return this._dateFieldFormat;
  }

  // index_field_name - computed: true, optional: true, required: false
  private _indexFieldName?: string;
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
  public set indexFieldName(value: string) {
    this._indexFieldName = value;
  }
  public resetIndexFieldName() {
    this._indexFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexFieldNameInput() {
    return this._indexFieldName;
  }
}

export class KendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappingsList extends cdktn.ComplexList {
  public internalValue? : KendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappings[] | cdktn.IResolvable

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
  public get(index: number): KendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappingsOutputReference {
    return new KendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KendraDataSourceDataSourceConfigurationSharePointConfigurationSslCertificateS3Path {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#bucket KendraDataSource#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#key KendraDataSource#key}
  */
  readonly key?: string;
}

export function kendraDataSourceDataSourceConfigurationSharePointConfigurationSslCertificateS3PathToTerraform(struct?: KendraDataSourceDataSourceConfigurationSharePointConfigurationSslCertificateS3Path | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    key: cdktn.stringToTerraform(struct!.key),
  }
}


export function kendraDataSourceDataSourceConfigurationSharePointConfigurationSslCertificateS3PathToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationSharePointConfigurationSslCertificateS3Path | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationSharePointConfigurationSslCertificateS3PathOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceDataSourceConfigurationSharePointConfigurationSslCertificateS3Path | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationSharePointConfigurationSslCertificateS3Path | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._key = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._key = value.key;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string;
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
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
}
export interface KendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#security_group_ids KendraDataSource#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#subnet_ids KendraDataSource#subnet_ids}
  */
  readonly subnetIds?: string[];
}

export function kendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function kendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfigurationToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
    }
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[];
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[];
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }
}
export interface KendraDataSourceDataSourceConfigurationSharePointConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#crawl_attachments KendraDataSource#crawl_attachments}
  */
  readonly crawlAttachments?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#disable_local_groups KendraDataSource#disable_local_groups}
  */
  readonly disableLocalGroups?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#document_title_field_name KendraDataSource#document_title_field_name}
  */
  readonly documentTitleFieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#exclusion_patterns KendraDataSource#exclusion_patterns}
  */
  readonly exclusionPatterns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#field_mappings KendraDataSource#field_mappings}
  */
  readonly fieldMappings?: KendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappings[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#inclusion_patterns KendraDataSource#inclusion_patterns}
  */
  readonly inclusionPatterns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#secret_arn KendraDataSource#secret_arn}
  */
  readonly secretArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#share_point_version KendraDataSource#share_point_version}
  */
  readonly sharePointVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#ssl_certificate_s3_path KendraDataSource#ssl_certificate_s3_path}
  */
  readonly sslCertificateS3Path?: KendraDataSourceDataSourceConfigurationSharePointConfigurationSslCertificateS3Path;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#urls KendraDataSource#urls}
  */
  readonly urls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#use_change_log KendraDataSource#use_change_log}
  */
  readonly useChangeLog?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#vpc_configuration KendraDataSource#vpc_configuration}
  */
  readonly vpcConfiguration?: KendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfiguration;
}

export function kendraDataSourceDataSourceConfigurationSharePointConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationSharePointConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    crawl_attachments: cdktn.booleanToTerraform(struct!.crawlAttachments),
    disable_local_groups: cdktn.booleanToTerraform(struct!.disableLocalGroups),
    document_title_field_name: cdktn.stringToTerraform(struct!.documentTitleFieldName),
    exclusion_patterns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclusionPatterns),
    field_mappings: cdktn.listMapper(kendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappingsToTerraform, false)(struct!.fieldMappings),
    inclusion_patterns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.inclusionPatterns),
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    share_point_version: cdktn.stringToTerraform(struct!.sharePointVersion),
    ssl_certificate_s3_path: kendraDataSourceDataSourceConfigurationSharePointConfigurationSslCertificateS3PathToTerraform(struct!.sslCertificateS3Path),
    urls: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.urls),
    use_change_log: cdktn.booleanToTerraform(struct!.useChangeLog),
    vpc_configuration: kendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfigurationToTerraform(struct!.vpcConfiguration),
  }
}


export function kendraDataSourceDataSourceConfigurationSharePointConfigurationToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationSharePointConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    crawl_attachments: {
      value: cdktn.booleanToHclTerraform(struct!.crawlAttachments),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_local_groups: {
      value: cdktn.booleanToHclTerraform(struct!.disableLocalGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    document_title_field_name: {
      value: cdktn.stringToHclTerraform(struct!.documentTitleFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclusion_patterns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exclusionPatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    field_mappings: {
      value: cdktn.listMapperHcl(kendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappingsToHclTerraform, false)(struct!.fieldMappings),
      isBlock: true,
      type: "list",
      storageClassType: "KendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappingsList",
    },
    inclusion_patterns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.inclusionPatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    share_point_version: {
      value: cdktn.stringToHclTerraform(struct!.sharePointVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_certificate_s3_path: {
      value: kendraDataSourceDataSourceConfigurationSharePointConfigurationSslCertificateS3PathToHclTerraform(struct!.sslCertificateS3Path),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceDataSourceConfigurationSharePointConfigurationSslCertificateS3Path",
    },
    urls: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.urls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    use_change_log: {
      value: cdktn.booleanToHclTerraform(struct!.useChangeLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vpc_configuration: {
      value: kendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfigurationToHclTerraform(struct!.vpcConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationSharePointConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceDataSourceConfigurationSharePointConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crawlAttachments !== undefined) {
      hasAnyValues = true;
      internalValueResult.crawlAttachments = this._crawlAttachments;
    }
    if (this._disableLocalGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableLocalGroups = this._disableLocalGroups;
    }
    if (this._documentTitleFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentTitleFieldName = this._documentTitleFieldName;
    }
    if (this._exclusionPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionPatterns = this._exclusionPatterns;
    }
    if (this._fieldMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldMappings = this._fieldMappings?.internalValue;
    }
    if (this._inclusionPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusionPatterns = this._inclusionPatterns;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    if (this._sharePointVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharePointVersion = this._sharePointVersion;
    }
    if (this._sslCertificateS3Path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCertificateS3Path = this._sslCertificateS3Path?.internalValue;
    }
    if (this._urls !== undefined) {
      hasAnyValues = true;
      internalValueResult.urls = this._urls;
    }
    if (this._useChangeLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.useChangeLog = this._useChangeLog;
    }
    if (this._vpcConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConfiguration = this._vpcConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationSharePointConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crawlAttachments = undefined;
      this._disableLocalGroups = undefined;
      this._documentTitleFieldName = undefined;
      this._exclusionPatterns = undefined;
      this._fieldMappings.internalValue = undefined;
      this._inclusionPatterns = undefined;
      this._secretArn = undefined;
      this._sharePointVersion = undefined;
      this._sslCertificateS3Path.internalValue = undefined;
      this._urls = undefined;
      this._useChangeLog = undefined;
      this._vpcConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crawlAttachments = value.crawlAttachments;
      this._disableLocalGroups = value.disableLocalGroups;
      this._documentTitleFieldName = value.documentTitleFieldName;
      this._exclusionPatterns = value.exclusionPatterns;
      this._fieldMappings.internalValue = value.fieldMappings;
      this._inclusionPatterns = value.inclusionPatterns;
      this._secretArn = value.secretArn;
      this._sharePointVersion = value.sharePointVersion;
      this._sslCertificateS3Path.internalValue = value.sslCertificateS3Path;
      this._urls = value.urls;
      this._useChangeLog = value.useChangeLog;
      this._vpcConfiguration.internalValue = value.vpcConfiguration;
    }
  }

  // crawl_attachments - computed: true, optional: true, required: false
  private _crawlAttachments?: boolean | cdktn.IResolvable;
  public get crawlAttachments() {
    return this.getBooleanAttribute('crawl_attachments');
  }
  public set crawlAttachments(value: boolean | cdktn.IResolvable) {
    this._crawlAttachments = value;
  }
  public resetCrawlAttachments() {
    this._crawlAttachments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlAttachmentsInput() {
    return this._crawlAttachments;
  }

  // disable_local_groups - computed: true, optional: true, required: false
  private _disableLocalGroups?: boolean | cdktn.IResolvable;
  public get disableLocalGroups() {
    return this.getBooleanAttribute('disable_local_groups');
  }
  public set disableLocalGroups(value: boolean | cdktn.IResolvable) {
    this._disableLocalGroups = value;
  }
  public resetDisableLocalGroups() {
    this._disableLocalGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableLocalGroupsInput() {
    return this._disableLocalGroups;
  }

  // document_title_field_name - computed: true, optional: true, required: false
  private _documentTitleFieldName?: string;
  public get documentTitleFieldName() {
    return this.getStringAttribute('document_title_field_name');
  }
  public set documentTitleFieldName(value: string) {
    this._documentTitleFieldName = value;
  }
  public resetDocumentTitleFieldName() {
    this._documentTitleFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentTitleFieldNameInput() {
    return this._documentTitleFieldName;
  }

  // exclusion_patterns - computed: true, optional: true, required: false
  private _exclusionPatterns?: string[];
  public get exclusionPatterns() {
    return this.getListAttribute('exclusion_patterns');
  }
  public set exclusionPatterns(value: string[]) {
    this._exclusionPatterns = value;
  }
  public resetExclusionPatterns() {
    this._exclusionPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionPatternsInput() {
    return this._exclusionPatterns;
  }

  // field_mappings - computed: true, optional: true, required: false
  private _fieldMappings = new KendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappingsList(this, "field_mappings", false);
  public get fieldMappings() {
    return this._fieldMappings;
  }
  public putFieldMappings(value: KendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappings[] | cdktn.IResolvable) {
    this._fieldMappings.internalValue = value;
  }
  public resetFieldMappings() {
    this._fieldMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldMappingsInput() {
    return this._fieldMappings.internalValue;
  }

  // inclusion_patterns - computed: true, optional: true, required: false
  private _inclusionPatterns?: string[];
  public get inclusionPatterns() {
    return this.getListAttribute('inclusion_patterns');
  }
  public set inclusionPatterns(value: string[]) {
    this._inclusionPatterns = value;
  }
  public resetInclusionPatterns() {
    this._inclusionPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionPatternsInput() {
    return this._inclusionPatterns;
  }

  // secret_arn - computed: true, optional: true, required: false
  private _secretArn?: string;
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }

  // share_point_version - computed: true, optional: true, required: false
  private _sharePointVersion?: string;
  public get sharePointVersion() {
    return this.getStringAttribute('share_point_version');
  }
  public set sharePointVersion(value: string) {
    this._sharePointVersion = value;
  }
  public resetSharePointVersion() {
    this._sharePointVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharePointVersionInput() {
    return this._sharePointVersion;
  }

  // ssl_certificate_s3_path - computed: true, optional: true, required: false
  private _sslCertificateS3Path = new KendraDataSourceDataSourceConfigurationSharePointConfigurationSslCertificateS3PathOutputReference(this, "ssl_certificate_s3_path");
  public get sslCertificateS3Path() {
    return this._sslCertificateS3Path;
  }
  public putSslCertificateS3Path(value: KendraDataSourceDataSourceConfigurationSharePointConfigurationSslCertificateS3Path) {
    this._sslCertificateS3Path.internalValue = value;
  }
  public resetSslCertificateS3Path() {
    this._sslCertificateS3Path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertificateS3PathInput() {
    return this._sslCertificateS3Path.internalValue;
  }

  // urls - computed: true, optional: true, required: false
  private _urls?: string[];
  public get urls() {
    return this.getListAttribute('urls');
  }
  public set urls(value: string[]) {
    this._urls = value;
  }
  public resetUrls() {
    this._urls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlsInput() {
    return this._urls;
  }

  // use_change_log - computed: true, optional: true, required: false
  private _useChangeLog?: boolean | cdktn.IResolvable;
  public get useChangeLog() {
    return this.getBooleanAttribute('use_change_log');
  }
  public set useChangeLog(value: boolean | cdktn.IResolvable) {
    this._useChangeLog = value;
  }
  public resetUseChangeLog() {
    this._useChangeLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useChangeLogInput() {
    return this._useChangeLog;
  }

  // vpc_configuration - computed: true, optional: true, required: false
  private _vpcConfiguration = new KendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfigurationOutputReference(this, "vpc_configuration");
  public get vpcConfiguration() {
    return this._vpcConfiguration;
  }
  public putVpcConfiguration(value: KendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfiguration) {
    this._vpcConfiguration.internalValue = value;
  }
  public resetVpcConfiguration() {
    this._vpcConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigurationInput() {
    return this._vpcConfiguration.internalValue;
  }
}
export interface KendraDataSourceDataSourceConfigurationTemplateConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#template KendraDataSource#template}
  */
  readonly template?: string;
}

export function kendraDataSourceDataSourceConfigurationTemplateConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationTemplateConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    template: cdktn.stringToTerraform(struct!.template),
  }
}


export function kendraDataSourceDataSourceConfigurationTemplateConfigurationToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationTemplateConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    template: {
      value: cdktn.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationTemplateConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceDataSourceConfigurationTemplateConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationTemplateConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._template = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._template = value.template;
    }
  }

  // template - computed: true, optional: true, required: false
  private _template?: string;
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}
export interface KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#credentials KendraDataSource#credentials}
  */
  readonly credentials?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#host KendraDataSource#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#port KendraDataSource#port}
  */
  readonly port?: number;
}

export function kendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationToTerraform(struct?: KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    credentials: cdktn.stringToTerraform(struct!.credentials),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function kendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    credentials: {
      value: cdktn.stringToHclTerraform(struct!.credentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentials = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentials = value.credentials;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // credentials - computed: true, optional: true, required: false
  private _credentials?: string;
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string;
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number;
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList extends cdktn.ComplexList {
  public internalValue? : KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication[] | cdktn.IResolvable

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
  public get(index: number): KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference {
    return new KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#basic_authentication KendraDataSource#basic_authentication}
  */
  readonly basicAuthentication?: KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication[] | cdktn.IResolvable;
}

export function kendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    basic_authentication: cdktn.listMapper(kendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationToTerraform, false)(struct!.basicAuthentication),
  }
}


export function kendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    basic_authentication: {
      value: cdktn.listMapperHcl(kendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationToHclTerraform, false)(struct!.basicAuthentication),
      isBlock: true,
      type: "list",
      storageClassType: "KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuthentication = this._basicAuthentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basicAuthentication.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basicAuthentication.internalValue = value.basicAuthentication;
    }
  }

  // basic_authentication - computed: true, optional: true, required: false
  private _basicAuthentication = new KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList(this, "basic_authentication", false);
  public get basicAuthentication() {
    return this._basicAuthentication;
  }
  public putBasicAuthentication(value: KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication[] | cdktn.IResolvable) {
    this._basicAuthentication.internalValue = value;
  }
  public resetBasicAuthentication() {
    this._basicAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthenticationInput() {
    return this._basicAuthentication.internalValue;
  }
}
export interface KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#credentials KendraDataSource#credentials}
  */
  readonly credentials?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#host KendraDataSource#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#port KendraDataSource#port}
  */
  readonly port?: number;
}

export function kendraDataSourceDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    credentials: cdktn.stringToTerraform(struct!.credentials),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function kendraDataSourceDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    credentials: {
      value: cdktn.stringToHclTerraform(struct!.credentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentials = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentials = value.credentials;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // credentials - computed: true, optional: true, required: false
  private _credentials?: string;
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string;
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number;
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#seed_urls KendraDataSource#seed_urls}
  */
  readonly seedUrls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#web_crawler_mode KendraDataSource#web_crawler_mode}
  */
  readonly webCrawlerMode?: string;
}

export function kendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    seed_urls: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.seedUrls),
    web_crawler_mode: cdktn.stringToTerraform(struct!.webCrawlerMode),
  }
}


export function kendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    seed_urls: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.seedUrls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    web_crawler_mode: {
      value: cdktn.stringToHclTerraform(struct!.webCrawlerMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._seedUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.seedUrls = this._seedUrls;
    }
    if (this._webCrawlerMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.webCrawlerMode = this._webCrawlerMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._seedUrls = undefined;
      this._webCrawlerMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._seedUrls = value.seedUrls;
      this._webCrawlerMode = value.webCrawlerMode;
    }
  }

  // seed_urls - computed: true, optional: true, required: false
  private _seedUrls?: string[];
  public get seedUrls() {
    return this.getListAttribute('seed_urls');
  }
  public set seedUrls(value: string[]) {
    this._seedUrls = value;
  }
  public resetSeedUrls() {
    this._seedUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seedUrlsInput() {
    return this._seedUrls;
  }

  // web_crawler_mode - computed: true, optional: true, required: false
  private _webCrawlerMode?: string;
  public get webCrawlerMode() {
    return this.getStringAttribute('web_crawler_mode');
  }
  public set webCrawlerMode(value: string) {
    this._webCrawlerMode = value;
  }
  public resetWebCrawlerMode() {
    this._webCrawlerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webCrawlerModeInput() {
    return this._webCrawlerMode;
  }
}
export interface KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#site_maps KendraDataSource#site_maps}
  */
  readonly siteMaps?: string[];
}

export function kendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    site_maps: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.siteMaps),
  }
}


export function kendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    site_maps: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.siteMaps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._siteMaps !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteMaps = this._siteMaps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._siteMaps = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._siteMaps = value.siteMaps;
    }
  }

  // site_maps - computed: true, optional: true, required: false
  private _siteMaps?: string[];
  public get siteMaps() {
    return this.getListAttribute('site_maps');
  }
  public set siteMaps(value: string[]) {
    this._siteMaps = value;
  }
  public resetSiteMaps() {
    this._siteMaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteMapsInput() {
    return this._siteMaps;
  }
}
export interface KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#seed_url_configuration KendraDataSource#seed_url_configuration}
  */
  readonly seedUrlConfiguration?: KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#site_maps_configuration KendraDataSource#site_maps_configuration}
  */
  readonly siteMapsConfiguration?: KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration;
}

export function kendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsToTerraform(struct?: KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    seed_url_configuration: kendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationToTerraform(struct!.seedUrlConfiguration),
    site_maps_configuration: kendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationToTerraform(struct!.siteMapsConfiguration),
  }
}


export function kendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    seed_url_configuration: {
      value: kendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationToHclTerraform(struct!.seedUrlConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration",
    },
    site_maps_configuration: {
      value: kendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationToHclTerraform(struct!.siteMapsConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrls | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._seedUrlConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seedUrlConfiguration = this._seedUrlConfiguration?.internalValue;
    }
    if (this._siteMapsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteMapsConfiguration = this._siteMapsConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrls | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._seedUrlConfiguration.internalValue = undefined;
      this._siteMapsConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._seedUrlConfiguration.internalValue = value.seedUrlConfiguration;
      this._siteMapsConfiguration.internalValue = value.siteMapsConfiguration;
    }
  }

  // seed_url_configuration - computed: true, optional: true, required: false
  private _seedUrlConfiguration = new KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference(this, "seed_url_configuration");
  public get seedUrlConfiguration() {
    return this._seedUrlConfiguration;
  }
  public putSeedUrlConfiguration(value: KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration) {
    this._seedUrlConfiguration.internalValue = value;
  }
  public resetSeedUrlConfiguration() {
    this._seedUrlConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seedUrlConfigurationInput() {
    return this._seedUrlConfiguration.internalValue;
  }

  // site_maps_configuration - computed: true, optional: true, required: false
  private _siteMapsConfiguration = new KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference(this, "site_maps_configuration");
  public get siteMapsConfiguration() {
    return this._siteMapsConfiguration;
  }
  public putSiteMapsConfiguration(value: KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration) {
    this._siteMapsConfiguration.internalValue = value;
  }
  public resetSiteMapsConfiguration() {
    this._siteMapsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteMapsConfigurationInput() {
    return this._siteMapsConfiguration.internalValue;
  }
}
export interface KendraDataSourceDataSourceConfigurationWebCrawlerConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#authentication_configuration KendraDataSource#authentication_configuration}
  */
  readonly authenticationConfiguration?: KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#crawl_depth KendraDataSource#crawl_depth}
  */
  readonly crawlDepth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#max_content_size_per_page_in_mega_bytes KendraDataSource#max_content_size_per_page_in_mega_bytes}
  */
  readonly maxContentSizePerPageInMegaBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#max_links_per_page KendraDataSource#max_links_per_page}
  */
  readonly maxLinksPerPage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#max_urls_per_minute_crawl_rate KendraDataSource#max_urls_per_minute_crawl_rate}
  */
  readonly maxUrlsPerMinuteCrawlRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#proxy_configuration KendraDataSource#proxy_configuration}
  */
  readonly proxyConfiguration?: KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#url_exclusion_patterns KendraDataSource#url_exclusion_patterns}
  */
  readonly urlExclusionPatterns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#url_inclusion_patterns KendraDataSource#url_inclusion_patterns}
  */
  readonly urlInclusionPatterns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#urls KendraDataSource#urls}
  */
  readonly urls?: KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrls;
}

export function kendraDataSourceDataSourceConfigurationWebCrawlerConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationWebCrawlerConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication_configuration: kendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationToTerraform(struct!.authenticationConfiguration),
    crawl_depth: cdktn.numberToTerraform(struct!.crawlDepth),
    max_content_size_per_page_in_mega_bytes: cdktn.numberToTerraform(struct!.maxContentSizePerPageInMegaBytes),
    max_links_per_page: cdktn.numberToTerraform(struct!.maxLinksPerPage),
    max_urls_per_minute_crawl_rate: cdktn.numberToTerraform(struct!.maxUrlsPerMinuteCrawlRate),
    proxy_configuration: kendraDataSourceDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationToTerraform(struct!.proxyConfiguration),
    url_exclusion_patterns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.urlExclusionPatterns),
    url_inclusion_patterns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.urlInclusionPatterns),
    urls: kendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsToTerraform(struct!.urls),
  }
}


export function kendraDataSourceDataSourceConfigurationWebCrawlerConfigurationToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationWebCrawlerConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication_configuration: {
      value: kendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationToHclTerraform(struct!.authenticationConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration",
    },
    crawl_depth: {
      value: cdktn.numberToHclTerraform(struct!.crawlDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_content_size_per_page_in_mega_bytes: {
      value: cdktn.numberToHclTerraform(struct!.maxContentSizePerPageInMegaBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_links_per_page: {
      value: cdktn.numberToHclTerraform(struct!.maxLinksPerPage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_urls_per_minute_crawl_rate: {
      value: cdktn.numberToHclTerraform(struct!.maxUrlsPerMinuteCrawlRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_configuration: {
      value: kendraDataSourceDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationToHclTerraform(struct!.proxyConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration",
    },
    url_exclusion_patterns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.urlExclusionPatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    url_inclusion_patterns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.urlInclusionPatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    urls: {
      value: kendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsToHclTerraform(struct!.urls),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceDataSourceConfigurationWebCrawlerConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationConfiguration = this._authenticationConfiguration?.internalValue;
    }
    if (this._crawlDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.crawlDepth = this._crawlDepth;
    }
    if (this._maxContentSizePerPageInMegaBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxContentSizePerPageInMegaBytes = this._maxContentSizePerPageInMegaBytes;
    }
    if (this._maxLinksPerPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLinksPerPage = this._maxLinksPerPage;
    }
    if (this._maxUrlsPerMinuteCrawlRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUrlsPerMinuteCrawlRate = this._maxUrlsPerMinuteCrawlRate;
    }
    if (this._proxyConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyConfiguration = this._proxyConfiguration?.internalValue;
    }
    if (this._urlExclusionPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlExclusionPatterns = this._urlExclusionPatterns;
    }
    if (this._urlInclusionPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlInclusionPatterns = this._urlInclusionPatterns;
    }
    if (this._urls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urls = this._urls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationWebCrawlerConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationConfiguration.internalValue = undefined;
      this._crawlDepth = undefined;
      this._maxContentSizePerPageInMegaBytes = undefined;
      this._maxLinksPerPage = undefined;
      this._maxUrlsPerMinuteCrawlRate = undefined;
      this._proxyConfiguration.internalValue = undefined;
      this._urlExclusionPatterns = undefined;
      this._urlInclusionPatterns = undefined;
      this._urls.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationConfiguration.internalValue = value.authenticationConfiguration;
      this._crawlDepth = value.crawlDepth;
      this._maxContentSizePerPageInMegaBytes = value.maxContentSizePerPageInMegaBytes;
      this._maxLinksPerPage = value.maxLinksPerPage;
      this._maxUrlsPerMinuteCrawlRate = value.maxUrlsPerMinuteCrawlRate;
      this._proxyConfiguration.internalValue = value.proxyConfiguration;
      this._urlExclusionPatterns = value.urlExclusionPatterns;
      this._urlInclusionPatterns = value.urlInclusionPatterns;
      this._urls.internalValue = value.urls;
    }
  }

  // authentication_configuration - computed: true, optional: true, required: false
  private _authenticationConfiguration = new KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference(this, "authentication_configuration");
  public get authenticationConfiguration() {
    return this._authenticationConfiguration;
  }
  public putAuthenticationConfiguration(value: KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration) {
    this._authenticationConfiguration.internalValue = value;
  }
  public resetAuthenticationConfiguration() {
    this._authenticationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationConfigurationInput() {
    return this._authenticationConfiguration.internalValue;
  }

  // crawl_depth - computed: true, optional: true, required: false
  private _crawlDepth?: number;
  public get crawlDepth() {
    return this.getNumberAttribute('crawl_depth');
  }
  public set crawlDepth(value: number) {
    this._crawlDepth = value;
  }
  public resetCrawlDepth() {
    this._crawlDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlDepthInput() {
    return this._crawlDepth;
  }

  // max_content_size_per_page_in_mega_bytes - computed: true, optional: true, required: false
  private _maxContentSizePerPageInMegaBytes?: number;
  public get maxContentSizePerPageInMegaBytes() {
    return this.getNumberAttribute('max_content_size_per_page_in_mega_bytes');
  }
  public set maxContentSizePerPageInMegaBytes(value: number) {
    this._maxContentSizePerPageInMegaBytes = value;
  }
  public resetMaxContentSizePerPageInMegaBytes() {
    this._maxContentSizePerPageInMegaBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxContentSizePerPageInMegaBytesInput() {
    return this._maxContentSizePerPageInMegaBytes;
  }

  // max_links_per_page - computed: true, optional: true, required: false
  private _maxLinksPerPage?: number;
  public get maxLinksPerPage() {
    return this.getNumberAttribute('max_links_per_page');
  }
  public set maxLinksPerPage(value: number) {
    this._maxLinksPerPage = value;
  }
  public resetMaxLinksPerPage() {
    this._maxLinksPerPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLinksPerPageInput() {
    return this._maxLinksPerPage;
  }

  // max_urls_per_minute_crawl_rate - computed: true, optional: true, required: false
  private _maxUrlsPerMinuteCrawlRate?: number;
  public get maxUrlsPerMinuteCrawlRate() {
    return this.getNumberAttribute('max_urls_per_minute_crawl_rate');
  }
  public set maxUrlsPerMinuteCrawlRate(value: number) {
    this._maxUrlsPerMinuteCrawlRate = value;
  }
  public resetMaxUrlsPerMinuteCrawlRate() {
    this._maxUrlsPerMinuteCrawlRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUrlsPerMinuteCrawlRateInput() {
    return this._maxUrlsPerMinuteCrawlRate;
  }

  // proxy_configuration - computed: true, optional: true, required: false
  private _proxyConfiguration = new KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference(this, "proxy_configuration");
  public get proxyConfiguration() {
    return this._proxyConfiguration;
  }
  public putProxyConfiguration(value: KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration) {
    this._proxyConfiguration.internalValue = value;
  }
  public resetProxyConfiguration() {
    this._proxyConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyConfigurationInput() {
    return this._proxyConfiguration.internalValue;
  }

  // url_exclusion_patterns - computed: true, optional: true, required: false
  private _urlExclusionPatterns?: string[];
  public get urlExclusionPatterns() {
    return this.getListAttribute('url_exclusion_patterns');
  }
  public set urlExclusionPatterns(value: string[]) {
    this._urlExclusionPatterns = value;
  }
  public resetUrlExclusionPatterns() {
    this._urlExclusionPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlExclusionPatternsInput() {
    return this._urlExclusionPatterns;
  }

  // url_inclusion_patterns - computed: true, optional: true, required: false
  private _urlInclusionPatterns?: string[];
  public get urlInclusionPatterns() {
    return this.getListAttribute('url_inclusion_patterns');
  }
  public set urlInclusionPatterns(value: string[]) {
    this._urlInclusionPatterns = value;
  }
  public resetUrlInclusionPatterns() {
    this._urlInclusionPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInclusionPatternsInput() {
    return this._urlInclusionPatterns;
  }

  // urls - computed: true, optional: true, required: false
  private _urls = new KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference(this, "urls");
  public get urls() {
    return this._urls;
  }
  public putUrls(value: KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrls) {
    this._urls.internalValue = value;
  }
  public resetUrls() {
    this._urls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlsInput() {
    return this._urls.internalValue;
  }
}
export interface KendraDataSourceDataSourceConfigurationWorkDocsConfigurationFieldMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#data_source_field_name KendraDataSource#data_source_field_name}
  */
  readonly dataSourceFieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#date_field_format KendraDataSource#date_field_format}
  */
  readonly dateFieldFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#index_field_name KendraDataSource#index_field_name}
  */
  readonly indexFieldName?: string;
}

export function kendraDataSourceDataSourceConfigurationWorkDocsConfigurationFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationWorkDocsConfigurationFieldMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source_field_name: cdktn.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktn.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktn.stringToTerraform(struct!.indexFieldName),
  }
}


export function kendraDataSourceDataSourceConfigurationWorkDocsConfigurationFieldMappingsToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationWorkDocsConfigurationFieldMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_source_field_name: {
      value: cdktn.stringToHclTerraform(struct!.dataSourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_field_format: {
      value: cdktn.stringToHclTerraform(struct!.dateFieldFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_field_name: {
      value: cdktn.stringToHclTerraform(struct!.indexFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationWorkDocsConfigurationFieldMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KendraDataSourceDataSourceConfigurationWorkDocsConfigurationFieldMappings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceFieldName = this._dataSourceFieldName;
    }
    if (this._dateFieldFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateFieldFormat = this._dateFieldFormat;
    }
    if (this._indexFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexFieldName = this._indexFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationWorkDocsConfigurationFieldMappings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSourceFieldName = undefined;
      this._dateFieldFormat = undefined;
      this._indexFieldName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSourceFieldName = value.dataSourceFieldName;
      this._dateFieldFormat = value.dateFieldFormat;
      this._indexFieldName = value.indexFieldName;
    }
  }

  // data_source_field_name - computed: true, optional: true, required: false
  private _dataSourceFieldName?: string;
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }
  public set dataSourceFieldName(value: string) {
    this._dataSourceFieldName = value;
  }
  public resetDataSourceFieldName() {
    this._dataSourceFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceFieldNameInput() {
    return this._dataSourceFieldName;
  }

  // date_field_format - computed: true, optional: true, required: false
  private _dateFieldFormat?: string;
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }
  public set dateFieldFormat(value: string) {
    this._dateFieldFormat = value;
  }
  public resetDateFieldFormat() {
    this._dateFieldFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateFieldFormatInput() {
    return this._dateFieldFormat;
  }

  // index_field_name - computed: true, optional: true, required: false
  private _indexFieldName?: string;
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
  public set indexFieldName(value: string) {
    this._indexFieldName = value;
  }
  public resetIndexFieldName() {
    this._indexFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexFieldNameInput() {
    return this._indexFieldName;
  }
}

export class KendraDataSourceDataSourceConfigurationWorkDocsConfigurationFieldMappingsList extends cdktn.ComplexList {
  public internalValue? : KendraDataSourceDataSourceConfigurationWorkDocsConfigurationFieldMappings[] | cdktn.IResolvable

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
  public get(index: number): KendraDataSourceDataSourceConfigurationWorkDocsConfigurationFieldMappingsOutputReference {
    return new KendraDataSourceDataSourceConfigurationWorkDocsConfigurationFieldMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KendraDataSourceDataSourceConfigurationWorkDocsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#crawl_comments KendraDataSource#crawl_comments}
  */
  readonly crawlComments?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#exclusion_patterns KendraDataSource#exclusion_patterns}
  */
  readonly exclusionPatterns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#field_mappings KendraDataSource#field_mappings}
  */
  readonly fieldMappings?: KendraDataSourceDataSourceConfigurationWorkDocsConfigurationFieldMappings[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#inclusion_patterns KendraDataSource#inclusion_patterns}
  */
  readonly inclusionPatterns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#organization_id KendraDataSource#organization_id}
  */
  readonly organizationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#use_change_log KendraDataSource#use_change_log}
  */
  readonly useChangeLog?: boolean | cdktn.IResolvable;
}

export function kendraDataSourceDataSourceConfigurationWorkDocsConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationWorkDocsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    crawl_comments: cdktn.booleanToTerraform(struct!.crawlComments),
    exclusion_patterns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclusionPatterns),
    field_mappings: cdktn.listMapper(kendraDataSourceDataSourceConfigurationWorkDocsConfigurationFieldMappingsToTerraform, false)(struct!.fieldMappings),
    inclusion_patterns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.inclusionPatterns),
    organization_id: cdktn.stringToTerraform(struct!.organizationId),
    use_change_log: cdktn.booleanToTerraform(struct!.useChangeLog),
  }
}


export function kendraDataSourceDataSourceConfigurationWorkDocsConfigurationToHclTerraform(struct?: KendraDataSourceDataSourceConfigurationWorkDocsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    crawl_comments: {
      value: cdktn.booleanToHclTerraform(struct!.crawlComments),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclusion_patterns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exclusionPatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    field_mappings: {
      value: cdktn.listMapperHcl(kendraDataSourceDataSourceConfigurationWorkDocsConfigurationFieldMappingsToHclTerraform, false)(struct!.fieldMappings),
      isBlock: true,
      type: "list",
      storageClassType: "KendraDataSourceDataSourceConfigurationWorkDocsConfigurationFieldMappingsList",
    },
    inclusion_patterns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.inclusionPatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    organization_id: {
      value: cdktn.stringToHclTerraform(struct!.organizationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_change_log: {
      value: cdktn.booleanToHclTerraform(struct!.useChangeLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationWorkDocsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceDataSourceConfigurationWorkDocsConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crawlComments !== undefined) {
      hasAnyValues = true;
      internalValueResult.crawlComments = this._crawlComments;
    }
    if (this._exclusionPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionPatterns = this._exclusionPatterns;
    }
    if (this._fieldMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldMappings = this._fieldMappings?.internalValue;
    }
    if (this._inclusionPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusionPatterns = this._inclusionPatterns;
    }
    if (this._organizationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationId = this._organizationId;
    }
    if (this._useChangeLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.useChangeLog = this._useChangeLog;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfigurationWorkDocsConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crawlComments = undefined;
      this._exclusionPatterns = undefined;
      this._fieldMappings.internalValue = undefined;
      this._inclusionPatterns = undefined;
      this._organizationId = undefined;
      this._useChangeLog = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crawlComments = value.crawlComments;
      this._exclusionPatterns = value.exclusionPatterns;
      this._fieldMappings.internalValue = value.fieldMappings;
      this._inclusionPatterns = value.inclusionPatterns;
      this._organizationId = value.organizationId;
      this._useChangeLog = value.useChangeLog;
    }
  }

  // crawl_comments - computed: true, optional: true, required: false
  private _crawlComments?: boolean | cdktn.IResolvable;
  public get crawlComments() {
    return this.getBooleanAttribute('crawl_comments');
  }
  public set crawlComments(value: boolean | cdktn.IResolvable) {
    this._crawlComments = value;
  }
  public resetCrawlComments() {
    this._crawlComments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlCommentsInput() {
    return this._crawlComments;
  }

  // exclusion_patterns - computed: true, optional: true, required: false
  private _exclusionPatterns?: string[];
  public get exclusionPatterns() {
    return this.getListAttribute('exclusion_patterns');
  }
  public set exclusionPatterns(value: string[]) {
    this._exclusionPatterns = value;
  }
  public resetExclusionPatterns() {
    this._exclusionPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionPatternsInput() {
    return this._exclusionPatterns;
  }

  // field_mappings - computed: true, optional: true, required: false
  private _fieldMappings = new KendraDataSourceDataSourceConfigurationWorkDocsConfigurationFieldMappingsList(this, "field_mappings", false);
  public get fieldMappings() {
    return this._fieldMappings;
  }
  public putFieldMappings(value: KendraDataSourceDataSourceConfigurationWorkDocsConfigurationFieldMappings[] | cdktn.IResolvable) {
    this._fieldMappings.internalValue = value;
  }
  public resetFieldMappings() {
    this._fieldMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldMappingsInput() {
    return this._fieldMappings.internalValue;
  }

  // inclusion_patterns - computed: true, optional: true, required: false
  private _inclusionPatterns?: string[];
  public get inclusionPatterns() {
    return this.getListAttribute('inclusion_patterns');
  }
  public set inclusionPatterns(value: string[]) {
    this._inclusionPatterns = value;
  }
  public resetInclusionPatterns() {
    this._inclusionPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionPatternsInput() {
    return this._inclusionPatterns;
  }

  // organization_id - computed: true, optional: true, required: false
  private _organizationId?: string;
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  public resetOrganizationId() {
    this._organizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // use_change_log - computed: true, optional: true, required: false
  private _useChangeLog?: boolean | cdktn.IResolvable;
  public get useChangeLog() {
    return this.getBooleanAttribute('use_change_log');
  }
  public set useChangeLog(value: boolean | cdktn.IResolvable) {
    this._useChangeLog = value;
  }
  public resetUseChangeLog() {
    this._useChangeLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useChangeLogInput() {
    return this._useChangeLog;
  }
}
export interface KendraDataSourceDataSourceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#confluence_configuration KendraDataSource#confluence_configuration}
  */
  readonly confluenceConfiguration?: KendraDataSourceDataSourceConfigurationConfluenceConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#database_configuration KendraDataSource#database_configuration}
  */
  readonly databaseConfiguration?: KendraDataSourceDataSourceConfigurationDatabaseConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#google_drive_configuration KendraDataSource#google_drive_configuration}
  */
  readonly googleDriveConfiguration?: KendraDataSourceDataSourceConfigurationGoogleDriveConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#one_drive_configuration KendraDataSource#one_drive_configuration}
  */
  readonly oneDriveConfiguration?: KendraDataSourceDataSourceConfigurationOneDriveConfiguration;
  /**
  * S3 data source configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#s3_configuration KendraDataSource#s3_configuration}
  */
  readonly s3Configuration?: KendraDataSourceDataSourceConfigurationS3Configuration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#salesforce_configuration KendraDataSource#salesforce_configuration}
  */
  readonly salesforceConfiguration?: KendraDataSourceDataSourceConfigurationSalesforceConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#service_now_configuration KendraDataSource#service_now_configuration}
  */
  readonly serviceNowConfiguration?: KendraDataSourceDataSourceConfigurationServiceNowConfiguration;
  /**
  * SharePoint configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#share_point_configuration KendraDataSource#share_point_configuration}
  */
  readonly sharePointConfiguration?: KendraDataSourceDataSourceConfigurationSharePointConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#template_configuration KendraDataSource#template_configuration}
  */
  readonly templateConfiguration?: KendraDataSourceDataSourceConfigurationTemplateConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#web_crawler_configuration KendraDataSource#web_crawler_configuration}
  */
  readonly webCrawlerConfiguration?: KendraDataSourceDataSourceConfigurationWebCrawlerConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#work_docs_configuration KendraDataSource#work_docs_configuration}
  */
  readonly workDocsConfiguration?: KendraDataSourceDataSourceConfigurationWorkDocsConfiguration;
}

export function kendraDataSourceDataSourceConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    confluence_configuration: kendraDataSourceDataSourceConfigurationConfluenceConfigurationToTerraform(struct!.confluenceConfiguration),
    database_configuration: kendraDataSourceDataSourceConfigurationDatabaseConfigurationToTerraform(struct!.databaseConfiguration),
    google_drive_configuration: kendraDataSourceDataSourceConfigurationGoogleDriveConfigurationToTerraform(struct!.googleDriveConfiguration),
    one_drive_configuration: kendraDataSourceDataSourceConfigurationOneDriveConfigurationToTerraform(struct!.oneDriveConfiguration),
    s3_configuration: kendraDataSourceDataSourceConfigurationS3ConfigurationToTerraform(struct!.s3Configuration),
    salesforce_configuration: kendraDataSourceDataSourceConfigurationSalesforceConfigurationToTerraform(struct!.salesforceConfiguration),
    service_now_configuration: kendraDataSourceDataSourceConfigurationServiceNowConfigurationToTerraform(struct!.serviceNowConfiguration),
    share_point_configuration: kendraDataSourceDataSourceConfigurationSharePointConfigurationToTerraform(struct!.sharePointConfiguration),
    template_configuration: kendraDataSourceDataSourceConfigurationTemplateConfigurationToTerraform(struct!.templateConfiguration),
    web_crawler_configuration: kendraDataSourceDataSourceConfigurationWebCrawlerConfigurationToTerraform(struct!.webCrawlerConfiguration),
    work_docs_configuration: kendraDataSourceDataSourceConfigurationWorkDocsConfigurationToTerraform(struct!.workDocsConfiguration),
  }
}


export function kendraDataSourceDataSourceConfigurationToHclTerraform(struct?: KendraDataSourceDataSourceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    confluence_configuration: {
      value: kendraDataSourceDataSourceConfigurationConfluenceConfigurationToHclTerraform(struct!.confluenceConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceDataSourceConfigurationConfluenceConfiguration",
    },
    database_configuration: {
      value: kendraDataSourceDataSourceConfigurationDatabaseConfigurationToHclTerraform(struct!.databaseConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceDataSourceConfigurationDatabaseConfiguration",
    },
    google_drive_configuration: {
      value: kendraDataSourceDataSourceConfigurationGoogleDriveConfigurationToHclTerraform(struct!.googleDriveConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceDataSourceConfigurationGoogleDriveConfiguration",
    },
    one_drive_configuration: {
      value: kendraDataSourceDataSourceConfigurationOneDriveConfigurationToHclTerraform(struct!.oneDriveConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceDataSourceConfigurationOneDriveConfiguration",
    },
    s3_configuration: {
      value: kendraDataSourceDataSourceConfigurationS3ConfigurationToHclTerraform(struct!.s3Configuration),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceDataSourceConfigurationS3Configuration",
    },
    salesforce_configuration: {
      value: kendraDataSourceDataSourceConfigurationSalesforceConfigurationToHclTerraform(struct!.salesforceConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceDataSourceConfigurationSalesforceConfiguration",
    },
    service_now_configuration: {
      value: kendraDataSourceDataSourceConfigurationServiceNowConfigurationToHclTerraform(struct!.serviceNowConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceDataSourceConfigurationServiceNowConfiguration",
    },
    share_point_configuration: {
      value: kendraDataSourceDataSourceConfigurationSharePointConfigurationToHclTerraform(struct!.sharePointConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceDataSourceConfigurationSharePointConfiguration",
    },
    template_configuration: {
      value: kendraDataSourceDataSourceConfigurationTemplateConfigurationToHclTerraform(struct!.templateConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceDataSourceConfigurationTemplateConfiguration",
    },
    web_crawler_configuration: {
      value: kendraDataSourceDataSourceConfigurationWebCrawlerConfigurationToHclTerraform(struct!.webCrawlerConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceDataSourceConfigurationWebCrawlerConfiguration",
    },
    work_docs_configuration: {
      value: kendraDataSourceDataSourceConfigurationWorkDocsConfigurationToHclTerraform(struct!.workDocsConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "KendraDataSourceDataSourceConfigurationWorkDocsConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraDataSourceDataSourceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KendraDataSourceDataSourceConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confluenceConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.confluenceConfiguration = this._confluenceConfiguration?.internalValue;
    }
    if (this._databaseConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseConfiguration = this._databaseConfiguration?.internalValue;
    }
    if (this._googleDriveConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleDriveConfiguration = this._googleDriveConfiguration?.internalValue;
    }
    if (this._oneDriveConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oneDriveConfiguration = this._oneDriveConfiguration?.internalValue;
    }
    if (this._s3Configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Configuration = this._s3Configuration?.internalValue;
    }
    if (this._salesforceConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforceConfiguration = this._salesforceConfiguration?.internalValue;
    }
    if (this._serviceNowConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNowConfiguration = this._serviceNowConfiguration?.internalValue;
    }
    if (this._sharePointConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharePointConfiguration = this._sharePointConfiguration?.internalValue;
    }
    if (this._templateConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateConfiguration = this._templateConfiguration?.internalValue;
    }
    if (this._webCrawlerConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webCrawlerConfiguration = this._webCrawlerConfiguration?.internalValue;
    }
    if (this._workDocsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workDocsConfiguration = this._workDocsConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceDataSourceConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._confluenceConfiguration.internalValue = undefined;
      this._databaseConfiguration.internalValue = undefined;
      this._googleDriveConfiguration.internalValue = undefined;
      this._oneDriveConfiguration.internalValue = undefined;
      this._s3Configuration.internalValue = undefined;
      this._salesforceConfiguration.internalValue = undefined;
      this._serviceNowConfiguration.internalValue = undefined;
      this._sharePointConfiguration.internalValue = undefined;
      this._templateConfiguration.internalValue = undefined;
      this._webCrawlerConfiguration.internalValue = undefined;
      this._workDocsConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._confluenceConfiguration.internalValue = value.confluenceConfiguration;
      this._databaseConfiguration.internalValue = value.databaseConfiguration;
      this._googleDriveConfiguration.internalValue = value.googleDriveConfiguration;
      this._oneDriveConfiguration.internalValue = value.oneDriveConfiguration;
      this._s3Configuration.internalValue = value.s3Configuration;
      this._salesforceConfiguration.internalValue = value.salesforceConfiguration;
      this._serviceNowConfiguration.internalValue = value.serviceNowConfiguration;
      this._sharePointConfiguration.internalValue = value.sharePointConfiguration;
      this._templateConfiguration.internalValue = value.templateConfiguration;
      this._webCrawlerConfiguration.internalValue = value.webCrawlerConfiguration;
      this._workDocsConfiguration.internalValue = value.workDocsConfiguration;
    }
  }

  // confluence_configuration - computed: true, optional: true, required: false
  private _confluenceConfiguration = new KendraDataSourceDataSourceConfigurationConfluenceConfigurationOutputReference(this, "confluence_configuration");
  public get confluenceConfiguration() {
    return this._confluenceConfiguration;
  }
  public putConfluenceConfiguration(value: KendraDataSourceDataSourceConfigurationConfluenceConfiguration) {
    this._confluenceConfiguration.internalValue = value;
  }
  public resetConfluenceConfiguration() {
    this._confluenceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confluenceConfigurationInput() {
    return this._confluenceConfiguration.internalValue;
  }

  // database_configuration - computed: true, optional: true, required: false
  private _databaseConfiguration = new KendraDataSourceDataSourceConfigurationDatabaseConfigurationOutputReference(this, "database_configuration");
  public get databaseConfiguration() {
    return this._databaseConfiguration;
  }
  public putDatabaseConfiguration(value: KendraDataSourceDataSourceConfigurationDatabaseConfiguration) {
    this._databaseConfiguration.internalValue = value;
  }
  public resetDatabaseConfiguration() {
    this._databaseConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseConfigurationInput() {
    return this._databaseConfiguration.internalValue;
  }

  // google_drive_configuration - computed: true, optional: true, required: false
  private _googleDriveConfiguration = new KendraDataSourceDataSourceConfigurationGoogleDriveConfigurationOutputReference(this, "google_drive_configuration");
  public get googleDriveConfiguration() {
    return this._googleDriveConfiguration;
  }
  public putGoogleDriveConfiguration(value: KendraDataSourceDataSourceConfigurationGoogleDriveConfiguration) {
    this._googleDriveConfiguration.internalValue = value;
  }
  public resetGoogleDriveConfiguration() {
    this._googleDriveConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleDriveConfigurationInput() {
    return this._googleDriveConfiguration.internalValue;
  }

  // one_drive_configuration - computed: true, optional: true, required: false
  private _oneDriveConfiguration = new KendraDataSourceDataSourceConfigurationOneDriveConfigurationOutputReference(this, "one_drive_configuration");
  public get oneDriveConfiguration() {
    return this._oneDriveConfiguration;
  }
  public putOneDriveConfiguration(value: KendraDataSourceDataSourceConfigurationOneDriveConfiguration) {
    this._oneDriveConfiguration.internalValue = value;
  }
  public resetOneDriveConfiguration() {
    this._oneDriveConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneDriveConfigurationInput() {
    return this._oneDriveConfiguration.internalValue;
  }

  // s3_configuration - computed: true, optional: true, required: false
  private _s3Configuration = new KendraDataSourceDataSourceConfigurationS3ConfigurationOutputReference(this, "s3_configuration");
  public get s3Configuration() {
    return this._s3Configuration;
  }
  public putS3Configuration(value: KendraDataSourceDataSourceConfigurationS3Configuration) {
    this._s3Configuration.internalValue = value;
  }
  public resetS3Configuration() {
    this._s3Configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigurationInput() {
    return this._s3Configuration.internalValue;
  }

  // salesforce_configuration - computed: true, optional: true, required: false
  private _salesforceConfiguration = new KendraDataSourceDataSourceConfigurationSalesforceConfigurationOutputReference(this, "salesforce_configuration");
  public get salesforceConfiguration() {
    return this._salesforceConfiguration;
  }
  public putSalesforceConfiguration(value: KendraDataSourceDataSourceConfigurationSalesforceConfiguration) {
    this._salesforceConfiguration.internalValue = value;
  }
  public resetSalesforceConfiguration() {
    this._salesforceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceConfigurationInput() {
    return this._salesforceConfiguration.internalValue;
  }

  // service_now_configuration - computed: true, optional: true, required: false
  private _serviceNowConfiguration = new KendraDataSourceDataSourceConfigurationServiceNowConfigurationOutputReference(this, "service_now_configuration");
  public get serviceNowConfiguration() {
    return this._serviceNowConfiguration;
  }
  public putServiceNowConfiguration(value: KendraDataSourceDataSourceConfigurationServiceNowConfiguration) {
    this._serviceNowConfiguration.internalValue = value;
  }
  public resetServiceNowConfiguration() {
    this._serviceNowConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNowConfigurationInput() {
    return this._serviceNowConfiguration.internalValue;
  }

  // share_point_configuration - computed: true, optional: true, required: false
  private _sharePointConfiguration = new KendraDataSourceDataSourceConfigurationSharePointConfigurationOutputReference(this, "share_point_configuration");
  public get sharePointConfiguration() {
    return this._sharePointConfiguration;
  }
  public putSharePointConfiguration(value: KendraDataSourceDataSourceConfigurationSharePointConfiguration) {
    this._sharePointConfiguration.internalValue = value;
  }
  public resetSharePointConfiguration() {
    this._sharePointConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharePointConfigurationInput() {
    return this._sharePointConfiguration.internalValue;
  }

  // template_configuration - computed: true, optional: true, required: false
  private _templateConfiguration = new KendraDataSourceDataSourceConfigurationTemplateConfigurationOutputReference(this, "template_configuration");
  public get templateConfiguration() {
    return this._templateConfiguration;
  }
  public putTemplateConfiguration(value: KendraDataSourceDataSourceConfigurationTemplateConfiguration) {
    this._templateConfiguration.internalValue = value;
  }
  public resetTemplateConfiguration() {
    this._templateConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateConfigurationInput() {
    return this._templateConfiguration.internalValue;
  }

  // web_crawler_configuration - computed: true, optional: true, required: false
  private _webCrawlerConfiguration = new KendraDataSourceDataSourceConfigurationWebCrawlerConfigurationOutputReference(this, "web_crawler_configuration");
  public get webCrawlerConfiguration() {
    return this._webCrawlerConfiguration;
  }
  public putWebCrawlerConfiguration(value: KendraDataSourceDataSourceConfigurationWebCrawlerConfiguration) {
    this._webCrawlerConfiguration.internalValue = value;
  }
  public resetWebCrawlerConfiguration() {
    this._webCrawlerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webCrawlerConfigurationInput() {
    return this._webCrawlerConfiguration.internalValue;
  }

  // work_docs_configuration - computed: true, optional: true, required: false
  private _workDocsConfiguration = new KendraDataSourceDataSourceConfigurationWorkDocsConfigurationOutputReference(this, "work_docs_configuration");
  public get workDocsConfiguration() {
    return this._workDocsConfiguration;
  }
  public putWorkDocsConfiguration(value: KendraDataSourceDataSourceConfigurationWorkDocsConfiguration) {
    this._workDocsConfiguration.internalValue = value;
  }
  public resetWorkDocsConfiguration() {
    this._workDocsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workDocsConfigurationInput() {
    return this._workDocsConfiguration.internalValue;
  }
}
export interface KendraDataSourceTags {
  /**
  * A string used to identify this tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#key KendraDataSource#key}
  */
  readonly key?: string;
  /**
  * A string containing the value for the tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#value KendraDataSource#value}
  */
  readonly value?: string;
}

export function kendraDataSourceTagsToTerraform(struct?: KendraDataSourceTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function kendraDataSourceTagsToHclTerraform(struct?: KendraDataSourceTags | cdktn.IResolvable): any {
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

export class KendraDataSourceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KendraDataSourceTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: KendraDataSourceTags | cdktn.IResolvable | undefined) {
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

export class KendraDataSourceTagsList extends cdktn.ComplexList {
  public internalValue? : KendraDataSourceTags[] | cdktn.IResolvable

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
  public get(index: number): KendraDataSourceTagsOutputReference {
    return new KendraDataSourceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source awscc_kendra_data_source}
*/
export class KendraDataSource extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_kendra_data_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a KendraDataSource resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KendraDataSource to import
  * @param importFromId The id of the existing KendraDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KendraDataSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_kendra_data_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/kendra_data_source awscc_kendra_data_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KendraDataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: KendraDataSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_kendra_data_source',
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
    this._customDocumentEnrichmentConfiguration.internalValue = config.customDocumentEnrichmentConfiguration;
    this._dataSourceConfiguration.internalValue = config.dataSourceConfiguration;
    this._description = config.description;
    this._indexId = config.indexId;
    this._languageCode = config.languageCode;
    this._name = config.name;
    this._roleArn = config.roleArn;
    this._schedule = config.schedule;
    this._tags.internalValue = config.tags;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // custom_document_enrichment_configuration - computed: true, optional: true, required: false
  private _customDocumentEnrichmentConfiguration = new KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference(this, "custom_document_enrichment_configuration");
  public get customDocumentEnrichmentConfiguration() {
    return this._customDocumentEnrichmentConfiguration;
  }
  public putCustomDocumentEnrichmentConfiguration(value: KendraDataSourceCustomDocumentEnrichmentConfiguration) {
    this._customDocumentEnrichmentConfiguration.internalValue = value;
  }
  public resetCustomDocumentEnrichmentConfiguration() {
    this._customDocumentEnrichmentConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDocumentEnrichmentConfigurationInput() {
    return this._customDocumentEnrichmentConfiguration.internalValue;
  }

  // data_source_configuration - computed: true, optional: true, required: false
  private _dataSourceConfiguration = new KendraDataSourceDataSourceConfigurationOutputReference(this, "data_source_configuration");
  public get dataSourceConfiguration() {
    return this._dataSourceConfiguration;
  }
  public putDataSourceConfiguration(value: KendraDataSourceDataSourceConfiguration) {
    this._dataSourceConfiguration.internalValue = value;
  }
  public resetDataSourceConfiguration() {
    this._dataSourceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceConfigurationInput() {
    return this._dataSourceConfiguration.internalValue;
  }

  // data_source_id - computed: true, optional: false, required: false
  public get dataSourceId() {
    return this.getStringAttribute('data_source_id');
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

  // index_id - computed: false, optional: false, required: true
  private _indexId?: string;
  public get indexId() {
    return this.getStringAttribute('index_id');
  }
  public set indexId(value: string) {
    this._indexId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexIdInput() {
    return this._indexId;
  }

  // language_code - computed: true, optional: true, required: false
  private _languageCode?: string;
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }
  public set languageCode(value: string) {
    this._languageCode = value;
  }
  public resetLanguageCode() {
    this._languageCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageCodeInput() {
    return this._languageCode;
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

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // schedule - computed: true, optional: true, required: false
  private _schedule?: string;
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new KendraDataSourceTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: KendraDataSourceTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
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
      custom_document_enrichment_configuration: kendraDataSourceCustomDocumentEnrichmentConfigurationToTerraform(this._customDocumentEnrichmentConfiguration.internalValue),
      data_source_configuration: kendraDataSourceDataSourceConfigurationToTerraform(this._dataSourceConfiguration.internalValue),
      description: cdktn.stringToTerraform(this._description),
      index_id: cdktn.stringToTerraform(this._indexId),
      language_code: cdktn.stringToTerraform(this._languageCode),
      name: cdktn.stringToTerraform(this._name),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      schedule: cdktn.stringToTerraform(this._schedule),
      tags: cdktn.listMapper(kendraDataSourceTagsToTerraform, false)(this._tags.internalValue),
      type: cdktn.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_document_enrichment_configuration: {
        value: kendraDataSourceCustomDocumentEnrichmentConfigurationToHclTerraform(this._customDocumentEnrichmentConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KendraDataSourceCustomDocumentEnrichmentConfiguration",
      },
      data_source_configuration: {
        value: kendraDataSourceDataSourceConfigurationToHclTerraform(this._dataSourceConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KendraDataSourceDataSourceConfiguration",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      index_id: {
        value: cdktn.stringToHclTerraform(this._indexId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      language_code: {
        value: cdktn.stringToHclTerraform(this._languageCode),
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
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: cdktn.stringToHclTerraform(this._schedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(kendraDataSourceTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KendraDataSourceTagsList",
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
