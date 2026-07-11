// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/elasticloadbalancingv2_load_balancer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccElasticloadbalancingv2LoadBalancerConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/elasticloadbalancingv2_load_balancer#id DataAwsccElasticloadbalancingv2LoadBalancer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributes {
}

export function dataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesToTerraform(struct?: DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesToHclTerraform(struct?: DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributes | undefined) {
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

export class DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference {
    return new DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity {
}

export function dataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityToTerraform(struct?: DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityToHclTerraform(struct?: DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity_units - computed: true, optional: false, required: false
  public get capacityUnits() {
    return this.getNumberAttribute('capacity_units');
  }
}
export interface DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappings {
}

export function dataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsToTerraform(struct?: DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsToHclTerraform(struct?: DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allocation_id - computed: true, optional: false, required: false
  public get allocationId() {
    return this.getStringAttribute('allocation_id');
  }

  // i_pv_6_address - computed: true, optional: false, required: false
  public get iPv6Address() {
    return this.getStringAttribute('i_pv_6_address');
  }

  // private_i_pv_4_address - computed: true, optional: false, required: false
  public get privateIPv4Address() {
    return this.getStringAttribute('private_i_pv_4_address');
  }

  // source_nat_ipv_6_prefix - computed: true, optional: false, required: false
  public get sourceNatIpv6Prefix() {
    return this.getStringAttribute('source_nat_ipv_6_prefix');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference {
    return new DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccElasticloadbalancingv2LoadBalancerTags {
}

export function dataAwsccElasticloadbalancingv2LoadBalancerTagsToTerraform(struct?: DataAwsccElasticloadbalancingv2LoadBalancerTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticloadbalancingv2LoadBalancerTagsToHclTerraform(struct?: DataAwsccElasticloadbalancingv2LoadBalancerTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccElasticloadbalancingv2LoadBalancerTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticloadbalancingv2LoadBalancerTags | undefined) {
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

export class DataAwsccElasticloadbalancingv2LoadBalancerTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference {
    return new DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/elasticloadbalancingv2_load_balancer awscc_elasticloadbalancingv2_load_balancer}
*/
export class DataAwsccElasticloadbalancingv2LoadBalancer extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_elasticloadbalancingv2_load_balancer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccElasticloadbalancingv2LoadBalancer resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccElasticloadbalancingv2LoadBalancer to import
  * @param importFromId The id of the existing DataAwsccElasticloadbalancingv2LoadBalancer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/elasticloadbalancingv2_load_balancer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccElasticloadbalancingv2LoadBalancer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_elasticloadbalancingv2_load_balancer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/elasticloadbalancingv2_load_balancer awscc_elasticloadbalancingv2_load_balancer} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccElasticloadbalancingv2LoadBalancerConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccElasticloadbalancingv2LoadBalancerConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_elasticloadbalancingv2_load_balancer',
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

  // canonical_hosted_zone_id - computed: true, optional: false, required: false
  public get canonicalHostedZoneId() {
    return this.getStringAttribute('canonical_hosted_zone_id');
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // enable_capacity_reservation_provision_stabilize - computed: true, optional: false, required: false
  public get enableCapacityReservationProvisionStabilize() {
    return this.getBooleanAttribute('enable_capacity_reservation_provision_stabilize');
  }

  // enable_prefix_for_ipv_6_source_nat - computed: true, optional: false, required: false
  public get enablePrefixForIpv6SourceNat() {
    return this.getStringAttribute('enable_prefix_for_ipv_6_source_nat');
  }

  // enforce_security_group_inbound_rules_on_private_link_traffic - computed: true, optional: false, required: false
  public get enforceSecurityGroupInboundRulesOnPrivateLinkTraffic() {
    return this.getStringAttribute('enforce_security_group_inbound_rules_on_private_link_traffic');
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

  // ipv_4_ipam_pool_id - computed: true, optional: false, required: false
  public get ipv4IpamPoolId() {
    return this.getStringAttribute('ipv_4_ipam_pool_id');
  }

  // load_balancer_arn - computed: true, optional: false, required: false
  public get loadBalancerArn() {
    return this.getStringAttribute('load_balancer_arn');
  }

  // load_balancer_attributes - computed: true, optional: false, required: false
  private _loadBalancerAttributes = new DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesList(this, "load_balancer_attributes", true);
  public get loadBalancerAttributes() {
    return this._loadBalancerAttributes;
  }

  // load_balancer_full_name - computed: true, optional: false, required: false
  public get loadBalancerFullName() {
    return this.getStringAttribute('load_balancer_full_name');
  }

  // load_balancer_name - computed: true, optional: false, required: false
  public get loadBalancerName() {
    return this.getStringAttribute('load_balancer_name');
  }

  // minimum_load_balancer_capacity - computed: true, optional: false, required: false
  private _minimumLoadBalancerCapacity = new DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference(this, "minimum_load_balancer_capacity");
  public get minimumLoadBalancerCapacity() {
    return this._minimumLoadBalancerCapacity;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // scheme - computed: true, optional: false, required: false
  public get scheme() {
    return this.getStringAttribute('scheme');
  }

  // security_groups - computed: true, optional: false, required: false
  public get securityGroups() {
    return cdktn.Fn.tolist(this.getListAttribute('security_groups'));
  }

  // subnet_mappings - computed: true, optional: false, required: false
  private _subnetMappings = new DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsList(this, "subnet_mappings", true);
  public get subnetMappings() {
    return this._subnetMappings;
  }

  // subnets - computed: true, optional: false, required: false
  public get subnets() {
    return cdktn.Fn.tolist(this.getListAttribute('subnets'));
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccElasticloadbalancingv2LoadBalancerTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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
