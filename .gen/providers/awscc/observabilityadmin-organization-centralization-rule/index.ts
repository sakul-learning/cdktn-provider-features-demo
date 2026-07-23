// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_centralization_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ObservabilityadminOrganizationCentralizationRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_centralization_rule#rule ObservabilityadminOrganizationCentralizationRule#rule}
  */
  readonly rule: ObservabilityadminOrganizationCentralizationRuleRule;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_centralization_rule#rule_name ObservabilityadminOrganizationCentralizationRule#rule_name}
  */
  readonly ruleName: string;
  /**
  * An array of key-value pairs to apply to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_centralization_rule#tags ObservabilityadminOrganizationCentralizationRule#tags}
  */
  readonly tags?: ObservabilityadminOrganizationCentralizationRuleTags[] | cdktn.IResolvable;
}
export interface ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_centralization_rule#kms_key_arn ObservabilityadminOrganizationCentralizationRule#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_centralization_rule#region ObservabilityadminOrganizationCentralizationRule#region}
  */
  readonly region?: string;
}

export function observabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationToTerraform(struct?: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function observabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationToHclTerraform(struct?: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyArn = undefined;
      this._region = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyArn = value.kmsKeyArn;
      this._region = value.region;
    }
  }

  // kms_key_arn - computed: true, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_centralization_rule#log_group_name_pattern ObservabilityadminOrganizationCentralizationRule#log_group_name_pattern}
  */
  readonly logGroupNamePattern?: string;
}

export function observabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationToTerraform(struct?: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    log_group_name_pattern: cdktn.stringToTerraform(struct!.logGroupNamePattern),
  }
}


export function observabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationToHclTerraform(struct?: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    log_group_name_pattern: {
      value: cdktn.stringToHclTerraform(struct!.logGroupNamePattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logGroupNamePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupNamePattern = this._logGroupNamePattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logGroupNamePattern = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logGroupNamePattern = value.logGroupNamePattern;
    }
  }

  // log_group_name_pattern - computed: true, optional: true, required: false
  private _logGroupNamePattern?: string; 
  public get logGroupNamePattern() {
    return this.getStringAttribute('log_group_name_pattern');
  }
  public set logGroupNamePattern(value: string) {
    this._logGroupNamePattern = value;
  }
  public resetLogGroupNamePattern() {
    this._logGroupNamePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNamePatternInput() {
    return this._logGroupNamePattern;
  }
}
export interface ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_centralization_rule#encryption_conflict_resolution_strategy ObservabilityadminOrganizationCentralizationRule#encryption_conflict_resolution_strategy}
  */
  readonly encryptionConflictResolutionStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_centralization_rule#encryption_strategy ObservabilityadminOrganizationCentralizationRule#encryption_strategy}
  */
  readonly encryptionStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_centralization_rule#kms_key_arn ObservabilityadminOrganizationCentralizationRule#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
}

export function observabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationToTerraform(struct?: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_conflict_resolution_strategy: cdktn.stringToTerraform(struct!.encryptionConflictResolutionStrategy),
    encryption_strategy: cdktn.stringToTerraform(struct!.encryptionStrategy),
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
  }
}


export function observabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationToHclTerraform(struct?: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_conflict_resolution_strategy: {
      value: cdktn.stringToHclTerraform(struct!.encryptionConflictResolutionStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_strategy: {
      value: cdktn.stringToHclTerraform(struct!.encryptionStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionConflictResolutionStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConflictResolutionStrategy = this._encryptionConflictResolutionStrategy;
    }
    if (this._encryptionStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionStrategy = this._encryptionStrategy;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionConflictResolutionStrategy = undefined;
      this._encryptionStrategy = undefined;
      this._kmsKeyArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionConflictResolutionStrategy = value.encryptionConflictResolutionStrategy;
      this._encryptionStrategy = value.encryptionStrategy;
      this._kmsKeyArn = value.kmsKeyArn;
    }
  }

  // encryption_conflict_resolution_strategy - computed: true, optional: true, required: false
  private _encryptionConflictResolutionStrategy?: string; 
  public get encryptionConflictResolutionStrategy() {
    return this.getStringAttribute('encryption_conflict_resolution_strategy');
  }
  public set encryptionConflictResolutionStrategy(value: string) {
    this._encryptionConflictResolutionStrategy = value;
  }
  public resetEncryptionConflictResolutionStrategy() {
    this._encryptionConflictResolutionStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConflictResolutionStrategyInput() {
    return this._encryptionConflictResolutionStrategy;
  }

  // encryption_strategy - computed: true, optional: true, required: false
  private _encryptionStrategy?: string; 
  public get encryptionStrategy() {
    return this.getStringAttribute('encryption_strategy');
  }
  public set encryptionStrategy(value: string) {
    this._encryptionStrategy = value;
  }
  public resetEncryptionStrategy() {
    this._encryptionStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionStrategyInput() {
    return this._encryptionStrategy;
  }

  // kms_key_arn - computed: true, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }
}
export interface ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_centralization_rule#backup_configuration ObservabilityadminOrganizationCentralizationRule#backup_configuration}
  */
  readonly backupConfiguration?: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_centralization_rule#log_group_name_configuration ObservabilityadminOrganizationCentralizationRule#log_group_name_configuration}
  */
  readonly logGroupNameConfiguration?: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_centralization_rule#logs_encryption_configuration ObservabilityadminOrganizationCentralizationRule#logs_encryption_configuration}
  */
  readonly logsEncryptionConfiguration?: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration;
}

export function observabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationToTerraform(struct?: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    backup_configuration: observabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationToTerraform(struct!.backupConfiguration),
    log_group_name_configuration: observabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationToTerraform(struct!.logGroupNameConfiguration),
    logs_encryption_configuration: observabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationToTerraform(struct!.logsEncryptionConfiguration),
  }
}


export function observabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationToHclTerraform(struct?: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    backup_configuration: {
      value: observabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationToHclTerraform(struct!.backupConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration",
    },
    log_group_name_configuration: {
      value: observabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationToHclTerraform(struct!.logGroupNameConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration",
    },
    logs_encryption_configuration: {
      value: observabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationToHclTerraform(struct!.logsEncryptionConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupConfiguration = this._backupConfiguration?.internalValue;
    }
    if (this._logGroupNameConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupNameConfiguration = this._logGroupNameConfiguration?.internalValue;
    }
    if (this._logsEncryptionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logsEncryptionConfiguration = this._logsEncryptionConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupConfiguration.internalValue = undefined;
      this._logGroupNameConfiguration.internalValue = undefined;
      this._logsEncryptionConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupConfiguration.internalValue = value.backupConfiguration;
      this._logGroupNameConfiguration.internalValue = value.logGroupNameConfiguration;
      this._logsEncryptionConfiguration.internalValue = value.logsEncryptionConfiguration;
    }
  }

  // backup_configuration - computed: true, optional: true, required: false
  private _backupConfiguration = new ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference(this, "backup_configuration");
  public get backupConfiguration() {
    return this._backupConfiguration;
  }
  public putBackupConfiguration(value: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration) {
    this._backupConfiguration.internalValue = value;
  }
  public resetBackupConfiguration() {
    this._backupConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupConfigurationInput() {
    return this._backupConfiguration.internalValue;
  }

  // log_group_name_configuration - computed: true, optional: true, required: false
  private _logGroupNameConfiguration = new ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference(this, "log_group_name_configuration");
  public get logGroupNameConfiguration() {
    return this._logGroupNameConfiguration;
  }
  public putLogGroupNameConfiguration(value: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration) {
    this._logGroupNameConfiguration.internalValue = value;
  }
  public resetLogGroupNameConfiguration() {
    this._logGroupNameConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameConfigurationInput() {
    return this._logGroupNameConfiguration.internalValue;
  }

  // logs_encryption_configuration - computed: true, optional: true, required: false
  private _logsEncryptionConfiguration = new ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference(this, "logs_encryption_configuration");
  public get logsEncryptionConfiguration() {
    return this._logsEncryptionConfiguration;
  }
  public putLogsEncryptionConfiguration(value: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration) {
    this._logsEncryptionConfiguration.internalValue = value;
  }
  public resetLogsEncryptionConfiguration() {
    this._logsEncryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsEncryptionConfigurationInput() {
    return this._logsEncryptionConfiguration.internalValue;
  }
}
export interface ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_centralization_rule#region ObservabilityadminOrganizationCentralizationRule#region}
  */
  readonly region?: string;
}

export function observabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationToTerraform(struct?: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function observabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationToHclTerraform(struct?: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._region = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._region = value.region;
    }
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_centralization_rule#backup_configuration ObservabilityadminOrganizationCentralizationRule#backup_configuration}
  */
  readonly backupConfiguration?: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration;
}

export function observabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationToTerraform(struct?: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    backup_configuration: observabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationToTerraform(struct!.backupConfiguration),
  }
}


export function observabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationToHclTerraform(struct?: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    backup_configuration: {
      value: observabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationToHclTerraform(struct!.backupConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupConfiguration = this._backupConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupConfiguration.internalValue = value.backupConfiguration;
    }
  }

  // backup_configuration - computed: true, optional: true, required: false
  private _backupConfiguration = new ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference(this, "backup_configuration");
  public get backupConfiguration() {
    return this._backupConfiguration;
  }
  public putBackupConfiguration(value: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration) {
    this._backupConfiguration.internalValue = value;
  }
  public resetBackupConfiguration() {
    this._backupConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupConfigurationInput() {
    return this._backupConfiguration.internalValue;
  }
}
export interface ObservabilityadminOrganizationCentralizationRuleRuleDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_centralization_rule#account ObservabilityadminOrganizationCentralizationRule#account}
  */
  readonly account?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_centralization_rule#destination_logs_configuration ObservabilityadminOrganizationCentralizationRule#destination_logs_configuration}
  */
  readonly destinationLogsConfiguration?: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_centralization_rule#destination_metrics_configuration ObservabilityadminOrganizationCentralizationRule#destination_metrics_configuration}
  */
  readonly destinationMetricsConfiguration?: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_centralization_rule#region ObservabilityadminOrganizationCentralizationRule#region}
  */
  readonly region: string;
}

export function observabilityadminOrganizationCentralizationRuleRuleDestinationToTerraform(struct?: ObservabilityadminOrganizationCentralizationRuleRuleDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account: cdktn.stringToTerraform(struct!.account),
    destination_logs_configuration: observabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationToTerraform(struct!.destinationLogsConfiguration),
    destination_metrics_configuration: observabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationToTerraform(struct!.destinationMetricsConfiguration),
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function observabilityadminOrganizationCentralizationRuleRuleDestinationToHclTerraform(struct?: ObservabilityadminOrganizationCentralizationRuleRuleDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account: {
      value: cdktn.stringToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_logs_configuration: {
      value: observabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationToHclTerraform(struct!.destinationLogsConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration",
    },
    destination_metrics_configuration: {
      value: observabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationToHclTerraform(struct!.destinationMetricsConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityadminOrganizationCentralizationRuleRuleDestination | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    if (this._destinationLogsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationLogsConfiguration = this._destinationLogsConfiguration?.internalValue;
    }
    if (this._destinationMetricsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationMetricsConfiguration = this._destinationMetricsConfiguration?.internalValue;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminOrganizationCentralizationRuleRuleDestination | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._account = undefined;
      this._destinationLogsConfiguration.internalValue = undefined;
      this._destinationMetricsConfiguration.internalValue = undefined;
      this._region = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._account = value.account;
      this._destinationLogsConfiguration.internalValue = value.destinationLogsConfiguration;
      this._destinationMetricsConfiguration.internalValue = value.destinationMetricsConfiguration;
      this._region = value.region;
    }
  }

  // account - computed: true, optional: true, required: false
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // destination_logs_configuration - computed: true, optional: true, required: false
  private _destinationLogsConfiguration = new ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference(this, "destination_logs_configuration");
  public get destinationLogsConfiguration() {
    return this._destinationLogsConfiguration;
  }
  public putDestinationLogsConfiguration(value: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration) {
    this._destinationLogsConfiguration.internalValue = value;
  }
  public resetDestinationLogsConfiguration() {
    this._destinationLogsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationLogsConfigurationInput() {
    return this._destinationLogsConfiguration.internalValue;
  }

  // destination_metrics_configuration - computed: true, optional: true, required: false
  private _destinationMetricsConfiguration = new ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference(this, "destination_metrics_configuration");
  public get destinationMetricsConfiguration() {
    return this._destinationMetricsConfiguration;
  }
  public putDestinationMetricsConfiguration(value: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration) {
    this._destinationMetricsConfiguration.internalValue = value;
  }
  public resetDestinationMetricsConfiguration() {
    this._destinationMetricsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationMetricsConfigurationInput() {
    return this._destinationMetricsConfiguration.internalValue;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_centralization_rule#data_source_selection_criteria ObservabilityadminOrganizationCentralizationRule#data_source_selection_criteria}
  */
  readonly dataSourceSelectionCriteria?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_centralization_rule#encrypted_log_group_strategy ObservabilityadminOrganizationCentralizationRule#encrypted_log_group_strategy}
  */
  readonly encryptedLogGroupStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_centralization_rule#log_group_selection_criteria ObservabilityadminOrganizationCentralizationRule#log_group_selection_criteria}
  */
  readonly logGroupSelectionCriteria?: string;
}

export function observabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationToTerraform(struct?: ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source_selection_criteria: cdktn.stringToTerraform(struct!.dataSourceSelectionCriteria),
    encrypted_log_group_strategy: cdktn.stringToTerraform(struct!.encryptedLogGroupStrategy),
    log_group_selection_criteria: cdktn.stringToTerraform(struct!.logGroupSelectionCriteria),
  }
}


export function observabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationToHclTerraform(struct?: ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_source_selection_criteria: {
      value: cdktn.stringToHclTerraform(struct!.dataSourceSelectionCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypted_log_group_strategy: {
      value: cdktn.stringToHclTerraform(struct!.encryptedLogGroupStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_group_selection_criteria: {
      value: cdktn.stringToHclTerraform(struct!.logGroupSelectionCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceSelectionCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceSelectionCriteria = this._dataSourceSelectionCriteria;
    }
    if (this._encryptedLogGroupStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedLogGroupStrategy = this._encryptedLogGroupStrategy;
    }
    if (this._logGroupSelectionCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupSelectionCriteria = this._logGroupSelectionCriteria;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSourceSelectionCriteria = undefined;
      this._encryptedLogGroupStrategy = undefined;
      this._logGroupSelectionCriteria = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSourceSelectionCriteria = value.dataSourceSelectionCriteria;
      this._encryptedLogGroupStrategy = value.encryptedLogGroupStrategy;
      this._logGroupSelectionCriteria = value.logGroupSelectionCriteria;
    }
  }

  // data_source_selection_criteria - computed: true, optional: true, required: false
  private _dataSourceSelectionCriteria?: string; 
  public get dataSourceSelectionCriteria() {
    return this.getStringAttribute('data_source_selection_criteria');
  }
  public set dataSourceSelectionCriteria(value: string) {
    this._dataSourceSelectionCriteria = value;
  }
  public resetDataSourceSelectionCriteria() {
    this._dataSourceSelectionCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceSelectionCriteriaInput() {
    return this._dataSourceSelectionCriteria;
  }

  // encrypted_log_group_strategy - computed: true, optional: true, required: false
  private _encryptedLogGroupStrategy?: string; 
  public get encryptedLogGroupStrategy() {
    return this.getStringAttribute('encrypted_log_group_strategy');
  }
  public set encryptedLogGroupStrategy(value: string) {
    this._encryptedLogGroupStrategy = value;
  }
  public resetEncryptedLogGroupStrategy() {
    this._encryptedLogGroupStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedLogGroupStrategyInput() {
    return this._encryptedLogGroupStrategy;
  }

  // log_group_selection_criteria - computed: true, optional: true, required: false
  private _logGroupSelectionCriteria?: string; 
  public get logGroupSelectionCriteria() {
    return this.getStringAttribute('log_group_selection_criteria');
  }
  public set logGroupSelectionCriteria(value: string) {
    this._logGroupSelectionCriteria = value;
  }
  public resetLogGroupSelectionCriteria() {
    this._logGroupSelectionCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupSelectionCriteriaInput() {
    return this._logGroupSelectionCriteria;
  }
}
export interface ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_centralization_rule#metrics_selection_criteria ObservabilityadminOrganizationCentralizationRule#metrics_selection_criteria}
  */
  readonly metricsSelectionCriteria?: string;
}

export function observabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationToTerraform(struct?: ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics_selection_criteria: cdktn.stringToTerraform(struct!.metricsSelectionCriteria),
  }
}


export function observabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationToHclTerraform(struct?: ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics_selection_criteria: {
      value: cdktn.stringToHclTerraform(struct!.metricsSelectionCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsSelectionCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsSelectionCriteria = this._metricsSelectionCriteria;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricsSelectionCriteria = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricsSelectionCriteria = value.metricsSelectionCriteria;
    }
  }

  // metrics_selection_criteria - computed: true, optional: true, required: false
  private _metricsSelectionCriteria?: string; 
  public get metricsSelectionCriteria() {
    return this.getStringAttribute('metrics_selection_criteria');
  }
  public set metricsSelectionCriteria(value: string) {
    this._metricsSelectionCriteria = value;
  }
  public resetMetricsSelectionCriteria() {
    this._metricsSelectionCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsSelectionCriteriaInput() {
    return this._metricsSelectionCriteria;
  }
}
export interface ObservabilityadminOrganizationCentralizationRuleRuleSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_centralization_rule#regions ObservabilityadminOrganizationCentralizationRule#regions}
  */
  readonly regions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_centralization_rule#scope ObservabilityadminOrganizationCentralizationRule#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_centralization_rule#source_logs_configuration ObservabilityadminOrganizationCentralizationRule#source_logs_configuration}
  */
  readonly sourceLogsConfiguration?: ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_centralization_rule#source_metrics_configuration ObservabilityadminOrganizationCentralizationRule#source_metrics_configuration}
  */
  readonly sourceMetricsConfiguration?: ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration;
}

export function observabilityadminOrganizationCentralizationRuleRuleSourceToTerraform(struct?: ObservabilityadminOrganizationCentralizationRuleRuleSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    regions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.regions),
    scope: cdktn.stringToTerraform(struct!.scope),
    source_logs_configuration: observabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationToTerraform(struct!.sourceLogsConfiguration),
    source_metrics_configuration: observabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationToTerraform(struct!.sourceMetricsConfiguration),
  }
}


export function observabilityadminOrganizationCentralizationRuleRuleSourceToHclTerraform(struct?: ObservabilityadminOrganizationCentralizationRuleRuleSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    regions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    scope: {
      value: cdktn.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_logs_configuration: {
      value: observabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationToHclTerraform(struct!.sourceLogsConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration",
    },
    source_metrics_configuration: {
      value: observabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationToHclTerraform(struct!.sourceMetricsConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityadminOrganizationCentralizationRuleRuleSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._sourceLogsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLogsConfiguration = this._sourceLogsConfiguration?.internalValue;
    }
    if (this._sourceMetricsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceMetricsConfiguration = this._sourceMetricsConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminOrganizationCentralizationRuleRuleSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regions = undefined;
      this._scope = undefined;
      this._sourceLogsConfiguration.internalValue = undefined;
      this._sourceMetricsConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regions = value.regions;
      this._scope = value.scope;
      this._sourceLogsConfiguration.internalValue = value.sourceLogsConfiguration;
      this._sourceMetricsConfiguration.internalValue = value.sourceMetricsConfiguration;
    }
  }

  // regions - computed: false, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return cdktn.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // source_logs_configuration - computed: true, optional: true, required: false
  private _sourceLogsConfiguration = new ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference(this, "source_logs_configuration");
  public get sourceLogsConfiguration() {
    return this._sourceLogsConfiguration;
  }
  public putSourceLogsConfiguration(value: ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration) {
    this._sourceLogsConfiguration.internalValue = value;
  }
  public resetSourceLogsConfiguration() {
    this._sourceLogsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLogsConfigurationInput() {
    return this._sourceLogsConfiguration.internalValue;
  }

  // source_metrics_configuration - computed: true, optional: true, required: false
  private _sourceMetricsConfiguration = new ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference(this, "source_metrics_configuration");
  public get sourceMetricsConfiguration() {
    return this._sourceMetricsConfiguration;
  }
  public putSourceMetricsConfiguration(value: ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration) {
    this._sourceMetricsConfiguration.internalValue = value;
  }
  public resetSourceMetricsConfiguration() {
    this._sourceMetricsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceMetricsConfigurationInput() {
    return this._sourceMetricsConfiguration.internalValue;
  }
}
export interface ObservabilityadminOrganizationCentralizationRuleRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_centralization_rule#destination ObservabilityadminOrganizationCentralizationRule#destination}
  */
  readonly destination: ObservabilityadminOrganizationCentralizationRuleRuleDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_centralization_rule#source ObservabilityadminOrganizationCentralizationRule#source}
  */
  readonly source: ObservabilityadminOrganizationCentralizationRuleRuleSource;
}

export function observabilityadminOrganizationCentralizationRuleRuleToTerraform(struct?: ObservabilityadminOrganizationCentralizationRuleRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination: observabilityadminOrganizationCentralizationRuleRuleDestinationToTerraform(struct!.destination),
    source: observabilityadminOrganizationCentralizationRuleRuleSourceToTerraform(struct!.source),
  }
}


export function observabilityadminOrganizationCentralizationRuleRuleToHclTerraform(struct?: ObservabilityadminOrganizationCentralizationRuleRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination: {
      value: observabilityadminOrganizationCentralizationRuleRuleDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityadminOrganizationCentralizationRuleRuleDestination",
    },
    source: {
      value: observabilityadminOrganizationCentralizationRuleRuleSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityadminOrganizationCentralizationRuleRuleSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminOrganizationCentralizationRuleRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityadminOrganizationCentralizationRuleRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminOrganizationCentralizationRuleRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination.internalValue = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination.internalValue = value.destination;
      this._source.internalValue = value.source;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination = new ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: ObservabilityadminOrganizationCentralizationRuleRuleDestination) {
    this._destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // source - computed: false, optional: false, required: true
  private _source = new ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: ObservabilityadminOrganizationCentralizationRuleRuleSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}
export interface ObservabilityadminOrganizationCentralizationRuleTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_centralization_rule#key ObservabilityadminOrganizationCentralizationRule#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_centralization_rule#value ObservabilityadminOrganizationCentralizationRule#value}
  */
  readonly value?: string;
}

export function observabilityadminOrganizationCentralizationRuleTagsToTerraform(struct?: ObservabilityadminOrganizationCentralizationRuleTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function observabilityadminOrganizationCentralizationRuleTagsToHclTerraform(struct?: ObservabilityadminOrganizationCentralizationRuleTags | cdktn.IResolvable): any {
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

export class ObservabilityadminOrganizationCentralizationRuleTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminOrganizationCentralizationRuleTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityadminOrganizationCentralizationRuleTags | cdktn.IResolvable | undefined) {
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

export class ObservabilityadminOrganizationCentralizationRuleTagsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminOrganizationCentralizationRuleTags[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminOrganizationCentralizationRuleTagsOutputReference {
    return new ObservabilityadminOrganizationCentralizationRuleTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_centralization_rule awscc_observabilityadmin_organization_centralization_rule}
*/
export class ObservabilityadminOrganizationCentralizationRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_observabilityadmin_organization_centralization_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ObservabilityadminOrganizationCentralizationRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObservabilityadminOrganizationCentralizationRule to import
  * @param importFromId The id of the existing ObservabilityadminOrganizationCentralizationRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_centralization_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObservabilityadminOrganizationCentralizationRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_observabilityadmin_organization_centralization_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/observabilityadmin_organization_centralization_rule awscc_observabilityadmin_organization_centralization_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObservabilityadminOrganizationCentralizationRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ObservabilityadminOrganizationCentralizationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_observabilityadmin_organization_centralization_rule',
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
    this._rule.internalValue = config.rule;
    this._ruleName = config.ruleName;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new ObservabilityadminOrganizationCentralizationRuleRuleOutputReference(this, "rule");
  public get rule() {
    return this._rule;
  }
  public putRule(value: ObservabilityadminOrganizationCentralizationRuleRule) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // rule_arn - computed: true, optional: false, required: false
  public get ruleArn() {
    return this.getStringAttribute('rule_arn');
  }

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ObservabilityadminOrganizationCentralizationRuleTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ObservabilityadminOrganizationCentralizationRuleTags[] | cdktn.IResolvable) {
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
      rule: observabilityadminOrganizationCentralizationRuleRuleToTerraform(this._rule.internalValue),
      rule_name: cdktn.stringToTerraform(this._ruleName),
      tags: cdktn.listMapper(observabilityadminOrganizationCentralizationRuleTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      rule: {
        value: observabilityadminOrganizationCentralizationRuleRuleToHclTerraform(this._rule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ObservabilityadminOrganizationCentralizationRuleRule",
      },
      rule_name: {
        value: cdktn.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(observabilityadminOrganizationCentralizationRuleTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ObservabilityadminOrganizationCentralizationRuleTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
