// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/elementalinference_feed
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccElementalinferenceFeedConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/elementalinference_feed#id DataAwsccElementalinferenceFeed#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccElementalinferenceFeedOutputsOutputConfigClipping {
}

export function dataAwsccElementalinferenceFeedOutputsOutputConfigClippingToTerraform(struct?: DataAwsccElementalinferenceFeedOutputsOutputConfigClipping): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElementalinferenceFeedOutputsOutputConfigClippingToHclTerraform(struct?: DataAwsccElementalinferenceFeedOutputsOutputConfigClipping): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccElementalinferenceFeedOutputsOutputConfigClipping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElementalinferenceFeedOutputsOutputConfigClipping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // callback_metadata - computed: true, optional: false, required: false
  public get callbackMetadata() {
    return this.getStringAttribute('callback_metadata');
  }
}
export interface DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio {
}

export function dataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioToTerraform(struct?: DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioToHclTerraform(struct?: DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // height - computed: true, optional: false, required: false
  public get height() {
    return this.getNumberAttribute('height');
  }

  // width - computed: true, optional: false, required: false
  public get width() {
    return this.getNumberAttribute('width');
  }
}
export interface DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitling {
}

export function dataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingToTerraform(struct?: DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingToHclTerraform(struct?: DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aspect_ratio - computed: true, optional: false, required: false
  private _aspectRatio = new DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference(this, "aspect_ratio");
  public get aspectRatio() {
    return this._aspectRatio;
  }

  // dictionary - computed: true, optional: false, required: false
  public get dictionary() {
    return this.getStringAttribute('dictionary');
  }

  // language - computed: true, optional: false, required: false
  public get language() {
    return this.getStringAttribute('language');
  }

  // profanity_filter - computed: true, optional: false, required: false
  public get profanityFilter() {
    return this.getStringAttribute('profanity_filter');
  }
}
export interface DataAwsccElementalinferenceFeedOutputsOutputConfig {
}

export function dataAwsccElementalinferenceFeedOutputsOutputConfigToTerraform(struct?: DataAwsccElementalinferenceFeedOutputsOutputConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElementalinferenceFeedOutputsOutputConfigToHclTerraform(struct?: DataAwsccElementalinferenceFeedOutputsOutputConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccElementalinferenceFeedOutputsOutputConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElementalinferenceFeedOutputsOutputConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clipping - computed: true, optional: false, required: false
  private _clipping = new DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference(this, "clipping");
  public get clipping() {
    return this._clipping;
  }

  // cropping - computed: true, optional: false, required: false
  public get cropping() {
    return this.getStringAttribute('cropping');
  }

  // subtitling - computed: true, optional: false, required: false
  private _subtitling = new DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference(this, "subtitling");
  public get subtitling() {
    return this._subtitling;
  }
}
export interface DataAwsccElementalinferenceFeedOutputs {
}

export function dataAwsccElementalinferenceFeedOutputsToTerraform(struct?: DataAwsccElementalinferenceFeedOutputs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElementalinferenceFeedOutputsToHclTerraform(struct?: DataAwsccElementalinferenceFeedOutputs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElementalinferenceFeedOutputsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccElementalinferenceFeedOutputs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElementalinferenceFeedOutputs | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // output_config - computed: true, optional: false, required: false
  private _outputConfig = new DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference(this, "output_config");
  public get outputConfig() {
    return this._outputConfig;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataAwsccElementalinferenceFeedOutputsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccElementalinferenceFeedOutputsOutputReference {
    return new DataAwsccElementalinferenceFeedOutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/elementalinference_feed awscc_elementalinference_feed}
*/
export class DataAwsccElementalinferenceFeed extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_elementalinference_feed";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccElementalinferenceFeed resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccElementalinferenceFeed to import
  * @param importFromId The id of the existing DataAwsccElementalinferenceFeed that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/elementalinference_feed#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccElementalinferenceFeed to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_elementalinference_feed", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/elementalinference_feed awscc_elementalinference_feed} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccElementalinferenceFeedConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccElementalinferenceFeedConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_elementalinference_feed',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // data_endpoints - computed: true, optional: false, required: false
  public get dataEndpoints() {
    return this.getListAttribute('data_endpoints');
  }

  // feed_id - computed: true, optional: false, required: false
  public get feedId() {
    return this.getStringAttribute('feed_id');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // outputs - computed: true, optional: false, required: false
  private _outputs = new DataAwsccElementalinferenceFeedOutputsList(this, "outputs", false);
  public get outputs() {
    return this._outputs;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
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
