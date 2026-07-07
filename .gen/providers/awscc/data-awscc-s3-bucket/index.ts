// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/s3_bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccS3BucketConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/s3_bucket#id DataAwsccS3Bucket#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccS3BucketAccelerateConfiguration {
}

export function dataAwsccS3BucketAccelerateConfigurationToTerraform(struct?: DataAwsccS3BucketAccelerateConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketAccelerateConfigurationToHclTerraform(struct?: DataAwsccS3BucketAccelerateConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketAccelerateConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketAccelerateConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketAccelerateConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acceleration_status - computed: true, optional: false, required: false
  public get accelerationStatus() {
    return this.getStringAttribute('acceleration_status');
  }
}
export interface DataAwsccS3BucketAnalyticsConfigurationsStorageClassAnalysisDataExportDestination {
}

export function dataAwsccS3BucketAnalyticsConfigurationsStorageClassAnalysisDataExportDestinationToTerraform(struct?: DataAwsccS3BucketAnalyticsConfigurationsStorageClassAnalysisDataExportDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketAnalyticsConfigurationsStorageClassAnalysisDataExportDestinationToHclTerraform(struct?: DataAwsccS3BucketAnalyticsConfigurationsStorageClassAnalysisDataExportDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketAnalyticsConfigurationsStorageClassAnalysisDataExportDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketAnalyticsConfigurationsStorageClassAnalysisDataExportDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketAnalyticsConfigurationsStorageClassAnalysisDataExportDestination | undefined) {
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
export interface DataAwsccS3BucketAnalyticsConfigurationsStorageClassAnalysisDataExport {
}

export function dataAwsccS3BucketAnalyticsConfigurationsStorageClassAnalysisDataExportToTerraform(struct?: DataAwsccS3BucketAnalyticsConfigurationsStorageClassAnalysisDataExport): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketAnalyticsConfigurationsStorageClassAnalysisDataExportToHclTerraform(struct?: DataAwsccS3BucketAnalyticsConfigurationsStorageClassAnalysisDataExport): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketAnalyticsConfigurationsStorageClassAnalysisDataExportOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketAnalyticsConfigurationsStorageClassAnalysisDataExport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketAnalyticsConfigurationsStorageClassAnalysisDataExport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination - computed: true, optional: false, required: false
  private _destination = new DataAwsccS3BucketAnalyticsConfigurationsStorageClassAnalysisDataExportDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }

  // output_schema_version - computed: true, optional: false, required: false
  public get outputSchemaVersion() {
    return this.getStringAttribute('output_schema_version');
  }
}
export interface DataAwsccS3BucketAnalyticsConfigurationsStorageClassAnalysis {
}

export function dataAwsccS3BucketAnalyticsConfigurationsStorageClassAnalysisToTerraform(struct?: DataAwsccS3BucketAnalyticsConfigurationsStorageClassAnalysis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketAnalyticsConfigurationsStorageClassAnalysisToHclTerraform(struct?: DataAwsccS3BucketAnalyticsConfigurationsStorageClassAnalysis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketAnalyticsConfigurationsStorageClassAnalysisOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketAnalyticsConfigurationsStorageClassAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketAnalyticsConfigurationsStorageClassAnalysis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_export - computed: true, optional: false, required: false
  private _dataExport = new DataAwsccS3BucketAnalyticsConfigurationsStorageClassAnalysisDataExportOutputReference(this, "data_export");
  public get dataExport() {
    return this._dataExport;
  }
}
export interface DataAwsccS3BucketAnalyticsConfigurationsTagFilters {
}

export function dataAwsccS3BucketAnalyticsConfigurationsTagFiltersToTerraform(struct?: DataAwsccS3BucketAnalyticsConfigurationsTagFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketAnalyticsConfigurationsTagFiltersToHclTerraform(struct?: DataAwsccS3BucketAnalyticsConfigurationsTagFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketAnalyticsConfigurationsTagFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3BucketAnalyticsConfigurationsTagFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketAnalyticsConfigurationsTagFilters | undefined) {
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

export class DataAwsccS3BucketAnalyticsConfigurationsTagFiltersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3BucketAnalyticsConfigurationsTagFiltersOutputReference {
    return new DataAwsccS3BucketAnalyticsConfigurationsTagFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccS3BucketAnalyticsConfigurations {
}

export function dataAwsccS3BucketAnalyticsConfigurationsToTerraform(struct?: DataAwsccS3BucketAnalyticsConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketAnalyticsConfigurationsToHclTerraform(struct?: DataAwsccS3BucketAnalyticsConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketAnalyticsConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3BucketAnalyticsConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketAnalyticsConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // storage_class_analysis - computed: true, optional: false, required: false
  private _storageClassAnalysis = new DataAwsccS3BucketAnalyticsConfigurationsStorageClassAnalysisOutputReference(this, "storage_class_analysis");
  public get storageClassAnalysis() {
    return this._storageClassAnalysis;
  }

  // tag_filters - computed: true, optional: false, required: false
  private _tagFilters = new DataAwsccS3BucketAnalyticsConfigurationsTagFiltersList(this, "tag_filters", false);
  public get tagFilters() {
    return this._tagFilters;
  }
}

export class DataAwsccS3BucketAnalyticsConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3BucketAnalyticsConfigurationsOutputReference {
    return new DataAwsccS3BucketAnalyticsConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccS3BucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault {
}

export function dataAwsccS3BucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultToTerraform(struct?: DataAwsccS3BucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultToHclTerraform(struct?: DataAwsccS3BucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault | undefined) {
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
export interface DataAwsccS3BucketBucketEncryptionServerSideEncryptionConfiguration {
}

export function dataAwsccS3BucketBucketEncryptionServerSideEncryptionConfigurationToTerraform(struct?: DataAwsccS3BucketBucketEncryptionServerSideEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketBucketEncryptionServerSideEncryptionConfigurationToHclTerraform(struct?: DataAwsccS3BucketBucketEncryptionServerSideEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketBucketEncryptionServerSideEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3BucketBucketEncryptionServerSideEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketBucketEncryptionServerSideEncryptionConfiguration | undefined) {
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
  private _serverSideEncryptionByDefault = new DataAwsccS3BucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference(this, "server_side_encryption_by_default");
  public get serverSideEncryptionByDefault() {
    return this._serverSideEncryptionByDefault;
  }
}

export class DataAwsccS3BucketBucketEncryptionServerSideEncryptionConfigurationList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3BucketBucketEncryptionServerSideEncryptionConfigurationOutputReference {
    return new DataAwsccS3BucketBucketEncryptionServerSideEncryptionConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccS3BucketBucketEncryption {
}

export function dataAwsccS3BucketBucketEncryptionToTerraform(struct?: DataAwsccS3BucketBucketEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketBucketEncryptionToHclTerraform(struct?: DataAwsccS3BucketBucketEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketBucketEncryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketBucketEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketBucketEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // server_side_encryption_configuration - computed: true, optional: false, required: false
  private _serverSideEncryptionConfiguration = new DataAwsccS3BucketBucketEncryptionServerSideEncryptionConfigurationList(this, "server_side_encryption_configuration", false);
  public get serverSideEncryptionConfiguration() {
    return this._serverSideEncryptionConfiguration;
  }
}
export interface DataAwsccS3BucketCorsConfigurationCorsRules {
}

export function dataAwsccS3BucketCorsConfigurationCorsRulesToTerraform(struct?: DataAwsccS3BucketCorsConfigurationCorsRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketCorsConfigurationCorsRulesToHclTerraform(struct?: DataAwsccS3BucketCorsConfigurationCorsRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketCorsConfigurationCorsRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3BucketCorsConfigurationCorsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketCorsConfigurationCorsRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_headers - computed: true, optional: false, required: false
  public get allowedHeaders() {
    return this.getListAttribute('allowed_headers');
  }

  // allowed_methods - computed: true, optional: false, required: false
  public get allowedMethods() {
    return this.getListAttribute('allowed_methods');
  }

  // allowed_origins - computed: true, optional: false, required: false
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }

  // exposed_headers - computed: true, optional: false, required: false
  public get exposedHeaders() {
    return this.getListAttribute('exposed_headers');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_age - computed: true, optional: false, required: false
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
}

export class DataAwsccS3BucketCorsConfigurationCorsRulesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3BucketCorsConfigurationCorsRulesOutputReference {
    return new DataAwsccS3BucketCorsConfigurationCorsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccS3BucketCorsConfiguration {
}

export function dataAwsccS3BucketCorsConfigurationToTerraform(struct?: DataAwsccS3BucketCorsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketCorsConfigurationToHclTerraform(struct?: DataAwsccS3BucketCorsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketCorsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketCorsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketCorsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cors_rules - computed: true, optional: false, required: false
  private _corsRules = new DataAwsccS3BucketCorsConfigurationCorsRulesList(this, "cors_rules", false);
  public get corsRules() {
    return this._corsRules;
  }
}
export interface DataAwsccS3BucketIntelligentTieringConfigurationsTagFilters {
}

export function dataAwsccS3BucketIntelligentTieringConfigurationsTagFiltersToTerraform(struct?: DataAwsccS3BucketIntelligentTieringConfigurationsTagFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketIntelligentTieringConfigurationsTagFiltersToHclTerraform(struct?: DataAwsccS3BucketIntelligentTieringConfigurationsTagFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketIntelligentTieringConfigurationsTagFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3BucketIntelligentTieringConfigurationsTagFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketIntelligentTieringConfigurationsTagFilters | undefined) {
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

export class DataAwsccS3BucketIntelligentTieringConfigurationsTagFiltersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3BucketIntelligentTieringConfigurationsTagFiltersOutputReference {
    return new DataAwsccS3BucketIntelligentTieringConfigurationsTagFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccS3BucketIntelligentTieringConfigurationsTierings {
}

export function dataAwsccS3BucketIntelligentTieringConfigurationsTieringsToTerraform(struct?: DataAwsccS3BucketIntelligentTieringConfigurationsTierings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketIntelligentTieringConfigurationsTieringsToHclTerraform(struct?: DataAwsccS3BucketIntelligentTieringConfigurationsTierings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketIntelligentTieringConfigurationsTieringsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3BucketIntelligentTieringConfigurationsTierings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketIntelligentTieringConfigurationsTierings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_tier - computed: true, optional: false, required: false
  public get accessTier() {
    return this.getStringAttribute('access_tier');
  }

  // days - computed: true, optional: false, required: false
  public get days() {
    return this.getNumberAttribute('days');
  }
}

export class DataAwsccS3BucketIntelligentTieringConfigurationsTieringsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3BucketIntelligentTieringConfigurationsTieringsOutputReference {
    return new DataAwsccS3BucketIntelligentTieringConfigurationsTieringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccS3BucketIntelligentTieringConfigurations {
}

export function dataAwsccS3BucketIntelligentTieringConfigurationsToTerraform(struct?: DataAwsccS3BucketIntelligentTieringConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketIntelligentTieringConfigurationsToHclTerraform(struct?: DataAwsccS3BucketIntelligentTieringConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketIntelligentTieringConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3BucketIntelligentTieringConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketIntelligentTieringConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tag_filters - computed: true, optional: false, required: false
  private _tagFilters = new DataAwsccS3BucketIntelligentTieringConfigurationsTagFiltersList(this, "tag_filters", false);
  public get tagFilters() {
    return this._tagFilters;
  }

  // tierings - computed: true, optional: false, required: false
  private _tierings = new DataAwsccS3BucketIntelligentTieringConfigurationsTieringsList(this, "tierings", false);
  public get tierings() {
    return this._tierings;
  }
}

export class DataAwsccS3BucketIntelligentTieringConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3BucketIntelligentTieringConfigurationsOutputReference {
    return new DataAwsccS3BucketIntelligentTieringConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccS3BucketInventoryConfigurationsDestination {
}

export function dataAwsccS3BucketInventoryConfigurationsDestinationToTerraform(struct?: DataAwsccS3BucketInventoryConfigurationsDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketInventoryConfigurationsDestinationToHclTerraform(struct?: DataAwsccS3BucketInventoryConfigurationsDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketInventoryConfigurationsDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketInventoryConfigurationsDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketInventoryConfigurationsDestination | undefined) {
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
export interface DataAwsccS3BucketInventoryConfigurations {
}

export function dataAwsccS3BucketInventoryConfigurationsToTerraform(struct?: DataAwsccS3BucketInventoryConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketInventoryConfigurationsToHclTerraform(struct?: DataAwsccS3BucketInventoryConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketInventoryConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3BucketInventoryConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketInventoryConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination - computed: true, optional: false, required: false
  private _destination = new DataAwsccS3BucketInventoryConfigurationsDestinationOutputReference(this, "destination");
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

export class DataAwsccS3BucketInventoryConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3BucketInventoryConfigurationsOutputReference {
    return new DataAwsccS3BucketInventoryConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccS3BucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload {
}

export function dataAwsccS3BucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadToTerraform(struct?: DataAwsccS3BucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadToHclTerraform(struct?: DataAwsccS3BucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload | undefined) {
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
export interface DataAwsccS3BucketLifecycleConfigurationRulesNoncurrentVersionExpiration {
}

export function dataAwsccS3BucketLifecycleConfigurationRulesNoncurrentVersionExpirationToTerraform(struct?: DataAwsccS3BucketLifecycleConfigurationRulesNoncurrentVersionExpiration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketLifecycleConfigurationRulesNoncurrentVersionExpirationToHclTerraform(struct?: DataAwsccS3BucketLifecycleConfigurationRulesNoncurrentVersionExpiration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketLifecycleConfigurationRulesNoncurrentVersionExpirationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketLifecycleConfigurationRulesNoncurrentVersionExpiration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketLifecycleConfigurationRulesNoncurrentVersionExpiration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // newer_noncurrent_versions - computed: true, optional: false, required: false
  public get newerNoncurrentVersions() {
    return this.getNumberAttribute('newer_noncurrent_versions');
  }

  // noncurrent_days - computed: true, optional: false, required: false
  public get noncurrentDays() {
    return this.getNumberAttribute('noncurrent_days');
  }
}
export interface DataAwsccS3BucketLifecycleConfigurationRulesNoncurrentVersionTransition {
}

export function dataAwsccS3BucketLifecycleConfigurationRulesNoncurrentVersionTransitionToTerraform(struct?: DataAwsccS3BucketLifecycleConfigurationRulesNoncurrentVersionTransition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketLifecycleConfigurationRulesNoncurrentVersionTransitionToHclTerraform(struct?: DataAwsccS3BucketLifecycleConfigurationRulesNoncurrentVersionTransition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketLifecycleConfigurationRulesNoncurrentVersionTransitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketLifecycleConfigurationRulesNoncurrentVersionTransition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketLifecycleConfigurationRulesNoncurrentVersionTransition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // newer_noncurrent_versions - computed: true, optional: false, required: false
  public get newerNoncurrentVersions() {
    return this.getNumberAttribute('newer_noncurrent_versions');
  }

  // storage_class - computed: true, optional: false, required: false
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }

  // transition_in_days - computed: true, optional: false, required: false
  public get transitionInDays() {
    return this.getNumberAttribute('transition_in_days');
  }
}
export interface DataAwsccS3BucketLifecycleConfigurationRulesNoncurrentVersionTransitions {
}

export function dataAwsccS3BucketLifecycleConfigurationRulesNoncurrentVersionTransitionsToTerraform(struct?: DataAwsccS3BucketLifecycleConfigurationRulesNoncurrentVersionTransitions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketLifecycleConfigurationRulesNoncurrentVersionTransitionsToHclTerraform(struct?: DataAwsccS3BucketLifecycleConfigurationRulesNoncurrentVersionTransitions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketLifecycleConfigurationRulesNoncurrentVersionTransitionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3BucketLifecycleConfigurationRulesNoncurrentVersionTransitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketLifecycleConfigurationRulesNoncurrentVersionTransitions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // newer_noncurrent_versions - computed: true, optional: false, required: false
  public get newerNoncurrentVersions() {
    return this.getNumberAttribute('newer_noncurrent_versions');
  }

  // storage_class - computed: true, optional: false, required: false
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }

  // transition_in_days - computed: true, optional: false, required: false
  public get transitionInDays() {
    return this.getNumberAttribute('transition_in_days');
  }
}

export class DataAwsccS3BucketLifecycleConfigurationRulesNoncurrentVersionTransitionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3BucketLifecycleConfigurationRulesNoncurrentVersionTransitionsOutputReference {
    return new DataAwsccS3BucketLifecycleConfigurationRulesNoncurrentVersionTransitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccS3BucketLifecycleConfigurationRulesTagFilters {
}

export function dataAwsccS3BucketLifecycleConfigurationRulesTagFiltersToTerraform(struct?: DataAwsccS3BucketLifecycleConfigurationRulesTagFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketLifecycleConfigurationRulesTagFiltersToHclTerraform(struct?: DataAwsccS3BucketLifecycleConfigurationRulesTagFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketLifecycleConfigurationRulesTagFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3BucketLifecycleConfigurationRulesTagFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketLifecycleConfigurationRulesTagFilters | undefined) {
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

export class DataAwsccS3BucketLifecycleConfigurationRulesTagFiltersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3BucketLifecycleConfigurationRulesTagFiltersOutputReference {
    return new DataAwsccS3BucketLifecycleConfigurationRulesTagFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccS3BucketLifecycleConfigurationRulesTransition {
}

export function dataAwsccS3BucketLifecycleConfigurationRulesTransitionToTerraform(struct?: DataAwsccS3BucketLifecycleConfigurationRulesTransition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketLifecycleConfigurationRulesTransitionToHclTerraform(struct?: DataAwsccS3BucketLifecycleConfigurationRulesTransition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketLifecycleConfigurationRulesTransitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketLifecycleConfigurationRulesTransition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketLifecycleConfigurationRulesTransition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // storage_class - computed: true, optional: false, required: false
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }

  // transition_date - computed: true, optional: false, required: false
  public get transitionDate() {
    return this.getStringAttribute('transition_date');
  }

  // transition_in_days - computed: true, optional: false, required: false
  public get transitionInDays() {
    return this.getNumberAttribute('transition_in_days');
  }
}
export interface DataAwsccS3BucketLifecycleConfigurationRulesTransitions {
}

export function dataAwsccS3BucketLifecycleConfigurationRulesTransitionsToTerraform(struct?: DataAwsccS3BucketLifecycleConfigurationRulesTransitions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketLifecycleConfigurationRulesTransitionsToHclTerraform(struct?: DataAwsccS3BucketLifecycleConfigurationRulesTransitions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketLifecycleConfigurationRulesTransitionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3BucketLifecycleConfigurationRulesTransitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketLifecycleConfigurationRulesTransitions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // storage_class - computed: true, optional: false, required: false
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }

  // transition_date - computed: true, optional: false, required: false
  public get transitionDate() {
    return this.getStringAttribute('transition_date');
  }

  // transition_in_days - computed: true, optional: false, required: false
  public get transitionInDays() {
    return this.getNumberAttribute('transition_in_days');
  }
}

export class DataAwsccS3BucketLifecycleConfigurationRulesTransitionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3BucketLifecycleConfigurationRulesTransitionsOutputReference {
    return new DataAwsccS3BucketLifecycleConfigurationRulesTransitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccS3BucketLifecycleConfigurationRules {
}

export function dataAwsccS3BucketLifecycleConfigurationRulesToTerraform(struct?: DataAwsccS3BucketLifecycleConfigurationRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketLifecycleConfigurationRulesToHclTerraform(struct?: DataAwsccS3BucketLifecycleConfigurationRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketLifecycleConfigurationRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3BucketLifecycleConfigurationRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketLifecycleConfigurationRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // abort_incomplete_multipart_upload - computed: true, optional: false, required: false
  private _abortIncompleteMultipartUpload = new DataAwsccS3BucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference(this, "abort_incomplete_multipart_upload");
  public get abortIncompleteMultipartUpload() {
    return this._abortIncompleteMultipartUpload;
  }

  // expiration_date - computed: true, optional: false, required: false
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
  }

  // expiration_in_days - computed: true, optional: false, required: false
  public get expirationInDays() {
    return this.getNumberAttribute('expiration_in_days');
  }

  // expired_object_delete_marker - computed: true, optional: false, required: false
  public get expiredObjectDeleteMarker() {
    return this.getBooleanAttribute('expired_object_delete_marker');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // noncurrent_version_expiration - computed: true, optional: false, required: false
  private _noncurrentVersionExpiration = new DataAwsccS3BucketLifecycleConfigurationRulesNoncurrentVersionExpirationOutputReference(this, "noncurrent_version_expiration");
  public get noncurrentVersionExpiration() {
    return this._noncurrentVersionExpiration;
  }

  // noncurrent_version_expiration_in_days - computed: true, optional: false, required: false
  public get noncurrentVersionExpirationInDays() {
    return this.getNumberAttribute('noncurrent_version_expiration_in_days');
  }

  // noncurrent_version_transition - computed: true, optional: false, required: false
  private _noncurrentVersionTransition = new DataAwsccS3BucketLifecycleConfigurationRulesNoncurrentVersionTransitionOutputReference(this, "noncurrent_version_transition");
  public get noncurrentVersionTransition() {
    return this._noncurrentVersionTransition;
  }

  // noncurrent_version_transitions - computed: true, optional: false, required: false
  private _noncurrentVersionTransitions = new DataAwsccS3BucketLifecycleConfigurationRulesNoncurrentVersionTransitionsList(this, "noncurrent_version_transitions", false);
  public get noncurrentVersionTransitions() {
    return this._noncurrentVersionTransitions;
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

  // tag_filters - computed: true, optional: false, required: false
  private _tagFilters = new DataAwsccS3BucketLifecycleConfigurationRulesTagFiltersList(this, "tag_filters", false);
  public get tagFilters() {
    return this._tagFilters;
  }

  // transition - computed: true, optional: false, required: false
  private _transition = new DataAwsccS3BucketLifecycleConfigurationRulesTransitionOutputReference(this, "transition");
  public get transition() {
    return this._transition;
  }

  // transitions - computed: true, optional: false, required: false
  private _transitions = new DataAwsccS3BucketLifecycleConfigurationRulesTransitionsList(this, "transitions", false);
  public get transitions() {
    return this._transitions;
  }
}

export class DataAwsccS3BucketLifecycleConfigurationRulesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3BucketLifecycleConfigurationRulesOutputReference {
    return new DataAwsccS3BucketLifecycleConfigurationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccS3BucketLifecycleConfiguration {
}

export function dataAwsccS3BucketLifecycleConfigurationToTerraform(struct?: DataAwsccS3BucketLifecycleConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketLifecycleConfigurationToHclTerraform(struct?: DataAwsccS3BucketLifecycleConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketLifecycleConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketLifecycleConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketLifecycleConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataAwsccS3BucketLifecycleConfigurationRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }

  // transition_default_minimum_object_size - computed: true, optional: false, required: false
  public get transitionDefaultMinimumObjectSize() {
    return this.getStringAttribute('transition_default_minimum_object_size');
  }
}
export interface DataAwsccS3BucketLoggingConfigurationTargetObjectKeyFormatPartitionedPrefix {
}

export function dataAwsccS3BucketLoggingConfigurationTargetObjectKeyFormatPartitionedPrefixToTerraform(struct?: DataAwsccS3BucketLoggingConfigurationTargetObjectKeyFormatPartitionedPrefix): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketLoggingConfigurationTargetObjectKeyFormatPartitionedPrefixToHclTerraform(struct?: DataAwsccS3BucketLoggingConfigurationTargetObjectKeyFormatPartitionedPrefix): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketLoggingConfigurationTargetObjectKeyFormatPartitionedPrefixOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketLoggingConfigurationTargetObjectKeyFormatPartitionedPrefix | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketLoggingConfigurationTargetObjectKeyFormatPartitionedPrefix | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // partition_date_source - computed: true, optional: false, required: false
  public get partitionDateSource() {
    return this.getStringAttribute('partition_date_source');
  }
}
export interface DataAwsccS3BucketLoggingConfigurationTargetObjectKeyFormat {
}

export function dataAwsccS3BucketLoggingConfigurationTargetObjectKeyFormatToTerraform(struct?: DataAwsccS3BucketLoggingConfigurationTargetObjectKeyFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketLoggingConfigurationTargetObjectKeyFormatToHclTerraform(struct?: DataAwsccS3BucketLoggingConfigurationTargetObjectKeyFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketLoggingConfigurationTargetObjectKeyFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketLoggingConfigurationTargetObjectKeyFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketLoggingConfigurationTargetObjectKeyFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // partitioned_prefix - computed: true, optional: false, required: false
  private _partitionedPrefix = new DataAwsccS3BucketLoggingConfigurationTargetObjectKeyFormatPartitionedPrefixOutputReference(this, "partitioned_prefix");
  public get partitionedPrefix() {
    return this._partitionedPrefix;
  }

  // simple_prefix - computed: true, optional: false, required: false
  public get simplePrefix() {
    return this.getStringAttribute('simple_prefix');
  }
}
export interface DataAwsccS3BucketLoggingConfiguration {
}

export function dataAwsccS3BucketLoggingConfigurationToTerraform(struct?: DataAwsccS3BucketLoggingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketLoggingConfigurationToHclTerraform(struct?: DataAwsccS3BucketLoggingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketLoggingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketLoggingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketLoggingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_bucket_name - computed: true, optional: false, required: false
  public get destinationBucketName() {
    return this.getStringAttribute('destination_bucket_name');
  }

  // log_file_prefix - computed: true, optional: false, required: false
  public get logFilePrefix() {
    return this.getStringAttribute('log_file_prefix');
  }

  // target_object_key_format - computed: true, optional: false, required: false
  private _targetObjectKeyFormat = new DataAwsccS3BucketLoggingConfigurationTargetObjectKeyFormatOutputReference(this, "target_object_key_format");
  public get targetObjectKeyFormat() {
    return this._targetObjectKeyFormat;
  }
}
export interface DataAwsccS3BucketMetadataTableConfigurationS3TablesDestination {
}

export function dataAwsccS3BucketMetadataTableConfigurationS3TablesDestinationToTerraform(struct?: DataAwsccS3BucketMetadataTableConfigurationS3TablesDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketMetadataTableConfigurationS3TablesDestinationToHclTerraform(struct?: DataAwsccS3BucketMetadataTableConfigurationS3TablesDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketMetadataTableConfigurationS3TablesDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketMetadataTableConfigurationS3TablesDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketMetadataTableConfigurationS3TablesDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // table_arn - computed: true, optional: false, required: false
  public get tableArn() {
    return this.getStringAttribute('table_arn');
  }

  // table_bucket_arn - computed: true, optional: false, required: false
  public get tableBucketArn() {
    return this.getStringAttribute('table_bucket_arn');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // table_namespace - computed: true, optional: false, required: false
  public get tableNamespace() {
    return this.getStringAttribute('table_namespace');
  }
}
export interface DataAwsccS3BucketMetadataTableConfiguration {
}

export function dataAwsccS3BucketMetadataTableConfigurationToTerraform(struct?: DataAwsccS3BucketMetadataTableConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketMetadataTableConfigurationToHclTerraform(struct?: DataAwsccS3BucketMetadataTableConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketMetadataTableConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketMetadataTableConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketMetadataTableConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_tables_destination - computed: true, optional: false, required: false
  private _s3TablesDestination = new DataAwsccS3BucketMetadataTableConfigurationS3TablesDestinationOutputReference(this, "s3_tables_destination");
  public get s3TablesDestination() {
    return this._s3TablesDestination;
  }
}
export interface DataAwsccS3BucketMetricsConfigurationsTagFilters {
}

export function dataAwsccS3BucketMetricsConfigurationsTagFiltersToTerraform(struct?: DataAwsccS3BucketMetricsConfigurationsTagFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketMetricsConfigurationsTagFiltersToHclTerraform(struct?: DataAwsccS3BucketMetricsConfigurationsTagFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketMetricsConfigurationsTagFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3BucketMetricsConfigurationsTagFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketMetricsConfigurationsTagFilters | undefined) {
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

export class DataAwsccS3BucketMetricsConfigurationsTagFiltersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3BucketMetricsConfigurationsTagFiltersOutputReference {
    return new DataAwsccS3BucketMetricsConfigurationsTagFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccS3BucketMetricsConfigurations {
}

export function dataAwsccS3BucketMetricsConfigurationsToTerraform(struct?: DataAwsccS3BucketMetricsConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketMetricsConfigurationsToHclTerraform(struct?: DataAwsccS3BucketMetricsConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketMetricsConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3BucketMetricsConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketMetricsConfigurations | undefined) {
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

  // tag_filters - computed: true, optional: false, required: false
  private _tagFilters = new DataAwsccS3BucketMetricsConfigurationsTagFiltersList(this, "tag_filters", false);
  public get tagFilters() {
    return this._tagFilters;
  }
}

export class DataAwsccS3BucketMetricsConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3BucketMetricsConfigurationsOutputReference {
    return new DataAwsccS3BucketMetricsConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccS3BucketNotificationConfigurationEventBridgeConfiguration {
}

export function dataAwsccS3BucketNotificationConfigurationEventBridgeConfigurationToTerraform(struct?: DataAwsccS3BucketNotificationConfigurationEventBridgeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketNotificationConfigurationEventBridgeConfigurationToHclTerraform(struct?: DataAwsccS3BucketNotificationConfigurationEventBridgeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketNotificationConfigurationEventBridgeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketNotificationConfigurationEventBridgeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketNotificationConfigurationEventBridgeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event_bridge_enabled - computed: true, optional: false, required: false
  public get eventBridgeEnabled() {
    return this.getBooleanAttribute('event_bridge_enabled');
  }
}
export interface DataAwsccS3BucketNotificationConfigurationLambdaConfigurationsFilterS3KeyRules {
}

export function dataAwsccS3BucketNotificationConfigurationLambdaConfigurationsFilterS3KeyRulesToTerraform(struct?: DataAwsccS3BucketNotificationConfigurationLambdaConfigurationsFilterS3KeyRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketNotificationConfigurationLambdaConfigurationsFilterS3KeyRulesToHclTerraform(struct?: DataAwsccS3BucketNotificationConfigurationLambdaConfigurationsFilterS3KeyRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketNotificationConfigurationLambdaConfigurationsFilterS3KeyRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3BucketNotificationConfigurationLambdaConfigurationsFilterS3KeyRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketNotificationConfigurationLambdaConfigurationsFilterS3KeyRules | undefined) {
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

export class DataAwsccS3BucketNotificationConfigurationLambdaConfigurationsFilterS3KeyRulesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3BucketNotificationConfigurationLambdaConfigurationsFilterS3KeyRulesOutputReference {
    return new DataAwsccS3BucketNotificationConfigurationLambdaConfigurationsFilterS3KeyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccS3BucketNotificationConfigurationLambdaConfigurationsFilterS3Key {
}

export function dataAwsccS3BucketNotificationConfigurationLambdaConfigurationsFilterS3KeyToTerraform(struct?: DataAwsccS3BucketNotificationConfigurationLambdaConfigurationsFilterS3Key): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketNotificationConfigurationLambdaConfigurationsFilterS3KeyToHclTerraform(struct?: DataAwsccS3BucketNotificationConfigurationLambdaConfigurationsFilterS3Key): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketNotificationConfigurationLambdaConfigurationsFilterS3KeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketNotificationConfigurationLambdaConfigurationsFilterS3Key | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketNotificationConfigurationLambdaConfigurationsFilterS3Key | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataAwsccS3BucketNotificationConfigurationLambdaConfigurationsFilterS3KeyRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }
}
export interface DataAwsccS3BucketNotificationConfigurationLambdaConfigurationsFilter {
}

export function dataAwsccS3BucketNotificationConfigurationLambdaConfigurationsFilterToTerraform(struct?: DataAwsccS3BucketNotificationConfigurationLambdaConfigurationsFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketNotificationConfigurationLambdaConfigurationsFilterToHclTerraform(struct?: DataAwsccS3BucketNotificationConfigurationLambdaConfigurationsFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketNotificationConfigurationLambdaConfigurationsFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketNotificationConfigurationLambdaConfigurationsFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketNotificationConfigurationLambdaConfigurationsFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_key - computed: true, optional: false, required: false
  private _s3Key = new DataAwsccS3BucketNotificationConfigurationLambdaConfigurationsFilterS3KeyOutputReference(this, "s3_key");
  public get s3Key() {
    return this._s3Key;
  }
}
export interface DataAwsccS3BucketNotificationConfigurationLambdaConfigurations {
}

export function dataAwsccS3BucketNotificationConfigurationLambdaConfigurationsToTerraform(struct?: DataAwsccS3BucketNotificationConfigurationLambdaConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketNotificationConfigurationLambdaConfigurationsToHclTerraform(struct?: DataAwsccS3BucketNotificationConfigurationLambdaConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketNotificationConfigurationLambdaConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3BucketNotificationConfigurationLambdaConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketNotificationConfigurationLambdaConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event - computed: true, optional: false, required: false
  public get event() {
    return this.getStringAttribute('event');
  }

  // filter - computed: true, optional: false, required: false
  private _filter = new DataAwsccS3BucketNotificationConfigurationLambdaConfigurationsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }

  // function - computed: true, optional: false, required: false
  public get function() {
    return this.getStringAttribute('function');
  }
}

export class DataAwsccS3BucketNotificationConfigurationLambdaConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3BucketNotificationConfigurationLambdaConfigurationsOutputReference {
    return new DataAwsccS3BucketNotificationConfigurationLambdaConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccS3BucketNotificationConfigurationQueueConfigurationsFilterS3KeyRules {
}

export function dataAwsccS3BucketNotificationConfigurationQueueConfigurationsFilterS3KeyRulesToTerraform(struct?: DataAwsccS3BucketNotificationConfigurationQueueConfigurationsFilterS3KeyRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketNotificationConfigurationQueueConfigurationsFilterS3KeyRulesToHclTerraform(struct?: DataAwsccS3BucketNotificationConfigurationQueueConfigurationsFilterS3KeyRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketNotificationConfigurationQueueConfigurationsFilterS3KeyRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3BucketNotificationConfigurationQueueConfigurationsFilterS3KeyRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketNotificationConfigurationQueueConfigurationsFilterS3KeyRules | undefined) {
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

export class DataAwsccS3BucketNotificationConfigurationQueueConfigurationsFilterS3KeyRulesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3BucketNotificationConfigurationQueueConfigurationsFilterS3KeyRulesOutputReference {
    return new DataAwsccS3BucketNotificationConfigurationQueueConfigurationsFilterS3KeyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccS3BucketNotificationConfigurationQueueConfigurationsFilterS3Key {
}

export function dataAwsccS3BucketNotificationConfigurationQueueConfigurationsFilterS3KeyToTerraform(struct?: DataAwsccS3BucketNotificationConfigurationQueueConfigurationsFilterS3Key): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketNotificationConfigurationQueueConfigurationsFilterS3KeyToHclTerraform(struct?: DataAwsccS3BucketNotificationConfigurationQueueConfigurationsFilterS3Key): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketNotificationConfigurationQueueConfigurationsFilterS3KeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketNotificationConfigurationQueueConfigurationsFilterS3Key | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketNotificationConfigurationQueueConfigurationsFilterS3Key | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataAwsccS3BucketNotificationConfigurationQueueConfigurationsFilterS3KeyRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }
}
export interface DataAwsccS3BucketNotificationConfigurationQueueConfigurationsFilter {
}

export function dataAwsccS3BucketNotificationConfigurationQueueConfigurationsFilterToTerraform(struct?: DataAwsccS3BucketNotificationConfigurationQueueConfigurationsFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketNotificationConfigurationQueueConfigurationsFilterToHclTerraform(struct?: DataAwsccS3BucketNotificationConfigurationQueueConfigurationsFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketNotificationConfigurationQueueConfigurationsFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketNotificationConfigurationQueueConfigurationsFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketNotificationConfigurationQueueConfigurationsFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_key - computed: true, optional: false, required: false
  private _s3Key = new DataAwsccS3BucketNotificationConfigurationQueueConfigurationsFilterS3KeyOutputReference(this, "s3_key");
  public get s3Key() {
    return this._s3Key;
  }
}
export interface DataAwsccS3BucketNotificationConfigurationQueueConfigurations {
}

export function dataAwsccS3BucketNotificationConfigurationQueueConfigurationsToTerraform(struct?: DataAwsccS3BucketNotificationConfigurationQueueConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketNotificationConfigurationQueueConfigurationsToHclTerraform(struct?: DataAwsccS3BucketNotificationConfigurationQueueConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketNotificationConfigurationQueueConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3BucketNotificationConfigurationQueueConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketNotificationConfigurationQueueConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event - computed: true, optional: false, required: false
  public get event() {
    return this.getStringAttribute('event');
  }

  // filter - computed: true, optional: false, required: false
  private _filter = new DataAwsccS3BucketNotificationConfigurationQueueConfigurationsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }

  // queue - computed: true, optional: false, required: false
  public get queue() {
    return this.getStringAttribute('queue');
  }
}

export class DataAwsccS3BucketNotificationConfigurationQueueConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3BucketNotificationConfigurationQueueConfigurationsOutputReference {
    return new DataAwsccS3BucketNotificationConfigurationQueueConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccS3BucketNotificationConfigurationTopicConfigurationsFilterS3KeyRules {
}

export function dataAwsccS3BucketNotificationConfigurationTopicConfigurationsFilterS3KeyRulesToTerraform(struct?: DataAwsccS3BucketNotificationConfigurationTopicConfigurationsFilterS3KeyRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketNotificationConfigurationTopicConfigurationsFilterS3KeyRulesToHclTerraform(struct?: DataAwsccS3BucketNotificationConfigurationTopicConfigurationsFilterS3KeyRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketNotificationConfigurationTopicConfigurationsFilterS3KeyRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3BucketNotificationConfigurationTopicConfigurationsFilterS3KeyRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketNotificationConfigurationTopicConfigurationsFilterS3KeyRules | undefined) {
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

export class DataAwsccS3BucketNotificationConfigurationTopicConfigurationsFilterS3KeyRulesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3BucketNotificationConfigurationTopicConfigurationsFilterS3KeyRulesOutputReference {
    return new DataAwsccS3BucketNotificationConfigurationTopicConfigurationsFilterS3KeyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccS3BucketNotificationConfigurationTopicConfigurationsFilterS3Key {
}

export function dataAwsccS3BucketNotificationConfigurationTopicConfigurationsFilterS3KeyToTerraform(struct?: DataAwsccS3BucketNotificationConfigurationTopicConfigurationsFilterS3Key): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketNotificationConfigurationTopicConfigurationsFilterS3KeyToHclTerraform(struct?: DataAwsccS3BucketNotificationConfigurationTopicConfigurationsFilterS3Key): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketNotificationConfigurationTopicConfigurationsFilterS3KeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketNotificationConfigurationTopicConfigurationsFilterS3Key | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketNotificationConfigurationTopicConfigurationsFilterS3Key | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataAwsccS3BucketNotificationConfigurationTopicConfigurationsFilterS3KeyRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }
}
export interface DataAwsccS3BucketNotificationConfigurationTopicConfigurationsFilter {
}

export function dataAwsccS3BucketNotificationConfigurationTopicConfigurationsFilterToTerraform(struct?: DataAwsccS3BucketNotificationConfigurationTopicConfigurationsFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketNotificationConfigurationTopicConfigurationsFilterToHclTerraform(struct?: DataAwsccS3BucketNotificationConfigurationTopicConfigurationsFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketNotificationConfigurationTopicConfigurationsFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketNotificationConfigurationTopicConfigurationsFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketNotificationConfigurationTopicConfigurationsFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_key - computed: true, optional: false, required: false
  private _s3Key = new DataAwsccS3BucketNotificationConfigurationTopicConfigurationsFilterS3KeyOutputReference(this, "s3_key");
  public get s3Key() {
    return this._s3Key;
  }
}
export interface DataAwsccS3BucketNotificationConfigurationTopicConfigurations {
}

export function dataAwsccS3BucketNotificationConfigurationTopicConfigurationsToTerraform(struct?: DataAwsccS3BucketNotificationConfigurationTopicConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketNotificationConfigurationTopicConfigurationsToHclTerraform(struct?: DataAwsccS3BucketNotificationConfigurationTopicConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketNotificationConfigurationTopicConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3BucketNotificationConfigurationTopicConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketNotificationConfigurationTopicConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event - computed: true, optional: false, required: false
  public get event() {
    return this.getStringAttribute('event');
  }

  // filter - computed: true, optional: false, required: false
  private _filter = new DataAwsccS3BucketNotificationConfigurationTopicConfigurationsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }

  // topic - computed: true, optional: false, required: false
  public get topic() {
    return this.getStringAttribute('topic');
  }
}

export class DataAwsccS3BucketNotificationConfigurationTopicConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3BucketNotificationConfigurationTopicConfigurationsOutputReference {
    return new DataAwsccS3BucketNotificationConfigurationTopicConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccS3BucketNotificationConfiguration {
}

export function dataAwsccS3BucketNotificationConfigurationToTerraform(struct?: DataAwsccS3BucketNotificationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketNotificationConfigurationToHclTerraform(struct?: DataAwsccS3BucketNotificationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketNotificationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketNotificationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketNotificationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event_bridge_configuration - computed: true, optional: false, required: false
  private _eventBridgeConfiguration = new DataAwsccS3BucketNotificationConfigurationEventBridgeConfigurationOutputReference(this, "event_bridge_configuration");
  public get eventBridgeConfiguration() {
    return this._eventBridgeConfiguration;
  }

  // lambda_configurations - computed: true, optional: false, required: false
  private _lambdaConfigurations = new DataAwsccS3BucketNotificationConfigurationLambdaConfigurationsList(this, "lambda_configurations", false);
  public get lambdaConfigurations() {
    return this._lambdaConfigurations;
  }

  // queue_configurations - computed: true, optional: false, required: false
  private _queueConfigurations = new DataAwsccS3BucketNotificationConfigurationQueueConfigurationsList(this, "queue_configurations", false);
  public get queueConfigurations() {
    return this._queueConfigurations;
  }

  // topic_configurations - computed: true, optional: false, required: false
  private _topicConfigurations = new DataAwsccS3BucketNotificationConfigurationTopicConfigurationsList(this, "topic_configurations", false);
  public get topicConfigurations() {
    return this._topicConfigurations;
  }
}
export interface DataAwsccS3BucketObjectLockConfigurationRuleDefaultRetention {
}

export function dataAwsccS3BucketObjectLockConfigurationRuleDefaultRetentionToTerraform(struct?: DataAwsccS3BucketObjectLockConfigurationRuleDefaultRetention): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketObjectLockConfigurationRuleDefaultRetentionToHclTerraform(struct?: DataAwsccS3BucketObjectLockConfigurationRuleDefaultRetention): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketObjectLockConfigurationRuleDefaultRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketObjectLockConfigurationRuleDefaultRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // days - computed: true, optional: false, required: false
  public get days() {
    return this.getNumberAttribute('days');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // years - computed: true, optional: false, required: false
  public get years() {
    return this.getNumberAttribute('years');
  }
}
export interface DataAwsccS3BucketObjectLockConfigurationRule {
}

export function dataAwsccS3BucketObjectLockConfigurationRuleToTerraform(struct?: DataAwsccS3BucketObjectLockConfigurationRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketObjectLockConfigurationRuleToHclTerraform(struct?: DataAwsccS3BucketObjectLockConfigurationRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketObjectLockConfigurationRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketObjectLockConfigurationRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketObjectLockConfigurationRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_retention - computed: true, optional: false, required: false
  private _defaultRetention = new DataAwsccS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference(this, "default_retention");
  public get defaultRetention() {
    return this._defaultRetention;
  }
}
export interface DataAwsccS3BucketObjectLockConfiguration {
}

export function dataAwsccS3BucketObjectLockConfigurationToTerraform(struct?: DataAwsccS3BucketObjectLockConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketObjectLockConfigurationToHclTerraform(struct?: DataAwsccS3BucketObjectLockConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketObjectLockConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketObjectLockConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketObjectLockConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // object_lock_enabled - computed: true, optional: false, required: false
  public get objectLockEnabled() {
    return this.getStringAttribute('object_lock_enabled');
  }

  // rule - computed: true, optional: false, required: false
  private _rule = new DataAwsccS3BucketObjectLockConfigurationRuleOutputReference(this, "rule");
  public get rule() {
    return this._rule;
  }
}
export interface DataAwsccS3BucketOwnershipControlsRules {
}

export function dataAwsccS3BucketOwnershipControlsRulesToTerraform(struct?: DataAwsccS3BucketOwnershipControlsRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketOwnershipControlsRulesToHclTerraform(struct?: DataAwsccS3BucketOwnershipControlsRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketOwnershipControlsRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3BucketOwnershipControlsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketOwnershipControlsRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // object_ownership - computed: true, optional: false, required: false
  public get objectOwnership() {
    return this.getStringAttribute('object_ownership');
  }
}

export class DataAwsccS3BucketOwnershipControlsRulesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3BucketOwnershipControlsRulesOutputReference {
    return new DataAwsccS3BucketOwnershipControlsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccS3BucketOwnershipControls {
}

export function dataAwsccS3BucketOwnershipControlsToTerraform(struct?: DataAwsccS3BucketOwnershipControls): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketOwnershipControlsToHclTerraform(struct?: DataAwsccS3BucketOwnershipControls): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketOwnershipControlsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketOwnershipControls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketOwnershipControls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataAwsccS3BucketOwnershipControlsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}
export interface DataAwsccS3BucketPublicAccessBlockConfiguration {
}

export function dataAwsccS3BucketPublicAccessBlockConfigurationToTerraform(struct?: DataAwsccS3BucketPublicAccessBlockConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketPublicAccessBlockConfigurationToHclTerraform(struct?: DataAwsccS3BucketPublicAccessBlockConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketPublicAccessBlockConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketPublicAccessBlockConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketPublicAccessBlockConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_public_acls - computed: true, optional: false, required: false
  public get blockPublicAcls() {
    return this.getBooleanAttribute('block_public_acls');
  }

  // block_public_policy - computed: true, optional: false, required: false
  public get blockPublicPolicy() {
    return this.getBooleanAttribute('block_public_policy');
  }

  // ignore_public_acls - computed: true, optional: false, required: false
  public get ignorePublicAcls() {
    return this.getBooleanAttribute('ignore_public_acls');
  }

  // restrict_public_buckets - computed: true, optional: false, required: false
  public get restrictPublicBuckets() {
    return this.getBooleanAttribute('restrict_public_buckets');
  }
}
export interface DataAwsccS3BucketReplicationConfigurationRulesDeleteMarkerReplication {
}

export function dataAwsccS3BucketReplicationConfigurationRulesDeleteMarkerReplicationToTerraform(struct?: DataAwsccS3BucketReplicationConfigurationRulesDeleteMarkerReplication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketReplicationConfigurationRulesDeleteMarkerReplicationToHclTerraform(struct?: DataAwsccS3BucketReplicationConfigurationRulesDeleteMarkerReplication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketReplicationConfigurationRulesDeleteMarkerReplicationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketReplicationConfigurationRulesDeleteMarkerReplication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketReplicationConfigurationRulesDeleteMarkerReplication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface DataAwsccS3BucketReplicationConfigurationRulesDestinationAccessControlTranslation {
}

export function dataAwsccS3BucketReplicationConfigurationRulesDestinationAccessControlTranslationToTerraform(struct?: DataAwsccS3BucketReplicationConfigurationRulesDestinationAccessControlTranslation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketReplicationConfigurationRulesDestinationAccessControlTranslationToHclTerraform(struct?: DataAwsccS3BucketReplicationConfigurationRulesDestinationAccessControlTranslation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketReplicationConfigurationRulesDestinationAccessControlTranslation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketReplicationConfigurationRulesDestinationAccessControlTranslation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }
}
export interface DataAwsccS3BucketReplicationConfigurationRulesDestinationEncryptionConfiguration {
}

export function dataAwsccS3BucketReplicationConfigurationRulesDestinationEncryptionConfigurationToTerraform(struct?: DataAwsccS3BucketReplicationConfigurationRulesDestinationEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketReplicationConfigurationRulesDestinationEncryptionConfigurationToHclTerraform(struct?: DataAwsccS3BucketReplicationConfigurationRulesDestinationEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketReplicationConfigurationRulesDestinationEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketReplicationConfigurationRulesDestinationEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketReplicationConfigurationRulesDestinationEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // replica_kms_key_id - computed: true, optional: false, required: false
  public get replicaKmsKeyId() {
    return this.getStringAttribute('replica_kms_key_id');
  }
}
export interface DataAwsccS3BucketReplicationConfigurationRulesDestinationMetricsEventThreshold {
}

export function dataAwsccS3BucketReplicationConfigurationRulesDestinationMetricsEventThresholdToTerraform(struct?: DataAwsccS3BucketReplicationConfigurationRulesDestinationMetricsEventThreshold): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketReplicationConfigurationRulesDestinationMetricsEventThresholdToHclTerraform(struct?: DataAwsccS3BucketReplicationConfigurationRulesDestinationMetricsEventThreshold): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketReplicationConfigurationRulesDestinationMetricsEventThresholdOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketReplicationConfigurationRulesDestinationMetricsEventThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketReplicationConfigurationRulesDestinationMetricsEventThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // minutes - computed: true, optional: false, required: false
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
}
export interface DataAwsccS3BucketReplicationConfigurationRulesDestinationMetrics {
}

export function dataAwsccS3BucketReplicationConfigurationRulesDestinationMetricsToTerraform(struct?: DataAwsccS3BucketReplicationConfigurationRulesDestinationMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketReplicationConfigurationRulesDestinationMetricsToHclTerraform(struct?: DataAwsccS3BucketReplicationConfigurationRulesDestinationMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketReplicationConfigurationRulesDestinationMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketReplicationConfigurationRulesDestinationMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketReplicationConfigurationRulesDestinationMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event_threshold - computed: true, optional: false, required: false
  private _eventThreshold = new DataAwsccS3BucketReplicationConfigurationRulesDestinationMetricsEventThresholdOutputReference(this, "event_threshold");
  public get eventThreshold() {
    return this._eventThreshold;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface DataAwsccS3BucketReplicationConfigurationRulesDestinationReplicationTimeTime {
}

export function dataAwsccS3BucketReplicationConfigurationRulesDestinationReplicationTimeTimeToTerraform(struct?: DataAwsccS3BucketReplicationConfigurationRulesDestinationReplicationTimeTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketReplicationConfigurationRulesDestinationReplicationTimeTimeToHclTerraform(struct?: DataAwsccS3BucketReplicationConfigurationRulesDestinationReplicationTimeTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketReplicationConfigurationRulesDestinationReplicationTimeTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketReplicationConfigurationRulesDestinationReplicationTimeTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketReplicationConfigurationRulesDestinationReplicationTimeTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // minutes - computed: true, optional: false, required: false
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
}
export interface DataAwsccS3BucketReplicationConfigurationRulesDestinationReplicationTime {
}

export function dataAwsccS3BucketReplicationConfigurationRulesDestinationReplicationTimeToTerraform(struct?: DataAwsccS3BucketReplicationConfigurationRulesDestinationReplicationTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketReplicationConfigurationRulesDestinationReplicationTimeToHclTerraform(struct?: DataAwsccS3BucketReplicationConfigurationRulesDestinationReplicationTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketReplicationConfigurationRulesDestinationReplicationTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketReplicationConfigurationRulesDestinationReplicationTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // time - computed: true, optional: false, required: false
  private _time = new DataAwsccS3BucketReplicationConfigurationRulesDestinationReplicationTimeTimeOutputReference(this, "time");
  public get time() {
    return this._time;
  }
}
export interface DataAwsccS3BucketReplicationConfigurationRulesDestination {
}

export function dataAwsccS3BucketReplicationConfigurationRulesDestinationToTerraform(struct?: DataAwsccS3BucketReplicationConfigurationRulesDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketReplicationConfigurationRulesDestinationToHclTerraform(struct?: DataAwsccS3BucketReplicationConfigurationRulesDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketReplicationConfigurationRulesDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketReplicationConfigurationRulesDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketReplicationConfigurationRulesDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_control_translation - computed: true, optional: false, required: false
  private _accessControlTranslation = new DataAwsccS3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference(this, "access_control_translation");
  public get accessControlTranslation() {
    return this._accessControlTranslation;
  }

  // account - computed: true, optional: false, required: false
  public get account() {
    return this.getStringAttribute('account');
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // encryption_configuration - computed: true, optional: false, required: false
  private _encryptionConfiguration = new DataAwsccS3BucketReplicationConfigurationRulesDestinationEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }

  // metrics - computed: true, optional: false, required: false
  private _metrics = new DataAwsccS3BucketReplicationConfigurationRulesDestinationMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }

  // replication_time - computed: true, optional: false, required: false
  private _replicationTime = new DataAwsccS3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference(this, "replication_time");
  public get replicationTime() {
    return this._replicationTime;
  }

  // storage_class - computed: true, optional: false, required: false
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
}
export interface DataAwsccS3BucketReplicationConfigurationRulesFilterAndTagFilters {
}

export function dataAwsccS3BucketReplicationConfigurationRulesFilterAndTagFiltersToTerraform(struct?: DataAwsccS3BucketReplicationConfigurationRulesFilterAndTagFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketReplicationConfigurationRulesFilterAndTagFiltersToHclTerraform(struct?: DataAwsccS3BucketReplicationConfigurationRulesFilterAndTagFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketReplicationConfigurationRulesFilterAndTagFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3BucketReplicationConfigurationRulesFilterAndTagFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketReplicationConfigurationRulesFilterAndTagFilters | undefined) {
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

export class DataAwsccS3BucketReplicationConfigurationRulesFilterAndTagFiltersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3BucketReplicationConfigurationRulesFilterAndTagFiltersOutputReference {
    return new DataAwsccS3BucketReplicationConfigurationRulesFilterAndTagFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccS3BucketReplicationConfigurationRulesFilterAnd {
}

export function dataAwsccS3BucketReplicationConfigurationRulesFilterAndToTerraform(struct?: DataAwsccS3BucketReplicationConfigurationRulesFilterAnd): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketReplicationConfigurationRulesFilterAndToHclTerraform(struct?: DataAwsccS3BucketReplicationConfigurationRulesFilterAnd): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketReplicationConfigurationRulesFilterAndOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketReplicationConfigurationRulesFilterAnd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketReplicationConfigurationRulesFilterAnd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // tag_filters - computed: true, optional: false, required: false
  private _tagFilters = new DataAwsccS3BucketReplicationConfigurationRulesFilterAndTagFiltersList(this, "tag_filters", false);
  public get tagFilters() {
    return this._tagFilters;
  }
}
export interface DataAwsccS3BucketReplicationConfigurationRulesFilterTagFilter {
}

export function dataAwsccS3BucketReplicationConfigurationRulesFilterTagFilterToTerraform(struct?: DataAwsccS3BucketReplicationConfigurationRulesFilterTagFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketReplicationConfigurationRulesFilterTagFilterToHclTerraform(struct?: DataAwsccS3BucketReplicationConfigurationRulesFilterTagFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketReplicationConfigurationRulesFilterTagFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketReplicationConfigurationRulesFilterTagFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketReplicationConfigurationRulesFilterTagFilter | undefined) {
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
export interface DataAwsccS3BucketReplicationConfigurationRulesFilter {
}

export function dataAwsccS3BucketReplicationConfigurationRulesFilterToTerraform(struct?: DataAwsccS3BucketReplicationConfigurationRulesFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketReplicationConfigurationRulesFilterToHclTerraform(struct?: DataAwsccS3BucketReplicationConfigurationRulesFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketReplicationConfigurationRulesFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketReplicationConfigurationRulesFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketReplicationConfigurationRulesFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // and - computed: true, optional: false, required: false
  private _and = new DataAwsccS3BucketReplicationConfigurationRulesFilterAndOutputReference(this, "and");
  public get and() {
    return this._and;
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // tag_filter - computed: true, optional: false, required: false
  private _tagFilter = new DataAwsccS3BucketReplicationConfigurationRulesFilterTagFilterOutputReference(this, "tag_filter");
  public get tagFilter() {
    return this._tagFilter;
  }
}
export interface DataAwsccS3BucketReplicationConfigurationRulesSourceSelectionCriteriaReplicaModifications {
}

export function dataAwsccS3BucketReplicationConfigurationRulesSourceSelectionCriteriaReplicaModificationsToTerraform(struct?: DataAwsccS3BucketReplicationConfigurationRulesSourceSelectionCriteriaReplicaModifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketReplicationConfigurationRulesSourceSelectionCriteriaReplicaModificationsToHclTerraform(struct?: DataAwsccS3BucketReplicationConfigurationRulesSourceSelectionCriteriaReplicaModifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketReplicationConfigurationRulesSourceSelectionCriteriaReplicaModificationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketReplicationConfigurationRulesSourceSelectionCriteriaReplicaModifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketReplicationConfigurationRulesSourceSelectionCriteriaReplicaModifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface DataAwsccS3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects {
}

export function dataAwsccS3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsToTerraform(struct?: DataAwsccS3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsToHclTerraform(struct?: DataAwsccS3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface DataAwsccS3BucketReplicationConfigurationRulesSourceSelectionCriteria {
}

export function dataAwsccS3BucketReplicationConfigurationRulesSourceSelectionCriteriaToTerraform(struct?: DataAwsccS3BucketReplicationConfigurationRulesSourceSelectionCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketReplicationConfigurationRulesSourceSelectionCriteriaToHclTerraform(struct?: DataAwsccS3BucketReplicationConfigurationRulesSourceSelectionCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketReplicationConfigurationRulesSourceSelectionCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketReplicationConfigurationRulesSourceSelectionCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // replica_modifications - computed: true, optional: false, required: false
  private _replicaModifications = new DataAwsccS3BucketReplicationConfigurationRulesSourceSelectionCriteriaReplicaModificationsOutputReference(this, "replica_modifications");
  public get replicaModifications() {
    return this._replicaModifications;
  }

  // sse_kms_encrypted_objects - computed: true, optional: false, required: false
  private _sseKmsEncryptedObjects = new DataAwsccS3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference(this, "sse_kms_encrypted_objects");
  public get sseKmsEncryptedObjects() {
    return this._sseKmsEncryptedObjects;
  }
}
export interface DataAwsccS3BucketReplicationConfigurationRules {
}

export function dataAwsccS3BucketReplicationConfigurationRulesToTerraform(struct?: DataAwsccS3BucketReplicationConfigurationRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketReplicationConfigurationRulesToHclTerraform(struct?: DataAwsccS3BucketReplicationConfigurationRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketReplicationConfigurationRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3BucketReplicationConfigurationRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketReplicationConfigurationRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delete_marker_replication - computed: true, optional: false, required: false
  private _deleteMarkerReplication = new DataAwsccS3BucketReplicationConfigurationRulesDeleteMarkerReplicationOutputReference(this, "delete_marker_replication");
  public get deleteMarkerReplication() {
    return this._deleteMarkerReplication;
  }

  // destination - computed: true, optional: false, required: false
  private _destination = new DataAwsccS3BucketReplicationConfigurationRulesDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }

  // filter - computed: true, optional: false, required: false
  private _filter = new DataAwsccS3BucketReplicationConfigurationRulesFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // source_selection_criteria - computed: true, optional: false, required: false
  private _sourceSelectionCriteria = new DataAwsccS3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference(this, "source_selection_criteria");
  public get sourceSelectionCriteria() {
    return this._sourceSelectionCriteria;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataAwsccS3BucketReplicationConfigurationRulesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3BucketReplicationConfigurationRulesOutputReference {
    return new DataAwsccS3BucketReplicationConfigurationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccS3BucketReplicationConfiguration {
}

export function dataAwsccS3BucketReplicationConfigurationToTerraform(struct?: DataAwsccS3BucketReplicationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketReplicationConfigurationToHclTerraform(struct?: DataAwsccS3BucketReplicationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketReplicationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketReplicationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketReplicationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataAwsccS3BucketReplicationConfigurationRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}
export interface DataAwsccS3BucketTags {
}

export function dataAwsccS3BucketTagsToTerraform(struct?: DataAwsccS3BucketTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketTagsToHclTerraform(struct?: DataAwsccS3BucketTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3BucketTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketTags | undefined) {
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

export class DataAwsccS3BucketTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3BucketTagsOutputReference {
    return new DataAwsccS3BucketTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccS3BucketVersioningConfiguration {
}

export function dataAwsccS3BucketVersioningConfigurationToTerraform(struct?: DataAwsccS3BucketVersioningConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketVersioningConfigurationToHclTerraform(struct?: DataAwsccS3BucketVersioningConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketVersioningConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketVersioningConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketVersioningConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface DataAwsccS3BucketWebsiteConfigurationRedirectAllRequestsTo {
}

export function dataAwsccS3BucketWebsiteConfigurationRedirectAllRequestsToToTerraform(struct?: DataAwsccS3BucketWebsiteConfigurationRedirectAllRequestsTo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketWebsiteConfigurationRedirectAllRequestsToToHclTerraform(struct?: DataAwsccS3BucketWebsiteConfigurationRedirectAllRequestsTo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketWebsiteConfigurationRedirectAllRequestsTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketWebsiteConfigurationRedirectAllRequestsTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}
export interface DataAwsccS3BucketWebsiteConfigurationRoutingRulesRedirectRule {
}

export function dataAwsccS3BucketWebsiteConfigurationRoutingRulesRedirectRuleToTerraform(struct?: DataAwsccS3BucketWebsiteConfigurationRoutingRulesRedirectRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketWebsiteConfigurationRoutingRulesRedirectRuleToHclTerraform(struct?: DataAwsccS3BucketWebsiteConfigurationRoutingRulesRedirectRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketWebsiteConfigurationRoutingRulesRedirectRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketWebsiteConfigurationRoutingRulesRedirectRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketWebsiteConfigurationRoutingRulesRedirectRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // http_redirect_code - computed: true, optional: false, required: false
  public get httpRedirectCode() {
    return this.getStringAttribute('http_redirect_code');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // replace_key_prefix_with - computed: true, optional: false, required: false
  public get replaceKeyPrefixWith() {
    return this.getStringAttribute('replace_key_prefix_with');
  }

  // replace_key_with - computed: true, optional: false, required: false
  public get replaceKeyWith() {
    return this.getStringAttribute('replace_key_with');
  }
}
export interface DataAwsccS3BucketWebsiteConfigurationRoutingRulesRoutingRuleCondition {
}

export function dataAwsccS3BucketWebsiteConfigurationRoutingRulesRoutingRuleConditionToTerraform(struct?: DataAwsccS3BucketWebsiteConfigurationRoutingRulesRoutingRuleCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketWebsiteConfigurationRoutingRulesRoutingRuleConditionToHclTerraform(struct?: DataAwsccS3BucketWebsiteConfigurationRoutingRulesRoutingRuleCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketWebsiteConfigurationRoutingRulesRoutingRuleConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketWebsiteConfigurationRoutingRulesRoutingRuleCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketWebsiteConfigurationRoutingRulesRoutingRuleCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // http_error_code_returned_equals - computed: true, optional: false, required: false
  public get httpErrorCodeReturnedEquals() {
    return this.getStringAttribute('http_error_code_returned_equals');
  }

  // key_prefix_equals - computed: true, optional: false, required: false
  public get keyPrefixEquals() {
    return this.getStringAttribute('key_prefix_equals');
  }
}
export interface DataAwsccS3BucketWebsiteConfigurationRoutingRules {
}

export function dataAwsccS3BucketWebsiteConfigurationRoutingRulesToTerraform(struct?: DataAwsccS3BucketWebsiteConfigurationRoutingRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketWebsiteConfigurationRoutingRulesToHclTerraform(struct?: DataAwsccS3BucketWebsiteConfigurationRoutingRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketWebsiteConfigurationRoutingRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3BucketWebsiteConfigurationRoutingRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketWebsiteConfigurationRoutingRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // redirect_rule - computed: true, optional: false, required: false
  private _redirectRule = new DataAwsccS3BucketWebsiteConfigurationRoutingRulesRedirectRuleOutputReference(this, "redirect_rule");
  public get redirectRule() {
    return this._redirectRule;
  }

  // routing_rule_condition - computed: true, optional: false, required: false
  private _routingRuleCondition = new DataAwsccS3BucketWebsiteConfigurationRoutingRulesRoutingRuleConditionOutputReference(this, "routing_rule_condition");
  public get routingRuleCondition() {
    return this._routingRuleCondition;
  }
}

export class DataAwsccS3BucketWebsiteConfigurationRoutingRulesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3BucketWebsiteConfigurationRoutingRulesOutputReference {
    return new DataAwsccS3BucketWebsiteConfigurationRoutingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccS3BucketWebsiteConfiguration {
}

export function dataAwsccS3BucketWebsiteConfigurationToTerraform(struct?: DataAwsccS3BucketWebsiteConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3BucketWebsiteConfigurationToHclTerraform(struct?: DataAwsccS3BucketWebsiteConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3BucketWebsiteConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3BucketWebsiteConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3BucketWebsiteConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_document - computed: true, optional: false, required: false
  public get errorDocument() {
    return this.getStringAttribute('error_document');
  }

  // index_document - computed: true, optional: false, required: false
  public get indexDocument() {
    return this.getStringAttribute('index_document');
  }

  // redirect_all_requests_to - computed: true, optional: false, required: false
  private _redirectAllRequestsTo = new DataAwsccS3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference(this, "redirect_all_requests_to");
  public get redirectAllRequestsTo() {
    return this._redirectAllRequestsTo;
  }

  // routing_rules - computed: true, optional: false, required: false
  private _routingRules = new DataAwsccS3BucketWebsiteConfigurationRoutingRulesList(this, "routing_rules", false);
  public get routingRules() {
    return this._routingRules;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/s3_bucket awscc_s3_bucket}
*/
export class DataAwsccS3Bucket extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_s3_bucket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccS3Bucket resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccS3Bucket to import
  * @param importFromId The id of the existing DataAwsccS3Bucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/s3_bucket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccS3Bucket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_s3_bucket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/s3_bucket awscc_s3_bucket} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccS3BucketConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccS3BucketConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_s3_bucket',
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

  // accelerate_configuration - computed: true, optional: false, required: false
  private _accelerateConfiguration = new DataAwsccS3BucketAccelerateConfigurationOutputReference(this, "accelerate_configuration");
  public get accelerateConfiguration() {
    return this._accelerateConfiguration;
  }

  // access_control - computed: true, optional: false, required: false
  public get accessControl() {
    return this.getStringAttribute('access_control');
  }

  // analytics_configurations - computed: true, optional: false, required: false
  private _analyticsConfigurations = new DataAwsccS3BucketAnalyticsConfigurationsList(this, "analytics_configurations", false);
  public get analyticsConfigurations() {
    return this._analyticsConfigurations;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // bucket_encryption - computed: true, optional: false, required: false
  private _bucketEncryption = new DataAwsccS3BucketBucketEncryptionOutputReference(this, "bucket_encryption");
  public get bucketEncryption() {
    return this._bucketEncryption;
  }

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // cors_configuration - computed: true, optional: false, required: false
  private _corsConfiguration = new DataAwsccS3BucketCorsConfigurationOutputReference(this, "cors_configuration");
  public get corsConfiguration() {
    return this._corsConfiguration;
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // dual_stack_domain_name - computed: true, optional: false, required: false
  public get dualStackDomainName() {
    return this.getStringAttribute('dual_stack_domain_name');
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

  // intelligent_tiering_configurations - computed: true, optional: false, required: false
  private _intelligentTieringConfigurations = new DataAwsccS3BucketIntelligentTieringConfigurationsList(this, "intelligent_tiering_configurations", false);
  public get intelligentTieringConfigurations() {
    return this._intelligentTieringConfigurations;
  }

  // inventory_configurations - computed: true, optional: false, required: false
  private _inventoryConfigurations = new DataAwsccS3BucketInventoryConfigurationsList(this, "inventory_configurations", false);
  public get inventoryConfigurations() {
    return this._inventoryConfigurations;
  }

  // lifecycle_configuration - computed: true, optional: false, required: false
  private _lifecycleConfiguration = new DataAwsccS3BucketLifecycleConfigurationOutputReference(this, "lifecycle_configuration");
  public get lifecycleConfiguration() {
    return this._lifecycleConfiguration;
  }

  // logging_configuration - computed: true, optional: false, required: false
  private _loggingConfiguration = new DataAwsccS3BucketLoggingConfigurationOutputReference(this, "logging_configuration");
  public get loggingConfiguration() {
    return this._loggingConfiguration;
  }

  // metadata_table_configuration - computed: true, optional: false, required: false
  private _metadataTableConfiguration = new DataAwsccS3BucketMetadataTableConfigurationOutputReference(this, "metadata_table_configuration");
  public get metadataTableConfiguration() {
    return this._metadataTableConfiguration;
  }

  // metrics_configurations - computed: true, optional: false, required: false
  private _metricsConfigurations = new DataAwsccS3BucketMetricsConfigurationsList(this, "metrics_configurations", false);
  public get metricsConfigurations() {
    return this._metricsConfigurations;
  }

  // notification_configuration - computed: true, optional: false, required: false
  private _notificationConfiguration = new DataAwsccS3BucketNotificationConfigurationOutputReference(this, "notification_configuration");
  public get notificationConfiguration() {
    return this._notificationConfiguration;
  }

  // object_lock_configuration - computed: true, optional: false, required: false
  private _objectLockConfiguration = new DataAwsccS3BucketObjectLockConfigurationOutputReference(this, "object_lock_configuration");
  public get objectLockConfiguration() {
    return this._objectLockConfiguration;
  }

  // object_lock_enabled - computed: true, optional: false, required: false
  public get objectLockEnabled() {
    return this.getBooleanAttribute('object_lock_enabled');
  }

  // ownership_controls - computed: true, optional: false, required: false
  private _ownershipControls = new DataAwsccS3BucketOwnershipControlsOutputReference(this, "ownership_controls");
  public get ownershipControls() {
    return this._ownershipControls;
  }

  // public_access_block_configuration - computed: true, optional: false, required: false
  private _publicAccessBlockConfiguration = new DataAwsccS3BucketPublicAccessBlockConfigurationOutputReference(this, "public_access_block_configuration");
  public get publicAccessBlockConfiguration() {
    return this._publicAccessBlockConfiguration;
  }

  // regional_domain_name - computed: true, optional: false, required: false
  public get regionalDomainName() {
    return this.getStringAttribute('regional_domain_name');
  }

  // replication_configuration - computed: true, optional: false, required: false
  private _replicationConfiguration = new DataAwsccS3BucketReplicationConfigurationOutputReference(this, "replication_configuration");
  public get replicationConfiguration() {
    return this._replicationConfiguration;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccS3BucketTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // versioning_configuration - computed: true, optional: false, required: false
  private _versioningConfiguration = new DataAwsccS3BucketVersioningConfigurationOutputReference(this, "versioning_configuration");
  public get versioningConfiguration() {
    return this._versioningConfiguration;
  }

  // website_configuration - computed: true, optional: false, required: false
  private _websiteConfiguration = new DataAwsccS3BucketWebsiteConfigurationOutputReference(this, "website_configuration");
  public get websiteConfiguration() {
    return this._websiteConfiguration;
  }

  // website_url - computed: true, optional: false, required: false
  public get websiteUrl() {
    return this.getStringAttribute('website_url');
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
