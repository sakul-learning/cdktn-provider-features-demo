// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/internetmonitor_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccInternetmonitorMonitorConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/internetmonitor_monitor#id DataAwsccInternetmonitorMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig {
}

export function dataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigToTerraform(struct?: DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigToHclTerraform(struct?: DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // health_score_threshold - computed: true, optional: false, required: false
  public get healthScoreThreshold() {
    return this.getNumberAttribute('health_score_threshold');
  }

  // min_traffic_impact - computed: true, optional: false, required: false
  public get minTrafficImpact() {
    return this.getNumberAttribute('min_traffic_impact');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig {
}

export function dataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigToTerraform(struct?: DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigToHclTerraform(struct?: DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // health_score_threshold - computed: true, optional: false, required: false
  public get healthScoreThreshold() {
    return this.getNumberAttribute('health_score_threshold');
  }

  // min_traffic_impact - computed: true, optional: false, required: false
  public get minTrafficImpact() {
    return this.getNumberAttribute('min_traffic_impact');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface DataAwsccInternetmonitorMonitorHealthEventsConfig {
}

export function dataAwsccInternetmonitorMonitorHealthEventsConfigToTerraform(struct?: DataAwsccInternetmonitorMonitorHealthEventsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInternetmonitorMonitorHealthEventsConfigToHclTerraform(struct?: DataAwsccInternetmonitorMonitorHealthEventsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccInternetmonitorMonitorHealthEventsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInternetmonitorMonitorHealthEventsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_local_health_events_config - computed: true, optional: false, required: false
  private _availabilityLocalHealthEventsConfig = new DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference(this, "availability_local_health_events_config");
  public get availabilityLocalHealthEventsConfig() {
    return this._availabilityLocalHealthEventsConfig;
  }

  // availability_score_threshold - computed: true, optional: false, required: false
  public get availabilityScoreThreshold() {
    return this.getNumberAttribute('availability_score_threshold');
  }

  // performance_local_health_events_config - computed: true, optional: false, required: false
  private _performanceLocalHealthEventsConfig = new DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference(this, "performance_local_health_events_config");
  public get performanceLocalHealthEventsConfig() {
    return this._performanceLocalHealthEventsConfig;
  }

  // performance_score_threshold - computed: true, optional: false, required: false
  public get performanceScoreThreshold() {
    return this.getNumberAttribute('performance_score_threshold');
  }
}
export interface DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config {
}

export function dataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigToTerraform(struct?: DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigToHclTerraform(struct?: DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config | undefined) {
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

  // bucket_prefix - computed: true, optional: false, required: false
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }

  // log_delivery_status - computed: true, optional: false, required: false
  public get logDeliveryStatus() {
    return this.getStringAttribute('log_delivery_status');
  }
}
export interface DataAwsccInternetmonitorMonitorInternetMeasurementsLogDelivery {
}

export function dataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryToTerraform(struct?: DataAwsccInternetmonitorMonitorInternetMeasurementsLogDelivery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryToHclTerraform(struct?: DataAwsccInternetmonitorMonitorInternetMeasurementsLogDelivery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccInternetmonitorMonitorInternetMeasurementsLogDelivery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInternetmonitorMonitorInternetMeasurementsLogDelivery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_config - computed: true, optional: false, required: false
  private _s3Config = new DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference(this, "s3_config");
  public get s3Config() {
    return this._s3Config;
  }
}
export interface DataAwsccInternetmonitorMonitorTags {
}

export function dataAwsccInternetmonitorMonitorTagsToTerraform(struct?: DataAwsccInternetmonitorMonitorTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInternetmonitorMonitorTagsToHclTerraform(struct?: DataAwsccInternetmonitorMonitorTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInternetmonitorMonitorTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInternetmonitorMonitorTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInternetmonitorMonitorTags | undefined) {
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

export class DataAwsccInternetmonitorMonitorTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInternetmonitorMonitorTagsOutputReference {
    return new DataAwsccInternetmonitorMonitorTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/internetmonitor_monitor awscc_internetmonitor_monitor}
*/
export class DataAwsccInternetmonitorMonitor extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_internetmonitor_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccInternetmonitorMonitor resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccInternetmonitorMonitor to import
  * @param importFromId The id of the existing DataAwsccInternetmonitorMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/internetmonitor_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccInternetmonitorMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_internetmonitor_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/internetmonitor_monitor awscc_internetmonitor_monitor} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccInternetmonitorMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccInternetmonitorMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_internetmonitor_monitor',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // health_events_config - computed: true, optional: false, required: false
  private _healthEventsConfig = new DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference(this, "health_events_config");
  public get healthEventsConfig() {
    return this._healthEventsConfig;
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

  // include_linked_accounts - computed: true, optional: false, required: false
  public get includeLinkedAccounts() {
    return this.getBooleanAttribute('include_linked_accounts');
  }

  // internet_measurements_log_delivery - computed: true, optional: false, required: false
  private _internetMeasurementsLogDelivery = new DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference(this, "internet_measurements_log_delivery");
  public get internetMeasurementsLogDelivery() {
    return this._internetMeasurementsLogDelivery;
  }

  // linked_account_id - computed: true, optional: false, required: false
  public get linkedAccountId() {
    return this.getStringAttribute('linked_account_id');
  }

  // max_city_networks_to_monitor - computed: true, optional: false, required: false
  public get maxCityNetworksToMonitor() {
    return this.getNumberAttribute('max_city_networks_to_monitor');
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }

  // monitor_arn - computed: true, optional: false, required: false
  public get monitorArn() {
    return this.getStringAttribute('monitor_arn');
  }

  // monitor_name - computed: true, optional: false, required: false
  public get monitorName() {
    return this.getStringAttribute('monitor_name');
  }

  // processing_status - computed: true, optional: false, required: false
  public get processingStatus() {
    return this.getStringAttribute('processing_status');
  }

  // processing_status_info - computed: true, optional: false, required: false
  public get processingStatusInfo() {
    return this.getStringAttribute('processing_status_info');
  }

  // resources - computed: true, optional: false, required: false
  public get resources() {
    return this.getListAttribute('resources');
  }

  // resources_to_add - computed: true, optional: false, required: false
  public get resourcesToAdd() {
    return this.getListAttribute('resources_to_add');
  }

  // resources_to_remove - computed: true, optional: false, required: false
  public get resourcesToRemove() {
    return this.getListAttribute('resources_to_remove');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccInternetmonitorMonitorTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // traffic_percentage_to_monitor - computed: true, optional: false, required: false
  public get trafficPercentageToMonitor() {
    return this.getNumberAttribute('traffic_percentage_to_monitor');
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
