// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/ec2_network_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccEc2NetworkInterfaceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/ec2_network_interface#id DataAwsccEc2NetworkInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccEc2NetworkInterfaceConnectionTrackingSpecification {
}

export function dataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationToTerraform(struct?: DataAwsccEc2NetworkInterfaceConnectionTrackingSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationToHclTerraform(struct?: DataAwsccEc2NetworkInterfaceConnectionTrackingSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInterfaceConnectionTrackingSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInterfaceConnectionTrackingSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tcp_established_timeout - computed: true, optional: false, required: false
  public get tcpEstablishedTimeout() {
    return this.getNumberAttribute('tcp_established_timeout');
  }

  // udp_stream_timeout - computed: true, optional: false, required: false
  public get udpStreamTimeout() {
    return this.getNumberAttribute('udp_stream_timeout');
  }

  // udp_timeout - computed: true, optional: false, required: false
  public get udpTimeout() {
    return this.getNumberAttribute('udp_timeout');
  }
}
export interface DataAwsccEc2NetworkInterfaceIpv4Prefixes {
}

export function dataAwsccEc2NetworkInterfaceIpv4PrefixesToTerraform(struct?: DataAwsccEc2NetworkInterfaceIpv4Prefixes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInterfaceIpv4PrefixesToHclTerraform(struct?: DataAwsccEc2NetworkInterfaceIpv4Prefixes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2NetworkInterfaceIpv4Prefixes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInterfaceIpv4Prefixes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv_4_prefix - computed: true, optional: false, required: false
  public get ipv4Prefix() {
    return this.getStringAttribute('ipv_4_prefix');
  }
}

export class DataAwsccEc2NetworkInterfaceIpv4PrefixesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference {
    return new DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2NetworkInterfaceIpv6Addresses {
}

export function dataAwsccEc2NetworkInterfaceIpv6AddressesToTerraform(struct?: DataAwsccEc2NetworkInterfaceIpv6Addresses): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInterfaceIpv6AddressesToHclTerraform(struct?: DataAwsccEc2NetworkInterfaceIpv6Addresses): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2NetworkInterfaceIpv6Addresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInterfaceIpv6Addresses | undefined) {
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
}

export class DataAwsccEc2NetworkInterfaceIpv6AddressesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference {
    return new DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2NetworkInterfaceIpv6Prefixes {
}

export function dataAwsccEc2NetworkInterfaceIpv6PrefixesToTerraform(struct?: DataAwsccEc2NetworkInterfaceIpv6Prefixes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInterfaceIpv6PrefixesToHclTerraform(struct?: DataAwsccEc2NetworkInterfaceIpv6Prefixes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2NetworkInterfaceIpv6Prefixes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInterfaceIpv6Prefixes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv_6_prefix - computed: true, optional: false, required: false
  public get ipv6Prefix() {
    return this.getStringAttribute('ipv_6_prefix');
  }
}

export class DataAwsccEc2NetworkInterfaceIpv6PrefixesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference {
    return new DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2NetworkInterfacePrivateIpAddresses {
}

export function dataAwsccEc2NetworkInterfacePrivateIpAddressesToTerraform(struct?: DataAwsccEc2NetworkInterfacePrivateIpAddresses): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInterfacePrivateIpAddressesToHclTerraform(struct?: DataAwsccEc2NetworkInterfacePrivateIpAddresses): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2NetworkInterfacePrivateIpAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInterfacePrivateIpAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // primary - computed: true, optional: false, required: false
  public get primary() {
    return this.getBooleanAttribute('primary');
  }

  // private_ip_address - computed: true, optional: false, required: false
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }
}

export class DataAwsccEc2NetworkInterfacePrivateIpAddressesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference {
    return new DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2NetworkInterfacePublicIpDnsNameOptions {
}

export function dataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsToTerraform(struct?: DataAwsccEc2NetworkInterfacePublicIpDnsNameOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsToHclTerraform(struct?: DataAwsccEc2NetworkInterfacePublicIpDnsNameOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInterfacePublicIpDnsNameOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInterfacePublicIpDnsNameOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_hostname_type - computed: true, optional: false, required: false
  public get dnsHostnameType() {
    return this.getStringAttribute('dns_hostname_type');
  }

  // public_dual_stack_dns_name - computed: true, optional: false, required: false
  public get publicDualStackDnsName() {
    return this.getStringAttribute('public_dual_stack_dns_name');
  }

  // public_ipv_4_dns_name - computed: true, optional: false, required: false
  public get publicIpv4DnsName() {
    return this.getStringAttribute('public_ipv_4_dns_name');
  }

  // public_ipv_6_dns_name - computed: true, optional: false, required: false
  public get publicIpv6DnsName() {
    return this.getStringAttribute('public_ipv_6_dns_name');
  }
}
export interface DataAwsccEc2NetworkInterfaceTags {
}

export function dataAwsccEc2NetworkInterfaceTagsToTerraform(struct?: DataAwsccEc2NetworkInterfaceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInterfaceTagsToHclTerraform(struct?: DataAwsccEc2NetworkInterfaceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInterfaceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2NetworkInterfaceTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInterfaceTags | undefined) {
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

export class DataAwsccEc2NetworkInterfaceTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2NetworkInterfaceTagsOutputReference {
    return new DataAwsccEc2NetworkInterfaceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/ec2_network_interface awscc_ec2_network_interface}
*/
export class DataAwsccEc2NetworkInterface extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_network_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccEc2NetworkInterface resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccEc2NetworkInterface to import
  * @param importFromId The id of the existing DataAwsccEc2NetworkInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/ec2_network_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccEc2NetworkInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_network_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/ec2_network_interface awscc_ec2_network_interface} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEc2NetworkInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEc2NetworkInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_network_interface',
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

  // connection_tracking_specification - computed: true, optional: false, required: false
  private _connectionTrackingSpecification = new DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference(this, "connection_tracking_specification");
  public get connectionTrackingSpecification() {
    return this._connectionTrackingSpecification;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enable_primary_ipv_6 - computed: true, optional: false, required: false
  public get enablePrimaryIpv6() {
    return this.getBooleanAttribute('enable_primary_ipv_6');
  }

  // group_set - computed: true, optional: false, required: false
  public get groupSet() {
    return this.getListAttribute('group_set');
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

  // interface_type - computed: true, optional: false, required: false
  public get interfaceType() {
    return this.getStringAttribute('interface_type');
  }

  // ipv_4_prefix_count - computed: true, optional: false, required: false
  public get ipv4PrefixCount() {
    return this.getNumberAttribute('ipv_4_prefix_count');
  }

  // ipv_4_prefixes - computed: true, optional: false, required: false
  private _ipv4Prefixes = new DataAwsccEc2NetworkInterfaceIpv4PrefixesList(this, "ipv_4_prefixes", false);
  public get ipv4Prefixes() {
    return this._ipv4Prefixes;
  }

  // ipv_6_address_count - computed: true, optional: false, required: false
  public get ipv6AddressCount() {
    return this.getNumberAttribute('ipv_6_address_count');
  }

  // ipv_6_addresses - computed: true, optional: false, required: false
  private _ipv6Addresses = new DataAwsccEc2NetworkInterfaceIpv6AddressesList(this, "ipv_6_addresses", true);
  public get ipv6Addresses() {
    return this._ipv6Addresses;
  }

  // ipv_6_prefix_count - computed: true, optional: false, required: false
  public get ipv6PrefixCount() {
    return this.getNumberAttribute('ipv_6_prefix_count');
  }

  // ipv_6_prefixes - computed: true, optional: false, required: false
  private _ipv6Prefixes = new DataAwsccEc2NetworkInterfaceIpv6PrefixesList(this, "ipv_6_prefixes", false);
  public get ipv6Prefixes() {
    return this._ipv6Prefixes;
  }

  // network_interface_id - computed: true, optional: false, required: false
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }

  // primary_ipv_6_address - computed: true, optional: false, required: false
  public get primaryIpv6Address() {
    return this.getStringAttribute('primary_ipv_6_address');
  }

  // primary_private_ip_address - computed: true, optional: false, required: false
  public get primaryPrivateIpAddress() {
    return this.getStringAttribute('primary_private_ip_address');
  }

  // private_ip_address - computed: true, optional: false, required: false
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // private_ip_addresses - computed: true, optional: false, required: false
  private _privateIpAddresses = new DataAwsccEc2NetworkInterfacePrivateIpAddressesList(this, "private_ip_addresses", false);
  public get privateIpAddresses() {
    return this._privateIpAddresses;
  }

  // public_ip_dns_hostname_type_specification - computed: true, optional: false, required: false
  public get publicIpDnsHostnameTypeSpecification() {
    return this.getStringAttribute('public_ip_dns_hostname_type_specification');
  }

  // public_ip_dns_name_options - computed: true, optional: false, required: false
  private _publicIpDnsNameOptions = new DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference(this, "public_ip_dns_name_options");
  public get publicIpDnsNameOptions() {
    return this._publicIpDnsNameOptions;
  }

  // secondary_private_ip_address_count - computed: true, optional: false, required: false
  public get secondaryPrivateIpAddressCount() {
    return this.getNumberAttribute('secondary_private_ip_address_count');
  }

  // secondary_private_ip_addresses - computed: true, optional: false, required: false
  public get secondaryPrivateIpAddresses() {
    return this.getListAttribute('secondary_private_ip_addresses');
  }

  // source_dest_check - computed: true, optional: false, required: false
  public get sourceDestCheck() {
    return this.getBooleanAttribute('source_dest_check');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccEc2NetworkInterfaceTagsList(this, "tags", false);
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
