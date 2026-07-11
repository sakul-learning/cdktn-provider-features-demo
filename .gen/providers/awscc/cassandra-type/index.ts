// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cassandra_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CassandraTypeConfig extends cdktn.TerraformMetaArguments {
  /**
  * Field definitions of the User-Defined Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cassandra_type#fields CassandraType#fields}
  */
  readonly fields: CassandraTypeFields[] | cdktn.IResolvable;
  /**
  * Name of the Keyspace which contains the User-Defined Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cassandra_type#keyspace_name CassandraType#keyspace_name}
  */
  readonly keyspaceName: string;
  /**
  * Name of the User-Defined Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cassandra_type#type_name CassandraType#type_name}
  */
  readonly typeName: string;
}
export interface CassandraTypeFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cassandra_type#field_name CassandraType#field_name}
  */
  readonly fieldName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cassandra_type#field_type CassandraType#field_type}
  */
  readonly fieldType: string;
}

export function cassandraTypeFieldsToTerraform(struct?: CassandraTypeFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field_name: cdktn.stringToTerraform(struct!.fieldName),
    field_type: cdktn.stringToTerraform(struct!.fieldType),
  }
}


export function cassandraTypeFieldsToHclTerraform(struct?: CassandraTypeFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field_name: {
      value: cdktn.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_type: {
      value: cdktn.stringToHclTerraform(struct!.fieldType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CassandraTypeFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CassandraTypeFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._fieldType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldType = this._fieldType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CassandraTypeFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldName = undefined;
      this._fieldType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldName = value.fieldName;
      this._fieldType = value.fieldType;
    }
  }

  // field_name - computed: false, optional: false, required: true
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // field_type - computed: false, optional: false, required: true
  private _fieldType?: string; 
  public get fieldType() {
    return this.getStringAttribute('field_type');
  }
  public set fieldType(value: string) {
    this._fieldType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTypeInput() {
    return this._fieldType;
  }
}

export class CassandraTypeFieldsList extends cdktn.ComplexList {
  public internalValue? : CassandraTypeFields[] | cdktn.IResolvable

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
  public get(index: number): CassandraTypeFieldsOutputReference {
    return new CassandraTypeFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cassandra_type awscc_cassandra_type}
*/
export class CassandraType extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cassandra_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CassandraType resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CassandraType to import
  * @param importFromId The id of the existing CassandraType that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cassandra_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CassandraType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cassandra_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cassandra_type awscc_cassandra_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CassandraTypeConfig
  */
  public constructor(scope: Construct, id: string, config: CassandraTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cassandra_type',
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
    this._fields.internalValue = config.fields;
    this._keyspaceName = config.keyspaceName;
    this._typeName = config.typeName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // direct_parent_types - computed: true, optional: false, required: false
  public get directParentTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('direct_parent_types'));
  }

  // direct_referring_tables - computed: true, optional: false, required: false
  public get directReferringTables() {
    return cdktn.Fn.tolist(this.getListAttribute('direct_referring_tables'));
  }

  // fields - computed: false, optional: false, required: true
  private _fields = new CassandraTypeFieldsList(this, "fields", true);
  public get fields() {
    return this._fields;
  }
  public putFields(value: CassandraTypeFields[] | cdktn.IResolvable) {
    this._fields.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // keyspace_arn - computed: true, optional: false, required: false
  public get keyspaceArn() {
    return this.getStringAttribute('keyspace_arn');
  }

  // keyspace_name - computed: false, optional: false, required: true
  private _keyspaceName?: string; 
  public get keyspaceName() {
    return this.getStringAttribute('keyspace_name');
  }
  public set keyspaceName(value: string) {
    this._keyspaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyspaceNameInput() {
    return this._keyspaceName;
  }

  // last_modified_timestamp - computed: true, optional: false, required: false
  public get lastModifiedTimestamp() {
    return this.getNumberAttribute('last_modified_timestamp');
  }

  // max_nesting_depth - computed: true, optional: false, required: false
  public get maxNestingDepth() {
    return this.getNumberAttribute('max_nesting_depth');
  }

  // type_name - computed: false, optional: false, required: true
  private _typeName?: string; 
  public get typeName() {
    return this.getStringAttribute('type_name');
  }
  public set typeName(value: string) {
    this._typeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNameInput() {
    return this._typeName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fields: cdktn.listMapper(cassandraTypeFieldsToTerraform, false)(this._fields.internalValue),
      keyspace_name: cdktn.stringToTerraform(this._keyspaceName),
      type_name: cdktn.stringToTerraform(this._typeName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fields: {
        value: cdktn.listMapperHcl(cassandraTypeFieldsToHclTerraform, false)(this._fields.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CassandraTypeFieldsList",
      },
      keyspace_name: {
        value: cdktn.stringToHclTerraform(this._keyspaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type_name: {
        value: cdktn.stringToHclTerraform(this._typeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
