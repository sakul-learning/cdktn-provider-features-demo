// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_dataset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IotsitewiseDatasetConfig extends cdktn.TerraformMetaArguments {
  /**
  * A description about the dataset, and its functionality.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_dataset#dataset_description IotsitewiseDataset#dataset_description}
  */
  readonly datasetDescription?: string;
  /**
  * The name of the dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_dataset#dataset_name IotsitewiseDataset#dataset_name}
  */
  readonly datasetName: string;
  /**
  * The data source for the dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_dataset#dataset_source IotsitewiseDataset#dataset_source}
  */
  readonly datasetSource: IotsitewiseDatasetDatasetSource;
  /**
  * An array of key-value pairs to apply to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_dataset#tags IotsitewiseDataset#tags}
  */
  readonly tags?: IotsitewiseDatasetTags[] | cdktn.IResolvable;
}
export interface IotsitewiseDatasetDatasetSourceSourceDetailKendra {
  /**
  * The knowledgeBaseArn details for the Kendra dataset source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_dataset#knowledge_base_arn IotsitewiseDataset#knowledge_base_arn}
  */
  readonly knowledgeBaseArn?: string;
  /**
  * The roleARN details for the Kendra dataset source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_dataset#role_arn IotsitewiseDataset#role_arn}
  */
  readonly roleArn?: string;
}

export function iotsitewiseDatasetDatasetSourceSourceDetailKendraToTerraform(struct?: IotsitewiseDatasetDatasetSourceSourceDetailKendra | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    knowledge_base_arn: cdktn.stringToTerraform(struct!.knowledgeBaseArn),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function iotsitewiseDatasetDatasetSourceSourceDetailKendraToHclTerraform(struct?: IotsitewiseDatasetDatasetSourceSourceDetailKendra | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    knowledge_base_arn: {
      value: cdktn.stringToHclTerraform(struct!.knowledgeBaseArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotsitewiseDatasetDatasetSourceSourceDetailKendra | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._knowledgeBaseArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.knowledgeBaseArn = this._knowledgeBaseArn;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseDatasetDatasetSourceSourceDetailKendra | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._knowledgeBaseArn = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._knowledgeBaseArn = value.knowledgeBaseArn;
      this._roleArn = value.roleArn;
    }
  }

  // knowledge_base_arn - computed: true, optional: true, required: false
  private _knowledgeBaseArn?: string;
  public get knowledgeBaseArn() {
    return this.getStringAttribute('knowledge_base_arn');
  }
  public set knowledgeBaseArn(value: string) {
    this._knowledgeBaseArn = value;
  }
  public resetKnowledgeBaseArn() {
    this._knowledgeBaseArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeBaseArnInput() {
    return this._knowledgeBaseArn;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface IotsitewiseDatasetDatasetSourceSourceDetail {
  /**
  * Contains details about the Kendra dataset source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_dataset#kendra IotsitewiseDataset#kendra}
  */
  readonly kendra?: IotsitewiseDatasetDatasetSourceSourceDetailKendra;
}

export function iotsitewiseDatasetDatasetSourceSourceDetailToTerraform(struct?: IotsitewiseDatasetDatasetSourceSourceDetail | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kendra: iotsitewiseDatasetDatasetSourceSourceDetailKendraToTerraform(struct!.kendra),
  }
}


export function iotsitewiseDatasetDatasetSourceSourceDetailToHclTerraform(struct?: IotsitewiseDatasetDatasetSourceSourceDetail | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kendra: {
      value: iotsitewiseDatasetDatasetSourceSourceDetailKendraToHclTerraform(struct!.kendra),
      isBlock: true,
      type: "struct",
      storageClassType: "IotsitewiseDatasetDatasetSourceSourceDetailKendra",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseDatasetDatasetSourceSourceDetailOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotsitewiseDatasetDatasetSourceSourceDetail | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kendra?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kendra = this._kendra?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseDatasetDatasetSourceSourceDetail | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kendra.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kendra.internalValue = value.kendra;
    }
  }

  // kendra - computed: true, optional: true, required: false
  private _kendra = new IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference(this, "kendra");
  public get kendra() {
    return this._kendra;
  }
  public putKendra(value: IotsitewiseDatasetDatasetSourceSourceDetailKendra) {
    this._kendra.internalValue = value;
  }
  public resetKendra() {
    this._kendra.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kendraInput() {
    return this._kendra.internalValue;
  }
}
export interface IotsitewiseDatasetDatasetSource {
  /**
  * The details of the dataset source associated with the dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_dataset#source_detail IotsitewiseDataset#source_detail}
  */
  readonly sourceDetail?: IotsitewiseDatasetDatasetSourceSourceDetail;
  /**
  * The format of the dataset source associated with the dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_dataset#source_format IotsitewiseDataset#source_format}
  */
  readonly sourceFormat: string;
  /**
  * The type of data source for the dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_dataset#source_type IotsitewiseDataset#source_type}
  */
  readonly sourceType: string;
}

export function iotsitewiseDatasetDatasetSourceToTerraform(struct?: IotsitewiseDatasetDatasetSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source_detail: iotsitewiseDatasetDatasetSourceSourceDetailToTerraform(struct!.sourceDetail),
    source_format: cdktn.stringToTerraform(struct!.sourceFormat),
    source_type: cdktn.stringToTerraform(struct!.sourceType),
  }
}


export function iotsitewiseDatasetDatasetSourceToHclTerraform(struct?: IotsitewiseDatasetDatasetSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source_detail: {
      value: iotsitewiseDatasetDatasetSourceSourceDetailToHclTerraform(struct!.sourceDetail),
      isBlock: true,
      type: "struct",
      storageClassType: "IotsitewiseDatasetDatasetSourceSourceDetail",
    },
    source_format: {
      value: cdktn.stringToHclTerraform(struct!.sourceFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktn.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseDatasetDatasetSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotsitewiseDatasetDatasetSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceDetail?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDetail = this._sourceDetail?.internalValue;
    }
    if (this._sourceFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFormat = this._sourceFormat;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseDatasetDatasetSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceDetail.internalValue = undefined;
      this._sourceFormat = undefined;
      this._sourceType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceDetail.internalValue = value.sourceDetail;
      this._sourceFormat = value.sourceFormat;
      this._sourceType = value.sourceType;
    }
  }

  // source_detail - computed: true, optional: true, required: false
  private _sourceDetail = new IotsitewiseDatasetDatasetSourceSourceDetailOutputReference(this, "source_detail");
  public get sourceDetail() {
    return this._sourceDetail;
  }
  public putSourceDetail(value: IotsitewiseDatasetDatasetSourceSourceDetail) {
    this._sourceDetail.internalValue = value;
  }
  public resetSourceDetail() {
    this._sourceDetail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDetailInput() {
    return this._sourceDetail.internalValue;
  }

  // source_format - computed: false, optional: false, required: true
  private _sourceFormat?: string;
  public get sourceFormat() {
    return this.getStringAttribute('source_format');
  }
  public set sourceFormat(value: string) {
    this._sourceFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFormatInput() {
    return this._sourceFormat;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string;
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }
}
export interface IotsitewiseDatasetTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_dataset#key IotsitewiseDataset#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_dataset#value IotsitewiseDataset#value}
  */
  readonly value?: string;
}

export function iotsitewiseDatasetTagsToTerraform(struct?: IotsitewiseDatasetTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function iotsitewiseDatasetTagsToHclTerraform(struct?: IotsitewiseDatasetTags | cdktn.IResolvable): any {
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

export class IotsitewiseDatasetTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotsitewiseDatasetTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IotsitewiseDatasetTags | cdktn.IResolvable | undefined) {
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

export class IotsitewiseDatasetTagsList extends cdktn.ComplexList {
  public internalValue? : IotsitewiseDatasetTags[] | cdktn.IResolvable

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
  public get(index: number): IotsitewiseDatasetTagsOutputReference {
    return new IotsitewiseDatasetTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_dataset awscc_iotsitewise_dataset}
*/
export class IotsitewiseDataset extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iotsitewise_dataset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IotsitewiseDataset resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IotsitewiseDataset to import
  * @param importFromId The id of the existing IotsitewiseDataset that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_dataset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IotsitewiseDataset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotsitewise_dataset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_dataset awscc_iotsitewise_dataset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotsitewiseDatasetConfig
  */
  public constructor(scope: Construct, id: string, config: IotsitewiseDatasetConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotsitewise_dataset',
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
    this._datasetDescription = config.datasetDescription;
    this._datasetName = config.datasetName;
    this._datasetSource.internalValue = config.datasetSource;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dataset_arn - computed: true, optional: false, required: false
  public get datasetArn() {
    return this.getStringAttribute('dataset_arn');
  }

  // dataset_description - computed: true, optional: true, required: false
  private _datasetDescription?: string;
  public get datasetDescription() {
    return this.getStringAttribute('dataset_description');
  }
  public set datasetDescription(value: string) {
    this._datasetDescription = value;
  }
  public resetDatasetDescription() {
    this._datasetDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetDescriptionInput() {
    return this._datasetDescription;
  }

  // dataset_id - computed: true, optional: false, required: false
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }

  // dataset_name - computed: false, optional: false, required: true
  private _datasetName?: string;
  public get datasetName() {
    return this.getStringAttribute('dataset_name');
  }
  public set datasetName(value: string) {
    this._datasetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetNameInput() {
    return this._datasetName;
  }

  // dataset_source - computed: false, optional: false, required: true
  private _datasetSource = new IotsitewiseDatasetDatasetSourceOutputReference(this, "dataset_source");
  public get datasetSource() {
    return this._datasetSource;
  }
  public putDatasetSource(value: IotsitewiseDatasetDatasetSource) {
    this._datasetSource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetSourceInput() {
    return this._datasetSource.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new IotsitewiseDatasetTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: IotsitewiseDatasetTags[] | cdktn.IResolvable) {
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
      dataset_description: cdktn.stringToTerraform(this._datasetDescription),
      dataset_name: cdktn.stringToTerraform(this._datasetName),
      dataset_source: iotsitewiseDatasetDatasetSourceToTerraform(this._datasetSource.internalValue),
      tags: cdktn.listMapper(iotsitewiseDatasetTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dataset_description: {
        value: cdktn.stringToHclTerraform(this._datasetDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dataset_name: {
        value: cdktn.stringToHclTerraform(this._datasetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dataset_source: {
        value: iotsitewiseDatasetDatasetSourceToHclTerraform(this._datasetSource.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IotsitewiseDatasetDatasetSource",
      },
      tags: {
        value: cdktn.listMapperHcl(iotsitewiseDatasetTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IotsitewiseDatasetTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
