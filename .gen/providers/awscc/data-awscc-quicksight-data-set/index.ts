// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/quicksight_data_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccQuicksightDataSetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/quicksight_data_set#id DataAwsccQuicksightDataSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccQuicksightDataSetColumnGroupsGeoSpatialColumnGroup {
}

export function dataAwsccQuicksightDataSetColumnGroupsGeoSpatialColumnGroupToTerraform(struct?: DataAwsccQuicksightDataSetColumnGroupsGeoSpatialColumnGroup): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSetColumnGroupsGeoSpatialColumnGroupToHclTerraform(struct?: DataAwsccQuicksightDataSetColumnGroupsGeoSpatialColumnGroup): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSetColumnGroupsGeoSpatialColumnGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSetColumnGroupsGeoSpatialColumnGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // columns - computed: true, optional: false, required: false
  public get columns() {
    return this.getListAttribute('columns');
  }

  // country_code - computed: true, optional: false, required: false
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataAwsccQuicksightDataSetColumnGroups {
}

export function dataAwsccQuicksightDataSetColumnGroupsToTerraform(struct?: DataAwsccQuicksightDataSetColumnGroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSetColumnGroupsToHclTerraform(struct?: DataAwsccQuicksightDataSetColumnGroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSetColumnGroupsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccQuicksightDataSetColumnGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSetColumnGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // geo_spatial_column_group - computed: true, optional: false, required: false
  private _geoSpatialColumnGroup = new DataAwsccQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference(this, "geo_spatial_column_group");
  public get geoSpatialColumnGroup() {
    return this._geoSpatialColumnGroup;
  }
}

export class DataAwsccQuicksightDataSetColumnGroupsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccQuicksightDataSetColumnGroupsOutputReference {
    return new DataAwsccQuicksightDataSetColumnGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccQuicksightDataSetColumnLevelPermissionRules {
}

export function dataAwsccQuicksightDataSetColumnLevelPermissionRulesToTerraform(struct?: DataAwsccQuicksightDataSetColumnLevelPermissionRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSetColumnLevelPermissionRulesToHclTerraform(struct?: DataAwsccQuicksightDataSetColumnLevelPermissionRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSetColumnLevelPermissionRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccQuicksightDataSetColumnLevelPermissionRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSetColumnLevelPermissionRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_names - computed: true, optional: false, required: false
  public get columnNames() {
    return this.getListAttribute('column_names');
  }

  // principals - computed: true, optional: false, required: false
  public get principals() {
    return this.getListAttribute('principals');
  }
}

export class DataAwsccQuicksightDataSetColumnLevelPermissionRulesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccQuicksightDataSetColumnLevelPermissionRulesOutputReference {
    return new DataAwsccQuicksightDataSetColumnLevelPermissionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccQuicksightDataSetDataSetUsageConfiguration {
}

export function dataAwsccQuicksightDataSetDataSetUsageConfigurationToTerraform(struct?: DataAwsccQuicksightDataSetDataSetUsageConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSetDataSetUsageConfigurationToHclTerraform(struct?: DataAwsccQuicksightDataSetDataSetUsageConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSetDataSetUsageConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSetDataSetUsageConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSetDataSetUsageConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable_use_as_direct_query_source - computed: true, optional: false, required: false
  public get disableUseAsDirectQuerySource() {
    return this.getBooleanAttribute('disable_use_as_direct_query_source');
  }

  // disable_use_as_imported_source - computed: true, optional: false, required: false
  public get disableUseAsImportedSource() {
    return this.getBooleanAttribute('disable_use_as_imported_source');
  }
}
export interface DataAwsccQuicksightDataSetFieldFolders {
}

export function dataAwsccQuicksightDataSetFieldFoldersToTerraform(struct?: DataAwsccQuicksightDataSetFieldFolders): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSetFieldFoldersToHclTerraform(struct?: DataAwsccQuicksightDataSetFieldFolders): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSetFieldFoldersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataAwsccQuicksightDataSetFieldFolders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSetFieldFolders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // columns - computed: true, optional: false, required: false
  public get columns() {
    return this.getListAttribute('columns');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }
}

export class DataAwsccQuicksightDataSetFieldFoldersMap extends cdktn.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute);
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataAwsccQuicksightDataSetFieldFoldersOutputReference {
    return new DataAwsccQuicksightDataSetFieldFoldersOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataAwsccQuicksightDataSetIngestionWaitPolicy {
}

export function dataAwsccQuicksightDataSetIngestionWaitPolicyToTerraform(struct?: DataAwsccQuicksightDataSetIngestionWaitPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSetIngestionWaitPolicyToHclTerraform(struct?: DataAwsccQuicksightDataSetIngestionWaitPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSetIngestionWaitPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSetIngestionWaitPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSetIngestionWaitPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ingestion_wait_time_in_hours - computed: true, optional: false, required: false
  public get ingestionWaitTimeInHours() {
    return this.getNumberAttribute('ingestion_wait_time_in_hours');
  }

  // wait_for_spice_ingestion - computed: true, optional: false, required: false
  public get waitForSpiceIngestion() {
    return this.getBooleanAttribute('wait_for_spice_ingestion');
  }
}
export interface DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation {
}

export function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationToHclTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // new_column_type - computed: true, optional: false, required: false
  public get newColumnType() {
    return this.getStringAttribute('new_column_type');
  }
}
export interface DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns {
}

export function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsToHclTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_id - computed: true, optional: false, required: false
  public get columnId() {
    return this.getStringAttribute('column_id');
  }

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }
}

export class DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference {
    return new DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation {
}

export function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationToHclTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // columns - computed: true, optional: false, required: false
  private _columns = new DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
}
export interface DataAwsccQuicksightDataSetLogicalTableMapDataTransformsFilterOperation {
}

export function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsFilterOperationToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsFilterOperation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsFilterOperationToHclTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsFilterOperation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSetLogicalTableMapDataTransformsFilterOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsFilterOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition_expression - computed: true, optional: false, required: false
  public get conditionExpression() {
    return this.getStringAttribute('condition_expression');
  }
}
export interface DataAwsccQuicksightDataSetLogicalTableMapDataTransformsProjectOperation {
}

export function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsProjectOperationToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsProjectOperation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsProjectOperationToHclTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsProjectOperation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSetLogicalTableMapDataTransformsProjectOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsProjectOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // projected_columns - computed: true, optional: false, required: false
  public get projectedColumns() {
    return this.getListAttribute('projected_columns');
  }
}
export interface DataAwsccQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation {
}

export function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationToHclTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // new_column_name - computed: true, optional: false, required: false
  public get newColumnName() {
    return this.getStringAttribute('new_column_name');
  }
}
export interface DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription {
}

export function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionToHclTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }
}
export interface DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags {
}

export function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsToHclTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_description - computed: true, optional: false, required: false
  private _columnDescription = new DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference(this, "column_description");
  public get columnDescription() {
    return this._columnDescription;
  }

  // column_geographic_role - computed: true, optional: false, required: false
  public get columnGeographicRole() {
    return this.getStringAttribute('column_geographic_role');
  }
}

export class DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference {
    return new DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation {
}

export function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationToHclTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
}
export interface DataAwsccQuicksightDataSetLogicalTableMapDataTransforms {
}

export function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapDataTransforms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsToHclTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapDataTransforms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSetLogicalTableMapDataTransformsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccQuicksightDataSetLogicalTableMapDataTransforms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSetLogicalTableMapDataTransforms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cast_column_type_operation - computed: true, optional: false, required: false
  private _castColumnTypeOperation = new DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference(this, "cast_column_type_operation");
  public get castColumnTypeOperation() {
    return this._castColumnTypeOperation;
  }

  // create_columns_operation - computed: true, optional: false, required: false
  private _createColumnsOperation = new DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference(this, "create_columns_operation");
  public get createColumnsOperation() {
    return this._createColumnsOperation;
  }

  // filter_operation - computed: true, optional: false, required: false
  private _filterOperation = new DataAwsccQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference(this, "filter_operation");
  public get filterOperation() {
    return this._filterOperation;
  }

  // project_operation - computed: true, optional: false, required: false
  private _projectOperation = new DataAwsccQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference(this, "project_operation");
  public get projectOperation() {
    return this._projectOperation;
  }

  // rename_column_operation - computed: true, optional: false, required: false
  private _renameColumnOperation = new DataAwsccQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference(this, "rename_column_operation");
  public get renameColumnOperation() {
    return this._renameColumnOperation;
  }

  // tag_column_operation - computed: true, optional: false, required: false
  private _tagColumnOperation = new DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference(this, "tag_column_operation");
  public get tagColumnOperation() {
    return this._tagColumnOperation;
  }
}

export class DataAwsccQuicksightDataSetLogicalTableMapDataTransformsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccQuicksightDataSetLogicalTableMapDataTransformsOutputReference {
    return new DataAwsccQuicksightDataSetLogicalTableMapDataTransformsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties {
}

export function dataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesToHclTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // unique_key - computed: true, optional: false, required: false
  public get uniqueKey() {
    return this.getBooleanAttribute('unique_key');
  }
}
export interface DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties {
}

export function dataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesToHclTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // unique_key - computed: true, optional: false, required: false
  public get uniqueKey() {
    return this.getBooleanAttribute('unique_key');
  }
}
export interface DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstruction {
}

export function dataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstruction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionToHclTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstruction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstruction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstruction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // left_join_key_properties - computed: true, optional: false, required: false
  private _leftJoinKeyProperties = new DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference(this, "left_join_key_properties");
  public get leftJoinKeyProperties() {
    return this._leftJoinKeyProperties;
  }

  // left_operand - computed: true, optional: false, required: false
  public get leftOperand() {
    return this.getStringAttribute('left_operand');
  }

  // on_clause - computed: true, optional: false, required: false
  public get onClause() {
    return this.getStringAttribute('on_clause');
  }

  // right_join_key_properties - computed: true, optional: false, required: false
  private _rightJoinKeyProperties = new DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference(this, "right_join_key_properties");
  public get rightJoinKeyProperties() {
    return this._rightJoinKeyProperties;
  }

  // right_operand - computed: true, optional: false, required: false
  public get rightOperand() {
    return this.getStringAttribute('right_operand');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccQuicksightDataSetLogicalTableMapSource {
}

export function dataAwsccQuicksightDataSetLogicalTableMapSourceToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSetLogicalTableMapSourceToHclTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSetLogicalTableMapSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSetLogicalTableMapSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSetLogicalTableMapSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_set_arn - computed: true, optional: false, required: false
  public get dataSetArn() {
    return this.getStringAttribute('data_set_arn');
  }

  // join_instruction - computed: true, optional: false, required: false
  private _joinInstruction = new DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference(this, "join_instruction");
  public get joinInstruction() {
    return this._joinInstruction;
  }

  // physical_table_id - computed: true, optional: false, required: false
  public get physicalTableId() {
    return this.getStringAttribute('physical_table_id');
  }
}
export interface DataAwsccQuicksightDataSetLogicalTableMap {
}

export function dataAwsccQuicksightDataSetLogicalTableMapToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMap): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSetLogicalTableMapToHclTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMap): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSetLogicalTableMapOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataAwsccQuicksightDataSetLogicalTableMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSetLogicalTableMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // data_transforms - computed: true, optional: false, required: false
  private _dataTransforms = new DataAwsccQuicksightDataSetLogicalTableMapDataTransformsList(this, "data_transforms", false);
  public get dataTransforms() {
    return this._dataTransforms;
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataAwsccQuicksightDataSetLogicalTableMapSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
}

export class DataAwsccQuicksightDataSetLogicalTableMapMap extends cdktn.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute);
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataAwsccQuicksightDataSetLogicalTableMapOutputReference {
    return new DataAwsccQuicksightDataSetLogicalTableMapOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataAwsccQuicksightDataSetOutputColumns {
}

export function dataAwsccQuicksightDataSetOutputColumnsToTerraform(struct?: DataAwsccQuicksightDataSetOutputColumns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSetOutputColumnsToHclTerraform(struct?: DataAwsccQuicksightDataSetOutputColumns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSetOutputColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccQuicksightDataSetOutputColumns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSetOutputColumns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccQuicksightDataSetOutputColumnsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccQuicksightDataSetOutputColumnsOutputReference {
    return new DataAwsccQuicksightDataSetOutputColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccQuicksightDataSetPermissions {
}

export function dataAwsccQuicksightDataSetPermissionsToTerraform(struct?: DataAwsccQuicksightDataSetPermissions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSetPermissionsToHclTerraform(struct?: DataAwsccQuicksightDataSetPermissions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSetPermissionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccQuicksightDataSetPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSetPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  public get actions() {
    return this.getListAttribute('actions');
  }

  // principal - computed: true, optional: false, required: false
  public get principal() {
    return this.getStringAttribute('principal');
  }
}

export class DataAwsccQuicksightDataSetPermissionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccQuicksightDataSetPermissionsOutputReference {
    return new DataAwsccQuicksightDataSetPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccQuicksightDataSetPhysicalTableMapCustomSqlColumns {
}

export function dataAwsccQuicksightDataSetPhysicalTableMapCustomSqlColumnsToTerraform(struct?: DataAwsccQuicksightDataSetPhysicalTableMapCustomSqlColumns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSetPhysicalTableMapCustomSqlColumnsToHclTerraform(struct?: DataAwsccQuicksightDataSetPhysicalTableMapCustomSqlColumns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccQuicksightDataSetPhysicalTableMapCustomSqlColumns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSetPhysicalTableMapCustomSqlColumns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccQuicksightDataSetPhysicalTableMapCustomSqlColumnsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference {
    return new DataAwsccQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccQuicksightDataSetPhysicalTableMapCustomSql {
}

export function dataAwsccQuicksightDataSetPhysicalTableMapCustomSqlToTerraform(struct?: DataAwsccQuicksightDataSetPhysicalTableMapCustomSql): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSetPhysicalTableMapCustomSqlToHclTerraform(struct?: DataAwsccQuicksightDataSetPhysicalTableMapCustomSql): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSetPhysicalTableMapCustomSqlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSetPhysicalTableMapCustomSql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSetPhysicalTableMapCustomSql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // columns - computed: true, optional: false, required: false
  private _columns = new DataAwsccQuicksightDataSetPhysicalTableMapCustomSqlColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }

  // data_source_arn - computed: true, optional: false, required: false
  public get dataSourceArn() {
    return this.getStringAttribute('data_source_arn');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sql_query - computed: true, optional: false, required: false
  public get sqlQuery() {
    return this.getStringAttribute('sql_query');
  }
}
export interface DataAwsccQuicksightDataSetPhysicalTableMapRelationalTableInputColumns {
}

export function dataAwsccQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsToTerraform(struct?: DataAwsccQuicksightDataSetPhysicalTableMapRelationalTableInputColumns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsToHclTerraform(struct?: DataAwsccQuicksightDataSetPhysicalTableMapRelationalTableInputColumns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccQuicksightDataSetPhysicalTableMapRelationalTableInputColumns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSetPhysicalTableMapRelationalTableInputColumns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference {
    return new DataAwsccQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccQuicksightDataSetPhysicalTableMapRelationalTable {
}

export function dataAwsccQuicksightDataSetPhysicalTableMapRelationalTableToTerraform(struct?: DataAwsccQuicksightDataSetPhysicalTableMapRelationalTable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSetPhysicalTableMapRelationalTableToHclTerraform(struct?: DataAwsccQuicksightDataSetPhysicalTableMapRelationalTable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSetPhysicalTableMapRelationalTableOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSetPhysicalTableMapRelationalTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSetPhysicalTableMapRelationalTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // catalog - computed: true, optional: false, required: false
  public get catalog() {
    return this.getStringAttribute('catalog');
  }

  // data_source_arn - computed: true, optional: false, required: false
  public get dataSourceArn() {
    return this.getStringAttribute('data_source_arn');
  }

  // input_columns - computed: true, optional: false, required: false
  private _inputColumns = new DataAwsccQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList(this, "input_columns", false);
  public get inputColumns() {
    return this._inputColumns;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // schema - computed: true, optional: false, required: false
  public get schema() {
    return this.getStringAttribute('schema');
  }
}
export interface DataAwsccQuicksightDataSetPhysicalTableMapS3SourceInputColumns {
}

export function dataAwsccQuicksightDataSetPhysicalTableMapS3SourceInputColumnsToTerraform(struct?: DataAwsccQuicksightDataSetPhysicalTableMapS3SourceInputColumns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSetPhysicalTableMapS3SourceInputColumnsToHclTerraform(struct?: DataAwsccQuicksightDataSetPhysicalTableMapS3SourceInputColumns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccQuicksightDataSetPhysicalTableMapS3SourceInputColumns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSetPhysicalTableMapS3SourceInputColumns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference {
    return new DataAwsccQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccQuicksightDataSetPhysicalTableMapS3SourceUploadSettings {
}

export function dataAwsccQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsToTerraform(struct?: DataAwsccQuicksightDataSetPhysicalTableMapS3SourceUploadSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsToHclTerraform(struct?: DataAwsccQuicksightDataSetPhysicalTableMapS3SourceUploadSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSetPhysicalTableMapS3SourceUploadSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSetPhysicalTableMapS3SourceUploadSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // contains_header - computed: true, optional: false, required: false
  public get containsHeader() {
    return this.getBooleanAttribute('contains_header');
  }

  // delimiter - computed: true, optional: false, required: false
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // start_from_row - computed: true, optional: false, required: false
  public get startFromRow() {
    return this.getNumberAttribute('start_from_row');
  }

  // text_qualifier - computed: true, optional: false, required: false
  public get textQualifier() {
    return this.getStringAttribute('text_qualifier');
  }
}
export interface DataAwsccQuicksightDataSetPhysicalTableMapS3Source {
}

export function dataAwsccQuicksightDataSetPhysicalTableMapS3SourceToTerraform(struct?: DataAwsccQuicksightDataSetPhysicalTableMapS3Source): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSetPhysicalTableMapS3SourceToHclTerraform(struct?: DataAwsccQuicksightDataSetPhysicalTableMapS3Source): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSetPhysicalTableMapS3SourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSetPhysicalTableMapS3Source | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSetPhysicalTableMapS3Source | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_source_arn - computed: true, optional: false, required: false
  public get dataSourceArn() {
    return this.getStringAttribute('data_source_arn');
  }

  // input_columns - computed: true, optional: false, required: false
  private _inputColumns = new DataAwsccQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList(this, "input_columns", false);
  public get inputColumns() {
    return this._inputColumns;
  }

  // upload_settings - computed: true, optional: false, required: false
  private _uploadSettings = new DataAwsccQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference(this, "upload_settings");
  public get uploadSettings() {
    return this._uploadSettings;
  }
}
export interface DataAwsccQuicksightDataSetPhysicalTableMap {
}

export function dataAwsccQuicksightDataSetPhysicalTableMapToTerraform(struct?: DataAwsccQuicksightDataSetPhysicalTableMap): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSetPhysicalTableMapToHclTerraform(struct?: DataAwsccQuicksightDataSetPhysicalTableMap): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSetPhysicalTableMapOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataAwsccQuicksightDataSetPhysicalTableMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSetPhysicalTableMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_sql - computed: true, optional: false, required: false
  private _customSql = new DataAwsccQuicksightDataSetPhysicalTableMapCustomSqlOutputReference(this, "custom_sql");
  public get customSql() {
    return this._customSql;
  }

  // relational_table - computed: true, optional: false, required: false
  private _relationalTable = new DataAwsccQuicksightDataSetPhysicalTableMapRelationalTableOutputReference(this, "relational_table");
  public get relationalTable() {
    return this._relationalTable;
  }

  // s3_source - computed: true, optional: false, required: false
  private _s3Source = new DataAwsccQuicksightDataSetPhysicalTableMapS3SourceOutputReference(this, "s3_source");
  public get s3Source() {
    return this._s3Source;
  }
}

export class DataAwsccQuicksightDataSetPhysicalTableMapMap extends cdktn.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute);
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataAwsccQuicksightDataSetPhysicalTableMapOutputReference {
    return new DataAwsccQuicksightDataSetPhysicalTableMapOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataAwsccQuicksightDataSetRowLevelPermissionDataSet {
}

export function dataAwsccQuicksightDataSetRowLevelPermissionDataSetToTerraform(struct?: DataAwsccQuicksightDataSetRowLevelPermissionDataSet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSetRowLevelPermissionDataSetToHclTerraform(struct?: DataAwsccQuicksightDataSetRowLevelPermissionDataSet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSetRowLevelPermissionDataSetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSetRowLevelPermissionDataSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSetRowLevelPermissionDataSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // format_version - computed: true, optional: false, required: false
  public get formatVersion() {
    return this.getStringAttribute('format_version');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // permission_policy - computed: true, optional: false, required: false
  public get permissionPolicy() {
    return this.getStringAttribute('permission_policy');
  }
}
export interface DataAwsccQuicksightDataSetTags {
}

export function dataAwsccQuicksightDataSetTagsToTerraform(struct?: DataAwsccQuicksightDataSetTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSetTagsToHclTerraform(struct?: DataAwsccQuicksightDataSetTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSetTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccQuicksightDataSetTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSetTags | undefined) {
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

export class DataAwsccQuicksightDataSetTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccQuicksightDataSetTagsOutputReference {
    return new DataAwsccQuicksightDataSetTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/quicksight_data_set awscc_quicksight_data_set}
*/
export class DataAwsccQuicksightDataSet extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_quicksight_data_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccQuicksightDataSet resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccQuicksightDataSet to import
  * @param importFromId The id of the existing DataAwsccQuicksightDataSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/quicksight_data_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccQuicksightDataSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_quicksight_data_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/quicksight_data_set awscc_quicksight_data_set} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccQuicksightDataSetConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccQuicksightDataSetConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_quicksight_data_set',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_account_id - computed: true, optional: false, required: false
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }

  // column_groups - computed: true, optional: false, required: false
  private _columnGroups = new DataAwsccQuicksightDataSetColumnGroupsList(this, "column_groups", false);
  public get columnGroups() {
    return this._columnGroups;
  }

  // column_level_permission_rules - computed: true, optional: false, required: false
  private _columnLevelPermissionRules = new DataAwsccQuicksightDataSetColumnLevelPermissionRulesList(this, "column_level_permission_rules", false);
  public get columnLevelPermissionRules() {
    return this._columnLevelPermissionRules;
  }

  // consumed_spice_capacity_in_bytes - computed: true, optional: false, required: false
  public get consumedSpiceCapacityInBytes() {
    return this.getNumberAttribute('consumed_spice_capacity_in_bytes');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // data_set_id - computed: true, optional: false, required: false
  public get dataSetId() {
    return this.getStringAttribute('data_set_id');
  }

  // data_set_usage_configuration - computed: true, optional: false, required: false
  private _dataSetUsageConfiguration = new DataAwsccQuicksightDataSetDataSetUsageConfigurationOutputReference(this, "data_set_usage_configuration");
  public get dataSetUsageConfiguration() {
    return this._dataSetUsageConfiguration;
  }

  // field_folders - computed: true, optional: false, required: false
  private _fieldFolders = new DataAwsccQuicksightDataSetFieldFoldersMap(this, "field_folders");
  public get fieldFolders() {
    return this._fieldFolders;
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

  // import_mode - computed: true, optional: false, required: false
  public get importMode() {
    return this.getStringAttribute('import_mode');
  }

  // ingestion_wait_policy - computed: true, optional: false, required: false
  private _ingestionWaitPolicy = new DataAwsccQuicksightDataSetIngestionWaitPolicyOutputReference(this, "ingestion_wait_policy");
  public get ingestionWaitPolicy() {
    return this._ingestionWaitPolicy;
  }

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }

  // logical_table_map - computed: true, optional: false, required: false
  private _logicalTableMap = new DataAwsccQuicksightDataSetLogicalTableMapMap(this, "logical_table_map");
  public get logicalTableMap() {
    return this._logicalTableMap;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // output_columns - computed: true, optional: false, required: false
  private _outputColumns = new DataAwsccQuicksightDataSetOutputColumnsList(this, "output_columns", false);
  public get outputColumns() {
    return this._outputColumns;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataAwsccQuicksightDataSetPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // physical_table_map - computed: true, optional: false, required: false
  private _physicalTableMap = new DataAwsccQuicksightDataSetPhysicalTableMapMap(this, "physical_table_map");
  public get physicalTableMap() {
    return this._physicalTableMap;
  }

  // row_level_permission_data_set - computed: true, optional: false, required: false
  private _rowLevelPermissionDataSet = new DataAwsccQuicksightDataSetRowLevelPermissionDataSetOutputReference(this, "row_level_permission_data_set");
  public get rowLevelPermissionDataSet() {
    return this._rowLevelPermissionDataSet;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccQuicksightDataSetTagsList(this, "tags", false);
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
