// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ApplicationinsightsApplicationConfig extends cdktn.TerraformMetaArguments {
  /**
  * If set to true, the managed policies for SSM and CW will be attached to the instance roles if they are missing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#attach_missing_permission ApplicationinsightsApplication#attach_missing_permission}
  */
  readonly attachMissingPermission?: boolean | cdktn.IResolvable;
  /**
  * If set to true, application will be configured with recommended monitoring configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#auto_configuration_enabled ApplicationinsightsApplication#auto_configuration_enabled}
  */
  readonly autoConfigurationEnabled?: boolean | cdktn.IResolvable;
  /**
  * The monitoring settings of the components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#component_monitoring_settings ApplicationinsightsApplication#component_monitoring_settings}
  */
  readonly componentMonitoringSettings?: ApplicationinsightsApplicationComponentMonitoringSettings[] | cdktn.IResolvable;
  /**
  * The custom grouped components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#custom_components ApplicationinsightsApplication#custom_components}
  */
  readonly customComponents?: ApplicationinsightsApplicationCustomComponents[] | cdktn.IResolvable;
  /**
  * Indicates whether Application Insights can listen to CloudWatch events for the application resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#cwe_monitor_enabled ApplicationinsightsApplication#cwe_monitor_enabled}
  */
  readonly cweMonitorEnabled?: boolean | cdktn.IResolvable;
  /**
  * The grouping type of the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#grouping_type ApplicationinsightsApplication#grouping_type}
  */
  readonly groupingType?: string;
  /**
  * The log pattern sets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#log_pattern_sets ApplicationinsightsApplication#log_pattern_sets}
  */
  readonly logPatternSets?: ApplicationinsightsApplicationLogPatternSets[] | cdktn.IResolvable;
  /**
  * When set to true, creates opsItems for any problems detected on an application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#ops_center_enabled ApplicationinsightsApplication#ops_center_enabled}
  */
  readonly opsCenterEnabled?: boolean | cdktn.IResolvable;
  /**
  * The SNS topic provided to Application Insights that is associated to the created opsItem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#ops_item_sns_topic_arn ApplicationinsightsApplication#ops_item_sns_topic_arn}
  */
  readonly opsItemSnsTopicArn?: string;
  /**
  * The name of the resource group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#resource_group_name ApplicationinsightsApplication#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Application Insights sends notifications to this SNS topic whenever there is a problem update in the associated application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#sns_notification_arn ApplicationinsightsApplication#sns_notification_arn}
  */
  readonly snsNotificationArn?: string;
  /**
  * The tags of Application Insights application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#tags ApplicationinsightsApplication#tags}
  */
  readonly tags?: ApplicationinsightsApplicationTags[] | cdktn.IResolvable;
}
export interface ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetrics {
  /**
  * The name of the metric to be monitored for the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#alarm_metric_name ApplicationinsightsApplication#alarm_metric_name}
  */
  readonly alarmMetricName?: string;
}

export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetricsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alarm_metric_name: cdktn.stringToTerraform(struct!.alarmMetricName),
  }
}


export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetricsToHclTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alarm_metric_name: {
      value: cdktn.stringToHclTerraform(struct!.alarmMetricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetricsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetrics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmMetricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmMetricName = this._alarmMetricName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetrics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmMetricName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarmMetricName = value.alarmMetricName;
    }
  }

  // alarm_metric_name - computed: true, optional: true, required: false
  private _alarmMetricName?: string; 
  public get alarmMetricName() {
    return this.getStringAttribute('alarm_metric_name');
  }
  public set alarmMetricName(value: string) {
    this._alarmMetricName = value;
  }
  public resetAlarmMetricName() {
    this._alarmMetricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmMetricNameInput() {
    return this._alarmMetricName;
  }
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetricsList extends cdktn.ComplexList {
  public internalValue? : ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetrics[] | cdktn.IResolvable

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
  public get(index: number): ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetricsOutputReference {
    return new ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarms {
  /**
  * The name of the CloudWatch alarm to be monitored for the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#alarm_name ApplicationinsightsApplication#alarm_name}
  */
  readonly alarmName?: string;
  /**
  * Indicates the degree of outage when the alarm goes off.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#severity ApplicationinsightsApplication#severity}
  */
  readonly severity?: string;
}

export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alarm_name: cdktn.stringToTerraform(struct!.alarmName),
    severity: cdktn.stringToTerraform(struct!.severity),
  }
}


export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmsToHclTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alarm_name: {
      value: cdktn.stringToHclTerraform(struct!.alarmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktn.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarms | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmName = this._alarmName;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarms | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmName = undefined;
      this._severity = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarmName = value.alarmName;
      this._severity = value.severity;
    }
  }

  // alarm_name - computed: true, optional: true, required: false
  private _alarmName?: string; 
  public get alarmName() {
    return this.getStringAttribute('alarm_name');
  }
  public set alarmName(value: string) {
    this._alarmName = value;
  }
  public resetAlarmName() {
    this._alarmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmNameInput() {
    return this._alarmName;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmsList extends cdktn.ComplexList {
  public internalValue? : ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarms[] | cdktn.IResolvable

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
  public get(index: number): ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmsOutputReference {
    return new ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHaClusterPrometheusExporter {
  /**
  * Prometheus exporter port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#prometheus_port ApplicationinsightsApplication#prometheus_port}
  */
  readonly prometheusPort?: string;
}

export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHaClusterPrometheusExporterToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHaClusterPrometheusExporter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    prometheus_port: cdktn.stringToTerraform(struct!.prometheusPort),
  }
}


export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHaClusterPrometheusExporterToHclTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHaClusterPrometheusExporter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    prometheus_port: {
      value: cdktn.stringToHclTerraform(struct!.prometheusPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHaClusterPrometheusExporterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHaClusterPrometheusExporter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prometheusPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheusPort = this._prometheusPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHaClusterPrometheusExporter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prometheusPort = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prometheusPort = value.prometheusPort;
    }
  }

  // prometheus_port - computed: true, optional: true, required: false
  private _prometheusPort?: string; 
  public get prometheusPort() {
    return this.getStringAttribute('prometheus_port');
  }
  public set prometheusPort(value: string) {
    this._prometheusPort = value;
  }
  public resetPrometheusPort() {
    this._prometheusPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusPortInput() {
    return this._prometheusPort;
  }
}
export interface ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHanaPrometheusExporter {
  /**
  * A flag which indicates agreeing to install SAP HANA DB client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#agree_to_install_hanadb_client ApplicationinsightsApplication#agree_to_install_hanadb_client}
  */
  readonly agreeToInstallHanadbClient?: boolean | cdktn.IResolvable;
  /**
  * The HANA DB port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#hana_port ApplicationinsightsApplication#hana_port}
  */
  readonly hanaPort?: string;
  /**
  * The secret name which manages the HANA DB credentials e.g. {
  *   "username": "<>",
  *   "password": "<>"
  * }.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#hana_secret_name ApplicationinsightsApplication#hana_secret_name}
  */
  readonly hanaSecretName?: string;
  /**
  * HANA DB SID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#hanasid ApplicationinsightsApplication#hanasid}
  */
  readonly hanasid?: string;
  /**
  * Prometheus exporter port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#prometheus_port ApplicationinsightsApplication#prometheus_port}
  */
  readonly prometheusPort?: string;
}

export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHanaPrometheusExporterToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHanaPrometheusExporter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agree_to_install_hanadb_client: cdktn.booleanToTerraform(struct!.agreeToInstallHanadbClient),
    hana_port: cdktn.stringToTerraform(struct!.hanaPort),
    hana_secret_name: cdktn.stringToTerraform(struct!.hanaSecretName),
    hanasid: cdktn.stringToTerraform(struct!.hanasid),
    prometheus_port: cdktn.stringToTerraform(struct!.prometheusPort),
  }
}


export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHanaPrometheusExporterToHclTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHanaPrometheusExporter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    agree_to_install_hanadb_client: {
      value: cdktn.booleanToHclTerraform(struct!.agreeToInstallHanadbClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hana_port: {
      value: cdktn.stringToHclTerraform(struct!.hanaPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hana_secret_name: {
      value: cdktn.stringToHclTerraform(struct!.hanaSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hanasid: {
      value: cdktn.stringToHclTerraform(struct!.hanasid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prometheus_port: {
      value: cdktn.stringToHclTerraform(struct!.prometheusPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHanaPrometheusExporterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHanaPrometheusExporter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agreeToInstallHanadbClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.agreeToInstallHanadbClient = this._agreeToInstallHanadbClient;
    }
    if (this._hanaPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.hanaPort = this._hanaPort;
    }
    if (this._hanaSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hanaSecretName = this._hanaSecretName;
    }
    if (this._hanasid !== undefined) {
      hasAnyValues = true;
      internalValueResult.hanasid = this._hanasid;
    }
    if (this._prometheusPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheusPort = this._prometheusPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHanaPrometheusExporter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agreeToInstallHanadbClient = undefined;
      this._hanaPort = undefined;
      this._hanaSecretName = undefined;
      this._hanasid = undefined;
      this._prometheusPort = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agreeToInstallHanadbClient = value.agreeToInstallHanadbClient;
      this._hanaPort = value.hanaPort;
      this._hanaSecretName = value.hanaSecretName;
      this._hanasid = value.hanasid;
      this._prometheusPort = value.prometheusPort;
    }
  }

  // agree_to_install_hanadb_client - computed: true, optional: true, required: false
  private _agreeToInstallHanadbClient?: boolean | cdktn.IResolvable; 
  public get agreeToInstallHanadbClient() {
    return this.getBooleanAttribute('agree_to_install_hanadb_client');
  }
  public set agreeToInstallHanadbClient(value: boolean | cdktn.IResolvable) {
    this._agreeToInstallHanadbClient = value;
  }
  public resetAgreeToInstallHanadbClient() {
    this._agreeToInstallHanadbClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agreeToInstallHanadbClientInput() {
    return this._agreeToInstallHanadbClient;
  }

  // hana_port - computed: true, optional: true, required: false
  private _hanaPort?: string; 
  public get hanaPort() {
    return this.getStringAttribute('hana_port');
  }
  public set hanaPort(value: string) {
    this._hanaPort = value;
  }
  public resetHanaPort() {
    this._hanaPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hanaPortInput() {
    return this._hanaPort;
  }

  // hana_secret_name - computed: true, optional: true, required: false
  private _hanaSecretName?: string; 
  public get hanaSecretName() {
    return this.getStringAttribute('hana_secret_name');
  }
  public set hanaSecretName(value: string) {
    this._hanaSecretName = value;
  }
  public resetHanaSecretName() {
    this._hanaSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hanaSecretNameInput() {
    return this._hanaSecretName;
  }

  // hanasid - computed: true, optional: true, required: false
  private _hanasid?: string; 
  public get hanasid() {
    return this.getStringAttribute('hanasid');
  }
  public set hanasid(value: string) {
    this._hanasid = value;
  }
  public resetHanasid() {
    this._hanasid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hanasidInput() {
    return this._hanasid;
  }

  // prometheus_port - computed: true, optional: true, required: false
  private _prometheusPort?: string; 
  public get prometheusPort() {
    return this.getStringAttribute('prometheus_port');
  }
  public set prometheusPort(value: string) {
    this._prometheusPort = value;
  }
  public resetPrometheusPort() {
    this._prometheusPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusPortInput() {
    return this._prometheusPort;
  }
}
export interface ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporter {
  /**
  * Java agent host port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#host_port ApplicationinsightsApplication#host_port}
  */
  readonly hostPort?: string;
  /**
  * JMX service URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#jmxurl ApplicationinsightsApplication#jmxurl}
  */
  readonly jmxurl?: string;
  /**
  * Prometheus exporter port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#prometheus_port ApplicationinsightsApplication#prometheus_port}
  */
  readonly prometheusPort?: string;
}

export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporterToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    host_port: cdktn.stringToTerraform(struct!.hostPort),
    jmxurl: cdktn.stringToTerraform(struct!.jmxurl),
    prometheus_port: cdktn.stringToTerraform(struct!.prometheusPort),
  }
}


export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporterToHclTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    host_port: {
      value: cdktn.stringToHclTerraform(struct!.hostPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jmxurl: {
      value: cdktn.stringToHclTerraform(struct!.jmxurl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prometheus_port: {
      value: cdktn.stringToHclTerraform(struct!.prometheusPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPort = this._hostPort;
    }
    if (this._jmxurl !== undefined) {
      hasAnyValues = true;
      internalValueResult.jmxurl = this._jmxurl;
    }
    if (this._prometheusPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheusPort = this._prometheusPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostPort = undefined;
      this._jmxurl = undefined;
      this._prometheusPort = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostPort = value.hostPort;
      this._jmxurl = value.jmxurl;
      this._prometheusPort = value.prometheusPort;
    }
  }

  // host_port - computed: true, optional: true, required: false
  private _hostPort?: string; 
  public get hostPort() {
    return this.getStringAttribute('host_port');
  }
  public set hostPort(value: string) {
    this._hostPort = value;
  }
  public resetHostPort() {
    this._hostPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPortInput() {
    return this._hostPort;
  }

  // jmxurl - computed: true, optional: true, required: false
  private _jmxurl?: string; 
  public get jmxurl() {
    return this.getStringAttribute('jmxurl');
  }
  public set jmxurl(value: string) {
    this._jmxurl = value;
  }
  public resetJmxurl() {
    this._jmxurl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jmxurlInput() {
    return this._jmxurl;
  }

  // prometheus_port - computed: true, optional: true, required: false
  private _prometheusPort?: string; 
  public get prometheusPort() {
    return this.getStringAttribute('prometheus_port');
  }
  public set prometheusPort(value: string) {
    this._prometheusPort = value;
  }
  public resetPrometheusPort() {
    this._prometheusPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusPortInput() {
    return this._prometheusPort;
  }
}
export interface ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogs {
  /**
  * The type of encoding of the logs to be monitored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#encoding ApplicationinsightsApplication#encoding}
  */
  readonly encoding?: string;
  /**
  * The CloudWatch log group name to be associated to the monitored log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#log_group_name ApplicationinsightsApplication#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * The path of the logs to be monitored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#log_path ApplicationinsightsApplication#log_path}
  */
  readonly logPath?: string;
  /**
  * The log type decides the log patterns against which Application Insights analyzes the log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#log_type ApplicationinsightsApplication#log_type}
  */
  readonly logType?: string;
  /**
  * The name of the log pattern set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#pattern_set ApplicationinsightsApplication#pattern_set}
  */
  readonly patternSet?: string;
}

export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encoding: cdktn.stringToTerraform(struct!.encoding),
    log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
    log_path: cdktn.stringToTerraform(struct!.logPath),
    log_type: cdktn.stringToTerraform(struct!.logType),
    pattern_set: cdktn.stringToTerraform(struct!.patternSet),
  }
}


export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogsToHclTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encoding: {
      value: cdktn.stringToHclTerraform(struct!.encoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_group_name: {
      value: cdktn.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_path: {
      value: cdktn.stringToHclTerraform(struct!.logPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_type: {
      value: cdktn.stringToHclTerraform(struct!.logType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern_set: {
      value: cdktn.stringToHclTerraform(struct!.patternSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.logPath = this._logPath;
    }
    if (this._logType !== undefined) {
      hasAnyValues = true;
      internalValueResult.logType = this._logType;
    }
    if (this._patternSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternSet = this._patternSet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encoding = undefined;
      this._logGroupName = undefined;
      this._logPath = undefined;
      this._logType = undefined;
      this._patternSet = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encoding = value.encoding;
      this._logGroupName = value.logGroupName;
      this._logPath = value.logPath;
      this._logType = value.logType;
      this._patternSet = value.patternSet;
    }
  }

  // encoding - computed: true, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }

  // log_group_name - computed: true, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_path - computed: true, optional: true, required: false
  private _logPath?: string; 
  public get logPath() {
    return this.getStringAttribute('log_path');
  }
  public set logPath(value: string) {
    this._logPath = value;
  }
  public resetLogPath() {
    this._logPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPathInput() {
    return this._logPath;
  }

  // log_type - computed: true, optional: true, required: false
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  public resetLogType() {
    this._logType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }

  // pattern_set - computed: true, optional: true, required: false
  private _patternSet?: string; 
  public get patternSet() {
    return this.getStringAttribute('pattern_set');
  }
  public set patternSet(value: string) {
    this._patternSet = value;
  }
  public resetPatternSet() {
    this._patternSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternSetInput() {
    return this._patternSet;
  }
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogsList extends cdktn.ComplexList {
  public internalValue? : ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogs[] | cdktn.IResolvable

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
  public get(index: number): ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogsOutputReference {
    return new ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporter {
  /**
  * SAP instance numbers for ASCS, ERS, and App Servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#instance_numbers ApplicationinsightsApplication#instance_numbers}
  */
  readonly instanceNumbers?: string[];
  /**
  * Prometheus exporter port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#prometheus_port ApplicationinsightsApplication#prometheus_port}
  */
  readonly prometheusPort?: string;
  /**
  * SAP NetWeaver SID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#sapsid ApplicationinsightsApplication#sapsid}
  */
  readonly sapsid?: string;
}

export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporterToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_numbers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.instanceNumbers),
    prometheus_port: cdktn.stringToTerraform(struct!.prometheusPort),
    sapsid: cdktn.stringToTerraform(struct!.sapsid),
  }
}


export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporterToHclTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_numbers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.instanceNumbers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prometheus_port: {
      value: cdktn.stringToHclTerraform(struct!.prometheusPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sapsid: {
      value: cdktn.stringToHclTerraform(struct!.sapsid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceNumbers = this._instanceNumbers;
    }
    if (this._prometheusPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheusPort = this._prometheusPort;
    }
    if (this._sapsid !== undefined) {
      hasAnyValues = true;
      internalValueResult.sapsid = this._sapsid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceNumbers = undefined;
      this._prometheusPort = undefined;
      this._sapsid = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceNumbers = value.instanceNumbers;
      this._prometheusPort = value.prometheusPort;
      this._sapsid = value.sapsid;
    }
  }

  // instance_numbers - computed: true, optional: true, required: false
  private _instanceNumbers?: string[]; 
  public get instanceNumbers() {
    return this.getListAttribute('instance_numbers');
  }
  public set instanceNumbers(value: string[]) {
    this._instanceNumbers = value;
  }
  public resetInstanceNumbers() {
    this._instanceNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNumbersInput() {
    return this._instanceNumbers;
  }

  // prometheus_port - computed: true, optional: true, required: false
  private _prometheusPort?: string; 
  public get prometheusPort() {
    return this.getStringAttribute('prometheus_port');
  }
  public set prometheusPort(value: string) {
    this._prometheusPort = value;
  }
  public resetPrometheusPort() {
    this._prometheusPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusPortInput() {
    return this._prometheusPort;
  }

  // sapsid - computed: true, optional: true, required: false
  private _sapsid?: string; 
  public get sapsid() {
    return this.getStringAttribute('sapsid');
  }
  public set sapsid(value: string) {
    this._sapsid = value;
  }
  public resetSapsid() {
    this._sapsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sapsidInput() {
    return this._sapsid;
  }
}
export interface ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetrics {
  /**
  * The name of the metric to be monitored for the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#alarm_metric_name ApplicationinsightsApplication#alarm_metric_name}
  */
  readonly alarmMetricName?: string;
}

export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetricsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alarm_metric_name: cdktn.stringToTerraform(struct!.alarmMetricName),
  }
}


export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetricsToHclTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alarm_metric_name: {
      value: cdktn.stringToHclTerraform(struct!.alarmMetricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetricsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetrics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmMetricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmMetricName = this._alarmMetricName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetrics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmMetricName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarmMetricName = value.alarmMetricName;
    }
  }

  // alarm_metric_name - computed: true, optional: true, required: false
  private _alarmMetricName?: string; 
  public get alarmMetricName() {
    return this.getStringAttribute('alarm_metric_name');
  }
  public set alarmMetricName(value: string) {
    this._alarmMetricName = value;
  }
  public resetAlarmMetricName() {
    this._alarmMetricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmMetricNameInput() {
    return this._alarmMetricName;
  }
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetricsList extends cdktn.ComplexList {
  public internalValue? : ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetrics[] | cdktn.IResolvable

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
  public get(index: number): ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetricsOutputReference {
    return new ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcesses {
  /**
  * A list of metrics to monitor for the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#alarm_metrics ApplicationinsightsApplication#alarm_metrics}
  */
  readonly alarmMetrics?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetrics[] | cdktn.IResolvable;
  /**
  * The name of the process to be monitored for the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#process_name ApplicationinsightsApplication#process_name}
  */
  readonly processName?: string;
}

export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcesses | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alarm_metrics: cdktn.listMapper(applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetricsToTerraform, false)(struct!.alarmMetrics),
    process_name: cdktn.stringToTerraform(struct!.processName),
  }
}


export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesToHclTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcesses | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alarm_metrics: {
      value: cdktn.listMapperHcl(applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetricsToHclTerraform, false)(struct!.alarmMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetricsList",
    },
    process_name: {
      value: cdktn.stringToHclTerraform(struct!.processName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcesses | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmMetrics = this._alarmMetrics?.internalValue;
    }
    if (this._processName !== undefined) {
      hasAnyValues = true;
      internalValueResult.processName = this._processName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcesses | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmMetrics.internalValue = undefined;
      this._processName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarmMetrics.internalValue = value.alarmMetrics;
      this._processName = value.processName;
    }
  }

  // alarm_metrics - computed: true, optional: true, required: false
  private _alarmMetrics = new ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetricsList(this, "alarm_metrics", false);
  public get alarmMetrics() {
    return this._alarmMetrics;
  }
  public putAlarmMetrics(value: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetrics[] | cdktn.IResolvable) {
    this._alarmMetrics.internalValue = value;
  }
  public resetAlarmMetrics() {
    this._alarmMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmMetricsInput() {
    return this._alarmMetrics.internalValue;
  }

  // process_name - computed: true, optional: true, required: false
  private _processName?: string; 
  public get processName() {
    return this.getStringAttribute('process_name');
  }
  public set processName(value: string) {
    this._processName = value;
  }
  public resetProcessName() {
    this._processName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processNameInput() {
    return this._processName;
  }
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesList extends cdktn.ComplexList {
  public internalValue? : ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcesses[] | cdktn.IResolvable

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
  public get(index: number): ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesOutputReference {
    return new ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsSqlServerPrometheusExporter {
  /**
  * Prometheus exporter port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#prometheus_port ApplicationinsightsApplication#prometheus_port}
  */
  readonly prometheusPort?: string;
  /**
  * Secret name which managers SQL exporter connection. e.g. {"data_source_name": "sqlserver://<USERNAME>:<PASSWORD>@localhost:1433"}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#sql_secret_name ApplicationinsightsApplication#sql_secret_name}
  */
  readonly sqlSecretName?: string;
}

export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsSqlServerPrometheusExporterToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsSqlServerPrometheusExporter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    prometheus_port: cdktn.stringToTerraform(struct!.prometheusPort),
    sql_secret_name: cdktn.stringToTerraform(struct!.sqlSecretName),
  }
}


export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsSqlServerPrometheusExporterToHclTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsSqlServerPrometheusExporter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    prometheus_port: {
      value: cdktn.stringToHclTerraform(struct!.prometheusPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql_secret_name: {
      value: cdktn.stringToHclTerraform(struct!.sqlSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsSqlServerPrometheusExporterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsSqlServerPrometheusExporter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prometheusPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheusPort = this._prometheusPort;
    }
    if (this._sqlSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlSecretName = this._sqlSecretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsSqlServerPrometheusExporter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prometheusPort = undefined;
      this._sqlSecretName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prometheusPort = value.prometheusPort;
      this._sqlSecretName = value.sqlSecretName;
    }
  }

  // prometheus_port - computed: true, optional: true, required: false
  private _prometheusPort?: string; 
  public get prometheusPort() {
    return this.getStringAttribute('prometheus_port');
  }
  public set prometheusPort(value: string) {
    this._prometheusPort = value;
  }
  public resetPrometheusPort() {
    this._prometheusPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusPortInput() {
    return this._prometheusPort;
  }

  // sql_secret_name - computed: true, optional: true, required: false
  private _sqlSecretName?: string; 
  public get sqlSecretName() {
    return this.getStringAttribute('sql_secret_name');
  }
  public set sqlSecretName(value: string) {
    this._sqlSecretName = value;
  }
  public resetSqlSecretName() {
    this._sqlSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlSecretNameInput() {
    return this._sqlSecretName;
  }
}
export interface ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEvents {
  /**
  * The levels of event to log. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#event_levels ApplicationinsightsApplication#event_levels}
  */
  readonly eventLevels?: string[];
  /**
  * The type of Windows Events to log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#event_name ApplicationinsightsApplication#event_name}
  */
  readonly eventName?: string;
  /**
  * The CloudWatch log group name to be associated to the monitored log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#log_group_name ApplicationinsightsApplication#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * The name of the log pattern set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#pattern_set ApplicationinsightsApplication#pattern_set}
  */
  readonly patternSet?: string;
}

export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEventsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEvents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_levels: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.eventLevels),
    event_name: cdktn.stringToTerraform(struct!.eventName),
    log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
    pattern_set: cdktn.stringToTerraform(struct!.patternSet),
  }
}


export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEventsToHclTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEvents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event_levels: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.eventLevels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    event_name: {
      value: cdktn.stringToHclTerraform(struct!.eventName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_group_name: {
      value: cdktn.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern_set: {
      value: cdktn.stringToHclTerraform(struct!.patternSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEventsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEvents | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventLevels !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventLevels = this._eventLevels;
    }
    if (this._eventName !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventName = this._eventName;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._patternSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternSet = this._patternSet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEvents | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventLevels = undefined;
      this._eventName = undefined;
      this._logGroupName = undefined;
      this._patternSet = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventLevels = value.eventLevels;
      this._eventName = value.eventName;
      this._logGroupName = value.logGroupName;
      this._patternSet = value.patternSet;
    }
  }

  // event_levels - computed: true, optional: true, required: false
  private _eventLevels?: string[]; 
  public get eventLevels() {
    return this.getListAttribute('event_levels');
  }
  public set eventLevels(value: string[]) {
    this._eventLevels = value;
  }
  public resetEventLevels() {
    this._eventLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventLevelsInput() {
    return this._eventLevels;
  }

  // event_name - computed: true, optional: true, required: false
  private _eventName?: string; 
  public get eventName() {
    return this.getStringAttribute('event_name');
  }
  public set eventName(value: string) {
    this._eventName = value;
  }
  public resetEventName() {
    this._eventName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventNameInput() {
    return this._eventName;
  }

  // log_group_name - computed: true, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // pattern_set - computed: true, optional: true, required: false
  private _patternSet?: string; 
  public get patternSet() {
    return this.getStringAttribute('pattern_set');
  }
  public set patternSet(value: string) {
    this._patternSet = value;
  }
  public resetPatternSet() {
    this._patternSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternSetInput() {
    return this._patternSet;
  }
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEventsList extends cdktn.ComplexList {
  public internalValue? : ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEvents[] | cdktn.IResolvable

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
  public get(index: number): ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEventsOutputReference {
    return new ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetails {
  /**
  * A list of metrics to monitor for the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#alarm_metrics ApplicationinsightsApplication#alarm_metrics}
  */
  readonly alarmMetrics?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetrics[] | cdktn.IResolvable;
  /**
  * A list of alarms to monitor for the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#alarms ApplicationinsightsApplication#alarms}
  */
  readonly alarms?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarms[] | cdktn.IResolvable;
  /**
  * The HA cluster Prometheus Exporter settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#ha_cluster_prometheus_exporter ApplicationinsightsApplication#ha_cluster_prometheus_exporter}
  */
  readonly haClusterPrometheusExporter?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHaClusterPrometheusExporter;
  /**
  * The HANA DB Prometheus Exporter settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#hana_prometheus_exporter ApplicationinsightsApplication#hana_prometheus_exporter}
  */
  readonly hanaPrometheusExporter?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHanaPrometheusExporter;
  /**
  * The JMX Prometheus Exporter settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#jmx_prometheus_exporter ApplicationinsightsApplication#jmx_prometheus_exporter}
  */
  readonly jmxPrometheusExporter?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporter;
  /**
  * A list of logs to monitor for the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#logs ApplicationinsightsApplication#logs}
  */
  readonly logs?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogs[] | cdktn.IResolvable;
  /**
  * The NetWeaver Prometheus Exporter settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#net_weaver_prometheus_exporter ApplicationinsightsApplication#net_weaver_prometheus_exporter}
  */
  readonly netWeaverPrometheusExporter?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporter;
  /**
  * A list of processes to monitor for the component. Only Windows EC2 instances can have a processes section.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#processes ApplicationinsightsApplication#processes}
  */
  readonly processes?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcesses[] | cdktn.IResolvable;
  /**
  * The SQL Prometheus Exporter settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#sql_server_prometheus_exporter ApplicationinsightsApplication#sql_server_prometheus_exporter}
  */
  readonly sqlServerPrometheusExporter?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsSqlServerPrometheusExporter;
  /**
  * A list of Windows Events to log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#windows_events ApplicationinsightsApplication#windows_events}
  */
  readonly windowsEvents?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEvents[] | cdktn.IResolvable;
}

export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alarm_metrics: cdktn.listMapper(applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetricsToTerraform, false)(struct!.alarmMetrics),
    alarms: cdktn.listMapper(applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmsToTerraform, false)(struct!.alarms),
    ha_cluster_prometheus_exporter: applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHaClusterPrometheusExporterToTerraform(struct!.haClusterPrometheusExporter),
    hana_prometheus_exporter: applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHanaPrometheusExporterToTerraform(struct!.hanaPrometheusExporter),
    jmx_prometheus_exporter: applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporterToTerraform(struct!.jmxPrometheusExporter),
    logs: cdktn.listMapper(applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogsToTerraform, false)(struct!.logs),
    net_weaver_prometheus_exporter: applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporterToTerraform(struct!.netWeaverPrometheusExporter),
    processes: cdktn.listMapper(applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesToTerraform, false)(struct!.processes),
    sql_server_prometheus_exporter: applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsSqlServerPrometheusExporterToTerraform(struct!.sqlServerPrometheusExporter),
    windows_events: cdktn.listMapper(applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEventsToTerraform, false)(struct!.windowsEvents),
  }
}


export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsToHclTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alarm_metrics: {
      value: cdktn.listMapperHcl(applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetricsToHclTerraform, false)(struct!.alarmMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetricsList",
    },
    alarms: {
      value: cdktn.listMapperHcl(applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmsToHclTerraform, false)(struct!.alarms),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmsList",
    },
    ha_cluster_prometheus_exporter: {
      value: applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHaClusterPrometheusExporterToHclTerraform(struct!.haClusterPrometheusExporter),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHaClusterPrometheusExporter",
    },
    hana_prometheus_exporter: {
      value: applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHanaPrometheusExporterToHclTerraform(struct!.hanaPrometheusExporter),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHanaPrometheusExporter",
    },
    jmx_prometheus_exporter: {
      value: applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporterToHclTerraform(struct!.jmxPrometheusExporter),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporter",
    },
    logs: {
      value: cdktn.listMapperHcl(applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogsToHclTerraform, false)(struct!.logs),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogsList",
    },
    net_weaver_prometheus_exporter: {
      value: applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporterToHclTerraform(struct!.netWeaverPrometheusExporter),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporter",
    },
    processes: {
      value: cdktn.listMapperHcl(applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesToHclTerraform, false)(struct!.processes),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesList",
    },
    sql_server_prometheus_exporter: {
      value: applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsSqlServerPrometheusExporterToHclTerraform(struct!.sqlServerPrometheusExporter),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsSqlServerPrometheusExporter",
    },
    windows_events: {
      value: cdktn.listMapperHcl(applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEventsToHclTerraform, false)(struct!.windowsEvents),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEventsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmMetrics = this._alarmMetrics?.internalValue;
    }
    if (this._alarms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarms = this._alarms?.internalValue;
    }
    if (this._haClusterPrometheusExporter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.haClusterPrometheusExporter = this._haClusterPrometheusExporter?.internalValue;
    }
    if (this._hanaPrometheusExporter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hanaPrometheusExporter = this._hanaPrometheusExporter?.internalValue;
    }
    if (this._jmxPrometheusExporter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jmxPrometheusExporter = this._jmxPrometheusExporter?.internalValue;
    }
    if (this._logs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logs = this._logs?.internalValue;
    }
    if (this._netWeaverPrometheusExporter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.netWeaverPrometheusExporter = this._netWeaverPrometheusExporter?.internalValue;
    }
    if (this._processes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processes = this._processes?.internalValue;
    }
    if (this._sqlServerPrometheusExporter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlServerPrometheusExporter = this._sqlServerPrometheusExporter?.internalValue;
    }
    if (this._windowsEvents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsEvents = this._windowsEvents?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmMetrics.internalValue = undefined;
      this._alarms.internalValue = undefined;
      this._haClusterPrometheusExporter.internalValue = undefined;
      this._hanaPrometheusExporter.internalValue = undefined;
      this._jmxPrometheusExporter.internalValue = undefined;
      this._logs.internalValue = undefined;
      this._netWeaverPrometheusExporter.internalValue = undefined;
      this._processes.internalValue = undefined;
      this._sqlServerPrometheusExporter.internalValue = undefined;
      this._windowsEvents.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarmMetrics.internalValue = value.alarmMetrics;
      this._alarms.internalValue = value.alarms;
      this._haClusterPrometheusExporter.internalValue = value.haClusterPrometheusExporter;
      this._hanaPrometheusExporter.internalValue = value.hanaPrometheusExporter;
      this._jmxPrometheusExporter.internalValue = value.jmxPrometheusExporter;
      this._logs.internalValue = value.logs;
      this._netWeaverPrometheusExporter.internalValue = value.netWeaverPrometheusExporter;
      this._processes.internalValue = value.processes;
      this._sqlServerPrometheusExporter.internalValue = value.sqlServerPrometheusExporter;
      this._windowsEvents.internalValue = value.windowsEvents;
    }
  }

  // alarm_metrics - computed: true, optional: true, required: false
  private _alarmMetrics = new ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetricsList(this, "alarm_metrics", false);
  public get alarmMetrics() {
    return this._alarmMetrics;
  }
  public putAlarmMetrics(value: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetrics[] | cdktn.IResolvable) {
    this._alarmMetrics.internalValue = value;
  }
  public resetAlarmMetrics() {
    this._alarmMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmMetricsInput() {
    return this._alarmMetrics.internalValue;
  }

  // alarms - computed: true, optional: true, required: false
  private _alarms = new ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmsList(this, "alarms", false);
  public get alarms() {
    return this._alarms;
  }
  public putAlarms(value: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarms[] | cdktn.IResolvable) {
    this._alarms.internalValue = value;
  }
  public resetAlarms() {
    this._alarms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmsInput() {
    return this._alarms.internalValue;
  }

  // ha_cluster_prometheus_exporter - computed: true, optional: true, required: false
  private _haClusterPrometheusExporter = new ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHaClusterPrometheusExporterOutputReference(this, "ha_cluster_prometheus_exporter");
  public get haClusterPrometheusExporter() {
    return this._haClusterPrometheusExporter;
  }
  public putHaClusterPrometheusExporter(value: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHaClusterPrometheusExporter) {
    this._haClusterPrometheusExporter.internalValue = value;
  }
  public resetHaClusterPrometheusExporter() {
    this._haClusterPrometheusExporter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haClusterPrometheusExporterInput() {
    return this._haClusterPrometheusExporter.internalValue;
  }

  // hana_prometheus_exporter - computed: true, optional: true, required: false
  private _hanaPrometheusExporter = new ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHanaPrometheusExporterOutputReference(this, "hana_prometheus_exporter");
  public get hanaPrometheusExporter() {
    return this._hanaPrometheusExporter;
  }
  public putHanaPrometheusExporter(value: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsHanaPrometheusExporter) {
    this._hanaPrometheusExporter.internalValue = value;
  }
  public resetHanaPrometheusExporter() {
    this._hanaPrometheusExporter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hanaPrometheusExporterInput() {
    return this._hanaPrometheusExporter.internalValue;
  }

  // jmx_prometheus_exporter - computed: true, optional: true, required: false
  private _jmxPrometheusExporter = new ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporterOutputReference(this, "jmx_prometheus_exporter");
  public get jmxPrometheusExporter() {
    return this._jmxPrometheusExporter;
  }
  public putJmxPrometheusExporter(value: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporter) {
    this._jmxPrometheusExporter.internalValue = value;
  }
  public resetJmxPrometheusExporter() {
    this._jmxPrometheusExporter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jmxPrometheusExporterInput() {
    return this._jmxPrometheusExporter.internalValue;
  }

  // logs - computed: true, optional: true, required: false
  private _logs = new ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogsList(this, "logs", false);
  public get logs() {
    return this._logs;
  }
  public putLogs(value: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogs[] | cdktn.IResolvable) {
    this._logs.internalValue = value;
  }
  public resetLogs() {
    this._logs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsInput() {
    return this._logs.internalValue;
  }

  // net_weaver_prometheus_exporter - computed: true, optional: true, required: false
  private _netWeaverPrometheusExporter = new ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporterOutputReference(this, "net_weaver_prometheus_exporter");
  public get netWeaverPrometheusExporter() {
    return this._netWeaverPrometheusExporter;
  }
  public putNetWeaverPrometheusExporter(value: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporter) {
    this._netWeaverPrometheusExporter.internalValue = value;
  }
  public resetNetWeaverPrometheusExporter() {
    this._netWeaverPrometheusExporter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netWeaverPrometheusExporterInput() {
    return this._netWeaverPrometheusExporter.internalValue;
  }

  // processes - computed: true, optional: true, required: false
  private _processes = new ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesList(this, "processes", false);
  public get processes() {
    return this._processes;
  }
  public putProcesses(value: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcesses[] | cdktn.IResolvable) {
    this._processes.internalValue = value;
  }
  public resetProcesses() {
    this._processes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processesInput() {
    return this._processes.internalValue;
  }

  // sql_server_prometheus_exporter - computed: true, optional: true, required: false
  private _sqlServerPrometheusExporter = new ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsSqlServerPrometheusExporterOutputReference(this, "sql_server_prometheus_exporter");
  public get sqlServerPrometheusExporter() {
    return this._sqlServerPrometheusExporter;
  }
  public putSqlServerPrometheusExporter(value: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsSqlServerPrometheusExporter) {
    this._sqlServerPrometheusExporter.internalValue = value;
  }
  public resetSqlServerPrometheusExporter() {
    this._sqlServerPrometheusExporter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlServerPrometheusExporterInput() {
    return this._sqlServerPrometheusExporter.internalValue;
  }

  // windows_events - computed: true, optional: true, required: false
  private _windowsEvents = new ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEventsList(this, "windows_events", false);
  public get windowsEvents() {
    return this._windowsEvents;
  }
  public putWindowsEvents(value: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEvents[] | cdktn.IResolvable) {
    this._windowsEvents.internalValue = value;
  }
  public resetWindowsEvents() {
    this._windowsEvents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsEventsInput() {
    return this._windowsEvents.internalValue;
  }
}
export interface ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics {
  /**
  * The name of the metric to be monitored for the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#alarm_metric_name ApplicationinsightsApplication#alarm_metric_name}
  */
  readonly alarmMetricName?: string;
}

export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alarm_metric_name: cdktn.stringToTerraform(struct!.alarmMetricName),
  }
}


export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsToHclTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alarm_metric_name: {
      value: cdktn.stringToHclTerraform(struct!.alarmMetricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmMetricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmMetricName = this._alarmMetricName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmMetricName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarmMetricName = value.alarmMetricName;
    }
  }

  // alarm_metric_name - computed: true, optional: true, required: false
  private _alarmMetricName?: string; 
  public get alarmMetricName() {
    return this.getStringAttribute('alarm_metric_name');
  }
  public set alarmMetricName(value: string) {
    this._alarmMetricName = value;
  }
  public resetAlarmMetricName() {
    this._alarmMetricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmMetricNameInput() {
    return this._alarmMetricName;
  }
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsList extends cdktn.ComplexList {
  public internalValue? : ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics[] | cdktn.IResolvable

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
  public get(index: number): ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsOutputReference {
    return new ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs {
  /**
  * The type of encoding of the logs to be monitored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#encoding ApplicationinsightsApplication#encoding}
  */
  readonly encoding?: string;
  /**
  * The CloudWatch log group name to be associated to the monitored log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#log_group_name ApplicationinsightsApplication#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * The path of the logs to be monitored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#log_path ApplicationinsightsApplication#log_path}
  */
  readonly logPath?: string;
  /**
  * The log type decides the log patterns against which Application Insights analyzes the log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#log_type ApplicationinsightsApplication#log_type}
  */
  readonly logType?: string;
  /**
  * The name of the log pattern set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#pattern_set ApplicationinsightsApplication#pattern_set}
  */
  readonly patternSet?: string;
}

export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encoding: cdktn.stringToTerraform(struct!.encoding),
    log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
    log_path: cdktn.stringToTerraform(struct!.logPath),
    log_type: cdktn.stringToTerraform(struct!.logType),
    pattern_set: cdktn.stringToTerraform(struct!.patternSet),
  }
}


export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsToHclTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encoding: {
      value: cdktn.stringToHclTerraform(struct!.encoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_group_name: {
      value: cdktn.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_path: {
      value: cdktn.stringToHclTerraform(struct!.logPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_type: {
      value: cdktn.stringToHclTerraform(struct!.logType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern_set: {
      value: cdktn.stringToHclTerraform(struct!.patternSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.logPath = this._logPath;
    }
    if (this._logType !== undefined) {
      hasAnyValues = true;
      internalValueResult.logType = this._logType;
    }
    if (this._patternSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternSet = this._patternSet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encoding = undefined;
      this._logGroupName = undefined;
      this._logPath = undefined;
      this._logType = undefined;
      this._patternSet = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encoding = value.encoding;
      this._logGroupName = value.logGroupName;
      this._logPath = value.logPath;
      this._logType = value.logType;
      this._patternSet = value.patternSet;
    }
  }

  // encoding - computed: true, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }

  // log_group_name - computed: true, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_path - computed: true, optional: true, required: false
  private _logPath?: string; 
  public get logPath() {
    return this.getStringAttribute('log_path');
  }
  public set logPath(value: string) {
    this._logPath = value;
  }
  public resetLogPath() {
    this._logPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPathInput() {
    return this._logPath;
  }

  // log_type - computed: true, optional: true, required: false
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  public resetLogType() {
    this._logType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }

  // pattern_set - computed: true, optional: true, required: false
  private _patternSet?: string; 
  public get patternSet() {
    return this.getStringAttribute('pattern_set');
  }
  public set patternSet(value: string) {
    this._patternSet = value;
  }
  public resetPatternSet() {
    this._patternSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternSetInput() {
    return this._patternSet;
  }
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsList extends cdktn.ComplexList {
  public internalValue? : ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs[] | cdktn.IResolvable

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
  public get(index: number): ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsOutputReference {
    return new ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetrics {
  /**
  * The name of the metric to be monitored for the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#alarm_metric_name ApplicationinsightsApplication#alarm_metric_name}
  */
  readonly alarmMetricName?: string;
}

export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alarm_metric_name: cdktn.stringToTerraform(struct!.alarmMetricName),
  }
}


export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsToHclTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alarm_metric_name: {
      value: cdktn.stringToHclTerraform(struct!.alarmMetricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetrics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmMetricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmMetricName = this._alarmMetricName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetrics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmMetricName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarmMetricName = value.alarmMetricName;
    }
  }

  // alarm_metric_name - computed: true, optional: true, required: false
  private _alarmMetricName?: string; 
  public get alarmMetricName() {
    return this.getStringAttribute('alarm_metric_name');
  }
  public set alarmMetricName(value: string) {
    this._alarmMetricName = value;
  }
  public resetAlarmMetricName() {
    this._alarmMetricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmMetricNameInput() {
    return this._alarmMetricName;
  }
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsList extends cdktn.ComplexList {
  public internalValue? : ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetrics[] | cdktn.IResolvable

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
  public get(index: number): ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsOutputReference {
    return new ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcesses {
  /**
  * A list of metrics to monitor for the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#alarm_metrics ApplicationinsightsApplication#alarm_metrics}
  */
  readonly alarmMetrics?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetrics[] | cdktn.IResolvable;
  /**
  * The name of the process to be monitored for the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#process_name ApplicationinsightsApplication#process_name}
  */
  readonly processName?: string;
}

export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcesses | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alarm_metrics: cdktn.listMapper(applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsToTerraform, false)(struct!.alarmMetrics),
    process_name: cdktn.stringToTerraform(struct!.processName),
  }
}


export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesToHclTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcesses | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alarm_metrics: {
      value: cdktn.listMapperHcl(applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsToHclTerraform, false)(struct!.alarmMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsList",
    },
    process_name: {
      value: cdktn.stringToHclTerraform(struct!.processName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcesses | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmMetrics = this._alarmMetrics?.internalValue;
    }
    if (this._processName !== undefined) {
      hasAnyValues = true;
      internalValueResult.processName = this._processName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcesses | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmMetrics.internalValue = undefined;
      this._processName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarmMetrics.internalValue = value.alarmMetrics;
      this._processName = value.processName;
    }
  }

  // alarm_metrics - computed: true, optional: true, required: false
  private _alarmMetrics = new ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsList(this, "alarm_metrics", false);
  public get alarmMetrics() {
    return this._alarmMetrics;
  }
  public putAlarmMetrics(value: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetrics[] | cdktn.IResolvable) {
    this._alarmMetrics.internalValue = value;
  }
  public resetAlarmMetrics() {
    this._alarmMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmMetricsInput() {
    return this._alarmMetrics.internalValue;
  }

  // process_name - computed: true, optional: true, required: false
  private _processName?: string; 
  public get processName() {
    return this.getStringAttribute('process_name');
  }
  public set processName(value: string) {
    this._processName = value;
  }
  public resetProcessName() {
    this._processName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processNameInput() {
    return this._processName;
  }
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesList extends cdktn.ComplexList {
  public internalValue? : ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcesses[] | cdktn.IResolvable

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
  public get(index: number): ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesOutputReference {
    return new ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents {
  /**
  * The levels of event to log. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#event_levels ApplicationinsightsApplication#event_levels}
  */
  readonly eventLevels?: string[];
  /**
  * The type of Windows Events to log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#event_name ApplicationinsightsApplication#event_name}
  */
  readonly eventName?: string;
  /**
  * The CloudWatch log group name to be associated to the monitored log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#log_group_name ApplicationinsightsApplication#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * The name of the log pattern set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#pattern_set ApplicationinsightsApplication#pattern_set}
  */
  readonly patternSet?: string;
}

export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_levels: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.eventLevels),
    event_name: cdktn.stringToTerraform(struct!.eventName),
    log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
    pattern_set: cdktn.stringToTerraform(struct!.patternSet),
  }
}


export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsToHclTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event_levels: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.eventLevels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    event_name: {
      value: cdktn.stringToHclTerraform(struct!.eventName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_group_name: {
      value: cdktn.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern_set: {
      value: cdktn.stringToHclTerraform(struct!.patternSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventLevels !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventLevels = this._eventLevels;
    }
    if (this._eventName !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventName = this._eventName;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._patternSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternSet = this._patternSet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventLevels = undefined;
      this._eventName = undefined;
      this._logGroupName = undefined;
      this._patternSet = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventLevels = value.eventLevels;
      this._eventName = value.eventName;
      this._logGroupName = value.logGroupName;
      this._patternSet = value.patternSet;
    }
  }

  // event_levels - computed: true, optional: true, required: false
  private _eventLevels?: string[]; 
  public get eventLevels() {
    return this.getListAttribute('event_levels');
  }
  public set eventLevels(value: string[]) {
    this._eventLevels = value;
  }
  public resetEventLevels() {
    this._eventLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventLevelsInput() {
    return this._eventLevels;
  }

  // event_name - computed: true, optional: true, required: false
  private _eventName?: string; 
  public get eventName() {
    return this.getStringAttribute('event_name');
  }
  public set eventName(value: string) {
    this._eventName = value;
  }
  public resetEventName() {
    this._eventName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventNameInput() {
    return this._eventName;
  }

  // log_group_name - computed: true, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // pattern_set - computed: true, optional: true, required: false
  private _patternSet?: string; 
  public get patternSet() {
    return this.getStringAttribute('pattern_set');
  }
  public set patternSet(value: string) {
    this._patternSet = value;
  }
  public resetPatternSet() {
    this._patternSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternSetInput() {
    return this._patternSet;
  }
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsList extends cdktn.ComplexList {
  public internalValue? : ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents[] | cdktn.IResolvable

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
  public get(index: number): ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsOutputReference {
    return new ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails {
  /**
  * A list of metrics to monitor for the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#alarm_metrics ApplicationinsightsApplication#alarm_metrics}
  */
  readonly alarmMetrics?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics[] | cdktn.IResolvable;
  /**
  * A list of logs to monitor for the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#logs ApplicationinsightsApplication#logs}
  */
  readonly logs?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs[] | cdktn.IResolvable;
  /**
  * A list of processes to monitor for the component. Only Windows EC2 instances can have a processes section.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#processes ApplicationinsightsApplication#processes}
  */
  readonly processes?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcesses[] | cdktn.IResolvable;
  /**
  * A list of Windows Events to log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#windows_events ApplicationinsightsApplication#windows_events}
  */
  readonly windowsEvents?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents[] | cdktn.IResolvable;
}

export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alarm_metrics: cdktn.listMapper(applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsToTerraform, false)(struct!.alarmMetrics),
    logs: cdktn.listMapper(applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsToTerraform, false)(struct!.logs),
    processes: cdktn.listMapper(applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesToTerraform, false)(struct!.processes),
    windows_events: cdktn.listMapper(applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsToTerraform, false)(struct!.windowsEvents),
  }
}


export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsToHclTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alarm_metrics: {
      value: cdktn.listMapperHcl(applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsToHclTerraform, false)(struct!.alarmMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsList",
    },
    logs: {
      value: cdktn.listMapperHcl(applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsToHclTerraform, false)(struct!.logs),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsList",
    },
    processes: {
      value: cdktn.listMapperHcl(applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesToHclTerraform, false)(struct!.processes),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesList",
    },
    windows_events: {
      value: cdktn.listMapperHcl(applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsToHclTerraform, false)(struct!.windowsEvents),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmMetrics = this._alarmMetrics?.internalValue;
    }
    if (this._logs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logs = this._logs?.internalValue;
    }
    if (this._processes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processes = this._processes?.internalValue;
    }
    if (this._windowsEvents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsEvents = this._windowsEvents?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmMetrics.internalValue = undefined;
      this._logs.internalValue = undefined;
      this._processes.internalValue = undefined;
      this._windowsEvents.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarmMetrics.internalValue = value.alarmMetrics;
      this._logs.internalValue = value.logs;
      this._processes.internalValue = value.processes;
      this._windowsEvents.internalValue = value.windowsEvents;
    }
  }

  // alarm_metrics - computed: true, optional: true, required: false
  private _alarmMetrics = new ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsList(this, "alarm_metrics", false);
  public get alarmMetrics() {
    return this._alarmMetrics;
  }
  public putAlarmMetrics(value: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics[] | cdktn.IResolvable) {
    this._alarmMetrics.internalValue = value;
  }
  public resetAlarmMetrics() {
    this._alarmMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmMetricsInput() {
    return this._alarmMetrics.internalValue;
  }

  // logs - computed: true, optional: true, required: false
  private _logs = new ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsList(this, "logs", false);
  public get logs() {
    return this._logs;
  }
  public putLogs(value: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs[] | cdktn.IResolvable) {
    this._logs.internalValue = value;
  }
  public resetLogs() {
    this._logs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsInput() {
    return this._logs.internalValue;
  }

  // processes - computed: true, optional: true, required: false
  private _processes = new ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesList(this, "processes", false);
  public get processes() {
    return this._processes;
  }
  public putProcesses(value: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcesses[] | cdktn.IResolvable) {
    this._processes.internalValue = value;
  }
  public resetProcesses() {
    this._processes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processesInput() {
    return this._processes.internalValue;
  }

  // windows_events - computed: true, optional: true, required: false
  private _windowsEvents = new ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsList(this, "windows_events", false);
  public get windowsEvents() {
    return this._windowsEvents;
  }
  public putWindowsEvents(value: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents[] | cdktn.IResolvable) {
    this._windowsEvents.internalValue = value;
  }
  public resetWindowsEvents() {
    this._windowsEvents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsEventsInput() {
    return this._windowsEvents.internalValue;
  }
}
export interface ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurations {
  /**
  * The configuration settings of sub components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#sub_component_configuration_details ApplicationinsightsApplication#sub_component_configuration_details}
  */
  readonly subComponentConfigurationDetails?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails;
  /**
  * The sub component type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#sub_component_type ApplicationinsightsApplication#sub_component_type}
  */
  readonly subComponentType?: string;
}

export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sub_component_configuration_details: applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsToTerraform(struct!.subComponentConfigurationDetails),
    sub_component_type: cdktn.stringToTerraform(struct!.subComponentType),
  }
}


export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsToHclTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sub_component_configuration_details: {
      value: applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsToHclTerraform(struct!.subComponentConfigurationDetails),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails",
    },
    sub_component_type: {
      value: cdktn.stringToHclTerraform(struct!.subComponentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subComponentConfigurationDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subComponentConfigurationDetails = this._subComponentConfigurationDetails?.internalValue;
    }
    if (this._subComponentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.subComponentType = this._subComponentType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subComponentConfigurationDetails.internalValue = undefined;
      this._subComponentType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subComponentConfigurationDetails.internalValue = value.subComponentConfigurationDetails;
      this._subComponentType = value.subComponentType;
    }
  }

  // sub_component_configuration_details - computed: true, optional: true, required: false
  private _subComponentConfigurationDetails = new ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsOutputReference(this, "sub_component_configuration_details");
  public get subComponentConfigurationDetails() {
    return this._subComponentConfigurationDetails;
  }
  public putSubComponentConfigurationDetails(value: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails) {
    this._subComponentConfigurationDetails.internalValue = value;
  }
  public resetSubComponentConfigurationDetails() {
    this._subComponentConfigurationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subComponentConfigurationDetailsInput() {
    return this._subComponentConfigurationDetails.internalValue;
  }

  // sub_component_type - computed: true, optional: true, required: false
  private _subComponentType?: string; 
  public get subComponentType() {
    return this.getStringAttribute('sub_component_type');
  }
  public set subComponentType(value: string) {
    this._subComponentType = value;
  }
  public resetSubComponentType() {
    this._subComponentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subComponentTypeInput() {
    return this._subComponentType;
  }
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsList extends cdktn.ComplexList {
  public internalValue? : ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurations[] | cdktn.IResolvable

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
  public get(index: number): ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsOutputReference {
    return new ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfiguration {
  /**
  * The configuration settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#configuration_details ApplicationinsightsApplication#configuration_details}
  */
  readonly configurationDetails?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetails;
  /**
  * Sub component configurations of the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#sub_component_type_configurations ApplicationinsightsApplication#sub_component_type_configurations}
  */
  readonly subComponentTypeConfigurations?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurations[] | cdktn.IResolvable;
}

export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    configuration_details: applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsToTerraform(struct!.configurationDetails),
    sub_component_type_configurations: cdktn.listMapper(applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsToTerraform, false)(struct!.subComponentTypeConfigurations),
  }
}


export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationToHclTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    configuration_details: {
      value: applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsToHclTerraform(struct!.configurationDetails),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetails",
    },
    sub_component_type_configurations: {
      value: cdktn.listMapperHcl(applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsToHclTerraform, false)(struct!.subComponentTypeConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configurationDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationDetails = this._configurationDetails?.internalValue;
    }
    if (this._subComponentTypeConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subComponentTypeConfigurations = this._subComponentTypeConfigurations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configurationDetails.internalValue = undefined;
      this._subComponentTypeConfigurations.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configurationDetails.internalValue = value.configurationDetails;
      this._subComponentTypeConfigurations.internalValue = value.subComponentTypeConfigurations;
    }
  }

  // configuration_details - computed: true, optional: true, required: false
  private _configurationDetails = new ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsOutputReference(this, "configuration_details");
  public get configurationDetails() {
    return this._configurationDetails;
  }
  public putConfigurationDetails(value: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetails) {
    this._configurationDetails.internalValue = value;
  }
  public resetConfigurationDetails() {
    this._configurationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationDetailsInput() {
    return this._configurationDetails.internalValue;
  }

  // sub_component_type_configurations - computed: true, optional: true, required: false
  private _subComponentTypeConfigurations = new ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsList(this, "sub_component_type_configurations", false);
  public get subComponentTypeConfigurations() {
    return this._subComponentTypeConfigurations;
  }
  public putSubComponentTypeConfigurations(value: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurations[] | cdktn.IResolvable) {
    this._subComponentTypeConfigurations.internalValue = value;
  }
  public resetSubComponentTypeConfigurations() {
    this._subComponentTypeConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subComponentTypeConfigurationsInput() {
    return this._subComponentTypeConfigurations.internalValue;
  }
}
export interface ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetrics {
  /**
  * The name of the metric to be monitored for the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#alarm_metric_name ApplicationinsightsApplication#alarm_metric_name}
  */
  readonly alarmMetricName?: string;
}

export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alarm_metric_name: cdktn.stringToTerraform(struct!.alarmMetricName),
  }
}


export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsToHclTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alarm_metric_name: {
      value: cdktn.stringToHclTerraform(struct!.alarmMetricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetrics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmMetricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmMetricName = this._alarmMetricName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetrics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmMetricName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarmMetricName = value.alarmMetricName;
    }
  }

  // alarm_metric_name - computed: true, optional: true, required: false
  private _alarmMetricName?: string; 
  public get alarmMetricName() {
    return this.getStringAttribute('alarm_metric_name');
  }
  public set alarmMetricName(value: string) {
    this._alarmMetricName = value;
  }
  public resetAlarmMetricName() {
    this._alarmMetricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmMetricNameInput() {
    return this._alarmMetricName;
  }
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsList extends cdktn.ComplexList {
  public internalValue? : ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetrics[] | cdktn.IResolvable

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
  public get(index: number): ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsOutputReference {
    return new ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarms {
  /**
  * The name of the CloudWatch alarm to be monitored for the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#alarm_name ApplicationinsightsApplication#alarm_name}
  */
  readonly alarmName?: string;
  /**
  * Indicates the degree of outage when the alarm goes off.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#severity ApplicationinsightsApplication#severity}
  */
  readonly severity?: string;
}

export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alarm_name: cdktn.stringToTerraform(struct!.alarmName),
    severity: cdktn.stringToTerraform(struct!.severity),
  }
}


export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmsToHclTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alarm_name: {
      value: cdktn.stringToHclTerraform(struct!.alarmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktn.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarms | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmName = this._alarmName;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarms | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmName = undefined;
      this._severity = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarmName = value.alarmName;
      this._severity = value.severity;
    }
  }

  // alarm_name - computed: true, optional: true, required: false
  private _alarmName?: string; 
  public get alarmName() {
    return this.getStringAttribute('alarm_name');
  }
  public set alarmName(value: string) {
    this._alarmName = value;
  }
  public resetAlarmName() {
    this._alarmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmNameInput() {
    return this._alarmName;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmsList extends cdktn.ComplexList {
  public internalValue? : ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarms[] | cdktn.IResolvable

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
  public get(index: number): ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmsOutputReference {
    return new ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHaClusterPrometheusExporter {
  /**
  * Prometheus exporter port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#prometheus_port ApplicationinsightsApplication#prometheus_port}
  */
  readonly prometheusPort?: string;
}

export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHaClusterPrometheusExporterToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHaClusterPrometheusExporter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    prometheus_port: cdktn.stringToTerraform(struct!.prometheusPort),
  }
}


export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHaClusterPrometheusExporterToHclTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHaClusterPrometheusExporter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    prometheus_port: {
      value: cdktn.stringToHclTerraform(struct!.prometheusPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHaClusterPrometheusExporterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHaClusterPrometheusExporter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prometheusPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheusPort = this._prometheusPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHaClusterPrometheusExporter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prometheusPort = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prometheusPort = value.prometheusPort;
    }
  }

  // prometheus_port - computed: true, optional: true, required: false
  private _prometheusPort?: string; 
  public get prometheusPort() {
    return this.getStringAttribute('prometheus_port');
  }
  public set prometheusPort(value: string) {
    this._prometheusPort = value;
  }
  public resetPrometheusPort() {
    this._prometheusPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusPortInput() {
    return this._prometheusPort;
  }
}
export interface ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHanaPrometheusExporter {
  /**
  * A flag which indicates agreeing to install SAP HANA DB client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#agree_to_install_hanadb_client ApplicationinsightsApplication#agree_to_install_hanadb_client}
  */
  readonly agreeToInstallHanadbClient?: boolean | cdktn.IResolvable;
  /**
  * The HANA DB port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#hana_port ApplicationinsightsApplication#hana_port}
  */
  readonly hanaPort?: string;
  /**
  * The secret name which manages the HANA DB credentials e.g. {
  *   "username": "<>",
  *   "password": "<>"
  * }.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#hana_secret_name ApplicationinsightsApplication#hana_secret_name}
  */
  readonly hanaSecretName?: string;
  /**
  * HANA DB SID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#hanasid ApplicationinsightsApplication#hanasid}
  */
  readonly hanasid?: string;
  /**
  * Prometheus exporter port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#prometheus_port ApplicationinsightsApplication#prometheus_port}
  */
  readonly prometheusPort?: string;
}

export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHanaPrometheusExporterToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHanaPrometheusExporter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agree_to_install_hanadb_client: cdktn.booleanToTerraform(struct!.agreeToInstallHanadbClient),
    hana_port: cdktn.stringToTerraform(struct!.hanaPort),
    hana_secret_name: cdktn.stringToTerraform(struct!.hanaSecretName),
    hanasid: cdktn.stringToTerraform(struct!.hanasid),
    prometheus_port: cdktn.stringToTerraform(struct!.prometheusPort),
  }
}


export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHanaPrometheusExporterToHclTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHanaPrometheusExporter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    agree_to_install_hanadb_client: {
      value: cdktn.booleanToHclTerraform(struct!.agreeToInstallHanadbClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hana_port: {
      value: cdktn.stringToHclTerraform(struct!.hanaPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hana_secret_name: {
      value: cdktn.stringToHclTerraform(struct!.hanaSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hanasid: {
      value: cdktn.stringToHclTerraform(struct!.hanasid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prometheus_port: {
      value: cdktn.stringToHclTerraform(struct!.prometheusPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHanaPrometheusExporterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHanaPrometheusExporter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agreeToInstallHanadbClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.agreeToInstallHanadbClient = this._agreeToInstallHanadbClient;
    }
    if (this._hanaPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.hanaPort = this._hanaPort;
    }
    if (this._hanaSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hanaSecretName = this._hanaSecretName;
    }
    if (this._hanasid !== undefined) {
      hasAnyValues = true;
      internalValueResult.hanasid = this._hanasid;
    }
    if (this._prometheusPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheusPort = this._prometheusPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHanaPrometheusExporter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agreeToInstallHanadbClient = undefined;
      this._hanaPort = undefined;
      this._hanaSecretName = undefined;
      this._hanasid = undefined;
      this._prometheusPort = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agreeToInstallHanadbClient = value.agreeToInstallHanadbClient;
      this._hanaPort = value.hanaPort;
      this._hanaSecretName = value.hanaSecretName;
      this._hanasid = value.hanasid;
      this._prometheusPort = value.prometheusPort;
    }
  }

  // agree_to_install_hanadb_client - computed: true, optional: true, required: false
  private _agreeToInstallHanadbClient?: boolean | cdktn.IResolvable; 
  public get agreeToInstallHanadbClient() {
    return this.getBooleanAttribute('agree_to_install_hanadb_client');
  }
  public set agreeToInstallHanadbClient(value: boolean | cdktn.IResolvable) {
    this._agreeToInstallHanadbClient = value;
  }
  public resetAgreeToInstallHanadbClient() {
    this._agreeToInstallHanadbClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agreeToInstallHanadbClientInput() {
    return this._agreeToInstallHanadbClient;
  }

  // hana_port - computed: true, optional: true, required: false
  private _hanaPort?: string; 
  public get hanaPort() {
    return this.getStringAttribute('hana_port');
  }
  public set hanaPort(value: string) {
    this._hanaPort = value;
  }
  public resetHanaPort() {
    this._hanaPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hanaPortInput() {
    return this._hanaPort;
  }

  // hana_secret_name - computed: true, optional: true, required: false
  private _hanaSecretName?: string; 
  public get hanaSecretName() {
    return this.getStringAttribute('hana_secret_name');
  }
  public set hanaSecretName(value: string) {
    this._hanaSecretName = value;
  }
  public resetHanaSecretName() {
    this._hanaSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hanaSecretNameInput() {
    return this._hanaSecretName;
  }

  // hanasid - computed: true, optional: true, required: false
  private _hanasid?: string; 
  public get hanasid() {
    return this.getStringAttribute('hanasid');
  }
  public set hanasid(value: string) {
    this._hanasid = value;
  }
  public resetHanasid() {
    this._hanasid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hanasidInput() {
    return this._hanasid;
  }

  // prometheus_port - computed: true, optional: true, required: false
  private _prometheusPort?: string; 
  public get prometheusPort() {
    return this.getStringAttribute('prometheus_port');
  }
  public set prometheusPort(value: string) {
    this._prometheusPort = value;
  }
  public resetPrometheusPort() {
    this._prometheusPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusPortInput() {
    return this._prometheusPort;
  }
}
export interface ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporter {
  /**
  * Java agent host port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#host_port ApplicationinsightsApplication#host_port}
  */
  readonly hostPort?: string;
  /**
  * JMX service URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#jmxurl ApplicationinsightsApplication#jmxurl}
  */
  readonly jmxurl?: string;
  /**
  * Prometheus exporter port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#prometheus_port ApplicationinsightsApplication#prometheus_port}
  */
  readonly prometheusPort?: string;
}

export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporterToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    host_port: cdktn.stringToTerraform(struct!.hostPort),
    jmxurl: cdktn.stringToTerraform(struct!.jmxurl),
    prometheus_port: cdktn.stringToTerraform(struct!.prometheusPort),
  }
}


export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporterToHclTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    host_port: {
      value: cdktn.stringToHclTerraform(struct!.hostPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jmxurl: {
      value: cdktn.stringToHclTerraform(struct!.jmxurl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prometheus_port: {
      value: cdktn.stringToHclTerraform(struct!.prometheusPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPort = this._hostPort;
    }
    if (this._jmxurl !== undefined) {
      hasAnyValues = true;
      internalValueResult.jmxurl = this._jmxurl;
    }
    if (this._prometheusPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheusPort = this._prometheusPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostPort = undefined;
      this._jmxurl = undefined;
      this._prometheusPort = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostPort = value.hostPort;
      this._jmxurl = value.jmxurl;
      this._prometheusPort = value.prometheusPort;
    }
  }

  // host_port - computed: true, optional: true, required: false
  private _hostPort?: string; 
  public get hostPort() {
    return this.getStringAttribute('host_port');
  }
  public set hostPort(value: string) {
    this._hostPort = value;
  }
  public resetHostPort() {
    this._hostPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPortInput() {
    return this._hostPort;
  }

  // jmxurl - computed: true, optional: true, required: false
  private _jmxurl?: string; 
  public get jmxurl() {
    return this.getStringAttribute('jmxurl');
  }
  public set jmxurl(value: string) {
    this._jmxurl = value;
  }
  public resetJmxurl() {
    this._jmxurl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jmxurlInput() {
    return this._jmxurl;
  }

  // prometheus_port - computed: true, optional: true, required: false
  private _prometheusPort?: string; 
  public get prometheusPort() {
    return this.getStringAttribute('prometheus_port');
  }
  public set prometheusPort(value: string) {
    this._prometheusPort = value;
  }
  public resetPrometheusPort() {
    this._prometheusPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusPortInput() {
    return this._prometheusPort;
  }
}
export interface ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogs {
  /**
  * The type of encoding of the logs to be monitored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#encoding ApplicationinsightsApplication#encoding}
  */
  readonly encoding?: string;
  /**
  * The CloudWatch log group name to be associated to the monitored log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#log_group_name ApplicationinsightsApplication#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * The path of the logs to be monitored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#log_path ApplicationinsightsApplication#log_path}
  */
  readonly logPath?: string;
  /**
  * The log type decides the log patterns against which Application Insights analyzes the log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#log_type ApplicationinsightsApplication#log_type}
  */
  readonly logType?: string;
  /**
  * The name of the log pattern set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#pattern_set ApplicationinsightsApplication#pattern_set}
  */
  readonly patternSet?: string;
}

export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encoding: cdktn.stringToTerraform(struct!.encoding),
    log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
    log_path: cdktn.stringToTerraform(struct!.logPath),
    log_type: cdktn.stringToTerraform(struct!.logType),
    pattern_set: cdktn.stringToTerraform(struct!.patternSet),
  }
}


export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsToHclTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encoding: {
      value: cdktn.stringToHclTerraform(struct!.encoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_group_name: {
      value: cdktn.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_path: {
      value: cdktn.stringToHclTerraform(struct!.logPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_type: {
      value: cdktn.stringToHclTerraform(struct!.logType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern_set: {
      value: cdktn.stringToHclTerraform(struct!.patternSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.logPath = this._logPath;
    }
    if (this._logType !== undefined) {
      hasAnyValues = true;
      internalValueResult.logType = this._logType;
    }
    if (this._patternSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternSet = this._patternSet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encoding = undefined;
      this._logGroupName = undefined;
      this._logPath = undefined;
      this._logType = undefined;
      this._patternSet = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encoding = value.encoding;
      this._logGroupName = value.logGroupName;
      this._logPath = value.logPath;
      this._logType = value.logType;
      this._patternSet = value.patternSet;
    }
  }

  // encoding - computed: true, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }

  // log_group_name - computed: true, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_path - computed: true, optional: true, required: false
  private _logPath?: string; 
  public get logPath() {
    return this.getStringAttribute('log_path');
  }
  public set logPath(value: string) {
    this._logPath = value;
  }
  public resetLogPath() {
    this._logPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPathInput() {
    return this._logPath;
  }

  // log_type - computed: true, optional: true, required: false
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  public resetLogType() {
    this._logType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }

  // pattern_set - computed: true, optional: true, required: false
  private _patternSet?: string; 
  public get patternSet() {
    return this.getStringAttribute('pattern_set');
  }
  public set patternSet(value: string) {
    this._patternSet = value;
  }
  public resetPatternSet() {
    this._patternSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternSetInput() {
    return this._patternSet;
  }
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsList extends cdktn.ComplexList {
  public internalValue? : ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogs[] | cdktn.IResolvable

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
  public get(index: number): ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsOutputReference {
    return new ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporter {
  /**
  * SAP instance numbers for ASCS, ERS, and App Servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#instance_numbers ApplicationinsightsApplication#instance_numbers}
  */
  readonly instanceNumbers?: string[];
  /**
  * Prometheus exporter port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#prometheus_port ApplicationinsightsApplication#prometheus_port}
  */
  readonly prometheusPort?: string;
  /**
  * SAP NetWeaver SID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#sapsid ApplicationinsightsApplication#sapsid}
  */
  readonly sapsid?: string;
}

export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporterToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_numbers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.instanceNumbers),
    prometheus_port: cdktn.stringToTerraform(struct!.prometheusPort),
    sapsid: cdktn.stringToTerraform(struct!.sapsid),
  }
}


export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporterToHclTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_numbers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.instanceNumbers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prometheus_port: {
      value: cdktn.stringToHclTerraform(struct!.prometheusPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sapsid: {
      value: cdktn.stringToHclTerraform(struct!.sapsid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceNumbers = this._instanceNumbers;
    }
    if (this._prometheusPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheusPort = this._prometheusPort;
    }
    if (this._sapsid !== undefined) {
      hasAnyValues = true;
      internalValueResult.sapsid = this._sapsid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceNumbers = undefined;
      this._prometheusPort = undefined;
      this._sapsid = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceNumbers = value.instanceNumbers;
      this._prometheusPort = value.prometheusPort;
      this._sapsid = value.sapsid;
    }
  }

  // instance_numbers - computed: true, optional: true, required: false
  private _instanceNumbers?: string[]; 
  public get instanceNumbers() {
    return this.getListAttribute('instance_numbers');
  }
  public set instanceNumbers(value: string[]) {
    this._instanceNumbers = value;
  }
  public resetInstanceNumbers() {
    this._instanceNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNumbersInput() {
    return this._instanceNumbers;
  }

  // prometheus_port - computed: true, optional: true, required: false
  private _prometheusPort?: string; 
  public get prometheusPort() {
    return this.getStringAttribute('prometheus_port');
  }
  public set prometheusPort(value: string) {
    this._prometheusPort = value;
  }
  public resetPrometheusPort() {
    this._prometheusPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusPortInput() {
    return this._prometheusPort;
  }

  // sapsid - computed: true, optional: true, required: false
  private _sapsid?: string; 
  public get sapsid() {
    return this.getStringAttribute('sapsid');
  }
  public set sapsid(value: string) {
    this._sapsid = value;
  }
  public resetSapsid() {
    this._sapsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sapsidInput() {
    return this._sapsid;
  }
}
export interface ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetrics {
  /**
  * The name of the metric to be monitored for the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#alarm_metric_name ApplicationinsightsApplication#alarm_metric_name}
  */
  readonly alarmMetricName?: string;
}

export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetricsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alarm_metric_name: cdktn.stringToTerraform(struct!.alarmMetricName),
  }
}


export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetricsToHclTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alarm_metric_name: {
      value: cdktn.stringToHclTerraform(struct!.alarmMetricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetricsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetrics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmMetricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmMetricName = this._alarmMetricName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetrics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmMetricName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarmMetricName = value.alarmMetricName;
    }
  }

  // alarm_metric_name - computed: true, optional: true, required: false
  private _alarmMetricName?: string; 
  public get alarmMetricName() {
    return this.getStringAttribute('alarm_metric_name');
  }
  public set alarmMetricName(value: string) {
    this._alarmMetricName = value;
  }
  public resetAlarmMetricName() {
    this._alarmMetricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmMetricNameInput() {
    return this._alarmMetricName;
  }
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetricsList extends cdktn.ComplexList {
  public internalValue? : ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetrics[] | cdktn.IResolvable

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
  public get(index: number): ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetricsOutputReference {
    return new ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcesses {
  /**
  * A list of metrics to monitor for the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#alarm_metrics ApplicationinsightsApplication#alarm_metrics}
  */
  readonly alarmMetrics?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetrics[] | cdktn.IResolvable;
  /**
  * The name of the process to be monitored for the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#process_name ApplicationinsightsApplication#process_name}
  */
  readonly processName?: string;
}

export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcesses | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alarm_metrics: cdktn.listMapper(applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetricsToTerraform, false)(struct!.alarmMetrics),
    process_name: cdktn.stringToTerraform(struct!.processName),
  }
}


export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesToHclTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcesses | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alarm_metrics: {
      value: cdktn.listMapperHcl(applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetricsToHclTerraform, false)(struct!.alarmMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetricsList",
    },
    process_name: {
      value: cdktn.stringToHclTerraform(struct!.processName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcesses | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmMetrics = this._alarmMetrics?.internalValue;
    }
    if (this._processName !== undefined) {
      hasAnyValues = true;
      internalValueResult.processName = this._processName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcesses | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmMetrics.internalValue = undefined;
      this._processName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarmMetrics.internalValue = value.alarmMetrics;
      this._processName = value.processName;
    }
  }

  // alarm_metrics - computed: true, optional: true, required: false
  private _alarmMetrics = new ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetricsList(this, "alarm_metrics", false);
  public get alarmMetrics() {
    return this._alarmMetrics;
  }
  public putAlarmMetrics(value: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetrics[] | cdktn.IResolvable) {
    this._alarmMetrics.internalValue = value;
  }
  public resetAlarmMetrics() {
    this._alarmMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmMetricsInput() {
    return this._alarmMetrics.internalValue;
  }

  // process_name - computed: true, optional: true, required: false
  private _processName?: string; 
  public get processName() {
    return this.getStringAttribute('process_name');
  }
  public set processName(value: string) {
    this._processName = value;
  }
  public resetProcessName() {
    this._processName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processNameInput() {
    return this._processName;
  }
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesList extends cdktn.ComplexList {
  public internalValue? : ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcesses[] | cdktn.IResolvable

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
  public get(index: number): ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesOutputReference {
    return new ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsSqlServerPrometheusExporter {
  /**
  * Prometheus exporter port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#prometheus_port ApplicationinsightsApplication#prometheus_port}
  */
  readonly prometheusPort?: string;
  /**
  * Secret name which managers SQL exporter connection. e.g. {"data_source_name": "sqlserver://<USERNAME>:<PASSWORD>@localhost:1433"}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#sql_secret_name ApplicationinsightsApplication#sql_secret_name}
  */
  readonly sqlSecretName?: string;
}

export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsSqlServerPrometheusExporterToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsSqlServerPrometheusExporter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    prometheus_port: cdktn.stringToTerraform(struct!.prometheusPort),
    sql_secret_name: cdktn.stringToTerraform(struct!.sqlSecretName),
  }
}


export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsSqlServerPrometheusExporterToHclTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsSqlServerPrometheusExporter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    prometheus_port: {
      value: cdktn.stringToHclTerraform(struct!.prometheusPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql_secret_name: {
      value: cdktn.stringToHclTerraform(struct!.sqlSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsSqlServerPrometheusExporterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsSqlServerPrometheusExporter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prometheusPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheusPort = this._prometheusPort;
    }
    if (this._sqlSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlSecretName = this._sqlSecretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsSqlServerPrometheusExporter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prometheusPort = undefined;
      this._sqlSecretName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prometheusPort = value.prometheusPort;
      this._sqlSecretName = value.sqlSecretName;
    }
  }

  // prometheus_port - computed: true, optional: true, required: false
  private _prometheusPort?: string; 
  public get prometheusPort() {
    return this.getStringAttribute('prometheus_port');
  }
  public set prometheusPort(value: string) {
    this._prometheusPort = value;
  }
  public resetPrometheusPort() {
    this._prometheusPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusPortInput() {
    return this._prometheusPort;
  }

  // sql_secret_name - computed: true, optional: true, required: false
  private _sqlSecretName?: string; 
  public get sqlSecretName() {
    return this.getStringAttribute('sql_secret_name');
  }
  public set sqlSecretName(value: string) {
    this._sqlSecretName = value;
  }
  public resetSqlSecretName() {
    this._sqlSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlSecretNameInput() {
    return this._sqlSecretName;
  }
}
export interface ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEvents {
  /**
  * The levels of event to log. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#event_levels ApplicationinsightsApplication#event_levels}
  */
  readonly eventLevels?: string[];
  /**
  * The type of Windows Events to log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#event_name ApplicationinsightsApplication#event_name}
  */
  readonly eventName?: string;
  /**
  * The CloudWatch log group name to be associated to the monitored log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#log_group_name ApplicationinsightsApplication#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * The name of the log pattern set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#pattern_set ApplicationinsightsApplication#pattern_set}
  */
  readonly patternSet?: string;
}

export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEvents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_levels: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.eventLevels),
    event_name: cdktn.stringToTerraform(struct!.eventName),
    log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
    pattern_set: cdktn.stringToTerraform(struct!.patternSet),
  }
}


export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsToHclTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEvents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event_levels: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.eventLevels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    event_name: {
      value: cdktn.stringToHclTerraform(struct!.eventName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_group_name: {
      value: cdktn.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern_set: {
      value: cdktn.stringToHclTerraform(struct!.patternSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEvents | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventLevels !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventLevels = this._eventLevels;
    }
    if (this._eventName !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventName = this._eventName;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._patternSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternSet = this._patternSet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEvents | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventLevels = undefined;
      this._eventName = undefined;
      this._logGroupName = undefined;
      this._patternSet = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventLevels = value.eventLevels;
      this._eventName = value.eventName;
      this._logGroupName = value.logGroupName;
      this._patternSet = value.patternSet;
    }
  }

  // event_levels - computed: true, optional: true, required: false
  private _eventLevels?: string[]; 
  public get eventLevels() {
    return this.getListAttribute('event_levels');
  }
  public set eventLevels(value: string[]) {
    this._eventLevels = value;
  }
  public resetEventLevels() {
    this._eventLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventLevelsInput() {
    return this._eventLevels;
  }

  // event_name - computed: true, optional: true, required: false
  private _eventName?: string; 
  public get eventName() {
    return this.getStringAttribute('event_name');
  }
  public set eventName(value: string) {
    this._eventName = value;
  }
  public resetEventName() {
    this._eventName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventNameInput() {
    return this._eventName;
  }

  // log_group_name - computed: true, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // pattern_set - computed: true, optional: true, required: false
  private _patternSet?: string; 
  public get patternSet() {
    return this.getStringAttribute('pattern_set');
  }
  public set patternSet(value: string) {
    this._patternSet = value;
  }
  public resetPatternSet() {
    this._patternSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternSetInput() {
    return this._patternSet;
  }
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsList extends cdktn.ComplexList {
  public internalValue? : ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEvents[] | cdktn.IResolvable

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
  public get(index: number): ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsOutputReference {
    return new ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetails {
  /**
  * A list of metrics to monitor for the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#alarm_metrics ApplicationinsightsApplication#alarm_metrics}
  */
  readonly alarmMetrics?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetrics[] | cdktn.IResolvable;
  /**
  * A list of alarms to monitor for the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#alarms ApplicationinsightsApplication#alarms}
  */
  readonly alarms?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarms[] | cdktn.IResolvable;
  /**
  * The HA cluster Prometheus Exporter settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#ha_cluster_prometheus_exporter ApplicationinsightsApplication#ha_cluster_prometheus_exporter}
  */
  readonly haClusterPrometheusExporter?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHaClusterPrometheusExporter;
  /**
  * The HANA DB Prometheus Exporter settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#hana_prometheus_exporter ApplicationinsightsApplication#hana_prometheus_exporter}
  */
  readonly hanaPrometheusExporter?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHanaPrometheusExporter;
  /**
  * The JMX Prometheus Exporter settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#jmx_prometheus_exporter ApplicationinsightsApplication#jmx_prometheus_exporter}
  */
  readonly jmxPrometheusExporter?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporter;
  /**
  * A list of logs to monitor for the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#logs ApplicationinsightsApplication#logs}
  */
  readonly logs?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogs[] | cdktn.IResolvable;
  /**
  * The NetWeaver Prometheus Exporter settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#net_weaver_prometheus_exporter ApplicationinsightsApplication#net_weaver_prometheus_exporter}
  */
  readonly netWeaverPrometheusExporter?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporter;
  /**
  * A list of processes to monitor for the component. Only Windows EC2 instances can have a processes section.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#processes ApplicationinsightsApplication#processes}
  */
  readonly processes?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcesses[] | cdktn.IResolvable;
  /**
  * The SQL Prometheus Exporter settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#sql_server_prometheus_exporter ApplicationinsightsApplication#sql_server_prometheus_exporter}
  */
  readonly sqlServerPrometheusExporter?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsSqlServerPrometheusExporter;
  /**
  * A list of Windows Events to log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#windows_events ApplicationinsightsApplication#windows_events}
  */
  readonly windowsEvents?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEvents[] | cdktn.IResolvable;
}

export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alarm_metrics: cdktn.listMapper(applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsToTerraform, false)(struct!.alarmMetrics),
    alarms: cdktn.listMapper(applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmsToTerraform, false)(struct!.alarms),
    ha_cluster_prometheus_exporter: applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHaClusterPrometheusExporterToTerraform(struct!.haClusterPrometheusExporter),
    hana_prometheus_exporter: applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHanaPrometheusExporterToTerraform(struct!.hanaPrometheusExporter),
    jmx_prometheus_exporter: applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporterToTerraform(struct!.jmxPrometheusExporter),
    logs: cdktn.listMapper(applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsToTerraform, false)(struct!.logs),
    net_weaver_prometheus_exporter: applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporterToTerraform(struct!.netWeaverPrometheusExporter),
    processes: cdktn.listMapper(applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesToTerraform, false)(struct!.processes),
    sql_server_prometheus_exporter: applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsSqlServerPrometheusExporterToTerraform(struct!.sqlServerPrometheusExporter),
    windows_events: cdktn.listMapper(applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsToTerraform, false)(struct!.windowsEvents),
  }
}


export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsToHclTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alarm_metrics: {
      value: cdktn.listMapperHcl(applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsToHclTerraform, false)(struct!.alarmMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsList",
    },
    alarms: {
      value: cdktn.listMapperHcl(applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmsToHclTerraform, false)(struct!.alarms),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmsList",
    },
    ha_cluster_prometheus_exporter: {
      value: applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHaClusterPrometheusExporterToHclTerraform(struct!.haClusterPrometheusExporter),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHaClusterPrometheusExporter",
    },
    hana_prometheus_exporter: {
      value: applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHanaPrometheusExporterToHclTerraform(struct!.hanaPrometheusExporter),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHanaPrometheusExporter",
    },
    jmx_prometheus_exporter: {
      value: applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporterToHclTerraform(struct!.jmxPrometheusExporter),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporter",
    },
    logs: {
      value: cdktn.listMapperHcl(applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsToHclTerraform, false)(struct!.logs),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsList",
    },
    net_weaver_prometheus_exporter: {
      value: applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporterToHclTerraform(struct!.netWeaverPrometheusExporter),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporter",
    },
    processes: {
      value: cdktn.listMapperHcl(applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesToHclTerraform, false)(struct!.processes),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesList",
    },
    sql_server_prometheus_exporter: {
      value: applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsSqlServerPrometheusExporterToHclTerraform(struct!.sqlServerPrometheusExporter),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsSqlServerPrometheusExporter",
    },
    windows_events: {
      value: cdktn.listMapperHcl(applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsToHclTerraform, false)(struct!.windowsEvents),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmMetrics = this._alarmMetrics?.internalValue;
    }
    if (this._alarms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarms = this._alarms?.internalValue;
    }
    if (this._haClusterPrometheusExporter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.haClusterPrometheusExporter = this._haClusterPrometheusExporter?.internalValue;
    }
    if (this._hanaPrometheusExporter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hanaPrometheusExporter = this._hanaPrometheusExporter?.internalValue;
    }
    if (this._jmxPrometheusExporter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jmxPrometheusExporter = this._jmxPrometheusExporter?.internalValue;
    }
    if (this._logs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logs = this._logs?.internalValue;
    }
    if (this._netWeaverPrometheusExporter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.netWeaverPrometheusExporter = this._netWeaverPrometheusExporter?.internalValue;
    }
    if (this._processes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processes = this._processes?.internalValue;
    }
    if (this._sqlServerPrometheusExporter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlServerPrometheusExporter = this._sqlServerPrometheusExporter?.internalValue;
    }
    if (this._windowsEvents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsEvents = this._windowsEvents?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmMetrics.internalValue = undefined;
      this._alarms.internalValue = undefined;
      this._haClusterPrometheusExporter.internalValue = undefined;
      this._hanaPrometheusExporter.internalValue = undefined;
      this._jmxPrometheusExporter.internalValue = undefined;
      this._logs.internalValue = undefined;
      this._netWeaverPrometheusExporter.internalValue = undefined;
      this._processes.internalValue = undefined;
      this._sqlServerPrometheusExporter.internalValue = undefined;
      this._windowsEvents.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarmMetrics.internalValue = value.alarmMetrics;
      this._alarms.internalValue = value.alarms;
      this._haClusterPrometheusExporter.internalValue = value.haClusterPrometheusExporter;
      this._hanaPrometheusExporter.internalValue = value.hanaPrometheusExporter;
      this._jmxPrometheusExporter.internalValue = value.jmxPrometheusExporter;
      this._logs.internalValue = value.logs;
      this._netWeaverPrometheusExporter.internalValue = value.netWeaverPrometheusExporter;
      this._processes.internalValue = value.processes;
      this._sqlServerPrometheusExporter.internalValue = value.sqlServerPrometheusExporter;
      this._windowsEvents.internalValue = value.windowsEvents;
    }
  }

  // alarm_metrics - computed: true, optional: true, required: false
  private _alarmMetrics = new ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsList(this, "alarm_metrics", false);
  public get alarmMetrics() {
    return this._alarmMetrics;
  }
  public putAlarmMetrics(value: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetrics[] | cdktn.IResolvable) {
    this._alarmMetrics.internalValue = value;
  }
  public resetAlarmMetrics() {
    this._alarmMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmMetricsInput() {
    return this._alarmMetrics.internalValue;
  }

  // alarms - computed: true, optional: true, required: false
  private _alarms = new ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmsList(this, "alarms", false);
  public get alarms() {
    return this._alarms;
  }
  public putAlarms(value: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarms[] | cdktn.IResolvable) {
    this._alarms.internalValue = value;
  }
  public resetAlarms() {
    this._alarms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmsInput() {
    return this._alarms.internalValue;
  }

  // ha_cluster_prometheus_exporter - computed: true, optional: true, required: false
  private _haClusterPrometheusExporter = new ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHaClusterPrometheusExporterOutputReference(this, "ha_cluster_prometheus_exporter");
  public get haClusterPrometheusExporter() {
    return this._haClusterPrometheusExporter;
  }
  public putHaClusterPrometheusExporter(value: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHaClusterPrometheusExporter) {
    this._haClusterPrometheusExporter.internalValue = value;
  }
  public resetHaClusterPrometheusExporter() {
    this._haClusterPrometheusExporter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haClusterPrometheusExporterInput() {
    return this._haClusterPrometheusExporter.internalValue;
  }

  // hana_prometheus_exporter - computed: true, optional: true, required: false
  private _hanaPrometheusExporter = new ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHanaPrometheusExporterOutputReference(this, "hana_prometheus_exporter");
  public get hanaPrometheusExporter() {
    return this._hanaPrometheusExporter;
  }
  public putHanaPrometheusExporter(value: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHanaPrometheusExporter) {
    this._hanaPrometheusExporter.internalValue = value;
  }
  public resetHanaPrometheusExporter() {
    this._hanaPrometheusExporter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hanaPrometheusExporterInput() {
    return this._hanaPrometheusExporter.internalValue;
  }

  // jmx_prometheus_exporter - computed: true, optional: true, required: false
  private _jmxPrometheusExporter = new ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporterOutputReference(this, "jmx_prometheus_exporter");
  public get jmxPrometheusExporter() {
    return this._jmxPrometheusExporter;
  }
  public putJmxPrometheusExporter(value: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporter) {
    this._jmxPrometheusExporter.internalValue = value;
  }
  public resetJmxPrometheusExporter() {
    this._jmxPrometheusExporter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jmxPrometheusExporterInput() {
    return this._jmxPrometheusExporter.internalValue;
  }

  // logs - computed: true, optional: true, required: false
  private _logs = new ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsList(this, "logs", false);
  public get logs() {
    return this._logs;
  }
  public putLogs(value: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogs[] | cdktn.IResolvable) {
    this._logs.internalValue = value;
  }
  public resetLogs() {
    this._logs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsInput() {
    return this._logs.internalValue;
  }

  // net_weaver_prometheus_exporter - computed: true, optional: true, required: false
  private _netWeaverPrometheusExporter = new ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporterOutputReference(this, "net_weaver_prometheus_exporter");
  public get netWeaverPrometheusExporter() {
    return this._netWeaverPrometheusExporter;
  }
  public putNetWeaverPrometheusExporter(value: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporter) {
    this._netWeaverPrometheusExporter.internalValue = value;
  }
  public resetNetWeaverPrometheusExporter() {
    this._netWeaverPrometheusExporter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netWeaverPrometheusExporterInput() {
    return this._netWeaverPrometheusExporter.internalValue;
  }

  // processes - computed: true, optional: true, required: false
  private _processes = new ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesList(this, "processes", false);
  public get processes() {
    return this._processes;
  }
  public putProcesses(value: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcesses[] | cdktn.IResolvable) {
    this._processes.internalValue = value;
  }
  public resetProcesses() {
    this._processes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processesInput() {
    return this._processes.internalValue;
  }

  // sql_server_prometheus_exporter - computed: true, optional: true, required: false
  private _sqlServerPrometheusExporter = new ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsSqlServerPrometheusExporterOutputReference(this, "sql_server_prometheus_exporter");
  public get sqlServerPrometheusExporter() {
    return this._sqlServerPrometheusExporter;
  }
  public putSqlServerPrometheusExporter(value: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsSqlServerPrometheusExporter) {
    this._sqlServerPrometheusExporter.internalValue = value;
  }
  public resetSqlServerPrometheusExporter() {
    this._sqlServerPrometheusExporter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlServerPrometheusExporterInput() {
    return this._sqlServerPrometheusExporter.internalValue;
  }

  // windows_events - computed: true, optional: true, required: false
  private _windowsEvents = new ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsList(this, "windows_events", false);
  public get windowsEvents() {
    return this._windowsEvents;
  }
  public putWindowsEvents(value: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEvents[] | cdktn.IResolvable) {
    this._windowsEvents.internalValue = value;
  }
  public resetWindowsEvents() {
    this._windowsEvents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsEventsInput() {
    return this._windowsEvents.internalValue;
  }
}
export interface ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics {
  /**
  * The name of the metric to be monitored for the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#alarm_metric_name ApplicationinsightsApplication#alarm_metric_name}
  */
  readonly alarmMetricName?: string;
}

export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alarm_metric_name: cdktn.stringToTerraform(struct!.alarmMetricName),
  }
}


export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsToHclTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alarm_metric_name: {
      value: cdktn.stringToHclTerraform(struct!.alarmMetricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmMetricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmMetricName = this._alarmMetricName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmMetricName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarmMetricName = value.alarmMetricName;
    }
  }

  // alarm_metric_name - computed: true, optional: true, required: false
  private _alarmMetricName?: string; 
  public get alarmMetricName() {
    return this.getStringAttribute('alarm_metric_name');
  }
  public set alarmMetricName(value: string) {
    this._alarmMetricName = value;
  }
  public resetAlarmMetricName() {
    this._alarmMetricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmMetricNameInput() {
    return this._alarmMetricName;
  }
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsList extends cdktn.ComplexList {
  public internalValue? : ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics[] | cdktn.IResolvable

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
  public get(index: number): ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsOutputReference {
    return new ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs {
  /**
  * The type of encoding of the logs to be monitored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#encoding ApplicationinsightsApplication#encoding}
  */
  readonly encoding?: string;
  /**
  * The CloudWatch log group name to be associated to the monitored log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#log_group_name ApplicationinsightsApplication#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * The path of the logs to be monitored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#log_path ApplicationinsightsApplication#log_path}
  */
  readonly logPath?: string;
  /**
  * The log type decides the log patterns against which Application Insights analyzes the log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#log_type ApplicationinsightsApplication#log_type}
  */
  readonly logType?: string;
  /**
  * The name of the log pattern set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#pattern_set ApplicationinsightsApplication#pattern_set}
  */
  readonly patternSet?: string;
}

export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encoding: cdktn.stringToTerraform(struct!.encoding),
    log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
    log_path: cdktn.stringToTerraform(struct!.logPath),
    log_type: cdktn.stringToTerraform(struct!.logType),
    pattern_set: cdktn.stringToTerraform(struct!.patternSet),
  }
}


export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsToHclTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encoding: {
      value: cdktn.stringToHclTerraform(struct!.encoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_group_name: {
      value: cdktn.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_path: {
      value: cdktn.stringToHclTerraform(struct!.logPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_type: {
      value: cdktn.stringToHclTerraform(struct!.logType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern_set: {
      value: cdktn.stringToHclTerraform(struct!.patternSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.logPath = this._logPath;
    }
    if (this._logType !== undefined) {
      hasAnyValues = true;
      internalValueResult.logType = this._logType;
    }
    if (this._patternSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternSet = this._patternSet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encoding = undefined;
      this._logGroupName = undefined;
      this._logPath = undefined;
      this._logType = undefined;
      this._patternSet = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encoding = value.encoding;
      this._logGroupName = value.logGroupName;
      this._logPath = value.logPath;
      this._logType = value.logType;
      this._patternSet = value.patternSet;
    }
  }

  // encoding - computed: true, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }

  // log_group_name - computed: true, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_path - computed: true, optional: true, required: false
  private _logPath?: string; 
  public get logPath() {
    return this.getStringAttribute('log_path');
  }
  public set logPath(value: string) {
    this._logPath = value;
  }
  public resetLogPath() {
    this._logPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPathInput() {
    return this._logPath;
  }

  // log_type - computed: true, optional: true, required: false
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  public resetLogType() {
    this._logType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }

  // pattern_set - computed: true, optional: true, required: false
  private _patternSet?: string; 
  public get patternSet() {
    return this.getStringAttribute('pattern_set');
  }
  public set patternSet(value: string) {
    this._patternSet = value;
  }
  public resetPatternSet() {
    this._patternSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternSetInput() {
    return this._patternSet;
  }
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsList extends cdktn.ComplexList {
  public internalValue? : ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs[] | cdktn.IResolvable

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
  public get(index: number): ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsOutputReference {
    return new ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetrics {
  /**
  * The name of the metric to be monitored for the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#alarm_metric_name ApplicationinsightsApplication#alarm_metric_name}
  */
  readonly alarmMetricName?: string;
}

export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alarm_metric_name: cdktn.stringToTerraform(struct!.alarmMetricName),
  }
}


export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsToHclTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alarm_metric_name: {
      value: cdktn.stringToHclTerraform(struct!.alarmMetricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetrics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmMetricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmMetricName = this._alarmMetricName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetrics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmMetricName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarmMetricName = value.alarmMetricName;
    }
  }

  // alarm_metric_name - computed: true, optional: true, required: false
  private _alarmMetricName?: string; 
  public get alarmMetricName() {
    return this.getStringAttribute('alarm_metric_name');
  }
  public set alarmMetricName(value: string) {
    this._alarmMetricName = value;
  }
  public resetAlarmMetricName() {
    this._alarmMetricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmMetricNameInput() {
    return this._alarmMetricName;
  }
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsList extends cdktn.ComplexList {
  public internalValue? : ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetrics[] | cdktn.IResolvable

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
  public get(index: number): ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsOutputReference {
    return new ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcesses {
  /**
  * A list of metrics to monitor for the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#alarm_metrics ApplicationinsightsApplication#alarm_metrics}
  */
  readonly alarmMetrics?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetrics[] | cdktn.IResolvable;
  /**
  * The name of the process to be monitored for the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#process_name ApplicationinsightsApplication#process_name}
  */
  readonly processName?: string;
}

export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcesses | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alarm_metrics: cdktn.listMapper(applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsToTerraform, false)(struct!.alarmMetrics),
    process_name: cdktn.stringToTerraform(struct!.processName),
  }
}


export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesToHclTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcesses | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alarm_metrics: {
      value: cdktn.listMapperHcl(applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsToHclTerraform, false)(struct!.alarmMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsList",
    },
    process_name: {
      value: cdktn.stringToHclTerraform(struct!.processName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcesses | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmMetrics = this._alarmMetrics?.internalValue;
    }
    if (this._processName !== undefined) {
      hasAnyValues = true;
      internalValueResult.processName = this._processName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcesses | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmMetrics.internalValue = undefined;
      this._processName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarmMetrics.internalValue = value.alarmMetrics;
      this._processName = value.processName;
    }
  }

  // alarm_metrics - computed: true, optional: true, required: false
  private _alarmMetrics = new ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsList(this, "alarm_metrics", false);
  public get alarmMetrics() {
    return this._alarmMetrics;
  }
  public putAlarmMetrics(value: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetrics[] | cdktn.IResolvable) {
    this._alarmMetrics.internalValue = value;
  }
  public resetAlarmMetrics() {
    this._alarmMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmMetricsInput() {
    return this._alarmMetrics.internalValue;
  }

  // process_name - computed: true, optional: true, required: false
  private _processName?: string; 
  public get processName() {
    return this.getStringAttribute('process_name');
  }
  public set processName(value: string) {
    this._processName = value;
  }
  public resetProcessName() {
    this._processName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processNameInput() {
    return this._processName;
  }
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesList extends cdktn.ComplexList {
  public internalValue? : ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcesses[] | cdktn.IResolvable

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
  public get(index: number): ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesOutputReference {
    return new ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents {
  /**
  * The levels of event to log. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#event_levels ApplicationinsightsApplication#event_levels}
  */
  readonly eventLevels?: string[];
  /**
  * The type of Windows Events to log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#event_name ApplicationinsightsApplication#event_name}
  */
  readonly eventName?: string;
  /**
  * The CloudWatch log group name to be associated to the monitored log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#log_group_name ApplicationinsightsApplication#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * The name of the log pattern set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#pattern_set ApplicationinsightsApplication#pattern_set}
  */
  readonly patternSet?: string;
}

export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_levels: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.eventLevels),
    event_name: cdktn.stringToTerraform(struct!.eventName),
    log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
    pattern_set: cdktn.stringToTerraform(struct!.patternSet),
  }
}


export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsToHclTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event_levels: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.eventLevels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    event_name: {
      value: cdktn.stringToHclTerraform(struct!.eventName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_group_name: {
      value: cdktn.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern_set: {
      value: cdktn.stringToHclTerraform(struct!.patternSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventLevels !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventLevels = this._eventLevels;
    }
    if (this._eventName !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventName = this._eventName;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._patternSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternSet = this._patternSet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventLevels = undefined;
      this._eventName = undefined;
      this._logGroupName = undefined;
      this._patternSet = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventLevels = value.eventLevels;
      this._eventName = value.eventName;
      this._logGroupName = value.logGroupName;
      this._patternSet = value.patternSet;
    }
  }

  // event_levels - computed: true, optional: true, required: false
  private _eventLevels?: string[]; 
  public get eventLevels() {
    return this.getListAttribute('event_levels');
  }
  public set eventLevels(value: string[]) {
    this._eventLevels = value;
  }
  public resetEventLevels() {
    this._eventLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventLevelsInput() {
    return this._eventLevels;
  }

  // event_name - computed: true, optional: true, required: false
  private _eventName?: string; 
  public get eventName() {
    return this.getStringAttribute('event_name');
  }
  public set eventName(value: string) {
    this._eventName = value;
  }
  public resetEventName() {
    this._eventName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventNameInput() {
    return this._eventName;
  }

  // log_group_name - computed: true, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // pattern_set - computed: true, optional: true, required: false
  private _patternSet?: string; 
  public get patternSet() {
    return this.getStringAttribute('pattern_set');
  }
  public set patternSet(value: string) {
    this._patternSet = value;
  }
  public resetPatternSet() {
    this._patternSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternSetInput() {
    return this._patternSet;
  }
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsList extends cdktn.ComplexList {
  public internalValue? : ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents[] | cdktn.IResolvable

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
  public get(index: number): ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsOutputReference {
    return new ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails {
  /**
  * A list of metrics to monitor for the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#alarm_metrics ApplicationinsightsApplication#alarm_metrics}
  */
  readonly alarmMetrics?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics[] | cdktn.IResolvable;
  /**
  * A list of logs to monitor for the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#logs ApplicationinsightsApplication#logs}
  */
  readonly logs?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs[] | cdktn.IResolvable;
  /**
  * A list of processes to monitor for the component. Only Windows EC2 instances can have a processes section.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#processes ApplicationinsightsApplication#processes}
  */
  readonly processes?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcesses[] | cdktn.IResolvable;
  /**
  * A list of Windows Events to log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#windows_events ApplicationinsightsApplication#windows_events}
  */
  readonly windowsEvents?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents[] | cdktn.IResolvable;
}

export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alarm_metrics: cdktn.listMapper(applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsToTerraform, false)(struct!.alarmMetrics),
    logs: cdktn.listMapper(applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsToTerraform, false)(struct!.logs),
    processes: cdktn.listMapper(applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesToTerraform, false)(struct!.processes),
    windows_events: cdktn.listMapper(applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsToTerraform, false)(struct!.windowsEvents),
  }
}


export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsToHclTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alarm_metrics: {
      value: cdktn.listMapperHcl(applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsToHclTerraform, false)(struct!.alarmMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsList",
    },
    logs: {
      value: cdktn.listMapperHcl(applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsToHclTerraform, false)(struct!.logs),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsList",
    },
    processes: {
      value: cdktn.listMapperHcl(applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesToHclTerraform, false)(struct!.processes),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesList",
    },
    windows_events: {
      value: cdktn.listMapperHcl(applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsToHclTerraform, false)(struct!.windowsEvents),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmMetrics = this._alarmMetrics?.internalValue;
    }
    if (this._logs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logs = this._logs?.internalValue;
    }
    if (this._processes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processes = this._processes?.internalValue;
    }
    if (this._windowsEvents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsEvents = this._windowsEvents?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmMetrics.internalValue = undefined;
      this._logs.internalValue = undefined;
      this._processes.internalValue = undefined;
      this._windowsEvents.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarmMetrics.internalValue = value.alarmMetrics;
      this._logs.internalValue = value.logs;
      this._processes.internalValue = value.processes;
      this._windowsEvents.internalValue = value.windowsEvents;
    }
  }

  // alarm_metrics - computed: true, optional: true, required: false
  private _alarmMetrics = new ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsList(this, "alarm_metrics", false);
  public get alarmMetrics() {
    return this._alarmMetrics;
  }
  public putAlarmMetrics(value: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics[] | cdktn.IResolvable) {
    this._alarmMetrics.internalValue = value;
  }
  public resetAlarmMetrics() {
    this._alarmMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmMetricsInput() {
    return this._alarmMetrics.internalValue;
  }

  // logs - computed: true, optional: true, required: false
  private _logs = new ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsList(this, "logs", false);
  public get logs() {
    return this._logs;
  }
  public putLogs(value: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs[] | cdktn.IResolvable) {
    this._logs.internalValue = value;
  }
  public resetLogs() {
    this._logs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsInput() {
    return this._logs.internalValue;
  }

  // processes - computed: true, optional: true, required: false
  private _processes = new ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesList(this, "processes", false);
  public get processes() {
    return this._processes;
  }
  public putProcesses(value: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcesses[] | cdktn.IResolvable) {
    this._processes.internalValue = value;
  }
  public resetProcesses() {
    this._processes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processesInput() {
    return this._processes.internalValue;
  }

  // windows_events - computed: true, optional: true, required: false
  private _windowsEvents = new ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsList(this, "windows_events", false);
  public get windowsEvents() {
    return this._windowsEvents;
  }
  public putWindowsEvents(value: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents[] | cdktn.IResolvable) {
    this._windowsEvents.internalValue = value;
  }
  public resetWindowsEvents() {
    this._windowsEvents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsEventsInput() {
    return this._windowsEvents.internalValue;
  }
}
export interface ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurations {
  /**
  * The configuration settings of sub components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#sub_component_configuration_details ApplicationinsightsApplication#sub_component_configuration_details}
  */
  readonly subComponentConfigurationDetails?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails;
  /**
  * The sub component type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#sub_component_type ApplicationinsightsApplication#sub_component_type}
  */
  readonly subComponentType?: string;
}

export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sub_component_configuration_details: applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsToTerraform(struct!.subComponentConfigurationDetails),
    sub_component_type: cdktn.stringToTerraform(struct!.subComponentType),
  }
}


export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsToHclTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sub_component_configuration_details: {
      value: applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsToHclTerraform(struct!.subComponentConfigurationDetails),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails",
    },
    sub_component_type: {
      value: cdktn.stringToHclTerraform(struct!.subComponentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subComponentConfigurationDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subComponentConfigurationDetails = this._subComponentConfigurationDetails?.internalValue;
    }
    if (this._subComponentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.subComponentType = this._subComponentType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subComponentConfigurationDetails.internalValue = undefined;
      this._subComponentType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subComponentConfigurationDetails.internalValue = value.subComponentConfigurationDetails;
      this._subComponentType = value.subComponentType;
    }
  }

  // sub_component_configuration_details - computed: true, optional: true, required: false
  private _subComponentConfigurationDetails = new ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsOutputReference(this, "sub_component_configuration_details");
  public get subComponentConfigurationDetails() {
    return this._subComponentConfigurationDetails;
  }
  public putSubComponentConfigurationDetails(value: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails) {
    this._subComponentConfigurationDetails.internalValue = value;
  }
  public resetSubComponentConfigurationDetails() {
    this._subComponentConfigurationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subComponentConfigurationDetailsInput() {
    return this._subComponentConfigurationDetails.internalValue;
  }

  // sub_component_type - computed: true, optional: true, required: false
  private _subComponentType?: string; 
  public get subComponentType() {
    return this.getStringAttribute('sub_component_type');
  }
  public set subComponentType(value: string) {
    this._subComponentType = value;
  }
  public resetSubComponentType() {
    this._subComponentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subComponentTypeInput() {
    return this._subComponentType;
  }
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsList extends cdktn.ComplexList {
  public internalValue? : ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurations[] | cdktn.IResolvable

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
  public get(index: number): ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsOutputReference {
    return new ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfiguration {
  /**
  * The configuration settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#configuration_details ApplicationinsightsApplication#configuration_details}
  */
  readonly configurationDetails?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetails;
  /**
  * Sub component configurations of the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#sub_component_type_configurations ApplicationinsightsApplication#sub_component_type_configurations}
  */
  readonly subComponentTypeConfigurations?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurations[] | cdktn.IResolvable;
}

export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    configuration_details: applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsToTerraform(struct!.configurationDetails),
    sub_component_type_configurations: cdktn.listMapper(applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsToTerraform, false)(struct!.subComponentTypeConfigurations),
  }
}


export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationToHclTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    configuration_details: {
      value: applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsToHclTerraform(struct!.configurationDetails),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetails",
    },
    sub_component_type_configurations: {
      value: cdktn.listMapperHcl(applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsToHclTerraform, false)(struct!.subComponentTypeConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configurationDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationDetails = this._configurationDetails?.internalValue;
    }
    if (this._subComponentTypeConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subComponentTypeConfigurations = this._subComponentTypeConfigurations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configurationDetails.internalValue = undefined;
      this._subComponentTypeConfigurations.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configurationDetails.internalValue = value.configurationDetails;
      this._subComponentTypeConfigurations.internalValue = value.subComponentTypeConfigurations;
    }
  }

  // configuration_details - computed: true, optional: true, required: false
  private _configurationDetails = new ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsOutputReference(this, "configuration_details");
  public get configurationDetails() {
    return this._configurationDetails;
  }
  public putConfigurationDetails(value: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetails) {
    this._configurationDetails.internalValue = value;
  }
  public resetConfigurationDetails() {
    this._configurationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationDetailsInput() {
    return this._configurationDetails.internalValue;
  }

  // sub_component_type_configurations - computed: true, optional: true, required: false
  private _subComponentTypeConfigurations = new ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsList(this, "sub_component_type_configurations", false);
  public get subComponentTypeConfigurations() {
    return this._subComponentTypeConfigurations;
  }
  public putSubComponentTypeConfigurations(value: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurations[] | cdktn.IResolvable) {
    this._subComponentTypeConfigurations.internalValue = value;
  }
  public resetSubComponentTypeConfigurations() {
    this._subComponentTypeConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subComponentTypeConfigurationsInput() {
    return this._subComponentTypeConfigurations.internalValue;
  }
}
export interface ApplicationinsightsApplicationComponentMonitoringSettings {
  /**
  * The ARN of the compnonent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#component_arn ApplicationinsightsApplication#component_arn}
  */
  readonly componentArn?: string;
  /**
  * The component monitoring configuration mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#component_configuration_mode ApplicationinsightsApplication#component_configuration_mode}
  */
  readonly componentConfigurationMode?: string;
  /**
  * The name of the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#component_name ApplicationinsightsApplication#component_name}
  */
  readonly componentName?: string;
  /**
  * The monitoring configuration of the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#custom_component_configuration ApplicationinsightsApplication#custom_component_configuration}
  */
  readonly customComponentConfiguration?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfiguration;
  /**
  * The overwritten settings on default component monitoring configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#default_overwrite_component_configuration ApplicationinsightsApplication#default_overwrite_component_configuration}
  */
  readonly defaultOverwriteComponentConfiguration?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfiguration;
  /**
  * The tier of the application component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#tier ApplicationinsightsApplication#tier}
  */
  readonly tier?: string;
}

export function applicationinsightsApplicationComponentMonitoringSettingsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    component_arn: cdktn.stringToTerraform(struct!.componentArn),
    component_configuration_mode: cdktn.stringToTerraform(struct!.componentConfigurationMode),
    component_name: cdktn.stringToTerraform(struct!.componentName),
    custom_component_configuration: applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationToTerraform(struct!.customComponentConfiguration),
    default_overwrite_component_configuration: applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationToTerraform(struct!.defaultOverwriteComponentConfiguration),
    tier: cdktn.stringToTerraform(struct!.tier),
  }
}


export function applicationinsightsApplicationComponentMonitoringSettingsToHclTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    component_arn: {
      value: cdktn.stringToHclTerraform(struct!.componentArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    component_configuration_mode: {
      value: cdktn.stringToHclTerraform(struct!.componentConfigurationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    component_name: {
      value: cdktn.stringToHclTerraform(struct!.componentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_component_configuration: {
      value: applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationToHclTerraform(struct!.customComponentConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfiguration",
    },
    default_overwrite_component_configuration: {
      value: applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationToHclTerraform(struct!.defaultOverwriteComponentConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfiguration",
    },
    tier: {
      value: cdktn.stringToHclTerraform(struct!.tier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationinsightsApplicationComponentMonitoringSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._componentArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentArn = this._componentArn;
    }
    if (this._componentConfigurationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentConfigurationMode = this._componentConfigurationMode;
    }
    if (this._componentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentName = this._componentName;
    }
    if (this._customComponentConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customComponentConfiguration = this._customComponentConfiguration?.internalValue;
    }
    if (this._defaultOverwriteComponentConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultOverwriteComponentConfiguration = this._defaultOverwriteComponentConfiguration?.internalValue;
    }
    if (this._tier !== undefined) {
      hasAnyValues = true;
      internalValueResult.tier = this._tier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationComponentMonitoringSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._componentArn = undefined;
      this._componentConfigurationMode = undefined;
      this._componentName = undefined;
      this._customComponentConfiguration.internalValue = undefined;
      this._defaultOverwriteComponentConfiguration.internalValue = undefined;
      this._tier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._componentArn = value.componentArn;
      this._componentConfigurationMode = value.componentConfigurationMode;
      this._componentName = value.componentName;
      this._customComponentConfiguration.internalValue = value.customComponentConfiguration;
      this._defaultOverwriteComponentConfiguration.internalValue = value.defaultOverwriteComponentConfiguration;
      this._tier = value.tier;
    }
  }

  // component_arn - computed: true, optional: true, required: false
  private _componentArn?: string; 
  public get componentArn() {
    return this.getStringAttribute('component_arn');
  }
  public set componentArn(value: string) {
    this._componentArn = value;
  }
  public resetComponentArn() {
    this._componentArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentArnInput() {
    return this._componentArn;
  }

  // component_configuration_mode - computed: true, optional: true, required: false
  private _componentConfigurationMode?: string; 
  public get componentConfigurationMode() {
    return this.getStringAttribute('component_configuration_mode');
  }
  public set componentConfigurationMode(value: string) {
    this._componentConfigurationMode = value;
  }
  public resetComponentConfigurationMode() {
    this._componentConfigurationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentConfigurationModeInput() {
    return this._componentConfigurationMode;
  }

  // component_name - computed: true, optional: true, required: false
  private _componentName?: string; 
  public get componentName() {
    return this.getStringAttribute('component_name');
  }
  public set componentName(value: string) {
    this._componentName = value;
  }
  public resetComponentName() {
    this._componentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentNameInput() {
    return this._componentName;
  }

  // custom_component_configuration - computed: true, optional: true, required: false
  private _customComponentConfiguration = new ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationOutputReference(this, "custom_component_configuration");
  public get customComponentConfiguration() {
    return this._customComponentConfiguration;
  }
  public putCustomComponentConfiguration(value: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfiguration) {
    this._customComponentConfiguration.internalValue = value;
  }
  public resetCustomComponentConfiguration() {
    this._customComponentConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customComponentConfigurationInput() {
    return this._customComponentConfiguration.internalValue;
  }

  // default_overwrite_component_configuration - computed: true, optional: true, required: false
  private _defaultOverwriteComponentConfiguration = new ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationOutputReference(this, "default_overwrite_component_configuration");
  public get defaultOverwriteComponentConfiguration() {
    return this._defaultOverwriteComponentConfiguration;
  }
  public putDefaultOverwriteComponentConfiguration(value: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfiguration) {
    this._defaultOverwriteComponentConfiguration.internalValue = value;
  }
  public resetDefaultOverwriteComponentConfiguration() {
    this._defaultOverwriteComponentConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOverwriteComponentConfigurationInput() {
    return this._defaultOverwriteComponentConfiguration.internalValue;
  }

  // tier - computed: true, optional: true, required: false
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  public resetTier() {
    this._tier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }
}

export class ApplicationinsightsApplicationComponentMonitoringSettingsList extends cdktn.ComplexList {
  public internalValue? : ApplicationinsightsApplicationComponentMonitoringSettings[] | cdktn.IResolvable

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
  public get(index: number): ApplicationinsightsApplicationComponentMonitoringSettingsOutputReference {
    return new ApplicationinsightsApplicationComponentMonitoringSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationinsightsApplicationCustomComponents {
  /**
  * The name of the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#component_name ApplicationinsightsApplication#component_name}
  */
  readonly componentName?: string;
  /**
  * The list of resource ARNs that belong to the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#resource_list ApplicationinsightsApplication#resource_list}
  */
  readonly resourceList?: string[];
}

export function applicationinsightsApplicationCustomComponentsToTerraform(struct?: ApplicationinsightsApplicationCustomComponents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    component_name: cdktn.stringToTerraform(struct!.componentName),
    resource_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceList),
  }
}


export function applicationinsightsApplicationCustomComponentsToHclTerraform(struct?: ApplicationinsightsApplicationCustomComponents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    component_name: {
      value: cdktn.stringToHclTerraform(struct!.componentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_list: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationCustomComponentsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationinsightsApplicationCustomComponents | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._componentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentName = this._componentName;
    }
    if (this._resourceList !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceList = this._resourceList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationCustomComponents | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._componentName = undefined;
      this._resourceList = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._componentName = value.componentName;
      this._resourceList = value.resourceList;
    }
  }

  // component_name - computed: true, optional: true, required: false
  private _componentName?: string; 
  public get componentName() {
    return this.getStringAttribute('component_name');
  }
  public set componentName(value: string) {
    this._componentName = value;
  }
  public resetComponentName() {
    this._componentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentNameInput() {
    return this._componentName;
  }

  // resource_list - computed: true, optional: true, required: false
  private _resourceList?: string[]; 
  public get resourceList() {
    return this.getListAttribute('resource_list');
  }
  public set resourceList(value: string[]) {
    this._resourceList = value;
  }
  public resetResourceList() {
    this._resourceList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceListInput() {
    return this._resourceList;
  }
}

export class ApplicationinsightsApplicationCustomComponentsList extends cdktn.ComplexList {
  public internalValue? : ApplicationinsightsApplicationCustomComponents[] | cdktn.IResolvable

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
  public get(index: number): ApplicationinsightsApplicationCustomComponentsOutputReference {
    return new ApplicationinsightsApplicationCustomComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationinsightsApplicationLogPatternSetsLogPatterns {
  /**
  * The log pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#pattern ApplicationinsightsApplication#pattern}
  */
  readonly pattern?: string;
  /**
  * The name of the log pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#pattern_name ApplicationinsightsApplication#pattern_name}
  */
  readonly patternName?: string;
  /**
  * Rank of the log pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#rank ApplicationinsightsApplication#rank}
  */
  readonly rank?: number;
}

export function applicationinsightsApplicationLogPatternSetsLogPatternsToTerraform(struct?: ApplicationinsightsApplicationLogPatternSetsLogPatterns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pattern: cdktn.stringToTerraform(struct!.pattern),
    pattern_name: cdktn.stringToTerraform(struct!.patternName),
    rank: cdktn.numberToTerraform(struct!.rank),
  }
}


export function applicationinsightsApplicationLogPatternSetsLogPatternsToHclTerraform(struct?: ApplicationinsightsApplicationLogPatternSetsLogPatterns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pattern: {
      value: cdktn.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern_name: {
      value: cdktn.stringToHclTerraform(struct!.patternName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rank: {
      value: cdktn.numberToHclTerraform(struct!.rank),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationLogPatternSetsLogPatternsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationinsightsApplicationLogPatternSetsLogPatterns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._patternName !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternName = this._patternName;
    }
    if (this._rank !== undefined) {
      hasAnyValues = true;
      internalValueResult.rank = this._rank;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationLogPatternSetsLogPatterns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pattern = undefined;
      this._patternName = undefined;
      this._rank = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pattern = value.pattern;
      this._patternName = value.patternName;
      this._rank = value.rank;
    }
  }

  // pattern - computed: true, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // pattern_name - computed: true, optional: true, required: false
  private _patternName?: string; 
  public get patternName() {
    return this.getStringAttribute('pattern_name');
  }
  public set patternName(value: string) {
    this._patternName = value;
  }
  public resetPatternName() {
    this._patternName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternNameInput() {
    return this._patternName;
  }

  // rank - computed: true, optional: true, required: false
  private _rank?: number; 
  public get rank() {
    return this.getNumberAttribute('rank');
  }
  public set rank(value: number) {
    this._rank = value;
  }
  public resetRank() {
    this._rank = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rankInput() {
    return this._rank;
  }
}

export class ApplicationinsightsApplicationLogPatternSetsLogPatternsList extends cdktn.ComplexList {
  public internalValue? : ApplicationinsightsApplicationLogPatternSetsLogPatterns[] | cdktn.IResolvable

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
  public get(index: number): ApplicationinsightsApplicationLogPatternSetsLogPatternsOutputReference {
    return new ApplicationinsightsApplicationLogPatternSetsLogPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationinsightsApplicationLogPatternSets {
  /**
  * The log patterns of a set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#log_patterns ApplicationinsightsApplication#log_patterns}
  */
  readonly logPatterns?: ApplicationinsightsApplicationLogPatternSetsLogPatterns[] | cdktn.IResolvable;
  /**
  * The name of the log pattern set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#pattern_set_name ApplicationinsightsApplication#pattern_set_name}
  */
  readonly patternSetName?: string;
}

export function applicationinsightsApplicationLogPatternSetsToTerraform(struct?: ApplicationinsightsApplicationLogPatternSets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    log_patterns: cdktn.listMapper(applicationinsightsApplicationLogPatternSetsLogPatternsToTerraform, false)(struct!.logPatterns),
    pattern_set_name: cdktn.stringToTerraform(struct!.patternSetName),
  }
}


export function applicationinsightsApplicationLogPatternSetsToHclTerraform(struct?: ApplicationinsightsApplicationLogPatternSets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    log_patterns: {
      value: cdktn.listMapperHcl(applicationinsightsApplicationLogPatternSetsLogPatternsToHclTerraform, false)(struct!.logPatterns),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationinsightsApplicationLogPatternSetsLogPatternsList",
    },
    pattern_set_name: {
      value: cdktn.stringToHclTerraform(struct!.patternSetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightsApplicationLogPatternSetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationinsightsApplicationLogPatternSets | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logPatterns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logPatterns = this._logPatterns?.internalValue;
    }
    if (this._patternSetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternSetName = this._patternSetName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightsApplicationLogPatternSets | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logPatterns.internalValue = undefined;
      this._patternSetName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logPatterns.internalValue = value.logPatterns;
      this._patternSetName = value.patternSetName;
    }
  }

  // log_patterns - computed: true, optional: true, required: false
  private _logPatterns = new ApplicationinsightsApplicationLogPatternSetsLogPatternsList(this, "log_patterns", false);
  public get logPatterns() {
    return this._logPatterns;
  }
  public putLogPatterns(value: ApplicationinsightsApplicationLogPatternSetsLogPatterns[] | cdktn.IResolvable) {
    this._logPatterns.internalValue = value;
  }
  public resetLogPatterns() {
    this._logPatterns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPatternsInput() {
    return this._logPatterns.internalValue;
  }

  // pattern_set_name - computed: true, optional: true, required: false
  private _patternSetName?: string; 
  public get patternSetName() {
    return this.getStringAttribute('pattern_set_name');
  }
  public set patternSetName(value: string) {
    this._patternSetName = value;
  }
  public resetPatternSetName() {
    this._patternSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternSetNameInput() {
    return this._patternSetName;
  }
}

export class ApplicationinsightsApplicationLogPatternSetsList extends cdktn.ComplexList {
  public internalValue? : ApplicationinsightsApplicationLogPatternSets[] | cdktn.IResolvable

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
  public get(index: number): ApplicationinsightsApplicationLogPatternSetsOutputReference {
    return new ApplicationinsightsApplicationLogPatternSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationinsightsApplicationTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#key ApplicationinsightsApplication#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#value ApplicationinsightsApplication#value}
  */
  readonly value?: string;
}

export function applicationinsightsApplicationTagsToTerraform(struct?: ApplicationinsightsApplicationTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function applicationinsightsApplicationTagsToHclTerraform(struct?: ApplicationinsightsApplicationTags | cdktn.IResolvable): any {
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

export class ApplicationinsightsApplicationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationinsightsApplicationTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ApplicationinsightsApplicationTags | cdktn.IResolvable | undefined) {
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

export class ApplicationinsightsApplicationTagsList extends cdktn.ComplexList {
  public internalValue? : ApplicationinsightsApplicationTags[] | cdktn.IResolvable

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
  public get(index: number): ApplicationinsightsApplicationTagsOutputReference {
    return new ApplicationinsightsApplicationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application awscc_applicationinsights_application}
*/
export class ApplicationinsightsApplication extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_applicationinsights_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ApplicationinsightsApplication resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationinsightsApplication to import
  * @param importFromId The id of the existing ApplicationinsightsApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationinsightsApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_applicationinsights_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/applicationinsights_application awscc_applicationinsights_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationinsightsApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationinsightsApplicationConfig) {
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
    this._attachMissingPermission = config.attachMissingPermission;
    this._autoConfigurationEnabled = config.autoConfigurationEnabled;
    this._componentMonitoringSettings.internalValue = config.componentMonitoringSettings;
    this._customComponents.internalValue = config.customComponents;
    this._cweMonitorEnabled = config.cweMonitorEnabled;
    this._groupingType = config.groupingType;
    this._logPatternSets.internalValue = config.logPatternSets;
    this._opsCenterEnabled = config.opsCenterEnabled;
    this._opsItemSnsTopicArn = config.opsItemSnsTopicArn;
    this._resourceGroupName = config.resourceGroupName;
    this._snsNotificationArn = config.snsNotificationArn;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_arn - computed: true, optional: false, required: false
  public get applicationArn() {
    return this.getStringAttribute('application_arn');
  }

  // attach_missing_permission - computed: true, optional: true, required: false
  private _attachMissingPermission?: boolean | cdktn.IResolvable; 
  public get attachMissingPermission() {
    return this.getBooleanAttribute('attach_missing_permission');
  }
  public set attachMissingPermission(value: boolean | cdktn.IResolvable) {
    this._attachMissingPermission = value;
  }
  public resetAttachMissingPermission() {
    this._attachMissingPermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachMissingPermissionInput() {
    return this._attachMissingPermission;
  }

  // auto_configuration_enabled - computed: true, optional: true, required: false
  private _autoConfigurationEnabled?: boolean | cdktn.IResolvable; 
  public get autoConfigurationEnabled() {
    return this.getBooleanAttribute('auto_configuration_enabled');
  }
  public set autoConfigurationEnabled(value: boolean | cdktn.IResolvable) {
    this._autoConfigurationEnabled = value;
  }
  public resetAutoConfigurationEnabled() {
    this._autoConfigurationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoConfigurationEnabledInput() {
    return this._autoConfigurationEnabled;
  }

  // component_monitoring_settings - computed: true, optional: true, required: false
  private _componentMonitoringSettings = new ApplicationinsightsApplicationComponentMonitoringSettingsList(this, "component_monitoring_settings", false);
  public get componentMonitoringSettings() {
    return this._componentMonitoringSettings;
  }
  public putComponentMonitoringSettings(value: ApplicationinsightsApplicationComponentMonitoringSettings[] | cdktn.IResolvable) {
    this._componentMonitoringSettings.internalValue = value;
  }
  public resetComponentMonitoringSettings() {
    this._componentMonitoringSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentMonitoringSettingsInput() {
    return this._componentMonitoringSettings.internalValue;
  }

  // custom_components - computed: true, optional: true, required: false
  private _customComponents = new ApplicationinsightsApplicationCustomComponentsList(this, "custom_components", false);
  public get customComponents() {
    return this._customComponents;
  }
  public putCustomComponents(value: ApplicationinsightsApplicationCustomComponents[] | cdktn.IResolvable) {
    this._customComponents.internalValue = value;
  }
  public resetCustomComponents() {
    this._customComponents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customComponentsInput() {
    return this._customComponents.internalValue;
  }

  // cwe_monitor_enabled - computed: true, optional: true, required: false
  private _cweMonitorEnabled?: boolean | cdktn.IResolvable; 
  public get cweMonitorEnabled() {
    return this.getBooleanAttribute('cwe_monitor_enabled');
  }
  public set cweMonitorEnabled(value: boolean | cdktn.IResolvable) {
    this._cweMonitorEnabled = value;
  }
  public resetCweMonitorEnabled() {
    this._cweMonitorEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cweMonitorEnabledInput() {
    return this._cweMonitorEnabled;
  }

  // grouping_type - computed: true, optional: true, required: false
  private _groupingType?: string; 
  public get groupingType() {
    return this.getStringAttribute('grouping_type');
  }
  public set groupingType(value: string) {
    this._groupingType = value;
  }
  public resetGroupingType() {
    this._groupingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupingTypeInput() {
    return this._groupingType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_pattern_sets - computed: true, optional: true, required: false
  private _logPatternSets = new ApplicationinsightsApplicationLogPatternSetsList(this, "log_pattern_sets", false);
  public get logPatternSets() {
    return this._logPatternSets;
  }
  public putLogPatternSets(value: ApplicationinsightsApplicationLogPatternSets[] | cdktn.IResolvable) {
    this._logPatternSets.internalValue = value;
  }
  public resetLogPatternSets() {
    this._logPatternSets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPatternSetsInput() {
    return this._logPatternSets.internalValue;
  }

  // ops_center_enabled - computed: true, optional: true, required: false
  private _opsCenterEnabled?: boolean | cdktn.IResolvable; 
  public get opsCenterEnabled() {
    return this.getBooleanAttribute('ops_center_enabled');
  }
  public set opsCenterEnabled(value: boolean | cdktn.IResolvable) {
    this._opsCenterEnabled = value;
  }
  public resetOpsCenterEnabled() {
    this._opsCenterEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsCenterEnabledInput() {
    return this._opsCenterEnabled;
  }

  // ops_item_sns_topic_arn - computed: true, optional: true, required: false
  private _opsItemSnsTopicArn?: string; 
  public get opsItemSnsTopicArn() {
    return this.getStringAttribute('ops_item_sns_topic_arn');
  }
  public set opsItemSnsTopicArn(value: string) {
    this._opsItemSnsTopicArn = value;
  }
  public resetOpsItemSnsTopicArn() {
    this._opsItemSnsTopicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsItemSnsTopicArnInput() {
    return this._opsItemSnsTopicArn;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // sns_notification_arn - computed: true, optional: true, required: false
  private _snsNotificationArn?: string; 
  public get snsNotificationArn() {
    return this.getStringAttribute('sns_notification_arn');
  }
  public set snsNotificationArn(value: string) {
    this._snsNotificationArn = value;
  }
  public resetSnsNotificationArn() {
    this._snsNotificationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsNotificationArnInput() {
    return this._snsNotificationArn;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ApplicationinsightsApplicationTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ApplicationinsightsApplicationTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attach_missing_permission: cdktn.booleanToTerraform(this._attachMissingPermission),
      auto_configuration_enabled: cdktn.booleanToTerraform(this._autoConfigurationEnabled),
      component_monitoring_settings: cdktn.listMapper(applicationinsightsApplicationComponentMonitoringSettingsToTerraform, false)(this._componentMonitoringSettings.internalValue),
      custom_components: cdktn.listMapper(applicationinsightsApplicationCustomComponentsToTerraform, false)(this._customComponents.internalValue),
      cwe_monitor_enabled: cdktn.booleanToTerraform(this._cweMonitorEnabled),
      grouping_type: cdktn.stringToTerraform(this._groupingType),
      log_pattern_sets: cdktn.listMapper(applicationinsightsApplicationLogPatternSetsToTerraform, false)(this._logPatternSets.internalValue),
      ops_center_enabled: cdktn.booleanToTerraform(this._opsCenterEnabled),
      ops_item_sns_topic_arn: cdktn.stringToTerraform(this._opsItemSnsTopicArn),
      resource_group_name: cdktn.stringToTerraform(this._resourceGroupName),
      sns_notification_arn: cdktn.stringToTerraform(this._snsNotificationArn),
      tags: cdktn.listMapper(applicationinsightsApplicationTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attach_missing_permission: {
        value: cdktn.booleanToHclTerraform(this._attachMissingPermission),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_configuration_enabled: {
        value: cdktn.booleanToHclTerraform(this._autoConfigurationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      component_monitoring_settings: {
        value: cdktn.listMapperHcl(applicationinsightsApplicationComponentMonitoringSettingsToHclTerraform, false)(this._componentMonitoringSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationinsightsApplicationComponentMonitoringSettingsList",
      },
      custom_components: {
        value: cdktn.listMapperHcl(applicationinsightsApplicationCustomComponentsToHclTerraform, false)(this._customComponents.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationinsightsApplicationCustomComponentsList",
      },
      cwe_monitor_enabled: {
        value: cdktn.booleanToHclTerraform(this._cweMonitorEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      grouping_type: {
        value: cdktn.stringToHclTerraform(this._groupingType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_pattern_sets: {
        value: cdktn.listMapperHcl(applicationinsightsApplicationLogPatternSetsToHclTerraform, false)(this._logPatternSets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationinsightsApplicationLogPatternSetsList",
      },
      ops_center_enabled: {
        value: cdktn.booleanToHclTerraform(this._opsCenterEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ops_item_sns_topic_arn: {
        value: cdktn.stringToHclTerraform(this._opsItemSnsTopicArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktn.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sns_notification_arn: {
        value: cdktn.stringToHclTerraform(this._snsNotificationArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(applicationinsightsApplicationTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationinsightsApplicationTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
