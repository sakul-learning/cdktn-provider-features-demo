// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/rtbfabric_responder_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccRtbfabricResponderGatewayConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/rtbfabric_responder_gateway#id DataAwsccRtbfabricResponderGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccRtbfabricResponderGatewayListenerConfig {
}

export function dataAwsccRtbfabricResponderGatewayListenerConfigToTerraform(struct?: DataAwsccRtbfabricResponderGatewayListenerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRtbfabricResponderGatewayListenerConfigToHclTerraform(struct?: DataAwsccRtbfabricResponderGatewayListenerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRtbfabricResponderGatewayListenerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRtbfabricResponderGatewayListenerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // protocols - computed: true, optional: false, required: false
  public get protocols() {
    return this.getListAttribute('protocols');
  }
}
export interface DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig {
}

export function dataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigToTerraform(struct?: DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigToHclTerraform(struct?: DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // healthy_threshold_count - computed: true, optional: false, required: false
  public get healthyThresholdCount() {
    return this.getNumberAttribute('healthy_threshold_count');
  }

  // interval_seconds - computed: true, optional: false, required: false
  public get intervalSeconds() {
    return this.getNumberAttribute('interval_seconds');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // status_code_matcher - computed: true, optional: false, required: false
  public get statusCodeMatcher() {
    return this.getStringAttribute('status_code_matcher');
  }

  // timeout_ms - computed: true, optional: false, required: false
  public get timeoutMs() {
    return this.getNumberAttribute('timeout_ms');
  }

  // unhealthy_threshold_count - computed: true, optional: false, required: false
  public get unhealthyThresholdCount() {
    return this.getNumberAttribute('unhealthy_threshold_count');
  }
}
export interface DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration {
}

export function dataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationToTerraform(struct?: DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationToHclTerraform(struct?: DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_scaling_group_name_list - computed: true, optional: false, required: false
  public get autoScalingGroupNameList() {
    return cdktn.Fn.tolist(this.getListAttribute('auto_scaling_group_name_list'));
  }

  // health_check_config - computed: true, optional: false, required: false
  private _healthCheckConfig = new DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference(this, "health_check_config");
  public get healthCheckConfig() {
    return this._healthCheckConfig;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration {
}

export function dataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationToTerraform(struct?: DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationToHclTerraform(struct?: DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_api_server_ca_certificate_chain - computed: true, optional: false, required: false
  public get clusterApiServerCaCertificateChain() {
    return this.getStringAttribute('cluster_api_server_ca_certificate_chain');
  }

  // cluster_api_server_endpoint_uri - computed: true, optional: false, required: false
  public get clusterApiServerEndpointUri() {
    return this.getStringAttribute('cluster_api_server_endpoint_uri');
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // endpoints_resource_name - computed: true, optional: false, required: false
  public get endpointsResourceName() {
    return this.getStringAttribute('endpoints_resource_name');
  }

  // endpoints_resource_namespace - computed: true, optional: false, required: false
  public get endpointsResourceNamespace() {
    return this.getStringAttribute('endpoints_resource_namespace');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccRtbfabricResponderGatewayManagedEndpointConfiguration {
}

export function dataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationToTerraform(struct?: DataAwsccRtbfabricResponderGatewayManagedEndpointConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationToHclTerraform(struct?: DataAwsccRtbfabricResponderGatewayManagedEndpointConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRtbfabricResponderGatewayManagedEndpointConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRtbfabricResponderGatewayManagedEndpointConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_scaling_groups_configuration - computed: true, optional: false, required: false
  private _autoScalingGroupsConfiguration = new DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference(this, "auto_scaling_groups_configuration");
  public get autoScalingGroupsConfiguration() {
    return this._autoScalingGroupsConfiguration;
  }

  // eks_endpoints_configuration - computed: true, optional: false, required: false
  private _eksEndpointsConfiguration = new DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference(this, "eks_endpoints_configuration");
  public get eksEndpointsConfiguration() {
    return this._eksEndpointsConfiguration;
  }
}
export interface DataAwsccRtbfabricResponderGatewayTags {
}

export function dataAwsccRtbfabricResponderGatewayTagsToTerraform(struct?: DataAwsccRtbfabricResponderGatewayTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRtbfabricResponderGatewayTagsToHclTerraform(struct?: DataAwsccRtbfabricResponderGatewayTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRtbfabricResponderGatewayTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccRtbfabricResponderGatewayTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRtbfabricResponderGatewayTags | undefined) {
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

export class DataAwsccRtbfabricResponderGatewayTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccRtbfabricResponderGatewayTagsOutputReference {
    return new DataAwsccRtbfabricResponderGatewayTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccRtbfabricResponderGatewayTrustStoreConfiguration {
}

export function dataAwsccRtbfabricResponderGatewayTrustStoreConfigurationToTerraform(struct?: DataAwsccRtbfabricResponderGatewayTrustStoreConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRtbfabricResponderGatewayTrustStoreConfigurationToHclTerraform(struct?: DataAwsccRtbfabricResponderGatewayTrustStoreConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRtbfabricResponderGatewayTrustStoreConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRtbfabricResponderGatewayTrustStoreConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_authority_certificates - computed: true, optional: false, required: false
  public get certificateAuthorityCertificates() {
    return cdktn.Fn.tolist(this.getListAttribute('certificate_authority_certificates'));
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/rtbfabric_responder_gateway awscc_rtbfabric_responder_gateway}
*/
export class DataAwsccRtbfabricResponderGateway extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_rtbfabric_responder_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccRtbfabricResponderGateway resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccRtbfabricResponderGateway to import
  * @param importFromId The id of the existing DataAwsccRtbfabricResponderGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/rtbfabric_responder_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccRtbfabricResponderGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_rtbfabric_responder_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/rtbfabric_responder_gateway awscc_rtbfabric_responder_gateway} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccRtbfabricResponderGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccRtbfabricResponderGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_rtbfabric_responder_gateway',
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

  // acm_certificate_arn - computed: true, optional: false, required: false
  public get acmCertificateArn() {
    return this.getStringAttribute('acm_certificate_arn');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate_association_status - computed: true, optional: false, required: false
  public get certificateAssociationStatus() {
    return this.getStringAttribute('certificate_association_status');
  }

  // created_timestamp - computed: true, optional: false, required: false
  public get createdTimestamp() {
    return this.getStringAttribute('created_timestamp');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // external_inbound_endpoint - computed: true, optional: false, required: false
  public get externalInboundEndpoint() {
    return this.getStringAttribute('external_inbound_endpoint');
  }

  // gateway_id - computed: true, optional: false, required: false
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }

  // gateway_type - computed: true, optional: false, required: false
  public get gatewayType() {
    return this.getStringAttribute('gateway_type');
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

  // listener_config - computed: true, optional: false, required: false
  private _listenerConfig = new DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference(this, "listener_config");
  public get listenerConfig() {
    return this._listenerConfig;
  }

  // managed_endpoint_configuration - computed: true, optional: false, required: false
  private _managedEndpointConfiguration = new DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference(this, "managed_endpoint_configuration");
  public get managedEndpointConfiguration() {
    return this._managedEndpointConfiguration;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // responder_gateway_status - computed: true, optional: false, required: false
  public get responderGatewayStatus() {
    return this.getStringAttribute('responder_gateway_status');
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return cdktn.Fn.tolist(this.getListAttribute('security_group_ids'));
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccRtbfabricResponderGatewayTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // trust_store_configuration - computed: true, optional: false, required: false
  private _trustStoreConfiguration = new DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference(this, "trust_store_configuration");
  public get trustStoreConfiguration() {
    return this._trustStoreConfiguration;
  }

  // updated_timestamp - computed: true, optional: false, required: false
  public get updatedTimestamp() {
    return this.getStringAttribute('updated_timestamp');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
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
