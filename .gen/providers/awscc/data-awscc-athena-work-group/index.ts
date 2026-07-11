// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/athena_work_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccAthenaWorkGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/athena_work_group#id DataAwsccAthenaWorkGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccAthenaWorkGroupTags {
}

export function dataAwsccAthenaWorkGroupTagsToTerraform(struct?: DataAwsccAthenaWorkGroupTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAthenaWorkGroupTagsToHclTerraform(struct?: DataAwsccAthenaWorkGroupTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAthenaWorkGroupTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAthenaWorkGroupTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAthenaWorkGroupTags | undefined) {
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

export class DataAwsccAthenaWorkGroupTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAthenaWorkGroupTagsOutputReference {
    return new DataAwsccAthenaWorkGroupTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration {
}

export function dataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationToHclTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_key - computed: true, optional: false, required: false
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
}
export interface DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications {
}

export function dataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsToHclTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new cdktn.StringMap(this, "properties");
  public get properties() {
    return this._properties;
  }
}

export class DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference {
    return new DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfiguration {
}

export function dataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationToHclTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_configs - computed: true, optional: false, required: false
  private _additionalConfigs = new cdktn.StringMap(this, "additional_configs");
  public get additionalConfigs() {
    return this._additionalConfigs;
  }

  // classifications - computed: true, optional: false, required: false
  private _classifications = new DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList(this, "classifications", false);
  public get classifications() {
    return this._classifications;
  }

  // coordinator_dpu_size - computed: true, optional: false, required: false
  public get coordinatorDpuSize() {
    return this.getNumberAttribute('coordinator_dpu_size');
  }

  // default_executor_dpu_size - computed: true, optional: false, required: false
  public get defaultExecutorDpuSize() {
    return this.getNumberAttribute('default_executor_dpu_size');
  }

  // max_concurrent_dpus - computed: true, optional: false, required: false
  public get maxConcurrentDpus() {
    return this.getNumberAttribute('max_concurrent_dpus');
  }

  // spark_properties - computed: true, optional: false, required: false
  private _sparkProperties = new cdktn.StringMap(this, "spark_properties");
  public get sparkProperties() {
    return this._sparkProperties;
  }
}
export interface DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersion {
}

export function dataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionToHclTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // effective_engine_version - computed: true, optional: false, required: false
  public get effectiveEngineVersion() {
    return this.getStringAttribute('effective_engine_version');
  }

  // selected_engine_version - computed: true, optional: false, required: false
  public get selectedEngineVersion() {
    return this.getStringAttribute('selected_engine_version');
  }
}
export interface DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration {
}

export function dataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationToHclTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_key - computed: true, optional: false, required: false
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
}
export interface DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration {
}

export function dataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationToHclTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration | undefined) {
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

  // encryption_configuration - computed: true, optional: false, required: false
  private _encryptionConfiguration = new DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
}
export interface DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration {
}

export function dataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationToHclTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration | undefined) {
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

  // log_group - computed: true, optional: false, required: false
  public get logGroup() {
    return this.getStringAttribute('log_group');
  }

  // log_stream_name_prefix - computed: true, optional: false, required: false
  public get logStreamNamePrefix() {
    return this.getStringAttribute('log_stream_name_prefix');
  }

  // log_types - computed: true, optional: false, required: false
  private _logTypes = new cdktn.StringListMap(this, "log_types");
  public get logTypes() {
    return this._logTypes;
  }
}
export interface DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration {
}

export function dataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationToHclTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration | undefined) {
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

  // kms_key - computed: true, optional: false, required: false
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
}
export interface DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration {
}

export function dataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationToHclTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration | undefined) {
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

  // kms_key - computed: true, optional: false, required: false
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }

  // log_location - computed: true, optional: false, required: false
  public get logLocation() {
    return this.getStringAttribute('log_location');
  }
}
export interface DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration {
}

export function dataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationToHclTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudwatch_logging_configuration - computed: true, optional: false, required: false
  private _cloudwatchLoggingConfiguration = new DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference(this, "cloudwatch_logging_configuration");
  public get cloudwatchLoggingConfiguration() {
    return this._cloudwatchLoggingConfiguration;
  }

  // managed_logging_configuration - computed: true, optional: false, required: false
  private _managedLoggingConfiguration = new DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference(this, "managed_logging_configuration");
  public get managedLoggingConfiguration() {
    return this._managedLoggingConfiguration;
  }

  // s3_logging_configuration - computed: true, optional: false, required: false
  private _s3LoggingConfiguration = new DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference(this, "s3_logging_configuration");
  public get s3LoggingConfiguration() {
    return this._s3LoggingConfiguration;
  }
}
export interface DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration {
}

export function dataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationToHclTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_acl_option - computed: true, optional: false, required: false
  public get s3AclOption() {
    return this.getStringAttribute('s3_acl_option');
  }
}
export interface DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration {
}

export function dataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationToHclTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_option - computed: true, optional: false, required: false
  public get encryptionOption() {
    return this.getStringAttribute('encryption_option');
  }

  // kms_key - computed: true, optional: false, required: false
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
}
export interface DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfiguration {
}

export function dataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationToHclTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_configuration - computed: true, optional: false, required: false
  private _aclConfiguration = new DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference(this, "acl_configuration");
  public get aclConfiguration() {
    return this._aclConfiguration;
  }

  // encryption_configuration - computed: true, optional: false, required: false
  private _encryptionConfiguration = new DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }

  // expected_bucket_owner - computed: true, optional: false, required: false
  public get expectedBucketOwner() {
    return this.getStringAttribute('expected_bucket_owner');
  }

  // output_location - computed: true, optional: false, required: false
  public get outputLocation() {
    return this.getStringAttribute('output_location');
  }
}
export interface DataAwsccAthenaWorkGroupWorkGroupConfiguration {
}

export function dataAwsccAthenaWorkGroupWorkGroupConfigurationToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAthenaWorkGroupWorkGroupConfigurationToHclTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAthenaWorkGroupWorkGroupConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAthenaWorkGroupWorkGroupConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_configuration - computed: true, optional: false, required: false
  public get additionalConfiguration() {
    return this.getStringAttribute('additional_configuration');
  }

  // bytes_scanned_cutoff_per_query - computed: true, optional: false, required: false
  public get bytesScannedCutoffPerQuery() {
    return this.getNumberAttribute('bytes_scanned_cutoff_per_query');
  }

  // customer_content_encryption_configuration - computed: true, optional: false, required: false
  private _customerContentEncryptionConfiguration = new DataAwsccAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference(this, "customer_content_encryption_configuration");
  public get customerContentEncryptionConfiguration() {
    return this._customerContentEncryptionConfiguration;
  }

  // enforce_work_group_configuration - computed: true, optional: false, required: false
  public get enforceWorkGroupConfiguration() {
    return this.getBooleanAttribute('enforce_work_group_configuration');
  }

  // engine_configuration - computed: true, optional: false, required: false
  private _engineConfiguration = new DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference(this, "engine_configuration");
  public get engineConfiguration() {
    return this._engineConfiguration;
  }

  // engine_version - computed: true, optional: false, required: false
  private _engineVersion = new DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference(this, "engine_version");
  public get engineVersion() {
    return this._engineVersion;
  }

  // execution_role - computed: true, optional: false, required: false
  public get executionRole() {
    return this.getStringAttribute('execution_role');
  }

  // managed_query_results_configuration - computed: true, optional: false, required: false
  private _managedQueryResultsConfiguration = new DataAwsccAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference(this, "managed_query_results_configuration");
  public get managedQueryResultsConfiguration() {
    return this._managedQueryResultsConfiguration;
  }

  // monitoring_configuration - computed: true, optional: false, required: false
  private _monitoringConfiguration = new DataAwsccAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference(this, "monitoring_configuration");
  public get monitoringConfiguration() {
    return this._monitoringConfiguration;
  }

  // publish_cloudwatch_metrics_enabled - computed: true, optional: false, required: false
  public get publishCloudwatchMetricsEnabled() {
    return this.getBooleanAttribute('publish_cloudwatch_metrics_enabled');
  }

  // requester_pays_enabled - computed: true, optional: false, required: false
  public get requesterPaysEnabled() {
    return this.getBooleanAttribute('requester_pays_enabled');
  }

  // result_configuration - computed: true, optional: false, required: false
  private _resultConfiguration = new DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference(this, "result_configuration");
  public get resultConfiguration() {
    return this._resultConfiguration;
  }
}
export interface DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration {
}

export function dataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationToHclTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_key - computed: true, optional: false, required: false
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
}
export interface DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications {
}

export function dataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsToHclTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new cdktn.StringMap(this, "properties");
  public get properties() {
    return this._properties;
  }
}

export class DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference {
    return new DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration {
}

export function dataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationToHclTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_configs - computed: true, optional: false, required: false
  private _additionalConfigs = new cdktn.StringMap(this, "additional_configs");
  public get additionalConfigs() {
    return this._additionalConfigs;
  }

  // classifications - computed: true, optional: false, required: false
  private _classifications = new DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList(this, "classifications", false);
  public get classifications() {
    return this._classifications;
  }

  // coordinator_dpu_size - computed: true, optional: false, required: false
  public get coordinatorDpuSize() {
    return this.getNumberAttribute('coordinator_dpu_size');
  }

  // default_executor_dpu_size - computed: true, optional: false, required: false
  public get defaultExecutorDpuSize() {
    return this.getNumberAttribute('default_executor_dpu_size');
  }

  // max_concurrent_dpus - computed: true, optional: false, required: false
  public get maxConcurrentDpus() {
    return this.getNumberAttribute('max_concurrent_dpus');
  }

  // spark_properties - computed: true, optional: false, required: false
  private _sparkProperties = new cdktn.StringMap(this, "spark_properties");
  public get sparkProperties() {
    return this._sparkProperties;
  }
}
export interface DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion {
}

export function dataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionToHclTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // effective_engine_version - computed: true, optional: false, required: false
  public get effectiveEngineVersion() {
    return this.getStringAttribute('effective_engine_version');
  }

  // selected_engine_version - computed: true, optional: false, required: false
  public get selectedEngineVersion() {
    return this.getStringAttribute('selected_engine_version');
  }
}
export interface DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration {
}

export function dataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationToHclTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_key - computed: true, optional: false, required: false
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
}
export interface DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration {
}

export function dataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationToHclTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration | undefined) {
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

  // encryption_configuration - computed: true, optional: false, required: false
  private _encryptionConfiguration = new DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
}
export interface DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration {
}

export function dataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationToHclTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration | undefined) {
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

  // log_group - computed: true, optional: false, required: false
  public get logGroup() {
    return this.getStringAttribute('log_group');
  }

  // log_stream_name_prefix - computed: true, optional: false, required: false
  public get logStreamNamePrefix() {
    return this.getStringAttribute('log_stream_name_prefix');
  }

  // log_types - computed: true, optional: false, required: false
  private _logTypes = new cdktn.StringListMap(this, "log_types");
  public get logTypes() {
    return this._logTypes;
  }
}
export interface DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration {
}

export function dataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationToHclTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration | undefined) {
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

  // kms_key - computed: true, optional: false, required: false
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
}
export interface DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration {
}

export function dataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationToHclTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration | undefined) {
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

  // kms_key - computed: true, optional: false, required: false
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }

  // log_location - computed: true, optional: false, required: false
  public get logLocation() {
    return this.getStringAttribute('log_location');
  }
}
export interface DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration {
}

export function dataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationToHclTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudwatch_logging_configuration - computed: true, optional: false, required: false
  private _cloudwatchLoggingConfiguration = new DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference(this, "cloudwatch_logging_configuration");
  public get cloudwatchLoggingConfiguration() {
    return this._cloudwatchLoggingConfiguration;
  }

  // managed_logging_configuration - computed: true, optional: false, required: false
  private _managedLoggingConfiguration = new DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference(this, "managed_logging_configuration");
  public get managedLoggingConfiguration() {
    return this._managedLoggingConfiguration;
  }

  // s3_logging_configuration - computed: true, optional: false, required: false
  private _s3LoggingConfiguration = new DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference(this, "s3_logging_configuration");
  public get s3LoggingConfiguration() {
    return this._s3LoggingConfiguration;
  }
}
export interface DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration {
}

export function dataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationToHclTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_acl_option - computed: true, optional: false, required: false
  public get s3AclOption() {
    return this.getStringAttribute('s3_acl_option');
  }
}
export interface DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration {
}

export function dataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationToHclTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_option - computed: true, optional: false, required: false
  public get encryptionOption() {
    return this.getStringAttribute('encryption_option');
  }

  // kms_key - computed: true, optional: false, required: false
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
}
export interface DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates {
}

export function dataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesToHclTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_configuration - computed: true, optional: false, required: false
  private _aclConfiguration = new DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference(this, "acl_configuration");
  public get aclConfiguration() {
    return this._aclConfiguration;
  }

  // encryption_configuration - computed: true, optional: false, required: false
  private _encryptionConfiguration = new DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }

  // expected_bucket_owner - computed: true, optional: false, required: false
  public get expectedBucketOwner() {
    return this.getStringAttribute('expected_bucket_owner');
  }

  // output_location - computed: true, optional: false, required: false
  public get outputLocation() {
    return this.getStringAttribute('output_location');
  }

  // remove_acl_configuration - computed: true, optional: false, required: false
  public get removeAclConfiguration() {
    return this.getBooleanAttribute('remove_acl_configuration');
  }

  // remove_encryption_configuration - computed: true, optional: false, required: false
  public get removeEncryptionConfiguration() {
    return this.getBooleanAttribute('remove_encryption_configuration');
  }

  // remove_expected_bucket_owner - computed: true, optional: false, required: false
  public get removeExpectedBucketOwner() {
    return this.getBooleanAttribute('remove_expected_bucket_owner');
  }

  // remove_output_location - computed: true, optional: false, required: false
  public get removeOutputLocation() {
    return this.getBooleanAttribute('remove_output_location');
  }
}
export interface DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdates {
}

export function dataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdates): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesToHclTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdates): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_configuration - computed: true, optional: false, required: false
  public get additionalConfiguration() {
    return this.getStringAttribute('additional_configuration');
  }

  // bytes_scanned_cutoff_per_query - computed: true, optional: false, required: false
  public get bytesScannedCutoffPerQuery() {
    return this.getNumberAttribute('bytes_scanned_cutoff_per_query');
  }

  // customer_content_encryption_configuration - computed: true, optional: false, required: false
  private _customerContentEncryptionConfiguration = new DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference(this, "customer_content_encryption_configuration");
  public get customerContentEncryptionConfiguration() {
    return this._customerContentEncryptionConfiguration;
  }

  // enforce_work_group_configuration - computed: true, optional: false, required: false
  public get enforceWorkGroupConfiguration() {
    return this.getBooleanAttribute('enforce_work_group_configuration');
  }

  // engine_configuration - computed: true, optional: false, required: false
  private _engineConfiguration = new DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference(this, "engine_configuration");
  public get engineConfiguration() {
    return this._engineConfiguration;
  }

  // engine_version - computed: true, optional: false, required: false
  private _engineVersion = new DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference(this, "engine_version");
  public get engineVersion() {
    return this._engineVersion;
  }

  // execution_role - computed: true, optional: false, required: false
  public get executionRole() {
    return this.getStringAttribute('execution_role');
  }

  // managed_query_results_configuration - computed: true, optional: false, required: false
  private _managedQueryResultsConfiguration = new DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference(this, "managed_query_results_configuration");
  public get managedQueryResultsConfiguration() {
    return this._managedQueryResultsConfiguration;
  }

  // monitoring_configuration - computed: true, optional: false, required: false
  private _monitoringConfiguration = new DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference(this, "monitoring_configuration");
  public get monitoringConfiguration() {
    return this._monitoringConfiguration;
  }

  // publish_cloudwatch_metrics_enabled - computed: true, optional: false, required: false
  public get publishCloudwatchMetricsEnabled() {
    return this.getBooleanAttribute('publish_cloudwatch_metrics_enabled');
  }

  // remove_bytes_scanned_cutoff_per_query - computed: true, optional: false, required: false
  public get removeBytesScannedCutoffPerQuery() {
    return this.getBooleanAttribute('remove_bytes_scanned_cutoff_per_query');
  }

  // remove_customer_content_encryption_configuration - computed: true, optional: false, required: false
  public get removeCustomerContentEncryptionConfiguration() {
    return this.getBooleanAttribute('remove_customer_content_encryption_configuration');
  }

  // requester_pays_enabled - computed: true, optional: false, required: false
  public get requesterPaysEnabled() {
    return this.getBooleanAttribute('requester_pays_enabled');
  }

  // result_configuration_updates - computed: true, optional: false, required: false
  private _resultConfigurationUpdates = new DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference(this, "result_configuration_updates");
  public get resultConfigurationUpdates() {
    return this._resultConfigurationUpdates;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/athena_work_group awscc_athena_work_group}
*/
export class DataAwsccAthenaWorkGroup extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_athena_work_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccAthenaWorkGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccAthenaWorkGroup to import
  * @param importFromId The id of the existing DataAwsccAthenaWorkGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/athena_work_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccAthenaWorkGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_athena_work_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/athena_work_group awscc_athena_work_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccAthenaWorkGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccAthenaWorkGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_athena_work_group',
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

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // recursive_delete_option - computed: true, optional: false, required: false
  public get recursiveDeleteOption() {
    return this.getBooleanAttribute('recursive_delete_option');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccAthenaWorkGroupTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // work_group_configuration - computed: true, optional: false, required: false
  private _workGroupConfiguration = new DataAwsccAthenaWorkGroupWorkGroupConfigurationOutputReference(this, "work_group_configuration");
  public get workGroupConfiguration() {
    return this._workGroupConfiguration;
  }

  // work_group_configuration_updates - computed: true, optional: false, required: false
  private _workGroupConfigurationUpdates = new DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference(this, "work_group_configuration_updates");
  public get workGroupConfigurationUpdates() {
    return this._workGroupConfigurationUpdates;
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
