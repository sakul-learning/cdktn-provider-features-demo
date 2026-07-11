// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/pcs_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface PcsClusterConfig extends cdktn.TerraformMetaArguments {
  /**
  * The name that identifies the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/pcs_cluster#name PcsCluster#name}
  */
  readonly name?: string;
  /**
  * The networking configuration for the cluster's control plane.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/pcs_cluster#networking PcsCluster#networking}
  */
  readonly networking: PcsClusterNetworking;
  /**
  * The cluster management and job scheduling software associated with the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/pcs_cluster#scheduler PcsCluster#scheduler}
  */
  readonly scheduler: PcsClusterScheduler;
  /**
  * The size of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/pcs_cluster#size PcsCluster#size}
  */
  readonly size: string;
  /**
  * Additional options related to the Slurm scheduler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/pcs_cluster#slurm_configuration PcsCluster#slurm_configuration}
  */
  readonly slurmConfiguration?: PcsClusterSlurmConfiguration;
  /**
  * 1 or more tags added to the resource. Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/pcs_cluster#tags PcsCluster#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface PcsClusterEndpoints {
}

export function pcsClusterEndpointsToTerraform(struct?: PcsClusterEndpoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function pcsClusterEndpointsToHclTerraform(struct?: PcsClusterEndpoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class PcsClusterEndpointsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PcsClusterEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcsClusterEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv_6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv_6_address');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // private_ip_address - computed: true, optional: false, required: false
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // public_ip_address - computed: true, optional: false, required: false
  public get publicIpAddress() {
    return this.getStringAttribute('public_ip_address');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class PcsClusterEndpointsList extends cdktn.ComplexList {

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
  public get(index: number): PcsClusterEndpointsOutputReference {
    return new PcsClusterEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcsClusterErrorInfo {
}

export function pcsClusterErrorInfoToTerraform(struct?: PcsClusterErrorInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function pcsClusterErrorInfoToHclTerraform(struct?: PcsClusterErrorInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class PcsClusterErrorInfoOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PcsClusterErrorInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcsClusterErrorInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class PcsClusterErrorInfoList extends cdktn.ComplexList {

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
  public get(index: number): PcsClusterErrorInfoOutputReference {
    return new PcsClusterErrorInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcsClusterNetworking {
  /**
  * The IP of the cluster (IPV4 or IPV6)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/pcs_cluster#network_type PcsCluster#network_type}
  */
  readonly networkType?: string;
  /**
  * The list of security group IDs associated with the Elastic Network Interface (ENI) created in subnets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/pcs_cluster#security_group_ids PcsCluster#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * The list of subnet IDs where AWS PCS creates an Elastic Network Interface (ENI) to enable communication between managed controllers and AWS PCS resources. The subnet must have an available IP address, cannot reside in AWS Outposts, AWS Wavelength, or an AWS Local Zone. AWS PCS currently supports only 1 subnet in this list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/pcs_cluster#subnet_ids PcsCluster#subnet_ids}
  */
  readonly subnetIds?: string[];
}

export function pcsClusterNetworkingToTerraform(struct?: PcsClusterNetworking | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    network_type: cdktn.stringToTerraform(struct!.networkType),
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function pcsClusterNetworkingToHclTerraform(struct?: PcsClusterNetworking | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    network_type: {
      value: cdktn.stringToHclTerraform(struct!.networkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcsClusterNetworkingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcsClusterNetworking | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkType = this._networkType;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcsClusterNetworking | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkType = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkType = value.networkType;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
    }
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

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
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

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
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
}
export interface PcsClusterScheduler {
  /**
  * The software AWS PCS uses to manage cluster scaling and job scheduling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/pcs_cluster#type PcsCluster#type}
  */
  readonly type: string;
  /**
  * The version of the specified scheduling software that AWS PCS uses to manage cluster scaling and job scheduling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/pcs_cluster#version PcsCluster#version}
  */
  readonly version: string;
}

export function pcsClusterSchedulerToTerraform(struct?: PcsClusterScheduler | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function pcsClusterSchedulerToHclTerraform(struct?: PcsClusterScheduler | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcsClusterSchedulerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcsClusterScheduler | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcsClusterScheduler | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._version = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._version = value.version;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface PcsClusterSlurmConfigurationAccounting {
  /**
  * The default value for all purge settings for `slurmdbd.conf`. For more information, see the [slurmdbd.conf documentation at SchedMD](https://slurm.schedmd.com/slurmdbd.conf.html). The default value is `-1`. A value of `-1` means there is no purge time and records persist as long as the cluster exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/pcs_cluster#default_purge_time_in_days PcsCluster#default_purge_time_in_days}
  */
  readonly defaultPurgeTimeInDays?: number;
  /**
  * The default value is `NONE`. A value of `STANDARD` means that Slurm accounting is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/pcs_cluster#mode PcsCluster#mode}
  */
  readonly mode?: string;
}

export function pcsClusterSlurmConfigurationAccountingToTerraform(struct?: PcsClusterSlurmConfigurationAccounting | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_purge_time_in_days: cdktn.numberToTerraform(struct!.defaultPurgeTimeInDays),
    mode: cdktn.stringToTerraform(struct!.mode),
  }
}


export function pcsClusterSlurmConfigurationAccountingToHclTerraform(struct?: PcsClusterSlurmConfigurationAccounting | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_purge_time_in_days: {
      value: cdktn.numberToHclTerraform(struct!.defaultPurgeTimeInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcsClusterSlurmConfigurationAccountingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcsClusterSlurmConfigurationAccounting | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultPurgeTimeInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPurgeTimeInDays = this._defaultPurgeTimeInDays;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcsClusterSlurmConfigurationAccounting | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultPurgeTimeInDays = undefined;
      this._mode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultPurgeTimeInDays = value.defaultPurgeTimeInDays;
      this._mode = value.mode;
    }
  }

  // default_purge_time_in_days - computed: true, optional: true, required: false
  private _defaultPurgeTimeInDays?: number; 
  public get defaultPurgeTimeInDays() {
    return this.getNumberAttribute('default_purge_time_in_days');
  }
  public set defaultPurgeTimeInDays(value: number) {
    this._defaultPurgeTimeInDays = value;
  }
  public resetDefaultPurgeTimeInDays() {
    this._defaultPurgeTimeInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPurgeTimeInDaysInput() {
    return this._defaultPurgeTimeInDays;
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
}
export interface PcsClusterSlurmConfigurationAuthKey {
  /**
  * The Amazon Resource Name (ARN) of the the shared Slurm key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/pcs_cluster#secret_arn PcsCluster#secret_arn}
  */
  readonly secretArn?: string;
  /**
  * The version of the shared Slurm key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/pcs_cluster#secret_version PcsCluster#secret_version}
  */
  readonly secretVersion?: string;
}

export function pcsClusterSlurmConfigurationAuthKeyToTerraform(struct?: PcsClusterSlurmConfigurationAuthKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    secret_version: cdktn.stringToTerraform(struct!.secretVersion),
  }
}


export function pcsClusterSlurmConfigurationAuthKeyToHclTerraform(struct?: PcsClusterSlurmConfigurationAuthKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_version: {
      value: cdktn.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcsClusterSlurmConfigurationAuthKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcsClusterSlurmConfigurationAuthKey | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcsClusterSlurmConfigurationAuthKey | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretArn = undefined;
      this._secretVersion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretArn = value.secretArn;
      this._secretVersion = value.secretVersion;
    }
  }

  // secret_arn - computed: true, optional: true, required: false
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }

  // secret_version - computed: true, optional: true, required: false
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  public resetSecretVersion() {
    this._secretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface PcsClusterSlurmConfigurationCgroupCustomSettings {
  /**
  * The cgroup.conf parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/pcs_cluster#parameter_name PcsCluster#parameter_name}
  */
  readonly parameterName?: string;
  /**
  * The value for the cgroup.conf parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/pcs_cluster#parameter_value PcsCluster#parameter_value}
  */
  readonly parameterValue?: string;
}

export function pcsClusterSlurmConfigurationCgroupCustomSettingsToTerraform(struct?: PcsClusterSlurmConfigurationCgroupCustomSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    parameter_name: cdktn.stringToTerraform(struct!.parameterName),
    parameter_value: cdktn.stringToTerraform(struct!.parameterValue),
  }
}


export function pcsClusterSlurmConfigurationCgroupCustomSettingsToHclTerraform(struct?: PcsClusterSlurmConfigurationCgroupCustomSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    parameter_name: {
      value: cdktn.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_value: {
      value: cdktn.stringToHclTerraform(struct!.parameterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PcsClusterSlurmConfigurationCgroupCustomSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    if (this._parameterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValue = this._parameterValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcsClusterSlurmConfigurationCgroupCustomSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameterName = undefined;
      this._parameterValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameterName = value.parameterName;
      this._parameterValue = value.parameterValue;
    }
  }

  // parameter_name - computed: true, optional: true, required: false
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  public resetParameterName() {
    this._parameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }

  // parameter_value - computed: true, optional: true, required: false
  private _parameterValue?: string; 
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
  public set parameterValue(value: string) {
    this._parameterValue = value;
  }
  public resetParameterValue() {
    this._parameterValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }
}

export class PcsClusterSlurmConfigurationCgroupCustomSettingsList extends cdktn.ComplexList {
  public internalValue? : PcsClusterSlurmConfigurationCgroupCustomSettings[] | cdktn.IResolvable

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
  public get(index: number): PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference {
    return new PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcsClusterSlurmConfigurationJwtAuthJwtKey {
  /**
  * The Amazon Resource Name (ARN) of the JWT key secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/pcs_cluster#secret_arn PcsCluster#secret_arn}
  */
  readonly secretArn?: string;
  /**
  * The version of the JWT key secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/pcs_cluster#secret_version PcsCluster#secret_version}
  */
  readonly secretVersion?: string;
}

export function pcsClusterSlurmConfigurationJwtAuthJwtKeyToTerraform(struct?: PcsClusterSlurmConfigurationJwtAuthJwtKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    secret_version: cdktn.stringToTerraform(struct!.secretVersion),
  }
}


export function pcsClusterSlurmConfigurationJwtAuthJwtKeyToHclTerraform(struct?: PcsClusterSlurmConfigurationJwtAuthJwtKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_version: {
      value: cdktn.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcsClusterSlurmConfigurationJwtAuthJwtKey | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcsClusterSlurmConfigurationJwtAuthJwtKey | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretArn = undefined;
      this._secretVersion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretArn = value.secretArn;
      this._secretVersion = value.secretVersion;
    }
  }

  // secret_arn - computed: true, optional: true, required: false
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }

  // secret_version - computed: true, optional: true, required: false
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  public resetSecretVersion() {
    this._secretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface PcsClusterSlurmConfigurationJwtAuth {
  /**
  * JWT key configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/pcs_cluster#jwt_key PcsCluster#jwt_key}
  */
  readonly jwtKey?: PcsClusterSlurmConfigurationJwtAuthJwtKey;
}

export function pcsClusterSlurmConfigurationJwtAuthToTerraform(struct?: PcsClusterSlurmConfigurationJwtAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    jwt_key: pcsClusterSlurmConfigurationJwtAuthJwtKeyToTerraform(struct!.jwtKey),
  }
}


export function pcsClusterSlurmConfigurationJwtAuthToHclTerraform(struct?: PcsClusterSlurmConfigurationJwtAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    jwt_key: {
      value: pcsClusterSlurmConfigurationJwtAuthJwtKeyToHclTerraform(struct!.jwtKey),
      isBlock: true,
      type: "struct",
      storageClassType: "PcsClusterSlurmConfigurationJwtAuthJwtKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcsClusterSlurmConfigurationJwtAuthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcsClusterSlurmConfigurationJwtAuth | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jwtKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtKey = this._jwtKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcsClusterSlurmConfigurationJwtAuth | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jwtKey.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jwtKey.internalValue = value.jwtKey;
    }
  }

  // jwt_key - computed: true, optional: true, required: false
  private _jwtKey = new PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference(this, "jwt_key");
  public get jwtKey() {
    return this._jwtKey;
  }
  public putJwtKey(value: PcsClusterSlurmConfigurationJwtAuthJwtKey) {
    this._jwtKey.internalValue = value;
  }
  public resetJwtKey() {
    this._jwtKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtKeyInput() {
    return this._jwtKey.internalValue;
  }
}
export interface PcsClusterSlurmConfigurationSlurmCustomSettings {
  /**
  * AWS PCS supports configuration of the following Slurm parameters for clusters: Prolog, Epilog, and SelectTypeParameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/pcs_cluster#parameter_name PcsCluster#parameter_name}
  */
  readonly parameterName?: string;
  /**
  * The value for the configured Slurm setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/pcs_cluster#parameter_value PcsCluster#parameter_value}
  */
  readonly parameterValue?: string;
}

export function pcsClusterSlurmConfigurationSlurmCustomSettingsToTerraform(struct?: PcsClusterSlurmConfigurationSlurmCustomSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    parameter_name: cdktn.stringToTerraform(struct!.parameterName),
    parameter_value: cdktn.stringToTerraform(struct!.parameterValue),
  }
}


export function pcsClusterSlurmConfigurationSlurmCustomSettingsToHclTerraform(struct?: PcsClusterSlurmConfigurationSlurmCustomSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    parameter_name: {
      value: cdktn.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_value: {
      value: cdktn.stringToHclTerraform(struct!.parameterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PcsClusterSlurmConfigurationSlurmCustomSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    if (this._parameterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValue = this._parameterValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcsClusterSlurmConfigurationSlurmCustomSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameterName = undefined;
      this._parameterValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameterName = value.parameterName;
      this._parameterValue = value.parameterValue;
    }
  }

  // parameter_name - computed: true, optional: true, required: false
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  public resetParameterName() {
    this._parameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }

  // parameter_value - computed: true, optional: true, required: false
  private _parameterValue?: string; 
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
  public set parameterValue(value: string) {
    this._parameterValue = value;
  }
  public resetParameterValue() {
    this._parameterValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }
}

export class PcsClusterSlurmConfigurationSlurmCustomSettingsList extends cdktn.ComplexList {
  public internalValue? : PcsClusterSlurmConfigurationSlurmCustomSettings[] | cdktn.IResolvable

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
  public get(index: number): PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference {
    return new PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcsClusterSlurmConfigurationSlurmRest {
  /**
  * The default value is `NONE`. A value of `STANDARD` means that Slurm Rest is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/pcs_cluster#mode PcsCluster#mode}
  */
  readonly mode?: string;
}

export function pcsClusterSlurmConfigurationSlurmRestToTerraform(struct?: PcsClusterSlurmConfigurationSlurmRest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mode: cdktn.stringToTerraform(struct!.mode),
  }
}


export function pcsClusterSlurmConfigurationSlurmRestToHclTerraform(struct?: PcsClusterSlurmConfigurationSlurmRest | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcsClusterSlurmConfigurationSlurmRestOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcsClusterSlurmConfigurationSlurmRest | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcsClusterSlurmConfigurationSlurmRest | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
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
}
export interface PcsClusterSlurmConfigurationSlurmdbdCustomSettings {
  /**
  * The slurmdbd.conf parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/pcs_cluster#parameter_name PcsCluster#parameter_name}
  */
  readonly parameterName?: string;
  /**
  * The value for the slurmdbd.conf parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/pcs_cluster#parameter_value PcsCluster#parameter_value}
  */
  readonly parameterValue?: string;
}

export function pcsClusterSlurmConfigurationSlurmdbdCustomSettingsToTerraform(struct?: PcsClusterSlurmConfigurationSlurmdbdCustomSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    parameter_name: cdktn.stringToTerraform(struct!.parameterName),
    parameter_value: cdktn.stringToTerraform(struct!.parameterValue),
  }
}


export function pcsClusterSlurmConfigurationSlurmdbdCustomSettingsToHclTerraform(struct?: PcsClusterSlurmConfigurationSlurmdbdCustomSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    parameter_name: {
      value: cdktn.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_value: {
      value: cdktn.stringToHclTerraform(struct!.parameterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PcsClusterSlurmConfigurationSlurmdbdCustomSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    if (this._parameterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValue = this._parameterValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcsClusterSlurmConfigurationSlurmdbdCustomSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameterName = undefined;
      this._parameterValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameterName = value.parameterName;
      this._parameterValue = value.parameterValue;
    }
  }

  // parameter_name - computed: true, optional: true, required: false
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  public resetParameterName() {
    this._parameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }

  // parameter_value - computed: true, optional: true, required: false
  private _parameterValue?: string; 
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
  public set parameterValue(value: string) {
    this._parameterValue = value;
  }
  public resetParameterValue() {
    this._parameterValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }
}

export class PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList extends cdktn.ComplexList {
  public internalValue? : PcsClusterSlurmConfigurationSlurmdbdCustomSettings[] | cdktn.IResolvable

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
  public get(index: number): PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference {
    return new PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcsClusterSlurmConfiguration {
  /**
  * The accounting configuration includes configurable settings for Slurm accounting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/pcs_cluster#accounting PcsCluster#accounting}
  */
  readonly accounting?: PcsClusterSlurmConfigurationAccounting;
  /**
  * The shared Slurm key for authentication, also known as the cluster secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/pcs_cluster#auth_key PcsCluster#auth_key}
  */
  readonly authKey?: PcsClusterSlurmConfigurationAuthKey;
  /**
  * Additional cgroup-specific configuration that directly maps to cgroup.conf settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/pcs_cluster#cgroup_custom_settings PcsCluster#cgroup_custom_settings}
  */
  readonly cgroupCustomSettings?: PcsClusterSlurmConfigurationCgroupCustomSettings[] | cdktn.IResolvable;
  /**
  * JWT authentication configuration for Slurm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/pcs_cluster#jwt_auth PcsCluster#jwt_auth}
  */
  readonly jwtAuth?: PcsClusterSlurmConfigurationJwtAuth;
  /**
  * The time before an idle node is scaled down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/pcs_cluster#scale_down_idle_time_in_seconds PcsCluster#scale_down_idle_time_in_seconds}
  */
  readonly scaleDownIdleTimeInSeconds?: number;
  /**
  * Additional Slurm-specific configuration that directly maps to Slurm settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/pcs_cluster#slurm_custom_settings PcsCluster#slurm_custom_settings}
  */
  readonly slurmCustomSettings?: PcsClusterSlurmConfigurationSlurmCustomSettings[] | cdktn.IResolvable;
  /**
  * The SlurmRest configuration includes configurable settings for Slurm Rest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/pcs_cluster#slurm_rest PcsCluster#slurm_rest}
  */
  readonly slurmRest?: PcsClusterSlurmConfigurationSlurmRest;
  /**
  * Additional slurmdbd-specific configuration that directly maps to slurmdbd.conf settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/pcs_cluster#slurmdbd_custom_settings PcsCluster#slurmdbd_custom_settings}
  */
  readonly slurmdbdCustomSettings?: PcsClusterSlurmConfigurationSlurmdbdCustomSettings[] | cdktn.IResolvable;
}

export function pcsClusterSlurmConfigurationToTerraform(struct?: PcsClusterSlurmConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accounting: pcsClusterSlurmConfigurationAccountingToTerraform(struct!.accounting),
    auth_key: pcsClusterSlurmConfigurationAuthKeyToTerraform(struct!.authKey),
    cgroup_custom_settings: cdktn.listMapper(pcsClusterSlurmConfigurationCgroupCustomSettingsToTerraform, false)(struct!.cgroupCustomSettings),
    jwt_auth: pcsClusterSlurmConfigurationJwtAuthToTerraform(struct!.jwtAuth),
    scale_down_idle_time_in_seconds: cdktn.numberToTerraform(struct!.scaleDownIdleTimeInSeconds),
    slurm_custom_settings: cdktn.listMapper(pcsClusterSlurmConfigurationSlurmCustomSettingsToTerraform, false)(struct!.slurmCustomSettings),
    slurm_rest: pcsClusterSlurmConfigurationSlurmRestToTerraform(struct!.slurmRest),
    slurmdbd_custom_settings: cdktn.listMapper(pcsClusterSlurmConfigurationSlurmdbdCustomSettingsToTerraform, false)(struct!.slurmdbdCustomSettings),
  }
}


export function pcsClusterSlurmConfigurationToHclTerraform(struct?: PcsClusterSlurmConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    accounting: {
      value: pcsClusterSlurmConfigurationAccountingToHclTerraform(struct!.accounting),
      isBlock: true,
      type: "struct",
      storageClassType: "PcsClusterSlurmConfigurationAccounting",
    },
    auth_key: {
      value: pcsClusterSlurmConfigurationAuthKeyToHclTerraform(struct!.authKey),
      isBlock: true,
      type: "struct",
      storageClassType: "PcsClusterSlurmConfigurationAuthKey",
    },
    cgroup_custom_settings: {
      value: cdktn.listMapperHcl(pcsClusterSlurmConfigurationCgroupCustomSettingsToHclTerraform, false)(struct!.cgroupCustomSettings),
      isBlock: true,
      type: "list",
      storageClassType: "PcsClusterSlurmConfigurationCgroupCustomSettingsList",
    },
    jwt_auth: {
      value: pcsClusterSlurmConfigurationJwtAuthToHclTerraform(struct!.jwtAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "PcsClusterSlurmConfigurationJwtAuth",
    },
    scale_down_idle_time_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.scaleDownIdleTimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slurm_custom_settings: {
      value: cdktn.listMapperHcl(pcsClusterSlurmConfigurationSlurmCustomSettingsToHclTerraform, false)(struct!.slurmCustomSettings),
      isBlock: true,
      type: "list",
      storageClassType: "PcsClusterSlurmConfigurationSlurmCustomSettingsList",
    },
    slurm_rest: {
      value: pcsClusterSlurmConfigurationSlurmRestToHclTerraform(struct!.slurmRest),
      isBlock: true,
      type: "struct",
      storageClassType: "PcsClusterSlurmConfigurationSlurmRest",
    },
    slurmdbd_custom_settings: {
      value: cdktn.listMapperHcl(pcsClusterSlurmConfigurationSlurmdbdCustomSettingsToHclTerraform, false)(struct!.slurmdbdCustomSettings),
      isBlock: true,
      type: "list",
      storageClassType: "PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcsClusterSlurmConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcsClusterSlurmConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accounting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accounting = this._accounting?.internalValue;
    }
    if (this._authKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authKey = this._authKey?.internalValue;
    }
    if (this._cgroupCustomSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cgroupCustomSettings = this._cgroupCustomSettings?.internalValue;
    }
    if (this._jwtAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtAuth = this._jwtAuth?.internalValue;
    }
    if (this._scaleDownIdleTimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleDownIdleTimeInSeconds = this._scaleDownIdleTimeInSeconds;
    }
    if (this._slurmCustomSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slurmCustomSettings = this._slurmCustomSettings?.internalValue;
    }
    if (this._slurmRest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slurmRest = this._slurmRest?.internalValue;
    }
    if (this._slurmdbdCustomSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slurmdbdCustomSettings = this._slurmdbdCustomSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcsClusterSlurmConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accounting.internalValue = undefined;
      this._authKey.internalValue = undefined;
      this._cgroupCustomSettings.internalValue = undefined;
      this._jwtAuth.internalValue = undefined;
      this._scaleDownIdleTimeInSeconds = undefined;
      this._slurmCustomSettings.internalValue = undefined;
      this._slurmRest.internalValue = undefined;
      this._slurmdbdCustomSettings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accounting.internalValue = value.accounting;
      this._authKey.internalValue = value.authKey;
      this._cgroupCustomSettings.internalValue = value.cgroupCustomSettings;
      this._jwtAuth.internalValue = value.jwtAuth;
      this._scaleDownIdleTimeInSeconds = value.scaleDownIdleTimeInSeconds;
      this._slurmCustomSettings.internalValue = value.slurmCustomSettings;
      this._slurmRest.internalValue = value.slurmRest;
      this._slurmdbdCustomSettings.internalValue = value.slurmdbdCustomSettings;
    }
  }

  // accounting - computed: true, optional: true, required: false
  private _accounting = new PcsClusterSlurmConfigurationAccountingOutputReference(this, "accounting");
  public get accounting() {
    return this._accounting;
  }
  public putAccounting(value: PcsClusterSlurmConfigurationAccounting) {
    this._accounting.internalValue = value;
  }
  public resetAccounting() {
    this._accounting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingInput() {
    return this._accounting.internalValue;
  }

  // auth_key - computed: true, optional: true, required: false
  private _authKey = new PcsClusterSlurmConfigurationAuthKeyOutputReference(this, "auth_key");
  public get authKey() {
    return this._authKey;
  }
  public putAuthKey(value: PcsClusterSlurmConfigurationAuthKey) {
    this._authKey.internalValue = value;
  }
  public resetAuthKey() {
    this._authKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeyInput() {
    return this._authKey.internalValue;
  }

  // cgroup_custom_settings - computed: true, optional: true, required: false
  private _cgroupCustomSettings = new PcsClusterSlurmConfigurationCgroupCustomSettingsList(this, "cgroup_custom_settings", false);
  public get cgroupCustomSettings() {
    return this._cgroupCustomSettings;
  }
  public putCgroupCustomSettings(value: PcsClusterSlurmConfigurationCgroupCustomSettings[] | cdktn.IResolvable) {
    this._cgroupCustomSettings.internalValue = value;
  }
  public resetCgroupCustomSettings() {
    this._cgroupCustomSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgroupCustomSettingsInput() {
    return this._cgroupCustomSettings.internalValue;
  }

  // jwt_auth - computed: true, optional: true, required: false
  private _jwtAuth = new PcsClusterSlurmConfigurationJwtAuthOutputReference(this, "jwt_auth");
  public get jwtAuth() {
    return this._jwtAuth;
  }
  public putJwtAuth(value: PcsClusterSlurmConfigurationJwtAuth) {
    this._jwtAuth.internalValue = value;
  }
  public resetJwtAuth() {
    this._jwtAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtAuthInput() {
    return this._jwtAuth.internalValue;
  }

  // scale_down_idle_time_in_seconds - computed: true, optional: true, required: false
  private _scaleDownIdleTimeInSeconds?: number; 
  public get scaleDownIdleTimeInSeconds() {
    return this.getNumberAttribute('scale_down_idle_time_in_seconds');
  }
  public set scaleDownIdleTimeInSeconds(value: number) {
    this._scaleDownIdleTimeInSeconds = value;
  }
  public resetScaleDownIdleTimeInSeconds() {
    this._scaleDownIdleTimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownIdleTimeInSecondsInput() {
    return this._scaleDownIdleTimeInSeconds;
  }

  // slurm_custom_settings - computed: true, optional: true, required: false
  private _slurmCustomSettings = new PcsClusterSlurmConfigurationSlurmCustomSettingsList(this, "slurm_custom_settings", false);
  public get slurmCustomSettings() {
    return this._slurmCustomSettings;
  }
  public putSlurmCustomSettings(value: PcsClusterSlurmConfigurationSlurmCustomSettings[] | cdktn.IResolvable) {
    this._slurmCustomSettings.internalValue = value;
  }
  public resetSlurmCustomSettings() {
    this._slurmCustomSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slurmCustomSettingsInput() {
    return this._slurmCustomSettings.internalValue;
  }

  // slurm_rest - computed: true, optional: true, required: false
  private _slurmRest = new PcsClusterSlurmConfigurationSlurmRestOutputReference(this, "slurm_rest");
  public get slurmRest() {
    return this._slurmRest;
  }
  public putSlurmRest(value: PcsClusterSlurmConfigurationSlurmRest) {
    this._slurmRest.internalValue = value;
  }
  public resetSlurmRest() {
    this._slurmRest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slurmRestInput() {
    return this._slurmRest.internalValue;
  }

  // slurmdbd_custom_settings - computed: true, optional: true, required: false
  private _slurmdbdCustomSettings = new PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList(this, "slurmdbd_custom_settings", false);
  public get slurmdbdCustomSettings() {
    return this._slurmdbdCustomSettings;
  }
  public putSlurmdbdCustomSettings(value: PcsClusterSlurmConfigurationSlurmdbdCustomSettings[] | cdktn.IResolvable) {
    this._slurmdbdCustomSettings.internalValue = value;
  }
  public resetSlurmdbdCustomSettings() {
    this._slurmdbdCustomSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slurmdbdCustomSettingsInput() {
    return this._slurmdbdCustomSettings.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/pcs_cluster awscc_pcs_cluster}
*/
export class PcsCluster extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_pcs_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a PcsCluster resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PcsCluster to import
  * @param importFromId The id of the existing PcsCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/pcs_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PcsCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_pcs_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/pcs_cluster awscc_pcs_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PcsClusterConfig
  */
  public constructor(scope: Construct, id: string, config: PcsClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_pcs_cluster',
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
    this._name = config.name;
    this._networking.internalValue = config.networking;
    this._scheduler.internalValue = config.scheduler;
    this._size = config.size;
    this._slurmConfiguration.internalValue = config.slurmConfiguration;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new PcsClusterEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }

  // error_info - computed: true, optional: false, required: false
  private _errorInfo = new PcsClusterErrorInfoList(this, "error_info", false);
  public get errorInfo() {
    return this._errorInfo;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // networking - computed: false, optional: false, required: true
  private _networking = new PcsClusterNetworkingOutputReference(this, "networking");
  public get networking() {
    return this._networking;
  }
  public putNetworking(value: PcsClusterNetworking) {
    this._networking.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkingInput() {
    return this._networking.internalValue;
  }

  // scheduler - computed: false, optional: false, required: true
  private _scheduler = new PcsClusterSchedulerOutputReference(this, "scheduler");
  public get scheduler() {
    return this._scheduler;
  }
  public putScheduler(value: PcsClusterScheduler) {
    this._scheduler.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerInput() {
    return this._scheduler.internalValue;
  }

  // size - computed: false, optional: false, required: true
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // slurm_configuration - computed: true, optional: true, required: false
  private _slurmConfiguration = new PcsClusterSlurmConfigurationOutputReference(this, "slurm_configuration");
  public get slurmConfiguration() {
    return this._slurmConfiguration;
  }
  public putSlurmConfiguration(value: PcsClusterSlurmConfiguration) {
    this._slurmConfiguration.internalValue = value;
  }
  public resetSlurmConfiguration() {
    this._slurmConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slurmConfigurationInput() {
    return this._slurmConfiguration.internalValue;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktn.stringToTerraform(this._name),
      networking: pcsClusterNetworkingToTerraform(this._networking.internalValue),
      scheduler: pcsClusterSchedulerToTerraform(this._scheduler.internalValue),
      size: cdktn.stringToTerraform(this._size),
      slurm_configuration: pcsClusterSlurmConfigurationToTerraform(this._slurmConfiguration.internalValue),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      networking: {
        value: pcsClusterNetworkingToHclTerraform(this._networking.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PcsClusterNetworking",
      },
      scheduler: {
        value: pcsClusterSchedulerToHclTerraform(this._scheduler.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PcsClusterScheduler",
      },
      size: {
        value: cdktn.stringToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slurm_configuration: {
        value: pcsClusterSlurmConfigurationToHclTerraform(this._slurmConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PcsClusterSlurmConfiguration",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
