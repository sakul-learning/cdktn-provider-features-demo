// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/internetmonitor_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface InternetmonitorMonitorConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/internetmonitor_monitor#health_events_config InternetmonitorMonitor#health_events_config}
  */
  readonly healthEventsConfig?: InternetmonitorMonitorHealthEventsConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/internetmonitor_monitor#include_linked_accounts InternetmonitorMonitor#include_linked_accounts}
  */
  readonly includeLinkedAccounts?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/internetmonitor_monitor#internet_measurements_log_delivery InternetmonitorMonitor#internet_measurements_log_delivery}
  */
  readonly internetMeasurementsLogDelivery?: InternetmonitorMonitorInternetMeasurementsLogDelivery;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/internetmonitor_monitor#linked_account_id InternetmonitorMonitor#linked_account_id}
  */
  readonly linkedAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/internetmonitor_monitor#max_city_networks_to_monitor InternetmonitorMonitor#max_city_networks_to_monitor}
  */
  readonly maxCityNetworksToMonitor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/internetmonitor_monitor#monitor_name InternetmonitorMonitor#monitor_name}
  */
  readonly monitorName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/internetmonitor_monitor#resources InternetmonitorMonitor#resources}
  */
  readonly resources?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/internetmonitor_monitor#resources_to_add InternetmonitorMonitor#resources_to_add}
  */
  readonly resourcesToAdd?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/internetmonitor_monitor#resources_to_remove InternetmonitorMonitor#resources_to_remove}
  */
  readonly resourcesToRemove?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/internetmonitor_monitor#status InternetmonitorMonitor#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/internetmonitor_monitor#tags InternetmonitorMonitor#tags}
  */
  readonly tags?: InternetmonitorMonitorTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/internetmonitor_monitor#traffic_percentage_to_monitor InternetmonitorMonitor#traffic_percentage_to_monitor}
  */
  readonly trafficPercentageToMonitor?: number;
}
export interface InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/internetmonitor_monitor#health_score_threshold InternetmonitorMonitor#health_score_threshold}
  */
  readonly healthScoreThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/internetmonitor_monitor#min_traffic_impact InternetmonitorMonitor#min_traffic_impact}
  */
  readonly minTrafficImpact?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/internetmonitor_monitor#status InternetmonitorMonitor#status}
  */
  readonly status?: string;
}

export function internetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigToTerraform(struct?: InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    health_score_threshold: cdktn.numberToTerraform(struct!.healthScoreThreshold),
    min_traffic_impact: cdktn.numberToTerraform(struct!.minTrafficImpact),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function internetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigToHclTerraform(struct?: InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    health_score_threshold: {
      value: cdktn.numberToHclTerraform(struct!.healthScoreThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_traffic_impact: {
      value: cdktn.numberToHclTerraform(struct!.minTrafficImpact),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthScoreThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthScoreThreshold = this._healthScoreThreshold;
    }
    if (this._minTrafficImpact !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTrafficImpact = this._minTrafficImpact;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._healthScoreThreshold = undefined;
      this._minTrafficImpact = undefined;
      this._status = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._healthScoreThreshold = value.healthScoreThreshold;
      this._minTrafficImpact = value.minTrafficImpact;
      this._status = value.status;
    }
  }

  // health_score_threshold - computed: true, optional: true, required: false
  private _healthScoreThreshold?: number; 
  public get healthScoreThreshold() {
    return this.getNumberAttribute('health_score_threshold');
  }
  public set healthScoreThreshold(value: number) {
    this._healthScoreThreshold = value;
  }
  public resetHealthScoreThreshold() {
    this._healthScoreThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthScoreThresholdInput() {
    return this._healthScoreThreshold;
  }

  // min_traffic_impact - computed: true, optional: true, required: false
  private _minTrafficImpact?: number; 
  public get minTrafficImpact() {
    return this.getNumberAttribute('min_traffic_impact');
  }
  public set minTrafficImpact(value: number) {
    this._minTrafficImpact = value;
  }
  public resetMinTrafficImpact() {
    this._minTrafficImpact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTrafficImpactInput() {
    return this._minTrafficImpact;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/internetmonitor_monitor#health_score_threshold InternetmonitorMonitor#health_score_threshold}
  */
  readonly healthScoreThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/internetmonitor_monitor#min_traffic_impact InternetmonitorMonitor#min_traffic_impact}
  */
  readonly minTrafficImpact?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/internetmonitor_monitor#status InternetmonitorMonitor#status}
  */
  readonly status?: string;
}

export function internetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigToTerraform(struct?: InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    health_score_threshold: cdktn.numberToTerraform(struct!.healthScoreThreshold),
    min_traffic_impact: cdktn.numberToTerraform(struct!.minTrafficImpact),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function internetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigToHclTerraform(struct?: InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    health_score_threshold: {
      value: cdktn.numberToHclTerraform(struct!.healthScoreThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_traffic_impact: {
      value: cdktn.numberToHclTerraform(struct!.minTrafficImpact),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthScoreThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthScoreThreshold = this._healthScoreThreshold;
    }
    if (this._minTrafficImpact !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTrafficImpact = this._minTrafficImpact;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._healthScoreThreshold = undefined;
      this._minTrafficImpact = undefined;
      this._status = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._healthScoreThreshold = value.healthScoreThreshold;
      this._minTrafficImpact = value.minTrafficImpact;
      this._status = value.status;
    }
  }

  // health_score_threshold - computed: true, optional: true, required: false
  private _healthScoreThreshold?: number; 
  public get healthScoreThreshold() {
    return this.getNumberAttribute('health_score_threshold');
  }
  public set healthScoreThreshold(value: number) {
    this._healthScoreThreshold = value;
  }
  public resetHealthScoreThreshold() {
    this._healthScoreThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthScoreThresholdInput() {
    return this._healthScoreThreshold;
  }

  // min_traffic_impact - computed: true, optional: true, required: false
  private _minTrafficImpact?: number; 
  public get minTrafficImpact() {
    return this.getNumberAttribute('min_traffic_impact');
  }
  public set minTrafficImpact(value: number) {
    this._minTrafficImpact = value;
  }
  public resetMinTrafficImpact() {
    this._minTrafficImpact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTrafficImpactInput() {
    return this._minTrafficImpact;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface InternetmonitorMonitorHealthEventsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/internetmonitor_monitor#availability_local_health_events_config InternetmonitorMonitor#availability_local_health_events_config}
  */
  readonly availabilityLocalHealthEventsConfig?: InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/internetmonitor_monitor#availability_score_threshold InternetmonitorMonitor#availability_score_threshold}
  */
  readonly availabilityScoreThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/internetmonitor_monitor#performance_local_health_events_config InternetmonitorMonitor#performance_local_health_events_config}
  */
  readonly performanceLocalHealthEventsConfig?: InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/internetmonitor_monitor#performance_score_threshold InternetmonitorMonitor#performance_score_threshold}
  */
  readonly performanceScoreThreshold?: number;
}

export function internetmonitorMonitorHealthEventsConfigToTerraform(struct?: InternetmonitorMonitorHealthEventsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    availability_local_health_events_config: internetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigToTerraform(struct!.availabilityLocalHealthEventsConfig),
    availability_score_threshold: cdktn.numberToTerraform(struct!.availabilityScoreThreshold),
    performance_local_health_events_config: internetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigToTerraform(struct!.performanceLocalHealthEventsConfig),
    performance_score_threshold: cdktn.numberToTerraform(struct!.performanceScoreThreshold),
  }
}


export function internetmonitorMonitorHealthEventsConfigToHclTerraform(struct?: InternetmonitorMonitorHealthEventsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    availability_local_health_events_config: {
      value: internetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigToHclTerraform(struct!.availabilityLocalHealthEventsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig",
    },
    availability_score_threshold: {
      value: cdktn.numberToHclTerraform(struct!.availabilityScoreThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    performance_local_health_events_config: {
      value: internetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigToHclTerraform(struct!.performanceLocalHealthEventsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig",
    },
    performance_score_threshold: {
      value: cdktn.numberToHclTerraform(struct!.performanceScoreThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InternetmonitorMonitorHealthEventsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InternetmonitorMonitorHealthEventsConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityLocalHealthEventsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityLocalHealthEventsConfig = this._availabilityLocalHealthEventsConfig?.internalValue;
    }
    if (this._availabilityScoreThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityScoreThreshold = this._availabilityScoreThreshold;
    }
    if (this._performanceLocalHealthEventsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceLocalHealthEventsConfig = this._performanceLocalHealthEventsConfig?.internalValue;
    }
    if (this._performanceScoreThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceScoreThreshold = this._performanceScoreThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InternetmonitorMonitorHealthEventsConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityLocalHealthEventsConfig.internalValue = undefined;
      this._availabilityScoreThreshold = undefined;
      this._performanceLocalHealthEventsConfig.internalValue = undefined;
      this._performanceScoreThreshold = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityLocalHealthEventsConfig.internalValue = value.availabilityLocalHealthEventsConfig;
      this._availabilityScoreThreshold = value.availabilityScoreThreshold;
      this._performanceLocalHealthEventsConfig.internalValue = value.performanceLocalHealthEventsConfig;
      this._performanceScoreThreshold = value.performanceScoreThreshold;
    }
  }

  // availability_local_health_events_config - computed: true, optional: true, required: false
  private _availabilityLocalHealthEventsConfig = new InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference(this, "availability_local_health_events_config");
  public get availabilityLocalHealthEventsConfig() {
    return this._availabilityLocalHealthEventsConfig;
  }
  public putAvailabilityLocalHealthEventsConfig(value: InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig) {
    this._availabilityLocalHealthEventsConfig.internalValue = value;
  }
  public resetAvailabilityLocalHealthEventsConfig() {
    this._availabilityLocalHealthEventsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityLocalHealthEventsConfigInput() {
    return this._availabilityLocalHealthEventsConfig.internalValue;
  }

  // availability_score_threshold - computed: true, optional: true, required: false
  private _availabilityScoreThreshold?: number; 
  public get availabilityScoreThreshold() {
    return this.getNumberAttribute('availability_score_threshold');
  }
  public set availabilityScoreThreshold(value: number) {
    this._availabilityScoreThreshold = value;
  }
  public resetAvailabilityScoreThreshold() {
    this._availabilityScoreThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityScoreThresholdInput() {
    return this._availabilityScoreThreshold;
  }

  // performance_local_health_events_config - computed: true, optional: true, required: false
  private _performanceLocalHealthEventsConfig = new InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference(this, "performance_local_health_events_config");
  public get performanceLocalHealthEventsConfig() {
    return this._performanceLocalHealthEventsConfig;
  }
  public putPerformanceLocalHealthEventsConfig(value: InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig) {
    this._performanceLocalHealthEventsConfig.internalValue = value;
  }
  public resetPerformanceLocalHealthEventsConfig() {
    this._performanceLocalHealthEventsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceLocalHealthEventsConfigInput() {
    return this._performanceLocalHealthEventsConfig.internalValue;
  }

  // performance_score_threshold - computed: true, optional: true, required: false
  private _performanceScoreThreshold?: number; 
  public get performanceScoreThreshold() {
    return this.getNumberAttribute('performance_score_threshold');
  }
  public set performanceScoreThreshold(value: number) {
    this._performanceScoreThreshold = value;
  }
  public resetPerformanceScoreThreshold() {
    this._performanceScoreThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceScoreThresholdInput() {
    return this._performanceScoreThreshold;
  }
}
export interface InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/internetmonitor_monitor#bucket_name InternetmonitorMonitor#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/internetmonitor_monitor#bucket_prefix InternetmonitorMonitor#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/internetmonitor_monitor#log_delivery_status InternetmonitorMonitor#log_delivery_status}
  */
  readonly logDeliveryStatus?: string;
}

export function internetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigToTerraform(struct?: InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
    log_delivery_status: cdktn.stringToTerraform(struct!.logDeliveryStatus),
  }
}


export function internetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigToHclTerraform(struct?: InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_prefix: {
      value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_delivery_status: {
      value: cdktn.stringToHclTerraform(struct!.logDeliveryStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._logDeliveryStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.logDeliveryStatus = this._logDeliveryStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketName = undefined;
      this._bucketPrefix = undefined;
      this._logDeliveryStatus = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketName = value.bucketName;
      this._bucketPrefix = value.bucketPrefix;
      this._logDeliveryStatus = value.logDeliveryStatus;
    }
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

  // bucket_prefix - computed: true, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // log_delivery_status - computed: true, optional: true, required: false
  private _logDeliveryStatus?: string; 
  public get logDeliveryStatus() {
    return this.getStringAttribute('log_delivery_status');
  }
  public set logDeliveryStatus(value: string) {
    this._logDeliveryStatus = value;
  }
  public resetLogDeliveryStatus() {
    this._logDeliveryStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDeliveryStatusInput() {
    return this._logDeliveryStatus;
  }
}
export interface InternetmonitorMonitorInternetMeasurementsLogDelivery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/internetmonitor_monitor#s3_config InternetmonitorMonitor#s3_config}
  */
  readonly s3Config?: InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config;
}

export function internetmonitorMonitorInternetMeasurementsLogDeliveryToTerraform(struct?: InternetmonitorMonitorInternetMeasurementsLogDelivery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_config: internetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigToTerraform(struct!.s3Config),
  }
}


export function internetmonitorMonitorInternetMeasurementsLogDeliveryToHclTerraform(struct?: InternetmonitorMonitorInternetMeasurementsLogDelivery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_config: {
      value: internetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigToHclTerraform(struct!.s3Config),
      isBlock: true,
      type: "struct",
      storageClassType: "InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InternetmonitorMonitorInternetMeasurementsLogDelivery | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Config = this._s3Config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InternetmonitorMonitorInternetMeasurementsLogDelivery | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Config.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Config.internalValue = value.s3Config;
    }
  }

  // s3_config - computed: true, optional: true, required: false
  private _s3Config = new InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference(this, "s3_config");
  public get s3Config() {
    return this._s3Config;
  }
  public putS3Config(value: InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config) {
    this._s3Config.internalValue = value;
  }
  public resetS3Config() {
    this._s3Config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigInput() {
    return this._s3Config.internalValue;
  }
}
export interface InternetmonitorMonitorTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/internetmonitor_monitor#key InternetmonitorMonitor#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/internetmonitor_monitor#value InternetmonitorMonitor#value}
  */
  readonly value?: string;
}

export function internetmonitorMonitorTagsToTerraform(struct?: InternetmonitorMonitorTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function internetmonitorMonitorTagsToHclTerraform(struct?: InternetmonitorMonitorTags | cdktn.IResolvable): any {
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

export class InternetmonitorMonitorTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): InternetmonitorMonitorTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: InternetmonitorMonitorTags | cdktn.IResolvable | undefined) {
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

export class InternetmonitorMonitorTagsList extends cdktn.ComplexList {
  public internalValue? : InternetmonitorMonitorTags[] | cdktn.IResolvable

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
  public get(index: number): InternetmonitorMonitorTagsOutputReference {
    return new InternetmonitorMonitorTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/internetmonitor_monitor awscc_internetmonitor_monitor}
*/
export class InternetmonitorMonitor extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_internetmonitor_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a InternetmonitorMonitor resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InternetmonitorMonitor to import
  * @param importFromId The id of the existing InternetmonitorMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/internetmonitor_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InternetmonitorMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_internetmonitor_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/internetmonitor_monitor awscc_internetmonitor_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InternetmonitorMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: InternetmonitorMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_internetmonitor_monitor',
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
    this._healthEventsConfig.internalValue = config.healthEventsConfig;
    this._includeLinkedAccounts = config.includeLinkedAccounts;
    this._internetMeasurementsLogDelivery.internalValue = config.internetMeasurementsLogDelivery;
    this._linkedAccountId = config.linkedAccountId;
    this._maxCityNetworksToMonitor = config.maxCityNetworksToMonitor;
    this._monitorName = config.monitorName;
    this._resources = config.resources;
    this._resourcesToAdd = config.resourcesToAdd;
    this._resourcesToRemove = config.resourcesToRemove;
    this._status = config.status;
    this._tags.internalValue = config.tags;
    this._trafficPercentageToMonitor = config.trafficPercentageToMonitor;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // health_events_config - computed: true, optional: true, required: false
  private _healthEventsConfig = new InternetmonitorMonitorHealthEventsConfigOutputReference(this, "health_events_config");
  public get healthEventsConfig() {
    return this._healthEventsConfig;
  }
  public putHealthEventsConfig(value: InternetmonitorMonitorHealthEventsConfig) {
    this._healthEventsConfig.internalValue = value;
  }
  public resetHealthEventsConfig() {
    this._healthEventsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthEventsConfigInput() {
    return this._healthEventsConfig.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_linked_accounts - computed: true, optional: true, required: false
  private _includeLinkedAccounts?: boolean | cdktn.IResolvable; 
  public get includeLinkedAccounts() {
    return this.getBooleanAttribute('include_linked_accounts');
  }
  public set includeLinkedAccounts(value: boolean | cdktn.IResolvable) {
    this._includeLinkedAccounts = value;
  }
  public resetIncludeLinkedAccounts() {
    this._includeLinkedAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeLinkedAccountsInput() {
    return this._includeLinkedAccounts;
  }

  // internet_measurements_log_delivery - computed: true, optional: true, required: false
  private _internetMeasurementsLogDelivery = new InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference(this, "internet_measurements_log_delivery");
  public get internetMeasurementsLogDelivery() {
    return this._internetMeasurementsLogDelivery;
  }
  public putInternetMeasurementsLogDelivery(value: InternetmonitorMonitorInternetMeasurementsLogDelivery) {
    this._internetMeasurementsLogDelivery.internalValue = value;
  }
  public resetInternetMeasurementsLogDelivery() {
    this._internetMeasurementsLogDelivery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetMeasurementsLogDeliveryInput() {
    return this._internetMeasurementsLogDelivery.internalValue;
  }

  // linked_account_id - computed: true, optional: true, required: false
  private _linkedAccountId?: string; 
  public get linkedAccountId() {
    return this.getStringAttribute('linked_account_id');
  }
  public set linkedAccountId(value: string) {
    this._linkedAccountId = value;
  }
  public resetLinkedAccountId() {
    this._linkedAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedAccountIdInput() {
    return this._linkedAccountId;
  }

  // max_city_networks_to_monitor - computed: true, optional: true, required: false
  private _maxCityNetworksToMonitor?: number; 
  public get maxCityNetworksToMonitor() {
    return this.getNumberAttribute('max_city_networks_to_monitor');
  }
  public set maxCityNetworksToMonitor(value: number) {
    this._maxCityNetworksToMonitor = value;
  }
  public resetMaxCityNetworksToMonitor() {
    this._maxCityNetworksToMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCityNetworksToMonitorInput() {
    return this._maxCityNetworksToMonitor;
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }

  // monitor_arn - computed: true, optional: false, required: false
  public get monitorArn() {
    return this.getStringAttribute('monitor_arn');
  }

  // monitor_name - computed: false, optional: false, required: true
  private _monitorName?: string; 
  public get monitorName() {
    return this.getStringAttribute('monitor_name');
  }
  public set monitorName(value: string) {
    this._monitorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorNameInput() {
    return this._monitorName;
  }

  // processing_status - computed: true, optional: false, required: false
  public get processingStatus() {
    return this.getStringAttribute('processing_status');
  }

  // processing_status_info - computed: true, optional: false, required: false
  public get processingStatusInfo() {
    return this.getStringAttribute('processing_status_info');
  }

  // resources - computed: true, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // resources_to_add - computed: true, optional: true, required: false
  private _resourcesToAdd?: string[]; 
  public get resourcesToAdd() {
    return this.getListAttribute('resources_to_add');
  }
  public set resourcesToAdd(value: string[]) {
    this._resourcesToAdd = value;
  }
  public resetResourcesToAdd() {
    this._resourcesToAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesToAddInput() {
    return this._resourcesToAdd;
  }

  // resources_to_remove - computed: true, optional: true, required: false
  private _resourcesToRemove?: string[]; 
  public get resourcesToRemove() {
    return this.getListAttribute('resources_to_remove');
  }
  public set resourcesToRemove(value: string[]) {
    this._resourcesToRemove = value;
  }
  public resetResourcesToRemove() {
    this._resourcesToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesToRemoveInput() {
    return this._resourcesToRemove;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new InternetmonitorMonitorTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: InternetmonitorMonitorTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // traffic_percentage_to_monitor - computed: true, optional: true, required: false
  private _trafficPercentageToMonitor?: number; 
  public get trafficPercentageToMonitor() {
    return this.getNumberAttribute('traffic_percentage_to_monitor');
  }
  public set trafficPercentageToMonitor(value: number) {
    this._trafficPercentageToMonitor = value;
  }
  public resetTrafficPercentageToMonitor() {
    this._trafficPercentageToMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficPercentageToMonitorInput() {
    return this._trafficPercentageToMonitor;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      health_events_config: internetmonitorMonitorHealthEventsConfigToTerraform(this._healthEventsConfig.internalValue),
      include_linked_accounts: cdktn.booleanToTerraform(this._includeLinkedAccounts),
      internet_measurements_log_delivery: internetmonitorMonitorInternetMeasurementsLogDeliveryToTerraform(this._internetMeasurementsLogDelivery.internalValue),
      linked_account_id: cdktn.stringToTerraform(this._linkedAccountId),
      max_city_networks_to_monitor: cdktn.numberToTerraform(this._maxCityNetworksToMonitor),
      monitor_name: cdktn.stringToTerraform(this._monitorName),
      resources: cdktn.listMapper(cdktn.stringToTerraform, false)(this._resources),
      resources_to_add: cdktn.listMapper(cdktn.stringToTerraform, false)(this._resourcesToAdd),
      resources_to_remove: cdktn.listMapper(cdktn.stringToTerraform, false)(this._resourcesToRemove),
      status: cdktn.stringToTerraform(this._status),
      tags: cdktn.listMapper(internetmonitorMonitorTagsToTerraform, false)(this._tags.internalValue),
      traffic_percentage_to_monitor: cdktn.numberToTerraform(this._trafficPercentageToMonitor),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      health_events_config: {
        value: internetmonitorMonitorHealthEventsConfigToHclTerraform(this._healthEventsConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "InternetmonitorMonitorHealthEventsConfig",
      },
      include_linked_accounts: {
        value: cdktn.booleanToHclTerraform(this._includeLinkedAccounts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      internet_measurements_log_delivery: {
        value: internetmonitorMonitorInternetMeasurementsLogDeliveryToHclTerraform(this._internetMeasurementsLogDelivery.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "InternetmonitorMonitorInternetMeasurementsLogDelivery",
      },
      linked_account_id: {
        value: cdktn.stringToHclTerraform(this._linkedAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_city_networks_to_monitor: {
        value: cdktn.numberToHclTerraform(this._maxCityNetworksToMonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitor_name: {
        value: cdktn.stringToHclTerraform(this._monitorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resources: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._resources),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      resources_to_add: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._resourcesToAdd),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      resources_to_remove: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._resourcesToRemove),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      status: {
        value: cdktn.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(internetmonitorMonitorTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InternetmonitorMonitorTagsList",
      },
      traffic_percentage_to_monitor: {
        value: cdktn.numberToHclTerraform(this._trafficPercentageToMonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
