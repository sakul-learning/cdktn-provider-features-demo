// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_retriever
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface QbusinessRetrieverConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_retriever#application_id QbusinessRetriever#application_id}
  */
  readonly applicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_retriever#configuration QbusinessRetriever#configuration}
  */
  readonly configuration: QbusinessRetrieverConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_retriever#display_name QbusinessRetriever#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_retriever#role_arn QbusinessRetriever#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_retriever#tags QbusinessRetriever#tags}
  */
  readonly tags?: QbusinessRetrieverTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_retriever#type QbusinessRetriever#type}
  */
  readonly type: string;
}
export interface QbusinessRetrieverConfigurationKendraIndexConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_retriever#index_id QbusinessRetriever#index_id}
  */
  readonly indexId?: string;
}

export function qbusinessRetrieverConfigurationKendraIndexConfigurationToTerraform(struct?: QbusinessRetrieverConfigurationKendraIndexConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index_id: cdktn.stringToTerraform(struct!.indexId),
  }
}


export function qbusinessRetrieverConfigurationKendraIndexConfigurationToHclTerraform(struct?: QbusinessRetrieverConfigurationKendraIndexConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    index_id: {
      value: cdktn.stringToHclTerraform(struct!.indexId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QbusinessRetrieverConfigurationKendraIndexConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indexId !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexId = this._indexId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QbusinessRetrieverConfigurationKendraIndexConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._indexId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._indexId = value.indexId;
    }
  }

  // index_id - computed: true, optional: true, required: false
  private _indexId?: string;
  public get indexId() {
    return this.getStringAttribute('index_id');
  }
  public set indexId(value: string) {
    this._indexId = value;
  }
  public resetIndexId() {
    this._indexId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexIdInput() {
    return this._indexId;
  }
}
export interface QbusinessRetrieverConfigurationNativeIndexConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_retriever#index_id QbusinessRetriever#index_id}
  */
  readonly indexId?: string;
}

export function qbusinessRetrieverConfigurationNativeIndexConfigurationToTerraform(struct?: QbusinessRetrieverConfigurationNativeIndexConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index_id: cdktn.stringToTerraform(struct!.indexId),
  }
}


export function qbusinessRetrieverConfigurationNativeIndexConfigurationToHclTerraform(struct?: QbusinessRetrieverConfigurationNativeIndexConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    index_id: {
      value: cdktn.stringToHclTerraform(struct!.indexId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QbusinessRetrieverConfigurationNativeIndexConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indexId !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexId = this._indexId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QbusinessRetrieverConfigurationNativeIndexConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._indexId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._indexId = value.indexId;
    }
  }

  // index_id - computed: true, optional: true, required: false
  private _indexId?: string;
  public get indexId() {
    return this.getStringAttribute('index_id');
  }
  public set indexId(value: string) {
    this._indexId = value;
  }
  public resetIndexId() {
    this._indexId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexIdInput() {
    return this._indexId;
  }
}
export interface QbusinessRetrieverConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_retriever#kendra_index_configuration QbusinessRetriever#kendra_index_configuration}
  */
  readonly kendraIndexConfiguration?: QbusinessRetrieverConfigurationKendraIndexConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_retriever#native_index_configuration QbusinessRetriever#native_index_configuration}
  */
  readonly nativeIndexConfiguration?: QbusinessRetrieverConfigurationNativeIndexConfiguration;
}

export function qbusinessRetrieverConfigurationToTerraform(struct?: QbusinessRetrieverConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kendra_index_configuration: qbusinessRetrieverConfigurationKendraIndexConfigurationToTerraform(struct!.kendraIndexConfiguration),
    native_index_configuration: qbusinessRetrieverConfigurationNativeIndexConfigurationToTerraform(struct!.nativeIndexConfiguration),
  }
}


export function qbusinessRetrieverConfigurationToHclTerraform(struct?: QbusinessRetrieverConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kendra_index_configuration: {
      value: qbusinessRetrieverConfigurationKendraIndexConfigurationToHclTerraform(struct!.kendraIndexConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "QbusinessRetrieverConfigurationKendraIndexConfiguration",
    },
    native_index_configuration: {
      value: qbusinessRetrieverConfigurationNativeIndexConfigurationToHclTerraform(struct!.nativeIndexConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "QbusinessRetrieverConfigurationNativeIndexConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QbusinessRetrieverConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QbusinessRetrieverConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kendraIndexConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kendraIndexConfiguration = this._kendraIndexConfiguration?.internalValue;
    }
    if (this._nativeIndexConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nativeIndexConfiguration = this._nativeIndexConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QbusinessRetrieverConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kendraIndexConfiguration.internalValue = undefined;
      this._nativeIndexConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kendraIndexConfiguration.internalValue = value.kendraIndexConfiguration;
      this._nativeIndexConfiguration.internalValue = value.nativeIndexConfiguration;
    }
  }

  // kendra_index_configuration - computed: true, optional: true, required: false
  private _kendraIndexConfiguration = new QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference(this, "kendra_index_configuration");
  public get kendraIndexConfiguration() {
    return this._kendraIndexConfiguration;
  }
  public putKendraIndexConfiguration(value: QbusinessRetrieverConfigurationKendraIndexConfiguration) {
    this._kendraIndexConfiguration.internalValue = value;
  }
  public resetKendraIndexConfiguration() {
    this._kendraIndexConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kendraIndexConfigurationInput() {
    return this._kendraIndexConfiguration.internalValue;
  }

  // native_index_configuration - computed: true, optional: true, required: false
  private _nativeIndexConfiguration = new QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference(this, "native_index_configuration");
  public get nativeIndexConfiguration() {
    return this._nativeIndexConfiguration;
  }
  public putNativeIndexConfiguration(value: QbusinessRetrieverConfigurationNativeIndexConfiguration) {
    this._nativeIndexConfiguration.internalValue = value;
  }
  public resetNativeIndexConfiguration() {
    this._nativeIndexConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeIndexConfigurationInput() {
    return this._nativeIndexConfiguration.internalValue;
  }
}
export interface QbusinessRetrieverTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_retriever#key QbusinessRetriever#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_retriever#value QbusinessRetriever#value}
  */
  readonly value?: string;
}

export function qbusinessRetrieverTagsToTerraform(struct?: QbusinessRetrieverTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function qbusinessRetrieverTagsToHclTerraform(struct?: QbusinessRetrieverTags | cdktn.IResolvable): any {
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

export class QbusinessRetrieverTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QbusinessRetrieverTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: QbusinessRetrieverTags | cdktn.IResolvable | undefined) {
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

export class QbusinessRetrieverTagsList extends cdktn.ComplexList {
  public internalValue? : QbusinessRetrieverTags[] | cdktn.IResolvable

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
  public get(index: number): QbusinessRetrieverTagsOutputReference {
    return new QbusinessRetrieverTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_retriever awscc_qbusiness_retriever}
*/
export class QbusinessRetriever extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_qbusiness_retriever";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a QbusinessRetriever resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QbusinessRetriever to import
  * @param importFromId The id of the existing QbusinessRetriever that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_retriever#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QbusinessRetriever to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_qbusiness_retriever", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_retriever awscc_qbusiness_retriever} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QbusinessRetrieverConfig
  */
  public constructor(scope: Construct, id: string, config: QbusinessRetrieverConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_qbusiness_retriever',
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
    this._applicationId = config.applicationId;
    this._configuration.internalValue = config.configuration;
    this._displayName = config.displayName;
    this._roleArn = config.roleArn;
    this._tags.internalValue = config.tags;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string;
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration = new QbusinessRetrieverConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: QbusinessRetrieverConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // retriever_arn - computed: true, optional: false, required: false
  public get retrieverArn() {
    return this.getStringAttribute('retriever_arn');
  }

  // retriever_id - computed: true, optional: false, required: false
  public get retrieverId() {
    return this.getStringAttribute('retriever_id');
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new QbusinessRetrieverTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: QbusinessRetrieverTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktn.stringToTerraform(this._applicationId),
      configuration: qbusinessRetrieverConfigurationToTerraform(this._configuration.internalValue),
      display_name: cdktn.stringToTerraform(this._displayName),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      tags: cdktn.listMapper(qbusinessRetrieverTagsToTerraform, false)(this._tags.internalValue),
      type: cdktn.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktn.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: qbusinessRetrieverConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "QbusinessRetrieverConfiguration",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(qbusinessRetrieverTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QbusinessRetrieverTagsList",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
