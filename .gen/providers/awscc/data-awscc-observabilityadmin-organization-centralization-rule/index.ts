// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/observabilityadmin_organization_centralization_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccObservabilityadminOrganizationCentralizationRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/observabilityadmin_organization_centralization_rule#id DataAwsccObservabilityadminOrganizationCentralizationRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration {
}

export function dataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationToTerraform(struct?: DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationToHclTerraform(struct?: DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_key_arn - computed: true, optional: false, required: false
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}
export interface DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration {
}

export function dataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationToTerraform(struct?: DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationToHclTerraform(struct?: DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_group_name_pattern - computed: true, optional: false, required: false
  public get logGroupNamePattern() {
    return this.getStringAttribute('log_group_name_pattern');
  }
}
export interface DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration {
}

export function dataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationToTerraform(struct?: DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationToHclTerraform(struct?: DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_conflict_resolution_strategy - computed: true, optional: false, required: false
  public get encryptionConflictResolutionStrategy() {
    return this.getStringAttribute('encryption_conflict_resolution_strategy');
  }

  // encryption_strategy - computed: true, optional: false, required: false
  public get encryptionStrategy() {
    return this.getStringAttribute('encryption_strategy');
  }

  // kms_key_arn - computed: true, optional: false, required: false
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
}
export interface DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration {
}

export function dataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationToTerraform(struct?: DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationToHclTerraform(struct?: DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_configuration - computed: true, optional: false, required: false
  private _backupConfiguration = new DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference(this, "backup_configuration");
  public get backupConfiguration() {
    return this._backupConfiguration;
  }

  // log_group_name_configuration - computed: true, optional: false, required: false
  private _logGroupNameConfiguration = new DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference(this, "log_group_name_configuration");
  public get logGroupNameConfiguration() {
    return this._logGroupNameConfiguration;
  }

  // logs_encryption_configuration - computed: true, optional: false, required: false
  private _logsEncryptionConfiguration = new DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference(this, "logs_encryption_configuration");
  public get logsEncryptionConfiguration() {
    return this._logsEncryptionConfiguration;
  }
}
export interface DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration {
}

export function dataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationToTerraform(struct?: DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationToHclTerraform(struct?: DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}
export interface DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration {
}

export function dataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationToTerraform(struct?: DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationToHclTerraform(struct?: DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_configuration - computed: true, optional: false, required: false
  private _backupConfiguration = new DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference(this, "backup_configuration");
  public get backupConfiguration() {
    return this._backupConfiguration;
  }
}
export interface DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestination {
}

export function dataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationToTerraform(struct?: DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationToHclTerraform(struct?: DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account - computed: true, optional: false, required: false
  public get account() {
    return this.getStringAttribute('account');
  }

  // destination_logs_configuration - computed: true, optional: false, required: false
  private _destinationLogsConfiguration = new DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference(this, "destination_logs_configuration");
  public get destinationLogsConfiguration() {
    return this._destinationLogsConfiguration;
  }

  // destination_metrics_configuration - computed: true, optional: false, required: false
  private _destinationMetricsConfiguration = new DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference(this, "destination_metrics_configuration");
  public get destinationMetricsConfiguration() {
    return this._destinationMetricsConfiguration;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}
export interface DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration {
}

export function dataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationToTerraform(struct?: DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationToHclTerraform(struct?: DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_source_selection_criteria - computed: true, optional: false, required: false
  public get dataSourceSelectionCriteria() {
    return this.getStringAttribute('data_source_selection_criteria');
  }

  // encrypted_log_group_strategy - computed: true, optional: false, required: false
  public get encryptedLogGroupStrategy() {
    return this.getStringAttribute('encrypted_log_group_strategy');
  }

  // log_group_selection_criteria - computed: true, optional: false, required: false
  public get logGroupSelectionCriteria() {
    return this.getStringAttribute('log_group_selection_criteria');
  }
}
export interface DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration {
}

export function dataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationToTerraform(struct?: DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationToHclTerraform(struct?: DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metrics_selection_criteria - computed: true, optional: false, required: false
  public get metricsSelectionCriteria() {
    return this.getStringAttribute('metrics_selection_criteria');
  }
}
export interface DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSource {
}

export function dataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceToTerraform(struct?: DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceToHclTerraform(struct?: DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // regions - computed: true, optional: false, required: false
  public get regions() {
    return cdktn.Fn.tolist(this.getListAttribute('regions'));
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // source_logs_configuration - computed: true, optional: false, required: false
  private _sourceLogsConfiguration = new DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference(this, "source_logs_configuration");
  public get sourceLogsConfiguration() {
    return this._sourceLogsConfiguration;
  }

  // source_metrics_configuration - computed: true, optional: false, required: false
  private _sourceMetricsConfiguration = new DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference(this, "source_metrics_configuration");
  public get sourceMetricsConfiguration() {
    return this._sourceMetricsConfiguration;
  }
}
export interface DataAwsccObservabilityadminOrganizationCentralizationRuleRule {
}

export function dataAwsccObservabilityadminOrganizationCentralizationRuleRuleToTerraform(struct?: DataAwsccObservabilityadminOrganizationCentralizationRuleRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccObservabilityadminOrganizationCentralizationRuleRuleToHclTerraform(struct?: DataAwsccObservabilityadminOrganizationCentralizationRuleRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccObservabilityadminOrganizationCentralizationRuleRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccObservabilityadminOrganizationCentralizationRuleRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination - computed: true, optional: false, required: false
  private _destination = new DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
}
export interface DataAwsccObservabilityadminOrganizationCentralizationRuleTags {
}

export function dataAwsccObservabilityadminOrganizationCentralizationRuleTagsToTerraform(struct?: DataAwsccObservabilityadminOrganizationCentralizationRuleTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccObservabilityadminOrganizationCentralizationRuleTagsToHclTerraform(struct?: DataAwsccObservabilityadminOrganizationCentralizationRuleTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccObservabilityadminOrganizationCentralizationRuleTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccObservabilityadminOrganizationCentralizationRuleTags | undefined) {
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

export class DataAwsccObservabilityadminOrganizationCentralizationRuleTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference {
    return new DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/observabilityadmin_organization_centralization_rule awscc_observabilityadmin_organization_centralization_rule}
*/
export class DataAwsccObservabilityadminOrganizationCentralizationRule extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_observabilityadmin_organization_centralization_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccObservabilityadminOrganizationCentralizationRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccObservabilityadminOrganizationCentralizationRule to import
  * @param importFromId The id of the existing DataAwsccObservabilityadminOrganizationCentralizationRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/observabilityadmin_organization_centralization_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccObservabilityadminOrganizationCentralizationRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_observabilityadmin_organization_centralization_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/observabilityadmin_organization_centralization_rule awscc_observabilityadmin_organization_centralization_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccObservabilityadminOrganizationCentralizationRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccObservabilityadminOrganizationCentralizationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_observabilityadmin_organization_centralization_rule',
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

  // rule - computed: true, optional: false, required: false
  private _rule = new DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference(this, "rule");
  public get rule() {
    return this._rule;
  }

  // rule_arn - computed: true, optional: false, required: false
  public get ruleArn() {
    return this.getStringAttribute('rule_arn');
  }

  // rule_name - computed: true, optional: false, required: false
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccObservabilityadminOrganizationCentralizationRuleTagsList(this, "tags", true);
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
