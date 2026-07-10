// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/bedrock_enforced_guardrail_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccBedrockEnforcedGuardrailConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/bedrock_enforced_guardrail_configuration#id DataAwsccBedrockEnforcedGuardrailConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcement {
}

export function dataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementToTerraform(struct?: DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementToHclTerraform(struct?: DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // excluded_models - computed: true, optional: false, required: false
  public get excludedModels() {
    return this.getListAttribute('excluded_models');
  }

  // included_models - computed: true, optional: false, required: false
  public get includedModels() {
    return this.getListAttribute('included_models');
  }
}
export interface DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuarding {
}

export function dataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingToTerraform(struct?: DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuarding): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingToHclTerraform(struct?: DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuarding): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuarding | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuarding | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // messages - computed: true, optional: false, required: false
  public get messages() {
    return this.getStringAttribute('messages');
  }

  // system - computed: true, optional: false, required: false
  public get systemAttribute() {
    return this.getStringAttribute('system');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/bedrock_enforced_guardrail_configuration awscc_bedrock_enforced_guardrail_configuration}
*/
export class DataAwsccBedrockEnforcedGuardrailConfiguration extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_bedrock_enforced_guardrail_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccBedrockEnforcedGuardrailConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccBedrockEnforcedGuardrailConfiguration to import
  * @param importFromId The id of the existing DataAwsccBedrockEnforcedGuardrailConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/bedrock_enforced_guardrail_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccBedrockEnforcedGuardrailConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrock_enforced_guardrail_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/bedrock_enforced_guardrail_configuration awscc_bedrock_enforced_guardrail_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccBedrockEnforcedGuardrailConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccBedrockEnforcedGuardrailConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_bedrock_enforced_guardrail_configuration',
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

  // config_id - computed: true, optional: false, required: false
  public get configId() {
    return this.getStringAttribute('config_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // guardrail_arn - computed: true, optional: false, required: false
  public get guardrailArn() {
    return this.getStringAttribute('guardrail_arn');
  }

  // guardrail_id - computed: true, optional: false, required: false
  public get guardrailId() {
    return this.getStringAttribute('guardrail_id');
  }

  // guardrail_identifier - computed: true, optional: false, required: false
  public get guardrailIdentifier() {
    return this.getStringAttribute('guardrail_identifier');
  }

  // guardrail_version - computed: true, optional: false, required: false
  public get guardrailVersion() {
    return this.getStringAttribute('guardrail_version');
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

  // model_enforcement - computed: true, optional: false, required: false
  private _modelEnforcement = new DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference(this, "model_enforcement");
  public get modelEnforcement() {
    return this._modelEnforcement;
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // selective_content_guarding - computed: true, optional: false, required: false
  private _selectiveContentGuarding = new DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference(this, "selective_content_guarding");
  public get selectiveContentGuarding() {
    return this._selectiveContentGuarding;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
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
