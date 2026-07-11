// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ec2_subnet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccEc2SubnetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ec2_subnet#id DataAwsccEc2Subnet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccEc2SubnetBlockPublicAccessStates {
}

export function dataAwsccEc2SubnetBlockPublicAccessStatesToTerraform(struct?: DataAwsccEc2SubnetBlockPublicAccessStates): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SubnetBlockPublicAccessStatesToHclTerraform(struct?: DataAwsccEc2SubnetBlockPublicAccessStates): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2SubnetBlockPublicAccessStates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SubnetBlockPublicAccessStates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // internet_gateway_block_mode - computed: true, optional: false, required: false
  public get internetGatewayBlockMode() {
    return this.getStringAttribute('internet_gateway_block_mode');
  }
}
export interface DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunch {
}

export function dataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchToTerraform(struct?: DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchToHclTerraform(struct?: DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_resource_name_dns_a_record - computed: true, optional: false, required: false
  public get enableResourceNameDnsARecord() {
    return this.getBooleanAttribute('enable_resource_name_dns_a_record');
  }

  // enable_resource_name_dns_aaaa_record - computed: true, optional: false, required: false
  public get enableResourceNameDnsAaaaRecord() {
    return this.getBooleanAttribute('enable_resource_name_dns_aaaa_record');
  }

  // hostname_type - computed: true, optional: false, required: false
  public get hostnameType() {
    return this.getStringAttribute('hostname_type');
  }
}
export interface DataAwsccEc2SubnetTags {
}

export function dataAwsccEc2SubnetTagsToTerraform(struct?: DataAwsccEc2SubnetTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SubnetTagsToHclTerraform(struct?: DataAwsccEc2SubnetTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SubnetTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2SubnetTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SubnetTags | undefined) {
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

export class DataAwsccEc2SubnetTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2SubnetTagsOutputReference {
    return new DataAwsccEc2SubnetTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ec2_subnet awscc_ec2_subnet}
*/
export class DataAwsccEc2Subnet extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_subnet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccEc2Subnet resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccEc2Subnet to import
  * @param importFromId The id of the existing DataAwsccEc2Subnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ec2_subnet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccEc2Subnet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_subnet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ec2_subnet awscc_ec2_subnet} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEc2SubnetConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEc2SubnetConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_subnet',
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

  // assign_ipv_6_address_on_creation - computed: true, optional: false, required: false
  public get assignIpv6AddressOnCreation() {
    return this.getBooleanAttribute('assign_ipv_6_address_on_creation');
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // availability_zone_id - computed: true, optional: false, required: false
  public get availabilityZoneId() {
    return this.getStringAttribute('availability_zone_id');
  }

  // block_public_access_states - computed: true, optional: false, required: false
  private _blockPublicAccessStates = new DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference(this, "block_public_access_states");
  public get blockPublicAccessStates() {
    return this._blockPublicAccessStates;
  }

  // cidr_block - computed: true, optional: false, required: false
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }

  // enable_dns_64 - computed: true, optional: false, required: false
  public get enableDns64() {
    return this.getBooleanAttribute('enable_dns_64');
  }

  // enable_lni_at_device_index - computed: true, optional: false, required: false
  public get enableLniAtDeviceIndex() {
    return this.getNumberAttribute('enable_lni_at_device_index');
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

  // ipv_4_ipam_pool_id - computed: true, optional: false, required: false
  public get ipv4IpamPoolId() {
    return this.getStringAttribute('ipv_4_ipam_pool_id');
  }

  // ipv_4_netmask_length - computed: true, optional: false, required: false
  public get ipv4NetmaskLength() {
    return this.getNumberAttribute('ipv_4_netmask_length');
  }

  // ipv_6_cidr_block - computed: true, optional: false, required: false
  public get ipv6CidrBlock() {
    return this.getStringAttribute('ipv_6_cidr_block');
  }

  // ipv_6_cidr_blocks - computed: true, optional: false, required: false
  public get ipv6CidrBlocks() {
    return this.getListAttribute('ipv_6_cidr_blocks');
  }

  // ipv_6_ipam_pool_id - computed: true, optional: false, required: false
  public get ipv6IpamPoolId() {
    return this.getStringAttribute('ipv_6_ipam_pool_id');
  }

  // ipv_6_native - computed: true, optional: false, required: false
  public get ipv6Native() {
    return this.getBooleanAttribute('ipv_6_native');
  }

  // ipv_6_netmask_length - computed: true, optional: false, required: false
  public get ipv6NetmaskLength() {
    return this.getNumberAttribute('ipv_6_netmask_length');
  }

  // map_public_ip_on_launch - computed: true, optional: false, required: false
  public get mapPublicIpOnLaunch() {
    return this.getBooleanAttribute('map_public_ip_on_launch');
  }

  // network_acl_association_id - computed: true, optional: false, required: false
  public get networkAclAssociationId() {
    return this.getStringAttribute('network_acl_association_id');
  }

  // outpost_arn - computed: true, optional: false, required: false
  public get outpostArn() {
    return this.getStringAttribute('outpost_arn');
  }

  // private_dns_name_options_on_launch - computed: true, optional: false, required: false
  private _privateDnsNameOptionsOnLaunch = new DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference(this, "private_dns_name_options_on_launch");
  public get privateDnsNameOptionsOnLaunch() {
    return this._privateDnsNameOptionsOnLaunch;
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccEc2SubnetTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
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
