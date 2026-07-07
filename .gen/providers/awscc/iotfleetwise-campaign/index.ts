// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IotfleetwiseCampaignConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#action IotfleetwiseCampaign#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#collection_scheme IotfleetwiseCampaign#collection_scheme}
  */
  readonly collectionScheme: IotfleetwiseCampaignCollectionScheme;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#compression IotfleetwiseCampaign#compression}
  */
  readonly compression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#data_destination_configs IotfleetwiseCampaign#data_destination_configs}
  */
  readonly dataDestinationConfigs?: IotfleetwiseCampaignDataDestinationConfigs[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#data_extra_dimensions IotfleetwiseCampaign#data_extra_dimensions}
  */
  readonly dataExtraDimensions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#data_partitions IotfleetwiseCampaign#data_partitions}
  */
  readonly dataPartitions?: IotfleetwiseCampaignDataPartitions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#description IotfleetwiseCampaign#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#diagnostics_mode IotfleetwiseCampaign#diagnostics_mode}
  */
  readonly diagnosticsMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#expiry_time IotfleetwiseCampaign#expiry_time}
  */
  readonly expiryTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#name IotfleetwiseCampaign#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#post_trigger_collection_duration IotfleetwiseCampaign#post_trigger_collection_duration}
  */
  readonly postTriggerCollectionDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#priority IotfleetwiseCampaign#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#signal_catalog_arn IotfleetwiseCampaign#signal_catalog_arn}
  */
  readonly signalCatalogArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#signals_to_collect IotfleetwiseCampaign#signals_to_collect}
  */
  readonly signalsToCollect?: IotfleetwiseCampaignSignalsToCollect[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#signals_to_fetch IotfleetwiseCampaign#signals_to_fetch}
  */
  readonly signalsToFetch?: IotfleetwiseCampaignSignalsToFetch[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#spooling_mode IotfleetwiseCampaign#spooling_mode}
  */
  readonly spoolingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#start_time IotfleetwiseCampaign#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#tags IotfleetwiseCampaign#tags}
  */
  readonly tags?: IotfleetwiseCampaignTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#target_arn IotfleetwiseCampaign#target_arn}
  */
  readonly targetArn: string;
}
export interface IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#condition_language_version IotfleetwiseCampaign#condition_language_version}
  */
  readonly conditionLanguageVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#expression IotfleetwiseCampaign#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#minimum_trigger_interval_ms IotfleetwiseCampaign#minimum_trigger_interval_ms}
  */
  readonly minimumTriggerIntervalMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#trigger_mode IotfleetwiseCampaign#trigger_mode}
  */
  readonly triggerMode?: string;
}

export function iotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeToTerraform(struct?: IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition_language_version: cdktn.numberToTerraform(struct!.conditionLanguageVersion),
    expression: cdktn.stringToTerraform(struct!.expression),
    minimum_trigger_interval_ms: cdktn.numberToTerraform(struct!.minimumTriggerIntervalMs),
    trigger_mode: cdktn.stringToTerraform(struct!.triggerMode),
  }
}


export function iotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeToHclTerraform(struct?: IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition_language_version: {
      value: cdktn.numberToHclTerraform(struct!.conditionLanguageVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum_trigger_interval_ms: {
      value: cdktn.numberToHclTerraform(struct!.minimumTriggerIntervalMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trigger_mode: {
      value: cdktn.stringToHclTerraform(struct!.triggerMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionLanguageVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionLanguageVersion = this._conditionLanguageVersion;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._minimumTriggerIntervalMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumTriggerIntervalMs = this._minimumTriggerIntervalMs;
    }
    if (this._triggerMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerMode = this._triggerMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionLanguageVersion = undefined;
      this._expression = undefined;
      this._minimumTriggerIntervalMs = undefined;
      this._triggerMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionLanguageVersion = value.conditionLanguageVersion;
      this._expression = value.expression;
      this._minimumTriggerIntervalMs = value.minimumTriggerIntervalMs;
      this._triggerMode = value.triggerMode;
    }
  }

  // condition_language_version - computed: true, optional: true, required: false
  private _conditionLanguageVersion?: number; 
  public get conditionLanguageVersion() {
    return this.getNumberAttribute('condition_language_version');
  }
  public set conditionLanguageVersion(value: number) {
    this._conditionLanguageVersion = value;
  }
  public resetConditionLanguageVersion() {
    this._conditionLanguageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionLanguageVersionInput() {
    return this._conditionLanguageVersion;
  }

  // expression - computed: true, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // minimum_trigger_interval_ms - computed: true, optional: true, required: false
  private _minimumTriggerIntervalMs?: number; 
  public get minimumTriggerIntervalMs() {
    return this.getNumberAttribute('minimum_trigger_interval_ms');
  }
  public set minimumTriggerIntervalMs(value: number) {
    this._minimumTriggerIntervalMs = value;
  }
  public resetMinimumTriggerIntervalMs() {
    this._minimumTriggerIntervalMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumTriggerIntervalMsInput() {
    return this._minimumTriggerIntervalMs;
  }

  // trigger_mode - computed: true, optional: true, required: false
  private _triggerMode?: string; 
  public get triggerMode() {
    return this.getStringAttribute('trigger_mode');
  }
  public set triggerMode(value: string) {
    this._triggerMode = value;
  }
  public resetTriggerMode() {
    this._triggerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerModeInput() {
    return this._triggerMode;
  }
}
export interface IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#period_ms IotfleetwiseCampaign#period_ms}
  */
  readonly periodMs?: number;
}

export function iotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeToTerraform(struct?: IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    period_ms: cdktn.numberToTerraform(struct!.periodMs),
  }
}


export function iotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeToHclTerraform(struct?: IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    period_ms: {
      value: cdktn.numberToHclTerraform(struct!.periodMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._periodMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodMs = this._periodMs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._periodMs = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._periodMs = value.periodMs;
    }
  }

  // period_ms - computed: true, optional: true, required: false
  private _periodMs?: number; 
  public get periodMs() {
    return this.getNumberAttribute('period_ms');
  }
  public set periodMs(value: number) {
    this._periodMs = value;
  }
  public resetPeriodMs() {
    this._periodMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodMsInput() {
    return this._periodMs;
  }
}
export interface IotfleetwiseCampaignCollectionScheme {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#condition_based_collection_scheme IotfleetwiseCampaign#condition_based_collection_scheme}
  */
  readonly conditionBasedCollectionScheme?: IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#time_based_collection_scheme IotfleetwiseCampaign#time_based_collection_scheme}
  */
  readonly timeBasedCollectionScheme?: IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme;
}

export function iotfleetwiseCampaignCollectionSchemeToTerraform(struct?: IotfleetwiseCampaignCollectionScheme | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition_based_collection_scheme: iotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeToTerraform(struct!.conditionBasedCollectionScheme),
    time_based_collection_scheme: iotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeToTerraform(struct!.timeBasedCollectionScheme),
  }
}


export function iotfleetwiseCampaignCollectionSchemeToHclTerraform(struct?: IotfleetwiseCampaignCollectionScheme | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition_based_collection_scheme: {
      value: iotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeToHclTerraform(struct!.conditionBasedCollectionScheme),
      isBlock: true,
      type: "struct",
      storageClassType: "IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme",
    },
    time_based_collection_scheme: {
      value: iotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeToHclTerraform(struct!.timeBasedCollectionScheme),
      isBlock: true,
      type: "struct",
      storageClassType: "IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotfleetwiseCampaignCollectionSchemeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotfleetwiseCampaignCollectionScheme | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionBasedCollectionScheme?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionBasedCollectionScheme = this._conditionBasedCollectionScheme?.internalValue;
    }
    if (this._timeBasedCollectionScheme?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeBasedCollectionScheme = this._timeBasedCollectionScheme?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotfleetwiseCampaignCollectionScheme | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionBasedCollectionScheme.internalValue = undefined;
      this._timeBasedCollectionScheme.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionBasedCollectionScheme.internalValue = value.conditionBasedCollectionScheme;
      this._timeBasedCollectionScheme.internalValue = value.timeBasedCollectionScheme;
    }
  }

  // condition_based_collection_scheme - computed: true, optional: true, required: false
  private _conditionBasedCollectionScheme = new IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference(this, "condition_based_collection_scheme");
  public get conditionBasedCollectionScheme() {
    return this._conditionBasedCollectionScheme;
  }
  public putConditionBasedCollectionScheme(value: IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme) {
    this._conditionBasedCollectionScheme.internalValue = value;
  }
  public resetConditionBasedCollectionScheme() {
    this._conditionBasedCollectionScheme.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionBasedCollectionSchemeInput() {
    return this._conditionBasedCollectionScheme.internalValue;
  }

  // time_based_collection_scheme - computed: true, optional: true, required: false
  private _timeBasedCollectionScheme = new IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference(this, "time_based_collection_scheme");
  public get timeBasedCollectionScheme() {
    return this._timeBasedCollectionScheme;
  }
  public putTimeBasedCollectionScheme(value: IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme) {
    this._timeBasedCollectionScheme.internalValue = value;
  }
  public resetTimeBasedCollectionScheme() {
    this._timeBasedCollectionScheme.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeBasedCollectionSchemeInput() {
    return this._timeBasedCollectionScheme.internalValue;
  }
}
export interface IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#execution_role_arn IotfleetwiseCampaign#execution_role_arn}
  */
  readonly executionRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#mqtt_topic_arn IotfleetwiseCampaign#mqtt_topic_arn}
  */
  readonly mqttTopicArn?: string;
}

export function iotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigToTerraform(struct?: IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    execution_role_arn: cdktn.stringToTerraform(struct!.executionRoleArn),
    mqtt_topic_arn: cdktn.stringToTerraform(struct!.mqttTopicArn),
  }
}


export function iotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigToHclTerraform(struct?: IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    execution_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.executionRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mqtt_topic_arn: {
      value: cdktn.stringToHclTerraform(struct!.mqttTopicArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executionRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRoleArn = this._executionRoleArn;
    }
    if (this._mqttTopicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.mqttTopicArn = this._mqttTopicArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._executionRoleArn = undefined;
      this._mqttTopicArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._executionRoleArn = value.executionRoleArn;
      this._mqttTopicArn = value.mqttTopicArn;
    }
  }

  // execution_role_arn - computed: true, optional: true, required: false
  private _executionRoleArn?: string; 
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  public resetExecutionRoleArn() {
    this._executionRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn;
  }

  // mqtt_topic_arn - computed: true, optional: true, required: false
  private _mqttTopicArn?: string; 
  public get mqttTopicArn() {
    return this.getStringAttribute('mqtt_topic_arn');
  }
  public set mqttTopicArn(value: string) {
    this._mqttTopicArn = value;
  }
  public resetMqttTopicArn() {
    this._mqttTopicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mqttTopicArnInput() {
    return this._mqttTopicArn;
  }
}
export interface IotfleetwiseCampaignDataDestinationConfigsS3Config {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#bucket_arn IotfleetwiseCampaign#bucket_arn}
  */
  readonly bucketArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#data_format IotfleetwiseCampaign#data_format}
  */
  readonly dataFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#prefix IotfleetwiseCampaign#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#storage_compression_format IotfleetwiseCampaign#storage_compression_format}
  */
  readonly storageCompressionFormat?: string;
}

export function iotfleetwiseCampaignDataDestinationConfigsS3ConfigToTerraform(struct?: IotfleetwiseCampaignDataDestinationConfigsS3Config | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_arn: cdktn.stringToTerraform(struct!.bucketArn),
    data_format: cdktn.stringToTerraform(struct!.dataFormat),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    storage_compression_format: cdktn.stringToTerraform(struct!.storageCompressionFormat),
  }
}


export function iotfleetwiseCampaignDataDestinationConfigsS3ConfigToHclTerraform(struct?: IotfleetwiseCampaignDataDestinationConfigsS3Config | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_arn: {
      value: cdktn.stringToHclTerraform(struct!.bucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_format: {
      value: cdktn.stringToHclTerraform(struct!.dataFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_compression_format: {
      value: cdktn.stringToHclTerraform(struct!.storageCompressionFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotfleetwiseCampaignDataDestinationConfigsS3Config | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    if (this._dataFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFormat = this._dataFormat;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._storageCompressionFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageCompressionFormat = this._storageCompressionFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotfleetwiseCampaignDataDestinationConfigsS3Config | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketArn = undefined;
      this._dataFormat = undefined;
      this._prefix = undefined;
      this._storageCompressionFormat = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketArn = value.bucketArn;
      this._dataFormat = value.dataFormat;
      this._prefix = value.prefix;
      this._storageCompressionFormat = value.storageCompressionFormat;
    }
  }

  // bucket_arn - computed: true, optional: true, required: false
  private _bucketArn?: string; 
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }
  public set bucketArn(value: string) {
    this._bucketArn = value;
  }
  public resetBucketArn() {
    this._bucketArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketArnInput() {
    return this._bucketArn;
  }

  // data_format - computed: true, optional: true, required: false
  private _dataFormat?: string; 
  public get dataFormat() {
    return this.getStringAttribute('data_format');
  }
  public set dataFormat(value: string) {
    this._dataFormat = value;
  }
  public resetDataFormat() {
    this._dataFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFormatInput() {
    return this._dataFormat;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // storage_compression_format - computed: true, optional: true, required: false
  private _storageCompressionFormat?: string; 
  public get storageCompressionFormat() {
    return this.getStringAttribute('storage_compression_format');
  }
  public set storageCompressionFormat(value: string) {
    this._storageCompressionFormat = value;
  }
  public resetStorageCompressionFormat() {
    this._storageCompressionFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCompressionFormatInput() {
    return this._storageCompressionFormat;
  }
}
export interface IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#execution_role_arn IotfleetwiseCampaign#execution_role_arn}
  */
  readonly executionRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#timestream_table_arn IotfleetwiseCampaign#timestream_table_arn}
  */
  readonly timestreamTableArn?: string;
}

export function iotfleetwiseCampaignDataDestinationConfigsTimestreamConfigToTerraform(struct?: IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    execution_role_arn: cdktn.stringToTerraform(struct!.executionRoleArn),
    timestream_table_arn: cdktn.stringToTerraform(struct!.timestreamTableArn),
  }
}


export function iotfleetwiseCampaignDataDestinationConfigsTimestreamConfigToHclTerraform(struct?: IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    execution_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.executionRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestream_table_arn: {
      value: cdktn.stringToHclTerraform(struct!.timestreamTableArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executionRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRoleArn = this._executionRoleArn;
    }
    if (this._timestreamTableArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestreamTableArn = this._timestreamTableArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._executionRoleArn = undefined;
      this._timestreamTableArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._executionRoleArn = value.executionRoleArn;
      this._timestreamTableArn = value.timestreamTableArn;
    }
  }

  // execution_role_arn - computed: true, optional: true, required: false
  private _executionRoleArn?: string; 
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  public resetExecutionRoleArn() {
    this._executionRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn;
  }

  // timestream_table_arn - computed: true, optional: true, required: false
  private _timestreamTableArn?: string; 
  public get timestreamTableArn() {
    return this.getStringAttribute('timestream_table_arn');
  }
  public set timestreamTableArn(value: string) {
    this._timestreamTableArn = value;
  }
  public resetTimestreamTableArn() {
    this._timestreamTableArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestreamTableArnInput() {
    return this._timestreamTableArn;
  }
}
export interface IotfleetwiseCampaignDataDestinationConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#mqtt_topic_config IotfleetwiseCampaign#mqtt_topic_config}
  */
  readonly mqttTopicConfig?: IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#s3_config IotfleetwiseCampaign#s3_config}
  */
  readonly s3Config?: IotfleetwiseCampaignDataDestinationConfigsS3Config;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#timestream_config IotfleetwiseCampaign#timestream_config}
  */
  readonly timestreamConfig?: IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig;
}

export function iotfleetwiseCampaignDataDestinationConfigsToTerraform(struct?: IotfleetwiseCampaignDataDestinationConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mqtt_topic_config: iotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigToTerraform(struct!.mqttTopicConfig),
    s3_config: iotfleetwiseCampaignDataDestinationConfigsS3ConfigToTerraform(struct!.s3Config),
    timestream_config: iotfleetwiseCampaignDataDestinationConfigsTimestreamConfigToTerraform(struct!.timestreamConfig),
  }
}


export function iotfleetwiseCampaignDataDestinationConfigsToHclTerraform(struct?: IotfleetwiseCampaignDataDestinationConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mqtt_topic_config: {
      value: iotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigToHclTerraform(struct!.mqttTopicConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig",
    },
    s3_config: {
      value: iotfleetwiseCampaignDataDestinationConfigsS3ConfigToHclTerraform(struct!.s3Config),
      isBlock: true,
      type: "struct",
      storageClassType: "IotfleetwiseCampaignDataDestinationConfigsS3Config",
    },
    timestream_config: {
      value: iotfleetwiseCampaignDataDestinationConfigsTimestreamConfigToHclTerraform(struct!.timestreamConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotfleetwiseCampaignDataDestinationConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotfleetwiseCampaignDataDestinationConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mqttTopicConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mqttTopicConfig = this._mqttTopicConfig?.internalValue;
    }
    if (this._s3Config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Config = this._s3Config?.internalValue;
    }
    if (this._timestreamConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestreamConfig = this._timestreamConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotfleetwiseCampaignDataDestinationConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mqttTopicConfig.internalValue = undefined;
      this._s3Config.internalValue = undefined;
      this._timestreamConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mqttTopicConfig.internalValue = value.mqttTopicConfig;
      this._s3Config.internalValue = value.s3Config;
      this._timestreamConfig.internalValue = value.timestreamConfig;
    }
  }

  // mqtt_topic_config - computed: true, optional: true, required: false
  private _mqttTopicConfig = new IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference(this, "mqtt_topic_config");
  public get mqttTopicConfig() {
    return this._mqttTopicConfig;
  }
  public putMqttTopicConfig(value: IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig) {
    this._mqttTopicConfig.internalValue = value;
  }
  public resetMqttTopicConfig() {
    this._mqttTopicConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mqttTopicConfigInput() {
    return this._mqttTopicConfig.internalValue;
  }

  // s3_config - computed: true, optional: true, required: false
  private _s3Config = new IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference(this, "s3_config");
  public get s3Config() {
    return this._s3Config;
  }
  public putS3Config(value: IotfleetwiseCampaignDataDestinationConfigsS3Config) {
    this._s3Config.internalValue = value;
  }
  public resetS3Config() {
    this._s3Config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigInput() {
    return this._s3Config.internalValue;
  }

  // timestream_config - computed: true, optional: true, required: false
  private _timestreamConfig = new IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference(this, "timestream_config");
  public get timestreamConfig() {
    return this._timestreamConfig;
  }
  public putTimestreamConfig(value: IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig) {
    this._timestreamConfig.internalValue = value;
  }
  public resetTimestreamConfig() {
    this._timestreamConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestreamConfigInput() {
    return this._timestreamConfig.internalValue;
  }
}

export class IotfleetwiseCampaignDataDestinationConfigsList extends cdktn.ComplexList {
  public internalValue? : IotfleetwiseCampaignDataDestinationConfigs[] | cdktn.IResolvable

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
  public get(index: number): IotfleetwiseCampaignDataDestinationConfigsOutputReference {
    return new IotfleetwiseCampaignDataDestinationConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#unit IotfleetwiseCampaign#unit}
  */
  readonly unit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#value IotfleetwiseCampaign#value}
  */
  readonly value?: number;
}

export function iotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeToTerraform(struct?: IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function iotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeToHclTerraform(struct?: IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: true, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#unit IotfleetwiseCampaign#unit}
  */
  readonly unit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#value IotfleetwiseCampaign#value}
  */
  readonly value?: number;
}

export function iotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveToTerraform(struct?: IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function iotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveToHclTerraform(struct?: IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: true, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface IotfleetwiseCampaignDataPartitionsStorageOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#maximum_size IotfleetwiseCampaign#maximum_size}
  */
  readonly maximumSize?: IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#minimum_time_to_live IotfleetwiseCampaign#minimum_time_to_live}
  */
  readonly minimumTimeToLive?: IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#storage_location IotfleetwiseCampaign#storage_location}
  */
  readonly storageLocation?: string;
}

export function iotfleetwiseCampaignDataPartitionsStorageOptionsToTerraform(struct?: IotfleetwiseCampaignDataPartitionsStorageOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    maximum_size: iotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeToTerraform(struct!.maximumSize),
    minimum_time_to_live: iotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveToTerraform(struct!.minimumTimeToLive),
    storage_location: cdktn.stringToTerraform(struct!.storageLocation),
  }
}


export function iotfleetwiseCampaignDataPartitionsStorageOptionsToHclTerraform(struct?: IotfleetwiseCampaignDataPartitionsStorageOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    maximum_size: {
      value: iotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeToHclTerraform(struct!.maximumSize),
      isBlock: true,
      type: "struct",
      storageClassType: "IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize",
    },
    minimum_time_to_live: {
      value: iotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveToHclTerraform(struct!.minimumTimeToLive),
      isBlock: true,
      type: "struct",
      storageClassType: "IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive",
    },
    storage_location: {
      value: cdktn.stringToHclTerraform(struct!.storageLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotfleetwiseCampaignDataPartitionsStorageOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumSize = this._maximumSize?.internalValue;
    }
    if (this._minimumTimeToLive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumTimeToLive = this._minimumTimeToLive?.internalValue;
    }
    if (this._storageLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageLocation = this._storageLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotfleetwiseCampaignDataPartitionsStorageOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximumSize.internalValue = undefined;
      this._minimumTimeToLive.internalValue = undefined;
      this._storageLocation = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximumSize.internalValue = value.maximumSize;
      this._minimumTimeToLive.internalValue = value.minimumTimeToLive;
      this._storageLocation = value.storageLocation;
    }
  }

  // maximum_size - computed: true, optional: true, required: false
  private _maximumSize = new IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference(this, "maximum_size");
  public get maximumSize() {
    return this._maximumSize;
  }
  public putMaximumSize(value: IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize) {
    this._maximumSize.internalValue = value;
  }
  public resetMaximumSize() {
    this._maximumSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumSizeInput() {
    return this._maximumSize.internalValue;
  }

  // minimum_time_to_live - computed: true, optional: true, required: false
  private _minimumTimeToLive = new IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference(this, "minimum_time_to_live");
  public get minimumTimeToLive() {
    return this._minimumTimeToLive;
  }
  public putMinimumTimeToLive(value: IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive) {
    this._minimumTimeToLive.internalValue = value;
  }
  public resetMinimumTimeToLive() {
    this._minimumTimeToLive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumTimeToLiveInput() {
    return this._minimumTimeToLive.internalValue;
  }

  // storage_location - computed: true, optional: true, required: false
  private _storageLocation?: string; 
  public get storageLocation() {
    return this.getStringAttribute('storage_location');
  }
  public set storageLocation(value: string) {
    this._storageLocation = value;
  }
  public resetStorageLocation() {
    this._storageLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLocationInput() {
    return this._storageLocation;
  }
}
export interface IotfleetwiseCampaignDataPartitionsUploadOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#condition_language_version IotfleetwiseCampaign#condition_language_version}
  */
  readonly conditionLanguageVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#expression IotfleetwiseCampaign#expression}
  */
  readonly expression?: string;
}

export function iotfleetwiseCampaignDataPartitionsUploadOptionsToTerraform(struct?: IotfleetwiseCampaignDataPartitionsUploadOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition_language_version: cdktn.numberToTerraform(struct!.conditionLanguageVersion),
    expression: cdktn.stringToTerraform(struct!.expression),
  }
}


export function iotfleetwiseCampaignDataPartitionsUploadOptionsToHclTerraform(struct?: IotfleetwiseCampaignDataPartitionsUploadOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition_language_version: {
      value: cdktn.numberToHclTerraform(struct!.conditionLanguageVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotfleetwiseCampaignDataPartitionsUploadOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionLanguageVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionLanguageVersion = this._conditionLanguageVersion;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotfleetwiseCampaignDataPartitionsUploadOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionLanguageVersion = undefined;
      this._expression = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionLanguageVersion = value.conditionLanguageVersion;
      this._expression = value.expression;
    }
  }

  // condition_language_version - computed: true, optional: true, required: false
  private _conditionLanguageVersion?: number; 
  public get conditionLanguageVersion() {
    return this.getNumberAttribute('condition_language_version');
  }
  public set conditionLanguageVersion(value: number) {
    this._conditionLanguageVersion = value;
  }
  public resetConditionLanguageVersion() {
    this._conditionLanguageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionLanguageVersionInput() {
    return this._conditionLanguageVersion;
  }

  // expression - computed: true, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }
}
export interface IotfleetwiseCampaignDataPartitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#id IotfleetwiseCampaign#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#storage_options IotfleetwiseCampaign#storage_options}
  */
  readonly storageOptions?: IotfleetwiseCampaignDataPartitionsStorageOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#upload_options IotfleetwiseCampaign#upload_options}
  */
  readonly uploadOptions?: IotfleetwiseCampaignDataPartitionsUploadOptions;
}

export function iotfleetwiseCampaignDataPartitionsToTerraform(struct?: IotfleetwiseCampaignDataPartitions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    storage_options: iotfleetwiseCampaignDataPartitionsStorageOptionsToTerraform(struct!.storageOptions),
    upload_options: iotfleetwiseCampaignDataPartitionsUploadOptionsToTerraform(struct!.uploadOptions),
  }
}


export function iotfleetwiseCampaignDataPartitionsToHclTerraform(struct?: IotfleetwiseCampaignDataPartitions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_options: {
      value: iotfleetwiseCampaignDataPartitionsStorageOptionsToHclTerraform(struct!.storageOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "IotfleetwiseCampaignDataPartitionsStorageOptions",
    },
    upload_options: {
      value: iotfleetwiseCampaignDataPartitionsUploadOptionsToHclTerraform(struct!.uploadOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "IotfleetwiseCampaignDataPartitionsUploadOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotfleetwiseCampaignDataPartitionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotfleetwiseCampaignDataPartitions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._storageOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageOptions = this._storageOptions?.internalValue;
    }
    if (this._uploadOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadOptions = this._uploadOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotfleetwiseCampaignDataPartitions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._storageOptions.internalValue = undefined;
      this._uploadOptions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._storageOptions.internalValue = value.storageOptions;
      this._uploadOptions.internalValue = value.uploadOptions;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // storage_options - computed: true, optional: true, required: false
  private _storageOptions = new IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference(this, "storage_options");
  public get storageOptions() {
    return this._storageOptions;
  }
  public putStorageOptions(value: IotfleetwiseCampaignDataPartitionsStorageOptions) {
    this._storageOptions.internalValue = value;
  }
  public resetStorageOptions() {
    this._storageOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageOptionsInput() {
    return this._storageOptions.internalValue;
  }

  // upload_options - computed: true, optional: true, required: false
  private _uploadOptions = new IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference(this, "upload_options");
  public get uploadOptions() {
    return this._uploadOptions;
  }
  public putUploadOptions(value: IotfleetwiseCampaignDataPartitionsUploadOptions) {
    this._uploadOptions.internalValue = value;
  }
  public resetUploadOptions() {
    this._uploadOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadOptionsInput() {
    return this._uploadOptions.internalValue;
  }
}

export class IotfleetwiseCampaignDataPartitionsList extends cdktn.ComplexList {
  public internalValue? : IotfleetwiseCampaignDataPartitions[] | cdktn.IResolvable

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
  public get(index: number): IotfleetwiseCampaignDataPartitionsOutputReference {
    return new IotfleetwiseCampaignDataPartitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotfleetwiseCampaignSignalsToCollect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#data_partition_id IotfleetwiseCampaign#data_partition_id}
  */
  readonly dataPartitionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#max_sample_count IotfleetwiseCampaign#max_sample_count}
  */
  readonly maxSampleCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#minimum_sampling_interval_ms IotfleetwiseCampaign#minimum_sampling_interval_ms}
  */
  readonly minimumSamplingIntervalMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#name IotfleetwiseCampaign#name}
  */
  readonly name?: string;
}

export function iotfleetwiseCampaignSignalsToCollectToTerraform(struct?: IotfleetwiseCampaignSignalsToCollect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_partition_id: cdktn.stringToTerraform(struct!.dataPartitionId),
    max_sample_count: cdktn.numberToTerraform(struct!.maxSampleCount),
    minimum_sampling_interval_ms: cdktn.numberToTerraform(struct!.minimumSamplingIntervalMs),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function iotfleetwiseCampaignSignalsToCollectToHclTerraform(struct?: IotfleetwiseCampaignSignalsToCollect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_partition_id: {
      value: cdktn.stringToHclTerraform(struct!.dataPartitionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_sample_count: {
      value: cdktn.numberToHclTerraform(struct!.maxSampleCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_sampling_interval_ms: {
      value: cdktn.numberToHclTerraform(struct!.minimumSamplingIntervalMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class IotfleetwiseCampaignSignalsToCollectOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotfleetwiseCampaignSignalsToCollect | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataPartitionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataPartitionId = this._dataPartitionId;
    }
    if (this._maxSampleCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSampleCount = this._maxSampleCount;
    }
    if (this._minimumSamplingIntervalMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumSamplingIntervalMs = this._minimumSamplingIntervalMs;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotfleetwiseCampaignSignalsToCollect | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataPartitionId = undefined;
      this._maxSampleCount = undefined;
      this._minimumSamplingIntervalMs = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataPartitionId = value.dataPartitionId;
      this._maxSampleCount = value.maxSampleCount;
      this._minimumSamplingIntervalMs = value.minimumSamplingIntervalMs;
      this._name = value.name;
    }
  }

  // data_partition_id - computed: true, optional: true, required: false
  private _dataPartitionId?: string; 
  public get dataPartitionId() {
    return this.getStringAttribute('data_partition_id');
  }
  public set dataPartitionId(value: string) {
    this._dataPartitionId = value;
  }
  public resetDataPartitionId() {
    this._dataPartitionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPartitionIdInput() {
    return this._dataPartitionId;
  }

  // max_sample_count - computed: true, optional: true, required: false
  private _maxSampleCount?: number; 
  public get maxSampleCount() {
    return this.getNumberAttribute('max_sample_count');
  }
  public set maxSampleCount(value: number) {
    this._maxSampleCount = value;
  }
  public resetMaxSampleCount() {
    this._maxSampleCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSampleCountInput() {
    return this._maxSampleCount;
  }

  // minimum_sampling_interval_ms - computed: true, optional: true, required: false
  private _minimumSamplingIntervalMs?: number; 
  public get minimumSamplingIntervalMs() {
    return this.getNumberAttribute('minimum_sampling_interval_ms');
  }
  public set minimumSamplingIntervalMs(value: number) {
    this._minimumSamplingIntervalMs = value;
  }
  public resetMinimumSamplingIntervalMs() {
    this._minimumSamplingIntervalMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumSamplingIntervalMsInput() {
    return this._minimumSamplingIntervalMs;
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

export class IotfleetwiseCampaignSignalsToCollectList extends cdktn.ComplexList {
  public internalValue? : IotfleetwiseCampaignSignalsToCollect[] | cdktn.IResolvable

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
  public get(index: number): IotfleetwiseCampaignSignalsToCollectOutputReference {
    return new IotfleetwiseCampaignSignalsToCollectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#condition_expression IotfleetwiseCampaign#condition_expression}
  */
  readonly conditionExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#trigger_mode IotfleetwiseCampaign#trigger_mode}
  */
  readonly triggerMode?: string;
}

export function iotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedToTerraform(struct?: IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition_expression: cdktn.stringToTerraform(struct!.conditionExpression),
    trigger_mode: cdktn.stringToTerraform(struct!.triggerMode),
  }
}


export function iotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedToHclTerraform(struct?: IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition_expression: {
      value: cdktn.stringToHclTerraform(struct!.conditionExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_mode: {
      value: cdktn.stringToHclTerraform(struct!.triggerMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionExpression = this._conditionExpression;
    }
    if (this._triggerMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerMode = this._triggerMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionExpression = undefined;
      this._triggerMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionExpression = value.conditionExpression;
      this._triggerMode = value.triggerMode;
    }
  }

  // condition_expression - computed: true, optional: true, required: false
  private _conditionExpression?: string; 
  public get conditionExpression() {
    return this.getStringAttribute('condition_expression');
  }
  public set conditionExpression(value: string) {
    this._conditionExpression = value;
  }
  public resetConditionExpression() {
    this._conditionExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionExpressionInput() {
    return this._conditionExpression;
  }

  // trigger_mode - computed: true, optional: true, required: false
  private _triggerMode?: string; 
  public get triggerMode() {
    return this.getStringAttribute('trigger_mode');
  }
  public set triggerMode(value: string) {
    this._triggerMode = value;
  }
  public resetTriggerMode() {
    this._triggerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerModeInput() {
    return this._triggerMode;
  }
}
export interface IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#execution_frequency_ms IotfleetwiseCampaign#execution_frequency_ms}
  */
  readonly executionFrequencyMs?: number;
}

export function iotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedToTerraform(struct?: IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    execution_frequency_ms: cdktn.numberToTerraform(struct!.executionFrequencyMs),
  }
}


export function iotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedToHclTerraform(struct?: IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    execution_frequency_ms: {
      value: cdktn.numberToHclTerraform(struct!.executionFrequencyMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executionFrequencyMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionFrequencyMs = this._executionFrequencyMs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._executionFrequencyMs = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._executionFrequencyMs = value.executionFrequencyMs;
    }
  }

  // execution_frequency_ms - computed: true, optional: true, required: false
  private _executionFrequencyMs?: number; 
  public get executionFrequencyMs() {
    return this.getNumberAttribute('execution_frequency_ms');
  }
  public set executionFrequencyMs(value: number) {
    this._executionFrequencyMs = value;
  }
  public resetExecutionFrequencyMs() {
    this._executionFrequencyMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionFrequencyMsInput() {
    return this._executionFrequencyMs;
  }
}
export interface IotfleetwiseCampaignSignalsToFetchSignalFetchConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#condition_based IotfleetwiseCampaign#condition_based}
  */
  readonly conditionBased?: IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#time_based IotfleetwiseCampaign#time_based}
  */
  readonly timeBased?: IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased;
}

export function iotfleetwiseCampaignSignalsToFetchSignalFetchConfigToTerraform(struct?: IotfleetwiseCampaignSignalsToFetchSignalFetchConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition_based: iotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedToTerraform(struct!.conditionBased),
    time_based: iotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedToTerraform(struct!.timeBased),
  }
}


export function iotfleetwiseCampaignSignalsToFetchSignalFetchConfigToHclTerraform(struct?: IotfleetwiseCampaignSignalsToFetchSignalFetchConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition_based: {
      value: iotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedToHclTerraform(struct!.conditionBased),
      isBlock: true,
      type: "struct",
      storageClassType: "IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased",
    },
    time_based: {
      value: iotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedToHclTerraform(struct!.timeBased),
      isBlock: true,
      type: "struct",
      storageClassType: "IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotfleetwiseCampaignSignalsToFetchSignalFetchConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionBased?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionBased = this._conditionBased?.internalValue;
    }
    if (this._timeBased?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeBased = this._timeBased?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotfleetwiseCampaignSignalsToFetchSignalFetchConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionBased.internalValue = undefined;
      this._timeBased.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionBased.internalValue = value.conditionBased;
      this._timeBased.internalValue = value.timeBased;
    }
  }

  // condition_based - computed: true, optional: true, required: false
  private _conditionBased = new IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference(this, "condition_based");
  public get conditionBased() {
    return this._conditionBased;
  }
  public putConditionBased(value: IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased) {
    this._conditionBased.internalValue = value;
  }
  public resetConditionBased() {
    this._conditionBased.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionBasedInput() {
    return this._conditionBased.internalValue;
  }

  // time_based - computed: true, optional: true, required: false
  private _timeBased = new IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference(this, "time_based");
  public get timeBased() {
    return this._timeBased;
  }
  public putTimeBased(value: IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased) {
    this._timeBased.internalValue = value;
  }
  public resetTimeBased() {
    this._timeBased.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeBasedInput() {
    return this._timeBased.internalValue;
  }
}
export interface IotfleetwiseCampaignSignalsToFetch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#actions IotfleetwiseCampaign#actions}
  */
  readonly actions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#condition_language_version IotfleetwiseCampaign#condition_language_version}
  */
  readonly conditionLanguageVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#fully_qualified_name IotfleetwiseCampaign#fully_qualified_name}
  */
  readonly fullyQualifiedName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#signal_fetch_config IotfleetwiseCampaign#signal_fetch_config}
  */
  readonly signalFetchConfig?: IotfleetwiseCampaignSignalsToFetchSignalFetchConfig;
}

export function iotfleetwiseCampaignSignalsToFetchToTerraform(struct?: IotfleetwiseCampaignSignalsToFetch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actions),
    condition_language_version: cdktn.numberToTerraform(struct!.conditionLanguageVersion),
    fully_qualified_name: cdktn.stringToTerraform(struct!.fullyQualifiedName),
    signal_fetch_config: iotfleetwiseCampaignSignalsToFetchSignalFetchConfigToTerraform(struct!.signalFetchConfig),
  }
}


export function iotfleetwiseCampaignSignalsToFetchToHclTerraform(struct?: IotfleetwiseCampaignSignalsToFetch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    actions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    condition_language_version: {
      value: cdktn.numberToHclTerraform(struct!.conditionLanguageVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fully_qualified_name: {
      value: cdktn.stringToHclTerraform(struct!.fullyQualifiedName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signal_fetch_config: {
      value: iotfleetwiseCampaignSignalsToFetchSignalFetchConfigToHclTerraform(struct!.signalFetchConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "IotfleetwiseCampaignSignalsToFetchSignalFetchConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotfleetwiseCampaignSignalsToFetchOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotfleetwiseCampaignSignalsToFetch | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._conditionLanguageVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionLanguageVersion = this._conditionLanguageVersion;
    }
    if (this._fullyQualifiedName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullyQualifiedName = this._fullyQualifiedName;
    }
    if (this._signalFetchConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.signalFetchConfig = this._signalFetchConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotfleetwiseCampaignSignalsToFetch | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._conditionLanguageVersion = undefined;
      this._fullyQualifiedName = undefined;
      this._signalFetchConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._conditionLanguageVersion = value.conditionLanguageVersion;
      this._fullyQualifiedName = value.fullyQualifiedName;
      this._signalFetchConfig.internalValue = value.signalFetchConfig;
    }
  }

  // actions - computed: true, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // condition_language_version - computed: true, optional: true, required: false
  private _conditionLanguageVersion?: number; 
  public get conditionLanguageVersion() {
    return this.getNumberAttribute('condition_language_version');
  }
  public set conditionLanguageVersion(value: number) {
    this._conditionLanguageVersion = value;
  }
  public resetConditionLanguageVersion() {
    this._conditionLanguageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionLanguageVersionInput() {
    return this._conditionLanguageVersion;
  }

  // fully_qualified_name - computed: true, optional: true, required: false
  private _fullyQualifiedName?: string; 
  public get fullyQualifiedName() {
    return this.getStringAttribute('fully_qualified_name');
  }
  public set fullyQualifiedName(value: string) {
    this._fullyQualifiedName = value;
  }
  public resetFullyQualifiedName() {
    this._fullyQualifiedName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullyQualifiedNameInput() {
    return this._fullyQualifiedName;
  }

  // signal_fetch_config - computed: true, optional: true, required: false
  private _signalFetchConfig = new IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference(this, "signal_fetch_config");
  public get signalFetchConfig() {
    return this._signalFetchConfig;
  }
  public putSignalFetchConfig(value: IotfleetwiseCampaignSignalsToFetchSignalFetchConfig) {
    this._signalFetchConfig.internalValue = value;
  }
  public resetSignalFetchConfig() {
    this._signalFetchConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signalFetchConfigInput() {
    return this._signalFetchConfig.internalValue;
  }
}

export class IotfleetwiseCampaignSignalsToFetchList extends cdktn.ComplexList {
  public internalValue? : IotfleetwiseCampaignSignalsToFetch[] | cdktn.IResolvable

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
  public get(index: number): IotfleetwiseCampaignSignalsToFetchOutputReference {
    return new IotfleetwiseCampaignSignalsToFetchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotfleetwiseCampaignTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#key IotfleetwiseCampaign#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#value IotfleetwiseCampaign#value}
  */
  readonly value?: string;
}

export function iotfleetwiseCampaignTagsToTerraform(struct?: IotfleetwiseCampaignTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function iotfleetwiseCampaignTagsToHclTerraform(struct?: IotfleetwiseCampaignTags | cdktn.IResolvable): any {
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

export class IotfleetwiseCampaignTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotfleetwiseCampaignTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IotfleetwiseCampaignTags | cdktn.IResolvable | undefined) {
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

export class IotfleetwiseCampaignTagsList extends cdktn.ComplexList {
  public internalValue? : IotfleetwiseCampaignTags[] | cdktn.IResolvable

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
  public get(index: number): IotfleetwiseCampaignTagsOutputReference {
    return new IotfleetwiseCampaignTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign awscc_iotfleetwise_campaign}
*/
export class IotfleetwiseCampaign extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iotfleetwise_campaign";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IotfleetwiseCampaign resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IotfleetwiseCampaign to import
  * @param importFromId The id of the existing IotfleetwiseCampaign that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IotfleetwiseCampaign to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotfleetwise_campaign", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotfleetwise_campaign awscc_iotfleetwise_campaign} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotfleetwiseCampaignConfig
  */
  public constructor(scope: Construct, id: string, config: IotfleetwiseCampaignConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotfleetwise_campaign',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.91.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._collectionScheme.internalValue = config.collectionScheme;
    this._compression = config.compression;
    this._dataDestinationConfigs.internalValue = config.dataDestinationConfigs;
    this._dataExtraDimensions = config.dataExtraDimensions;
    this._dataPartitions.internalValue = config.dataPartitions;
    this._description = config.description;
    this._diagnosticsMode = config.diagnosticsMode;
    this._expiryTime = config.expiryTime;
    this._name = config.name;
    this._postTriggerCollectionDuration = config.postTriggerCollectionDuration;
    this._priority = config.priority;
    this._signalCatalogArn = config.signalCatalogArn;
    this._signalsToCollect.internalValue = config.signalsToCollect;
    this._signalsToFetch.internalValue = config.signalsToFetch;
    this._spoolingMode = config.spoolingMode;
    this._startTime = config.startTime;
    this._tags.internalValue = config.tags;
    this._targetArn = config.targetArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // collection_scheme - computed: false, optional: false, required: true
  private _collectionScheme = new IotfleetwiseCampaignCollectionSchemeOutputReference(this, "collection_scheme");
  public get collectionScheme() {
    return this._collectionScheme;
  }
  public putCollectionScheme(value: IotfleetwiseCampaignCollectionScheme) {
    this._collectionScheme.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionSchemeInput() {
    return this._collectionScheme.internalValue;
  }

  // compression - computed: true, optional: true, required: false
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // data_destination_configs - computed: true, optional: true, required: false
  private _dataDestinationConfigs = new IotfleetwiseCampaignDataDestinationConfigsList(this, "data_destination_configs", false);
  public get dataDestinationConfigs() {
    return this._dataDestinationConfigs;
  }
  public putDataDestinationConfigs(value: IotfleetwiseCampaignDataDestinationConfigs[] | cdktn.IResolvable) {
    this._dataDestinationConfigs.internalValue = value;
  }
  public resetDataDestinationConfigs() {
    this._dataDestinationConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDestinationConfigsInput() {
    return this._dataDestinationConfigs.internalValue;
  }

  // data_extra_dimensions - computed: true, optional: true, required: false
  private _dataExtraDimensions?: string[]; 
  public get dataExtraDimensions() {
    return this.getListAttribute('data_extra_dimensions');
  }
  public set dataExtraDimensions(value: string[]) {
    this._dataExtraDimensions = value;
  }
  public resetDataExtraDimensions() {
    this._dataExtraDimensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataExtraDimensionsInput() {
    return this._dataExtraDimensions;
  }

  // data_partitions - computed: true, optional: true, required: false
  private _dataPartitions = new IotfleetwiseCampaignDataPartitionsList(this, "data_partitions", false);
  public get dataPartitions() {
    return this._dataPartitions;
  }
  public putDataPartitions(value: IotfleetwiseCampaignDataPartitions[] | cdktn.IResolvable) {
    this._dataPartitions.internalValue = value;
  }
  public resetDataPartitions() {
    this._dataPartitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPartitionsInput() {
    return this._dataPartitions.internalValue;
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

  // diagnostics_mode - computed: true, optional: true, required: false
  private _diagnosticsMode?: string; 
  public get diagnosticsMode() {
    return this.getStringAttribute('diagnostics_mode');
  }
  public set diagnosticsMode(value: string) {
    this._diagnosticsMode = value;
  }
  public resetDiagnosticsMode() {
    this._diagnosticsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diagnosticsModeInput() {
    return this._diagnosticsMode;
  }

  // expiry_time - computed: true, optional: true, required: false
  private _expiryTime?: string; 
  public get expiryTime() {
    return this.getStringAttribute('expiry_time');
  }
  public set expiryTime(value: string) {
    this._expiryTime = value;
  }
  public resetExpiryTime() {
    this._expiryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryTimeInput() {
    return this._expiryTime;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modification_time - computed: true, optional: false, required: false
  public get lastModificationTime() {
    return this.getStringAttribute('last_modification_time');
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

  // post_trigger_collection_duration - computed: true, optional: true, required: false
  private _postTriggerCollectionDuration?: number; 
  public get postTriggerCollectionDuration() {
    return this.getNumberAttribute('post_trigger_collection_duration');
  }
  public set postTriggerCollectionDuration(value: number) {
    this._postTriggerCollectionDuration = value;
  }
  public resetPostTriggerCollectionDuration() {
    this._postTriggerCollectionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postTriggerCollectionDurationInput() {
    return this._postTriggerCollectionDuration;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // signal_catalog_arn - computed: false, optional: false, required: true
  private _signalCatalogArn?: string; 
  public get signalCatalogArn() {
    return this.getStringAttribute('signal_catalog_arn');
  }
  public set signalCatalogArn(value: string) {
    this._signalCatalogArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signalCatalogArnInput() {
    return this._signalCatalogArn;
  }

  // signals_to_collect - computed: true, optional: true, required: false
  private _signalsToCollect = new IotfleetwiseCampaignSignalsToCollectList(this, "signals_to_collect", false);
  public get signalsToCollect() {
    return this._signalsToCollect;
  }
  public putSignalsToCollect(value: IotfleetwiseCampaignSignalsToCollect[] | cdktn.IResolvable) {
    this._signalsToCollect.internalValue = value;
  }
  public resetSignalsToCollect() {
    this._signalsToCollect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signalsToCollectInput() {
    return this._signalsToCollect.internalValue;
  }

  // signals_to_fetch - computed: true, optional: true, required: false
  private _signalsToFetch = new IotfleetwiseCampaignSignalsToFetchList(this, "signals_to_fetch", false);
  public get signalsToFetch() {
    return this._signalsToFetch;
  }
  public putSignalsToFetch(value: IotfleetwiseCampaignSignalsToFetch[] | cdktn.IResolvable) {
    this._signalsToFetch.internalValue = value;
  }
  public resetSignalsToFetch() {
    this._signalsToFetch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signalsToFetchInput() {
    return this._signalsToFetch.internalValue;
  }

  // spooling_mode - computed: true, optional: true, required: false
  private _spoolingMode?: string; 
  public get spoolingMode() {
    return this.getStringAttribute('spooling_mode');
  }
  public set spoolingMode(value: string) {
    this._spoolingMode = value;
  }
  public resetSpoolingMode() {
    this._spoolingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spoolingModeInput() {
    return this._spoolingMode;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new IotfleetwiseCampaignTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: IotfleetwiseCampaignTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // target_arn - computed: false, optional: false, required: true
  private _targetArn?: string; 
  public get targetArn() {
    return this.getStringAttribute('target_arn');
  }
  public set targetArn(value: string) {
    this._targetArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetArnInput() {
    return this._targetArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktn.stringToTerraform(this._action),
      collection_scheme: iotfleetwiseCampaignCollectionSchemeToTerraform(this._collectionScheme.internalValue),
      compression: cdktn.stringToTerraform(this._compression),
      data_destination_configs: cdktn.listMapper(iotfleetwiseCampaignDataDestinationConfigsToTerraform, false)(this._dataDestinationConfigs.internalValue),
      data_extra_dimensions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._dataExtraDimensions),
      data_partitions: cdktn.listMapper(iotfleetwiseCampaignDataPartitionsToTerraform, false)(this._dataPartitions.internalValue),
      description: cdktn.stringToTerraform(this._description),
      diagnostics_mode: cdktn.stringToTerraform(this._diagnosticsMode),
      expiry_time: cdktn.stringToTerraform(this._expiryTime),
      name: cdktn.stringToTerraform(this._name),
      post_trigger_collection_duration: cdktn.numberToTerraform(this._postTriggerCollectionDuration),
      priority: cdktn.numberToTerraform(this._priority),
      signal_catalog_arn: cdktn.stringToTerraform(this._signalCatalogArn),
      signals_to_collect: cdktn.listMapper(iotfleetwiseCampaignSignalsToCollectToTerraform, false)(this._signalsToCollect.internalValue),
      signals_to_fetch: cdktn.listMapper(iotfleetwiseCampaignSignalsToFetchToTerraform, false)(this._signalsToFetch.internalValue),
      spooling_mode: cdktn.stringToTerraform(this._spoolingMode),
      start_time: cdktn.stringToTerraform(this._startTime),
      tags: cdktn.listMapper(iotfleetwiseCampaignTagsToTerraform, false)(this._tags.internalValue),
      target_arn: cdktn.stringToTerraform(this._targetArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktn.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collection_scheme: {
        value: iotfleetwiseCampaignCollectionSchemeToHclTerraform(this._collectionScheme.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IotfleetwiseCampaignCollectionScheme",
      },
      compression: {
        value: cdktn.stringToHclTerraform(this._compression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_destination_configs: {
        value: cdktn.listMapperHcl(iotfleetwiseCampaignDataDestinationConfigsToHclTerraform, false)(this._dataDestinationConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IotfleetwiseCampaignDataDestinationConfigsList",
      },
      data_extra_dimensions: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._dataExtraDimensions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      data_partitions: {
        value: cdktn.listMapperHcl(iotfleetwiseCampaignDataPartitionsToHclTerraform, false)(this._dataPartitions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IotfleetwiseCampaignDataPartitionsList",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      diagnostics_mode: {
        value: cdktn.stringToHclTerraform(this._diagnosticsMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiry_time: {
        value: cdktn.stringToHclTerraform(this._expiryTime),
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
      post_trigger_collection_duration: {
        value: cdktn.numberToHclTerraform(this._postTriggerCollectionDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      priority: {
        value: cdktn.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      signal_catalog_arn: {
        value: cdktn.stringToHclTerraform(this._signalCatalogArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signals_to_collect: {
        value: cdktn.listMapperHcl(iotfleetwiseCampaignSignalsToCollectToHclTerraform, false)(this._signalsToCollect.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IotfleetwiseCampaignSignalsToCollectList",
      },
      signals_to_fetch: {
        value: cdktn.listMapperHcl(iotfleetwiseCampaignSignalsToFetchToHclTerraform, false)(this._signalsToFetch.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IotfleetwiseCampaignSignalsToFetchList",
      },
      spooling_mode: {
        value: cdktn.stringToHclTerraform(this._spoolingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_time: {
        value: cdktn.stringToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(iotfleetwiseCampaignTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IotfleetwiseCampaignTagsList",
      },
      target_arn: {
        value: cdktn.stringToHclTerraform(this._targetArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
