// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/fis_experiment_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccFisExperimentTemplateConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/fis_experiment_template#id DataAwsccFisExperimentTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccFisExperimentTemplateActions {
}

export function dataAwsccFisExperimentTemplateActionsToTerraform(struct?: DataAwsccFisExperimentTemplateActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFisExperimentTemplateActionsToHclTerraform(struct?: DataAwsccFisExperimentTemplateActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFisExperimentTemplateActionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataAwsccFisExperimentTemplateActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFisExperimentTemplateActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_id - computed: true, optional: false, required: false
  public get actionId() {
    return this.getStringAttribute('action_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new cdktn.StringMap(this, "parameters");
  public get parameters() {
    return this._parameters;
  }

  // start_after - computed: true, optional: false, required: false
  public get startAfter() {
    return this.getListAttribute('start_after');
  }

  // targets - computed: true, optional: false, required: false
  private _targets = new cdktn.StringMap(this, "targets");
  public get targets() {
    return this._targets;
  }
}

export class DataAwsccFisExperimentTemplateActionsMap extends cdktn.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute);
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataAwsccFisExperimentTemplateActionsOutputReference {
    return new DataAwsccFisExperimentTemplateActionsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataAwsccFisExperimentTemplateExperimentOptions {
}

export function dataAwsccFisExperimentTemplateExperimentOptionsToTerraform(struct?: DataAwsccFisExperimentTemplateExperimentOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFisExperimentTemplateExperimentOptionsToHclTerraform(struct?: DataAwsccFisExperimentTemplateExperimentOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFisExperimentTemplateExperimentOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccFisExperimentTemplateExperimentOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFisExperimentTemplateExperimentOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_targeting - computed: true, optional: false, required: false
  public get accountTargeting() {
    return this.getStringAttribute('account_targeting');
  }

  // empty_target_resolution_mode - computed: true, optional: false, required: false
  public get emptyTargetResolutionMode() {
    return this.getStringAttribute('empty_target_resolution_mode');
  }
}
export interface DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards {
}

export function dataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsToTerraform(struct?: DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsToHclTerraform(struct?: DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dashboard_identifier - computed: true, optional: false, required: false
  public get dashboardIdentifier() {
    return this.getStringAttribute('dashboard_identifier');
  }
}

export class DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference {
    return new DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSources {
}

export function dataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesToTerraform(struct?: DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesToHclTerraform(struct?: DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudwatch_dashboards - computed: true, optional: false, required: false
  private _cloudwatchDashboards = new DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList(this, "cloudwatch_dashboards", false);
  public get cloudwatchDashboards() {
    return this._cloudwatchDashboards;
  }
}
export interface DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration {
}

export function dataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationToTerraform(struct?: DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationToHclTerraform(struct?: DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration | undefined) {
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

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}
export interface DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputs {
}

export function dataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsToTerraform(struct?: DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsToHclTerraform(struct?: DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // experiment_report_s3_configuration - computed: true, optional: false, required: false
  private _experimentReportS3Configuration = new DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference(this, "experiment_report_s3_configuration");
  public get experimentReportS3Configuration() {
    return this._experimentReportS3Configuration;
  }
}
export interface DataAwsccFisExperimentTemplateExperimentReportConfiguration {
}

export function dataAwsccFisExperimentTemplateExperimentReportConfigurationToTerraform(struct?: DataAwsccFisExperimentTemplateExperimentReportConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFisExperimentTemplateExperimentReportConfigurationToHclTerraform(struct?: DataAwsccFisExperimentTemplateExperimentReportConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccFisExperimentTemplateExperimentReportConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFisExperimentTemplateExperimentReportConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_sources - computed: true, optional: false, required: false
  private _dataSources = new DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference(this, "data_sources");
  public get dataSources() {
    return this._dataSources;
  }

  // outputs - computed: true, optional: false, required: false
  private _outputs = new DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference(this, "outputs");
  public get outputs() {
    return this._outputs;
  }

  // post_experiment_duration - computed: true, optional: false, required: false
  public get postExperimentDuration() {
    return this.getStringAttribute('post_experiment_duration');
  }

  // pre_experiment_duration - computed: true, optional: false, required: false
  public get preExperimentDuration() {
    return this.getStringAttribute('pre_experiment_duration');
  }
}
export interface DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration {
}

export function dataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationToTerraform(struct?: DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationToHclTerraform(struct?: DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_group_arn - computed: true, optional: false, required: false
  public get logGroupArn() {
    return this.getStringAttribute('log_group_arn');
  }
}
export interface DataAwsccFisExperimentTemplateLogConfigurationS3Configuration {
}

export function dataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationToTerraform(struct?: DataAwsccFisExperimentTemplateLogConfigurationS3Configuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationToHclTerraform(struct?: DataAwsccFisExperimentTemplateLogConfigurationS3Configuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccFisExperimentTemplateLogConfigurationS3Configuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFisExperimentTemplateLogConfigurationS3Configuration | undefined) {
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

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}
export interface DataAwsccFisExperimentTemplateLogConfiguration {
}

export function dataAwsccFisExperimentTemplateLogConfigurationToTerraform(struct?: DataAwsccFisExperimentTemplateLogConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFisExperimentTemplateLogConfigurationToHclTerraform(struct?: DataAwsccFisExperimentTemplateLogConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFisExperimentTemplateLogConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccFisExperimentTemplateLogConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFisExperimentTemplateLogConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudwatch_logs_configuration - computed: true, optional: false, required: false
  private _cloudwatchLogsConfiguration = new DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference(this, "cloudwatch_logs_configuration");
  public get cloudwatchLogsConfiguration() {
    return this._cloudwatchLogsConfiguration;
  }

  // log_schema_version - computed: true, optional: false, required: false
  public get logSchemaVersion() {
    return this.getNumberAttribute('log_schema_version');
  }

  // s3_configuration - computed: true, optional: false, required: false
  private _s3Configuration = new DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference(this, "s3_configuration");
  public get s3Configuration() {
    return this._s3Configuration;
  }
}
export interface DataAwsccFisExperimentTemplateStopConditions {
}

export function dataAwsccFisExperimentTemplateStopConditionsToTerraform(struct?: DataAwsccFisExperimentTemplateStopConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFisExperimentTemplateStopConditionsToHclTerraform(struct?: DataAwsccFisExperimentTemplateStopConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFisExperimentTemplateStopConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccFisExperimentTemplateStopConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFisExperimentTemplateStopConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccFisExperimentTemplateStopConditionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccFisExperimentTemplateStopConditionsOutputReference {
    return new DataAwsccFisExperimentTemplateStopConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccFisExperimentTemplateTargetsFilters {
}

export function dataAwsccFisExperimentTemplateTargetsFiltersToTerraform(struct?: DataAwsccFisExperimentTemplateTargetsFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFisExperimentTemplateTargetsFiltersToHclTerraform(struct?: DataAwsccFisExperimentTemplateTargetsFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFisExperimentTemplateTargetsFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccFisExperimentTemplateTargetsFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFisExperimentTemplateTargetsFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAwsccFisExperimentTemplateTargetsFiltersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccFisExperimentTemplateTargetsFiltersOutputReference {
    return new DataAwsccFisExperimentTemplateTargetsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccFisExperimentTemplateTargets {
}

export function dataAwsccFisExperimentTemplateTargetsToTerraform(struct?: DataAwsccFisExperimentTemplateTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFisExperimentTemplateTargetsToHclTerraform(struct?: DataAwsccFisExperimentTemplateTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFisExperimentTemplateTargetsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataAwsccFisExperimentTemplateTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFisExperimentTemplateTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataAwsccFisExperimentTemplateTargetsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new cdktn.StringMap(this, "parameters");
  public get parameters() {
    return this._parameters;
  }

  // resource_arns - computed: true, optional: false, required: false
  public get resourceArns() {
    return this.getListAttribute('resource_arns');
  }

  // resource_tags - computed: true, optional: false, required: false
  private _resourceTags = new cdktn.StringMap(this, "resource_tags");
  public get resourceTags() {
    return this._resourceTags;
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // selection_mode - computed: true, optional: false, required: false
  public get selectionMode() {
    return this.getStringAttribute('selection_mode');
  }
}

export class DataAwsccFisExperimentTemplateTargetsMap extends cdktn.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute);
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataAwsccFisExperimentTemplateTargetsOutputReference {
    return new DataAwsccFisExperimentTemplateTargetsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/fis_experiment_template awscc_fis_experiment_template}
*/
export class DataAwsccFisExperimentTemplate extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_fis_experiment_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccFisExperimentTemplate resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccFisExperimentTemplate to import
  * @param importFromId The id of the existing DataAwsccFisExperimentTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/fis_experiment_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccFisExperimentTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_fis_experiment_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/fis_experiment_template awscc_fis_experiment_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccFisExperimentTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccFisExperimentTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_fis_experiment_template',
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

  // actions - computed: true, optional: false, required: false
  private _actions = new DataAwsccFisExperimentTemplateActionsMap(this, "actions");
  public get actions() {
    return this._actions;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // experiment_options - computed: true, optional: false, required: false
  private _experimentOptions = new DataAwsccFisExperimentTemplateExperimentOptionsOutputReference(this, "experiment_options");
  public get experimentOptions() {
    return this._experimentOptions;
  }

  // experiment_report_configuration - computed: true, optional: false, required: false
  private _experimentReportConfiguration = new DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference(this, "experiment_report_configuration");
  public get experimentReportConfiguration() {
    return this._experimentReportConfiguration;
  }

  // experiment_template_id - computed: true, optional: false, required: false
  public get experimentTemplateId() {
    return this.getStringAttribute('experiment_template_id');
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

  // log_configuration - computed: true, optional: false, required: false
  private _logConfiguration = new DataAwsccFisExperimentTemplateLogConfigurationOutputReference(this, "log_configuration");
  public get logConfiguration() {
    return this._logConfiguration;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // stop_conditions - computed: true, optional: false, required: false
  private _stopConditions = new DataAwsccFisExperimentTemplateStopConditionsList(this, "stop_conditions", false);
  public get stopConditions() {
    return this._stopConditions;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // targets - computed: true, optional: false, required: false
  private _targets = new DataAwsccFisExperimentTemplateTargetsMap(this, "targets");
  public get targets() {
    return this._targets;
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
