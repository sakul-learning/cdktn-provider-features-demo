// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/backup_backup_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccBackupBackupPlanConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/backup_backup_plan#id DataAwsccBackupBackupPlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettings {
}

export function dataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsToTerraform(struct?: DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsToHclTerraform(struct?: DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_options - computed: true, optional: false, required: false
  public get backupOptions() {
    return this.getStringAttribute('backup_options');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
}

export class DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference {
    return new DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle {
}

export function dataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleToTerraform(struct?: DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleToHclTerraform(struct?: DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delete_after_days - computed: true, optional: false, required: false
  public get deleteAfterDays() {
    return this.getNumberAttribute('delete_after_days');
  }

  // move_to_cold_storage_after_days - computed: true, optional: false, required: false
  public get moveToColdStorageAfterDays() {
    return this.getNumberAttribute('move_to_cold_storage_after_days');
  }

  // opt_in_to_archive_for_supported_resources - computed: true, optional: false, required: false
  public get optInToArchiveForSupportedResources() {
    return this.getBooleanAttribute('opt_in_to_archive_for_supported_resources');
  }
}
export interface DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActions {
}

export function dataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsToTerraform(struct?: DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsToHclTerraform(struct?: DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_backup_vault_arn - computed: true, optional: false, required: false
  public get destinationBackupVaultArn() {
    return this.getStringAttribute('destination_backup_vault_arn');
  }

  // lifecycle - computed: true, optional: false, required: false
  private _lifecycle = new DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference(this, "lifecycle");
  public get lifecycle() {
    return this._lifecycle;
  }
}

export class DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference {
    return new DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActions {
}

export function dataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsToTerraform(struct?: DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsToHclTerraform(struct?: DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_types - computed: true, optional: false, required: false
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
}

export class DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference {
    return new DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycle {
}

export function dataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleToTerraform(struct?: DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycle): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleToHclTerraform(struct?: DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycle): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delete_after_days - computed: true, optional: false, required: false
  public get deleteAfterDays() {
    return this.getNumberAttribute('delete_after_days');
  }

  // move_to_cold_storage_after_days - computed: true, optional: false, required: false
  public get moveToColdStorageAfterDays() {
    return this.getNumberAttribute('move_to_cold_storage_after_days');
  }

  // opt_in_to_archive_for_supported_resources - computed: true, optional: false, required: false
  public get optInToArchiveForSupportedResources() {
    return this.getBooleanAttribute('opt_in_to_archive_for_supported_resources');
  }
}
export interface DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActions {
}

export function dataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsToTerraform(struct?: DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsToHclTerraform(struct?: DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // malware_scanner - computed: true, optional: false, required: false
  public get malwareScanner() {
    return this.getStringAttribute('malware_scanner');
  }

  // scan_mode - computed: true, optional: false, required: false
  public get scanMode() {
    return this.getStringAttribute('scan_mode');
  }
}

export class DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference {
    return new DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBackupBackupPlanBackupPlanBackupPlanRule {
}

export function dataAwsccBackupBackupPlanBackupPlanBackupPlanRuleToTerraform(struct?: DataAwsccBackupBackupPlanBackupPlanBackupPlanRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBackupBackupPlanBackupPlanBackupPlanRuleToHclTerraform(struct?: DataAwsccBackupBackupPlanBackupPlanBackupPlanRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBackupBackupPlanBackupPlanBackupPlanRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBackupBackupPlanBackupPlanBackupPlanRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // completion_window_minutes - computed: true, optional: false, required: false
  public get completionWindowMinutes() {
    return this.getNumberAttribute('completion_window_minutes');
  }

  // copy_actions - computed: true, optional: false, required: false
  private _copyActions = new DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList(this, "copy_actions", false);
  public get copyActions() {
    return this._copyActions;
  }

  // enable_continuous_backup - computed: true, optional: false, required: false
  public get enableContinuousBackup() {
    return this.getBooleanAttribute('enable_continuous_backup');
  }

  // index_actions - computed: true, optional: false, required: false
  private _indexActions = new DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList(this, "index_actions", false);
  public get indexActions() {
    return this._indexActions;
  }

  // lifecycle - computed: true, optional: false, required: false
  private _lifecycle = new DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference(this, "lifecycle");
  public get lifecycle() {
    return this._lifecycle;
  }

  // recovery_point_tags - computed: true, optional: false, required: false
  private _recoveryPointTags = new cdktn.StringMap(this, "recovery_point_tags");
  public get recoveryPointTags() {
    return this._recoveryPointTags;
  }

  // rule_name - computed: true, optional: false, required: false
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }

  // scan_actions - computed: true, optional: false, required: false
  private _scanActions = new DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList(this, "scan_actions", false);
  public get scanActions() {
    return this._scanActions;
  }

  // schedule_expression - computed: true, optional: false, required: false
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }

  // schedule_expression_timezone - computed: true, optional: false, required: false
  public get scheduleExpressionTimezone() {
    return this.getStringAttribute('schedule_expression_timezone');
  }

  // start_window_minutes - computed: true, optional: false, required: false
  public get startWindowMinutes() {
    return this.getNumberAttribute('start_window_minutes');
  }

  // target_backup_vault - computed: true, optional: false, required: false
  public get targetBackupVault() {
    return this.getStringAttribute('target_backup_vault');
  }

  // target_logically_air_gapped_backup_vault_arn - computed: true, optional: false, required: false
  public get targetLogicallyAirGappedBackupVaultArn() {
    return this.getStringAttribute('target_logically_air_gapped_backup_vault_arn');
  }
}

export class DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference {
    return new DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBackupBackupPlanBackupPlanScanSettings {
}

export function dataAwsccBackupBackupPlanBackupPlanScanSettingsToTerraform(struct?: DataAwsccBackupBackupPlanBackupPlanScanSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBackupBackupPlanBackupPlanScanSettingsToHclTerraform(struct?: DataAwsccBackupBackupPlanBackupPlanScanSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBackupBackupPlanBackupPlanScanSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBackupBackupPlanBackupPlanScanSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // malware_scanner - computed: true, optional: false, required: false
  public get malwareScanner() {
    return this.getStringAttribute('malware_scanner');
  }

  // resource_types - computed: true, optional: false, required: false
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }

  // scanner_role_arn - computed: true, optional: false, required: false
  public get scannerRoleArn() {
    return this.getStringAttribute('scanner_role_arn');
  }
}

export class DataAwsccBackupBackupPlanBackupPlanScanSettingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference {
    return new DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBackupBackupPlanBackupPlan {
}

export function dataAwsccBackupBackupPlanBackupPlanToTerraform(struct?: DataAwsccBackupBackupPlanBackupPlan): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBackupBackupPlanBackupPlanToHclTerraform(struct?: DataAwsccBackupBackupPlanBackupPlan): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBackupBackupPlanBackupPlanOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBackupBackupPlanBackupPlan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBackupBackupPlanBackupPlan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advanced_backup_settings - computed: true, optional: false, required: false
  private _advancedBackupSettings = new DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList(this, "advanced_backup_settings", false);
  public get advancedBackupSettings() {
    return this._advancedBackupSettings;
  }

  // backup_plan_name - computed: true, optional: false, required: false
  public get backupPlanName() {
    return this.getStringAttribute('backup_plan_name');
  }

  // backup_plan_rule - computed: true, optional: false, required: false
  private _backupPlanRule = new DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList(this, "backup_plan_rule", false);
  public get backupPlanRule() {
    return this._backupPlanRule;
  }

  // scan_settings - computed: true, optional: false, required: false
  private _scanSettings = new DataAwsccBackupBackupPlanBackupPlanScanSettingsList(this, "scan_settings", false);
  public get scanSettings() {
    return this._scanSettings;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/backup_backup_plan awscc_backup_backup_plan}
*/
export class DataAwsccBackupBackupPlan extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_backup_backup_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccBackupBackupPlan resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccBackupBackupPlan to import
  * @param importFromId The id of the existing DataAwsccBackupBackupPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/backup_backup_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccBackupBackupPlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_backup_backup_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/backup_backup_plan awscc_backup_backup_plan} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccBackupBackupPlanConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccBackupBackupPlanConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_backup_backup_plan',
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

  // backup_plan - computed: true, optional: false, required: false
  private _backupPlan = new DataAwsccBackupBackupPlanBackupPlanOutputReference(this, "backup_plan");
  public get backupPlan() {
    return this._backupPlan;
  }

  // backup_plan_arn - computed: true, optional: false, required: false
  public get backupPlanArn() {
    return this.getStringAttribute('backup_plan_arn');
  }

  // backup_plan_id - computed: true, optional: false, required: false
  public get backupPlanId() {
    return this.getStringAttribute('backup_plan_id');
  }

  // backup_plan_tags - computed: true, optional: false, required: false
  private _backupPlanTags = new cdktn.StringMap(this, "backup_plan_tags");
  public get backupPlanTags() {
    return this._backupPlanTags;
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

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
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
