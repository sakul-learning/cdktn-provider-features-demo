// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/glue_schema_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GlueSchemaVersionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Identifier for the schema where the schema version will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/glue_schema_version#schema GlueSchemaVersion#schema}
  */
  readonly schema: GlueSchemaVersionSchema;
  /**
  * Complete definition of the schema in plain-text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/glue_schema_version#schema_definition GlueSchemaVersion#schema_definition}
  */
  readonly schemaDefinition: string;
}
export interface GlueSchemaVersionSchema {
  /**
  * Name of the registry to identify where the Schema is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/glue_schema_version#registry_name GlueSchemaVersion#registry_name}
  */
  readonly registryName?: string;
  /**
  * Amazon Resource Name for the Schema. This attribute can be used to uniquely represent the Schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/glue_schema_version#schema_arn GlueSchemaVersion#schema_arn}
  */
  readonly schemaArn?: string;
  /**
  * Name of the schema. This parameter requires RegistryName to be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/glue_schema_version#schema_name GlueSchemaVersion#schema_name}
  */
  readonly schemaName?: string;
}

export function glueSchemaVersionSchemaToTerraform(struct?: GlueSchemaVersionSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    registry_name: cdktn.stringToTerraform(struct!.registryName),
    schema_arn: cdktn.stringToTerraform(struct!.schemaArn),
    schema_name: cdktn.stringToTerraform(struct!.schemaName),
  }
}


export function glueSchemaVersionSchemaToHclTerraform(struct?: GlueSchemaVersionSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    registry_name: {
      value: cdktn.stringToHclTerraform(struct!.registryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_arn: {
      value: cdktn.stringToHclTerraform(struct!.schemaArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_name: {
      value: cdktn.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueSchemaVersionSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueSchemaVersionSchema | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._registryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryName = this._registryName;
    }
    if (this._schemaArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaArn = this._schemaArn;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueSchemaVersionSchema | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._registryName = undefined;
      this._schemaArn = undefined;
      this._schemaName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._registryName = value.registryName;
      this._schemaArn = value.schemaArn;
      this._schemaName = value.schemaName;
    }
  }

  // registry_name - computed: true, optional: true, required: false
  private _registryName?: string;
  public get registryName() {
    return this.getStringAttribute('registry_name');
  }
  public set registryName(value: string) {
    this._registryName = value;
  }
  public resetRegistryName() {
    this._registryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryNameInput() {
    return this._registryName;
  }

  // schema_arn - computed: true, optional: true, required: false
  private _schemaArn?: string;
  public get schemaArn() {
    return this.getStringAttribute('schema_arn');
  }
  public set schemaArn(value: string) {
    this._schemaArn = value;
  }
  public resetSchemaArn() {
    this._schemaArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaArnInput() {
    return this._schemaArn;
  }

  // schema_name - computed: true, optional: true, required: false
  private _schemaName?: string;
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/glue_schema_version awscc_glue_schema_version}
*/
export class GlueSchemaVersion extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_glue_schema_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GlueSchemaVersion resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlueSchemaVersion to import
  * @param importFromId The id of the existing GlueSchemaVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/glue_schema_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlueSchemaVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_glue_schema_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/glue_schema_version awscc_glue_schema_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlueSchemaVersionConfig
  */
  public constructor(scope: Construct, id: string, config: GlueSchemaVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_glue_schema_version',
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
    this._schema.internalValue = config.schema;
    this._schemaDefinition = config.schemaDefinition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // schema - computed: false, optional: false, required: true
  private _schema = new GlueSchemaVersionSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: GlueSchemaVersionSchema) {
    this._schema.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }

  // schema_definition - computed: false, optional: false, required: true
  private _schemaDefinition?: string;
  public get schemaDefinition() {
    return this.getStringAttribute('schema_definition');
  }
  public set schemaDefinition(value: string) {
    this._schemaDefinition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaDefinitionInput() {
    return this._schemaDefinition;
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      schema: glueSchemaVersionSchemaToTerraform(this._schema.internalValue),
      schema_definition: cdktn.stringToTerraform(this._schemaDefinition),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      schema: {
        value: glueSchemaVersionSchemaToHclTerraform(this._schema.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GlueSchemaVersionSchema",
      },
      schema_definition: {
        value: cdktn.stringToHclTerraform(this._schemaDefinition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
