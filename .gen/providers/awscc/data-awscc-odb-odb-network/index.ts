// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/odb_odb_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccOdbOdbNetworkConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/odb_odb_network#id DataAwsccOdbOdbNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess {
}

export function dataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessToTerraform(struct?: DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessToHclTerraform(struct?: DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv_4_addresses - computed: true, optional: false, required: false
  public get ipv4Addresses() {
    return this.getListAttribute('ipv_4_addresses');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference {
    return new DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccOdbOdbNetworkManagedServicesKmsAccess {
}

export function dataAwsccOdbOdbNetworkManagedServicesKmsAccessToTerraform(struct?: DataAwsccOdbOdbNetworkManagedServicesKmsAccess): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOdbOdbNetworkManagedServicesKmsAccessToHclTerraform(struct?: DataAwsccOdbOdbNetworkManagedServicesKmsAccess): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOdbOdbNetworkManagedServicesKmsAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOdbOdbNetworkManagedServicesKmsAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // ipv_4_addresses - computed: true, optional: false, required: false
  public get ipv4Addresses() {
    return this.getListAttribute('ipv_4_addresses');
  }

  // kms_policy_document - computed: true, optional: false, required: false
  public get kmsPolicyDocument() {
    return this.getStringAttribute('kms_policy_document');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccess {
}

export function dataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessToTerraform(struct?: DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccess): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessToHclTerraform(struct?: DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccess): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv_4_addresses - computed: true, optional: false, required: false
  public get ipv4Addresses() {
    return this.getListAttribute('ipv_4_addresses');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface DataAwsccOdbOdbNetworkManagedServicesS3Access {
}

export function dataAwsccOdbOdbNetworkManagedServicesS3AccessToTerraform(struct?: DataAwsccOdbOdbNetworkManagedServicesS3Access): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOdbOdbNetworkManagedServicesS3AccessToHclTerraform(struct?: DataAwsccOdbOdbNetworkManagedServicesS3Access): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOdbOdbNetworkManagedServicesS3Access | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOdbOdbNetworkManagedServicesS3Access | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // ipv_4_addresses - computed: true, optional: false, required: false
  public get ipv4Addresses() {
    return this.getListAttribute('ipv_4_addresses');
  }

  // s3_policy_document - computed: true, optional: false, required: false
  public get s3PolicyDocument() {
    return this.getStringAttribute('s3_policy_document');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpoint {
}

export function dataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointToTerraform(struct?: DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointToHclTerraform(struct?: DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // vpc_endpoint_id - computed: true, optional: false, required: false
  public get vpcEndpointId() {
    return this.getStringAttribute('vpc_endpoint_id');
  }

  // vpc_endpoint_type - computed: true, optional: false, required: false
  public get vpcEndpointType() {
    return this.getStringAttribute('vpc_endpoint_type');
  }
}
export interface DataAwsccOdbOdbNetworkManagedServicesStsAccess {
}

export function dataAwsccOdbOdbNetworkManagedServicesStsAccessToTerraform(struct?: DataAwsccOdbOdbNetworkManagedServicesStsAccess): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOdbOdbNetworkManagedServicesStsAccessToHclTerraform(struct?: DataAwsccOdbOdbNetworkManagedServicesStsAccess): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOdbOdbNetworkManagedServicesStsAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOdbOdbNetworkManagedServicesStsAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // ipv_4_addresses - computed: true, optional: false, required: false
  public get ipv4Addresses() {
    return this.getListAttribute('ipv_4_addresses');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // sts_policy_document - computed: true, optional: false, required: false
  public get stsPolicyDocument() {
    return this.getStringAttribute('sts_policy_document');
  }
}
export interface DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccess {
}

export function dataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessToTerraform(struct?: DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccess): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessToHclTerraform(struct?: DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccess): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccess | undefined) {
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface DataAwsccOdbOdbNetworkManagedServices {
}

export function dataAwsccOdbOdbNetworkManagedServicesToTerraform(struct?: DataAwsccOdbOdbNetworkManagedServices): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOdbOdbNetworkManagedServicesToHclTerraform(struct?: DataAwsccOdbOdbNetworkManagedServices): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOdbOdbNetworkManagedServicesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOdbOdbNetworkManagedServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOdbOdbNetworkManagedServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cross_region_s3_restore_sources_access - computed: true, optional: false, required: false
  private _crossRegionS3RestoreSourcesAccess = new DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList(this, "cross_region_s3_restore_sources_access", true);
  public get crossRegionS3RestoreSourcesAccess() {
    return this._crossRegionS3RestoreSourcesAccess;
  }

  // kms_access - computed: true, optional: false, required: false
  private _kmsAccess = new DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference(this, "kms_access");
  public get kmsAccess() {
    return this._kmsAccess;
  }

  // managed_s3_backup_access - computed: true, optional: false, required: false
  private _managedS3BackupAccess = new DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference(this, "managed_s3_backup_access");
  public get managedS3BackupAccess() {
    return this._managedS3BackupAccess;
  }

  // managed_services_ipv_4_cidrs - computed: true, optional: false, required: false
  public get managedServicesIpv4Cidrs() {
    return this.getListAttribute('managed_services_ipv_4_cidrs');
  }

  // resource_gateway_arn - computed: true, optional: false, required: false
  public get resourceGatewayArn() {
    return this.getStringAttribute('resource_gateway_arn');
  }

  // s3_access - computed: true, optional: false, required: false
  private _s3Access = new DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference(this, "s3_access");
  public get s3Access() {
    return this._s3Access;
  }

  // service_network_arn - computed: true, optional: false, required: false
  public get serviceNetworkArn() {
    return this.getStringAttribute('service_network_arn');
  }

  // service_network_endpoint - computed: true, optional: false, required: false
  private _serviceNetworkEndpoint = new DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference(this, "service_network_endpoint");
  public get serviceNetworkEndpoint() {
    return this._serviceNetworkEndpoint;
  }

  // sts_access - computed: true, optional: false, required: false
  private _stsAccess = new DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference(this, "sts_access");
  public get stsAccess() {
    return this._stsAccess;
  }

  // zero_etl_access - computed: true, optional: false, required: false
  private _zeroEtlAccess = new DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference(this, "zero_etl_access");
  public get zeroEtlAccess() {
    return this._zeroEtlAccess;
  }
}
export interface DataAwsccOdbOdbNetworkTags {
}

export function dataAwsccOdbOdbNetworkTagsToTerraform(struct?: DataAwsccOdbOdbNetworkTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOdbOdbNetworkTagsToHclTerraform(struct?: DataAwsccOdbOdbNetworkTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOdbOdbNetworkTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccOdbOdbNetworkTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOdbOdbNetworkTags | undefined) {
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

export class DataAwsccOdbOdbNetworkTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccOdbOdbNetworkTagsOutputReference {
    return new DataAwsccOdbOdbNetworkTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/odb_odb_network awscc_odb_odb_network}
*/
export class DataAwsccOdbOdbNetwork extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_odb_odb_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccOdbOdbNetwork resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccOdbOdbNetwork to import
  * @param importFromId The id of the existing DataAwsccOdbOdbNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/odb_odb_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccOdbOdbNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_odb_odb_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/odb_odb_network awscc_odb_odb_network} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccOdbOdbNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccOdbOdbNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_odb_odb_network',
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

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // availability_zone_id - computed: true, optional: false, required: false
  public get availabilityZoneId() {
    return this.getStringAttribute('availability_zone_id');
  }

  // backup_subnet_cidr - computed: true, optional: false, required: false
  public get backupSubnetCidr() {
    return this.getStringAttribute('backup_subnet_cidr');
  }

  // client_subnet_cidr - computed: true, optional: false, required: false
  public get clientSubnetCidr() {
    return this.getStringAttribute('client_subnet_cidr');
  }

  // cross_region_s3_restore_sources - computed: true, optional: false, required: false
  public get crossRegionS3RestoreSources() {
    return cdktn.Fn.tolist(this.getListAttribute('cross_region_s3_restore_sources'));
  }

  // custom_domain_name - computed: true, optional: false, required: false
  public get customDomainName() {
    return this.getStringAttribute('custom_domain_name');
  }

  // default_dns_prefix - computed: true, optional: false, required: false
  public get defaultDnsPrefix() {
    return this.getStringAttribute('default_dns_prefix');
  }

  // delete_associated_resources - computed: true, optional: false, required: false
  public get deleteAssociatedResources() {
    return this.getBooleanAttribute('delete_associated_resources');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // ec_2_placement_group_ids - computed: true, optional: false, required: false
  public get ec2PlacementGroupIds() {
    return this.getListAttribute('ec_2_placement_group_ids');
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

  // kms_access - computed: true, optional: false, required: false
  public get kmsAccess() {
    return this.getStringAttribute('kms_access');
  }

  // kms_policy_document - computed: true, optional: false, required: false
  public get kmsPolicyDocument() {
    return this.getStringAttribute('kms_policy_document');
  }

  // managed_services - computed: true, optional: false, required: false
  private _managedServices = new DataAwsccOdbOdbNetworkManagedServicesOutputReference(this, "managed_services");
  public get managedServices() {
    return this._managedServices;
  }

  // oci_network_anchor_id - computed: true, optional: false, required: false
  public get ociNetworkAnchorId() {
    return this.getStringAttribute('oci_network_anchor_id');
  }

  // oci_resource_anchor_name - computed: true, optional: false, required: false
  public get ociResourceAnchorName() {
    return this.getStringAttribute('oci_resource_anchor_name');
  }

  // oci_vcn_url - computed: true, optional: false, required: false
  public get ociVcnUrl() {
    return this.getStringAttribute('oci_vcn_url');
  }

  // odb_network_arn - computed: true, optional: false, required: false
  public get odbNetworkArn() {
    return this.getStringAttribute('odb_network_arn');
  }

  // odb_network_id - computed: true, optional: false, required: false
  public get odbNetworkId() {
    return this.getStringAttribute('odb_network_id');
  }

  // s3_access - computed: true, optional: false, required: false
  public get s3Access() {
    return this.getStringAttribute('s3_access');
  }

  // s3_policy_document - computed: true, optional: false, required: false
  public get s3PolicyDocument() {
    return this.getStringAttribute('s3_policy_document');
  }

  // sts_access - computed: true, optional: false, required: false
  public get stsAccess() {
    return this.getStringAttribute('sts_access');
  }

  // sts_policy_document - computed: true, optional: false, required: false
  public get stsPolicyDocument() {
    return this.getStringAttribute('sts_policy_document');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccOdbOdbNetworkTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // zero_etl_access - computed: true, optional: false, required: false
  public get zeroEtlAccess() {
    return this.getStringAttribute('zero_etl_access');
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
