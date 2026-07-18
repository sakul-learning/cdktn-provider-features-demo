// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/kendra_data_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccKendraDataSourceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/kendra_data_source#id DataAwsccKendraDataSource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue {
}

export function dataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueToTerraform(struct?: DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueToHclTerraform(struct?: DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // date_value - computed: true, optional: false, required: false
  public get dateValue() {
    return this.getStringAttribute('date_value');
  }

  // long_value - computed: true, optional: false, required: false
  public get longValue() {
    return this.getNumberAttribute('long_value');
  }

  // string_list_value - computed: true, optional: false, required: false
  public get stringListValue() {
    return this.getListAttribute('string_list_value');
  }

  // string_value - computed: true, optional: false, required: false
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
}
export interface DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition {
}

export function dataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionToTerraform(struct?: DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionToHclTerraform(struct?: DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition_document_attribute_key - computed: true, optional: false, required: false
  public get conditionDocumentAttributeKey() {
    return this.getStringAttribute('condition_document_attribute_key');
  }

  // condition_on_value - computed: true, optional: false, required: false
  private _conditionOnValue = new DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference(this, "condition_on_value");
  public get conditionOnValue() {
    return this._conditionOnValue;
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }
}
export interface DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue {
}

export function dataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueToTerraform(struct?: DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueToHclTerraform(struct?: DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // date_value - computed: true, optional: false, required: false
  public get dateValue() {
    return this.getStringAttribute('date_value');
  }

  // long_value - computed: true, optional: false, required: false
  public get longValue() {
    return this.getNumberAttribute('long_value');
  }

  // string_list_value - computed: true, optional: false, required: false
  public get stringListValue() {
    return this.getListAttribute('string_list_value');
  }

  // string_value - computed: true, optional: false, required: false
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
}
export interface DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget {
}

export function dataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetToTerraform(struct?: DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetToHclTerraform(struct?: DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // target_document_attribute_key - computed: true, optional: false, required: false
  public get targetDocumentAttributeKey() {
    return this.getStringAttribute('target_document_attribute_key');
  }

  // target_document_attribute_value - computed: true, optional: false, required: false
  private _targetDocumentAttributeValue = new DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference(this, "target_document_attribute_value");
  public get targetDocumentAttributeValue() {
    return this._targetDocumentAttributeValue;
  }

  // target_document_attribute_value_deletion - computed: true, optional: false, required: false
  public get targetDocumentAttributeValueDeletion() {
    return this.getBooleanAttribute('target_document_attribute_value_deletion');
  }
}
export interface DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations {
}

export function dataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsToTerraform(struct?: DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsToHclTerraform(struct?: DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }

  // document_content_deletion - computed: true, optional: false, required: false
  public get documentContentDeletion() {
    return this.getBooleanAttribute('document_content_deletion');
  }

  // target - computed: true, optional: false, required: false
  private _target = new DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
}

export class DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference {
    return new DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue {
}

export function dataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueToTerraform(struct?: DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueToHclTerraform(struct?: DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // date_value - computed: true, optional: false, required: false
  public get dateValue() {
    return this.getStringAttribute('date_value');
  }

  // long_value - computed: true, optional: false, required: false
  public get longValue() {
    return this.getNumberAttribute('long_value');
  }

  // string_list_value - computed: true, optional: false, required: false
  public get stringListValue() {
    return this.getListAttribute('string_list_value');
  }

  // string_value - computed: true, optional: false, required: false
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
}
export interface DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition {
}

export function dataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionToTerraform(struct?: DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionToHclTerraform(struct?: DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition_document_attribute_key - computed: true, optional: false, required: false
  public get conditionDocumentAttributeKey() {
    return this.getStringAttribute('condition_document_attribute_key');
  }

  // condition_on_value - computed: true, optional: false, required: false
  private _conditionOnValue = new DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference(this, "condition_on_value");
  public get conditionOnValue() {
    return this._conditionOnValue;
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }
}
export interface DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration {
}

export function dataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationToTerraform(struct?: DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationToHclTerraform(struct?: DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // invocation_condition - computed: true, optional: false, required: false
  private _invocationCondition = new DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference(this, "invocation_condition");
  public get invocationCondition() {
    return this._invocationCondition;
  }

  // lambda_arn - computed: true, optional: false, required: false
  public get lambdaArn() {
    return this.getStringAttribute('lambda_arn');
  }

  // s3_bucket - computed: true, optional: false, required: false
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
}
export interface DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue {
}

export function dataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueToTerraform(struct?: DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueToHclTerraform(struct?: DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // date_value - computed: true, optional: false, required: false
  public get dateValue() {
    return this.getStringAttribute('date_value');
  }

  // long_value - computed: true, optional: false, required: false
  public get longValue() {
    return this.getNumberAttribute('long_value');
  }

  // string_list_value - computed: true, optional: false, required: false
  public get stringListValue() {
    return this.getListAttribute('string_list_value');
  }

  // string_value - computed: true, optional: false, required: false
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
}
export interface DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition {
}

export function dataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionToTerraform(struct?: DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionToHclTerraform(struct?: DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition_document_attribute_key - computed: true, optional: false, required: false
  public get conditionDocumentAttributeKey() {
    return this.getStringAttribute('condition_document_attribute_key');
  }

  // condition_on_value - computed: true, optional: false, required: false
  private _conditionOnValue = new DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference(this, "condition_on_value");
  public get conditionOnValue() {
    return this._conditionOnValue;
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }
}
export interface DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration {
}

export function dataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationToTerraform(struct?: DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationToHclTerraform(struct?: DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // invocation_condition - computed: true, optional: false, required: false
  private _invocationCondition = new DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference(this, "invocation_condition");
  public get invocationCondition() {
    return this._invocationCondition;
  }

  // lambda_arn - computed: true, optional: false, required: false
  public get lambdaArn() {
    return this.getStringAttribute('lambda_arn');
  }

  // s3_bucket - computed: true, optional: false, required: false
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
}
export interface DataAwsccKendraDataSourceCustomDocumentEnrichmentConfiguration {
}

export function dataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationToTerraform(struct?: DataAwsccKendraDataSourceCustomDocumentEnrichmentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationToHclTerraform(struct?: DataAwsccKendraDataSourceCustomDocumentEnrichmentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceCustomDocumentEnrichmentConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceCustomDocumentEnrichmentConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inline_configurations - computed: true, optional: false, required: false
  private _inlineConfigurations = new DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList(this, "inline_configurations", false);
  public get inlineConfigurations() {
    return this._inlineConfigurations;
  }

  // post_extraction_hook_configuration - computed: true, optional: false, required: false
  private _postExtractionHookConfiguration = new DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference(this, "post_extraction_hook_configuration");
  public get postExtractionHookConfiguration() {
    return this._postExtractionHookConfiguration;
  }

  // pre_extraction_hook_configuration - computed: true, optional: false, required: false
  private _preExtractionHookConfiguration = new DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference(this, "pre_extraction_hook_configuration");
  public get preExtractionHookConfiguration() {
    return this._preExtractionHookConfiguration;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappings {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappingsToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_source_field_name - computed: true, optional: false, required: false
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }

  // date_field_format - computed: true, optional: false, required: false
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }

  // index_field_name - computed: true, optional: false, required: false
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappingsOutputReference {
    return new DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfiguration {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attachment_field_mappings - computed: true, optional: false, required: false
  private _attachmentFieldMappings = new DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappingsList(this, "attachment_field_mappings", false);
  public get attachmentFieldMappings() {
    return this._attachmentFieldMappings;
  }

  // crawl_attachments - computed: true, optional: false, required: false
  public get crawlAttachments() {
    return this.getBooleanAttribute('crawl_attachments');
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappings {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappingsToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_source_field_name - computed: true, optional: false, required: false
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }

  // date_field_format - computed: true, optional: false, required: false
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }

  // index_field_name - computed: true, optional: false, required: false
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappingsOutputReference {
    return new DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfiguration {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // blog_field_mappings - computed: true, optional: false, required: false
  private _blogFieldMappings = new DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappingsList(this, "blog_field_mappings", false);
  public get blogFieldMappings() {
    return this._blogFieldMappings;
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappings {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappingsToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_source_field_name - computed: true, optional: false, required: false
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }

  // date_field_format - computed: true, optional: false, required: false
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }

  // index_field_name - computed: true, optional: false, required: false
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappingsOutputReference {
    return new DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfiguration {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // page_field_mappings - computed: true, optional: false, required: false
  private _pageFieldMappings = new DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappingsList(this, "page_field_mappings", false);
  public get pageFieldMappings() {
    return this._pageFieldMappings;
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappings {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappingsToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_source_field_name - computed: true, optional: false, required: false
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }

  // date_field_format - computed: true, optional: false, required: false
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }

  // index_field_name - computed: true, optional: false, required: false
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappingsOutputReference {
    return new DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfiguration {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // crawl_archived_spaces - computed: true, optional: false, required: false
  public get crawlArchivedSpaces() {
    return this.getBooleanAttribute('crawl_archived_spaces');
  }

  // crawl_personal_spaces - computed: true, optional: false, required: false
  public get crawlPersonalSpaces() {
    return this.getBooleanAttribute('crawl_personal_spaces');
  }

  // exclude_spaces - computed: true, optional: false, required: false
  public get excludeSpaces() {
    return this.getListAttribute('exclude_spaces');
  }

  // include_spaces - computed: true, optional: false, required: false
  public get includeSpaces() {
    return this.getListAttribute('include_spaces');
  }

  // space_field_mappings - computed: true, optional: false, required: false
  private _spaceFieldMappings = new DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappingsList(this, "space_field_mappings", false);
  public get spaceFieldMappings() {
    return this._spaceFieldMappings;
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfiguration {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfigurationToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfiguration {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attachment_configuration - computed: true, optional: false, required: false
  private _attachmentConfiguration = new DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationOutputReference(this, "attachment_configuration");
  public get attachmentConfiguration() {
    return this._attachmentConfiguration;
  }

  // blog_configuration - computed: true, optional: false, required: false
  private _blogConfiguration = new DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationOutputReference(this, "blog_configuration");
  public get blogConfiguration() {
    return this._blogConfiguration;
  }

  // exclusion_patterns - computed: true, optional: false, required: false
  public get exclusionPatterns() {
    return this.getListAttribute('exclusion_patterns');
  }

  // inclusion_patterns - computed: true, optional: false, required: false
  public get inclusionPatterns() {
    return this.getListAttribute('inclusion_patterns');
  }

  // page_configuration - computed: true, optional: false, required: false
  private _pageConfiguration = new DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationOutputReference(this, "page_configuration");
  public get pageConfiguration() {
    return this._pageConfiguration;
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }

  // server_url - computed: true, optional: false, required: false
  public get serverUrl() {
    return this.getStringAttribute('server_url');
  }

  // space_configuration - computed: true, optional: false, required: false
  private _spaceConfiguration = new DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationOutputReference(this, "space_configuration");
  public get spaceConfiguration() {
    return this._spaceConfiguration;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // vpc_configuration - computed: true, optional: false, required: false
  private _vpcConfiguration = new DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfigurationOutputReference(this, "vpc_configuration");
  public get vpcConfiguration() {
    return this._vpcConfiguration;
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfiguration {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfigurationToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_groups_column_name - computed: true, optional: false, required: false
  public get allowedGroupsColumnName() {
    return this.getStringAttribute('allowed_groups_column_name');
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappings {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappingsToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_source_field_name - computed: true, optional: false, required: false
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }

  // date_field_format - computed: true, optional: false, required: false
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }

  // index_field_name - computed: true, optional: false, required: false
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappingsOutputReference {
    return new DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfiguration {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // change_detecting_columns - computed: true, optional: false, required: false
  public get changeDetectingColumns() {
    return this.getListAttribute('change_detecting_columns');
  }

  // document_data_column_name - computed: true, optional: false, required: false
  public get documentDataColumnName() {
    return this.getStringAttribute('document_data_column_name');
  }

  // document_id_column_name - computed: true, optional: false, required: false
  public get documentIdColumnName() {
    return this.getStringAttribute('document_id_column_name');
  }

  // document_title_column_name - computed: true, optional: false, required: false
  public get documentTitleColumnName() {
    return this.getStringAttribute('document_title_column_name');
  }

  // field_mappings - computed: true, optional: false, required: false
  private _fieldMappings = new DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappingsList(this, "field_mappings", false);
  public get fieldMappings() {
    return this._fieldMappings;
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfiguration {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfigurationToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database_host - computed: true, optional: false, required: false
  public get databaseHost() {
    return this.getStringAttribute('database_host');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // database_port - computed: true, optional: false, required: false
  public get databasePort() {
    return this.getNumberAttribute('database_port');
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfiguration {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfigurationToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // query_identifiers_enclosing_option - computed: true, optional: false, required: false
  public get queryIdentifiersEnclosingOption() {
    return this.getStringAttribute('query_identifiers_enclosing_option');
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfiguration {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfigurationToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfiguration {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_configuration - computed: true, optional: false, required: false
  private _aclConfiguration = new DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfigurationOutputReference(this, "acl_configuration");
  public get aclConfiguration() {
    return this._aclConfiguration;
  }

  // column_configuration - computed: true, optional: false, required: false
  private _columnConfiguration = new DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationOutputReference(this, "column_configuration");
  public get columnConfiguration() {
    return this._columnConfiguration;
  }

  // connection_configuration - computed: true, optional: false, required: false
  private _connectionConfiguration = new DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfigurationOutputReference(this, "connection_configuration");
  public get connectionConfiguration() {
    return this._connectionConfiguration;
  }

  // database_engine_type - computed: true, optional: false, required: false
  public get databaseEngineType() {
    return this.getStringAttribute('database_engine_type');
  }

  // sql_configuration - computed: true, optional: false, required: false
  private _sqlConfiguration = new DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfigurationOutputReference(this, "sql_configuration");
  public get sqlConfiguration() {
    return this._sqlConfiguration;
  }

  // vpc_configuration - computed: true, optional: false, required: false
  private _vpcConfiguration = new DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfigurationOutputReference(this, "vpc_configuration");
  public get vpcConfiguration() {
    return this._vpcConfiguration;
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappings {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappingsToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_source_field_name - computed: true, optional: false, required: false
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }

  // date_field_format - computed: true, optional: false, required: false
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }

  // index_field_name - computed: true, optional: false, required: false
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappingsOutputReference {
    return new DataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfiguration {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfigurationToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exclude_mime_types - computed: true, optional: false, required: false
  public get excludeMimeTypes() {
    return this.getListAttribute('exclude_mime_types');
  }

  // exclude_shared_drives - computed: true, optional: false, required: false
  public get excludeSharedDrives() {
    return this.getListAttribute('exclude_shared_drives');
  }

  // exclude_user_accounts - computed: true, optional: false, required: false
  public get excludeUserAccounts() {
    return this.getListAttribute('exclude_user_accounts');
  }

  // exclusion_patterns - computed: true, optional: false, required: false
  public get exclusionPatterns() {
    return this.getListAttribute('exclusion_patterns');
  }

  // field_mappings - computed: true, optional: false, required: false
  private _fieldMappings = new DataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappingsList(this, "field_mappings", false);
  public get fieldMappings() {
    return this._fieldMappings;
  }

  // inclusion_patterns - computed: true, optional: false, required: false
  public get inclusionPatterns() {
    return this.getListAttribute('inclusion_patterns');
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappings {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappingsToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_source_field_name - computed: true, optional: false, required: false
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }

  // date_field_format - computed: true, optional: false, required: false
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }

  // index_field_name - computed: true, optional: false, required: false
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappingsOutputReference {
    return new DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3Path {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3PathToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3Path): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3PathToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3Path): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3PathOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3Path | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3Path | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsers {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // one_drive_user_list - computed: true, optional: false, required: false
  public get oneDriveUserList() {
    return this.getListAttribute('one_drive_user_list');
  }

  // one_drive_user_s3_path - computed: true, optional: false, required: false
  private _oneDriveUserS3Path = new DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3PathOutputReference(this, "one_drive_user_s3_path");
  public get oneDriveUserS3Path() {
    return this._oneDriveUserS3Path;
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfiguration {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable_local_groups - computed: true, optional: false, required: false
  public get disableLocalGroups() {
    return this.getBooleanAttribute('disable_local_groups');
  }

  // exclusion_patterns - computed: true, optional: false, required: false
  public get exclusionPatterns() {
    return this.getListAttribute('exclusion_patterns');
  }

  // field_mappings - computed: true, optional: false, required: false
  private _fieldMappings = new DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappingsList(this, "field_mappings", false);
  public get fieldMappings() {
    return this._fieldMappings;
  }

  // inclusion_patterns - computed: true, optional: false, required: false
  public get inclusionPatterns() {
    return this.getListAttribute('inclusion_patterns');
  }

  // one_drive_users - computed: true, optional: false, required: false
  private _oneDriveUsers = new DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOutputReference(this, "one_drive_users");
  public get oneDriveUsers() {
    return this._oneDriveUsers;
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }

  // tenant_domain - computed: true, optional: false, required: false
  public get tenantDomain() {
    return this.getStringAttribute('tenant_domain');
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfiguration {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfigurationToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_path - computed: true, optional: false, required: false
  public get keyPath() {
    return this.getStringAttribute('key_path');
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_prefix - computed: true, optional: false, required: false
  public get s3Prefix() {
    return this.getStringAttribute('s3_prefix');
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationS3Configuration {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationS3Configuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationS3Configuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationS3Configuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationS3Configuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_control_list_configuration - computed: true, optional: false, required: false
  private _accessControlListConfiguration = new DataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference(this, "access_control_list_configuration");
  public get accessControlListConfiguration() {
    return this._accessControlListConfiguration;
  }

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // documents_metadata_configuration - computed: true, optional: false, required: false
  private _documentsMetadataConfiguration = new DataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference(this, "documents_metadata_configuration");
  public get documentsMetadataConfiguration() {
    return this._documentsMetadataConfiguration;
  }

  // exclusion_patterns - computed: true, optional: false, required: false
  public get exclusionPatterns() {
    return this.getListAttribute('exclusion_patterns');
  }

  // inclusion_patterns - computed: true, optional: false, required: false
  public get inclusionPatterns() {
    return this.getListAttribute('inclusion_patterns');
  }

  // inclusion_prefixes - computed: true, optional: false, required: false
  public get inclusionPrefixes() {
    return this.getListAttribute('inclusion_prefixes');
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappings {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappingsToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_source_field_name - computed: true, optional: false, required: false
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }

  // date_field_format - computed: true, optional: false, required: false
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }

  // index_field_name - computed: true, optional: false, required: false
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappingsOutputReference {
    return new DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfiguration {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // document_data_field_name - computed: true, optional: false, required: false
  public get documentDataFieldName() {
    return this.getStringAttribute('document_data_field_name');
  }

  // document_title_field_name - computed: true, optional: false, required: false
  public get documentTitleFieldName() {
    return this.getStringAttribute('document_title_field_name');
  }

  // field_mappings - computed: true, optional: false, required: false
  private _fieldMappings = new DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappingsList(this, "field_mappings", false);
  public get fieldMappings() {
    return this._fieldMappings;
  }

  // include_filter_types - computed: true, optional: false, required: false
  public get includeFilterTypes() {
    return this.getListAttribute('include_filter_types');
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappings {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappingsToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_source_field_name - computed: true, optional: false, required: false
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }

  // date_field_format - computed: true, optional: false, required: false
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }

  // index_field_name - computed: true, optional: false, required: false
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappingsOutputReference {
    return new DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurations {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // document_data_field_name - computed: true, optional: false, required: false
  public get documentDataFieldName() {
    return this.getStringAttribute('document_data_field_name');
  }

  // document_title_field_name - computed: true, optional: false, required: false
  public get documentTitleFieldName() {
    return this.getStringAttribute('document_title_field_name');
  }

  // field_mappings - computed: true, optional: false, required: false
  private _fieldMappings = new DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappingsList(this, "field_mappings", false);
  public get fieldMappings() {
    return this._fieldMappings;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsOutputReference {
    return new DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappings {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappingsToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_source_field_name - computed: true, optional: false, required: false
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }

  // date_field_format - computed: true, optional: false, required: false
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }

  // index_field_name - computed: true, optional: false, required: false
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappingsOutputReference {
    return new DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfiguration {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // document_data_field_name - computed: true, optional: false, required: false
  public get documentDataFieldName() {
    return this.getStringAttribute('document_data_field_name');
  }

  // document_title_field_name - computed: true, optional: false, required: false
  public get documentTitleFieldName() {
    return this.getStringAttribute('document_title_field_name');
  }

  // field_mappings - computed: true, optional: false, required: false
  private _fieldMappings = new DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappingsList(this, "field_mappings", false);
  public get fieldMappings() {
    return this._fieldMappings;
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfiguration {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_knowledge_article_type_configurations - computed: true, optional: false, required: false
  private _customKnowledgeArticleTypeConfigurations = new DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsList(this, "custom_knowledge_article_type_configurations", false);
  public get customKnowledgeArticleTypeConfigurations() {
    return this._customKnowledgeArticleTypeConfigurations;
  }

  // included_states - computed: true, optional: false, required: false
  public get includedStates() {
    return this.getListAttribute('included_states');
  }

  // standard_knowledge_article_type_configuration - computed: true, optional: false, required: false
  private _standardKnowledgeArticleTypeConfiguration = new DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationOutputReference(this, "standard_knowledge_article_type_configuration");
  public get standardKnowledgeArticleTypeConfiguration() {
    return this._standardKnowledgeArticleTypeConfiguration;
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappings {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappingsToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_source_field_name - computed: true, optional: false, required: false
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }

  // date_field_format - computed: true, optional: false, required: false
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }

  // index_field_name - computed: true, optional: false, required: false
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappingsOutputReference {
    return new DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfiguration {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // document_title_field_name - computed: true, optional: false, required: false
  public get documentTitleFieldName() {
    return this.getStringAttribute('document_title_field_name');
  }

  // field_mappings - computed: true, optional: false, required: false
  private _fieldMappings = new DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappingsList(this, "field_mappings", false);
  public get fieldMappings() {
    return this._fieldMappings;
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappings {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappingsToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_source_field_name - computed: true, optional: false, required: false
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }

  // date_field_format - computed: true, optional: false, required: false
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }

  // index_field_name - computed: true, optional: false, required: false
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappingsOutputReference {
    return new DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurations {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // document_data_field_name - computed: true, optional: false, required: false
  public get documentDataFieldName() {
    return this.getStringAttribute('document_data_field_name');
  }

  // document_title_field_name - computed: true, optional: false, required: false
  public get documentTitleFieldName() {
    return this.getStringAttribute('document_title_field_name');
  }

  // field_mappings - computed: true, optional: false, required: false
  private _fieldMappings = new DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappingsList(this, "field_mappings", false);
  public get fieldMappings() {
    return this._fieldMappings;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsOutputReference {
    return new DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfiguration {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // chatter_feed_configuration - computed: true, optional: false, required: false
  private _chatterFeedConfiguration = new DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationOutputReference(this, "chatter_feed_configuration");
  public get chatterFeedConfiguration() {
    return this._chatterFeedConfiguration;
  }

  // crawl_attachments - computed: true, optional: false, required: false
  public get crawlAttachments() {
    return this.getBooleanAttribute('crawl_attachments');
  }

  // exclude_attachment_file_patterns - computed: true, optional: false, required: false
  public get excludeAttachmentFilePatterns() {
    return this.getListAttribute('exclude_attachment_file_patterns');
  }

  // include_attachment_file_patterns - computed: true, optional: false, required: false
  public get includeAttachmentFilePatterns() {
    return this.getListAttribute('include_attachment_file_patterns');
  }

  // knowledge_article_configuration - computed: true, optional: false, required: false
  private _knowledgeArticleConfiguration = new DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationOutputReference(this, "knowledge_article_configuration");
  public get knowledgeArticleConfiguration() {
    return this._knowledgeArticleConfiguration;
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }

  // server_url - computed: true, optional: false, required: false
  public get serverUrl() {
    return this.getStringAttribute('server_url');
  }

  // standard_object_attachment_configuration - computed: true, optional: false, required: false
  private _standardObjectAttachmentConfiguration = new DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationOutputReference(this, "standard_object_attachment_configuration");
  public get standardObjectAttachmentConfiguration() {
    return this._standardObjectAttachmentConfiguration;
  }

  // standard_object_configurations - computed: true, optional: false, required: false
  private _standardObjectConfigurations = new DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsList(this, "standard_object_configurations", false);
  public get standardObjectConfigurations() {
    return this._standardObjectConfigurations;
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappings {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappingsToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_source_field_name - computed: true, optional: false, required: false
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }

  // date_field_format - computed: true, optional: false, required: false
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }

  // index_field_name - computed: true, optional: false, required: false
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappingsOutputReference {
    return new DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfiguration {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // crawl_attachments - computed: true, optional: false, required: false
  public get crawlAttachments() {
    return this.getBooleanAttribute('crawl_attachments');
  }

  // document_data_field_name - computed: true, optional: false, required: false
  public get documentDataFieldName() {
    return this.getStringAttribute('document_data_field_name');
  }

  // document_title_field_name - computed: true, optional: false, required: false
  public get documentTitleFieldName() {
    return this.getStringAttribute('document_title_field_name');
  }

  // exclude_attachment_file_patterns - computed: true, optional: false, required: false
  public get excludeAttachmentFilePatterns() {
    return this.getListAttribute('exclude_attachment_file_patterns');
  }

  // field_mappings - computed: true, optional: false, required: false
  private _fieldMappings = new DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappingsList(this, "field_mappings", false);
  public get fieldMappings() {
    return this._fieldMappings;
  }

  // filter_query - computed: true, optional: false, required: false
  public get filterQuery() {
    return this.getStringAttribute('filter_query');
  }

  // include_attachment_file_patterns - computed: true, optional: false, required: false
  public get includeAttachmentFilePatterns() {
    return this.getListAttribute('include_attachment_file_patterns');
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappings {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappingsToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_source_field_name - computed: true, optional: false, required: false
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }

  // date_field_format - computed: true, optional: false, required: false
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }

  // index_field_name - computed: true, optional: false, required: false
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappingsOutputReference {
    return new DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfiguration {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // crawl_attachments - computed: true, optional: false, required: false
  public get crawlAttachments() {
    return this.getBooleanAttribute('crawl_attachments');
  }

  // document_data_field_name - computed: true, optional: false, required: false
  public get documentDataFieldName() {
    return this.getStringAttribute('document_data_field_name');
  }

  // document_title_field_name - computed: true, optional: false, required: false
  public get documentTitleFieldName() {
    return this.getStringAttribute('document_title_field_name');
  }

  // exclude_attachment_file_patterns - computed: true, optional: false, required: false
  public get excludeAttachmentFilePatterns() {
    return this.getListAttribute('exclude_attachment_file_patterns');
  }

  // field_mappings - computed: true, optional: false, required: false
  private _fieldMappings = new DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappingsList(this, "field_mappings", false);
  public get fieldMappings() {
    return this._fieldMappings;
  }

  // include_attachment_file_patterns - computed: true, optional: false, required: false
  public get includeAttachmentFilePatterns() {
    return this.getListAttribute('include_attachment_file_patterns');
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfiguration {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_type - computed: true, optional: false, required: false
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }

  // host_url - computed: true, optional: false, required: false
  public get hostUrl() {
    return this.getStringAttribute('host_url');
  }

  // knowledge_article_configuration - computed: true, optional: false, required: false
  private _knowledgeArticleConfiguration = new DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationOutputReference(this, "knowledge_article_configuration");
  public get knowledgeArticleConfiguration() {
    return this._knowledgeArticleConfiguration;
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }

  // service_catalog_configuration - computed: true, optional: false, required: false
  private _serviceCatalogConfiguration = new DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationOutputReference(this, "service_catalog_configuration");
  public get serviceCatalogConfiguration() {
    return this._serviceCatalogConfiguration;
  }

  // service_now_build_version - computed: true, optional: false, required: false
  public get serviceNowBuildVersion() {
    return this.getStringAttribute('service_now_build_version');
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappings {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappingsToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_source_field_name - computed: true, optional: false, required: false
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }

  // date_field_format - computed: true, optional: false, required: false
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }

  // index_field_name - computed: true, optional: false, required: false
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappingsOutputReference {
    return new DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationSslCertificateS3Path {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationSslCertificateS3PathToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationSslCertificateS3Path): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationSslCertificateS3PathToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationSslCertificateS3Path): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationSslCertificateS3PathOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationSslCertificateS3Path | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationSslCertificateS3Path | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfiguration {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfigurationToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfiguration {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // crawl_attachments - computed: true, optional: false, required: false
  public get crawlAttachments() {
    return this.getBooleanAttribute('crawl_attachments');
  }

  // disable_local_groups - computed: true, optional: false, required: false
  public get disableLocalGroups() {
    return this.getBooleanAttribute('disable_local_groups');
  }

  // document_title_field_name - computed: true, optional: false, required: false
  public get documentTitleFieldName() {
    return this.getStringAttribute('document_title_field_name');
  }

  // exclusion_patterns - computed: true, optional: false, required: false
  public get exclusionPatterns() {
    return this.getListAttribute('exclusion_patterns');
  }

  // field_mappings - computed: true, optional: false, required: false
  private _fieldMappings = new DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappingsList(this, "field_mappings", false);
  public get fieldMappings() {
    return this._fieldMappings;
  }

  // inclusion_patterns - computed: true, optional: false, required: false
  public get inclusionPatterns() {
    return this.getListAttribute('inclusion_patterns');
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }

  // share_point_version - computed: true, optional: false, required: false
  public get sharePointVersion() {
    return this.getStringAttribute('share_point_version');
  }

  // ssl_certificate_s3_path - computed: true, optional: false, required: false
  private _sslCertificateS3Path = new DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationSslCertificateS3PathOutputReference(this, "ssl_certificate_s3_path");
  public get sslCertificateS3Path() {
    return this._sslCertificateS3Path;
  }

  // urls - computed: true, optional: false, required: false
  public get urls() {
    return this.getListAttribute('urls');
  }

  // use_change_log - computed: true, optional: false, required: false
  public get useChangeLog() {
    return this.getBooleanAttribute('use_change_log');
  }

  // vpc_configuration - computed: true, optional: false, required: false
  private _vpcConfiguration = new DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfigurationOutputReference(this, "vpc_configuration");
  public get vpcConfiguration() {
    return this._vpcConfiguration;
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationTemplateConfiguration {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationTemplateConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationTemplateConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationTemplateConfigurationToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationTemplateConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationTemplateConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationTemplateConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationTemplateConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // template - computed: true, optional: false, required: false
  public get template() {
    return this.getStringAttribute('template');
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credentials - computed: true, optional: false, required: false
  public get credentials() {
    return this.getStringAttribute('credentials');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference {
    return new DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // basic_authentication - computed: true, optional: false, required: false
  private _basicAuthentication = new DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList(this, "basic_authentication", false);
  public get basicAuthentication() {
    return this._basicAuthentication;
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credentials - computed: true, optional: false, required: false
  public get credentials() {
    return this.getStringAttribute('credentials');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // seed_urls - computed: true, optional: false, required: false
  public get seedUrls() {
    return this.getListAttribute('seed_urls');
  }

  // web_crawler_mode - computed: true, optional: false, required: false
  public get webCrawlerMode() {
    return this.getStringAttribute('web_crawler_mode');
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // site_maps - computed: true, optional: false, required: false
  public get siteMaps() {
    return this.getListAttribute('site_maps');
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrls {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrls): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrls): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // seed_url_configuration - computed: true, optional: false, required: false
  private _seedUrlConfiguration = new DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference(this, "seed_url_configuration");
  public get seedUrlConfiguration() {
    return this._seedUrlConfiguration;
  }

  // site_maps_configuration - computed: true, optional: false, required: false
  private _siteMapsConfiguration = new DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference(this, "site_maps_configuration");
  public get siteMapsConfiguration() {
    return this._siteMapsConfiguration;
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfiguration {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_configuration - computed: true, optional: false, required: false
  private _authenticationConfiguration = new DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference(this, "authentication_configuration");
  public get authenticationConfiguration() {
    return this._authenticationConfiguration;
  }

  // crawl_depth - computed: true, optional: false, required: false
  public get crawlDepth() {
    return this.getNumberAttribute('crawl_depth');
  }

  // max_content_size_per_page_in_mega_bytes - computed: true, optional: false, required: false
  public get maxContentSizePerPageInMegaBytes() {
    return this.getNumberAttribute('max_content_size_per_page_in_mega_bytes');
  }

  // max_links_per_page - computed: true, optional: false, required: false
  public get maxLinksPerPage() {
    return this.getNumberAttribute('max_links_per_page');
  }

  // max_urls_per_minute_crawl_rate - computed: true, optional: false, required: false
  public get maxUrlsPerMinuteCrawlRate() {
    return this.getNumberAttribute('max_urls_per_minute_crawl_rate');
  }

  // proxy_configuration - computed: true, optional: false, required: false
  private _proxyConfiguration = new DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference(this, "proxy_configuration");
  public get proxyConfiguration() {
    return this._proxyConfiguration;
  }

  // url_exclusion_patterns - computed: true, optional: false, required: false
  public get urlExclusionPatterns() {
    return this.getListAttribute('url_exclusion_patterns');
  }

  // url_inclusion_patterns - computed: true, optional: false, required: false
  public get urlInclusionPatterns() {
    return this.getListAttribute('url_inclusion_patterns');
  }

  // urls - computed: true, optional: false, required: false
  private _urls = new DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference(this, "urls");
  public get urls() {
    return this._urls;
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationWorkDocsConfigurationFieldMappings {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationWorkDocsConfigurationFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationWorkDocsConfigurationFieldMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationWorkDocsConfigurationFieldMappingsToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationWorkDocsConfigurationFieldMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationWorkDocsConfigurationFieldMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationWorkDocsConfigurationFieldMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationWorkDocsConfigurationFieldMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_source_field_name - computed: true, optional: false, required: false
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }

  // date_field_format - computed: true, optional: false, required: false
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }

  // index_field_name - computed: true, optional: false, required: false
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationWorkDocsConfigurationFieldMappingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKendraDataSourceDataSourceConfigurationWorkDocsConfigurationFieldMappingsOutputReference {
    return new DataAwsccKendraDataSourceDataSourceConfigurationWorkDocsConfigurationFieldMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfigurationWorkDocsConfiguration {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationWorkDocsConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationWorkDocsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationWorkDocsConfigurationToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationWorkDocsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationWorkDocsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfigurationWorkDocsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfigurationWorkDocsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // crawl_comments - computed: true, optional: false, required: false
  public get crawlComments() {
    return this.getBooleanAttribute('crawl_comments');
  }

  // exclusion_patterns - computed: true, optional: false, required: false
  public get exclusionPatterns() {
    return this.getListAttribute('exclusion_patterns');
  }

  // field_mappings - computed: true, optional: false, required: false
  private _fieldMappings = new DataAwsccKendraDataSourceDataSourceConfigurationWorkDocsConfigurationFieldMappingsList(this, "field_mappings", false);
  public get fieldMappings() {
    return this._fieldMappings;
  }

  // inclusion_patterns - computed: true, optional: false, required: false
  public get inclusionPatterns() {
    return this.getListAttribute('inclusion_patterns');
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // use_change_log - computed: true, optional: false, required: false
  public get useChangeLog() {
    return this.getBooleanAttribute('use_change_log');
  }
}
export interface DataAwsccKendraDataSourceDataSourceConfiguration {
}

export function dataAwsccKendraDataSourceDataSourceConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceDataSourceConfigurationToHclTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceDataSourceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraDataSourceDataSourceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceDataSourceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // confluence_configuration - computed: true, optional: false, required: false
  private _confluenceConfiguration = new DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationOutputReference(this, "confluence_configuration");
  public get confluenceConfiguration() {
    return this._confluenceConfiguration;
  }

  // database_configuration - computed: true, optional: false, required: false
  private _databaseConfiguration = new DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationOutputReference(this, "database_configuration");
  public get databaseConfiguration() {
    return this._databaseConfiguration;
  }

  // google_drive_configuration - computed: true, optional: false, required: false
  private _googleDriveConfiguration = new DataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfigurationOutputReference(this, "google_drive_configuration");
  public get googleDriveConfiguration() {
    return this._googleDriveConfiguration;
  }

  // one_drive_configuration - computed: true, optional: false, required: false
  private _oneDriveConfiguration = new DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOutputReference(this, "one_drive_configuration");
  public get oneDriveConfiguration() {
    return this._oneDriveConfiguration;
  }

  // s3_configuration - computed: true, optional: false, required: false
  private _s3Configuration = new DataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationOutputReference(this, "s3_configuration");
  public get s3Configuration() {
    return this._s3Configuration;
  }

  // salesforce_configuration - computed: true, optional: false, required: false
  private _salesforceConfiguration = new DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationOutputReference(this, "salesforce_configuration");
  public get salesforceConfiguration() {
    return this._salesforceConfiguration;
  }

  // service_now_configuration - computed: true, optional: false, required: false
  private _serviceNowConfiguration = new DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationOutputReference(this, "service_now_configuration");
  public get serviceNowConfiguration() {
    return this._serviceNowConfiguration;
  }

  // share_point_configuration - computed: true, optional: false, required: false
  private _sharePointConfiguration = new DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationOutputReference(this, "share_point_configuration");
  public get sharePointConfiguration() {
    return this._sharePointConfiguration;
  }

  // template_configuration - computed: true, optional: false, required: false
  private _templateConfiguration = new DataAwsccKendraDataSourceDataSourceConfigurationTemplateConfigurationOutputReference(this, "template_configuration");
  public get templateConfiguration() {
    return this._templateConfiguration;
  }

  // web_crawler_configuration - computed: true, optional: false, required: false
  private _webCrawlerConfiguration = new DataAwsccKendraDataSourceDataSourceConfigurationWebCrawlerConfigurationOutputReference(this, "web_crawler_configuration");
  public get webCrawlerConfiguration() {
    return this._webCrawlerConfiguration;
  }

  // work_docs_configuration - computed: true, optional: false, required: false
  private _workDocsConfiguration = new DataAwsccKendraDataSourceDataSourceConfigurationWorkDocsConfigurationOutputReference(this, "work_docs_configuration");
  public get workDocsConfiguration() {
    return this._workDocsConfiguration;
  }
}
export interface DataAwsccKendraDataSourceTags {
}

export function dataAwsccKendraDataSourceTagsToTerraform(struct?: DataAwsccKendraDataSourceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraDataSourceTagsToHclTerraform(struct?: DataAwsccKendraDataSourceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraDataSourceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKendraDataSourceTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraDataSourceTags | undefined) {
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

export class DataAwsccKendraDataSourceTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKendraDataSourceTagsOutputReference {
    return new DataAwsccKendraDataSourceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/kendra_data_source awscc_kendra_data_source}
*/
export class DataAwsccKendraDataSource extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_kendra_data_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccKendraDataSource resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccKendraDataSource to import
  * @param importFromId The id of the existing DataAwsccKendraDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/kendra_data_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccKendraDataSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_kendra_data_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/kendra_data_source awscc_kendra_data_source} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccKendraDataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccKendraDataSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_kendra_data_source',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // custom_document_enrichment_configuration - computed: true, optional: false, required: false
  private _customDocumentEnrichmentConfiguration = new DataAwsccKendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference(this, "custom_document_enrichment_configuration");
  public get customDocumentEnrichmentConfiguration() {
    return this._customDocumentEnrichmentConfiguration;
  }

  // data_source_configuration - computed: true, optional: false, required: false
  private _dataSourceConfiguration = new DataAwsccKendraDataSourceDataSourceConfigurationOutputReference(this, "data_source_configuration");
  public get dataSourceConfiguration() {
    return this._dataSourceConfiguration;
  }

  // data_source_id - computed: true, optional: false, required: false
  public get dataSourceId() {
    return this.getStringAttribute('data_source_id');
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

  // index_id - computed: true, optional: false, required: false
  public get indexId() {
    return this.getStringAttribute('index_id');
  }

  // language_code - computed: true, optional: false, required: false
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // schedule - computed: true, optional: false, required: false
  public get schedule() {
    return this.getStringAttribute('schedule');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccKendraDataSourceTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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
