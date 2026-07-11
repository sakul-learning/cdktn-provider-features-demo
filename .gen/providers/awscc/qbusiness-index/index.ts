// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_index
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface QbusinessIndexConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_index#application_id QbusinessIndex#application_id}
  */
  readonly applicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_index#capacity_configuration QbusinessIndex#capacity_configuration}
  */
  readonly capacityConfiguration?: QbusinessIndexCapacityConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_index#description QbusinessIndex#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_index#display_name QbusinessIndex#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_index#document_attribute_configurations QbusinessIndex#document_attribute_configurations}
  */
  readonly documentAttributeConfigurations?: QbusinessIndexDocumentAttributeConfigurations[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_index#tags QbusinessIndex#tags}
  */
  readonly tags?: QbusinessIndexTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_index#type QbusinessIndex#type}
  */
  readonly type?: string;
}
export interface QbusinessIndexCapacityConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_index#units QbusinessIndex#units}
  */
  readonly units?: number;
}

export function qbusinessIndexCapacityConfigurationToTerraform(struct?: QbusinessIndexCapacityConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    units: cdktn.numberToTerraform(struct!.units),
  }
}


export function qbusinessIndexCapacityConfigurationToHclTerraform(struct?: QbusinessIndexCapacityConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    units: {
      value: cdktn.numberToHclTerraform(struct!.units),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QbusinessIndexCapacityConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QbusinessIndexCapacityConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._units !== undefined) {
      hasAnyValues = true;
      internalValueResult.units = this._units;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QbusinessIndexCapacityConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._units = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._units = value.units;
    }
  }

  // units - computed: true, optional: true, required: false
  private _units?: number;
  public get units() {
    return this.getNumberAttribute('units');
  }
  public set units(value: number) {
    this._units = value;
  }
  public resetUnits() {
    this._units = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitsInput() {
    return this._units;
  }
}
export interface QbusinessIndexDocumentAttributeConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_index#name QbusinessIndex#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_index#search QbusinessIndex#search}
  */
  readonly search?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_index#type QbusinessIndex#type}
  */
  readonly type?: string;
}

export function qbusinessIndexDocumentAttributeConfigurationsToTerraform(struct?: QbusinessIndexDocumentAttributeConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    search: cdktn.stringToTerraform(struct!.search),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function qbusinessIndexDocumentAttributeConfigurationsToHclTerraform(struct?: QbusinessIndexDocumentAttributeConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search: {
      value: cdktn.stringToHclTerraform(struct!.search),
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

export class QbusinessIndexDocumentAttributeConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QbusinessIndexDocumentAttributeConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._search !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QbusinessIndexDocumentAttributeConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._search = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._search = value.search;
      this._type = value.type;
    }
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

  // search - computed: true, optional: true, required: false
  private _search?: string;
  public get search() {
    return this.getStringAttribute('search');
  }
  public set search(value: string) {
    this._search = value;
  }
  public resetSearch() {
    this._search = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class QbusinessIndexDocumentAttributeConfigurationsList extends cdktn.ComplexList {
  public internalValue? : QbusinessIndexDocumentAttributeConfigurations[] | cdktn.IResolvable

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
  public get(index: number): QbusinessIndexDocumentAttributeConfigurationsOutputReference {
    return new QbusinessIndexDocumentAttributeConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QbusinessIndexIndexStatisticsTextDocumentStatistics {
}

export function qbusinessIndexIndexStatisticsTextDocumentStatisticsToTerraform(struct?: QbusinessIndexIndexStatisticsTextDocumentStatistics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function qbusinessIndexIndexStatisticsTextDocumentStatisticsToHclTerraform(struct?: QbusinessIndexIndexStatisticsTextDocumentStatistics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QbusinessIndexIndexStatisticsTextDocumentStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QbusinessIndexIndexStatisticsTextDocumentStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // indexed_text_bytes - computed: true, optional: false, required: false
  public get indexedTextBytes() {
    return this.getNumberAttribute('indexed_text_bytes');
  }

  // indexed_text_document_count - computed: true, optional: false, required: false
  public get indexedTextDocumentCount() {
    return this.getNumberAttribute('indexed_text_document_count');
  }
}
export interface QbusinessIndexIndexStatistics {
}

export function qbusinessIndexIndexStatisticsToTerraform(struct?: QbusinessIndexIndexStatistics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function qbusinessIndexIndexStatisticsToHclTerraform(struct?: QbusinessIndexIndexStatistics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QbusinessIndexIndexStatisticsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QbusinessIndexIndexStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QbusinessIndexIndexStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // text_document_statistics - computed: true, optional: false, required: false
  private _textDocumentStatistics = new QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference(this, "text_document_statistics");
  public get textDocumentStatistics() {
    return this._textDocumentStatistics;
  }
}
export interface QbusinessIndexTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_index#key QbusinessIndex#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_index#value QbusinessIndex#value}
  */
  readonly value?: string;
}

export function qbusinessIndexTagsToTerraform(struct?: QbusinessIndexTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function qbusinessIndexTagsToHclTerraform(struct?: QbusinessIndexTags | cdktn.IResolvable): any {
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

export class QbusinessIndexTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QbusinessIndexTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: QbusinessIndexTags | cdktn.IResolvable | undefined) {
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

export class QbusinessIndexTagsList extends cdktn.ComplexList {
  public internalValue? : QbusinessIndexTags[] | cdktn.IResolvable

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
  public get(index: number): QbusinessIndexTagsOutputReference {
    return new QbusinessIndexTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_index awscc_qbusiness_index}
*/
export class QbusinessIndex extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_qbusiness_index";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a QbusinessIndex resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QbusinessIndex to import
  * @param importFromId The id of the existing QbusinessIndex that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_index#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QbusinessIndex to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_qbusiness_index", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/qbusiness_index awscc_qbusiness_index} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QbusinessIndexConfig
  */
  public constructor(scope: Construct, id: string, config: QbusinessIndexConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_qbusiness_index',
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
    this._capacityConfiguration.internalValue = config.capacityConfiguration;
    this._description = config.description;
    this._displayName = config.displayName;
    this._documentAttributeConfigurations.internalValue = config.documentAttributeConfigurations;
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

  // capacity_configuration - computed: true, optional: true, required: false
  private _capacityConfiguration = new QbusinessIndexCapacityConfigurationOutputReference(this, "capacity_configuration");
  public get capacityConfiguration() {
    return this._capacityConfiguration;
  }
  public putCapacityConfiguration(value: QbusinessIndexCapacityConfiguration) {
    this._capacityConfiguration.internalValue = value;
  }
  public resetCapacityConfiguration() {
    this._capacityConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityConfigurationInput() {
    return this._capacityConfiguration.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // document_attribute_configurations - computed: true, optional: true, required: false
  private _documentAttributeConfigurations = new QbusinessIndexDocumentAttributeConfigurationsList(this, "document_attribute_configurations", false);
  public get documentAttributeConfigurations() {
    return this._documentAttributeConfigurations;
  }
  public putDocumentAttributeConfigurations(value: QbusinessIndexDocumentAttributeConfigurations[] | cdktn.IResolvable) {
    this._documentAttributeConfigurations.internalValue = value;
  }
  public resetDocumentAttributeConfigurations() {
    this._documentAttributeConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentAttributeConfigurationsInput() {
    return this._documentAttributeConfigurations.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // index_arn - computed: true, optional: false, required: false
  public get indexArn() {
    return this.getStringAttribute('index_arn');
  }

  // index_id - computed: true, optional: false, required: false
  public get indexId() {
    return this.getStringAttribute('index_id');
  }

  // index_statistics - computed: true, optional: false, required: false
  private _indexStatistics = new QbusinessIndexIndexStatisticsOutputReference(this, "index_statistics");
  public get indexStatistics() {
    return this._indexStatistics;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new QbusinessIndexTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: QbusinessIndexTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
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
      capacity_configuration: qbusinessIndexCapacityConfigurationToTerraform(this._capacityConfiguration.internalValue),
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      document_attribute_configurations: cdktn.listMapper(qbusinessIndexDocumentAttributeConfigurationsToTerraform, false)(this._documentAttributeConfigurations.internalValue),
      tags: cdktn.listMapper(qbusinessIndexTagsToTerraform, false)(this._tags.internalValue),
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
      capacity_configuration: {
        value: qbusinessIndexCapacityConfigurationToHclTerraform(this._capacityConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "QbusinessIndexCapacityConfiguration",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      document_attribute_configurations: {
        value: cdktn.listMapperHcl(qbusinessIndexDocumentAttributeConfigurationsToHclTerraform, false)(this._documentAttributeConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QbusinessIndexDocumentAttributeConfigurationsList",
      },
      tags: {
        value: cdktn.listMapperHcl(qbusinessIndexTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QbusinessIndexTagsList",
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
