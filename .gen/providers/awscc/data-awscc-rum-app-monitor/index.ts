// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/rum_app_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccRumAppMonitorConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/rum_app_monitor#id DataAwsccRumAppMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions {
}

export function dataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsToTerraform(struct?: DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsToHclTerraform(struct?: DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_keys - computed: true, optional: false, required: false
  private _dimensionKeys = new cdktn.StringMap(this, "dimension_keys");
  public get dimensionKeys() {
    return this._dimensionKeys;
  }

  // event_pattern - computed: true, optional: false, required: false
  public get eventPattern() {
    return this.getStringAttribute('event_pattern');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // unit_label - computed: true, optional: false, required: false
  public get unitLabel() {
    return this.getStringAttribute('unit_label');
  }

  // value_key - computed: true, optional: false, required: false
  public get valueKey() {
    return this.getStringAttribute('value_key');
  }
}

export class DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference {
    return new DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinations {
}

export function dataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsToTerraform(struct?: DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsToHclTerraform(struct?: DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return this.getStringAttribute('destination');
  }

  // destination_arn - computed: true, optional: false, required: false
  public get destinationArn() {
    return this.getStringAttribute('destination_arn');
  }

  // iam_role_arn - computed: true, optional: false, required: false
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
  }

  // metric_definitions - computed: true, optional: false, required: false
  private _metricDefinitions = new DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList(this, "metric_definitions", true);
  public get metricDefinitions() {
    return this._metricDefinitions;
  }
}

export class DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference {
    return new DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccRumAppMonitorAppMonitorConfiguration {
}

export function dataAwsccRumAppMonitorAppMonitorConfigurationToTerraform(struct?: DataAwsccRumAppMonitorAppMonitorConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRumAppMonitorAppMonitorConfigurationToHclTerraform(struct?: DataAwsccRumAppMonitorAppMonitorConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRumAppMonitorAppMonitorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRumAppMonitorAppMonitorConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_cookies - computed: true, optional: false, required: false
  public get allowCookies() {
    return this.getBooleanAttribute('allow_cookies');
  }

  // enable_x_ray - computed: true, optional: false, required: false
  public get enableXRay() {
    return this.getBooleanAttribute('enable_x_ray');
  }

  // excluded_pages - computed: true, optional: false, required: false
  public get excludedPages() {
    return this.getListAttribute('excluded_pages');
  }

  // favorite_pages - computed: true, optional: false, required: false
  public get favoritePages() {
    return this.getListAttribute('favorite_pages');
  }

  // guest_role_arn - computed: true, optional: false, required: false
  public get guestRoleArn() {
    return this.getStringAttribute('guest_role_arn');
  }

  // identity_pool_id - computed: true, optional: false, required: false
  public get identityPoolId() {
    return this.getStringAttribute('identity_pool_id');
  }

  // included_pages - computed: true, optional: false, required: false
  public get includedPages() {
    return this.getListAttribute('included_pages');
  }

  // metric_destinations - computed: true, optional: false, required: false
  private _metricDestinations = new DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList(this, "metric_destinations", true);
  public get metricDestinations() {
    return this._metricDestinations;
  }

  // session_sample_rate - computed: true, optional: false, required: false
  public get sessionSampleRate() {
    return this.getNumberAttribute('session_sample_rate');
  }

  // telemetries - computed: true, optional: false, required: false
  public get telemetries() {
    return this.getListAttribute('telemetries');
  }
}
export interface DataAwsccRumAppMonitorCustomEvents {
}

export function dataAwsccRumAppMonitorCustomEventsToTerraform(struct?: DataAwsccRumAppMonitorCustomEvents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRumAppMonitorCustomEventsToHclTerraform(struct?: DataAwsccRumAppMonitorCustomEvents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRumAppMonitorCustomEventsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRumAppMonitorCustomEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRumAppMonitorCustomEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps {
}

export function dataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsToTerraform(struct?: DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsToHclTerraform(struct?: DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface DataAwsccRumAppMonitorDeobfuscationConfiguration {
}

export function dataAwsccRumAppMonitorDeobfuscationConfigurationToTerraform(struct?: DataAwsccRumAppMonitorDeobfuscationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRumAppMonitorDeobfuscationConfigurationToHclTerraform(struct?: DataAwsccRumAppMonitorDeobfuscationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRumAppMonitorDeobfuscationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRumAppMonitorDeobfuscationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // java_script_source_maps - computed: true, optional: false, required: false
  private _javaScriptSourceMaps = new DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference(this, "java_script_source_maps");
  public get javaScriptSourceMaps() {
    return this._javaScriptSourceMaps;
  }
}
export interface DataAwsccRumAppMonitorResourcePolicy {
}

export function dataAwsccRumAppMonitorResourcePolicyToTerraform(struct?: DataAwsccRumAppMonitorResourcePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRumAppMonitorResourcePolicyToHclTerraform(struct?: DataAwsccRumAppMonitorResourcePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRumAppMonitorResourcePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRumAppMonitorResourcePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRumAppMonitorResourcePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy_document - computed: true, optional: false, required: false
  public get policyDocument() {
    return this.getStringAttribute('policy_document');
  }

  // policy_revision_id - computed: true, optional: false, required: false
  public get policyRevisionId() {
    return this.getStringAttribute('policy_revision_id');
  }
}
export interface DataAwsccRumAppMonitorTags {
}

export function dataAwsccRumAppMonitorTagsToTerraform(struct?: DataAwsccRumAppMonitorTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRumAppMonitorTagsToHclTerraform(struct?: DataAwsccRumAppMonitorTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRumAppMonitorTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccRumAppMonitorTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRumAppMonitorTags | undefined) {
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

export class DataAwsccRumAppMonitorTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccRumAppMonitorTagsOutputReference {
    return new DataAwsccRumAppMonitorTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/rum_app_monitor awscc_rum_app_monitor}
*/
export class DataAwsccRumAppMonitor extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_rum_app_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccRumAppMonitor resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccRumAppMonitor to import
  * @param importFromId The id of the existing DataAwsccRumAppMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/rum_app_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccRumAppMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_rum_app_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/rum_app_monitor awscc_rum_app_monitor} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccRumAppMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccRumAppMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_rum_app_monitor',
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

  // app_monitor_configuration - computed: true, optional: false, required: false
  private _appMonitorConfiguration = new DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference(this, "app_monitor_configuration");
  public get appMonitorConfiguration() {
    return this._appMonitorConfiguration;
  }

  // app_monitor_id - computed: true, optional: false, required: false
  public get appMonitorId() {
    return this.getStringAttribute('app_monitor_id');
  }

  // custom_events - computed: true, optional: false, required: false
  private _customEvents = new DataAwsccRumAppMonitorCustomEventsOutputReference(this, "custom_events");
  public get customEvents() {
    return this._customEvents;
  }

  // cw_log_enabled - computed: true, optional: false, required: false
  public get cwLogEnabled() {
    return this.getBooleanAttribute('cw_log_enabled');
  }

  // deobfuscation_configuration - computed: true, optional: false, required: false
  private _deobfuscationConfiguration = new DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference(this, "deobfuscation_configuration");
  public get deobfuscationConfiguration() {
    return this._deobfuscationConfiguration;
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // domain_list - computed: true, optional: false, required: false
  public get domainList() {
    return this.getListAttribute('domain_list');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // resource_policy - computed: true, optional: false, required: false
  private _resourcePolicy = new DataAwsccRumAppMonitorResourcePolicyOutputReference(this, "resource_policy");
  public get resourcePolicy() {
    return this._resourcePolicy;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccRumAppMonitorTagsList(this, "tags", true);
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
