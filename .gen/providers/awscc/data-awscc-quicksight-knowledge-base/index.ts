// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/quicksight_knowledge_base
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccQuicksightKnowledgeBaseConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/quicksight_knowledge_base#id DataAwsccQuicksightKnowledgeBase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccQuicksightKnowledgeBaseAccessControlConfiguration {
}

export function dataAwsccQuicksightKnowledgeBaseAccessControlConfigurationToTerraform(struct?: DataAwsccQuicksightKnowledgeBaseAccessControlConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightKnowledgeBaseAccessControlConfigurationToHclTerraform(struct?: DataAwsccQuicksightKnowledgeBaseAccessControlConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightKnowledgeBaseAccessControlConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightKnowledgeBaseAccessControlConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_acl_enabled - computed: true, optional: false, required: false
  public get isAclEnabled() {
    return this.getBooleanAttribute('is_acl_enabled');
  }
}
export interface DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration {
}

export function dataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationToTerraform(struct?: DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationToHclTerraform(struct?: DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // template - computed: true, optional: false, required: false
  public get template() {
    return this.getStringAttribute('template');
  }
}
export interface DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfiguration {
}

export function dataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationToTerraform(struct?: DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationToHclTerraform(struct?: DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // template_configuration - computed: true, optional: false, required: false
  private _templateConfiguration = new DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference(this, "template_configuration");
  public get templateConfiguration() {
    return this._templateConfiguration;
  }
}
export interface DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration {
}

export function dataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationToTerraform(struct?: DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationToHclTerraform(struct?: DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audio_extraction_status - computed: true, optional: false, required: false
  public get audioExtractionStatus() {
    return this.getStringAttribute('audio_extraction_status');
  }
}
export interface DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration {
}

export function dataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationToTerraform(struct?: DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationToHclTerraform(struct?: DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // image_extraction_status - computed: true, optional: false, required: false
  public get imageExtractionStatus() {
    return this.getStringAttribute('image_extraction_status');
  }
}
export interface DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration {
}

export function dataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationToTerraform(struct?: DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationToHclTerraform(struct?: DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // video_extraction_status - computed: true, optional: false, required: false
  public get videoExtractionStatus() {
    return this.getStringAttribute('video_extraction_status');
  }

  // video_extraction_type - computed: true, optional: false, required: false
  public get videoExtractionType() {
    return this.getStringAttribute('video_extraction_type');
  }
}
export interface DataAwsccQuicksightKnowledgeBaseMediaExtractionConfiguration {
}

export function dataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationToTerraform(struct?: DataAwsccQuicksightKnowledgeBaseMediaExtractionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationToHclTerraform(struct?: DataAwsccQuicksightKnowledgeBaseMediaExtractionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightKnowledgeBaseMediaExtractionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightKnowledgeBaseMediaExtractionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audio_extraction_configuration - computed: true, optional: false, required: false
  private _audioExtractionConfiguration = new DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference(this, "audio_extraction_configuration");
  public get audioExtractionConfiguration() {
    return this._audioExtractionConfiguration;
  }

  // image_extraction_configuration - computed: true, optional: false, required: false
  private _imageExtractionConfiguration = new DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference(this, "image_extraction_configuration");
  public get imageExtractionConfiguration() {
    return this._imageExtractionConfiguration;
  }

  // video_extraction_configuration - computed: true, optional: false, required: false
  private _videoExtractionConfiguration = new DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference(this, "video_extraction_configuration");
  public get videoExtractionConfiguration() {
    return this._videoExtractionConfiguration;
  }
}
export interface DataAwsccQuicksightKnowledgeBasePermissions {
}

export function dataAwsccQuicksightKnowledgeBasePermissionsToTerraform(struct?: DataAwsccQuicksightKnowledgeBasePermissions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightKnowledgeBasePermissionsToHclTerraform(struct?: DataAwsccQuicksightKnowledgeBasePermissions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightKnowledgeBasePermissionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccQuicksightKnowledgeBasePermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightKnowledgeBasePermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  public get actions() {
    return this.getListAttribute('actions');
  }

  // principal - computed: true, optional: false, required: false
  public get principal() {
    return this.getStringAttribute('principal');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }
}

export class DataAwsccQuicksightKnowledgeBasePermissionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccQuicksightKnowledgeBasePermissionsOutputReference {
    return new DataAwsccQuicksightKnowledgeBasePermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccQuicksightKnowledgeBaseTags {
}

export function dataAwsccQuicksightKnowledgeBaseTagsToTerraform(struct?: DataAwsccQuicksightKnowledgeBaseTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightKnowledgeBaseTagsToHclTerraform(struct?: DataAwsccQuicksightKnowledgeBaseTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightKnowledgeBaseTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccQuicksightKnowledgeBaseTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightKnowledgeBaseTags | undefined) {
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

export class DataAwsccQuicksightKnowledgeBaseTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccQuicksightKnowledgeBaseTagsOutputReference {
    return new DataAwsccQuicksightKnowledgeBaseTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/quicksight_knowledge_base awscc_quicksight_knowledge_base}
*/
export class DataAwsccQuicksightKnowledgeBase extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_quicksight_knowledge_base";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccQuicksightKnowledgeBase resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccQuicksightKnowledgeBase to import
  * @param importFromId The id of the existing DataAwsccQuicksightKnowledgeBase that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/quicksight_knowledge_base#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccQuicksightKnowledgeBase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_quicksight_knowledge_base", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/quicksight_knowledge_base awscc_quicksight_knowledge_base} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccQuicksightKnowledgeBaseConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccQuicksightKnowledgeBaseConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_quicksight_knowledge_base',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_control_configuration - computed: true, optional: false, required: false
  private _accessControlConfiguration = new DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference(this, "access_control_configuration");
  public get accessControlConfiguration() {
    return this._accessControlConfiguration;
  }

  // aws_account_id - computed: true, optional: false, required: false
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // data_source_arn - computed: true, optional: false, required: false
  public get dataSourceArn() {
    return this.getStringAttribute('data_source_arn');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // document_count - computed: true, optional: false, required: false
  public get documentCount() {
    return this.getNumberAttribute('document_count');
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

  // is_email_notification_opted_for_ingestion_failures - computed: true, optional: false, required: false
  public get isEmailNotificationOptedForIngestionFailures() {
    return this.getBooleanAttribute('is_email_notification_opted_for_ingestion_failures');
  }

  // knowledge_base_arn - computed: true, optional: false, required: false
  public get knowledgeBaseArn() {
    return this.getStringAttribute('knowledge_base_arn');
  }

  // knowledge_base_configuration - computed: true, optional: false, required: false
  private _knowledgeBaseConfiguration = new DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference(this, "knowledge_base_configuration");
  public get knowledgeBaseConfiguration() {
    return this._knowledgeBaseConfiguration;
  }

  // knowledge_base_id - computed: true, optional: false, required: false
  public get knowledgeBaseId() {
    return this.getStringAttribute('knowledge_base_id');
  }

  // knowledge_base_size_bytes - computed: true, optional: false, required: false
  public get knowledgeBaseSizeBytes() {
    return this.getNumberAttribute('knowledge_base_size_bytes');
  }

  // media_extraction_configuration - computed: true, optional: false, required: false
  private _mediaExtractionConfiguration = new DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference(this, "media_extraction_configuration");
  public get mediaExtractionConfiguration() {
    return this._mediaExtractionConfiguration;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataAwsccQuicksightKnowledgeBasePermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // primary_owner_arn - computed: true, optional: false, required: false
  public get primaryOwnerArn() {
    return this.getStringAttribute('primary_owner_arn');
  }

  // primary_owner_username - computed: true, optional: false, required: false
  public get primaryOwnerUsername() {
    return this.getStringAttribute('primary_owner_username');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccQuicksightKnowledgeBaseTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
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
