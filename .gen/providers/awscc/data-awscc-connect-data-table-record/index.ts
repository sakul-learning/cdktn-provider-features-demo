// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/connect_data_table_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccConnectDataTableRecordConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/connect_data_table_record#id DataAwsccConnectDataTableRecord#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccConnectDataTableRecordDataTableRecordPrimaryValues {
}

export function dataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesToTerraform(struct?: DataAwsccConnectDataTableRecordDataTableRecordPrimaryValues): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesToHclTerraform(struct?: DataAwsccConnectDataTableRecordDataTableRecordPrimaryValues): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccConnectDataTableRecordDataTableRecordPrimaryValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectDataTableRecordDataTableRecordPrimaryValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_id - computed: true, optional: false, required: false
  public get attributeId() {
    return this.getStringAttribute('attribute_id');
  }

  // attribute_value - computed: true, optional: false, required: false
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }
}

export class DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference {
    return new DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccConnectDataTableRecordDataTableRecordValues {
}

export function dataAwsccConnectDataTableRecordDataTableRecordValuesToTerraform(struct?: DataAwsccConnectDataTableRecordDataTableRecordValues): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectDataTableRecordDataTableRecordValuesToHclTerraform(struct?: DataAwsccConnectDataTableRecordDataTableRecordValues): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccConnectDataTableRecordDataTableRecordValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectDataTableRecordDataTableRecordValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_id - computed: true, optional: false, required: false
  public get attributeId() {
    return this.getStringAttribute('attribute_id');
  }

  // attribute_value - computed: true, optional: false, required: false
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }
}

export class DataAwsccConnectDataTableRecordDataTableRecordValuesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference {
    return new DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccConnectDataTableRecordDataTableRecord {
}

export function dataAwsccConnectDataTableRecordDataTableRecordToTerraform(struct?: DataAwsccConnectDataTableRecordDataTableRecord): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectDataTableRecordDataTableRecordToHclTerraform(struct?: DataAwsccConnectDataTableRecordDataTableRecord): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectDataTableRecordDataTableRecordOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectDataTableRecordDataTableRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectDataTableRecordDataTableRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // primary_values - computed: true, optional: false, required: false
  private _primaryValues = new DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesList(this, "primary_values", false);
  public get primaryValues() {
    return this._primaryValues;
  }

  // values - computed: true, optional: false, required: false
  private _values = new DataAwsccConnectDataTableRecordDataTableRecordValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/connect_data_table_record awscc_connect_data_table_record}
*/
export class DataAwsccConnectDataTableRecord extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_connect_data_table_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccConnectDataTableRecord resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccConnectDataTableRecord to import
  * @param importFromId The id of the existing DataAwsccConnectDataTableRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/connect_data_table_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccConnectDataTableRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_connect_data_table_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/connect_data_table_record awscc_connect_data_table_record} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccConnectDataTableRecordConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccConnectDataTableRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_connect_data_table_record',
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

  // data_table_arn - computed: true, optional: false, required: false
  public get dataTableArn() {
    return this.getStringAttribute('data_table_arn');
  }

  // data_table_record - computed: true, optional: false, required: false
  private _dataTableRecord = new DataAwsccConnectDataTableRecordDataTableRecordOutputReference(this, "data_table_record");
  public get dataTableRecord() {
    return this._dataTableRecord;
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

  // instance_arn - computed: true, optional: false, required: false
  public get instanceArn() {
    return this.getStringAttribute('instance_arn');
  }

  // record_id - computed: true, optional: false, required: false
  public get recordId() {
    return this.getStringAttribute('record_id');
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
