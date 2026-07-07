// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3vectors_vector_bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface S3VectorsVectorBucketConfig extends cdktn.TerraformMetaArguments {
  /**
  * The encryption configuration for the vector bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3vectors_vector_bucket#encryption_configuration S3VectorsVectorBucket#encryption_configuration}
  */
  readonly encryptionConfiguration?: S3VectorsVectorBucketEncryptionConfiguration;
  /**
  * User tags (key-value pairs) to associate with the vector bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3vectors_vector_bucket#tags S3VectorsVectorBucket#tags}
  */
  readonly tags?: S3VectorsVectorBucketTags[] | cdktn.IResolvable;
  /**
  * The name of the vector bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3vectors_vector_bucket#vector_bucket_name S3VectorsVectorBucket#vector_bucket_name}
  */
  readonly vectorBucketName?: string;
}
export interface S3VectorsVectorBucketEncryptionConfiguration {
  /**
  * AWS Key Management Service (KMS) customer managed key ID to use for the encryption configuration. This parameter is allowed if and only if sseType is set to aws:kms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3vectors_vector_bucket#kms_key_arn S3VectorsVectorBucket#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * The server-side encryption type to use for the encryption configuration of the vector bucket. By default, if you don't specify, all new vectors in Amazon S3 vector buckets use server-side encryption with Amazon S3 managed keys (SSE-S3), specifically AES256.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3vectors_vector_bucket#sse_type S3VectorsVectorBucket#sse_type}
  */
  readonly sseType?: string;
}

export function s3VectorsVectorBucketEncryptionConfigurationToTerraform(struct?: S3VectorsVectorBucketEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    sse_type: cdktn.stringToTerraform(struct!.sseType),
  }
}


export function s3VectorsVectorBucketEncryptionConfigurationToHclTerraform(struct?: S3VectorsVectorBucketEncryptionConfiguration | cdktn.IResolvable): any {
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
    sse_type: {
      value: cdktn.stringToHclTerraform(struct!.sseType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3VectorsVectorBucketEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3VectorsVectorBucketEncryptionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._sseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseType = this._sseType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3VectorsVectorBucketEncryptionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyArn = undefined;
      this._sseType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyArn = value.kmsKeyArn;
      this._sseType = value.sseType;
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

  // sse_type - computed: true, optional: true, required: false
  private _sseType?: string; 
  public get sseType() {
    return this.getStringAttribute('sse_type');
  }
  public set sseType(value: string) {
    this._sseType = value;
  }
  public resetSseType() {
    this._sseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseTypeInput() {
    return this._sseType;
  }
}
export interface S3VectorsVectorBucketTags {
  /**
  * Tag key must be between 1 to 128 characters in length. Tag key cannot start with 'aws:' and can only contain alphanumeric characters, spaces, _, ., /, =, +, -, and @.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3vectors_vector_bucket#key S3VectorsVectorBucket#key}
  */
  readonly key?: string;
  /**
  * Tag value must be between 0 to 256 characters in length. Tag value can only contain alphanumeric characters, spaces, _, ., /, =, +, -, and @.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3vectors_vector_bucket#value S3VectorsVectorBucket#value}
  */
  readonly value?: string;
}

export function s3VectorsVectorBucketTagsToTerraform(struct?: S3VectorsVectorBucketTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function s3VectorsVectorBucketTagsToHclTerraform(struct?: S3VectorsVectorBucketTags | cdktn.IResolvable): any {
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

export class S3VectorsVectorBucketTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3VectorsVectorBucketTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: S3VectorsVectorBucketTags | cdktn.IResolvable | undefined) {
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

export class S3VectorsVectorBucketTagsList extends cdktn.ComplexList {
  public internalValue? : S3VectorsVectorBucketTags[] | cdktn.IResolvable

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
  public get(index: number): S3VectorsVectorBucketTagsOutputReference {
    return new S3VectorsVectorBucketTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3vectors_vector_bucket awscc_s3vectors_vector_bucket}
*/
export class S3VectorsVectorBucket extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_s3vectors_vector_bucket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a S3VectorsVectorBucket resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3VectorsVectorBucket to import
  * @param importFromId The id of the existing S3VectorsVectorBucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3vectors_vector_bucket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3VectorsVectorBucket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_s3vectors_vector_bucket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3vectors_vector_bucket awscc_s3vectors_vector_bucket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3VectorsVectorBucketConfig = {}
  */
  public constructor(scope: Construct, id: string, config: S3VectorsVectorBucketConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_s3vectors_vector_bucket',
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
    this._tags.internalValue = config.tags;
    this._vectorBucketName = config.vectorBucketName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // encryption_configuration - computed: true, optional: true, required: false
  private _encryptionConfiguration = new S3VectorsVectorBucketEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: S3VectorsVectorBucketEncryptionConfiguration) {
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

  // tags - computed: true, optional: true, required: false
  private _tags = new S3VectorsVectorBucketTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: S3VectorsVectorBucketTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // vector_bucket_arn - computed: true, optional: false, required: false
  public get vectorBucketArn() {
    return this.getStringAttribute('vector_bucket_arn');
  }

  // vector_bucket_name - computed: true, optional: true, required: false
  private _vectorBucketName?: string; 
  public get vectorBucketName() {
    return this.getStringAttribute('vector_bucket_name');
  }
  public set vectorBucketName(value: string) {
    this._vectorBucketName = value;
  }
  public resetVectorBucketName() {
    this._vectorBucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorBucketNameInput() {
    return this._vectorBucketName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      encryption_configuration: s3VectorsVectorBucketEncryptionConfigurationToTerraform(this._encryptionConfiguration.internalValue),
      tags: cdktn.listMapper(s3VectorsVectorBucketTagsToTerraform, false)(this._tags.internalValue),
      vector_bucket_name: cdktn.stringToTerraform(this._vectorBucketName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      encryption_configuration: {
        value: s3VectorsVectorBucketEncryptionConfigurationToHclTerraform(this._encryptionConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3VectorsVectorBucketEncryptionConfiguration",
      },
      tags: {
        value: cdktn.listMapperHcl(s3VectorsVectorBucketTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "S3VectorsVectorBucketTagsList",
      },
      vector_bucket_name: {
        value: cdktn.stringToHclTerraform(this._vectorBucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
