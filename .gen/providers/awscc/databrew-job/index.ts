// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DatabrewJobConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#data_catalog_outputs DatabrewJob#data_catalog_outputs}
  */
  readonly dataCatalogOutputs?: DatabrewJobDataCatalogOutputs[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#database_outputs DatabrewJob#database_outputs}
  */
  readonly databaseOutputs?: DatabrewJobDatabaseOutputs[] | cdktn.IResolvable;
  /**
  * Dataset name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#dataset_name DatabrewJob#dataset_name}
  */
  readonly datasetName?: string;
  /**
  * Encryption Key Arn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#encryption_key_arn DatabrewJob#encryption_key_arn}
  */
  readonly encryptionKeyArn?: string;
  /**
  * Encryption mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#encryption_mode DatabrewJob#encryption_mode}
  */
  readonly encryptionMode?: string;
  /**
  * Job Sample
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#job_sample DatabrewJob#job_sample}
  */
  readonly jobSample?: DatabrewJobJobSample;
  /**
  * Log subscription
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#log_subscription DatabrewJob#log_subscription}
  */
  readonly logSubscription?: string;
  /**
  * Max capacity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#max_capacity DatabrewJob#max_capacity}
  */
  readonly maxCapacity?: number;
  /**
  * Max retries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#max_retries DatabrewJob#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Job name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#name DatabrewJob#name}
  */
  readonly name: string;
  /**
  * Output location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#output_location DatabrewJob#output_location}
  */
  readonly outputLocation?: DatabrewJobOutputLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#outputs DatabrewJob#outputs}
  */
  readonly outputs?: DatabrewJobOutputs[] | cdktn.IResolvable;
  /**
  * Profile Job configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#profile_configuration DatabrewJob#profile_configuration}
  */
  readonly profileConfiguration?: DatabrewJobProfileConfiguration;
  /**
  * Project name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#project_name DatabrewJob#project_name}
  */
  readonly projectName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#recipe DatabrewJob#recipe}
  */
  readonly recipe?: DatabrewJobRecipe;
  /**
  * Role arn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#role_arn DatabrewJob#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#tags DatabrewJob#tags}
  */
  readonly tags?: DatabrewJobTags[] | cdktn.IResolvable;
  /**
  * Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#timeout DatabrewJob#timeout}
  */
  readonly timeout?: number;
  /**
  * Job type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#type DatabrewJob#type}
  */
  readonly type: string;
  /**
  * Data quality rules configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#validation_configurations DatabrewJob#validation_configurations}
  */
  readonly validationConfigurations?: DatabrewJobValidationConfigurations[] | cdktn.IResolvable;
}
export interface DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}
  */
  readonly bucketOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#key DatabrewJob#key}
  */
  readonly key?: string;
}

export function databrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryToTerraform(struct?: DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    bucket_owner: cdktn.stringToTerraform(struct!.bucketOwner),
    key: cdktn.stringToTerraform(struct!.key),
  }
}


export function databrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryToHclTerraform(struct?: DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_owner: {
      value: cdktn.stringToHclTerraform(struct!.bucketOwner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._bucketOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketOwner = this._bucketOwner;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._bucketOwner = undefined;
      this._key = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._bucketOwner = value.bucketOwner;
      this._key = value.key;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string;
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // bucket_owner - computed: true, optional: true, required: false
  private _bucketOwner?: string;
  public get bucketOwner() {
    return this.getStringAttribute('bucket_owner');
  }
  public set bucketOwner(value: string) {
    this._bucketOwner = value;
  }
  public resetBucketOwner() {
    this._bucketOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketOwnerInput() {
    return this._bucketOwner;
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
}
export interface DatabrewJobDataCatalogOutputsDatabaseOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#table_name DatabrewJob#table_name}
  */
  readonly tableName?: string;
  /**
  * S3 Output location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#temp_directory DatabrewJob#temp_directory}
  */
  readonly tempDirectory?: DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory;
}

export function databrewJobDataCatalogOutputsDatabaseOptionsToTerraform(struct?: DatabrewJobDataCatalogOutputsDatabaseOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    table_name: cdktn.stringToTerraform(struct!.tableName),
    temp_directory: databrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryToTerraform(struct!.tempDirectory),
  }
}


export function databrewJobDataCatalogOutputsDatabaseOptionsToHclTerraform(struct?: DatabrewJobDataCatalogOutputsDatabaseOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    table_name: {
      value: cdktn.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    temp_directory: {
      value: databrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryToHclTerraform(struct!.tempDirectory),
      isBlock: true,
      type: "struct",
      storageClassType: "DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabrewJobDataCatalogOutputsDatabaseOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._tempDirectory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tempDirectory = this._tempDirectory?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewJobDataCatalogOutputsDatabaseOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tableName = undefined;
      this._tempDirectory.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tableName = value.tableName;
      this._tempDirectory.internalValue = value.tempDirectory;
    }
  }

  // table_name - computed: true, optional: true, required: false
  private _tableName?: string;
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  public resetTableName() {
    this._tableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // temp_directory - computed: true, optional: true, required: false
  private _tempDirectory = new DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference(this, "temp_directory");
  public get tempDirectory() {
    return this._tempDirectory;
  }
  public putTempDirectory(value: DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory) {
    this._tempDirectory.internalValue = value;
  }
  public resetTempDirectory() {
    this._tempDirectory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tempDirectoryInput() {
    return this._tempDirectory.internalValue;
  }
}
export interface DatabrewJobDataCatalogOutputsS3OptionsLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}
  */
  readonly bucketOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#key DatabrewJob#key}
  */
  readonly key?: string;
}

export function databrewJobDataCatalogOutputsS3OptionsLocationToTerraform(struct?: DatabrewJobDataCatalogOutputsS3OptionsLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    bucket_owner: cdktn.stringToTerraform(struct!.bucketOwner),
    key: cdktn.stringToTerraform(struct!.key),
  }
}


export function databrewJobDataCatalogOutputsS3OptionsLocationToHclTerraform(struct?: DatabrewJobDataCatalogOutputsS3OptionsLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_owner: {
      value: cdktn.stringToHclTerraform(struct!.bucketOwner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabrewJobDataCatalogOutputsS3OptionsLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._bucketOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketOwner = this._bucketOwner;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewJobDataCatalogOutputsS3OptionsLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._bucketOwner = undefined;
      this._key = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._bucketOwner = value.bucketOwner;
      this._key = value.key;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string;
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // bucket_owner - computed: true, optional: true, required: false
  private _bucketOwner?: string;
  public get bucketOwner() {
    return this.getStringAttribute('bucket_owner');
  }
  public set bucketOwner(value: string) {
    this._bucketOwner = value;
  }
  public resetBucketOwner() {
    this._bucketOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketOwnerInput() {
    return this._bucketOwner;
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
}
export interface DatabrewJobDataCatalogOutputsS3Options {
  /**
  * S3 Output location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#location DatabrewJob#location}
  */
  readonly location?: DatabrewJobDataCatalogOutputsS3OptionsLocation;
}

export function databrewJobDataCatalogOutputsS3OptionsToTerraform(struct?: DatabrewJobDataCatalogOutputsS3Options | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    location: databrewJobDataCatalogOutputsS3OptionsLocationToTerraform(struct!.location),
  }
}


export function databrewJobDataCatalogOutputsS3OptionsToHclTerraform(struct?: DatabrewJobDataCatalogOutputsS3Options | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    location: {
      value: databrewJobDataCatalogOutputsS3OptionsLocationToHclTerraform(struct!.location),
      isBlock: true,
      type: "struct",
      storageClassType: "DatabrewJobDataCatalogOutputsS3OptionsLocation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewJobDataCatalogOutputsS3OptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabrewJobDataCatalogOutputsS3Options | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewJobDataCatalogOutputsS3Options | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._location.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._location.internalValue = value.location;
    }
  }

  // location - computed: true, optional: true, required: false
  private _location = new DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DatabrewJobDataCatalogOutputsS3OptionsLocation) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }
}
export interface DatabrewJobDataCatalogOutputs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#catalog_id DatabrewJob#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#database_name DatabrewJob#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#database_options DatabrewJob#database_options}
  */
  readonly databaseOptions?: DatabrewJobDataCatalogOutputsDatabaseOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#overwrite DatabrewJob#overwrite}
  */
  readonly overwrite?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#s3_options DatabrewJob#s3_options}
  */
  readonly s3Options?: DatabrewJobDataCatalogOutputsS3Options;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#table_name DatabrewJob#table_name}
  */
  readonly tableName?: string;
}

export function databrewJobDataCatalogOutputsToTerraform(struct?: DatabrewJobDataCatalogOutputs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    catalog_id: cdktn.stringToTerraform(struct!.catalogId),
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    database_options: databrewJobDataCatalogOutputsDatabaseOptionsToTerraform(struct!.databaseOptions),
    overwrite: cdktn.booleanToTerraform(struct!.overwrite),
    s3_options: databrewJobDataCatalogOutputsS3OptionsToTerraform(struct!.s3Options),
    table_name: cdktn.stringToTerraform(struct!.tableName),
  }
}


export function databrewJobDataCatalogOutputsToHclTerraform(struct?: DatabrewJobDataCatalogOutputs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    catalog_id: {
      value: cdktn.stringToHclTerraform(struct!.catalogId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_name: {
      value: cdktn.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_options: {
      value: databrewJobDataCatalogOutputsDatabaseOptionsToHclTerraform(struct!.databaseOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DatabrewJobDataCatalogOutputsDatabaseOptions",
    },
    overwrite: {
      value: cdktn.booleanToHclTerraform(struct!.overwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    s3_options: {
      value: databrewJobDataCatalogOutputsS3OptionsToHclTerraform(struct!.s3Options),
      isBlock: true,
      type: "struct",
      storageClassType: "DatabrewJobDataCatalogOutputsS3Options",
    },
    table_name: {
      value: cdktn.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewJobDataCatalogOutputsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatabrewJobDataCatalogOutputs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogId !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogId = this._catalogId;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._databaseOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseOptions = this._databaseOptions?.internalValue;
    }
    if (this._overwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwrite = this._overwrite;
    }
    if (this._s3Options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Options = this._s3Options?.internalValue;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewJobDataCatalogOutputs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalogId = undefined;
      this._databaseName = undefined;
      this._databaseOptions.internalValue = undefined;
      this._overwrite = undefined;
      this._s3Options.internalValue = undefined;
      this._tableName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalogId = value.catalogId;
      this._databaseName = value.databaseName;
      this._databaseOptions.internalValue = value.databaseOptions;
      this._overwrite = value.overwrite;
      this._s3Options.internalValue = value.s3Options;
      this._tableName = value.tableName;
    }
  }

  // catalog_id - computed: true, optional: true, required: false
  private _catalogId?: string;
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string) {
    this._catalogId = value;
  }
  public resetCatalogId() {
    this._catalogId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId;
  }

  // database_name - computed: true, optional: true, required: false
  private _databaseName?: string;
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // database_options - computed: true, optional: true, required: false
  private _databaseOptions = new DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference(this, "database_options");
  public get databaseOptions() {
    return this._databaseOptions;
  }
  public putDatabaseOptions(value: DatabrewJobDataCatalogOutputsDatabaseOptions) {
    this._databaseOptions.internalValue = value;
  }
  public resetDatabaseOptions() {
    this._databaseOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseOptionsInput() {
    return this._databaseOptions.internalValue;
  }

  // overwrite - computed: true, optional: true, required: false
  private _overwrite?: boolean | cdktn.IResolvable;
  public get overwrite() {
    return this.getBooleanAttribute('overwrite');
  }
  public set overwrite(value: boolean | cdktn.IResolvable) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }

  // s3_options - computed: true, optional: true, required: false
  private _s3Options = new DatabrewJobDataCatalogOutputsS3OptionsOutputReference(this, "s3_options");
  public get s3Options() {
    return this._s3Options;
  }
  public putS3Options(value: DatabrewJobDataCatalogOutputsS3Options) {
    this._s3Options.internalValue = value;
  }
  public resetS3Options() {
    this._s3Options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OptionsInput() {
    return this._s3Options.internalValue;
  }

  // table_name - computed: true, optional: true, required: false
  private _tableName?: string;
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  public resetTableName() {
    this._tableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }
}

export class DatabrewJobDataCatalogOutputsList extends cdktn.ComplexList {
  public internalValue? : DatabrewJobDataCatalogOutputs[] | cdktn.IResolvable

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
  public get(index: number): DatabrewJobDataCatalogOutputsOutputReference {
    return new DatabrewJobDataCatalogOutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}
  */
  readonly bucketOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#key DatabrewJob#key}
  */
  readonly key?: string;
}

export function databrewJobDatabaseOutputsDatabaseOptionsTempDirectoryToTerraform(struct?: DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    bucket_owner: cdktn.stringToTerraform(struct!.bucketOwner),
    key: cdktn.stringToTerraform(struct!.key),
  }
}


export function databrewJobDatabaseOutputsDatabaseOptionsTempDirectoryToHclTerraform(struct?: DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_owner: {
      value: cdktn.stringToHclTerraform(struct!.bucketOwner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._bucketOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketOwner = this._bucketOwner;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._bucketOwner = undefined;
      this._key = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._bucketOwner = value.bucketOwner;
      this._key = value.key;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string;
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // bucket_owner - computed: true, optional: true, required: false
  private _bucketOwner?: string;
  public get bucketOwner() {
    return this.getStringAttribute('bucket_owner');
  }
  public set bucketOwner(value: string) {
    this._bucketOwner = value;
  }
  public resetBucketOwner() {
    this._bucketOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketOwnerInput() {
    return this._bucketOwner;
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
}
export interface DatabrewJobDatabaseOutputsDatabaseOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#table_name DatabrewJob#table_name}
  */
  readonly tableName?: string;
  /**
  * S3 Output location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#temp_directory DatabrewJob#temp_directory}
  */
  readonly tempDirectory?: DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory;
}

export function databrewJobDatabaseOutputsDatabaseOptionsToTerraform(struct?: DatabrewJobDatabaseOutputsDatabaseOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    table_name: cdktn.stringToTerraform(struct!.tableName),
    temp_directory: databrewJobDatabaseOutputsDatabaseOptionsTempDirectoryToTerraform(struct!.tempDirectory),
  }
}


export function databrewJobDatabaseOutputsDatabaseOptionsToHclTerraform(struct?: DatabrewJobDatabaseOutputsDatabaseOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    table_name: {
      value: cdktn.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    temp_directory: {
      value: databrewJobDatabaseOutputsDatabaseOptionsTempDirectoryToHclTerraform(struct!.tempDirectory),
      isBlock: true,
      type: "struct",
      storageClassType: "DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabrewJobDatabaseOutputsDatabaseOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._tempDirectory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tempDirectory = this._tempDirectory?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewJobDatabaseOutputsDatabaseOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tableName = undefined;
      this._tempDirectory.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tableName = value.tableName;
      this._tempDirectory.internalValue = value.tempDirectory;
    }
  }

  // table_name - computed: true, optional: true, required: false
  private _tableName?: string;
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  public resetTableName() {
    this._tableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // temp_directory - computed: true, optional: true, required: false
  private _tempDirectory = new DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference(this, "temp_directory");
  public get tempDirectory() {
    return this._tempDirectory;
  }
  public putTempDirectory(value: DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory) {
    this._tempDirectory.internalValue = value;
  }
  public resetTempDirectory() {
    this._tempDirectory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tempDirectoryInput() {
    return this._tempDirectory.internalValue;
  }
}
export interface DatabrewJobDatabaseOutputs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#database_options DatabrewJob#database_options}
  */
  readonly databaseOptions?: DatabrewJobDatabaseOutputsDatabaseOptions;
  /**
  * Database table name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#database_output_mode DatabrewJob#database_output_mode}
  */
  readonly databaseOutputMode?: string;
  /**
  * Glue connection name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#glue_connection_name DatabrewJob#glue_connection_name}
  */
  readonly glueConnectionName?: string;
}

export function databrewJobDatabaseOutputsToTerraform(struct?: DatabrewJobDatabaseOutputs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database_options: databrewJobDatabaseOutputsDatabaseOptionsToTerraform(struct!.databaseOptions),
    database_output_mode: cdktn.stringToTerraform(struct!.databaseOutputMode),
    glue_connection_name: cdktn.stringToTerraform(struct!.glueConnectionName),
  }
}


export function databrewJobDatabaseOutputsToHclTerraform(struct?: DatabrewJobDatabaseOutputs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database_options: {
      value: databrewJobDatabaseOutputsDatabaseOptionsToHclTerraform(struct!.databaseOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DatabrewJobDatabaseOutputsDatabaseOptions",
    },
    database_output_mode: {
      value: cdktn.stringToHclTerraform(struct!.databaseOutputMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glue_connection_name: {
      value: cdktn.stringToHclTerraform(struct!.glueConnectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewJobDatabaseOutputsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatabrewJobDatabaseOutputs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseOptions = this._databaseOptions?.internalValue;
    }
    if (this._databaseOutputMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseOutputMode = this._databaseOutputMode;
    }
    if (this._glueConnectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.glueConnectionName = this._glueConnectionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewJobDatabaseOutputs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseOptions.internalValue = undefined;
      this._databaseOutputMode = undefined;
      this._glueConnectionName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseOptions.internalValue = value.databaseOptions;
      this._databaseOutputMode = value.databaseOutputMode;
      this._glueConnectionName = value.glueConnectionName;
    }
  }

  // database_options - computed: true, optional: true, required: false
  private _databaseOptions = new DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference(this, "database_options");
  public get databaseOptions() {
    return this._databaseOptions;
  }
  public putDatabaseOptions(value: DatabrewJobDatabaseOutputsDatabaseOptions) {
    this._databaseOptions.internalValue = value;
  }
  public resetDatabaseOptions() {
    this._databaseOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseOptionsInput() {
    return this._databaseOptions.internalValue;
  }

  // database_output_mode - computed: true, optional: true, required: false
  private _databaseOutputMode?: string;
  public get databaseOutputMode() {
    return this.getStringAttribute('database_output_mode');
  }
  public set databaseOutputMode(value: string) {
    this._databaseOutputMode = value;
  }
  public resetDatabaseOutputMode() {
    this._databaseOutputMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseOutputModeInput() {
    return this._databaseOutputMode;
  }

  // glue_connection_name - computed: true, optional: true, required: false
  private _glueConnectionName?: string;
  public get glueConnectionName() {
    return this.getStringAttribute('glue_connection_name');
  }
  public set glueConnectionName(value: string) {
    this._glueConnectionName = value;
  }
  public resetGlueConnectionName() {
    this._glueConnectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glueConnectionNameInput() {
    return this._glueConnectionName;
  }
}

export class DatabrewJobDatabaseOutputsList extends cdktn.ComplexList {
  public internalValue? : DatabrewJobDatabaseOutputs[] | cdktn.IResolvable

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
  public get(index: number): DatabrewJobDatabaseOutputsOutputReference {
    return new DatabrewJobDatabaseOutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabrewJobJobSample {
  /**
  * Sample configuration mode for profile jobs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#mode DatabrewJob#mode}
  */
  readonly mode?: string;
  /**
  * Sample configuration size for profile jobs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#size DatabrewJob#size}
  */
  readonly size?: number;
}

export function databrewJobJobSampleToTerraform(struct?: DatabrewJobJobSample | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mode: cdktn.stringToTerraform(struct!.mode),
    size: cdktn.numberToTerraform(struct!.size),
  }
}


export function databrewJobJobSampleToHclTerraform(struct?: DatabrewJobJobSample | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktn.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewJobJobSampleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabrewJobJobSample | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewJobJobSample | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._size = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._size = value.size;
    }
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string;
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // size - computed: true, optional: true, required: false
  private _size?: number;
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface DatabrewJobOutputLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}
  */
  readonly bucketOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#key DatabrewJob#key}
  */
  readonly key?: string;
}

export function databrewJobOutputLocationToTerraform(struct?: DatabrewJobOutputLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    bucket_owner: cdktn.stringToTerraform(struct!.bucketOwner),
    key: cdktn.stringToTerraform(struct!.key),
  }
}


export function databrewJobOutputLocationToHclTerraform(struct?: DatabrewJobOutputLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_owner: {
      value: cdktn.stringToHclTerraform(struct!.bucketOwner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewJobOutputLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabrewJobOutputLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._bucketOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketOwner = this._bucketOwner;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewJobOutputLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._bucketOwner = undefined;
      this._key = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._bucketOwner = value.bucketOwner;
      this._key = value.key;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string;
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // bucket_owner - computed: true, optional: true, required: false
  private _bucketOwner?: string;
  public get bucketOwner() {
    return this.getStringAttribute('bucket_owner');
  }
  public set bucketOwner(value: string) {
    this._bucketOwner = value;
  }
  public resetBucketOwner() {
    this._bucketOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketOwnerInput() {
    return this._bucketOwner;
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
}
export interface DatabrewJobOutputsFormatOptionsCsv {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#delimiter DatabrewJob#delimiter}
  */
  readonly delimiter?: string;
}

export function databrewJobOutputsFormatOptionsCsvToTerraform(struct?: DatabrewJobOutputsFormatOptionsCsv | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delimiter: cdktn.stringToTerraform(struct!.delimiter),
  }
}


export function databrewJobOutputsFormatOptionsCsvToHclTerraform(struct?: DatabrewJobOutputsFormatOptionsCsv | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delimiter: {
      value: cdktn.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewJobOutputsFormatOptionsCsvOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabrewJobOutputsFormatOptionsCsv | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewJobOutputsFormatOptionsCsv | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delimiter = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delimiter = value.delimiter;
    }
  }

  // delimiter - computed: true, optional: true, required: false
  private _delimiter?: string;
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }
}
export interface DatabrewJobOutputsFormatOptions {
  /**
  * Output Csv options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#csv DatabrewJob#csv}
  */
  readonly csv?: DatabrewJobOutputsFormatOptionsCsv;
}

export function databrewJobOutputsFormatOptionsToTerraform(struct?: DatabrewJobOutputsFormatOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    csv: databrewJobOutputsFormatOptionsCsvToTerraform(struct!.csv),
  }
}


export function databrewJobOutputsFormatOptionsToHclTerraform(struct?: DatabrewJobOutputsFormatOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    csv: {
      value: databrewJobOutputsFormatOptionsCsvToHclTerraform(struct!.csv),
      isBlock: true,
      type: "struct",
      storageClassType: "DatabrewJobOutputsFormatOptionsCsv",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewJobOutputsFormatOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabrewJobOutputsFormatOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._csv?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csv = this._csv?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewJobOutputsFormatOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._csv.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._csv.internalValue = value.csv;
    }
  }

  // csv - computed: true, optional: true, required: false
  private _csv = new DatabrewJobOutputsFormatOptionsCsvOutputReference(this, "csv");
  public get csv() {
    return this._csv;
  }
  public putCsv(value: DatabrewJobOutputsFormatOptionsCsv) {
    this._csv.internalValue = value;
  }
  public resetCsv() {
    this._csv.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvInput() {
    return this._csv.internalValue;
  }
}
export interface DatabrewJobOutputsLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}
  */
  readonly bucketOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#key DatabrewJob#key}
  */
  readonly key?: string;
}

export function databrewJobOutputsLocationToTerraform(struct?: DatabrewJobOutputsLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    bucket_owner: cdktn.stringToTerraform(struct!.bucketOwner),
    key: cdktn.stringToTerraform(struct!.key),
  }
}


export function databrewJobOutputsLocationToHclTerraform(struct?: DatabrewJobOutputsLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_owner: {
      value: cdktn.stringToHclTerraform(struct!.bucketOwner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewJobOutputsLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabrewJobOutputsLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._bucketOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketOwner = this._bucketOwner;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewJobOutputsLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._bucketOwner = undefined;
      this._key = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._bucketOwner = value.bucketOwner;
      this._key = value.key;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string;
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // bucket_owner - computed: true, optional: true, required: false
  private _bucketOwner?: string;
  public get bucketOwner() {
    return this.getStringAttribute('bucket_owner');
  }
  public set bucketOwner(value: string) {
    this._bucketOwner = value;
  }
  public resetBucketOwner() {
    this._bucketOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketOwnerInput() {
    return this._bucketOwner;
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
}
export interface DatabrewJobOutputs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#compression_format DatabrewJob#compression_format}
  */
  readonly compressionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#format DatabrewJob#format}
  */
  readonly format?: string;
  /**
  * Format options for job Output
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#format_options DatabrewJob#format_options}
  */
  readonly formatOptions?: DatabrewJobOutputsFormatOptions;
  /**
  * S3 Output location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#location DatabrewJob#location}
  */
  readonly location?: DatabrewJobOutputsLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#max_output_files DatabrewJob#max_output_files}
  */
  readonly maxOutputFiles?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#overwrite DatabrewJob#overwrite}
  */
  readonly overwrite?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#partition_columns DatabrewJob#partition_columns}
  */
  readonly partitionColumns?: string[];
}

export function databrewJobOutputsToTerraform(struct?: DatabrewJobOutputs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    compression_format: cdktn.stringToTerraform(struct!.compressionFormat),
    format: cdktn.stringToTerraform(struct!.format),
    format_options: databrewJobOutputsFormatOptionsToTerraform(struct!.formatOptions),
    location: databrewJobOutputsLocationToTerraform(struct!.location),
    max_output_files: cdktn.numberToTerraform(struct!.maxOutputFiles),
    overwrite: cdktn.booleanToTerraform(struct!.overwrite),
    partition_columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.partitionColumns),
  }
}


export function databrewJobOutputsToHclTerraform(struct?: DatabrewJobOutputs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    compression_format: {
      value: cdktn.stringToHclTerraform(struct!.compressionFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktn.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format_options: {
      value: databrewJobOutputsFormatOptionsToHclTerraform(struct!.formatOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DatabrewJobOutputsFormatOptions",
    },
    location: {
      value: databrewJobOutputsLocationToHclTerraform(struct!.location),
      isBlock: true,
      type: "struct",
      storageClassType: "DatabrewJobOutputsLocation",
    },
    max_output_files: {
      value: cdktn.numberToHclTerraform(struct!.maxOutputFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    overwrite: {
      value: cdktn.booleanToHclTerraform(struct!.overwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    partition_columns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.partitionColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewJobOutputsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatabrewJobOutputs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionFormat = this._compressionFormat;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._formatOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatOptions = this._formatOptions?.internalValue;
    }
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    if (this._maxOutputFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOutputFiles = this._maxOutputFiles;
    }
    if (this._overwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwrite = this._overwrite;
    }
    if (this._partitionColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionColumns = this._partitionColumns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewJobOutputs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compressionFormat = undefined;
      this._format = undefined;
      this._formatOptions.internalValue = undefined;
      this._location.internalValue = undefined;
      this._maxOutputFiles = undefined;
      this._overwrite = undefined;
      this._partitionColumns = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compressionFormat = value.compressionFormat;
      this._format = value.format;
      this._formatOptions.internalValue = value.formatOptions;
      this._location.internalValue = value.location;
      this._maxOutputFiles = value.maxOutputFiles;
      this._overwrite = value.overwrite;
      this._partitionColumns = value.partitionColumns;
    }
  }

  // compression_format - computed: true, optional: true, required: false
  private _compressionFormat?: string;
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }
  public set compressionFormat(value: string) {
    this._compressionFormat = value;
  }
  public resetCompressionFormat() {
    this._compressionFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionFormatInput() {
    return this._compressionFormat;
  }

  // format - computed: true, optional: true, required: false
  private _format?: string;
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // format_options - computed: true, optional: true, required: false
  private _formatOptions = new DatabrewJobOutputsFormatOptionsOutputReference(this, "format_options");
  public get formatOptions() {
    return this._formatOptions;
  }
  public putFormatOptions(value: DatabrewJobOutputsFormatOptions) {
    this._formatOptions.internalValue = value;
  }
  public resetFormatOptions() {
    this._formatOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatOptionsInput() {
    return this._formatOptions.internalValue;
  }

  // location - computed: true, optional: true, required: false
  private _location = new DatabrewJobOutputsLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DatabrewJobOutputsLocation) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // max_output_files - computed: true, optional: true, required: false
  private _maxOutputFiles?: number;
  public get maxOutputFiles() {
    return this.getNumberAttribute('max_output_files');
  }
  public set maxOutputFiles(value: number) {
    this._maxOutputFiles = value;
  }
  public resetMaxOutputFiles() {
    this._maxOutputFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOutputFilesInput() {
    return this._maxOutputFiles;
  }

  // overwrite - computed: true, optional: true, required: false
  private _overwrite?: boolean | cdktn.IResolvable;
  public get overwrite() {
    return this.getBooleanAttribute('overwrite');
  }
  public set overwrite(value: boolean | cdktn.IResolvable) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }

  // partition_columns - computed: true, optional: true, required: false
  private _partitionColumns?: string[];
  public get partitionColumns() {
    return this.getListAttribute('partition_columns');
  }
  public set partitionColumns(value: string[]) {
    this._partitionColumns = value;
  }
  public resetPartitionColumns() {
    this._partitionColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionColumnsInput() {
    return this._partitionColumns;
  }
}

export class DatabrewJobOutputsList extends cdktn.ComplexList {
  public internalValue? : DatabrewJobOutputs[] | cdktn.IResolvable

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
  public get(index: number): DatabrewJobOutputsOutputReference {
    return new DatabrewJobOutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#name DatabrewJob#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#regex DatabrewJob#regex}
  */
  readonly regex?: string;
}

export function databrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsToTerraform(struct?: DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    regex: cdktn.stringToTerraform(struct!.regex),
  }
}


export function databrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsToHclTerraform(struct?: DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktn.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // regex - computed: true, optional: true, required: false
  private _regex?: string;
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}

export class DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList extends cdktn.ComplexList {
  public internalValue? : DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors[] | cdktn.IResolvable

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
  public get(index: number): DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference {
    return new DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#parameters DatabrewJob#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#statistic DatabrewJob#statistic}
  */
  readonly statistic?: string;
}

export function databrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesToTerraform(struct?: DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.parameters),
    statistic: cdktn.stringToTerraform(struct!.statistic),
  }
}


export function databrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesToHclTerraform(struct?: DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    statistic: {
      value: cdktn.stringToHclTerraform(struct!.statistic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._statistic !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistic = this._statistic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameters = undefined;
      this._statistic = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameters = value.parameters;
      this._statistic = value.statistic;
    }
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters?: { [key: string]: string };
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // statistic - computed: true, optional: true, required: false
  private _statistic?: string;
  public get statistic() {
    return this.getStringAttribute('statistic');
  }
  public set statistic(value: string) {
    this._statistic = value;
  }
  public resetStatistic() {
    this._statistic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticInput() {
    return this._statistic;
  }
}

export class DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList extends cdktn.ComplexList {
  public internalValue? : DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides[] | cdktn.IResolvable

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
  public get(index: number): DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference {
    return new DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#included_statistics DatabrewJob#included_statistics}
  */
  readonly includedStatistics?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#overrides DatabrewJob#overrides}
  */
  readonly overrides?: DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides[] | cdktn.IResolvable;
}

export function databrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsToTerraform(struct?: DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    included_statistics: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includedStatistics),
    overrides: cdktn.listMapper(databrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesToTerraform, false)(struct!.overrides),
  }
}


export function databrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsToHclTerraform(struct?: DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    included_statistics: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includedStatistics),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    overrides: {
      value: cdktn.listMapperHcl(databrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesToHclTerraform, false)(struct!.overrides),
      isBlock: true,
      type: "list",
      storageClassType: "DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includedStatistics !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedStatistics = this._includedStatistics;
    }
    if (this._overrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrides = this._overrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includedStatistics = undefined;
      this._overrides.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includedStatistics = value.includedStatistics;
      this._overrides.internalValue = value.overrides;
    }
  }

  // included_statistics - computed: true, optional: true, required: false
  private _includedStatistics?: string[];
  public get includedStatistics() {
    return this.getListAttribute('included_statistics');
  }
  public set includedStatistics(value: string[]) {
    this._includedStatistics = value;
  }
  public resetIncludedStatistics() {
    this._includedStatistics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedStatisticsInput() {
    return this._includedStatistics;
  }

  // overrides - computed: true, optional: true, required: false
  private _overrides = new DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList(this, "overrides", false);
  public get overrides() {
    return this._overrides;
  }
  public putOverrides(value: DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides[] | cdktn.IResolvable) {
    this._overrides.internalValue = value;
  }
  public resetOverrides() {
    this._overrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesInput() {
    return this._overrides.internalValue;
  }
}
export interface DatabrewJobProfileConfigurationColumnStatisticsConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#selectors DatabrewJob#selectors}
  */
  readonly selectors?: DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#statistics DatabrewJob#statistics}
  */
  readonly statistics?: DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics;
}

export function databrewJobProfileConfigurationColumnStatisticsConfigurationsToTerraform(struct?: DatabrewJobProfileConfigurationColumnStatisticsConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    selectors: cdktn.listMapper(databrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsToTerraform, false)(struct!.selectors),
    statistics: databrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsToTerraform(struct!.statistics),
  }
}


export function databrewJobProfileConfigurationColumnStatisticsConfigurationsToHclTerraform(struct?: DatabrewJobProfileConfigurationColumnStatisticsConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    selectors: {
      value: cdktn.listMapperHcl(databrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsToHclTerraform, false)(struct!.selectors),
      isBlock: true,
      type: "list",
      storageClassType: "DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList",
    },
    statistics: {
      value: databrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsToHclTerraform(struct!.statistics),
      isBlock: true,
      type: "struct",
      storageClassType: "DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatabrewJobProfileConfigurationColumnStatisticsConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors?.internalValue;
    }
    if (this._statistics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistics = this._statistics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewJobProfileConfigurationColumnStatisticsConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._selectors.internalValue = undefined;
      this._statistics.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._selectors.internalValue = value.selectors;
      this._statistics.internalValue = value.statistics;
    }
  }

  // selectors - computed: true, optional: true, required: false
  private _selectors = new DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList(this, "selectors", false);
  public get selectors() {
    return this._selectors;
  }
  public putSelectors(value: DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors[] | cdktn.IResolvable) {
    this._selectors.internalValue = value;
  }
  public resetSelectors() {
    this._selectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors.internalValue;
  }

  // statistics - computed: true, optional: true, required: false
  private _statistics = new DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference(this, "statistics");
  public get statistics() {
    return this._statistics;
  }
  public putStatistics(value: DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics) {
    this._statistics.internalValue = value;
  }
  public resetStatistics() {
    this._statistics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticsInput() {
    return this._statistics.internalValue;
  }
}

export class DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList extends cdktn.ComplexList {
  public internalValue? : DatabrewJobProfileConfigurationColumnStatisticsConfigurations[] | cdktn.IResolvable

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
  public get(index: number): DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference {
    return new DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#parameters DatabrewJob#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#statistic DatabrewJob#statistic}
  */
  readonly statistic?: string;
}

export function databrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesToTerraform(struct?: DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.parameters),
    statistic: cdktn.stringToTerraform(struct!.statistic),
  }
}


export function databrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesToHclTerraform(struct?: DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    statistic: {
      value: cdktn.stringToHclTerraform(struct!.statistic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._statistic !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistic = this._statistic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameters = undefined;
      this._statistic = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameters = value.parameters;
      this._statistic = value.statistic;
    }
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters?: { [key: string]: string };
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // statistic - computed: true, optional: true, required: false
  private _statistic?: string;
  public get statistic() {
    return this.getStringAttribute('statistic');
  }
  public set statistic(value: string) {
    this._statistic = value;
  }
  public resetStatistic() {
    this._statistic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticInput() {
    return this._statistic;
  }
}

export class DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList extends cdktn.ComplexList {
  public internalValue? : DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides[] | cdktn.IResolvable

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
  public get(index: number): DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference {
    return new DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabrewJobProfileConfigurationDatasetStatisticsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#included_statistics DatabrewJob#included_statistics}
  */
  readonly includedStatistics?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#overrides DatabrewJob#overrides}
  */
  readonly overrides?: DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides[] | cdktn.IResolvable;
}

export function databrewJobProfileConfigurationDatasetStatisticsConfigurationToTerraform(struct?: DatabrewJobProfileConfigurationDatasetStatisticsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    included_statistics: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includedStatistics),
    overrides: cdktn.listMapper(databrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesToTerraform, false)(struct!.overrides),
  }
}


export function databrewJobProfileConfigurationDatasetStatisticsConfigurationToHclTerraform(struct?: DatabrewJobProfileConfigurationDatasetStatisticsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    included_statistics: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includedStatistics),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    overrides: {
      value: cdktn.listMapperHcl(databrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesToHclTerraform, false)(struct!.overrides),
      isBlock: true,
      type: "list",
      storageClassType: "DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabrewJobProfileConfigurationDatasetStatisticsConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includedStatistics !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedStatistics = this._includedStatistics;
    }
    if (this._overrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrides = this._overrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewJobProfileConfigurationDatasetStatisticsConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includedStatistics = undefined;
      this._overrides.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includedStatistics = value.includedStatistics;
      this._overrides.internalValue = value.overrides;
    }
  }

  // included_statistics - computed: true, optional: true, required: false
  private _includedStatistics?: string[];
  public get includedStatistics() {
    return this.getListAttribute('included_statistics');
  }
  public set includedStatistics(value: string[]) {
    this._includedStatistics = value;
  }
  public resetIncludedStatistics() {
    this._includedStatistics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedStatisticsInput() {
    return this._includedStatistics;
  }

  // overrides - computed: true, optional: true, required: false
  private _overrides = new DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList(this, "overrides", false);
  public get overrides() {
    return this._overrides;
  }
  public putOverrides(value: DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides[] | cdktn.IResolvable) {
    this._overrides.internalValue = value;
  }
  public resetOverrides() {
    this._overrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesInput() {
    return this._overrides.internalValue;
  }
}
export interface DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#statistics DatabrewJob#statistics}
  */
  readonly statistics?: string[];
}

export function databrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsToTerraform(struct?: DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    statistics: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.statistics),
  }
}


export function databrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsToHclTerraform(struct?: DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    statistics: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.statistics),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statistics !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistics = this._statistics;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._statistics = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._statistics = value.statistics;
    }
  }

  // statistics - computed: true, optional: true, required: false
  private _statistics?: string[];
  public get statistics() {
    return this.getListAttribute('statistics');
  }
  public set statistics(value: string[]) {
    this._statistics = value;
  }
  public resetStatistics() {
    this._statistics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticsInput() {
    return this._statistics;
  }
}
export interface DatabrewJobProfileConfigurationEntityDetectorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#allowed_statistics DatabrewJob#allowed_statistics}
  */
  readonly allowedStatistics?: DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#entity_types DatabrewJob#entity_types}
  */
  readonly entityTypes?: string[];
}

export function databrewJobProfileConfigurationEntityDetectorConfigurationToTerraform(struct?: DatabrewJobProfileConfigurationEntityDetectorConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_statistics: databrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsToTerraform(struct!.allowedStatistics),
    entity_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.entityTypes),
  }
}


export function databrewJobProfileConfigurationEntityDetectorConfigurationToHclTerraform(struct?: DatabrewJobProfileConfigurationEntityDetectorConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_statistics: {
      value: databrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsToHclTerraform(struct!.allowedStatistics),
      isBlock: true,
      type: "struct",
      storageClassType: "DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics",
    },
    entity_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.entityTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabrewJobProfileConfigurationEntityDetectorConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedStatistics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedStatistics = this._allowedStatistics?.internalValue;
    }
    if (this._entityTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityTypes = this._entityTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewJobProfileConfigurationEntityDetectorConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedStatistics.internalValue = undefined;
      this._entityTypes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedStatistics.internalValue = value.allowedStatistics;
      this._entityTypes = value.entityTypes;
    }
  }

  // allowed_statistics - computed: true, optional: true, required: false
  private _allowedStatistics = new DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference(this, "allowed_statistics");
  public get allowedStatistics() {
    return this._allowedStatistics;
  }
  public putAllowedStatistics(value: DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics) {
    this._allowedStatistics.internalValue = value;
  }
  public resetAllowedStatistics() {
    this._allowedStatistics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedStatisticsInput() {
    return this._allowedStatistics.internalValue;
  }

  // entity_types - computed: true, optional: true, required: false
  private _entityTypes?: string[];
  public get entityTypes() {
    return this.getListAttribute('entity_types');
  }
  public set entityTypes(value: string[]) {
    this._entityTypes = value;
  }
  public resetEntityTypes() {
    this._entityTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypesInput() {
    return this._entityTypes;
  }
}
export interface DatabrewJobProfileConfigurationProfileColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#name DatabrewJob#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#regex DatabrewJob#regex}
  */
  readonly regex?: string;
}

export function databrewJobProfileConfigurationProfileColumnsToTerraform(struct?: DatabrewJobProfileConfigurationProfileColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    regex: cdktn.stringToTerraform(struct!.regex),
  }
}


export function databrewJobProfileConfigurationProfileColumnsToHclTerraform(struct?: DatabrewJobProfileConfigurationProfileColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktn.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewJobProfileConfigurationProfileColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatabrewJobProfileConfigurationProfileColumns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewJobProfileConfigurationProfileColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // regex - computed: true, optional: true, required: false
  private _regex?: string;
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}

export class DatabrewJobProfileConfigurationProfileColumnsList extends cdktn.ComplexList {
  public internalValue? : DatabrewJobProfileConfigurationProfileColumns[] | cdktn.IResolvable

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
  public get(index: number): DatabrewJobProfileConfigurationProfileColumnsOutputReference {
    return new DatabrewJobProfileConfigurationProfileColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabrewJobProfileConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#column_statistics_configurations DatabrewJob#column_statistics_configurations}
  */
  readonly columnStatisticsConfigurations?: DatabrewJobProfileConfigurationColumnStatisticsConfigurations[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#dataset_statistics_configuration DatabrewJob#dataset_statistics_configuration}
  */
  readonly datasetStatisticsConfiguration?: DatabrewJobProfileConfigurationDatasetStatisticsConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#entity_detector_configuration DatabrewJob#entity_detector_configuration}
  */
  readonly entityDetectorConfiguration?: DatabrewJobProfileConfigurationEntityDetectorConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#profile_columns DatabrewJob#profile_columns}
  */
  readonly profileColumns?: DatabrewJobProfileConfigurationProfileColumns[] | cdktn.IResolvable;
}

export function databrewJobProfileConfigurationToTerraform(struct?: DatabrewJobProfileConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column_statistics_configurations: cdktn.listMapper(databrewJobProfileConfigurationColumnStatisticsConfigurationsToTerraform, false)(struct!.columnStatisticsConfigurations),
    dataset_statistics_configuration: databrewJobProfileConfigurationDatasetStatisticsConfigurationToTerraform(struct!.datasetStatisticsConfiguration),
    entity_detector_configuration: databrewJobProfileConfigurationEntityDetectorConfigurationToTerraform(struct!.entityDetectorConfiguration),
    profile_columns: cdktn.listMapper(databrewJobProfileConfigurationProfileColumnsToTerraform, false)(struct!.profileColumns),
  }
}


export function databrewJobProfileConfigurationToHclTerraform(struct?: DatabrewJobProfileConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column_statistics_configurations: {
      value: cdktn.listMapperHcl(databrewJobProfileConfigurationColumnStatisticsConfigurationsToHclTerraform, false)(struct!.columnStatisticsConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList",
    },
    dataset_statistics_configuration: {
      value: databrewJobProfileConfigurationDatasetStatisticsConfigurationToHclTerraform(struct!.datasetStatisticsConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DatabrewJobProfileConfigurationDatasetStatisticsConfiguration",
    },
    entity_detector_configuration: {
      value: databrewJobProfileConfigurationEntityDetectorConfigurationToHclTerraform(struct!.entityDetectorConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DatabrewJobProfileConfigurationEntityDetectorConfiguration",
    },
    profile_columns: {
      value: cdktn.listMapperHcl(databrewJobProfileConfigurationProfileColumnsToHclTerraform, false)(struct!.profileColumns),
      isBlock: true,
      type: "list",
      storageClassType: "DatabrewJobProfileConfigurationProfileColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewJobProfileConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabrewJobProfileConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnStatisticsConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnStatisticsConfigurations = this._columnStatisticsConfigurations?.internalValue;
    }
    if (this._datasetStatisticsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetStatisticsConfiguration = this._datasetStatisticsConfiguration?.internalValue;
    }
    if (this._entityDetectorConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityDetectorConfiguration = this._entityDetectorConfiguration?.internalValue;
    }
    if (this._profileColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileColumns = this._profileColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewJobProfileConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnStatisticsConfigurations.internalValue = undefined;
      this._datasetStatisticsConfiguration.internalValue = undefined;
      this._entityDetectorConfiguration.internalValue = undefined;
      this._profileColumns.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnStatisticsConfigurations.internalValue = value.columnStatisticsConfigurations;
      this._datasetStatisticsConfiguration.internalValue = value.datasetStatisticsConfiguration;
      this._entityDetectorConfiguration.internalValue = value.entityDetectorConfiguration;
      this._profileColumns.internalValue = value.profileColumns;
    }
  }

  // column_statistics_configurations - computed: true, optional: true, required: false
  private _columnStatisticsConfigurations = new DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList(this, "column_statistics_configurations", false);
  public get columnStatisticsConfigurations() {
    return this._columnStatisticsConfigurations;
  }
  public putColumnStatisticsConfigurations(value: DatabrewJobProfileConfigurationColumnStatisticsConfigurations[] | cdktn.IResolvable) {
    this._columnStatisticsConfigurations.internalValue = value;
  }
  public resetColumnStatisticsConfigurations() {
    this._columnStatisticsConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnStatisticsConfigurationsInput() {
    return this._columnStatisticsConfigurations.internalValue;
  }

  // dataset_statistics_configuration - computed: true, optional: true, required: false
  private _datasetStatisticsConfiguration = new DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference(this, "dataset_statistics_configuration");
  public get datasetStatisticsConfiguration() {
    return this._datasetStatisticsConfiguration;
  }
  public putDatasetStatisticsConfiguration(value: DatabrewJobProfileConfigurationDatasetStatisticsConfiguration) {
    this._datasetStatisticsConfiguration.internalValue = value;
  }
  public resetDatasetStatisticsConfiguration() {
    this._datasetStatisticsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetStatisticsConfigurationInput() {
    return this._datasetStatisticsConfiguration.internalValue;
  }

  // entity_detector_configuration - computed: true, optional: true, required: false
  private _entityDetectorConfiguration = new DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference(this, "entity_detector_configuration");
  public get entityDetectorConfiguration() {
    return this._entityDetectorConfiguration;
  }
  public putEntityDetectorConfiguration(value: DatabrewJobProfileConfigurationEntityDetectorConfiguration) {
    this._entityDetectorConfiguration.internalValue = value;
  }
  public resetEntityDetectorConfiguration() {
    this._entityDetectorConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityDetectorConfigurationInput() {
    return this._entityDetectorConfiguration.internalValue;
  }

  // profile_columns - computed: true, optional: true, required: false
  private _profileColumns = new DatabrewJobProfileConfigurationProfileColumnsList(this, "profile_columns", false);
  public get profileColumns() {
    return this._profileColumns;
  }
  public putProfileColumns(value: DatabrewJobProfileConfigurationProfileColumns[] | cdktn.IResolvable) {
    this._profileColumns.internalValue = value;
  }
  public resetProfileColumns() {
    this._profileColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileColumnsInput() {
    return this._profileColumns.internalValue;
  }
}
export interface DatabrewJobRecipe {
  /**
  * Recipe name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#name DatabrewJob#name}
  */
  readonly name?: string;
  /**
  * Recipe version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#version DatabrewJob#version}
  */
  readonly version?: string;
}

export function databrewJobRecipeToTerraform(struct?: DatabrewJobRecipe | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function databrewJobRecipeToHclTerraform(struct?: DatabrewJobRecipe | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewJobRecipeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabrewJobRecipe | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewJobRecipe | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._version = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._version = value.version;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string;
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DatabrewJobTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#key DatabrewJob#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#value DatabrewJob#value}
  */
  readonly value?: string;
}

export function databrewJobTagsToTerraform(struct?: DatabrewJobTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function databrewJobTagsToHclTerraform(struct?: DatabrewJobTags | cdktn.IResolvable): any {
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

export class DatabrewJobTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatabrewJobTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DatabrewJobTags | cdktn.IResolvable | undefined) {
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

export class DatabrewJobTagsList extends cdktn.ComplexList {
  public internalValue? : DatabrewJobTags[] | cdktn.IResolvable

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
  public get(index: number): DatabrewJobTagsOutputReference {
    return new DatabrewJobTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabrewJobValidationConfigurations {
  /**
  * Arn of the Ruleset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#ruleset_arn DatabrewJob#ruleset_arn}
  */
  readonly rulesetArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#validation_mode DatabrewJob#validation_mode}
  */
  readonly validationMode?: string;
}

export function databrewJobValidationConfigurationsToTerraform(struct?: DatabrewJobValidationConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ruleset_arn: cdktn.stringToTerraform(struct!.rulesetArn),
    validation_mode: cdktn.stringToTerraform(struct!.validationMode),
  }
}


export function databrewJobValidationConfigurationsToHclTerraform(struct?: DatabrewJobValidationConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ruleset_arn: {
      value: cdktn.stringToHclTerraform(struct!.rulesetArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validation_mode: {
      value: cdktn.stringToHclTerraform(struct!.validationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewJobValidationConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatabrewJobValidationConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rulesetArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulesetArn = this._rulesetArn;
    }
    if (this._validationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationMode = this._validationMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewJobValidationConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rulesetArn = undefined;
      this._validationMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rulesetArn = value.rulesetArn;
      this._validationMode = value.validationMode;
    }
  }

  // ruleset_arn - computed: true, optional: true, required: false
  private _rulesetArn?: string;
  public get rulesetArn() {
    return this.getStringAttribute('ruleset_arn');
  }
  public set rulesetArn(value: string) {
    this._rulesetArn = value;
  }
  public resetRulesetArn() {
    this._rulesetArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesetArnInput() {
    return this._rulesetArn;
  }

  // validation_mode - computed: true, optional: true, required: false
  private _validationMode?: string;
  public get validationMode() {
    return this.getStringAttribute('validation_mode');
  }
  public set validationMode(value: string) {
    this._validationMode = value;
  }
  public resetValidationMode() {
    this._validationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationModeInput() {
    return this._validationMode;
  }
}

export class DatabrewJobValidationConfigurationsList extends cdktn.ComplexList {
  public internalValue? : DatabrewJobValidationConfigurations[] | cdktn.IResolvable

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
  public get(index: number): DatabrewJobValidationConfigurationsOutputReference {
    return new DatabrewJobValidationConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job awscc_databrew_job}
*/
export class DatabrewJob extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_databrew_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DatabrewJob resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabrewJob to import
  * @param importFromId The id of the existing DatabrewJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabrewJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_databrew_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_job awscc_databrew_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabrewJobConfig
  */
  public constructor(scope: Construct, id: string, config: DatabrewJobConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_databrew_job',
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
    this._dataCatalogOutputs.internalValue = config.dataCatalogOutputs;
    this._databaseOutputs.internalValue = config.databaseOutputs;
    this._datasetName = config.datasetName;
    this._encryptionKeyArn = config.encryptionKeyArn;
    this._encryptionMode = config.encryptionMode;
    this._jobSample.internalValue = config.jobSample;
    this._logSubscription = config.logSubscription;
    this._maxCapacity = config.maxCapacity;
    this._maxRetries = config.maxRetries;
    this._name = config.name;
    this._outputLocation.internalValue = config.outputLocation;
    this._outputs.internalValue = config.outputs;
    this._profileConfiguration.internalValue = config.profileConfiguration;
    this._projectName = config.projectName;
    this._recipe.internalValue = config.recipe;
    this._roleArn = config.roleArn;
    this._tags.internalValue = config.tags;
    this._timeout = config.timeout;
    this._type = config.type;
    this._validationConfigurations.internalValue = config.validationConfigurations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_catalog_outputs - computed: true, optional: true, required: false
  private _dataCatalogOutputs = new DatabrewJobDataCatalogOutputsList(this, "data_catalog_outputs", false);
  public get dataCatalogOutputs() {
    return this._dataCatalogOutputs;
  }
  public putDataCatalogOutputs(value: DatabrewJobDataCatalogOutputs[] | cdktn.IResolvable) {
    this._dataCatalogOutputs.internalValue = value;
  }
  public resetDataCatalogOutputs() {
    this._dataCatalogOutputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCatalogOutputsInput() {
    return this._dataCatalogOutputs.internalValue;
  }

  // database_outputs - computed: true, optional: true, required: false
  private _databaseOutputs = new DatabrewJobDatabaseOutputsList(this, "database_outputs", false);
  public get databaseOutputs() {
    return this._databaseOutputs;
  }
  public putDatabaseOutputs(value: DatabrewJobDatabaseOutputs[] | cdktn.IResolvable) {
    this._databaseOutputs.internalValue = value;
  }
  public resetDatabaseOutputs() {
    this._databaseOutputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseOutputsInput() {
    return this._databaseOutputs.internalValue;
  }

  // dataset_name - computed: true, optional: true, required: false
  private _datasetName?: string;
  public get datasetName() {
    return this.getStringAttribute('dataset_name');
  }
  public set datasetName(value: string) {
    this._datasetName = value;
  }
  public resetDatasetName() {
    this._datasetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetNameInput() {
    return this._datasetName;
  }

  // encryption_key_arn - computed: true, optional: true, required: false
  private _encryptionKeyArn?: string;
  public get encryptionKeyArn() {
    return this.getStringAttribute('encryption_key_arn');
  }
  public set encryptionKeyArn(value: string) {
    this._encryptionKeyArn = value;
  }
  public resetEncryptionKeyArn() {
    this._encryptionKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyArnInput() {
    return this._encryptionKeyArn;
  }

  // encryption_mode - computed: true, optional: true, required: false
  private _encryptionMode?: string;
  public get encryptionMode() {
    return this.getStringAttribute('encryption_mode');
  }
  public set encryptionMode(value: string) {
    this._encryptionMode = value;
  }
  public resetEncryptionMode() {
    this._encryptionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionModeInput() {
    return this._encryptionMode;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // job_sample - computed: true, optional: true, required: false
  private _jobSample = new DatabrewJobJobSampleOutputReference(this, "job_sample");
  public get jobSample() {
    return this._jobSample;
  }
  public putJobSample(value: DatabrewJobJobSample) {
    this._jobSample.internalValue = value;
  }
  public resetJobSample() {
    this._jobSample.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobSampleInput() {
    return this._jobSample.internalValue;
  }

  // log_subscription - computed: true, optional: true, required: false
  private _logSubscription?: string;
  public get logSubscription() {
    return this.getStringAttribute('log_subscription');
  }
  public set logSubscription(value: string) {
    this._logSubscription = value;
  }
  public resetLogSubscription() {
    this._logSubscription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSubscriptionInput() {
    return this._logSubscription;
  }

  // max_capacity - computed: true, optional: true, required: false
  private _maxCapacity?: number;
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }
  public set maxCapacity(value: number) {
    this._maxCapacity = value;
  }
  public resetMaxCapacity() {
    this._maxCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityInput() {
    return this._maxCapacity;
  }

  // max_retries - computed: true, optional: true, required: false
  private _maxRetries?: number;
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // output_location - computed: true, optional: true, required: false
  private _outputLocation = new DatabrewJobOutputLocationOutputReference(this, "output_location");
  public get outputLocation() {
    return this._outputLocation;
  }
  public putOutputLocation(value: DatabrewJobOutputLocation) {
    this._outputLocation.internalValue = value;
  }
  public resetOutputLocation() {
    this._outputLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputLocationInput() {
    return this._outputLocation.internalValue;
  }

  // outputs - computed: true, optional: true, required: false
  private _outputs = new DatabrewJobOutputsList(this, "outputs", false);
  public get outputs() {
    return this._outputs;
  }
  public putOutputs(value: DatabrewJobOutputs[] | cdktn.IResolvable) {
    this._outputs.internalValue = value;
  }
  public resetOutputs() {
    this._outputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputsInput() {
    return this._outputs.internalValue;
  }

  // profile_configuration - computed: true, optional: true, required: false
  private _profileConfiguration = new DatabrewJobProfileConfigurationOutputReference(this, "profile_configuration");
  public get profileConfiguration() {
    return this._profileConfiguration;
  }
  public putProfileConfiguration(value: DatabrewJobProfileConfiguration) {
    this._profileConfiguration.internalValue = value;
  }
  public resetProfileConfiguration() {
    this._profileConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileConfigurationInput() {
    return this._profileConfiguration.internalValue;
  }

  // project_name - computed: true, optional: true, required: false
  private _projectName?: string;
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // recipe - computed: true, optional: true, required: false
  private _recipe = new DatabrewJobRecipeOutputReference(this, "recipe");
  public get recipe() {
    return this._recipe;
  }
  public putRecipe(value: DatabrewJobRecipe) {
    this._recipe.internalValue = value;
  }
  public resetRecipe() {
    this._recipe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipeInput() {
    return this._recipe.internalValue;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new DatabrewJobTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DatabrewJobTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number;
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // validation_configurations - computed: true, optional: true, required: false
  private _validationConfigurations = new DatabrewJobValidationConfigurationsList(this, "validation_configurations", false);
  public get validationConfigurations() {
    return this._validationConfigurations;
  }
  public putValidationConfigurations(value: DatabrewJobValidationConfigurations[] | cdktn.IResolvable) {
    this._validationConfigurations.internalValue = value;
  }
  public resetValidationConfigurations() {
    this._validationConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationConfigurationsInput() {
    return this._validationConfigurations.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_catalog_outputs: cdktn.listMapper(databrewJobDataCatalogOutputsToTerraform, false)(this._dataCatalogOutputs.internalValue),
      database_outputs: cdktn.listMapper(databrewJobDatabaseOutputsToTerraform, false)(this._databaseOutputs.internalValue),
      dataset_name: cdktn.stringToTerraform(this._datasetName),
      encryption_key_arn: cdktn.stringToTerraform(this._encryptionKeyArn),
      encryption_mode: cdktn.stringToTerraform(this._encryptionMode),
      job_sample: databrewJobJobSampleToTerraform(this._jobSample.internalValue),
      log_subscription: cdktn.stringToTerraform(this._logSubscription),
      max_capacity: cdktn.numberToTerraform(this._maxCapacity),
      max_retries: cdktn.numberToTerraform(this._maxRetries),
      name: cdktn.stringToTerraform(this._name),
      output_location: databrewJobOutputLocationToTerraform(this._outputLocation.internalValue),
      outputs: cdktn.listMapper(databrewJobOutputsToTerraform, false)(this._outputs.internalValue),
      profile_configuration: databrewJobProfileConfigurationToTerraform(this._profileConfiguration.internalValue),
      project_name: cdktn.stringToTerraform(this._projectName),
      recipe: databrewJobRecipeToTerraform(this._recipe.internalValue),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      tags: cdktn.listMapper(databrewJobTagsToTerraform, false)(this._tags.internalValue),
      timeout: cdktn.numberToTerraform(this._timeout),
      type: cdktn.stringToTerraform(this._type),
      validation_configurations: cdktn.listMapper(databrewJobValidationConfigurationsToTerraform, false)(this._validationConfigurations.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_catalog_outputs: {
        value: cdktn.listMapperHcl(databrewJobDataCatalogOutputsToHclTerraform, false)(this._dataCatalogOutputs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabrewJobDataCatalogOutputsList",
      },
      database_outputs: {
        value: cdktn.listMapperHcl(databrewJobDatabaseOutputsToHclTerraform, false)(this._databaseOutputs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabrewJobDatabaseOutputsList",
      },
      dataset_name: {
        value: cdktn.stringToHclTerraform(this._datasetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_key_arn: {
        value: cdktn.stringToHclTerraform(this._encryptionKeyArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_mode: {
        value: cdktn.stringToHclTerraform(this._encryptionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_sample: {
        value: databrewJobJobSampleToHclTerraform(this._jobSample.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabrewJobJobSample",
      },
      log_subscription: {
        value: cdktn.stringToHclTerraform(this._logSubscription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_capacity: {
        value: cdktn.numberToHclTerraform(this._maxCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_retries: {
        value: cdktn.numberToHclTerraform(this._maxRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_location: {
        value: databrewJobOutputLocationToHclTerraform(this._outputLocation.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabrewJobOutputLocation",
      },
      outputs: {
        value: cdktn.listMapperHcl(databrewJobOutputsToHclTerraform, false)(this._outputs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabrewJobOutputsList",
      },
      profile_configuration: {
        value: databrewJobProfileConfigurationToHclTerraform(this._profileConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabrewJobProfileConfiguration",
      },
      project_name: {
        value: cdktn.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recipe: {
        value: databrewJobRecipeToHclTerraform(this._recipe.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabrewJobRecipe",
      },
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(databrewJobTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabrewJobTagsList",
      },
      timeout: {
        value: cdktn.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validation_configurations: {
        value: cdktn.listMapperHcl(databrewJobValidationConfigurationsToHclTerraform, false)(this._validationConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabrewJobValidationConfigurationsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
