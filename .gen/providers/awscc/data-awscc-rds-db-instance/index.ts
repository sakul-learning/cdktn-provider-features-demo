// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/rds_db_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccRdsDbInstanceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/rds_db_instance#id DataAwsccRdsDbInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccRdsDbInstanceAdditionalStorageVolumes {
}

export function dataAwsccRdsDbInstanceAdditionalStorageVolumesToTerraform(struct?: DataAwsccRdsDbInstanceAdditionalStorageVolumes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRdsDbInstanceAdditionalStorageVolumesToHclTerraform(struct?: DataAwsccRdsDbInstanceAdditionalStorageVolumes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRdsDbInstanceAdditionalStorageVolumesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccRdsDbInstanceAdditionalStorageVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRdsDbInstanceAdditionalStorageVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allocated_storage - computed: true, optional: false, required: false
  public get allocatedStorage() {
    return this.getStringAttribute('allocated_storage');
  }

  // iops - computed: true, optional: false, required: false
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // max_allocated_storage - computed: true, optional: false, required: false
  public get maxAllocatedStorage() {
    return this.getNumberAttribute('max_allocated_storage');
  }

  // storage_throughput - computed: true, optional: false, required: false
  public get storageThroughput() {
    return this.getNumberAttribute('storage_throughput');
  }

  // storage_type - computed: true, optional: false, required: false
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }

  // volume_name - computed: true, optional: false, required: false
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
}

export class DataAwsccRdsDbInstanceAdditionalStorageVolumesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccRdsDbInstanceAdditionalStorageVolumesOutputReference {
    return new DataAwsccRdsDbInstanceAdditionalStorageVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccRdsDbInstanceAssociatedRoles {
}

export function dataAwsccRdsDbInstanceAssociatedRolesToTerraform(struct?: DataAwsccRdsDbInstanceAssociatedRoles): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRdsDbInstanceAssociatedRolesToHclTerraform(struct?: DataAwsccRdsDbInstanceAssociatedRoles): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRdsDbInstanceAssociatedRolesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccRdsDbInstanceAssociatedRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRdsDbInstanceAssociatedRoles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // feature_name - computed: true, optional: false, required: false
  public get featureName() {
    return this.getStringAttribute('feature_name');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}

export class DataAwsccRdsDbInstanceAssociatedRolesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccRdsDbInstanceAssociatedRolesOutputReference {
    return new DataAwsccRdsDbInstanceAssociatedRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccRdsDbInstanceCertificateDetails {
}

export function dataAwsccRdsDbInstanceCertificateDetailsToTerraform(struct?: DataAwsccRdsDbInstanceCertificateDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRdsDbInstanceCertificateDetailsToHclTerraform(struct?: DataAwsccRdsDbInstanceCertificateDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRdsDbInstanceCertificateDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRdsDbInstanceCertificateDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRdsDbInstanceCertificateDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_identifier - computed: true, optional: false, required: false
  public get caIdentifier() {
    return this.getStringAttribute('ca_identifier');
  }

  // valid_till - computed: true, optional: false, required: false
  public get validTill() {
    return this.getStringAttribute('valid_till');
  }
}
export interface DataAwsccRdsDbInstanceEndpoint {
}

export function dataAwsccRdsDbInstanceEndpointToTerraform(struct?: DataAwsccRdsDbInstanceEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRdsDbInstanceEndpointToHclTerraform(struct?: DataAwsccRdsDbInstanceEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRdsDbInstanceEndpointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRdsDbInstanceEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRdsDbInstanceEndpoint | undefined) {
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

  // hosted_zone_id - computed: true, optional: false, required: false
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }
}
export interface DataAwsccRdsDbInstanceListenerEndpoint {
}

export function dataAwsccRdsDbInstanceListenerEndpointToTerraform(struct?: DataAwsccRdsDbInstanceListenerEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRdsDbInstanceListenerEndpointToHclTerraform(struct?: DataAwsccRdsDbInstanceListenerEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRdsDbInstanceListenerEndpointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRdsDbInstanceListenerEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRdsDbInstanceListenerEndpoint | undefined) {
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

  // hosted_zone_id - computed: true, optional: false, required: false
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }
}
export interface DataAwsccRdsDbInstanceMasterUserSecret {
}

export function dataAwsccRdsDbInstanceMasterUserSecretToTerraform(struct?: DataAwsccRdsDbInstanceMasterUserSecret): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRdsDbInstanceMasterUserSecretToHclTerraform(struct?: DataAwsccRdsDbInstanceMasterUserSecret): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRdsDbInstanceMasterUserSecretOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRdsDbInstanceMasterUserSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRdsDbInstanceMasterUserSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
}
export interface DataAwsccRdsDbInstanceProcessorFeatures {
}

export function dataAwsccRdsDbInstanceProcessorFeaturesToTerraform(struct?: DataAwsccRdsDbInstanceProcessorFeatures): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRdsDbInstanceProcessorFeaturesToHclTerraform(struct?: DataAwsccRdsDbInstanceProcessorFeatures): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRdsDbInstanceProcessorFeaturesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccRdsDbInstanceProcessorFeatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRdsDbInstanceProcessorFeatures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccRdsDbInstanceProcessorFeaturesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccRdsDbInstanceProcessorFeaturesOutputReference {
    return new DataAwsccRdsDbInstanceProcessorFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccRdsDbInstanceStatusInfos {
}

export function dataAwsccRdsDbInstanceStatusInfosToTerraform(struct?: DataAwsccRdsDbInstanceStatusInfos): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRdsDbInstanceStatusInfosToHclTerraform(struct?: DataAwsccRdsDbInstanceStatusInfos): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRdsDbInstanceStatusInfosOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccRdsDbInstanceStatusInfos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRdsDbInstanceStatusInfos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // normal - computed: true, optional: false, required: false
  public get normal() {
    return this.getBooleanAttribute('normal');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_type - computed: true, optional: false, required: false
  public get statusType() {
    return this.getStringAttribute('status_type');
  }
}

export class DataAwsccRdsDbInstanceStatusInfosList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccRdsDbInstanceStatusInfosOutputReference {
    return new DataAwsccRdsDbInstanceStatusInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccRdsDbInstanceTags {
}

export function dataAwsccRdsDbInstanceTagsToTerraform(struct?: DataAwsccRdsDbInstanceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRdsDbInstanceTagsToHclTerraform(struct?: DataAwsccRdsDbInstanceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRdsDbInstanceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccRdsDbInstanceTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRdsDbInstanceTags | undefined) {
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

export class DataAwsccRdsDbInstanceTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccRdsDbInstanceTagsOutputReference {
    return new DataAwsccRdsDbInstanceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/rds_db_instance awscc_rds_db_instance}
*/
export class DataAwsccRdsDbInstance extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_rds_db_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccRdsDbInstance resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccRdsDbInstance to import
  * @param importFromId The id of the existing DataAwsccRdsDbInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/rds_db_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccRdsDbInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_rds_db_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/rds_db_instance awscc_rds_db_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccRdsDbInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccRdsDbInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_rds_db_instance',
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

  // additional_storage_volumes - computed: true, optional: false, required: false
  private _additionalStorageVolumes = new DataAwsccRdsDbInstanceAdditionalStorageVolumesList(this, "additional_storage_volumes", false);
  public get additionalStorageVolumes() {
    return this._additionalStorageVolumes;
  }

  // allocated_storage - computed: true, optional: false, required: false
  public get allocatedStorage() {
    return this.getStringAttribute('allocated_storage');
  }

  // allow_major_version_upgrade - computed: true, optional: false, required: false
  public get allowMajorVersionUpgrade() {
    return this.getBooleanAttribute('allow_major_version_upgrade');
  }

  // apply_immediately - computed: true, optional: false, required: false
  public get applyImmediately() {
    return this.getBooleanAttribute('apply_immediately');
  }

  // associated_roles - computed: true, optional: false, required: false
  private _associatedRoles = new DataAwsccRdsDbInstanceAssociatedRolesList(this, "associated_roles", false);
  public get associatedRoles() {
    return this._associatedRoles;
  }

  // auto_minor_version_upgrade - computed: true, optional: false, required: false
  public get autoMinorVersionUpgrade() {
    return this.getBooleanAttribute('auto_minor_version_upgrade');
  }

  // automatic_backup_replication_kms_key_id - computed: true, optional: false, required: false
  public get automaticBackupReplicationKmsKeyId() {
    return this.getStringAttribute('automatic_backup_replication_kms_key_id');
  }

  // automatic_backup_replication_region - computed: true, optional: false, required: false
  public get automaticBackupReplicationRegion() {
    return this.getStringAttribute('automatic_backup_replication_region');
  }

  // automatic_backup_replication_retention_period - computed: true, optional: false, required: false
  public get automaticBackupReplicationRetentionPeriod() {
    return this.getNumberAttribute('automatic_backup_replication_retention_period');
  }

  // automatic_restart_time - computed: true, optional: false, required: false
  public get automaticRestartTime() {
    return this.getStringAttribute('automatic_restart_time');
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // backup_retention_period - computed: true, optional: false, required: false
  public get backupRetentionPeriod() {
    return this.getNumberAttribute('backup_retention_period');
  }

  // backup_target - computed: true, optional: false, required: false
  public get backupTarget() {
    return this.getStringAttribute('backup_target');
  }

  // ca_certificate_identifier - computed: true, optional: false, required: false
  public get caCertificateIdentifier() {
    return this.getStringAttribute('ca_certificate_identifier');
  }

  // certificate_details - computed: true, optional: false, required: false
  private _certificateDetails = new DataAwsccRdsDbInstanceCertificateDetailsOutputReference(this, "certificate_details");
  public get certificateDetails() {
    return this._certificateDetails;
  }

  // certificate_rotation_restart - computed: true, optional: false, required: false
  public get certificateRotationRestart() {
    return this.getBooleanAttribute('certificate_rotation_restart');
  }

  // character_set_name - computed: true, optional: false, required: false
  public get characterSetName() {
    return this.getStringAttribute('character_set_name');
  }

  // copy_tags_to_snapshot - computed: true, optional: false, required: false
  public get copyTagsToSnapshot() {
    return this.getBooleanAttribute('copy_tags_to_snapshot');
  }

  // custom_iam_instance_profile - computed: true, optional: false, required: false
  public get customIamInstanceProfile() {
    return this.getStringAttribute('custom_iam_instance_profile');
  }

  // database_insights_mode - computed: true, optional: false, required: false
  public get databaseInsightsMode() {
    return this.getStringAttribute('database_insights_mode');
  }

  // db_cluster_identifier - computed: true, optional: false, required: false
  public get dbClusterIdentifier() {
    return this.getStringAttribute('db_cluster_identifier');
  }

  // db_cluster_snapshot_identifier - computed: true, optional: false, required: false
  public get dbClusterSnapshotIdentifier() {
    return this.getStringAttribute('db_cluster_snapshot_identifier');
  }

  // db_instance_arn - computed: true, optional: false, required: false
  public get dbInstanceArn() {
    return this.getStringAttribute('db_instance_arn');
  }

  // db_instance_class - computed: true, optional: false, required: false
  public get dbInstanceClass() {
    return this.getStringAttribute('db_instance_class');
  }

  // db_instance_identifier - computed: true, optional: false, required: false
  public get dbInstanceIdentifier() {
    return this.getStringAttribute('db_instance_identifier');
  }

  // db_instance_status - computed: true, optional: false, required: false
  public get dbInstanceStatus() {
    return this.getStringAttribute('db_instance_status');
  }

  // db_name - computed: true, optional: false, required: false
  public get dbName() {
    return this.getStringAttribute('db_name');
  }

  // db_parameter_group_name - computed: true, optional: false, required: false
  public get dbParameterGroupName() {
    return this.getStringAttribute('db_parameter_group_name');
  }

  // db_security_groups - computed: true, optional: false, required: false
  public get dbSecurityGroups() {
    return this.getListAttribute('db_security_groups');
  }

  // db_snapshot_identifier - computed: true, optional: false, required: false
  public get dbSnapshotIdentifier() {
    return this.getStringAttribute('db_snapshot_identifier');
  }

  // db_subnet_group_name - computed: true, optional: false, required: false
  public get dbSubnetGroupName() {
    return this.getStringAttribute('db_subnet_group_name');
  }

  // db_system_id - computed: true, optional: false, required: false
  public get dbSystemId() {
    return this.getStringAttribute('db_system_id');
  }

  // dbi_resource_id - computed: true, optional: false, required: false
  public get dbiResourceId() {
    return this.getStringAttribute('dbi_resource_id');
  }

  // dedicated_log_volume - computed: true, optional: false, required: false
  public get dedicatedLogVolume() {
    return this.getBooleanAttribute('dedicated_log_volume');
  }

  // delete_automated_backups - computed: true, optional: false, required: false
  public get deleteAutomatedBackups() {
    return this.getBooleanAttribute('delete_automated_backups');
  }

  // deletion_protection - computed: true, optional: false, required: false
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // domain_auth_secret_arn - computed: true, optional: false, required: false
  public get domainAuthSecretArn() {
    return this.getStringAttribute('domain_auth_secret_arn');
  }

  // domain_dns_ips - computed: true, optional: false, required: false
  public get domainDnsIps() {
    return this.getListAttribute('domain_dns_ips');
  }

  // domain_fqdn - computed: true, optional: false, required: false
  public get domainFqdn() {
    return this.getStringAttribute('domain_fqdn');
  }

  // domain_iam_role_name - computed: true, optional: false, required: false
  public get domainIamRoleName() {
    return this.getStringAttribute('domain_iam_role_name');
  }

  // domain_ou - computed: true, optional: false, required: false
  public get domainOu() {
    return this.getStringAttribute('domain_ou');
  }

  // enable_cloudwatch_logs_exports - computed: true, optional: false, required: false
  public get enableCloudwatchLogsExports() {
    return this.getListAttribute('enable_cloudwatch_logs_exports');
  }

  // enable_iam_database_authentication - computed: true, optional: false, required: false
  public get enableIamDatabaseAuthentication() {
    return this.getBooleanAttribute('enable_iam_database_authentication');
  }

  // enable_performance_insights - computed: true, optional: false, required: false
  public get enablePerformanceInsights() {
    return this.getBooleanAttribute('enable_performance_insights');
  }

  // endpoint - computed: true, optional: false, required: false
  private _endpoint = new DataAwsccRdsDbInstanceEndpointOutputReference(this, "endpoint");
  public get endpoint() {
    return this._endpoint;
  }

  // engine - computed: true, optional: false, required: false
  public get engine() {
    return this.getStringAttribute('engine');
  }

  // engine_lifecycle_support - computed: true, optional: false, required: false
  public get engineLifecycleSupport() {
    return this.getStringAttribute('engine_lifecycle_support');
  }

  // engine_version - computed: true, optional: false, required: false
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
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

  // instance_create_time - computed: true, optional: false, required: false
  public get instanceCreateTime() {
    return this.getStringAttribute('instance_create_time');
  }

  // iops - computed: true, optional: false, required: false
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // is_storage_config_upgrade_available - computed: true, optional: false, required: false
  public get isStorageConfigUpgradeAvailable() {
    return this.getBooleanAttribute('is_storage_config_upgrade_available');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // latest_restorable_time - computed: true, optional: false, required: false
  public get latestRestorableTime() {
    return this.getStringAttribute('latest_restorable_time');
  }

  // license_model - computed: true, optional: false, required: false
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }

  // listener_endpoint - computed: true, optional: false, required: false
  private _listenerEndpoint = new DataAwsccRdsDbInstanceListenerEndpointOutputReference(this, "listener_endpoint");
  public get listenerEndpoint() {
    return this._listenerEndpoint;
  }

  // manage_master_user_password - computed: true, optional: false, required: false
  public get manageMasterUserPassword() {
    return this.getBooleanAttribute('manage_master_user_password');
  }

  // master_user_authentication_type - computed: true, optional: false, required: false
  public get masterUserAuthenticationType() {
    return this.getStringAttribute('master_user_authentication_type');
  }

  // master_user_password - computed: true, optional: false, required: false
  public get masterUserPassword() {
    return this.getStringAttribute('master_user_password');
  }

  // master_user_secret - computed: true, optional: false, required: false
  private _masterUserSecret = new DataAwsccRdsDbInstanceMasterUserSecretOutputReference(this, "master_user_secret");
  public get masterUserSecret() {
    return this._masterUserSecret;
  }

  // master_username - computed: true, optional: false, required: false
  public get masterUsername() {
    return this.getStringAttribute('master_username');
  }

  // max_allocated_storage - computed: true, optional: false, required: false
  public get maxAllocatedStorage() {
    return this.getNumberAttribute('max_allocated_storage');
  }

  // monitoring_interval - computed: true, optional: false, required: false
  public get monitoringInterval() {
    return this.getNumberAttribute('monitoring_interval');
  }

  // monitoring_role_arn - computed: true, optional: false, required: false
  public get monitoringRoleArn() {
    return this.getStringAttribute('monitoring_role_arn');
  }

  // multi_az - computed: true, optional: false, required: false
  public get multiAz() {
    return this.getBooleanAttribute('multi_az');
  }

  // nchar_character_set_name - computed: true, optional: false, required: false
  public get ncharCharacterSetName() {
    return this.getStringAttribute('nchar_character_set_name');
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // option_group_name - computed: true, optional: false, required: false
  public get optionGroupName() {
    return this.getStringAttribute('option_group_name');
  }

  // percent_progress - computed: true, optional: false, required: false
  public get percentProgress() {
    return this.getStringAttribute('percent_progress');
  }

  // performance_insights_kms_key_id - computed: true, optional: false, required: false
  public get performanceInsightsKmsKeyId() {
    return this.getStringAttribute('performance_insights_kms_key_id');
  }

  // performance_insights_retention_period - computed: true, optional: false, required: false
  public get performanceInsightsRetentionPeriod() {
    return this.getNumberAttribute('performance_insights_retention_period');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // preferred_backup_window - computed: true, optional: false, required: false
  public get preferredBackupWindow() {
    return this.getStringAttribute('preferred_backup_window');
  }

  // preferred_maintenance_window - computed: true, optional: false, required: false
  public get preferredMaintenanceWindow() {
    return this.getStringAttribute('preferred_maintenance_window');
  }

  // processor_features - computed: true, optional: false, required: false
  private _processorFeatures = new DataAwsccRdsDbInstanceProcessorFeaturesList(this, "processor_features", false);
  public get processorFeatures() {
    return this._processorFeatures;
  }

  // promotion_tier - computed: true, optional: false, required: false
  public get promotionTier() {
    return this.getNumberAttribute('promotion_tier');
  }

  // publicly_accessible - computed: true, optional: false, required: false
  public get publiclyAccessible() {
    return this.getBooleanAttribute('publicly_accessible');
  }

  // read_replica_db_cluster_identifiers - computed: true, optional: false, required: false
  public get readReplicaDbClusterIdentifiers() {
    return this.getListAttribute('read_replica_db_cluster_identifiers');
  }

  // read_replica_db_instance_identifiers - computed: true, optional: false, required: false
  public get readReplicaDbInstanceIdentifiers() {
    return this.getListAttribute('read_replica_db_instance_identifiers');
  }

  // replica_mode - computed: true, optional: false, required: false
  public get replicaMode() {
    return this.getStringAttribute('replica_mode');
  }

  // restore_time - computed: true, optional: false, required: false
  public get restoreTime() {
    return this.getStringAttribute('restore_time');
  }

  // resume_full_automation_mode_time - computed: true, optional: false, required: false
  public get resumeFullAutomationModeTime() {
    return this.getStringAttribute('resume_full_automation_mode_time');
  }

  // secondary_availability_zone - computed: true, optional: false, required: false
  public get secondaryAvailabilityZone() {
    return this.getStringAttribute('secondary_availability_zone');
  }

  // source_db_cluster_identifier - computed: true, optional: false, required: false
  public get sourceDbClusterIdentifier() {
    return this.getStringAttribute('source_db_cluster_identifier');
  }

  // source_db_instance_automated_backups_arn - computed: true, optional: false, required: false
  public get sourceDbInstanceAutomatedBackupsArn() {
    return this.getStringAttribute('source_db_instance_automated_backups_arn');
  }

  // source_db_instance_identifier - computed: true, optional: false, required: false
  public get sourceDbInstanceIdentifier() {
    return this.getStringAttribute('source_db_instance_identifier');
  }

  // source_dbi_resource_id - computed: true, optional: false, required: false
  public get sourceDbiResourceId() {
    return this.getStringAttribute('source_dbi_resource_id');
  }

  // source_region - computed: true, optional: false, required: false
  public get sourceRegion() {
    return this.getStringAttribute('source_region');
  }

  // status_infos - computed: true, optional: false, required: false
  private _statusInfos = new DataAwsccRdsDbInstanceStatusInfosList(this, "status_infos", false);
  public get statusInfos() {
    return this._statusInfos;
  }

  // storage_encrypted - computed: true, optional: false, required: false
  public get storageEncrypted() {
    return this.getBooleanAttribute('storage_encrypted');
  }

  // storage_throughput - computed: true, optional: false, required: false
  public get storageThroughput() {
    return this.getNumberAttribute('storage_throughput');
  }

  // storage_type - computed: true, optional: false, required: false
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccRdsDbInstanceTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // tde_credential_arn - computed: true, optional: false, required: false
  public get tdeCredentialArn() {
    return this.getStringAttribute('tde_credential_arn');
  }

  // tde_credential_password - computed: true, optional: false, required: false
  public get tdeCredentialPassword() {
    return this.getStringAttribute('tde_credential_password');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }

  // use_default_processor_features - computed: true, optional: false, required: false
  public get useDefaultProcessorFeatures() {
    return this.getBooleanAttribute('use_default_processor_features');
  }

  // use_latest_restorable_time - computed: true, optional: false, required: false
  public get useLatestRestorableTime() {
    return this.getBooleanAttribute('use_latest_restorable_time');
  }

  // vpc_security_groups - computed: true, optional: false, required: false
  public get vpcSecurityGroups() {
    return this.getListAttribute('vpc_security_groups');
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
