// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_global_replication_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ElasticacheGlobalReplicationGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * AutomaticFailoverEnabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_global_replication_group#automatic_failover_enabled ElasticacheGlobalReplicationGroup#automatic_failover_enabled}
  */
  readonly automaticFailoverEnabled?: boolean | cdktn.IResolvable;
  /**
  * The cache node type of the Global Datastore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_global_replication_group#cache_node_type ElasticacheGlobalReplicationGroup#cache_node_type}
  */
  readonly cacheNodeType?: string;
  /**
  * Cache parameter group name to use for the new engine version. This parameter cannot be modified independently.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_global_replication_group#cache_parameter_group_name ElasticacheGlobalReplicationGroup#cache_parameter_group_name}
  */
  readonly cacheParameterGroupName?: string;
  /**
  * The engine of the Global Datastore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_global_replication_group#engine ElasticacheGlobalReplicationGroup#engine}
  */
  readonly engine?: string;
  /**
  * The engine version of the Global Datastore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_global_replication_group#engine_version ElasticacheGlobalReplicationGroup#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Indicates the number of node groups in the Global Datastore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_global_replication_group#global_node_group_count ElasticacheGlobalReplicationGroup#global_node_group_count}
  */
  readonly globalNodeGroupCount?: number;
  /**
  * The optional description of the Global Datastore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_global_replication_group#global_replication_group_description ElasticacheGlobalReplicationGroup#global_replication_group_description}
  */
  readonly globalReplicationGroupDescription?: string;
  /**
  * The suffix name of a Global Datastore. Amazon ElastiCache automatically applies a prefix to the Global Datastore ID when it is created. Each AWS Region has its own prefix. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_global_replication_group#global_replication_group_id_suffix ElasticacheGlobalReplicationGroup#global_replication_group_id_suffix}
  */
  readonly globalReplicationGroupIdSuffix?: string;
  /**
  * The replication groups that comprise the Global Datastore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_global_replication_group#members ElasticacheGlobalReplicationGroup#members}
  */
  readonly members: ElasticacheGlobalReplicationGroupMembers[] | cdktn.IResolvable;
  /**
  * Describes the replication group IDs, the AWS regions where they are stored and the shard configuration for each that comprise the Global Datastore 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_global_replication_group#regional_configurations ElasticacheGlobalReplicationGroup#regional_configurations}
  */
  readonly regionalConfigurations?: ElasticacheGlobalReplicationGroupRegionalConfigurations[] | cdktn.IResolvable;
}
export interface ElasticacheGlobalReplicationGroupMembers {
  /**
  * Regionally unique identifier for the member i.e. ReplicationGroupId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_global_replication_group#replication_group_id ElasticacheGlobalReplicationGroup#replication_group_id}
  */
  readonly replicationGroupId?: string;
  /**
  * The AWS region of the Global Datastore member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_global_replication_group#replication_group_region ElasticacheGlobalReplicationGroup#replication_group_region}
  */
  readonly replicationGroupRegion?: string;
  /**
  * Indicates the role of the member, primary or secondary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_global_replication_group#role ElasticacheGlobalReplicationGroup#role}
  */
  readonly role?: string;
}

export function elasticacheGlobalReplicationGroupMembersToTerraform(struct?: ElasticacheGlobalReplicationGroupMembers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    replication_group_id: cdktn.stringToTerraform(struct!.replicationGroupId),
    replication_group_region: cdktn.stringToTerraform(struct!.replicationGroupRegion),
    role: cdktn.stringToTerraform(struct!.role),
  }
}


export function elasticacheGlobalReplicationGroupMembersToHclTerraform(struct?: ElasticacheGlobalReplicationGroupMembers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    replication_group_id: {
      value: cdktn.stringToHclTerraform(struct!.replicationGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replication_group_region: {
      value: cdktn.stringToHclTerraform(struct!.replicationGroupRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktn.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticacheGlobalReplicationGroupMembersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ElasticacheGlobalReplicationGroupMembers | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replicationGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationGroupId = this._replicationGroupId;
    }
    if (this._replicationGroupRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationGroupRegion = this._replicationGroupRegion;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticacheGlobalReplicationGroupMembers | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._replicationGroupId = undefined;
      this._replicationGroupRegion = undefined;
      this._role = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._replicationGroupId = value.replicationGroupId;
      this._replicationGroupRegion = value.replicationGroupRegion;
      this._role = value.role;
    }
  }

  // replication_group_id - computed: true, optional: true, required: false
  private _replicationGroupId?: string; 
  public get replicationGroupId() {
    return this.getStringAttribute('replication_group_id');
  }
  public set replicationGroupId(value: string) {
    this._replicationGroupId = value;
  }
  public resetReplicationGroupId() {
    this._replicationGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationGroupIdInput() {
    return this._replicationGroupId;
  }

  // replication_group_region - computed: true, optional: true, required: false
  private _replicationGroupRegion?: string; 
  public get replicationGroupRegion() {
    return this.getStringAttribute('replication_group_region');
  }
  public set replicationGroupRegion(value: string) {
    this._replicationGroupRegion = value;
  }
  public resetReplicationGroupRegion() {
    this._replicationGroupRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationGroupRegionInput() {
    return this._replicationGroupRegion;
  }

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}

export class ElasticacheGlobalReplicationGroupMembersList extends cdktn.ComplexList {
  public internalValue? : ElasticacheGlobalReplicationGroupMembers[] | cdktn.IResolvable

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
  public get(index: number): ElasticacheGlobalReplicationGroupMembersOutputReference {
    return new ElasticacheGlobalReplicationGroupMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations {
  /**
  * Unique identifier for the Node Group. This is either auto-generated by ElastiCache (4-digit id) or a user supplied id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_global_replication_group#node_group_id ElasticacheGlobalReplicationGroup#node_group_id}
  */
  readonly nodeGroupId?: string;
  /**
  * A list of preferred availability zones for the nodes of new node groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_global_replication_group#preferred_availability_zones ElasticacheGlobalReplicationGroup#preferred_availability_zones}
  */
  readonly preferredAvailabilityZones?: string[];
}

export function elasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsToTerraform(struct?: ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    node_group_id: cdktn.stringToTerraform(struct!.nodeGroupId),
    preferred_availability_zones: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.preferredAvailabilityZones),
  }
}


export function elasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsToHclTerraform(struct?: ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    node_group_id: {
      value: cdktn.stringToHclTerraform(struct!.nodeGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferred_availability_zones: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.preferredAvailabilityZones),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroupId = this._nodeGroupId;
    }
    if (this._preferredAvailabilityZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredAvailabilityZones = this._preferredAvailabilityZones;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeGroupId = undefined;
      this._preferredAvailabilityZones = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeGroupId = value.nodeGroupId;
      this._preferredAvailabilityZones = value.preferredAvailabilityZones;
    }
  }

  // node_group_id - computed: true, optional: true, required: false
  private _nodeGroupId?: string; 
  public get nodeGroupId() {
    return this.getStringAttribute('node_group_id');
  }
  public set nodeGroupId(value: string) {
    this._nodeGroupId = value;
  }
  public resetNodeGroupId() {
    this._nodeGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupIdInput() {
    return this._nodeGroupId;
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
}

export class ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList extends cdktn.ComplexList {
  public internalValue? : ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations[] | cdktn.IResolvable

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
  public get(index: number): ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference {
    return new ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElasticacheGlobalReplicationGroupRegionalConfigurations {
  /**
  * The replication group id of the Global Datastore member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_global_replication_group#replication_group_id ElasticacheGlobalReplicationGroup#replication_group_id}
  */
  readonly replicationGroupId?: string;
  /**
  * The AWS region of the Global Datastore member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_global_replication_group#replication_group_region ElasticacheGlobalReplicationGroup#replication_group_region}
  */
  readonly replicationGroupRegion?: string;
  /**
  * A list of PreferredAvailabilityZones objects that specifies the configuration of a node group in the resharded cluster. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_global_replication_group#resharding_configurations ElasticacheGlobalReplicationGroup#resharding_configurations}
  */
  readonly reshardingConfigurations?: ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations[] | cdktn.IResolvable;
}

export function elasticacheGlobalReplicationGroupRegionalConfigurationsToTerraform(struct?: ElasticacheGlobalReplicationGroupRegionalConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    replication_group_id: cdktn.stringToTerraform(struct!.replicationGroupId),
    replication_group_region: cdktn.stringToTerraform(struct!.replicationGroupRegion),
    resharding_configurations: cdktn.listMapper(elasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsToTerraform, false)(struct!.reshardingConfigurations),
  }
}


export function elasticacheGlobalReplicationGroupRegionalConfigurationsToHclTerraform(struct?: ElasticacheGlobalReplicationGroupRegionalConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    replication_group_id: {
      value: cdktn.stringToHclTerraform(struct!.replicationGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replication_group_region: {
      value: cdktn.stringToHclTerraform(struct!.replicationGroupRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resharding_configurations: {
      value: cdktn.listMapperHcl(elasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsToHclTerraform, false)(struct!.reshardingConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ElasticacheGlobalReplicationGroupRegionalConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replicationGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationGroupId = this._replicationGroupId;
    }
    if (this._replicationGroupRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationGroupRegion = this._replicationGroupRegion;
    }
    if (this._reshardingConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reshardingConfigurations = this._reshardingConfigurations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticacheGlobalReplicationGroupRegionalConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._replicationGroupId = undefined;
      this._replicationGroupRegion = undefined;
      this._reshardingConfigurations.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._replicationGroupId = value.replicationGroupId;
      this._replicationGroupRegion = value.replicationGroupRegion;
      this._reshardingConfigurations.internalValue = value.reshardingConfigurations;
    }
  }

  // replication_group_id - computed: true, optional: true, required: false
  private _replicationGroupId?: string; 
  public get replicationGroupId() {
    return this.getStringAttribute('replication_group_id');
  }
  public set replicationGroupId(value: string) {
    this._replicationGroupId = value;
  }
  public resetReplicationGroupId() {
    this._replicationGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationGroupIdInput() {
    return this._replicationGroupId;
  }

  // replication_group_region - computed: true, optional: true, required: false
  private _replicationGroupRegion?: string; 
  public get replicationGroupRegion() {
    return this.getStringAttribute('replication_group_region');
  }
  public set replicationGroupRegion(value: string) {
    this._replicationGroupRegion = value;
  }
  public resetReplicationGroupRegion() {
    this._replicationGroupRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationGroupRegionInput() {
    return this._replicationGroupRegion;
  }

  // resharding_configurations - computed: true, optional: true, required: false
  private _reshardingConfigurations = new ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList(this, "resharding_configurations", false);
  public get reshardingConfigurations() {
    return this._reshardingConfigurations;
  }
  public putReshardingConfigurations(value: ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations[] | cdktn.IResolvable) {
    this._reshardingConfigurations.internalValue = value;
  }
  public resetReshardingConfigurations() {
    this._reshardingConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reshardingConfigurationsInput() {
    return this._reshardingConfigurations.internalValue;
  }
}

export class ElasticacheGlobalReplicationGroupRegionalConfigurationsList extends cdktn.ComplexList {
  public internalValue? : ElasticacheGlobalReplicationGroupRegionalConfigurations[] | cdktn.IResolvable

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
  public get(index: number): ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference {
    return new ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_global_replication_group awscc_elasticache_global_replication_group}
*/
export class ElasticacheGlobalReplicationGroup extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_elasticache_global_replication_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ElasticacheGlobalReplicationGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElasticacheGlobalReplicationGroup to import
  * @param importFromId The id of the existing ElasticacheGlobalReplicationGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_global_replication_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElasticacheGlobalReplicationGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_elasticache_global_replication_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticache_global_replication_group awscc_elasticache_global_replication_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticacheGlobalReplicationGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticacheGlobalReplicationGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_elasticache_global_replication_group',
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
    this._automaticFailoverEnabled = config.automaticFailoverEnabled;
    this._cacheNodeType = config.cacheNodeType;
    this._cacheParameterGroupName = config.cacheParameterGroupName;
    this._engine = config.engine;
    this._engineVersion = config.engineVersion;
    this._globalNodeGroupCount = config.globalNodeGroupCount;
    this._globalReplicationGroupDescription = config.globalReplicationGroupDescription;
    this._globalReplicationGroupIdSuffix = config.globalReplicationGroupIdSuffix;
    this._members.internalValue = config.members;
    this._regionalConfigurations.internalValue = config.regionalConfigurations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automatic_failover_enabled - computed: true, optional: true, required: false
  private _automaticFailoverEnabled?: boolean | cdktn.IResolvable; 
  public get automaticFailoverEnabled() {
    return this.getBooleanAttribute('automatic_failover_enabled');
  }
  public set automaticFailoverEnabled(value: boolean | cdktn.IResolvable) {
    this._automaticFailoverEnabled = value;
  }
  public resetAutomaticFailoverEnabled() {
    this._automaticFailoverEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticFailoverEnabledInput() {
    return this._automaticFailoverEnabled;
  }

  // cache_node_type - computed: true, optional: true, required: false
  private _cacheNodeType?: string; 
  public get cacheNodeType() {
    return this.getStringAttribute('cache_node_type');
  }
  public set cacheNodeType(value: string) {
    this._cacheNodeType = value;
  }
  public resetCacheNodeType() {
    this._cacheNodeType = undefined;
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

  // engine - computed: true, optional: true, required: false
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  public resetEngine() {
    this._engine = undefined;
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

  // global_node_group_count - computed: true, optional: true, required: false
  private _globalNodeGroupCount?: number; 
  public get globalNodeGroupCount() {
    return this.getNumberAttribute('global_node_group_count');
  }
  public set globalNodeGroupCount(value: number) {
    this._globalNodeGroupCount = value;
  }
  public resetGlobalNodeGroupCount() {
    this._globalNodeGroupCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalNodeGroupCountInput() {
    return this._globalNodeGroupCount;
  }

  // global_replication_group_description - computed: true, optional: true, required: false
  private _globalReplicationGroupDescription?: string; 
  public get globalReplicationGroupDescription() {
    return this.getStringAttribute('global_replication_group_description');
  }
  public set globalReplicationGroupDescription(value: string) {
    this._globalReplicationGroupDescription = value;
  }
  public resetGlobalReplicationGroupDescription() {
    this._globalReplicationGroupDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalReplicationGroupDescriptionInput() {
    return this._globalReplicationGroupDescription;
  }

  // global_replication_group_id - computed: true, optional: false, required: false
  public get globalReplicationGroupId() {
    return this.getStringAttribute('global_replication_group_id');
  }

  // global_replication_group_id_suffix - computed: true, optional: true, required: false
  private _globalReplicationGroupIdSuffix?: string; 
  public get globalReplicationGroupIdSuffix() {
    return this.getStringAttribute('global_replication_group_id_suffix');
  }
  public set globalReplicationGroupIdSuffix(value: string) {
    this._globalReplicationGroupIdSuffix = value;
  }
  public resetGlobalReplicationGroupIdSuffix() {
    this._globalReplicationGroupIdSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalReplicationGroupIdSuffixInput() {
    return this._globalReplicationGroupIdSuffix;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // members - computed: false, optional: false, required: true
  private _members = new ElasticacheGlobalReplicationGroupMembersList(this, "members", false);
  public get members() {
    return this._members;
  }
  public putMembers(value: ElasticacheGlobalReplicationGroupMembers[] | cdktn.IResolvable) {
    this._members.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
  }

  // regional_configurations - computed: true, optional: true, required: false
  private _regionalConfigurations = new ElasticacheGlobalReplicationGroupRegionalConfigurationsList(this, "regional_configurations", false);
  public get regionalConfigurations() {
    return this._regionalConfigurations;
  }
  public putRegionalConfigurations(value: ElasticacheGlobalReplicationGroupRegionalConfigurations[] | cdktn.IResolvable) {
    this._regionalConfigurations.internalValue = value;
  }
  public resetRegionalConfigurations() {
    this._regionalConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionalConfigurationsInput() {
    return this._regionalConfigurations.internalValue;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      automatic_failover_enabled: cdktn.booleanToTerraform(this._automaticFailoverEnabled),
      cache_node_type: cdktn.stringToTerraform(this._cacheNodeType),
      cache_parameter_group_name: cdktn.stringToTerraform(this._cacheParameterGroupName),
      engine: cdktn.stringToTerraform(this._engine),
      engine_version: cdktn.stringToTerraform(this._engineVersion),
      global_node_group_count: cdktn.numberToTerraform(this._globalNodeGroupCount),
      global_replication_group_description: cdktn.stringToTerraform(this._globalReplicationGroupDescription),
      global_replication_group_id_suffix: cdktn.stringToTerraform(this._globalReplicationGroupIdSuffix),
      members: cdktn.listMapper(elasticacheGlobalReplicationGroupMembersToTerraform, false)(this._members.internalValue),
      regional_configurations: cdktn.listMapper(elasticacheGlobalReplicationGroupRegionalConfigurationsToTerraform, false)(this._regionalConfigurations.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      automatic_failover_enabled: {
        value: cdktn.booleanToHclTerraform(this._automaticFailoverEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      global_node_group_count: {
        value: cdktn.numberToHclTerraform(this._globalNodeGroupCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      global_replication_group_description: {
        value: cdktn.stringToHclTerraform(this._globalReplicationGroupDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global_replication_group_id_suffix: {
        value: cdktn.stringToHclTerraform(this._globalReplicationGroupIdSuffix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      members: {
        value: cdktn.listMapperHcl(elasticacheGlobalReplicationGroupMembersToHclTerraform, false)(this._members.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticacheGlobalReplicationGroupMembersList",
      },
      regional_configurations: {
        value: cdktn.listMapperHcl(elasticacheGlobalReplicationGroupRegionalConfigurationsToHclTerraform, false)(this._regionalConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticacheGlobalReplicationGroupRegionalConfigurationsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
