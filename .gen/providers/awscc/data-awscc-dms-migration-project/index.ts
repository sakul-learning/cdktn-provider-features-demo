// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/dms_migration_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccDmsMigrationProjectConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/dms_migration_project#id DataAwsccDmsMigrationProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributes {
}

export function dataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesToTerraform(struct?: DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesToHclTerraform(struct?: DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_bucket_path - computed: true, optional: false, required: false
  public get s3BucketPath() {
    return this.getStringAttribute('s3_bucket_path');
  }

  // s3_bucket_role_arn - computed: true, optional: false, required: false
  public get s3BucketRoleArn() {
    return this.getStringAttribute('s3_bucket_role_arn');
  }
}
export interface DataAwsccDmsMigrationProjectSourceDataProviderDescriptors {
}

export function dataAwsccDmsMigrationProjectSourceDataProviderDescriptorsToTerraform(struct?: DataAwsccDmsMigrationProjectSourceDataProviderDescriptors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDmsMigrationProjectSourceDataProviderDescriptorsToHclTerraform(struct?: DataAwsccDmsMigrationProjectSourceDataProviderDescriptors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDmsMigrationProjectSourceDataProviderDescriptors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDmsMigrationProjectSourceDataProviderDescriptors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_provider_arn - computed: true, optional: false, required: false
  public get dataProviderArn() {
    return this.getStringAttribute('data_provider_arn');
  }

  // data_provider_identifier - computed: true, optional: false, required: false
  public get dataProviderIdentifier() {
    return this.getStringAttribute('data_provider_identifier');
  }

  // data_provider_name - computed: true, optional: false, required: false
  public get dataProviderName() {
    return this.getStringAttribute('data_provider_name');
  }

  // secrets_manager_access_role_arn - computed: true, optional: false, required: false
  public get secretsManagerAccessRoleArn() {
    return this.getStringAttribute('secrets_manager_access_role_arn');
  }

  // secrets_manager_secret_id - computed: true, optional: false, required: false
  public get secretsManagerSecretId() {
    return this.getStringAttribute('secrets_manager_secret_id');
  }
}

export class DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference {
    return new DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDmsMigrationProjectTags {
}

export function dataAwsccDmsMigrationProjectTagsToTerraform(struct?: DataAwsccDmsMigrationProjectTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDmsMigrationProjectTagsToHclTerraform(struct?: DataAwsccDmsMigrationProjectTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDmsMigrationProjectTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDmsMigrationProjectTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDmsMigrationProjectTags | undefined) {
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

export class DataAwsccDmsMigrationProjectTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDmsMigrationProjectTagsOutputReference {
    return new DataAwsccDmsMigrationProjectTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDmsMigrationProjectTargetDataProviderDescriptors {
}

export function dataAwsccDmsMigrationProjectTargetDataProviderDescriptorsToTerraform(struct?: DataAwsccDmsMigrationProjectTargetDataProviderDescriptors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDmsMigrationProjectTargetDataProviderDescriptorsToHclTerraform(struct?: DataAwsccDmsMigrationProjectTargetDataProviderDescriptors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDmsMigrationProjectTargetDataProviderDescriptors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDmsMigrationProjectTargetDataProviderDescriptors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_provider_arn - computed: true, optional: false, required: false
  public get dataProviderArn() {
    return this.getStringAttribute('data_provider_arn');
  }

  // data_provider_identifier - computed: true, optional: false, required: false
  public get dataProviderIdentifier() {
    return this.getStringAttribute('data_provider_identifier');
  }

  // data_provider_name - computed: true, optional: false, required: false
  public get dataProviderName() {
    return this.getStringAttribute('data_provider_name');
  }

  // secrets_manager_access_role_arn - computed: true, optional: false, required: false
  public get secretsManagerAccessRoleArn() {
    return this.getStringAttribute('secrets_manager_access_role_arn');
  }

  // secrets_manager_secret_id - computed: true, optional: false, required: false
  public get secretsManagerSecretId() {
    return this.getStringAttribute('secrets_manager_secret_id');
  }
}

export class DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference {
    return new DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/dms_migration_project awscc_dms_migration_project}
*/
export class DataAwsccDmsMigrationProject extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_dms_migration_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccDmsMigrationProject resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccDmsMigrationProject to import
  * @param importFromId The id of the existing DataAwsccDmsMigrationProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/dms_migration_project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccDmsMigrationProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_dms_migration_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/dms_migration_project awscc_dms_migration_project} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccDmsMigrationProjectConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccDmsMigrationProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_dms_migration_project',
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // instance_profile_arn - computed: true, optional: false, required: false
  public get instanceProfileArn() {
    return this.getStringAttribute('instance_profile_arn');
  }

  // instance_profile_identifier - computed: true, optional: false, required: false
  public get instanceProfileIdentifier() {
    return this.getStringAttribute('instance_profile_identifier');
  }

  // instance_profile_name - computed: true, optional: false, required: false
  public get instanceProfileName() {
    return this.getStringAttribute('instance_profile_name');
  }

  // migration_project_arn - computed: true, optional: false, required: false
  public get migrationProjectArn() {
    return this.getStringAttribute('migration_project_arn');
  }

  // migration_project_creation_time - computed: true, optional: false, required: false
  public get migrationProjectCreationTime() {
    return this.getStringAttribute('migration_project_creation_time');
  }

  // migration_project_identifier - computed: true, optional: false, required: false
  public get migrationProjectIdentifier() {
    return this.getStringAttribute('migration_project_identifier');
  }

  // migration_project_name - computed: true, optional: false, required: false
  public get migrationProjectName() {
    return this.getStringAttribute('migration_project_name');
  }

  // schema_conversion_application_attributes - computed: true, optional: false, required: false
  private _schemaConversionApplicationAttributes = new DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference(this, "schema_conversion_application_attributes");
  public get schemaConversionApplicationAttributes() {
    return this._schemaConversionApplicationAttributes;
  }

  // source_data_provider_descriptors - computed: true, optional: false, required: false
  private _sourceDataProviderDescriptors = new DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList(this, "source_data_provider_descriptors", true);
  public get sourceDataProviderDescriptors() {
    return this._sourceDataProviderDescriptors;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccDmsMigrationProjectTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // target_data_provider_descriptors - computed: true, optional: false, required: false
  private _targetDataProviderDescriptors = new DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList(this, "target_data_provider_descriptors", true);
  public get targetDataProviderDescriptors() {
    return this._targetDataProviderDescriptors;
  }

  // transformation_rules - computed: true, optional: false, required: false
  public get transformationRules() {
    return this.getStringAttribute('transformation_rules');
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
