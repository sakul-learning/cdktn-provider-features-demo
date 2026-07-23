// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/kinesisfirehose_delivery_stream
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccKinesisfirehoseDeliveryStreamConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/kinesisfirehose_delivery_stream#id DataAwsccKinesisfirehoseDeliveryStream#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationBufferingHints {
}

export function dataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationBufferingHintsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationBufferingHints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationBufferingHintsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationBufferingHints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationBufferingHintsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationBufferingHints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationBufferingHints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interval_in_seconds - computed: true, optional: false, required: false
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }

  // size_in_m_bs - computed: true, optional: false, required: false
  public get sizeInMBs() {
    return this.getNumberAttribute('size_in_m_bs');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationCloudwatchLoggingOptions {
}

export function dataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationCloudwatchLoggingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationCloudwatchLoggingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationCloudwatchLoggingOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationCloudwatchLoggingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationCloudwatchLoggingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_stream_name - computed: true, optional: false, required: false
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationProcessingConfigurationProcessorsParameters {
}

export function dataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationProcessingConfigurationProcessorsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationProcessingConfigurationProcessorsParametersToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationProcessingConfigurationProcessorsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationProcessingConfigurationProcessorsParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationProcessingConfigurationProcessorsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationProcessingConfigurationProcessorsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameter_name - computed: true, optional: false, required: false
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }

  // parameter_value - computed: true, optional: false, required: false
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationProcessingConfigurationProcessorsParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationProcessingConfigurationProcessorsParametersOutputReference {
    return new DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationProcessingConfigurationProcessorsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationProcessingConfigurationProcessors {
}

export function dataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationProcessingConfigurationProcessorsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationProcessingConfigurationProcessors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationProcessingConfigurationProcessorsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationProcessingConfigurationProcessors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationProcessingConfigurationProcessorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationProcessingConfigurationProcessors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationProcessingConfigurationProcessors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationProcessingConfigurationProcessorsParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationProcessingConfigurationProcessorsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationProcessingConfigurationProcessorsOutputReference {
    return new DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationProcessingConfigurationProcessorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationProcessingConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationProcessingConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationProcessingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationProcessingConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationProcessingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationProcessingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationProcessingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationProcessingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // processors - computed: true, optional: false, required: false
  private _processors = new DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationProcessingConfigurationProcessorsList(this, "processors", false);
  public get processors() {
    return this._processors;
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationRetryOptions {
}

export function dataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationRetryOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationRetryOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationRetryOptionsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationRetryOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationRetryOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationRetryOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationRetryOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration_in_seconds - computed: true, optional: false, required: false
  public get durationInSeconds() {
    return this.getNumberAttribute('duration_in_seconds');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3ConfigurationBufferingHints {
}

export function dataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3ConfigurationBufferingHintsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3ConfigurationBufferingHints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3ConfigurationBufferingHintsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3ConfigurationBufferingHints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3ConfigurationBufferingHintsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3ConfigurationBufferingHints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3ConfigurationBufferingHints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interval_in_seconds - computed: true, optional: false, required: false
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }

  // size_in_m_bs - computed: true, optional: false, required: false
  public get sizeInMBs() {
    return this.getNumberAttribute('size_in_m_bs');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions {
}

export function dataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_stream_name - computed: true, optional: false, required: false
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig {
}

export function dataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // awskms_key_arn - computed: true, optional: false, required: false
  public get awskmsKeyArn() {
    return this.getStringAttribute('awskms_key_arn');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3ConfigurationEncryptionConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3ConfigurationEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3ConfigurationEncryptionConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3ConfigurationEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3ConfigurationEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3ConfigurationEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3ConfigurationEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_encryption_config - computed: true, optional: false, required: false
  private _kmsEncryptionConfig = new DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigOutputReference(this, "kms_encryption_config");
  public get kmsEncryptionConfig() {
    return this._kmsEncryptionConfig;
  }

  // no_encryption_config - computed: true, optional: false, required: false
  public get noEncryptionConfig() {
    return this.getStringAttribute('no_encryption_config');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3Configuration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3ConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3Configuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3ConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3Configuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3ConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3Configuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3Configuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_arn - computed: true, optional: false, required: false
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }

  // buffering_hints - computed: true, optional: false, required: false
  private _bufferingHints = new DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3ConfigurationBufferingHintsOutputReference(this, "buffering_hints");
  public get bufferingHints() {
    return this._bufferingHints;
  }

  // cloudwatch_logging_options - computed: true, optional: false, required: false
  private _cloudwatchLoggingOptions = new DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }

  // compression_format - computed: true, optional: false, required: false
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }

  // encryption_configuration - computed: true, optional: false, required: false
  private _encryptionConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3ConfigurationEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }

  // error_output_prefix - computed: true, optional: false, required: false
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationVpcConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationVpcConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationVpcConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationVpcConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationVpcConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationVpcConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationVpcConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationVpcConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
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
export interface DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buffering_hints - computed: true, optional: false, required: false
  private _bufferingHints = new DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationBufferingHintsOutputReference(this, "buffering_hints");
  public get bufferingHints() {
    return this._bufferingHints;
  }

  // cloudwatch_logging_options - computed: true, optional: false, required: false
  private _cloudwatchLoggingOptions = new DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }

  // collection_endpoint - computed: true, optional: false, required: false
  public get collectionEndpoint() {
    return this.getStringAttribute('collection_endpoint');
  }

  // index_name - computed: true, optional: false, required: false
  public get indexName() {
    return this.getStringAttribute('index_name');
  }

  // processing_configuration - computed: true, optional: false, required: false
  private _processingConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationProcessingConfigurationOutputReference(this, "processing_configuration");
  public get processingConfiguration() {
    return this._processingConfiguration;
  }

  // retry_options - computed: true, optional: false, required: false
  private _retryOptions = new DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationRetryOptionsOutputReference(this, "retry_options");
  public get retryOptions() {
    return this._retryOptions;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // s3_backup_mode - computed: true, optional: false, required: false
  public get s3BackupMode() {
    return this.getStringAttribute('s3_backup_mode');
  }

  // s3_configuration - computed: true, optional: false, required: false
  private _s3Configuration = new DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationS3ConfigurationOutputReference(this, "s3_configuration");
  public get s3Configuration() {
    return this._s3Configuration;
  }

  // vpc_configuration - computed: true, optional: false, required: false
  private _vpcConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationVpcConfigurationOutputReference(this, "vpc_configuration");
  public get vpcConfiguration() {
    return this._vpcConfiguration;
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationBufferingHints {
}

export function dataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationBufferingHintsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationBufferingHints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationBufferingHintsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationBufferingHints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationBufferingHintsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationBufferingHints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationBufferingHints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interval_in_seconds - computed: true, optional: false, required: false
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }

  // size_in_m_bs - computed: true, optional: false, required: false
  public get sizeInMBs() {
    return this.getNumberAttribute('size_in_m_bs');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationCloudwatchLoggingOptions {
}

export function dataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationCloudwatchLoggingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationCloudwatchLoggingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationCloudwatchLoggingOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationCloudwatchLoggingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationCloudwatchLoggingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_stream_name - computed: true, optional: false, required: false
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationDocumentIdOptions {
}

export function dataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationDocumentIdOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationDocumentIdOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationDocumentIdOptionsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationDocumentIdOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationDocumentIdOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationDocumentIdOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationDocumentIdOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_document_id_format - computed: true, optional: false, required: false
  public get defaultDocumentIdFormat() {
    return this.getStringAttribute('default_document_id_format');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationProcessingConfigurationProcessorsParameters {
}

export function dataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationProcessingConfigurationProcessorsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationProcessingConfigurationProcessorsParametersToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationProcessingConfigurationProcessorsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationProcessingConfigurationProcessorsParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationProcessingConfigurationProcessorsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationProcessingConfigurationProcessorsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameter_name - computed: true, optional: false, required: false
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }

  // parameter_value - computed: true, optional: false, required: false
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationProcessingConfigurationProcessorsParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationProcessingConfigurationProcessorsParametersOutputReference {
    return new DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationProcessingConfigurationProcessorsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationProcessingConfigurationProcessors {
}

export function dataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationProcessingConfigurationProcessorsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationProcessingConfigurationProcessors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationProcessingConfigurationProcessorsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationProcessingConfigurationProcessors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationProcessingConfigurationProcessorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationProcessingConfigurationProcessors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationProcessingConfigurationProcessors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationProcessingConfigurationProcessorsParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationProcessingConfigurationProcessorsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationProcessingConfigurationProcessorsOutputReference {
    return new DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationProcessingConfigurationProcessorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationProcessingConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationProcessingConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationProcessingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationProcessingConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationProcessingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationProcessingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationProcessingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationProcessingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // processors - computed: true, optional: false, required: false
  private _processors = new DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationProcessingConfigurationProcessorsList(this, "processors", false);
  public get processors() {
    return this._processors;
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationRetryOptions {
}

export function dataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationRetryOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationRetryOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationRetryOptionsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationRetryOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationRetryOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationRetryOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationRetryOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration_in_seconds - computed: true, optional: false, required: false
  public get durationInSeconds() {
    return this.getNumberAttribute('duration_in_seconds');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3ConfigurationBufferingHints {
}

export function dataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3ConfigurationBufferingHintsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3ConfigurationBufferingHints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3ConfigurationBufferingHintsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3ConfigurationBufferingHints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3ConfigurationBufferingHintsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3ConfigurationBufferingHints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3ConfigurationBufferingHints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interval_in_seconds - computed: true, optional: false, required: false
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }

  // size_in_m_bs - computed: true, optional: false, required: false
  public get sizeInMBs() {
    return this.getNumberAttribute('size_in_m_bs');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions {
}

export function dataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_stream_name - computed: true, optional: false, required: false
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig {
}

export function dataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // awskms_key_arn - computed: true, optional: false, required: false
  public get awskmsKeyArn() {
    return this.getStringAttribute('awskms_key_arn');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3ConfigurationEncryptionConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3ConfigurationEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3ConfigurationEncryptionConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3ConfigurationEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3ConfigurationEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3ConfigurationEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3ConfigurationEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_encryption_config - computed: true, optional: false, required: false
  private _kmsEncryptionConfig = new DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigOutputReference(this, "kms_encryption_config");
  public get kmsEncryptionConfig() {
    return this._kmsEncryptionConfig;
  }

  // no_encryption_config - computed: true, optional: false, required: false
  public get noEncryptionConfig() {
    return this.getStringAttribute('no_encryption_config');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3Configuration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3ConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3Configuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3ConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3Configuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3ConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3Configuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3Configuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_arn - computed: true, optional: false, required: false
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }

  // buffering_hints - computed: true, optional: false, required: false
  private _bufferingHints = new DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3ConfigurationBufferingHintsOutputReference(this, "buffering_hints");
  public get bufferingHints() {
    return this._bufferingHints;
  }

  // cloudwatch_logging_options - computed: true, optional: false, required: false
  private _cloudwatchLoggingOptions = new DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }

  // compression_format - computed: true, optional: false, required: false
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }

  // encryption_configuration - computed: true, optional: false, required: false
  private _encryptionConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3ConfigurationEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }

  // error_output_prefix - computed: true, optional: false, required: false
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationVpcConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationVpcConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationVpcConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationVpcConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationVpcConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationVpcConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationVpcConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationVpcConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
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
export interface DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buffering_hints - computed: true, optional: false, required: false
  private _bufferingHints = new DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationBufferingHintsOutputReference(this, "buffering_hints");
  public get bufferingHints() {
    return this._bufferingHints;
  }

  // cloudwatch_logging_options - computed: true, optional: false, required: false
  private _cloudwatchLoggingOptions = new DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }

  // cluster_endpoint - computed: true, optional: false, required: false
  public get clusterEndpoint() {
    return this.getStringAttribute('cluster_endpoint');
  }

  // document_id_options - computed: true, optional: false, required: false
  private _documentIdOptions = new DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationDocumentIdOptionsOutputReference(this, "document_id_options");
  public get documentIdOptions() {
    return this._documentIdOptions;
  }

  // domain_arn - computed: true, optional: false, required: false
  public get domainArn() {
    return this.getStringAttribute('domain_arn');
  }

  // index_name - computed: true, optional: false, required: false
  public get indexName() {
    return this.getStringAttribute('index_name');
  }

  // index_rotation_period - computed: true, optional: false, required: false
  public get indexRotationPeriod() {
    return this.getStringAttribute('index_rotation_period');
  }

  // processing_configuration - computed: true, optional: false, required: false
  private _processingConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationProcessingConfigurationOutputReference(this, "processing_configuration");
  public get processingConfiguration() {
    return this._processingConfiguration;
  }

  // retry_options - computed: true, optional: false, required: false
  private _retryOptions = new DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationRetryOptionsOutputReference(this, "retry_options");
  public get retryOptions() {
    return this._retryOptions;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // s3_backup_mode - computed: true, optional: false, required: false
  public get s3BackupMode() {
    return this.getStringAttribute('s3_backup_mode');
  }

  // s3_configuration - computed: true, optional: false, required: false
  private _s3Configuration = new DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationS3ConfigurationOutputReference(this, "s3_configuration");
  public get s3Configuration() {
    return this._s3Configuration;
  }

  // type_name - computed: true, optional: false, required: false
  public get typeName() {
    return this.getStringAttribute('type_name');
  }

  // vpc_configuration - computed: true, optional: false, required: false
  private _vpcConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationVpcConfigurationOutputReference(this, "vpc_configuration");
  public get vpcConfiguration() {
    return this._vpcConfiguration;
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationColumns {
}

export function dataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationColumnsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationColumns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationColumnsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationColumns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationColumnsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationColumns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationColumns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exclude - computed: true, optional: false, required: false
  public get exclude() {
    return this.getListAttribute('exclude');
  }

  // include - computed: true, optional: false, required: false
  public get include() {
    return this.getListAttribute('include');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationDatabaseSourceAuthenticationConfigurationSecretsManagerConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationDatabaseSourceAuthenticationConfigurationSecretsManagerConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationDatabaseSourceAuthenticationConfigurationSecretsManagerConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationDatabaseSourceAuthenticationConfigurationSecretsManagerConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationDatabaseSourceAuthenticationConfigurationSecretsManagerConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationDatabaseSourceAuthenticationConfigurationSecretsManagerConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationDatabaseSourceAuthenticationConfigurationSecretsManagerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationDatabaseSourceAuthenticationConfigurationSecretsManagerConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationDatabaseSourceAuthenticationConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationDatabaseSourceAuthenticationConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationDatabaseSourceAuthenticationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationDatabaseSourceAuthenticationConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationDatabaseSourceAuthenticationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationDatabaseSourceAuthenticationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationDatabaseSourceAuthenticationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationDatabaseSourceAuthenticationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secrets_manager_configuration - computed: true, optional: false, required: false
  private _secretsManagerConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationDatabaseSourceAuthenticationConfigurationSecretsManagerConfigurationOutputReference(this, "secrets_manager_configuration");
  public get secretsManagerConfiguration() {
    return this._secretsManagerConfiguration;
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationDatabaseSourceVpcConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationDatabaseSourceVpcConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationDatabaseSourceVpcConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationDatabaseSourceVpcConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationDatabaseSourceVpcConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationDatabaseSourceVpcConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationDatabaseSourceVpcConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationDatabaseSourceVpcConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // vpc_endpoint_service_name - computed: true, optional: false, required: false
  public get vpcEndpointServiceName() {
    return this.getStringAttribute('vpc_endpoint_service_name');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationDatabases {
}

export function dataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationDatabasesToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationDatabases): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationDatabasesToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationDatabases): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationDatabasesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationDatabases | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationDatabases | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exclude - computed: true, optional: false, required: false
  public get exclude() {
    return this.getListAttribute('exclude');
  }

  // include - computed: true, optional: false, required: false
  public get include() {
    return this.getListAttribute('include');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationTables {
}

export function dataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationTablesToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationTables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationTablesToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationTables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationTablesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationTables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationTables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exclude - computed: true, optional: false, required: false
  public get exclude() {
    return this.getListAttribute('exclude');
  }

  // include - computed: true, optional: false, required: false
  public get include() {
    return this.getListAttribute('include');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // columns - computed: true, optional: false, required: false
  private _columns = new DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationColumnsOutputReference(this, "columns");
  public get columns() {
    return this._columns;
  }

  // database_source_authentication_configuration - computed: true, optional: false, required: false
  private _databaseSourceAuthenticationConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationDatabaseSourceAuthenticationConfigurationOutputReference(this, "database_source_authentication_configuration");
  public get databaseSourceAuthenticationConfiguration() {
    return this._databaseSourceAuthenticationConfiguration;
  }

  // database_source_vpc_configuration - computed: true, optional: false, required: false
  private _databaseSourceVpcConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationDatabaseSourceVpcConfigurationOutputReference(this, "database_source_vpc_configuration");
  public get databaseSourceVpcConfiguration() {
    return this._databaseSourceVpcConfiguration;
  }

  // databases - computed: true, optional: false, required: false
  private _databases = new DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationDatabasesOutputReference(this, "databases");
  public get databases() {
    return this._databases;
  }

  // digest - computed: true, optional: false, required: false
  public get digest() {
    return this.getStringAttribute('digest');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // public_certificate - computed: true, optional: false, required: false
  public get publicCertificate() {
    return this.getStringAttribute('public_certificate');
  }

  // snapshot_watermark_table - computed: true, optional: false, required: false
  public get snapshotWatermarkTable() {
    return this.getStringAttribute('snapshot_watermark_table');
  }

  // ssl_mode - computed: true, optional: false, required: false
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }

  // surrogate_keys - computed: true, optional: false, required: false
  public get surrogateKeys() {
    return this.getListAttribute('surrogate_keys');
  }

  // tables - computed: true, optional: false, required: false
  private _tables = new DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationTablesOutputReference(this, "tables");
  public get tables() {
    return this._tables;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamDeliveryStreamEncryptionConfigurationInput {
}

export function dataAwsccKinesisfirehoseDeliveryStreamDeliveryStreamEncryptionConfigurationInputToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamDeliveryStreamEncryptionConfigurationInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamDeliveryStreamEncryptionConfigurationInputToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamDeliveryStreamEncryptionConfigurationInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamDeliveryStreamEncryptionConfigurationInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamDeliveryStreamEncryptionConfigurationInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamDeliveryStreamEncryptionConfigurationInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_arn - computed: true, optional: false, required: false
  public get keyArn() {
    return this.getStringAttribute('key_arn');
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamDirectPutSourceConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamDirectPutSourceConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamDirectPutSourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamDirectPutSourceConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamDirectPutSourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamDirectPutSourceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamDirectPutSourceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamDirectPutSourceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // throughput_hint_in_m_bs - computed: true, optional: false, required: false
  public get throughputHintInMBs() {
    return this.getNumberAttribute('throughput_hint_in_m_bs');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints {
}

export function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHintsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHintsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHintsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interval_in_seconds - computed: true, optional: false, required: false
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }

  // size_in_m_bs - computed: true, optional: false, required: false
  public get sizeInMBs() {
    return this.getNumberAttribute('size_in_m_bs');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationCloudwatchLoggingOptions {
}

export function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationCloudwatchLoggingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationCloudwatchLoggingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationCloudwatchLoggingOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationCloudwatchLoggingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationCloudwatchLoggingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_stream_name - computed: true, optional: false, required: false
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationDocumentIdOptions {
}

export function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationDocumentIdOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationDocumentIdOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationDocumentIdOptionsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationDocumentIdOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationDocumentIdOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationDocumentIdOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationDocumentIdOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_document_id_format - computed: true, optional: false, required: false
  public get defaultDocumentIdFormat() {
    return this.getStringAttribute('default_document_id_format');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsParameters {
}

export function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsParametersToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameter_name - computed: true, optional: false, required: false
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }

  // parameter_value - computed: true, optional: false, required: false
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsParametersOutputReference {
    return new DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessors {
}

export function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsOutputReference {
    return new DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // processors - computed: true, optional: false, required: false
  private _processors = new DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsList(this, "processors", false);
  public get processors() {
    return this._processors;
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptions {
}

export function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptionsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration_in_seconds - computed: true, optional: false, required: false
  public get durationInSeconds() {
    return this.getNumberAttribute('duration_in_seconds');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationBufferingHints {
}

export function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationBufferingHintsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationBufferingHints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationBufferingHintsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationBufferingHints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationBufferingHintsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationBufferingHints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationBufferingHints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interval_in_seconds - computed: true, optional: false, required: false
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }

  // size_in_m_bs - computed: true, optional: false, required: false
  public get sizeInMBs() {
    return this.getNumberAttribute('size_in_m_bs');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions {
}

export function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_stream_name - computed: true, optional: false, required: false
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig {
}

export function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // awskms_key_arn - computed: true, optional: false, required: false
  public get awskmsKeyArn() {
    return this.getStringAttribute('awskms_key_arn');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_encryption_config - computed: true, optional: false, required: false
  private _kmsEncryptionConfig = new DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigOutputReference(this, "kms_encryption_config");
  public get kmsEncryptionConfig() {
    return this._kmsEncryptionConfig;
  }

  // no_encryption_config - computed: true, optional: false, required: false
  public get noEncryptionConfig() {
    return this.getStringAttribute('no_encryption_config');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3Configuration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3Configuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3Configuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3Configuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3Configuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_arn - computed: true, optional: false, required: false
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }

  // buffering_hints - computed: true, optional: false, required: false
  private _bufferingHints = new DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationBufferingHintsOutputReference(this, "buffering_hints");
  public get bufferingHints() {
    return this._bufferingHints;
  }

  // cloudwatch_logging_options - computed: true, optional: false, required: false
  private _cloudwatchLoggingOptions = new DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }

  // compression_format - computed: true, optional: false, required: false
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }

  // encryption_configuration - computed: true, optional: false, required: false
  private _encryptionConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }

  // error_output_prefix - computed: true, optional: false, required: false
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationVpcConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationVpcConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationVpcConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationVpcConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationVpcConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationVpcConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationVpcConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationVpcConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
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
export interface DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buffering_hints - computed: true, optional: false, required: false
  private _bufferingHints = new DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHintsOutputReference(this, "buffering_hints");
  public get bufferingHints() {
    return this._bufferingHints;
  }

  // cloudwatch_logging_options - computed: true, optional: false, required: false
  private _cloudwatchLoggingOptions = new DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }

  // cluster_endpoint - computed: true, optional: false, required: false
  public get clusterEndpoint() {
    return this.getStringAttribute('cluster_endpoint');
  }

  // document_id_options - computed: true, optional: false, required: false
  private _documentIdOptions = new DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationDocumentIdOptionsOutputReference(this, "document_id_options");
  public get documentIdOptions() {
    return this._documentIdOptions;
  }

  // domain_arn - computed: true, optional: false, required: false
  public get domainArn() {
    return this.getStringAttribute('domain_arn');
  }

  // index_name - computed: true, optional: false, required: false
  public get indexName() {
    return this.getStringAttribute('index_name');
  }

  // index_rotation_period - computed: true, optional: false, required: false
  public get indexRotationPeriod() {
    return this.getStringAttribute('index_rotation_period');
  }

  // processing_configuration - computed: true, optional: false, required: false
  private _processingConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationOutputReference(this, "processing_configuration");
  public get processingConfiguration() {
    return this._processingConfiguration;
  }

  // retry_options - computed: true, optional: false, required: false
  private _retryOptions = new DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptionsOutputReference(this, "retry_options");
  public get retryOptions() {
    return this._retryOptions;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // s3_backup_mode - computed: true, optional: false, required: false
  public get s3BackupMode() {
    return this.getStringAttribute('s3_backup_mode');
  }

  // s3_configuration - computed: true, optional: false, required: false
  private _s3Configuration = new DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationOutputReference(this, "s3_configuration");
  public get s3Configuration() {
    return this._s3Configuration;
  }

  // type_name - computed: true, optional: false, required: false
  public get typeName() {
    return this.getStringAttribute('type_name');
  }

  // vpc_configuration - computed: true, optional: false, required: false
  private _vpcConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationVpcConfigurationOutputReference(this, "vpc_configuration");
  public get vpcConfiguration() {
    return this._vpcConfiguration;
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationBufferingHints {
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationBufferingHintsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationBufferingHints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationBufferingHintsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationBufferingHints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationBufferingHintsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationBufferingHints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationBufferingHints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interval_in_seconds - computed: true, optional: false, required: false
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }

  // size_in_m_bs - computed: true, optional: false, required: false
  public get sizeInMBs() {
    return this.getNumberAttribute('size_in_m_bs');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationCloudwatchLoggingOptions {
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationCloudwatchLoggingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationCloudwatchLoggingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationCloudwatchLoggingOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationCloudwatchLoggingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationCloudwatchLoggingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_stream_name - computed: true, optional: false, required: false
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe {
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timestamp_formats - computed: true, optional: false, required: false
  public get timestampFormats() {
    return this.getListAttribute('timestamp_formats');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe {
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // case_insensitive - computed: true, optional: false, required: false
  public get caseInsensitive() {
    return this.getBooleanAttribute('case_insensitive');
  }

  // column_to_json_key_mappings - computed: true, optional: false, required: false
  private _columnToJsonKeyMappings = new cdktn.StringMap(this, "column_to_json_key_mappings");
  public get columnToJsonKeyMappings() {
    return this._columnToJsonKeyMappings;
  }

  // convert_dots_in_json_keys_to_underscores - computed: true, optional: false, required: false
  public get convertDotsInJsonKeysToUnderscores() {
    return this.getBooleanAttribute('convert_dots_in_json_keys_to_underscores');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer {
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hive_json_ser_de - computed: true, optional: false, required: false
  private _hiveJsonSerDe = new DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeOutputReference(this, "hive_json_ser_de");
  public get hiveJsonSerDe() {
    return this._hiveJsonSerDe;
  }

  // open_x_json_ser_de - computed: true, optional: false, required: false
  private _openXJsonSerDe = new DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeOutputReference(this, "open_x_json_ser_de");
  public get openXJsonSerDe() {
    return this._openXJsonSerDe;
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deserializer - computed: true, optional: false, required: false
  private _deserializer = new DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOutputReference(this, "deserializer");
  public get deserializer() {
    return this._deserializer;
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe {
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_size_bytes - computed: true, optional: false, required: false
  public get blockSizeBytes() {
    return this.getNumberAttribute('block_size_bytes');
  }

  // bloom_filter_columns - computed: true, optional: false, required: false
  public get bloomFilterColumns() {
    return this.getListAttribute('bloom_filter_columns');
  }

  // bloom_filter_false_positive_probability - computed: true, optional: false, required: false
  public get bloomFilterFalsePositiveProbability() {
    return this.getNumberAttribute('bloom_filter_false_positive_probability');
  }

  // compression - computed: true, optional: false, required: false
  public get compression() {
    return this.getStringAttribute('compression');
  }

  // dictionary_key_threshold - computed: true, optional: false, required: false
  public get dictionaryKeyThreshold() {
    return this.getNumberAttribute('dictionary_key_threshold');
  }

  // enable_padding - computed: true, optional: false, required: false
  public get enablePadding() {
    return this.getBooleanAttribute('enable_padding');
  }

  // format_version - computed: true, optional: false, required: false
  public get formatVersion() {
    return this.getStringAttribute('format_version');
  }

  // padding_tolerance - computed: true, optional: false, required: false
  public get paddingTolerance() {
    return this.getNumberAttribute('padding_tolerance');
  }

  // row_index_stride - computed: true, optional: false, required: false
  public get rowIndexStride() {
    return this.getNumberAttribute('row_index_stride');
  }

  // stripe_size_bytes - computed: true, optional: false, required: false
  public get stripeSizeBytes() {
    return this.getNumberAttribute('stripe_size_bytes');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe {
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_size_bytes - computed: true, optional: false, required: false
  public get blockSizeBytes() {
    return this.getNumberAttribute('block_size_bytes');
  }

  // compression - computed: true, optional: false, required: false
  public get compression() {
    return this.getStringAttribute('compression');
  }

  // enable_dictionary_compression - computed: true, optional: false, required: false
  public get enableDictionaryCompression() {
    return this.getBooleanAttribute('enable_dictionary_compression');
  }

  // max_padding_bytes - computed: true, optional: false, required: false
  public get maxPaddingBytes() {
    return this.getNumberAttribute('max_padding_bytes');
  }

  // page_size_bytes - computed: true, optional: false, required: false
  public get pageSizeBytes() {
    return this.getNumberAttribute('page_size_bytes');
  }

  // writer_version - computed: true, optional: false, required: false
  public get writerVersion() {
    return this.getStringAttribute('writer_version');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer {
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // orc_ser_de - computed: true, optional: false, required: false
  private _orcSerDe = new DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeOutputReference(this, "orc_ser_de");
  public get orcSerDe() {
    return this._orcSerDe;
  }

  // parquet_ser_de - computed: true, optional: false, required: false
  private _parquetSerDe = new DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeOutputReference(this, "parquet_ser_de");
  public get parquetSerDe() {
    return this._parquetSerDe;
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // serializer - computed: true, optional: false, required: false
  private _serializer = new DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOutputReference(this, "serializer");
  public get serializer() {
    return this._serializer;
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationSchemaConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationSchemaConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationSchemaConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationSchemaConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationSchemaConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationSchemaConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationSchemaConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationSchemaConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // catalog_id - computed: true, optional: false, required: false
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // input_format_configuration - computed: true, optional: false, required: false
  private _inputFormatConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationOutputReference(this, "input_format_configuration");
  public get inputFormatConfiguration() {
    return this._inputFormatConfiguration;
  }

  // output_format_configuration - computed: true, optional: false, required: false
  private _outputFormatConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationOutputReference(this, "output_format_configuration");
  public get outputFormatConfiguration() {
    return this._outputFormatConfiguration;
  }

  // schema_configuration - computed: true, optional: false, required: false
  private _schemaConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationSchemaConfigurationOutputReference(this, "schema_configuration");
  public get schemaConfiguration() {
    return this._schemaConfiguration;
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDynamicPartitioningConfigurationRetryOptions {
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDynamicPartitioningConfigurationRetryOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDynamicPartitioningConfigurationRetryOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDynamicPartitioningConfigurationRetryOptionsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDynamicPartitioningConfigurationRetryOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDynamicPartitioningConfigurationRetryOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDynamicPartitioningConfigurationRetryOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDynamicPartitioningConfigurationRetryOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration_in_seconds - computed: true, optional: false, required: false
  public get durationInSeconds() {
    return this.getNumberAttribute('duration_in_seconds');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDynamicPartitioningConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDynamicPartitioningConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDynamicPartitioningConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDynamicPartitioningConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDynamicPartitioningConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDynamicPartitioningConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDynamicPartitioningConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDynamicPartitioningConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // retry_options - computed: true, optional: false, required: false
  private _retryOptions = new DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDynamicPartitioningConfigurationRetryOptionsOutputReference(this, "retry_options");
  public get retryOptions() {
    return this._retryOptions;
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfig {
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfigToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // awskms_key_arn - computed: true, optional: false, required: false
  public get awskmsKeyArn() {
    return this.getStringAttribute('awskms_key_arn');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_encryption_config - computed: true, optional: false, required: false
  private _kmsEncryptionConfig = new DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfigOutputReference(this, "kms_encryption_config");
  public get kmsEncryptionConfig() {
    return this._kmsEncryptionConfig;
  }

  // no_encryption_config - computed: true, optional: false, required: false
  public get noEncryptionConfig() {
    return this.getStringAttribute('no_encryption_config');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsParameters {
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsParametersToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameter_name - computed: true, optional: false, required: false
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }

  // parameter_value - computed: true, optional: false, required: false
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsParametersOutputReference {
    return new DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessors {
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsOutputReference {
    return new DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // processors - computed: true, optional: false, required: false
  private _processors = new DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsList(this, "processors", false);
  public get processors() {
    return this._processors;
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationBufferingHints {
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationBufferingHintsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationBufferingHints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationBufferingHintsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationBufferingHints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationBufferingHintsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationBufferingHints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationBufferingHints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interval_in_seconds - computed: true, optional: false, required: false
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }

  // size_in_m_bs - computed: true, optional: false, required: false
  public get sizeInMBs() {
    return this.getNumberAttribute('size_in_m_bs');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptions {
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_stream_name - computed: true, optional: false, required: false
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfig {
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfigToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // awskms_key_arn - computed: true, optional: false, required: false
  public get awskmsKeyArn() {
    return this.getStringAttribute('awskms_key_arn');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_encryption_config - computed: true, optional: false, required: false
  private _kmsEncryptionConfig = new DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfigOutputReference(this, "kms_encryption_config");
  public get kmsEncryptionConfig() {
    return this._kmsEncryptionConfig;
  }

  // no_encryption_config - computed: true, optional: false, required: false
  public get noEncryptionConfig() {
    return this.getStringAttribute('no_encryption_config');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_arn - computed: true, optional: false, required: false
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }

  // buffering_hints - computed: true, optional: false, required: false
  private _bufferingHints = new DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationBufferingHintsOutputReference(this, "buffering_hints");
  public get bufferingHints() {
    return this._bufferingHints;
  }

  // cloudwatch_logging_options - computed: true, optional: false, required: false
  private _cloudwatchLoggingOptions = new DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }

  // compression_format - computed: true, optional: false, required: false
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }

  // encryption_configuration - computed: true, optional: false, required: false
  private _encryptionConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }

  // error_output_prefix - computed: true, optional: false, required: false
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_arn - computed: true, optional: false, required: false
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }

  // buffering_hints - computed: true, optional: false, required: false
  private _bufferingHints = new DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationBufferingHintsOutputReference(this, "buffering_hints");
  public get bufferingHints() {
    return this._bufferingHints;
  }

  // cloudwatch_logging_options - computed: true, optional: false, required: false
  private _cloudwatchLoggingOptions = new DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }

  // compression_format - computed: true, optional: false, required: false
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }

  // custom_time_zone - computed: true, optional: false, required: false
  public get customTimeZone() {
    return this.getStringAttribute('custom_time_zone');
  }

  // data_format_conversion_configuration - computed: true, optional: false, required: false
  private _dataFormatConversionConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputReference(this, "data_format_conversion_configuration");
  public get dataFormatConversionConfiguration() {
    return this._dataFormatConversionConfiguration;
  }

  // dynamic_partitioning_configuration - computed: true, optional: false, required: false
  private _dynamicPartitioningConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDynamicPartitioningConfigurationOutputReference(this, "dynamic_partitioning_configuration");
  public get dynamicPartitioningConfiguration() {
    return this._dynamicPartitioningConfiguration;
  }

  // encryption_configuration - computed: true, optional: false, required: false
  private _encryptionConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }

  // error_output_prefix - computed: true, optional: false, required: false
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }

  // file_extension - computed: true, optional: false, required: false
  public get fileExtension() {
    return this.getStringAttribute('file_extension');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // processing_configuration - computed: true, optional: false, required: false
  private _processingConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationOutputReference(this, "processing_configuration");
  public get processingConfiguration() {
    return this._processingConfiguration;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // s3_backup_configuration - computed: true, optional: false, required: false
  private _s3BackupConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationOutputReference(this, "s3_backup_configuration");
  public get s3BackupConfiguration() {
    return this._s3BackupConfiguration;
  }

  // s3_backup_mode - computed: true, optional: false, required: false
  public get s3BackupMode() {
    return this.getStringAttribute('s3_backup_mode');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationBufferingHints {
}

export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationBufferingHintsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationBufferingHints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationBufferingHintsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationBufferingHints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationBufferingHintsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationBufferingHints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationBufferingHints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interval_in_seconds - computed: true, optional: false, required: false
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }

  // size_in_m_bs - computed: true, optional: false, required: false
  public get sizeInMBs() {
    return this.getNumberAttribute('size_in_m_bs');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationCloudwatchLoggingOptions {
}

export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationCloudwatchLoggingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationCloudwatchLoggingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationCloudwatchLoggingOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationCloudwatchLoggingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationCloudwatchLoggingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_stream_name - computed: true, optional: false, required: false
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationEndpointConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationEndpointConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationEndpointConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationEndpointConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationEndpointConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationEndpointConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationEndpointConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationEndpointConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_key - computed: true, optional: false, required: false
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsParameters {
}

export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsParametersToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameter_name - computed: true, optional: false, required: false
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }

  // parameter_value - computed: true, optional: false, required: false
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsParametersOutputReference {
    return new DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessors {
}

export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsOutputReference {
    return new DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // processors - computed: true, optional: false, required: false
  private _processors = new DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsList(this, "processors", false);
  public get processors() {
    return this._processors;
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationCommonAttributes {
}

export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationCommonAttributesToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationCommonAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationCommonAttributesToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationCommonAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationCommonAttributesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationCommonAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationCommonAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_name - computed: true, optional: false, required: false
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }

  // attribute_value - computed: true, optional: false, required: false
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationCommonAttributesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationCommonAttributesOutputReference {
    return new DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationCommonAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // common_attributes - computed: true, optional: false, required: false
  private _commonAttributes = new DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationCommonAttributesList(this, "common_attributes", false);
  public get commonAttributes() {
    return this._commonAttributes;
  }

  // content_encoding - computed: true, optional: false, required: false
  public get contentEncoding() {
    return this.getStringAttribute('content_encoding');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRetryOptions {
}

export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRetryOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRetryOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRetryOptionsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRetryOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRetryOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRetryOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRetryOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration_in_seconds - computed: true, optional: false, required: false
  public get durationInSeconds() {
    return this.getNumberAttribute('duration_in_seconds');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationBufferingHints {
}

export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationBufferingHintsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationBufferingHints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationBufferingHintsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationBufferingHints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationBufferingHintsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationBufferingHints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationBufferingHints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interval_in_seconds - computed: true, optional: false, required: false
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }

  // size_in_m_bs - computed: true, optional: false, required: false
  public get sizeInMBs() {
    return this.getNumberAttribute('size_in_m_bs');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions {
}

export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_stream_name - computed: true, optional: false, required: false
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig {
}

export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // awskms_key_arn - computed: true, optional: false, required: false
  public get awskmsKeyArn() {
    return this.getStringAttribute('awskms_key_arn');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_encryption_config - computed: true, optional: false, required: false
  private _kmsEncryptionConfig = new DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigOutputReference(this, "kms_encryption_config");
  public get kmsEncryptionConfig() {
    return this._kmsEncryptionConfig;
  }

  // no_encryption_config - computed: true, optional: false, required: false
  public get noEncryptionConfig() {
    return this.getStringAttribute('no_encryption_config');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3Configuration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3Configuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3Configuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3Configuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3Configuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_arn - computed: true, optional: false, required: false
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }

  // buffering_hints - computed: true, optional: false, required: false
  private _bufferingHints = new DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationBufferingHintsOutputReference(this, "buffering_hints");
  public get bufferingHints() {
    return this._bufferingHints;
  }

  // cloudwatch_logging_options - computed: true, optional: false, required: false
  private _cloudwatchLoggingOptions = new DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }

  // compression_format - computed: true, optional: false, required: false
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }

  // encryption_configuration - computed: true, optional: false, required: false
  private _encryptionConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }

  // error_output_prefix - computed: true, optional: false, required: false
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationSecretsManagerConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationSecretsManagerConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationSecretsManagerConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationSecretsManagerConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationSecretsManagerConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationSecretsManagerConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationSecretsManagerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationSecretsManagerConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buffering_hints - computed: true, optional: false, required: false
  private _bufferingHints = new DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationBufferingHintsOutputReference(this, "buffering_hints");
  public get bufferingHints() {
    return this._bufferingHints;
  }

  // cloudwatch_logging_options - computed: true, optional: false, required: false
  private _cloudwatchLoggingOptions = new DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }

  // endpoint_configuration - computed: true, optional: false, required: false
  private _endpointConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationEndpointConfigurationOutputReference(this, "endpoint_configuration");
  public get endpointConfiguration() {
    return this._endpointConfiguration;
  }

  // processing_configuration - computed: true, optional: false, required: false
  private _processingConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationOutputReference(this, "processing_configuration");
  public get processingConfiguration() {
    return this._processingConfiguration;
  }

  // request_configuration - computed: true, optional: false, required: false
  private _requestConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationOutputReference(this, "request_configuration");
  public get requestConfiguration() {
    return this._requestConfiguration;
  }

  // retry_options - computed: true, optional: false, required: false
  private _retryOptions = new DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRetryOptionsOutputReference(this, "retry_options");
  public get retryOptions() {
    return this._retryOptions;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // s3_backup_mode - computed: true, optional: false, required: false
  public get s3BackupMode() {
    return this.getStringAttribute('s3_backup_mode');
  }

  // s3_configuration - computed: true, optional: false, required: false
  private _s3Configuration = new DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationOutputReference(this, "s3_configuration");
  public get s3Configuration() {
    return this._s3Configuration;
  }

  // secrets_manager_configuration - computed: true, optional: false, required: false
  private _secretsManagerConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationSecretsManagerConfigurationOutputReference(this, "secrets_manager_configuration");
  public get secretsManagerConfiguration() {
    return this._secretsManagerConfiguration;
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationBufferingHints {
}

export function dataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationBufferingHintsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationBufferingHints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationBufferingHintsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationBufferingHints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationBufferingHintsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationBufferingHints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationBufferingHints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interval_in_seconds - computed: true, optional: false, required: false
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }

  // size_in_m_bs - computed: true, optional: false, required: false
  public get sizeInMBs() {
    return this.getNumberAttribute('size_in_m_bs');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationCatalogConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationCatalogConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationCatalogConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationCatalogConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationCatalogConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationCatalogConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationCatalogConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationCatalogConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // catalog_arn - computed: true, optional: false, required: false
  public get catalogArn() {
    return this.getStringAttribute('catalog_arn');
  }

  // warehouse_location - computed: true, optional: false, required: false
  public get warehouseLocation() {
    return this.getStringAttribute('warehouse_location');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationCloudwatchLoggingOptions {
}

export function dataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationCloudwatchLoggingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationCloudwatchLoggingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationCloudwatchLoggingOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationCloudwatchLoggingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationCloudwatchLoggingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_stream_name - computed: true, optional: false, required: false
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationDestinationTableConfigurationListPartitionSpecIdentity {
}

export function dataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationDestinationTableConfigurationListPartitionSpecIdentityToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationDestinationTableConfigurationListPartitionSpecIdentity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationDestinationTableConfigurationListPartitionSpecIdentityToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationDestinationTableConfigurationListPartitionSpecIdentity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationDestinationTableConfigurationListPartitionSpecIdentityOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationDestinationTableConfigurationListPartitionSpecIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationDestinationTableConfigurationListPartitionSpecIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source_name - computed: true, optional: false, required: false
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationDestinationTableConfigurationListPartitionSpecIdentityList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationDestinationTableConfigurationListPartitionSpecIdentityOutputReference {
    return new DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationDestinationTableConfigurationListPartitionSpecIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationDestinationTableConfigurationListPartitionSpec {
}

export function dataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationDestinationTableConfigurationListPartitionSpecToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationDestinationTableConfigurationListPartitionSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationDestinationTableConfigurationListPartitionSpecToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationDestinationTableConfigurationListPartitionSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationDestinationTableConfigurationListPartitionSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationDestinationTableConfigurationListPartitionSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationDestinationTableConfigurationListPartitionSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // identity - computed: true, optional: false, required: false
  private _identity = new DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationDestinationTableConfigurationListPartitionSpecIdentityList(this, "identity", false);
  public get identity() {
    return this._identity;
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationDestinationTableConfigurationListStruct {
}

export function dataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationDestinationTableConfigurationListStructToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationDestinationTableConfigurationListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationDestinationTableConfigurationListStructToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationDestinationTableConfigurationListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationDestinationTableConfigurationListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationDestinationTableConfigurationListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationDestinationTableConfigurationListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_database_name - computed: true, optional: false, required: false
  public get destinationDatabaseName() {
    return this.getStringAttribute('destination_database_name');
  }

  // destination_table_name - computed: true, optional: false, required: false
  public get destinationTableName() {
    return this.getStringAttribute('destination_table_name');
  }

  // partition_spec - computed: true, optional: false, required: false
  private _partitionSpec = new DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationDestinationTableConfigurationListPartitionSpecOutputReference(this, "partition_spec");
  public get partitionSpec() {
    return this._partitionSpec;
  }

  // s3_error_output_prefix - computed: true, optional: false, required: false
  public get s3ErrorOutputPrefix() {
    return this.getStringAttribute('s3_error_output_prefix');
  }

  // unique_keys - computed: true, optional: false, required: false
  public get uniqueKeys() {
    return this.getListAttribute('unique_keys');
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationDestinationTableConfigurationListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationDestinationTableConfigurationListStructOutputReference {
    return new DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationDestinationTableConfigurationListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationProcessingConfigurationProcessorsParameters {
}

export function dataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationProcessingConfigurationProcessorsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationProcessingConfigurationProcessorsParametersToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationProcessingConfigurationProcessorsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationProcessingConfigurationProcessorsParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationProcessingConfigurationProcessorsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationProcessingConfigurationProcessorsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameter_name - computed: true, optional: false, required: false
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }

  // parameter_value - computed: true, optional: false, required: false
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationProcessingConfigurationProcessorsParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationProcessingConfigurationProcessorsParametersOutputReference {
    return new DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationProcessingConfigurationProcessorsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationProcessingConfigurationProcessors {
}

export function dataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationProcessingConfigurationProcessorsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationProcessingConfigurationProcessors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationProcessingConfigurationProcessorsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationProcessingConfigurationProcessors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationProcessingConfigurationProcessorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationProcessingConfigurationProcessors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationProcessingConfigurationProcessors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationProcessingConfigurationProcessorsParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationProcessingConfigurationProcessorsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationProcessingConfigurationProcessorsOutputReference {
    return new DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationProcessingConfigurationProcessorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationProcessingConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationProcessingConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationProcessingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationProcessingConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationProcessingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationProcessingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationProcessingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationProcessingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // processors - computed: true, optional: false, required: false
  private _processors = new DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationProcessingConfigurationProcessorsList(this, "processors", false);
  public get processors() {
    return this._processors;
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationRetryOptions {
}

export function dataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationRetryOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationRetryOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationRetryOptionsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationRetryOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationRetryOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationRetryOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationRetryOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration_in_seconds - computed: true, optional: false, required: false
  public get durationInSeconds() {
    return this.getNumberAttribute('duration_in_seconds');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3ConfigurationBufferingHints {
}

export function dataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3ConfigurationBufferingHintsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3ConfigurationBufferingHints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3ConfigurationBufferingHintsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3ConfigurationBufferingHints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3ConfigurationBufferingHintsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3ConfigurationBufferingHints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3ConfigurationBufferingHints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interval_in_seconds - computed: true, optional: false, required: false
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }

  // size_in_m_bs - computed: true, optional: false, required: false
  public get sizeInMBs() {
    return this.getNumberAttribute('size_in_m_bs');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions {
}

export function dataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_stream_name - computed: true, optional: false, required: false
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig {
}

export function dataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // awskms_key_arn - computed: true, optional: false, required: false
  public get awskmsKeyArn() {
    return this.getStringAttribute('awskms_key_arn');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3ConfigurationEncryptionConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3ConfigurationEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3ConfigurationEncryptionConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3ConfigurationEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3ConfigurationEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3ConfigurationEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3ConfigurationEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_encryption_config - computed: true, optional: false, required: false
  private _kmsEncryptionConfig = new DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigOutputReference(this, "kms_encryption_config");
  public get kmsEncryptionConfig() {
    return this._kmsEncryptionConfig;
  }

  // no_encryption_config - computed: true, optional: false, required: false
  public get noEncryptionConfig() {
    return this.getStringAttribute('no_encryption_config');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3Configuration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3ConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3Configuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3ConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3Configuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3ConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3Configuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3Configuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_arn - computed: true, optional: false, required: false
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }

  // buffering_hints - computed: true, optional: false, required: false
  private _bufferingHints = new DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3ConfigurationBufferingHintsOutputReference(this, "buffering_hints");
  public get bufferingHints() {
    return this._bufferingHints;
  }

  // cloudwatch_logging_options - computed: true, optional: false, required: false
  private _cloudwatchLoggingOptions = new DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }

  // compression_format - computed: true, optional: false, required: false
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }

  // encryption_configuration - computed: true, optional: false, required: false
  private _encryptionConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3ConfigurationEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }

  // error_output_prefix - computed: true, optional: false, required: false
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationSchemaEvolutionConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationSchemaEvolutionConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationSchemaEvolutionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationSchemaEvolutionConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationSchemaEvolutionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationSchemaEvolutionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationSchemaEvolutionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationSchemaEvolutionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationTableCreationConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationTableCreationConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationTableCreationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationTableCreationConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationTableCreationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationTableCreationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationTableCreationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationTableCreationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // append_only - computed: true, optional: false, required: false
  public get appendOnly() {
    return this.getBooleanAttribute('append_only');
  }

  // buffering_hints - computed: true, optional: false, required: false
  private _bufferingHints = new DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationBufferingHintsOutputReference(this, "buffering_hints");
  public get bufferingHints() {
    return this._bufferingHints;
  }

  // catalog_configuration - computed: true, optional: false, required: false
  private _catalogConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationCatalogConfigurationOutputReference(this, "catalog_configuration");
  public get catalogConfiguration() {
    return this._catalogConfiguration;
  }

  // cloudwatch_logging_options - computed: true, optional: false, required: false
  private _cloudwatchLoggingOptions = new DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }

  // destination_table_configuration_list - computed: true, optional: false, required: false
  private _destinationTableConfigurationList = new DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationDestinationTableConfigurationListStructList(this, "destination_table_configuration_list", false);
  public get destinationTableConfigurationList() {
    return this._destinationTableConfigurationList;
  }

  // processing_configuration - computed: true, optional: false, required: false
  private _processingConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationProcessingConfigurationOutputReference(this, "processing_configuration");
  public get processingConfiguration() {
    return this._processingConfiguration;
  }

  // retry_options - computed: true, optional: false, required: false
  private _retryOptions = new DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationRetryOptionsOutputReference(this, "retry_options");
  public get retryOptions() {
    return this._retryOptions;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // s3_configuration - computed: true, optional: false, required: false
  private _s3Configuration = new DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationS3ConfigurationOutputReference(this, "s3_configuration");
  public get s3Configuration() {
    return this._s3Configuration;
  }

  // s_3_backup_mode - computed: true, optional: false, required: false
  public get s3BackupMode() {
    return this.getStringAttribute('s_3_backup_mode');
  }

  // schema_evolution_configuration - computed: true, optional: false, required: false
  private _schemaEvolutionConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationSchemaEvolutionConfigurationOutputReference(this, "schema_evolution_configuration");
  public get schemaEvolutionConfiguration() {
    return this._schemaEvolutionConfiguration;
  }

  // table_creation_configuration - computed: true, optional: false, required: false
  private _tableCreationConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationTableCreationConfigurationOutputReference(this, "table_creation_configuration");
  public get tableCreationConfiguration() {
    return this._tableCreationConfiguration;
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamKinesisStreamSourceConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamKinesisStreamSourceConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamKinesisStreamSourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamKinesisStreamSourceConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamKinesisStreamSourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamKinesisStreamSourceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamKinesisStreamSourceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamKinesisStreamSourceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kinesis_stream_arn - computed: true, optional: false, required: false
  public get kinesisStreamArn() {
    return this.getStringAttribute('kinesis_stream_arn');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connectivity - computed: true, optional: false, required: false
  public get connectivity() {
    return this.getStringAttribute('connectivity');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamMskSourceConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamMskSourceConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamMskSourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamMskSourceConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamMskSourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamMskSourceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamMskSourceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamMskSourceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_configuration - computed: true, optional: false, required: false
  private _authenticationConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfigurationOutputReference(this, "authentication_configuration");
  public get authenticationConfiguration() {
    return this._authenticationConfiguration;
  }

  // msk_cluster_arn - computed: true, optional: false, required: false
  public get mskClusterArn() {
    return this.getStringAttribute('msk_cluster_arn');
  }

  // read_from_timestamp - computed: true, optional: false, required: false
  public get readFromTimestamp() {
    return this.getStringAttribute('read_from_timestamp');
  }

  // topic_name - computed: true, optional: false, required: false
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCloudwatchLoggingOptions {
}

export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCloudwatchLoggingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCloudwatchLoggingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCloudwatchLoggingOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCloudwatchLoggingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCloudwatchLoggingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_stream_name - computed: true, optional: false, required: false
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand {
}

export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommandToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommandToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommandOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // copy_options - computed: true, optional: false, required: false
  public get copyOptions() {
    return this.getStringAttribute('copy_options');
  }

  // data_table_columns - computed: true, optional: false, required: false
  public get dataTableColumns() {
    return this.getStringAttribute('data_table_columns');
  }

  // data_table_name - computed: true, optional: false, required: false
  public get dataTableName() {
    return this.getStringAttribute('data_table_name');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsParameters {
}

export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsParametersToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameter_name - computed: true, optional: false, required: false
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }

  // parameter_value - computed: true, optional: false, required: false
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsParametersOutputReference {
    return new DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessors {
}

export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsOutputReference {
    return new DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // processors - computed: true, optional: false, required: false
  private _processors = new DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsList(this, "processors", false);
  public get processors() {
    return this._processors;
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationRetryOptions {
}

export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationRetryOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationRetryOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationRetryOptionsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationRetryOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationRetryOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationRetryOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationRetryOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration_in_seconds - computed: true, optional: false, required: false
  public get durationInSeconds() {
    return this.getNumberAttribute('duration_in_seconds');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationBufferingHints {
}

export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationBufferingHintsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationBufferingHints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationBufferingHintsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationBufferingHints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationBufferingHintsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationBufferingHints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationBufferingHints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interval_in_seconds - computed: true, optional: false, required: false
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }

  // size_in_m_bs - computed: true, optional: false, required: false
  public get sizeInMBs() {
    return this.getNumberAttribute('size_in_m_bs');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptions {
}

export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_stream_name - computed: true, optional: false, required: false
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfig {
}

export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfigToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // awskms_key_arn - computed: true, optional: false, required: false
  public get awskmsKeyArn() {
    return this.getStringAttribute('awskms_key_arn');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_encryption_config - computed: true, optional: false, required: false
  private _kmsEncryptionConfig = new DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfigOutputReference(this, "kms_encryption_config");
  public get kmsEncryptionConfig() {
    return this._kmsEncryptionConfig;
  }

  // no_encryption_config - computed: true, optional: false, required: false
  public get noEncryptionConfig() {
    return this.getStringAttribute('no_encryption_config');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_arn - computed: true, optional: false, required: false
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }

  // buffering_hints - computed: true, optional: false, required: false
  private _bufferingHints = new DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationBufferingHintsOutputReference(this, "buffering_hints");
  public get bufferingHints() {
    return this._bufferingHints;
  }

  // cloudwatch_logging_options - computed: true, optional: false, required: false
  private _cloudwatchLoggingOptions = new DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }

  // compression_format - computed: true, optional: false, required: false
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }

  // encryption_configuration - computed: true, optional: false, required: false
  private _encryptionConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }

  // error_output_prefix - computed: true, optional: false, required: false
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationBufferingHints {
}

export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationBufferingHintsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationBufferingHints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationBufferingHintsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationBufferingHints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationBufferingHintsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationBufferingHints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationBufferingHints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interval_in_seconds - computed: true, optional: false, required: false
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }

  // size_in_m_bs - computed: true, optional: false, required: false
  public get sizeInMBs() {
    return this.getNumberAttribute('size_in_m_bs');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions {
}

export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_stream_name - computed: true, optional: false, required: false
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig {
}

export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // awskms_key_arn - computed: true, optional: false, required: false
  public get awskmsKeyArn() {
    return this.getStringAttribute('awskms_key_arn');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_encryption_config - computed: true, optional: false, required: false
  private _kmsEncryptionConfig = new DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigOutputReference(this, "kms_encryption_config");
  public get kmsEncryptionConfig() {
    return this._kmsEncryptionConfig;
  }

  // no_encryption_config - computed: true, optional: false, required: false
  public get noEncryptionConfig() {
    return this.getStringAttribute('no_encryption_config');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3Configuration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3Configuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3Configuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3Configuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3Configuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_arn - computed: true, optional: false, required: false
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }

  // buffering_hints - computed: true, optional: false, required: false
  private _bufferingHints = new DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationBufferingHintsOutputReference(this, "buffering_hints");
  public get bufferingHints() {
    return this._bufferingHints;
  }

  // cloudwatch_logging_options - computed: true, optional: false, required: false
  private _cloudwatchLoggingOptions = new DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }

  // compression_format - computed: true, optional: false, required: false
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }

  // encryption_configuration - computed: true, optional: false, required: false
  private _encryptionConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }

  // error_output_prefix - computed: true, optional: false, required: false
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationSecretsManagerConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationSecretsManagerConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationSecretsManagerConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationSecretsManagerConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationSecretsManagerConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationSecretsManagerConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationSecretsManagerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationSecretsManagerConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudwatch_logging_options - computed: true, optional: false, required: false
  private _cloudwatchLoggingOptions = new DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }

  // cluster_jdbcurl - computed: true, optional: false, required: false
  public get clusterJdbcurl() {
    return this.getStringAttribute('cluster_jdbcurl');
  }

  // copy_command - computed: true, optional: false, required: false
  private _copyCommand = new DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommandOutputReference(this, "copy_command");
  public get copyCommand() {
    return this._copyCommand;
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // processing_configuration - computed: true, optional: false, required: false
  private _processingConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationOutputReference(this, "processing_configuration");
  public get processingConfiguration() {
    return this._processingConfiguration;
  }

  // retry_options - computed: true, optional: false, required: false
  private _retryOptions = new DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationRetryOptionsOutputReference(this, "retry_options");
  public get retryOptions() {
    return this._retryOptions;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // s3_backup_configuration - computed: true, optional: false, required: false
  private _s3BackupConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationOutputReference(this, "s3_backup_configuration");
  public get s3BackupConfiguration() {
    return this._s3BackupConfiguration;
  }

  // s3_backup_mode - computed: true, optional: false, required: false
  public get s3BackupMode() {
    return this.getStringAttribute('s3_backup_mode');
  }

  // s3_configuration - computed: true, optional: false, required: false
  private _s3Configuration = new DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationOutputReference(this, "s3_configuration");
  public get s3Configuration() {
    return this._s3Configuration;
  }

  // secrets_manager_configuration - computed: true, optional: false, required: false
  private _secretsManagerConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationSecretsManagerConfigurationOutputReference(this, "secrets_manager_configuration");
  public get secretsManagerConfiguration() {
    return this._secretsManagerConfiguration;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationBufferingHints {
}

export function dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationBufferingHintsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationBufferingHints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationBufferingHintsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationBufferingHints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationBufferingHintsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationBufferingHints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationBufferingHints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interval_in_seconds - computed: true, optional: false, required: false
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }

  // size_in_m_bs - computed: true, optional: false, required: false
  public get sizeInMBs() {
    return this.getNumberAttribute('size_in_m_bs');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationCloudwatchLoggingOptions {
}

export function dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationCloudwatchLoggingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationCloudwatchLoggingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationCloudwatchLoggingOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationCloudwatchLoggingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationCloudwatchLoggingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_stream_name - computed: true, optional: false, required: false
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfig {
}

export function dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfigToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // awskms_key_arn - computed: true, optional: false, required: false
  public get awskmsKeyArn() {
    return this.getStringAttribute('awskms_key_arn');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_encryption_config - computed: true, optional: false, required: false
  private _kmsEncryptionConfig = new DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfigOutputReference(this, "kms_encryption_config");
  public get kmsEncryptionConfig() {
    return this._kmsEncryptionConfig;
  }

  // no_encryption_config - computed: true, optional: false, required: false
  public get noEncryptionConfig() {
    return this.getStringAttribute('no_encryption_config');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_arn - computed: true, optional: false, required: false
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }

  // buffering_hints - computed: true, optional: false, required: false
  private _bufferingHints = new DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationBufferingHintsOutputReference(this, "buffering_hints");
  public get bufferingHints() {
    return this._bufferingHints;
  }

  // cloudwatch_logging_options - computed: true, optional: false, required: false
  private _cloudwatchLoggingOptions = new DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }

  // compression_format - computed: true, optional: false, required: false
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }

  // encryption_configuration - computed: true, optional: false, required: false
  private _encryptionConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }

  // error_output_prefix - computed: true, optional: false, required: false
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationBufferingHints {
}

export function dataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationBufferingHintsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationBufferingHints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationBufferingHintsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationBufferingHints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationBufferingHintsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationBufferingHints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationBufferingHints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interval_in_seconds - computed: true, optional: false, required: false
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }

  // size_in_m_bs - computed: true, optional: false, required: false
  public get sizeInMBs() {
    return this.getNumberAttribute('size_in_m_bs');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationCloudwatchLoggingOptions {
}

export function dataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationCloudwatchLoggingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationCloudwatchLoggingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationCloudwatchLoggingOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationCloudwatchLoggingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationCloudwatchLoggingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_stream_name - computed: true, optional: false, required: false
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationProcessingConfigurationProcessorsParameters {
}

export function dataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationProcessingConfigurationProcessorsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationProcessingConfigurationProcessorsParametersToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationProcessingConfigurationProcessorsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationProcessingConfigurationProcessorsParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationProcessingConfigurationProcessorsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationProcessingConfigurationProcessorsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameter_name - computed: true, optional: false, required: false
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }

  // parameter_value - computed: true, optional: false, required: false
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationProcessingConfigurationProcessorsParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationProcessingConfigurationProcessorsParametersOutputReference {
    return new DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationProcessingConfigurationProcessorsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationProcessingConfigurationProcessors {
}

export function dataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationProcessingConfigurationProcessorsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationProcessingConfigurationProcessors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationProcessingConfigurationProcessorsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationProcessingConfigurationProcessors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationProcessingConfigurationProcessorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationProcessingConfigurationProcessors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationProcessingConfigurationProcessors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationProcessingConfigurationProcessorsParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationProcessingConfigurationProcessorsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationProcessingConfigurationProcessorsOutputReference {
    return new DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationProcessingConfigurationProcessorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationProcessingConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationProcessingConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationProcessingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationProcessingConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationProcessingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationProcessingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationProcessingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationProcessingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // processors - computed: true, optional: false, required: false
  private _processors = new DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationProcessingConfigurationProcessorsList(this, "processors", false);
  public get processors() {
    return this._processors;
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationRetryOptions {
}

export function dataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationRetryOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationRetryOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationRetryOptionsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationRetryOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationRetryOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationRetryOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationRetryOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration_in_seconds - computed: true, optional: false, required: false
  public get durationInSeconds() {
    return this.getNumberAttribute('duration_in_seconds');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3ConfigurationBufferingHints {
}

export function dataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3ConfigurationBufferingHintsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3ConfigurationBufferingHints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3ConfigurationBufferingHintsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3ConfigurationBufferingHints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3ConfigurationBufferingHintsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3ConfigurationBufferingHints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3ConfigurationBufferingHints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interval_in_seconds - computed: true, optional: false, required: false
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }

  // size_in_m_bs - computed: true, optional: false, required: false
  public get sizeInMBs() {
    return this.getNumberAttribute('size_in_m_bs');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions {
}

export function dataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_stream_name - computed: true, optional: false, required: false
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig {
}

export function dataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // awskms_key_arn - computed: true, optional: false, required: false
  public get awskmsKeyArn() {
    return this.getStringAttribute('awskms_key_arn');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3ConfigurationEncryptionConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3ConfigurationEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3ConfigurationEncryptionConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3ConfigurationEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3ConfigurationEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3ConfigurationEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3ConfigurationEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_encryption_config - computed: true, optional: false, required: false
  private _kmsEncryptionConfig = new DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigOutputReference(this, "kms_encryption_config");
  public get kmsEncryptionConfig() {
    return this._kmsEncryptionConfig;
  }

  // no_encryption_config - computed: true, optional: false, required: false
  public get noEncryptionConfig() {
    return this.getStringAttribute('no_encryption_config');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3Configuration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3ConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3Configuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3ConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3Configuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3ConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3Configuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3Configuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_arn - computed: true, optional: false, required: false
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }

  // buffering_hints - computed: true, optional: false, required: false
  private _bufferingHints = new DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3ConfigurationBufferingHintsOutputReference(this, "buffering_hints");
  public get bufferingHints() {
    return this._bufferingHints;
  }

  // cloudwatch_logging_options - computed: true, optional: false, required: false
  private _cloudwatchLoggingOptions = new DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }

  // compression_format - computed: true, optional: false, required: false
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }

  // encryption_configuration - computed: true, optional: false, required: false
  private _encryptionConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3ConfigurationEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }

  // error_output_prefix - computed: true, optional: false, required: false
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationSecretsManagerConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationSecretsManagerConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationSecretsManagerConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationSecretsManagerConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationSecretsManagerConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationSecretsManagerConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationSecretsManagerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationSecretsManagerConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationSnowflakeRoleConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationSnowflakeRoleConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationSnowflakeRoleConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationSnowflakeRoleConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationSnowflakeRoleConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationSnowflakeRoleConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationSnowflakeRoleConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationSnowflakeRoleConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // snowflake_role - computed: true, optional: false, required: false
  public get snowflakeRole() {
    return this.getStringAttribute('snowflake_role');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationSnowflakeVpcConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationSnowflakeVpcConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationSnowflakeVpcConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationSnowflakeVpcConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationSnowflakeVpcConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationSnowflakeVpcConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationSnowflakeVpcConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationSnowflakeVpcConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // private_link_vpce_id - computed: true, optional: false, required: false
  public get privateLinkVpceId() {
    return this.getStringAttribute('private_link_vpce_id');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_url - computed: true, optional: false, required: false
  public get accountUrl() {
    return this.getStringAttribute('account_url');
  }

  // buffering_hints - computed: true, optional: false, required: false
  private _bufferingHints = new DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationBufferingHintsOutputReference(this, "buffering_hints");
  public get bufferingHints() {
    return this._bufferingHints;
  }

  // cloudwatch_logging_options - computed: true, optional: false, required: false
  private _cloudwatchLoggingOptions = new DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }

  // content_column_name - computed: true, optional: false, required: false
  public get contentColumnName() {
    return this.getStringAttribute('content_column_name');
  }

  // data_loading_option - computed: true, optional: false, required: false
  public get dataLoadingOption() {
    return this.getStringAttribute('data_loading_option');
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // key_passphrase - computed: true, optional: false, required: false
  public get keyPassphrase() {
    return this.getStringAttribute('key_passphrase');
  }

  // meta_data_column_name - computed: true, optional: false, required: false
  public get metaDataColumnName() {
    return this.getStringAttribute('meta_data_column_name');
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // processing_configuration - computed: true, optional: false, required: false
  private _processingConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationProcessingConfigurationOutputReference(this, "processing_configuration");
  public get processingConfiguration() {
    return this._processingConfiguration;
  }

  // retry_options - computed: true, optional: false, required: false
  private _retryOptions = new DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationRetryOptionsOutputReference(this, "retry_options");
  public get retryOptions() {
    return this._retryOptions;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // s3_backup_mode - computed: true, optional: false, required: false
  public get s3BackupMode() {
    return this.getStringAttribute('s3_backup_mode');
  }

  // s3_configuration - computed: true, optional: false, required: false
  private _s3Configuration = new DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationS3ConfigurationOutputReference(this, "s3_configuration");
  public get s3Configuration() {
    return this._s3Configuration;
  }

  // schema - computed: true, optional: false, required: false
  public get schema() {
    return this.getStringAttribute('schema');
  }

  // secrets_manager_configuration - computed: true, optional: false, required: false
  private _secretsManagerConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationSecretsManagerConfigurationOutputReference(this, "secrets_manager_configuration");
  public get secretsManagerConfiguration() {
    return this._secretsManagerConfiguration;
  }

  // snowflake_role_configuration - computed: true, optional: false, required: false
  private _snowflakeRoleConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationSnowflakeRoleConfigurationOutputReference(this, "snowflake_role_configuration");
  public get snowflakeRoleConfiguration() {
    return this._snowflakeRoleConfiguration;
  }

  // snowflake_vpc_configuration - computed: true, optional: false, required: false
  private _snowflakeVpcConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationSnowflakeVpcConfigurationOutputReference(this, "snowflake_vpc_configuration");
  public get snowflakeVpcConfiguration() {
    return this._snowflakeVpcConfiguration;
  }

  // table - computed: true, optional: false, required: false
  public get table() {
    return this.getStringAttribute('table');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationBufferingHints {
}

export function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationBufferingHintsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationBufferingHints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationBufferingHintsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationBufferingHints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationBufferingHintsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationBufferingHints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationBufferingHints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interval_in_seconds - computed: true, optional: false, required: false
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }

  // size_in_m_bs - computed: true, optional: false, required: false
  public get sizeInMBs() {
    return this.getNumberAttribute('size_in_m_bs');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationCloudwatchLoggingOptions {
}

export function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationCloudwatchLoggingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationCloudwatchLoggingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationCloudwatchLoggingOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationCloudwatchLoggingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationCloudwatchLoggingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_stream_name - computed: true, optional: false, required: false
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsParameters {
}

export function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsParametersToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameter_name - computed: true, optional: false, required: false
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }

  // parameter_value - computed: true, optional: false, required: false
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsParametersOutputReference {
    return new DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessors {
}

export function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsOutputReference {
    return new DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // processors - computed: true, optional: false, required: false
  private _processors = new DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsList(this, "processors", false);
  public get processors() {
    return this._processors;
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationRetryOptions {
}

export function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationRetryOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationRetryOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationRetryOptionsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationRetryOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationRetryOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationRetryOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationRetryOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration_in_seconds - computed: true, optional: false, required: false
  public get durationInSeconds() {
    return this.getNumberAttribute('duration_in_seconds');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationBufferingHints {
}

export function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationBufferingHintsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationBufferingHints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationBufferingHintsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationBufferingHints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationBufferingHintsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationBufferingHints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationBufferingHints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interval_in_seconds - computed: true, optional: false, required: false
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }

  // size_in_m_bs - computed: true, optional: false, required: false
  public get sizeInMBs() {
    return this.getNumberAttribute('size_in_m_bs');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions {
}

export function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_stream_name - computed: true, optional: false, required: false
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig {
}

export function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // awskms_key_arn - computed: true, optional: false, required: false
  public get awskmsKeyArn() {
    return this.getStringAttribute('awskms_key_arn');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_encryption_config - computed: true, optional: false, required: false
  private _kmsEncryptionConfig = new DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigOutputReference(this, "kms_encryption_config");
  public get kmsEncryptionConfig() {
    return this._kmsEncryptionConfig;
  }

  // no_encryption_config - computed: true, optional: false, required: false
  public get noEncryptionConfig() {
    return this.getStringAttribute('no_encryption_config');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3Configuration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3Configuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3Configuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3Configuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3Configuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_arn - computed: true, optional: false, required: false
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }

  // buffering_hints - computed: true, optional: false, required: false
  private _bufferingHints = new DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationBufferingHintsOutputReference(this, "buffering_hints");
  public get bufferingHints() {
    return this._bufferingHints;
  }

  // cloudwatch_logging_options - computed: true, optional: false, required: false
  private _cloudwatchLoggingOptions = new DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }

  // compression_format - computed: true, optional: false, required: false
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }

  // encryption_configuration - computed: true, optional: false, required: false
  private _encryptionConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }

  // error_output_prefix - computed: true, optional: false, required: false
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationSecretsManagerConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationSecretsManagerConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationSecretsManagerConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationSecretsManagerConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationSecretsManagerConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationSecretsManagerConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationSecretsManagerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationSecretsManagerConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfiguration {
}

export function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buffering_hints - computed: true, optional: false, required: false
  private _bufferingHints = new DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationBufferingHintsOutputReference(this, "buffering_hints");
  public get bufferingHints() {
    return this._bufferingHints;
  }

  // cloudwatch_logging_options - computed: true, optional: false, required: false
  private _cloudwatchLoggingOptions = new DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }

  // hec_acknowledgment_timeout_in_seconds - computed: true, optional: false, required: false
  public get hecAcknowledgmentTimeoutInSeconds() {
    return this.getNumberAttribute('hec_acknowledgment_timeout_in_seconds');
  }

  // hec_endpoint - computed: true, optional: false, required: false
  public get hecEndpoint() {
    return this.getStringAttribute('hec_endpoint');
  }

  // hec_endpoint_type - computed: true, optional: false, required: false
  public get hecEndpointType() {
    return this.getStringAttribute('hec_endpoint_type');
  }

  // hec_token - computed: true, optional: false, required: false
  public get hecToken() {
    return this.getStringAttribute('hec_token');
  }

  // processing_configuration - computed: true, optional: false, required: false
  private _processingConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationOutputReference(this, "processing_configuration");
  public get processingConfiguration() {
    return this._processingConfiguration;
  }

  // retry_options - computed: true, optional: false, required: false
  private _retryOptions = new DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationRetryOptionsOutputReference(this, "retry_options");
  public get retryOptions() {
    return this._retryOptions;
  }

  // s3_backup_mode - computed: true, optional: false, required: false
  public get s3BackupMode() {
    return this.getStringAttribute('s3_backup_mode');
  }

  // s3_configuration - computed: true, optional: false, required: false
  private _s3Configuration = new DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationOutputReference(this, "s3_configuration");
  public get s3Configuration() {
    return this._s3Configuration;
  }

  // secrets_manager_configuration - computed: true, optional: false, required: false
  private _secretsManagerConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationSecretsManagerConfigurationOutputReference(this, "secrets_manager_configuration");
  public get secretsManagerConfiguration() {
    return this._secretsManagerConfiguration;
  }
}
export interface DataAwsccKinesisfirehoseDeliveryStreamTags {
}

export function dataAwsccKinesisfirehoseDeliveryStreamTagsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisfirehoseDeliveryStreamTagsToHclTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisfirehoseDeliveryStreamTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKinesisfirehoseDeliveryStreamTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisfirehoseDeliveryStreamTags | undefined) {
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

export class DataAwsccKinesisfirehoseDeliveryStreamTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKinesisfirehoseDeliveryStreamTagsOutputReference {
    return new DataAwsccKinesisfirehoseDeliveryStreamTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/kinesisfirehose_delivery_stream awscc_kinesisfirehose_delivery_stream}
*/
export class DataAwsccKinesisfirehoseDeliveryStream extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_kinesisfirehose_delivery_stream";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccKinesisfirehoseDeliveryStream resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccKinesisfirehoseDeliveryStream to import
  * @param importFromId The id of the existing DataAwsccKinesisfirehoseDeliveryStream that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/kinesisfirehose_delivery_stream#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccKinesisfirehoseDeliveryStream to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_kinesisfirehose_delivery_stream", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/kinesisfirehose_delivery_stream awscc_kinesisfirehose_delivery_stream} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccKinesisfirehoseDeliveryStreamConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccKinesisfirehoseDeliveryStreamConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_kinesisfirehose_delivery_stream',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.94.0'
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

  // amazon_open_search_serverless_destination_configuration - computed: true, optional: false, required: false
  private _amazonOpenSearchServerlessDestinationConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfigurationOutputReference(this, "amazon_open_search_serverless_destination_configuration");
  public get amazonOpenSearchServerlessDestinationConfiguration() {
    return this._amazonOpenSearchServerlessDestinationConfiguration;
  }

  // amazonopensearchservice_destination_configuration - computed: true, optional: false, required: false
  private _amazonopensearchserviceDestinationConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfigurationOutputReference(this, "amazonopensearchservice_destination_configuration");
  public get amazonopensearchserviceDestinationConfiguration() {
    return this._amazonopensearchserviceDestinationConfiguration;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // database_source_configuration - computed: true, optional: false, required: false
  private _databaseSourceConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamDatabaseSourceConfigurationOutputReference(this, "database_source_configuration");
  public get databaseSourceConfiguration() {
    return this._databaseSourceConfiguration;
  }

  // delivery_stream_encryption_configuration_input - computed: true, optional: false, required: false
  private _deliveryStreamEncryptionConfigurationInput = new DataAwsccKinesisfirehoseDeliveryStreamDeliveryStreamEncryptionConfigurationInputOutputReference(this, "delivery_stream_encryption_configuration_input");
  public get deliveryStreamEncryptionConfigurationInput() {
    return this._deliveryStreamEncryptionConfigurationInput;
  }

  // delivery_stream_name - computed: true, optional: false, required: false
  public get deliveryStreamName() {
    return this.getStringAttribute('delivery_stream_name');
  }

  // delivery_stream_type - computed: true, optional: false, required: false
  public get deliveryStreamType() {
    return this.getStringAttribute('delivery_stream_type');
  }

  // direct_put_source_configuration - computed: true, optional: false, required: false
  private _directPutSourceConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamDirectPutSourceConfigurationOutputReference(this, "direct_put_source_configuration");
  public get directPutSourceConfiguration() {
    return this._directPutSourceConfiguration;
  }

  // elasticsearch_destination_configuration - computed: true, optional: false, required: false
  private _elasticsearchDestinationConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationOutputReference(this, "elasticsearch_destination_configuration");
  public get elasticsearchDestinationConfiguration() {
    return this._elasticsearchDestinationConfiguration;
  }

  // extended_s3_destination_configuration - computed: true, optional: false, required: false
  private _extendedS3DestinationConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationOutputReference(this, "extended_s3_destination_configuration");
  public get extendedS3DestinationConfiguration() {
    return this._extendedS3DestinationConfiguration;
  }

  // http_endpoint_destination_configuration - computed: true, optional: false, required: false
  private _httpEndpointDestinationConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationOutputReference(this, "http_endpoint_destination_configuration");
  public get httpEndpointDestinationConfiguration() {
    return this._httpEndpointDestinationConfiguration;
  }

  // iceberg_destination_configuration - computed: true, optional: false, required: false
  private _icebergDestinationConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamIcebergDestinationConfigurationOutputReference(this, "iceberg_destination_configuration");
  public get icebergDestinationConfiguration() {
    return this._icebergDestinationConfiguration;
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

  // kinesis_stream_source_configuration - computed: true, optional: false, required: false
  private _kinesisStreamSourceConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamKinesisStreamSourceConfigurationOutputReference(this, "kinesis_stream_source_configuration");
  public get kinesisStreamSourceConfiguration() {
    return this._kinesisStreamSourceConfiguration;
  }

  // msk_source_configuration - computed: true, optional: false, required: false
  private _mskSourceConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamMskSourceConfigurationOutputReference(this, "msk_source_configuration");
  public get mskSourceConfiguration() {
    return this._mskSourceConfiguration;
  }

  // redshift_destination_configuration - computed: true, optional: false, required: false
  private _redshiftDestinationConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationOutputReference(this, "redshift_destination_configuration");
  public get redshiftDestinationConfiguration() {
    return this._redshiftDestinationConfiguration;
  }

  // s3_destination_configuration - computed: true, optional: false, required: false
  private _s3DestinationConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationOutputReference(this, "s3_destination_configuration");
  public get s3DestinationConfiguration() {
    return this._s3DestinationConfiguration;
  }

  // snowflake_destination_configuration - computed: true, optional: false, required: false
  private _snowflakeDestinationConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamSnowflakeDestinationConfigurationOutputReference(this, "snowflake_destination_configuration");
  public get snowflakeDestinationConfiguration() {
    return this._snowflakeDestinationConfiguration;
  }

  // splunk_destination_configuration - computed: true, optional: false, required: false
  private _splunkDestinationConfiguration = new DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationOutputReference(this, "splunk_destination_configuration");
  public get splunkDestinationConfiguration() {
    return this._splunkDestinationConfiguration;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccKinesisfirehoseDeliveryStreamTagsList(this, "tags", false);
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
