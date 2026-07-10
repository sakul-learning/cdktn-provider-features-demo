// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/connect_data_table_attribute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccConnectDataTableAttributeConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/connect_data_table_attribute#id DataAwsccConnectDataTableAttribute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccConnectDataTableAttributeLockVersion {
}

export function dataAwsccConnectDataTableAttributeLockVersionToTerraform(struct?: DataAwsccConnectDataTableAttributeLockVersion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectDataTableAttributeLockVersionToHclTerraform(struct?: DataAwsccConnectDataTableAttributeLockVersion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectDataTableAttributeLockVersionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectDataTableAttributeLockVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectDataTableAttributeLockVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute - computed: true, optional: false, required: false
  public get attribute() {
    return this.getStringAttribute('attribute');
  }

  // data_table - computed: true, optional: false, required: false
  public get dataTable() {
    return this.getStringAttribute('data_table');
  }
}
export interface DataAwsccConnectDataTableAttributeValidationEnum {
}

export function dataAwsccConnectDataTableAttributeValidationEnumToTerraform(struct?: DataAwsccConnectDataTableAttributeValidationEnum): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectDataTableAttributeValidationEnumToHclTerraform(struct?: DataAwsccConnectDataTableAttributeValidationEnum): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectDataTableAttributeValidationEnumOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectDataTableAttributeValidationEnum | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectDataTableAttributeValidationEnum | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // strict - computed: true, optional: false, required: false
  public get strict() {
    return this.getBooleanAttribute('strict');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccConnectDataTableAttributeValidation {
}

export function dataAwsccConnectDataTableAttributeValidationToTerraform(struct?: DataAwsccConnectDataTableAttributeValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectDataTableAttributeValidationToHclTerraform(struct?: DataAwsccConnectDataTableAttributeValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectDataTableAttributeValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectDataTableAttributeValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectDataTableAttributeValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enum - computed: true, optional: false, required: false
  private _enum = new DataAwsccConnectDataTableAttributeValidationEnumOutputReference(this, "enum");
  public get enum() {
    return this._enum;
  }

  // exclusive_maximum - computed: true, optional: false, required: false
  public get exclusiveMaximum() {
    return this.getNumberAttribute('exclusive_maximum');
  }

  // exclusive_minimum - computed: true, optional: false, required: false
  public get exclusiveMinimum() {
    return this.getNumberAttribute('exclusive_minimum');
  }

  // max_length - computed: true, optional: false, required: false
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }

  // max_values - computed: true, optional: false, required: false
  public get maxValues() {
    return this.getNumberAttribute('max_values');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // min_length - computed: true, optional: false, required: false
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }

  // min_values - computed: true, optional: false, required: false
  public get minValues() {
    return this.getNumberAttribute('min_values');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // multiple_of - computed: true, optional: false, required: false
  public get multipleOf() {
    return this.getNumberAttribute('multiple_of');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/connect_data_table_attribute awscc_connect_data_table_attribute}
*/
export class DataAwsccConnectDataTableAttribute extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_connect_data_table_attribute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccConnectDataTableAttribute resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccConnectDataTableAttribute to import
  * @param importFromId The id of the existing DataAwsccConnectDataTableAttribute that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/connect_data_table_attribute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccConnectDataTableAttribute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_connect_data_table_attribute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/connect_data_table_attribute awscc_connect_data_table_attribute} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccConnectDataTableAttributeConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccConnectDataTableAttributeConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_connect_data_table_attribute',
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

  // attribute_id - computed: true, optional: false, required: false
  public get attributeId() {
    return this.getStringAttribute('attribute_id');
  }

  // data_table_arn - computed: true, optional: false, required: false
  public get dataTableArn() {
    return this.getStringAttribute('data_table_arn');
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

  // instance_arn - computed: true, optional: false, required: false
  public get instanceArn() {
    return this.getStringAttribute('instance_arn');
  }

  // last_modified_region - computed: true, optional: false, required: false
  public get lastModifiedRegion() {
    return this.getStringAttribute('last_modified_region');
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getNumberAttribute('last_modified_time');
  }

  // lock_version - computed: true, optional: false, required: false
  private _lockVersion = new DataAwsccConnectDataTableAttributeLockVersionOutputReference(this, "lock_version");
  public get lockVersion() {
    return this._lockVersion;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // primary - computed: true, optional: false, required: false
  public get primary() {
    return this.getBooleanAttribute('primary');
  }

  // validation - computed: true, optional: false, required: false
  private _validation = new DataAwsccConnectDataTableAttributeValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }

  // value_type - computed: true, optional: false, required: false
  public get valueType() {
    return this.getStringAttribute('value_type');
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
