// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/redshiftserverless_workgroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccRedshiftserverlessWorkgroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/redshiftserverless_workgroup#id DataAwsccRedshiftserverlessWorkgroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccRedshiftserverlessWorkgroupConfigParameters {
}

export function dataAwsccRedshiftserverlessWorkgroupConfigParametersToTerraform(struct?: DataAwsccRedshiftserverlessWorkgroupConfigParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRedshiftserverlessWorkgroupConfigParametersToHclTerraform(struct?: DataAwsccRedshiftserverlessWorkgroupConfigParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccRedshiftserverlessWorkgroupConfigParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRedshiftserverlessWorkgroupConfigParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameter_key - computed: true, optional: false, required: false
  public get parameterKey() {
    return this.getStringAttribute('parameter_key');
  }

  // parameter_value - computed: true, optional: false, required: false
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
}

export class DataAwsccRedshiftserverlessWorkgroupConfigParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference {
    return new DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccRedshiftserverlessWorkgroupPricePerformanceTarget {
}

export function dataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetToTerraform(struct?: DataAwsccRedshiftserverlessWorkgroupPricePerformanceTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetToHclTerraform(struct?: DataAwsccRedshiftserverlessWorkgroupPricePerformanceTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRedshiftserverlessWorkgroupPricePerformanceTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRedshiftserverlessWorkgroupPricePerformanceTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getNumberAttribute('level');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface DataAwsccRedshiftserverlessWorkgroupTags {
}

export function dataAwsccRedshiftserverlessWorkgroupTagsToTerraform(struct?: DataAwsccRedshiftserverlessWorkgroupTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRedshiftserverlessWorkgroupTagsToHclTerraform(struct?: DataAwsccRedshiftserverlessWorkgroupTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRedshiftserverlessWorkgroupTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccRedshiftserverlessWorkgroupTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRedshiftserverlessWorkgroupTags | undefined) {
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

export class DataAwsccRedshiftserverlessWorkgroupTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccRedshiftserverlessWorkgroupTagsOutputReference {
    return new DataAwsccRedshiftserverlessWorkgroupTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParameters {
}

export function dataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersToTerraform(struct?: DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersToHclTerraform(struct?: DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameter_key - computed: true, optional: false, required: false
  public get parameterKey() {
    return this.getStringAttribute('parameter_key');
  }

  // parameter_value - computed: true, optional: false, required: false
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
}

export class DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference {
    return new DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces {
}

export function dataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesToTerraform(struct?: DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesToHclTerraform(struct?: DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces | undefined) {
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

  // network_interface_id - computed: true, optional: false, required: false
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }

  // private_ip_address - computed: true, optional: false, required: false
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference {
    return new DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints {
}

export function dataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsToTerraform(struct?: DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsToHclTerraform(struct?: DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // network_interfaces - computed: true, optional: false, required: false
  private _networkInterfaces = new DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList(this, "network_interfaces", false);
  public get networkInterfaces() {
    return this._networkInterfaces;
  }

  // vpc_endpoint_id - computed: true, optional: false, required: false
  public get vpcEndpointId() {
    return this.getStringAttribute('vpc_endpoint_id');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

export class DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference {
    return new DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpoint {
}

export function dataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointToTerraform(struct?: DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointToHclTerraform(struct?: DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // vpc_endpoints - computed: true, optional: false, required: false
  private _vpcEndpoints = new DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList(this, "vpc_endpoints", false);
  public get vpcEndpoints() {
    return this._vpcEndpoints;
  }
}
export interface DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget {
}

export function dataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetToTerraform(struct?: DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetToHclTerraform(struct?: DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getNumberAttribute('level');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface DataAwsccRedshiftserverlessWorkgroupWorkgroup {
}

export function dataAwsccRedshiftserverlessWorkgroupWorkgroupToTerraform(struct?: DataAwsccRedshiftserverlessWorkgroupWorkgroup): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRedshiftserverlessWorkgroupWorkgroupToHclTerraform(struct?: DataAwsccRedshiftserverlessWorkgroupWorkgroup): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRedshiftserverlessWorkgroupWorkgroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRedshiftserverlessWorkgroupWorkgroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base_capacity - computed: true, optional: false, required: false
  public get baseCapacity() {
    return this.getNumberAttribute('base_capacity');
  }

  // config_parameters - computed: true, optional: false, required: false
  private _configParameters = new DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList(this, "config_parameters", true);
  public get configParameters() {
    return this._configParameters;
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // endpoint - computed: true, optional: false, required: false
  private _endpoint = new DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference(this, "endpoint");
  public get endpoint() {
    return this._endpoint;
  }

  // enhanced_vpc_routing - computed: true, optional: false, required: false
  public get enhancedVpcRouting() {
    return this.getBooleanAttribute('enhanced_vpc_routing');
  }

  // max_capacity - computed: true, optional: false, required: false
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }

  // namespace_name - computed: true, optional: false, required: false
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }

  // price_performance_target - computed: true, optional: false, required: false
  private _pricePerformanceTarget = new DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference(this, "price_performance_target");
  public get pricePerformanceTarget() {
    return this._pricePerformanceTarget;
  }

  // publicly_accessible - computed: true, optional: false, required: false
  public get publiclyAccessible() {
    return this.getBooleanAttribute('publicly_accessible');
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }

  // track_name - computed: true, optional: false, required: false
  public get trackName() {
    return this.getStringAttribute('track_name');
  }

  // workgroup_arn - computed: true, optional: false, required: false
  public get workgroupArn() {
    return this.getStringAttribute('workgroup_arn');
  }

  // workgroup_id - computed: true, optional: false, required: false
  public get workgroupId() {
    return this.getStringAttribute('workgroup_id');
  }

  // workgroup_name - computed: true, optional: false, required: false
  public get workgroupName() {
    return this.getStringAttribute('workgroup_name');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/redshiftserverless_workgroup awscc_redshiftserverless_workgroup}
*/
export class DataAwsccRedshiftserverlessWorkgroup extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_redshiftserverless_workgroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccRedshiftserverlessWorkgroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccRedshiftserverlessWorkgroup to import
  * @param importFromId The id of the existing DataAwsccRedshiftserverlessWorkgroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/redshiftserverless_workgroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccRedshiftserverlessWorkgroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_redshiftserverless_workgroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/redshiftserverless_workgroup awscc_redshiftserverless_workgroup} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccRedshiftserverlessWorkgroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccRedshiftserverlessWorkgroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_redshiftserverless_workgroup',
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

  // base_capacity - computed: true, optional: false, required: false
  public get baseCapacity() {
    return this.getNumberAttribute('base_capacity');
  }

  // config_parameters - computed: true, optional: false, required: false
  private _configParameters = new DataAwsccRedshiftserverlessWorkgroupConfigParametersList(this, "config_parameters", true);
  public get configParameters() {
    return this._configParameters;
  }

  // enhanced_vpc_routing - computed: true, optional: false, required: false
  public get enhancedVpcRouting() {
    return this.getBooleanAttribute('enhanced_vpc_routing');
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

  // max_capacity - computed: true, optional: false, required: false
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }

  // namespace_name - computed: true, optional: false, required: false
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // price_performance_target - computed: true, optional: false, required: false
  private _pricePerformanceTarget = new DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference(this, "price_performance_target");
  public get pricePerformanceTarget() {
    return this._pricePerformanceTarget;
  }

  // publicly_accessible - computed: true, optional: false, required: false
  public get publiclyAccessible() {
    return this.getBooleanAttribute('publicly_accessible');
  }

  // recovery_point_id - computed: true, optional: false, required: false
  public get recoveryPointId() {
    return this.getStringAttribute('recovery_point_id');
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // snapshot_arn - computed: true, optional: false, required: false
  public get snapshotArn() {
    return this.getStringAttribute('snapshot_arn');
  }

  // snapshot_name - computed: true, optional: false, required: false
  public get snapshotName() {
    return this.getStringAttribute('snapshot_name');
  }

  // snapshot_owner_account - computed: true, optional: false, required: false
  public get snapshotOwnerAccount() {
    return this.getStringAttribute('snapshot_owner_account');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccRedshiftserverlessWorkgroupTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // track_name - computed: true, optional: false, required: false
  public get trackName() {
    return this.getStringAttribute('track_name');
  }

  // workgroup - computed: true, optional: false, required: false
  private _workgroup = new DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference(this, "workgroup");
  public get workgroup() {
    return this._workgroup;
  }

  // workgroup_name - computed: true, optional: false, required: false
  public get workgroupName() {
    return this.getStringAttribute('workgroup_name');
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
