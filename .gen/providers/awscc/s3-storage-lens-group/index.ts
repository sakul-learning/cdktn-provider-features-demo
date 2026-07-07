// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface S3StorageLensGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Sets the Storage Lens Group filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group#filter S3StorageLensGroup#filter}
  */
  readonly filter: S3StorageLensGroupFilter;
  /**
  * The name that identifies the Amazon S3 Storage Lens Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group#name S3StorageLensGroup#name}
  */
  readonly name: string;
  /**
  * A set of tags (key-value pairs) for this Amazon S3 Storage Lens Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group#tags S3StorageLensGroup#tags}
  */
  readonly tags?: S3StorageLensGroupTags[] | cdktn.IResolvable;
}
export interface S3StorageLensGroupFilterAndMatchAnyTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group#key S3StorageLensGroup#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group#value S3StorageLensGroup#value}
  */
  readonly value?: string;
}

export function s3StorageLensGroupFilterAndMatchAnyTagToTerraform(struct?: S3StorageLensGroupFilterAndMatchAnyTag | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function s3StorageLensGroupFilterAndMatchAnyTagToHclTerraform(struct?: S3StorageLensGroupFilterAndMatchAnyTag | cdktn.IResolvable): any {
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

export class S3StorageLensGroupFilterAndMatchAnyTagOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3StorageLensGroupFilterAndMatchAnyTag | cdktn.IResolvable | undefined {
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

  public set internalValue(value: S3StorageLensGroupFilterAndMatchAnyTag | cdktn.IResolvable | undefined) {
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

export class S3StorageLensGroupFilterAndMatchAnyTagList extends cdktn.ComplexList {
  public internalValue? : S3StorageLensGroupFilterAndMatchAnyTag[] | cdktn.IResolvable

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
  public get(index: number): S3StorageLensGroupFilterAndMatchAnyTagOutputReference {
    return new S3StorageLensGroupFilterAndMatchAnyTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3StorageLensGroupFilterAndMatchObjectAge {
  /**
  * Minimum object age to which the rule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group#days_greater_than S3StorageLensGroup#days_greater_than}
  */
  readonly daysGreaterThan?: number;
  /**
  * Maximum object age to which the rule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group#days_less_than S3StorageLensGroup#days_less_than}
  */
  readonly daysLessThan?: number;
}

export function s3StorageLensGroupFilterAndMatchObjectAgeToTerraform(struct?: S3StorageLensGroupFilterAndMatchObjectAge | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    days_greater_than: cdktn.numberToTerraform(struct!.daysGreaterThan),
    days_less_than: cdktn.numberToTerraform(struct!.daysLessThan),
  }
}


export function s3StorageLensGroupFilterAndMatchObjectAgeToHclTerraform(struct?: S3StorageLensGroupFilterAndMatchObjectAge | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    days_greater_than: {
      value: cdktn.numberToHclTerraform(struct!.daysGreaterThan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    days_less_than: {
      value: cdktn.numberToHclTerraform(struct!.daysLessThan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensGroupFilterAndMatchObjectAgeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensGroupFilterAndMatchObjectAge | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysGreaterThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysGreaterThan = this._daysGreaterThan;
    }
    if (this._daysLessThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysLessThan = this._daysLessThan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensGroupFilterAndMatchObjectAge | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daysGreaterThan = undefined;
      this._daysLessThan = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daysGreaterThan = value.daysGreaterThan;
      this._daysLessThan = value.daysLessThan;
    }
  }

  // days_greater_than - computed: true, optional: true, required: false
  private _daysGreaterThan?: number; 
  public get daysGreaterThan() {
    return this.getNumberAttribute('days_greater_than');
  }
  public set daysGreaterThan(value: number) {
    this._daysGreaterThan = value;
  }
  public resetDaysGreaterThan() {
    this._daysGreaterThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysGreaterThanInput() {
    return this._daysGreaterThan;
  }

  // days_less_than - computed: true, optional: true, required: false
  private _daysLessThan?: number; 
  public get daysLessThan() {
    return this.getNumberAttribute('days_less_than');
  }
  public set daysLessThan(value: number) {
    this._daysLessThan = value;
  }
  public resetDaysLessThan() {
    this._daysLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysLessThanInput() {
    return this._daysLessThan;
  }
}
export interface S3StorageLensGroupFilterAndMatchObjectSize {
  /**
  * Minimum object size to which the rule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group#bytes_greater_than S3StorageLensGroup#bytes_greater_than}
  */
  readonly bytesGreaterThan?: number;
  /**
  * Maximum object size to which the rule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group#bytes_less_than S3StorageLensGroup#bytes_less_than}
  */
  readonly bytesLessThan?: number;
}

export function s3StorageLensGroupFilterAndMatchObjectSizeToTerraform(struct?: S3StorageLensGroupFilterAndMatchObjectSize | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bytes_greater_than: cdktn.numberToTerraform(struct!.bytesGreaterThan),
    bytes_less_than: cdktn.numberToTerraform(struct!.bytesLessThan),
  }
}


export function s3StorageLensGroupFilterAndMatchObjectSizeToHclTerraform(struct?: S3StorageLensGroupFilterAndMatchObjectSize | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bytes_greater_than: {
      value: cdktn.numberToHclTerraform(struct!.bytesGreaterThan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bytes_less_than: {
      value: cdktn.numberToHclTerraform(struct!.bytesLessThan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensGroupFilterAndMatchObjectSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensGroupFilterAndMatchObjectSize | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bytesGreaterThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytesGreaterThan = this._bytesGreaterThan;
    }
    if (this._bytesLessThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytesLessThan = this._bytesLessThan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensGroupFilterAndMatchObjectSize | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bytesGreaterThan = undefined;
      this._bytesLessThan = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bytesGreaterThan = value.bytesGreaterThan;
      this._bytesLessThan = value.bytesLessThan;
    }
  }

  // bytes_greater_than - computed: true, optional: true, required: false
  private _bytesGreaterThan?: number; 
  public get bytesGreaterThan() {
    return this.getNumberAttribute('bytes_greater_than');
  }
  public set bytesGreaterThan(value: number) {
    this._bytesGreaterThan = value;
  }
  public resetBytesGreaterThan() {
    this._bytesGreaterThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesGreaterThanInput() {
    return this._bytesGreaterThan;
  }

  // bytes_less_than - computed: true, optional: true, required: false
  private _bytesLessThan?: number; 
  public get bytesLessThan() {
    return this.getNumberAttribute('bytes_less_than');
  }
  public set bytesLessThan(value: number) {
    this._bytesLessThan = value;
  }
  public resetBytesLessThan() {
    this._bytesLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesLessThanInput() {
    return this._bytesLessThan;
  }
}
export interface S3StorageLensGroupFilterAnd {
  /**
  * Filter to match any of the specified prefixes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group#match_any_prefix S3StorageLensGroup#match_any_prefix}
  */
  readonly matchAnyPrefix?: string[];
  /**
  * Filter to match any of the specified suffixes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group#match_any_suffix S3StorageLensGroup#match_any_suffix}
  */
  readonly matchAnySuffix?: string[];
  /**
  * Filter to match any of the specified object tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group#match_any_tag S3StorageLensGroup#match_any_tag}
  */
  readonly matchAnyTag?: S3StorageLensGroupFilterAndMatchAnyTag[] | cdktn.IResolvable;
  /**
  * Filter to match all of the specified values for the minimum and maximum object age.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group#match_object_age S3StorageLensGroup#match_object_age}
  */
  readonly matchObjectAge?: S3StorageLensGroupFilterAndMatchObjectAge;
  /**
  * Filter to match all of the specified values for the minimum and maximum object size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group#match_object_size S3StorageLensGroup#match_object_size}
  */
  readonly matchObjectSize?: S3StorageLensGroupFilterAndMatchObjectSize;
}

export function s3StorageLensGroupFilterAndToTerraform(struct?: S3StorageLensGroupFilterAnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    match_any_prefix: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchAnyPrefix),
    match_any_suffix: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchAnySuffix),
    match_any_tag: cdktn.listMapper(s3StorageLensGroupFilterAndMatchAnyTagToTerraform, false)(struct!.matchAnyTag),
    match_object_age: s3StorageLensGroupFilterAndMatchObjectAgeToTerraform(struct!.matchObjectAge),
    match_object_size: s3StorageLensGroupFilterAndMatchObjectSizeToTerraform(struct!.matchObjectSize),
  }
}


export function s3StorageLensGroupFilterAndToHclTerraform(struct?: S3StorageLensGroupFilterAnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    match_any_prefix: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchAnyPrefix),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    match_any_suffix: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchAnySuffix),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    match_any_tag: {
      value: cdktn.listMapperHcl(s3StorageLensGroupFilterAndMatchAnyTagToHclTerraform, false)(struct!.matchAnyTag),
      isBlock: true,
      type: "set",
      storageClassType: "S3StorageLensGroupFilterAndMatchAnyTagList",
    },
    match_object_age: {
      value: s3StorageLensGroupFilterAndMatchObjectAgeToHclTerraform(struct!.matchObjectAge),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensGroupFilterAndMatchObjectAge",
    },
    match_object_size: {
      value: s3StorageLensGroupFilterAndMatchObjectSizeToHclTerraform(struct!.matchObjectSize),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensGroupFilterAndMatchObjectSize",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensGroupFilterAndOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensGroupFilterAnd | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchAnyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAnyPrefix = this._matchAnyPrefix;
    }
    if (this._matchAnySuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAnySuffix = this._matchAnySuffix;
    }
    if (this._matchAnyTag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAnyTag = this._matchAnyTag?.internalValue;
    }
    if (this._matchObjectAge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchObjectAge = this._matchObjectAge?.internalValue;
    }
    if (this._matchObjectSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchObjectSize = this._matchObjectSize?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensGroupFilterAnd | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchAnyPrefix = undefined;
      this._matchAnySuffix = undefined;
      this._matchAnyTag.internalValue = undefined;
      this._matchObjectAge.internalValue = undefined;
      this._matchObjectSize.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchAnyPrefix = value.matchAnyPrefix;
      this._matchAnySuffix = value.matchAnySuffix;
      this._matchAnyTag.internalValue = value.matchAnyTag;
      this._matchObjectAge.internalValue = value.matchObjectAge;
      this._matchObjectSize.internalValue = value.matchObjectSize;
    }
  }

  // match_any_prefix - computed: true, optional: true, required: false
  private _matchAnyPrefix?: string[]; 
  public get matchAnyPrefix() {
    return cdktn.Fn.tolist(this.getListAttribute('match_any_prefix'));
  }
  public set matchAnyPrefix(value: string[]) {
    this._matchAnyPrefix = value;
  }
  public resetMatchAnyPrefix() {
    this._matchAnyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAnyPrefixInput() {
    return this._matchAnyPrefix;
  }

  // match_any_suffix - computed: true, optional: true, required: false
  private _matchAnySuffix?: string[]; 
  public get matchAnySuffix() {
    return cdktn.Fn.tolist(this.getListAttribute('match_any_suffix'));
  }
  public set matchAnySuffix(value: string[]) {
    this._matchAnySuffix = value;
  }
  public resetMatchAnySuffix() {
    this._matchAnySuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAnySuffixInput() {
    return this._matchAnySuffix;
  }

  // match_any_tag - computed: true, optional: true, required: false
  private _matchAnyTag = new S3StorageLensGroupFilterAndMatchAnyTagList(this, "match_any_tag", true);
  public get matchAnyTag() {
    return this._matchAnyTag;
  }
  public putMatchAnyTag(value: S3StorageLensGroupFilterAndMatchAnyTag[] | cdktn.IResolvable) {
    this._matchAnyTag.internalValue = value;
  }
  public resetMatchAnyTag() {
    this._matchAnyTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAnyTagInput() {
    return this._matchAnyTag.internalValue;
  }

  // match_object_age - computed: true, optional: true, required: false
  private _matchObjectAge = new S3StorageLensGroupFilterAndMatchObjectAgeOutputReference(this, "match_object_age");
  public get matchObjectAge() {
    return this._matchObjectAge;
  }
  public putMatchObjectAge(value: S3StorageLensGroupFilterAndMatchObjectAge) {
    this._matchObjectAge.internalValue = value;
  }
  public resetMatchObjectAge() {
    this._matchObjectAge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchObjectAgeInput() {
    return this._matchObjectAge.internalValue;
  }

  // match_object_size - computed: true, optional: true, required: false
  private _matchObjectSize = new S3StorageLensGroupFilterAndMatchObjectSizeOutputReference(this, "match_object_size");
  public get matchObjectSize() {
    return this._matchObjectSize;
  }
  public putMatchObjectSize(value: S3StorageLensGroupFilterAndMatchObjectSize) {
    this._matchObjectSize.internalValue = value;
  }
  public resetMatchObjectSize() {
    this._matchObjectSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchObjectSizeInput() {
    return this._matchObjectSize.internalValue;
  }
}
export interface S3StorageLensGroupFilterMatchAnyTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group#key S3StorageLensGroup#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group#value S3StorageLensGroup#value}
  */
  readonly value?: string;
}

export function s3StorageLensGroupFilterMatchAnyTagToTerraform(struct?: S3StorageLensGroupFilterMatchAnyTag | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function s3StorageLensGroupFilterMatchAnyTagToHclTerraform(struct?: S3StorageLensGroupFilterMatchAnyTag | cdktn.IResolvable): any {
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

export class S3StorageLensGroupFilterMatchAnyTagOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3StorageLensGroupFilterMatchAnyTag | cdktn.IResolvable | undefined {
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

  public set internalValue(value: S3StorageLensGroupFilterMatchAnyTag | cdktn.IResolvable | undefined) {
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

export class S3StorageLensGroupFilterMatchAnyTagList extends cdktn.ComplexList {
  public internalValue? : S3StorageLensGroupFilterMatchAnyTag[] | cdktn.IResolvable

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
  public get(index: number): S3StorageLensGroupFilterMatchAnyTagOutputReference {
    return new S3StorageLensGroupFilterMatchAnyTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3StorageLensGroupFilterMatchObjectAge {
  /**
  * Minimum object age to which the rule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group#days_greater_than S3StorageLensGroup#days_greater_than}
  */
  readonly daysGreaterThan?: number;
  /**
  * Maximum object age to which the rule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group#days_less_than S3StorageLensGroup#days_less_than}
  */
  readonly daysLessThan?: number;
}

export function s3StorageLensGroupFilterMatchObjectAgeToTerraform(struct?: S3StorageLensGroupFilterMatchObjectAge | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    days_greater_than: cdktn.numberToTerraform(struct!.daysGreaterThan),
    days_less_than: cdktn.numberToTerraform(struct!.daysLessThan),
  }
}


export function s3StorageLensGroupFilterMatchObjectAgeToHclTerraform(struct?: S3StorageLensGroupFilterMatchObjectAge | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    days_greater_than: {
      value: cdktn.numberToHclTerraform(struct!.daysGreaterThan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    days_less_than: {
      value: cdktn.numberToHclTerraform(struct!.daysLessThan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensGroupFilterMatchObjectAgeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensGroupFilterMatchObjectAge | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysGreaterThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysGreaterThan = this._daysGreaterThan;
    }
    if (this._daysLessThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysLessThan = this._daysLessThan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensGroupFilterMatchObjectAge | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daysGreaterThan = undefined;
      this._daysLessThan = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daysGreaterThan = value.daysGreaterThan;
      this._daysLessThan = value.daysLessThan;
    }
  }

  // days_greater_than - computed: true, optional: true, required: false
  private _daysGreaterThan?: number; 
  public get daysGreaterThan() {
    return this.getNumberAttribute('days_greater_than');
  }
  public set daysGreaterThan(value: number) {
    this._daysGreaterThan = value;
  }
  public resetDaysGreaterThan() {
    this._daysGreaterThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysGreaterThanInput() {
    return this._daysGreaterThan;
  }

  // days_less_than - computed: true, optional: true, required: false
  private _daysLessThan?: number; 
  public get daysLessThan() {
    return this.getNumberAttribute('days_less_than');
  }
  public set daysLessThan(value: number) {
    this._daysLessThan = value;
  }
  public resetDaysLessThan() {
    this._daysLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysLessThanInput() {
    return this._daysLessThan;
  }
}
export interface S3StorageLensGroupFilterMatchObjectSize {
  /**
  * Minimum object size to which the rule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group#bytes_greater_than S3StorageLensGroup#bytes_greater_than}
  */
  readonly bytesGreaterThan?: number;
  /**
  * Maximum object size to which the rule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group#bytes_less_than S3StorageLensGroup#bytes_less_than}
  */
  readonly bytesLessThan?: number;
}

export function s3StorageLensGroupFilterMatchObjectSizeToTerraform(struct?: S3StorageLensGroupFilterMatchObjectSize | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bytes_greater_than: cdktn.numberToTerraform(struct!.bytesGreaterThan),
    bytes_less_than: cdktn.numberToTerraform(struct!.bytesLessThan),
  }
}


export function s3StorageLensGroupFilterMatchObjectSizeToHclTerraform(struct?: S3StorageLensGroupFilterMatchObjectSize | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bytes_greater_than: {
      value: cdktn.numberToHclTerraform(struct!.bytesGreaterThan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bytes_less_than: {
      value: cdktn.numberToHclTerraform(struct!.bytesLessThan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensGroupFilterMatchObjectSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensGroupFilterMatchObjectSize | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bytesGreaterThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytesGreaterThan = this._bytesGreaterThan;
    }
    if (this._bytesLessThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytesLessThan = this._bytesLessThan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensGroupFilterMatchObjectSize | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bytesGreaterThan = undefined;
      this._bytesLessThan = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bytesGreaterThan = value.bytesGreaterThan;
      this._bytesLessThan = value.bytesLessThan;
    }
  }

  // bytes_greater_than - computed: true, optional: true, required: false
  private _bytesGreaterThan?: number; 
  public get bytesGreaterThan() {
    return this.getNumberAttribute('bytes_greater_than');
  }
  public set bytesGreaterThan(value: number) {
    this._bytesGreaterThan = value;
  }
  public resetBytesGreaterThan() {
    this._bytesGreaterThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesGreaterThanInput() {
    return this._bytesGreaterThan;
  }

  // bytes_less_than - computed: true, optional: true, required: false
  private _bytesLessThan?: number; 
  public get bytesLessThan() {
    return this.getNumberAttribute('bytes_less_than');
  }
  public set bytesLessThan(value: number) {
    this._bytesLessThan = value;
  }
  public resetBytesLessThan() {
    this._bytesLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesLessThanInput() {
    return this._bytesLessThan;
  }
}
export interface S3StorageLensGroupFilterOrMatchAnyTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group#key S3StorageLensGroup#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group#value S3StorageLensGroup#value}
  */
  readonly value?: string;
}

export function s3StorageLensGroupFilterOrMatchAnyTagToTerraform(struct?: S3StorageLensGroupFilterOrMatchAnyTag | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function s3StorageLensGroupFilterOrMatchAnyTagToHclTerraform(struct?: S3StorageLensGroupFilterOrMatchAnyTag | cdktn.IResolvable): any {
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

export class S3StorageLensGroupFilterOrMatchAnyTagOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3StorageLensGroupFilterOrMatchAnyTag | cdktn.IResolvable | undefined {
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

  public set internalValue(value: S3StorageLensGroupFilterOrMatchAnyTag | cdktn.IResolvable | undefined) {
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

export class S3StorageLensGroupFilterOrMatchAnyTagList extends cdktn.ComplexList {
  public internalValue? : S3StorageLensGroupFilterOrMatchAnyTag[] | cdktn.IResolvable

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
  public get(index: number): S3StorageLensGroupFilterOrMatchAnyTagOutputReference {
    return new S3StorageLensGroupFilterOrMatchAnyTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3StorageLensGroupFilterOrMatchObjectAge {
  /**
  * Minimum object age to which the rule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group#days_greater_than S3StorageLensGroup#days_greater_than}
  */
  readonly daysGreaterThan?: number;
  /**
  * Maximum object age to which the rule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group#days_less_than S3StorageLensGroup#days_less_than}
  */
  readonly daysLessThan?: number;
}

export function s3StorageLensGroupFilterOrMatchObjectAgeToTerraform(struct?: S3StorageLensGroupFilterOrMatchObjectAge | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    days_greater_than: cdktn.numberToTerraform(struct!.daysGreaterThan),
    days_less_than: cdktn.numberToTerraform(struct!.daysLessThan),
  }
}


export function s3StorageLensGroupFilterOrMatchObjectAgeToHclTerraform(struct?: S3StorageLensGroupFilterOrMatchObjectAge | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    days_greater_than: {
      value: cdktn.numberToHclTerraform(struct!.daysGreaterThan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    days_less_than: {
      value: cdktn.numberToHclTerraform(struct!.daysLessThan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensGroupFilterOrMatchObjectAgeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensGroupFilterOrMatchObjectAge | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysGreaterThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysGreaterThan = this._daysGreaterThan;
    }
    if (this._daysLessThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysLessThan = this._daysLessThan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensGroupFilterOrMatchObjectAge | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daysGreaterThan = undefined;
      this._daysLessThan = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daysGreaterThan = value.daysGreaterThan;
      this._daysLessThan = value.daysLessThan;
    }
  }

  // days_greater_than - computed: true, optional: true, required: false
  private _daysGreaterThan?: number; 
  public get daysGreaterThan() {
    return this.getNumberAttribute('days_greater_than');
  }
  public set daysGreaterThan(value: number) {
    this._daysGreaterThan = value;
  }
  public resetDaysGreaterThan() {
    this._daysGreaterThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysGreaterThanInput() {
    return this._daysGreaterThan;
  }

  // days_less_than - computed: true, optional: true, required: false
  private _daysLessThan?: number; 
  public get daysLessThan() {
    return this.getNumberAttribute('days_less_than');
  }
  public set daysLessThan(value: number) {
    this._daysLessThan = value;
  }
  public resetDaysLessThan() {
    this._daysLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysLessThanInput() {
    return this._daysLessThan;
  }
}
export interface S3StorageLensGroupFilterOrMatchObjectSize {
  /**
  * Minimum object size to which the rule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group#bytes_greater_than S3StorageLensGroup#bytes_greater_than}
  */
  readonly bytesGreaterThan?: number;
  /**
  * Maximum object size to which the rule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group#bytes_less_than S3StorageLensGroup#bytes_less_than}
  */
  readonly bytesLessThan?: number;
}

export function s3StorageLensGroupFilterOrMatchObjectSizeToTerraform(struct?: S3StorageLensGroupFilterOrMatchObjectSize | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bytes_greater_than: cdktn.numberToTerraform(struct!.bytesGreaterThan),
    bytes_less_than: cdktn.numberToTerraform(struct!.bytesLessThan),
  }
}


export function s3StorageLensGroupFilterOrMatchObjectSizeToHclTerraform(struct?: S3StorageLensGroupFilterOrMatchObjectSize | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bytes_greater_than: {
      value: cdktn.numberToHclTerraform(struct!.bytesGreaterThan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bytes_less_than: {
      value: cdktn.numberToHclTerraform(struct!.bytesLessThan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensGroupFilterOrMatchObjectSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensGroupFilterOrMatchObjectSize | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bytesGreaterThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytesGreaterThan = this._bytesGreaterThan;
    }
    if (this._bytesLessThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytesLessThan = this._bytesLessThan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensGroupFilterOrMatchObjectSize | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bytesGreaterThan = undefined;
      this._bytesLessThan = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bytesGreaterThan = value.bytesGreaterThan;
      this._bytesLessThan = value.bytesLessThan;
    }
  }

  // bytes_greater_than - computed: true, optional: true, required: false
  private _bytesGreaterThan?: number; 
  public get bytesGreaterThan() {
    return this.getNumberAttribute('bytes_greater_than');
  }
  public set bytesGreaterThan(value: number) {
    this._bytesGreaterThan = value;
  }
  public resetBytesGreaterThan() {
    this._bytesGreaterThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesGreaterThanInput() {
    return this._bytesGreaterThan;
  }

  // bytes_less_than - computed: true, optional: true, required: false
  private _bytesLessThan?: number; 
  public get bytesLessThan() {
    return this.getNumberAttribute('bytes_less_than');
  }
  public set bytesLessThan(value: number) {
    this._bytesLessThan = value;
  }
  public resetBytesLessThan() {
    this._bytesLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesLessThanInput() {
    return this._bytesLessThan;
  }
}
export interface S3StorageLensGroupFilterOr {
  /**
  * Filter to match any of the specified prefixes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group#match_any_prefix S3StorageLensGroup#match_any_prefix}
  */
  readonly matchAnyPrefix?: string[];
  /**
  * Filter to match any of the specified suffixes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group#match_any_suffix S3StorageLensGroup#match_any_suffix}
  */
  readonly matchAnySuffix?: string[];
  /**
  * Filter to match any of the specified object tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group#match_any_tag S3StorageLensGroup#match_any_tag}
  */
  readonly matchAnyTag?: S3StorageLensGroupFilterOrMatchAnyTag[] | cdktn.IResolvable;
  /**
  * Filter to match all of the specified values for the minimum and maximum object age.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group#match_object_age S3StorageLensGroup#match_object_age}
  */
  readonly matchObjectAge?: S3StorageLensGroupFilterOrMatchObjectAge;
  /**
  * Filter to match all of the specified values for the minimum and maximum object size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group#match_object_size S3StorageLensGroup#match_object_size}
  */
  readonly matchObjectSize?: S3StorageLensGroupFilterOrMatchObjectSize;
}

export function s3StorageLensGroupFilterOrToTerraform(struct?: S3StorageLensGroupFilterOr | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    match_any_prefix: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchAnyPrefix),
    match_any_suffix: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchAnySuffix),
    match_any_tag: cdktn.listMapper(s3StorageLensGroupFilterOrMatchAnyTagToTerraform, false)(struct!.matchAnyTag),
    match_object_age: s3StorageLensGroupFilterOrMatchObjectAgeToTerraform(struct!.matchObjectAge),
    match_object_size: s3StorageLensGroupFilterOrMatchObjectSizeToTerraform(struct!.matchObjectSize),
  }
}


export function s3StorageLensGroupFilterOrToHclTerraform(struct?: S3StorageLensGroupFilterOr | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    match_any_prefix: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchAnyPrefix),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    match_any_suffix: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchAnySuffix),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    match_any_tag: {
      value: cdktn.listMapperHcl(s3StorageLensGroupFilterOrMatchAnyTagToHclTerraform, false)(struct!.matchAnyTag),
      isBlock: true,
      type: "set",
      storageClassType: "S3StorageLensGroupFilterOrMatchAnyTagList",
    },
    match_object_age: {
      value: s3StorageLensGroupFilterOrMatchObjectAgeToHclTerraform(struct!.matchObjectAge),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensGroupFilterOrMatchObjectAge",
    },
    match_object_size: {
      value: s3StorageLensGroupFilterOrMatchObjectSizeToHclTerraform(struct!.matchObjectSize),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensGroupFilterOrMatchObjectSize",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensGroupFilterOrOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensGroupFilterOr | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchAnyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAnyPrefix = this._matchAnyPrefix;
    }
    if (this._matchAnySuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAnySuffix = this._matchAnySuffix;
    }
    if (this._matchAnyTag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAnyTag = this._matchAnyTag?.internalValue;
    }
    if (this._matchObjectAge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchObjectAge = this._matchObjectAge?.internalValue;
    }
    if (this._matchObjectSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchObjectSize = this._matchObjectSize?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensGroupFilterOr | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchAnyPrefix = undefined;
      this._matchAnySuffix = undefined;
      this._matchAnyTag.internalValue = undefined;
      this._matchObjectAge.internalValue = undefined;
      this._matchObjectSize.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchAnyPrefix = value.matchAnyPrefix;
      this._matchAnySuffix = value.matchAnySuffix;
      this._matchAnyTag.internalValue = value.matchAnyTag;
      this._matchObjectAge.internalValue = value.matchObjectAge;
      this._matchObjectSize.internalValue = value.matchObjectSize;
    }
  }

  // match_any_prefix - computed: true, optional: true, required: false
  private _matchAnyPrefix?: string[]; 
  public get matchAnyPrefix() {
    return cdktn.Fn.tolist(this.getListAttribute('match_any_prefix'));
  }
  public set matchAnyPrefix(value: string[]) {
    this._matchAnyPrefix = value;
  }
  public resetMatchAnyPrefix() {
    this._matchAnyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAnyPrefixInput() {
    return this._matchAnyPrefix;
  }

  // match_any_suffix - computed: true, optional: true, required: false
  private _matchAnySuffix?: string[]; 
  public get matchAnySuffix() {
    return cdktn.Fn.tolist(this.getListAttribute('match_any_suffix'));
  }
  public set matchAnySuffix(value: string[]) {
    this._matchAnySuffix = value;
  }
  public resetMatchAnySuffix() {
    this._matchAnySuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAnySuffixInput() {
    return this._matchAnySuffix;
  }

  // match_any_tag - computed: true, optional: true, required: false
  private _matchAnyTag = new S3StorageLensGroupFilterOrMatchAnyTagList(this, "match_any_tag", true);
  public get matchAnyTag() {
    return this._matchAnyTag;
  }
  public putMatchAnyTag(value: S3StorageLensGroupFilterOrMatchAnyTag[] | cdktn.IResolvable) {
    this._matchAnyTag.internalValue = value;
  }
  public resetMatchAnyTag() {
    this._matchAnyTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAnyTagInput() {
    return this._matchAnyTag.internalValue;
  }

  // match_object_age - computed: true, optional: true, required: false
  private _matchObjectAge = new S3StorageLensGroupFilterOrMatchObjectAgeOutputReference(this, "match_object_age");
  public get matchObjectAge() {
    return this._matchObjectAge;
  }
  public putMatchObjectAge(value: S3StorageLensGroupFilterOrMatchObjectAge) {
    this._matchObjectAge.internalValue = value;
  }
  public resetMatchObjectAge() {
    this._matchObjectAge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchObjectAgeInput() {
    return this._matchObjectAge.internalValue;
  }

  // match_object_size - computed: true, optional: true, required: false
  private _matchObjectSize = new S3StorageLensGroupFilterOrMatchObjectSizeOutputReference(this, "match_object_size");
  public get matchObjectSize() {
    return this._matchObjectSize;
  }
  public putMatchObjectSize(value: S3StorageLensGroupFilterOrMatchObjectSize) {
    this._matchObjectSize.internalValue = value;
  }
  public resetMatchObjectSize() {
    this._matchObjectSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchObjectSizeInput() {
    return this._matchObjectSize.internalValue;
  }
}
export interface S3StorageLensGroupFilter {
  /**
  * The Storage Lens group will include objects that match all of the specified filter values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group#and S3StorageLensGroup#and}
  */
  readonly and?: S3StorageLensGroupFilterAnd;
  /**
  * Filter to match any of the specified prefixes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group#match_any_prefix S3StorageLensGroup#match_any_prefix}
  */
  readonly matchAnyPrefix?: string[];
  /**
  * Filter to match any of the specified suffixes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group#match_any_suffix S3StorageLensGroup#match_any_suffix}
  */
  readonly matchAnySuffix?: string[];
  /**
  * Filter to match any of the specified object tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group#match_any_tag S3StorageLensGroup#match_any_tag}
  */
  readonly matchAnyTag?: S3StorageLensGroupFilterMatchAnyTag[] | cdktn.IResolvable;
  /**
  * Filter to match all of the specified values for the minimum and maximum object age.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group#match_object_age S3StorageLensGroup#match_object_age}
  */
  readonly matchObjectAge?: S3StorageLensGroupFilterMatchObjectAge;
  /**
  * Filter to match all of the specified values for the minimum and maximum object size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group#match_object_size S3StorageLensGroup#match_object_size}
  */
  readonly matchObjectSize?: S3StorageLensGroupFilterMatchObjectSize;
  /**
  * The Storage Lens group will include objects that match any of the specified filter values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group#or S3StorageLensGroup#or}
  */
  readonly or?: S3StorageLensGroupFilterOr;
}

export function s3StorageLensGroupFilterToTerraform(struct?: S3StorageLensGroupFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    and: s3StorageLensGroupFilterAndToTerraform(struct!.and),
    match_any_prefix: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchAnyPrefix),
    match_any_suffix: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchAnySuffix),
    match_any_tag: cdktn.listMapper(s3StorageLensGroupFilterMatchAnyTagToTerraform, false)(struct!.matchAnyTag),
    match_object_age: s3StorageLensGroupFilterMatchObjectAgeToTerraform(struct!.matchObjectAge),
    match_object_size: s3StorageLensGroupFilterMatchObjectSizeToTerraform(struct!.matchObjectSize),
    or: s3StorageLensGroupFilterOrToTerraform(struct!.or),
  }
}


export function s3StorageLensGroupFilterToHclTerraform(struct?: S3StorageLensGroupFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    and: {
      value: s3StorageLensGroupFilterAndToHclTerraform(struct!.and),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensGroupFilterAnd",
    },
    match_any_prefix: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchAnyPrefix),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    match_any_suffix: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchAnySuffix),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    match_any_tag: {
      value: cdktn.listMapperHcl(s3StorageLensGroupFilterMatchAnyTagToHclTerraform, false)(struct!.matchAnyTag),
      isBlock: true,
      type: "set",
      storageClassType: "S3StorageLensGroupFilterMatchAnyTagList",
    },
    match_object_age: {
      value: s3StorageLensGroupFilterMatchObjectAgeToHclTerraform(struct!.matchObjectAge),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensGroupFilterMatchObjectAge",
    },
    match_object_size: {
      value: s3StorageLensGroupFilterMatchObjectSizeToHclTerraform(struct!.matchObjectSize),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensGroupFilterMatchObjectSize",
    },
    or: {
      value: s3StorageLensGroupFilterOrToHclTerraform(struct!.or),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensGroupFilterOr",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensGroupFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensGroupFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    if (this._matchAnyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAnyPrefix = this._matchAnyPrefix;
    }
    if (this._matchAnySuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAnySuffix = this._matchAnySuffix;
    }
    if (this._matchAnyTag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAnyTag = this._matchAnyTag?.internalValue;
    }
    if (this._matchObjectAge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchObjectAge = this._matchObjectAge?.internalValue;
    }
    if (this._matchObjectSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchObjectSize = this._matchObjectSize?.internalValue;
    }
    if (this._or?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.or = this._or?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensGroupFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._and.internalValue = undefined;
      this._matchAnyPrefix = undefined;
      this._matchAnySuffix = undefined;
      this._matchAnyTag.internalValue = undefined;
      this._matchObjectAge.internalValue = undefined;
      this._matchObjectSize.internalValue = undefined;
      this._or.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._and.internalValue = value.and;
      this._matchAnyPrefix = value.matchAnyPrefix;
      this._matchAnySuffix = value.matchAnySuffix;
      this._matchAnyTag.internalValue = value.matchAnyTag;
      this._matchObjectAge.internalValue = value.matchObjectAge;
      this._matchObjectSize.internalValue = value.matchObjectSize;
      this._or.internalValue = value.or;
    }
  }

  // and - computed: true, optional: true, required: false
  private _and = new S3StorageLensGroupFilterAndOutputReference(this, "and");
  public get and() {
    return this._and;
  }
  public putAnd(value: S3StorageLensGroupFilterAnd) {
    this._and.internalValue = value;
  }
  public resetAnd() {
    this._and.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
  }

  // match_any_prefix - computed: true, optional: true, required: false
  private _matchAnyPrefix?: string[]; 
  public get matchAnyPrefix() {
    return cdktn.Fn.tolist(this.getListAttribute('match_any_prefix'));
  }
  public set matchAnyPrefix(value: string[]) {
    this._matchAnyPrefix = value;
  }
  public resetMatchAnyPrefix() {
    this._matchAnyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAnyPrefixInput() {
    return this._matchAnyPrefix;
  }

  // match_any_suffix - computed: true, optional: true, required: false
  private _matchAnySuffix?: string[]; 
  public get matchAnySuffix() {
    return cdktn.Fn.tolist(this.getListAttribute('match_any_suffix'));
  }
  public set matchAnySuffix(value: string[]) {
    this._matchAnySuffix = value;
  }
  public resetMatchAnySuffix() {
    this._matchAnySuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAnySuffixInput() {
    return this._matchAnySuffix;
  }

  // match_any_tag - computed: true, optional: true, required: false
  private _matchAnyTag = new S3StorageLensGroupFilterMatchAnyTagList(this, "match_any_tag", true);
  public get matchAnyTag() {
    return this._matchAnyTag;
  }
  public putMatchAnyTag(value: S3StorageLensGroupFilterMatchAnyTag[] | cdktn.IResolvable) {
    this._matchAnyTag.internalValue = value;
  }
  public resetMatchAnyTag() {
    this._matchAnyTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAnyTagInput() {
    return this._matchAnyTag.internalValue;
  }

  // match_object_age - computed: true, optional: true, required: false
  private _matchObjectAge = new S3StorageLensGroupFilterMatchObjectAgeOutputReference(this, "match_object_age");
  public get matchObjectAge() {
    return this._matchObjectAge;
  }
  public putMatchObjectAge(value: S3StorageLensGroupFilterMatchObjectAge) {
    this._matchObjectAge.internalValue = value;
  }
  public resetMatchObjectAge() {
    this._matchObjectAge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchObjectAgeInput() {
    return this._matchObjectAge.internalValue;
  }

  // match_object_size - computed: true, optional: true, required: false
  private _matchObjectSize = new S3StorageLensGroupFilterMatchObjectSizeOutputReference(this, "match_object_size");
  public get matchObjectSize() {
    return this._matchObjectSize;
  }
  public putMatchObjectSize(value: S3StorageLensGroupFilterMatchObjectSize) {
    this._matchObjectSize.internalValue = value;
  }
  public resetMatchObjectSize() {
    this._matchObjectSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchObjectSizeInput() {
    return this._matchObjectSize.internalValue;
  }

  // or - computed: true, optional: true, required: false
  private _or = new S3StorageLensGroupFilterOrOutputReference(this, "or");
  public get or() {
    return this._or;
  }
  public putOr(value: S3StorageLensGroupFilterOr) {
    this._or.internalValue = value;
  }
  public resetOr() {
    this._or.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orInput() {
    return this._or.internalValue;
  }
}
export interface S3StorageLensGroupTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group#key S3StorageLensGroup#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group#value S3StorageLensGroup#value}
  */
  readonly value?: string;
}

export function s3StorageLensGroupTagsToTerraform(struct?: S3StorageLensGroupTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function s3StorageLensGroupTagsToHclTerraform(struct?: S3StorageLensGroupTags | cdktn.IResolvable): any {
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

export class S3StorageLensGroupTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3StorageLensGroupTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: S3StorageLensGroupTags | cdktn.IResolvable | undefined) {
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

export class S3StorageLensGroupTagsList extends cdktn.ComplexList {
  public internalValue? : S3StorageLensGroupTags[] | cdktn.IResolvable

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
  public get(index: number): S3StorageLensGroupTagsOutputReference {
    return new S3StorageLensGroupTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group awscc_s3_storage_lens_group}
*/
export class S3StorageLensGroup extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_s3_storage_lens_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a S3StorageLensGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3StorageLensGroup to import
  * @param importFromId The id of the existing S3StorageLensGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3StorageLensGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_s3_storage_lens_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/s3_storage_lens_group awscc_s3_storage_lens_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3StorageLensGroupConfig
  */
  public constructor(scope: Construct, id: string, config: S3StorageLensGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_s3_storage_lens_group',
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
    this._filter.internalValue = config.filter;
    this._name = config.name;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter - computed: false, optional: false, required: true
  private _filter = new S3StorageLensGroupFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: S3StorageLensGroupFilter) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // storage_lens_group_arn - computed: true, optional: false, required: false
  public get storageLensGroupArn() {
    return this.getStringAttribute('storage_lens_group_arn');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new S3StorageLensGroupTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: S3StorageLensGroupTags[] | cdktn.IResolvable) {
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
      filter: s3StorageLensGroupFilterToTerraform(this._filter.internalValue),
      name: cdktn.stringToTerraform(this._name),
      tags: cdktn.listMapper(s3StorageLensGroupTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: s3StorageLensGroupFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3StorageLensGroupFilter",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(s3StorageLensGroupTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "S3StorageLensGroupTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
