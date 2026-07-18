// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/odb_odb_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface OdbOdbNetworkConfig extends cdktn.TerraformMetaArguments {
  /**
  * The AWS Availability Zone (AZ) where the ODB network is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/odb_odb_network#availability_zone OdbOdbNetwork#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * The AZ ID of the AZ where the ODB network is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/odb_odb_network#availability_zone_id OdbOdbNetwork#availability_zone_id}
  */
  readonly availabilityZoneId?: string;
  /**
  * The CIDR range of the backup subnet in the ODB network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/odb_odb_network#backup_subnet_cidr OdbOdbNetwork#backup_subnet_cidr}
  */
  readonly backupSubnetCidr?: string;
  /**
  * The CIDR range of the client subnet in the ODB network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/odb_odb_network#client_subnet_cidr OdbOdbNetwork#client_subnet_cidr}
  */
  readonly clientSubnetCidr?: string;
  /**
  * The cross-Region Amazon S3 restore sources for the ODB network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/odb_odb_network#cross_region_s3_restore_sources OdbOdbNetwork#cross_region_s3_restore_sources}
  */
  readonly crossRegionS3RestoreSources?: string[];
  /**
  * The domain name to use for the resources in the ODB network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/odb_odb_network#custom_domain_name OdbOdbNetwork#custom_domain_name}
  */
  readonly customDomainName?: string;
  /**
  * The DNS prefix to the default DNS domain name. The default DNS domain name is oraclevcn.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/odb_odb_network#default_dns_prefix OdbOdbNetwork#default_dns_prefix}
  */
  readonly defaultDnsPrefix?: string;
  /**
  * Specifies whether to delete associated OCI networking resources along with the ODB network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/odb_odb_network#delete_associated_resources OdbOdbNetwork#delete_associated_resources}
  */
  readonly deleteAssociatedResources?: boolean | cdktn.IResolvable;
  /**
  * The user-friendly name of the ODB network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/odb_odb_network#display_name OdbOdbNetwork#display_name}
  */
  readonly displayName?: string;
  /**
  * The AWS Key Management Service (KMS) access configuration for the ODB network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/odb_odb_network#kms_access OdbOdbNetwork#kms_access}
  */
  readonly kmsAccess?: string;
  /**
  * The AWS Key Management Service (KMS) policy document that defines permissions for key usage within the ODB network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/odb_odb_network#kms_policy_document OdbOdbNetwork#kms_policy_document}
  */
  readonly kmsPolicyDocument?: string;
  /**
  * Specifies the configuration for Amazon S3 access from the ODB network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/odb_odb_network#s3_access OdbOdbNetwork#s3_access}
  */
  readonly s3Access?: string;
  /**
  * Specifies the endpoint policy for Amazon S3 access from the ODB network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/odb_odb_network#s3_policy_document OdbOdbNetwork#s3_policy_document}
  */
  readonly s3PolicyDocument?: string;
  /**
  * The AWS Security Token Service (STS) access configuration for the ODB network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/odb_odb_network#sts_access OdbOdbNetwork#sts_access}
  */
  readonly stsAccess?: string;
  /**
  * The AWS Security Token Service (STS) policy document that defines permissions for token service usage within the ODB network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/odb_odb_network#sts_policy_document OdbOdbNetwork#sts_policy_document}
  */
  readonly stsPolicyDocument?: string;
  /**
  * Tags to assign to the Odb Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/odb_odb_network#tags OdbOdbNetwork#tags}
  */
  readonly tags?: OdbOdbNetworkTags[] | cdktn.IResolvable;
  /**
  * Specifies the configuration for Zero-ETL access from the ODB network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/odb_odb_network#zero_etl_access OdbOdbNetwork#zero_etl_access}
  */
  readonly zeroEtlAccess?: string;
}
export interface OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess {
}

export function odbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessToTerraform(struct?: OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function odbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessToHclTerraform(struct?: OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess | undefined) {
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

export class OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList extends cdktn.ComplexList {

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
  public get(index: number): OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference {
    return new OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OdbOdbNetworkManagedServicesKmsAccess {
}

export function odbOdbNetworkManagedServicesKmsAccessToTerraform(struct?: OdbOdbNetworkManagedServicesKmsAccess): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function odbOdbNetworkManagedServicesKmsAccessToHclTerraform(struct?: OdbOdbNetworkManagedServicesKmsAccess): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class OdbOdbNetworkManagedServicesKmsAccessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OdbOdbNetworkManagedServicesKmsAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OdbOdbNetworkManagedServicesKmsAccess | undefined) {
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
export interface OdbOdbNetworkManagedServicesManagedS3BackupAccess {
}

export function odbOdbNetworkManagedServicesManagedS3BackupAccessToTerraform(struct?: OdbOdbNetworkManagedServicesManagedS3BackupAccess): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function odbOdbNetworkManagedServicesManagedS3BackupAccessToHclTerraform(struct?: OdbOdbNetworkManagedServicesManagedS3BackupAccess): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OdbOdbNetworkManagedServicesManagedS3BackupAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OdbOdbNetworkManagedServicesManagedS3BackupAccess | undefined) {
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
export interface OdbOdbNetworkManagedServicesS3Access {
}

export function odbOdbNetworkManagedServicesS3AccessToTerraform(struct?: OdbOdbNetworkManagedServicesS3Access): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function odbOdbNetworkManagedServicesS3AccessToHclTerraform(struct?: OdbOdbNetworkManagedServicesS3Access): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class OdbOdbNetworkManagedServicesS3AccessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OdbOdbNetworkManagedServicesS3Access | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OdbOdbNetworkManagedServicesS3Access | undefined) {
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
export interface OdbOdbNetworkManagedServicesServiceNetworkEndpoint {
}

export function odbOdbNetworkManagedServicesServiceNetworkEndpointToTerraform(struct?: OdbOdbNetworkManagedServicesServiceNetworkEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function odbOdbNetworkManagedServicesServiceNetworkEndpointToHclTerraform(struct?: OdbOdbNetworkManagedServicesServiceNetworkEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OdbOdbNetworkManagedServicesServiceNetworkEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OdbOdbNetworkManagedServicesServiceNetworkEndpoint | undefined) {
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
export interface OdbOdbNetworkManagedServicesStsAccess {
}

export function odbOdbNetworkManagedServicesStsAccessToTerraform(struct?: OdbOdbNetworkManagedServicesStsAccess): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function odbOdbNetworkManagedServicesStsAccessToHclTerraform(struct?: OdbOdbNetworkManagedServicesStsAccess): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class OdbOdbNetworkManagedServicesStsAccessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OdbOdbNetworkManagedServicesStsAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OdbOdbNetworkManagedServicesStsAccess | undefined) {
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
export interface OdbOdbNetworkManagedServicesZeroEtlAccess {
}

export function odbOdbNetworkManagedServicesZeroEtlAccessToTerraform(struct?: OdbOdbNetworkManagedServicesZeroEtlAccess): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function odbOdbNetworkManagedServicesZeroEtlAccessToHclTerraform(struct?: OdbOdbNetworkManagedServicesZeroEtlAccess): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OdbOdbNetworkManagedServicesZeroEtlAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OdbOdbNetworkManagedServicesZeroEtlAccess | undefined) {
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
export interface OdbOdbNetworkManagedServices {
}

export function odbOdbNetworkManagedServicesToTerraform(struct?: OdbOdbNetworkManagedServices): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function odbOdbNetworkManagedServicesToHclTerraform(struct?: OdbOdbNetworkManagedServices): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class OdbOdbNetworkManagedServicesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OdbOdbNetworkManagedServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OdbOdbNetworkManagedServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cross_region_s3_restore_sources_access - computed: true, optional: false, required: false
  private _crossRegionS3RestoreSourcesAccess = new OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList(this, "cross_region_s3_restore_sources_access", true);
  public get crossRegionS3RestoreSourcesAccess() {
    return this._crossRegionS3RestoreSourcesAccess;
  }

  // kms_access - computed: true, optional: false, required: false
  private _kmsAccess = new OdbOdbNetworkManagedServicesKmsAccessOutputReference(this, "kms_access");
  public get kmsAccess() {
    return this._kmsAccess;
  }

  // managed_s3_backup_access - computed: true, optional: false, required: false
  private _managedS3BackupAccess = new OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference(this, "managed_s3_backup_access");
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
  private _s3Access = new OdbOdbNetworkManagedServicesS3AccessOutputReference(this, "s3_access");
  public get s3Access() {
    return this._s3Access;
  }

  // service_network_arn - computed: true, optional: false, required: false
  public get serviceNetworkArn() {
    return this.getStringAttribute('service_network_arn');
  }

  // service_network_endpoint - computed: true, optional: false, required: false
  private _serviceNetworkEndpoint = new OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference(this, "service_network_endpoint");
  public get serviceNetworkEndpoint() {
    return this._serviceNetworkEndpoint;
  }

  // sts_access - computed: true, optional: false, required: false
  private _stsAccess = new OdbOdbNetworkManagedServicesStsAccessOutputReference(this, "sts_access");
  public get stsAccess() {
    return this._stsAccess;
  }

  // zero_etl_access - computed: true, optional: false, required: false
  private _zeroEtlAccess = new OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference(this, "zero_etl_access");
  public get zeroEtlAccess() {
    return this._zeroEtlAccess;
  }
}
export interface OdbOdbNetworkTags {
  /**
  * The key name of the tag. You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., :, /, =, +, @, -, and ".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/odb_odb_network#key OdbOdbNetwork#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/odb_odb_network#value OdbOdbNetwork#value}
  */
  readonly value?: string;
}

export function odbOdbNetworkTagsToTerraform(struct?: OdbOdbNetworkTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function odbOdbNetworkTagsToHclTerraform(struct?: OdbOdbNetworkTags | cdktn.IResolvable): any {
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

export class OdbOdbNetworkTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OdbOdbNetworkTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: OdbOdbNetworkTags | cdktn.IResolvable | undefined) {
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

export class OdbOdbNetworkTagsList extends cdktn.ComplexList {
  public internalValue? : OdbOdbNetworkTags[] | cdktn.IResolvable

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
  public get(index: number): OdbOdbNetworkTagsOutputReference {
    return new OdbOdbNetworkTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/odb_odb_network awscc_odb_odb_network}
*/
export class OdbOdbNetwork extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_odb_odb_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a OdbOdbNetwork resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OdbOdbNetwork to import
  * @param importFromId The id of the existing OdbOdbNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/odb_odb_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OdbOdbNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_odb_odb_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/odb_odb_network awscc_odb_odb_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OdbOdbNetworkConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OdbOdbNetworkConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_odb_odb_network',
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
    this._availabilityZone = config.availabilityZone;
    this._availabilityZoneId = config.availabilityZoneId;
    this._backupSubnetCidr = config.backupSubnetCidr;
    this._clientSubnetCidr = config.clientSubnetCidr;
    this._crossRegionS3RestoreSources = config.crossRegionS3RestoreSources;
    this._customDomainName = config.customDomainName;
    this._defaultDnsPrefix = config.defaultDnsPrefix;
    this._deleteAssociatedResources = config.deleteAssociatedResources;
    this._displayName = config.displayName;
    this._kmsAccess = config.kmsAccess;
    this._kmsPolicyDocument = config.kmsPolicyDocument;
    this._s3Access = config.s3Access;
    this._s3PolicyDocument = config.s3PolicyDocument;
    this._stsAccess = config.stsAccess;
    this._stsPolicyDocument = config.stsPolicyDocument;
    this._tags.internalValue = config.tags;
    this._zeroEtlAccess = config.zeroEtlAccess;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // backup_subnet_cidr - computed: true, optional: true, required: false
  private _backupSubnetCidr?: string; 
  public get backupSubnetCidr() {
    return this.getStringAttribute('backup_subnet_cidr');
  }
  public set backupSubnetCidr(value: string) {
    this._backupSubnetCidr = value;
  }
  public resetBackupSubnetCidr() {
    this._backupSubnetCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupSubnetCidrInput() {
    return this._backupSubnetCidr;
  }

  // client_subnet_cidr - computed: true, optional: true, required: false
  private _clientSubnetCidr?: string; 
  public get clientSubnetCidr() {
    return this.getStringAttribute('client_subnet_cidr');
  }
  public set clientSubnetCidr(value: string) {
    this._clientSubnetCidr = value;
  }
  public resetClientSubnetCidr() {
    this._clientSubnetCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSubnetCidrInput() {
    return this._clientSubnetCidr;
  }

  // cross_region_s3_restore_sources - computed: true, optional: true, required: false
  private _crossRegionS3RestoreSources?: string[]; 
  public get crossRegionS3RestoreSources() {
    return cdktn.Fn.tolist(this.getListAttribute('cross_region_s3_restore_sources'));
  }
  public set crossRegionS3RestoreSources(value: string[]) {
    this._crossRegionS3RestoreSources = value;
  }
  public resetCrossRegionS3RestoreSources() {
    this._crossRegionS3RestoreSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossRegionS3RestoreSourcesInput() {
    return this._crossRegionS3RestoreSources;
  }

  // custom_domain_name - computed: true, optional: true, required: false
  private _customDomainName?: string; 
  public get customDomainName() {
    return this.getStringAttribute('custom_domain_name');
  }
  public set customDomainName(value: string) {
    this._customDomainName = value;
  }
  public resetCustomDomainName() {
    this._customDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDomainNameInput() {
    return this._customDomainName;
  }

  // default_dns_prefix - computed: true, optional: true, required: false
  private _defaultDnsPrefix?: string; 
  public get defaultDnsPrefix() {
    return this.getStringAttribute('default_dns_prefix');
  }
  public set defaultDnsPrefix(value: string) {
    this._defaultDnsPrefix = value;
  }
  public resetDefaultDnsPrefix() {
    this._defaultDnsPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDnsPrefixInput() {
    return this._defaultDnsPrefix;
  }

  // delete_associated_resources - computed: true, optional: true, required: false
  private _deleteAssociatedResources?: boolean | cdktn.IResolvable; 
  public get deleteAssociatedResources() {
    return this.getBooleanAttribute('delete_associated_resources');
  }
  public set deleteAssociatedResources(value: boolean | cdktn.IResolvable) {
    this._deleteAssociatedResources = value;
  }
  public resetDeleteAssociatedResources() {
    this._deleteAssociatedResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAssociatedResourcesInput() {
    return this._deleteAssociatedResources;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // ec_2_placement_group_ids - computed: true, optional: false, required: false
  public get ec2PlacementGroupIds() {
    return this.getListAttribute('ec_2_placement_group_ids');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_access - computed: true, optional: true, required: false
  private _kmsAccess?: string; 
  public get kmsAccess() {
    return this.getStringAttribute('kms_access');
  }
  public set kmsAccess(value: string) {
    this._kmsAccess = value;
  }
  public resetKmsAccess() {
    this._kmsAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsAccessInput() {
    return this._kmsAccess;
  }

  // kms_policy_document - computed: true, optional: true, required: false
  private _kmsPolicyDocument?: string; 
  public get kmsPolicyDocument() {
    return this.getStringAttribute('kms_policy_document');
  }
  public set kmsPolicyDocument(value: string) {
    this._kmsPolicyDocument = value;
  }
  public resetKmsPolicyDocument() {
    this._kmsPolicyDocument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsPolicyDocumentInput() {
    return this._kmsPolicyDocument;
  }

  // managed_services - computed: true, optional: false, required: false
  private _managedServices = new OdbOdbNetworkManagedServicesOutputReference(this, "managed_services");
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

  // s3_access - computed: true, optional: true, required: false
  private _s3Access?: string; 
  public get s3Access() {
    return this.getStringAttribute('s3_access');
  }
  public set s3Access(value: string) {
    this._s3Access = value;
  }
  public resetS3Access() {
    this._s3Access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3AccessInput() {
    return this._s3Access;
  }

  // s3_policy_document - computed: true, optional: true, required: false
  private _s3PolicyDocument?: string; 
  public get s3PolicyDocument() {
    return this.getStringAttribute('s3_policy_document');
  }
  public set s3PolicyDocument(value: string) {
    this._s3PolicyDocument = value;
  }
  public resetS3PolicyDocument() {
    this._s3PolicyDocument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3PolicyDocumentInput() {
    return this._s3PolicyDocument;
  }

  // sts_access - computed: true, optional: true, required: false
  private _stsAccess?: string; 
  public get stsAccess() {
    return this.getStringAttribute('sts_access');
  }
  public set stsAccess(value: string) {
    this._stsAccess = value;
  }
  public resetStsAccess() {
    this._stsAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stsAccessInput() {
    return this._stsAccess;
  }

  // sts_policy_document - computed: true, optional: true, required: false
  private _stsPolicyDocument?: string; 
  public get stsPolicyDocument() {
    return this.getStringAttribute('sts_policy_document');
  }
  public set stsPolicyDocument(value: string) {
    this._stsPolicyDocument = value;
  }
  public resetStsPolicyDocument() {
    this._stsPolicyDocument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stsPolicyDocumentInput() {
    return this._stsPolicyDocument;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new OdbOdbNetworkTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: OdbOdbNetworkTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // zero_etl_access - computed: true, optional: true, required: false
  private _zeroEtlAccess?: string; 
  public get zeroEtlAccess() {
    return this.getStringAttribute('zero_etl_access');
  }
  public set zeroEtlAccess(value: string) {
    this._zeroEtlAccess = value;
  }
  public resetZeroEtlAccess() {
    this._zeroEtlAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroEtlAccessInput() {
    return this._zeroEtlAccess;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktn.stringToTerraform(this._availabilityZone),
      availability_zone_id: cdktn.stringToTerraform(this._availabilityZoneId),
      backup_subnet_cidr: cdktn.stringToTerraform(this._backupSubnetCidr),
      client_subnet_cidr: cdktn.stringToTerraform(this._clientSubnetCidr),
      cross_region_s3_restore_sources: cdktn.listMapper(cdktn.stringToTerraform, false)(this._crossRegionS3RestoreSources),
      custom_domain_name: cdktn.stringToTerraform(this._customDomainName),
      default_dns_prefix: cdktn.stringToTerraform(this._defaultDnsPrefix),
      delete_associated_resources: cdktn.booleanToTerraform(this._deleteAssociatedResources),
      display_name: cdktn.stringToTerraform(this._displayName),
      kms_access: cdktn.stringToTerraform(this._kmsAccess),
      kms_policy_document: cdktn.stringToTerraform(this._kmsPolicyDocument),
      s3_access: cdktn.stringToTerraform(this._s3Access),
      s3_policy_document: cdktn.stringToTerraform(this._s3PolicyDocument),
      sts_access: cdktn.stringToTerraform(this._stsAccess),
      sts_policy_document: cdktn.stringToTerraform(this._stsPolicyDocument),
      tags: cdktn.listMapper(odbOdbNetworkTagsToTerraform, false)(this._tags.internalValue),
      zero_etl_access: cdktn.stringToTerraform(this._zeroEtlAccess),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone: {
        value: cdktn.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      availability_zone_id: {
        value: cdktn.stringToHclTerraform(this._availabilityZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_subnet_cidr: {
        value: cdktn.stringToHclTerraform(this._backupSubnetCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_subnet_cidr: {
        value: cdktn.stringToHclTerraform(this._clientSubnetCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cross_region_s3_restore_sources: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._crossRegionS3RestoreSources),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      custom_domain_name: {
        value: cdktn.stringToHclTerraform(this._customDomainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_dns_prefix: {
        value: cdktn.stringToHclTerraform(this._defaultDnsPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_associated_resources: {
        value: cdktn.booleanToHclTerraform(this._deleteAssociatedResources),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_access: {
        value: cdktn.stringToHclTerraform(this._kmsAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_policy_document: {
        value: cdktn.stringToHclTerraform(this._kmsPolicyDocument),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_access: {
        value: cdktn.stringToHclTerraform(this._s3Access),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_policy_document: {
        value: cdktn.stringToHclTerraform(this._s3PolicyDocument),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sts_access: {
        value: cdktn.stringToHclTerraform(this._stsAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sts_policy_document: {
        value: cdktn.stringToHclTerraform(this._stsPolicyDocument),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(odbOdbNetworkTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OdbOdbNetworkTagsList",
      },
      zero_etl_access: {
        value: cdktn.stringToHclTerraform(this._zeroEtlAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
