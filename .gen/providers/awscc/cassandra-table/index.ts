// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CassandraTableConfig extends cdktn.TerraformMetaArguments {
  /**
  * Represents the read and write settings used for AutoScaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#auto_scaling_specifications CassandraTable#auto_scaling_specifications}
  */
  readonly autoScalingSpecifications?: CassandraTableAutoScalingSpecifications;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#billing_mode CassandraTable#billing_mode}
  */
  readonly billingMode?: CassandraTableBillingMode;
  /**
  * Represents the CDC configuration for the table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#cdc_specification CassandraTable#cdc_specification}
  */
  readonly cdcSpecification?: CassandraTableCdcSpecification;
  /**
  * Indicates whether client side timestamps are enabled (true) or disabled (false) on the table. False by default, once it is enabled it cannot be disabled again.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#client_side_timestamps_enabled CassandraTable#client_side_timestamps_enabled}
  */
  readonly clientSideTimestampsEnabled?: boolean | cdktn.IResolvable;
  /**
  * Clustering key columns of the table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#clustering_key_columns CassandraTable#clustering_key_columns}
  */
  readonly clusteringKeyColumns?: CassandraTableClusteringKeyColumns[] | cdktn.IResolvable;
  /**
  * Default TTL (Time To Live) in seconds, where zero is disabled. If the value is greater than zero, TTL is enabled for the entire table and an expiration timestamp is added to each column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#default_time_to_live CassandraTable#default_time_to_live}
  */
  readonly defaultTimeToLive?: number;
  /**
  * Represents the settings used to enable server-side encryption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#encryption_specification CassandraTable#encryption_specification}
  */
  readonly encryptionSpecification?: CassandraTableEncryptionSpecification;
  /**
  * Name for Cassandra keyspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#keyspace_name CassandraTable#keyspace_name}
  */
  readonly keyspaceName: string;
  /**
  * Partition key columns of the table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#partition_key_columns CassandraTable#partition_key_columns}
  */
  readonly partitionKeyColumns: CassandraTablePartitionKeyColumns[] | cdktn.IResolvable;
  /**
  * Indicates whether point in time recovery is enabled (true) or disabled (false) on the table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#point_in_time_recovery_enabled CassandraTable#point_in_time_recovery_enabled}
  */
  readonly pointInTimeRecoveryEnabled?: boolean | cdktn.IResolvable;
  /**
  * Non-key columns of the table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#regular_columns CassandraTable#regular_columns}
  */
  readonly regularColumns?: CassandraTableRegularColumns[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#replica_specifications CassandraTable#replica_specifications}
  */
  readonly replicaSpecifications?: CassandraTableReplicaSpecifications[] | cdktn.IResolvable;
  /**
  * Name for Cassandra table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#table_name CassandraTable#table_name}
  */
  readonly tableName?: string;
  /**
  * An array of key-value pairs to apply to this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#tags CassandraTable#tags}
  */
  readonly tags?: CassandraTableTags[] | cdktn.IResolvable;
  /**
  * Warm throughput configuration for the table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#warm_throughput CassandraTable#warm_throughput}
  */
  readonly warmThroughput?: CassandraTableWarmThroughput;
}
export interface CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#disable_scale_in CassandraTable#disable_scale_in}
  */
  readonly disableScaleIn?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#scale_in_cooldown CassandraTable#scale_in_cooldown}
  */
  readonly scaleInCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#scale_out_cooldown CassandraTable#scale_out_cooldown}
  */
  readonly scaleOutCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#target_value CassandraTable#target_value}
  */
  readonly targetValue?: number;
}

export function cassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationToTerraform(struct?: CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disable_scale_in: cdktn.booleanToTerraform(struct!.disableScaleIn),
    scale_in_cooldown: cdktn.numberToTerraform(struct!.scaleInCooldown),
    scale_out_cooldown: cdktn.numberToTerraform(struct!.scaleOutCooldown),
    target_value: cdktn.numberToTerraform(struct!.targetValue),
  }
}


export function cassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationToHclTerraform(struct?: CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disable_scale_in: {
      value: cdktn.booleanToHclTerraform(struct!.disableScaleIn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scale_in_cooldown: {
      value: cdktn.numberToHclTerraform(struct!.scaleInCooldown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_out_cooldown: {
      value: cdktn.numberToHclTerraform(struct!.scaleOutCooldown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_value: {
      value: cdktn.numberToHclTerraform(struct!.targetValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableScaleIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableScaleIn = this._disableScaleIn;
    }
    if (this._scaleInCooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleInCooldown = this._scaleInCooldown;
    }
    if (this._scaleOutCooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleOutCooldown = this._scaleOutCooldown;
    }
    if (this._targetValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetValue = this._targetValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableScaleIn = undefined;
      this._scaleInCooldown = undefined;
      this._scaleOutCooldown = undefined;
      this._targetValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableScaleIn = value.disableScaleIn;
      this._scaleInCooldown = value.scaleInCooldown;
      this._scaleOutCooldown = value.scaleOutCooldown;
      this._targetValue = value.targetValue;
    }
  }

  // disable_scale_in - computed: true, optional: true, required: false
  private _disableScaleIn?: boolean | cdktn.IResolvable; 
  public get disableScaleIn() {
    return this.getBooleanAttribute('disable_scale_in');
  }
  public set disableScaleIn(value: boolean | cdktn.IResolvable) {
    this._disableScaleIn = value;
  }
  public resetDisableScaleIn() {
    this._disableScaleIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableScaleInInput() {
    return this._disableScaleIn;
  }

  // scale_in_cooldown - computed: true, optional: true, required: false
  private _scaleInCooldown?: number; 
  public get scaleInCooldown() {
    return this.getNumberAttribute('scale_in_cooldown');
  }
  public set scaleInCooldown(value: number) {
    this._scaleInCooldown = value;
  }
  public resetScaleInCooldown() {
    this._scaleInCooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInCooldownInput() {
    return this._scaleInCooldown;
  }

  // scale_out_cooldown - computed: true, optional: true, required: false
  private _scaleOutCooldown?: number; 
  public get scaleOutCooldown() {
    return this.getNumberAttribute('scale_out_cooldown');
  }
  public set scaleOutCooldown(value: number) {
    this._scaleOutCooldown = value;
  }
  public resetScaleOutCooldown() {
    this._scaleOutCooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleOutCooldownInput() {
    return this._scaleOutCooldown;
  }

  // target_value - computed: true, optional: true, required: false
  private _targetValue?: number; 
  public get targetValue() {
    return this.getNumberAttribute('target_value');
  }
  public set targetValue(value: number) {
    this._targetValue = value;
  }
  public resetTargetValue() {
    this._targetValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetValueInput() {
    return this._targetValue;
  }
}
export interface CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy {
  /**
  * Represents configuration for target tracking scaling policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#target_tracking_scaling_policy_configuration CassandraTable#target_tracking_scaling_policy_configuration}
  */
  readonly targetTrackingScalingPolicyConfiguration?: CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration;
}

export function cassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyToTerraform(struct?: CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    target_tracking_scaling_policy_configuration: cassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationToTerraform(struct!.targetTrackingScalingPolicyConfiguration),
  }
}


export function cassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyToHclTerraform(struct?: CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    target_tracking_scaling_policy_configuration: {
      value: cassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationToHclTerraform(struct!.targetTrackingScalingPolicyConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetTrackingScalingPolicyConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetTrackingScalingPolicyConfiguration = this._targetTrackingScalingPolicyConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetTrackingScalingPolicyConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetTrackingScalingPolicyConfiguration.internalValue = value.targetTrackingScalingPolicyConfiguration;
    }
  }

  // target_tracking_scaling_policy_configuration - computed: true, optional: true, required: false
  private _targetTrackingScalingPolicyConfiguration = new CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference(this, "target_tracking_scaling_policy_configuration");
  public get targetTrackingScalingPolicyConfiguration() {
    return this._targetTrackingScalingPolicyConfiguration;
  }
  public putTargetTrackingScalingPolicyConfiguration(value: CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration) {
    this._targetTrackingScalingPolicyConfiguration.internalValue = value;
  }
  public resetTargetTrackingScalingPolicyConfiguration() {
    this._targetTrackingScalingPolicyConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTrackingScalingPolicyConfigurationInput() {
    return this._targetTrackingScalingPolicyConfiguration.internalValue;
  }
}
export interface CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#auto_scaling_disabled CassandraTable#auto_scaling_disabled}
  */
  readonly autoScalingDisabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#maximum_units CassandraTable#maximum_units}
  */
  readonly maximumUnits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#minimum_units CassandraTable#minimum_units}
  */
  readonly minimumUnits?: number;
  /**
  * Represents scaling policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#scaling_policy CassandraTable#scaling_policy}
  */
  readonly scalingPolicy?: CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy;
}

export function cassandraTableAutoScalingSpecificationsReadCapacityAutoScalingToTerraform(struct?: CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_scaling_disabled: cdktn.booleanToTerraform(struct!.autoScalingDisabled),
    maximum_units: cdktn.numberToTerraform(struct!.maximumUnits),
    minimum_units: cdktn.numberToTerraform(struct!.minimumUnits),
    scaling_policy: cassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyToTerraform(struct!.scalingPolicy),
  }
}


export function cassandraTableAutoScalingSpecificationsReadCapacityAutoScalingToHclTerraform(struct?: CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_scaling_disabled: {
      value: cdktn.booleanToHclTerraform(struct!.autoScalingDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    maximum_units: {
      value: cdktn.numberToHclTerraform(struct!.maximumUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_units: {
      value: cdktn.numberToHclTerraform(struct!.minimumUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scaling_policy: {
      value: cassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyToHclTerraform(struct!.scalingPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoScalingDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScalingDisabled = this._autoScalingDisabled;
    }
    if (this._maximumUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumUnits = this._maximumUnits;
    }
    if (this._minimumUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumUnits = this._minimumUnits;
    }
    if (this._scalingPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingPolicy = this._scalingPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoScalingDisabled = undefined;
      this._maximumUnits = undefined;
      this._minimumUnits = undefined;
      this._scalingPolicy.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoScalingDisabled = value.autoScalingDisabled;
      this._maximumUnits = value.maximumUnits;
      this._minimumUnits = value.minimumUnits;
      this._scalingPolicy.internalValue = value.scalingPolicy;
    }
  }

  // auto_scaling_disabled - computed: true, optional: true, required: false
  private _autoScalingDisabled?: boolean | cdktn.IResolvable; 
  public get autoScalingDisabled() {
    return this.getBooleanAttribute('auto_scaling_disabled');
  }
  public set autoScalingDisabled(value: boolean | cdktn.IResolvable) {
    this._autoScalingDisabled = value;
  }
  public resetAutoScalingDisabled() {
    this._autoScalingDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingDisabledInput() {
    return this._autoScalingDisabled;
  }

  // maximum_units - computed: true, optional: true, required: false
  private _maximumUnits?: number; 
  public get maximumUnits() {
    return this.getNumberAttribute('maximum_units');
  }
  public set maximumUnits(value: number) {
    this._maximumUnits = value;
  }
  public resetMaximumUnits() {
    this._maximumUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumUnitsInput() {
    return this._maximumUnits;
  }

  // minimum_units - computed: true, optional: true, required: false
  private _minimumUnits?: number; 
  public get minimumUnits() {
    return this.getNumberAttribute('minimum_units');
  }
  public set minimumUnits(value: number) {
    this._minimumUnits = value;
  }
  public resetMinimumUnits() {
    this._minimumUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumUnitsInput() {
    return this._minimumUnits;
  }

  // scaling_policy - computed: true, optional: true, required: false
  private _scalingPolicy = new CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference(this, "scaling_policy");
  public get scalingPolicy() {
    return this._scalingPolicy;
  }
  public putScalingPolicy(value: CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy) {
    this._scalingPolicy.internalValue = value;
  }
  public resetScalingPolicy() {
    this._scalingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingPolicyInput() {
    return this._scalingPolicy.internalValue;
  }
}
export interface CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#disable_scale_in CassandraTable#disable_scale_in}
  */
  readonly disableScaleIn?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#scale_in_cooldown CassandraTable#scale_in_cooldown}
  */
  readonly scaleInCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#scale_out_cooldown CassandraTable#scale_out_cooldown}
  */
  readonly scaleOutCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#target_value CassandraTable#target_value}
  */
  readonly targetValue?: number;
}

export function cassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationToTerraform(struct?: CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disable_scale_in: cdktn.booleanToTerraform(struct!.disableScaleIn),
    scale_in_cooldown: cdktn.numberToTerraform(struct!.scaleInCooldown),
    scale_out_cooldown: cdktn.numberToTerraform(struct!.scaleOutCooldown),
    target_value: cdktn.numberToTerraform(struct!.targetValue),
  }
}


export function cassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationToHclTerraform(struct?: CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disable_scale_in: {
      value: cdktn.booleanToHclTerraform(struct!.disableScaleIn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scale_in_cooldown: {
      value: cdktn.numberToHclTerraform(struct!.scaleInCooldown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_out_cooldown: {
      value: cdktn.numberToHclTerraform(struct!.scaleOutCooldown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_value: {
      value: cdktn.numberToHclTerraform(struct!.targetValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableScaleIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableScaleIn = this._disableScaleIn;
    }
    if (this._scaleInCooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleInCooldown = this._scaleInCooldown;
    }
    if (this._scaleOutCooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleOutCooldown = this._scaleOutCooldown;
    }
    if (this._targetValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetValue = this._targetValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableScaleIn = undefined;
      this._scaleInCooldown = undefined;
      this._scaleOutCooldown = undefined;
      this._targetValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableScaleIn = value.disableScaleIn;
      this._scaleInCooldown = value.scaleInCooldown;
      this._scaleOutCooldown = value.scaleOutCooldown;
      this._targetValue = value.targetValue;
    }
  }

  // disable_scale_in - computed: true, optional: true, required: false
  private _disableScaleIn?: boolean | cdktn.IResolvable; 
  public get disableScaleIn() {
    return this.getBooleanAttribute('disable_scale_in');
  }
  public set disableScaleIn(value: boolean | cdktn.IResolvable) {
    this._disableScaleIn = value;
  }
  public resetDisableScaleIn() {
    this._disableScaleIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableScaleInInput() {
    return this._disableScaleIn;
  }

  // scale_in_cooldown - computed: true, optional: true, required: false
  private _scaleInCooldown?: number; 
  public get scaleInCooldown() {
    return this.getNumberAttribute('scale_in_cooldown');
  }
  public set scaleInCooldown(value: number) {
    this._scaleInCooldown = value;
  }
  public resetScaleInCooldown() {
    this._scaleInCooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInCooldownInput() {
    return this._scaleInCooldown;
  }

  // scale_out_cooldown - computed: true, optional: true, required: false
  private _scaleOutCooldown?: number; 
  public get scaleOutCooldown() {
    return this.getNumberAttribute('scale_out_cooldown');
  }
  public set scaleOutCooldown(value: number) {
    this._scaleOutCooldown = value;
  }
  public resetScaleOutCooldown() {
    this._scaleOutCooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleOutCooldownInput() {
    return this._scaleOutCooldown;
  }

  // target_value - computed: true, optional: true, required: false
  private _targetValue?: number; 
  public get targetValue() {
    return this.getNumberAttribute('target_value');
  }
  public set targetValue(value: number) {
    this._targetValue = value;
  }
  public resetTargetValue() {
    this._targetValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetValueInput() {
    return this._targetValue;
  }
}
export interface CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy {
  /**
  * Represents configuration for target tracking scaling policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#target_tracking_scaling_policy_configuration CassandraTable#target_tracking_scaling_policy_configuration}
  */
  readonly targetTrackingScalingPolicyConfiguration?: CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration;
}

export function cassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyToTerraform(struct?: CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    target_tracking_scaling_policy_configuration: cassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationToTerraform(struct!.targetTrackingScalingPolicyConfiguration),
  }
}


export function cassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyToHclTerraform(struct?: CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    target_tracking_scaling_policy_configuration: {
      value: cassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationToHclTerraform(struct!.targetTrackingScalingPolicyConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetTrackingScalingPolicyConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetTrackingScalingPolicyConfiguration = this._targetTrackingScalingPolicyConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetTrackingScalingPolicyConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetTrackingScalingPolicyConfiguration.internalValue = value.targetTrackingScalingPolicyConfiguration;
    }
  }

  // target_tracking_scaling_policy_configuration - computed: true, optional: true, required: false
  private _targetTrackingScalingPolicyConfiguration = new CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference(this, "target_tracking_scaling_policy_configuration");
  public get targetTrackingScalingPolicyConfiguration() {
    return this._targetTrackingScalingPolicyConfiguration;
  }
  public putTargetTrackingScalingPolicyConfiguration(value: CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration) {
    this._targetTrackingScalingPolicyConfiguration.internalValue = value;
  }
  public resetTargetTrackingScalingPolicyConfiguration() {
    this._targetTrackingScalingPolicyConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTrackingScalingPolicyConfigurationInput() {
    return this._targetTrackingScalingPolicyConfiguration.internalValue;
  }
}
export interface CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#auto_scaling_disabled CassandraTable#auto_scaling_disabled}
  */
  readonly autoScalingDisabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#maximum_units CassandraTable#maximum_units}
  */
  readonly maximumUnits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#minimum_units CassandraTable#minimum_units}
  */
  readonly minimumUnits?: number;
  /**
  * Represents scaling policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#scaling_policy CassandraTable#scaling_policy}
  */
  readonly scalingPolicy?: CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy;
}

export function cassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingToTerraform(struct?: CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_scaling_disabled: cdktn.booleanToTerraform(struct!.autoScalingDisabled),
    maximum_units: cdktn.numberToTerraform(struct!.maximumUnits),
    minimum_units: cdktn.numberToTerraform(struct!.minimumUnits),
    scaling_policy: cassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyToTerraform(struct!.scalingPolicy),
  }
}


export function cassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingToHclTerraform(struct?: CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_scaling_disabled: {
      value: cdktn.booleanToHclTerraform(struct!.autoScalingDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    maximum_units: {
      value: cdktn.numberToHclTerraform(struct!.maximumUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_units: {
      value: cdktn.numberToHclTerraform(struct!.minimumUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scaling_policy: {
      value: cassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyToHclTerraform(struct!.scalingPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoScalingDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScalingDisabled = this._autoScalingDisabled;
    }
    if (this._maximumUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumUnits = this._maximumUnits;
    }
    if (this._minimumUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumUnits = this._minimumUnits;
    }
    if (this._scalingPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingPolicy = this._scalingPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoScalingDisabled = undefined;
      this._maximumUnits = undefined;
      this._minimumUnits = undefined;
      this._scalingPolicy.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoScalingDisabled = value.autoScalingDisabled;
      this._maximumUnits = value.maximumUnits;
      this._minimumUnits = value.minimumUnits;
      this._scalingPolicy.internalValue = value.scalingPolicy;
    }
  }

  // auto_scaling_disabled - computed: true, optional: true, required: false
  private _autoScalingDisabled?: boolean | cdktn.IResolvable; 
  public get autoScalingDisabled() {
    return this.getBooleanAttribute('auto_scaling_disabled');
  }
  public set autoScalingDisabled(value: boolean | cdktn.IResolvable) {
    this._autoScalingDisabled = value;
  }
  public resetAutoScalingDisabled() {
    this._autoScalingDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingDisabledInput() {
    return this._autoScalingDisabled;
  }

  // maximum_units - computed: true, optional: true, required: false
  private _maximumUnits?: number; 
  public get maximumUnits() {
    return this.getNumberAttribute('maximum_units');
  }
  public set maximumUnits(value: number) {
    this._maximumUnits = value;
  }
  public resetMaximumUnits() {
    this._maximumUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumUnitsInput() {
    return this._maximumUnits;
  }

  // minimum_units - computed: true, optional: true, required: false
  private _minimumUnits?: number; 
  public get minimumUnits() {
    return this.getNumberAttribute('minimum_units');
  }
  public set minimumUnits(value: number) {
    this._minimumUnits = value;
  }
  public resetMinimumUnits() {
    this._minimumUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumUnitsInput() {
    return this._minimumUnits;
  }

  // scaling_policy - computed: true, optional: true, required: false
  private _scalingPolicy = new CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference(this, "scaling_policy");
  public get scalingPolicy() {
    return this._scalingPolicy;
  }
  public putScalingPolicy(value: CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy) {
    this._scalingPolicy.internalValue = value;
  }
  public resetScalingPolicy() {
    this._scalingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingPolicyInput() {
    return this._scalingPolicy.internalValue;
  }
}
export interface CassandraTableAutoScalingSpecifications {
  /**
  * Represents configuration for auto scaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#read_capacity_auto_scaling CassandraTable#read_capacity_auto_scaling}
  */
  readonly readCapacityAutoScaling?: CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling;
  /**
  * Represents configuration for auto scaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#write_capacity_auto_scaling CassandraTable#write_capacity_auto_scaling}
  */
  readonly writeCapacityAutoScaling?: CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling;
}

export function cassandraTableAutoScalingSpecificationsToTerraform(struct?: CassandraTableAutoScalingSpecifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    read_capacity_auto_scaling: cassandraTableAutoScalingSpecificationsReadCapacityAutoScalingToTerraform(struct!.readCapacityAutoScaling),
    write_capacity_auto_scaling: cassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingToTerraform(struct!.writeCapacityAutoScaling),
  }
}


export function cassandraTableAutoScalingSpecificationsToHclTerraform(struct?: CassandraTableAutoScalingSpecifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    read_capacity_auto_scaling: {
      value: cassandraTableAutoScalingSpecificationsReadCapacityAutoScalingToHclTerraform(struct!.readCapacityAutoScaling),
      isBlock: true,
      type: "struct",
      storageClassType: "CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling",
    },
    write_capacity_auto_scaling: {
      value: cassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingToHclTerraform(struct!.writeCapacityAutoScaling),
      isBlock: true,
      type: "struct",
      storageClassType: "CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CassandraTableAutoScalingSpecificationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CassandraTableAutoScalingSpecifications | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._readCapacityAutoScaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readCapacityAutoScaling = this._readCapacityAutoScaling?.internalValue;
    }
    if (this._writeCapacityAutoScaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeCapacityAutoScaling = this._writeCapacityAutoScaling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CassandraTableAutoScalingSpecifications | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._readCapacityAutoScaling.internalValue = undefined;
      this._writeCapacityAutoScaling.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._readCapacityAutoScaling.internalValue = value.readCapacityAutoScaling;
      this._writeCapacityAutoScaling.internalValue = value.writeCapacityAutoScaling;
    }
  }

  // read_capacity_auto_scaling - computed: true, optional: true, required: false
  private _readCapacityAutoScaling = new CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference(this, "read_capacity_auto_scaling");
  public get readCapacityAutoScaling() {
    return this._readCapacityAutoScaling;
  }
  public putReadCapacityAutoScaling(value: CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling) {
    this._readCapacityAutoScaling.internalValue = value;
  }
  public resetReadCapacityAutoScaling() {
    this._readCapacityAutoScaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readCapacityAutoScalingInput() {
    return this._readCapacityAutoScaling.internalValue;
  }

  // write_capacity_auto_scaling - computed: true, optional: true, required: false
  private _writeCapacityAutoScaling = new CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference(this, "write_capacity_auto_scaling");
  public get writeCapacityAutoScaling() {
    return this._writeCapacityAutoScaling;
  }
  public putWriteCapacityAutoScaling(value: CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling) {
    this._writeCapacityAutoScaling.internalValue = value;
  }
  public resetWriteCapacityAutoScaling() {
    this._writeCapacityAutoScaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeCapacityAutoScalingInput() {
    return this._writeCapacityAutoScaling.internalValue;
  }
}
export interface CassandraTableBillingModeProvisionedThroughput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#read_capacity_units CassandraTable#read_capacity_units}
  */
  readonly readCapacityUnits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#write_capacity_units CassandraTable#write_capacity_units}
  */
  readonly writeCapacityUnits?: number;
}

export function cassandraTableBillingModeProvisionedThroughputToTerraform(struct?: CassandraTableBillingModeProvisionedThroughput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    read_capacity_units: cdktn.numberToTerraform(struct!.readCapacityUnits),
    write_capacity_units: cdktn.numberToTerraform(struct!.writeCapacityUnits),
  }
}


export function cassandraTableBillingModeProvisionedThroughputToHclTerraform(struct?: CassandraTableBillingModeProvisionedThroughput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    read_capacity_units: {
      value: cdktn.numberToHclTerraform(struct!.readCapacityUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write_capacity_units: {
      value: cdktn.numberToHclTerraform(struct!.writeCapacityUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CassandraTableBillingModeProvisionedThroughputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CassandraTableBillingModeProvisionedThroughput | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._readCapacityUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.readCapacityUnits = this._readCapacityUnits;
    }
    if (this._writeCapacityUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeCapacityUnits = this._writeCapacityUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CassandraTableBillingModeProvisionedThroughput | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._readCapacityUnits = undefined;
      this._writeCapacityUnits = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._readCapacityUnits = value.readCapacityUnits;
      this._writeCapacityUnits = value.writeCapacityUnits;
    }
  }

  // read_capacity_units - computed: true, optional: true, required: false
  private _readCapacityUnits?: number; 
  public get readCapacityUnits() {
    return this.getNumberAttribute('read_capacity_units');
  }
  public set readCapacityUnits(value: number) {
    this._readCapacityUnits = value;
  }
  public resetReadCapacityUnits() {
    this._readCapacityUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readCapacityUnitsInput() {
    return this._readCapacityUnits;
  }

  // write_capacity_units - computed: true, optional: true, required: false
  private _writeCapacityUnits?: number; 
  public get writeCapacityUnits() {
    return this.getNumberAttribute('write_capacity_units');
  }
  public set writeCapacityUnits(value: number) {
    this._writeCapacityUnits = value;
  }
  public resetWriteCapacityUnits() {
    this._writeCapacityUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeCapacityUnitsInput() {
    return this._writeCapacityUnits;
  }
}
export interface CassandraTableBillingMode {
  /**
  * Capacity mode for the specified table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#mode CassandraTable#mode}
  */
  readonly mode?: string;
  /**
  * Throughput for the specified table, which consists of values for ReadCapacityUnits and WriteCapacityUnits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#provisioned_throughput CassandraTable#provisioned_throughput}
  */
  readonly provisionedThroughput?: CassandraTableBillingModeProvisionedThroughput;
}

export function cassandraTableBillingModeToTerraform(struct?: CassandraTableBillingMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mode: cdktn.stringToTerraform(struct!.mode),
    provisioned_throughput: cassandraTableBillingModeProvisionedThroughputToTerraform(struct!.provisionedThroughput),
  }
}


export function cassandraTableBillingModeToHclTerraform(struct?: CassandraTableBillingMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provisioned_throughput: {
      value: cassandraTableBillingModeProvisionedThroughputToHclTerraform(struct!.provisionedThroughput),
      isBlock: true,
      type: "struct",
      storageClassType: "CassandraTableBillingModeProvisionedThroughput",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CassandraTableBillingModeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CassandraTableBillingMode | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._provisionedThroughput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedThroughput = this._provisionedThroughput?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CassandraTableBillingMode | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._provisionedThroughput.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._provisionedThroughput.internalValue = value.provisionedThroughput;
    }
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // provisioned_throughput - computed: true, optional: true, required: false
  private _provisionedThroughput = new CassandraTableBillingModeProvisionedThroughputOutputReference(this, "provisioned_throughput");
  public get provisionedThroughput() {
    return this._provisionedThroughput;
  }
  public putProvisionedThroughput(value: CassandraTableBillingModeProvisionedThroughput) {
    this._provisionedThroughput.internalValue = value;
  }
  public resetProvisionedThroughput() {
    this._provisionedThroughput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedThroughputInput() {
    return this._provisionedThroughput.internalValue;
  }
}
export interface CassandraTableCdcSpecificationTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#key CassandraTable#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#value CassandraTable#value}
  */
  readonly value?: string;
}

export function cassandraTableCdcSpecificationTagsToTerraform(struct?: CassandraTableCdcSpecificationTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function cassandraTableCdcSpecificationTagsToHclTerraform(struct?: CassandraTableCdcSpecificationTags | cdktn.IResolvable): any {
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

export class CassandraTableCdcSpecificationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CassandraTableCdcSpecificationTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CassandraTableCdcSpecificationTags | cdktn.IResolvable | undefined) {
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

export class CassandraTableCdcSpecificationTagsList extends cdktn.ComplexList {
  public internalValue? : CassandraTableCdcSpecificationTags[] | cdktn.IResolvable

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
  public get(index: number): CassandraTableCdcSpecificationTagsOutputReference {
    return new CassandraTableCdcSpecificationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CassandraTableCdcSpecification {
  /**
  * Indicates whether CDC is enabled or disabled for the table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#status CassandraTable#status}
  */
  readonly status?: string;
  /**
  * An array of key-value pairs to apply to the CDC stream resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#tags CassandraTable#tags}
  */
  readonly tags?: CassandraTableCdcSpecificationTags[] | cdktn.IResolvable;
  /**
  * Specifies what data should be captured in the change data stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#view_type CassandraTable#view_type}
  */
  readonly viewType?: string;
}

export function cassandraTableCdcSpecificationToTerraform(struct?: CassandraTableCdcSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    status: cdktn.stringToTerraform(struct!.status),
    tags: cdktn.listMapper(cassandraTableCdcSpecificationTagsToTerraform, false)(struct!.tags),
    view_type: cdktn.stringToTerraform(struct!.viewType),
  }
}


export function cassandraTableCdcSpecificationToHclTerraform(struct?: CassandraTableCdcSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktn.listMapperHcl(cassandraTableCdcSpecificationTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "CassandraTableCdcSpecificationTagsList",
    },
    view_type: {
      value: cdktn.stringToHclTerraform(struct!.viewType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CassandraTableCdcSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CassandraTableCdcSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._viewType !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewType = this._viewType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CassandraTableCdcSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
      this._tags.internalValue = undefined;
      this._viewType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
      this._tags.internalValue = value.tags;
      this._viewType = value.viewType;
    }
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
  private _tags = new CassandraTableCdcSpecificationTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: CassandraTableCdcSpecificationTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // view_type - computed: true, optional: true, required: false
  private _viewType?: string; 
  public get viewType() {
    return this.getStringAttribute('view_type');
  }
  public set viewType(value: string) {
    this._viewType = value;
  }
  public resetViewType() {
    this._viewType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewTypeInput() {
    return this._viewType;
  }
}
export interface CassandraTableClusteringKeyColumnsColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#column_name CassandraTable#column_name}
  */
  readonly columnName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#column_type CassandraTable#column_type}
  */
  readonly columnType?: string;
}

export function cassandraTableClusteringKeyColumnsColumnToTerraform(struct?: CassandraTableClusteringKeyColumnsColumn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column_name: cdktn.stringToTerraform(struct!.columnName),
    column_type: cdktn.stringToTerraform(struct!.columnType),
  }
}


export function cassandraTableClusteringKeyColumnsColumnToHclTerraform(struct?: CassandraTableClusteringKeyColumnsColumn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column_name: {
      value: cdktn.stringToHclTerraform(struct!.columnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column_type: {
      value: cdktn.stringToHclTerraform(struct!.columnType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CassandraTableClusteringKeyColumnsColumnOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CassandraTableClusteringKeyColumnsColumn | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._columnType !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnType = this._columnType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CassandraTableClusteringKeyColumnsColumn | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnName = undefined;
      this._columnType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnName = value.columnName;
      this._columnType = value.columnType;
    }
  }

  // column_name - computed: true, optional: true, required: false
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  public resetColumnName() {
    this._columnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // column_type - computed: true, optional: true, required: false
  private _columnType?: string; 
  public get columnType() {
    return this.getStringAttribute('column_type');
  }
  public set columnType(value: string) {
    this._columnType = value;
  }
  public resetColumnType() {
    this._columnType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnTypeInput() {
    return this._columnType;
  }
}
export interface CassandraTableClusteringKeyColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#column CassandraTable#column}
  */
  readonly column?: CassandraTableClusteringKeyColumnsColumn;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#order_by CassandraTable#order_by}
  */
  readonly orderBy?: string;
}

export function cassandraTableClusteringKeyColumnsToTerraform(struct?: CassandraTableClusteringKeyColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column: cassandraTableClusteringKeyColumnsColumnToTerraform(struct!.column),
    order_by: cdktn.stringToTerraform(struct!.orderBy),
  }
}


export function cassandraTableClusteringKeyColumnsToHclTerraform(struct?: CassandraTableClusteringKeyColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column: {
      value: cassandraTableClusteringKeyColumnsColumnToHclTerraform(struct!.column),
      isBlock: true,
      type: "struct",
      storageClassType: "CassandraTableClusteringKeyColumnsColumn",
    },
    order_by: {
      value: cdktn.stringToHclTerraform(struct!.orderBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CassandraTableClusteringKeyColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CassandraTableClusteringKeyColumns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column?.internalValue;
    }
    if (this._orderBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderBy = this._orderBy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CassandraTableClusteringKeyColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column.internalValue = undefined;
      this._orderBy = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column.internalValue = value.column;
      this._orderBy = value.orderBy;
    }
  }

  // column - computed: true, optional: true, required: false
  private _column = new CassandraTableClusteringKeyColumnsColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: CassandraTableClusteringKeyColumnsColumn) {
    this._column.internalValue = value;
  }
  public resetColumn() {
    this._column.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }

  // order_by - computed: true, optional: true, required: false
  private _orderBy?: string; 
  public get orderBy() {
    return this.getStringAttribute('order_by');
  }
  public set orderBy(value: string) {
    this._orderBy = value;
  }
  public resetOrderBy() {
    this._orderBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByInput() {
    return this._orderBy;
  }
}

export class CassandraTableClusteringKeyColumnsList extends cdktn.ComplexList {
  public internalValue? : CassandraTableClusteringKeyColumns[] | cdktn.IResolvable

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
  public get(index: number): CassandraTableClusteringKeyColumnsOutputReference {
    return new CassandraTableClusteringKeyColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CassandraTableEncryptionSpecification {
  /**
  * Server-side encryption type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#encryption_type CassandraTable#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * The AWS KMS customer master key (CMK) that should be used for the AWS KMS encryption. To specify a CMK, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#kms_key_identifier CassandraTable#kms_key_identifier}
  */
  readonly kmsKeyIdentifier?: string;
}

export function cassandraTableEncryptionSpecificationToTerraform(struct?: CassandraTableEncryptionSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_type: cdktn.stringToTerraform(struct!.encryptionType),
    kms_key_identifier: cdktn.stringToTerraform(struct!.kmsKeyIdentifier),
  }
}


export function cassandraTableEncryptionSpecificationToHclTerraform(struct?: CassandraTableEncryptionSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_type: {
      value: cdktn.stringToHclTerraform(struct!.encryptionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_identifier: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CassandraTableEncryptionSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CassandraTableEncryptionSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionType = this._encryptionType;
    }
    if (this._kmsKeyIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyIdentifier = this._kmsKeyIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CassandraTableEncryptionSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionType = undefined;
      this._kmsKeyIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionType = value.encryptionType;
      this._kmsKeyIdentifier = value.kmsKeyIdentifier;
    }
  }

  // encryption_type - computed: true, optional: true, required: false
  private _encryptionType?: string; 
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }
  public set encryptionType(value: string) {
    this._encryptionType = value;
  }
  public resetEncryptionType() {
    this._encryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType;
  }

  // kms_key_identifier - computed: true, optional: true, required: false
  private _kmsKeyIdentifier?: string; 
  public get kmsKeyIdentifier() {
    return this.getStringAttribute('kms_key_identifier');
  }
  public set kmsKeyIdentifier(value: string) {
    this._kmsKeyIdentifier = value;
  }
  public resetKmsKeyIdentifier() {
    this._kmsKeyIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdentifierInput() {
    return this._kmsKeyIdentifier;
  }
}
export interface CassandraTablePartitionKeyColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#column_name CassandraTable#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#column_type CassandraTable#column_type}
  */
  readonly columnType: string;
}

export function cassandraTablePartitionKeyColumnsToTerraform(struct?: CassandraTablePartitionKeyColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column_name: cdktn.stringToTerraform(struct!.columnName),
    column_type: cdktn.stringToTerraform(struct!.columnType),
  }
}


export function cassandraTablePartitionKeyColumnsToHclTerraform(struct?: CassandraTablePartitionKeyColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column_name: {
      value: cdktn.stringToHclTerraform(struct!.columnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column_type: {
      value: cdktn.stringToHclTerraform(struct!.columnType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CassandraTablePartitionKeyColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CassandraTablePartitionKeyColumns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._columnType !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnType = this._columnType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CassandraTablePartitionKeyColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnName = undefined;
      this._columnType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnName = value.columnName;
      this._columnType = value.columnType;
    }
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // column_type - computed: false, optional: false, required: true
  private _columnType?: string; 
  public get columnType() {
    return this.getStringAttribute('column_type');
  }
  public set columnType(value: string) {
    this._columnType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnTypeInput() {
    return this._columnType;
  }
}

export class CassandraTablePartitionKeyColumnsList extends cdktn.ComplexList {
  public internalValue? : CassandraTablePartitionKeyColumns[] | cdktn.IResolvable

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
  public get(index: number): CassandraTablePartitionKeyColumnsOutputReference {
    return new CassandraTablePartitionKeyColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CassandraTableRegularColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#column_name CassandraTable#column_name}
  */
  readonly columnName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#column_type CassandraTable#column_type}
  */
  readonly columnType?: string;
}

export function cassandraTableRegularColumnsToTerraform(struct?: CassandraTableRegularColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column_name: cdktn.stringToTerraform(struct!.columnName),
    column_type: cdktn.stringToTerraform(struct!.columnType),
  }
}


export function cassandraTableRegularColumnsToHclTerraform(struct?: CassandraTableRegularColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column_name: {
      value: cdktn.stringToHclTerraform(struct!.columnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column_type: {
      value: cdktn.stringToHclTerraform(struct!.columnType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CassandraTableRegularColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CassandraTableRegularColumns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._columnType !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnType = this._columnType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CassandraTableRegularColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnName = undefined;
      this._columnType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnName = value.columnName;
      this._columnType = value.columnType;
    }
  }

  // column_name - computed: true, optional: true, required: false
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  public resetColumnName() {
    this._columnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // column_type - computed: true, optional: true, required: false
  private _columnType?: string; 
  public get columnType() {
    return this.getStringAttribute('column_type');
  }
  public set columnType(value: string) {
    this._columnType = value;
  }
  public resetColumnType() {
    this._columnType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnTypeInput() {
    return this._columnType;
  }
}

export class CassandraTableRegularColumnsList extends cdktn.ComplexList {
  public internalValue? : CassandraTableRegularColumns[] | cdktn.IResolvable

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
  public get(index: number): CassandraTableRegularColumnsOutputReference {
    return new CassandraTableRegularColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#disable_scale_in CassandraTable#disable_scale_in}
  */
  readonly disableScaleIn?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#scale_in_cooldown CassandraTable#scale_in_cooldown}
  */
  readonly scaleInCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#scale_out_cooldown CassandraTable#scale_out_cooldown}
  */
  readonly scaleOutCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#target_value CassandraTable#target_value}
  */
  readonly targetValue?: number;
}

export function cassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationToTerraform(struct?: CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disable_scale_in: cdktn.booleanToTerraform(struct!.disableScaleIn),
    scale_in_cooldown: cdktn.numberToTerraform(struct!.scaleInCooldown),
    scale_out_cooldown: cdktn.numberToTerraform(struct!.scaleOutCooldown),
    target_value: cdktn.numberToTerraform(struct!.targetValue),
  }
}


export function cassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationToHclTerraform(struct?: CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disable_scale_in: {
      value: cdktn.booleanToHclTerraform(struct!.disableScaleIn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scale_in_cooldown: {
      value: cdktn.numberToHclTerraform(struct!.scaleInCooldown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_out_cooldown: {
      value: cdktn.numberToHclTerraform(struct!.scaleOutCooldown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_value: {
      value: cdktn.numberToHclTerraform(struct!.targetValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableScaleIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableScaleIn = this._disableScaleIn;
    }
    if (this._scaleInCooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleInCooldown = this._scaleInCooldown;
    }
    if (this._scaleOutCooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleOutCooldown = this._scaleOutCooldown;
    }
    if (this._targetValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetValue = this._targetValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableScaleIn = undefined;
      this._scaleInCooldown = undefined;
      this._scaleOutCooldown = undefined;
      this._targetValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableScaleIn = value.disableScaleIn;
      this._scaleInCooldown = value.scaleInCooldown;
      this._scaleOutCooldown = value.scaleOutCooldown;
      this._targetValue = value.targetValue;
    }
  }

  // disable_scale_in - computed: true, optional: true, required: false
  private _disableScaleIn?: boolean | cdktn.IResolvable; 
  public get disableScaleIn() {
    return this.getBooleanAttribute('disable_scale_in');
  }
  public set disableScaleIn(value: boolean | cdktn.IResolvable) {
    this._disableScaleIn = value;
  }
  public resetDisableScaleIn() {
    this._disableScaleIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableScaleInInput() {
    return this._disableScaleIn;
  }

  // scale_in_cooldown - computed: true, optional: true, required: false
  private _scaleInCooldown?: number; 
  public get scaleInCooldown() {
    return this.getNumberAttribute('scale_in_cooldown');
  }
  public set scaleInCooldown(value: number) {
    this._scaleInCooldown = value;
  }
  public resetScaleInCooldown() {
    this._scaleInCooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInCooldownInput() {
    return this._scaleInCooldown;
  }

  // scale_out_cooldown - computed: true, optional: true, required: false
  private _scaleOutCooldown?: number; 
  public get scaleOutCooldown() {
    return this.getNumberAttribute('scale_out_cooldown');
  }
  public set scaleOutCooldown(value: number) {
    this._scaleOutCooldown = value;
  }
  public resetScaleOutCooldown() {
    this._scaleOutCooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleOutCooldownInput() {
    return this._scaleOutCooldown;
  }

  // target_value - computed: true, optional: true, required: false
  private _targetValue?: number; 
  public get targetValue() {
    return this.getNumberAttribute('target_value');
  }
  public set targetValue(value: number) {
    this._targetValue = value;
  }
  public resetTargetValue() {
    this._targetValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetValueInput() {
    return this._targetValue;
  }
}
export interface CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy {
  /**
  * Represents configuration for target tracking scaling policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#target_tracking_scaling_policy_configuration CassandraTable#target_tracking_scaling_policy_configuration}
  */
  readonly targetTrackingScalingPolicyConfiguration?: CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration;
}

export function cassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyToTerraform(struct?: CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    target_tracking_scaling_policy_configuration: cassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationToTerraform(struct!.targetTrackingScalingPolicyConfiguration),
  }
}


export function cassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyToHclTerraform(struct?: CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    target_tracking_scaling_policy_configuration: {
      value: cassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationToHclTerraform(struct!.targetTrackingScalingPolicyConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetTrackingScalingPolicyConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetTrackingScalingPolicyConfiguration = this._targetTrackingScalingPolicyConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetTrackingScalingPolicyConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetTrackingScalingPolicyConfiguration.internalValue = value.targetTrackingScalingPolicyConfiguration;
    }
  }

  // target_tracking_scaling_policy_configuration - computed: true, optional: true, required: false
  private _targetTrackingScalingPolicyConfiguration = new CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference(this, "target_tracking_scaling_policy_configuration");
  public get targetTrackingScalingPolicyConfiguration() {
    return this._targetTrackingScalingPolicyConfiguration;
  }
  public putTargetTrackingScalingPolicyConfiguration(value: CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration) {
    this._targetTrackingScalingPolicyConfiguration.internalValue = value;
  }
  public resetTargetTrackingScalingPolicyConfiguration() {
    this._targetTrackingScalingPolicyConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTrackingScalingPolicyConfigurationInput() {
    return this._targetTrackingScalingPolicyConfiguration.internalValue;
  }
}
export interface CassandraTableReplicaSpecificationsReadCapacityAutoScaling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#auto_scaling_disabled CassandraTable#auto_scaling_disabled}
  */
  readonly autoScalingDisabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#maximum_units CassandraTable#maximum_units}
  */
  readonly maximumUnits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#minimum_units CassandraTable#minimum_units}
  */
  readonly minimumUnits?: number;
  /**
  * Represents scaling policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#scaling_policy CassandraTable#scaling_policy}
  */
  readonly scalingPolicy?: CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy;
}

export function cassandraTableReplicaSpecificationsReadCapacityAutoScalingToTerraform(struct?: CassandraTableReplicaSpecificationsReadCapacityAutoScaling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_scaling_disabled: cdktn.booleanToTerraform(struct!.autoScalingDisabled),
    maximum_units: cdktn.numberToTerraform(struct!.maximumUnits),
    minimum_units: cdktn.numberToTerraform(struct!.minimumUnits),
    scaling_policy: cassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyToTerraform(struct!.scalingPolicy),
  }
}


export function cassandraTableReplicaSpecificationsReadCapacityAutoScalingToHclTerraform(struct?: CassandraTableReplicaSpecificationsReadCapacityAutoScaling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_scaling_disabled: {
      value: cdktn.booleanToHclTerraform(struct!.autoScalingDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    maximum_units: {
      value: cdktn.numberToHclTerraform(struct!.maximumUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_units: {
      value: cdktn.numberToHclTerraform(struct!.minimumUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scaling_policy: {
      value: cassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyToHclTerraform(struct!.scalingPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CassandraTableReplicaSpecificationsReadCapacityAutoScaling | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoScalingDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScalingDisabled = this._autoScalingDisabled;
    }
    if (this._maximumUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumUnits = this._maximumUnits;
    }
    if (this._minimumUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumUnits = this._minimumUnits;
    }
    if (this._scalingPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingPolicy = this._scalingPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CassandraTableReplicaSpecificationsReadCapacityAutoScaling | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoScalingDisabled = undefined;
      this._maximumUnits = undefined;
      this._minimumUnits = undefined;
      this._scalingPolicy.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoScalingDisabled = value.autoScalingDisabled;
      this._maximumUnits = value.maximumUnits;
      this._minimumUnits = value.minimumUnits;
      this._scalingPolicy.internalValue = value.scalingPolicy;
    }
  }

  // auto_scaling_disabled - computed: true, optional: true, required: false
  private _autoScalingDisabled?: boolean | cdktn.IResolvable; 
  public get autoScalingDisabled() {
    return this.getBooleanAttribute('auto_scaling_disabled');
  }
  public set autoScalingDisabled(value: boolean | cdktn.IResolvable) {
    this._autoScalingDisabled = value;
  }
  public resetAutoScalingDisabled() {
    this._autoScalingDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingDisabledInput() {
    return this._autoScalingDisabled;
  }

  // maximum_units - computed: true, optional: true, required: false
  private _maximumUnits?: number; 
  public get maximumUnits() {
    return this.getNumberAttribute('maximum_units');
  }
  public set maximumUnits(value: number) {
    this._maximumUnits = value;
  }
  public resetMaximumUnits() {
    this._maximumUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumUnitsInput() {
    return this._maximumUnits;
  }

  // minimum_units - computed: true, optional: true, required: false
  private _minimumUnits?: number; 
  public get minimumUnits() {
    return this.getNumberAttribute('minimum_units');
  }
  public set minimumUnits(value: number) {
    this._minimumUnits = value;
  }
  public resetMinimumUnits() {
    this._minimumUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumUnitsInput() {
    return this._minimumUnits;
  }

  // scaling_policy - computed: true, optional: true, required: false
  private _scalingPolicy = new CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference(this, "scaling_policy");
  public get scalingPolicy() {
    return this._scalingPolicy;
  }
  public putScalingPolicy(value: CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy) {
    this._scalingPolicy.internalValue = value;
  }
  public resetScalingPolicy() {
    this._scalingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingPolicyInput() {
    return this._scalingPolicy.internalValue;
  }
}
export interface CassandraTableReplicaSpecifications {
  /**
  * Represents configuration for auto scaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#read_capacity_auto_scaling CassandraTable#read_capacity_auto_scaling}
  */
  readonly readCapacityAutoScaling?: CassandraTableReplicaSpecificationsReadCapacityAutoScaling;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#read_capacity_units CassandraTable#read_capacity_units}
  */
  readonly readCapacityUnits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#region CassandraTable#region}
  */
  readonly region?: string;
}

export function cassandraTableReplicaSpecificationsToTerraform(struct?: CassandraTableReplicaSpecifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    read_capacity_auto_scaling: cassandraTableReplicaSpecificationsReadCapacityAutoScalingToTerraform(struct!.readCapacityAutoScaling),
    read_capacity_units: cdktn.numberToTerraform(struct!.readCapacityUnits),
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function cassandraTableReplicaSpecificationsToHclTerraform(struct?: CassandraTableReplicaSpecifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    read_capacity_auto_scaling: {
      value: cassandraTableReplicaSpecificationsReadCapacityAutoScalingToHclTerraform(struct!.readCapacityAutoScaling),
      isBlock: true,
      type: "struct",
      storageClassType: "CassandraTableReplicaSpecificationsReadCapacityAutoScaling",
    },
    read_capacity_units: {
      value: cdktn.numberToHclTerraform(struct!.readCapacityUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class CassandraTableReplicaSpecificationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CassandraTableReplicaSpecifications | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._readCapacityAutoScaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readCapacityAutoScaling = this._readCapacityAutoScaling?.internalValue;
    }
    if (this._readCapacityUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.readCapacityUnits = this._readCapacityUnits;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CassandraTableReplicaSpecifications | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._readCapacityAutoScaling.internalValue = undefined;
      this._readCapacityUnits = undefined;
      this._region = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._readCapacityAutoScaling.internalValue = value.readCapacityAutoScaling;
      this._readCapacityUnits = value.readCapacityUnits;
      this._region = value.region;
    }
  }

  // read_capacity_auto_scaling - computed: true, optional: true, required: false
  private _readCapacityAutoScaling = new CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference(this, "read_capacity_auto_scaling");
  public get readCapacityAutoScaling() {
    return this._readCapacityAutoScaling;
  }
  public putReadCapacityAutoScaling(value: CassandraTableReplicaSpecificationsReadCapacityAutoScaling) {
    this._readCapacityAutoScaling.internalValue = value;
  }
  public resetReadCapacityAutoScaling() {
    this._readCapacityAutoScaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readCapacityAutoScalingInput() {
    return this._readCapacityAutoScaling.internalValue;
  }

  // read_capacity_units - computed: true, optional: true, required: false
  private _readCapacityUnits?: number; 
  public get readCapacityUnits() {
    return this.getNumberAttribute('read_capacity_units');
  }
  public set readCapacityUnits(value: number) {
    this._readCapacityUnits = value;
  }
  public resetReadCapacityUnits() {
    this._readCapacityUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readCapacityUnitsInput() {
    return this._readCapacityUnits;
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

export class CassandraTableReplicaSpecificationsList extends cdktn.ComplexList {
  public internalValue? : CassandraTableReplicaSpecifications[] | cdktn.IResolvable

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
  public get(index: number): CassandraTableReplicaSpecificationsOutputReference {
    return new CassandraTableReplicaSpecificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CassandraTableTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#key CassandraTable#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#value CassandraTable#value}
  */
  readonly value?: string;
}

export function cassandraTableTagsToTerraform(struct?: CassandraTableTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function cassandraTableTagsToHclTerraform(struct?: CassandraTableTags | cdktn.IResolvable): any {
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

export class CassandraTableTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CassandraTableTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CassandraTableTags | cdktn.IResolvable | undefined) {
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

export class CassandraTableTagsList extends cdktn.ComplexList {
  public internalValue? : CassandraTableTags[] | cdktn.IResolvable

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
  public get(index: number): CassandraTableTagsOutputReference {
    return new CassandraTableTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CassandraTableWarmThroughput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#read_units_per_second CassandraTable#read_units_per_second}
  */
  readonly readUnitsPerSecond?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#write_units_per_second CassandraTable#write_units_per_second}
  */
  readonly writeUnitsPerSecond?: number;
}

export function cassandraTableWarmThroughputToTerraform(struct?: CassandraTableWarmThroughput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    read_units_per_second: cdktn.numberToTerraform(struct!.readUnitsPerSecond),
    write_units_per_second: cdktn.numberToTerraform(struct!.writeUnitsPerSecond),
  }
}


export function cassandraTableWarmThroughputToHclTerraform(struct?: CassandraTableWarmThroughput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    read_units_per_second: {
      value: cdktn.numberToHclTerraform(struct!.readUnitsPerSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write_units_per_second: {
      value: cdktn.numberToHclTerraform(struct!.writeUnitsPerSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CassandraTableWarmThroughputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CassandraTableWarmThroughput | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._readUnitsPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.readUnitsPerSecond = this._readUnitsPerSecond;
    }
    if (this._writeUnitsPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeUnitsPerSecond = this._writeUnitsPerSecond;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CassandraTableWarmThroughput | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._readUnitsPerSecond = undefined;
      this._writeUnitsPerSecond = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._readUnitsPerSecond = value.readUnitsPerSecond;
      this._writeUnitsPerSecond = value.writeUnitsPerSecond;
    }
  }

  // read_units_per_second - computed: true, optional: true, required: false
  private _readUnitsPerSecond?: number; 
  public get readUnitsPerSecond() {
    return this.getNumberAttribute('read_units_per_second');
  }
  public set readUnitsPerSecond(value: number) {
    this._readUnitsPerSecond = value;
  }
  public resetReadUnitsPerSecond() {
    this._readUnitsPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readUnitsPerSecondInput() {
    return this._readUnitsPerSecond;
  }

  // write_units_per_second - computed: true, optional: true, required: false
  private _writeUnitsPerSecond?: number; 
  public get writeUnitsPerSecond() {
    return this.getNumberAttribute('write_units_per_second');
  }
  public set writeUnitsPerSecond(value: number) {
    this._writeUnitsPerSecond = value;
  }
  public resetWriteUnitsPerSecond() {
    this._writeUnitsPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeUnitsPerSecondInput() {
    return this._writeUnitsPerSecond;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table awscc_cassandra_table}
*/
export class CassandraTable extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cassandra_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CassandraTable resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CassandraTable to import
  * @param importFromId The id of the existing CassandraTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CassandraTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cassandra_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cassandra_table awscc_cassandra_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CassandraTableConfig
  */
  public constructor(scope: Construct, id: string, config: CassandraTableConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cassandra_table',
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
    this._autoScalingSpecifications.internalValue = config.autoScalingSpecifications;
    this._billingMode.internalValue = config.billingMode;
    this._cdcSpecification.internalValue = config.cdcSpecification;
    this._clientSideTimestampsEnabled = config.clientSideTimestampsEnabled;
    this._clusteringKeyColumns.internalValue = config.clusteringKeyColumns;
    this._defaultTimeToLive = config.defaultTimeToLive;
    this._encryptionSpecification.internalValue = config.encryptionSpecification;
    this._keyspaceName = config.keyspaceName;
    this._partitionKeyColumns.internalValue = config.partitionKeyColumns;
    this._pointInTimeRecoveryEnabled = config.pointInTimeRecoveryEnabled;
    this._regularColumns.internalValue = config.regularColumns;
    this._replicaSpecifications.internalValue = config.replicaSpecifications;
    this._tableName = config.tableName;
    this._tags.internalValue = config.tags;
    this._warmThroughput.internalValue = config.warmThroughput;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_scaling_specifications - computed: true, optional: true, required: false
  private _autoScalingSpecifications = new CassandraTableAutoScalingSpecificationsOutputReference(this, "auto_scaling_specifications");
  public get autoScalingSpecifications() {
    return this._autoScalingSpecifications;
  }
  public putAutoScalingSpecifications(value: CassandraTableAutoScalingSpecifications) {
    this._autoScalingSpecifications.internalValue = value;
  }
  public resetAutoScalingSpecifications() {
    this._autoScalingSpecifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingSpecificationsInput() {
    return this._autoScalingSpecifications.internalValue;
  }

  // billing_mode - computed: true, optional: true, required: false
  private _billingMode = new CassandraTableBillingModeOutputReference(this, "billing_mode");
  public get billingMode() {
    return this._billingMode;
  }
  public putBillingMode(value: CassandraTableBillingMode) {
    this._billingMode.internalValue = value;
  }
  public resetBillingMode() {
    this._billingMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingModeInput() {
    return this._billingMode.internalValue;
  }

  // cdc_specification - computed: true, optional: true, required: false
  private _cdcSpecification = new CassandraTableCdcSpecificationOutputReference(this, "cdc_specification");
  public get cdcSpecification() {
    return this._cdcSpecification;
  }
  public putCdcSpecification(value: CassandraTableCdcSpecification) {
    this._cdcSpecification.internalValue = value;
  }
  public resetCdcSpecification() {
    this._cdcSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdcSpecificationInput() {
    return this._cdcSpecification.internalValue;
  }

  // client_side_timestamps_enabled - computed: true, optional: true, required: false
  private _clientSideTimestampsEnabled?: boolean | cdktn.IResolvable; 
  public get clientSideTimestampsEnabled() {
    return this.getBooleanAttribute('client_side_timestamps_enabled');
  }
  public set clientSideTimestampsEnabled(value: boolean | cdktn.IResolvable) {
    this._clientSideTimestampsEnabled = value;
  }
  public resetClientSideTimestampsEnabled() {
    this._clientSideTimestampsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSideTimestampsEnabledInput() {
    return this._clientSideTimestampsEnabled;
  }

  // clustering_key_columns - computed: true, optional: true, required: false
  private _clusteringKeyColumns = new CassandraTableClusteringKeyColumnsList(this, "clustering_key_columns", false);
  public get clusteringKeyColumns() {
    return this._clusteringKeyColumns;
  }
  public putClusteringKeyColumns(value: CassandraTableClusteringKeyColumns[] | cdktn.IResolvable) {
    this._clusteringKeyColumns.internalValue = value;
  }
  public resetClusteringKeyColumns() {
    this._clusteringKeyColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusteringKeyColumnsInput() {
    return this._clusteringKeyColumns.internalValue;
  }

  // default_time_to_live - computed: true, optional: true, required: false
  private _defaultTimeToLive?: number; 
  public get defaultTimeToLive() {
    return this.getNumberAttribute('default_time_to_live');
  }
  public set defaultTimeToLive(value: number) {
    this._defaultTimeToLive = value;
  }
  public resetDefaultTimeToLive() {
    this._defaultTimeToLive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTimeToLiveInput() {
    return this._defaultTimeToLive;
  }

  // encryption_specification - computed: true, optional: true, required: false
  private _encryptionSpecification = new CassandraTableEncryptionSpecificationOutputReference(this, "encryption_specification");
  public get encryptionSpecification() {
    return this._encryptionSpecification;
  }
  public putEncryptionSpecification(value: CassandraTableEncryptionSpecification) {
    this._encryptionSpecification.internalValue = value;
  }
  public resetEncryptionSpecification() {
    this._encryptionSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionSpecificationInput() {
    return this._encryptionSpecification.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // keyspace_name - computed: false, optional: false, required: true
  private _keyspaceName?: string; 
  public get keyspaceName() {
    return this.getStringAttribute('keyspace_name');
  }
  public set keyspaceName(value: string) {
    this._keyspaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyspaceNameInput() {
    return this._keyspaceName;
  }

  // partition_key_columns - computed: false, optional: false, required: true
  private _partitionKeyColumns = new CassandraTablePartitionKeyColumnsList(this, "partition_key_columns", false);
  public get partitionKeyColumns() {
    return this._partitionKeyColumns;
  }
  public putPartitionKeyColumns(value: CassandraTablePartitionKeyColumns[] | cdktn.IResolvable) {
    this._partitionKeyColumns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionKeyColumnsInput() {
    return this._partitionKeyColumns.internalValue;
  }

  // point_in_time_recovery_enabled - computed: true, optional: true, required: false
  private _pointInTimeRecoveryEnabled?: boolean | cdktn.IResolvable; 
  public get pointInTimeRecoveryEnabled() {
    return this.getBooleanAttribute('point_in_time_recovery_enabled');
  }
  public set pointInTimeRecoveryEnabled(value: boolean | cdktn.IResolvable) {
    this._pointInTimeRecoveryEnabled = value;
  }
  public resetPointInTimeRecoveryEnabled() {
    this._pointInTimeRecoveryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointInTimeRecoveryEnabledInput() {
    return this._pointInTimeRecoveryEnabled;
  }

  // regular_columns - computed: true, optional: true, required: false
  private _regularColumns = new CassandraTableRegularColumnsList(this, "regular_columns", true);
  public get regularColumns() {
    return this._regularColumns;
  }
  public putRegularColumns(value: CassandraTableRegularColumns[] | cdktn.IResolvable) {
    this._regularColumns.internalValue = value;
  }
  public resetRegularColumns() {
    this._regularColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regularColumnsInput() {
    return this._regularColumns.internalValue;
  }

  // replica_specifications - computed: true, optional: true, required: false
  private _replicaSpecifications = new CassandraTableReplicaSpecificationsList(this, "replica_specifications", false);
  public get replicaSpecifications() {
    return this._replicaSpecifications;
  }
  public putReplicaSpecifications(value: CassandraTableReplicaSpecifications[] | cdktn.IResolvable) {
    this._replicaSpecifications.internalValue = value;
  }
  public resetReplicaSpecifications() {
    this._replicaSpecifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaSpecificationsInput() {
    return this._replicaSpecifications.internalValue;
  }

  // table_name - computed: true, optional: true, required: false
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  public resetTableName() {
    this._tableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new CassandraTableTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: CassandraTableTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // warm_throughput - computed: true, optional: true, required: false
  private _warmThroughput = new CassandraTableWarmThroughputOutputReference(this, "warm_throughput");
  public get warmThroughput() {
    return this._warmThroughput;
  }
  public putWarmThroughput(value: CassandraTableWarmThroughput) {
    this._warmThroughput.internalValue = value;
  }
  public resetWarmThroughput() {
    this._warmThroughput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmThroughputInput() {
    return this._warmThroughput.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_scaling_specifications: cassandraTableAutoScalingSpecificationsToTerraform(this._autoScalingSpecifications.internalValue),
      billing_mode: cassandraTableBillingModeToTerraform(this._billingMode.internalValue),
      cdc_specification: cassandraTableCdcSpecificationToTerraform(this._cdcSpecification.internalValue),
      client_side_timestamps_enabled: cdktn.booleanToTerraform(this._clientSideTimestampsEnabled),
      clustering_key_columns: cdktn.listMapper(cassandraTableClusteringKeyColumnsToTerraform, false)(this._clusteringKeyColumns.internalValue),
      default_time_to_live: cdktn.numberToTerraform(this._defaultTimeToLive),
      encryption_specification: cassandraTableEncryptionSpecificationToTerraform(this._encryptionSpecification.internalValue),
      keyspace_name: cdktn.stringToTerraform(this._keyspaceName),
      partition_key_columns: cdktn.listMapper(cassandraTablePartitionKeyColumnsToTerraform, false)(this._partitionKeyColumns.internalValue),
      point_in_time_recovery_enabled: cdktn.booleanToTerraform(this._pointInTimeRecoveryEnabled),
      regular_columns: cdktn.listMapper(cassandraTableRegularColumnsToTerraform, false)(this._regularColumns.internalValue),
      replica_specifications: cdktn.listMapper(cassandraTableReplicaSpecificationsToTerraform, false)(this._replicaSpecifications.internalValue),
      table_name: cdktn.stringToTerraform(this._tableName),
      tags: cdktn.listMapper(cassandraTableTagsToTerraform, false)(this._tags.internalValue),
      warm_throughput: cassandraTableWarmThroughputToTerraform(this._warmThroughput.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_scaling_specifications: {
        value: cassandraTableAutoScalingSpecificationsToHclTerraform(this._autoScalingSpecifications.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CassandraTableAutoScalingSpecifications",
      },
      billing_mode: {
        value: cassandraTableBillingModeToHclTerraform(this._billingMode.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CassandraTableBillingMode",
      },
      cdc_specification: {
        value: cassandraTableCdcSpecificationToHclTerraform(this._cdcSpecification.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CassandraTableCdcSpecification",
      },
      client_side_timestamps_enabled: {
        value: cdktn.booleanToHclTerraform(this._clientSideTimestampsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      clustering_key_columns: {
        value: cdktn.listMapperHcl(cassandraTableClusteringKeyColumnsToHclTerraform, false)(this._clusteringKeyColumns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CassandraTableClusteringKeyColumnsList",
      },
      default_time_to_live: {
        value: cdktn.numberToHclTerraform(this._defaultTimeToLive),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      encryption_specification: {
        value: cassandraTableEncryptionSpecificationToHclTerraform(this._encryptionSpecification.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CassandraTableEncryptionSpecification",
      },
      keyspace_name: {
        value: cdktn.stringToHclTerraform(this._keyspaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition_key_columns: {
        value: cdktn.listMapperHcl(cassandraTablePartitionKeyColumnsToHclTerraform, false)(this._partitionKeyColumns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CassandraTablePartitionKeyColumnsList",
      },
      point_in_time_recovery_enabled: {
        value: cdktn.booleanToHclTerraform(this._pointInTimeRecoveryEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      regular_columns: {
        value: cdktn.listMapperHcl(cassandraTableRegularColumnsToHclTerraform, false)(this._regularColumns.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CassandraTableRegularColumnsList",
      },
      replica_specifications: {
        value: cdktn.listMapperHcl(cassandraTableReplicaSpecificationsToHclTerraform, false)(this._replicaSpecifications.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CassandraTableReplicaSpecificationsList",
      },
      table_name: {
        value: cdktn.stringToHclTerraform(this._tableName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(cassandraTableTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CassandraTableTagsList",
      },
      warm_throughput: {
        value: cassandraTableWarmThroughputToHclTerraform(this._warmThroughput.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CassandraTableWarmThroughput",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
