// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/apprunner_observability_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ApprunnerObservabilityConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * A name for the observability configuration. When you use it for the first time in an AWS Region, App Runner creates revision number 1 of this name. When you use the same name in subsequent calls, App Runner creates incremental revisions of the configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/apprunner_observability_configuration#observability_configuration_name ApprunnerObservabilityConfiguration#observability_configuration_name}
  */
  readonly observabilityConfigurationName?: string;
  /**
  * A list of metadata items that you can associate with your observability configuration resource. A tag is a key-value pair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/apprunner_observability_configuration#tags ApprunnerObservabilityConfiguration#tags}
  */
  readonly tags?: ApprunnerObservabilityConfigurationTags[] | cdktn.IResolvable;
  /**
  * The configuration of the tracing feature within this observability configuration. If you don't specify it, App Runner doesn't enable tracing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/apprunner_observability_configuration#trace_configuration ApprunnerObservabilityConfiguration#trace_configuration}
  */
  readonly traceConfiguration?: ApprunnerObservabilityConfigurationTraceConfiguration;
}
export interface ApprunnerObservabilityConfigurationTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/apprunner_observability_configuration#key ApprunnerObservabilityConfiguration#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/apprunner_observability_configuration#value ApprunnerObservabilityConfiguration#value}
  */
  readonly value?: string;
}

export function apprunnerObservabilityConfigurationTagsToTerraform(struct?: ApprunnerObservabilityConfigurationTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function apprunnerObservabilityConfigurationTagsToHclTerraform(struct?: ApprunnerObservabilityConfigurationTags | cdktn.IResolvable): any {
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

export class ApprunnerObservabilityConfigurationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApprunnerObservabilityConfigurationTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ApprunnerObservabilityConfigurationTags | cdktn.IResolvable | undefined) {
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

export class ApprunnerObservabilityConfigurationTagsList extends cdktn.ComplexList {
  public internalValue? : ApprunnerObservabilityConfigurationTags[] | cdktn.IResolvable

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
  public get(index: number): ApprunnerObservabilityConfigurationTagsOutputReference {
    return new ApprunnerObservabilityConfigurationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApprunnerObservabilityConfigurationTraceConfiguration {
  /**
  * The implementation provider chosen for tracing App Runner services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/apprunner_observability_configuration#vendor ApprunnerObservabilityConfiguration#vendor}
  */
  readonly vendor?: string;
}

export function apprunnerObservabilityConfigurationTraceConfigurationToTerraform(struct?: ApprunnerObservabilityConfigurationTraceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    vendor: cdktn.stringToTerraform(struct!.vendor),
  }
}


export function apprunnerObservabilityConfigurationTraceConfigurationToHclTerraform(struct?: ApprunnerObservabilityConfigurationTraceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    vendor: {
      value: cdktn.stringToHclTerraform(struct!.vendor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApprunnerObservabilityConfigurationTraceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApprunnerObservabilityConfigurationTraceConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendor = this._vendor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApprunnerObservabilityConfigurationTraceConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vendor = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vendor = value.vendor;
    }
  }

  // vendor - computed: true, optional: true, required: false
  private _vendor?: string; 
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/apprunner_observability_configuration awscc_apprunner_observability_configuration}
*/
export class ApprunnerObservabilityConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_apprunner_observability_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ApprunnerObservabilityConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApprunnerObservabilityConfiguration to import
  * @param importFromId The id of the existing ApprunnerObservabilityConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/apprunner_observability_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApprunnerObservabilityConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apprunner_observability_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/apprunner_observability_configuration awscc_apprunner_observability_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApprunnerObservabilityConfigurationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ApprunnerObservabilityConfigurationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_apprunner_observability_configuration',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.93.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._observabilityConfigurationName = config.observabilityConfigurationName;
    this._tags.internalValue = config.tags;
    this._traceConfiguration.internalValue = config.traceConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // latest - computed: true, optional: false, required: false
  public get latest() {
    return this.getBooleanAttribute('latest');
  }

  // observability_configuration_arn - computed: true, optional: false, required: false
  public get observabilityConfigurationArn() {
    return this.getStringAttribute('observability_configuration_arn');
  }

  // observability_configuration_name - computed: true, optional: true, required: false
  private _observabilityConfigurationName?: string; 
  public get observabilityConfigurationName() {
    return this.getStringAttribute('observability_configuration_name');
  }
  public set observabilityConfigurationName(value: string) {
    this._observabilityConfigurationName = value;
  }
  public resetObservabilityConfigurationName() {
    this._observabilityConfigurationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get observabilityConfigurationNameInput() {
    return this._observabilityConfigurationName;
  }

  // observability_configuration_revision - computed: true, optional: false, required: false
  public get observabilityConfigurationRevision() {
    return this.getNumberAttribute('observability_configuration_revision');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ApprunnerObservabilityConfigurationTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ApprunnerObservabilityConfigurationTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // trace_configuration - computed: true, optional: true, required: false
  private _traceConfiguration = new ApprunnerObservabilityConfigurationTraceConfigurationOutputReference(this, "trace_configuration");
  public get traceConfiguration() {
    return this._traceConfiguration;
  }
  public putTraceConfiguration(value: ApprunnerObservabilityConfigurationTraceConfiguration) {
    this._traceConfiguration.internalValue = value;
  }
  public resetTraceConfiguration() {
    this._traceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceConfigurationInput() {
    return this._traceConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      observability_configuration_name: cdktn.stringToTerraform(this._observabilityConfigurationName),
      tags: cdktn.listMapper(apprunnerObservabilityConfigurationTagsToTerraform, false)(this._tags.internalValue),
      trace_configuration: apprunnerObservabilityConfigurationTraceConfigurationToTerraform(this._traceConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      observability_configuration_name: {
        value: cdktn.stringToHclTerraform(this._observabilityConfigurationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(apprunnerObservabilityConfigurationTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApprunnerObservabilityConfigurationTagsList",
      },
      trace_configuration: {
        value: apprunnerObservabilityConfigurationTraceConfigurationToHclTerraform(this._traceConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApprunnerObservabilityConfigurationTraceConfiguration",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
