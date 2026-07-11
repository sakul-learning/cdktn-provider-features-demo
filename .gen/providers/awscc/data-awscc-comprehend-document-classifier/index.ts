// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/comprehend_document_classifier
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccComprehendDocumentClassifierConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/comprehend_document_classifier#id DataAwsccComprehendDocumentClassifier#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifests {
}

export function dataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsToTerraform(struct?: DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifests): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsToHclTerraform(struct?: DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifests): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifests | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_names - computed: true, optional: false, required: false
  public get attributeNames() {
    return cdktn.Fn.tolist(this.getListAttribute('attribute_names'));
  }

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }

  // split - computed: true, optional: false, required: false
  public get split() {
    return this.getStringAttribute('split');
  }
}

export class DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference {
    return new DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfig {
}

export function dataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigToTerraform(struct?: DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigToHclTerraform(struct?: DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // document_read_action - computed: true, optional: false, required: false
  public get documentReadAction() {
    return this.getStringAttribute('document_read_action');
  }

  // document_read_mode - computed: true, optional: false, required: false
  public get documentReadMode() {
    return this.getStringAttribute('document_read_mode');
  }

  // feature_types - computed: true, optional: false, required: false
  public get featureTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('feature_types'));
  }
}
export interface DataAwsccComprehendDocumentClassifierInputDataConfigDocuments {
}

export function dataAwsccComprehendDocumentClassifierInputDataConfigDocumentsToTerraform(struct?: DataAwsccComprehendDocumentClassifierInputDataConfigDocuments): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccComprehendDocumentClassifierInputDataConfigDocumentsToHclTerraform(struct?: DataAwsccComprehendDocumentClassifierInputDataConfigDocuments): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccComprehendDocumentClassifierInputDataConfigDocuments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccComprehendDocumentClassifierInputDataConfigDocuments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }

  // test_s3_uri - computed: true, optional: false, required: false
  public get testS3Uri() {
    return this.getStringAttribute('test_s3_uri');
  }
}
export interface DataAwsccComprehendDocumentClassifierInputDataConfig {
}

export function dataAwsccComprehendDocumentClassifierInputDataConfigToTerraform(struct?: DataAwsccComprehendDocumentClassifierInputDataConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccComprehendDocumentClassifierInputDataConfigToHclTerraform(struct?: DataAwsccComprehendDocumentClassifierInputDataConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccComprehendDocumentClassifierInputDataConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccComprehendDocumentClassifierInputDataConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // augmented_manifests - computed: true, optional: false, required: false
  private _augmentedManifests = new DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsList(this, "augmented_manifests", true);
  public get augmentedManifests() {
    return this._augmentedManifests;
  }

  // data_format - computed: true, optional: false, required: false
  public get dataFormat() {
    return this.getStringAttribute('data_format');
  }

  // document_reader_config - computed: true, optional: false, required: false
  private _documentReaderConfig = new DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference(this, "document_reader_config");
  public get documentReaderConfig() {
    return this._documentReaderConfig;
  }

  // document_type - computed: true, optional: false, required: false
  public get documentType() {
    return this.getStringAttribute('document_type');
  }

  // documents - computed: true, optional: false, required: false
  private _documents = new DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference(this, "documents");
  public get documents() {
    return this._documents;
  }

  // label_delimiter - computed: true, optional: false, required: false
  public get labelDelimiter() {
    return this.getStringAttribute('label_delimiter');
  }

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }

  // test_s3_uri - computed: true, optional: false, required: false
  public get testS3Uri() {
    return this.getStringAttribute('test_s3_uri');
  }
}
export interface DataAwsccComprehendDocumentClassifierOutputDataConfig {
}

export function dataAwsccComprehendDocumentClassifierOutputDataConfigToTerraform(struct?: DataAwsccComprehendDocumentClassifierOutputDataConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccComprehendDocumentClassifierOutputDataConfigToHclTerraform(struct?: DataAwsccComprehendDocumentClassifierOutputDataConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccComprehendDocumentClassifierOutputDataConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccComprehendDocumentClassifierOutputDataConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
}
export interface DataAwsccComprehendDocumentClassifierTags {
}

export function dataAwsccComprehendDocumentClassifierTagsToTerraform(struct?: DataAwsccComprehendDocumentClassifierTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccComprehendDocumentClassifierTagsToHclTerraform(struct?: DataAwsccComprehendDocumentClassifierTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccComprehendDocumentClassifierTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccComprehendDocumentClassifierTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccComprehendDocumentClassifierTags | undefined) {
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

export class DataAwsccComprehendDocumentClassifierTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccComprehendDocumentClassifierTagsOutputReference {
    return new DataAwsccComprehendDocumentClassifierTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccComprehendDocumentClassifierVpcConfig {
}

export function dataAwsccComprehendDocumentClassifierVpcConfigToTerraform(struct?: DataAwsccComprehendDocumentClassifierVpcConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccComprehendDocumentClassifierVpcConfigToHclTerraform(struct?: DataAwsccComprehendDocumentClassifierVpcConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccComprehendDocumentClassifierVpcConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccComprehendDocumentClassifierVpcConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccComprehendDocumentClassifierVpcConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return cdktn.Fn.tolist(this.getListAttribute('security_group_ids'));
  }

  // subnets - computed: true, optional: false, required: false
  public get subnets() {
    return cdktn.Fn.tolist(this.getListAttribute('subnets'));
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/comprehend_document_classifier awscc_comprehend_document_classifier}
*/
export class DataAwsccComprehendDocumentClassifier extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_comprehend_document_classifier";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccComprehendDocumentClassifier resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccComprehendDocumentClassifier to import
  * @param importFromId The id of the existing DataAwsccComprehendDocumentClassifier that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/comprehend_document_classifier#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccComprehendDocumentClassifier to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_comprehend_document_classifier", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/comprehend_document_classifier awscc_comprehend_document_classifier} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccComprehendDocumentClassifierConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccComprehendDocumentClassifierConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_comprehend_document_classifier',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // data_access_role_arn - computed: true, optional: false, required: false
  public get dataAccessRoleArn() {
    return this.getStringAttribute('data_access_role_arn');
  }

  // document_classifier_name - computed: true, optional: false, required: false
  public get documentClassifierName() {
    return this.getStringAttribute('document_classifier_name');
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

  // input_data_config - computed: true, optional: false, required: false
  private _inputDataConfig = new DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference(this, "input_data_config");
  public get inputDataConfig() {
    return this._inputDataConfig;
  }

  // language_code - computed: true, optional: false, required: false
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // model_kms_key_id - computed: true, optional: false, required: false
  public get modelKmsKeyId() {
    return this.getStringAttribute('model_kms_key_id');
  }

  // model_policy - computed: true, optional: false, required: false
  public get modelPolicy() {
    return this.getStringAttribute('model_policy');
  }

  // output_data_config - computed: true, optional: false, required: false
  private _outputDataConfig = new DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference(this, "output_data_config");
  public get outputDataConfig() {
    return this._outputDataConfig;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccComprehendDocumentClassifierTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // version_name - computed: true, optional: false, required: false
  public get versionName() {
    return this.getStringAttribute('version_name');
  }

  // volume_kms_key_id - computed: true, optional: false, required: false
  public get volumeKmsKeyId() {
    return this.getStringAttribute('volume_kms_key_id');
  }

  // vpc_config - computed: true, optional: false, required: false
  private _vpcConfig = new DataAwsccComprehendDocumentClassifierVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
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
