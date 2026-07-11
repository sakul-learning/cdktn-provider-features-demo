// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iotfleetwise_campaign
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccIotfleetwiseCampaignConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iotfleetwise_campaign#id DataAwsccIotfleetwiseCampaign#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme {
}

export function dataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeToTerraform(struct?: DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeToHclTerraform(struct?: DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition_language_version - computed: true, optional: false, required: false
  public get conditionLanguageVersion() {
    return this.getNumberAttribute('condition_language_version');
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // minimum_trigger_interval_ms - computed: true, optional: false, required: false
  public get minimumTriggerIntervalMs() {
    return this.getNumberAttribute('minimum_trigger_interval_ms');
  }

  // trigger_mode - computed: true, optional: false, required: false
  public get triggerMode() {
    return this.getStringAttribute('trigger_mode');
  }
}
export interface DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme {
}

export function dataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeToTerraform(struct?: DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeToHclTerraform(struct?: DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // period_ms - computed: true, optional: false, required: false
  public get periodMs() {
    return this.getNumberAttribute('period_ms');
  }
}
export interface DataAwsccIotfleetwiseCampaignCollectionScheme {
}

export function dataAwsccIotfleetwiseCampaignCollectionSchemeToTerraform(struct?: DataAwsccIotfleetwiseCampaignCollectionScheme): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotfleetwiseCampaignCollectionSchemeToHclTerraform(struct?: DataAwsccIotfleetwiseCampaignCollectionScheme): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotfleetwiseCampaignCollectionScheme | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotfleetwiseCampaignCollectionScheme | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition_based_collection_scheme - computed: true, optional: false, required: false
  private _conditionBasedCollectionScheme = new DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference(this, "condition_based_collection_scheme");
  public get conditionBasedCollectionScheme() {
    return this._conditionBasedCollectionScheme;
  }

  // time_based_collection_scheme - computed: true, optional: false, required: false
  private _timeBasedCollectionScheme = new DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference(this, "time_based_collection_scheme");
  public get timeBasedCollectionScheme() {
    return this._timeBasedCollectionScheme;
  }
}
export interface DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig {
}

export function dataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigToTerraform(struct?: DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigToHclTerraform(struct?: DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // execution_role_arn - computed: true, optional: false, required: false
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }

  // mqtt_topic_arn - computed: true, optional: false, required: false
  public get mqttTopicArn() {
    return this.getStringAttribute('mqtt_topic_arn');
  }
}
export interface DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3Config {
}

export function dataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigToTerraform(struct?: DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3Config): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigToHclTerraform(struct?: DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3Config): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3Config | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3Config | undefined) {
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

  // data_format - computed: true, optional: false, required: false
  public get dataFormat() {
    return this.getStringAttribute('data_format');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // storage_compression_format - computed: true, optional: false, required: false
  public get storageCompressionFormat() {
    return this.getStringAttribute('storage_compression_format');
  }
}
export interface DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfig {
}

export function dataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigToTerraform(struct?: DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigToHclTerraform(struct?: DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // execution_role_arn - computed: true, optional: false, required: false
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }

  // timestream_table_arn - computed: true, optional: false, required: false
  public get timestreamTableArn() {
    return this.getStringAttribute('timestream_table_arn');
  }
}
export interface DataAwsccIotfleetwiseCampaignDataDestinationConfigs {
}

export function dataAwsccIotfleetwiseCampaignDataDestinationConfigsToTerraform(struct?: DataAwsccIotfleetwiseCampaignDataDestinationConfigs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotfleetwiseCampaignDataDestinationConfigsToHclTerraform(struct?: DataAwsccIotfleetwiseCampaignDataDestinationConfigs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotfleetwiseCampaignDataDestinationConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotfleetwiseCampaignDataDestinationConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mqtt_topic_config - computed: true, optional: false, required: false
  private _mqttTopicConfig = new DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference(this, "mqtt_topic_config");
  public get mqttTopicConfig() {
    return this._mqttTopicConfig;
  }

  // s3_config - computed: true, optional: false, required: false
  private _s3Config = new DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference(this, "s3_config");
  public get s3Config() {
    return this._s3Config;
  }

  // timestream_config - computed: true, optional: false, required: false
  private _timestreamConfig = new DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference(this, "timestream_config");
  public get timestreamConfig() {
    return this._timestreamConfig;
  }
}

export class DataAwsccIotfleetwiseCampaignDataDestinationConfigsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference {
    return new DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize {
}

export function dataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeToTerraform(struct?: DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeToHclTerraform(struct?: DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize | undefined) {
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
export interface DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive {
}

export function dataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveToTerraform(struct?: DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveToHclTerraform(struct?: DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive | undefined) {
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
export interface DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptions {
}

export function dataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsToTerraform(struct?: DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsToHclTerraform(struct?: DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // maximum_size - computed: true, optional: false, required: false
  private _maximumSize = new DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference(this, "maximum_size");
  public get maximumSize() {
    return this._maximumSize;
  }

  // minimum_time_to_live - computed: true, optional: false, required: false
  private _minimumTimeToLive = new DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference(this, "minimum_time_to_live");
  public get minimumTimeToLive() {
    return this._minimumTimeToLive;
  }

  // storage_location - computed: true, optional: false, required: false
  public get storageLocation() {
    return this.getStringAttribute('storage_location');
  }
}
export interface DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptions {
}

export function dataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsToTerraform(struct?: DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsToHclTerraform(struct?: DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition_language_version - computed: true, optional: false, required: false
  public get conditionLanguageVersion() {
    return this.getNumberAttribute('condition_language_version');
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }
}
export interface DataAwsccIotfleetwiseCampaignDataPartitions {
}

export function dataAwsccIotfleetwiseCampaignDataPartitionsToTerraform(struct?: DataAwsccIotfleetwiseCampaignDataPartitions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotfleetwiseCampaignDataPartitionsToHclTerraform(struct?: DataAwsccIotfleetwiseCampaignDataPartitions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotfleetwiseCampaignDataPartitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotfleetwiseCampaignDataPartitions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // storage_options - computed: true, optional: false, required: false
  private _storageOptions = new DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference(this, "storage_options");
  public get storageOptions() {
    return this._storageOptions;
  }

  // upload_options - computed: true, optional: false, required: false
  private _uploadOptions = new DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference(this, "upload_options");
  public get uploadOptions() {
    return this._uploadOptions;
  }
}

export class DataAwsccIotfleetwiseCampaignDataPartitionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference {
    return new DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotfleetwiseCampaignSignalsToCollect {
}

export function dataAwsccIotfleetwiseCampaignSignalsToCollectToTerraform(struct?: DataAwsccIotfleetwiseCampaignSignalsToCollect): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotfleetwiseCampaignSignalsToCollectToHclTerraform(struct?: DataAwsccIotfleetwiseCampaignSignalsToCollect): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotfleetwiseCampaignSignalsToCollect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotfleetwiseCampaignSignalsToCollect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_partition_id - computed: true, optional: false, required: false
  public get dataPartitionId() {
    return this.getStringAttribute('data_partition_id');
  }

  // max_sample_count - computed: true, optional: false, required: false
  public get maxSampleCount() {
    return this.getNumberAttribute('max_sample_count');
  }

  // minimum_sampling_interval_ms - computed: true, optional: false, required: false
  public get minimumSamplingIntervalMs() {
    return this.getNumberAttribute('minimum_sampling_interval_ms');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsccIotfleetwiseCampaignSignalsToCollectList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference {
    return new DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased {
}

export function dataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedToTerraform(struct?: DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedToHclTerraform(struct?: DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition_expression - computed: true, optional: false, required: false
  public get conditionExpression() {
    return this.getStringAttribute('condition_expression');
  }

  // trigger_mode - computed: true, optional: false, required: false
  public get triggerMode() {
    return this.getStringAttribute('trigger_mode');
  }
}
export interface DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased {
}

export function dataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedToTerraform(struct?: DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedToHclTerraform(struct?: DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // execution_frequency_ms - computed: true, optional: false, required: false
  public get executionFrequencyMs() {
    return this.getNumberAttribute('execution_frequency_ms');
  }
}
export interface DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfig {
}

export function dataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigToTerraform(struct?: DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigToHclTerraform(struct?: DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition_based - computed: true, optional: false, required: false
  private _conditionBased = new DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference(this, "condition_based");
  public get conditionBased() {
    return this._conditionBased;
  }

  // time_based - computed: true, optional: false, required: false
  private _timeBased = new DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference(this, "time_based");
  public get timeBased() {
    return this._timeBased;
  }
}
export interface DataAwsccIotfleetwiseCampaignSignalsToFetch {
}

export function dataAwsccIotfleetwiseCampaignSignalsToFetchToTerraform(struct?: DataAwsccIotfleetwiseCampaignSignalsToFetch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotfleetwiseCampaignSignalsToFetchToHclTerraform(struct?: DataAwsccIotfleetwiseCampaignSignalsToFetch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotfleetwiseCampaignSignalsToFetch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotfleetwiseCampaignSignalsToFetch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  public get actions() {
    return this.getListAttribute('actions');
  }

  // condition_language_version - computed: true, optional: false, required: false
  public get conditionLanguageVersion() {
    return this.getNumberAttribute('condition_language_version');
  }

  // fully_qualified_name - computed: true, optional: false, required: false
  public get fullyQualifiedName() {
    return this.getStringAttribute('fully_qualified_name');
  }

  // signal_fetch_config - computed: true, optional: false, required: false
  private _signalFetchConfig = new DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference(this, "signal_fetch_config");
  public get signalFetchConfig() {
    return this._signalFetchConfig;
  }
}

export class DataAwsccIotfleetwiseCampaignSignalsToFetchList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference {
    return new DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotfleetwiseCampaignTags {
}

export function dataAwsccIotfleetwiseCampaignTagsToTerraform(struct?: DataAwsccIotfleetwiseCampaignTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotfleetwiseCampaignTagsToHclTerraform(struct?: DataAwsccIotfleetwiseCampaignTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotfleetwiseCampaignTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotfleetwiseCampaignTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotfleetwiseCampaignTags | undefined) {
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

export class DataAwsccIotfleetwiseCampaignTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotfleetwiseCampaignTagsOutputReference {
    return new DataAwsccIotfleetwiseCampaignTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iotfleetwise_campaign awscc_iotfleetwise_campaign}
*/
export class DataAwsccIotfleetwiseCampaign extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iotfleetwise_campaign";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccIotfleetwiseCampaign resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccIotfleetwiseCampaign to import
  * @param importFromId The id of the existing DataAwsccIotfleetwiseCampaign that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iotfleetwise_campaign#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccIotfleetwiseCampaign to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotfleetwise_campaign", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iotfleetwise_campaign awscc_iotfleetwise_campaign} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotfleetwiseCampaignConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotfleetwiseCampaignConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotfleetwise_campaign',
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

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // collection_scheme - computed: true, optional: false, required: false
  private _collectionScheme = new DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference(this, "collection_scheme");
  public get collectionScheme() {
    return this._collectionScheme;
  }

  // compression - computed: true, optional: false, required: false
  public get compression() {
    return this.getStringAttribute('compression');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // data_destination_configs - computed: true, optional: false, required: false
  private _dataDestinationConfigs = new DataAwsccIotfleetwiseCampaignDataDestinationConfigsList(this, "data_destination_configs", false);
  public get dataDestinationConfigs() {
    return this._dataDestinationConfigs;
  }

  // data_extra_dimensions - computed: true, optional: false, required: false
  public get dataExtraDimensions() {
    return this.getListAttribute('data_extra_dimensions');
  }

  // data_partitions - computed: true, optional: false, required: false
  private _dataPartitions = new DataAwsccIotfleetwiseCampaignDataPartitionsList(this, "data_partitions", false);
  public get dataPartitions() {
    return this._dataPartitions;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // diagnostics_mode - computed: true, optional: false, required: false
  public get diagnosticsMode() {
    return this.getStringAttribute('diagnostics_mode');
  }

  // expiry_time - computed: true, optional: false, required: false
  public get expiryTime() {
    return this.getStringAttribute('expiry_time');
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

  // last_modification_time - computed: true, optional: false, required: false
  public get lastModificationTime() {
    return this.getStringAttribute('last_modification_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // post_trigger_collection_duration - computed: true, optional: false, required: false
  public get postTriggerCollectionDuration() {
    return this.getNumberAttribute('post_trigger_collection_duration');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // signal_catalog_arn - computed: true, optional: false, required: false
  public get signalCatalogArn() {
    return this.getStringAttribute('signal_catalog_arn');
  }

  // signals_to_collect - computed: true, optional: false, required: false
  private _signalsToCollect = new DataAwsccIotfleetwiseCampaignSignalsToCollectList(this, "signals_to_collect", false);
  public get signalsToCollect() {
    return this._signalsToCollect;
  }

  // signals_to_fetch - computed: true, optional: false, required: false
  private _signalsToFetch = new DataAwsccIotfleetwiseCampaignSignalsToFetchList(this, "signals_to_fetch", false);
  public get signalsToFetch() {
    return this._signalsToFetch;
  }

  // spooling_mode - computed: true, optional: false, required: false
  public get spoolingMode() {
    return this.getStringAttribute('spooling_mode');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccIotfleetwiseCampaignTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // target_arn - computed: true, optional: false, required: false
  public get targetArn() {
    return this.getStringAttribute('target_arn');
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
