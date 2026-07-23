// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/s3_storage_lens_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccS3StorageLensGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/s3_storage_lens_group#id DataAwsccS3StorageLensGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccS3StorageLensGroupFilterAndMatchAnyTag {
}

export function dataAwsccS3StorageLensGroupFilterAndMatchAnyTagToTerraform(struct?: DataAwsccS3StorageLensGroupFilterAndMatchAnyTag): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensGroupFilterAndMatchAnyTagToHclTerraform(struct?: DataAwsccS3StorageLensGroupFilterAndMatchAnyTag): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3StorageLensGroupFilterAndMatchAnyTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensGroupFilterAndMatchAnyTag | undefined) {
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

export class DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference {
    return new DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccS3StorageLensGroupFilterAndMatchObjectAge {
}

export function dataAwsccS3StorageLensGroupFilterAndMatchObjectAgeToTerraform(struct?: DataAwsccS3StorageLensGroupFilterAndMatchObjectAge): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensGroupFilterAndMatchObjectAgeToHclTerraform(struct?: DataAwsccS3StorageLensGroupFilterAndMatchObjectAge): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensGroupFilterAndMatchObjectAge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensGroupFilterAndMatchObjectAge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // days_greater_than - computed: true, optional: false, required: false
  public get daysGreaterThan() {
    return this.getNumberAttribute('days_greater_than');
  }

  // days_less_than - computed: true, optional: false, required: false
  public get daysLessThan() {
    return this.getNumberAttribute('days_less_than');
  }
}
export interface DataAwsccS3StorageLensGroupFilterAndMatchObjectSize {
}

export function dataAwsccS3StorageLensGroupFilterAndMatchObjectSizeToTerraform(struct?: DataAwsccS3StorageLensGroupFilterAndMatchObjectSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensGroupFilterAndMatchObjectSizeToHclTerraform(struct?: DataAwsccS3StorageLensGroupFilterAndMatchObjectSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensGroupFilterAndMatchObjectSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensGroupFilterAndMatchObjectSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bytes_greater_than - computed: true, optional: false, required: false
  public get bytesGreaterThan() {
    return this.getNumberAttribute('bytes_greater_than');
  }

  // bytes_less_than - computed: true, optional: false, required: false
  public get bytesLessThan() {
    return this.getNumberAttribute('bytes_less_than');
  }
}
export interface DataAwsccS3StorageLensGroupFilterAnd {
}

export function dataAwsccS3StorageLensGroupFilterAndToTerraform(struct?: DataAwsccS3StorageLensGroupFilterAnd): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensGroupFilterAndToHclTerraform(struct?: DataAwsccS3StorageLensGroupFilterAnd): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensGroupFilterAndOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensGroupFilterAnd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensGroupFilterAnd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // match_any_prefix - computed: true, optional: false, required: false
  public get matchAnyPrefix() {
    return cdktn.Fn.tolist(this.getListAttribute('match_any_prefix'));
  }

  // match_any_suffix - computed: true, optional: false, required: false
  public get matchAnySuffix() {
    return cdktn.Fn.tolist(this.getListAttribute('match_any_suffix'));
  }

  // match_any_tag - computed: true, optional: false, required: false
  private _matchAnyTag = new DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList(this, "match_any_tag", true);
  public get matchAnyTag() {
    return this._matchAnyTag;
  }

  // match_object_age - computed: true, optional: false, required: false
  private _matchObjectAge = new DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference(this, "match_object_age");
  public get matchObjectAge() {
    return this._matchObjectAge;
  }

  // match_object_size - computed: true, optional: false, required: false
  private _matchObjectSize = new DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference(this, "match_object_size");
  public get matchObjectSize() {
    return this._matchObjectSize;
  }
}
export interface DataAwsccS3StorageLensGroupFilterMatchAnyTag {
}

export function dataAwsccS3StorageLensGroupFilterMatchAnyTagToTerraform(struct?: DataAwsccS3StorageLensGroupFilterMatchAnyTag): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensGroupFilterMatchAnyTagToHclTerraform(struct?: DataAwsccS3StorageLensGroupFilterMatchAnyTag): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3StorageLensGroupFilterMatchAnyTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensGroupFilterMatchAnyTag | undefined) {
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

export class DataAwsccS3StorageLensGroupFilterMatchAnyTagList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference {
    return new DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccS3StorageLensGroupFilterMatchObjectAge {
}

export function dataAwsccS3StorageLensGroupFilterMatchObjectAgeToTerraform(struct?: DataAwsccS3StorageLensGroupFilterMatchObjectAge): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensGroupFilterMatchObjectAgeToHclTerraform(struct?: DataAwsccS3StorageLensGroupFilterMatchObjectAge): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensGroupFilterMatchObjectAge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensGroupFilterMatchObjectAge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // days_greater_than - computed: true, optional: false, required: false
  public get daysGreaterThan() {
    return this.getNumberAttribute('days_greater_than');
  }

  // days_less_than - computed: true, optional: false, required: false
  public get daysLessThan() {
    return this.getNumberAttribute('days_less_than');
  }
}
export interface DataAwsccS3StorageLensGroupFilterMatchObjectSize {
}

export function dataAwsccS3StorageLensGroupFilterMatchObjectSizeToTerraform(struct?: DataAwsccS3StorageLensGroupFilterMatchObjectSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensGroupFilterMatchObjectSizeToHclTerraform(struct?: DataAwsccS3StorageLensGroupFilterMatchObjectSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensGroupFilterMatchObjectSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensGroupFilterMatchObjectSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bytes_greater_than - computed: true, optional: false, required: false
  public get bytesGreaterThan() {
    return this.getNumberAttribute('bytes_greater_than');
  }

  // bytes_less_than - computed: true, optional: false, required: false
  public get bytesLessThan() {
    return this.getNumberAttribute('bytes_less_than');
  }
}
export interface DataAwsccS3StorageLensGroupFilterOrMatchAnyTag {
}

export function dataAwsccS3StorageLensGroupFilterOrMatchAnyTagToTerraform(struct?: DataAwsccS3StorageLensGroupFilterOrMatchAnyTag): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensGroupFilterOrMatchAnyTagToHclTerraform(struct?: DataAwsccS3StorageLensGroupFilterOrMatchAnyTag): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3StorageLensGroupFilterOrMatchAnyTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensGroupFilterOrMatchAnyTag | undefined) {
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

export class DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference {
    return new DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccS3StorageLensGroupFilterOrMatchObjectAge {
}

export function dataAwsccS3StorageLensGroupFilterOrMatchObjectAgeToTerraform(struct?: DataAwsccS3StorageLensGroupFilterOrMatchObjectAge): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensGroupFilterOrMatchObjectAgeToHclTerraform(struct?: DataAwsccS3StorageLensGroupFilterOrMatchObjectAge): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensGroupFilterOrMatchObjectAge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensGroupFilterOrMatchObjectAge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // days_greater_than - computed: true, optional: false, required: false
  public get daysGreaterThan() {
    return this.getNumberAttribute('days_greater_than');
  }

  // days_less_than - computed: true, optional: false, required: false
  public get daysLessThan() {
    return this.getNumberAttribute('days_less_than');
  }
}
export interface DataAwsccS3StorageLensGroupFilterOrMatchObjectSize {
}

export function dataAwsccS3StorageLensGroupFilterOrMatchObjectSizeToTerraform(struct?: DataAwsccS3StorageLensGroupFilterOrMatchObjectSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensGroupFilterOrMatchObjectSizeToHclTerraform(struct?: DataAwsccS3StorageLensGroupFilterOrMatchObjectSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensGroupFilterOrMatchObjectSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensGroupFilterOrMatchObjectSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bytes_greater_than - computed: true, optional: false, required: false
  public get bytesGreaterThan() {
    return this.getNumberAttribute('bytes_greater_than');
  }

  // bytes_less_than - computed: true, optional: false, required: false
  public get bytesLessThan() {
    return this.getNumberAttribute('bytes_less_than');
  }
}
export interface DataAwsccS3StorageLensGroupFilterOr {
}

export function dataAwsccS3StorageLensGroupFilterOrToTerraform(struct?: DataAwsccS3StorageLensGroupFilterOr): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensGroupFilterOrToHclTerraform(struct?: DataAwsccS3StorageLensGroupFilterOr): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensGroupFilterOrOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensGroupFilterOr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensGroupFilterOr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // match_any_prefix - computed: true, optional: false, required: false
  public get matchAnyPrefix() {
    return cdktn.Fn.tolist(this.getListAttribute('match_any_prefix'));
  }

  // match_any_suffix - computed: true, optional: false, required: false
  public get matchAnySuffix() {
    return cdktn.Fn.tolist(this.getListAttribute('match_any_suffix'));
  }

  // match_any_tag - computed: true, optional: false, required: false
  private _matchAnyTag = new DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList(this, "match_any_tag", true);
  public get matchAnyTag() {
    return this._matchAnyTag;
  }

  // match_object_age - computed: true, optional: false, required: false
  private _matchObjectAge = new DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference(this, "match_object_age");
  public get matchObjectAge() {
    return this._matchObjectAge;
  }

  // match_object_size - computed: true, optional: false, required: false
  private _matchObjectSize = new DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference(this, "match_object_size");
  public get matchObjectSize() {
    return this._matchObjectSize;
  }
}
export interface DataAwsccS3StorageLensGroupFilter {
}

export function dataAwsccS3StorageLensGroupFilterToTerraform(struct?: DataAwsccS3StorageLensGroupFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensGroupFilterToHclTerraform(struct?: DataAwsccS3StorageLensGroupFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensGroupFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensGroupFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensGroupFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // and - computed: true, optional: false, required: false
  private _and = new DataAwsccS3StorageLensGroupFilterAndOutputReference(this, "and");
  public get and() {
    return this._and;
  }

  // match_any_prefix - computed: true, optional: false, required: false
  public get matchAnyPrefix() {
    return cdktn.Fn.tolist(this.getListAttribute('match_any_prefix'));
  }

  // match_any_suffix - computed: true, optional: false, required: false
  public get matchAnySuffix() {
    return cdktn.Fn.tolist(this.getListAttribute('match_any_suffix'));
  }

  // match_any_tag - computed: true, optional: false, required: false
  private _matchAnyTag = new DataAwsccS3StorageLensGroupFilterMatchAnyTagList(this, "match_any_tag", true);
  public get matchAnyTag() {
    return this._matchAnyTag;
  }

  // match_object_age - computed: true, optional: false, required: false
  private _matchObjectAge = new DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference(this, "match_object_age");
  public get matchObjectAge() {
    return this._matchObjectAge;
  }

  // match_object_size - computed: true, optional: false, required: false
  private _matchObjectSize = new DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference(this, "match_object_size");
  public get matchObjectSize() {
    return this._matchObjectSize;
  }

  // or - computed: true, optional: false, required: false
  private _or = new DataAwsccS3StorageLensGroupFilterOrOutputReference(this, "or");
  public get or() {
    return this._or;
  }
}
export interface DataAwsccS3StorageLensGroupTags {
}

export function dataAwsccS3StorageLensGroupTagsToTerraform(struct?: DataAwsccS3StorageLensGroupTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensGroupTagsToHclTerraform(struct?: DataAwsccS3StorageLensGroupTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensGroupTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3StorageLensGroupTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensGroupTags | undefined) {
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

export class DataAwsccS3StorageLensGroupTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3StorageLensGroupTagsOutputReference {
    return new DataAwsccS3StorageLensGroupTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/s3_storage_lens_group awscc_s3_storage_lens_group}
*/
export class DataAwsccS3StorageLensGroup extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_s3_storage_lens_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccS3StorageLensGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccS3StorageLensGroup to import
  * @param importFromId The id of the existing DataAwsccS3StorageLensGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/s3_storage_lens_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccS3StorageLensGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_s3_storage_lens_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/s3_storage_lens_group awscc_s3_storage_lens_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccS3StorageLensGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccS3StorageLensGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_s3_storage_lens_group',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.94.0'
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

  // filter - computed: true, optional: false, required: false
  private _filter = new DataAwsccS3StorageLensGroupFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // storage_lens_group_arn - computed: true, optional: false, required: false
  public get storageLensGroupArn() {
    return this.getStringAttribute('storage_lens_group_arn');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccS3StorageLensGroupTagsList(this, "tags", false);
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
