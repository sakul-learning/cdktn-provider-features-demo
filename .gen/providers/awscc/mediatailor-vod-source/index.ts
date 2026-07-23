// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/mediatailor_vod_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface MediatailorVodSourceConfig extends cdktn.TerraformMetaArguments {
  /**
  * <p>A list of HTTP package configuration parameters for this VOD source.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/mediatailor_vod_source#http_package_configurations MediatailorVodSource#http_package_configurations}
  */
  readonly httpPackageConfigurations: MediatailorVodSourceHttpPackageConfigurations[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/mediatailor_vod_source#source_location_name MediatailorVodSource#source_location_name}
  */
  readonly sourceLocationName: string;
  /**
  * The tags to assign to the VOD source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/mediatailor_vod_source#tags MediatailorVodSource#tags}
  */
  readonly tags?: MediatailorVodSourceTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/mediatailor_vod_source#vod_source_name MediatailorVodSource#vod_source_name}
  */
  readonly vodSourceName: string;
}
export interface MediatailorVodSourceHttpPackageConfigurations {
  /**
  * <p>The relative path to the URL for this VOD source. This is combined with <code>SourceLocation::HttpConfiguration::BaseUrl</code> to form a valid URL.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/mediatailor_vod_source#path MediatailorVodSource#path}
  */
  readonly path: string;
  /**
  * <p>The name of the source group. This has to match one of the <code>Channel::Outputs::SourceGroup</code>.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/mediatailor_vod_source#source_group MediatailorVodSource#source_group}
  */
  readonly sourceGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/mediatailor_vod_source#type MediatailorVodSource#type}
  */
  readonly type: string;
}

export function mediatailorVodSourceHttpPackageConfigurationsToTerraform(struct?: MediatailorVodSourceHttpPackageConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    path: cdktn.stringToTerraform(struct!.path),
    source_group: cdktn.stringToTerraform(struct!.sourceGroup),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function mediatailorVodSourceHttpPackageConfigurationsToHclTerraform(struct?: MediatailorVodSourceHttpPackageConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_group: {
      value: cdktn.stringToHclTerraform(struct!.sourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediatailorVodSourceHttpPackageConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediatailorVodSourceHttpPackageConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._sourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceGroup = this._sourceGroup;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediatailorVodSourceHttpPackageConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._sourceGroup = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._sourceGroup = value.sourceGroup;
      this._type = value.type;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // source_group - computed: false, optional: false, required: true
  private _sourceGroup?: string; 
  public get sourceGroup() {
    return this.getStringAttribute('source_group');
  }
  public set sourceGroup(value: string) {
    this._sourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceGroupInput() {
    return this._sourceGroup;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class MediatailorVodSourceHttpPackageConfigurationsList extends cdktn.ComplexList {
  public internalValue? : MediatailorVodSourceHttpPackageConfigurations[] | cdktn.IResolvable

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
  public get(index: number): MediatailorVodSourceHttpPackageConfigurationsOutputReference {
    return new MediatailorVodSourceHttpPackageConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediatailorVodSourceTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/mediatailor_vod_source#key MediatailorVodSource#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/mediatailor_vod_source#value MediatailorVodSource#value}
  */
  readonly value?: string;
}

export function mediatailorVodSourceTagsToTerraform(struct?: MediatailorVodSourceTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function mediatailorVodSourceTagsToHclTerraform(struct?: MediatailorVodSourceTags | cdktn.IResolvable): any {
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

export class MediatailorVodSourceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediatailorVodSourceTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: MediatailorVodSourceTags | cdktn.IResolvable | undefined) {
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

export class MediatailorVodSourceTagsList extends cdktn.ComplexList {
  public internalValue? : MediatailorVodSourceTags[] | cdktn.IResolvable

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
  public get(index: number): MediatailorVodSourceTagsOutputReference {
    return new MediatailorVodSourceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/mediatailor_vod_source awscc_mediatailor_vod_source}
*/
export class MediatailorVodSource extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_mediatailor_vod_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a MediatailorVodSource resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MediatailorVodSource to import
  * @param importFromId The id of the existing MediatailorVodSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/mediatailor_vod_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MediatailorVodSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediatailor_vod_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/mediatailor_vod_source awscc_mediatailor_vod_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediatailorVodSourceConfig
  */
  public constructor(scope: Construct, id: string, config: MediatailorVodSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_mediatailor_vod_source',
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
    this._httpPackageConfigurations.internalValue = config.httpPackageConfigurations;
    this._sourceLocationName = config.sourceLocationName;
    this._tags.internalValue = config.tags;
    this._vodSourceName = config.vodSourceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // http_package_configurations - computed: false, optional: false, required: true
  private _httpPackageConfigurations = new MediatailorVodSourceHttpPackageConfigurationsList(this, "http_package_configurations", false);
  public get httpPackageConfigurations() {
    return this._httpPackageConfigurations;
  }
  public putHttpPackageConfigurations(value: MediatailorVodSourceHttpPackageConfigurations[] | cdktn.IResolvable) {
    this._httpPackageConfigurations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPackageConfigurationsInput() {
    return this._httpPackageConfigurations.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // source_location_name - computed: false, optional: false, required: true
  private _sourceLocationName?: string; 
  public get sourceLocationName() {
    return this.getStringAttribute('source_location_name');
  }
  public set sourceLocationName(value: string) {
    this._sourceLocationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLocationNameInput() {
    return this._sourceLocationName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new MediatailorVodSourceTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: MediatailorVodSourceTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // vod_source_name - computed: false, optional: false, required: true
  private _vodSourceName?: string; 
  public get vodSourceName() {
    return this.getStringAttribute('vod_source_name');
  }
  public set vodSourceName(value: string) {
    this._vodSourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vodSourceNameInput() {
    return this._vodSourceName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      http_package_configurations: cdktn.listMapper(mediatailorVodSourceHttpPackageConfigurationsToTerraform, false)(this._httpPackageConfigurations.internalValue),
      source_location_name: cdktn.stringToTerraform(this._sourceLocationName),
      tags: cdktn.listMapper(mediatailorVodSourceTagsToTerraform, false)(this._tags.internalValue),
      vod_source_name: cdktn.stringToTerraform(this._vodSourceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      http_package_configurations: {
        value: cdktn.listMapperHcl(mediatailorVodSourceHttpPackageConfigurationsToHclTerraform, false)(this._httpPackageConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MediatailorVodSourceHttpPackageConfigurationsList",
      },
      source_location_name: {
        value: cdktn.stringToHclTerraform(this._sourceLocationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(mediatailorVodSourceTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MediatailorVodSourceTagsList",
      },
      vod_source_name: {
        value: cdktn.stringToHclTerraform(this._vodSourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
