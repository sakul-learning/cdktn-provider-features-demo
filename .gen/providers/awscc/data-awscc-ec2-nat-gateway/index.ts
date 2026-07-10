// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_nat_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccEc2NatGatewayConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_nat_gateway#id DataAwsccEc2NatGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccEc2NatGatewayAvailabilityZoneAddresses {
}

export function dataAwsccEc2NatGatewayAvailabilityZoneAddressesToTerraform(struct?: DataAwsccEc2NatGatewayAvailabilityZoneAddresses): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NatGatewayAvailabilityZoneAddressesToHclTerraform(struct?: DataAwsccEc2NatGatewayAvailabilityZoneAddresses): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NatGatewayAvailabilityZoneAddressesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2NatGatewayAvailabilityZoneAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NatGatewayAvailabilityZoneAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allocation_ids - computed: true, optional: false, required: false
  public get allocationIds() {
    return cdktn.Fn.tolist(this.getListAttribute('allocation_ids'));
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // availability_zone_id - computed: true, optional: false, required: false
  public get availabilityZoneId() {
    return this.getStringAttribute('availability_zone_id');
  }
}

export class DataAwsccEc2NatGatewayAvailabilityZoneAddressesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2NatGatewayAvailabilityZoneAddressesOutputReference {
    return new DataAwsccEc2NatGatewayAvailabilityZoneAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2NatGatewayTags {
}

export function dataAwsccEc2NatGatewayTagsToTerraform(struct?: DataAwsccEc2NatGatewayTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NatGatewayTagsToHclTerraform(struct?: DataAwsccEc2NatGatewayTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NatGatewayTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2NatGatewayTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NatGatewayTags | undefined) {
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

export class DataAwsccEc2NatGatewayTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2NatGatewayTagsOutputReference {
    return new DataAwsccEc2NatGatewayTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_nat_gateway awscc_ec2_nat_gateway}
*/
export class DataAwsccEc2NatGateway extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_nat_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccEc2NatGateway resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccEc2NatGateway to import
  * @param importFromId The id of the existing DataAwsccEc2NatGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_nat_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccEc2NatGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_nat_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_nat_gateway awscc_ec2_nat_gateway} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEc2NatGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEc2NatGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_nat_gateway',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.91.0'
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

  // allocation_id - computed: true, optional: false, required: false
  public get allocationId() {
    return this.getStringAttribute('allocation_id');
  }

  // auto_provision_zones - computed: true, optional: false, required: false
  public get autoProvisionZones() {
    return this.getStringAttribute('auto_provision_zones');
  }

  // auto_scaling_ips - computed: true, optional: false, required: false
  public get autoScalingIps() {
    return this.getStringAttribute('auto_scaling_ips');
  }

  // availability_mode - computed: true, optional: false, required: false
  public get availabilityMode() {
    return this.getStringAttribute('availability_mode');
  }

  // availability_zone_addresses - computed: true, optional: false, required: false
  private _availabilityZoneAddresses = new DataAwsccEc2NatGatewayAvailabilityZoneAddressesList(this, "availability_zone_addresses", true);
  public get availabilityZoneAddresses() {
    return this._availabilityZoneAddresses;
  }

  // connectivity_type - computed: true, optional: false, required: false
  public get connectivityType() {
    return this.getStringAttribute('connectivity_type');
  }

  // eni_id - computed: true, optional: false, required: false
  public get eniId() {
    return this.getStringAttribute('eni_id');
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

  // max_drain_duration_seconds - computed: true, optional: false, required: false
  public get maxDrainDurationSeconds() {
    return this.getNumberAttribute('max_drain_duration_seconds');
  }

  // nat_gateway_id - computed: true, optional: false, required: false
  public get natGatewayId() {
    return this.getStringAttribute('nat_gateway_id');
  }

  // private_ip_address - computed: true, optional: false, required: false
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // route_table_id - computed: true, optional: false, required: false
  public get routeTableId() {
    return this.getStringAttribute('route_table_id');
  }

  // secondary_allocation_ids - computed: true, optional: false, required: false
  public get secondaryAllocationIds() {
    return this.getListAttribute('secondary_allocation_ids');
  }

  // secondary_private_ip_address_count - computed: true, optional: false, required: false
  public get secondaryPrivateIpAddressCount() {
    return this.getNumberAttribute('secondary_private_ip_address_count');
  }

  // secondary_private_ip_addresses - computed: true, optional: false, required: false
  public get secondaryPrivateIpAddresses() {
    return this.getListAttribute('secondary_private_ip_addresses');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccEc2NatGatewayTagsList(this, "tags", false);
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
