// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/wisdom_assistant_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccWisdomAssistantAssociationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/wisdom_assistant_association#id DataAwsccWisdomAssistantAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccWisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig {
}

export function dataAwsccWisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigToTerraform(struct?: DataAwsccWisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigToHclTerraform(struct?: DataAwsccWisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_role_arn - computed: true, optional: false, required: false
  public get accessRoleArn() {
    return this.getStringAttribute('access_role_arn');
  }

  // bedrock_knowledge_base_arn - computed: true, optional: false, required: false
  public get bedrockKnowledgeBaseArn() {
    return this.getStringAttribute('bedrock_knowledge_base_arn');
  }
}
export interface DataAwsccWisdomAssistantAssociationAssociation {
}

export function dataAwsccWisdomAssistantAssociationAssociationToTerraform(struct?: DataAwsccWisdomAssistantAssociationAssociation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAssistantAssociationAssociationToHclTerraform(struct?: DataAwsccWisdomAssistantAssociationAssociation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAssistantAssociationAssociationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAssistantAssociationAssociation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAssistantAssociationAssociation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_bedrock_knowledge_base_config - computed: true, optional: false, required: false
  private _externalBedrockKnowledgeBaseConfig = new DataAwsccWisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference(this, "external_bedrock_knowledge_base_config");
  public get externalBedrockKnowledgeBaseConfig() {
    return this._externalBedrockKnowledgeBaseConfig;
  }

  // knowledge_base_id - computed: true, optional: false, required: false
  public get knowledgeBaseId() {
    return this.getStringAttribute('knowledge_base_id');
  }
}
export interface DataAwsccWisdomAssistantAssociationTags {
}

export function dataAwsccWisdomAssistantAssociationTagsToTerraform(struct?: DataAwsccWisdomAssistantAssociationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAssistantAssociationTagsToHclTerraform(struct?: DataAwsccWisdomAssistantAssociationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAssistantAssociationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWisdomAssistantAssociationTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAssistantAssociationTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccWisdomAssistantAssociationTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWisdomAssistantAssociationTagsOutputReference {
    return new DataAwsccWisdomAssistantAssociationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/wisdom_assistant_association awscc_wisdom_assistant_association}
*/
export class DataAwsccWisdomAssistantAssociation extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_wisdom_assistant_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccWisdomAssistantAssociation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccWisdomAssistantAssociation to import
  * @param importFromId The id of the existing DataAwsccWisdomAssistantAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/wisdom_assistant_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccWisdomAssistantAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_wisdom_assistant_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/wisdom_assistant_association awscc_wisdom_assistant_association} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccWisdomAssistantAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccWisdomAssistantAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_wisdom_assistant_association',
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

  // assistant_id - computed: true, optional: false, required: false
  public get assistantId() {
    return this.getStringAttribute('assistant_id');
  }

  // association - computed: true, optional: false, required: false
  private _association = new DataAwsccWisdomAssistantAssociationAssociationOutputReference(this, "association");
  public get association() {
    return this._association;
  }

  // association_type - computed: true, optional: false, required: false
  public get associationType() {
    return this.getStringAttribute('association_type');
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

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccWisdomAssistantAssociationTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
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
