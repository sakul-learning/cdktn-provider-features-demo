// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/kafkaconnect_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccKafkaconnectConnectorConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/kafkaconnect_connector#id DataAwsccKafkaconnectConnector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicy {
}

export function dataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyToTerraform(struct?: DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyToHclTerraform(struct?: DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_utilization_percentage - computed: true, optional: false, required: false
  public get cpuUtilizationPercentage() {
    return this.getNumberAttribute('cpu_utilization_percentage');
  }
}
export interface DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicy {
}

export function dataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyToTerraform(struct?: DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyToHclTerraform(struct?: DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_utilization_percentage - computed: true, optional: false, required: false
  public get cpuUtilizationPercentage() {
    return this.getNumberAttribute('cpu_utilization_percentage');
  }
}
export interface DataAwsccKafkaconnectConnectorCapacityAutoScaling {
}

export function dataAwsccKafkaconnectConnectorCapacityAutoScalingToTerraform(struct?: DataAwsccKafkaconnectConnectorCapacityAutoScaling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKafkaconnectConnectorCapacityAutoScalingToHclTerraform(struct?: DataAwsccKafkaconnectConnectorCapacityAutoScaling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKafkaconnectConnectorCapacityAutoScaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKafkaconnectConnectorCapacityAutoScaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_autoscaling_task_count - computed: true, optional: false, required: false
  public get maxAutoscalingTaskCount() {
    return this.getNumberAttribute('max_autoscaling_task_count');
  }

  // max_worker_count - computed: true, optional: false, required: false
  public get maxWorkerCount() {
    return this.getNumberAttribute('max_worker_count');
  }

  // mcu_count - computed: true, optional: false, required: false
  public get mcuCount() {
    return this.getNumberAttribute('mcu_count');
  }

  // min_worker_count - computed: true, optional: false, required: false
  public get minWorkerCount() {
    return this.getNumberAttribute('min_worker_count');
  }

  // scale_in_policy - computed: true, optional: false, required: false
  private _scaleInPolicy = new DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference(this, "scale_in_policy");
  public get scaleInPolicy() {
    return this._scaleInPolicy;
  }

  // scale_out_policy - computed: true, optional: false, required: false
  private _scaleOutPolicy = new DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference(this, "scale_out_policy");
  public get scaleOutPolicy() {
    return this._scaleOutPolicy;
  }
}
export interface DataAwsccKafkaconnectConnectorCapacityProvisionedCapacity {
}

export function dataAwsccKafkaconnectConnectorCapacityProvisionedCapacityToTerraform(struct?: DataAwsccKafkaconnectConnectorCapacityProvisionedCapacity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKafkaconnectConnectorCapacityProvisionedCapacityToHclTerraform(struct?: DataAwsccKafkaconnectConnectorCapacityProvisionedCapacity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKafkaconnectConnectorCapacityProvisionedCapacity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKafkaconnectConnectorCapacityProvisionedCapacity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mcu_count - computed: true, optional: false, required: false
  public get mcuCount() {
    return this.getNumberAttribute('mcu_count');
  }

  // worker_count - computed: true, optional: false, required: false
  public get workerCount() {
    return this.getNumberAttribute('worker_count');
  }
}
export interface DataAwsccKafkaconnectConnectorCapacity {
}

export function dataAwsccKafkaconnectConnectorCapacityToTerraform(struct?: DataAwsccKafkaconnectConnectorCapacity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKafkaconnectConnectorCapacityToHclTerraform(struct?: DataAwsccKafkaconnectConnectorCapacity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKafkaconnectConnectorCapacityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKafkaconnectConnectorCapacity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKafkaconnectConnectorCapacity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_scaling - computed: true, optional: false, required: false
  private _autoScaling = new DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference(this, "auto_scaling");
  public get autoScaling() {
    return this._autoScaling;
  }

  // provisioned_capacity - computed: true, optional: false, required: false
  private _provisionedCapacity = new DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference(this, "provisioned_capacity");
  public get provisionedCapacity() {
    return this._provisionedCapacity;
  }
}
export interface DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc {
}

export function dataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcToTerraform(struct?: DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcToHclTerraform(struct?: DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // security_groups - computed: true, optional: false, required: false
  public get securityGroups() {
    return cdktn.Fn.tolist(this.getListAttribute('security_groups'));
  }

  // subnets - computed: true, optional: false, required: false
  public get subnets() {
    return cdktn.Fn.tolist(this.getListAttribute('subnets'));
  }
}
export interface DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaCluster {
}

export function dataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterToTerraform(struct?: DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaCluster): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterToHclTerraform(struct?: DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaCluster): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bootstrap_servers - computed: true, optional: false, required: false
  public get bootstrapServers() {
    return this.getStringAttribute('bootstrap_servers');
  }

  // vpc - computed: true, optional: false, required: false
  private _vpc = new DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference(this, "vpc");
  public get vpc() {
    return this._vpc;
  }
}
export interface DataAwsccKafkaconnectConnectorKafkaCluster {
}

export function dataAwsccKafkaconnectConnectorKafkaClusterToTerraform(struct?: DataAwsccKafkaconnectConnectorKafkaCluster): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKafkaconnectConnectorKafkaClusterToHclTerraform(struct?: DataAwsccKafkaconnectConnectorKafkaCluster): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKafkaconnectConnectorKafkaClusterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKafkaconnectConnectorKafkaCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKafkaconnectConnectorKafkaCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apache_kafka_cluster - computed: true, optional: false, required: false
  private _apacheKafkaCluster = new DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference(this, "apache_kafka_cluster");
  public get apacheKafkaCluster() {
    return this._apacheKafkaCluster;
  }
}
export interface DataAwsccKafkaconnectConnectorKafkaClusterClientAuthentication {
}

export function dataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationToTerraform(struct?: DataAwsccKafkaconnectConnectorKafkaClusterClientAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationToHclTerraform(struct?: DataAwsccKafkaconnectConnectorKafkaClusterClientAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKafkaconnectConnectorKafkaClusterClientAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKafkaconnectConnectorKafkaClusterClientAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_type - computed: true, optional: false, required: false
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
}
export interface DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransit {
}

export function dataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitToTerraform(struct?: DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitToHclTerraform(struct?: DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_type - computed: true, optional: false, required: false
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }
}
export interface DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs {
}

export function dataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsToTerraform(struct?: DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsToHclTerraform(struct?: DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs | undefined) {
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
}
export interface DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose {
}

export function dataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseToTerraform(struct?: DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseToHclTerraform(struct?: DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delivery_stream - computed: true, optional: false, required: false
  public get deliveryStream() {
    return this.getStringAttribute('delivery_stream');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3 {
}

export function dataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3ToTerraform(struct?: DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3ToHclTerraform(struct?: DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}
export interface DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDelivery {
}

export function dataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryToTerraform(struct?: DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDelivery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryToHclTerraform(struct?: DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDelivery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDelivery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDelivery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudwatch_logs - computed: true, optional: false, required: false
  private _cloudwatchLogs = new DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference(this, "cloudwatch_logs");
  public get cloudwatchLogs() {
    return this._cloudwatchLogs;
  }

  // firehose - computed: true, optional: false, required: false
  private _firehose = new DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference(this, "firehose");
  public get firehose() {
    return this._firehose;
  }

  // s3 - computed: true, optional: false, required: false
  private _s3 = new DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
}
export interface DataAwsccKafkaconnectConnectorLogDelivery {
}

export function dataAwsccKafkaconnectConnectorLogDeliveryToTerraform(struct?: DataAwsccKafkaconnectConnectorLogDelivery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKafkaconnectConnectorLogDeliveryToHclTerraform(struct?: DataAwsccKafkaconnectConnectorLogDelivery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKafkaconnectConnectorLogDeliveryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKafkaconnectConnectorLogDelivery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKafkaconnectConnectorLogDelivery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // worker_log_delivery - computed: true, optional: false, required: false
  private _workerLogDelivery = new DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference(this, "worker_log_delivery");
  public get workerLogDelivery() {
    return this._workerLogDelivery;
  }
}
export interface DataAwsccKafkaconnectConnectorPluginsCustomPlugin {
}

export function dataAwsccKafkaconnectConnectorPluginsCustomPluginToTerraform(struct?: DataAwsccKafkaconnectConnectorPluginsCustomPlugin): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKafkaconnectConnectorPluginsCustomPluginToHclTerraform(struct?: DataAwsccKafkaconnectConnectorPluginsCustomPlugin): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKafkaconnectConnectorPluginsCustomPlugin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKafkaconnectConnectorPluginsCustomPlugin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_plugin_arn - computed: true, optional: false, required: false
  public get customPluginArn() {
    return this.getStringAttribute('custom_plugin_arn');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }
}
export interface DataAwsccKafkaconnectConnectorPlugins {
}

export function dataAwsccKafkaconnectConnectorPluginsToTerraform(struct?: DataAwsccKafkaconnectConnectorPlugins): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKafkaconnectConnectorPluginsToHclTerraform(struct?: DataAwsccKafkaconnectConnectorPlugins): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKafkaconnectConnectorPluginsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKafkaconnectConnectorPlugins | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKafkaconnectConnectorPlugins | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_plugin - computed: true, optional: false, required: false
  private _customPlugin = new DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference(this, "custom_plugin");
  public get customPlugin() {
    return this._customPlugin;
  }
}

export class DataAwsccKafkaconnectConnectorPluginsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKafkaconnectConnectorPluginsOutputReference {
    return new DataAwsccKafkaconnectConnectorPluginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKafkaconnectConnectorTags {
}

export function dataAwsccKafkaconnectConnectorTagsToTerraform(struct?: DataAwsccKafkaconnectConnectorTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKafkaconnectConnectorTagsToHclTerraform(struct?: DataAwsccKafkaconnectConnectorTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKafkaconnectConnectorTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKafkaconnectConnectorTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKafkaconnectConnectorTags | undefined) {
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

export class DataAwsccKafkaconnectConnectorTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKafkaconnectConnectorTagsOutputReference {
    return new DataAwsccKafkaconnectConnectorTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKafkaconnectConnectorWorkerConfiguration {
}

export function dataAwsccKafkaconnectConnectorWorkerConfigurationToTerraform(struct?: DataAwsccKafkaconnectConnectorWorkerConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKafkaconnectConnectorWorkerConfigurationToHclTerraform(struct?: DataAwsccKafkaconnectConnectorWorkerConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKafkaconnectConnectorWorkerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKafkaconnectConnectorWorkerConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // worker_configuration_arn - computed: true, optional: false, required: false
  public get workerConfigurationArn() {
    return this.getStringAttribute('worker_configuration_arn');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/kafkaconnect_connector awscc_kafkaconnect_connector}
*/
export class DataAwsccKafkaconnectConnector extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_kafkaconnect_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccKafkaconnectConnector resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccKafkaconnectConnector to import
  * @param importFromId The id of the existing DataAwsccKafkaconnectConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/kafkaconnect_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccKafkaconnectConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_kafkaconnect_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/kafkaconnect_connector awscc_kafkaconnect_connector} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccKafkaconnectConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccKafkaconnectConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_kafkaconnect_connector',
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

  // capacity - computed: true, optional: false, required: false
  private _capacity = new DataAwsccKafkaconnectConnectorCapacityOutputReference(this, "capacity");
  public get capacity() {
    return this._capacity;
  }

  // connector_arn - computed: true, optional: false, required: false
  public get connectorArn() {
    return this.getStringAttribute('connector_arn');
  }

  // connector_configuration - computed: true, optional: false, required: false
  private _connectorConfiguration = new cdktn.StringMap(this, "connector_configuration");
  public get connectorConfiguration() {
    return this._connectorConfiguration;
  }

  // connector_description - computed: true, optional: false, required: false
  public get connectorDescription() {
    return this.getStringAttribute('connector_description');
  }

  // connector_name - computed: true, optional: false, required: false
  public get connectorName() {
    return this.getStringAttribute('connector_name');
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

  // kafka_cluster - computed: true, optional: false, required: false
  private _kafkaCluster = new DataAwsccKafkaconnectConnectorKafkaClusterOutputReference(this, "kafka_cluster");
  public get kafkaCluster() {
    return this._kafkaCluster;
  }

  // kafka_cluster_client_authentication - computed: true, optional: false, required: false
  private _kafkaClusterClientAuthentication = new DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference(this, "kafka_cluster_client_authentication");
  public get kafkaClusterClientAuthentication() {
    return this._kafkaClusterClientAuthentication;
  }

  // kafka_cluster_encryption_in_transit - computed: true, optional: false, required: false
  private _kafkaClusterEncryptionInTransit = new DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference(this, "kafka_cluster_encryption_in_transit");
  public get kafkaClusterEncryptionInTransit() {
    return this._kafkaClusterEncryptionInTransit;
  }

  // kafka_connect_version - computed: true, optional: false, required: false
  public get kafkaConnectVersion() {
    return this.getStringAttribute('kafka_connect_version');
  }

  // log_delivery - computed: true, optional: false, required: false
  private _logDelivery = new DataAwsccKafkaconnectConnectorLogDeliveryOutputReference(this, "log_delivery");
  public get logDelivery() {
    return this._logDelivery;
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // plugins - computed: true, optional: false, required: false
  private _plugins = new DataAwsccKafkaconnectConnectorPluginsList(this, "plugins", true);
  public get plugins() {
    return this._plugins;
  }

  // service_execution_role_arn - computed: true, optional: false, required: false
  public get serviceExecutionRoleArn() {
    return this.getStringAttribute('service_execution_role_arn');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccKafkaconnectConnectorTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // worker_configuration - computed: true, optional: false, required: false
  private _workerConfiguration = new DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference(this, "worker_configuration");
  public get workerConfiguration() {
    return this._workerConfiguration;
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
