// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface QbusinessDataSourceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#application_id QbusinessDataSource#application_id}
  */
  readonly applicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#configuration QbusinessDataSource#configuration}
  */
  readonly configuration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#description QbusinessDataSource#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#display_name QbusinessDataSource#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#document_enrichment_configuration QbusinessDataSource#document_enrichment_configuration}
  */
  readonly documentEnrichmentConfiguration?: QbusinessDataSourceDocumentEnrichmentConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#index_id QbusinessDataSource#index_id}
  */
  readonly indexId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#media_extraction_configuration QbusinessDataSource#media_extraction_configuration}
  */
  readonly mediaExtractionConfiguration?: QbusinessDataSourceMediaExtractionConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#role_arn QbusinessDataSource#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#sync_schedule QbusinessDataSource#sync_schedule}
  */
  readonly syncSchedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#tags QbusinessDataSource#tags}
  */
  readonly tags?: QbusinessDataSourceTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#vpc_configuration QbusinessDataSource#vpc_configuration}
  */
  readonly vpcConfiguration?: QbusinessDataSourceVpcConfiguration;
}
export interface QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#date_value QbusinessDataSource#date_value}
  */
  readonly dateValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#long_value QbusinessDataSource#long_value}
  */
  readonly longValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#string_list_value QbusinessDataSource#string_list_value}
  */
  readonly stringListValue?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#string_value QbusinessDataSource#string_value}
  */
  readonly stringValue?: string;
}

export function qbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueToTerraform(struct?: QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue | cdktn.IResolvable): any {
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


export function qbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueToHclTerraform(struct?: QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue | cdktn.IResolvable): any {
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

export class QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue | cdktn.IResolvable | undefined {
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

  public set internalValue(value: QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue | cdktn.IResolvable | undefined) {
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
export interface QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#key QbusinessDataSource#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#operator QbusinessDataSource#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#value QbusinessDataSource#value}
  */
  readonly value?: QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue;
}

export function qbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionToTerraform(struct?: QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    operator: cdktn.stringToTerraform(struct!.operator),
    value: qbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueToTerraform(struct!.value),
  }
}


export function qbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionToHclTerraform(struct?: QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition | cdktn.IResolvable): any {
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
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: qbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._value.internalValue = value.value;
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

  // value - computed: true, optional: true, required: false
  private _value = new QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue) {
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
export interface QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#date_value QbusinessDataSource#date_value}
  */
  readonly dateValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#long_value QbusinessDataSource#long_value}
  */
  readonly longValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#string_list_value QbusinessDataSource#string_list_value}
  */
  readonly stringListValue?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#string_value QbusinessDataSource#string_value}
  */
  readonly stringValue?: string;
}

export function qbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueToTerraform(struct?: QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue | cdktn.IResolvable): any {
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


export function qbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueToHclTerraform(struct?: QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue | cdktn.IResolvable): any {
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

export class QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue | cdktn.IResolvable | undefined {
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

  public set internalValue(value: QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue | cdktn.IResolvable | undefined) {
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
export interface QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#attribute_value_operator QbusinessDataSource#attribute_value_operator}
  */
  readonly attributeValueOperator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#key QbusinessDataSource#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#value QbusinessDataSource#value}
  */
  readonly value?: QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue;
}

export function qbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetToTerraform(struct?: QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute_value_operator: cdktn.stringToTerraform(struct!.attributeValueOperator),
    key: cdktn.stringToTerraform(struct!.key),
    value: qbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueToTerraform(struct!.value),
  }
}


export function qbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetToHclTerraform(struct?: QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute_value_operator: {
      value: cdktn.stringToHclTerraform(struct!.attributeValueOperator),
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
    value: {
      value: qbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeValueOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeValueOperator = this._attributeValueOperator;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeValueOperator = undefined;
      this._key = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeValueOperator = value.attributeValueOperator;
      this._key = value.key;
      this._value.internalValue = value.value;
    }
  }

  // attribute_value_operator - computed: true, optional: true, required: false
  private _attributeValueOperator?: string; 
  public get attributeValueOperator() {
    return this.getStringAttribute('attribute_value_operator');
  }
  public set attributeValueOperator(value: string) {
    this._attributeValueOperator = value;
  }
  public resetAttributeValueOperator() {
    this._attributeValueOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeValueOperatorInput() {
    return this._attributeValueOperator;
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
  private _value = new QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue) {
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
export interface QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#condition QbusinessDataSource#condition}
  */
  readonly condition?: QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#document_content_operator QbusinessDataSource#document_content_operator}
  */
  readonly documentContentOperator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#target QbusinessDataSource#target}
  */
  readonly target?: QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget;
}

export function qbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsToTerraform(struct?: QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition: qbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionToTerraform(struct!.condition),
    document_content_operator: cdktn.stringToTerraform(struct!.documentContentOperator),
    target: qbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetToTerraform(struct!.target),
  }
}


export function qbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsToHclTerraform(struct?: QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition: {
      value: qbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "struct",
      storageClassType: "QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition",
    },
    document_content_operator: {
      value: cdktn.stringToHclTerraform(struct!.documentContentOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: qbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._documentContentOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentContentOperator = this._documentContentOperator;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition.internalValue = undefined;
      this._documentContentOperator = undefined;
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
      this._documentContentOperator = value.documentContentOperator;
      this._target.internalValue = value.target;
    }
  }

  // condition - computed: true, optional: true, required: false
  private _condition = new QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // document_content_operator - computed: true, optional: true, required: false
  private _documentContentOperator?: string; 
  public get documentContentOperator() {
    return this.getStringAttribute('document_content_operator');
  }
  public set documentContentOperator(value: string) {
    this._documentContentOperator = value;
  }
  public resetDocumentContentOperator() {
    this._documentContentOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentContentOperatorInput() {
    return this._documentContentOperator;
  }

  // target - computed: true, optional: true, required: false
  private _target = new QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget) {
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

export class QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList extends cdktn.ComplexList {
  public internalValue? : QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations[] | cdktn.IResolvable

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
  public get(index: number): QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference {
    return new QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#date_value QbusinessDataSource#date_value}
  */
  readonly dateValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#long_value QbusinessDataSource#long_value}
  */
  readonly longValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#string_list_value QbusinessDataSource#string_list_value}
  */
  readonly stringListValue?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#string_value QbusinessDataSource#string_value}
  */
  readonly stringValue?: string;
}

export function qbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueToTerraform(struct?: QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue | cdktn.IResolvable): any {
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


export function qbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueToHclTerraform(struct?: QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue | cdktn.IResolvable): any {
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

export class QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue | cdktn.IResolvable | undefined {
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

  public set internalValue(value: QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue | cdktn.IResolvable | undefined) {
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
export interface QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#key QbusinessDataSource#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#operator QbusinessDataSource#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#value QbusinessDataSource#value}
  */
  readonly value?: QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue;
}

export function qbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionToTerraform(struct?: QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    operator: cdktn.stringToTerraform(struct!.operator),
    value: qbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueToTerraform(struct!.value),
  }
}


export function qbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionToHclTerraform(struct?: QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition | cdktn.IResolvable): any {
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
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: qbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._value.internalValue = value.value;
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

  // value - computed: true, optional: true, required: false
  private _value = new QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue) {
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
export interface QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#invocation_condition QbusinessDataSource#invocation_condition}
  */
  readonly invocationCondition?: QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#lambda_arn QbusinessDataSource#lambda_arn}
  */
  readonly lambdaArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#role_arn QbusinessDataSource#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#s3_bucket_name QbusinessDataSource#s3_bucket_name}
  */
  readonly s3BucketName?: string;
}

export function qbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationToTerraform(struct?: QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    invocation_condition: qbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionToTerraform(struct!.invocationCondition),
    lambda_arn: cdktn.stringToTerraform(struct!.lambdaArn),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    s3_bucket_name: cdktn.stringToTerraform(struct!.s3BucketName),
  }
}


export function qbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationToHclTerraform(struct?: QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    invocation_condition: {
      value: qbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionToHclTerraform(struct!.invocationCondition),
      isBlock: true,
      type: "struct",
      storageClassType: "QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition",
    },
    lambda_arn: {
      value: cdktn.stringToHclTerraform(struct!.lambdaArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.s3BucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration | cdktn.IResolvable | undefined {
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
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._s3BucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketName = this._s3BucketName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invocationCondition.internalValue = undefined;
      this._lambdaArn = undefined;
      this._roleArn = undefined;
      this._s3BucketName = undefined;
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
      this._roleArn = value.roleArn;
      this._s3BucketName = value.s3BucketName;
    }
  }

  // invocation_condition - computed: true, optional: true, required: false
  private _invocationCondition = new QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference(this, "invocation_condition");
  public get invocationCondition() {
    return this._invocationCondition;
  }
  public putInvocationCondition(value: QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition) {
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

  // s3_bucket_name - computed: true, optional: true, required: false
  private _s3BucketName?: string; 
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
  public set s3BucketName(value: string) {
    this._s3BucketName = value;
  }
  public resetS3BucketName() {
    this._s3BucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketNameInput() {
    return this._s3BucketName;
  }
}
export interface QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#date_value QbusinessDataSource#date_value}
  */
  readonly dateValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#long_value QbusinessDataSource#long_value}
  */
  readonly longValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#string_list_value QbusinessDataSource#string_list_value}
  */
  readonly stringListValue?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#string_value QbusinessDataSource#string_value}
  */
  readonly stringValue?: string;
}

export function qbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueToTerraform(struct?: QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue | cdktn.IResolvable): any {
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


export function qbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueToHclTerraform(struct?: QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue | cdktn.IResolvable): any {
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

export class QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue | cdktn.IResolvable | undefined {
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

  public set internalValue(value: QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue | cdktn.IResolvable | undefined) {
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
export interface QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#key QbusinessDataSource#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#operator QbusinessDataSource#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#value QbusinessDataSource#value}
  */
  readonly value?: QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue;
}

export function qbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionToTerraform(struct?: QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    operator: cdktn.stringToTerraform(struct!.operator),
    value: qbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueToTerraform(struct!.value),
  }
}


export function qbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionToHclTerraform(struct?: QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition | cdktn.IResolvable): any {
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
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: qbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._value.internalValue = value.value;
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

  // value - computed: true, optional: true, required: false
  private _value = new QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue) {
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
export interface QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#invocation_condition QbusinessDataSource#invocation_condition}
  */
  readonly invocationCondition?: QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#lambda_arn QbusinessDataSource#lambda_arn}
  */
  readonly lambdaArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#role_arn QbusinessDataSource#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#s3_bucket_name QbusinessDataSource#s3_bucket_name}
  */
  readonly s3BucketName?: string;
}

export function qbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationToTerraform(struct?: QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    invocation_condition: qbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionToTerraform(struct!.invocationCondition),
    lambda_arn: cdktn.stringToTerraform(struct!.lambdaArn),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    s3_bucket_name: cdktn.stringToTerraform(struct!.s3BucketName),
  }
}


export function qbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationToHclTerraform(struct?: QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    invocation_condition: {
      value: qbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionToHclTerraform(struct!.invocationCondition),
      isBlock: true,
      type: "struct",
      storageClassType: "QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition",
    },
    lambda_arn: {
      value: cdktn.stringToHclTerraform(struct!.lambdaArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.s3BucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration | cdktn.IResolvable | undefined {
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
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._s3BucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketName = this._s3BucketName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invocationCondition.internalValue = undefined;
      this._lambdaArn = undefined;
      this._roleArn = undefined;
      this._s3BucketName = undefined;
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
      this._roleArn = value.roleArn;
      this._s3BucketName = value.s3BucketName;
    }
  }

  // invocation_condition - computed: true, optional: true, required: false
  private _invocationCondition = new QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference(this, "invocation_condition");
  public get invocationCondition() {
    return this._invocationCondition;
  }
  public putInvocationCondition(value: QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition) {
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

  // s3_bucket_name - computed: true, optional: true, required: false
  private _s3BucketName?: string; 
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
  public set s3BucketName(value: string) {
    this._s3BucketName = value;
  }
  public resetS3BucketName() {
    this._s3BucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketNameInput() {
    return this._s3BucketName;
  }
}
export interface QbusinessDataSourceDocumentEnrichmentConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#inline_configurations QbusinessDataSource#inline_configurations}
  */
  readonly inlineConfigurations?: QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#post_extraction_hook_configuration QbusinessDataSource#post_extraction_hook_configuration}
  */
  readonly postExtractionHookConfiguration?: QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#pre_extraction_hook_configuration QbusinessDataSource#pre_extraction_hook_configuration}
  */
  readonly preExtractionHookConfiguration?: QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration;
}

export function qbusinessDataSourceDocumentEnrichmentConfigurationToTerraform(struct?: QbusinessDataSourceDocumentEnrichmentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    inline_configurations: cdktn.listMapper(qbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsToTerraform, false)(struct!.inlineConfigurations),
    post_extraction_hook_configuration: qbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationToTerraform(struct!.postExtractionHookConfiguration),
    pre_extraction_hook_configuration: qbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationToTerraform(struct!.preExtractionHookConfiguration),
  }
}


export function qbusinessDataSourceDocumentEnrichmentConfigurationToHclTerraform(struct?: QbusinessDataSourceDocumentEnrichmentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    inline_configurations: {
      value: cdktn.listMapperHcl(qbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsToHclTerraform, false)(struct!.inlineConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList",
    },
    post_extraction_hook_configuration: {
      value: qbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationToHclTerraform(struct!.postExtractionHookConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration",
    },
    pre_extraction_hook_configuration: {
      value: qbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationToHclTerraform(struct!.preExtractionHookConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QbusinessDataSourceDocumentEnrichmentConfiguration | cdktn.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QbusinessDataSourceDocumentEnrichmentConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inlineConfigurations.internalValue = undefined;
      this._postExtractionHookConfiguration.internalValue = undefined;
      this._preExtractionHookConfiguration.internalValue = undefined;
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
    }
  }

  // inline_configurations - computed: true, optional: true, required: false
  private _inlineConfigurations = new QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList(this, "inline_configurations", false);
  public get inlineConfigurations() {
    return this._inlineConfigurations;
  }
  public putInlineConfigurations(value: QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations[] | cdktn.IResolvable) {
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
  private _postExtractionHookConfiguration = new QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference(this, "post_extraction_hook_configuration");
  public get postExtractionHookConfiguration() {
    return this._postExtractionHookConfiguration;
  }
  public putPostExtractionHookConfiguration(value: QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration) {
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
  private _preExtractionHookConfiguration = new QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference(this, "pre_extraction_hook_configuration");
  public get preExtractionHookConfiguration() {
    return this._preExtractionHookConfiguration;
  }
  public putPreExtractionHookConfiguration(value: QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration) {
    this._preExtractionHookConfiguration.internalValue = value;
  }
  public resetPreExtractionHookConfiguration() {
    this._preExtractionHookConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preExtractionHookConfigurationInput() {
    return this._preExtractionHookConfiguration.internalValue;
  }
}
export interface QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#audio_extraction_status QbusinessDataSource#audio_extraction_status}
  */
  readonly audioExtractionStatus?: string;
}

export function qbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationToTerraform(struct?: QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    audio_extraction_status: cdktn.stringToTerraform(struct!.audioExtractionStatus),
  }
}


export function qbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationToHclTerraform(struct?: QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    audio_extraction_status: {
      value: cdktn.stringToHclTerraform(struct!.audioExtractionStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioExtractionStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioExtractionStatus = this._audioExtractionStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audioExtractionStatus = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audioExtractionStatus = value.audioExtractionStatus;
    }
  }

  // audio_extraction_status - computed: true, optional: true, required: false
  private _audioExtractionStatus?: string; 
  public get audioExtractionStatus() {
    return this.getStringAttribute('audio_extraction_status');
  }
  public set audioExtractionStatus(value: string) {
    this._audioExtractionStatus = value;
  }
  public resetAudioExtractionStatus() {
    this._audioExtractionStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioExtractionStatusInput() {
    return this._audioExtractionStatus;
  }
}
export interface QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#image_extraction_status QbusinessDataSource#image_extraction_status}
  */
  readonly imageExtractionStatus?: string;
}

export function qbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationToTerraform(struct?: QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    image_extraction_status: cdktn.stringToTerraform(struct!.imageExtractionStatus),
  }
}


export function qbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationToHclTerraform(struct?: QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    image_extraction_status: {
      value: cdktn.stringToHclTerraform(struct!.imageExtractionStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageExtractionStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageExtractionStatus = this._imageExtractionStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageExtractionStatus = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageExtractionStatus = value.imageExtractionStatus;
    }
  }

  // image_extraction_status - computed: true, optional: true, required: false
  private _imageExtractionStatus?: string; 
  public get imageExtractionStatus() {
    return this.getStringAttribute('image_extraction_status');
  }
  public set imageExtractionStatus(value: string) {
    this._imageExtractionStatus = value;
  }
  public resetImageExtractionStatus() {
    this._imageExtractionStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageExtractionStatusInput() {
    return this._imageExtractionStatus;
  }
}
export interface QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#video_extraction_status QbusinessDataSource#video_extraction_status}
  */
  readonly videoExtractionStatus?: string;
}

export function qbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationToTerraform(struct?: QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    video_extraction_status: cdktn.stringToTerraform(struct!.videoExtractionStatus),
  }
}


export function qbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationToHclTerraform(struct?: QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    video_extraction_status: {
      value: cdktn.stringToHclTerraform(struct!.videoExtractionStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._videoExtractionStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.videoExtractionStatus = this._videoExtractionStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._videoExtractionStatus = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._videoExtractionStatus = value.videoExtractionStatus;
    }
  }

  // video_extraction_status - computed: true, optional: true, required: false
  private _videoExtractionStatus?: string; 
  public get videoExtractionStatus() {
    return this.getStringAttribute('video_extraction_status');
  }
  public set videoExtractionStatus(value: string) {
    this._videoExtractionStatus = value;
  }
  public resetVideoExtractionStatus() {
    this._videoExtractionStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoExtractionStatusInput() {
    return this._videoExtractionStatus;
  }
}
export interface QbusinessDataSourceMediaExtractionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#audio_extraction_configuration QbusinessDataSource#audio_extraction_configuration}
  */
  readonly audioExtractionConfiguration?: QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#image_extraction_configuration QbusinessDataSource#image_extraction_configuration}
  */
  readonly imageExtractionConfiguration?: QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#video_extraction_configuration QbusinessDataSource#video_extraction_configuration}
  */
  readonly videoExtractionConfiguration?: QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration;
}

export function qbusinessDataSourceMediaExtractionConfigurationToTerraform(struct?: QbusinessDataSourceMediaExtractionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    audio_extraction_configuration: qbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationToTerraform(struct!.audioExtractionConfiguration),
    image_extraction_configuration: qbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationToTerraform(struct!.imageExtractionConfiguration),
    video_extraction_configuration: qbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationToTerraform(struct!.videoExtractionConfiguration),
  }
}


export function qbusinessDataSourceMediaExtractionConfigurationToHclTerraform(struct?: QbusinessDataSourceMediaExtractionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    audio_extraction_configuration: {
      value: qbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationToHclTerraform(struct!.audioExtractionConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration",
    },
    image_extraction_configuration: {
      value: qbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationToHclTerraform(struct!.imageExtractionConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration",
    },
    video_extraction_configuration: {
      value: qbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationToHclTerraform(struct!.videoExtractionConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QbusinessDataSourceMediaExtractionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QbusinessDataSourceMediaExtractionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioExtractionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioExtractionConfiguration = this._audioExtractionConfiguration?.internalValue;
    }
    if (this._imageExtractionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageExtractionConfiguration = this._imageExtractionConfiguration?.internalValue;
    }
    if (this._videoExtractionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.videoExtractionConfiguration = this._videoExtractionConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QbusinessDataSourceMediaExtractionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audioExtractionConfiguration.internalValue = undefined;
      this._imageExtractionConfiguration.internalValue = undefined;
      this._videoExtractionConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audioExtractionConfiguration.internalValue = value.audioExtractionConfiguration;
      this._imageExtractionConfiguration.internalValue = value.imageExtractionConfiguration;
      this._videoExtractionConfiguration.internalValue = value.videoExtractionConfiguration;
    }
  }

  // audio_extraction_configuration - computed: true, optional: true, required: false
  private _audioExtractionConfiguration = new QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference(this, "audio_extraction_configuration");
  public get audioExtractionConfiguration() {
    return this._audioExtractionConfiguration;
  }
  public putAudioExtractionConfiguration(value: QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration) {
    this._audioExtractionConfiguration.internalValue = value;
  }
  public resetAudioExtractionConfiguration() {
    this._audioExtractionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioExtractionConfigurationInput() {
    return this._audioExtractionConfiguration.internalValue;
  }

  // image_extraction_configuration - computed: true, optional: true, required: false
  private _imageExtractionConfiguration = new QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference(this, "image_extraction_configuration");
  public get imageExtractionConfiguration() {
    return this._imageExtractionConfiguration;
  }
  public putImageExtractionConfiguration(value: QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration) {
    this._imageExtractionConfiguration.internalValue = value;
  }
  public resetImageExtractionConfiguration() {
    this._imageExtractionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageExtractionConfigurationInput() {
    return this._imageExtractionConfiguration.internalValue;
  }

  // video_extraction_configuration - computed: true, optional: true, required: false
  private _videoExtractionConfiguration = new QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference(this, "video_extraction_configuration");
  public get videoExtractionConfiguration() {
    return this._videoExtractionConfiguration;
  }
  public putVideoExtractionConfiguration(value: QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration) {
    this._videoExtractionConfiguration.internalValue = value;
  }
  public resetVideoExtractionConfiguration() {
    this._videoExtractionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoExtractionConfigurationInput() {
    return this._videoExtractionConfiguration.internalValue;
  }
}
export interface QbusinessDataSourceTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#key QbusinessDataSource#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#value QbusinessDataSource#value}
  */
  readonly value?: string;
}

export function qbusinessDataSourceTagsToTerraform(struct?: QbusinessDataSourceTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function qbusinessDataSourceTagsToHclTerraform(struct?: QbusinessDataSourceTags | cdktn.IResolvable): any {
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

export class QbusinessDataSourceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QbusinessDataSourceTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: QbusinessDataSourceTags | cdktn.IResolvable | undefined) {
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

export class QbusinessDataSourceTagsList extends cdktn.ComplexList {
  public internalValue? : QbusinessDataSourceTags[] | cdktn.IResolvable

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
  public get(index: number): QbusinessDataSourceTagsOutputReference {
    return new QbusinessDataSourceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QbusinessDataSourceVpcConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#security_group_ids QbusinessDataSource#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#subnet_ids QbusinessDataSource#subnet_ids}
  */
  readonly subnetIds?: string[];
}

export function qbusinessDataSourceVpcConfigurationToTerraform(struct?: QbusinessDataSourceVpcConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function qbusinessDataSourceVpcConfigurationToHclTerraform(struct?: QbusinessDataSourceVpcConfiguration | cdktn.IResolvable): any {
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

export class QbusinessDataSourceVpcConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QbusinessDataSourceVpcConfiguration | cdktn.IResolvable | undefined {
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

  public set internalValue(value: QbusinessDataSourceVpcConfiguration | cdktn.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source awscc_qbusiness_data_source}
*/
export class QbusinessDataSource extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_qbusiness_data_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a QbusinessDataSource resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QbusinessDataSource to import
  * @param importFromId The id of the existing QbusinessDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QbusinessDataSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_qbusiness_data_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_data_source awscc_qbusiness_data_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QbusinessDataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: QbusinessDataSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_qbusiness_data_source',
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
    this._applicationId = config.applicationId;
    this._configuration = config.configuration;
    this._description = config.description;
    this._displayName = config.displayName;
    this._documentEnrichmentConfiguration.internalValue = config.documentEnrichmentConfiguration;
    this._indexId = config.indexId;
    this._mediaExtractionConfiguration.internalValue = config.mediaExtractionConfiguration;
    this._roleArn = config.roleArn;
    this._syncSchedule = config.syncSchedule;
    this._tags.internalValue = config.tags;
    this._vpcConfiguration.internalValue = config.vpcConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // data_source_arn - computed: true, optional: false, required: false
  public get dataSourceArn() {
    return this.getStringAttribute('data_source_arn');
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

  // document_enrichment_configuration - computed: true, optional: true, required: false
  private _documentEnrichmentConfiguration = new QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference(this, "document_enrichment_configuration");
  public get documentEnrichmentConfiguration() {
    return this._documentEnrichmentConfiguration;
  }
  public putDocumentEnrichmentConfiguration(value: QbusinessDataSourceDocumentEnrichmentConfiguration) {
    this._documentEnrichmentConfiguration.internalValue = value;
  }
  public resetDocumentEnrichmentConfiguration() {
    this._documentEnrichmentConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentEnrichmentConfigurationInput() {
    return this._documentEnrichmentConfiguration.internalValue;
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

  // media_extraction_configuration - computed: true, optional: true, required: false
  private _mediaExtractionConfiguration = new QbusinessDataSourceMediaExtractionConfigurationOutputReference(this, "media_extraction_configuration");
  public get mediaExtractionConfiguration() {
    return this._mediaExtractionConfiguration;
  }
  public putMediaExtractionConfiguration(value: QbusinessDataSourceMediaExtractionConfiguration) {
    this._mediaExtractionConfiguration.internalValue = value;
  }
  public resetMediaExtractionConfiguration() {
    this._mediaExtractionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaExtractionConfigurationInput() {
    return this._mediaExtractionConfiguration.internalValue;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // sync_schedule - computed: true, optional: true, required: false
  private _syncSchedule?: string; 
  public get syncSchedule() {
    return this.getStringAttribute('sync_schedule');
  }
  public set syncSchedule(value: string) {
    this._syncSchedule = value;
  }
  public resetSyncSchedule() {
    this._syncSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncScheduleInput() {
    return this._syncSchedule;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new QbusinessDataSourceTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: QbusinessDataSourceTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // vpc_configuration - computed: true, optional: true, required: false
  private _vpcConfiguration = new QbusinessDataSourceVpcConfigurationOutputReference(this, "vpc_configuration");
  public get vpcConfiguration() {
    return this._vpcConfiguration;
  }
  public putVpcConfiguration(value: QbusinessDataSourceVpcConfiguration) {
    this._vpcConfiguration.internalValue = value;
  }
  public resetVpcConfiguration() {
    this._vpcConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigurationInput() {
    return this._vpcConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktn.stringToTerraform(this._applicationId),
      configuration: cdktn.stringToTerraform(this._configuration),
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      document_enrichment_configuration: qbusinessDataSourceDocumentEnrichmentConfigurationToTerraform(this._documentEnrichmentConfiguration.internalValue),
      index_id: cdktn.stringToTerraform(this._indexId),
      media_extraction_configuration: qbusinessDataSourceMediaExtractionConfigurationToTerraform(this._mediaExtractionConfiguration.internalValue),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      sync_schedule: cdktn.stringToTerraform(this._syncSchedule),
      tags: cdktn.listMapper(qbusinessDataSourceTagsToTerraform, false)(this._tags.internalValue),
      vpc_configuration: qbusinessDataSourceVpcConfigurationToTerraform(this._vpcConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktn.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: cdktn.stringToHclTerraform(this._configuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      document_enrichment_configuration: {
        value: qbusinessDataSourceDocumentEnrichmentConfigurationToHclTerraform(this._documentEnrichmentConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "QbusinessDataSourceDocumentEnrichmentConfiguration",
      },
      index_id: {
        value: cdktn.stringToHclTerraform(this._indexId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      media_extraction_configuration: {
        value: qbusinessDataSourceMediaExtractionConfigurationToHclTerraform(this._mediaExtractionConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "QbusinessDataSourceMediaExtractionConfiguration",
      },
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_schedule: {
        value: cdktn.stringToHclTerraform(this._syncSchedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(qbusinessDataSourceTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QbusinessDataSourceTagsList",
      },
      vpc_configuration: {
        value: qbusinessDataSourceVpcConfigurationToHclTerraform(this._vpcConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "QbusinessDataSourceVpcConfiguration",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
