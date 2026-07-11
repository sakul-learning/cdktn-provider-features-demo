// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_data_table_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ConnectDataTableRecordConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_data_table_record#data_table_arn ConnectDataTableRecord#data_table_arn}
  */
  readonly dataTableArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_data_table_record#data_table_record ConnectDataTableRecord#data_table_record}
  */
  readonly dataTableRecord?: ConnectDataTableRecordDataTableRecord;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_data_table_record#instance_arn ConnectDataTableRecord#instance_arn}
  */
  readonly instanceArn?: string;
}
export interface ConnectDataTableRecordDataTableRecordPrimaryValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_data_table_record#attribute_id ConnectDataTableRecord#attribute_id}
  */
  readonly attributeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_data_table_record#attribute_value ConnectDataTableRecord#attribute_value}
  */
  readonly attributeValue?: string;
}

export function connectDataTableRecordDataTableRecordPrimaryValuesToTerraform(struct?: ConnectDataTableRecordDataTableRecordPrimaryValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute_id: cdktn.stringToTerraform(struct!.attributeId),
    attribute_value: cdktn.stringToTerraform(struct!.attributeValue),
  }
}


export function connectDataTableRecordDataTableRecordPrimaryValuesToHclTerraform(struct?: ConnectDataTableRecordDataTableRecordPrimaryValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute_id: {
      value: cdktn.stringToHclTerraform(struct!.attributeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_value: {
      value: cdktn.stringToHclTerraform(struct!.attributeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConnectDataTableRecordDataTableRecordPrimaryValues | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeId = this._attributeId;
    }
    if (this._attributeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeValue = this._attributeValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectDataTableRecordDataTableRecordPrimaryValues | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeId = undefined;
      this._attributeValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeId = value.attributeId;
      this._attributeValue = value.attributeValue;
    }
  }

  // attribute_id - computed: true, optional: true, required: false
  private _attributeId?: string; 
  public get attributeId() {
    return this.getStringAttribute('attribute_id');
  }
  public set attributeId(value: string) {
    this._attributeId = value;
  }
  public resetAttributeId() {
    this._attributeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeIdInput() {
    return this._attributeId;
  }

  // attribute_value - computed: true, optional: true, required: false
  private _attributeValue?: string; 
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }
  public set attributeValue(value: string) {
    this._attributeValue = value;
  }
  public resetAttributeValue() {
    this._attributeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeValueInput() {
    return this._attributeValue;
  }
}

export class ConnectDataTableRecordDataTableRecordPrimaryValuesList extends cdktn.ComplexList {
  public internalValue? : ConnectDataTableRecordDataTableRecordPrimaryValues[] | cdktn.IResolvable

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
  public get(index: number): ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference {
    return new ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectDataTableRecordDataTableRecordValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_data_table_record#attribute_id ConnectDataTableRecord#attribute_id}
  */
  readonly attributeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_data_table_record#attribute_value ConnectDataTableRecord#attribute_value}
  */
  readonly attributeValue?: string;
}

export function connectDataTableRecordDataTableRecordValuesToTerraform(struct?: ConnectDataTableRecordDataTableRecordValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute_id: cdktn.stringToTerraform(struct!.attributeId),
    attribute_value: cdktn.stringToTerraform(struct!.attributeValue),
  }
}


export function connectDataTableRecordDataTableRecordValuesToHclTerraform(struct?: ConnectDataTableRecordDataTableRecordValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute_id: {
      value: cdktn.stringToHclTerraform(struct!.attributeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_value: {
      value: cdktn.stringToHclTerraform(struct!.attributeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectDataTableRecordDataTableRecordValuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConnectDataTableRecordDataTableRecordValues | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeId = this._attributeId;
    }
    if (this._attributeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeValue = this._attributeValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectDataTableRecordDataTableRecordValues | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeId = undefined;
      this._attributeValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeId = value.attributeId;
      this._attributeValue = value.attributeValue;
    }
  }

  // attribute_id - computed: true, optional: true, required: false
  private _attributeId?: string; 
  public get attributeId() {
    return this.getStringAttribute('attribute_id');
  }
  public set attributeId(value: string) {
    this._attributeId = value;
  }
  public resetAttributeId() {
    this._attributeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeIdInput() {
    return this._attributeId;
  }

  // attribute_value - computed: true, optional: true, required: false
  private _attributeValue?: string; 
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }
  public set attributeValue(value: string) {
    this._attributeValue = value;
  }
  public resetAttributeValue() {
    this._attributeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeValueInput() {
    return this._attributeValue;
  }
}

export class ConnectDataTableRecordDataTableRecordValuesList extends cdktn.ComplexList {
  public internalValue? : ConnectDataTableRecordDataTableRecordValues[] | cdktn.IResolvable

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
  public get(index: number): ConnectDataTableRecordDataTableRecordValuesOutputReference {
    return new ConnectDataTableRecordDataTableRecordValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectDataTableRecordDataTableRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_data_table_record#primary_values ConnectDataTableRecord#primary_values}
  */
  readonly primaryValues?: ConnectDataTableRecordDataTableRecordPrimaryValues[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_data_table_record#values ConnectDataTableRecord#values}
  */
  readonly values?: ConnectDataTableRecordDataTableRecordValues[] | cdktn.IResolvable;
}

export function connectDataTableRecordDataTableRecordToTerraform(struct?: ConnectDataTableRecordDataTableRecord | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    primary_values: cdktn.listMapper(connectDataTableRecordDataTableRecordPrimaryValuesToTerraform, false)(struct!.primaryValues),
    values: cdktn.listMapper(connectDataTableRecordDataTableRecordValuesToTerraform, false)(struct!.values),
  }
}


export function connectDataTableRecordDataTableRecordToHclTerraform(struct?: ConnectDataTableRecordDataTableRecord | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    primary_values: {
      value: cdktn.listMapperHcl(connectDataTableRecordDataTableRecordPrimaryValuesToHclTerraform, false)(struct!.primaryValues),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectDataTableRecordDataTableRecordPrimaryValuesList",
    },
    values: {
      value: cdktn.listMapperHcl(connectDataTableRecordDataTableRecordValuesToHclTerraform, false)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectDataTableRecordDataTableRecordValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectDataTableRecordDataTableRecordOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectDataTableRecordDataTableRecord | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primaryValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryValues = this._primaryValues?.internalValue;
    }
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectDataTableRecordDataTableRecord | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._primaryValues.internalValue = undefined;
      this._values.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._primaryValues.internalValue = value.primaryValues;
      this._values.internalValue = value.values;
    }
  }

  // primary_values - computed: true, optional: true, required: false
  private _primaryValues = new ConnectDataTableRecordDataTableRecordPrimaryValuesList(this, "primary_values", false);
  public get primaryValues() {
    return this._primaryValues;
  }
  public putPrimaryValues(value: ConnectDataTableRecordDataTableRecordPrimaryValues[] | cdktn.IResolvable) {
    this._primaryValues.internalValue = value;
  }
  public resetPrimaryValues() {
    this._primaryValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryValuesInput() {
    return this._primaryValues.internalValue;
  }

  // values - computed: true, optional: true, required: false
  private _values = new ConnectDataTableRecordDataTableRecordValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: ConnectDataTableRecordDataTableRecordValues[] | cdktn.IResolvable) {
    this._values.internalValue = value;
  }
  public resetValues() {
    this._values.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_data_table_record awscc_connect_data_table_record}
*/
export class ConnectDataTableRecord extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_connect_data_table_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ConnectDataTableRecord resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectDataTableRecord to import
  * @param importFromId The id of the existing ConnectDataTableRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_data_table_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectDataTableRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_connect_data_table_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_data_table_record awscc_connect_data_table_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectDataTableRecordConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ConnectDataTableRecordConfig = {}) {
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
    this._dataTableArn = config.dataTableArn;
    this._dataTableRecord.internalValue = config.dataTableRecord;
    this._instanceArn = config.instanceArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_table_arn - computed: true, optional: true, required: false
  private _dataTableArn?: string; 
  public get dataTableArn() {
    return this.getStringAttribute('data_table_arn');
  }
  public set dataTableArn(value: string) {
    this._dataTableArn = value;
  }
  public resetDataTableArn() {
    this._dataTableArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTableArnInput() {
    return this._dataTableArn;
  }

  // data_table_record - computed: true, optional: true, required: false
  private _dataTableRecord = new ConnectDataTableRecordDataTableRecordOutputReference(this, "data_table_record");
  public get dataTableRecord() {
    return this._dataTableRecord;
  }
  public putDataTableRecord(value: ConnectDataTableRecordDataTableRecord) {
    this._dataTableRecord.internalValue = value;
  }
  public resetDataTableRecord() {
    this._dataTableRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTableRecordInput() {
    return this._dataTableRecord.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_arn - computed: true, optional: true, required: false
  private _instanceArn?: string; 
  public get instanceArn() {
    return this.getStringAttribute('instance_arn');
  }
  public set instanceArn(value: string) {
    this._instanceArn = value;
  }
  public resetInstanceArn() {
    this._instanceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceArnInput() {
    return this._instanceArn;
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
      data_table_arn: cdktn.stringToTerraform(this._dataTableArn),
      data_table_record: connectDataTableRecordDataTableRecordToTerraform(this._dataTableRecord.internalValue),
      instance_arn: cdktn.stringToTerraform(this._instanceArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_table_arn: {
        value: cdktn.stringToHclTerraform(this._dataTableArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_table_record: {
        value: connectDataTableRecordDataTableRecordToHclTerraform(this._dataTableRecord.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConnectDataTableRecordDataTableRecord",
      },
      instance_arn: {
        value: cdktn.stringToHclTerraform(this._instanceArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
