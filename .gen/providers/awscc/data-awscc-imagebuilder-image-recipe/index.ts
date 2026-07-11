// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/imagebuilder_image_recipe
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccImagebuilderImageRecipeConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/imagebuilder_image_recipe#id DataAwsccImagebuilderImageRecipe#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent {
}

export function dataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentToTerraform(struct?: DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentToHclTerraform(struct?: DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // uninstall_after_build - computed: true, optional: false, required: false
  public get uninstallAfterBuild() {
    return this.getBooleanAttribute('uninstall_after_build');
  }
}
export interface DataAwsccImagebuilderImageRecipeAdditionalInstanceConfiguration {
}

export function dataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationToTerraform(struct?: DataAwsccImagebuilderImageRecipeAdditionalInstanceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationToHclTerraform(struct?: DataAwsccImagebuilderImageRecipeAdditionalInstanceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccImagebuilderImageRecipeAdditionalInstanceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccImagebuilderImageRecipeAdditionalInstanceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // systems_manager_agent - computed: true, optional: false, required: false
  private _systemsManagerAgent = new DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference(this, "systems_manager_agent");
  public get systemsManagerAgent() {
    return this._systemsManagerAgent;
  }

  // user_data_override - computed: true, optional: false, required: false
  public get userDataOverride() {
    return this.getStringAttribute('user_data_override');
  }
}
export interface DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbs {
}

export function dataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsToTerraform(struct?: DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsToHclTerraform(struct?: DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delete_on_termination - computed: true, optional: false, required: false
  public get deleteOnTermination() {
    return this.getBooleanAttribute('delete_on_termination');
  }

  // encrypted - computed: true, optional: false, required: false
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }

  // iops - computed: true, optional: false, required: false
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // snapshot_id - computed: true, optional: false, required: false
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }

  // throughput - computed: true, optional: false, required: false
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }

  // volume_size - computed: true, optional: false, required: false
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }

  // volume_type - computed: true, optional: false, required: false
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
}
export interface DataAwsccImagebuilderImageRecipeBlockDeviceMappings {
}

export function dataAwsccImagebuilderImageRecipeBlockDeviceMappingsToTerraform(struct?: DataAwsccImagebuilderImageRecipeBlockDeviceMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccImagebuilderImageRecipeBlockDeviceMappingsToHclTerraform(struct?: DataAwsccImagebuilderImageRecipeBlockDeviceMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccImagebuilderImageRecipeBlockDeviceMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccImagebuilderImageRecipeBlockDeviceMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // ebs - computed: true, optional: false, required: false
  private _ebs = new DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference(this, "ebs");
  public get ebs() {
    return this._ebs;
  }

  // no_device - computed: true, optional: false, required: false
  public get noDevice() {
    return this.getStringAttribute('no_device');
  }

  // virtual_name - computed: true, optional: false, required: false
  public get virtualName() {
    return this.getStringAttribute('virtual_name');
  }
}

export class DataAwsccImagebuilderImageRecipeBlockDeviceMappingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference {
    return new DataAwsccImagebuilderImageRecipeBlockDeviceMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccImagebuilderImageRecipeComponentsParameters {
}

export function dataAwsccImagebuilderImageRecipeComponentsParametersToTerraform(struct?: DataAwsccImagebuilderImageRecipeComponentsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccImagebuilderImageRecipeComponentsParametersToHclTerraform(struct?: DataAwsccImagebuilderImageRecipeComponentsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccImagebuilderImageRecipeComponentsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccImagebuilderImageRecipeComponentsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getListAttribute('value');
  }
}

export class DataAwsccImagebuilderImageRecipeComponentsParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference {
    return new DataAwsccImagebuilderImageRecipeComponentsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccImagebuilderImageRecipeComponents {
}

export function dataAwsccImagebuilderImageRecipeComponentsToTerraform(struct?: DataAwsccImagebuilderImageRecipeComponents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccImagebuilderImageRecipeComponentsToHclTerraform(struct?: DataAwsccImagebuilderImageRecipeComponents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccImagebuilderImageRecipeComponentsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccImagebuilderImageRecipeComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccImagebuilderImageRecipeComponents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // component_arn - computed: true, optional: false, required: false
  public get componentArn() {
    return this.getStringAttribute('component_arn');
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new DataAwsccImagebuilderImageRecipeComponentsParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
}

export class DataAwsccImagebuilderImageRecipeComponentsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccImagebuilderImageRecipeComponentsOutputReference {
    return new DataAwsccImagebuilderImageRecipeComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccImagebuilderImageRecipeLatestVersion {
}

export function dataAwsccImagebuilderImageRecipeLatestVersionToTerraform(struct?: DataAwsccImagebuilderImageRecipeLatestVersion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccImagebuilderImageRecipeLatestVersionToHclTerraform(struct?: DataAwsccImagebuilderImageRecipeLatestVersion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccImagebuilderImageRecipeLatestVersionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccImagebuilderImageRecipeLatestVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccImagebuilderImageRecipeLatestVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // major - computed: true, optional: false, required: false
  public get major() {
    return this.getStringAttribute('major');
  }

  // minor - computed: true, optional: false, required: false
  public get minor() {
    return this.getStringAttribute('minor');
  }

  // patch - computed: true, optional: false, required: false
  public get patch() {
    return this.getStringAttribute('patch');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/imagebuilder_image_recipe awscc_imagebuilder_image_recipe}
*/
export class DataAwsccImagebuilderImageRecipe extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_imagebuilder_image_recipe";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccImagebuilderImageRecipe resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccImagebuilderImageRecipe to import
  * @param importFromId The id of the existing DataAwsccImagebuilderImageRecipe that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/imagebuilder_image_recipe#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccImagebuilderImageRecipe to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_imagebuilder_image_recipe", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/imagebuilder_image_recipe awscc_imagebuilder_image_recipe} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccImagebuilderImageRecipeConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccImagebuilderImageRecipeConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_imagebuilder_image_recipe',
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

  // additional_instance_configuration - computed: true, optional: false, required: false
  private _additionalInstanceConfiguration = new DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference(this, "additional_instance_configuration");
  public get additionalInstanceConfiguration() {
    return this._additionalInstanceConfiguration;
  }

  // ami_tags - computed: true, optional: false, required: false
  private _amiTags = new cdktn.StringMap(this, "ami_tags");
  public get amiTags() {
    return this._amiTags;
  }

  // ami_watermarks - computed: true, optional: false, required: false
  public get amiWatermarks() {
    return this.getListAttribute('ami_watermarks');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // block_device_mappings - computed: true, optional: false, required: false
  private _blockDeviceMappings = new DataAwsccImagebuilderImageRecipeBlockDeviceMappingsList(this, "block_device_mappings", false);
  public get blockDeviceMappings() {
    return this._blockDeviceMappings;
  }

  // components - computed: true, optional: false, required: false
  private _components = new DataAwsccImagebuilderImageRecipeComponentsList(this, "components", false);
  public get components() {
    return this._components;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // latest_version - computed: true, optional: false, required: false
  private _latestVersion = new DataAwsccImagebuilderImageRecipeLatestVersionOutputReference(this, "latest_version");
  public get latestVersion() {
    return this._latestVersion;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_image - computed: true, optional: false, required: false
  public get parentImage() {
    return this.getStringAttribute('parent_image');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // working_directory - computed: true, optional: false, required: false
  public get workingDirectory() {
    return this.getStringAttribute('working_directory');
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
