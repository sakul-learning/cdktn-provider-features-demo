// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/backup_backup_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BackupBackupPlanConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/backup_backup_plan#backup_plan BackupBackupPlan#backup_plan}
  */
  readonly backupPlan: BackupBackupPlanBackupPlan;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/backup_backup_plan#backup_plan_tags BackupBackupPlan#backup_plan_tags}
  */
  readonly backupPlanTags?: { [key: string]: string };
}
export interface BackupBackupPlanBackupPlanAdvancedBackupSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/backup_backup_plan#backup_options BackupBackupPlan#backup_options}
  */
  readonly backupOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/backup_backup_plan#resource_type BackupBackupPlan#resource_type}
  */
  readonly resourceType?: string;
}

export function backupBackupPlanBackupPlanAdvancedBackupSettingsToTerraform(struct?: BackupBackupPlanBackupPlanAdvancedBackupSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    backup_options: cdktn.stringToTerraform(struct!.backupOptions),
    resource_type: cdktn.stringToTerraform(struct!.resourceType),
  }
}


export function backupBackupPlanBackupPlanAdvancedBackupSettingsToHclTerraform(struct?: BackupBackupPlanBackupPlanAdvancedBackupSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    backup_options: {
      value: cdktn.stringToHclTerraform(struct!.backupOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktn.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackupBackupPlanBackupPlanAdvancedBackupSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupOptions = this._backupOptions;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupBackupPlanBackupPlanAdvancedBackupSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupOptions = undefined;
      this._resourceType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupOptions = value.backupOptions;
      this._resourceType = value.resourceType;
    }
  }

  // backup_options - computed: true, optional: true, required: false
  private _backupOptions?: string; 
  public get backupOptions() {
    return this.getStringAttribute('backup_options');
  }
  public set backupOptions(value: string) {
    this._backupOptions = value;
  }
  public resetBackupOptions() {
    this._backupOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupOptionsInput() {
    return this._backupOptions;
  }

  // resource_type - computed: true, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }
}

export class BackupBackupPlanBackupPlanAdvancedBackupSettingsList extends cdktn.ComplexList {
  public internalValue? : BackupBackupPlanBackupPlanAdvancedBackupSettings[] | cdktn.IResolvable

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
  public get(index: number): BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference {
    return new BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/backup_backup_plan#delete_after_days BackupBackupPlan#delete_after_days}
  */
  readonly deleteAfterDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/backup_backup_plan#move_to_cold_storage_after_days BackupBackupPlan#move_to_cold_storage_after_days}
  */
  readonly moveToColdStorageAfterDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/backup_backup_plan#opt_in_to_archive_for_supported_resources BackupBackupPlan#opt_in_to_archive_for_supported_resources}
  */
  readonly optInToArchiveForSupportedResources?: boolean | cdktn.IResolvable;
}

export function backupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleToTerraform(struct?: BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delete_after_days: cdktn.numberToTerraform(struct!.deleteAfterDays),
    move_to_cold_storage_after_days: cdktn.numberToTerraform(struct!.moveToColdStorageAfterDays),
    opt_in_to_archive_for_supported_resources: cdktn.booleanToTerraform(struct!.optInToArchiveForSupportedResources),
  }
}


export function backupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleToHclTerraform(struct?: BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delete_after_days: {
      value: cdktn.numberToHclTerraform(struct!.deleteAfterDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    move_to_cold_storage_after_days: {
      value: cdktn.numberToHclTerraform(struct!.moveToColdStorageAfterDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    opt_in_to_archive_for_supported_resources: {
      value: cdktn.booleanToHclTerraform(struct!.optInToArchiveForSupportedResources),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteAfterDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteAfterDays = this._deleteAfterDays;
    }
    if (this._moveToColdStorageAfterDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.moveToColdStorageAfterDays = this._moveToColdStorageAfterDays;
    }
    if (this._optInToArchiveForSupportedResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.optInToArchiveForSupportedResources = this._optInToArchiveForSupportedResources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteAfterDays = undefined;
      this._moveToColdStorageAfterDays = undefined;
      this._optInToArchiveForSupportedResources = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deleteAfterDays = value.deleteAfterDays;
      this._moveToColdStorageAfterDays = value.moveToColdStorageAfterDays;
      this._optInToArchiveForSupportedResources = value.optInToArchiveForSupportedResources;
    }
  }

  // delete_after_days - computed: true, optional: true, required: false
  private _deleteAfterDays?: number; 
  public get deleteAfterDays() {
    return this.getNumberAttribute('delete_after_days');
  }
  public set deleteAfterDays(value: number) {
    this._deleteAfterDays = value;
  }
  public resetDeleteAfterDays() {
    this._deleteAfterDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAfterDaysInput() {
    return this._deleteAfterDays;
  }

  // move_to_cold_storage_after_days - computed: true, optional: true, required: false
  private _moveToColdStorageAfterDays?: number; 
  public get moveToColdStorageAfterDays() {
    return this.getNumberAttribute('move_to_cold_storage_after_days');
  }
  public set moveToColdStorageAfterDays(value: number) {
    this._moveToColdStorageAfterDays = value;
  }
  public resetMoveToColdStorageAfterDays() {
    this._moveToColdStorageAfterDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moveToColdStorageAfterDaysInput() {
    return this._moveToColdStorageAfterDays;
  }

  // opt_in_to_archive_for_supported_resources - computed: true, optional: true, required: false
  private _optInToArchiveForSupportedResources?: boolean | cdktn.IResolvable; 
  public get optInToArchiveForSupportedResources() {
    return this.getBooleanAttribute('opt_in_to_archive_for_supported_resources');
  }
  public set optInToArchiveForSupportedResources(value: boolean | cdktn.IResolvable) {
    this._optInToArchiveForSupportedResources = value;
  }
  public resetOptInToArchiveForSupportedResources() {
    this._optInToArchiveForSupportedResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optInToArchiveForSupportedResourcesInput() {
    return this._optInToArchiveForSupportedResources;
  }
}
export interface BackupBackupPlanBackupPlanBackupPlanRuleCopyActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/backup_backup_plan#destination_backup_vault_arn BackupBackupPlan#destination_backup_vault_arn}
  */
  readonly destinationBackupVaultArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/backup_backup_plan#lifecycle BackupBackupPlan#lifecycle}
  */
  readonly lifecycle?: BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle;
}

export function backupBackupPlanBackupPlanBackupPlanRuleCopyActionsToTerraform(struct?: BackupBackupPlanBackupPlanBackupPlanRuleCopyActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_backup_vault_arn: cdktn.stringToTerraform(struct!.destinationBackupVaultArn),
    lifecycle: backupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleToTerraform(struct!.lifecycle),
  }
}


export function backupBackupPlanBackupPlanBackupPlanRuleCopyActionsToHclTerraform(struct?: BackupBackupPlanBackupPlanBackupPlanRuleCopyActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_backup_vault_arn: {
      value: cdktn.stringToHclTerraform(struct!.destinationBackupVaultArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle: {
      value: backupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleToHclTerraform(struct!.lifecycle),
      isBlock: true,
      type: "struct",
      storageClassType: "BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackupBackupPlanBackupPlanBackupPlanRuleCopyActions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationBackupVaultArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationBackupVaultArn = this._destinationBackupVaultArn;
    }
    if (this._lifecycle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycle = this._lifecycle?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupBackupPlanBackupPlanBackupPlanRuleCopyActions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationBackupVaultArn = undefined;
      this._lifecycle.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationBackupVaultArn = value.destinationBackupVaultArn;
      this._lifecycle.internalValue = value.lifecycle;
    }
  }

  // destination_backup_vault_arn - computed: true, optional: true, required: false
  private _destinationBackupVaultArn?: string; 
  public get destinationBackupVaultArn() {
    return this.getStringAttribute('destination_backup_vault_arn');
  }
  public set destinationBackupVaultArn(value: string) {
    this._destinationBackupVaultArn = value;
  }
  public resetDestinationBackupVaultArn() {
    this._destinationBackupVaultArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationBackupVaultArnInput() {
    return this._destinationBackupVaultArn;
  }

  // lifecycle - computed: true, optional: true, required: false
  private _lifecycle = new BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference(this, "lifecycle");
  public get lifecycle() {
    return this._lifecycle;
  }
  public putLifecycle(value: BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle) {
    this._lifecycle.internalValue = value;
  }
  public resetLifecycle() {
    this._lifecycle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleInput() {
    return this._lifecycle.internalValue;
  }
}

export class BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList extends cdktn.ComplexList {
  public internalValue? : BackupBackupPlanBackupPlanBackupPlanRuleCopyActions[] | cdktn.IResolvable

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
  public get(index: number): BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference {
    return new BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupBackupPlanBackupPlanBackupPlanRuleIndexActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/backup_backup_plan#resource_types BackupBackupPlan#resource_types}
  */
  readonly resourceTypes?: string[];
}

export function backupBackupPlanBackupPlanBackupPlanRuleIndexActionsToTerraform(struct?: BackupBackupPlanBackupPlanBackupPlanRuleIndexActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceTypes),
  }
}


export function backupBackupPlanBackupPlanBackupPlanRuleIndexActionsToHclTerraform(struct?: BackupBackupPlanBackupPlanBackupPlanRuleIndexActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackupBackupPlanBackupPlanBackupPlanRuleIndexActions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupBackupPlanBackupPlanBackupPlanRuleIndexActions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceTypes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceTypes = value.resourceTypes;
    }
  }

  // resource_types - computed: true, optional: true, required: false
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  public resetResourceTypes() {
    this._resourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }
}

export class BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList extends cdktn.ComplexList {
  public internalValue? : BackupBackupPlanBackupPlanBackupPlanRuleIndexActions[] | cdktn.IResolvable

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
  public get(index: number): BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference {
    return new BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupBackupPlanBackupPlanBackupPlanRuleLifecycle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/backup_backup_plan#delete_after_days BackupBackupPlan#delete_after_days}
  */
  readonly deleteAfterDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/backup_backup_plan#move_to_cold_storage_after_days BackupBackupPlan#move_to_cold_storage_after_days}
  */
  readonly moveToColdStorageAfterDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/backup_backup_plan#opt_in_to_archive_for_supported_resources BackupBackupPlan#opt_in_to_archive_for_supported_resources}
  */
  readonly optInToArchiveForSupportedResources?: boolean | cdktn.IResolvable;
}

export function backupBackupPlanBackupPlanBackupPlanRuleLifecycleToTerraform(struct?: BackupBackupPlanBackupPlanBackupPlanRuleLifecycle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delete_after_days: cdktn.numberToTerraform(struct!.deleteAfterDays),
    move_to_cold_storage_after_days: cdktn.numberToTerraform(struct!.moveToColdStorageAfterDays),
    opt_in_to_archive_for_supported_resources: cdktn.booleanToTerraform(struct!.optInToArchiveForSupportedResources),
  }
}


export function backupBackupPlanBackupPlanBackupPlanRuleLifecycleToHclTerraform(struct?: BackupBackupPlanBackupPlanBackupPlanRuleLifecycle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delete_after_days: {
      value: cdktn.numberToHclTerraform(struct!.deleteAfterDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    move_to_cold_storage_after_days: {
      value: cdktn.numberToHclTerraform(struct!.moveToColdStorageAfterDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    opt_in_to_archive_for_supported_resources: {
      value: cdktn.booleanToHclTerraform(struct!.optInToArchiveForSupportedResources),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BackupBackupPlanBackupPlanBackupPlanRuleLifecycle | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteAfterDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteAfterDays = this._deleteAfterDays;
    }
    if (this._moveToColdStorageAfterDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.moveToColdStorageAfterDays = this._moveToColdStorageAfterDays;
    }
    if (this._optInToArchiveForSupportedResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.optInToArchiveForSupportedResources = this._optInToArchiveForSupportedResources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupBackupPlanBackupPlanBackupPlanRuleLifecycle | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteAfterDays = undefined;
      this._moveToColdStorageAfterDays = undefined;
      this._optInToArchiveForSupportedResources = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deleteAfterDays = value.deleteAfterDays;
      this._moveToColdStorageAfterDays = value.moveToColdStorageAfterDays;
      this._optInToArchiveForSupportedResources = value.optInToArchiveForSupportedResources;
    }
  }

  // delete_after_days - computed: true, optional: true, required: false
  private _deleteAfterDays?: number; 
  public get deleteAfterDays() {
    return this.getNumberAttribute('delete_after_days');
  }
  public set deleteAfterDays(value: number) {
    this._deleteAfterDays = value;
  }
  public resetDeleteAfterDays() {
    this._deleteAfterDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAfterDaysInput() {
    return this._deleteAfterDays;
  }

  // move_to_cold_storage_after_days - computed: true, optional: true, required: false
  private _moveToColdStorageAfterDays?: number; 
  public get moveToColdStorageAfterDays() {
    return this.getNumberAttribute('move_to_cold_storage_after_days');
  }
  public set moveToColdStorageAfterDays(value: number) {
    this._moveToColdStorageAfterDays = value;
  }
  public resetMoveToColdStorageAfterDays() {
    this._moveToColdStorageAfterDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moveToColdStorageAfterDaysInput() {
    return this._moveToColdStorageAfterDays;
  }

  // opt_in_to_archive_for_supported_resources - computed: true, optional: true, required: false
  private _optInToArchiveForSupportedResources?: boolean | cdktn.IResolvable; 
  public get optInToArchiveForSupportedResources() {
    return this.getBooleanAttribute('opt_in_to_archive_for_supported_resources');
  }
  public set optInToArchiveForSupportedResources(value: boolean | cdktn.IResolvable) {
    this._optInToArchiveForSupportedResources = value;
  }
  public resetOptInToArchiveForSupportedResources() {
    this._optInToArchiveForSupportedResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optInToArchiveForSupportedResourcesInput() {
    return this._optInToArchiveForSupportedResources;
  }
}
export interface BackupBackupPlanBackupPlanBackupPlanRuleScanActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/backup_backup_plan#malware_scanner BackupBackupPlan#malware_scanner}
  */
  readonly malwareScanner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/backup_backup_plan#scan_mode BackupBackupPlan#scan_mode}
  */
  readonly scanMode?: string;
}

export function backupBackupPlanBackupPlanBackupPlanRuleScanActionsToTerraform(struct?: BackupBackupPlanBackupPlanBackupPlanRuleScanActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    malware_scanner: cdktn.stringToTerraform(struct!.malwareScanner),
    scan_mode: cdktn.stringToTerraform(struct!.scanMode),
  }
}


export function backupBackupPlanBackupPlanBackupPlanRuleScanActionsToHclTerraform(struct?: BackupBackupPlanBackupPlanBackupPlanRuleScanActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    malware_scanner: {
      value: cdktn.stringToHclTerraform(struct!.malwareScanner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scan_mode: {
      value: cdktn.stringToHclTerraform(struct!.scanMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackupBackupPlanBackupPlanBackupPlanRuleScanActions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._malwareScanner !== undefined) {
      hasAnyValues = true;
      internalValueResult.malwareScanner = this._malwareScanner;
    }
    if (this._scanMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanMode = this._scanMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupBackupPlanBackupPlanBackupPlanRuleScanActions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._malwareScanner = undefined;
      this._scanMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._malwareScanner = value.malwareScanner;
      this._scanMode = value.scanMode;
    }
  }

  // malware_scanner - computed: true, optional: true, required: false
  private _malwareScanner?: string; 
  public get malwareScanner() {
    return this.getStringAttribute('malware_scanner');
  }
  public set malwareScanner(value: string) {
    this._malwareScanner = value;
  }
  public resetMalwareScanner() {
    this._malwareScanner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareScannerInput() {
    return this._malwareScanner;
  }

  // scan_mode - computed: true, optional: true, required: false
  private _scanMode?: string; 
  public get scanMode() {
    return this.getStringAttribute('scan_mode');
  }
  public set scanMode(value: string) {
    this._scanMode = value;
  }
  public resetScanMode() {
    this._scanMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanModeInput() {
    return this._scanMode;
  }
}

export class BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList extends cdktn.ComplexList {
  public internalValue? : BackupBackupPlanBackupPlanBackupPlanRuleScanActions[] | cdktn.IResolvable

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
  public get(index: number): BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference {
    return new BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupBackupPlanBackupPlanBackupPlanRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/backup_backup_plan#completion_window_minutes BackupBackupPlan#completion_window_minutes}
  */
  readonly completionWindowMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/backup_backup_plan#copy_actions BackupBackupPlan#copy_actions}
  */
  readonly copyActions?: BackupBackupPlanBackupPlanBackupPlanRuleCopyActions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/backup_backup_plan#enable_continuous_backup BackupBackupPlan#enable_continuous_backup}
  */
  readonly enableContinuousBackup?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/backup_backup_plan#index_actions BackupBackupPlan#index_actions}
  */
  readonly indexActions?: BackupBackupPlanBackupPlanBackupPlanRuleIndexActions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/backup_backup_plan#lifecycle BackupBackupPlan#lifecycle}
  */
  readonly lifecycle?: BackupBackupPlanBackupPlanBackupPlanRuleLifecycle;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/backup_backup_plan#recovery_point_tags BackupBackupPlan#recovery_point_tags}
  */
  readonly recoveryPointTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/backup_backup_plan#rule_name BackupBackupPlan#rule_name}
  */
  readonly ruleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/backup_backup_plan#scan_actions BackupBackupPlan#scan_actions}
  */
  readonly scanActions?: BackupBackupPlanBackupPlanBackupPlanRuleScanActions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/backup_backup_plan#schedule_expression BackupBackupPlan#schedule_expression}
  */
  readonly scheduleExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/backup_backup_plan#schedule_expression_timezone BackupBackupPlan#schedule_expression_timezone}
  */
  readonly scheduleExpressionTimezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/backup_backup_plan#start_window_minutes BackupBackupPlan#start_window_minutes}
  */
  readonly startWindowMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/backup_backup_plan#target_backup_vault BackupBackupPlan#target_backup_vault}
  */
  readonly targetBackupVault: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/backup_backup_plan#target_logically_air_gapped_backup_vault_arn BackupBackupPlan#target_logically_air_gapped_backup_vault_arn}
  */
  readonly targetLogicallyAirGappedBackupVaultArn?: string;
}

export function backupBackupPlanBackupPlanBackupPlanRuleToTerraform(struct?: BackupBackupPlanBackupPlanBackupPlanRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    completion_window_minutes: cdktn.numberToTerraform(struct!.completionWindowMinutes),
    copy_actions: cdktn.listMapper(backupBackupPlanBackupPlanBackupPlanRuleCopyActionsToTerraform, false)(struct!.copyActions),
    enable_continuous_backup: cdktn.booleanToTerraform(struct!.enableContinuousBackup),
    index_actions: cdktn.listMapper(backupBackupPlanBackupPlanBackupPlanRuleIndexActionsToTerraform, false)(struct!.indexActions),
    lifecycle: backupBackupPlanBackupPlanBackupPlanRuleLifecycleToTerraform(struct!.lifecycle),
    recovery_point_tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.recoveryPointTags),
    rule_name: cdktn.stringToTerraform(struct!.ruleName),
    scan_actions: cdktn.listMapper(backupBackupPlanBackupPlanBackupPlanRuleScanActionsToTerraform, false)(struct!.scanActions),
    schedule_expression: cdktn.stringToTerraform(struct!.scheduleExpression),
    schedule_expression_timezone: cdktn.stringToTerraform(struct!.scheduleExpressionTimezone),
    start_window_minutes: cdktn.numberToTerraform(struct!.startWindowMinutes),
    target_backup_vault: cdktn.stringToTerraform(struct!.targetBackupVault),
    target_logically_air_gapped_backup_vault_arn: cdktn.stringToTerraform(struct!.targetLogicallyAirGappedBackupVaultArn),
  }
}


export function backupBackupPlanBackupPlanBackupPlanRuleToHclTerraform(struct?: BackupBackupPlanBackupPlanBackupPlanRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    completion_window_minutes: {
      value: cdktn.numberToHclTerraform(struct!.completionWindowMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    copy_actions: {
      value: cdktn.listMapperHcl(backupBackupPlanBackupPlanBackupPlanRuleCopyActionsToHclTerraform, false)(struct!.copyActions),
      isBlock: true,
      type: "list",
      storageClassType: "BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList",
    },
    enable_continuous_backup: {
      value: cdktn.booleanToHclTerraform(struct!.enableContinuousBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    index_actions: {
      value: cdktn.listMapperHcl(backupBackupPlanBackupPlanBackupPlanRuleIndexActionsToHclTerraform, false)(struct!.indexActions),
      isBlock: true,
      type: "list",
      storageClassType: "BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList",
    },
    lifecycle: {
      value: backupBackupPlanBackupPlanBackupPlanRuleLifecycleToHclTerraform(struct!.lifecycle),
      isBlock: true,
      type: "struct",
      storageClassType: "BackupBackupPlanBackupPlanBackupPlanRuleLifecycle",
    },
    recovery_point_tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.recoveryPointTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    rule_name: {
      value: cdktn.stringToHclTerraform(struct!.ruleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scan_actions: {
      value: cdktn.listMapperHcl(backupBackupPlanBackupPlanBackupPlanRuleScanActionsToHclTerraform, false)(struct!.scanActions),
      isBlock: true,
      type: "list",
      storageClassType: "BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList",
    },
    schedule_expression: {
      value: cdktn.stringToHclTerraform(struct!.scheduleExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_expression_timezone: {
      value: cdktn.stringToHclTerraform(struct!.scheduleExpressionTimezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_window_minutes: {
      value: cdktn.numberToHclTerraform(struct!.startWindowMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_backup_vault: {
      value: cdktn.stringToHclTerraform(struct!.targetBackupVault),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_logically_air_gapped_backup_vault_arn: {
      value: cdktn.stringToHclTerraform(struct!.targetLogicallyAirGappedBackupVaultArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupBackupPlanBackupPlanBackupPlanRuleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackupBackupPlanBackupPlanBackupPlanRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._completionWindowMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.completionWindowMinutes = this._completionWindowMinutes;
    }
    if (this._copyActions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyActions = this._copyActions?.internalValue;
    }
    if (this._enableContinuousBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableContinuousBackup = this._enableContinuousBackup;
    }
    if (this._indexActions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexActions = this._indexActions?.internalValue;
    }
    if (this._lifecycle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycle = this._lifecycle?.internalValue;
    }
    if (this._recoveryPointTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryPointTags = this._recoveryPointTags;
    }
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    if (this._scanActions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanActions = this._scanActions?.internalValue;
    }
    if (this._scheduleExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleExpression = this._scheduleExpression;
    }
    if (this._scheduleExpressionTimezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleExpressionTimezone = this._scheduleExpressionTimezone;
    }
    if (this._startWindowMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.startWindowMinutes = this._startWindowMinutes;
    }
    if (this._targetBackupVault !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetBackupVault = this._targetBackupVault;
    }
    if (this._targetLogicallyAirGappedBackupVaultArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetLogicallyAirGappedBackupVaultArn = this._targetLogicallyAirGappedBackupVaultArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupBackupPlanBackupPlanBackupPlanRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._completionWindowMinutes = undefined;
      this._copyActions.internalValue = undefined;
      this._enableContinuousBackup = undefined;
      this._indexActions.internalValue = undefined;
      this._lifecycle.internalValue = undefined;
      this._recoveryPointTags = undefined;
      this._ruleName = undefined;
      this._scanActions.internalValue = undefined;
      this._scheduleExpression = undefined;
      this._scheduleExpressionTimezone = undefined;
      this._startWindowMinutes = undefined;
      this._targetBackupVault = undefined;
      this._targetLogicallyAirGappedBackupVaultArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._completionWindowMinutes = value.completionWindowMinutes;
      this._copyActions.internalValue = value.copyActions;
      this._enableContinuousBackup = value.enableContinuousBackup;
      this._indexActions.internalValue = value.indexActions;
      this._lifecycle.internalValue = value.lifecycle;
      this._recoveryPointTags = value.recoveryPointTags;
      this._ruleName = value.ruleName;
      this._scanActions.internalValue = value.scanActions;
      this._scheduleExpression = value.scheduleExpression;
      this._scheduleExpressionTimezone = value.scheduleExpressionTimezone;
      this._startWindowMinutes = value.startWindowMinutes;
      this._targetBackupVault = value.targetBackupVault;
      this._targetLogicallyAirGappedBackupVaultArn = value.targetLogicallyAirGappedBackupVaultArn;
    }
  }

  // completion_window_minutes - computed: true, optional: true, required: false
  private _completionWindowMinutes?: number; 
  public get completionWindowMinutes() {
    return this.getNumberAttribute('completion_window_minutes');
  }
  public set completionWindowMinutes(value: number) {
    this._completionWindowMinutes = value;
  }
  public resetCompletionWindowMinutes() {
    this._completionWindowMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get completionWindowMinutesInput() {
    return this._completionWindowMinutes;
  }

  // copy_actions - computed: true, optional: true, required: false
  private _copyActions = new BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList(this, "copy_actions", false);
  public get copyActions() {
    return this._copyActions;
  }
  public putCopyActions(value: BackupBackupPlanBackupPlanBackupPlanRuleCopyActions[] | cdktn.IResolvable) {
    this._copyActions.internalValue = value;
  }
  public resetCopyActions() {
    this._copyActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyActionsInput() {
    return this._copyActions.internalValue;
  }

  // enable_continuous_backup - computed: true, optional: true, required: false
  private _enableContinuousBackup?: boolean | cdktn.IResolvable; 
  public get enableContinuousBackup() {
    return this.getBooleanAttribute('enable_continuous_backup');
  }
  public set enableContinuousBackup(value: boolean | cdktn.IResolvable) {
    this._enableContinuousBackup = value;
  }
  public resetEnableContinuousBackup() {
    this._enableContinuousBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableContinuousBackupInput() {
    return this._enableContinuousBackup;
  }

  // index_actions - computed: true, optional: true, required: false
  private _indexActions = new BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList(this, "index_actions", false);
  public get indexActions() {
    return this._indexActions;
  }
  public putIndexActions(value: BackupBackupPlanBackupPlanBackupPlanRuleIndexActions[] | cdktn.IResolvable) {
    this._indexActions.internalValue = value;
  }
  public resetIndexActions() {
    this._indexActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexActionsInput() {
    return this._indexActions.internalValue;
  }

  // lifecycle - computed: true, optional: true, required: false
  private _lifecycle = new BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference(this, "lifecycle");
  public get lifecycle() {
    return this._lifecycle;
  }
  public putLifecycle(value: BackupBackupPlanBackupPlanBackupPlanRuleLifecycle) {
    this._lifecycle.internalValue = value;
  }
  public resetLifecycle() {
    this._lifecycle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleInput() {
    return this._lifecycle.internalValue;
  }

  // recovery_point_tags - computed: true, optional: true, required: false
  private _recoveryPointTags?: { [key: string]: string }; 
  public get recoveryPointTags() {
    return this.getStringMapAttribute('recovery_point_tags');
  }
  public set recoveryPointTags(value: { [key: string]: string }) {
    this._recoveryPointTags = value;
  }
  public resetRecoveryPointTags() {
    this._recoveryPointTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryPointTagsInput() {
    return this._recoveryPointTags;
  }

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // scan_actions - computed: true, optional: true, required: false
  private _scanActions = new BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList(this, "scan_actions", false);
  public get scanActions() {
    return this._scanActions;
  }
  public putScanActions(value: BackupBackupPlanBackupPlanBackupPlanRuleScanActions[] | cdktn.IResolvable) {
    this._scanActions.internalValue = value;
  }
  public resetScanActions() {
    this._scanActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanActionsInput() {
    return this._scanActions.internalValue;
  }

  // schedule_expression - computed: true, optional: true, required: false
  private _scheduleExpression?: string; 
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }
  public set scheduleExpression(value: string) {
    this._scheduleExpression = value;
  }
  public resetScheduleExpression() {
    this._scheduleExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleExpressionInput() {
    return this._scheduleExpression;
  }

  // schedule_expression_timezone - computed: true, optional: true, required: false
  private _scheduleExpressionTimezone?: string; 
  public get scheduleExpressionTimezone() {
    return this.getStringAttribute('schedule_expression_timezone');
  }
  public set scheduleExpressionTimezone(value: string) {
    this._scheduleExpressionTimezone = value;
  }
  public resetScheduleExpressionTimezone() {
    this._scheduleExpressionTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleExpressionTimezoneInput() {
    return this._scheduleExpressionTimezone;
  }

  // start_window_minutes - computed: true, optional: true, required: false
  private _startWindowMinutes?: number; 
  public get startWindowMinutes() {
    return this.getNumberAttribute('start_window_minutes');
  }
  public set startWindowMinutes(value: number) {
    this._startWindowMinutes = value;
  }
  public resetStartWindowMinutes() {
    this._startWindowMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startWindowMinutesInput() {
    return this._startWindowMinutes;
  }

  // target_backup_vault - computed: false, optional: false, required: true
  private _targetBackupVault?: string; 
  public get targetBackupVault() {
    return this.getStringAttribute('target_backup_vault');
  }
  public set targetBackupVault(value: string) {
    this._targetBackupVault = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetBackupVaultInput() {
    return this._targetBackupVault;
  }

  // target_logically_air_gapped_backup_vault_arn - computed: true, optional: true, required: false
  private _targetLogicallyAirGappedBackupVaultArn?: string; 
  public get targetLogicallyAirGappedBackupVaultArn() {
    return this.getStringAttribute('target_logically_air_gapped_backup_vault_arn');
  }
  public set targetLogicallyAirGappedBackupVaultArn(value: string) {
    this._targetLogicallyAirGappedBackupVaultArn = value;
  }
  public resetTargetLogicallyAirGappedBackupVaultArn() {
    this._targetLogicallyAirGappedBackupVaultArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetLogicallyAirGappedBackupVaultArnInput() {
    return this._targetLogicallyAirGappedBackupVaultArn;
  }
}

export class BackupBackupPlanBackupPlanBackupPlanRuleList extends cdktn.ComplexList {
  public internalValue? : BackupBackupPlanBackupPlanBackupPlanRule[] | cdktn.IResolvable

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
  public get(index: number): BackupBackupPlanBackupPlanBackupPlanRuleOutputReference {
    return new BackupBackupPlanBackupPlanBackupPlanRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupBackupPlanBackupPlanScanSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/backup_backup_plan#malware_scanner BackupBackupPlan#malware_scanner}
  */
  readonly malwareScanner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/backup_backup_plan#resource_types BackupBackupPlan#resource_types}
  */
  readonly resourceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/backup_backup_plan#scanner_role_arn BackupBackupPlan#scanner_role_arn}
  */
  readonly scannerRoleArn?: string;
}

export function backupBackupPlanBackupPlanScanSettingsToTerraform(struct?: BackupBackupPlanBackupPlanScanSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    malware_scanner: cdktn.stringToTerraform(struct!.malwareScanner),
    resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceTypes),
    scanner_role_arn: cdktn.stringToTerraform(struct!.scannerRoleArn),
  }
}


export function backupBackupPlanBackupPlanScanSettingsToHclTerraform(struct?: BackupBackupPlanBackupPlanScanSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    malware_scanner: {
      value: cdktn.stringToHclTerraform(struct!.malwareScanner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    scanner_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.scannerRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupBackupPlanBackupPlanScanSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackupBackupPlanBackupPlanScanSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._malwareScanner !== undefined) {
      hasAnyValues = true;
      internalValueResult.malwareScanner = this._malwareScanner;
    }
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    if (this._scannerRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.scannerRoleArn = this._scannerRoleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupBackupPlanBackupPlanScanSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._malwareScanner = undefined;
      this._resourceTypes = undefined;
      this._scannerRoleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._malwareScanner = value.malwareScanner;
      this._resourceTypes = value.resourceTypes;
      this._scannerRoleArn = value.scannerRoleArn;
    }
  }

  // malware_scanner - computed: true, optional: true, required: false
  private _malwareScanner?: string; 
  public get malwareScanner() {
    return this.getStringAttribute('malware_scanner');
  }
  public set malwareScanner(value: string) {
    this._malwareScanner = value;
  }
  public resetMalwareScanner() {
    this._malwareScanner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareScannerInput() {
    return this._malwareScanner;
  }

  // resource_types - computed: true, optional: true, required: false
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  public resetResourceTypes() {
    this._resourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }

  // scanner_role_arn - computed: true, optional: true, required: false
  private _scannerRoleArn?: string; 
  public get scannerRoleArn() {
    return this.getStringAttribute('scanner_role_arn');
  }
  public set scannerRoleArn(value: string) {
    this._scannerRoleArn = value;
  }
  public resetScannerRoleArn() {
    this._scannerRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scannerRoleArnInput() {
    return this._scannerRoleArn;
  }
}

export class BackupBackupPlanBackupPlanScanSettingsList extends cdktn.ComplexList {
  public internalValue? : BackupBackupPlanBackupPlanScanSettings[] | cdktn.IResolvable

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
  public get(index: number): BackupBackupPlanBackupPlanScanSettingsOutputReference {
    return new BackupBackupPlanBackupPlanScanSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupBackupPlanBackupPlan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/backup_backup_plan#advanced_backup_settings BackupBackupPlan#advanced_backup_settings}
  */
  readonly advancedBackupSettings?: BackupBackupPlanBackupPlanAdvancedBackupSettings[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/backup_backup_plan#backup_plan_name BackupBackupPlan#backup_plan_name}
  */
  readonly backupPlanName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/backup_backup_plan#backup_plan_rule BackupBackupPlan#backup_plan_rule}
  */
  readonly backupPlanRule: BackupBackupPlanBackupPlanBackupPlanRule[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/backup_backup_plan#scan_settings BackupBackupPlan#scan_settings}
  */
  readonly scanSettings?: BackupBackupPlanBackupPlanScanSettings[] | cdktn.IResolvable;
}

export function backupBackupPlanBackupPlanToTerraform(struct?: BackupBackupPlanBackupPlan | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    advanced_backup_settings: cdktn.listMapper(backupBackupPlanBackupPlanAdvancedBackupSettingsToTerraform, false)(struct!.advancedBackupSettings),
    backup_plan_name: cdktn.stringToTerraform(struct!.backupPlanName),
    backup_plan_rule: cdktn.listMapper(backupBackupPlanBackupPlanBackupPlanRuleToTerraform, false)(struct!.backupPlanRule),
    scan_settings: cdktn.listMapper(backupBackupPlanBackupPlanScanSettingsToTerraform, false)(struct!.scanSettings),
  }
}


export function backupBackupPlanBackupPlanToHclTerraform(struct?: BackupBackupPlanBackupPlan | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    advanced_backup_settings: {
      value: cdktn.listMapperHcl(backupBackupPlanBackupPlanAdvancedBackupSettingsToHclTerraform, false)(struct!.advancedBackupSettings),
      isBlock: true,
      type: "list",
      storageClassType: "BackupBackupPlanBackupPlanAdvancedBackupSettingsList",
    },
    backup_plan_name: {
      value: cdktn.stringToHclTerraform(struct!.backupPlanName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_plan_rule: {
      value: cdktn.listMapperHcl(backupBackupPlanBackupPlanBackupPlanRuleToHclTerraform, false)(struct!.backupPlanRule),
      isBlock: true,
      type: "list",
      storageClassType: "BackupBackupPlanBackupPlanBackupPlanRuleList",
    },
    scan_settings: {
      value: cdktn.listMapperHcl(backupBackupPlanBackupPlanScanSettingsToHclTerraform, false)(struct!.scanSettings),
      isBlock: true,
      type: "list",
      storageClassType: "BackupBackupPlanBackupPlanScanSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupBackupPlanBackupPlanOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BackupBackupPlanBackupPlan | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedBackupSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedBackupSettings = this._advancedBackupSettings?.internalValue;
    }
    if (this._backupPlanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupPlanName = this._backupPlanName;
    }
    if (this._backupPlanRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupPlanRule = this._backupPlanRule?.internalValue;
    }
    if (this._scanSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanSettings = this._scanSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupBackupPlanBackupPlan | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advancedBackupSettings.internalValue = undefined;
      this._backupPlanName = undefined;
      this._backupPlanRule.internalValue = undefined;
      this._scanSettings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advancedBackupSettings.internalValue = value.advancedBackupSettings;
      this._backupPlanName = value.backupPlanName;
      this._backupPlanRule.internalValue = value.backupPlanRule;
      this._scanSettings.internalValue = value.scanSettings;
    }
  }

  // advanced_backup_settings - computed: true, optional: true, required: false
  private _advancedBackupSettings = new BackupBackupPlanBackupPlanAdvancedBackupSettingsList(this, "advanced_backup_settings", false);
  public get advancedBackupSettings() {
    return this._advancedBackupSettings;
  }
  public putAdvancedBackupSettings(value: BackupBackupPlanBackupPlanAdvancedBackupSettings[] | cdktn.IResolvable) {
    this._advancedBackupSettings.internalValue = value;
  }
  public resetAdvancedBackupSettings() {
    this._advancedBackupSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedBackupSettingsInput() {
    return this._advancedBackupSettings.internalValue;
  }

  // backup_plan_name - computed: false, optional: false, required: true
  private _backupPlanName?: string; 
  public get backupPlanName() {
    return this.getStringAttribute('backup_plan_name');
  }
  public set backupPlanName(value: string) {
    this._backupPlanName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPlanNameInput() {
    return this._backupPlanName;
  }

  // backup_plan_rule - computed: false, optional: false, required: true
  private _backupPlanRule = new BackupBackupPlanBackupPlanBackupPlanRuleList(this, "backup_plan_rule", false);
  public get backupPlanRule() {
    return this._backupPlanRule;
  }
  public putBackupPlanRule(value: BackupBackupPlanBackupPlanBackupPlanRule[] | cdktn.IResolvable) {
    this._backupPlanRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPlanRuleInput() {
    return this._backupPlanRule.internalValue;
  }

  // scan_settings - computed: true, optional: true, required: false
  private _scanSettings = new BackupBackupPlanBackupPlanScanSettingsList(this, "scan_settings", false);
  public get scanSettings() {
    return this._scanSettings;
  }
  public putScanSettings(value: BackupBackupPlanBackupPlanScanSettings[] | cdktn.IResolvable) {
    this._scanSettings.internalValue = value;
  }
  public resetScanSettings() {
    this._scanSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanSettingsInput() {
    return this._scanSettings.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/backup_backup_plan awscc_backup_backup_plan}
*/
export class BackupBackupPlan extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_backup_backup_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BackupBackupPlan resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BackupBackupPlan to import
  * @param importFromId The id of the existing BackupBackupPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/backup_backup_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BackupBackupPlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_backup_backup_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/backup_backup_plan awscc_backup_backup_plan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupBackupPlanConfig
  */
  public constructor(scope: Construct, id: string, config: BackupBackupPlanConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_backup_backup_plan',
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
    this._backupPlan.internalValue = config.backupPlan;
    this._backupPlanTags = config.backupPlanTags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_plan - computed: false, optional: false, required: true
  private _backupPlan = new BackupBackupPlanBackupPlanOutputReference(this, "backup_plan");
  public get backupPlan() {
    return this._backupPlan;
  }
  public putBackupPlan(value: BackupBackupPlanBackupPlan) {
    this._backupPlan.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPlanInput() {
    return this._backupPlan.internalValue;
  }

  // backup_plan_arn - computed: true, optional: false, required: false
  public get backupPlanArn() {
    return this.getStringAttribute('backup_plan_arn');
  }

  // backup_plan_id - computed: true, optional: false, required: false
  public get backupPlanId() {
    return this.getStringAttribute('backup_plan_id');
  }

  // backup_plan_tags - computed: true, optional: true, required: false
  private _backupPlanTags?: { [key: string]: string }; 
  public get backupPlanTags() {
    return this.getStringMapAttribute('backup_plan_tags');
  }
  public set backupPlanTags(value: { [key: string]: string }) {
    this._backupPlanTags = value;
  }
  public resetBackupPlanTags() {
    this._backupPlanTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPlanTagsInput() {
    return this._backupPlanTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_plan: backupBackupPlanBackupPlanToTerraform(this._backupPlan.internalValue),
      backup_plan_tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._backupPlanTags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_plan: {
        value: backupBackupPlanBackupPlanToHclTerraform(this._backupPlan.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BackupBackupPlanBackupPlan",
      },
      backup_plan_tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._backupPlanTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
