// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/backup_restore_testing_selection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccBackupRestoreTestingSelectionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/backup_restore_testing_selection#id DataAwsccBackupRestoreTestingSelection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEquals {
}

export function dataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsToTerraform(struct?: DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEquals): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsToHclTerraform(struct?: DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEquals): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEquals | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEquals | undefined) {
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

export class DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference {
    return new DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals {
}

export function dataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsToTerraform(struct?: DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsToHclTerraform(struct?: DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals | undefined) {
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

export class DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference {
    return new DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBackupRestoreTestingSelectionProtectedResourceConditions {
}

export function dataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsToTerraform(struct?: DataAwsccBackupRestoreTestingSelectionProtectedResourceConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsToHclTerraform(struct?: DataAwsccBackupRestoreTestingSelectionProtectedResourceConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBackupRestoreTestingSelectionProtectedResourceConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBackupRestoreTestingSelectionProtectedResourceConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // string_equals - computed: true, optional: false, required: false
  private _stringEquals = new DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList(this, "string_equals", false);
  public get stringEquals() {
    return this._stringEquals;
  }

  // string_not_equals - computed: true, optional: false, required: false
  private _stringNotEquals = new DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList(this, "string_not_equals", false);
  public get stringNotEquals() {
    return this._stringNotEquals;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/backup_restore_testing_selection awscc_backup_restore_testing_selection}
*/
export class DataAwsccBackupRestoreTestingSelection extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_backup_restore_testing_selection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccBackupRestoreTestingSelection resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccBackupRestoreTestingSelection to import
  * @param importFromId The id of the existing DataAwsccBackupRestoreTestingSelection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/backup_restore_testing_selection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccBackupRestoreTestingSelection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_backup_restore_testing_selection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/backup_restore_testing_selection awscc_backup_restore_testing_selection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccBackupRestoreTestingSelectionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccBackupRestoreTestingSelectionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_backup_restore_testing_selection',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.93.0'
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

  // iam_role_arn - computed: true, optional: false, required: false
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
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

  // protected_resource_arns - computed: true, optional: false, required: false
  public get protectedResourceArns() {
    return this.getListAttribute('protected_resource_arns');
  }

  // protected_resource_conditions - computed: true, optional: false, required: false
  private _protectedResourceConditions = new DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference(this, "protected_resource_conditions");
  public get protectedResourceConditions() {
    return this._protectedResourceConditions;
  }

  // protected_resource_type - computed: true, optional: false, required: false
  public get protectedResourceType() {
    return this.getStringAttribute('protected_resource_type');
  }

  // restore_metadata_overrides - computed: true, optional: false, required: false
  private _restoreMetadataOverrides = new cdktn.StringMap(this, "restore_metadata_overrides");
  public get restoreMetadataOverrides() {
    return this._restoreMetadataOverrides;
  }

  // restore_testing_plan_name - computed: true, optional: false, required: false
  public get restoreTestingPlanName() {
    return this.getStringAttribute('restore_testing_plan_name');
  }

  // restore_testing_selection_name - computed: true, optional: false, required: false
  public get restoreTestingSelectionName() {
    return this.getStringAttribute('restore_testing_selection_name');
  }

  // validation_window_hours - computed: true, optional: false, required: false
  public get validationWindowHours() {
    return this.getNumberAttribute('validation_window_hours');
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
