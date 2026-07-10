// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/omics_annotation_store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccOmicsAnnotationStoreConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/omics_annotation_store#id DataAwsccOmicsAnnotationStore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccOmicsAnnotationStoreReference {
}

export function dataAwsccOmicsAnnotationStoreReferenceToTerraform(struct?: DataAwsccOmicsAnnotationStoreReference): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOmicsAnnotationStoreReferenceToHclTerraform(struct?: DataAwsccOmicsAnnotationStoreReference): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOmicsAnnotationStoreReferenceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOmicsAnnotationStoreReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOmicsAnnotationStoreReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // reference_arn - computed: true, optional: false, required: false
  public get referenceArn() {
    return this.getStringAttribute('reference_arn');
  }
}
export interface DataAwsccOmicsAnnotationStoreSseConfig {
}

export function dataAwsccOmicsAnnotationStoreSseConfigToTerraform(struct?: DataAwsccOmicsAnnotationStoreSseConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOmicsAnnotationStoreSseConfigToHclTerraform(struct?: DataAwsccOmicsAnnotationStoreSseConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOmicsAnnotationStoreSseConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOmicsAnnotationStoreSseConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOmicsAnnotationStoreSseConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_arn - computed: true, optional: false, required: false
  public get keyArn() {
    return this.getStringAttribute('key_arn');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptions {
}

export function dataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsToTerraform(struct?: DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsToHclTerraform(struct?: DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // annotation_type - computed: true, optional: false, required: false
  public get annotationType() {
    return this.getStringAttribute('annotation_type');
  }

  // format_to_header - computed: true, optional: false, required: false
  private _formatToHeader = new cdktn.StringMap(this, "format_to_header");
  public get formatToHeader() {
    return this._formatToHeader;
  }

  // schema - computed: true, optional: false, required: false
  private _schema = new cdktn.StringMapList(this, "schema", false);
  public get schema() {
    return this._schema;
  }
}
export interface DataAwsccOmicsAnnotationStoreStoreOptions {
}

export function dataAwsccOmicsAnnotationStoreStoreOptionsToTerraform(struct?: DataAwsccOmicsAnnotationStoreStoreOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOmicsAnnotationStoreStoreOptionsToHclTerraform(struct?: DataAwsccOmicsAnnotationStoreStoreOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOmicsAnnotationStoreStoreOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOmicsAnnotationStoreStoreOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tsv_store_options - computed: true, optional: false, required: false
  private _tsvStoreOptions = new DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference(this, "tsv_store_options");
  public get tsvStoreOptions() {
    return this._tsvStoreOptions;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/omics_annotation_store awscc_omics_annotation_store}
*/
export class DataAwsccOmicsAnnotationStore extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_omics_annotation_store";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccOmicsAnnotationStore resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccOmicsAnnotationStore to import
  * @param importFromId The id of the existing DataAwsccOmicsAnnotationStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/omics_annotation_store#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccOmicsAnnotationStore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_omics_annotation_store", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/omics_annotation_store awscc_omics_annotation_store} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccOmicsAnnotationStoreConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccOmicsAnnotationStoreConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_omics_annotation_store',
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

  // annotation_store_id - computed: true, optional: false, required: false
  public get annotationStoreId() {
    return this.getStringAttribute('annotation_store_id');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // reference - computed: true, optional: false, required: false
  private _reference = new DataAwsccOmicsAnnotationStoreReferenceOutputReference(this, "reference");
  public get reference() {
    return this._reference;
  }

  // sse_config - computed: true, optional: false, required: false
  private _sseConfig = new DataAwsccOmicsAnnotationStoreSseConfigOutputReference(this, "sse_config");
  public get sseConfig() {
    return this._sseConfig;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // store_arn - computed: true, optional: false, required: false
  public get storeArn() {
    return this.getStringAttribute('store_arn');
  }

  // store_format - computed: true, optional: false, required: false
  public get storeFormat() {
    return this.getStringAttribute('store_format');
  }

  // store_options - computed: true, optional: false, required: false
  private _storeOptions = new DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference(this, "store_options");
  public get storeOptions() {
    return this._storeOptions;
  }

  // store_size_bytes - computed: true, optional: false, required: false
  public get storeSizeBytes() {
    return this.getNumberAttribute('store_size_bytes');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
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
