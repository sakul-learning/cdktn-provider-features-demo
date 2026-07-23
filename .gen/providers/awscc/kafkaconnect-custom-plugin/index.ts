// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kafkaconnect_custom_plugin
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface KafkaconnectCustomPluginConfig extends cdktn.TerraformMetaArguments {
  /**
  * The type of the plugin file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kafkaconnect_custom_plugin#content_type KafkaconnectCustomPlugin#content_type}
  */
  readonly contentType: string;
  /**
  * A summary description of the custom plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kafkaconnect_custom_plugin#description KafkaconnectCustomPlugin#description}
  */
  readonly description?: string;
  /**
  * Information about the location of a custom plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kafkaconnect_custom_plugin#location KafkaconnectCustomPlugin#location}
  */
  readonly location: KafkaconnectCustomPluginLocation;
  /**
  * The name of the custom plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kafkaconnect_custom_plugin#name KafkaconnectCustomPlugin#name}
  */
  readonly name: string;
  /**
  * An array of key-value pairs to apply to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kafkaconnect_custom_plugin#tags KafkaconnectCustomPlugin#tags}
  */
  readonly tags?: KafkaconnectCustomPluginTags[] | cdktn.IResolvable;
}
export interface KafkaconnectCustomPluginFileDescription {
}

export function kafkaconnectCustomPluginFileDescriptionToTerraform(struct?: KafkaconnectCustomPluginFileDescription): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function kafkaconnectCustomPluginFileDescriptionToHclTerraform(struct?: KafkaconnectCustomPluginFileDescription): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class KafkaconnectCustomPluginFileDescriptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KafkaconnectCustomPluginFileDescription | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaconnectCustomPluginFileDescription | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_md_5 - computed: true, optional: false, required: false
  public get fileMd5() {
    return this.getStringAttribute('file_md_5');
  }

  // file_size - computed: true, optional: false, required: false
  public get fileSize() {
    return this.getNumberAttribute('file_size');
  }
}
export interface KafkaconnectCustomPluginLocationS3Location {
  /**
  * The Amazon Resource Name (ARN) of an S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kafkaconnect_custom_plugin#bucket_arn KafkaconnectCustomPlugin#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * The file key for an object in an S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kafkaconnect_custom_plugin#file_key KafkaconnectCustomPlugin#file_key}
  */
  readonly fileKey: string;
  /**
  * The version of an object in an S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kafkaconnect_custom_plugin#object_version KafkaconnectCustomPlugin#object_version}
  */
  readonly objectVersion?: string;
}

export function kafkaconnectCustomPluginLocationS3LocationToTerraform(struct?: KafkaconnectCustomPluginLocationS3Location | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_arn: cdktn.stringToTerraform(struct!.bucketArn),
    file_key: cdktn.stringToTerraform(struct!.fileKey),
    object_version: cdktn.stringToTerraform(struct!.objectVersion),
  }
}


export function kafkaconnectCustomPluginLocationS3LocationToHclTerraform(struct?: KafkaconnectCustomPluginLocationS3Location | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_arn: {
      value: cdktn.stringToHclTerraform(struct!.bucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_key: {
      value: cdktn.stringToHclTerraform(struct!.fileKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_version: {
      value: cdktn.stringToHclTerraform(struct!.objectVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaconnectCustomPluginLocationS3LocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KafkaconnectCustomPluginLocationS3Location | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    if (this._fileKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileKey = this._fileKey;
    }
    if (this._objectVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectVersion = this._objectVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaconnectCustomPluginLocationS3Location | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketArn = undefined;
      this._fileKey = undefined;
      this._objectVersion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketArn = value.bucketArn;
      this._fileKey = value.fileKey;
      this._objectVersion = value.objectVersion;
    }
  }

  // bucket_arn - computed: false, optional: false, required: true
  private _bucketArn?: string; 
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }
  public set bucketArn(value: string) {
    this._bucketArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketArnInput() {
    return this._bucketArn;
  }

  // file_key - computed: false, optional: false, required: true
  private _fileKey?: string; 
  public get fileKey() {
    return this.getStringAttribute('file_key');
  }
  public set fileKey(value: string) {
    this._fileKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileKeyInput() {
    return this._fileKey;
  }

  // object_version - computed: true, optional: true, required: false
  private _objectVersion?: string; 
  public get objectVersion() {
    return this.getStringAttribute('object_version');
  }
  public set objectVersion(value: string) {
    this._objectVersion = value;
  }
  public resetObjectVersion() {
    this._objectVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectVersionInput() {
    return this._objectVersion;
  }
}
export interface KafkaconnectCustomPluginLocation {
  /**
  * The S3 bucket Amazon Resource Name (ARN), file key, and object version of the plugin file stored in Amazon S3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kafkaconnect_custom_plugin#s3_location KafkaconnectCustomPlugin#s3_location}
  */
  readonly s3Location: KafkaconnectCustomPluginLocationS3Location;
}

export function kafkaconnectCustomPluginLocationToTerraform(struct?: KafkaconnectCustomPluginLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_location: kafkaconnectCustomPluginLocationS3LocationToTerraform(struct!.s3Location),
  }
}


export function kafkaconnectCustomPluginLocationToHclTerraform(struct?: KafkaconnectCustomPluginLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_location: {
      value: kafkaconnectCustomPluginLocationS3LocationToHclTerraform(struct!.s3Location),
      isBlock: true,
      type: "struct",
      storageClassType: "KafkaconnectCustomPluginLocationS3Location",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaconnectCustomPluginLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KafkaconnectCustomPluginLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Location = this._s3Location?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaconnectCustomPluginLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Location.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Location.internalValue = value.s3Location;
    }
  }

  // s3_location - computed: false, optional: false, required: true
  private _s3Location = new KafkaconnectCustomPluginLocationS3LocationOutputReference(this, "s3_location");
  public get s3Location() {
    return this._s3Location;
  }
  public putS3Location(value: KafkaconnectCustomPluginLocationS3Location) {
    this._s3Location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3LocationInput() {
    return this._s3Location.internalValue;
  }
}
export interface KafkaconnectCustomPluginTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kafkaconnect_custom_plugin#key KafkaconnectCustomPlugin#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kafkaconnect_custom_plugin#value KafkaconnectCustomPlugin#value}
  */
  readonly value?: string;
}

export function kafkaconnectCustomPluginTagsToTerraform(struct?: KafkaconnectCustomPluginTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function kafkaconnectCustomPluginTagsToHclTerraform(struct?: KafkaconnectCustomPluginTags | cdktn.IResolvable): any {
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

export class KafkaconnectCustomPluginTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KafkaconnectCustomPluginTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: KafkaconnectCustomPluginTags | cdktn.IResolvable | undefined) {
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

export class KafkaconnectCustomPluginTagsList extends cdktn.ComplexList {
  public internalValue? : KafkaconnectCustomPluginTags[] | cdktn.IResolvable

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
  public get(index: number): KafkaconnectCustomPluginTagsOutputReference {
    return new KafkaconnectCustomPluginTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kafkaconnect_custom_plugin awscc_kafkaconnect_custom_plugin}
*/
export class KafkaconnectCustomPlugin extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_kafkaconnect_custom_plugin";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a KafkaconnectCustomPlugin resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KafkaconnectCustomPlugin to import
  * @param importFromId The id of the existing KafkaconnectCustomPlugin that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kafkaconnect_custom_plugin#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KafkaconnectCustomPlugin to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_kafkaconnect_custom_plugin", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kafkaconnect_custom_plugin awscc_kafkaconnect_custom_plugin} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KafkaconnectCustomPluginConfig
  */
  public constructor(scope: Construct, id: string, config: KafkaconnectCustomPluginConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_kafkaconnect_custom_plugin',
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
    this._contentType = config.contentType;
    this._description = config.description;
    this._location.internalValue = config.location;
    this._name = config.name;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // custom_plugin_arn - computed: true, optional: false, required: false
  public get customPluginArn() {
    return this.getStringAttribute('custom_plugin_arn');
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

  // file_description - computed: true, optional: false, required: false
  private _fileDescription = new KafkaconnectCustomPluginFileDescriptionOutputReference(this, "file_description");
  public get fileDescription() {
    return this._fileDescription;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location = new KafkaconnectCustomPluginLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: KafkaconnectCustomPluginLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new KafkaconnectCustomPluginTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: KafkaconnectCustomPluginTags[] | cdktn.IResolvable) {
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
      content_type: cdktn.stringToTerraform(this._contentType),
      description: cdktn.stringToTerraform(this._description),
      location: kafkaconnectCustomPluginLocationToTerraform(this._location.internalValue),
      name: cdktn.stringToTerraform(this._name),
      tags: cdktn.listMapper(kafkaconnectCustomPluginTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content_type: {
        value: cdktn.stringToHclTerraform(this._contentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: kafkaconnectCustomPluginLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KafkaconnectCustomPluginLocation",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(kafkaconnectCustomPluginTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KafkaconnectCustomPluginTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
