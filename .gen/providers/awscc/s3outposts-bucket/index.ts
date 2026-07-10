// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3outposts_bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface S3OutpostsBucketConfig extends cdktn.TerraformMetaArguments {
  /**
  * A name for the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3outposts_bucket#bucket_name S3OutpostsBucket#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Rules that define how Amazon S3Outposts manages objects during their lifetime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3outposts_bucket#lifecycle_configuration S3OutpostsBucket#lifecycle_configuration}
  */
  readonly lifecycleConfiguration?: S3OutpostsBucketLifecycleConfiguration;
  /**
  * The id of the customer outpost on which the bucket resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3outposts_bucket#outpost_id S3OutpostsBucket#outpost_id}
  */
  readonly outpostId: string;
  /**
  * An arbitrary set of tags (key-value pairs) for this S3Outposts bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3outposts_bucket#tags S3OutpostsBucket#tags}
  */
  readonly tags?: S3OutpostsBucketTags[] | cdktn.IResolvable;
}
export interface S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload {
  /**
  * Specifies the number of days after which Amazon S3Outposts aborts an incomplete multipart upload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3outposts_bucket#days_after_initiation S3OutpostsBucket#days_after_initiation}
  */
  readonly daysAfterInitiation?: number;
}

export function s3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadToTerraform(struct?: S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    days_after_initiation: cdktn.numberToTerraform(struct!.daysAfterInitiation),
  }
}


export function s3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadToHclTerraform(struct?: S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    days_after_initiation: {
      value: cdktn.numberToHclTerraform(struct!.daysAfterInitiation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysAfterInitiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysAfterInitiation = this._daysAfterInitiation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daysAfterInitiation = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daysAfterInitiation = value.daysAfterInitiation;
    }
  }

  // days_after_initiation - computed: true, optional: true, required: false
  private _daysAfterInitiation?: number; 
  public get daysAfterInitiation() {
    return this.getNumberAttribute('days_after_initiation');
  }
  public set daysAfterInitiation(value: number) {
    this._daysAfterInitiation = value;
  }
  public resetDaysAfterInitiation() {
    this._daysAfterInitiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysAfterInitiationInput() {
    return this._daysAfterInitiation;
  }
}
export interface S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3outposts_bucket#key S3OutpostsBucket#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3outposts_bucket#value S3OutpostsBucket#value}
  */
  readonly value?: string;
}

export function s3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsToTerraform(struct?: S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function s3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsToHclTerraform(struct?: S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags | cdktn.IResolvable): any {
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

export class S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags | cdktn.IResolvable | undefined) {
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

export class S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList extends cdktn.ComplexList {
  public internalValue? : S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags[] | cdktn.IResolvable

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
  public get(index: number): S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference {
    return new S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator {
  /**
  * Prefix identifies one or more objects to which the rule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3outposts_bucket#prefix S3OutpostsBucket#prefix}
  */
  readonly prefix?: string;
  /**
  * All of these tags must exist in the object's tag set in order for the rule to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3outposts_bucket#tags S3OutpostsBucket#tags}
  */
  readonly tags?: S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags[] | cdktn.IResolvable;
}

export function s3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorToTerraform(struct?: S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    prefix: cdktn.stringToTerraform(struct!.prefix),
    tags: cdktn.listMapper(s3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsToTerraform, false)(struct!.tags),
  }
}


export function s3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorToHclTerraform(struct?: S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktn.listMapperHcl(s3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefix = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefix = value.prefix;
      this._tags.internalValue = value.tags;
    }
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface S3OutpostsBucketLifecycleConfigurationRulesFilterTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3outposts_bucket#key S3OutpostsBucket#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3outposts_bucket#value S3OutpostsBucket#value}
  */
  readonly value?: string;
}

export function s3OutpostsBucketLifecycleConfigurationRulesFilterTagToTerraform(struct?: S3OutpostsBucketLifecycleConfigurationRulesFilterTag | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function s3OutpostsBucketLifecycleConfigurationRulesFilterTagToHclTerraform(struct?: S3OutpostsBucketLifecycleConfigurationRulesFilterTag | cdktn.IResolvable): any {
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

export class S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3OutpostsBucketLifecycleConfigurationRulesFilterTag | cdktn.IResolvable | undefined {
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

  public set internalValue(value: S3OutpostsBucketLifecycleConfigurationRulesFilterTag | cdktn.IResolvable | undefined) {
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
export interface S3OutpostsBucketLifecycleConfigurationRulesFilter {
  /**
  * The container for the AND condition for the lifecycle rule. A combination of Prefix and 1 or more Tags OR a minimum of 2 or more tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3outposts_bucket#and_operator S3OutpostsBucket#and_operator}
  */
  readonly andOperator?: S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator;
  /**
  * Object key prefix that identifies one or more objects to which this rule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3outposts_bucket#prefix S3OutpostsBucket#prefix}
  */
  readonly prefix?: string;
  /**
  * Specifies a tag used to identify a subset of objects for an Amazon S3Outposts bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3outposts_bucket#tag S3OutpostsBucket#tag}
  */
  readonly tag?: S3OutpostsBucketLifecycleConfigurationRulesFilterTag;
}

export function s3OutpostsBucketLifecycleConfigurationRulesFilterToTerraform(struct?: S3OutpostsBucketLifecycleConfigurationRulesFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    and_operator: s3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorToTerraform(struct!.andOperator),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    tag: s3OutpostsBucketLifecycleConfigurationRulesFilterTagToTerraform(struct!.tag),
  }
}


export function s3OutpostsBucketLifecycleConfigurationRulesFilterToHclTerraform(struct?: S3OutpostsBucketLifecycleConfigurationRulesFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    and_operator: {
      value: s3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorToHclTerraform(struct!.andOperator),
      isBlock: true,
      type: "struct",
      storageClassType: "S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: s3OutpostsBucketLifecycleConfigurationRulesFilterTagToHclTerraform(struct!.tag),
      isBlock: true,
      type: "struct",
      storageClassType: "S3OutpostsBucketLifecycleConfigurationRulesFilterTag",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3OutpostsBucketLifecycleConfigurationRulesFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._andOperator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.andOperator = this._andOperator?.internalValue;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3OutpostsBucketLifecycleConfigurationRulesFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._andOperator.internalValue = undefined;
      this._prefix = undefined;
      this._tag.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._andOperator.internalValue = value.andOperator;
      this._prefix = value.prefix;
      this._tag.internalValue = value.tag;
    }
  }

  // and_operator - computed: true, optional: true, required: false
  private _andOperator = new S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference(this, "and_operator");
  public get andOperator() {
    return this._andOperator;
  }
  public putAndOperator(value: S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator) {
    this._andOperator.internalValue = value;
  }
  public resetAndOperator() {
    this._andOperator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andOperatorInput() {
    return this._andOperator.internalValue;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // tag - computed: true, optional: true, required: false
  private _tag = new S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference(this, "tag");
  public get tag() {
    return this._tag;
  }
  public putTag(value: S3OutpostsBucketLifecycleConfigurationRulesFilterTag) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }
}
export interface S3OutpostsBucketLifecycleConfigurationRules {
  /**
  * Specifies a lifecycle rule that stops incomplete multipart uploads to an Amazon S3Outposts bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3outposts_bucket#abort_incomplete_multipart_upload S3OutpostsBucket#abort_incomplete_multipart_upload}
  */
  readonly abortIncompleteMultipartUpload?: S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload;
  /**
  * Indicates when objects are deleted from Amazon S3Outposts. The date value must be in ISO 8601 format. The time is always midnight UTC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3outposts_bucket#expiration_date S3OutpostsBucket#expiration_date}
  */
  readonly expirationDate?: string;
  /**
  * Indicates the number of days after creation when objects are deleted from Amazon S3Outposts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3outposts_bucket#expiration_in_days S3OutpostsBucket#expiration_in_days}
  */
  readonly expirationInDays?: number;
  /**
  * The container for the filter of the lifecycle rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3outposts_bucket#filter S3OutpostsBucket#filter}
  */
  readonly filter?: S3OutpostsBucketLifecycleConfigurationRulesFilter;
  /**
  * Unique identifier for the lifecycle rule. The value can't be longer than 255 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3outposts_bucket#id S3OutpostsBucket#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3outposts_bucket#status S3OutpostsBucket#status}
  */
  readonly status?: string;
}

export function s3OutpostsBucketLifecycleConfigurationRulesToTerraform(struct?: S3OutpostsBucketLifecycleConfigurationRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    abort_incomplete_multipart_upload: s3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadToTerraform(struct!.abortIncompleteMultipartUpload),
    expiration_date: cdktn.stringToTerraform(struct!.expirationDate),
    expiration_in_days: cdktn.numberToTerraform(struct!.expirationInDays),
    filter: s3OutpostsBucketLifecycleConfigurationRulesFilterToTerraform(struct!.filter),
    id: cdktn.stringToTerraform(struct!.id),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function s3OutpostsBucketLifecycleConfigurationRulesToHclTerraform(struct?: S3OutpostsBucketLifecycleConfigurationRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    abort_incomplete_multipart_upload: {
      value: s3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadToHclTerraform(struct!.abortIncompleteMultipartUpload),
      isBlock: true,
      type: "struct",
      storageClassType: "S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload",
    },
    expiration_date: {
      value: cdktn.stringToHclTerraform(struct!.expirationDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiration_in_days: {
      value: cdktn.numberToHclTerraform(struct!.expirationInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter: {
      value: s3OutpostsBucketLifecycleConfigurationRulesFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "S3OutpostsBucketLifecycleConfigurationRulesFilter",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class S3OutpostsBucketLifecycleConfigurationRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3OutpostsBucketLifecycleConfigurationRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abortIncompleteMultipartUpload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abortIncompleteMultipartUpload = this._abortIncompleteMultipartUpload?.internalValue;
    }
    if (this._expirationDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationDate = this._expirationDate;
    }
    if (this._expirationInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationInDays = this._expirationInDays;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3OutpostsBucketLifecycleConfigurationRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abortIncompleteMultipartUpload.internalValue = undefined;
      this._expirationDate = undefined;
      this._expirationInDays = undefined;
      this._filter.internalValue = undefined;
      this._id = undefined;
      this._status = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abortIncompleteMultipartUpload.internalValue = value.abortIncompleteMultipartUpload;
      this._expirationDate = value.expirationDate;
      this._expirationInDays = value.expirationInDays;
      this._filter.internalValue = value.filter;
      this._id = value.id;
      this._status = value.status;
    }
  }

  // abort_incomplete_multipart_upload - computed: true, optional: true, required: false
  private _abortIncompleteMultipartUpload = new S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference(this, "abort_incomplete_multipart_upload");
  public get abortIncompleteMultipartUpload() {
    return this._abortIncompleteMultipartUpload;
  }
  public putAbortIncompleteMultipartUpload(value: S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload) {
    this._abortIncompleteMultipartUpload.internalValue = value;
  }
  public resetAbortIncompleteMultipartUpload() {
    this._abortIncompleteMultipartUpload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abortIncompleteMultipartUploadInput() {
    return this._abortIncompleteMultipartUpload.internalValue;
  }

  // expiration_date - computed: true, optional: true, required: false
  private _expirationDate?: string; 
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
  }
  public set expirationDate(value: string) {
    this._expirationDate = value;
  }
  public resetExpirationDate() {
    this._expirationDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationDateInput() {
    return this._expirationDate;
  }

  // expiration_in_days - computed: true, optional: true, required: false
  private _expirationInDays?: number; 
  public get expirationInDays() {
    return this.getNumberAttribute('expiration_in_days');
  }
  public set expirationInDays(value: number) {
    this._expirationInDays = value;
  }
  public resetExpirationInDays() {
    this._expirationInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInDaysInput() {
    return this._expirationInDays;
  }

  // filter - computed: true, optional: true, required: false
  private _filter = new S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: S3OutpostsBucketLifecycleConfigurationRulesFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

export class S3OutpostsBucketLifecycleConfigurationRulesList extends cdktn.ComplexList {
  public internalValue? : S3OutpostsBucketLifecycleConfigurationRules[] | cdktn.IResolvable

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
  public get(index: number): S3OutpostsBucketLifecycleConfigurationRulesOutputReference {
    return new S3OutpostsBucketLifecycleConfigurationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3OutpostsBucketLifecycleConfiguration {
  /**
  * A list of lifecycle rules for individual objects in an Amazon S3Outposts bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3outposts_bucket#rules S3OutpostsBucket#rules}
  */
  readonly rules?: S3OutpostsBucketLifecycleConfigurationRules[] | cdktn.IResolvable;
}

export function s3OutpostsBucketLifecycleConfigurationToTerraform(struct?: S3OutpostsBucketLifecycleConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rules: cdktn.listMapper(s3OutpostsBucketLifecycleConfigurationRulesToTerraform, false)(struct!.rules),
  }
}


export function s3OutpostsBucketLifecycleConfigurationToHclTerraform(struct?: S3OutpostsBucketLifecycleConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rules: {
      value: cdktn.listMapperHcl(s3OutpostsBucketLifecycleConfigurationRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "set",
      storageClassType: "S3OutpostsBucketLifecycleConfigurationRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3OutpostsBucketLifecycleConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3OutpostsBucketLifecycleConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3OutpostsBucketLifecycleConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rules.internalValue = value.rules;
    }
  }

  // rules - computed: true, optional: true, required: false
  private _rules = new S3OutpostsBucketLifecycleConfigurationRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }
  public putRules(value: S3OutpostsBucketLifecycleConfigurationRules[] | cdktn.IResolvable) {
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
export interface S3OutpostsBucketTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3outposts_bucket#key S3OutpostsBucket#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3outposts_bucket#value S3OutpostsBucket#value}
  */
  readonly value?: string;
}

export function s3OutpostsBucketTagsToTerraform(struct?: S3OutpostsBucketTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function s3OutpostsBucketTagsToHclTerraform(struct?: S3OutpostsBucketTags | cdktn.IResolvable): any {
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

export class S3OutpostsBucketTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3OutpostsBucketTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: S3OutpostsBucketTags | cdktn.IResolvable | undefined) {
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

export class S3OutpostsBucketTagsList extends cdktn.ComplexList {
  public internalValue? : S3OutpostsBucketTags[] | cdktn.IResolvable

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
  public get(index: number): S3OutpostsBucketTagsOutputReference {
    return new S3OutpostsBucketTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3outposts_bucket awscc_s3outposts_bucket}
*/
export class S3OutpostsBucket extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_s3outposts_bucket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a S3OutpostsBucket resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3OutpostsBucket to import
  * @param importFromId The id of the existing S3OutpostsBucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3outposts_bucket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3OutpostsBucket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_s3outposts_bucket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3outposts_bucket awscc_s3outposts_bucket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3OutpostsBucketConfig
  */
  public constructor(scope: Construct, id: string, config: S3OutpostsBucketConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_s3outposts_bucket',
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
    this._bucketName = config.bucketName;
    this._lifecycleConfiguration.internalValue = config.lifecycleConfiguration;
    this._outpostId = config.outpostId;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_configuration - computed: true, optional: true, required: false
  private _lifecycleConfiguration = new S3OutpostsBucketLifecycleConfigurationOutputReference(this, "lifecycle_configuration");
  public get lifecycleConfiguration() {
    return this._lifecycleConfiguration;
  }
  public putLifecycleConfiguration(value: S3OutpostsBucketLifecycleConfiguration) {
    this._lifecycleConfiguration.internalValue = value;
  }
  public resetLifecycleConfiguration() {
    this._lifecycleConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigurationInput() {
    return this._lifecycleConfiguration.internalValue;
  }

  // outpost_id - computed: false, optional: false, required: true
  private _outpostId?: string; 
  public get outpostId() {
    return this.getStringAttribute('outpost_id');
  }
  public set outpostId(value: string) {
    this._outpostId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outpostIdInput() {
    return this._outpostId;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new S3OutpostsBucketTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: S3OutpostsBucketTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_name: cdktn.stringToTerraform(this._bucketName),
      lifecycle_configuration: s3OutpostsBucketLifecycleConfigurationToTerraform(this._lifecycleConfiguration.internalValue),
      outpost_id: cdktn.stringToTerraform(this._outpostId),
      tags: cdktn.listMapper(s3OutpostsBucketTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket_name: {
        value: cdktn.stringToHclTerraform(this._bucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lifecycle_configuration: {
        value: s3OutpostsBucketLifecycleConfigurationToHclTerraform(this._lifecycleConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3OutpostsBucketLifecycleConfiguration",
      },
      outpost_id: {
        value: cdktn.stringToHclTerraform(this._outpostId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(s3OutpostsBucketTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "S3OutpostsBucketTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
