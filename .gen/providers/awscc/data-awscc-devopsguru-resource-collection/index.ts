// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/devopsguru_resource_collection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccDevopsguruResourceCollectionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/devopsguru_resource_collection#id DataAwsccDevopsguruResourceCollection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformation {
}

export function dataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationToTerraform(struct?: DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationToHclTerraform(struct?: DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // stack_names - computed: true, optional: false, required: false
  public get stackNames() {
    return this.getListAttribute('stack_names');
  }
}
export interface DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTags {
}

export function dataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsToTerraform(struct?: DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsToHclTerraform(struct?: DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_boundary_key - computed: true, optional: false, required: false
  public get appBoundaryKey() {
    return this.getStringAttribute('app_boundary_key');
  }

  // tag_values - computed: true, optional: false, required: false
  public get tagValues() {
    return this.getListAttribute('tag_values');
  }
}

export class DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference {
    return new DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDevopsguruResourceCollectionResourceCollectionFilter {
}

export function dataAwsccDevopsguruResourceCollectionResourceCollectionFilterToTerraform(struct?: DataAwsccDevopsguruResourceCollectionResourceCollectionFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsguruResourceCollectionResourceCollectionFilterToHclTerraform(struct?: DataAwsccDevopsguruResourceCollectionResourceCollectionFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsguruResourceCollectionResourceCollectionFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsguruResourceCollectionResourceCollectionFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudformation - computed: true, optional: false, required: false
  private _cloudformation = new DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference(this, "cloudformation");
  public get cloudformation() {
    return this._cloudformation;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/devopsguru_resource_collection awscc_devopsguru_resource_collection}
*/
export class DataAwsccDevopsguruResourceCollection extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_devopsguru_resource_collection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccDevopsguruResourceCollection resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccDevopsguruResourceCollection to import
  * @param importFromId The id of the existing DataAwsccDevopsguruResourceCollection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/devopsguru_resource_collection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccDevopsguruResourceCollection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_devopsguru_resource_collection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/devopsguru_resource_collection awscc_devopsguru_resource_collection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccDevopsguruResourceCollectionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccDevopsguruResourceCollectionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_devopsguru_resource_collection',
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

  // resource_collection_filter - computed: true, optional: false, required: false
  private _resourceCollectionFilter = new DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference(this, "resource_collection_filter");
  public get resourceCollectionFilter() {
    return this._resourceCollectionFilter;
  }

  // resource_collection_type - computed: true, optional: false, required: false
  public get resourceCollectionType() {
    return this.getStringAttribute('resource_collection_type');
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
