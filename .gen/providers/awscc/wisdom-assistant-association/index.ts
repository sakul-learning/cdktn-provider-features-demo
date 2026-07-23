// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_assistant_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface WisdomAssistantAssociationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_assistant_association#assistant_id WisdomAssistantAssociation#assistant_id}
  */
  readonly assistantId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_assistant_association#association WisdomAssistantAssociation#association}
  */
  readonly association: WisdomAssistantAssociationAssociation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_assistant_association#association_type WisdomAssistantAssociation#association_type}
  */
  readonly associationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_assistant_association#tags WisdomAssistantAssociation#tags}
  */
  readonly tags?: WisdomAssistantAssociationTags[] | cdktn.IResolvable;
}
export interface WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_assistant_association#access_role_arn WisdomAssistantAssociation#access_role_arn}
  */
  readonly accessRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_assistant_association#bedrock_knowledge_base_arn WisdomAssistantAssociation#bedrock_knowledge_base_arn}
  */
  readonly bedrockKnowledgeBaseArn?: string;
}

export function wisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigToTerraform(struct?: WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_role_arn: cdktn.stringToTerraform(struct!.accessRoleArn),
    bedrock_knowledge_base_arn: cdktn.stringToTerraform(struct!.bedrockKnowledgeBaseArn),
  }
}


export function wisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigToHclTerraform(struct?: WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.accessRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bedrock_knowledge_base_arn: {
      value: cdktn.stringToHclTerraform(struct!.bedrockKnowledgeBaseArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessRoleArn = this._accessRoleArn;
    }
    if (this._bedrockKnowledgeBaseArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bedrockKnowledgeBaseArn = this._bedrockKnowledgeBaseArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessRoleArn = undefined;
      this._bedrockKnowledgeBaseArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessRoleArn = value.accessRoleArn;
      this._bedrockKnowledgeBaseArn = value.bedrockKnowledgeBaseArn;
    }
  }

  // access_role_arn - computed: true, optional: true, required: false
  private _accessRoleArn?: string; 
  public get accessRoleArn() {
    return this.getStringAttribute('access_role_arn');
  }
  public set accessRoleArn(value: string) {
    this._accessRoleArn = value;
  }
  public resetAccessRoleArn() {
    this._accessRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessRoleArnInput() {
    return this._accessRoleArn;
  }

  // bedrock_knowledge_base_arn - computed: true, optional: true, required: false
  private _bedrockKnowledgeBaseArn?: string; 
  public get bedrockKnowledgeBaseArn() {
    return this.getStringAttribute('bedrock_knowledge_base_arn');
  }
  public set bedrockKnowledgeBaseArn(value: string) {
    this._bedrockKnowledgeBaseArn = value;
  }
  public resetBedrockKnowledgeBaseArn() {
    this._bedrockKnowledgeBaseArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bedrockKnowledgeBaseArnInput() {
    return this._bedrockKnowledgeBaseArn;
  }
}
export interface WisdomAssistantAssociationAssociation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_assistant_association#external_bedrock_knowledge_base_config WisdomAssistantAssociation#external_bedrock_knowledge_base_config}
  */
  readonly externalBedrockKnowledgeBaseConfig?: WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_assistant_association#knowledge_base_id WisdomAssistantAssociation#knowledge_base_id}
  */
  readonly knowledgeBaseId?: string;
}

export function wisdomAssistantAssociationAssociationToTerraform(struct?: WisdomAssistantAssociationAssociation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    external_bedrock_knowledge_base_config: wisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigToTerraform(struct!.externalBedrockKnowledgeBaseConfig),
    knowledge_base_id: cdktn.stringToTerraform(struct!.knowledgeBaseId),
  }
}


export function wisdomAssistantAssociationAssociationToHclTerraform(struct?: WisdomAssistantAssociationAssociation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    external_bedrock_knowledge_base_config: {
      value: wisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigToHclTerraform(struct!.externalBedrockKnowledgeBaseConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig",
    },
    knowledge_base_id: {
      value: cdktn.stringToHclTerraform(struct!.knowledgeBaseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAssistantAssociationAssociationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAssistantAssociationAssociation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalBedrockKnowledgeBaseConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalBedrockKnowledgeBaseConfig = this._externalBedrockKnowledgeBaseConfig?.internalValue;
    }
    if (this._knowledgeBaseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.knowledgeBaseId = this._knowledgeBaseId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAssistantAssociationAssociation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalBedrockKnowledgeBaseConfig.internalValue = undefined;
      this._knowledgeBaseId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalBedrockKnowledgeBaseConfig.internalValue = value.externalBedrockKnowledgeBaseConfig;
      this._knowledgeBaseId = value.knowledgeBaseId;
    }
  }

  // external_bedrock_knowledge_base_config - computed: true, optional: true, required: false
  private _externalBedrockKnowledgeBaseConfig = new WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference(this, "external_bedrock_knowledge_base_config");
  public get externalBedrockKnowledgeBaseConfig() {
    return this._externalBedrockKnowledgeBaseConfig;
  }
  public putExternalBedrockKnowledgeBaseConfig(value: WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig) {
    this._externalBedrockKnowledgeBaseConfig.internalValue = value;
  }
  public resetExternalBedrockKnowledgeBaseConfig() {
    this._externalBedrockKnowledgeBaseConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalBedrockKnowledgeBaseConfigInput() {
    return this._externalBedrockKnowledgeBaseConfig.internalValue;
  }

  // knowledge_base_id - computed: true, optional: true, required: false
  private _knowledgeBaseId?: string; 
  public get knowledgeBaseId() {
    return this.getStringAttribute('knowledge_base_id');
  }
  public set knowledgeBaseId(value: string) {
    this._knowledgeBaseId = value;
  }
  public resetKnowledgeBaseId() {
    this._knowledgeBaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeBaseIdInput() {
    return this._knowledgeBaseId;
  }
}
export interface WisdomAssistantAssociationTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_assistant_association#key WisdomAssistantAssociation#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_assistant_association#value WisdomAssistantAssociation#value}
  */
  readonly value?: string;
}

export function wisdomAssistantAssociationTagsToTerraform(struct?: WisdomAssistantAssociationTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function wisdomAssistantAssociationTagsToHclTerraform(struct?: WisdomAssistantAssociationTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAssistantAssociationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WisdomAssistantAssociationTags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAssistantAssociationTags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class WisdomAssistantAssociationTagsList extends cdktn.ComplexList {
  public internalValue? : WisdomAssistantAssociationTags[] | cdktn.IResolvable

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
  public get(index: number): WisdomAssistantAssociationTagsOutputReference {
    return new WisdomAssistantAssociationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_assistant_association awscc_wisdom_assistant_association}
*/
export class WisdomAssistantAssociation extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_wisdom_assistant_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a WisdomAssistantAssociation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WisdomAssistantAssociation to import
  * @param importFromId The id of the existing WisdomAssistantAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_assistant_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WisdomAssistantAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_wisdom_assistant_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_assistant_association awscc_wisdom_assistant_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WisdomAssistantAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: WisdomAssistantAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_wisdom_assistant_association',
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
    this._assistantId = config.assistantId;
    this._association.internalValue = config.association;
    this._associationType = config.associationType;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assistant_arn - computed: true, optional: false, required: false
  public get assistantArn() {
    return this.getStringAttribute('assistant_arn');
  }

  // assistant_association_arn - computed: true, optional: false, required: false
  public get assistantAssociationArn() {
    return this.getStringAttribute('assistant_association_arn');
  }

  // assistant_association_id - computed: true, optional: false, required: false
  public get assistantAssociationId() {
    return this.getStringAttribute('assistant_association_id');
  }

  // assistant_id - computed: false, optional: false, required: true
  private _assistantId?: string; 
  public get assistantId() {
    return this.getStringAttribute('assistant_id');
  }
  public set assistantId(value: string) {
    this._assistantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assistantIdInput() {
    return this._assistantId;
  }

  // association - computed: false, optional: false, required: true
  private _association = new WisdomAssistantAssociationAssociationOutputReference(this, "association");
  public get association() {
    return this._association;
  }
  public putAssociation(value: WisdomAssistantAssociationAssociation) {
    this._association.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get associationInput() {
    return this._association.internalValue;
  }

  // association_type - computed: false, optional: false, required: true
  private _associationType?: string; 
  public get associationType() {
    return this.getStringAttribute('association_type');
  }
  public set associationType(value: string) {
    this._associationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get associationTypeInput() {
    return this._associationType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new WisdomAssistantAssociationTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: WisdomAssistantAssociationTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assistant_id: cdktn.stringToTerraform(this._assistantId),
      association: wisdomAssistantAssociationAssociationToTerraform(this._association.internalValue),
      association_type: cdktn.stringToTerraform(this._associationType),
      tags: cdktn.listMapper(wisdomAssistantAssociationTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assistant_id: {
        value: cdktn.stringToHclTerraform(this._assistantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      association: {
        value: wisdomAssistantAssociationAssociationToHclTerraform(this._association.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WisdomAssistantAssociationAssociation",
      },
      association_type: {
        value: cdktn.stringToHclTerraform(this._associationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(wisdomAssistantAssociationTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WisdomAssistantAssociationTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
