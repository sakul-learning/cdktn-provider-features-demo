// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/fsx_data_repository_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccFsxDataRepositoryAssociationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/fsx_data_repository_association#id DataAwsccFsxDataRepositoryAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicy {
}

export function dataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyToTerraform(struct?: DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyToHclTerraform(struct?: DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // events - computed: true, optional: false, required: false
  public get events() {
    return cdktn.Fn.tolist(this.getListAttribute('events'));
  }
}
export interface DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicy {
}

export function dataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyToTerraform(struct?: DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyToHclTerraform(struct?: DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // events - computed: true, optional: false, required: false
  public get events() {
    return cdktn.Fn.tolist(this.getListAttribute('events'));
  }
}
export interface DataAwsccFsxDataRepositoryAssociationS3 {
}

export function dataAwsccFsxDataRepositoryAssociationS3ToTerraform(struct?: DataAwsccFsxDataRepositoryAssociationS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFsxDataRepositoryAssociationS3ToHclTerraform(struct?: DataAwsccFsxDataRepositoryAssociationS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFsxDataRepositoryAssociationS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccFsxDataRepositoryAssociationS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFsxDataRepositoryAssociationS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_export_policy - computed: true, optional: false, required: false
  private _autoExportPolicy = new DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference(this, "auto_export_policy");
  public get autoExportPolicy() {
    return this._autoExportPolicy;
  }

  // auto_import_policy - computed: true, optional: false, required: false
  private _autoImportPolicy = new DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference(this, "auto_import_policy");
  public get autoImportPolicy() {
    return this._autoImportPolicy;
  }
}
export interface DataAwsccFsxDataRepositoryAssociationTags {
}

export function dataAwsccFsxDataRepositoryAssociationTagsToTerraform(struct?: DataAwsccFsxDataRepositoryAssociationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFsxDataRepositoryAssociationTagsToHclTerraform(struct?: DataAwsccFsxDataRepositoryAssociationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFsxDataRepositoryAssociationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccFsxDataRepositoryAssociationTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFsxDataRepositoryAssociationTags | undefined) {
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

export class DataAwsccFsxDataRepositoryAssociationTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccFsxDataRepositoryAssociationTagsOutputReference {
    return new DataAwsccFsxDataRepositoryAssociationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/fsx_data_repository_association awscc_fsx_data_repository_association}
*/
export class DataAwsccFsxDataRepositoryAssociation extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_fsx_data_repository_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccFsxDataRepositoryAssociation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccFsxDataRepositoryAssociation to import
  * @param importFromId The id of the existing DataAwsccFsxDataRepositoryAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/fsx_data_repository_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccFsxDataRepositoryAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_fsx_data_repository_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/fsx_data_repository_association awscc_fsx_data_repository_association} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccFsxDataRepositoryAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccFsxDataRepositoryAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_fsx_data_repository_association',
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

  // association_id - computed: true, optional: false, required: false
  public get associationId() {
    return this.getStringAttribute('association_id');
  }

  // batch_import_meta_data_on_create - computed: true, optional: false, required: false
  public get batchImportMetaDataOnCreate() {
    return this.getBooleanAttribute('batch_import_meta_data_on_create');
  }

  // data_repository_path - computed: true, optional: false, required: false
  public get dataRepositoryPath() {
    return this.getStringAttribute('data_repository_path');
  }

  // file_system_id - computed: true, optional: false, required: false
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }

  // file_system_path - computed: true, optional: false, required: false
  public get fileSystemPath() {
    return this.getStringAttribute('file_system_path');
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

  // imported_file_chunk_size - computed: true, optional: false, required: false
  public get importedFileChunkSize() {
    return this.getNumberAttribute('imported_file_chunk_size');
  }

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }

  // s3 - computed: true, optional: false, required: false
  private _s3 = new DataAwsccFsxDataRepositoryAssociationS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccFsxDataRepositoryAssociationTagsList(this, "tags", false);
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
