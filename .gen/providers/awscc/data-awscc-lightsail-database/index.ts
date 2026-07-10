// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/lightsail_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccLightsailDatabaseConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/lightsail_database#id DataAwsccLightsailDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccLightsailDatabaseRelationalDatabaseParameters {
}

export function dataAwsccLightsailDatabaseRelationalDatabaseParametersToTerraform(struct?: DataAwsccLightsailDatabaseRelationalDatabaseParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLightsailDatabaseRelationalDatabaseParametersToHclTerraform(struct?: DataAwsccLightsailDatabaseRelationalDatabaseParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLightsailDatabaseRelationalDatabaseParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLightsailDatabaseRelationalDatabaseParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLightsailDatabaseRelationalDatabaseParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return this.getStringAttribute('allowed_values');
  }

  // apply_method - computed: true, optional: false, required: false
  public get applyMethod() {
    return this.getStringAttribute('apply_method');
  }

  // apply_type - computed: true, optional: false, required: false
  public get applyType() {
    return this.getStringAttribute('apply_type');
  }

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // is_modifiable - computed: true, optional: false, required: false
  public get isModifiable() {
    return this.getBooleanAttribute('is_modifiable');
  }

  // parameter_name - computed: true, optional: false, required: false
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }

  // parameter_value - computed: true, optional: false, required: false
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
}

export class DataAwsccLightsailDatabaseRelationalDatabaseParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLightsailDatabaseRelationalDatabaseParametersOutputReference {
    return new DataAwsccLightsailDatabaseRelationalDatabaseParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLightsailDatabaseTags {
}

export function dataAwsccLightsailDatabaseTagsToTerraform(struct?: DataAwsccLightsailDatabaseTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLightsailDatabaseTagsToHclTerraform(struct?: DataAwsccLightsailDatabaseTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLightsailDatabaseTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLightsailDatabaseTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLightsailDatabaseTags | undefined) {
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

export class DataAwsccLightsailDatabaseTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLightsailDatabaseTagsOutputReference {
    return new DataAwsccLightsailDatabaseTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/lightsail_database awscc_lightsail_database}
*/
export class DataAwsccLightsailDatabase extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_lightsail_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccLightsailDatabase resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccLightsailDatabase to import
  * @param importFromId The id of the existing DataAwsccLightsailDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/lightsail_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccLightsailDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lightsail_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/lightsail_database awscc_lightsail_database} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccLightsailDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccLightsailDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_lightsail_database',
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

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // backup_retention - computed: true, optional: false, required: false
  public get backupRetention() {
    return this.getBooleanAttribute('backup_retention');
  }

  // ca_certificate_identifier - computed: true, optional: false, required: false
  public get caCertificateIdentifier() {
    return this.getStringAttribute('ca_certificate_identifier');
  }

  // database_arn - computed: true, optional: false, required: false
  public get databaseArn() {
    return this.getStringAttribute('database_arn');
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

  // master_database_name - computed: true, optional: false, required: false
  public get masterDatabaseName() {
    return this.getStringAttribute('master_database_name');
  }

  // master_user_password - computed: true, optional: false, required: false
  public get masterUserPassword() {
    return this.getStringAttribute('master_user_password');
  }

  // master_username - computed: true, optional: false, required: false
  public get masterUsername() {
    return this.getStringAttribute('master_username');
  }

  // preferred_backup_window - computed: true, optional: false, required: false
  public get preferredBackupWindow() {
    return this.getStringAttribute('preferred_backup_window');
  }

  // preferred_maintenance_window - computed: true, optional: false, required: false
  public get preferredMaintenanceWindow() {
    return this.getStringAttribute('preferred_maintenance_window');
  }

  // publicly_accessible - computed: true, optional: false, required: false
  public get publiclyAccessible() {
    return this.getBooleanAttribute('publicly_accessible');
  }

  // relational_database_blueprint_id - computed: true, optional: false, required: false
  public get relationalDatabaseBlueprintId() {
    return this.getStringAttribute('relational_database_blueprint_id');
  }

  // relational_database_bundle_id - computed: true, optional: false, required: false
  public get relationalDatabaseBundleId() {
    return this.getStringAttribute('relational_database_bundle_id');
  }

  // relational_database_name - computed: true, optional: false, required: false
  public get relationalDatabaseName() {
    return this.getStringAttribute('relational_database_name');
  }

  // relational_database_parameters - computed: true, optional: false, required: false
  private _relationalDatabaseParameters = new DataAwsccLightsailDatabaseRelationalDatabaseParametersList(this, "relational_database_parameters", true);
  public get relationalDatabaseParameters() {
    return this._relationalDatabaseParameters;
  }

  // rotate_master_user_password - computed: true, optional: false, required: false
  public get rotateMasterUserPassword() {
    return this.getBooleanAttribute('rotate_master_user_password');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccLightsailDatabaseTagsList(this, "tags", true);
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
