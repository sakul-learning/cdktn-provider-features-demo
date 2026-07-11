// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appintegrations_event_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AppintegrationsEventIntegrationConfig extends cdktn.TerraformMetaArguments {
  /**
  * The event integration description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appintegrations_event_integration#description AppintegrationsEventIntegration#description}
  */
  readonly description?: string;
  /**
  * The Amazon Eventbridge bus for the event integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appintegrations_event_integration#event_bridge_bus AppintegrationsEventIntegration#event_bridge_bus}
  */
  readonly eventBridgeBus: string;
  /**
  * The EventFilter (source) associated with the event integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appintegrations_event_integration#event_filter AppintegrationsEventIntegration#event_filter}
  */
  readonly eventFilter: AppintegrationsEventIntegrationEventFilter;
  /**
  * The name of the event integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appintegrations_event_integration#name AppintegrationsEventIntegration#name}
  */
  readonly name: string;
  /**
  * The tags (keys and values) associated with the event integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appintegrations_event_integration#tags AppintegrationsEventIntegration#tags}
  */
  readonly tags?: AppintegrationsEventIntegrationTags[] | cdktn.IResolvable;
}
export interface AppintegrationsEventIntegrationEventFilter {
  /**
  * The source of the events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appintegrations_event_integration#source AppintegrationsEventIntegration#source}
  */
  readonly source: string;
}

export function appintegrationsEventIntegrationEventFilterToTerraform(struct?: AppintegrationsEventIntegrationEventFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function appintegrationsEventIntegrationEventFilterToHclTerraform(struct?: AppintegrationsEventIntegrationEventFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppintegrationsEventIntegrationEventFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppintegrationsEventIntegrationEventFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppintegrationsEventIntegrationEventFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source = value.source;
    }
  }

  // source - computed: false, optional: false, required: true
  private _source?: string;
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}
export interface AppintegrationsEventIntegrationTags {
  /**
  * A key to identify the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appintegrations_event_integration#key AppintegrationsEventIntegration#key}
  */
  readonly key?: string;
  /**
  * Corresponding tag value for the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appintegrations_event_integration#value AppintegrationsEventIntegration#value}
  */
  readonly value?: string;
}

export function appintegrationsEventIntegrationTagsToTerraform(struct?: AppintegrationsEventIntegrationTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function appintegrationsEventIntegrationTagsToHclTerraform(struct?: AppintegrationsEventIntegrationTags | cdktn.IResolvable): any {
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

export class AppintegrationsEventIntegrationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AppintegrationsEventIntegrationTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AppintegrationsEventIntegrationTags | cdktn.IResolvable | undefined) {
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

export class AppintegrationsEventIntegrationTagsList extends cdktn.ComplexList {
  public internalValue? : AppintegrationsEventIntegrationTags[] | cdktn.IResolvable

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
  public get(index: number): AppintegrationsEventIntegrationTagsOutputReference {
    return new AppintegrationsEventIntegrationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appintegrations_event_integration awscc_appintegrations_event_integration}
*/
export class AppintegrationsEventIntegration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_appintegrations_event_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AppintegrationsEventIntegration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppintegrationsEventIntegration to import
  * @param importFromId The id of the existing AppintegrationsEventIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appintegrations_event_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppintegrationsEventIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appintegrations_event_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appintegrations_event_integration awscc_appintegrations_event_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppintegrationsEventIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: AppintegrationsEventIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_appintegrations_event_integration',
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
    this._description = config.description;
    this._eventBridgeBus = config.eventBridgeBus;
    this._eventFilter.internalValue = config.eventFilter;
    this._name = config.name;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // event_bridge_bus - computed: false, optional: false, required: true
  private _eventBridgeBus?: string;
  public get eventBridgeBus() {
    return this.getStringAttribute('event_bridge_bus');
  }
  public set eventBridgeBus(value: string) {
    this._eventBridgeBus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventBridgeBusInput() {
    return this._eventBridgeBus;
  }

  // event_filter - computed: false, optional: false, required: true
  private _eventFilter = new AppintegrationsEventIntegrationEventFilterOutputReference(this, "event_filter");
  public get eventFilter() {
    return this._eventFilter;
  }
  public putEventFilter(value: AppintegrationsEventIntegrationEventFilter) {
    this._eventFilter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventFilterInput() {
    return this._eventFilter.internalValue;
  }

  // event_integration_arn - computed: true, optional: false, required: false
  public get eventIntegrationArn() {
    return this.getStringAttribute('event_integration_arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // tags - computed: true, optional: true, required: false
  private _tags = new AppintegrationsEventIntegrationTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: AppintegrationsEventIntegrationTags[] | cdktn.IResolvable) {
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
      description: cdktn.stringToTerraform(this._description),
      event_bridge_bus: cdktn.stringToTerraform(this._eventBridgeBus),
      event_filter: appintegrationsEventIntegrationEventFilterToTerraform(this._eventFilter.internalValue),
      name: cdktn.stringToTerraform(this._name),
      tags: cdktn.listMapper(appintegrationsEventIntegrationTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_bridge_bus: {
        value: cdktn.stringToHclTerraform(this._eventBridgeBus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_filter: {
        value: appintegrationsEventIntegrationEventFilterToHclTerraform(this._eventFilter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppintegrationsEventIntegrationEventFilter",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(appintegrationsEventIntegrationTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppintegrationsEventIntegrationTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
