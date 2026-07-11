// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/s3express_directory_bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccS3ExpressDirectoryBucketConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/s3express_directory_bucket#id DataAwsccS3ExpressDirectoryBucket#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault {
}

export function dataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultToTerraform(struct?: DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultToHclTerraform(struct?: DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_master_key_id - computed: true, optional: false, required: false
  public get kmsMasterKeyId() {
    return this.getStringAttribute('kms_master_key_id');
  }

  // sse_algorithm - computed: true, optional: false, required: false
  public get sseAlgorithm() {
    return this.getStringAttribute('sse_algorithm');
  }
}
export interface DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration {
}

export function dataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationToTerraform(struct?: DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationToHclTerraform(struct?: DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_key_enabled - computed: true, optional: false, required: false
  public get bucketKeyEnabled() {
    return this.getBooleanAttribute('bucket_key_enabled');
  }

  // server_side_encryption_by_default - computed: true, optional: false, required: false
  private _serverSideEncryptionByDefault = new DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference(this, "server_side_encryption_by_default");
  public get serverSideEncryptionByDefault() {
    return this._serverSideEncryptionByDefault;
  }
}

export class DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference {
    return new DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccS3ExpressDirectoryBucketBucketEncryption {
}

export function dataAwsccS3ExpressDirectoryBucketBucketEncryptionToTerraform(struct?: DataAwsccS3ExpressDirectoryBucketBucketEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3ExpressDirectoryBucketBucketEncryptionToHclTerraform(struct?: DataAwsccS3ExpressDirectoryBucketBucketEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3ExpressDirectoryBucketBucketEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3ExpressDirectoryBucketBucketEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // server_side_encryption_configuration - computed: true, optional: false, required: false
  private _serverSideEncryptionConfiguration = new DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList(this, "server_side_encryption_configuration", false);
  public get serverSideEncryptionConfiguration() {
    return this._serverSideEncryptionConfiguration;
  }
}
export interface DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestination {
}

export function dataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationToTerraform(struct?: DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationToHclTerraform(struct?: DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_account_id - computed: true, optional: false, required: false
  public get bucketAccountId() {
    return this.getStringAttribute('bucket_account_id');
  }

  // bucket_arn - computed: true, optional: false, required: false
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}
export interface DataAwsccS3ExpressDirectoryBucketInventoryConfigurations {
}

export function dataAwsccS3ExpressDirectoryBucketInventoryConfigurationsToTerraform(struct?: DataAwsccS3ExpressDirectoryBucketInventoryConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3ExpressDirectoryBucketInventoryConfigurationsToHclTerraform(struct?: DataAwsccS3ExpressDirectoryBucketInventoryConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3ExpressDirectoryBucketInventoryConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3ExpressDirectoryBucketInventoryConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination - computed: true, optional: false, required: false
  private _destination = new DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // included_object_versions - computed: true, optional: false, required: false
  public get includedObjectVersions() {
    return this.getStringAttribute('included_object_versions');
  }

  // optional_fields - computed: true, optional: false, required: false
  public get optionalFields() {
    return this.getListAttribute('optional_fields');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // schedule_frequency - computed: true, optional: false, required: false
  public get scheduleFrequency() {
    return this.getStringAttribute('schedule_frequency');
  }
}

export class DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference {
    return new DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload {
}

export function dataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadToTerraform(struct?: DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadToHclTerraform(struct?: DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // days_after_initiation - computed: true, optional: false, required: false
  public get daysAfterInitiation() {
    return this.getNumberAttribute('days_after_initiation');
  }
}
export interface DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRules {
}

export function dataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesToTerraform(struct?: DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesToHclTerraform(struct?: DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // abort_incomplete_multipart_upload - computed: true, optional: false, required: false
  private _abortIncompleteMultipartUpload = new DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference(this, "abort_incomplete_multipart_upload");
  public get abortIncompleteMultipartUpload() {
    return this._abortIncompleteMultipartUpload;
  }

  // expiration_in_days - computed: true, optional: false, required: false
  public get expirationInDays() {
    return this.getNumberAttribute('expiration_in_days');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // object_size_greater_than - computed: true, optional: false, required: false
  public get objectSizeGreaterThan() {
    return this.getStringAttribute('object_size_greater_than');
  }

  // object_size_less_than - computed: true, optional: false, required: false
  public get objectSizeLessThan() {
    return this.getStringAttribute('object_size_less_than');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference {
    return new DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccS3ExpressDirectoryBucketLifecycleConfiguration {
}

export function dataAwsccS3ExpressDirectoryBucketLifecycleConfigurationToTerraform(struct?: DataAwsccS3ExpressDirectoryBucketLifecycleConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3ExpressDirectoryBucketLifecycleConfigurationToHclTerraform(struct?: DataAwsccS3ExpressDirectoryBucketLifecycleConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3ExpressDirectoryBucketLifecycleConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3ExpressDirectoryBucketLifecycleConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}
export interface DataAwsccS3ExpressDirectoryBucketMetricsConfigurations {
}

export function dataAwsccS3ExpressDirectoryBucketMetricsConfigurationsToTerraform(struct?: DataAwsccS3ExpressDirectoryBucketMetricsConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3ExpressDirectoryBucketMetricsConfigurationsToHclTerraform(struct?: DataAwsccS3ExpressDirectoryBucketMetricsConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3ExpressDirectoryBucketMetricsConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3ExpressDirectoryBucketMetricsConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_point_arn - computed: true, optional: false, required: false
  public get accessPointArn() {
    return this.getStringAttribute('access_point_arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}

export class DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference {
    return new DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccS3ExpressDirectoryBucketTags {
}

export function dataAwsccS3ExpressDirectoryBucketTagsToTerraform(struct?: DataAwsccS3ExpressDirectoryBucketTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3ExpressDirectoryBucketTagsToHclTerraform(struct?: DataAwsccS3ExpressDirectoryBucketTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3ExpressDirectoryBucketTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3ExpressDirectoryBucketTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3ExpressDirectoryBucketTags | undefined) {
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

export class DataAwsccS3ExpressDirectoryBucketTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3ExpressDirectoryBucketTagsOutputReference {
    return new DataAwsccS3ExpressDirectoryBucketTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/s3express_directory_bucket awscc_s3express_directory_bucket}
*/
export class DataAwsccS3ExpressDirectoryBucket extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_s3express_directory_bucket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccS3ExpressDirectoryBucket resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccS3ExpressDirectoryBucket to import
  * @param importFromId The id of the existing DataAwsccS3ExpressDirectoryBucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/s3express_directory_bucket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccS3ExpressDirectoryBucket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_s3express_directory_bucket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/s3express_directory_bucket awscc_s3express_directory_bucket} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccS3ExpressDirectoryBucketConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccS3ExpressDirectoryBucketConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_s3express_directory_bucket',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zone_name - computed: true, optional: false, required: false
  public get availabilityZoneName() {
    return this.getStringAttribute('availability_zone_name');
  }

  // bucket_encryption - computed: true, optional: false, required: false
  private _bucketEncryption = new DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference(this, "bucket_encryption");
  public get bucketEncryption() {
    return this._bucketEncryption;
  }

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // data_redundancy - computed: true, optional: false, required: false
  public get dataRedundancy() {
    return this.getStringAttribute('data_redundancy');
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

  // inventory_configurations - computed: true, optional: false, required: false
  private _inventoryConfigurations = new DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList(this, "inventory_configurations", false);
  public get inventoryConfigurations() {
    return this._inventoryConfigurations;
  }

  // lifecycle_configuration - computed: true, optional: false, required: false
  private _lifecycleConfiguration = new DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference(this, "lifecycle_configuration");
  public get lifecycleConfiguration() {
    return this._lifecycleConfiguration;
  }

  // location_name - computed: true, optional: false, required: false
  public get locationName() {
    return this.getStringAttribute('location_name');
  }

  // metrics_configurations - computed: true, optional: false, required: false
  private _metricsConfigurations = new DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList(this, "metrics_configurations", false);
  public get metricsConfigurations() {
    return this._metricsConfigurations;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccS3ExpressDirectoryBucketTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
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
