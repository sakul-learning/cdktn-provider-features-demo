// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3tables_table_bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface S3TablesTableBucketConfig extends cdktn.TerraformMetaArguments {
  /**
  * Specifies encryption settings for the table bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3tables_table_bucket#encryption_configuration S3TablesTableBucket#encryption_configuration}
  */
  readonly encryptionConfiguration?: S3TablesTableBucketEncryptionConfiguration;
  /**
  * Settings governing the Metric configuration for the table bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3tables_table_bucket#metrics_configuration S3TablesTableBucket#metrics_configuration}
  */
  readonly metricsConfiguration?: S3TablesTableBucketMetricsConfiguration;
  /**
  * Specifies replication configuration for the table bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3tables_table_bucket#replication_configuration S3TablesTableBucket#replication_configuration}
  */
  readonly replicationConfiguration?: S3TablesTableBucketReplicationConfiguration;
  /**
  * Specifies storage class settings for the table bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3tables_table_bucket#storage_class_configuration S3TablesTableBucket#storage_class_configuration}
  */
  readonly storageClassConfiguration?: S3TablesTableBucketStorageClassConfiguration;
  /**
  * A name for the table bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3tables_table_bucket#table_bucket_name S3TablesTableBucket#table_bucket_name}
  */
  readonly tableBucketName: string;
  /**
  * User tags (key-value pairs) to associate with the table bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3tables_table_bucket#tags S3TablesTableBucket#tags}
  */
  readonly tags?: S3TablesTableBucketTags[] | cdktn.IResolvable;
  /**
  * Settings governing the Unreferenced File Removal maintenance action. Unreferenced file removal identifies and deletes all objects that are not referenced by any table snapshots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3tables_table_bucket#unreferenced_file_removal S3TablesTableBucket#unreferenced_file_removal}
  */
  readonly unreferencedFileRemoval?: S3TablesTableBucketUnreferencedFileRemoval;
}
export interface S3TablesTableBucketEncryptionConfiguration {
  /**
  * ARN of the KMS key to use for encryption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3tables_table_bucket#kms_key_arn S3TablesTableBucket#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Server-side encryption algorithm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3tables_table_bucket#sse_algorithm S3TablesTableBucket#sse_algorithm}
  */
  readonly sseAlgorithm?: string;
}

export function s3TablesTableBucketEncryptionConfigurationToTerraform(struct?: S3TablesTableBucketEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    sse_algorithm: cdktn.stringToTerraform(struct!.sseAlgorithm),
  }
}


export function s3TablesTableBucketEncryptionConfigurationToHclTerraform(struct?: S3TablesTableBucketEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sse_algorithm: {
      value: cdktn.stringToHclTerraform(struct!.sseAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3TablesTableBucketEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3TablesTableBucketEncryptionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._sseAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseAlgorithm = this._sseAlgorithm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3TablesTableBucketEncryptionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyArn = undefined;
      this._sseAlgorithm = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyArn = value.kmsKeyArn;
      this._sseAlgorithm = value.sseAlgorithm;
    }
  }

  // kms_key_arn - computed: true, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // sse_algorithm - computed: true, optional: true, required: false
  private _sseAlgorithm?: string; 
  public get sseAlgorithm() {
    return this.getStringAttribute('sse_algorithm');
  }
  public set sseAlgorithm(value: string) {
    this._sseAlgorithm = value;
  }
  public resetSseAlgorithm() {
    this._sseAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseAlgorithmInput() {
    return this._sseAlgorithm;
  }
}
export interface S3TablesTableBucketMetricsConfiguration {
  /**
  * Indicates whether Metrics are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3tables_table_bucket#status S3TablesTableBucket#status}
  */
  readonly status?: string;
}

export function s3TablesTableBucketMetricsConfigurationToTerraform(struct?: S3TablesTableBucketMetricsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function s3TablesTableBucketMetricsConfigurationToHclTerraform(struct?: S3TablesTableBucketMetricsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3TablesTableBucketMetricsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3TablesTableBucketMetricsConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3TablesTableBucketMetricsConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
    }
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface S3TablesTableBucketReplicationConfigurationRulesDestinations {
  /**
  * The ARN of the destination table bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3tables_table_bucket#destination_table_bucket_arn S3TablesTableBucket#destination_table_bucket_arn}
  */
  readonly destinationTableBucketArn?: string;
}

export function s3TablesTableBucketReplicationConfigurationRulesDestinationsToTerraform(struct?: S3TablesTableBucketReplicationConfigurationRulesDestinations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_table_bucket_arn: cdktn.stringToTerraform(struct!.destinationTableBucketArn),
  }
}


export function s3TablesTableBucketReplicationConfigurationRulesDestinationsToHclTerraform(struct?: S3TablesTableBucketReplicationConfigurationRulesDestinations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_table_bucket_arn: {
      value: cdktn.stringToHclTerraform(struct!.destinationTableBucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3TablesTableBucketReplicationConfigurationRulesDestinations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationTableBucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationTableBucketArn = this._destinationTableBucketArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3TablesTableBucketReplicationConfigurationRulesDestinations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationTableBucketArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationTableBucketArn = value.destinationTableBucketArn;
    }
  }

  // destination_table_bucket_arn - computed: true, optional: true, required: false
  private _destinationTableBucketArn?: string; 
  public get destinationTableBucketArn() {
    return this.getStringAttribute('destination_table_bucket_arn');
  }
  public set destinationTableBucketArn(value: string) {
    this._destinationTableBucketArn = value;
  }
  public resetDestinationTableBucketArn() {
    this._destinationTableBucketArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTableBucketArnInput() {
    return this._destinationTableBucketArn;
  }
}

export class S3TablesTableBucketReplicationConfigurationRulesDestinationsList extends cdktn.ComplexList {
  public internalValue? : S3TablesTableBucketReplicationConfigurationRulesDestinations[] | cdktn.IResolvable

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
  public get(index: number): S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference {
    return new S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3TablesTableBucketReplicationConfigurationRules {
  /**
  * List of replication destinations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3tables_table_bucket#destinations S3TablesTableBucket#destinations}
  */
  readonly destinations?: S3TablesTableBucketReplicationConfigurationRulesDestinations[] | cdktn.IResolvable;
}

export function s3TablesTableBucketReplicationConfigurationRulesToTerraform(struct?: S3TablesTableBucketReplicationConfigurationRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destinations: cdktn.listMapper(s3TablesTableBucketReplicationConfigurationRulesDestinationsToTerraform, false)(struct!.destinations),
  }
}


export function s3TablesTableBucketReplicationConfigurationRulesToHclTerraform(struct?: S3TablesTableBucketReplicationConfigurationRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destinations: {
      value: cdktn.listMapperHcl(s3TablesTableBucketReplicationConfigurationRulesDestinationsToHclTerraform, false)(struct!.destinations),
      isBlock: true,
      type: "list",
      storageClassType: "S3TablesTableBucketReplicationConfigurationRulesDestinationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3TablesTableBucketReplicationConfigurationRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3TablesTableBucketReplicationConfigurationRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinations = this._destinations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3TablesTableBucketReplicationConfigurationRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinations.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinations.internalValue = value.destinations;
    }
  }

  // destinations - computed: true, optional: true, required: false
  private _destinations = new S3TablesTableBucketReplicationConfigurationRulesDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: S3TablesTableBucketReplicationConfigurationRulesDestinations[] | cdktn.IResolvable) {
    this._destinations.internalValue = value;
  }
  public resetDestinations() {
    this._destinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
  }
}

export class S3TablesTableBucketReplicationConfigurationRulesList extends cdktn.ComplexList {
  public internalValue? : S3TablesTableBucketReplicationConfigurationRules[] | cdktn.IResolvable

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
  public get(index: number): S3TablesTableBucketReplicationConfigurationRulesOutputReference {
    return new S3TablesTableBucketReplicationConfigurationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3TablesTableBucketReplicationConfiguration {
  /**
  * The ARN of the IAM role to use for replication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3tables_table_bucket#role S3TablesTableBucket#role}
  */
  readonly role?: string;
  /**
  * List of replication rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3tables_table_bucket#rules S3TablesTableBucket#rules}
  */
  readonly rules?: S3TablesTableBucketReplicationConfigurationRules[] | cdktn.IResolvable;
}

export function s3TablesTableBucketReplicationConfigurationToTerraform(struct?: S3TablesTableBucketReplicationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    role: cdktn.stringToTerraform(struct!.role),
    rules: cdktn.listMapper(s3TablesTableBucketReplicationConfigurationRulesToTerraform, false)(struct!.rules),
  }
}


export function s3TablesTableBucketReplicationConfigurationToHclTerraform(struct?: S3TablesTableBucketReplicationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    role: {
      value: cdktn.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules: {
      value: cdktn.listMapperHcl(s3TablesTableBucketReplicationConfigurationRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "S3TablesTableBucketReplicationConfigurationRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3TablesTableBucketReplicationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3TablesTableBucketReplicationConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3TablesTableBucketReplicationConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._role = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._role = value.role;
      this._rules.internalValue = value.rules;
    }
  }

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // rules - computed: true, optional: true, required: false
  private _rules = new S3TablesTableBucketReplicationConfigurationRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: S3TablesTableBucketReplicationConfigurationRules[] | cdktn.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface S3TablesTableBucketStorageClassConfiguration {
  /**
  * The storage class for the table bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3tables_table_bucket#storage_class S3TablesTableBucket#storage_class}
  */
  readonly storageClass?: string;
}

export function s3TablesTableBucketStorageClassConfigurationToTerraform(struct?: S3TablesTableBucketStorageClassConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    storage_class: cdktn.stringToTerraform(struct!.storageClass),
  }
}


export function s3TablesTableBucketStorageClassConfigurationToHclTerraform(struct?: S3TablesTableBucketStorageClassConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    storage_class: {
      value: cdktn.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3TablesTableBucketStorageClassConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3TablesTableBucketStorageClassConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3TablesTableBucketStorageClassConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._storageClass = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._storageClass = value.storageClass;
    }
  }

  // storage_class - computed: true, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}
export interface S3TablesTableBucketTags {
  /**
  * Tag key must be between 1 to 128 characters in length. Tag key cannot start with 'aws:' and can only contain alphanumeric characters, spaces, _, ., /, =, +, -, and @.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3tables_table_bucket#key S3TablesTableBucket#key}
  */
  readonly key?: string;
  /**
  * Tag value must be between 0 to 256 characters in length. Tag value can only contain alphanumeric characters, spaces, _, ., /, =, +, -, and @.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3tables_table_bucket#value S3TablesTableBucket#value}
  */
  readonly value?: string;
}

export function s3TablesTableBucketTagsToTerraform(struct?: S3TablesTableBucketTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function s3TablesTableBucketTagsToHclTerraform(struct?: S3TablesTableBucketTags | cdktn.IResolvable): any {
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

export class S3TablesTableBucketTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3TablesTableBucketTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: S3TablesTableBucketTags | cdktn.IResolvable | undefined) {
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

export class S3TablesTableBucketTagsList extends cdktn.ComplexList {
  public internalValue? : S3TablesTableBucketTags[] | cdktn.IResolvable

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
  public get(index: number): S3TablesTableBucketTagsOutputReference {
    return new S3TablesTableBucketTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3TablesTableBucketUnreferencedFileRemoval {
  /**
  * S3 permanently deletes noncurrent objects after the number of days specified by the NoncurrentDays property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3tables_table_bucket#noncurrent_days S3TablesTableBucket#noncurrent_days}
  */
  readonly noncurrentDays?: number;
  /**
  * Indicates whether the Unreferenced File Removal maintenance action is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3tables_table_bucket#status S3TablesTableBucket#status}
  */
  readonly status?: string;
  /**
  * For any object not referenced by your table and older than the UnreferencedDays property, S3 creates a delete marker and marks the object version as noncurrent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3tables_table_bucket#unreferenced_days S3TablesTableBucket#unreferenced_days}
  */
  readonly unreferencedDays?: number;
}

export function s3TablesTableBucketUnreferencedFileRemovalToTerraform(struct?: S3TablesTableBucketUnreferencedFileRemoval | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    noncurrent_days: cdktn.numberToTerraform(struct!.noncurrentDays),
    status: cdktn.stringToTerraform(struct!.status),
    unreferenced_days: cdktn.numberToTerraform(struct!.unreferencedDays),
  }
}


export function s3TablesTableBucketUnreferencedFileRemovalToHclTerraform(struct?: S3TablesTableBucketUnreferencedFileRemoval | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    noncurrent_days: {
      value: cdktn.numberToHclTerraform(struct!.noncurrentDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unreferenced_days: {
      value: cdktn.numberToHclTerraform(struct!.unreferencedDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3TablesTableBucketUnreferencedFileRemovalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3TablesTableBucketUnreferencedFileRemoval | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noncurrentDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.noncurrentDays = this._noncurrentDays;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._unreferencedDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.unreferencedDays = this._unreferencedDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3TablesTableBucketUnreferencedFileRemoval | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._noncurrentDays = undefined;
      this._status = undefined;
      this._unreferencedDays = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._noncurrentDays = value.noncurrentDays;
      this._status = value.status;
      this._unreferencedDays = value.unreferencedDays;
    }
  }

  // noncurrent_days - computed: true, optional: true, required: false
  private _noncurrentDays?: number; 
  public get noncurrentDays() {
    return this.getNumberAttribute('noncurrent_days');
  }
  public set noncurrentDays(value: number) {
    this._noncurrentDays = value;
  }
  public resetNoncurrentDays() {
    this._noncurrentDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noncurrentDaysInput() {
    return this._noncurrentDays;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // unreferenced_days - computed: true, optional: true, required: false
  private _unreferencedDays?: number; 
  public get unreferencedDays() {
    return this.getNumberAttribute('unreferenced_days');
  }
  public set unreferencedDays(value: number) {
    this._unreferencedDays = value;
  }
  public resetUnreferencedDays() {
    this._unreferencedDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unreferencedDaysInput() {
    return this._unreferencedDays;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3tables_table_bucket awscc_s3tables_table_bucket}
*/
export class S3TablesTableBucket extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_s3tables_table_bucket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a S3TablesTableBucket resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3TablesTableBucket to import
  * @param importFromId The id of the existing S3TablesTableBucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3tables_table_bucket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3TablesTableBucket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_s3tables_table_bucket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3tables_table_bucket awscc_s3tables_table_bucket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3TablesTableBucketConfig
  */
  public constructor(scope: Construct, id: string, config: S3TablesTableBucketConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_s3tables_table_bucket',
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
    this._encryptionConfiguration.internalValue = config.encryptionConfiguration;
    this._metricsConfiguration.internalValue = config.metricsConfiguration;
    this._replicationConfiguration.internalValue = config.replicationConfiguration;
    this._storageClassConfiguration.internalValue = config.storageClassConfiguration;
    this._tableBucketName = config.tableBucketName;
    this._tags.internalValue = config.tags;
    this._unreferencedFileRemoval.internalValue = config.unreferencedFileRemoval;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // encryption_configuration - computed: true, optional: true, required: false
  private _encryptionConfiguration = new S3TablesTableBucketEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: S3TablesTableBucketEncryptionConfiguration) {
    this._encryptionConfiguration.internalValue = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metrics_configuration - computed: true, optional: true, required: false
  private _metricsConfiguration = new S3TablesTableBucketMetricsConfigurationOutputReference(this, "metrics_configuration");
  public get metricsConfiguration() {
    return this._metricsConfiguration;
  }
  public putMetricsConfiguration(value: S3TablesTableBucketMetricsConfiguration) {
    this._metricsConfiguration.internalValue = value;
  }
  public resetMetricsConfiguration() {
    this._metricsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsConfigurationInput() {
    return this._metricsConfiguration.internalValue;
  }

  // replication_configuration - computed: true, optional: true, required: false
  private _replicationConfiguration = new S3TablesTableBucketReplicationConfigurationOutputReference(this, "replication_configuration");
  public get replicationConfiguration() {
    return this._replicationConfiguration;
  }
  public putReplicationConfiguration(value: S3TablesTableBucketReplicationConfiguration) {
    this._replicationConfiguration.internalValue = value;
  }
  public resetReplicationConfiguration() {
    this._replicationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationConfigurationInput() {
    return this._replicationConfiguration.internalValue;
  }

  // storage_class_configuration - computed: true, optional: true, required: false
  private _storageClassConfiguration = new S3TablesTableBucketStorageClassConfigurationOutputReference(this, "storage_class_configuration");
  public get storageClassConfiguration() {
    return this._storageClassConfiguration;
  }
  public putStorageClassConfiguration(value: S3TablesTableBucketStorageClassConfiguration) {
    this._storageClassConfiguration.internalValue = value;
  }
  public resetStorageClassConfiguration() {
    this._storageClassConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassConfigurationInput() {
    return this._storageClassConfiguration.internalValue;
  }

  // table_bucket_arn - computed: true, optional: false, required: false
  public get tableBucketArn() {
    return this.getStringAttribute('table_bucket_arn');
  }

  // table_bucket_name - computed: false, optional: false, required: true
  private _tableBucketName?: string; 
  public get tableBucketName() {
    return this.getStringAttribute('table_bucket_name');
  }
  public set tableBucketName(value: string) {
    this._tableBucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableBucketNameInput() {
    return this._tableBucketName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new S3TablesTableBucketTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: S3TablesTableBucketTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // unreferenced_file_removal - computed: true, optional: true, required: false
  private _unreferencedFileRemoval = new S3TablesTableBucketUnreferencedFileRemovalOutputReference(this, "unreferenced_file_removal");
  public get unreferencedFileRemoval() {
    return this._unreferencedFileRemoval;
  }
  public putUnreferencedFileRemoval(value: S3TablesTableBucketUnreferencedFileRemoval) {
    this._unreferencedFileRemoval.internalValue = value;
  }
  public resetUnreferencedFileRemoval() {
    this._unreferencedFileRemoval.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unreferencedFileRemovalInput() {
    return this._unreferencedFileRemoval.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      encryption_configuration: s3TablesTableBucketEncryptionConfigurationToTerraform(this._encryptionConfiguration.internalValue),
      metrics_configuration: s3TablesTableBucketMetricsConfigurationToTerraform(this._metricsConfiguration.internalValue),
      replication_configuration: s3TablesTableBucketReplicationConfigurationToTerraform(this._replicationConfiguration.internalValue),
      storage_class_configuration: s3TablesTableBucketStorageClassConfigurationToTerraform(this._storageClassConfiguration.internalValue),
      table_bucket_name: cdktn.stringToTerraform(this._tableBucketName),
      tags: cdktn.listMapper(s3TablesTableBucketTagsToTerraform, false)(this._tags.internalValue),
      unreferenced_file_removal: s3TablesTableBucketUnreferencedFileRemovalToTerraform(this._unreferencedFileRemoval.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      encryption_configuration: {
        value: s3TablesTableBucketEncryptionConfigurationToHclTerraform(this._encryptionConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3TablesTableBucketEncryptionConfiguration",
      },
      metrics_configuration: {
        value: s3TablesTableBucketMetricsConfigurationToHclTerraform(this._metricsConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3TablesTableBucketMetricsConfiguration",
      },
      replication_configuration: {
        value: s3TablesTableBucketReplicationConfigurationToHclTerraform(this._replicationConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3TablesTableBucketReplicationConfiguration",
      },
      storage_class_configuration: {
        value: s3TablesTableBucketStorageClassConfigurationToHclTerraform(this._storageClassConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3TablesTableBucketStorageClassConfiguration",
      },
      table_bucket_name: {
        value: cdktn.stringToHclTerraform(this._tableBucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(s3TablesTableBucketTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "S3TablesTableBucketTagsList",
      },
      unreferenced_file_removal: {
        value: s3TablesTableBucketUnreferencedFileRemovalToHclTerraform(this._unreferencedFileRemoval.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3TablesTableBucketUnreferencedFileRemoval",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
