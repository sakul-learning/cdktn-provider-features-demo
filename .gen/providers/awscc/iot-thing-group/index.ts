// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_thing_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IotThingGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_thing_group#parent_group_name IotThingGroup#parent_group_name}
  */
  readonly parentGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_thing_group#query_string IotThingGroup#query_string}
  */
  readonly queryString?: string;
  /**
  * An array of key-value pairs to apply to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_thing_group#tags IotThingGroup#tags}
  */
  readonly tags?: IotThingGroupTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_thing_group#thing_group_name IotThingGroup#thing_group_name}
  */
  readonly thingGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_thing_group#thing_group_properties IotThingGroup#thing_group_properties}
  */
  readonly thingGroupProperties?: IotThingGroupThingGroupProperties;
}
export interface IotThingGroupTags {
  /**
  * Tag key (1-128 chars). No 'aws:' prefix. Allows: [A-Za-z0-9 _.:/=+-]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_thing_group#key IotThingGroup#key}
  */
  readonly key?: string;
  /**
  * Tag value (1-256 chars). No 'aws:' prefix. Allows: [A-Za-z0-9 _.:/=+-]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_thing_group#value IotThingGroup#value}
  */
  readonly value?: string;
}

export function iotThingGroupTagsToTerraform(struct?: IotThingGroupTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function iotThingGroupTagsToHclTerraform(struct?: IotThingGroupTags | cdktn.IResolvable): any {
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

export class IotThingGroupTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotThingGroupTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IotThingGroupTags | cdktn.IResolvable | undefined) {
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

export class IotThingGroupTagsList extends cdktn.ComplexList {
  public internalValue? : IotThingGroupTags[] | cdktn.IResolvable

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
  public get(index: number): IotThingGroupTagsOutputReference {
    return new IotThingGroupTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotThingGroupThingGroupPropertiesAttributePayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_thing_group#attributes IotThingGroup#attributes}
  */
  readonly attributes?: { [key: string]: string };
}

export function iotThingGroupThingGroupPropertiesAttributePayloadToTerraform(struct?: IotThingGroupThingGroupPropertiesAttributePayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attributes: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.attributes),
  }
}


export function iotThingGroupThingGroupPropertiesAttributePayloadToHclTerraform(struct?: IotThingGroupThingGroupPropertiesAttributePayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attributes: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.attributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotThingGroupThingGroupPropertiesAttributePayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotThingGroupThingGroupPropertiesAttributePayload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotThingGroupThingGroupPropertiesAttributePayload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes = value.attributes;
    }
  }

  // attributes - computed: true, optional: true, required: false
  private _attributes?: { [key: string]: string }; 
  public get attributes() {
    return this.getStringMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }
}
export interface IotThingGroupThingGroupProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_thing_group#attribute_payload IotThingGroup#attribute_payload}
  */
  readonly attributePayload?: IotThingGroupThingGroupPropertiesAttributePayload;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_thing_group#thing_group_description IotThingGroup#thing_group_description}
  */
  readonly thingGroupDescription?: string;
}

export function iotThingGroupThingGroupPropertiesToTerraform(struct?: IotThingGroupThingGroupProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute_payload: iotThingGroupThingGroupPropertiesAttributePayloadToTerraform(struct!.attributePayload),
    thing_group_description: cdktn.stringToTerraform(struct!.thingGroupDescription),
  }
}


export function iotThingGroupThingGroupPropertiesToHclTerraform(struct?: IotThingGroupThingGroupProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute_payload: {
      value: iotThingGroupThingGroupPropertiesAttributePayloadToHclTerraform(struct!.attributePayload),
      isBlock: true,
      type: "struct",
      storageClassType: "IotThingGroupThingGroupPropertiesAttributePayload",
    },
    thing_group_description: {
      value: cdktn.stringToHclTerraform(struct!.thingGroupDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotThingGroupThingGroupPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotThingGroupThingGroupProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributePayload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributePayload = this._attributePayload?.internalValue;
    }
    if (this._thingGroupDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.thingGroupDescription = this._thingGroupDescription;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotThingGroupThingGroupProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributePayload.internalValue = undefined;
      this._thingGroupDescription = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributePayload.internalValue = value.attributePayload;
      this._thingGroupDescription = value.thingGroupDescription;
    }
  }

  // attribute_payload - computed: true, optional: true, required: false
  private _attributePayload = new IotThingGroupThingGroupPropertiesAttributePayloadOutputReference(this, "attribute_payload");
  public get attributePayload() {
    return this._attributePayload;
  }
  public putAttributePayload(value: IotThingGroupThingGroupPropertiesAttributePayload) {
    this._attributePayload.internalValue = value;
  }
  public resetAttributePayload() {
    this._attributePayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributePayloadInput() {
    return this._attributePayload.internalValue;
  }

  // thing_group_description - computed: true, optional: true, required: false
  private _thingGroupDescription?: string; 
  public get thingGroupDescription() {
    return this.getStringAttribute('thing_group_description');
  }
  public set thingGroupDescription(value: string) {
    this._thingGroupDescription = value;
  }
  public resetThingGroupDescription() {
    this._thingGroupDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thingGroupDescriptionInput() {
    return this._thingGroupDescription;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_thing_group awscc_iot_thing_group}
*/
export class IotThingGroup extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iot_thing_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IotThingGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IotThingGroup to import
  * @param importFromId The id of the existing IotThingGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_thing_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IotThingGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iot_thing_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_thing_group awscc_iot_thing_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotThingGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IotThingGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_iot_thing_group',
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
    this._parentGroupName = config.parentGroupName;
    this._queryString = config.queryString;
    this._tags.internalValue = config.tags;
    this._thingGroupName = config.thingGroupName;
    this._thingGroupProperties.internalValue = config.thingGroupProperties;
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

  // parent_group_name - computed: true, optional: true, required: false
  private _parentGroupName?: string; 
  public get parentGroupName() {
    return this.getStringAttribute('parent_group_name');
  }
  public set parentGroupName(value: string) {
    this._parentGroupName = value;
  }
  public resetParentGroupName() {
    this._parentGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentGroupNameInput() {
    return this._parentGroupName;
  }

  // query_string - computed: true, optional: true, required: false
  private _queryString?: string; 
  public get queryString() {
    return this.getStringAttribute('query_string');
  }
  public set queryString(value: string) {
    this._queryString = value;
  }
  public resetQueryString() {
    this._queryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new IotThingGroupTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: IotThingGroupTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // thing_group_id - computed: true, optional: false, required: false
  public get thingGroupId() {
    return this.getStringAttribute('thing_group_id');
  }

  // thing_group_name - computed: true, optional: true, required: false
  private _thingGroupName?: string; 
  public get thingGroupName() {
    return this.getStringAttribute('thing_group_name');
  }
  public set thingGroupName(value: string) {
    this._thingGroupName = value;
  }
  public resetThingGroupName() {
    this._thingGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thingGroupNameInput() {
    return this._thingGroupName;
  }

  // thing_group_properties - computed: true, optional: true, required: false
  private _thingGroupProperties = new IotThingGroupThingGroupPropertiesOutputReference(this, "thing_group_properties");
  public get thingGroupProperties() {
    return this._thingGroupProperties;
  }
  public putThingGroupProperties(value: IotThingGroupThingGroupProperties) {
    this._thingGroupProperties.internalValue = value;
  }
  public resetThingGroupProperties() {
    this._thingGroupProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thingGroupPropertiesInput() {
    return this._thingGroupProperties.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      parent_group_name: cdktn.stringToTerraform(this._parentGroupName),
      query_string: cdktn.stringToTerraform(this._queryString),
      tags: cdktn.listMapper(iotThingGroupTagsToTerraform, false)(this._tags.internalValue),
      thing_group_name: cdktn.stringToTerraform(this._thingGroupName),
      thing_group_properties: iotThingGroupThingGroupPropertiesToTerraform(this._thingGroupProperties.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      parent_group_name: {
        value: cdktn.stringToHclTerraform(this._parentGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_string: {
        value: cdktn.stringToHclTerraform(this._queryString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(iotThingGroupTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IotThingGroupTagsList",
      },
      thing_group_name: {
        value: cdktn.stringToHclTerraform(this._thingGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      thing_group_properties: {
        value: iotThingGroupThingGroupPropertiesToHclTerraform(this._thingGroupProperties.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IotThingGroupThingGroupProperties",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
