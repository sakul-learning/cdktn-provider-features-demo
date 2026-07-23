// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/backup_backup_selection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccBackupBackupSelectionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/backup_backup_selection#id DataAwsccBackupBackupSelection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEquals {
}

export function dataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsToTerraform(struct?: DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEquals): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsToHclTerraform(struct?: DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEquals): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEquals | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEquals | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition_key - computed: true, optional: false, required: false
  public get conditionKey() {
    return this.getStringAttribute('condition_key');
  }

  // condition_value - computed: true, optional: false, required: false
  public get conditionValue() {
    return this.getStringAttribute('condition_value');
  }
}

export class DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference {
    return new DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLike {
}

export function dataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeToTerraform(struct?: DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLike): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeToHclTerraform(struct?: DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLike): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLike | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLike | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition_key - computed: true, optional: false, required: false
  public get conditionKey() {
    return this.getStringAttribute('condition_key');
  }

  // condition_value - computed: true, optional: false, required: false
  public get conditionValue() {
    return this.getStringAttribute('condition_value');
  }
}

export class DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference {
    return new DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEquals {
}

export function dataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsToTerraform(struct?: DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEquals): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsToHclTerraform(struct?: DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEquals): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEquals | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEquals | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition_key - computed: true, optional: false, required: false
  public get conditionKey() {
    return this.getStringAttribute('condition_key');
  }

  // condition_value - computed: true, optional: false, required: false
  public get conditionValue() {
    return this.getStringAttribute('condition_value');
  }
}

export class DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference {
    return new DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLike {
}

export function dataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeToTerraform(struct?: DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLike): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeToHclTerraform(struct?: DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLike): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLike | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLike | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition_key - computed: true, optional: false, required: false
  public get conditionKey() {
    return this.getStringAttribute('condition_key');
  }

  // condition_value - computed: true, optional: false, required: false
  public get conditionValue() {
    return this.getStringAttribute('condition_value');
  }
}

export class DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference {
    return new DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBackupBackupSelectionBackupSelectionConditions {
}

export function dataAwsccBackupBackupSelectionBackupSelectionConditionsToTerraform(struct?: DataAwsccBackupBackupSelectionBackupSelectionConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBackupBackupSelectionBackupSelectionConditionsToHclTerraform(struct?: DataAwsccBackupBackupSelectionBackupSelectionConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBackupBackupSelectionBackupSelectionConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBackupBackupSelectionBackupSelectionConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // string_equals - computed: true, optional: false, required: false
  private _stringEquals = new DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsList(this, "string_equals", false);
  public get stringEquals() {
    return this._stringEquals;
  }

  // string_like - computed: true, optional: false, required: false
  private _stringLike = new DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeList(this, "string_like", false);
  public get stringLike() {
    return this._stringLike;
  }

  // string_not_equals - computed: true, optional: false, required: false
  private _stringNotEquals = new DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsList(this, "string_not_equals", false);
  public get stringNotEquals() {
    return this._stringNotEquals;
  }

  // string_not_like - computed: true, optional: false, required: false
  private _stringNotLike = new DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeList(this, "string_not_like", false);
  public get stringNotLike() {
    return this._stringNotLike;
  }
}
export interface DataAwsccBackupBackupSelectionBackupSelectionListOfTags {
}

export function dataAwsccBackupBackupSelectionBackupSelectionListOfTagsToTerraform(struct?: DataAwsccBackupBackupSelectionBackupSelectionListOfTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBackupBackupSelectionBackupSelectionListOfTagsToHclTerraform(struct?: DataAwsccBackupBackupSelectionBackupSelectionListOfTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBackupBackupSelectionBackupSelectionListOfTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBackupBackupSelectionBackupSelectionListOfTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition_key - computed: true, optional: false, required: false
  public get conditionKey() {
    return this.getStringAttribute('condition_key');
  }

  // condition_type - computed: true, optional: false, required: false
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }

  // condition_value - computed: true, optional: false, required: false
  public get conditionValue() {
    return this.getStringAttribute('condition_value');
  }
}

export class DataAwsccBackupBackupSelectionBackupSelectionListOfTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference {
    return new DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBackupBackupSelectionBackupSelection {
}

export function dataAwsccBackupBackupSelectionBackupSelectionToTerraform(struct?: DataAwsccBackupBackupSelectionBackupSelection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBackupBackupSelectionBackupSelectionToHclTerraform(struct?: DataAwsccBackupBackupSelectionBackupSelection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBackupBackupSelectionBackupSelectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBackupBackupSelectionBackupSelection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBackupBackupSelectionBackupSelection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }

  // iam_role_arn - computed: true, optional: false, required: false
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
  }

  // list_of_tags - computed: true, optional: false, required: false
  private _listOfTags = new DataAwsccBackupBackupSelectionBackupSelectionListOfTagsList(this, "list_of_tags", false);
  public get listOfTags() {
    return this._listOfTags;
  }

  // not_resources - computed: true, optional: false, required: false
  public get notResources() {
    return this.getListAttribute('not_resources');
  }

  // resources - computed: true, optional: false, required: false
  public get resources() {
    return this.getListAttribute('resources');
  }

  // selection_name - computed: true, optional: false, required: false
  public get selectionName() {
    return this.getStringAttribute('selection_name');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/backup_backup_selection awscc_backup_backup_selection}
*/
export class DataAwsccBackupBackupSelection extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_backup_backup_selection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccBackupBackupSelection resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccBackupBackupSelection to import
  * @param importFromId The id of the existing DataAwsccBackupBackupSelection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/backup_backup_selection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccBackupBackupSelection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_backup_backup_selection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/backup_backup_selection awscc_backup_backup_selection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccBackupBackupSelectionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccBackupBackupSelectionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_backup_backup_selection',
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

  // backup_plan_id - computed: true, optional: false, required: false
  public get backupPlanId() {
    return this.getStringAttribute('backup_plan_id');
  }

  // backup_selection - computed: true, optional: false, required: false
  private _backupSelection = new DataAwsccBackupBackupSelectionBackupSelectionOutputReference(this, "backup_selection");
  public get backupSelection() {
    return this._backupSelection;
  }

  // backup_selection_id - computed: true, optional: false, required: false
  public get backupSelectionId() {
    return this.getStringAttribute('backup_selection_id');
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

  // selection_id - computed: true, optional: false, required: false
  public get selectionId() {
    return this.getStringAttribute('selection_id');
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
