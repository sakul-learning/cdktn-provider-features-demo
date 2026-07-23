// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_restore_testing_selection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BackupRestoreTestingSelectionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_restore_testing_selection#iam_role_arn BackupRestoreTestingSelection#iam_role_arn}
  */
  readonly iamRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_restore_testing_selection#protected_resource_arns BackupRestoreTestingSelection#protected_resource_arns}
  */
  readonly protectedResourceArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_restore_testing_selection#protected_resource_conditions BackupRestoreTestingSelection#protected_resource_conditions}
  */
  readonly protectedResourceConditions?: BackupRestoreTestingSelectionProtectedResourceConditions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_restore_testing_selection#protected_resource_type BackupRestoreTestingSelection#protected_resource_type}
  */
  readonly protectedResourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_restore_testing_selection#restore_metadata_overrides BackupRestoreTestingSelection#restore_metadata_overrides}
  */
  readonly restoreMetadataOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_restore_testing_selection#restore_testing_plan_name BackupRestoreTestingSelection#restore_testing_plan_name}
  */
  readonly restoreTestingPlanName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_restore_testing_selection#restore_testing_selection_name BackupRestoreTestingSelection#restore_testing_selection_name}
  */
  readonly restoreTestingSelectionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_restore_testing_selection#validation_window_hours BackupRestoreTestingSelection#validation_window_hours}
  */
  readonly validationWindowHours?: number;
}
export interface BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_restore_testing_selection#key BackupRestoreTestingSelection#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_restore_testing_selection#value BackupRestoreTestingSelection#value}
  */
  readonly value?: string;
}

export function backupRestoreTestingSelectionProtectedResourceConditionsStringEqualsToTerraform(struct?: BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function backupRestoreTestingSelectionProtectedResourceConditionsStringEqualsToHclTerraform(struct?: BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals | cdktn.IResolvable): any {
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

export class BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals | cdktn.IResolvable | undefined) {
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

export class BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList extends cdktn.ComplexList {
  public internalValue? : BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals[] | cdktn.IResolvable

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
  public get(index: number): BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference {
    return new BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_restore_testing_selection#key BackupRestoreTestingSelection#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_restore_testing_selection#value BackupRestoreTestingSelection#value}
  */
  readonly value?: string;
}

export function backupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsToTerraform(struct?: BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function backupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsToHclTerraform(struct?: BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals | cdktn.IResolvable): any {
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

export class BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals | cdktn.IResolvable | undefined) {
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

export class BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList extends cdktn.ComplexList {
  public internalValue? : BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals[] | cdktn.IResolvable

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
  public get(index: number): BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference {
    return new BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupRestoreTestingSelectionProtectedResourceConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_restore_testing_selection#string_equals BackupRestoreTestingSelection#string_equals}
  */
  readonly stringEquals?: BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_restore_testing_selection#string_not_equals BackupRestoreTestingSelection#string_not_equals}
  */
  readonly stringNotEquals?: BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals[] | cdktn.IResolvable;
}

export function backupRestoreTestingSelectionProtectedResourceConditionsToTerraform(struct?: BackupRestoreTestingSelectionProtectedResourceConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    string_equals: cdktn.listMapper(backupRestoreTestingSelectionProtectedResourceConditionsStringEqualsToTerraform, false)(struct!.stringEquals),
    string_not_equals: cdktn.listMapper(backupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsToTerraform, false)(struct!.stringNotEquals),
  }
}


export function backupRestoreTestingSelectionProtectedResourceConditionsToHclTerraform(struct?: BackupRestoreTestingSelectionProtectedResourceConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    string_equals: {
      value: cdktn.listMapperHcl(backupRestoreTestingSelectionProtectedResourceConditionsStringEqualsToHclTerraform, false)(struct!.stringEquals),
      isBlock: true,
      type: "list",
      storageClassType: "BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList",
    },
    string_not_equals: {
      value: cdktn.listMapperHcl(backupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsToHclTerraform, false)(struct!.stringNotEquals),
      isBlock: true,
      type: "list",
      storageClassType: "BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BackupRestoreTestingSelectionProtectedResourceConditions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stringEquals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringEquals = this._stringEquals?.internalValue;
    }
    if (this._stringNotEquals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringNotEquals = this._stringNotEquals?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupRestoreTestingSelectionProtectedResourceConditions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stringEquals.internalValue = undefined;
      this._stringNotEquals.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stringEquals.internalValue = value.stringEquals;
      this._stringNotEquals.internalValue = value.stringNotEquals;
    }
  }

  // string_equals - computed: true, optional: true, required: false
  private _stringEquals = new BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList(this, "string_equals", false);
  public get stringEquals() {
    return this._stringEquals;
  }
  public putStringEquals(value: BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals[] | cdktn.IResolvable) {
    this._stringEquals.internalValue = value;
  }
  public resetStringEquals() {
    this._stringEquals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringEqualsInput() {
    return this._stringEquals.internalValue;
  }

  // string_not_equals - computed: true, optional: true, required: false
  private _stringNotEquals = new BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList(this, "string_not_equals", false);
  public get stringNotEquals() {
    return this._stringNotEquals;
  }
  public putStringNotEquals(value: BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals[] | cdktn.IResolvable) {
    this._stringNotEquals.internalValue = value;
  }
  public resetStringNotEquals() {
    this._stringNotEquals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringNotEqualsInput() {
    return this._stringNotEquals.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_restore_testing_selection awscc_backup_restore_testing_selection}
*/
export class BackupRestoreTestingSelection extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_backup_restore_testing_selection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BackupRestoreTestingSelection resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BackupRestoreTestingSelection to import
  * @param importFromId The id of the existing BackupRestoreTestingSelection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_restore_testing_selection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BackupRestoreTestingSelection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_backup_restore_testing_selection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_restore_testing_selection awscc_backup_restore_testing_selection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupRestoreTestingSelectionConfig
  */
  public constructor(scope: Construct, id: string, config: BackupRestoreTestingSelectionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_backup_restore_testing_selection',
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
    this._iamRoleArn = config.iamRoleArn;
    this._protectedResourceArns = config.protectedResourceArns;
    this._protectedResourceConditions.internalValue = config.protectedResourceConditions;
    this._protectedResourceType = config.protectedResourceType;
    this._restoreMetadataOverrides = config.restoreMetadataOverrides;
    this._restoreTestingPlanName = config.restoreTestingPlanName;
    this._restoreTestingSelectionName = config.restoreTestingSelectionName;
    this._validationWindowHours = config.validationWindowHours;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // iam_role_arn - computed: false, optional: false, required: true
  private _iamRoleArn?: string; 
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
  }
  public set iamRoleArn(value: string) {
    this._iamRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleArnInput() {
    return this._iamRoleArn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // protected_resource_arns - computed: true, optional: true, required: false
  private _protectedResourceArns?: string[]; 
  public get protectedResourceArns() {
    return this.getListAttribute('protected_resource_arns');
  }
  public set protectedResourceArns(value: string[]) {
    this._protectedResourceArns = value;
  }
  public resetProtectedResourceArns() {
    this._protectedResourceArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedResourceArnsInput() {
    return this._protectedResourceArns;
  }

  // protected_resource_conditions - computed: true, optional: true, required: false
  private _protectedResourceConditions = new BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference(this, "protected_resource_conditions");
  public get protectedResourceConditions() {
    return this._protectedResourceConditions;
  }
  public putProtectedResourceConditions(value: BackupRestoreTestingSelectionProtectedResourceConditions) {
    this._protectedResourceConditions.internalValue = value;
  }
  public resetProtectedResourceConditions() {
    this._protectedResourceConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedResourceConditionsInput() {
    return this._protectedResourceConditions.internalValue;
  }

  // protected_resource_type - computed: false, optional: false, required: true
  private _protectedResourceType?: string; 
  public get protectedResourceType() {
    return this.getStringAttribute('protected_resource_type');
  }
  public set protectedResourceType(value: string) {
    this._protectedResourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedResourceTypeInput() {
    return this._protectedResourceType;
  }

  // restore_metadata_overrides - computed: true, optional: true, required: false
  private _restoreMetadataOverrides?: { [key: string]: string }; 
  public get restoreMetadataOverrides() {
    return this.getStringMapAttribute('restore_metadata_overrides');
  }
  public set restoreMetadataOverrides(value: { [key: string]: string }) {
    this._restoreMetadataOverrides = value;
  }
  public resetRestoreMetadataOverrides() {
    this._restoreMetadataOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreMetadataOverridesInput() {
    return this._restoreMetadataOverrides;
  }

  // restore_testing_plan_name - computed: false, optional: false, required: true
  private _restoreTestingPlanName?: string; 
  public get restoreTestingPlanName() {
    return this.getStringAttribute('restore_testing_plan_name');
  }
  public set restoreTestingPlanName(value: string) {
    this._restoreTestingPlanName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreTestingPlanNameInput() {
    return this._restoreTestingPlanName;
  }

  // restore_testing_selection_name - computed: false, optional: false, required: true
  private _restoreTestingSelectionName?: string; 
  public get restoreTestingSelectionName() {
    return this.getStringAttribute('restore_testing_selection_name');
  }
  public set restoreTestingSelectionName(value: string) {
    this._restoreTestingSelectionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreTestingSelectionNameInput() {
    return this._restoreTestingSelectionName;
  }

  // validation_window_hours - computed: true, optional: true, required: false
  private _validationWindowHours?: number; 
  public get validationWindowHours() {
    return this.getNumberAttribute('validation_window_hours');
  }
  public set validationWindowHours(value: number) {
    this._validationWindowHours = value;
  }
  public resetValidationWindowHours() {
    this._validationWindowHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationWindowHoursInput() {
    return this._validationWindowHours;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      iam_role_arn: cdktn.stringToTerraform(this._iamRoleArn),
      protected_resource_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._protectedResourceArns),
      protected_resource_conditions: backupRestoreTestingSelectionProtectedResourceConditionsToTerraform(this._protectedResourceConditions.internalValue),
      protected_resource_type: cdktn.stringToTerraform(this._protectedResourceType),
      restore_metadata_overrides: cdktn.hashMapper(cdktn.stringToTerraform)(this._restoreMetadataOverrides),
      restore_testing_plan_name: cdktn.stringToTerraform(this._restoreTestingPlanName),
      restore_testing_selection_name: cdktn.stringToTerraform(this._restoreTestingSelectionName),
      validation_window_hours: cdktn.numberToTerraform(this._validationWindowHours),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      iam_role_arn: {
        value: cdktn.stringToHclTerraform(this._iamRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protected_resource_arns: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._protectedResourceArns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      protected_resource_conditions: {
        value: backupRestoreTestingSelectionProtectedResourceConditionsToHclTerraform(this._protectedResourceConditions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BackupRestoreTestingSelectionProtectedResourceConditions",
      },
      protected_resource_type: {
        value: cdktn.stringToHclTerraform(this._protectedResourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restore_metadata_overrides: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._restoreMetadataOverrides),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      restore_testing_plan_name: {
        value: cdktn.stringToHclTerraform(this._restoreTestingPlanName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restore_testing_selection_name: {
        value: cdktn.stringToHclTerraform(this._restoreTestingSelectionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validation_window_hours: {
        value: cdktn.numberToHclTerraform(this._validationWindowHours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
