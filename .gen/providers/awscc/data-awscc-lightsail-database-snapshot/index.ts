// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/lightsail_database_snapshot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccLightsailDatabaseSnapshotConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/lightsail_database_snapshot#id DataAwsccLightsailDatabaseSnapshot#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccLightsailDatabaseSnapshotLocation {
}

export function dataAwsccLightsailDatabaseSnapshotLocationToTerraform(struct?: DataAwsccLightsailDatabaseSnapshotLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLightsailDatabaseSnapshotLocationToHclTerraform(struct?: DataAwsccLightsailDatabaseSnapshotLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLightsailDatabaseSnapshotLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLightsailDatabaseSnapshotLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLightsailDatabaseSnapshotLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // region_name - computed: true, optional: false, required: false
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
}
export interface DataAwsccLightsailDatabaseSnapshotTags {
}

export function dataAwsccLightsailDatabaseSnapshotTagsToTerraform(struct?: DataAwsccLightsailDatabaseSnapshotTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLightsailDatabaseSnapshotTagsToHclTerraform(struct?: DataAwsccLightsailDatabaseSnapshotTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLightsailDatabaseSnapshotTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLightsailDatabaseSnapshotTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLightsailDatabaseSnapshotTags | undefined) {
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

export class DataAwsccLightsailDatabaseSnapshotTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLightsailDatabaseSnapshotTagsOutputReference {
    return new DataAwsccLightsailDatabaseSnapshotTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/lightsail_database_snapshot awscc_lightsail_database_snapshot}
*/
export class DataAwsccLightsailDatabaseSnapshot extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_lightsail_database_snapshot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccLightsailDatabaseSnapshot resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccLightsailDatabaseSnapshot to import
  * @param importFromId The id of the existing DataAwsccLightsailDatabaseSnapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/lightsail_database_snapshot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccLightsailDatabaseSnapshot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lightsail_database_snapshot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/lightsail_database_snapshot awscc_lightsail_database_snapshot} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccLightsailDatabaseSnapshotConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccLightsailDatabaseSnapshotConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_lightsail_database_snapshot',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.91.0'
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // engine - computed: true, optional: false, required: false
  public get engine() {
    return this.getStringAttribute('engine');
  }

  // engine_version - computed: true, optional: false, required: false
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }

  // from_relational_database_arn - computed: true, optional: false, required: false
  public get fromRelationalDatabaseArn() {
    return this.getStringAttribute('from_relational_database_arn');
  }

  // from_relational_database_blueprint_id - computed: true, optional: false, required: false
  public get fromRelationalDatabaseBlueprintId() {
    return this.getStringAttribute('from_relational_database_blueprint_id');
  }

  // from_relational_database_bundle_id - computed: true, optional: false, required: false
  public get fromRelationalDatabaseBundleId() {
    return this.getStringAttribute('from_relational_database_bundle_id');
  }

  // from_relational_database_name - computed: true, optional: false, required: false
  public get fromRelationalDatabaseName() {
    return this.getStringAttribute('from_relational_database_name');
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

  // location - computed: true, optional: false, required: false
  private _location = new DataAwsccLightsailDatabaseSnapshotLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // relational_database_name - computed: true, optional: false, required: false
  public get relationalDatabaseName() {
    return this.getStringAttribute('relational_database_name');
  }

  // relational_database_snapshot_name - computed: true, optional: false, required: false
  public get relationalDatabaseSnapshotName() {
    return this.getStringAttribute('relational_database_snapshot_name');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // size_in_gb - computed: true, optional: false, required: false
  public get sizeInGb() {
    return this.getNumberAttribute('size_in_gb');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // support_code - computed: true, optional: false, required: false
  public get supportCode() {
    return this.getStringAttribute('support_code');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccLightsailDatabaseSnapshotTagsList(this, "tags", true);
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
