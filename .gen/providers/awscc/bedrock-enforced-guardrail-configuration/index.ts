// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_enforced_guardrail_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BedrockEnforcedGuardrailConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Identifier for the guardrail, could be the ID or the ARN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_enforced_guardrail_configuration#guardrail_identifier BedrockEnforcedGuardrailConfiguration#guardrail_identifier}
  */
  readonly guardrailIdentifier: string;
  /**
  * Numerical guardrail version (not DRAFT)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_enforced_guardrail_configuration#guardrail_version BedrockEnforcedGuardrailConfiguration#guardrail_version}
  */
  readonly guardrailVersion: string;
  /**
  * Model-specific information for the enforced guardrail configuration. If not present, the configuration is enforced on all models
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_enforced_guardrail_configuration#model_enforcement BedrockEnforcedGuardrailConfiguration#model_enforcement}
  */
  readonly modelEnforcement?: BedrockEnforcedGuardrailConfigurationModelEnforcement;
  /**
  * Selective content guarding controls for enforced guardrails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_enforced_guardrail_configuration#selective_content_guarding BedrockEnforcedGuardrailConfiguration#selective_content_guarding}
  */
  readonly selectiveContentGuarding?: BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding;
}
export interface BedrockEnforcedGuardrailConfigurationModelEnforcement {
  /**
  * Models to exclude from enforcement. If a model is in both lists, it is excluded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_enforced_guardrail_configuration#excluded_models BedrockEnforcedGuardrailConfiguration#excluded_models}
  */
  readonly excludedModels?: string[];
  /**
  * Models to enforce the guardrail on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_enforced_guardrail_configuration#included_models BedrockEnforcedGuardrailConfiguration#included_models}
  */
  readonly includedModels?: string[];
}

export function bedrockEnforcedGuardrailConfigurationModelEnforcementToTerraform(struct?: BedrockEnforcedGuardrailConfigurationModelEnforcement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    excluded_models: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludedModels),
    included_models: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includedModels),
  }
}


export function bedrockEnforcedGuardrailConfigurationModelEnforcementToHclTerraform(struct?: BedrockEnforcedGuardrailConfigurationModelEnforcement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    excluded_models: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludedModels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_models: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includedModels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockEnforcedGuardrailConfigurationModelEnforcement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedModels !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedModels = this._excludedModels;
    }
    if (this._includedModels !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedModels = this._includedModels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockEnforcedGuardrailConfigurationModelEnforcement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedModels = undefined;
      this._includedModels = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedModels = value.excludedModels;
      this._includedModels = value.includedModels;
    }
  }

  // excluded_models - computed: true, optional: true, required: false
  private _excludedModels?: string[]; 
  public get excludedModels() {
    return this.getListAttribute('excluded_models');
  }
  public set excludedModels(value: string[]) {
    this._excludedModels = value;
  }
  public resetExcludedModels() {
    this._excludedModels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedModelsInput() {
    return this._excludedModels;
  }

  // included_models - computed: true, optional: true, required: false
  private _includedModels?: string[]; 
  public get includedModels() {
    return this.getListAttribute('included_models');
  }
  public set includedModels(value: string[]) {
    this._includedModels = value;
  }
  public resetIncludedModels() {
    this._includedModels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedModelsInput() {
    return this._includedModels;
  }
}
export interface BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding {
  /**
  * Selective guarding mode for user messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_enforced_guardrail_configuration#messages BedrockEnforcedGuardrailConfiguration#messages}
  */
  readonly messages?: string;
  /**
  * Selective guarding mode for system prompts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_enforced_guardrail_configuration#system BedrockEnforcedGuardrailConfiguration#system}
  */
  readonly systemAttribute?: string;
}

export function bedrockEnforcedGuardrailConfigurationSelectiveContentGuardingToTerraform(struct?: BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    messages: cdktn.stringToTerraform(struct!.messages),
    system: cdktn.stringToTerraform(struct!.systemAttribute),
  }
}


export function bedrockEnforcedGuardrailConfigurationSelectiveContentGuardingToHclTerraform(struct?: BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    messages: {
      value: cdktn.stringToHclTerraform(struct!.messages),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system: {
      value: cdktn.stringToHclTerraform(struct!.systemAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messages !== undefined) {
      hasAnyValues = true;
      internalValueResult.messages = this._messages;
    }
    if (this._system !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemAttribute = this._system;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._messages = undefined;
      this._system = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._messages = value.messages;
      this._system = value.systemAttribute;
    }
  }

  // messages - computed: true, optional: true, required: false
  private _messages?: string; 
  public get messages() {
    return this.getStringAttribute('messages');
  }
  public set messages(value: string) {
    this._messages = value;
  }
  public resetMessages() {
    this._messages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagesInput() {
    return this._messages;
  }

  // system - computed: true, optional: true, required: false
  private _system?: string; 
  public get systemAttribute() {
    return this.getStringAttribute('system');
  }
  public set systemAttribute(value: string) {
    this._system = value;
  }
  public resetSystemAttribute() {
    this._system = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAttributeInput() {
    return this._system;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_enforced_guardrail_configuration awscc_bedrock_enforced_guardrail_configuration}
*/
export class BedrockEnforcedGuardrailConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_bedrock_enforced_guardrail_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BedrockEnforcedGuardrailConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockEnforcedGuardrailConfiguration to import
  * @param importFromId The id of the existing BedrockEnforcedGuardrailConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_enforced_guardrail_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockEnforcedGuardrailConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrock_enforced_guardrail_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_enforced_guardrail_configuration awscc_bedrock_enforced_guardrail_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockEnforcedGuardrailConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockEnforcedGuardrailConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_bedrock_enforced_guardrail_configuration',
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
    this._guardrailIdentifier = config.guardrailIdentifier;
    this._guardrailVersion = config.guardrailVersion;
    this._modelEnforcement.internalValue = config.modelEnforcement;
    this._selectiveContentGuarding.internalValue = config.selectiveContentGuarding;
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

  // guardrail_identifier - computed: false, optional: false, required: true
  private _guardrailIdentifier?: string; 
  public get guardrailIdentifier() {
    return this.getStringAttribute('guardrail_identifier');
  }
  public set guardrailIdentifier(value: string) {
    this._guardrailIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get guardrailIdentifierInput() {
    return this._guardrailIdentifier;
  }

  // guardrail_version - computed: false, optional: false, required: true
  private _guardrailVersion?: string; 
  public get guardrailVersion() {
    return this.getStringAttribute('guardrail_version');
  }
  public set guardrailVersion(value: string) {
    this._guardrailVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get guardrailVersionInput() {
    return this._guardrailVersion;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // model_enforcement - computed: true, optional: true, required: false
  private _modelEnforcement = new BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference(this, "model_enforcement");
  public get modelEnforcement() {
    return this._modelEnforcement;
  }
  public putModelEnforcement(value: BedrockEnforcedGuardrailConfigurationModelEnforcement) {
    this._modelEnforcement.internalValue = value;
  }
  public resetModelEnforcement() {
    this._modelEnforcement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelEnforcementInput() {
    return this._modelEnforcement.internalValue;
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // selective_content_guarding - computed: true, optional: true, required: false
  private _selectiveContentGuarding = new BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference(this, "selective_content_guarding");
  public get selectiveContentGuarding() {
    return this._selectiveContentGuarding;
  }
  public putSelectiveContentGuarding(value: BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding) {
    this._selectiveContentGuarding.internalValue = value;
  }
  public resetSelectiveContentGuarding() {
    this._selectiveContentGuarding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectiveContentGuardingInput() {
    return this._selectiveContentGuarding.internalValue;
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
      guardrail_identifier: cdktn.stringToTerraform(this._guardrailIdentifier),
      guardrail_version: cdktn.stringToTerraform(this._guardrailVersion),
      model_enforcement: bedrockEnforcedGuardrailConfigurationModelEnforcementToTerraform(this._modelEnforcement.internalValue),
      selective_content_guarding: bedrockEnforcedGuardrailConfigurationSelectiveContentGuardingToTerraform(this._selectiveContentGuarding.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      guardrail_identifier: {
        value: cdktn.stringToHclTerraform(this._guardrailIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      guardrail_version: {
        value: cdktn.stringToHclTerraform(this._guardrailVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model_enforcement: {
        value: bedrockEnforcedGuardrailConfigurationModelEnforcementToHclTerraform(this._modelEnforcement.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockEnforcedGuardrailConfigurationModelEnforcement",
      },
      selective_content_guarding: {
        value: bedrockEnforcedGuardrailConfigurationSelectiveContentGuardingToHclTerraform(this._selectiveContentGuarding.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
