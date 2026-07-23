// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/dms_data_migration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccDmsDataMigrationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/dms_data_migration#id DataAwsccDmsDataMigration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccDmsDataMigrationDataMigrationSettings {
}

export function dataAwsccDmsDataMigrationDataMigrationSettingsToTerraform(struct?: DataAwsccDmsDataMigrationDataMigrationSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDmsDataMigrationDataMigrationSettingsToHclTerraform(struct?: DataAwsccDmsDataMigrationDataMigrationSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDmsDataMigrationDataMigrationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDmsDataMigrationDataMigrationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudwatch_logs_enabled - computed: true, optional: false, required: false
  public get cloudwatchLogsEnabled() {
    return this.getBooleanAttribute('cloudwatch_logs_enabled');
  }

  // number_of_jobs - computed: true, optional: false, required: false
  public get numberOfJobs() {
    return this.getNumberAttribute('number_of_jobs');
  }

  // selection_rules - computed: true, optional: false, required: false
  public get selectionRules() {
    return this.getStringAttribute('selection_rules');
  }
}
export interface DataAwsccDmsDataMigrationSourceDataSettings {
}

export function dataAwsccDmsDataMigrationSourceDataSettingsToTerraform(struct?: DataAwsccDmsDataMigrationSourceDataSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDmsDataMigrationSourceDataSettingsToHclTerraform(struct?: DataAwsccDmsDataMigrationSourceDataSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDmsDataMigrationSourceDataSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDmsDataMigrationSourceDataSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDmsDataMigrationSourceDataSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cdc_start_position - computed: true, optional: false, required: false
  public get cdcStartPosition() {
    return this.getStringAttribute('cdc_start_position');
  }

  // cdc_start_time - computed: true, optional: false, required: false
  public get cdcStartTime() {
    return this.getStringAttribute('cdc_start_time');
  }

  // cdc_stop_time - computed: true, optional: false, required: false
  public get cdcStopTime() {
    return this.getStringAttribute('cdc_stop_time');
  }

  // slot_name - computed: true, optional: false, required: false
  public get slotName() {
    return this.getStringAttribute('slot_name');
  }
}

export class DataAwsccDmsDataMigrationSourceDataSettingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDmsDataMigrationSourceDataSettingsOutputReference {
    return new DataAwsccDmsDataMigrationSourceDataSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDmsDataMigrationTags {
}

export function dataAwsccDmsDataMigrationTagsToTerraform(struct?: DataAwsccDmsDataMigrationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDmsDataMigrationTagsToHclTerraform(struct?: DataAwsccDmsDataMigrationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDmsDataMigrationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDmsDataMigrationTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDmsDataMigrationTags | undefined) {
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

export class DataAwsccDmsDataMigrationTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDmsDataMigrationTagsOutputReference {
    return new DataAwsccDmsDataMigrationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/dms_data_migration awscc_dms_data_migration}
*/
export class DataAwsccDmsDataMigration extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_dms_data_migration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccDmsDataMigration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccDmsDataMigration to import
  * @param importFromId The id of the existing DataAwsccDmsDataMigration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/dms_data_migration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccDmsDataMigration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_dms_data_migration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/dms_data_migration awscc_dms_data_migration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccDmsDataMigrationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccDmsDataMigrationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_dms_data_migration',
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

  // data_migration_arn - computed: true, optional: false, required: false
  public get dataMigrationArn() {
    return this.getStringAttribute('data_migration_arn');
  }

  // data_migration_create_time - computed: true, optional: false, required: false
  public get dataMigrationCreateTime() {
    return this.getStringAttribute('data_migration_create_time');
  }

  // data_migration_identifier - computed: true, optional: false, required: false
  public get dataMigrationIdentifier() {
    return this.getStringAttribute('data_migration_identifier');
  }

  // data_migration_name - computed: true, optional: false, required: false
  public get dataMigrationName() {
    return this.getStringAttribute('data_migration_name');
  }

  // data_migration_settings - computed: true, optional: false, required: false
  private _dataMigrationSettings = new DataAwsccDmsDataMigrationDataMigrationSettingsOutputReference(this, "data_migration_settings");
  public get dataMigrationSettings() {
    return this._dataMigrationSettings;
  }

  // data_migration_type - computed: true, optional: false, required: false
  public get dataMigrationType() {
    return this.getStringAttribute('data_migration_type');
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

  // migration_project_identifier - computed: true, optional: false, required: false
  public get migrationProjectIdentifier() {
    return this.getStringAttribute('migration_project_identifier');
  }

  // service_access_role_arn - computed: true, optional: false, required: false
  public get serviceAccessRoleArn() {
    return this.getStringAttribute('service_access_role_arn');
  }

  // source_data_settings - computed: true, optional: false, required: false
  private _sourceDataSettings = new DataAwsccDmsDataMigrationSourceDataSettingsList(this, "source_data_settings", true);
  public get sourceDataSettings() {
    return this._sourceDataSettings;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccDmsDataMigrationTagsList(this, "tags", true);
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
