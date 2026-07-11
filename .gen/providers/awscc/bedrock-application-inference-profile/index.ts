// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_application_inference_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BedrockApplicationInferenceProfileConfig extends cdktn.TerraformMetaArguments {
  /**
  * Description of the inference profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_application_inference_profile#description BedrockApplicationInferenceProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_application_inference_profile#inference_profile_name BedrockApplicationInferenceProfile#inference_profile_name}
  */
  readonly inferenceProfileName: string;
  /**
  * Various ways to encode a list of models in a CreateInferenceProfile request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_application_inference_profile#model_source BedrockApplicationInferenceProfile#model_source}
  */
  readonly modelSource?: BedrockApplicationInferenceProfileModelSource;
  /**
  * List of Tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_application_inference_profile#tags BedrockApplicationInferenceProfile#tags}
  */
  readonly tags?: BedrockApplicationInferenceProfileTags[] | cdktn.IResolvable;
}
export interface BedrockApplicationInferenceProfileModelSource {
  /**
  * Source arns for a custom inference profile to copy its regional load balancing config from. This
  * can either be a foundation model or predefined inference profile ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_application_inference_profile#copy_from BedrockApplicationInferenceProfile#copy_from}
  */
  readonly copyFrom?: string;
}

export function bedrockApplicationInferenceProfileModelSourceToTerraform(struct?: BedrockApplicationInferenceProfileModelSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    copy_from: cdktn.stringToTerraform(struct!.copyFrom),
  }
}


export function bedrockApplicationInferenceProfileModelSourceToHclTerraform(struct?: BedrockApplicationInferenceProfileModelSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    copy_from: {
      value: cdktn.stringToHclTerraform(struct!.copyFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockApplicationInferenceProfileModelSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockApplicationInferenceProfileModelSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._copyFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyFrom = this._copyFrom;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockApplicationInferenceProfileModelSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._copyFrom = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._copyFrom = value.copyFrom;
    }
  }

  // copy_from - computed: true, optional: true, required: false
  private _copyFrom?: string;
  public get copyFrom() {
    return this.getStringAttribute('copy_from');
  }
  public set copyFrom(value: string) {
    this._copyFrom = value;
  }
  public resetCopyFrom() {
    this._copyFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyFromInput() {
    return this._copyFrom;
  }
}
export interface BedrockApplicationInferenceProfileModels {
}

export function bedrockApplicationInferenceProfileModelsToTerraform(struct?: BedrockApplicationInferenceProfileModels): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockApplicationInferenceProfileModelsToHclTerraform(struct?: BedrockApplicationInferenceProfileModels): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockApplicationInferenceProfileModelsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockApplicationInferenceProfileModels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockApplicationInferenceProfileModels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // model_arn - computed: true, optional: false, required: false
  public get modelArn() {
    return this.getStringAttribute('model_arn');
  }
}

export class BedrockApplicationInferenceProfileModelsList extends cdktn.ComplexList {

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
  public get(index: number): BedrockApplicationInferenceProfileModelsOutputReference {
    return new BedrockApplicationInferenceProfileModelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockApplicationInferenceProfileTags {
  /**
  * Tag Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_application_inference_profile#key BedrockApplicationInferenceProfile#key}
  */
  readonly key?: string;
  /**
  * Tag Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_application_inference_profile#value BedrockApplicationInferenceProfile#value}
  */
  readonly value?: string;
}

export function bedrockApplicationInferenceProfileTagsToTerraform(struct?: BedrockApplicationInferenceProfileTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function bedrockApplicationInferenceProfileTagsToHclTerraform(struct?: BedrockApplicationInferenceProfileTags | cdktn.IResolvable): any {
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

export class BedrockApplicationInferenceProfileTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockApplicationInferenceProfileTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockApplicationInferenceProfileTags | cdktn.IResolvable | undefined) {
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

export class BedrockApplicationInferenceProfileTagsList extends cdktn.ComplexList {
  public internalValue? : BedrockApplicationInferenceProfileTags[] | cdktn.IResolvable

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
  public get(index: number): BedrockApplicationInferenceProfileTagsOutputReference {
    return new BedrockApplicationInferenceProfileTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_application_inference_profile awscc_bedrock_application_inference_profile}
*/
export class BedrockApplicationInferenceProfile extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_bedrock_application_inference_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BedrockApplicationInferenceProfile resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockApplicationInferenceProfile to import
  * @param importFromId The id of the existing BedrockApplicationInferenceProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_application_inference_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockApplicationInferenceProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrock_application_inference_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_application_inference_profile awscc_bedrock_application_inference_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockApplicationInferenceProfileConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockApplicationInferenceProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_bedrock_application_inference_profile',
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
    this._description = config.description;
    this._inferenceProfileName = config.inferenceProfileName;
    this._modelSource.internalValue = config.modelSource;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inference_profile_arn - computed: true, optional: false, required: false
  public get inferenceProfileArn() {
    return this.getStringAttribute('inference_profile_arn');
  }

  // inference_profile_id - computed: true, optional: false, required: false
  public get inferenceProfileId() {
    return this.getStringAttribute('inference_profile_id');
  }

  // inference_profile_identifier - computed: true, optional: false, required: false
  public get inferenceProfileIdentifier() {
    return this.getStringAttribute('inference_profile_identifier');
  }

  // inference_profile_name - computed: false, optional: false, required: true
  private _inferenceProfileName?: string;
  public get inferenceProfileName() {
    return this.getStringAttribute('inference_profile_name');
  }
  public set inferenceProfileName(value: string) {
    this._inferenceProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceProfileNameInput() {
    return this._inferenceProfileName;
  }

  // model_source - computed: true, optional: true, required: false
  private _modelSource = new BedrockApplicationInferenceProfileModelSourceOutputReference(this, "model_source");
  public get modelSource() {
    return this._modelSource;
  }
  public putModelSource(value: BedrockApplicationInferenceProfileModelSource) {
    this._modelSource.internalValue = value;
  }
  public resetModelSource() {
    this._modelSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelSourceInput() {
    return this._modelSource.internalValue;
  }

  // models - computed: true, optional: false, required: false
  private _models = new BedrockApplicationInferenceProfileModelsList(this, "models", false);
  public get models() {
    return this._models;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new BedrockApplicationInferenceProfileTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: BedrockApplicationInferenceProfileTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      inference_profile_name: cdktn.stringToTerraform(this._inferenceProfileName),
      model_source: bedrockApplicationInferenceProfileModelSourceToTerraform(this._modelSource.internalValue),
      tags: cdktn.listMapper(bedrockApplicationInferenceProfileTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inference_profile_name: {
        value: cdktn.stringToHclTerraform(this._inferenceProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model_source: {
        value: bedrockApplicationInferenceProfileModelSourceToHclTerraform(this._modelSource.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockApplicationInferenceProfileModelSource",
      },
      tags: {
        value: cdktn.listMapperHcl(bedrockApplicationInferenceProfileTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockApplicationInferenceProfileTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
