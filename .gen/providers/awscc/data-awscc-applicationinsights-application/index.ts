// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/applicationinsights_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccApplicationinsightsApplicationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/applicationinsights_application#id DataAwsccApplicationinsightsApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetrics {
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetricsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetricsToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetricsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_metric_name - computed: true, optional: false, required: false
  public get alarmMetricName() {
    return this.getStringAttribute('alarm_metric_name');
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetricsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetricsOutputReference {
    return new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarms {
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmsToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_name - computed: true, optional: false, required: false
  public get alarmName() {
    return this.getStringAttribute('alarm_name');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmsOutputReference {
    return new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHaClusterPrometheusExporter {
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHaClusterPrometheusExporterToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHaClusterPrometheusExporter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHaClusterPrometheusExporterToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHaClusterPrometheusExporter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHaClusterPrometheusExporterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHaClusterPrometheusExporter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHaClusterPrometheusExporter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prometheus_port - computed: true, optional: false, required: false
  public get prometheusPort() {
    return this.getStringAttribute('prometheus_port');
  }
}
export interface DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHanaPrometheusExporter {
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHanaPrometheusExporterToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHanaPrometheusExporter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHanaPrometheusExporterToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHanaPrometheusExporter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHanaPrometheusExporterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHanaPrometheusExporter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHanaPrometheusExporter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agree_to_install_hanadb_client - computed: true, optional: false, required: false
  public get agreeToInstallHanadbClient() {
    return this.getBooleanAttribute('agree_to_install_hanadb_client');
  }

  // hana_port - computed: true, optional: false, required: false
  public get hanaPort() {
    return this.getStringAttribute('hana_port');
  }

  // hana_secret_name - computed: true, optional: false, required: false
  public get hanaSecretName() {
    return this.getStringAttribute('hana_secret_name');
  }

  // hanasid - computed: true, optional: false, required: false
  public get hanasid() {
    return this.getStringAttribute('hanasid');
  }

  // prometheus_port - computed: true, optional: false, required: false
  public get prometheusPort() {
    return this.getStringAttribute('prometheus_port');
  }
}
export interface DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporter {
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporterToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporterToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host_port - computed: true, optional: false, required: false
  public get hostPort() {
    return this.getStringAttribute('host_port');
  }

  // jmxurl - computed: true, optional: false, required: false
  public get jmxurl() {
    return this.getStringAttribute('jmxurl');
  }

  // prometheus_port - computed: true, optional: false, required: false
  public get prometheusPort() {
    return this.getStringAttribute('prometheus_port');
  }
}
export interface DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogs {
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogsToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encoding - computed: true, optional: false, required: false
  public get encoding() {
    return this.getStringAttribute('encoding');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_path - computed: true, optional: false, required: false
  public get logPath() {
    return this.getStringAttribute('log_path');
  }

  // log_type - computed: true, optional: false, required: false
  public get logType() {
    return this.getStringAttribute('log_type');
  }

  // pattern_set - computed: true, optional: false, required: false
  public get patternSet() {
    return this.getStringAttribute('pattern_set');
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogsOutputReference {
    return new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporter {
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporterToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporterToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_numbers - computed: true, optional: false, required: false
  public get instanceNumbers() {
    return this.getListAttribute('instance_numbers');
  }

  // prometheus_port - computed: true, optional: false, required: false
  public get prometheusPort() {
    return this.getStringAttribute('prometheus_port');
  }

  // sapsid - computed: true, optional: false, required: false
  public get sapsid() {
    return this.getStringAttribute('sapsid');
  }
}
export interface DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetrics {
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetricsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetricsToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetricsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_metric_name - computed: true, optional: false, required: false
  public get alarmMetricName() {
    return this.getStringAttribute('alarm_metric_name');
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetricsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetricsOutputReference {
    return new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcesses {
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcesses): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcesses): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcesses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcesses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_metrics - computed: true, optional: false, required: false
  private _alarmMetrics = new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetricsList(this, "alarm_metrics", false);
  public get alarmMetrics() {
    return this._alarmMetrics;
  }

  // process_name - computed: true, optional: false, required: false
  public get processName() {
    return this.getStringAttribute('process_name');
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesOutputReference {
    return new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsSqlServerPrometheusExporter {
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsSqlServerPrometheusExporterToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsSqlServerPrometheusExporter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsSqlServerPrometheusExporterToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsSqlServerPrometheusExporter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsSqlServerPrometheusExporterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsSqlServerPrometheusExporter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsSqlServerPrometheusExporter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prometheus_port - computed: true, optional: false, required: false
  public get prometheusPort() {
    return this.getStringAttribute('prometheus_port');
  }

  // sql_secret_name - computed: true, optional: false, required: false
  public get sqlSecretName() {
    return this.getStringAttribute('sql_secret_name');
  }
}
export interface DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEvents {
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEventsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEvents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEventsToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEvents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEventsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event_levels - computed: true, optional: false, required: false
  public get eventLevels() {
    return this.getListAttribute('event_levels');
  }

  // event_name - computed: true, optional: false, required: false
  public get eventName() {
    return this.getStringAttribute('event_name');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // pattern_set - computed: true, optional: false, required: false
  public get patternSet() {
    return this.getStringAttribute('pattern_set');
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEventsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEventsOutputReference {
    return new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetails {
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_metrics - computed: true, optional: false, required: false
  private _alarmMetrics = new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetricsList(this, "alarm_metrics", false);
  public get alarmMetrics() {
    return this._alarmMetrics;
  }

  // alarms - computed: true, optional: false, required: false
  private _alarms = new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmsList(this, "alarms", false);
  public get alarms() {
    return this._alarms;
  }

  // ha_cluster_prometheus_exporter - computed: true, optional: false, required: false
  private _haClusterPrometheusExporter = new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHaClusterPrometheusExporterOutputReference(this, "ha_cluster_prometheus_exporter");
  public get haClusterPrometheusExporter() {
    return this._haClusterPrometheusExporter;
  }

  // hana_prometheus_exporter - computed: true, optional: false, required: false
  private _hanaPrometheusExporter = new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHanaPrometheusExporterOutputReference(this, "hana_prometheus_exporter");
  public get hanaPrometheusExporter() {
    return this._hanaPrometheusExporter;
  }

  // jmx_prometheus_exporter - computed: true, optional: false, required: false
  private _jmxPrometheusExporter = new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporterOutputReference(this, "jmx_prometheus_exporter");
  public get jmxPrometheusExporter() {
    return this._jmxPrometheusExporter;
  }

  // logs - computed: true, optional: false, required: false
  private _logs = new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogsList(this, "logs", false);
  public get logs() {
    return this._logs;
  }

  // net_weaver_prometheus_exporter - computed: true, optional: false, required: false
  private _netWeaverPrometheusExporter = new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporterOutputReference(this, "net_weaver_prometheus_exporter");
  public get netWeaverPrometheusExporter() {
    return this._netWeaverPrometheusExporter;
  }

  // processes - computed: true, optional: false, required: false
  private _processes = new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesList(this, "processes", false);
  public get processes() {
    return this._processes;
  }

  // sql_server_prometheus_exporter - computed: true, optional: false, required: false
  private _sqlServerPrometheusExporter = new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsSqlServerPrometheusExporterOutputReference(this, "sql_server_prometheus_exporter");
  public get sqlServerPrometheusExporter() {
    return this._sqlServerPrometheusExporter;
  }

  // windows_events - computed: true, optional: false, required: false
  private _windowsEvents = new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEventsList(this, "windows_events", false);
  public get windowsEvents() {
    return this._windowsEvents;
  }
}
export interface DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics {
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_metric_name - computed: true, optional: false, required: false
  public get alarmMetricName() {
    return this.getStringAttribute('alarm_metric_name');
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsOutputReference {
    return new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs {
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encoding - computed: true, optional: false, required: false
  public get encoding() {
    return this.getStringAttribute('encoding');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_path - computed: true, optional: false, required: false
  public get logPath() {
    return this.getStringAttribute('log_path');
  }

  // log_type - computed: true, optional: false, required: false
  public get logType() {
    return this.getStringAttribute('log_type');
  }

  // pattern_set - computed: true, optional: false, required: false
  public get patternSet() {
    return this.getStringAttribute('pattern_set');
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsOutputReference {
    return new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetrics {
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_metric_name - computed: true, optional: false, required: false
  public get alarmMetricName() {
    return this.getStringAttribute('alarm_metric_name');
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsOutputReference {
    return new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcesses {
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcesses): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcesses): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcesses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcesses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_metrics - computed: true, optional: false, required: false
  private _alarmMetrics = new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsList(this, "alarm_metrics", false);
  public get alarmMetrics() {
    return this._alarmMetrics;
  }

  // process_name - computed: true, optional: false, required: false
  public get processName() {
    return this.getStringAttribute('process_name');
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesOutputReference {
    return new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents {
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event_levels - computed: true, optional: false, required: false
  public get eventLevels() {
    return this.getListAttribute('event_levels');
  }

  // event_name - computed: true, optional: false, required: false
  public get eventName() {
    return this.getStringAttribute('event_name');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // pattern_set - computed: true, optional: false, required: false
  public get patternSet() {
    return this.getStringAttribute('pattern_set');
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsOutputReference {
    return new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails {
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_metrics - computed: true, optional: false, required: false
  private _alarmMetrics = new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsList(this, "alarm_metrics", false);
  public get alarmMetrics() {
    return this._alarmMetrics;
  }

  // logs - computed: true, optional: false, required: false
  private _logs = new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsList(this, "logs", false);
  public get logs() {
    return this._logs;
  }

  // processes - computed: true, optional: false, required: false
  private _processes = new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesList(this, "processes", false);
  public get processes() {
    return this._processes;
  }

  // windows_events - computed: true, optional: false, required: false
  private _windowsEvents = new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsList(this, "windows_events", false);
  public get windowsEvents() {
    return this._windowsEvents;
  }
}
export interface DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurations {
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sub_component_configuration_details - computed: true, optional: false, required: false
  private _subComponentConfigurationDetails = new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsOutputReference(this, "sub_component_configuration_details");
  public get subComponentConfigurationDetails() {
    return this._subComponentConfigurationDetails;
  }

  // sub_component_type - computed: true, optional: false, required: false
  public get subComponentType() {
    return this.getStringAttribute('sub_component_type');
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsOutputReference {
    return new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfiguration {
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // configuration_details - computed: true, optional: false, required: false
  private _configurationDetails = new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsOutputReference(this, "configuration_details");
  public get configurationDetails() {
    return this._configurationDetails;
  }

  // sub_component_type_configurations - computed: true, optional: false, required: false
  private _subComponentTypeConfigurations = new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsList(this, "sub_component_type_configurations", false);
  public get subComponentTypeConfigurations() {
    return this._subComponentTypeConfigurations;
  }
}
export interface DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetrics {
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_metric_name - computed: true, optional: false, required: false
  public get alarmMetricName() {
    return this.getStringAttribute('alarm_metric_name');
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsOutputReference {
    return new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarms {
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmsToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_name - computed: true, optional: false, required: false
  public get alarmName() {
    return this.getStringAttribute('alarm_name');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmsOutputReference {
    return new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHaClusterPrometheusExporter {
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHaClusterPrometheusExporterToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHaClusterPrometheusExporter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHaClusterPrometheusExporterToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHaClusterPrometheusExporter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHaClusterPrometheusExporterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHaClusterPrometheusExporter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHaClusterPrometheusExporter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prometheus_port - computed: true, optional: false, required: false
  public get prometheusPort() {
    return this.getStringAttribute('prometheus_port');
  }
}
export interface DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHanaPrometheusExporter {
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHanaPrometheusExporterToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHanaPrometheusExporter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHanaPrometheusExporterToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHanaPrometheusExporter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHanaPrometheusExporterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHanaPrometheusExporter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHanaPrometheusExporter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agree_to_install_hanadb_client - computed: true, optional: false, required: false
  public get agreeToInstallHanadbClient() {
    return this.getBooleanAttribute('agree_to_install_hanadb_client');
  }

  // hana_port - computed: true, optional: false, required: false
  public get hanaPort() {
    return this.getStringAttribute('hana_port');
  }

  // hana_secret_name - computed: true, optional: false, required: false
  public get hanaSecretName() {
    return this.getStringAttribute('hana_secret_name');
  }

  // hanasid - computed: true, optional: false, required: false
  public get hanasid() {
    return this.getStringAttribute('hanasid');
  }

  // prometheus_port - computed: true, optional: false, required: false
  public get prometheusPort() {
    return this.getStringAttribute('prometheus_port');
  }
}
export interface DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporter {
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporterToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporterToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host_port - computed: true, optional: false, required: false
  public get hostPort() {
    return this.getStringAttribute('host_port');
  }

  // jmxurl - computed: true, optional: false, required: false
  public get jmxurl() {
    return this.getStringAttribute('jmxurl');
  }

  // prometheus_port - computed: true, optional: false, required: false
  public get prometheusPort() {
    return this.getStringAttribute('prometheus_port');
  }
}
export interface DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogs {
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encoding - computed: true, optional: false, required: false
  public get encoding() {
    return this.getStringAttribute('encoding');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_path - computed: true, optional: false, required: false
  public get logPath() {
    return this.getStringAttribute('log_path');
  }

  // log_type - computed: true, optional: false, required: false
  public get logType() {
    return this.getStringAttribute('log_type');
  }

  // pattern_set - computed: true, optional: false, required: false
  public get patternSet() {
    return this.getStringAttribute('pattern_set');
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsOutputReference {
    return new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporter {
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporterToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporterToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_numbers - computed: true, optional: false, required: false
  public get instanceNumbers() {
    return this.getListAttribute('instance_numbers');
  }

  // prometheus_port - computed: true, optional: false, required: false
  public get prometheusPort() {
    return this.getStringAttribute('prometheus_port');
  }

  // sapsid - computed: true, optional: false, required: false
  public get sapsid() {
    return this.getStringAttribute('sapsid');
  }
}
export interface DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetrics {
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetricsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetricsToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetricsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_metric_name - computed: true, optional: false, required: false
  public get alarmMetricName() {
    return this.getStringAttribute('alarm_metric_name');
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetricsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetricsOutputReference {
    return new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcesses {
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcesses): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcesses): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcesses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcesses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_metrics - computed: true, optional: false, required: false
  private _alarmMetrics = new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetricsList(this, "alarm_metrics", false);
  public get alarmMetrics() {
    return this._alarmMetrics;
  }

  // process_name - computed: true, optional: false, required: false
  public get processName() {
    return this.getStringAttribute('process_name');
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesOutputReference {
    return new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsSqlServerPrometheusExporter {
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsSqlServerPrometheusExporterToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsSqlServerPrometheusExporter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsSqlServerPrometheusExporterToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsSqlServerPrometheusExporter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsSqlServerPrometheusExporterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsSqlServerPrometheusExporter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsSqlServerPrometheusExporter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prometheus_port - computed: true, optional: false, required: false
  public get prometheusPort() {
    return this.getStringAttribute('prometheus_port');
  }

  // sql_secret_name - computed: true, optional: false, required: false
  public get sqlSecretName() {
    return this.getStringAttribute('sql_secret_name');
  }
}
export interface DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEvents {
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEvents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEvents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event_levels - computed: true, optional: false, required: false
  public get eventLevels() {
    return this.getListAttribute('event_levels');
  }

  // event_name - computed: true, optional: false, required: false
  public get eventName() {
    return this.getStringAttribute('event_name');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // pattern_set - computed: true, optional: false, required: false
  public get patternSet() {
    return this.getStringAttribute('pattern_set');
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsOutputReference {
    return new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetails {
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_metrics - computed: true, optional: false, required: false
  private _alarmMetrics = new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsList(this, "alarm_metrics", false);
  public get alarmMetrics() {
    return this._alarmMetrics;
  }

  // alarms - computed: true, optional: false, required: false
  private _alarms = new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmsList(this, "alarms", false);
  public get alarms() {
    return this._alarms;
  }

  // ha_cluster_prometheus_exporter - computed: true, optional: false, required: false
  private _haClusterPrometheusExporter = new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHaClusterPrometheusExporterOutputReference(this, "ha_cluster_prometheus_exporter");
  public get haClusterPrometheusExporter() {
    return this._haClusterPrometheusExporter;
  }

  // hana_prometheus_exporter - computed: true, optional: false, required: false
  private _hanaPrometheusExporter = new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHanaPrometheusExporterOutputReference(this, "hana_prometheus_exporter");
  public get hanaPrometheusExporter() {
    return this._hanaPrometheusExporter;
  }

  // jmx_prometheus_exporter - computed: true, optional: false, required: false
  private _jmxPrometheusExporter = new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporterOutputReference(this, "jmx_prometheus_exporter");
  public get jmxPrometheusExporter() {
    return this._jmxPrometheusExporter;
  }

  // logs - computed: true, optional: false, required: false
  private _logs = new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsList(this, "logs", false);
  public get logs() {
    return this._logs;
  }

  // net_weaver_prometheus_exporter - computed: true, optional: false, required: false
  private _netWeaverPrometheusExporter = new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporterOutputReference(this, "net_weaver_prometheus_exporter");
  public get netWeaverPrometheusExporter() {
    return this._netWeaverPrometheusExporter;
  }

  // processes - computed: true, optional: false, required: false
  private _processes = new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesList(this, "processes", false);
  public get processes() {
    return this._processes;
  }

  // sql_server_prometheus_exporter - computed: true, optional: false, required: false
  private _sqlServerPrometheusExporter = new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsSqlServerPrometheusExporterOutputReference(this, "sql_server_prometheus_exporter");
  public get sqlServerPrometheusExporter() {
    return this._sqlServerPrometheusExporter;
  }

  // windows_events - computed: true, optional: false, required: false
  private _windowsEvents = new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsList(this, "windows_events", false);
  public get windowsEvents() {
    return this._windowsEvents;
  }
}
export interface DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics {
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_metric_name - computed: true, optional: false, required: false
  public get alarmMetricName() {
    return this.getStringAttribute('alarm_metric_name');
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsOutputReference {
    return new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs {
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encoding - computed: true, optional: false, required: false
  public get encoding() {
    return this.getStringAttribute('encoding');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_path - computed: true, optional: false, required: false
  public get logPath() {
    return this.getStringAttribute('log_path');
  }

  // log_type - computed: true, optional: false, required: false
  public get logType() {
    return this.getStringAttribute('log_type');
  }

  // pattern_set - computed: true, optional: false, required: false
  public get patternSet() {
    return this.getStringAttribute('pattern_set');
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsOutputReference {
    return new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetrics {
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_metric_name - computed: true, optional: false, required: false
  public get alarmMetricName() {
    return this.getStringAttribute('alarm_metric_name');
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsOutputReference {
    return new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcesses {
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcesses): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcesses): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcesses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcesses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_metrics - computed: true, optional: false, required: false
  private _alarmMetrics = new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsList(this, "alarm_metrics", false);
  public get alarmMetrics() {
    return this._alarmMetrics;
  }

  // process_name - computed: true, optional: false, required: false
  public get processName() {
    return this.getStringAttribute('process_name');
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesOutputReference {
    return new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents {
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event_levels - computed: true, optional: false, required: false
  public get eventLevels() {
    return this.getListAttribute('event_levels');
  }

  // event_name - computed: true, optional: false, required: false
  public get eventName() {
    return this.getStringAttribute('event_name');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // pattern_set - computed: true, optional: false, required: false
  public get patternSet() {
    return this.getStringAttribute('pattern_set');
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsOutputReference {
    return new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails {
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_metrics - computed: true, optional: false, required: false
  private _alarmMetrics = new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsList(this, "alarm_metrics", false);
  public get alarmMetrics() {
    return this._alarmMetrics;
  }

  // logs - computed: true, optional: false, required: false
  private _logs = new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsList(this, "logs", false);
  public get logs() {
    return this._logs;
  }

  // processes - computed: true, optional: false, required: false
  private _processes = new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesList(this, "processes", false);
  public get processes() {
    return this._processes;
  }

  // windows_events - computed: true, optional: false, required: false
  private _windowsEvents = new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsList(this, "windows_events", false);
  public get windowsEvents() {
    return this._windowsEvents;
  }
}
export interface DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurations {
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sub_component_configuration_details - computed: true, optional: false, required: false
  private _subComponentConfigurationDetails = new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsOutputReference(this, "sub_component_configuration_details");
  public get subComponentConfigurationDetails() {
    return this._subComponentConfigurationDetails;
  }

  // sub_component_type - computed: true, optional: false, required: false
  public get subComponentType() {
    return this.getStringAttribute('sub_component_type');
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsOutputReference {
    return new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfiguration {
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // configuration_details - computed: true, optional: false, required: false
  private _configurationDetails = new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsOutputReference(this, "configuration_details");
  public get configurationDetails() {
    return this._configurationDetails;
  }

  // sub_component_type_configurations - computed: true, optional: false, required: false
  private _subComponentTypeConfigurations = new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsList(this, "sub_component_type_configurations", false);
  public get subComponentTypeConfigurations() {
    return this._subComponentTypeConfigurations;
  }
}
export interface DataAwsccApplicationinsightsApplicationComponentMonitoringSettings {
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationinsightsApplicationComponentMonitoringSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationComponentMonitoringSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // component_arn - computed: true, optional: false, required: false
  public get componentArn() {
    return this.getStringAttribute('component_arn');
  }

  // component_configuration_mode - computed: true, optional: false, required: false
  public get componentConfigurationMode() {
    return this.getStringAttribute('component_configuration_mode');
  }

  // component_name - computed: true, optional: false, required: false
  public get componentName() {
    return this.getStringAttribute('component_name');
  }

  // custom_component_configuration - computed: true, optional: false, required: false
  private _customComponentConfiguration = new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationOutputReference(this, "custom_component_configuration");
  public get customComponentConfiguration() {
    return this._customComponentConfiguration;
  }

  // default_overwrite_component_configuration - computed: true, optional: false, required: false
  private _defaultOverwriteComponentConfiguration = new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationOutputReference(this, "default_overwrite_component_configuration");
  public get defaultOverwriteComponentConfiguration() {
    return this._defaultOverwriteComponentConfiguration;
  }

  // tier - computed: true, optional: false, required: false
  public get tier() {
    return this.getStringAttribute('tier');
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsOutputReference {
    return new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApplicationinsightsApplicationCustomComponents {
}

export function dataAwsccApplicationinsightsApplicationCustomComponentsToTerraform(struct?: DataAwsccApplicationinsightsApplicationCustomComponents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationCustomComponentsToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationCustomComponents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationCustomComponentsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationinsightsApplicationCustomComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationCustomComponents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // component_name - computed: true, optional: false, required: false
  public get componentName() {
    return this.getStringAttribute('component_name');
  }

  // resource_list - computed: true, optional: false, required: false
  public get resourceList() {
    return this.getListAttribute('resource_list');
  }
}

export class DataAwsccApplicationinsightsApplicationCustomComponentsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationinsightsApplicationCustomComponentsOutputReference {
    return new DataAwsccApplicationinsightsApplicationCustomComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApplicationinsightsApplicationLogPatternSetsLogPatterns {
}

export function dataAwsccApplicationinsightsApplicationLogPatternSetsLogPatternsToTerraform(struct?: DataAwsccApplicationinsightsApplicationLogPatternSetsLogPatterns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationLogPatternSetsLogPatternsToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationLogPatternSetsLogPatterns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationLogPatternSetsLogPatternsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationinsightsApplicationLogPatternSetsLogPatterns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationLogPatternSetsLogPatterns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pattern - computed: true, optional: false, required: false
  public get pattern() {
    return this.getStringAttribute('pattern');
  }

  // pattern_name - computed: true, optional: false, required: false
  public get patternName() {
    return this.getStringAttribute('pattern_name');
  }

  // rank - computed: true, optional: false, required: false
  public get rank() {
    return this.getNumberAttribute('rank');
  }
}

export class DataAwsccApplicationinsightsApplicationLogPatternSetsLogPatternsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationinsightsApplicationLogPatternSetsLogPatternsOutputReference {
    return new DataAwsccApplicationinsightsApplicationLogPatternSetsLogPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApplicationinsightsApplicationLogPatternSets {
}

export function dataAwsccApplicationinsightsApplicationLogPatternSetsToTerraform(struct?: DataAwsccApplicationinsightsApplicationLogPatternSets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationLogPatternSetsToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationLogPatternSets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationLogPatternSetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationinsightsApplicationLogPatternSets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationLogPatternSets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_patterns - computed: true, optional: false, required: false
  private _logPatterns = new DataAwsccApplicationinsightsApplicationLogPatternSetsLogPatternsList(this, "log_patterns", false);
  public get logPatterns() {
    return this._logPatterns;
  }

  // pattern_set_name - computed: true, optional: false, required: false
  public get patternSetName() {
    return this.getStringAttribute('pattern_set_name');
  }
}

export class DataAwsccApplicationinsightsApplicationLogPatternSetsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationinsightsApplicationLogPatternSetsOutputReference {
    return new DataAwsccApplicationinsightsApplicationLogPatternSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApplicationinsightsApplicationTags {
}

export function dataAwsccApplicationinsightsApplicationTagsToTerraform(struct?: DataAwsccApplicationinsightsApplicationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationinsightsApplicationTagsToHclTerraform(struct?: DataAwsccApplicationinsightsApplicationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationinsightsApplicationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationinsightsApplicationTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationinsightsApplicationTags | undefined) {
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

export class DataAwsccApplicationinsightsApplicationTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationinsightsApplicationTagsOutputReference {
    return new DataAwsccApplicationinsightsApplicationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/applicationinsights_application awscc_applicationinsights_application}
*/
export class DataAwsccApplicationinsightsApplication extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_applicationinsights_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccApplicationinsightsApplication resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccApplicationinsightsApplication to import
  * @param importFromId The id of the existing DataAwsccApplicationinsightsApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/applicationinsights_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccApplicationinsightsApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_applicationinsights_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/applicationinsights_application awscc_applicationinsights_application} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccApplicationinsightsApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccApplicationinsightsApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_applicationinsights_application',
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

  // application_arn - computed: true, optional: false, required: false
  public get applicationArn() {
    return this.getStringAttribute('application_arn');
  }

  // attach_missing_permission - computed: true, optional: false, required: false
  public get attachMissingPermission() {
    return this.getBooleanAttribute('attach_missing_permission');
  }

  // auto_configuration_enabled - computed: true, optional: false, required: false
  public get autoConfigurationEnabled() {
    return this.getBooleanAttribute('auto_configuration_enabled');
  }

  // component_monitoring_settings - computed: true, optional: false, required: false
  private _componentMonitoringSettings = new DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsList(this, "component_monitoring_settings", false);
  public get componentMonitoringSettings() {
    return this._componentMonitoringSettings;
  }

  // custom_components - computed: true, optional: false, required: false
  private _customComponents = new DataAwsccApplicationinsightsApplicationCustomComponentsList(this, "custom_components", false);
  public get customComponents() {
    return this._customComponents;
  }

  // cwe_monitor_enabled - computed: true, optional: false, required: false
  public get cweMonitorEnabled() {
    return this.getBooleanAttribute('cwe_monitor_enabled');
  }

  // grouping_type - computed: true, optional: false, required: false
  public get groupingType() {
    return this.getStringAttribute('grouping_type');
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

  // log_pattern_sets - computed: true, optional: false, required: false
  private _logPatternSets = new DataAwsccApplicationinsightsApplicationLogPatternSetsList(this, "log_pattern_sets", false);
  public get logPatternSets() {
    return this._logPatternSets;
  }

  // ops_center_enabled - computed: true, optional: false, required: false
  public get opsCenterEnabled() {
    return this.getBooleanAttribute('ops_center_enabled');
  }

  // ops_item_sns_topic_arn - computed: true, optional: false, required: false
  public get opsItemSnsTopicArn() {
    return this.getStringAttribute('ops_item_sns_topic_arn');
  }

  // resource_group_name - computed: true, optional: false, required: false
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }

  // sns_notification_arn - computed: true, optional: false, required: false
  public get snsNotificationArn() {
    return this.getStringAttribute('sns_notification_arn');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccApplicationinsightsApplicationTagsList(this, "tags", false);
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
