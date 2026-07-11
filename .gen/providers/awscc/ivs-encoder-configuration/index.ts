// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ivs_encoder_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IvsEncoderConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Encoder configuration name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ivs_encoder_configuration#name IvsEncoderConfiguration#name}
  */
  readonly name?: string;
  /**
  * An array of key-value pairs to apply to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ivs_encoder_configuration#tags IvsEncoderConfiguration#tags}
  */
  readonly tags?: IvsEncoderConfigurationTags[] | cdktn.IResolvable;
  /**
  * Video configuration. Default: video resolution 1280x720, bitrate 2500 kbps, 30 fps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ivs_encoder_configuration#video IvsEncoderConfiguration#video}
  */
  readonly video?: IvsEncoderConfigurationVideo;
}
export interface IvsEncoderConfigurationTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ivs_encoder_configuration#key IvsEncoderConfiguration#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ivs_encoder_configuration#value IvsEncoderConfiguration#value}
  */
  readonly value?: string;
}

export function ivsEncoderConfigurationTagsToTerraform(struct?: IvsEncoderConfigurationTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function ivsEncoderConfigurationTagsToHclTerraform(struct?: IvsEncoderConfigurationTags | cdktn.IResolvable): any {
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

export class IvsEncoderConfigurationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IvsEncoderConfigurationTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IvsEncoderConfigurationTags | cdktn.IResolvable | undefined) {
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

export class IvsEncoderConfigurationTagsList extends cdktn.ComplexList {
  public internalValue? : IvsEncoderConfigurationTags[] | cdktn.IResolvable

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
  public get(index: number): IvsEncoderConfigurationTagsOutputReference {
    return new IvsEncoderConfigurationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IvsEncoderConfigurationVideo {
  /**
  * Bitrate for generated output, in bps. Default: 2500000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ivs_encoder_configuration#bitrate IvsEncoderConfiguration#bitrate}
  */
  readonly bitrate?: number;
  /**
  * Video frame rate, in fps. Default: 30.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ivs_encoder_configuration#framerate IvsEncoderConfiguration#framerate}
  */
  readonly framerate?: number;
  /**
  * Video-resolution height. This must be an even number. Note that the maximum value is determined by width times height, such that the maximum total pixels is 2073600 (1920x1080 or 1080x1920). Default: 720.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ivs_encoder_configuration#height IvsEncoderConfiguration#height}
  */
  readonly height?: number;
  /**
  * Video-resolution width. This must be an even number. Note that the maximum value is determined by width times height, such that the maximum total pixels is 2073600 (1920x1080 or 1080x1920). Default: 1280.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ivs_encoder_configuration#width IvsEncoderConfiguration#width}
  */
  readonly width?: number;
}

export function ivsEncoderConfigurationVideoToTerraform(struct?: IvsEncoderConfigurationVideo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bitrate: cdktn.numberToTerraform(struct!.bitrate),
    framerate: cdktn.numberToTerraform(struct!.framerate),
    height: cdktn.numberToTerraform(struct!.height),
    width: cdktn.numberToTerraform(struct!.width),
  }
}


export function ivsEncoderConfigurationVideoToHclTerraform(struct?: IvsEncoderConfigurationVideo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bitrate: {
      value: cdktn.numberToHclTerraform(struct!.bitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    framerate: {
      value: cdktn.numberToHclTerraform(struct!.framerate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    height: {
      value: cdktn.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    width: {
      value: cdktn.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IvsEncoderConfigurationVideoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IvsEncoderConfigurationVideo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitrate = this._bitrate;
    }
    if (this._framerate !== undefined) {
      hasAnyValues = true;
      internalValueResult.framerate = this._framerate;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IvsEncoderConfigurationVideo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bitrate = undefined;
      this._framerate = undefined;
      this._height = undefined;
      this._width = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bitrate = value.bitrate;
      this._framerate = value.framerate;
      this._height = value.height;
      this._width = value.width;
    }
  }

  // bitrate - computed: true, optional: true, required: false
  private _bitrate?: number;
  public get bitrate() {
    return this.getNumberAttribute('bitrate');
  }
  public set bitrate(value: number) {
    this._bitrate = value;
  }
  public resetBitrate() {
    this._bitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitrateInput() {
    return this._bitrate;
  }

  // framerate - computed: true, optional: true, required: false
  private _framerate?: number;
  public get framerate() {
    return this.getNumberAttribute('framerate');
  }
  public set framerate(value: number) {
    this._framerate = value;
  }
  public resetFramerate() {
    this._framerate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get framerateInput() {
    return this._framerate;
  }

  // height - computed: true, optional: true, required: false
  private _height?: number;
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // width - computed: true, optional: true, required: false
  private _width?: number;
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ivs_encoder_configuration awscc_ivs_encoder_configuration}
*/
export class IvsEncoderConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ivs_encoder_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IvsEncoderConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IvsEncoderConfiguration to import
  * @param importFromId The id of the existing IvsEncoderConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ivs_encoder_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IvsEncoderConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ivs_encoder_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ivs_encoder_configuration awscc_ivs_encoder_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IvsEncoderConfigurationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IvsEncoderConfigurationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_ivs_encoder_configuration',
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
    this._name = config.name;
    this._tags.internalValue = config.tags;
    this._video.internalValue = config.video;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new IvsEncoderConfigurationTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: IvsEncoderConfigurationTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // video - computed: true, optional: true, required: false
  private _video = new IvsEncoderConfigurationVideoOutputReference(this, "video");
  public get video() {
    return this._video;
  }
  public putVideo(value: IvsEncoderConfigurationVideo) {
    this._video.internalValue = value;
  }
  public resetVideo() {
    this._video.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoInput() {
    return this._video.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktn.stringToTerraform(this._name),
      tags: cdktn.listMapper(ivsEncoderConfigurationTagsToTerraform, false)(this._tags.internalValue),
      video: ivsEncoderConfigurationVideoToTerraform(this._video.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(ivsEncoderConfigurationTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IvsEncoderConfigurationTagsList",
      },
      video: {
        value: ivsEncoderConfigurationVideoToHclTerraform(this._video.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IvsEncoderConfigurationVideo",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
