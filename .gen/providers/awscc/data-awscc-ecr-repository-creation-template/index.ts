// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ecr_repository_creation_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccEcrRepositoryCreationTemplateConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ecr_repository_creation_template#id DataAwsccEcrRepositoryCreationTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccEcrRepositoryCreationTemplateEncryptionConfiguration {
}

export function dataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationToTerraform(struct?: DataAwsccEcrRepositoryCreationTemplateEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationToHclTerraform(struct?: DataAwsccEcrRepositoryCreationTemplateEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcrRepositoryCreationTemplateEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcrRepositoryCreationTemplateEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_type - computed: true, optional: false, required: false
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }

  // kms_key - computed: true, optional: false, required: false
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
}
export interface DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters {
}

export function dataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersToTerraform(struct?: DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersToHclTerraform(struct?: DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // image_tag_mutability_exclusion_filter_type - computed: true, optional: false, required: false
  public get imageTagMutabilityExclusionFilterType() {
    return this.getStringAttribute('image_tag_mutability_exclusion_filter_type');
  }

  // image_tag_mutability_exclusion_filter_value - computed: true, optional: false, required: false
  public get imageTagMutabilityExclusionFilterValue() {
    return this.getStringAttribute('image_tag_mutability_exclusion_filter_value');
  }
}

export class DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference {
    return new DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEcrRepositoryCreationTemplateResourceTags {
}

export function dataAwsccEcrRepositoryCreationTemplateResourceTagsToTerraform(struct?: DataAwsccEcrRepositoryCreationTemplateResourceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcrRepositoryCreationTemplateResourceTagsToHclTerraform(struct?: DataAwsccEcrRepositoryCreationTemplateResourceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEcrRepositoryCreationTemplateResourceTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcrRepositoryCreationTemplateResourceTags | undefined) {
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

export class DataAwsccEcrRepositoryCreationTemplateResourceTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference {
    return new DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ecr_repository_creation_template awscc_ecr_repository_creation_template}
*/
export class DataAwsccEcrRepositoryCreationTemplate extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ecr_repository_creation_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccEcrRepositoryCreationTemplate resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccEcrRepositoryCreationTemplate to import
  * @param importFromId The id of the existing DataAwsccEcrRepositoryCreationTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ecr_repository_creation_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccEcrRepositoryCreationTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ecr_repository_creation_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ecr_repository_creation_template awscc_ecr_repository_creation_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEcrRepositoryCreationTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEcrRepositoryCreationTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ecr_repository_creation_template',
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

  // applied_for - computed: true, optional: false, required: false
  public get appliedFor() {
    return cdktn.Fn.tolist(this.getListAttribute('applied_for'));
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // custom_role_arn - computed: true, optional: false, required: false
  public get customRoleArn() {
    return this.getStringAttribute('custom_role_arn');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // encryption_configuration - computed: true, optional: false, required: false
  private _encryptionConfiguration = new DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
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

  // image_tag_mutability - computed: true, optional: false, required: false
  public get imageTagMutability() {
    return this.getStringAttribute('image_tag_mutability');
  }

  // image_tag_mutability_exclusion_filters - computed: true, optional: false, required: false
  private _imageTagMutabilityExclusionFilters = new DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList(this, "image_tag_mutability_exclusion_filters", false);
  public get imageTagMutabilityExclusionFilters() {
    return this._imageTagMutabilityExclusionFilters;
  }

  // lifecycle_policy - computed: true, optional: false, required: false
  public get lifecyclePolicy() {
    return this.getStringAttribute('lifecycle_policy');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // repository_policy - computed: true, optional: false, required: false
  public get repositoryPolicy() {
    return this.getStringAttribute('repository_policy');
  }

  // resource_tags - computed: true, optional: false, required: false
  private _resourceTags = new DataAwsccEcrRepositoryCreationTemplateResourceTagsList(this, "resource_tags", true);
  public get resourceTags() {
    return this._resourceTags;
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
