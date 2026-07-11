// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/s3outposts_bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccS3OutpostsBucketConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/s3outposts_bucket#id DataAwsccS3OutpostsBucket#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload {
}

export function dataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadToTerraform(struct?: DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadToHclTerraform(struct?: DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload | undefined) {
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
export interface DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags {
}

export function dataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsToTerraform(struct?: DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsToHclTerraform(struct?: DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags | undefined) {
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

export class DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference {
    return new DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator {
}

export function dataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorToTerraform(struct?: DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorToHclTerraform(struct?: DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator | undefined) {
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

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}
export interface DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTag {
}

export function dataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagToTerraform(struct?: DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTag): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagToHclTerraform(struct?: DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTag): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTag | undefined) {
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
export interface DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilter {
}

export function dataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterToTerraform(struct?: DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterToHclTerraform(struct?: DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // and_operator - computed: true, optional: false, required: false
  private _andOperator = new DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference(this, "and_operator");
  public get andOperator() {
    return this._andOperator;
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // tag - computed: true, optional: false, required: false
  private _tag = new DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference(this, "tag");
  public get tag() {
    return this._tag;
  }
}
export interface DataAwsccS3OutpostsBucketLifecycleConfigurationRules {
}

export function dataAwsccS3OutpostsBucketLifecycleConfigurationRulesToTerraform(struct?: DataAwsccS3OutpostsBucketLifecycleConfigurationRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3OutpostsBucketLifecycleConfigurationRulesToHclTerraform(struct?: DataAwsccS3OutpostsBucketLifecycleConfigurationRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3OutpostsBucketLifecycleConfigurationRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3OutpostsBucketLifecycleConfigurationRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // abort_incomplete_multipart_upload - computed: true, optional: false, required: false
  private _abortIncompleteMultipartUpload = new DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference(this, "abort_incomplete_multipart_upload");
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

  // filter - computed: true, optional: false, required: false
  private _filter = new DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference {
    return new DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccS3OutpostsBucketLifecycleConfiguration {
}

export function dataAwsccS3OutpostsBucketLifecycleConfigurationToTerraform(struct?: DataAwsccS3OutpostsBucketLifecycleConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3OutpostsBucketLifecycleConfigurationToHclTerraform(struct?: DataAwsccS3OutpostsBucketLifecycleConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3OutpostsBucketLifecycleConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3OutpostsBucketLifecycleConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }
}
export interface DataAwsccS3OutpostsBucketTags {
}

export function dataAwsccS3OutpostsBucketTagsToTerraform(struct?: DataAwsccS3OutpostsBucketTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3OutpostsBucketTagsToHclTerraform(struct?: DataAwsccS3OutpostsBucketTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3OutpostsBucketTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3OutpostsBucketTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3OutpostsBucketTags | undefined) {
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

export class DataAwsccS3OutpostsBucketTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3OutpostsBucketTagsOutputReference {
    return new DataAwsccS3OutpostsBucketTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/s3outposts_bucket awscc_s3outposts_bucket}
*/
export class DataAwsccS3OutpostsBucket extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_s3outposts_bucket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccS3OutpostsBucket resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccS3OutpostsBucket to import
  * @param importFromId The id of the existing DataAwsccS3OutpostsBucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/s3outposts_bucket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccS3OutpostsBucket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_s3outposts_bucket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/s3outposts_bucket awscc_s3outposts_bucket} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccS3OutpostsBucketConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccS3OutpostsBucketConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_s3outposts_bucket',
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

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
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

  // lifecycle_configuration - computed: true, optional: false, required: false
  private _lifecycleConfiguration = new DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference(this, "lifecycle_configuration");
  public get lifecycleConfiguration() {
    return this._lifecycleConfiguration;
  }

  // outpost_id - computed: true, optional: false, required: false
  public get outpostId() {
    return this.getStringAttribute('outpost_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccS3OutpostsBucketTagsList(this, "tags", true);
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
