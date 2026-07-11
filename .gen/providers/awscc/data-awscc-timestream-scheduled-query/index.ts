// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/timestream_scheduled_query
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccTimestreamScheduledQueryConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/timestream_scheduled_query#id DataAwsccTimestreamScheduledQuery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccTimestreamScheduledQueryErrorReportConfigurationS3Configuration {
}

export function dataAwsccTimestreamScheduledQueryErrorReportConfigurationS3ConfigurationToTerraform(struct?: DataAwsccTimestreamScheduledQueryErrorReportConfigurationS3Configuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTimestreamScheduledQueryErrorReportConfigurationS3ConfigurationToHclTerraform(struct?: DataAwsccTimestreamScheduledQueryErrorReportConfigurationS3Configuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTimestreamScheduledQueryErrorReportConfigurationS3Configuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTimestreamScheduledQueryErrorReportConfigurationS3Configuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // encryption_option - computed: true, optional: false, required: false
  public get encryptionOption() {
    return this.getStringAttribute('encryption_option');
  }

  // object_key_prefix - computed: true, optional: false, required: false
  public get objectKeyPrefix() {
    return this.getStringAttribute('object_key_prefix');
  }
}
export interface DataAwsccTimestreamScheduledQueryErrorReportConfiguration {
}

export function dataAwsccTimestreamScheduledQueryErrorReportConfigurationToTerraform(struct?: DataAwsccTimestreamScheduledQueryErrorReportConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTimestreamScheduledQueryErrorReportConfigurationToHclTerraform(struct?: DataAwsccTimestreamScheduledQueryErrorReportConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTimestreamScheduledQueryErrorReportConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTimestreamScheduledQueryErrorReportConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTimestreamScheduledQueryErrorReportConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_configuration - computed: true, optional: false, required: false
  private _s3Configuration = new DataAwsccTimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference(this, "s3_configuration");
  public get s3Configuration() {
    return this._s3Configuration;
  }
}
export interface DataAwsccTimestreamScheduledQueryNotificationConfigurationSnsConfiguration {
}

export function dataAwsccTimestreamScheduledQueryNotificationConfigurationSnsConfigurationToTerraform(struct?: DataAwsccTimestreamScheduledQueryNotificationConfigurationSnsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTimestreamScheduledQueryNotificationConfigurationSnsConfigurationToHclTerraform(struct?: DataAwsccTimestreamScheduledQueryNotificationConfigurationSnsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTimestreamScheduledQueryNotificationConfigurationSnsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTimestreamScheduledQueryNotificationConfigurationSnsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // topic_arn - computed: true, optional: false, required: false
  public get topicArn() {
    return this.getStringAttribute('topic_arn');
  }
}
export interface DataAwsccTimestreamScheduledQueryNotificationConfiguration {
}

export function dataAwsccTimestreamScheduledQueryNotificationConfigurationToTerraform(struct?: DataAwsccTimestreamScheduledQueryNotificationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTimestreamScheduledQueryNotificationConfigurationToHclTerraform(struct?: DataAwsccTimestreamScheduledQueryNotificationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTimestreamScheduledQueryNotificationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTimestreamScheduledQueryNotificationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTimestreamScheduledQueryNotificationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sns_configuration - computed: true, optional: false, required: false
  private _snsConfiguration = new DataAwsccTimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference(this, "sns_configuration");
  public get snsConfiguration() {
    return this._snsConfiguration;
  }
}
export interface DataAwsccTimestreamScheduledQueryScheduleConfiguration {
}

export function dataAwsccTimestreamScheduledQueryScheduleConfigurationToTerraform(struct?: DataAwsccTimestreamScheduledQueryScheduleConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTimestreamScheduledQueryScheduleConfigurationToHclTerraform(struct?: DataAwsccTimestreamScheduledQueryScheduleConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTimestreamScheduledQueryScheduleConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTimestreamScheduledQueryScheduleConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTimestreamScheduledQueryScheduleConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // schedule_expression - computed: true, optional: false, required: false
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }
}
export interface DataAwsccTimestreamScheduledQueryTags {
}

export function dataAwsccTimestreamScheduledQueryTagsToTerraform(struct?: DataAwsccTimestreamScheduledQueryTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTimestreamScheduledQueryTagsToHclTerraform(struct?: DataAwsccTimestreamScheduledQueryTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTimestreamScheduledQueryTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccTimestreamScheduledQueryTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTimestreamScheduledQueryTags | undefined) {
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

export class DataAwsccTimestreamScheduledQueryTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccTimestreamScheduledQueryTagsOutputReference {
    return new DataAwsccTimestreamScheduledQueryTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings {
}

export function dataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsToTerraform(struct?: DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsToHclTerraform(struct?: DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_value_type - computed: true, optional: false, required: false
  public get dimensionValueType() {
    return this.getStringAttribute('dimension_value_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference {
    return new DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings {
}

export function dataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsToTerraform(struct?: DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsToHclTerraform(struct?: DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // measure_value_type - computed: true, optional: false, required: false
  public get measureValueType() {
    return this.getStringAttribute('measure_value_type');
  }

  // source_column - computed: true, optional: false, required: false
  public get sourceColumn() {
    return this.getStringAttribute('source_column');
  }

  // target_multi_measure_attribute_name - computed: true, optional: false, required: false
  public get targetMultiMeasureAttributeName() {
    return this.getStringAttribute('target_multi_measure_attribute_name');
  }
}

export class DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference {
    return new DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings {
}

export function dataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsToTerraform(struct?: DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsToHclTerraform(struct?: DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // measure_name - computed: true, optional: false, required: false
  public get measureName() {
    return this.getStringAttribute('measure_name');
  }

  // measure_value_type - computed: true, optional: false, required: false
  public get measureValueType() {
    return this.getStringAttribute('measure_value_type');
  }

  // multi_measure_attribute_mappings - computed: true, optional: false, required: false
  private _multiMeasureAttributeMappings = new DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList(this, "multi_measure_attribute_mappings", false);
  public get multiMeasureAttributeMappings() {
    return this._multiMeasureAttributeMappings;
  }

  // source_column - computed: true, optional: false, required: false
  public get sourceColumn() {
    return this.getStringAttribute('source_column');
  }

  // target_measure_name - computed: true, optional: false, required: false
  public get targetMeasureName() {
    return this.getStringAttribute('target_measure_name');
  }
}

export class DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference {
    return new DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings {
}

export function dataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsToTerraform(struct?: DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsToHclTerraform(struct?: DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // measure_value_type - computed: true, optional: false, required: false
  public get measureValueType() {
    return this.getStringAttribute('measure_value_type');
  }

  // source_column - computed: true, optional: false, required: false
  public get sourceColumn() {
    return this.getStringAttribute('source_column');
  }

  // target_multi_measure_attribute_name - computed: true, optional: false, required: false
  public get targetMultiMeasureAttributeName() {
    return this.getStringAttribute('target_multi_measure_attribute_name');
  }
}

export class DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference {
    return new DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings {
}

export function dataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsToTerraform(struct?: DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsToHclTerraform(struct?: DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // multi_measure_attribute_mappings - computed: true, optional: false, required: false
  private _multiMeasureAttributeMappings = new DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList(this, "multi_measure_attribute_mappings", false);
  public get multiMeasureAttributeMappings() {
    return this._multiMeasureAttributeMappings;
  }

  // target_multi_measure_name - computed: true, optional: false, required: false
  public get targetMultiMeasureName() {
    return this.getStringAttribute('target_multi_measure_name');
  }
}
export interface DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfiguration {
}

export function dataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationToTerraform(struct?: DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationToHclTerraform(struct?: DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // dimension_mappings - computed: true, optional: false, required: false
  private _dimensionMappings = new DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList(this, "dimension_mappings", false);
  public get dimensionMappings() {
    return this._dimensionMappings;
  }

  // measure_name_column - computed: true, optional: false, required: false
  public get measureNameColumn() {
    return this.getStringAttribute('measure_name_column');
  }

  // mixed_measure_mappings - computed: true, optional: false, required: false
  private _mixedMeasureMappings = new DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList(this, "mixed_measure_mappings", false);
  public get mixedMeasureMappings() {
    return this._mixedMeasureMappings;
  }

  // multi_measure_mappings - computed: true, optional: false, required: false
  private _multiMeasureMappings = new DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference(this, "multi_measure_mappings");
  public get multiMeasureMappings() {
    return this._multiMeasureMappings;
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // time_column - computed: true, optional: false, required: false
  public get timeColumn() {
    return this.getStringAttribute('time_column');
  }
}
export interface DataAwsccTimestreamScheduledQueryTargetConfiguration {
}

export function dataAwsccTimestreamScheduledQueryTargetConfigurationToTerraform(struct?: DataAwsccTimestreamScheduledQueryTargetConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTimestreamScheduledQueryTargetConfigurationToHclTerraform(struct?: DataAwsccTimestreamScheduledQueryTargetConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTimestreamScheduledQueryTargetConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTimestreamScheduledQueryTargetConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTimestreamScheduledQueryTargetConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timestream_configuration - computed: true, optional: false, required: false
  private _timestreamConfiguration = new DataAwsccTimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference(this, "timestream_configuration");
  public get timestreamConfiguration() {
    return this._timestreamConfiguration;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/timestream_scheduled_query awscc_timestream_scheduled_query}
*/
export class DataAwsccTimestreamScheduledQuery extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_timestream_scheduled_query";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccTimestreamScheduledQuery resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccTimestreamScheduledQuery to import
  * @param importFromId The id of the existing DataAwsccTimestreamScheduledQuery that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/timestream_scheduled_query#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccTimestreamScheduledQuery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_timestream_scheduled_query", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/timestream_scheduled_query awscc_timestream_scheduled_query} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccTimestreamScheduledQueryConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccTimestreamScheduledQueryConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_timestream_scheduled_query',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // client_token - computed: true, optional: false, required: false
  public get clientToken() {
    return this.getStringAttribute('client_token');
  }

  // error_report_configuration - computed: true, optional: false, required: false
  private _errorReportConfiguration = new DataAwsccTimestreamScheduledQueryErrorReportConfigurationOutputReference(this, "error_report_configuration");
  public get errorReportConfiguration() {
    return this._errorReportConfiguration;
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

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // notification_configuration - computed: true, optional: false, required: false
  private _notificationConfiguration = new DataAwsccTimestreamScheduledQueryNotificationConfigurationOutputReference(this, "notification_configuration");
  public get notificationConfiguration() {
    return this._notificationConfiguration;
  }

  // query_string - computed: true, optional: false, required: false
  public get queryString() {
    return this.getStringAttribute('query_string');
  }

  // schedule_configuration - computed: true, optional: false, required: false
  private _scheduleConfiguration = new DataAwsccTimestreamScheduledQueryScheduleConfigurationOutputReference(this, "schedule_configuration");
  public get scheduleConfiguration() {
    return this._scheduleConfiguration;
  }

  // scheduled_query_execution_role_arn - computed: true, optional: false, required: false
  public get scheduledQueryExecutionRoleArn() {
    return this.getStringAttribute('scheduled_query_execution_role_arn');
  }

  // scheduled_query_name - computed: true, optional: false, required: false
  public get scheduledQueryName() {
    return this.getStringAttribute('scheduled_query_name');
  }

  // sq_error_report_configuration - computed: true, optional: false, required: false
  public get sqErrorReportConfiguration() {
    return this.getStringAttribute('sq_error_report_configuration');
  }

  // sq_kms_key_id - computed: true, optional: false, required: false
  public get sqKmsKeyId() {
    return this.getStringAttribute('sq_kms_key_id');
  }

  // sq_name - computed: true, optional: false, required: false
  public get sqName() {
    return this.getStringAttribute('sq_name');
  }

  // sq_notification_configuration - computed: true, optional: false, required: false
  public get sqNotificationConfiguration() {
    return this.getStringAttribute('sq_notification_configuration');
  }

  // sq_query_string - computed: true, optional: false, required: false
  public get sqQueryString() {
    return this.getStringAttribute('sq_query_string');
  }

  // sq_schedule_configuration - computed: true, optional: false, required: false
  public get sqScheduleConfiguration() {
    return this.getStringAttribute('sq_schedule_configuration');
  }

  // sq_scheduled_query_execution_role_arn - computed: true, optional: false, required: false
  public get sqScheduledQueryExecutionRoleArn() {
    return this.getStringAttribute('sq_scheduled_query_execution_role_arn');
  }

  // sq_target_configuration - computed: true, optional: false, required: false
  public get sqTargetConfiguration() {
    return this.getStringAttribute('sq_target_configuration');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccTimestreamScheduledQueryTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // target_configuration - computed: true, optional: false, required: false
  private _targetConfiguration = new DataAwsccTimestreamScheduledQueryTargetConfigurationOutputReference(this, "target_configuration");
  public get targetConfiguration() {
    return this._targetConfiguration;
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
