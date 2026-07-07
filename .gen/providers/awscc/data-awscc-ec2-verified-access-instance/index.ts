// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_verified_access_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccEc2VerifiedAccessInstanceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_verified_access_instance#id DataAwsccEc2VerifiedAccessInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs {
}

export function dataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsToTerraform(struct?: DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsToHclTerraform(struct?: DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_group - computed: true, optional: false, required: false
  public get logGroup() {
    return this.getStringAttribute('log_group');
  }
}
export interface DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose {
}

export function dataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseToTerraform(struct?: DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseToHclTerraform(struct?: DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delivery_stream - computed: true, optional: false, required: false
  public get deliveryStream() {
    return this.getStringAttribute('delivery_stream');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3 {
}

export function dataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3ToTerraform(struct?: DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3ToHclTerraform(struct?: DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // bucket_owner - computed: true, optional: false, required: false
  public get bucketOwner() {
    return this.getStringAttribute('bucket_owner');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}
export interface DataAwsccEc2VerifiedAccessInstanceLoggingConfigurations {
}

export function dataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsToTerraform(struct?: DataAwsccEc2VerifiedAccessInstanceLoggingConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsToHclTerraform(struct?: DataAwsccEc2VerifiedAccessInstanceLoggingConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2VerifiedAccessInstanceLoggingConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VerifiedAccessInstanceLoggingConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudwatch_logs - computed: true, optional: false, required: false
  private _cloudwatchLogs = new DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference(this, "cloudwatch_logs");
  public get cloudwatchLogs() {
    return this._cloudwatchLogs;
  }

  // include_trust_context - computed: true, optional: false, required: false
  public get includeTrustContext() {
    return this.getBooleanAttribute('include_trust_context');
  }

  // kinesis_data_firehose - computed: true, optional: false, required: false
  private _kinesisDataFirehose = new DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference(this, "kinesis_data_firehose");
  public get kinesisDataFirehose() {
    return this._kinesisDataFirehose;
  }

  // log_version - computed: true, optional: false, required: false
  public get logVersion() {
    return this.getStringAttribute('log_version');
  }

  // s3 - computed: true, optional: false, required: false
  private _s3 = new DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
}
export interface DataAwsccEc2VerifiedAccessInstanceTags {
}

export function dataAwsccEc2VerifiedAccessInstanceTagsToTerraform(struct?: DataAwsccEc2VerifiedAccessInstanceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VerifiedAccessInstanceTagsToHclTerraform(struct?: DataAwsccEc2VerifiedAccessInstanceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VerifiedAccessInstanceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2VerifiedAccessInstanceTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VerifiedAccessInstanceTags | undefined) {
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

export class DataAwsccEc2VerifiedAccessInstanceTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2VerifiedAccessInstanceTagsOutputReference {
    return new DataAwsccEc2VerifiedAccessInstanceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProviders {
}

export function dataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersToTerraform(struct?: DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProviders): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersToHclTerraform(struct?: DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProviders): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProviders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProviders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_trust_provider_type - computed: true, optional: false, required: false
  public get deviceTrustProviderType() {
    return this.getStringAttribute('device_trust_provider_type');
  }

  // trust_provider_type - computed: true, optional: false, required: false
  public get trustProviderType() {
    return this.getStringAttribute('trust_provider_type');
  }

  // user_trust_provider_type - computed: true, optional: false, required: false
  public get userTrustProviderType() {
    return this.getStringAttribute('user_trust_provider_type');
  }

  // verified_access_trust_provider_id - computed: true, optional: false, required: false
  public get verifiedAccessTrustProviderId() {
    return this.getStringAttribute('verified_access_trust_provider_id');
  }
}

export class DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference {
    return new DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_verified_access_instance awscc_ec2_verified_access_instance}
*/
export class DataAwsccEc2VerifiedAccessInstance extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_verified_access_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccEc2VerifiedAccessInstance resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccEc2VerifiedAccessInstance to import
  * @param importFromId The id of the existing DataAwsccEc2VerifiedAccessInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_verified_access_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccEc2VerifiedAccessInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_verified_access_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_verified_access_instance awscc_ec2_verified_access_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEc2VerifiedAccessInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEc2VerifiedAccessInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_verified_access_instance',
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

  // cidr_endpoints_custom_sub_domain - computed: true, optional: false, required: false
  public get cidrEndpointsCustomSubDomain() {
    return this.getStringAttribute('cidr_endpoints_custom_sub_domain');
  }

  // cidr_endpoints_custom_sub_domain_name_servers - computed: true, optional: false, required: false
  public get cidrEndpointsCustomSubDomainNameServers() {
    return this.getListAttribute('cidr_endpoints_custom_sub_domain_name_servers');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // fips_enabled - computed: true, optional: false, required: false
  public get fipsEnabled() {
    return this.getBooleanAttribute('fips_enabled');
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

  // logging_configurations - computed: true, optional: false, required: false
  private _loggingConfigurations = new DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference(this, "logging_configurations");
  public get loggingConfigurations() {
    return this._loggingConfigurations;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccEc2VerifiedAccessInstanceTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // verified_access_instance_id - computed: true, optional: false, required: false
  public get verifiedAccessInstanceId() {
    return this.getStringAttribute('verified_access_instance_id');
  }

  // verified_access_trust_provider_ids - computed: true, optional: false, required: false
  public get verifiedAccessTrustProviderIds() {
    return cdktn.Fn.tolist(this.getListAttribute('verified_access_trust_provider_ids'));
  }

  // verified_access_trust_providers - computed: true, optional: false, required: false
  private _verifiedAccessTrustProviders = new DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList(this, "verified_access_trust_providers", true);
  public get verifiedAccessTrustProviders() {
    return this._verifiedAccessTrustProviders;
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
