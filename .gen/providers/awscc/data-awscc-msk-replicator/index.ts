// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/msk_replicator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccMskReplicatorConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/msk_replicator#id DataAwsccMskReplicator#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccMskReplicatorKafkaClustersAmazonMskCluster {
}

export function dataAwsccMskReplicatorKafkaClustersAmazonMskClusterToTerraform(struct?: DataAwsccMskReplicatorKafkaClustersAmazonMskCluster): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskReplicatorKafkaClustersAmazonMskClusterToHclTerraform(struct?: DataAwsccMskReplicatorKafkaClustersAmazonMskCluster): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskReplicatorKafkaClustersAmazonMskCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskReplicatorKafkaClustersAmazonMskCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // msk_cluster_arn - computed: true, optional: false, required: false
  public get mskClusterArn() {
    return this.getStringAttribute('msk_cluster_arn');
  }
}
export interface DataAwsccMskReplicatorKafkaClustersApacheKafkaCluster {
}

export function dataAwsccMskReplicatorKafkaClustersApacheKafkaClusterToTerraform(struct?: DataAwsccMskReplicatorKafkaClustersApacheKafkaCluster): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskReplicatorKafkaClustersApacheKafkaClusterToHclTerraform(struct?: DataAwsccMskReplicatorKafkaClustersApacheKafkaCluster): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskReplicatorKafkaClustersApacheKafkaCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskReplicatorKafkaClustersApacheKafkaCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apache_kafka_cluster_id - computed: true, optional: false, required: false
  public get apacheKafkaClusterId() {
    return this.getStringAttribute('apache_kafka_cluster_id');
  }

  // bootstrap_broker_string - computed: true, optional: false, required: false
  public get bootstrapBrokerString() {
    return this.getStringAttribute('bootstrap_broker_string');
  }
}
export interface DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtls {
}

export function dataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsToTerraform(struct?: DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtls): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsToHclTerraform(struct?: DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtls): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
}
export interface DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScram {
}

export function dataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramToTerraform(struct?: DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScram): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramToHclTerraform(struct?: DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScram): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScram | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScram | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mechanism - computed: true, optional: false, required: false
  public get mechanism() {
    return this.getStringAttribute('mechanism');
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
}
export interface DataAwsccMskReplicatorKafkaClustersClientAuthentication {
}

export function dataAwsccMskReplicatorKafkaClustersClientAuthenticationToTerraform(struct?: DataAwsccMskReplicatorKafkaClustersClientAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskReplicatorKafkaClustersClientAuthenticationToHclTerraform(struct?: DataAwsccMskReplicatorKafkaClustersClientAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskReplicatorKafkaClustersClientAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskReplicatorKafkaClustersClientAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mtls - computed: true, optional: false, required: false
  private _mtls = new DataAwsccMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference(this, "mtls");
  public get mtls() {
    return this._mtls;
  }

  // sasl_scram - computed: true, optional: false, required: false
  private _saslScram = new DataAwsccMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference(this, "sasl_scram");
  public get saslScram() {
    return this._saslScram;
  }
}
export interface DataAwsccMskReplicatorKafkaClustersEncryptionInTransit {
}

export function dataAwsccMskReplicatorKafkaClustersEncryptionInTransitToTerraform(struct?: DataAwsccMskReplicatorKafkaClustersEncryptionInTransit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskReplicatorKafkaClustersEncryptionInTransitToHclTerraform(struct?: DataAwsccMskReplicatorKafkaClustersEncryptionInTransit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskReplicatorKafkaClustersEncryptionInTransit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskReplicatorKafkaClustersEncryptionInTransit | undefined) {
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

  // root_ca_certificate - computed: true, optional: false, required: false
  public get rootCaCertificate() {
    return this.getStringAttribute('root_ca_certificate');
  }
}
export interface DataAwsccMskReplicatorKafkaClustersVpcConfig {
}

export function dataAwsccMskReplicatorKafkaClustersVpcConfigToTerraform(struct?: DataAwsccMskReplicatorKafkaClustersVpcConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskReplicatorKafkaClustersVpcConfigToHclTerraform(struct?: DataAwsccMskReplicatorKafkaClustersVpcConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskReplicatorKafkaClustersVpcConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskReplicatorKafkaClustersVpcConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return cdktn.Fn.tolist(this.getListAttribute('security_group_ids'));
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
}
export interface DataAwsccMskReplicatorKafkaClusters {
}

export function dataAwsccMskReplicatorKafkaClustersToTerraform(struct?: DataAwsccMskReplicatorKafkaClusters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskReplicatorKafkaClustersToHclTerraform(struct?: DataAwsccMskReplicatorKafkaClusters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskReplicatorKafkaClustersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMskReplicatorKafkaClusters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskReplicatorKafkaClusters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // amazon_msk_cluster - computed: true, optional: false, required: false
  private _amazonMskCluster = new DataAwsccMskReplicatorKafkaClustersAmazonMskClusterOutputReference(this, "amazon_msk_cluster");
  public get amazonMskCluster() {
    return this._amazonMskCluster;
  }

  // apache_kafka_cluster - computed: true, optional: false, required: false
  private _apacheKafkaCluster = new DataAwsccMskReplicatorKafkaClustersApacheKafkaClusterOutputReference(this, "apache_kafka_cluster");
  public get apacheKafkaCluster() {
    return this._apacheKafkaCluster;
  }

  // client_authentication - computed: true, optional: false, required: false
  private _clientAuthentication = new DataAwsccMskReplicatorKafkaClustersClientAuthenticationOutputReference(this, "client_authentication");
  public get clientAuthentication() {
    return this._clientAuthentication;
  }

  // encryption_in_transit - computed: true, optional: false, required: false
  private _encryptionInTransit = new DataAwsccMskReplicatorKafkaClustersEncryptionInTransitOutputReference(this, "encryption_in_transit");
  public get encryptionInTransit() {
    return this._encryptionInTransit;
  }

  // vpc_config - computed: true, optional: false, required: false
  private _vpcConfig = new DataAwsccMskReplicatorKafkaClustersVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
}

export class DataAwsccMskReplicatorKafkaClustersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMskReplicatorKafkaClustersOutputReference {
    return new DataAwsccMskReplicatorKafkaClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs {
}

export function dataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsToTerraform(struct?: DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsToHclTerraform(struct?: DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs | undefined) {
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
export interface DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehose {
}

export function dataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseToTerraform(struct?: DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehose): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseToHclTerraform(struct?: DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehose): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehose | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehose | undefined) {
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
export interface DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3 {
}

export function dataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3ToTerraform(struct?: DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3ToHclTerraform(struct?: DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3 | undefined) {
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
export interface DataAwsccMskReplicatorLogDeliveryReplicatorLogDelivery {
}

export function dataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryToTerraform(struct?: DataAwsccMskReplicatorLogDeliveryReplicatorLogDelivery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryToHclTerraform(struct?: DataAwsccMskReplicatorLogDeliveryReplicatorLogDelivery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskReplicatorLogDeliveryReplicatorLogDelivery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskReplicatorLogDeliveryReplicatorLogDelivery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudwatch_logs - computed: true, optional: false, required: false
  private _cloudwatchLogs = new DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference(this, "cloudwatch_logs");
  public get cloudwatchLogs() {
    return this._cloudwatchLogs;
  }

  // firehose - computed: true, optional: false, required: false
  private _firehose = new DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference(this, "firehose");
  public get firehose() {
    return this._firehose;
  }

  // s3 - computed: true, optional: false, required: false
  private _s3 = new DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
}
export interface DataAwsccMskReplicatorLogDelivery {
}

export function dataAwsccMskReplicatorLogDeliveryToTerraform(struct?: DataAwsccMskReplicatorLogDelivery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskReplicatorLogDeliveryToHclTerraform(struct?: DataAwsccMskReplicatorLogDelivery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskReplicatorLogDeliveryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskReplicatorLogDelivery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskReplicatorLogDelivery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // replicator_log_delivery - computed: true, optional: false, required: false
  private _replicatorLogDelivery = new DataAwsccMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference(this, "replicator_log_delivery");
  public get replicatorLogDelivery() {
    return this._replicatorLogDelivery;
  }
}
export interface DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplication {
}

export function dataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationToTerraform(struct?: DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationToHclTerraform(struct?: DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consumer_group_offset_sync_mode - computed: true, optional: false, required: false
  public get consumerGroupOffsetSyncMode() {
    return this.getStringAttribute('consumer_group_offset_sync_mode');
  }

  // consumer_groups_to_exclude - computed: true, optional: false, required: false
  public get consumerGroupsToExclude() {
    return cdktn.Fn.tolist(this.getListAttribute('consumer_groups_to_exclude'));
  }

  // consumer_groups_to_replicate - computed: true, optional: false, required: false
  public get consumerGroupsToReplicate() {
    return cdktn.Fn.tolist(this.getListAttribute('consumer_groups_to_replicate'));
  }

  // detect_and_copy_new_consumer_groups - computed: true, optional: false, required: false
  public get detectAndCopyNewConsumerGroups() {
    return this.getBooleanAttribute('detect_and_copy_new_consumer_groups');
  }

  // synchronise_consumer_group_offsets - computed: true, optional: false, required: false
  public get synchroniseConsumerGroupOffsets() {
    return this.getBooleanAttribute('synchronise_consumer_group_offsets');
  }
}
export interface DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPosition {
}

export function dataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionToTerraform(struct?: DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPosition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionToHclTerraform(struct?: DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPosition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPosition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPosition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration {
}

export function dataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationToTerraform(struct?: DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationToHclTerraform(struct?: DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccMskReplicatorReplicationInfoListTopicReplication {
}

export function dataAwsccMskReplicatorReplicationInfoListTopicReplicationToTerraform(struct?: DataAwsccMskReplicatorReplicationInfoListTopicReplication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskReplicatorReplicationInfoListTopicReplicationToHclTerraform(struct?: DataAwsccMskReplicatorReplicationInfoListTopicReplication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskReplicatorReplicationInfoListTopicReplication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskReplicatorReplicationInfoListTopicReplication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // copy_access_control_lists_for_topics - computed: true, optional: false, required: false
  public get copyAccessControlListsForTopics() {
    return this.getBooleanAttribute('copy_access_control_lists_for_topics');
  }

  // copy_topic_configurations - computed: true, optional: false, required: false
  public get copyTopicConfigurations() {
    return this.getBooleanAttribute('copy_topic_configurations');
  }

  // detect_and_copy_new_topics - computed: true, optional: false, required: false
  public get detectAndCopyNewTopics() {
    return this.getBooleanAttribute('detect_and_copy_new_topics');
  }

  // starting_position - computed: true, optional: false, required: false
  private _startingPosition = new DataAwsccMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference(this, "starting_position");
  public get startingPosition() {
    return this._startingPosition;
  }

  // topic_name_configuration - computed: true, optional: false, required: false
  private _topicNameConfiguration = new DataAwsccMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference(this, "topic_name_configuration");
  public get topicNameConfiguration() {
    return this._topicNameConfiguration;
  }

  // topics_to_exclude - computed: true, optional: false, required: false
  public get topicsToExclude() {
    return cdktn.Fn.tolist(this.getListAttribute('topics_to_exclude'));
  }

  // topics_to_replicate - computed: true, optional: false, required: false
  public get topicsToReplicate() {
    return cdktn.Fn.tolist(this.getListAttribute('topics_to_replicate'));
  }
}
export interface DataAwsccMskReplicatorReplicationInfoListStruct {
}

export function dataAwsccMskReplicatorReplicationInfoListStructToTerraform(struct?: DataAwsccMskReplicatorReplicationInfoListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskReplicatorReplicationInfoListStructToHclTerraform(struct?: DataAwsccMskReplicatorReplicationInfoListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskReplicatorReplicationInfoListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMskReplicatorReplicationInfoListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskReplicatorReplicationInfoListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consumer_group_replication - computed: true, optional: false, required: false
  private _consumerGroupReplication = new DataAwsccMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference(this, "consumer_group_replication");
  public get consumerGroupReplication() {
    return this._consumerGroupReplication;
  }

  // source_kafka_cluster_arn - computed: true, optional: false, required: false
  public get sourceKafkaClusterArn() {
    return this.getStringAttribute('source_kafka_cluster_arn');
  }

  // source_kafka_cluster_id - computed: true, optional: false, required: false
  public get sourceKafkaClusterId() {
    return this.getStringAttribute('source_kafka_cluster_id');
  }

  // target_compression_type - computed: true, optional: false, required: false
  public get targetCompressionType() {
    return this.getStringAttribute('target_compression_type');
  }

  // target_kafka_cluster_arn - computed: true, optional: false, required: false
  public get targetKafkaClusterArn() {
    return this.getStringAttribute('target_kafka_cluster_arn');
  }

  // target_kafka_cluster_id - computed: true, optional: false, required: false
  public get targetKafkaClusterId() {
    return this.getStringAttribute('target_kafka_cluster_id');
  }

  // topic_replication - computed: true, optional: false, required: false
  private _topicReplication = new DataAwsccMskReplicatorReplicationInfoListTopicReplicationOutputReference(this, "topic_replication");
  public get topicReplication() {
    return this._topicReplication;
  }
}

export class DataAwsccMskReplicatorReplicationInfoListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMskReplicatorReplicationInfoListStructOutputReference {
    return new DataAwsccMskReplicatorReplicationInfoListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMskReplicatorTags {
}

export function dataAwsccMskReplicatorTagsToTerraform(struct?: DataAwsccMskReplicatorTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskReplicatorTagsToHclTerraform(struct?: DataAwsccMskReplicatorTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskReplicatorTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMskReplicatorTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskReplicatorTags | undefined) {
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

export class DataAwsccMskReplicatorTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMskReplicatorTagsOutputReference {
    return new DataAwsccMskReplicatorTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/msk_replicator awscc_msk_replicator}
*/
export class DataAwsccMskReplicator extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_msk_replicator";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccMskReplicator resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccMskReplicator to import
  * @param importFromId The id of the existing DataAwsccMskReplicator that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/msk_replicator#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccMskReplicator to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_msk_replicator", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/msk_replicator awscc_msk_replicator} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccMskReplicatorConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccMskReplicatorConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_msk_replicator',
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

  // current_version - computed: true, optional: false, required: false
  public get currentVersion() {
    return this.getStringAttribute('current_version');
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

  // kafka_clusters - computed: true, optional: false, required: false
  private _kafkaClusters = new DataAwsccMskReplicatorKafkaClustersList(this, "kafka_clusters", true);
  public get kafkaClusters() {
    return this._kafkaClusters;
  }

  // log_delivery - computed: true, optional: false, required: false
  private _logDelivery = new DataAwsccMskReplicatorLogDeliveryOutputReference(this, "log_delivery");
  public get logDelivery() {
    return this._logDelivery;
  }

  // replication_info_list - computed: true, optional: false, required: false
  private _replicationInfoList = new DataAwsccMskReplicatorReplicationInfoListStructList(this, "replication_info_list", true);
  public get replicationInfoList() {
    return this._replicationInfoList;
  }

  // replicator_arn - computed: true, optional: false, required: false
  public get replicatorArn() {
    return this.getStringAttribute('replicator_arn');
  }

  // replicator_name - computed: true, optional: false, required: false
  public get replicatorName() {
    return this.getStringAttribute('replicator_name');
  }

  // service_execution_role_arn - computed: true, optional: false, required: false
  public get serviceExecutionRoleArn() {
    return this.getStringAttribute('service_execution_role_arn');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccMskReplicatorTagsList(this, "tags", true);
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
