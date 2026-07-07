// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_verified_access_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccEc2VerifiedAccessEndpointConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_verified_access_endpoint#id DataAwsccEc2VerifiedAccessEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges {
}

export function dataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesToTerraform(struct?: DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesToHclTerraform(struct?: DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from_port - computed: true, optional: false, required: false
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }

  // to_port - computed: true, optional: false, required: false
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
}

export class DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference {
    return new DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2VerifiedAccessEndpointCidrOptions {
}

export function dataAwsccEc2VerifiedAccessEndpointCidrOptionsToTerraform(struct?: DataAwsccEc2VerifiedAccessEndpointCidrOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VerifiedAccessEndpointCidrOptionsToHclTerraform(struct?: DataAwsccEc2VerifiedAccessEndpointCidrOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2VerifiedAccessEndpointCidrOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VerifiedAccessEndpointCidrOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }

  // port_ranges - computed: true, optional: false, required: false
  private _portRanges = new DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList(this, "port_ranges", true);
  public get portRanges() {
    return this._portRanges;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
}
export interface DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges {
}

export function dataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesToTerraform(struct?: DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesToHclTerraform(struct?: DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from_port - computed: true, optional: false, required: false
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }

  // to_port - computed: true, optional: false, required: false
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
}

export class DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference {
    return new DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions {
}

export function dataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsToTerraform(struct?: DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsToHclTerraform(struct?: DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // load_balancer_arn - computed: true, optional: false, required: false
  public get loadBalancerArn() {
    return this.getStringAttribute('load_balancer_arn');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // port_ranges - computed: true, optional: false, required: false
  private _portRanges = new DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList(this, "port_ranges", true);
  public get portRanges() {
    return this._portRanges;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
}
export interface DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges {
}

export function dataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesToTerraform(struct?: DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesToHclTerraform(struct?: DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from_port - computed: true, optional: false, required: false
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }

  // to_port - computed: true, optional: false, required: false
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
}

export class DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference {
    return new DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions {
}

export function dataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsToTerraform(struct?: DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsToHclTerraform(struct?: DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // network_interface_id - computed: true, optional: false, required: false
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // port_ranges - computed: true, optional: false, required: false
  private _portRanges = new DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList(this, "port_ranges", true);
  public get portRanges() {
    return this._portRanges;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}
export interface DataAwsccEc2VerifiedAccessEndpointRdsOptions {
}

export function dataAwsccEc2VerifiedAccessEndpointRdsOptionsToTerraform(struct?: DataAwsccEc2VerifiedAccessEndpointRdsOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VerifiedAccessEndpointRdsOptionsToHclTerraform(struct?: DataAwsccEc2VerifiedAccessEndpointRdsOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2VerifiedAccessEndpointRdsOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VerifiedAccessEndpointRdsOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // rds_db_cluster_arn - computed: true, optional: false, required: false
  public get rdsDbClusterArn() {
    return this.getStringAttribute('rds_db_cluster_arn');
  }

  // rds_db_instance_arn - computed: true, optional: false, required: false
  public get rdsDbInstanceArn() {
    return this.getStringAttribute('rds_db_instance_arn');
  }

  // rds_db_proxy_arn - computed: true, optional: false, required: false
  public get rdsDbProxyArn() {
    return this.getStringAttribute('rds_db_proxy_arn');
  }

  // rds_endpoint - computed: true, optional: false, required: false
  public get rdsEndpoint() {
    return this.getStringAttribute('rds_endpoint');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
}
export interface DataAwsccEc2VerifiedAccessEndpointSseSpecification {
}

export function dataAwsccEc2VerifiedAccessEndpointSseSpecificationToTerraform(struct?: DataAwsccEc2VerifiedAccessEndpointSseSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VerifiedAccessEndpointSseSpecificationToHclTerraform(struct?: DataAwsccEc2VerifiedAccessEndpointSseSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2VerifiedAccessEndpointSseSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VerifiedAccessEndpointSseSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // customer_managed_key_enabled - computed: true, optional: false, required: false
  public get customerManagedKeyEnabled() {
    return this.getBooleanAttribute('customer_managed_key_enabled');
  }

  // kms_key_arn - computed: true, optional: false, required: false
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
}
export interface DataAwsccEc2VerifiedAccessEndpointTags {
}

export function dataAwsccEc2VerifiedAccessEndpointTagsToTerraform(struct?: DataAwsccEc2VerifiedAccessEndpointTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VerifiedAccessEndpointTagsToHclTerraform(struct?: DataAwsccEc2VerifiedAccessEndpointTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VerifiedAccessEndpointTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2VerifiedAccessEndpointTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VerifiedAccessEndpointTags | undefined) {
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

export class DataAwsccEc2VerifiedAccessEndpointTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2VerifiedAccessEndpointTagsOutputReference {
    return new DataAwsccEc2VerifiedAccessEndpointTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_verified_access_endpoint awscc_ec2_verified_access_endpoint}
*/
export class DataAwsccEc2VerifiedAccessEndpoint extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_verified_access_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccEc2VerifiedAccessEndpoint resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccEc2VerifiedAccessEndpoint to import
  * @param importFromId The id of the existing DataAwsccEc2VerifiedAccessEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_verified_access_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccEc2VerifiedAccessEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_verified_access_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_verified_access_endpoint awscc_ec2_verified_access_endpoint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEc2VerifiedAccessEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEc2VerifiedAccessEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_verified_access_endpoint',
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

  // application_domain - computed: true, optional: false, required: false
  public get applicationDomain() {
    return this.getStringAttribute('application_domain');
  }

  // attachment_type - computed: true, optional: false, required: false
  public get attachmentType() {
    return this.getStringAttribute('attachment_type');
  }

  // cidr_options - computed: true, optional: false, required: false
  private _cidrOptions = new DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference(this, "cidr_options");
  public get cidrOptions() {
    return this._cidrOptions;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_validation_domain - computed: true, optional: false, required: false
  public get deviceValidationDomain() {
    return this.getStringAttribute('device_validation_domain');
  }

  // domain_certificate_arn - computed: true, optional: false, required: false
  public get domainCertificateArn() {
    return this.getStringAttribute('domain_certificate_arn');
  }

  // endpoint_domain - computed: true, optional: false, required: false
  public get endpointDomain() {
    return this.getStringAttribute('endpoint_domain');
  }

  // endpoint_domain_prefix - computed: true, optional: false, required: false
  public get endpointDomainPrefix() {
    return this.getStringAttribute('endpoint_domain_prefix');
  }

  // endpoint_type - computed: true, optional: false, required: false
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
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

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }

  // load_balancer_options - computed: true, optional: false, required: false
  private _loadBalancerOptions = new DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference(this, "load_balancer_options");
  public get loadBalancerOptions() {
    return this._loadBalancerOptions;
  }

  // network_interface_options - computed: true, optional: false, required: false
  private _networkInterfaceOptions = new DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference(this, "network_interface_options");
  public get networkInterfaceOptions() {
    return this._networkInterfaceOptions;
  }

  // policy_document - computed: true, optional: false, required: false
  public get policyDocument() {
    return this.getStringAttribute('policy_document');
  }

  // policy_enabled - computed: true, optional: false, required: false
  public get policyEnabled() {
    return this.getBooleanAttribute('policy_enabled');
  }

  // rds_options - computed: true, optional: false, required: false
  private _rdsOptions = new DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference(this, "rds_options");
  public get rdsOptions() {
    return this._rdsOptions;
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return cdktn.Fn.tolist(this.getListAttribute('security_group_ids'));
  }

  // sse_specification - computed: true, optional: false, required: false
  private _sseSpecification = new DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference(this, "sse_specification");
  public get sseSpecification() {
    return this._sseSpecification;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccEc2VerifiedAccessEndpointTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // verified_access_endpoint_id - computed: true, optional: false, required: false
  public get verifiedAccessEndpointId() {
    return this.getStringAttribute('verified_access_endpoint_id');
  }

  // verified_access_group_id - computed: true, optional: false, required: false
  public get verifiedAccessGroupId() {
    return this.getStringAttribute('verified_access_group_id');
  }

  // verified_access_instance_id - computed: true, optional: false, required: false
  public get verifiedAccessInstanceId() {
    return this.getStringAttribute('verified_access_instance_id');
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
