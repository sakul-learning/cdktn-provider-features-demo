// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_nat_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Ec2NatGatewayConfig extends cdktn.TerraformMetaArguments {
  /**
  * [Public NAT gateway only] The allocation ID of the Elastic IP address that's associated with the NAT gateway. This property is required for a public NAT gateway and cannot be specified with a private NAT gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_nat_gateway#allocation_id Ec2NatGateway#allocation_id}
  */
  readonly allocationId?: string;
  /**
  * Indicates whether this is a zonal (single-AZ) or regional (multi-AZ) NAT gateway.
  *  A zonal NAT gateway is a NAT Gateway that provides redundancy and scalability within a single availability zone. A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region.
  *  For more information, see [Regional NAT gateways for automatic multi-AZ expansion](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateways-regional.html) in the *Amazon VPC User Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_nat_gateway#availability_mode Ec2NatGateway#availability_mode}
  */
  readonly availabilityMode?: string;
  /**
  * For regional NAT gateways only: Specifies which Availability Zones you want the NAT gateway to support and the Elastic IP addresses (EIPs) to use in each AZ. The regional NAT gateway uses these EIPs to handle outbound NAT traffic from their respective AZs. If not specified, the NAT gateway will automatically expand to new AZs and associate EIPs upon detection of an elastic network interface. If you specify this parameter, auto-expansion is disabled and you must manually manage AZ coverage.
  *  A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region.
  *  For more information, see [Regional NAT gateways for automatic multi-AZ expansion](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateways-regional.html) in the *Amazon VPC User Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_nat_gateway#availability_zone_addresses Ec2NatGateway#availability_zone_addresses}
  */
  readonly availabilityZoneAddresses?: Ec2NatGatewayAvailabilityZoneAddresses[] | cdktn.IResolvable;
  /**
  * Indicates whether the NAT gateway supports public or private connectivity. The default is public connectivity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_nat_gateway#connectivity_type Ec2NatGateway#connectivity_type}
  */
  readonly connectivityType?: string;
  /**
  * The maximum amount of time to wait (in seconds) before forcibly releasing the IP addresses if connections are still in progress. Default value is 350 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_nat_gateway#max_drain_duration_seconds Ec2NatGateway#max_drain_duration_seconds}
  */
  readonly maxDrainDurationSeconds?: number;
  /**
  * The private IPv4 address to assign to the NAT gateway. If you don't provide an address, a private IPv4 address will be automatically assigned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_nat_gateway#private_ip_address Ec2NatGateway#private_ip_address}
  */
  readonly privateIpAddress?: string;
  /**
  * Secondary EIP allocation IDs. For more information, see [Create a NAT gateway](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-working-with.html) in the *Amazon VPC User Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_nat_gateway#secondary_allocation_ids Ec2NatGateway#secondary_allocation_ids}
  */
  readonly secondaryAllocationIds?: string[];
  /**
  * [Private NAT gateway only] The number of secondary private IPv4 addresses you want to assign to the NAT gateway. For more information about secondary addresses, see [Create a NAT gateway](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html#nat-gateway-creating) in the *Amazon Virtual Private Cloud User Guide*.
  *  ``SecondaryPrivateIpAddressCount`` and ``SecondaryPrivateIpAddresses`` cannot be set at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_nat_gateway#secondary_private_ip_address_count Ec2NatGateway#secondary_private_ip_address_count}
  */
  readonly secondaryPrivateIpAddressCount?: number;
  /**
  * Secondary private IPv4 addresses. For more information about secondary addresses, see [Create a NAT gateway](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html#nat-gateway-creating) in the *Amazon Virtual Private Cloud User Guide*.
  *  ``SecondaryPrivateIpAddressCount`` and ``SecondaryPrivateIpAddresses`` cannot be set at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_nat_gateway#secondary_private_ip_addresses Ec2NatGateway#secondary_private_ip_addresses}
  */
  readonly secondaryPrivateIpAddresses?: string[];
  /**
  * The ID of the subnet in which the NAT gateway is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_nat_gateway#subnet_id Ec2NatGateway#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * The tags for the NAT gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_nat_gateway#tags Ec2NatGateway#tags}
  */
  readonly tags?: Ec2NatGatewayTags[] | cdktn.IResolvable;
  /**
  * The ID of the VPC in which the NAT gateway is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_nat_gateway#vpc_id Ec2NatGateway#vpc_id}
  */
  readonly vpcId?: string;
}
export interface Ec2NatGatewayAvailabilityZoneAddresses {
  /**
  * The allocation IDs of the Elastic IP addresses (EIPs) to be used for handling outbound NAT traffic in this specific Availability Zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_nat_gateway#allocation_ids Ec2NatGateway#allocation_ids}
  */
  readonly allocationIds?: string[];
  /**
  * For regional NAT gateways only: The Availability Zone where this specific NAT gateway configuration will be active. Each AZ in a regional NAT gateway has its own configuration to handle outbound NAT traffic from that AZ. 
  *  A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_nat_gateway#availability_zone Ec2NatGateway#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * For regional NAT gateways only: The ID of the Availability Zone where this specific NAT gateway configuration will be active. Each AZ in a regional NAT gateway has its own configuration to handle outbound NAT traffic from that AZ. Use this instead of AvailabilityZone for consistent identification of AZs across AWS Regions. 
  *  A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_nat_gateway#availability_zone_id Ec2NatGateway#availability_zone_id}
  */
  readonly availabilityZoneId?: string;
}

export function ec2NatGatewayAvailabilityZoneAddressesToTerraform(struct?: Ec2NatGatewayAvailabilityZoneAddresses | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allocation_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allocationIds),
    availability_zone: cdktn.stringToTerraform(struct!.availabilityZone),
    availability_zone_id: cdktn.stringToTerraform(struct!.availabilityZoneId),
  }
}


export function ec2NatGatewayAvailabilityZoneAddressesToHclTerraform(struct?: Ec2NatGatewayAvailabilityZoneAddresses | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allocation_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allocationIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    availability_zone: {
      value: cdktn.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    availability_zone_id: {
      value: cdktn.stringToHclTerraform(struct!.availabilityZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2NatGatewayAvailabilityZoneAddressesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2NatGatewayAvailabilityZoneAddresses | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocationIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationIds = this._allocationIds;
    }
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._availabilityZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZoneId = this._availabilityZoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2NatGatewayAvailabilityZoneAddresses | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocationIds = undefined;
      this._availabilityZone = undefined;
      this._availabilityZoneId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocationIds = value.allocationIds;
      this._availabilityZone = value.availabilityZone;
      this._availabilityZoneId = value.availabilityZoneId;
    }
  }

  // allocation_ids - computed: true, optional: true, required: false
  private _allocationIds?: string[]; 
  public get allocationIds() {
    return cdktn.Fn.tolist(this.getListAttribute('allocation_ids'));
  }
  public set allocationIds(value: string[]) {
    this._allocationIds = value;
  }
  public resetAllocationIds() {
    this._allocationIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationIdsInput() {
    return this._allocationIds;
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // availability_zone_id - computed: true, optional: true, required: false
  private _availabilityZoneId?: string; 
  public get availabilityZoneId() {
    return this.getStringAttribute('availability_zone_id');
  }
  public set availabilityZoneId(value: string) {
    this._availabilityZoneId = value;
  }
  public resetAvailabilityZoneId() {
    this._availabilityZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneIdInput() {
    return this._availabilityZoneId;
  }
}

export class Ec2NatGatewayAvailabilityZoneAddressesList extends cdktn.ComplexList {
  public internalValue? : Ec2NatGatewayAvailabilityZoneAddresses[] | cdktn.IResolvable

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
  public get(index: number): Ec2NatGatewayAvailabilityZoneAddressesOutputReference {
    return new Ec2NatGatewayAvailabilityZoneAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2NatGatewayTags {
  /**
  * The tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_nat_gateway#key Ec2NatGateway#key}
  */
  readonly key?: string;
  /**
  * The tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_nat_gateway#value Ec2NatGateway#value}
  */
  readonly value?: string;
}

export function ec2NatGatewayTagsToTerraform(struct?: Ec2NatGatewayTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function ec2NatGatewayTagsToHclTerraform(struct?: Ec2NatGatewayTags | cdktn.IResolvable): any {
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

export class Ec2NatGatewayTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2NatGatewayTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Ec2NatGatewayTags | cdktn.IResolvable | undefined) {
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

export class Ec2NatGatewayTagsList extends cdktn.ComplexList {
  public internalValue? : Ec2NatGatewayTags[] | cdktn.IResolvable

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
  public get(index: number): Ec2NatGatewayTagsOutputReference {
    return new Ec2NatGatewayTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_nat_gateway awscc_ec2_nat_gateway}
*/
export class Ec2NatGateway extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_nat_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Ec2NatGateway resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ec2NatGateway to import
  * @param importFromId The id of the existing Ec2NatGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_nat_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ec2NatGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_nat_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_nat_gateway awscc_ec2_nat_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2NatGatewayConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Ec2NatGatewayConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_nat_gateway',
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
    this._allocationId = config.allocationId;
    this._availabilityMode = config.availabilityMode;
    this._availabilityZoneAddresses.internalValue = config.availabilityZoneAddresses;
    this._connectivityType = config.connectivityType;
    this._maxDrainDurationSeconds = config.maxDrainDurationSeconds;
    this._privateIpAddress = config.privateIpAddress;
    this._secondaryAllocationIds = config.secondaryAllocationIds;
    this._secondaryPrivateIpAddressCount = config.secondaryPrivateIpAddressCount;
    this._secondaryPrivateIpAddresses = config.secondaryPrivateIpAddresses;
    this._subnetId = config.subnetId;
    this._tags.internalValue = config.tags;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocation_id - computed: true, optional: true, required: false
  private _allocationId?: string; 
  public get allocationId() {
    return this.getStringAttribute('allocation_id');
  }
  public set allocationId(value: string) {
    this._allocationId = value;
  }
  public resetAllocationId() {
    this._allocationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationIdInput() {
    return this._allocationId;
  }

  // auto_provision_zones - computed: true, optional: false, required: false
  public get autoProvisionZones() {
    return this.getStringAttribute('auto_provision_zones');
  }

  // auto_scaling_ips - computed: true, optional: false, required: false
  public get autoScalingIps() {
    return this.getStringAttribute('auto_scaling_ips');
  }

  // availability_mode - computed: true, optional: true, required: false
  private _availabilityMode?: string; 
  public get availabilityMode() {
    return this.getStringAttribute('availability_mode');
  }
  public set availabilityMode(value: string) {
    this._availabilityMode = value;
  }
  public resetAvailabilityMode() {
    this._availabilityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityModeInput() {
    return this._availabilityMode;
  }

  // availability_zone_addresses - computed: true, optional: true, required: false
  private _availabilityZoneAddresses = new Ec2NatGatewayAvailabilityZoneAddressesList(this, "availability_zone_addresses", true);
  public get availabilityZoneAddresses() {
    return this._availabilityZoneAddresses;
  }
  public putAvailabilityZoneAddresses(value: Ec2NatGatewayAvailabilityZoneAddresses[] | cdktn.IResolvable) {
    this._availabilityZoneAddresses.internalValue = value;
  }
  public resetAvailabilityZoneAddresses() {
    this._availabilityZoneAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneAddressesInput() {
    return this._availabilityZoneAddresses.internalValue;
  }

  // connectivity_type - computed: true, optional: true, required: false
  private _connectivityType?: string; 
  public get connectivityType() {
    return this.getStringAttribute('connectivity_type');
  }
  public set connectivityType(value: string) {
    this._connectivityType = value;
  }
  public resetConnectivityType() {
    this._connectivityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityTypeInput() {
    return this._connectivityType;
  }

  // eni_id - computed: true, optional: false, required: false
  public get eniId() {
    return this.getStringAttribute('eni_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_drain_duration_seconds - computed: true, optional: true, required: false
  private _maxDrainDurationSeconds?: number; 
  public get maxDrainDurationSeconds() {
    return this.getNumberAttribute('max_drain_duration_seconds');
  }
  public set maxDrainDurationSeconds(value: number) {
    this._maxDrainDurationSeconds = value;
  }
  public resetMaxDrainDurationSeconds() {
    this._maxDrainDurationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDrainDurationSecondsInput() {
    return this._maxDrainDurationSeconds;
  }

  // nat_gateway_id - computed: true, optional: false, required: false
  public get natGatewayId() {
    return this.getStringAttribute('nat_gateway_id');
  }

  // private_ip_address - computed: true, optional: true, required: false
  private _privateIpAddress?: string; 
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }
  public set privateIpAddress(value: string) {
    this._privateIpAddress = value;
  }
  public resetPrivateIpAddress() {
    this._privateIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressInput() {
    return this._privateIpAddress;
  }

  // route_table_id - computed: true, optional: false, required: false
  public get routeTableId() {
    return this.getStringAttribute('route_table_id');
  }

  // secondary_allocation_ids - computed: true, optional: true, required: false
  private _secondaryAllocationIds?: string[]; 
  public get secondaryAllocationIds() {
    return this.getListAttribute('secondary_allocation_ids');
  }
  public set secondaryAllocationIds(value: string[]) {
    this._secondaryAllocationIds = value;
  }
  public resetSecondaryAllocationIds() {
    this._secondaryAllocationIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryAllocationIdsInput() {
    return this._secondaryAllocationIds;
  }

  // secondary_private_ip_address_count - computed: true, optional: true, required: false
  private _secondaryPrivateIpAddressCount?: number; 
  public get secondaryPrivateIpAddressCount() {
    return this.getNumberAttribute('secondary_private_ip_address_count');
  }
  public set secondaryPrivateIpAddressCount(value: number) {
    this._secondaryPrivateIpAddressCount = value;
  }
  public resetSecondaryPrivateIpAddressCount() {
    this._secondaryPrivateIpAddressCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPrivateIpAddressCountInput() {
    return this._secondaryPrivateIpAddressCount;
  }

  // secondary_private_ip_addresses - computed: true, optional: true, required: false
  private _secondaryPrivateIpAddresses?: string[]; 
  public get secondaryPrivateIpAddresses() {
    return this.getListAttribute('secondary_private_ip_addresses');
  }
  public set secondaryPrivateIpAddresses(value: string[]) {
    this._secondaryPrivateIpAddresses = value;
  }
  public resetSecondaryPrivateIpAddresses() {
    this._secondaryPrivateIpAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPrivateIpAddressesInput() {
    return this._secondaryPrivateIpAddresses;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new Ec2NatGatewayTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: Ec2NatGatewayTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allocation_id: cdktn.stringToTerraform(this._allocationId),
      availability_mode: cdktn.stringToTerraform(this._availabilityMode),
      availability_zone_addresses: cdktn.listMapper(ec2NatGatewayAvailabilityZoneAddressesToTerraform, false)(this._availabilityZoneAddresses.internalValue),
      connectivity_type: cdktn.stringToTerraform(this._connectivityType),
      max_drain_duration_seconds: cdktn.numberToTerraform(this._maxDrainDurationSeconds),
      private_ip_address: cdktn.stringToTerraform(this._privateIpAddress),
      secondary_allocation_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._secondaryAllocationIds),
      secondary_private_ip_address_count: cdktn.numberToTerraform(this._secondaryPrivateIpAddressCount),
      secondary_private_ip_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(this._secondaryPrivateIpAddresses),
      subnet_id: cdktn.stringToTerraform(this._subnetId),
      tags: cdktn.listMapper(ec2NatGatewayTagsToTerraform, false)(this._tags.internalValue),
      vpc_id: cdktn.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allocation_id: {
        value: cdktn.stringToHclTerraform(this._allocationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      availability_mode: {
        value: cdktn.stringToHclTerraform(this._availabilityMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      availability_zone_addresses: {
        value: cdktn.listMapperHcl(ec2NatGatewayAvailabilityZoneAddressesToHclTerraform, false)(this._availabilityZoneAddresses.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Ec2NatGatewayAvailabilityZoneAddressesList",
      },
      connectivity_type: {
        value: cdktn.stringToHclTerraform(this._connectivityType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_drain_duration_seconds: {
        value: cdktn.numberToHclTerraform(this._maxDrainDurationSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      private_ip_address: {
        value: cdktn.stringToHclTerraform(this._privateIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_allocation_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._secondaryAllocationIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      secondary_private_ip_address_count: {
        value: cdktn.numberToHclTerraform(this._secondaryPrivateIpAddressCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secondary_private_ip_addresses: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._secondaryPrivateIpAddresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      subnet_id: {
        value: cdktn.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(ec2NatGatewayTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ec2NatGatewayTagsList",
      },
      vpc_id: {
        value: cdktn.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
