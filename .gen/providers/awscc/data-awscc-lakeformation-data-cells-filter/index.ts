// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/lakeformation_data_cells_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccLakeformationDataCellsFilterConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/lakeformation_data_cells_filter#id DataAwsccLakeformationDataCellsFilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccLakeformationDataCellsFilterColumnWildcard {
}

export function dataAwsccLakeformationDataCellsFilterColumnWildcardToTerraform(struct?: DataAwsccLakeformationDataCellsFilterColumnWildcard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLakeformationDataCellsFilterColumnWildcardToHclTerraform(struct?: DataAwsccLakeformationDataCellsFilterColumnWildcard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLakeformationDataCellsFilterColumnWildcardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLakeformationDataCellsFilterColumnWildcard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLakeformationDataCellsFilterColumnWildcard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // excluded_column_names - computed: true, optional: false, required: false
  public get excludedColumnNames() {
    return this.getListAttribute('excluded_column_names');
  }
}
export interface DataAwsccLakeformationDataCellsFilterRowFilter {
}

export function dataAwsccLakeformationDataCellsFilterRowFilterToTerraform(struct?: DataAwsccLakeformationDataCellsFilterRowFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLakeformationDataCellsFilterRowFilterToHclTerraform(struct?: DataAwsccLakeformationDataCellsFilterRowFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLakeformationDataCellsFilterRowFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLakeformationDataCellsFilterRowFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLakeformationDataCellsFilterRowFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_rows_wildcard - computed: true, optional: false, required: false
  public get allRowsWildcard() {
    return this.getStringAttribute('all_rows_wildcard');
  }

  // filter_expression - computed: true, optional: false, required: false
  public get filterExpression() {
    return this.getStringAttribute('filter_expression');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/lakeformation_data_cells_filter awscc_lakeformation_data_cells_filter}
*/
export class DataAwsccLakeformationDataCellsFilter extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_lakeformation_data_cells_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccLakeformationDataCellsFilter resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccLakeformationDataCellsFilter to import
  * @param importFromId The id of the existing DataAwsccLakeformationDataCellsFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/lakeformation_data_cells_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccLakeformationDataCellsFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lakeformation_data_cells_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/lakeformation_data_cells_filter awscc_lakeformation_data_cells_filter} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccLakeformationDataCellsFilterConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccLakeformationDataCellsFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_lakeformation_data_cells_filter',
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

  // column_names - computed: true, optional: false, required: false
  public get columnNames() {
    return this.getListAttribute('column_names');
  }

  // column_wildcard - computed: true, optional: false, required: false
  private _columnWildcard = new DataAwsccLakeformationDataCellsFilterColumnWildcardOutputReference(this, "column_wildcard");
  public get columnWildcard() {
    return this._columnWildcard;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // row_filter - computed: true, optional: false, required: false
  private _rowFilter = new DataAwsccLakeformationDataCellsFilterRowFilterOutputReference(this, "row_filter");
  public get rowFilter() {
    return this._rowFilter;
  }

  // table_catalog_id - computed: true, optional: false, required: false
  public get tableCatalogId() {
    return this.getStringAttribute('table_catalog_id');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
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
