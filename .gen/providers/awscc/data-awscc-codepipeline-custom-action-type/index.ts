// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/codepipeline_custom_action_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccCodepipelineCustomActionTypeConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/codepipeline_custom_action_type#id DataAwsccCodepipelineCustomActionType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccCodepipelineCustomActionTypeConfigurationProperties {
}

export function dataAwsccCodepipelineCustomActionTypeConfigurationPropertiesToTerraform(struct?: DataAwsccCodepipelineCustomActionTypeConfigurationProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodepipelineCustomActionTypeConfigurationPropertiesToHclTerraform(struct?: DataAwsccCodepipelineCustomActionTypeConfigurationProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCodepipelineCustomActionTypeConfigurationProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodepipelineCustomActionTypeConfigurationProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getBooleanAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // queryable - computed: true, optional: false, required: false
  public get queryable() {
    return this.getBooleanAttribute('queryable');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getBooleanAttribute('secret');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference {
    return new DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCodepipelineCustomActionTypeInputArtifactDetails {
}

export function dataAwsccCodepipelineCustomActionTypeInputArtifactDetailsToTerraform(struct?: DataAwsccCodepipelineCustomActionTypeInputArtifactDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodepipelineCustomActionTypeInputArtifactDetailsToHclTerraform(struct?: DataAwsccCodepipelineCustomActionTypeInputArtifactDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCodepipelineCustomActionTypeInputArtifactDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodepipelineCustomActionTypeInputArtifactDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // maximum_count - computed: true, optional: false, required: false
  public get maximumCount() {
    return this.getNumberAttribute('maximum_count');
  }

  // minimum_count - computed: true, optional: false, required: false
  public get minimumCount() {
    return this.getNumberAttribute('minimum_count');
  }
}
export interface DataAwsccCodepipelineCustomActionTypeOutputArtifactDetails {
}

export function dataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsToTerraform(struct?: DataAwsccCodepipelineCustomActionTypeOutputArtifactDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsToHclTerraform(struct?: DataAwsccCodepipelineCustomActionTypeOutputArtifactDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCodepipelineCustomActionTypeOutputArtifactDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodepipelineCustomActionTypeOutputArtifactDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // maximum_count - computed: true, optional: false, required: false
  public get maximumCount() {
    return this.getNumberAttribute('maximum_count');
  }

  // minimum_count - computed: true, optional: false, required: false
  public get minimumCount() {
    return this.getNumberAttribute('minimum_count');
  }
}
export interface DataAwsccCodepipelineCustomActionTypeSettings {
}

export function dataAwsccCodepipelineCustomActionTypeSettingsToTerraform(struct?: DataAwsccCodepipelineCustomActionTypeSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodepipelineCustomActionTypeSettingsToHclTerraform(struct?: DataAwsccCodepipelineCustomActionTypeSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodepipelineCustomActionTypeSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCodepipelineCustomActionTypeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodepipelineCustomActionTypeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // entity_url_template - computed: true, optional: false, required: false
  public get entityUrlTemplate() {
    return this.getStringAttribute('entity_url_template');
  }

  // execution_url_template - computed: true, optional: false, required: false
  public get executionUrlTemplate() {
    return this.getStringAttribute('execution_url_template');
  }

  // revision_url_template - computed: true, optional: false, required: false
  public get revisionUrlTemplate() {
    return this.getStringAttribute('revision_url_template');
  }

  // third_party_configuration_url - computed: true, optional: false, required: false
  public get thirdPartyConfigurationUrl() {
    return this.getStringAttribute('third_party_configuration_url');
  }
}
export interface DataAwsccCodepipelineCustomActionTypeTags {
}

export function dataAwsccCodepipelineCustomActionTypeTagsToTerraform(struct?: DataAwsccCodepipelineCustomActionTypeTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodepipelineCustomActionTypeTagsToHclTerraform(struct?: DataAwsccCodepipelineCustomActionTypeTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodepipelineCustomActionTypeTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCodepipelineCustomActionTypeTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodepipelineCustomActionTypeTags | undefined) {
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

export class DataAwsccCodepipelineCustomActionTypeTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCodepipelineCustomActionTypeTagsOutputReference {
    return new DataAwsccCodepipelineCustomActionTypeTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/codepipeline_custom_action_type awscc_codepipeline_custom_action_type}
*/
export class DataAwsccCodepipelineCustomActionType extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_codepipeline_custom_action_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccCodepipelineCustomActionType resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccCodepipelineCustomActionType to import
  * @param importFromId The id of the existing DataAwsccCodepipelineCustomActionType that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/codepipeline_custom_action_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccCodepipelineCustomActionType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_codepipeline_custom_action_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/codepipeline_custom_action_type awscc_codepipeline_custom_action_type} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCodepipelineCustomActionTypeConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCodepipelineCustomActionTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_codepipeline_custom_action_type',
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

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // configuration_properties - computed: true, optional: false, required: false
  private _configurationProperties = new DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList(this, "configuration_properties", true);
  public get configurationProperties() {
    return this._configurationProperties;
  }

  // custom_action_type_id - computed: true, optional: false, required: false
  public get customActionTypeId() {
    return this.getStringAttribute('custom_action_type_id');
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

  // input_artifact_details - computed: true, optional: false, required: false
  private _inputArtifactDetails = new DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference(this, "input_artifact_details");
  public get inputArtifactDetails() {
    return this._inputArtifactDetails;
  }

  // output_artifact_details - computed: true, optional: false, required: false
  private _outputArtifactDetails = new DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference(this, "output_artifact_details");
  public get outputArtifactDetails() {
    return this._outputArtifactDetails;
  }

  // provider_name - computed: true, optional: false, required: false
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }

  // settings - computed: true, optional: false, required: false
  private _settings = new DataAwsccCodepipelineCustomActionTypeSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccCodepipelineCustomActionTypeTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
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
