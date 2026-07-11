// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SagemakerModelPackageGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * The description of the model package group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package_group#model_package_group_description SagemakerModelPackageGroup#model_package_group_description}
  */
  readonly modelPackageGroupDescription?: string;
  /**
  * The name of the model package group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package_group#model_package_group_name SagemakerModelPackageGroup#model_package_group_name}
  */
  readonly modelPackageGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package_group#model_package_group_policy SagemakerModelPackageGroup#model_package_group_policy}
  */
  readonly modelPackageGroupPolicy?: string;
  /**
  * An array of key-value pairs to apply to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package_group#tags SagemakerModelPackageGroup#tags}
  */
  readonly tags?: SagemakerModelPackageGroupTags[] | cdktn.IResolvable;
}
export interface SagemakerModelPackageGroupTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package_group#key SagemakerModelPackageGroup#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package_group#value SagemakerModelPackageGroup#value}
  */
  readonly value?: string;
}

export function sagemakerModelPackageGroupTagsToTerraform(struct?: SagemakerModelPackageGroupTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function sagemakerModelPackageGroupTagsToHclTerraform(struct?: SagemakerModelPackageGroupTags | cdktn.IResolvable): any {
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

export class SagemakerModelPackageGroupTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerModelPackageGroupTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerModelPackageGroupTags | cdktn.IResolvable | undefined) {
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

export class SagemakerModelPackageGroupTagsList extends cdktn.ComplexList {
  public internalValue? : SagemakerModelPackageGroupTags[] | cdktn.IResolvable

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
  public get(index: number): SagemakerModelPackageGroupTagsOutputReference {
    return new SagemakerModelPackageGroupTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package_group awscc_sagemaker_model_package_group}
*/
export class SagemakerModelPackageGroup extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_sagemaker_model_package_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SagemakerModelPackageGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerModelPackageGroup to import
  * @param importFromId The id of the existing SagemakerModelPackageGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerModelPackageGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_model_package_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package_group awscc_sagemaker_model_package_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerModelPackageGroupConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerModelPackageGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_model_package_group',
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
    this._modelPackageGroupDescription = config.modelPackageGroupDescription;
    this._modelPackageGroupName = config.modelPackageGroupName;
    this._modelPackageGroupPolicy = config.modelPackageGroupPolicy;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // model_package_group_arn - computed: true, optional: false, required: false
  public get modelPackageGroupArn() {
    return this.getStringAttribute('model_package_group_arn');
  }

  // model_package_group_description - computed: true, optional: true, required: false
  private _modelPackageGroupDescription?: string;
  public get modelPackageGroupDescription() {
    return this.getStringAttribute('model_package_group_description');
  }
  public set modelPackageGroupDescription(value: string) {
    this._modelPackageGroupDescription = value;
  }
  public resetModelPackageGroupDescription() {
    this._modelPackageGroupDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelPackageGroupDescriptionInput() {
    return this._modelPackageGroupDescription;
  }

  // model_package_group_name - computed: false, optional: false, required: true
  private _modelPackageGroupName?: string;
  public get modelPackageGroupName() {
    return this.getStringAttribute('model_package_group_name');
  }
  public set modelPackageGroupName(value: string) {
    this._modelPackageGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelPackageGroupNameInput() {
    return this._modelPackageGroupName;
  }

  // model_package_group_policy - computed: true, optional: true, required: false
  private _modelPackageGroupPolicy?: string;
  public get modelPackageGroupPolicy() {
    return this.getStringAttribute('model_package_group_policy');
  }
  public set modelPackageGroupPolicy(value: string) {
    this._modelPackageGroupPolicy = value;
  }
  public resetModelPackageGroupPolicy() {
    this._modelPackageGroupPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelPackageGroupPolicyInput() {
    return this._modelPackageGroupPolicy;
  }

  // model_package_group_status - computed: true, optional: false, required: false
  public get modelPackageGroupStatus() {
    return this.getStringAttribute('model_package_group_status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new SagemakerModelPackageGroupTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: SagemakerModelPackageGroupTags[] | cdktn.IResolvable) {
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
      model_package_group_description: cdktn.stringToTerraform(this._modelPackageGroupDescription),
      model_package_group_name: cdktn.stringToTerraform(this._modelPackageGroupName),
      model_package_group_policy: cdktn.stringToTerraform(this._modelPackageGroupPolicy),
      tags: cdktn.listMapper(sagemakerModelPackageGroupTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      model_package_group_description: {
        value: cdktn.stringToHclTerraform(this._modelPackageGroupDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model_package_group_name: {
        value: cdktn.stringToHclTerraform(this._modelPackageGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model_package_group_policy: {
        value: cdktn.stringToHclTerraform(this._modelPackageGroupPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(sagemakerModelPackageGroupTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerModelPackageGroupTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
