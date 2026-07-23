// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/elasticloadbalancingv2_target_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccElasticloadbalancingv2TargetGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/elasticloadbalancingv2_target_group#id DataAwsccElasticloadbalancingv2TargetGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccElasticloadbalancingv2TargetGroupMatcher {
}

export function dataAwsccElasticloadbalancingv2TargetGroupMatcherToTerraform(struct?: DataAwsccElasticloadbalancingv2TargetGroupMatcher): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticloadbalancingv2TargetGroupMatcherToHclTerraform(struct?: DataAwsccElasticloadbalancingv2TargetGroupMatcher): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccElasticloadbalancingv2TargetGroupMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticloadbalancingv2TargetGroupMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // grpc_code - computed: true, optional: false, required: false
  public get grpcCode() {
    return this.getStringAttribute('grpc_code');
  }

  // http_code - computed: true, optional: false, required: false
  public get httpCode() {
    return this.getStringAttribute('http_code');
  }
}
export interface DataAwsccElasticloadbalancingv2TargetGroupTags {
}

export function dataAwsccElasticloadbalancingv2TargetGroupTagsToTerraform(struct?: DataAwsccElasticloadbalancingv2TargetGroupTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticloadbalancingv2TargetGroupTagsToHclTerraform(struct?: DataAwsccElasticloadbalancingv2TargetGroupTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccElasticloadbalancingv2TargetGroupTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticloadbalancingv2TargetGroupTags | undefined) {
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

export class DataAwsccElasticloadbalancingv2TargetGroupTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference {
    return new DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributes {
}

export function dataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesToTerraform(struct?: DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesToHclTerraform(struct?: DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributes | undefined) {
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

export class DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference {
    return new DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccElasticloadbalancingv2TargetGroupTargets {
}

export function dataAwsccElasticloadbalancingv2TargetGroupTargetsToTerraform(struct?: DataAwsccElasticloadbalancingv2TargetGroupTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticloadbalancingv2TargetGroupTargetsToHclTerraform(struct?: DataAwsccElasticloadbalancingv2TargetGroupTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccElasticloadbalancingv2TargetGroupTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticloadbalancingv2TargetGroupTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // quic_server_id - computed: true, optional: false, required: false
  public get quicServerId() {
    return this.getStringAttribute('quic_server_id');
  }
}

export class DataAwsccElasticloadbalancingv2TargetGroupTargetsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference {
    return new DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/elasticloadbalancingv2_target_group awscc_elasticloadbalancingv2_target_group}
*/
export class DataAwsccElasticloadbalancingv2TargetGroup extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_elasticloadbalancingv2_target_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccElasticloadbalancingv2TargetGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccElasticloadbalancingv2TargetGroup to import
  * @param importFromId The id of the existing DataAwsccElasticloadbalancingv2TargetGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/elasticloadbalancingv2_target_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccElasticloadbalancingv2TargetGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_elasticloadbalancingv2_target_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/elasticloadbalancingv2_target_group awscc_elasticloadbalancingv2_target_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccElasticloadbalancingv2TargetGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccElasticloadbalancingv2TargetGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_elasticloadbalancingv2_target_group',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // health_check_enabled - computed: true, optional: false, required: false
  public get healthCheckEnabled() {
    return this.getBooleanAttribute('health_check_enabled');
  }

  // health_check_interval_seconds - computed: true, optional: false, required: false
  public get healthCheckIntervalSeconds() {
    return this.getNumberAttribute('health_check_interval_seconds');
  }

  // health_check_path - computed: true, optional: false, required: false
  public get healthCheckPath() {
    return this.getStringAttribute('health_check_path');
  }

  // health_check_port - computed: true, optional: false, required: false
  public get healthCheckPort() {
    return this.getStringAttribute('health_check_port');
  }

  // health_check_protocol - computed: true, optional: false, required: false
  public get healthCheckProtocol() {
    return this.getStringAttribute('health_check_protocol');
  }

  // health_check_timeout_seconds - computed: true, optional: false, required: false
  public get healthCheckTimeoutSeconds() {
    return this.getNumberAttribute('health_check_timeout_seconds');
  }

  // healthy_threshold_count - computed: true, optional: false, required: false
  public get healthyThresholdCount() {
    return this.getNumberAttribute('healthy_threshold_count');
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

  // ip_address_type - computed: true, optional: false, required: false
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }

  // load_balancer_arns - computed: true, optional: false, required: false
  public get loadBalancerArns() {
    return this.getListAttribute('load_balancer_arns');
  }

  // matcher - computed: true, optional: false, required: false
  private _matcher = new DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference(this, "matcher");
  public get matcher() {
    return this._matcher;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // protocol_version - computed: true, optional: false, required: false
  public get protocolVersion() {
    return this.getStringAttribute('protocol_version');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccElasticloadbalancingv2TargetGroupTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // target_control_port - computed: true, optional: false, required: false
  public get targetControlPort() {
    return this.getNumberAttribute('target_control_port');
  }

  // target_group_arn - computed: true, optional: false, required: false
  public get targetGroupArn() {
    return this.getStringAttribute('target_group_arn');
  }

  // target_group_attributes - computed: true, optional: false, required: false
  private _targetGroupAttributes = new DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList(this, "target_group_attributes", true);
  public get targetGroupAttributes() {
    return this._targetGroupAttributes;
  }

  // target_group_full_name - computed: true, optional: false, required: false
  public get targetGroupFullName() {
    return this.getStringAttribute('target_group_full_name');
  }

  // target_group_name - computed: true, optional: false, required: false
  public get targetGroupName() {
    return this.getStringAttribute('target_group_name');
  }

  // target_type - computed: true, optional: false, required: false
  public get targetType() {
    return this.getStringAttribute('target_type');
  }

  // targets - computed: true, optional: false, required: false
  private _targets = new DataAwsccElasticloadbalancingv2TargetGroupTargetsList(this, "targets", true);
  public get targets() {
    return this._targets;
  }

  // unhealthy_threshold_count - computed: true, optional: false, required: false
  public get unhealthyThresholdCount() {
    return this.getNumberAttribute('unhealthy_threshold_count');
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
