// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/lookoutmetrics_anomaly_detector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccLookoutmetricsAnomalyDetectorConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/lookoutmetrics_anomaly_detector#id DataAwsccLookoutmetricsAnomalyDetector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfig {
}

export function dataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigToHclTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // anomaly_detector_frequency - computed: true, optional: false, required: false
  public get anomalyDetectorFrequency() {
    return this.getStringAttribute('anomaly_detector_frequency');
  }
}
export interface DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStruct {
}

export function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructToHclTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation_function - computed: true, optional: false, required: false
  public get aggregationFunction() {
    return this.getStringAttribute('aggregation_function');
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}

export class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference {
    return new DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig {
}

export function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigToHclTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // flow_name - computed: true, optional: false, required: false
  public get flowName() {
    return this.getStringAttribute('flow_name');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig {
}

export function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigToHclTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig | undefined) {
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
}
export interface DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration {
}

export function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationToHclTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // security_group_id_list - computed: true, optional: false, required: false
  public get securityGroupIdList() {
    return this.getListAttribute('security_group_id_list');
  }

  // subnet_id_list - computed: true, optional: false, required: false
  public get subnetIdList() {
    return this.getListAttribute('subnet_id_list');
  }
}
export interface DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig {
}

export function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigToHclTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database_host - computed: true, optional: false, required: false
  public get databaseHost() {
    return this.getStringAttribute('database_host');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // database_port - computed: true, optional: false, required: false
  public get databasePort() {
    return this.getNumberAttribute('database_port');
  }

  // db_instance_identifier - computed: true, optional: false, required: false
  public get dbInstanceIdentifier() {
    return this.getStringAttribute('db_instance_identifier');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // secret_manager_arn - computed: true, optional: false, required: false
  public get secretManagerArn() {
    return this.getStringAttribute('secret_manager_arn');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // vpc_configuration - computed: true, optional: false, required: false
  private _vpcConfiguration = new DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference(this, "vpc_configuration");
  public get vpcConfiguration() {
    return this._vpcConfiguration;
  }
}
export interface DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration {
}

export function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationToHclTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // security_group_id_list - computed: true, optional: false, required: false
  public get securityGroupIdList() {
    return this.getListAttribute('security_group_id_list');
  }

  // subnet_id_list - computed: true, optional: false, required: false
  public get subnetIdList() {
    return this.getListAttribute('subnet_id_list');
  }
}
export interface DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig {
}

export function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigToHclTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_identifier - computed: true, optional: false, required: false
  public get clusterIdentifier() {
    return this.getStringAttribute('cluster_identifier');
  }

  // database_host - computed: true, optional: false, required: false
  public get databaseHost() {
    return this.getStringAttribute('database_host');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // database_port - computed: true, optional: false, required: false
  public get databasePort() {
    return this.getNumberAttribute('database_port');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // secret_manager_arn - computed: true, optional: false, required: false
  public get secretManagerArn() {
    return this.getStringAttribute('secret_manager_arn');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // vpc_configuration - computed: true, optional: false, required: false
  private _vpcConfiguration = new DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference(this, "vpc_configuration");
  public get vpcConfiguration() {
    return this._vpcConfiguration;
  }
}
export interface DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor {
}

export function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorToHclTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // charset - computed: true, optional: false, required: false
  public get charset() {
    return this.getStringAttribute('charset');
  }

  // contains_header - computed: true, optional: false, required: false
  public get containsHeader() {
    return this.getBooleanAttribute('contains_header');
  }

  // delimiter - computed: true, optional: false, required: false
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }

  // file_compression - computed: true, optional: false, required: false
  public get fileCompression() {
    return this.getStringAttribute('file_compression');
  }

  // header_list - computed: true, optional: false, required: false
  public get headerList() {
    return this.getListAttribute('header_list');
  }

  // quote_symbol - computed: true, optional: false, required: false
  public get quoteSymbol() {
    return this.getStringAttribute('quote_symbol');
  }
}
export interface DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor {
}

export function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorToHclTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // charset - computed: true, optional: false, required: false
  public get charset() {
    return this.getStringAttribute('charset');
  }

  // file_compression - computed: true, optional: false, required: false
  public get fileCompression() {
    return this.getStringAttribute('file_compression');
  }
}
export interface DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor {
}

export function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorToHclTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // csv_format_descriptor - computed: true, optional: false, required: false
  private _csvFormatDescriptor = new DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference(this, "csv_format_descriptor");
  public get csvFormatDescriptor() {
    return this._csvFormatDescriptor;
  }

  // json_format_descriptor - computed: true, optional: false, required: false
  private _jsonFormatDescriptor = new DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference(this, "json_format_descriptor");
  public get jsonFormatDescriptor() {
    return this._jsonFormatDescriptor;
  }
}
export interface DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig {
}

export function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigToHclTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_format_descriptor - computed: true, optional: false, required: false
  private _fileFormatDescriptor = new DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference(this, "file_format_descriptor");
  public get fileFormatDescriptor() {
    return this._fileFormatDescriptor;
  }

  // historical_data_path_list - computed: true, optional: false, required: false
  public get historicalDataPathList() {
    return this.getListAttribute('historical_data_path_list');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // templated_path_list - computed: true, optional: false, required: false
  public get templatedPathList() {
    return this.getListAttribute('templated_path_list');
  }
}
export interface DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSource {
}

export function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceToHclTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_flow_config - computed: true, optional: false, required: false
  private _appFlowConfig = new DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference(this, "app_flow_config");
  public get appFlowConfig() {
    return this._appFlowConfig;
  }

  // cloudwatch_config - computed: true, optional: false, required: false
  private _cloudwatchConfig = new DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference(this, "cloudwatch_config");
  public get cloudwatchConfig() {
    return this._cloudwatchConfig;
  }

  // rds_source_config - computed: true, optional: false, required: false
  private _rdsSourceConfig = new DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference(this, "rds_source_config");
  public get rdsSourceConfig() {
    return this._rdsSourceConfig;
  }

  // redshift_source_config - computed: true, optional: false, required: false
  private _redshiftSourceConfig = new DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference(this, "redshift_source_config");
  public get redshiftSourceConfig() {
    return this._redshiftSourceConfig;
  }

  // s3_source_config - computed: true, optional: false, required: false
  private _s3SourceConfig = new DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference(this, "s3_source_config");
  public get s3SourceConfig() {
    return this._s3SourceConfig;
  }
}
export interface DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumn {
}

export function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnToHclTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_format - computed: true, optional: false, required: false
  public get columnFormat() {
    return this.getStringAttribute('column_format');
  }

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
}
export interface DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStruct {
}

export function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructToHclTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_list - computed: true, optional: false, required: false
  public get dimensionList() {
    return this.getListAttribute('dimension_list');
  }

  // metric_list - computed: true, optional: false, required: false
  private _metricList = new DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructList(this, "metric_list", false);
  public get metricList() {
    return this._metricList;
  }

  // metric_set_description - computed: true, optional: false, required: false
  public get metricSetDescription() {
    return this.getStringAttribute('metric_set_description');
  }

  // metric_set_frequency - computed: true, optional: false, required: false
  public get metricSetFrequency() {
    return this.getStringAttribute('metric_set_frequency');
  }

  // metric_set_name - computed: true, optional: false, required: false
  public get metricSetName() {
    return this.getStringAttribute('metric_set_name');
  }

  // metric_source - computed: true, optional: false, required: false
  private _metricSource = new DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference(this, "metric_source");
  public get metricSource() {
    return this._metricSource;
  }

  // offset - computed: true, optional: false, required: false
  public get offset() {
    return this.getNumberAttribute('offset');
  }

  // timestamp_column - computed: true, optional: false, required: false
  private _timestampColumn = new DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference(this, "timestamp_column");
  public get timestampColumn() {
    return this._timestampColumn;
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
}

export class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference {
    return new DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/lookoutmetrics_anomaly_detector awscc_lookoutmetrics_anomaly_detector}
*/
export class DataAwsccLookoutmetricsAnomalyDetector extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_lookoutmetrics_anomaly_detector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccLookoutmetricsAnomalyDetector resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccLookoutmetricsAnomalyDetector to import
  * @param importFromId The id of the existing DataAwsccLookoutmetricsAnomalyDetector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/lookoutmetrics_anomaly_detector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccLookoutmetricsAnomalyDetector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lookoutmetrics_anomaly_detector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/lookoutmetrics_anomaly_detector awscc_lookoutmetrics_anomaly_detector} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccLookoutmetricsAnomalyDetectorConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccLookoutmetricsAnomalyDetectorConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_lookoutmetrics_anomaly_detector',
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

  // anomaly_detector_config - computed: true, optional: false, required: false
  private _anomalyDetectorConfig = new DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference(this, "anomaly_detector_config");
  public get anomalyDetectorConfig() {
    return this._anomalyDetectorConfig;
  }

  // anomaly_detector_description - computed: true, optional: false, required: false
  public get anomalyDetectorDescription() {
    return this.getStringAttribute('anomaly_detector_description');
  }

  // anomaly_detector_name - computed: true, optional: false, required: false
  public get anomalyDetectorName() {
    return this.getStringAttribute('anomaly_detector_name');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // kms_key_arn - computed: true, optional: false, required: false
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }

  // metric_set_list - computed: true, optional: false, required: false
  private _metricSetList = new DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructList(this, "metric_set_list", false);
  public get metricSetList() {
    return this._metricSetList;
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
