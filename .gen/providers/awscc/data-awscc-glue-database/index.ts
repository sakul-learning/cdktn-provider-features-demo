// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/glue_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccGlueDatabaseConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/glue_database#id DataAwsccGlueDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal {
}

export function dataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalToTerraform(struct?: DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalToHclTerraform(struct?: DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_lake_principal_identifier - computed: true, optional: false, required: false
  public get dataLakePrincipalIdentifier() {
    return this.getStringAttribute('data_lake_principal_identifier');
  }
}
export interface DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissions {
}

export function dataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsToTerraform(struct?: DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsToHclTerraform(struct?: DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return this.getListAttribute('permissions');
  }

  // principal - computed: true, optional: false, required: false
  private _principal = new DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference(this, "principal");
  public get principal() {
    return this._principal;
  }
}

export class DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference {
    return new DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccGlueDatabaseDatabaseInputFederatedDatabase {
}

export function dataAwsccGlueDatabaseDatabaseInputFederatedDatabaseToTerraform(struct?: DataAwsccGlueDatabaseDatabaseInputFederatedDatabase): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueDatabaseDatabaseInputFederatedDatabaseToHclTerraform(struct?: DataAwsccGlueDatabaseDatabaseInputFederatedDatabase): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueDatabaseDatabaseInputFederatedDatabase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueDatabaseDatabaseInputFederatedDatabase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_name - computed: true, optional: false, required: false
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
}
export interface DataAwsccGlueDatabaseDatabaseInputTargetDatabase {
}

export function dataAwsccGlueDatabaseDatabaseInputTargetDatabaseToTerraform(struct?: DataAwsccGlueDatabaseDatabaseInputTargetDatabase): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueDatabaseDatabaseInputTargetDatabaseToHclTerraform(struct?: DataAwsccGlueDatabaseDatabaseInputTargetDatabase): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueDatabaseDatabaseInputTargetDatabase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueDatabaseDatabaseInputTargetDatabase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // catalog_id - computed: true, optional: false, required: false
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}
export interface DataAwsccGlueDatabaseDatabaseInput {
}

export function dataAwsccGlueDatabaseDatabaseInputToTerraform(struct?: DataAwsccGlueDatabaseDatabaseInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueDatabaseDatabaseInputToHclTerraform(struct?: DataAwsccGlueDatabaseDatabaseInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueDatabaseDatabaseInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueDatabaseDatabaseInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueDatabaseDatabaseInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_table_default_permissions - computed: true, optional: false, required: false
  private _createTableDefaultPermissions = new DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsList(this, "create_table_default_permissions", false);
  public get createTableDefaultPermissions() {
    return this._createTableDefaultPermissions;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // federated_database - computed: true, optional: false, required: false
  private _federatedDatabase = new DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference(this, "federated_database");
  public get federatedDatabase() {
    return this._federatedDatabase;
  }

  // location_uri - computed: true, optional: false, required: false
  public get locationUri() {
    return this.getStringAttribute('location_uri');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parameters - computed: true, optional: false, required: false
  public get parameters() {
    return this.getStringAttribute('parameters');
  }

  // target_database - computed: true, optional: false, required: false
  private _targetDatabase = new DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference(this, "target_database");
  public get targetDatabase() {
    return this._targetDatabase;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/glue_database awscc_glue_database}
*/
export class DataAwsccGlueDatabase extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_glue_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccGlueDatabase resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccGlueDatabase to import
  * @param importFromId The id of the existing DataAwsccGlueDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/glue_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccGlueDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_glue_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/glue_database awscc_glue_database} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccGlueDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccGlueDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_glue_database',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.92.0'
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

  // catalog_id - computed: true, optional: false, required: false
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }

  // database_input - computed: true, optional: false, required: false
  private _databaseInput = new DataAwsccGlueDatabaseDatabaseInputOutputReference(this, "database_input");
  public get databaseInput() {
    return this._databaseInput;
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
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
