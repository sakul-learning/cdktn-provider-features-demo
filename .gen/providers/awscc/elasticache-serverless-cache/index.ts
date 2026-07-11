// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/elasticache_serverless_cache
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ElasticacheServerlessCacheConfig extends cdktn.TerraformMetaArguments {
  /**
  * The cache capacity limit of the Serverless Cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/elasticache_serverless_cache#cache_usage_limits ElasticacheServerlessCache#cache_usage_limits}
  */
  readonly cacheUsageLimits?: ElasticacheServerlessCacheCacheUsageLimits;
  /**
  * The daily time range (in UTC) during which the service takes automatic snapshot of the Serverless Cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/elasticache_serverless_cache#daily_snapshot_time ElasticacheServerlessCache#daily_snapshot_time}
  */
  readonly dailySnapshotTime?: string;
  /**
  * The description of the Serverless Cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/elasticache_serverless_cache#description ElasticacheServerlessCache#description}
  */
  readonly description?: string;
  /**
  * The address and the port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/elasticache_serverless_cache#endpoint ElasticacheServerlessCache#endpoint}
  */
  readonly endpoint?: ElasticacheServerlessCacheEndpoint;
  /**
  * The engine name of the Serverless Cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/elasticache_serverless_cache#engine ElasticacheServerlessCache#engine}
  */
  readonly engine: string;
  /**
  * The final snapshot name which is taken before Serverless Cache is deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/elasticache_serverless_cache#final_snapshot_name ElasticacheServerlessCache#final_snapshot_name}
  */
  readonly finalSnapshotName?: string;
  /**
  * The ID of the KMS key used to encrypt the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/elasticache_serverless_cache#kms_key_id ElasticacheServerlessCache#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * The major engine version of the Serverless Cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/elasticache_serverless_cache#major_engine_version ElasticacheServerlessCache#major_engine_version}
  */
  readonly majorEngineVersion?: string;
  /**
  * The address and the port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/elasticache_serverless_cache#reader_endpoint ElasticacheServerlessCache#reader_endpoint}
  */
  readonly readerEndpoint?: ElasticacheServerlessCacheReaderEndpoint;
  /**
  * One or more Amazon VPC security groups associated with this Serverless Cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/elasticache_serverless_cache#security_group_ids ElasticacheServerlessCache#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * The name of the Serverless Cache. This value must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/elasticache_serverless_cache#serverless_cache_name ElasticacheServerlessCache#serverless_cache_name}
  */
  readonly serverlessCacheName: string;
  /**
  * The ARN's of snapshot to restore Serverless Cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/elasticache_serverless_cache#snapshot_arns_to_restore ElasticacheServerlessCache#snapshot_arns_to_restore}
  */
  readonly snapshotArnsToRestore?: string[];
  /**
  * The snapshot retention limit of the Serverless Cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/elasticache_serverless_cache#snapshot_retention_limit ElasticacheServerlessCache#snapshot_retention_limit}
  */
  readonly snapshotRetentionLimit?: number;
  /**
  * The subnet id's of the Serverless Cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/elasticache_serverless_cache#subnet_ids ElasticacheServerlessCache#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * An array of key-value pairs to apply to this Serverless Cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/elasticache_serverless_cache#tags ElasticacheServerlessCache#tags}
  */
  readonly tags?: ElasticacheServerlessCacheTags[] | cdktn.IResolvable;
  /**
  * The ID of the user group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/elasticache_serverless_cache#user_group_id ElasticacheServerlessCache#user_group_id}
  */
  readonly userGroupId?: string;
}
export interface ElasticacheServerlessCacheCacheUsageLimitsDataStorage {
  /**
  * The maximum cached data capacity of the Serverless Cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/elasticache_serverless_cache#maximum ElasticacheServerlessCache#maximum}
  */
  readonly maximum?: number;
  /**
  * The minimum cached data capacity of the Serverless Cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/elasticache_serverless_cache#minimum ElasticacheServerlessCache#minimum}
  */
  readonly minimum?: number;
  /**
  * The unit of cached data capacity of the Serverless Cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/elasticache_serverless_cache#unit ElasticacheServerlessCache#unit}
  */
  readonly unit?: string;
}

export function elasticacheServerlessCacheCacheUsageLimitsDataStorageToTerraform(struct?: ElasticacheServerlessCacheCacheUsageLimitsDataStorage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    maximum: cdktn.numberToTerraform(struct!.maximum),
    minimum: cdktn.numberToTerraform(struct!.minimum),
    unit: cdktn.stringToTerraform(struct!.unit),
  }
}


export function elasticacheServerlessCacheCacheUsageLimitsDataStorageToHclTerraform(struct?: ElasticacheServerlessCacheCacheUsageLimitsDataStorage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    maximum: {
      value: cdktn.numberToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum: {
      value: cdktn.numberToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ElasticacheServerlessCacheCacheUsageLimitsDataStorage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticacheServerlessCacheCacheUsageLimitsDataStorage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximum = undefined;
      this._minimum = undefined;
      this._unit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximum = value.maximum;
      this._minimum = value.minimum;
      this._unit = value.unit;
    }
  }

  // maximum - computed: true, optional: true, required: false
  private _maximum?: number; 
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }
  public set maximum(value: number) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // minimum - computed: true, optional: true, required: false
  private _minimum?: number; 
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }
  public set minimum(value: number) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}
export interface ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond {
  /**
  * The maximum ECPU per second of the Serverless Cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/elasticache_serverless_cache#maximum ElasticacheServerlessCache#maximum}
  */
  readonly maximum?: number;
  /**
  * The minimum ECPU per second of the Serverless Cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/elasticache_serverless_cache#minimum ElasticacheServerlessCache#minimum}
  */
  readonly minimum?: number;
}

export function elasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondToTerraform(struct?: ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    maximum: cdktn.numberToTerraform(struct!.maximum),
    minimum: cdktn.numberToTerraform(struct!.minimum),
  }
}


export function elasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondToHclTerraform(struct?: ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    maximum: {
      value: cdktn.numberToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum: {
      value: cdktn.numberToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximum = undefined;
      this._minimum = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximum = value.maximum;
      this._minimum = value.minimum;
    }
  }

  // maximum - computed: true, optional: true, required: false
  private _maximum?: number; 
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }
  public set maximum(value: number) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // minimum - computed: true, optional: true, required: false
  private _minimum?: number; 
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }
  public set minimum(value: number) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }
}
export interface ElasticacheServerlessCacheCacheUsageLimits {
  /**
  * The cached data capacity of the Serverless Cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/elasticache_serverless_cache#data_storage ElasticacheServerlessCache#data_storage}
  */
  readonly dataStorage?: ElasticacheServerlessCacheCacheUsageLimitsDataStorage;
  /**
  * The ECPU per second of the Serverless Cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/elasticache_serverless_cache#ecpu_per_second ElasticacheServerlessCache#ecpu_per_second}
  */
  readonly ecpuPerSecond?: ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond;
}

export function elasticacheServerlessCacheCacheUsageLimitsToTerraform(struct?: ElasticacheServerlessCacheCacheUsageLimits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_storage: elasticacheServerlessCacheCacheUsageLimitsDataStorageToTerraform(struct!.dataStorage),
    ecpu_per_second: elasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondToTerraform(struct!.ecpuPerSecond),
  }
}


export function elasticacheServerlessCacheCacheUsageLimitsToHclTerraform(struct?: ElasticacheServerlessCacheCacheUsageLimits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_storage: {
      value: elasticacheServerlessCacheCacheUsageLimitsDataStorageToHclTerraform(struct!.dataStorage),
      isBlock: true,
      type: "struct",
      storageClassType: "ElasticacheServerlessCacheCacheUsageLimitsDataStorage",
    },
    ecpu_per_second: {
      value: elasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondToHclTerraform(struct!.ecpuPerSecond),
      isBlock: true,
      type: "struct",
      storageClassType: "ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticacheServerlessCacheCacheUsageLimitsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ElasticacheServerlessCacheCacheUsageLimits | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStorage = this._dataStorage?.internalValue;
    }
    if (this._ecpuPerSecond?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecpuPerSecond = this._ecpuPerSecond?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticacheServerlessCacheCacheUsageLimits | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataStorage.internalValue = undefined;
      this._ecpuPerSecond.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataStorage.internalValue = value.dataStorage;
      this._ecpuPerSecond.internalValue = value.ecpuPerSecond;
    }
  }

  // data_storage - computed: true, optional: true, required: false
  private _dataStorage = new ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference(this, "data_storage");
  public get dataStorage() {
    return this._dataStorage;
  }
  public putDataStorage(value: ElasticacheServerlessCacheCacheUsageLimitsDataStorage) {
    this._dataStorage.internalValue = value;
  }
  public resetDataStorage() {
    this._dataStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStorageInput() {
    return this._dataStorage.internalValue;
  }

  // ecpu_per_second - computed: true, optional: true, required: false
  private _ecpuPerSecond = new ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference(this, "ecpu_per_second");
  public get ecpuPerSecond() {
    return this._ecpuPerSecond;
  }
  public putEcpuPerSecond(value: ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond) {
    this._ecpuPerSecond.internalValue = value;
  }
  public resetEcpuPerSecond() {
    this._ecpuPerSecond.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecpuPerSecondInput() {
    return this._ecpuPerSecond.internalValue;
  }
}
export interface ElasticacheServerlessCacheEndpoint {
}

export function elasticacheServerlessCacheEndpointToTerraform(struct?: ElasticacheServerlessCacheEndpoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function elasticacheServerlessCacheEndpointToHclTerraform(struct?: ElasticacheServerlessCacheEndpoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ElasticacheServerlessCacheEndpointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ElasticacheServerlessCacheEndpoint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticacheServerlessCacheEndpoint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
export interface ElasticacheServerlessCacheReaderEndpoint {
}

export function elasticacheServerlessCacheReaderEndpointToTerraform(struct?: ElasticacheServerlessCacheReaderEndpoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function elasticacheServerlessCacheReaderEndpointToHclTerraform(struct?: ElasticacheServerlessCacheReaderEndpoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ElasticacheServerlessCacheReaderEndpointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ElasticacheServerlessCacheReaderEndpoint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticacheServerlessCacheReaderEndpoint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
export interface ElasticacheServerlessCacheTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with 'aws:'. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/elasticache_serverless_cache#key ElasticacheServerlessCache#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/elasticache_serverless_cache#value ElasticacheServerlessCache#value}
  */
  readonly value?: string;
}

export function elasticacheServerlessCacheTagsToTerraform(struct?: ElasticacheServerlessCacheTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function elasticacheServerlessCacheTagsToHclTerraform(struct?: ElasticacheServerlessCacheTags | cdktn.IResolvable): any {
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

export class ElasticacheServerlessCacheTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ElasticacheServerlessCacheTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ElasticacheServerlessCacheTags | cdktn.IResolvable | undefined) {
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

export class ElasticacheServerlessCacheTagsList extends cdktn.ComplexList {
  public internalValue? : ElasticacheServerlessCacheTags[] | cdktn.IResolvable

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
  public get(index: number): ElasticacheServerlessCacheTagsOutputReference {
    return new ElasticacheServerlessCacheTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/elasticache_serverless_cache awscc_elasticache_serverless_cache}
*/
export class ElasticacheServerlessCache extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_elasticache_serverless_cache";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ElasticacheServerlessCache resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElasticacheServerlessCache to import
  * @param importFromId The id of the existing ElasticacheServerlessCache that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/elasticache_serverless_cache#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElasticacheServerlessCache to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_elasticache_serverless_cache", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/elasticache_serverless_cache awscc_elasticache_serverless_cache} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticacheServerlessCacheConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticacheServerlessCacheConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_elasticache_serverless_cache',
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
    this._cacheUsageLimits.internalValue = config.cacheUsageLimits;
    this._dailySnapshotTime = config.dailySnapshotTime;
    this._description = config.description;
    this._endpoint.internalValue = config.endpoint;
    this._engine = config.engine;
    this._finalSnapshotName = config.finalSnapshotName;
    this._kmsKeyId = config.kmsKeyId;
    this._majorEngineVersion = config.majorEngineVersion;
    this._readerEndpoint.internalValue = config.readerEndpoint;
    this._securityGroupIds = config.securityGroupIds;
    this._serverlessCacheName = config.serverlessCacheName;
    this._snapshotArnsToRestore = config.snapshotArnsToRestore;
    this._snapshotRetentionLimit = config.snapshotRetentionLimit;
    this._subnetIds = config.subnetIds;
    this._tags.internalValue = config.tags;
    this._userGroupId = config.userGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cache_usage_limits - computed: true, optional: true, required: false
  private _cacheUsageLimits = new ElasticacheServerlessCacheCacheUsageLimitsOutputReference(this, "cache_usage_limits");
  public get cacheUsageLimits() {
    return this._cacheUsageLimits;
  }
  public putCacheUsageLimits(value: ElasticacheServerlessCacheCacheUsageLimits) {
    this._cacheUsageLimits.internalValue = value;
  }
  public resetCacheUsageLimits() {
    this._cacheUsageLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheUsageLimitsInput() {
    return this._cacheUsageLimits.internalValue;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // daily_snapshot_time - computed: true, optional: true, required: false
  private _dailySnapshotTime?: string; 
  public get dailySnapshotTime() {
    return this.getStringAttribute('daily_snapshot_time');
  }
  public set dailySnapshotTime(value: string) {
    this._dailySnapshotTime = value;
  }
  public resetDailySnapshotTime() {
    this._dailySnapshotTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailySnapshotTimeInput() {
    return this._dailySnapshotTime;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // endpoint - computed: true, optional: true, required: false
  private _endpoint = new ElasticacheServerlessCacheEndpointOutputReference(this, "endpoint");
  public get endpoint() {
    return this._endpoint;
  }
  public putEndpoint(value: ElasticacheServerlessCacheEndpoint) {
    this._endpoint.internalValue = value;
  }
  public resetEndpoint() {
    this._endpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint.internalValue;
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

  // final_snapshot_name - computed: true, optional: true, required: false
  private _finalSnapshotName?: string; 
  public get finalSnapshotName() {
    return this.getStringAttribute('final_snapshot_name');
  }
  public set finalSnapshotName(value: string) {
    this._finalSnapshotName = value;
  }
  public resetFinalSnapshotName() {
    this._finalSnapshotName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalSnapshotNameInput() {
    return this._finalSnapshotName;
  }

  // full_engine_version - computed: true, optional: false, required: false
  public get fullEngineVersion() {
    return this.getStringAttribute('full_engine_version');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // major_engine_version - computed: true, optional: true, required: false
  private _majorEngineVersion?: string; 
  public get majorEngineVersion() {
    return this.getStringAttribute('major_engine_version');
  }
  public set majorEngineVersion(value: string) {
    this._majorEngineVersion = value;
  }
  public resetMajorEngineVersion() {
    this._majorEngineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get majorEngineVersionInput() {
    return this._majorEngineVersion;
  }

  // reader_endpoint - computed: true, optional: true, required: false
  private _readerEndpoint = new ElasticacheServerlessCacheReaderEndpointOutputReference(this, "reader_endpoint");
  public get readerEndpoint() {
    return this._readerEndpoint;
  }
  public putReaderEndpoint(value: ElasticacheServerlessCacheReaderEndpoint) {
    this._readerEndpoint.internalValue = value;
  }
  public resetReaderEndpoint() {
    this._readerEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readerEndpointInput() {
    return this._readerEndpoint.internalValue;
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktn.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // serverless_cache_name - computed: false, optional: false, required: true
  private _serverlessCacheName?: string; 
  public get serverlessCacheName() {
    return this.getStringAttribute('serverless_cache_name');
  }
  public set serverlessCacheName(value: string) {
    this._serverlessCacheName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessCacheNameInput() {
    return this._serverlessCacheName;
  }

  // snapshot_arns_to_restore - computed: true, optional: true, required: false
  private _snapshotArnsToRestore?: string[]; 
  public get snapshotArnsToRestore() {
    return cdktn.Fn.tolist(this.getListAttribute('snapshot_arns_to_restore'));
  }
  public set snapshotArnsToRestore(value: string[]) {
    this._snapshotArnsToRestore = value;
  }
  public resetSnapshotArnsToRestore() {
    this._snapshotArnsToRestore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotArnsToRestoreInput() {
    return this._snapshotArnsToRestore;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ElasticacheServerlessCacheTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ElasticacheServerlessCacheTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // user_group_id - computed: true, optional: true, required: false
  private _userGroupId?: string; 
  public get userGroupId() {
    return this.getStringAttribute('user_group_id');
  }
  public set userGroupId(value: string) {
    this._userGroupId = value;
  }
  public resetUserGroupId() {
    this._userGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupIdInput() {
    return this._userGroupId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cache_usage_limits: elasticacheServerlessCacheCacheUsageLimitsToTerraform(this._cacheUsageLimits.internalValue),
      daily_snapshot_time: cdktn.stringToTerraform(this._dailySnapshotTime),
      description: cdktn.stringToTerraform(this._description),
      endpoint: elasticacheServerlessCacheEndpointToTerraform(this._endpoint.internalValue),
      engine: cdktn.stringToTerraform(this._engine),
      final_snapshot_name: cdktn.stringToTerraform(this._finalSnapshotName),
      kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
      major_engine_version: cdktn.stringToTerraform(this._majorEngineVersion),
      reader_endpoint: elasticacheServerlessCacheReaderEndpointToTerraform(this._readerEndpoint.internalValue),
      security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._securityGroupIds),
      serverless_cache_name: cdktn.stringToTerraform(this._serverlessCacheName),
      snapshot_arns_to_restore: cdktn.listMapper(cdktn.stringToTerraform, false)(this._snapshotArnsToRestore),
      snapshot_retention_limit: cdktn.numberToTerraform(this._snapshotRetentionLimit),
      subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._subnetIds),
      tags: cdktn.listMapper(elasticacheServerlessCacheTagsToTerraform, false)(this._tags.internalValue),
      user_group_id: cdktn.stringToTerraform(this._userGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cache_usage_limits: {
        value: elasticacheServerlessCacheCacheUsageLimitsToHclTerraform(this._cacheUsageLimits.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ElasticacheServerlessCacheCacheUsageLimits",
      },
      daily_snapshot_time: {
        value: cdktn.stringToHclTerraform(this._dailySnapshotTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint: {
        value: elasticacheServerlessCacheEndpointToHclTerraform(this._endpoint.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ElasticacheServerlessCacheEndpoint",
      },
      engine: {
        value: cdktn.stringToHclTerraform(this._engine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      final_snapshot_name: {
        value: cdktn.stringToHclTerraform(this._finalSnapshotName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_id: {
        value: cdktn.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      major_engine_version: {
        value: cdktn.stringToHclTerraform(this._majorEngineVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reader_endpoint: {
        value: elasticacheServerlessCacheReaderEndpointToHclTerraform(this._readerEndpoint.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ElasticacheServerlessCacheReaderEndpoint",
      },
      security_group_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      serverless_cache_name: {
        value: cdktn.stringToHclTerraform(this._serverlessCacheName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_arns_to_restore: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._snapshotArnsToRestore),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      snapshot_retention_limit: {
        value: cdktn.numberToHclTerraform(this._snapshotRetentionLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subnet_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._subnetIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktn.listMapperHcl(elasticacheServerlessCacheTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ElasticacheServerlessCacheTagsList",
      },
      user_group_id: {
        value: cdktn.stringToHclTerraform(this._userGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
