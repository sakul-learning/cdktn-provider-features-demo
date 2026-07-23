// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_cache_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ElasticacheCacheClusterConfig extends cdktn.TerraformMetaArguments {
  /**
  * If you are running Redis engine version 6.0 or later, set this parameter to yes if you want to opt-in to the next minor version upgrade campaign.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_cache_cluster#auto_minor_version_upgrade ElasticacheCacheCluster#auto_minor_version_upgrade}
  */
  readonly autoMinorVersionUpgrade?: boolean | cdktn.IResolvable;
  /**
  * Specifies whether the nodes in this Memcached cluster are created in a single Availability Zone or created across multiple Availability Zones in the cluster's region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_cache_cluster#az_mode ElasticacheCacheCluster#az_mode}
  */
  readonly azMode?: string;
  /**
  * The compute and memory capacity of the nodes in the node group (shard).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_cache_cluster#cache_node_type ElasticacheCacheCluster#cache_node_type}
  */
  readonly cacheNodeType: string;
  /**
  * The name of the parameter group to associate with this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_cache_cluster#cache_parameter_group_name ElasticacheCacheCluster#cache_parameter_group_name}
  */
  readonly cacheParameterGroupName?: string;
  /**
  * A list of security group names to associate with this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_cache_cluster#cache_security_group_names ElasticacheCacheCluster#cache_security_group_names}
  */
  readonly cacheSecurityGroupNames?: string[];
  /**
  * The name of the subnet group to be used for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_cache_cluster#cache_subnet_group_name ElasticacheCacheCluster#cache_subnet_group_name}
  */
  readonly cacheSubnetGroupName?: string;
  /**
  * A name for the cache cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_cache_cluster#cluster_name ElasticacheCacheCluster#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * The name of the cache engine to be used for this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_cache_cluster#engine ElasticacheCacheCluster#engine}
  */
  readonly engine: string;
  /**
  * The version number of the cache engine to be used for this cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_cache_cluster#engine_version ElasticacheCacheCluster#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * The Ip Discovery parameter for cachecluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_cache_cluster#ip_discovery ElasticacheCacheCluster#ip_discovery}
  */
  readonly ipDiscovery?: string;
  /**
  * Specifies the destination, format and type of the logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_cache_cluster#log_delivery_configurations ElasticacheCacheCluster#log_delivery_configurations}
  */
  readonly logDeliveryConfigurations?: ElasticacheCacheClusterLogDeliveryConfigurations[] | cdktn.IResolvable;
  /**
  * The network type parameter for cachecluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_cache_cluster#network_type ElasticacheCacheCluster#network_type}
  */
  readonly networkType?: string;
  /**
  * The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_cache_cluster#notification_topic_arn ElasticacheCacheCluster#notification_topic_arn}
  */
  readonly notificationTopicArn?: string;
  /**
  * The number of cache nodes that the cache cluster should have.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_cache_cluster#num_cache_nodes ElasticacheCacheCluster#num_cache_nodes}
  */
  readonly numCacheNodes: number;
  /**
  * The port number on which each of the cache nodes accepts connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_cache_cluster#port ElasticacheCacheCluster#port}
  */
  readonly port?: number;
  /**
  * The EC2 Availability Zone in which the cluster is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_cache_cluster#preferred_availability_zone ElasticacheCacheCluster#preferred_availability_zone}
  */
  readonly preferredAvailabilityZone?: string;
  /**
  * A list of the Availability Zones in which cache nodes are created. The order of the zones in the list is not important.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_cache_cluster#preferred_availability_zones ElasticacheCacheCluster#preferred_availability_zones}
  */
  readonly preferredAvailabilityZones?: string[];
  /**
  * Specifies the weekly time range during which maintenance on the cluster is performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_cache_cluster#preferred_maintenance_window ElasticacheCacheCluster#preferred_maintenance_window}
  */
  readonly preferredMaintenanceWindow?: string;
  /**
  * A single-element string list containing an Amazon Resource Name (ARN) that uniquely identifies a Redis RDB snapshot file stored in Amazon S3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_cache_cluster#snapshot_arns ElasticacheCacheCluster#snapshot_arns}
  */
  readonly snapshotArns?: string[];
  /**
  * The name of a Redis snapshot from which to restore data into the new node group (shard).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_cache_cluster#snapshot_name ElasticacheCacheCluster#snapshot_name}
  */
  readonly snapshotName?: string;
  /**
  * The number of days for which ElastiCache retains automatic snapshots before deleting them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_cache_cluster#snapshot_retention_limit ElasticacheCacheCluster#snapshot_retention_limit}
  */
  readonly snapshotRetentionLimit?: number;
  /**
  * The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_cache_cluster#snapshot_window ElasticacheCacheCluster#snapshot_window}
  */
  readonly snapshotWindow?: string;
  /**
  * A list of tags to be added to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_cache_cluster#tags ElasticacheCacheCluster#tags}
  */
  readonly tags?: ElasticacheCacheClusterTags[] | cdktn.IResolvable;
  /**
  * A flag that enables in-transit encryption when set to true. You cannot modify the value of TransitEncryptionEnabled after the cluster is created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_cache_cluster#transit_encryption_enabled ElasticacheCacheCluster#transit_encryption_enabled}
  */
  readonly transitEncryptionEnabled?: boolean | cdktn.IResolvable;
  /**
  * One or more VPC security groups associated with the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_cache_cluster#vpc_security_group_ids ElasticacheCacheCluster#vpc_security_group_ids}
  */
  readonly vpcSecurityGroupIds?: string[];
}
export interface ElasticacheCacheClusterConfigurationEndpoint {
}

export function elasticacheCacheClusterConfigurationEndpointToTerraform(struct?: ElasticacheCacheClusterConfigurationEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function elasticacheCacheClusterConfigurationEndpointToHclTerraform(struct?: ElasticacheCacheClusterConfigurationEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ElasticacheCacheClusterConfigurationEndpointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ElasticacheCacheClusterConfigurationEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticacheCacheClusterConfigurationEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }
}
export interface ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails {
  /**
  * The name of the CloudWatch Logs log group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_cache_cluster#log_group ElasticacheCacheCluster#log_group}
  */
  readonly logGroup?: string;
}

export function elasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsToTerraform(struct?: ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    log_group: cdktn.stringToTerraform(struct!.logGroup),
  }
}


export function elasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsToHclTerraform(struct?: ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    log_group: {
      value: cdktn.stringToHclTerraform(struct!.logGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroup = this._logGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logGroup = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logGroup = value.logGroup;
    }
  }

  // log_group - computed: true, optional: true, required: false
  private _logGroup?: string; 
  public get logGroup() {
    return this.getStringAttribute('log_group');
  }
  public set logGroup(value: string) {
    this._logGroup = value;
  }
  public resetLogGroup() {
    this._logGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupInput() {
    return this._logGroup;
  }
}
export interface ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails {
  /**
  * The name of the Kinesis Data Firehose delivery stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_cache_cluster#delivery_stream ElasticacheCacheCluster#delivery_stream}
  */
  readonly deliveryStream?: string;
}

export function elasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsToTerraform(struct?: ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delivery_stream: cdktn.stringToTerraform(struct!.deliveryStream),
  }
}


export function elasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsToHclTerraform(struct?: ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delivery_stream: {
      value: cdktn.stringToHclTerraform(struct!.deliveryStream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deliveryStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryStream = this._deliveryStream;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deliveryStream = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deliveryStream = value.deliveryStream;
    }
  }

  // delivery_stream - computed: true, optional: true, required: false
  private _deliveryStream?: string; 
  public get deliveryStream() {
    return this.getStringAttribute('delivery_stream');
  }
  public set deliveryStream(value: string) {
    this._deliveryStream = value;
  }
  public resetDeliveryStream() {
    this._deliveryStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryStreamInput() {
    return this._deliveryStream;
  }
}
export interface ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails {
  /**
  * The configuration details of the CloudWatch Logs destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_cache_cluster#cloudwatch_logs_details ElasticacheCacheCluster#cloudwatch_logs_details}
  */
  readonly cloudwatchLogsDetails?: ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails;
  /**
  * The configuration details of the Kinesis Data Firehose destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_cache_cluster#kinesis_firehose_details ElasticacheCacheCluster#kinesis_firehose_details}
  */
  readonly kinesisFirehoseDetails?: ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails;
}

export function elasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsToTerraform(struct?: ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudwatch_logs_details: elasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsToTerraform(struct!.cloudwatchLogsDetails),
    kinesis_firehose_details: elasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsToTerraform(struct!.kinesisFirehoseDetails),
  }
}


export function elasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsToHclTerraform(struct?: ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudwatch_logs_details: {
      value: elasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsToHclTerraform(struct!.cloudwatchLogsDetails),
      isBlock: true,
      type: "struct",
      storageClassType: "ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails",
    },
    kinesis_firehose_details: {
      value: elasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsToHclTerraform(struct!.kinesisFirehoseDetails),
      isBlock: true,
      type: "struct",
      storageClassType: "ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchLogsDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogsDetails = this._cloudwatchLogsDetails?.internalValue;
    }
    if (this._kinesisFirehoseDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisFirehoseDetails = this._kinesisFirehoseDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudwatchLogsDetails.internalValue = undefined;
      this._kinesisFirehoseDetails.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudwatchLogsDetails.internalValue = value.cloudwatchLogsDetails;
      this._kinesisFirehoseDetails.internalValue = value.kinesisFirehoseDetails;
    }
  }

  // cloudwatch_logs_details - computed: true, optional: true, required: false
  private _cloudwatchLogsDetails = new ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference(this, "cloudwatch_logs_details");
  public get cloudwatchLogsDetails() {
    return this._cloudwatchLogsDetails;
  }
  public putCloudwatchLogsDetails(value: ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails) {
    this._cloudwatchLogsDetails.internalValue = value;
  }
  public resetCloudwatchLogsDetails() {
    this._cloudwatchLogsDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogsDetailsInput() {
    return this._cloudwatchLogsDetails.internalValue;
  }

  // kinesis_firehose_details - computed: true, optional: true, required: false
  private _kinesisFirehoseDetails = new ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference(this, "kinesis_firehose_details");
  public get kinesisFirehoseDetails() {
    return this._kinesisFirehoseDetails;
  }
  public putKinesisFirehoseDetails(value: ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails) {
    this._kinesisFirehoseDetails.internalValue = value;
  }
  public resetKinesisFirehoseDetails() {
    this._kinesisFirehoseDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisFirehoseDetailsInput() {
    return this._kinesisFirehoseDetails.internalValue;
  }
}
export interface ElasticacheCacheClusterLogDeliveryConfigurations {
  /**
  * Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_cache_cluster#destination_details ElasticacheCacheCluster#destination_details}
  */
  readonly destinationDetails?: ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails;
  /**
  * Specify either CloudWatch Logs or Kinesis Data Firehose as the destination type. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_cache_cluster#destination_type ElasticacheCacheCluster#destination_type}
  */
  readonly destinationType?: string;
  /**
  * Valid values are either json or text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_cache_cluster#log_format ElasticacheCacheCluster#log_format}
  */
  readonly logFormat?: string;
  /**
  * Valid value is either slow-log, which refers to slow-log or engine-log
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_cache_cluster#log_type ElasticacheCacheCluster#log_type}
  */
  readonly logType?: string;
}

export function elasticacheCacheClusterLogDeliveryConfigurationsToTerraform(struct?: ElasticacheCacheClusterLogDeliveryConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_details: elasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsToTerraform(struct!.destinationDetails),
    destination_type: cdktn.stringToTerraform(struct!.destinationType),
    log_format: cdktn.stringToTerraform(struct!.logFormat),
    log_type: cdktn.stringToTerraform(struct!.logType),
  }
}


export function elasticacheCacheClusterLogDeliveryConfigurationsToHclTerraform(struct?: ElasticacheCacheClusterLogDeliveryConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_details: {
      value: elasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsToHclTerraform(struct!.destinationDetails),
      isBlock: true,
      type: "struct",
      storageClassType: "ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails",
    },
    destination_type: {
      value: cdktn.stringToHclTerraform(struct!.destinationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_format: {
      value: cdktn.stringToHclTerraform(struct!.logFormat),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ElasticacheCacheClusterLogDeliveryConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationDetails = this._destinationDetails?.internalValue;
    }
    if (this._destinationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationType = this._destinationType;
    }
    if (this._logFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFormat = this._logFormat;
    }
    if (this._logType !== undefined) {
      hasAnyValues = true;
      internalValueResult.logType = this._logType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticacheCacheClusterLogDeliveryConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationDetails.internalValue = undefined;
      this._destinationType = undefined;
      this._logFormat = undefined;
      this._logType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationDetails.internalValue = value.destinationDetails;
      this._destinationType = value.destinationType;
      this._logFormat = value.logFormat;
      this._logType = value.logType;
    }
  }

  // destination_details - computed: true, optional: true, required: false
  private _destinationDetails = new ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference(this, "destination_details");
  public get destinationDetails() {
    return this._destinationDetails;
  }
  public putDestinationDetails(value: ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails) {
    this._destinationDetails.internalValue = value;
  }
  public resetDestinationDetails() {
    this._destinationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDetailsInput() {
    return this._destinationDetails.internalValue;
  }

  // destination_type - computed: true, optional: true, required: false
  private _destinationType?: string; 
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }
  public set destinationType(value: string) {
    this._destinationType = value;
  }
  public resetDestinationType() {
    this._destinationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTypeInput() {
    return this._destinationType;
  }

  // log_format - computed: true, optional: true, required: false
  private _logFormat?: string; 
  public get logFormat() {
    return this.getStringAttribute('log_format');
  }
  public set logFormat(value: string) {
    this._logFormat = value;
  }
  public resetLogFormat() {
    this._logFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFormatInput() {
    return this._logFormat;
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
}

export class ElasticacheCacheClusterLogDeliveryConfigurationsList extends cdktn.ComplexList {
  public internalValue? : ElasticacheCacheClusterLogDeliveryConfigurations[] | cdktn.IResolvable

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
  public get(index: number): ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference {
    return new ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElasticacheCacheClusterRedisEndpoint {
}

export function elasticacheCacheClusterRedisEndpointToTerraform(struct?: ElasticacheCacheClusterRedisEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function elasticacheCacheClusterRedisEndpointToHclTerraform(struct?: ElasticacheCacheClusterRedisEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ElasticacheCacheClusterRedisEndpointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ElasticacheCacheClusterRedisEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticacheCacheClusterRedisEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }
}
export interface ElasticacheCacheClusterTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_cache_cluster#key ElasticacheCacheCluster#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_cache_cluster#value ElasticacheCacheCluster#value}
  */
  readonly value?: string;
}

export function elasticacheCacheClusterTagsToTerraform(struct?: ElasticacheCacheClusterTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function elasticacheCacheClusterTagsToHclTerraform(struct?: ElasticacheCacheClusterTags | cdktn.IResolvable): any {
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

export class ElasticacheCacheClusterTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ElasticacheCacheClusterTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ElasticacheCacheClusterTags | cdktn.IResolvable | undefined) {
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

export class ElasticacheCacheClusterTagsList extends cdktn.ComplexList {
  public internalValue? : ElasticacheCacheClusterTags[] | cdktn.IResolvable

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
  public get(index: number): ElasticacheCacheClusterTagsOutputReference {
    return new ElasticacheCacheClusterTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_cache_cluster awscc_elasticache_cache_cluster}
*/
export class ElasticacheCacheCluster extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_elasticache_cache_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ElasticacheCacheCluster resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElasticacheCacheCluster to import
  * @param importFromId The id of the existing ElasticacheCacheCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_cache_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElasticacheCacheCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_elasticache_cache_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_cache_cluster awscc_elasticache_cache_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticacheCacheClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticacheCacheClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_elasticache_cache_cluster',
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
    this._autoMinorVersionUpgrade = config.autoMinorVersionUpgrade;
    this._azMode = config.azMode;
    this._cacheNodeType = config.cacheNodeType;
    this._cacheParameterGroupName = config.cacheParameterGroupName;
    this._cacheSecurityGroupNames = config.cacheSecurityGroupNames;
    this._cacheSubnetGroupName = config.cacheSubnetGroupName;
    this._clusterName = config.clusterName;
    this._engine = config.engine;
    this._engineVersion = config.engineVersion;
    this._ipDiscovery = config.ipDiscovery;
    this._logDeliveryConfigurations.internalValue = config.logDeliveryConfigurations;
    this._networkType = config.networkType;
    this._notificationTopicArn = config.notificationTopicArn;
    this._numCacheNodes = config.numCacheNodes;
    this._port = config.port;
    this._preferredAvailabilityZone = config.preferredAvailabilityZone;
    this._preferredAvailabilityZones = config.preferredAvailabilityZones;
    this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
    this._snapshotArns = config.snapshotArns;
    this._snapshotName = config.snapshotName;
    this._snapshotRetentionLimit = config.snapshotRetentionLimit;
    this._snapshotWindow = config.snapshotWindow;
    this._tags.internalValue = config.tags;
    this._transitEncryptionEnabled = config.transitEncryptionEnabled;
    this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_minor_version_upgrade - computed: true, optional: true, required: false
  private _autoMinorVersionUpgrade?: boolean | cdktn.IResolvable; 
  public get autoMinorVersionUpgrade() {
    return this.getBooleanAttribute('auto_minor_version_upgrade');
  }
  public set autoMinorVersionUpgrade(value: boolean | cdktn.IResolvable) {
    this._autoMinorVersionUpgrade = value;
  }
  public resetAutoMinorVersionUpgrade() {
    this._autoMinorVersionUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMinorVersionUpgradeInput() {
    return this._autoMinorVersionUpgrade;
  }

  // az_mode - computed: true, optional: true, required: false
  private _azMode?: string; 
  public get azMode() {
    return this.getStringAttribute('az_mode');
  }
  public set azMode(value: string) {
    this._azMode = value;
  }
  public resetAzMode() {
    this._azMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azModeInput() {
    return this._azMode;
  }

  // cache_node_type - computed: false, optional: false, required: true
  private _cacheNodeType?: string; 
  public get cacheNodeType() {
    return this.getStringAttribute('cache_node_type');
  }
  public set cacheNodeType(value: string) {
    this._cacheNodeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheNodeTypeInput() {
    return this._cacheNodeType;
  }

  // cache_parameter_group_name - computed: true, optional: true, required: false
  private _cacheParameterGroupName?: string; 
  public get cacheParameterGroupName() {
    return this.getStringAttribute('cache_parameter_group_name');
  }
  public set cacheParameterGroupName(value: string) {
    this._cacheParameterGroupName = value;
  }
  public resetCacheParameterGroupName() {
    this._cacheParameterGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheParameterGroupNameInput() {
    return this._cacheParameterGroupName;
  }

  // cache_security_group_names - computed: true, optional: true, required: false
  private _cacheSecurityGroupNames?: string[]; 
  public get cacheSecurityGroupNames() {
    return cdktn.Fn.tolist(this.getListAttribute('cache_security_group_names'));
  }
  public set cacheSecurityGroupNames(value: string[]) {
    this._cacheSecurityGroupNames = value;
  }
  public resetCacheSecurityGroupNames() {
    this._cacheSecurityGroupNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheSecurityGroupNamesInput() {
    return this._cacheSecurityGroupNames;
  }

  // cache_subnet_group_name - computed: true, optional: true, required: false
  private _cacheSubnetGroupName?: string; 
  public get cacheSubnetGroupName() {
    return this.getStringAttribute('cache_subnet_group_name');
  }
  public set cacheSubnetGroupName(value: string) {
    this._cacheSubnetGroupName = value;
  }
  public resetCacheSubnetGroupName() {
    this._cacheSubnetGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheSubnetGroupNameInput() {
    return this._cacheSubnetGroupName;
  }

  // cluster_name - computed: true, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // configuration_endpoint - computed: true, optional: false, required: false
  private _configurationEndpoint = new ElasticacheCacheClusterConfigurationEndpointOutputReference(this, "configuration_endpoint");
  public get configurationEndpoint() {
    return this._configurationEndpoint;
  }

  // engine - computed: false, optional: false, required: true
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // engine_version - computed: true, optional: true, required: false
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  public resetEngineVersion() {
    this._engineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_discovery - computed: true, optional: true, required: false
  private _ipDiscovery?: string; 
  public get ipDiscovery() {
    return this.getStringAttribute('ip_discovery');
  }
  public set ipDiscovery(value: string) {
    this._ipDiscovery = value;
  }
  public resetIpDiscovery() {
    this._ipDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDiscoveryInput() {
    return this._ipDiscovery;
  }

  // log_delivery_configurations - computed: true, optional: true, required: false
  private _logDeliveryConfigurations = new ElasticacheCacheClusterLogDeliveryConfigurationsList(this, "log_delivery_configurations", false);
  public get logDeliveryConfigurations() {
    return this._logDeliveryConfigurations;
  }
  public putLogDeliveryConfigurations(value: ElasticacheCacheClusterLogDeliveryConfigurations[] | cdktn.IResolvable) {
    this._logDeliveryConfigurations.internalValue = value;
  }
  public resetLogDeliveryConfigurations() {
    this._logDeliveryConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDeliveryConfigurationsInput() {
    return this._logDeliveryConfigurations.internalValue;
  }

  // network_type - computed: true, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // notification_topic_arn - computed: true, optional: true, required: false
  private _notificationTopicArn?: string; 
  public get notificationTopicArn() {
    return this.getStringAttribute('notification_topic_arn');
  }
  public set notificationTopicArn(value: string) {
    this._notificationTopicArn = value;
  }
  public resetNotificationTopicArn() {
    this._notificationTopicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTopicArnInput() {
    return this._notificationTopicArn;
  }

  // num_cache_nodes - computed: false, optional: false, required: true
  private _numCacheNodes?: number; 
  public get numCacheNodes() {
    return this.getNumberAttribute('num_cache_nodes');
  }
  public set numCacheNodes(value: number) {
    this._numCacheNodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numCacheNodesInput() {
    return this._numCacheNodes;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // preferred_availability_zone - computed: true, optional: true, required: false
  private _preferredAvailabilityZone?: string; 
  public get preferredAvailabilityZone() {
    return this.getStringAttribute('preferred_availability_zone');
  }
  public set preferredAvailabilityZone(value: string) {
    this._preferredAvailabilityZone = value;
  }
  public resetPreferredAvailabilityZone() {
    this._preferredAvailabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredAvailabilityZoneInput() {
    return this._preferredAvailabilityZone;
  }

  // preferred_availability_zones - computed: true, optional: true, required: false
  private _preferredAvailabilityZones?: string[]; 
  public get preferredAvailabilityZones() {
    return this.getListAttribute('preferred_availability_zones');
  }
  public set preferredAvailabilityZones(value: string[]) {
    this._preferredAvailabilityZones = value;
  }
  public resetPreferredAvailabilityZones() {
    this._preferredAvailabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredAvailabilityZonesInput() {
    return this._preferredAvailabilityZones;
  }

  // preferred_maintenance_window - computed: true, optional: true, required: false
  private _preferredMaintenanceWindow?: string; 
  public get preferredMaintenanceWindow() {
    return this.getStringAttribute('preferred_maintenance_window');
  }
  public set preferredMaintenanceWindow(value: string) {
    this._preferredMaintenanceWindow = value;
  }
  public resetPreferredMaintenanceWindow() {
    this._preferredMaintenanceWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredMaintenanceWindowInput() {
    return this._preferredMaintenanceWindow;
  }

  // redis_endpoint - computed: true, optional: false, required: false
  private _redisEndpoint = new ElasticacheCacheClusterRedisEndpointOutputReference(this, "redis_endpoint");
  public get redisEndpoint() {
    return this._redisEndpoint;
  }

  // snapshot_arns - computed: true, optional: true, required: false
  private _snapshotArns?: string[]; 
  public get snapshotArns() {
    return cdktn.Fn.tolist(this.getListAttribute('snapshot_arns'));
  }
  public set snapshotArns(value: string[]) {
    this._snapshotArns = value;
  }
  public resetSnapshotArns() {
    this._snapshotArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotArnsInput() {
    return this._snapshotArns;
  }

  // snapshot_name - computed: true, optional: true, required: false
  private _snapshotName?: string; 
  public get snapshotName() {
    return this.getStringAttribute('snapshot_name');
  }
  public set snapshotName(value: string) {
    this._snapshotName = value;
  }
  public resetSnapshotName() {
    this._snapshotName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotNameInput() {
    return this._snapshotName;
  }

  // snapshot_retention_limit - computed: true, optional: true, required: false
  private _snapshotRetentionLimit?: number; 
  public get snapshotRetentionLimit() {
    return this.getNumberAttribute('snapshot_retention_limit');
  }
  public set snapshotRetentionLimit(value: number) {
    this._snapshotRetentionLimit = value;
  }
  public resetSnapshotRetentionLimit() {
    this._snapshotRetentionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotRetentionLimitInput() {
    return this._snapshotRetentionLimit;
  }

  // snapshot_window - computed: true, optional: true, required: false
  private _snapshotWindow?: string; 
  public get snapshotWindow() {
    return this.getStringAttribute('snapshot_window');
  }
  public set snapshotWindow(value: string) {
    this._snapshotWindow = value;
  }
  public resetSnapshotWindow() {
    this._snapshotWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotWindowInput() {
    return this._snapshotWindow;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ElasticacheCacheClusterTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ElasticacheCacheClusterTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // transit_encryption_enabled - computed: true, optional: true, required: false
  private _transitEncryptionEnabled?: boolean | cdktn.IResolvable; 
  public get transitEncryptionEnabled() {
    return this.getBooleanAttribute('transit_encryption_enabled');
  }
  public set transitEncryptionEnabled(value: boolean | cdktn.IResolvable) {
    this._transitEncryptionEnabled = value;
  }
  public resetTransitEncryptionEnabled() {
    this._transitEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitEncryptionEnabledInput() {
    return this._transitEncryptionEnabled;
  }

  // vpc_security_group_ids - computed: true, optional: true, required: false
  private _vpcSecurityGroupIds?: string[]; 
  public get vpcSecurityGroupIds() {
    return this.getListAttribute('vpc_security_group_ids');
  }
  public set vpcSecurityGroupIds(value: string[]) {
    this._vpcSecurityGroupIds = value;
  }
  public resetVpcSecurityGroupIds() {
    this._vpcSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSecurityGroupIdsInput() {
    return this._vpcSecurityGroupIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_minor_version_upgrade: cdktn.booleanToTerraform(this._autoMinorVersionUpgrade),
      az_mode: cdktn.stringToTerraform(this._azMode),
      cache_node_type: cdktn.stringToTerraform(this._cacheNodeType),
      cache_parameter_group_name: cdktn.stringToTerraform(this._cacheParameterGroupName),
      cache_security_group_names: cdktn.listMapper(cdktn.stringToTerraform, false)(this._cacheSecurityGroupNames),
      cache_subnet_group_name: cdktn.stringToTerraform(this._cacheSubnetGroupName),
      cluster_name: cdktn.stringToTerraform(this._clusterName),
      engine: cdktn.stringToTerraform(this._engine),
      engine_version: cdktn.stringToTerraform(this._engineVersion),
      ip_discovery: cdktn.stringToTerraform(this._ipDiscovery),
      log_delivery_configurations: cdktn.listMapper(elasticacheCacheClusterLogDeliveryConfigurationsToTerraform, false)(this._logDeliveryConfigurations.internalValue),
      network_type: cdktn.stringToTerraform(this._networkType),
      notification_topic_arn: cdktn.stringToTerraform(this._notificationTopicArn),
      num_cache_nodes: cdktn.numberToTerraform(this._numCacheNodes),
      port: cdktn.numberToTerraform(this._port),
      preferred_availability_zone: cdktn.stringToTerraform(this._preferredAvailabilityZone),
      preferred_availability_zones: cdktn.listMapper(cdktn.stringToTerraform, false)(this._preferredAvailabilityZones),
      preferred_maintenance_window: cdktn.stringToTerraform(this._preferredMaintenanceWindow),
      snapshot_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._snapshotArns),
      snapshot_name: cdktn.stringToTerraform(this._snapshotName),
      snapshot_retention_limit: cdktn.numberToTerraform(this._snapshotRetentionLimit),
      snapshot_window: cdktn.stringToTerraform(this._snapshotWindow),
      tags: cdktn.listMapper(elasticacheCacheClusterTagsToTerraform, false)(this._tags.internalValue),
      transit_encryption_enabled: cdktn.booleanToTerraform(this._transitEncryptionEnabled),
      vpc_security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._vpcSecurityGroupIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_minor_version_upgrade: {
        value: cdktn.booleanToHclTerraform(this._autoMinorVersionUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      az_mode: {
        value: cdktn.stringToHclTerraform(this._azMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_node_type: {
        value: cdktn.stringToHclTerraform(this._cacheNodeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_parameter_group_name: {
        value: cdktn.stringToHclTerraform(this._cacheParameterGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_security_group_names: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._cacheSecurityGroupNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cache_subnet_group_name: {
        value: cdktn.stringToHclTerraform(this._cacheSubnetGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_name: {
        value: cdktn.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine: {
        value: cdktn.stringToHclTerraform(this._engine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_version: {
        value: cdktn.stringToHclTerraform(this._engineVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_discovery: {
        value: cdktn.stringToHclTerraform(this._ipDiscovery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_delivery_configurations: {
        value: cdktn.listMapperHcl(elasticacheCacheClusterLogDeliveryConfigurationsToHclTerraform, false)(this._logDeliveryConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticacheCacheClusterLogDeliveryConfigurationsList",
      },
      network_type: {
        value: cdktn.stringToHclTerraform(this._networkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_topic_arn: {
        value: cdktn.stringToHclTerraform(this._notificationTopicArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      num_cache_nodes: {
        value: cdktn.numberToHclTerraform(this._numCacheNodes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port: {
        value: cdktn.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      preferred_availability_zone: {
        value: cdktn.stringToHclTerraform(this._preferredAvailabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_availability_zones: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._preferredAvailabilityZones),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      preferred_maintenance_window: {
        value: cdktn.stringToHclTerraform(this._preferredMaintenanceWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_arns: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._snapshotArns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      snapshot_name: {
        value: cdktn.stringToHclTerraform(this._snapshotName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_retention_limit: {
        value: cdktn.numberToHclTerraform(this._snapshotRetentionLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snapshot_window: {
        value: cdktn.stringToHclTerraform(this._snapshotWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(elasticacheCacheClusterTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticacheCacheClusterTagsList",
      },
      transit_encryption_enabled: {
        value: cdktn.booleanToHclTerraform(this._transitEncryptionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vpc_security_group_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._vpcSecurityGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
