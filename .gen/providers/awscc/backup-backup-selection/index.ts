// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_backup_selection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BackupBackupSelectionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_backup_selection#backup_plan_id BackupBackupSelection#backup_plan_id}
  */
  readonly backupPlanId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_backup_selection#backup_selection BackupBackupSelection#backup_selection}
  */
  readonly backupSelection: BackupBackupSelectionBackupSelection;
}
export interface BackupBackupSelectionBackupSelectionConditionsStringEquals {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}
  */
  readonly conditionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}
  */
  readonly conditionValue?: string;
}

export function backupBackupSelectionBackupSelectionConditionsStringEqualsToTerraform(struct?: BackupBackupSelectionBackupSelectionConditionsStringEquals | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition_key: cdktn.stringToTerraform(struct!.conditionKey),
    condition_value: cdktn.stringToTerraform(struct!.conditionValue),
  }
}


export function backupBackupSelectionBackupSelectionConditionsStringEqualsToHclTerraform(struct?: BackupBackupSelectionBackupSelectionConditionsStringEquals | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition_key: {
      value: cdktn.stringToHclTerraform(struct!.conditionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition_value: {
      value: cdktn.stringToHclTerraform(struct!.conditionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackupBackupSelectionBackupSelectionConditionsStringEquals | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionKey = this._conditionKey;
    }
    if (this._conditionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionValue = this._conditionValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupBackupSelectionBackupSelectionConditionsStringEquals | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionKey = undefined;
      this._conditionValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionKey = value.conditionKey;
      this._conditionValue = value.conditionValue;
    }
  }

  // condition_key - computed: true, optional: true, required: false
  private _conditionKey?: string; 
  public get conditionKey() {
    return this.getStringAttribute('condition_key');
  }
  public set conditionKey(value: string) {
    this._conditionKey = value;
  }
  public resetConditionKey() {
    this._conditionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionKeyInput() {
    return this._conditionKey;
  }

  // condition_value - computed: true, optional: true, required: false
  private _conditionValue?: string; 
  public get conditionValue() {
    return this.getStringAttribute('condition_value');
  }
  public set conditionValue(value: string) {
    this._conditionValue = value;
  }
  public resetConditionValue() {
    this._conditionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionValueInput() {
    return this._conditionValue;
  }
}

export class BackupBackupSelectionBackupSelectionConditionsStringEqualsList extends cdktn.ComplexList {
  public internalValue? : BackupBackupSelectionBackupSelectionConditionsStringEquals[] | cdktn.IResolvable

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
  public get(index: number): BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference {
    return new BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupBackupSelectionBackupSelectionConditionsStringLike {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}
  */
  readonly conditionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}
  */
  readonly conditionValue?: string;
}

export function backupBackupSelectionBackupSelectionConditionsStringLikeToTerraform(struct?: BackupBackupSelectionBackupSelectionConditionsStringLike | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition_key: cdktn.stringToTerraform(struct!.conditionKey),
    condition_value: cdktn.stringToTerraform(struct!.conditionValue),
  }
}


export function backupBackupSelectionBackupSelectionConditionsStringLikeToHclTerraform(struct?: BackupBackupSelectionBackupSelectionConditionsStringLike | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition_key: {
      value: cdktn.stringToHclTerraform(struct!.conditionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition_value: {
      value: cdktn.stringToHclTerraform(struct!.conditionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackupBackupSelectionBackupSelectionConditionsStringLike | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionKey = this._conditionKey;
    }
    if (this._conditionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionValue = this._conditionValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupBackupSelectionBackupSelectionConditionsStringLike | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionKey = undefined;
      this._conditionValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionKey = value.conditionKey;
      this._conditionValue = value.conditionValue;
    }
  }

  // condition_key - computed: true, optional: true, required: false
  private _conditionKey?: string; 
  public get conditionKey() {
    return this.getStringAttribute('condition_key');
  }
  public set conditionKey(value: string) {
    this._conditionKey = value;
  }
  public resetConditionKey() {
    this._conditionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionKeyInput() {
    return this._conditionKey;
  }

  // condition_value - computed: true, optional: true, required: false
  private _conditionValue?: string; 
  public get conditionValue() {
    return this.getStringAttribute('condition_value');
  }
  public set conditionValue(value: string) {
    this._conditionValue = value;
  }
  public resetConditionValue() {
    this._conditionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionValueInput() {
    return this._conditionValue;
  }
}

export class BackupBackupSelectionBackupSelectionConditionsStringLikeList extends cdktn.ComplexList {
  public internalValue? : BackupBackupSelectionBackupSelectionConditionsStringLike[] | cdktn.IResolvable

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
  public get(index: number): BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference {
    return new BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupBackupSelectionBackupSelectionConditionsStringNotEquals {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}
  */
  readonly conditionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}
  */
  readonly conditionValue?: string;
}

export function backupBackupSelectionBackupSelectionConditionsStringNotEqualsToTerraform(struct?: BackupBackupSelectionBackupSelectionConditionsStringNotEquals | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition_key: cdktn.stringToTerraform(struct!.conditionKey),
    condition_value: cdktn.stringToTerraform(struct!.conditionValue),
  }
}


export function backupBackupSelectionBackupSelectionConditionsStringNotEqualsToHclTerraform(struct?: BackupBackupSelectionBackupSelectionConditionsStringNotEquals | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition_key: {
      value: cdktn.stringToHclTerraform(struct!.conditionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition_value: {
      value: cdktn.stringToHclTerraform(struct!.conditionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackupBackupSelectionBackupSelectionConditionsStringNotEquals | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionKey = this._conditionKey;
    }
    if (this._conditionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionValue = this._conditionValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupBackupSelectionBackupSelectionConditionsStringNotEquals | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionKey = undefined;
      this._conditionValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionKey = value.conditionKey;
      this._conditionValue = value.conditionValue;
    }
  }

  // condition_key - computed: true, optional: true, required: false
  private _conditionKey?: string; 
  public get conditionKey() {
    return this.getStringAttribute('condition_key');
  }
  public set conditionKey(value: string) {
    this._conditionKey = value;
  }
  public resetConditionKey() {
    this._conditionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionKeyInput() {
    return this._conditionKey;
  }

  // condition_value - computed: true, optional: true, required: false
  private _conditionValue?: string; 
  public get conditionValue() {
    return this.getStringAttribute('condition_value');
  }
  public set conditionValue(value: string) {
    this._conditionValue = value;
  }
  public resetConditionValue() {
    this._conditionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionValueInput() {
    return this._conditionValue;
  }
}

export class BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList extends cdktn.ComplexList {
  public internalValue? : BackupBackupSelectionBackupSelectionConditionsStringNotEquals[] | cdktn.IResolvable

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
  public get(index: number): BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference {
    return new BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupBackupSelectionBackupSelectionConditionsStringNotLike {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}
  */
  readonly conditionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}
  */
  readonly conditionValue?: string;
}

export function backupBackupSelectionBackupSelectionConditionsStringNotLikeToTerraform(struct?: BackupBackupSelectionBackupSelectionConditionsStringNotLike | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition_key: cdktn.stringToTerraform(struct!.conditionKey),
    condition_value: cdktn.stringToTerraform(struct!.conditionValue),
  }
}


export function backupBackupSelectionBackupSelectionConditionsStringNotLikeToHclTerraform(struct?: BackupBackupSelectionBackupSelectionConditionsStringNotLike | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition_key: {
      value: cdktn.stringToHclTerraform(struct!.conditionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition_value: {
      value: cdktn.stringToHclTerraform(struct!.conditionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackupBackupSelectionBackupSelectionConditionsStringNotLike | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionKey = this._conditionKey;
    }
    if (this._conditionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionValue = this._conditionValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupBackupSelectionBackupSelectionConditionsStringNotLike | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionKey = undefined;
      this._conditionValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionKey = value.conditionKey;
      this._conditionValue = value.conditionValue;
    }
  }

  // condition_key - computed: true, optional: true, required: false
  private _conditionKey?: string; 
  public get conditionKey() {
    return this.getStringAttribute('condition_key');
  }
  public set conditionKey(value: string) {
    this._conditionKey = value;
  }
  public resetConditionKey() {
    this._conditionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionKeyInput() {
    return this._conditionKey;
  }

  // condition_value - computed: true, optional: true, required: false
  private _conditionValue?: string; 
  public get conditionValue() {
    return this.getStringAttribute('condition_value');
  }
  public set conditionValue(value: string) {
    this._conditionValue = value;
  }
  public resetConditionValue() {
    this._conditionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionValueInput() {
    return this._conditionValue;
  }
}

export class BackupBackupSelectionBackupSelectionConditionsStringNotLikeList extends cdktn.ComplexList {
  public internalValue? : BackupBackupSelectionBackupSelectionConditionsStringNotLike[] | cdktn.IResolvable

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
  public get(index: number): BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference {
    return new BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupBackupSelectionBackupSelectionConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_backup_selection#string_equals BackupBackupSelection#string_equals}
  */
  readonly stringEquals?: BackupBackupSelectionBackupSelectionConditionsStringEquals[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_backup_selection#string_like BackupBackupSelection#string_like}
  */
  readonly stringLike?: BackupBackupSelectionBackupSelectionConditionsStringLike[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_backup_selection#string_not_equals BackupBackupSelection#string_not_equals}
  */
  readonly stringNotEquals?: BackupBackupSelectionBackupSelectionConditionsStringNotEquals[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_backup_selection#string_not_like BackupBackupSelection#string_not_like}
  */
  readonly stringNotLike?: BackupBackupSelectionBackupSelectionConditionsStringNotLike[] | cdktn.IResolvable;
}

export function backupBackupSelectionBackupSelectionConditionsToTerraform(struct?: BackupBackupSelectionBackupSelectionConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    string_equals: cdktn.listMapper(backupBackupSelectionBackupSelectionConditionsStringEqualsToTerraform, false)(struct!.stringEquals),
    string_like: cdktn.listMapper(backupBackupSelectionBackupSelectionConditionsStringLikeToTerraform, false)(struct!.stringLike),
    string_not_equals: cdktn.listMapper(backupBackupSelectionBackupSelectionConditionsStringNotEqualsToTerraform, false)(struct!.stringNotEquals),
    string_not_like: cdktn.listMapper(backupBackupSelectionBackupSelectionConditionsStringNotLikeToTerraform, false)(struct!.stringNotLike),
  }
}


export function backupBackupSelectionBackupSelectionConditionsToHclTerraform(struct?: BackupBackupSelectionBackupSelectionConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    string_equals: {
      value: cdktn.listMapperHcl(backupBackupSelectionBackupSelectionConditionsStringEqualsToHclTerraform, false)(struct!.stringEquals),
      isBlock: true,
      type: "list",
      storageClassType: "BackupBackupSelectionBackupSelectionConditionsStringEqualsList",
    },
    string_like: {
      value: cdktn.listMapperHcl(backupBackupSelectionBackupSelectionConditionsStringLikeToHclTerraform, false)(struct!.stringLike),
      isBlock: true,
      type: "list",
      storageClassType: "BackupBackupSelectionBackupSelectionConditionsStringLikeList",
    },
    string_not_equals: {
      value: cdktn.listMapperHcl(backupBackupSelectionBackupSelectionConditionsStringNotEqualsToHclTerraform, false)(struct!.stringNotEquals),
      isBlock: true,
      type: "list",
      storageClassType: "BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList",
    },
    string_not_like: {
      value: cdktn.listMapperHcl(backupBackupSelectionBackupSelectionConditionsStringNotLikeToHclTerraform, false)(struct!.stringNotLike),
      isBlock: true,
      type: "list",
      storageClassType: "BackupBackupSelectionBackupSelectionConditionsStringNotLikeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupBackupSelectionBackupSelectionConditionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BackupBackupSelectionBackupSelectionConditions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stringEquals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringEquals = this._stringEquals?.internalValue;
    }
    if (this._stringLike?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringLike = this._stringLike?.internalValue;
    }
    if (this._stringNotEquals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringNotEquals = this._stringNotEquals?.internalValue;
    }
    if (this._stringNotLike?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringNotLike = this._stringNotLike?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupBackupSelectionBackupSelectionConditions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stringEquals.internalValue = undefined;
      this._stringLike.internalValue = undefined;
      this._stringNotEquals.internalValue = undefined;
      this._stringNotLike.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stringEquals.internalValue = value.stringEquals;
      this._stringLike.internalValue = value.stringLike;
      this._stringNotEquals.internalValue = value.stringNotEquals;
      this._stringNotLike.internalValue = value.stringNotLike;
    }
  }

  // string_equals - computed: true, optional: true, required: false
  private _stringEquals = new BackupBackupSelectionBackupSelectionConditionsStringEqualsList(this, "string_equals", false);
  public get stringEquals() {
    return this._stringEquals;
  }
  public putStringEquals(value: BackupBackupSelectionBackupSelectionConditionsStringEquals[] | cdktn.IResolvable) {
    this._stringEquals.internalValue = value;
  }
  public resetStringEquals() {
    this._stringEquals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringEqualsInput() {
    return this._stringEquals.internalValue;
  }

  // string_like - computed: true, optional: true, required: false
  private _stringLike = new BackupBackupSelectionBackupSelectionConditionsStringLikeList(this, "string_like", false);
  public get stringLike() {
    return this._stringLike;
  }
  public putStringLike(value: BackupBackupSelectionBackupSelectionConditionsStringLike[] | cdktn.IResolvable) {
    this._stringLike.internalValue = value;
  }
  public resetStringLike() {
    this._stringLike.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringLikeInput() {
    return this._stringLike.internalValue;
  }

  // string_not_equals - computed: true, optional: true, required: false
  private _stringNotEquals = new BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList(this, "string_not_equals", false);
  public get stringNotEquals() {
    return this._stringNotEquals;
  }
  public putStringNotEquals(value: BackupBackupSelectionBackupSelectionConditionsStringNotEquals[] | cdktn.IResolvable) {
    this._stringNotEquals.internalValue = value;
  }
  public resetStringNotEquals() {
    this._stringNotEquals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringNotEqualsInput() {
    return this._stringNotEquals.internalValue;
  }

  // string_not_like - computed: true, optional: true, required: false
  private _stringNotLike = new BackupBackupSelectionBackupSelectionConditionsStringNotLikeList(this, "string_not_like", false);
  public get stringNotLike() {
    return this._stringNotLike;
  }
  public putStringNotLike(value: BackupBackupSelectionBackupSelectionConditionsStringNotLike[] | cdktn.IResolvable) {
    this._stringNotLike.internalValue = value;
  }
  public resetStringNotLike() {
    this._stringNotLike.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringNotLikeInput() {
    return this._stringNotLike.internalValue;
  }
}
export interface BackupBackupSelectionBackupSelectionListOfTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}
  */
  readonly conditionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_backup_selection#condition_type BackupBackupSelection#condition_type}
  */
  readonly conditionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}
  */
  readonly conditionValue?: string;
}

export function backupBackupSelectionBackupSelectionListOfTagsToTerraform(struct?: BackupBackupSelectionBackupSelectionListOfTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition_key: cdktn.stringToTerraform(struct!.conditionKey),
    condition_type: cdktn.stringToTerraform(struct!.conditionType),
    condition_value: cdktn.stringToTerraform(struct!.conditionValue),
  }
}


export function backupBackupSelectionBackupSelectionListOfTagsToHclTerraform(struct?: BackupBackupSelectionBackupSelectionListOfTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition_key: {
      value: cdktn.stringToHclTerraform(struct!.conditionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition_type: {
      value: cdktn.stringToHclTerraform(struct!.conditionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition_value: {
      value: cdktn.stringToHclTerraform(struct!.conditionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupBackupSelectionBackupSelectionListOfTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackupBackupSelectionBackupSelectionListOfTags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionKey = this._conditionKey;
    }
    if (this._conditionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionType = this._conditionType;
    }
    if (this._conditionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionValue = this._conditionValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupBackupSelectionBackupSelectionListOfTags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionKey = undefined;
      this._conditionType = undefined;
      this._conditionValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionKey = value.conditionKey;
      this._conditionType = value.conditionType;
      this._conditionValue = value.conditionValue;
    }
  }

  // condition_key - computed: true, optional: true, required: false
  private _conditionKey?: string; 
  public get conditionKey() {
    return this.getStringAttribute('condition_key');
  }
  public set conditionKey(value: string) {
    this._conditionKey = value;
  }
  public resetConditionKey() {
    this._conditionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionKeyInput() {
    return this._conditionKey;
  }

  // condition_type - computed: true, optional: true, required: false
  private _conditionType?: string; 
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }
  public set conditionType(value: string) {
    this._conditionType = value;
  }
  public resetConditionType() {
    this._conditionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionTypeInput() {
    return this._conditionType;
  }

  // condition_value - computed: true, optional: true, required: false
  private _conditionValue?: string; 
  public get conditionValue() {
    return this.getStringAttribute('condition_value');
  }
  public set conditionValue(value: string) {
    this._conditionValue = value;
  }
  public resetConditionValue() {
    this._conditionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionValueInput() {
    return this._conditionValue;
  }
}

export class BackupBackupSelectionBackupSelectionListOfTagsList extends cdktn.ComplexList {
  public internalValue? : BackupBackupSelectionBackupSelectionListOfTags[] | cdktn.IResolvable

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
  public get(index: number): BackupBackupSelectionBackupSelectionListOfTagsOutputReference {
    return new BackupBackupSelectionBackupSelectionListOfTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupBackupSelectionBackupSelection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_backup_selection#conditions BackupBackupSelection#conditions}
  */
  readonly conditions?: BackupBackupSelectionBackupSelectionConditions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_backup_selection#iam_role_arn BackupBackupSelection#iam_role_arn}
  */
  readonly iamRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_backup_selection#list_of_tags BackupBackupSelection#list_of_tags}
  */
  readonly listOfTags?: BackupBackupSelectionBackupSelectionListOfTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_backup_selection#not_resources BackupBackupSelection#not_resources}
  */
  readonly notResources?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_backup_selection#resources BackupBackupSelection#resources}
  */
  readonly resources?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_backup_selection#selection_name BackupBackupSelection#selection_name}
  */
  readonly selectionName: string;
}

export function backupBackupSelectionBackupSelectionToTerraform(struct?: BackupBackupSelectionBackupSelection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    conditions: backupBackupSelectionBackupSelectionConditionsToTerraform(struct!.conditions),
    iam_role_arn: cdktn.stringToTerraform(struct!.iamRoleArn),
    list_of_tags: cdktn.listMapper(backupBackupSelectionBackupSelectionListOfTagsToTerraform, false)(struct!.listOfTags),
    not_resources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.notResources),
    resources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resources),
    selection_name: cdktn.stringToTerraform(struct!.selectionName),
  }
}


export function backupBackupSelectionBackupSelectionToHclTerraform(struct?: BackupBackupSelectionBackupSelection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    conditions: {
      value: backupBackupSelectionBackupSelectionConditionsToHclTerraform(struct!.conditions),
      isBlock: true,
      type: "struct",
      storageClassType: "BackupBackupSelectionBackupSelectionConditions",
    },
    iam_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.iamRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    list_of_tags: {
      value: cdktn.listMapperHcl(backupBackupSelectionBackupSelectionListOfTagsToHclTerraform, false)(struct!.listOfTags),
      isBlock: true,
      type: "list",
      storageClassType: "BackupBackupSelectionBackupSelectionListOfTagsList",
    },
    not_resources: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.notResources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    selection_name: {
      value: cdktn.stringToHclTerraform(struct!.selectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupBackupSelectionBackupSelectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BackupBackupSelectionBackupSelection | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._iamRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamRoleArn = this._iamRoleArn;
    }
    if (this._listOfTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.listOfTags = this._listOfTags?.internalValue;
    }
    if (this._notResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.notResources = this._notResources;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._selectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectionName = this._selectionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupBackupSelectionBackupSelection | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditions.internalValue = undefined;
      this._iamRoleArn = undefined;
      this._listOfTags.internalValue = undefined;
      this._notResources = undefined;
      this._resources = undefined;
      this._selectionName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditions.internalValue = value.conditions;
      this._iamRoleArn = value.iamRoleArn;
      this._listOfTags.internalValue = value.listOfTags;
      this._notResources = value.notResources;
      this._resources = value.resources;
      this._selectionName = value.selectionName;
    }
  }

  // conditions - computed: true, optional: true, required: false
  private _conditions = new BackupBackupSelectionBackupSelectionConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: BackupBackupSelectionBackupSelectionConditions) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

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

  // list_of_tags - computed: true, optional: true, required: false
  private _listOfTags = new BackupBackupSelectionBackupSelectionListOfTagsList(this, "list_of_tags", false);
  public get listOfTags() {
    return this._listOfTags;
  }
  public putListOfTags(value: BackupBackupSelectionBackupSelectionListOfTags[] | cdktn.IResolvable) {
    this._listOfTags.internalValue = value;
  }
  public resetListOfTags() {
    this._listOfTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listOfTagsInput() {
    return this._listOfTags.internalValue;
  }

  // not_resources - computed: true, optional: true, required: false
  private _notResources?: string[]; 
  public get notResources() {
    return this.getListAttribute('not_resources');
  }
  public set notResources(value: string[]) {
    this._notResources = value;
  }
  public resetNotResources() {
    this._notResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notResourcesInput() {
    return this._notResources;
  }

  // resources - computed: true, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // selection_name - computed: false, optional: false, required: true
  private _selectionName?: string; 
  public get selectionName() {
    return this.getStringAttribute('selection_name');
  }
  public set selectionName(value: string) {
    this._selectionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionNameInput() {
    return this._selectionName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_backup_selection awscc_backup_backup_selection}
*/
export class BackupBackupSelection extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_backup_backup_selection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BackupBackupSelection resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BackupBackupSelection to import
  * @param importFromId The id of the existing BackupBackupSelection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_backup_selection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BackupBackupSelection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_backup_backup_selection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/backup_backup_selection awscc_backup_backup_selection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupBackupSelectionConfig
  */
  public constructor(scope: Construct, id: string, config: BackupBackupSelectionConfig) {
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
    this._backupPlanId = config.backupPlanId;
    this._backupSelection.internalValue = config.backupSelection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_plan_id - computed: false, optional: false, required: true
  private _backupPlanId?: string; 
  public get backupPlanId() {
    return this.getStringAttribute('backup_plan_id');
  }
  public set backupPlanId(value: string) {
    this._backupPlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPlanIdInput() {
    return this._backupPlanId;
  }

  // backup_selection - computed: false, optional: false, required: true
  private _backupSelection = new BackupBackupSelectionBackupSelectionOutputReference(this, "backup_selection");
  public get backupSelection() {
    return this._backupSelection;
  }
  public putBackupSelection(value: BackupBackupSelectionBackupSelection) {
    this._backupSelection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupSelectionInput() {
    return this._backupSelection.internalValue;
  }

  // backup_selection_id - computed: true, optional: false, required: false
  public get backupSelectionId() {
    return this.getStringAttribute('backup_selection_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
      backup_plan_id: cdktn.stringToTerraform(this._backupPlanId),
      backup_selection: backupBackupSelectionBackupSelectionToTerraform(this._backupSelection.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_plan_id: {
        value: cdktn.stringToHclTerraform(this._backupPlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_selection: {
        value: backupBackupSelectionBackupSelectionToHclTerraform(this._backupSelection.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BackupBackupSelectionBackupSelection",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
