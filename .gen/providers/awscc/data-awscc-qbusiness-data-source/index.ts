// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/qbusiness_data_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccQbusinessDataSourceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/qbusiness_data_source#id DataAwsccQbusinessDataSource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue {
}

export function dataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueToTerraform(struct?: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueToHclTerraform(struct?: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue | undefined) {
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
export interface DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition {
}

export function dataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionToTerraform(struct?: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionToHclTerraform(struct?: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition | undefined) {
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

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue {
}

export function dataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueToTerraform(struct?: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueToHclTerraform(struct?: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue | undefined) {
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
export interface DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget {
}

export function dataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetToTerraform(struct?: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetToHclTerraform(struct?: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_value_operator - computed: true, optional: false, required: false
  public get attributeValueOperator() {
    return this.getStringAttribute('attribute_value_operator');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations {
}

export function dataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsToTerraform(struct?: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsToHclTerraform(struct?: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }

  // document_content_operator - computed: true, optional: false, required: false
  public get documentContentOperator() {
    return this.getStringAttribute('document_content_operator');
  }

  // target - computed: true, optional: false, required: false
  private _target = new DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
}

export class DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference {
    return new DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue {
}

export function dataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueToTerraform(struct?: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueToHclTerraform(struct?: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue | undefined) {
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
export interface DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition {
}

export function dataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionToTerraform(struct?: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionToHclTerraform(struct?: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition | undefined) {
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

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration {
}

export function dataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationToTerraform(struct?: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationToHclTerraform(struct?: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // invocation_condition - computed: true, optional: false, required: false
  private _invocationCondition = new DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference(this, "invocation_condition");
  public get invocationCondition() {
    return this._invocationCondition;
  }

  // lambda_arn - computed: true, optional: false, required: false
  public get lambdaArn() {
    return this.getStringAttribute('lambda_arn');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // s3_bucket_name - computed: true, optional: false, required: false
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
}
export interface DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue {
}

export function dataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueToTerraform(struct?: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueToHclTerraform(struct?: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue | undefined) {
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
export interface DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition {
}

export function dataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionToTerraform(struct?: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionToHclTerraform(struct?: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition | undefined) {
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

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration {
}

export function dataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationToTerraform(struct?: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationToHclTerraform(struct?: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // invocation_condition - computed: true, optional: false, required: false
  private _invocationCondition = new DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference(this, "invocation_condition");
  public get invocationCondition() {
    return this._invocationCondition;
  }

  // lambda_arn - computed: true, optional: false, required: false
  public get lambdaArn() {
    return this.getStringAttribute('lambda_arn');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // s3_bucket_name - computed: true, optional: false, required: false
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
}
export interface DataAwsccQbusinessDataSourceDocumentEnrichmentConfiguration {
}

export function dataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationToTerraform(struct?: DataAwsccQbusinessDataSourceDocumentEnrichmentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationToHclTerraform(struct?: DataAwsccQbusinessDataSourceDocumentEnrichmentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQbusinessDataSourceDocumentEnrichmentConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQbusinessDataSourceDocumentEnrichmentConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inline_configurations - computed: true, optional: false, required: false
  private _inlineConfigurations = new DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList(this, "inline_configurations", false);
  public get inlineConfigurations() {
    return this._inlineConfigurations;
  }

  // post_extraction_hook_configuration - computed: true, optional: false, required: false
  private _postExtractionHookConfiguration = new DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference(this, "post_extraction_hook_configuration");
  public get postExtractionHookConfiguration() {
    return this._postExtractionHookConfiguration;
  }

  // pre_extraction_hook_configuration - computed: true, optional: false, required: false
  private _preExtractionHookConfiguration = new DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference(this, "pre_extraction_hook_configuration");
  public get preExtractionHookConfiguration() {
    return this._preExtractionHookConfiguration;
  }
}
export interface DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration {
}

export function dataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationToTerraform(struct?: DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationToHclTerraform(struct?: DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audio_extraction_status - computed: true, optional: false, required: false
  public get audioExtractionStatus() {
    return this.getStringAttribute('audio_extraction_status');
  }
}
export interface DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration {
}

export function dataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationToTerraform(struct?: DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationToHclTerraform(struct?: DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // image_extraction_status - computed: true, optional: false, required: false
  public get imageExtractionStatus() {
    return this.getStringAttribute('image_extraction_status');
  }
}
export interface DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration {
}

export function dataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationToTerraform(struct?: DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationToHclTerraform(struct?: DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // video_extraction_status - computed: true, optional: false, required: false
  public get videoExtractionStatus() {
    return this.getStringAttribute('video_extraction_status');
  }
}
export interface DataAwsccQbusinessDataSourceMediaExtractionConfiguration {
}

export function dataAwsccQbusinessDataSourceMediaExtractionConfigurationToTerraform(struct?: DataAwsccQbusinessDataSourceMediaExtractionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQbusinessDataSourceMediaExtractionConfigurationToHclTerraform(struct?: DataAwsccQbusinessDataSourceMediaExtractionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQbusinessDataSourceMediaExtractionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQbusinessDataSourceMediaExtractionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audio_extraction_configuration - computed: true, optional: false, required: false
  private _audioExtractionConfiguration = new DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference(this, "audio_extraction_configuration");
  public get audioExtractionConfiguration() {
    return this._audioExtractionConfiguration;
  }

  // image_extraction_configuration - computed: true, optional: false, required: false
  private _imageExtractionConfiguration = new DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference(this, "image_extraction_configuration");
  public get imageExtractionConfiguration() {
    return this._imageExtractionConfiguration;
  }

  // video_extraction_configuration - computed: true, optional: false, required: false
  private _videoExtractionConfiguration = new DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference(this, "video_extraction_configuration");
  public get videoExtractionConfiguration() {
    return this._videoExtractionConfiguration;
  }
}
export interface DataAwsccQbusinessDataSourceTags {
}

export function dataAwsccQbusinessDataSourceTagsToTerraform(struct?: DataAwsccQbusinessDataSourceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQbusinessDataSourceTagsToHclTerraform(struct?: DataAwsccQbusinessDataSourceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQbusinessDataSourceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccQbusinessDataSourceTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQbusinessDataSourceTags | undefined) {
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

export class DataAwsccQbusinessDataSourceTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccQbusinessDataSourceTagsOutputReference {
    return new DataAwsccQbusinessDataSourceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccQbusinessDataSourceVpcConfiguration {
}

export function dataAwsccQbusinessDataSourceVpcConfigurationToTerraform(struct?: DataAwsccQbusinessDataSourceVpcConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQbusinessDataSourceVpcConfigurationToHclTerraform(struct?: DataAwsccQbusinessDataSourceVpcConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQbusinessDataSourceVpcConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQbusinessDataSourceVpcConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQbusinessDataSourceVpcConfiguration | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/qbusiness_data_source awscc_qbusiness_data_source}
*/
export class DataAwsccQbusinessDataSource extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_qbusiness_data_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccQbusinessDataSource resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccQbusinessDataSource to import
  * @param importFromId The id of the existing DataAwsccQbusinessDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/qbusiness_data_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccQbusinessDataSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_qbusiness_data_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/qbusiness_data_source awscc_qbusiness_data_source} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccQbusinessDataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccQbusinessDataSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_qbusiness_data_source',
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

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // configuration - computed: true, optional: false, required: false
  public get configuration() {
    return this.getStringAttribute('configuration');
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // document_enrichment_configuration - computed: true, optional: false, required: false
  private _documentEnrichmentConfiguration = new DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference(this, "document_enrichment_configuration");
  public get documentEnrichmentConfiguration() {
    return this._documentEnrichmentConfiguration;
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

  // media_extraction_configuration - computed: true, optional: false, required: false
  private _mediaExtractionConfiguration = new DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference(this, "media_extraction_configuration");
  public get mediaExtractionConfiguration() {
    return this._mediaExtractionConfiguration;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // sync_schedule - computed: true, optional: false, required: false
  public get syncSchedule() {
    return this.getStringAttribute('sync_schedule');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccQbusinessDataSourceTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // vpc_configuration - computed: true, optional: false, required: false
  private _vpcConfiguration = new DataAwsccQbusinessDataSourceVpcConfigurationOutputReference(this, "vpc_configuration");
  public get vpcConfiguration() {
    return this._vpcConfiguration;
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
