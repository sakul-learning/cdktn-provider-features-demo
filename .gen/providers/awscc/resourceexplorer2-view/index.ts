// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/resourceexplorer2_view
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Resourceexplorer2ViewConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/resourceexplorer2_view#filters Resourceexplorer2View#filters}
  */
  readonly filters?: Resourceexplorer2ViewFilters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/resourceexplorer2_view#included_properties Resourceexplorer2View#included_properties}
  */
  readonly includedProperties?: Resourceexplorer2ViewIncludedProperties[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/resourceexplorer2_view#scope Resourceexplorer2View#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/resourceexplorer2_view#tags Resourceexplorer2View#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/resourceexplorer2_view#view_name Resourceexplorer2View#view_name}
  */
  readonly viewName: string;
}
export interface Resourceexplorer2ViewFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/resourceexplorer2_view#filter_string Resourceexplorer2View#filter_string}
  */
  readonly filterString?: string;
}

export function resourceexplorer2ViewFiltersToTerraform(struct?: Resourceexplorer2ViewFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter_string: cdktn.stringToTerraform(struct!.filterString),
  }
}


export function resourceexplorer2ViewFiltersToHclTerraform(struct?: Resourceexplorer2ViewFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filter_string: {
      value: cdktn.stringToHclTerraform(struct!.filterString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Resourceexplorer2ViewFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Resourceexplorer2ViewFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterString !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterString = this._filterString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Resourceexplorer2ViewFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterString = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterString = value.filterString;
    }
  }

  // filter_string - computed: true, optional: true, required: false
  private _filterString?: string; 
  public get filterString() {
    return this.getStringAttribute('filter_string');
  }
  public set filterString(value: string) {
    this._filterString = value;
  }
  public resetFilterString() {
    this._filterString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterStringInput() {
    return this._filterString;
  }
}
export interface Resourceexplorer2ViewIncludedProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/resourceexplorer2_view#name Resourceexplorer2View#name}
  */
  readonly name?: string;
}

export function resourceexplorer2ViewIncludedPropertiesToTerraform(struct?: Resourceexplorer2ViewIncludedProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function resourceexplorer2ViewIncludedPropertiesToHclTerraform(struct?: Resourceexplorer2ViewIncludedProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Resourceexplorer2ViewIncludedPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Resourceexplorer2ViewIncludedProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Resourceexplorer2ViewIncludedProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class Resourceexplorer2ViewIncludedPropertiesList extends cdktn.ComplexList {
  public internalValue? : Resourceexplorer2ViewIncludedProperties[] | cdktn.IResolvable

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
  public get(index: number): Resourceexplorer2ViewIncludedPropertiesOutputReference {
    return new Resourceexplorer2ViewIncludedPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/resourceexplorer2_view awscc_resourceexplorer2_view}
*/
export class Resourceexplorer2View extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_resourceexplorer2_view";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Resourceexplorer2View resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Resourceexplorer2View to import
  * @param importFromId The id of the existing Resourceexplorer2View that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/resourceexplorer2_view#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Resourceexplorer2View to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_resourceexplorer2_view", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/resourceexplorer2_view awscc_resourceexplorer2_view} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Resourceexplorer2ViewConfig
  */
  public constructor(scope: Construct, id: string, config: Resourceexplorer2ViewConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_resourceexplorer2_view',
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
    this._filters.internalValue = config.filters;
    this._includedProperties.internalValue = config.includedProperties;
    this._scope = config.scope;
    this._tags = config.tags;
    this._viewName = config.viewName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filters - computed: true, optional: true, required: false
  private _filters = new Resourceexplorer2ViewFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: Resourceexplorer2ViewFilters) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // included_properties - computed: true, optional: true, required: false
  private _includedProperties = new Resourceexplorer2ViewIncludedPropertiesList(this, "included_properties", false);
  public get includedProperties() {
    return this._includedProperties;
  }
  public putIncludedProperties(value: Resourceexplorer2ViewIncludedProperties[] | cdktn.IResolvable) {
    this._includedProperties.internalValue = value;
  }
  public resetIncludedProperties() {
    this._includedProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedPropertiesInput() {
    return this._includedProperties.internalValue;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // view_arn - computed: true, optional: false, required: false
  public get viewArn() {
    return this.getStringAttribute('view_arn');
  }

  // view_name - computed: false, optional: false, required: true
  private _viewName?: string; 
  public get viewName() {
    return this.getStringAttribute('view_name');
  }
  public set viewName(value: string) {
    this._viewName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get viewNameInput() {
    return this._viewName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filters: resourceexplorer2ViewFiltersToTerraform(this._filters.internalValue),
      included_properties: cdktn.listMapper(resourceexplorer2ViewIncludedPropertiesToTerraform, false)(this._includedProperties.internalValue),
      scope: cdktn.stringToTerraform(this._scope),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      view_name: cdktn.stringToTerraform(this._viewName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filters: {
        value: resourceexplorer2ViewFiltersToHclTerraform(this._filters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Resourceexplorer2ViewFilters",
      },
      included_properties: {
        value: cdktn.listMapperHcl(resourceexplorer2ViewIncludedPropertiesToHclTerraform, false)(this._includedProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Resourceexplorer2ViewIncludedPropertiesList",
      },
      scope: {
        value: cdktn.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      view_name: {
        value: cdktn.stringToHclTerraform(this._viewName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
