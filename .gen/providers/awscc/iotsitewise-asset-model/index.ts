// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IotsitewiseAssetModelConfig extends cdktn.TerraformMetaArguments {
  /**
  * The composite asset models that are part of this asset model. Composite asset models are asset models that contain specific properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#asset_model_composite_models IotsitewiseAssetModel#asset_model_composite_models}
  */
  readonly assetModelCompositeModels?: IotsitewiseAssetModelAssetModelCompositeModels[] | cdktn.IResolvable;
  /**
  * A description for the asset model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#asset_model_description IotsitewiseAssetModel#asset_model_description}
  */
  readonly assetModelDescription?: string;
  /**
  * The external ID of the asset model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#asset_model_external_id IotsitewiseAssetModel#asset_model_external_id}
  */
  readonly assetModelExternalId?: string;
  /**
  * The hierarchy definitions of the asset model. Each hierarchy specifies an asset model whose assets can be children of any other assets created from this asset model. You can specify up to 10 hierarchies per asset model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#asset_model_hierarchies IotsitewiseAssetModel#asset_model_hierarchies}
  */
  readonly assetModelHierarchies?: IotsitewiseAssetModelAssetModelHierarchies[] | cdktn.IResolvable;
  /**
  * A unique, friendly name for the asset model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#asset_model_name IotsitewiseAssetModel#asset_model_name}
  */
  readonly assetModelName: string;
  /**
  * The property definitions of the asset model. You can specify up to 200 properties per asset model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#asset_model_properties IotsitewiseAssetModel#asset_model_properties}
  */
  readonly assetModelProperties?: IotsitewiseAssetModelAssetModelProperties[] | cdktn.IResolvable;
  /**
  * The type of the asset model (ASSET_MODEL OR COMPONENT_MODEL or INTERFACE)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#asset_model_type IotsitewiseAssetModel#asset_model_type}
  */
  readonly assetModelType?: string;
  /**
  * a list of asset model and interface relationships
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#enforced_asset_model_interface_relationships IotsitewiseAssetModel#enforced_asset_model_interface_relationships}
  */
  readonly enforcedAssetModelInterfaceRelationships?: IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships[] | cdktn.IResolvable;
  /**
  * A list of key-value pairs that contain metadata for the asset model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#tags IotsitewiseAssetModel#tags}
  */
  readonly tags?: IotsitewiseAssetModelTags[] | cdktn.IResolvable;
}
export interface IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#default_value IotsitewiseAssetModel#default_value}
  */
  readonly defaultValue?: string;
}

export function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeToTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_value: cdktn.stringToTerraform(struct!.defaultValue),
  }
}


export function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeToHclTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_value: {
      value: cdktn.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
    }
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string;
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }
}
export interface IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPath {
  /**
  * The name of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#name IotsitewiseAssetModel#name}
  */
  readonly name?: string;
}

export function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathToTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPath | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathToHclTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPath | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPath | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPath | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList extends cdktn.ComplexList {
  public internalValue? : IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPath[] | cdktn.IResolvable

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
  public get(index: number): IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference {
    return new IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue {
  /**
  * The External ID of the hierarchy that is trying to be referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#hierarchy_external_id IotsitewiseAssetModel#hierarchy_external_id}
  */
  readonly hierarchyExternalId?: string;
  /**
  * The ID of the hierarchy that is trying to be referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#hierarchy_id IotsitewiseAssetModel#hierarchy_id}
  */
  readonly hierarchyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#hierarchy_logical_id IotsitewiseAssetModel#hierarchy_logical_id}
  */
  readonly hierarchyLogicalId?: string;
  /**
  * The External ID of the property that is trying to be referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#property_external_id IotsitewiseAssetModel#property_external_id}
  */
  readonly propertyExternalId?: string;
  /**
  * The ID of the property that is trying to be referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#property_id IotsitewiseAssetModel#property_id}
  */
  readonly propertyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#property_logical_id IotsitewiseAssetModel#property_logical_id}
  */
  readonly propertyLogicalId?: string;
  /**
  * The path of the property that is trying to be referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#property_path IotsitewiseAssetModel#property_path}
  */
  readonly propertyPath?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPath[] | cdktn.IResolvable;
}

export function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueToTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hierarchy_external_id: cdktn.stringToTerraform(struct!.hierarchyExternalId),
    hierarchy_id: cdktn.stringToTerraform(struct!.hierarchyId),
    hierarchy_logical_id: cdktn.stringToTerraform(struct!.hierarchyLogicalId),
    property_external_id: cdktn.stringToTerraform(struct!.propertyExternalId),
    property_id: cdktn.stringToTerraform(struct!.propertyId),
    property_logical_id: cdktn.stringToTerraform(struct!.propertyLogicalId),
    property_path: cdktn.listMapper(iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathToTerraform, false)(struct!.propertyPath),
  }
}


export function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueToHclTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hierarchy_external_id: {
      value: cdktn.stringToHclTerraform(struct!.hierarchyExternalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hierarchy_id: {
      value: cdktn.stringToHclTerraform(struct!.hierarchyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hierarchy_logical_id: {
      value: cdktn.stringToHclTerraform(struct!.hierarchyLogicalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_external_id: {
      value: cdktn.stringToHclTerraform(struct!.propertyExternalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_id: {
      value: cdktn.stringToHclTerraform(struct!.propertyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_logical_id: {
      value: cdktn.stringToHclTerraform(struct!.propertyLogicalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_path: {
      value: cdktn.listMapperHcl(iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathToHclTerraform, false)(struct!.propertyPath),
      isBlock: true,
      type: "list",
      storageClassType: "IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hierarchyExternalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hierarchyExternalId = this._hierarchyExternalId;
    }
    if (this._hierarchyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hierarchyId = this._hierarchyId;
    }
    if (this._hierarchyLogicalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hierarchyLogicalId = this._hierarchyLogicalId;
    }
    if (this._propertyExternalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyExternalId = this._propertyExternalId;
    }
    if (this._propertyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyId = this._propertyId;
    }
    if (this._propertyLogicalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyLogicalId = this._propertyLogicalId;
    }
    if (this._propertyPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyPath = this._propertyPath?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hierarchyExternalId = undefined;
      this._hierarchyId = undefined;
      this._hierarchyLogicalId = undefined;
      this._propertyExternalId = undefined;
      this._propertyId = undefined;
      this._propertyLogicalId = undefined;
      this._propertyPath.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hierarchyExternalId = value.hierarchyExternalId;
      this._hierarchyId = value.hierarchyId;
      this._hierarchyLogicalId = value.hierarchyLogicalId;
      this._propertyExternalId = value.propertyExternalId;
      this._propertyId = value.propertyId;
      this._propertyLogicalId = value.propertyLogicalId;
      this._propertyPath.internalValue = value.propertyPath;
    }
  }

  // hierarchy_external_id - computed: true, optional: true, required: false
  private _hierarchyExternalId?: string;
  public get hierarchyExternalId() {
    return this.getStringAttribute('hierarchy_external_id');
  }
  public set hierarchyExternalId(value: string) {
    this._hierarchyExternalId = value;
  }
  public resetHierarchyExternalId() {
    this._hierarchyExternalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hierarchyExternalIdInput() {
    return this._hierarchyExternalId;
  }

  // hierarchy_id - computed: true, optional: true, required: false
  private _hierarchyId?: string;
  public get hierarchyId() {
    return this.getStringAttribute('hierarchy_id');
  }
  public set hierarchyId(value: string) {
    this._hierarchyId = value;
  }
  public resetHierarchyId() {
    this._hierarchyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hierarchyIdInput() {
    return this._hierarchyId;
  }

  // hierarchy_logical_id - computed: true, optional: true, required: false
  private _hierarchyLogicalId?: string;
  public get hierarchyLogicalId() {
    return this.getStringAttribute('hierarchy_logical_id');
  }
  public set hierarchyLogicalId(value: string) {
    this._hierarchyLogicalId = value;
  }
  public resetHierarchyLogicalId() {
    this._hierarchyLogicalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hierarchyLogicalIdInput() {
    return this._hierarchyLogicalId;
  }

  // property_external_id - computed: true, optional: true, required: false
  private _propertyExternalId?: string;
  public get propertyExternalId() {
    return this.getStringAttribute('property_external_id');
  }
  public set propertyExternalId(value: string) {
    this._propertyExternalId = value;
  }
  public resetPropertyExternalId() {
    this._propertyExternalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyExternalIdInput() {
    return this._propertyExternalId;
  }

  // property_id - computed: true, optional: true, required: false
  private _propertyId?: string;
  public get propertyId() {
    return this.getStringAttribute('property_id');
  }
  public set propertyId(value: string) {
    this._propertyId = value;
  }
  public resetPropertyId() {
    this._propertyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyIdInput() {
    return this._propertyId;
  }

  // property_logical_id - computed: true, optional: true, required: false
  private _propertyLogicalId?: string;
  public get propertyLogicalId() {
    return this.getStringAttribute('property_logical_id');
  }
  public set propertyLogicalId(value: string) {
    this._propertyLogicalId = value;
  }
  public resetPropertyLogicalId() {
    this._propertyLogicalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyLogicalIdInput() {
    return this._propertyLogicalId;
  }

  // property_path - computed: true, optional: true, required: false
  private _propertyPath = new IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList(this, "property_path", false);
  public get propertyPath() {
    return this._propertyPath;
  }
  public putPropertyPath(value: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPath[] | cdktn.IResolvable) {
    this._propertyPath.internalValue = value;
  }
  public resetPropertyPath() {
    this._propertyPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyPathInput() {
    return this._propertyPath.internalValue;
  }
}
export interface IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables {
  /**
  * The friendly name of the variable to be used in the expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#name IotsitewiseAssetModel#name}
  */
  readonly name?: string;
  /**
  * The variable that identifies an asset property from which to use values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#value IotsitewiseAssetModel#value}
  */
  readonly value?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue;
}

export function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesToTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueToTerraform(struct!.value),
  }
}


export function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesToHclTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables | cdktn.IResolvable): any {
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
    value: {
      value: iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value.internalValue = value.value;
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

  // value - computed: true, optional: true, required: false
  private _value = new IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList extends cdktn.ComplexList {
  public internalValue? : IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables[] | cdktn.IResolvable

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
  public get(index: number): IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference {
    return new IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling {
  /**
  * The time interval for the tumbling window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#interval IotsitewiseAssetModel#interval}
  */
  readonly interval?: string;
  /**
  * The shift or reference point on timeline for the contiguous time intervals.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#offset IotsitewiseAssetModel#offset}
  */
  readonly offset?: string;
}

export function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingToTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    interval: cdktn.stringToTerraform(struct!.interval),
    offset: cdktn.stringToTerraform(struct!.offset),
  }
}


export function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingToHclTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    interval: {
      value: cdktn.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    offset: {
      value: cdktn.stringToHclTerraform(struct!.offset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._offset !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset = this._offset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._offset = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._offset = value.offset;
    }
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: string;
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // offset - computed: true, optional: true, required: false
  private _offset?: string;
  public get offset() {
    return this.getStringAttribute('offset');
  }
  public set offset(value: string) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }
}
export interface IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow {
  /**
  * Contains a tumbling window, which is a repeating fixed-sized, non-overlapping, and contiguous time interval. This window is used in metric and aggregation computations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#tumbling IotsitewiseAssetModel#tumbling}
  */
  readonly tumbling?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling;
}

export function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowToTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tumbling: iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingToTerraform(struct!.tumbling),
  }
}


export function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowToHclTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tumbling: {
      value: iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingToHclTerraform(struct!.tumbling),
      isBlock: true,
      type: "struct",
      storageClassType: "IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tumbling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tumbling = this._tumbling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tumbling.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tumbling.internalValue = value.tumbling;
    }
  }

  // tumbling - computed: true, optional: true, required: false
  private _tumbling = new IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference(this, "tumbling");
  public get tumbling() {
    return this._tumbling;
  }
  public putTumbling(value: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling) {
    this._tumbling.internalValue = value;
  }
  public resetTumbling() {
    this._tumbling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tumblingInput() {
    return this._tumbling.internalValue;
  }
}
export interface IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric {
  /**
  * The mathematical expression that defines the metric aggregation function. You can specify up to 10 functions per expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#expression IotsitewiseAssetModel#expression}
  */
  readonly expression?: string;
  /**
  * The list of variables used in the expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#variables IotsitewiseAssetModel#variables}
  */
  readonly variables?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables[] | cdktn.IResolvable;
  /**
  * The window (time interval) over which AWS IoT SiteWise computes the metric's aggregation expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#window IotsitewiseAssetModel#window}
  */
  readonly window?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow;
}

export function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricToTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expression: cdktn.stringToTerraform(struct!.expression),
    variables: cdktn.listMapper(iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesToTerraform, false)(struct!.variables),
    window: iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowToTerraform(struct!.window),
  }
}


export function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricToHclTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variables: {
      value: cdktn.listMapperHcl(iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesToHclTerraform, false)(struct!.variables),
      isBlock: true,
      type: "list",
      storageClassType: "IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList",
    },
    window: {
      value: iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowToHclTerraform(struct!.window),
      isBlock: true,
      type: "struct",
      storageClassType: "IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    if (this._window?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._variables.internalValue = undefined;
      this._window.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._variables.internalValue = value.variables;
      this._window.internalValue = value.window;
    }
  }

  // expression - computed: true, optional: true, required: false
  private _expression?: string;
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // variables - computed: true, optional: true, required: false
  private _variables = new IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
  public putVariables(value: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables[] | cdktn.IResolvable) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }

  // window - computed: true, optional: true, required: false
  private _window = new IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference(this, "window");
  public get window() {
    return this._window;
  }
  public putWindow(value: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow) {
    this._window.internalValue = value;
  }
  public resetWindow() {
    this._window.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window.internalValue;
  }
}
export interface IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPath {
  /**
  * The name of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#name IotsitewiseAssetModel#name}
  */
  readonly name?: string;
}

export function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathToTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPath | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathToHclTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPath | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPath | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPath | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList extends cdktn.ComplexList {
  public internalValue? : IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPath[] | cdktn.IResolvable

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
  public get(index: number): IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference {
    return new IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue {
  /**
  * The External ID of the hierarchy that is trying to be referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#hierarchy_external_id IotsitewiseAssetModel#hierarchy_external_id}
  */
  readonly hierarchyExternalId?: string;
  /**
  * The ID of the hierarchy that is trying to be referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#hierarchy_id IotsitewiseAssetModel#hierarchy_id}
  */
  readonly hierarchyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#hierarchy_logical_id IotsitewiseAssetModel#hierarchy_logical_id}
  */
  readonly hierarchyLogicalId?: string;
  /**
  * The External ID of the property that is trying to be referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#property_external_id IotsitewiseAssetModel#property_external_id}
  */
  readonly propertyExternalId?: string;
  /**
  * The ID of the property that is trying to be referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#property_id IotsitewiseAssetModel#property_id}
  */
  readonly propertyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#property_logical_id IotsitewiseAssetModel#property_logical_id}
  */
  readonly propertyLogicalId?: string;
  /**
  * The path of the property that is trying to be referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#property_path IotsitewiseAssetModel#property_path}
  */
  readonly propertyPath?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPath[] | cdktn.IResolvable;
}

export function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueToTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hierarchy_external_id: cdktn.stringToTerraform(struct!.hierarchyExternalId),
    hierarchy_id: cdktn.stringToTerraform(struct!.hierarchyId),
    hierarchy_logical_id: cdktn.stringToTerraform(struct!.hierarchyLogicalId),
    property_external_id: cdktn.stringToTerraform(struct!.propertyExternalId),
    property_id: cdktn.stringToTerraform(struct!.propertyId),
    property_logical_id: cdktn.stringToTerraform(struct!.propertyLogicalId),
    property_path: cdktn.listMapper(iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathToTerraform, false)(struct!.propertyPath),
  }
}


export function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueToHclTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hierarchy_external_id: {
      value: cdktn.stringToHclTerraform(struct!.hierarchyExternalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hierarchy_id: {
      value: cdktn.stringToHclTerraform(struct!.hierarchyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hierarchy_logical_id: {
      value: cdktn.stringToHclTerraform(struct!.hierarchyLogicalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_external_id: {
      value: cdktn.stringToHclTerraform(struct!.propertyExternalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_id: {
      value: cdktn.stringToHclTerraform(struct!.propertyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_logical_id: {
      value: cdktn.stringToHclTerraform(struct!.propertyLogicalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_path: {
      value: cdktn.listMapperHcl(iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathToHclTerraform, false)(struct!.propertyPath),
      isBlock: true,
      type: "list",
      storageClassType: "IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hierarchyExternalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hierarchyExternalId = this._hierarchyExternalId;
    }
    if (this._hierarchyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hierarchyId = this._hierarchyId;
    }
    if (this._hierarchyLogicalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hierarchyLogicalId = this._hierarchyLogicalId;
    }
    if (this._propertyExternalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyExternalId = this._propertyExternalId;
    }
    if (this._propertyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyId = this._propertyId;
    }
    if (this._propertyLogicalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyLogicalId = this._propertyLogicalId;
    }
    if (this._propertyPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyPath = this._propertyPath?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hierarchyExternalId = undefined;
      this._hierarchyId = undefined;
      this._hierarchyLogicalId = undefined;
      this._propertyExternalId = undefined;
      this._propertyId = undefined;
      this._propertyLogicalId = undefined;
      this._propertyPath.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hierarchyExternalId = value.hierarchyExternalId;
      this._hierarchyId = value.hierarchyId;
      this._hierarchyLogicalId = value.hierarchyLogicalId;
      this._propertyExternalId = value.propertyExternalId;
      this._propertyId = value.propertyId;
      this._propertyLogicalId = value.propertyLogicalId;
      this._propertyPath.internalValue = value.propertyPath;
    }
  }

  // hierarchy_external_id - computed: true, optional: true, required: false
  private _hierarchyExternalId?: string;
  public get hierarchyExternalId() {
    return this.getStringAttribute('hierarchy_external_id');
  }
  public set hierarchyExternalId(value: string) {
    this._hierarchyExternalId = value;
  }
  public resetHierarchyExternalId() {
    this._hierarchyExternalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hierarchyExternalIdInput() {
    return this._hierarchyExternalId;
  }

  // hierarchy_id - computed: true, optional: true, required: false
  private _hierarchyId?: string;
  public get hierarchyId() {
    return this.getStringAttribute('hierarchy_id');
  }
  public set hierarchyId(value: string) {
    this._hierarchyId = value;
  }
  public resetHierarchyId() {
    this._hierarchyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hierarchyIdInput() {
    return this._hierarchyId;
  }

  // hierarchy_logical_id - computed: true, optional: true, required: false
  private _hierarchyLogicalId?: string;
  public get hierarchyLogicalId() {
    return this.getStringAttribute('hierarchy_logical_id');
  }
  public set hierarchyLogicalId(value: string) {
    this._hierarchyLogicalId = value;
  }
  public resetHierarchyLogicalId() {
    this._hierarchyLogicalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hierarchyLogicalIdInput() {
    return this._hierarchyLogicalId;
  }

  // property_external_id - computed: true, optional: true, required: false
  private _propertyExternalId?: string;
  public get propertyExternalId() {
    return this.getStringAttribute('property_external_id');
  }
  public set propertyExternalId(value: string) {
    this._propertyExternalId = value;
  }
  public resetPropertyExternalId() {
    this._propertyExternalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyExternalIdInput() {
    return this._propertyExternalId;
  }

  // property_id - computed: true, optional: true, required: false
  private _propertyId?: string;
  public get propertyId() {
    return this.getStringAttribute('property_id');
  }
  public set propertyId(value: string) {
    this._propertyId = value;
  }
  public resetPropertyId() {
    this._propertyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyIdInput() {
    return this._propertyId;
  }

  // property_logical_id - computed: true, optional: true, required: false
  private _propertyLogicalId?: string;
  public get propertyLogicalId() {
    return this.getStringAttribute('property_logical_id');
  }
  public set propertyLogicalId(value: string) {
    this._propertyLogicalId = value;
  }
  public resetPropertyLogicalId() {
    this._propertyLogicalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyLogicalIdInput() {
    return this._propertyLogicalId;
  }

  // property_path - computed: true, optional: true, required: false
  private _propertyPath = new IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList(this, "property_path", false);
  public get propertyPath() {
    return this._propertyPath;
  }
  public putPropertyPath(value: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPath[] | cdktn.IResolvable) {
    this._propertyPath.internalValue = value;
  }
  public resetPropertyPath() {
    this._propertyPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyPathInput() {
    return this._propertyPath.internalValue;
  }
}
export interface IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables {
  /**
  * The friendly name of the variable to be used in the expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#name IotsitewiseAssetModel#name}
  */
  readonly name?: string;
  /**
  * The variable that identifies an asset property from which to use values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#value IotsitewiseAssetModel#value}
  */
  readonly value?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue;
}

export function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesToTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueToTerraform(struct!.value),
  }
}


export function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesToHclTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables | cdktn.IResolvable): any {
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
    value: {
      value: iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value.internalValue = value.value;
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

  // value - computed: true, optional: true, required: false
  private _value = new IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList extends cdktn.ComplexList {
  public internalValue? : IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables[] | cdktn.IResolvable

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
  public get(index: number): IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference {
    return new IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform {
  /**
  * The mathematical expression that defines the transformation function. You can specify up to 10 functions per expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#expression IotsitewiseAssetModel#expression}
  */
  readonly expression?: string;
  /**
  * The list of variables used in the expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#variables IotsitewiseAssetModel#variables}
  */
  readonly variables?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables[] | cdktn.IResolvable;
}

export function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformToTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expression: cdktn.stringToTerraform(struct!.expression),
    variables: cdktn.listMapper(iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesToTerraform, false)(struct!.variables),
  }
}


export function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformToHclTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variables: {
      value: cdktn.listMapperHcl(iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesToHclTerraform, false)(struct!.variables),
      isBlock: true,
      type: "list",
      storageClassType: "IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._variables.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._variables.internalValue = value.variables;
    }
  }

  // expression - computed: true, optional: true, required: false
  private _expression?: string;
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // variables - computed: true, optional: true, required: false
  private _variables = new IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
  public putVariables(value: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables[] | cdktn.IResolvable) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }
}
export interface IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#attribute IotsitewiseAssetModel#attribute}
  */
  readonly attribute?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#metric IotsitewiseAssetModel#metric}
  */
  readonly metric?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#transform IotsitewiseAssetModel#transform}
  */
  readonly transform?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#type_name IotsitewiseAssetModel#type_name}
  */
  readonly typeName?: string;
}

export function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeToTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeToTerraform(struct!.attribute),
    metric: iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricToTerraform(struct!.metric),
    transform: iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformToTerraform(struct!.transform),
    type_name: cdktn.stringToTerraform(struct!.typeName),
  }
}


export function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeToHclTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute: {
      value: iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeToHclTerraform(struct!.attribute),
      isBlock: true,
      type: "struct",
      storageClassType: "IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute",
    },
    metric: {
      value: iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric",
    },
    transform: {
      value: iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformToHclTerraform(struct!.transform),
      isBlock: true,
      type: "struct",
      storageClassType: "IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform",
    },
    type_name: {
      value: cdktn.stringToHclTerraform(struct!.typeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute?.internalValue;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._transform?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transform = this._transform?.internalValue;
    }
    if (this._typeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeName = this._typeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute.internalValue = undefined;
      this._metric.internalValue = undefined;
      this._transform.internalValue = undefined;
      this._typeName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute.internalValue = value.attribute;
      this._metric.internalValue = value.metric;
      this._transform.internalValue = value.transform;
      this._typeName = value.typeName;
    }
  }

  // attribute - computed: true, optional: true, required: false
  private _attribute = new IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference(this, "attribute");
  public get attribute() {
    return this._attribute;
  }
  public putAttribute(value: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute) {
    this._attribute.internalValue = value;
  }
  public resetAttribute() {
    this._attribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute.internalValue;
  }

  // metric - computed: true, optional: true, required: false
  private _metric = new IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // transform - computed: true, optional: true, required: false
  private _transform = new IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference(this, "transform");
  public get transform() {
    return this._transform;
  }
  public putTransform(value: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform) {
    this._transform.internalValue = value;
  }
  public resetTransform() {
    this._transform.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformInput() {
    return this._transform.internalValue;
  }

  // type_name - computed: true, optional: true, required: false
  private _typeName?: string;
  public get typeName() {
    return this.getStringAttribute('type_name');
  }
  public set typeName(value: string) {
    this._typeName = value;
  }
  public resetTypeName() {
    this._typeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNameInput() {
    return this._typeName;
  }
}
export interface IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties {
  /**
  * The data type of the asset model property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#data_type IotsitewiseAssetModel#data_type}
  */
  readonly dataType?: string;
  /**
  * The data type of the structure for this property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#data_type_spec IotsitewiseAssetModel#data_type_spec}
  */
  readonly dataTypeSpec?: string;
  /**
  * The External ID of the Asset Model Property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#external_id IotsitewiseAssetModel#external_id}
  */
  readonly externalId?: string;
  /**
  * The ID of the Asset Model Property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#id IotsitewiseAssetModel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Customer provided Logical ID for property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#logical_id IotsitewiseAssetModel#logical_id}
  */
  readonly logicalId?: string;
  /**
  * The name of the asset model property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#name IotsitewiseAssetModel#name}
  */
  readonly name?: string;
  /**
  * The property type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#type IotsitewiseAssetModel#type}
  */
  readonly type?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType;
  /**
  * The unit of the asset model property, such as Newtons or RPM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#unit IotsitewiseAssetModel#unit}
  */
  readonly unit?: string;
}

export function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesToTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_type: cdktn.stringToTerraform(struct!.dataType),
    data_type_spec: cdktn.stringToTerraform(struct!.dataTypeSpec),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    id: cdktn.stringToTerraform(struct!.id),
    logical_id: cdktn.stringToTerraform(struct!.logicalId),
    name: cdktn.stringToTerraform(struct!.name),
    type: iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeToTerraform(struct!.type),
    unit: cdktn.stringToTerraform(struct!.unit),
  }
}


export function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesToHclTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_type: {
      value: cdktn.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_type_spec: {
      value: cdktn.stringToHclTerraform(struct!.dataTypeSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logical_id: {
      value: cdktn.stringToHclTerraform(struct!.logicalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeToHclTerraform(struct!.type),
      isBlock: true,
      type: "struct",
      storageClassType: "IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType",
    },
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._dataTypeSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataTypeSpec = this._dataTypeSpec;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._logicalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalId = this._logicalId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type?.internalValue;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataType = undefined;
      this._dataTypeSpec = undefined;
      this._externalId = undefined;
      this._id = undefined;
      this._logicalId = undefined;
      this._name = undefined;
      this._type.internalValue = undefined;
      this._unit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataType = value.dataType;
      this._dataTypeSpec = value.dataTypeSpec;
      this._externalId = value.externalId;
      this._id = value.id;
      this._logicalId = value.logicalId;
      this._name = value.name;
      this._type.internalValue = value.type;
      this._unit = value.unit;
    }
  }

  // data_type - computed: true, optional: true, required: false
  private _dataType?: string;
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // data_type_spec - computed: true, optional: true, required: false
  private _dataTypeSpec?: string;
  public get dataTypeSpec() {
    return this.getStringAttribute('data_type_spec');
  }
  public set dataTypeSpec(value: string) {
    this._dataTypeSpec = value;
  }
  public resetDataTypeSpec() {
    this._dataTypeSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeSpecInput() {
    return this._dataTypeSpec;
  }

  // external_id - computed: true, optional: true, required: false
  private _externalId?: string;
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // logical_id - computed: true, optional: true, required: false
  private _logicalId?: string;
  public get logicalId() {
    return this.getStringAttribute('logical_id');
  }
  public set logicalId(value: string) {
    this._logicalId = value;
  }
  public resetLogicalId() {
    this._logicalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalIdInput() {
    return this._logicalId;
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

  // type - computed: true, optional: true, required: false
  private _type = new IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
  public putType(value: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType) {
    this._type.internalValue = value;
  }
  public resetType() {
    this._type.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type.internalValue;
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string;
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList extends cdktn.ComplexList {
  public internalValue? : IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties[] | cdktn.IResolvable

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
  public get(index: number): IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference {
    return new IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotsitewiseAssetModelAssetModelCompositeModels {
  /**
  * The component model ID for which the composite model is composed of
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#composed_asset_model_id IotsitewiseAssetModel#composed_asset_model_id}
  */
  readonly composedAssetModelId?: string;
  /**
  * The property definitions of the asset model. You can specify up to 200 properties per asset model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#composite_model_properties IotsitewiseAssetModel#composite_model_properties}
  */
  readonly compositeModelProperties?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties[] | cdktn.IResolvable;
  /**
  * A description for the asset composite model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#description IotsitewiseAssetModel#description}
  */
  readonly description?: string;
  /**
  * The External ID of the composite model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#external_id IotsitewiseAssetModel#external_id}
  */
  readonly externalId?: string;
  /**
  * The Actual ID of the composite model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#id IotsitewiseAssetModel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique, friendly name for the asset composite model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#name IotsitewiseAssetModel#name}
  */
  readonly name?: string;
  /**
  * The parent composite model External ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#parent_asset_model_composite_model_external_id IotsitewiseAssetModel#parent_asset_model_composite_model_external_id}
  */
  readonly parentAssetModelCompositeModelExternalId?: string;
  /**
  * The path of the composite model. This is only for derived composite models
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#path IotsitewiseAssetModel#path}
  */
  readonly path?: string[];
  /**
  * The type of the composite model. For alarm composite models, this type is AWS/ALARM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#type IotsitewiseAssetModel#type}
  */
  readonly type?: string;
}

export function iotsitewiseAssetModelAssetModelCompositeModelsToTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModels | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    composed_asset_model_id: cdktn.stringToTerraform(struct!.composedAssetModelId),
    composite_model_properties: cdktn.listMapper(iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesToTerraform, false)(struct!.compositeModelProperties),
    description: cdktn.stringToTerraform(struct!.description),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    id: cdktn.stringToTerraform(struct!.id),
    name: cdktn.stringToTerraform(struct!.name),
    parent_asset_model_composite_model_external_id: cdktn.stringToTerraform(struct!.parentAssetModelCompositeModelExternalId),
    path: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.path),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function iotsitewiseAssetModelAssetModelCompositeModelsToHclTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModels | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    composed_asset_model_id: {
      value: cdktn.stringToHclTerraform(struct!.composedAssetModelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    composite_model_properties: {
      value: cdktn.listMapperHcl(iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesToHclTerraform, false)(struct!.compositeModelProperties),
      isBlock: true,
      type: "list",
      storageClassType: "IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent_asset_model_composite_model_external_id: {
      value: cdktn.stringToHclTerraform(struct!.parentAssetModelCompositeModelExternalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.path),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class IotsitewiseAssetModelAssetModelCompositeModelsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotsitewiseAssetModelAssetModelCompositeModels | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._composedAssetModelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.composedAssetModelId = this._composedAssetModelId;
    }
    if (this._compositeModelProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compositeModelProperties = this._compositeModelProperties?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parentAssetModelCompositeModelExternalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentAssetModelCompositeModelExternalId = this._parentAssetModelCompositeModelExternalId;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseAssetModelAssetModelCompositeModels | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._composedAssetModelId = undefined;
      this._compositeModelProperties.internalValue = undefined;
      this._description = undefined;
      this._externalId = undefined;
      this._id = undefined;
      this._name = undefined;
      this._parentAssetModelCompositeModelExternalId = undefined;
      this._path = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._composedAssetModelId = value.composedAssetModelId;
      this._compositeModelProperties.internalValue = value.compositeModelProperties;
      this._description = value.description;
      this._externalId = value.externalId;
      this._id = value.id;
      this._name = value.name;
      this._parentAssetModelCompositeModelExternalId = value.parentAssetModelCompositeModelExternalId;
      this._path = value.path;
      this._type = value.type;
    }
  }

  // composed_asset_model_id - computed: true, optional: true, required: false
  private _composedAssetModelId?: string;
  public get composedAssetModelId() {
    return this.getStringAttribute('composed_asset_model_id');
  }
  public set composedAssetModelId(value: string) {
    this._composedAssetModelId = value;
  }
  public resetComposedAssetModelId() {
    this._composedAssetModelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get composedAssetModelIdInput() {
    return this._composedAssetModelId;
  }

  // composite_model_properties - computed: true, optional: true, required: false
  private _compositeModelProperties = new IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList(this, "composite_model_properties", false);
  public get compositeModelProperties() {
    return this._compositeModelProperties;
  }
  public putCompositeModelProperties(value: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties[] | cdktn.IResolvable) {
    this._compositeModelProperties.internalValue = value;
  }
  public resetCompositeModelProperties() {
    this._compositeModelProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositeModelPropertiesInput() {
    return this._compositeModelProperties.internalValue;
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

  // external_id - computed: true, optional: true, required: false
  private _externalId?: string;
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // parent_asset_model_composite_model_external_id - computed: true, optional: true, required: false
  private _parentAssetModelCompositeModelExternalId?: string;
  public get parentAssetModelCompositeModelExternalId() {
    return this.getStringAttribute('parent_asset_model_composite_model_external_id');
  }
  public set parentAssetModelCompositeModelExternalId(value: string) {
    this._parentAssetModelCompositeModelExternalId = value;
  }
  public resetParentAssetModelCompositeModelExternalId() {
    this._parentAssetModelCompositeModelExternalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentAssetModelCompositeModelExternalIdInput() {
    return this._parentAssetModelCompositeModelExternalId;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string[];
  public get path() {
    return this.getListAttribute('path');
  }
  public set path(value: string[]) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

export class IotsitewiseAssetModelAssetModelCompositeModelsList extends cdktn.ComplexList {
  public internalValue? : IotsitewiseAssetModelAssetModelCompositeModels[] | cdktn.IResolvable

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
  public get(index: number): IotsitewiseAssetModelAssetModelCompositeModelsOutputReference {
    return new IotsitewiseAssetModelAssetModelCompositeModelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotsitewiseAssetModelAssetModelHierarchies {
  /**
  * The ID of the asset model. All assets in this hierarchy must be instances of the child AssetModelId asset model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#child_asset_model_id IotsitewiseAssetModel#child_asset_model_id}
  */
  readonly childAssetModelId?: string;
  /**
  * Customer provided external ID for hierarchy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#external_id IotsitewiseAssetModel#external_id}
  */
  readonly externalId?: string;
  /**
  * Customer provided actual ID for hierarchy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#id IotsitewiseAssetModel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Customer provided logical ID for hierarchy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#logical_id IotsitewiseAssetModel#logical_id}
  */
  readonly logicalId?: string;
  /**
  * The name of the asset model hierarchy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#name IotsitewiseAssetModel#name}
  */
  readonly name?: string;
}

export function iotsitewiseAssetModelAssetModelHierarchiesToTerraform(struct?: IotsitewiseAssetModelAssetModelHierarchies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    child_asset_model_id: cdktn.stringToTerraform(struct!.childAssetModelId),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    id: cdktn.stringToTerraform(struct!.id),
    logical_id: cdktn.stringToTerraform(struct!.logicalId),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function iotsitewiseAssetModelAssetModelHierarchiesToHclTerraform(struct?: IotsitewiseAssetModelAssetModelHierarchies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    child_asset_model_id: {
      value: cdktn.stringToHclTerraform(struct!.childAssetModelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logical_id: {
      value: cdktn.stringToHclTerraform(struct!.logicalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseAssetModelAssetModelHierarchiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotsitewiseAssetModelAssetModelHierarchies | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._childAssetModelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.childAssetModelId = this._childAssetModelId;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._logicalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalId = this._logicalId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseAssetModelAssetModelHierarchies | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._childAssetModelId = undefined;
      this._externalId = undefined;
      this._id = undefined;
      this._logicalId = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._childAssetModelId = value.childAssetModelId;
      this._externalId = value.externalId;
      this._id = value.id;
      this._logicalId = value.logicalId;
      this._name = value.name;
    }
  }

  // child_asset_model_id - computed: true, optional: true, required: false
  private _childAssetModelId?: string;
  public get childAssetModelId() {
    return this.getStringAttribute('child_asset_model_id');
  }
  public set childAssetModelId(value: string) {
    this._childAssetModelId = value;
  }
  public resetChildAssetModelId() {
    this._childAssetModelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childAssetModelIdInput() {
    return this._childAssetModelId;
  }

  // external_id - computed: true, optional: true, required: false
  private _externalId?: string;
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // logical_id - computed: true, optional: true, required: false
  private _logicalId?: string;
  public get logicalId() {
    return this.getStringAttribute('logical_id');
  }
  public set logicalId(value: string) {
    this._logicalId = value;
  }
  public resetLogicalId() {
    this._logicalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalIdInput() {
    return this._logicalId;
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
}

export class IotsitewiseAssetModelAssetModelHierarchiesList extends cdktn.ComplexList {
  public internalValue? : IotsitewiseAssetModelAssetModelHierarchies[] | cdktn.IResolvable

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
  public get(index: number): IotsitewiseAssetModelAssetModelHierarchiesOutputReference {
    return new IotsitewiseAssetModelAssetModelHierarchiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotsitewiseAssetModelAssetModelPropertiesTypeAttribute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#default_value IotsitewiseAssetModel#default_value}
  */
  readonly defaultValue?: string;
}

export function iotsitewiseAssetModelAssetModelPropertiesTypeAttributeToTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesTypeAttribute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_value: cdktn.stringToTerraform(struct!.defaultValue),
  }
}


export function iotsitewiseAssetModelAssetModelPropertiesTypeAttributeToHclTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesTypeAttribute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_value: {
      value: cdktn.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotsitewiseAssetModelAssetModelPropertiesTypeAttribute | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseAssetModelAssetModelPropertiesTypeAttribute | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
    }
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string;
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }
}
export interface IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPath {
  /**
  * The name of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#name IotsitewiseAssetModel#name}
  */
  readonly name?: string;
}

export function iotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathToTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPath | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function iotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathToHclTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPath | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPath | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPath | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList extends cdktn.ComplexList {
  public internalValue? : IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPath[] | cdktn.IResolvable

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
  public get(index: number): IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference {
    return new IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue {
  /**
  * The External ID of the hierarchy that is trying to be referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#hierarchy_external_id IotsitewiseAssetModel#hierarchy_external_id}
  */
  readonly hierarchyExternalId?: string;
  /**
  * The ID of the hierarchy that is trying to be referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#hierarchy_id IotsitewiseAssetModel#hierarchy_id}
  */
  readonly hierarchyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#hierarchy_logical_id IotsitewiseAssetModel#hierarchy_logical_id}
  */
  readonly hierarchyLogicalId?: string;
  /**
  * The External ID of the property that is trying to be referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#property_external_id IotsitewiseAssetModel#property_external_id}
  */
  readonly propertyExternalId?: string;
  /**
  * The ID of the property that is trying to be referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#property_id IotsitewiseAssetModel#property_id}
  */
  readonly propertyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#property_logical_id IotsitewiseAssetModel#property_logical_id}
  */
  readonly propertyLogicalId?: string;
  /**
  * The path of the property that is trying to be referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#property_path IotsitewiseAssetModel#property_path}
  */
  readonly propertyPath?: IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPath[] | cdktn.IResolvable;
}

export function iotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueToTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hierarchy_external_id: cdktn.stringToTerraform(struct!.hierarchyExternalId),
    hierarchy_id: cdktn.stringToTerraform(struct!.hierarchyId),
    hierarchy_logical_id: cdktn.stringToTerraform(struct!.hierarchyLogicalId),
    property_external_id: cdktn.stringToTerraform(struct!.propertyExternalId),
    property_id: cdktn.stringToTerraform(struct!.propertyId),
    property_logical_id: cdktn.stringToTerraform(struct!.propertyLogicalId),
    property_path: cdktn.listMapper(iotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathToTerraform, false)(struct!.propertyPath),
  }
}


export function iotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueToHclTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hierarchy_external_id: {
      value: cdktn.stringToHclTerraform(struct!.hierarchyExternalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hierarchy_id: {
      value: cdktn.stringToHclTerraform(struct!.hierarchyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hierarchy_logical_id: {
      value: cdktn.stringToHclTerraform(struct!.hierarchyLogicalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_external_id: {
      value: cdktn.stringToHclTerraform(struct!.propertyExternalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_id: {
      value: cdktn.stringToHclTerraform(struct!.propertyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_logical_id: {
      value: cdktn.stringToHclTerraform(struct!.propertyLogicalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_path: {
      value: cdktn.listMapperHcl(iotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathToHclTerraform, false)(struct!.propertyPath),
      isBlock: true,
      type: "list",
      storageClassType: "IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hierarchyExternalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hierarchyExternalId = this._hierarchyExternalId;
    }
    if (this._hierarchyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hierarchyId = this._hierarchyId;
    }
    if (this._hierarchyLogicalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hierarchyLogicalId = this._hierarchyLogicalId;
    }
    if (this._propertyExternalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyExternalId = this._propertyExternalId;
    }
    if (this._propertyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyId = this._propertyId;
    }
    if (this._propertyLogicalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyLogicalId = this._propertyLogicalId;
    }
    if (this._propertyPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyPath = this._propertyPath?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hierarchyExternalId = undefined;
      this._hierarchyId = undefined;
      this._hierarchyLogicalId = undefined;
      this._propertyExternalId = undefined;
      this._propertyId = undefined;
      this._propertyLogicalId = undefined;
      this._propertyPath.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hierarchyExternalId = value.hierarchyExternalId;
      this._hierarchyId = value.hierarchyId;
      this._hierarchyLogicalId = value.hierarchyLogicalId;
      this._propertyExternalId = value.propertyExternalId;
      this._propertyId = value.propertyId;
      this._propertyLogicalId = value.propertyLogicalId;
      this._propertyPath.internalValue = value.propertyPath;
    }
  }

  // hierarchy_external_id - computed: true, optional: true, required: false
  private _hierarchyExternalId?: string;
  public get hierarchyExternalId() {
    return this.getStringAttribute('hierarchy_external_id');
  }
  public set hierarchyExternalId(value: string) {
    this._hierarchyExternalId = value;
  }
  public resetHierarchyExternalId() {
    this._hierarchyExternalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hierarchyExternalIdInput() {
    return this._hierarchyExternalId;
  }

  // hierarchy_id - computed: true, optional: true, required: false
  private _hierarchyId?: string;
  public get hierarchyId() {
    return this.getStringAttribute('hierarchy_id');
  }
  public set hierarchyId(value: string) {
    this._hierarchyId = value;
  }
  public resetHierarchyId() {
    this._hierarchyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hierarchyIdInput() {
    return this._hierarchyId;
  }

  // hierarchy_logical_id - computed: true, optional: true, required: false
  private _hierarchyLogicalId?: string;
  public get hierarchyLogicalId() {
    return this.getStringAttribute('hierarchy_logical_id');
  }
  public set hierarchyLogicalId(value: string) {
    this._hierarchyLogicalId = value;
  }
  public resetHierarchyLogicalId() {
    this._hierarchyLogicalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hierarchyLogicalIdInput() {
    return this._hierarchyLogicalId;
  }

  // property_external_id - computed: true, optional: true, required: false
  private _propertyExternalId?: string;
  public get propertyExternalId() {
    return this.getStringAttribute('property_external_id');
  }
  public set propertyExternalId(value: string) {
    this._propertyExternalId = value;
  }
  public resetPropertyExternalId() {
    this._propertyExternalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyExternalIdInput() {
    return this._propertyExternalId;
  }

  // property_id - computed: true, optional: true, required: false
  private _propertyId?: string;
  public get propertyId() {
    return this.getStringAttribute('property_id');
  }
  public set propertyId(value: string) {
    this._propertyId = value;
  }
  public resetPropertyId() {
    this._propertyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyIdInput() {
    return this._propertyId;
  }

  // property_logical_id - computed: true, optional: true, required: false
  private _propertyLogicalId?: string;
  public get propertyLogicalId() {
    return this.getStringAttribute('property_logical_id');
  }
  public set propertyLogicalId(value: string) {
    this._propertyLogicalId = value;
  }
  public resetPropertyLogicalId() {
    this._propertyLogicalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyLogicalIdInput() {
    return this._propertyLogicalId;
  }

  // property_path - computed: true, optional: true, required: false
  private _propertyPath = new IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList(this, "property_path", false);
  public get propertyPath() {
    return this._propertyPath;
  }
  public putPropertyPath(value: IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPath[] | cdktn.IResolvable) {
    this._propertyPath.internalValue = value;
  }
  public resetPropertyPath() {
    this._propertyPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyPathInput() {
    return this._propertyPath.internalValue;
  }
}
export interface IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables {
  /**
  * The friendly name of the variable to be used in the expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#name IotsitewiseAssetModel#name}
  */
  readonly name?: string;
  /**
  * The variable that identifies an asset property from which to use values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#value IotsitewiseAssetModel#value}
  */
  readonly value?: IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue;
}

export function iotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesToTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: iotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueToTerraform(struct!.value),
  }
}


export function iotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesToHclTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables | cdktn.IResolvable): any {
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
    value: {
      value: iotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value.internalValue = value.value;
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

  // value - computed: true, optional: true, required: false
  private _value = new IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList extends cdktn.ComplexList {
  public internalValue? : IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables[] | cdktn.IResolvable

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
  public get(index: number): IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference {
    return new IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling {
  /**
  * The time interval for the tumbling window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#interval IotsitewiseAssetModel#interval}
  */
  readonly interval?: string;
  /**
  * The shift or reference point on timeline for the contiguous time intervals.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#offset IotsitewiseAssetModel#offset}
  */
  readonly offset?: string;
}

export function iotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingToTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    interval: cdktn.stringToTerraform(struct!.interval),
    offset: cdktn.stringToTerraform(struct!.offset),
  }
}


export function iotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingToHclTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    interval: {
      value: cdktn.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    offset: {
      value: cdktn.stringToHclTerraform(struct!.offset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._offset !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset = this._offset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._offset = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._offset = value.offset;
    }
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: string;
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // offset - computed: true, optional: true, required: false
  private _offset?: string;
  public get offset() {
    return this.getStringAttribute('offset');
  }
  public set offset(value: string) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }
}
export interface IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow {
  /**
  * Contains a tumbling window, which is a repeating fixed-sized, non-overlapping, and contiguous time interval. This window is used in metric and aggregation computations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#tumbling IotsitewiseAssetModel#tumbling}
  */
  readonly tumbling?: IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling;
}

export function iotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowToTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tumbling: iotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingToTerraform(struct!.tumbling),
  }
}


export function iotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowToHclTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tumbling: {
      value: iotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingToHclTerraform(struct!.tumbling),
      isBlock: true,
      type: "struct",
      storageClassType: "IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tumbling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tumbling = this._tumbling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tumbling.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tumbling.internalValue = value.tumbling;
    }
  }

  // tumbling - computed: true, optional: true, required: false
  private _tumbling = new IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference(this, "tumbling");
  public get tumbling() {
    return this._tumbling;
  }
  public putTumbling(value: IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling) {
    this._tumbling.internalValue = value;
  }
  public resetTumbling() {
    this._tumbling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tumblingInput() {
    return this._tumbling.internalValue;
  }
}
export interface IotsitewiseAssetModelAssetModelPropertiesTypeMetric {
  /**
  * The mathematical expression that defines the metric aggregation function. You can specify up to 10 functions per expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#expression IotsitewiseAssetModel#expression}
  */
  readonly expression?: string;
  /**
  * The list of variables used in the expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#variables IotsitewiseAssetModel#variables}
  */
  readonly variables?: IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables[] | cdktn.IResolvable;
  /**
  * The window (time interval) over which AWS IoT SiteWise computes the metric's aggregation expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#window IotsitewiseAssetModel#window}
  */
  readonly window?: IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow;
}

export function iotsitewiseAssetModelAssetModelPropertiesTypeMetricToTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesTypeMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expression: cdktn.stringToTerraform(struct!.expression),
    variables: cdktn.listMapper(iotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesToTerraform, false)(struct!.variables),
    window: iotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowToTerraform(struct!.window),
  }
}


export function iotsitewiseAssetModelAssetModelPropertiesTypeMetricToHclTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesTypeMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variables: {
      value: cdktn.listMapperHcl(iotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesToHclTerraform, false)(struct!.variables),
      isBlock: true,
      type: "list",
      storageClassType: "IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList",
    },
    window: {
      value: iotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowToHclTerraform(struct!.window),
      isBlock: true,
      type: "struct",
      storageClassType: "IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotsitewiseAssetModelAssetModelPropertiesTypeMetric | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    if (this._window?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseAssetModelAssetModelPropertiesTypeMetric | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._variables.internalValue = undefined;
      this._window.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._variables.internalValue = value.variables;
      this._window.internalValue = value.window;
    }
  }

  // expression - computed: true, optional: true, required: false
  private _expression?: string;
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // variables - computed: true, optional: true, required: false
  private _variables = new IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
  public putVariables(value: IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables[] | cdktn.IResolvable) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }

  // window - computed: true, optional: true, required: false
  private _window = new IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference(this, "window");
  public get window() {
    return this._window;
  }
  public putWindow(value: IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow) {
    this._window.internalValue = value;
  }
  public resetWindow() {
    this._window.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window.internalValue;
  }
}
export interface IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPath {
  /**
  * The name of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#name IotsitewiseAssetModel#name}
  */
  readonly name?: string;
}

export function iotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathToTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPath | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function iotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathToHclTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPath | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPath | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPath | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList extends cdktn.ComplexList {
  public internalValue? : IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPath[] | cdktn.IResolvable

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
  public get(index: number): IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference {
    return new IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue {
  /**
  * The External ID of the hierarchy that is trying to be referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#hierarchy_external_id IotsitewiseAssetModel#hierarchy_external_id}
  */
  readonly hierarchyExternalId?: string;
  /**
  * The ID of the hierarchy that is trying to be referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#hierarchy_id IotsitewiseAssetModel#hierarchy_id}
  */
  readonly hierarchyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#hierarchy_logical_id IotsitewiseAssetModel#hierarchy_logical_id}
  */
  readonly hierarchyLogicalId?: string;
  /**
  * The External ID of the property that is trying to be referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#property_external_id IotsitewiseAssetModel#property_external_id}
  */
  readonly propertyExternalId?: string;
  /**
  * The ID of the property that is trying to be referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#property_id IotsitewiseAssetModel#property_id}
  */
  readonly propertyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#property_logical_id IotsitewiseAssetModel#property_logical_id}
  */
  readonly propertyLogicalId?: string;
  /**
  * The path of the property that is trying to be referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#property_path IotsitewiseAssetModel#property_path}
  */
  readonly propertyPath?: IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPath[] | cdktn.IResolvable;
}

export function iotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueToTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hierarchy_external_id: cdktn.stringToTerraform(struct!.hierarchyExternalId),
    hierarchy_id: cdktn.stringToTerraform(struct!.hierarchyId),
    hierarchy_logical_id: cdktn.stringToTerraform(struct!.hierarchyLogicalId),
    property_external_id: cdktn.stringToTerraform(struct!.propertyExternalId),
    property_id: cdktn.stringToTerraform(struct!.propertyId),
    property_logical_id: cdktn.stringToTerraform(struct!.propertyLogicalId),
    property_path: cdktn.listMapper(iotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathToTerraform, false)(struct!.propertyPath),
  }
}


export function iotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueToHclTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hierarchy_external_id: {
      value: cdktn.stringToHclTerraform(struct!.hierarchyExternalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hierarchy_id: {
      value: cdktn.stringToHclTerraform(struct!.hierarchyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hierarchy_logical_id: {
      value: cdktn.stringToHclTerraform(struct!.hierarchyLogicalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_external_id: {
      value: cdktn.stringToHclTerraform(struct!.propertyExternalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_id: {
      value: cdktn.stringToHclTerraform(struct!.propertyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_logical_id: {
      value: cdktn.stringToHclTerraform(struct!.propertyLogicalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_path: {
      value: cdktn.listMapperHcl(iotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathToHclTerraform, false)(struct!.propertyPath),
      isBlock: true,
      type: "list",
      storageClassType: "IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hierarchyExternalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hierarchyExternalId = this._hierarchyExternalId;
    }
    if (this._hierarchyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hierarchyId = this._hierarchyId;
    }
    if (this._hierarchyLogicalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hierarchyLogicalId = this._hierarchyLogicalId;
    }
    if (this._propertyExternalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyExternalId = this._propertyExternalId;
    }
    if (this._propertyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyId = this._propertyId;
    }
    if (this._propertyLogicalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyLogicalId = this._propertyLogicalId;
    }
    if (this._propertyPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyPath = this._propertyPath?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hierarchyExternalId = undefined;
      this._hierarchyId = undefined;
      this._hierarchyLogicalId = undefined;
      this._propertyExternalId = undefined;
      this._propertyId = undefined;
      this._propertyLogicalId = undefined;
      this._propertyPath.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hierarchyExternalId = value.hierarchyExternalId;
      this._hierarchyId = value.hierarchyId;
      this._hierarchyLogicalId = value.hierarchyLogicalId;
      this._propertyExternalId = value.propertyExternalId;
      this._propertyId = value.propertyId;
      this._propertyLogicalId = value.propertyLogicalId;
      this._propertyPath.internalValue = value.propertyPath;
    }
  }

  // hierarchy_external_id - computed: true, optional: true, required: false
  private _hierarchyExternalId?: string;
  public get hierarchyExternalId() {
    return this.getStringAttribute('hierarchy_external_id');
  }
  public set hierarchyExternalId(value: string) {
    this._hierarchyExternalId = value;
  }
  public resetHierarchyExternalId() {
    this._hierarchyExternalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hierarchyExternalIdInput() {
    return this._hierarchyExternalId;
  }

  // hierarchy_id - computed: true, optional: true, required: false
  private _hierarchyId?: string;
  public get hierarchyId() {
    return this.getStringAttribute('hierarchy_id');
  }
  public set hierarchyId(value: string) {
    this._hierarchyId = value;
  }
  public resetHierarchyId() {
    this._hierarchyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hierarchyIdInput() {
    return this._hierarchyId;
  }

  // hierarchy_logical_id - computed: true, optional: true, required: false
  private _hierarchyLogicalId?: string;
  public get hierarchyLogicalId() {
    return this.getStringAttribute('hierarchy_logical_id');
  }
  public set hierarchyLogicalId(value: string) {
    this._hierarchyLogicalId = value;
  }
  public resetHierarchyLogicalId() {
    this._hierarchyLogicalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hierarchyLogicalIdInput() {
    return this._hierarchyLogicalId;
  }

  // property_external_id - computed: true, optional: true, required: false
  private _propertyExternalId?: string;
  public get propertyExternalId() {
    return this.getStringAttribute('property_external_id');
  }
  public set propertyExternalId(value: string) {
    this._propertyExternalId = value;
  }
  public resetPropertyExternalId() {
    this._propertyExternalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyExternalIdInput() {
    return this._propertyExternalId;
  }

  // property_id - computed: true, optional: true, required: false
  private _propertyId?: string;
  public get propertyId() {
    return this.getStringAttribute('property_id');
  }
  public set propertyId(value: string) {
    this._propertyId = value;
  }
  public resetPropertyId() {
    this._propertyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyIdInput() {
    return this._propertyId;
  }

  // property_logical_id - computed: true, optional: true, required: false
  private _propertyLogicalId?: string;
  public get propertyLogicalId() {
    return this.getStringAttribute('property_logical_id');
  }
  public set propertyLogicalId(value: string) {
    this._propertyLogicalId = value;
  }
  public resetPropertyLogicalId() {
    this._propertyLogicalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyLogicalIdInput() {
    return this._propertyLogicalId;
  }

  // property_path - computed: true, optional: true, required: false
  private _propertyPath = new IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList(this, "property_path", false);
  public get propertyPath() {
    return this._propertyPath;
  }
  public putPropertyPath(value: IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPath[] | cdktn.IResolvable) {
    this._propertyPath.internalValue = value;
  }
  public resetPropertyPath() {
    this._propertyPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyPathInput() {
    return this._propertyPath.internalValue;
  }
}
export interface IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables {
  /**
  * The friendly name of the variable to be used in the expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#name IotsitewiseAssetModel#name}
  */
  readonly name?: string;
  /**
  * The variable that identifies an asset property from which to use values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#value IotsitewiseAssetModel#value}
  */
  readonly value?: IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue;
}

export function iotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesToTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: iotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueToTerraform(struct!.value),
  }
}


export function iotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesToHclTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables | cdktn.IResolvable): any {
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
    value: {
      value: iotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value.internalValue = value.value;
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

  // value - computed: true, optional: true, required: false
  private _value = new IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList extends cdktn.ComplexList {
  public internalValue? : IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables[] | cdktn.IResolvable

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
  public get(index: number): IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference {
    return new IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotsitewiseAssetModelAssetModelPropertiesTypeTransform {
  /**
  * The mathematical expression that defines the transformation function. You can specify up to 10 functions per expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#expression IotsitewiseAssetModel#expression}
  */
  readonly expression?: string;
  /**
  * The list of variables used in the expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#variables IotsitewiseAssetModel#variables}
  */
  readonly variables?: IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables[] | cdktn.IResolvable;
}

export function iotsitewiseAssetModelAssetModelPropertiesTypeTransformToTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesTypeTransform | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expression: cdktn.stringToTerraform(struct!.expression),
    variables: cdktn.listMapper(iotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesToTerraform, false)(struct!.variables),
  }
}


export function iotsitewiseAssetModelAssetModelPropertiesTypeTransformToHclTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesTypeTransform | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variables: {
      value: cdktn.listMapperHcl(iotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesToHclTerraform, false)(struct!.variables),
      isBlock: true,
      type: "list",
      storageClassType: "IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotsitewiseAssetModelAssetModelPropertiesTypeTransform | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseAssetModelAssetModelPropertiesTypeTransform | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._variables.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._variables.internalValue = value.variables;
    }
  }

  // expression - computed: true, optional: true, required: false
  private _expression?: string;
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // variables - computed: true, optional: true, required: false
  private _variables = new IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
  public putVariables(value: IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables[] | cdktn.IResolvable) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }
}
export interface IotsitewiseAssetModelAssetModelPropertiesType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#attribute IotsitewiseAssetModel#attribute}
  */
  readonly attribute?: IotsitewiseAssetModelAssetModelPropertiesTypeAttribute;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#metric IotsitewiseAssetModel#metric}
  */
  readonly metric?: IotsitewiseAssetModelAssetModelPropertiesTypeMetric;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#transform IotsitewiseAssetModel#transform}
  */
  readonly transform?: IotsitewiseAssetModelAssetModelPropertiesTypeTransform;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#type_name IotsitewiseAssetModel#type_name}
  */
  readonly typeName?: string;
}

export function iotsitewiseAssetModelAssetModelPropertiesTypeToTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: iotsitewiseAssetModelAssetModelPropertiesTypeAttributeToTerraform(struct!.attribute),
    metric: iotsitewiseAssetModelAssetModelPropertiesTypeMetricToTerraform(struct!.metric),
    transform: iotsitewiseAssetModelAssetModelPropertiesTypeTransformToTerraform(struct!.transform),
    type_name: cdktn.stringToTerraform(struct!.typeName),
  }
}


export function iotsitewiseAssetModelAssetModelPropertiesTypeToHclTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute: {
      value: iotsitewiseAssetModelAssetModelPropertiesTypeAttributeToHclTerraform(struct!.attribute),
      isBlock: true,
      type: "struct",
      storageClassType: "IotsitewiseAssetModelAssetModelPropertiesTypeAttribute",
    },
    metric: {
      value: iotsitewiseAssetModelAssetModelPropertiesTypeMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "IotsitewiseAssetModelAssetModelPropertiesTypeMetric",
    },
    transform: {
      value: iotsitewiseAssetModelAssetModelPropertiesTypeTransformToHclTerraform(struct!.transform),
      isBlock: true,
      type: "struct",
      storageClassType: "IotsitewiseAssetModelAssetModelPropertiesTypeTransform",
    },
    type_name: {
      value: cdktn.stringToHclTerraform(struct!.typeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotsitewiseAssetModelAssetModelPropertiesType | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute?.internalValue;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._transform?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transform = this._transform?.internalValue;
    }
    if (this._typeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeName = this._typeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseAssetModelAssetModelPropertiesType | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute.internalValue = undefined;
      this._metric.internalValue = undefined;
      this._transform.internalValue = undefined;
      this._typeName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute.internalValue = value.attribute;
      this._metric.internalValue = value.metric;
      this._transform.internalValue = value.transform;
      this._typeName = value.typeName;
    }
  }

  // attribute - computed: true, optional: true, required: false
  private _attribute = new IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference(this, "attribute");
  public get attribute() {
    return this._attribute;
  }
  public putAttribute(value: IotsitewiseAssetModelAssetModelPropertiesTypeAttribute) {
    this._attribute.internalValue = value;
  }
  public resetAttribute() {
    this._attribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute.internalValue;
  }

  // metric - computed: true, optional: true, required: false
  private _metric = new IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: IotsitewiseAssetModelAssetModelPropertiesTypeMetric) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // transform - computed: true, optional: true, required: false
  private _transform = new IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference(this, "transform");
  public get transform() {
    return this._transform;
  }
  public putTransform(value: IotsitewiseAssetModelAssetModelPropertiesTypeTransform) {
    this._transform.internalValue = value;
  }
  public resetTransform() {
    this._transform.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformInput() {
    return this._transform.internalValue;
  }

  // type_name - computed: true, optional: true, required: false
  private _typeName?: string;
  public get typeName() {
    return this.getStringAttribute('type_name');
  }
  public set typeName(value: string) {
    this._typeName = value;
  }
  public resetTypeName() {
    this._typeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNameInput() {
    return this._typeName;
  }
}
export interface IotsitewiseAssetModelAssetModelProperties {
  /**
  * The data type of the asset model property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#data_type IotsitewiseAssetModel#data_type}
  */
  readonly dataType?: string;
  /**
  * The data type of the structure for this property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#data_type_spec IotsitewiseAssetModel#data_type_spec}
  */
  readonly dataTypeSpec?: string;
  /**
  * The External ID of the Asset Model Property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#external_id IotsitewiseAssetModel#external_id}
  */
  readonly externalId?: string;
  /**
  * The ID of the Asset Model Property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#id IotsitewiseAssetModel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Customer provided Logical ID for property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#logical_id IotsitewiseAssetModel#logical_id}
  */
  readonly logicalId?: string;
  /**
  * The name of the asset model property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#name IotsitewiseAssetModel#name}
  */
  readonly name?: string;
  /**
  * The property type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#type IotsitewiseAssetModel#type}
  */
  readonly type?: IotsitewiseAssetModelAssetModelPropertiesType;
  /**
  * The unit of the asset model property, such as Newtons or RPM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#unit IotsitewiseAssetModel#unit}
  */
  readonly unit?: string;
}

export function iotsitewiseAssetModelAssetModelPropertiesToTerraform(struct?: IotsitewiseAssetModelAssetModelProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_type: cdktn.stringToTerraform(struct!.dataType),
    data_type_spec: cdktn.stringToTerraform(struct!.dataTypeSpec),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    id: cdktn.stringToTerraform(struct!.id),
    logical_id: cdktn.stringToTerraform(struct!.logicalId),
    name: cdktn.stringToTerraform(struct!.name),
    type: iotsitewiseAssetModelAssetModelPropertiesTypeToTerraform(struct!.type),
    unit: cdktn.stringToTerraform(struct!.unit),
  }
}


export function iotsitewiseAssetModelAssetModelPropertiesToHclTerraform(struct?: IotsitewiseAssetModelAssetModelProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_type: {
      value: cdktn.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_type_spec: {
      value: cdktn.stringToHclTerraform(struct!.dataTypeSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logical_id: {
      value: cdktn.stringToHclTerraform(struct!.logicalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: iotsitewiseAssetModelAssetModelPropertiesTypeToHclTerraform(struct!.type),
      isBlock: true,
      type: "struct",
      storageClassType: "IotsitewiseAssetModelAssetModelPropertiesType",
    },
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseAssetModelAssetModelPropertiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotsitewiseAssetModelAssetModelProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._dataTypeSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataTypeSpec = this._dataTypeSpec;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._logicalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalId = this._logicalId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type?.internalValue;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseAssetModelAssetModelProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataType = undefined;
      this._dataTypeSpec = undefined;
      this._externalId = undefined;
      this._id = undefined;
      this._logicalId = undefined;
      this._name = undefined;
      this._type.internalValue = undefined;
      this._unit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataType = value.dataType;
      this._dataTypeSpec = value.dataTypeSpec;
      this._externalId = value.externalId;
      this._id = value.id;
      this._logicalId = value.logicalId;
      this._name = value.name;
      this._type.internalValue = value.type;
      this._unit = value.unit;
    }
  }

  // data_type - computed: true, optional: true, required: false
  private _dataType?: string;
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // data_type_spec - computed: true, optional: true, required: false
  private _dataTypeSpec?: string;
  public get dataTypeSpec() {
    return this.getStringAttribute('data_type_spec');
  }
  public set dataTypeSpec(value: string) {
    this._dataTypeSpec = value;
  }
  public resetDataTypeSpec() {
    this._dataTypeSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeSpecInput() {
    return this._dataTypeSpec;
  }

  // external_id - computed: true, optional: true, required: false
  private _externalId?: string;
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // logical_id - computed: true, optional: true, required: false
  private _logicalId?: string;
  public get logicalId() {
    return this.getStringAttribute('logical_id');
  }
  public set logicalId(value: string) {
    this._logicalId = value;
  }
  public resetLogicalId() {
    this._logicalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalIdInput() {
    return this._logicalId;
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

  // type - computed: true, optional: true, required: false
  private _type = new IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
  public putType(value: IotsitewiseAssetModelAssetModelPropertiesType) {
    this._type.internalValue = value;
  }
  public resetType() {
    this._type.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type.internalValue;
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string;
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class IotsitewiseAssetModelAssetModelPropertiesList extends cdktn.ComplexList {
  public internalValue? : IotsitewiseAssetModelAssetModelProperties[] | cdktn.IResolvable

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
  public get(index: number): IotsitewiseAssetModelAssetModelPropertiesOutputReference {
    return new IotsitewiseAssetModelAssetModelPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings {
  /**
  * The external ID of the enforced asset model property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#asset_model_property_external_id IotsitewiseAssetModel#asset_model_property_external_id}
  */
  readonly assetModelPropertyExternalId?: string;
  /**
  * The logical ID of the enforced asset model property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#asset_model_property_logical_id IotsitewiseAssetModel#asset_model_property_logical_id}
  */
  readonly assetModelPropertyLogicalId?: string;
  /**
  * The external ID of the enforced interface property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#interface_asset_model_property_external_id IotsitewiseAssetModel#interface_asset_model_property_external_id}
  */
  readonly interfaceAssetModelPropertyExternalId?: string;
}

export function iotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsToTerraform(struct?: IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    asset_model_property_external_id: cdktn.stringToTerraform(struct!.assetModelPropertyExternalId),
    asset_model_property_logical_id: cdktn.stringToTerraform(struct!.assetModelPropertyLogicalId),
    interface_asset_model_property_external_id: cdktn.stringToTerraform(struct!.interfaceAssetModelPropertyExternalId),
  }
}


export function iotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsToHclTerraform(struct?: IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    asset_model_property_external_id: {
      value: cdktn.stringToHclTerraform(struct!.assetModelPropertyExternalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    asset_model_property_logical_id: {
      value: cdktn.stringToHclTerraform(struct!.assetModelPropertyLogicalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_asset_model_property_external_id: {
      value: cdktn.stringToHclTerraform(struct!.interfaceAssetModelPropertyExternalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assetModelPropertyExternalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.assetModelPropertyExternalId = this._assetModelPropertyExternalId;
    }
    if (this._assetModelPropertyLogicalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.assetModelPropertyLogicalId = this._assetModelPropertyLogicalId;
    }
    if (this._interfaceAssetModelPropertyExternalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceAssetModelPropertyExternalId = this._interfaceAssetModelPropertyExternalId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assetModelPropertyExternalId = undefined;
      this._assetModelPropertyLogicalId = undefined;
      this._interfaceAssetModelPropertyExternalId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assetModelPropertyExternalId = value.assetModelPropertyExternalId;
      this._assetModelPropertyLogicalId = value.assetModelPropertyLogicalId;
      this._interfaceAssetModelPropertyExternalId = value.interfaceAssetModelPropertyExternalId;
    }
  }

  // asset_model_property_external_id - computed: true, optional: true, required: false
  private _assetModelPropertyExternalId?: string;
  public get assetModelPropertyExternalId() {
    return this.getStringAttribute('asset_model_property_external_id');
  }
  public set assetModelPropertyExternalId(value: string) {
    this._assetModelPropertyExternalId = value;
  }
  public resetAssetModelPropertyExternalId() {
    this._assetModelPropertyExternalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetModelPropertyExternalIdInput() {
    return this._assetModelPropertyExternalId;
  }

  // asset_model_property_logical_id - computed: true, optional: true, required: false
  private _assetModelPropertyLogicalId?: string;
  public get assetModelPropertyLogicalId() {
    return this.getStringAttribute('asset_model_property_logical_id');
  }
  public set assetModelPropertyLogicalId(value: string) {
    this._assetModelPropertyLogicalId = value;
  }
  public resetAssetModelPropertyLogicalId() {
    this._assetModelPropertyLogicalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetModelPropertyLogicalIdInput() {
    return this._assetModelPropertyLogicalId;
  }

  // interface_asset_model_property_external_id - computed: true, optional: true, required: false
  private _interfaceAssetModelPropertyExternalId?: string;
  public get interfaceAssetModelPropertyExternalId() {
    return this.getStringAttribute('interface_asset_model_property_external_id');
  }
  public set interfaceAssetModelPropertyExternalId(value: string) {
    this._interfaceAssetModelPropertyExternalId = value;
  }
  public resetInterfaceAssetModelPropertyExternalId() {
    this._interfaceAssetModelPropertyExternalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceAssetModelPropertyExternalIdInput() {
    return this._interfaceAssetModelPropertyExternalId;
  }
}

export class IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList extends cdktn.ComplexList {
  public internalValue? : IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings[] | cdktn.IResolvable

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
  public get(index: number): IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference {
    return new IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships {
  /**
  * The ID of the interface that is enforced to the asset model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#interface_asset_model_id IotsitewiseAssetModel#interface_asset_model_id}
  */
  readonly interfaceAssetModelId?: string;
  /**
  * Contains information about enforced interface property and asset model property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#property_mappings IotsitewiseAssetModel#property_mappings}
  */
  readonly propertyMappings?: IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings[] | cdktn.IResolvable;
}

export function iotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsToTerraform(struct?: IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    interface_asset_model_id: cdktn.stringToTerraform(struct!.interfaceAssetModelId),
    property_mappings: cdktn.listMapper(iotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsToTerraform, false)(struct!.propertyMappings),
  }
}


export function iotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsToHclTerraform(struct?: IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    interface_asset_model_id: {
      value: cdktn.stringToHclTerraform(struct!.interfaceAssetModelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_mappings: {
      value: cdktn.listMapperHcl(iotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsToHclTerraform, false)(struct!.propertyMappings),
      isBlock: true,
      type: "list",
      storageClassType: "IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceAssetModelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceAssetModelId = this._interfaceAssetModelId;
    }
    if (this._propertyMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyMappings = this._propertyMappings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceAssetModelId = undefined;
      this._propertyMappings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaceAssetModelId = value.interfaceAssetModelId;
      this._propertyMappings.internalValue = value.propertyMappings;
    }
  }

  // interface_asset_model_id - computed: true, optional: true, required: false
  private _interfaceAssetModelId?: string;
  public get interfaceAssetModelId() {
    return this.getStringAttribute('interface_asset_model_id');
  }
  public set interfaceAssetModelId(value: string) {
    this._interfaceAssetModelId = value;
  }
  public resetInterfaceAssetModelId() {
    this._interfaceAssetModelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceAssetModelIdInput() {
    return this._interfaceAssetModelId;
  }

  // property_mappings - computed: true, optional: true, required: false
  private _propertyMappings = new IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList(this, "property_mappings", false);
  public get propertyMappings() {
    return this._propertyMappings;
  }
  public putPropertyMappings(value: IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings[] | cdktn.IResolvable) {
    this._propertyMappings.internalValue = value;
  }
  public resetPropertyMappings() {
    this._propertyMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyMappingsInput() {
    return this._propertyMappings.internalValue;
  }
}

export class IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList extends cdktn.ComplexList {
  public internalValue? : IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships[] | cdktn.IResolvable

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
  public get(index: number): IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference {
    return new IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotsitewiseAssetModelTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#key IotsitewiseAssetModel#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#value IotsitewiseAssetModel#value}
  */
  readonly value?: string;
}

export function iotsitewiseAssetModelTagsToTerraform(struct?: IotsitewiseAssetModelTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function iotsitewiseAssetModelTagsToHclTerraform(struct?: IotsitewiseAssetModelTags | cdktn.IResolvable): any {
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

export class IotsitewiseAssetModelTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotsitewiseAssetModelTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IotsitewiseAssetModelTags | cdktn.IResolvable | undefined) {
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

export class IotsitewiseAssetModelTagsList extends cdktn.ComplexList {
  public internalValue? : IotsitewiseAssetModelTags[] | cdktn.IResolvable

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
  public get(index: number): IotsitewiseAssetModelTagsOutputReference {
    return new IotsitewiseAssetModelTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model awscc_iotsitewise_asset_model}
*/
export class IotsitewiseAssetModel extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iotsitewise_asset_model";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IotsitewiseAssetModel resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IotsitewiseAssetModel to import
  * @param importFromId The id of the existing IotsitewiseAssetModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IotsitewiseAssetModel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotsitewise_asset_model", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_asset_model awscc_iotsitewise_asset_model} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotsitewiseAssetModelConfig
  */
  public constructor(scope: Construct, id: string, config: IotsitewiseAssetModelConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotsitewise_asset_model',
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
    this._assetModelCompositeModels.internalValue = config.assetModelCompositeModels;
    this._assetModelDescription = config.assetModelDescription;
    this._assetModelExternalId = config.assetModelExternalId;
    this._assetModelHierarchies.internalValue = config.assetModelHierarchies;
    this._assetModelName = config.assetModelName;
    this._assetModelProperties.internalValue = config.assetModelProperties;
    this._assetModelType = config.assetModelType;
    this._enforcedAssetModelInterfaceRelationships.internalValue = config.enforcedAssetModelInterfaceRelationships;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asset_model_arn - computed: true, optional: false, required: false
  public get assetModelArn() {
    return this.getStringAttribute('asset_model_arn');
  }

  // asset_model_composite_models - computed: true, optional: true, required: false
  private _assetModelCompositeModels = new IotsitewiseAssetModelAssetModelCompositeModelsList(this, "asset_model_composite_models", false);
  public get assetModelCompositeModels() {
    return this._assetModelCompositeModels;
  }
  public putAssetModelCompositeModels(value: IotsitewiseAssetModelAssetModelCompositeModels[] | cdktn.IResolvable) {
    this._assetModelCompositeModels.internalValue = value;
  }
  public resetAssetModelCompositeModels() {
    this._assetModelCompositeModels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetModelCompositeModelsInput() {
    return this._assetModelCompositeModels.internalValue;
  }

  // asset_model_description - computed: true, optional: true, required: false
  private _assetModelDescription?: string;
  public get assetModelDescription() {
    return this.getStringAttribute('asset_model_description');
  }
  public set assetModelDescription(value: string) {
    this._assetModelDescription = value;
  }
  public resetAssetModelDescription() {
    this._assetModelDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetModelDescriptionInput() {
    return this._assetModelDescription;
  }

  // asset_model_external_id - computed: true, optional: true, required: false
  private _assetModelExternalId?: string;
  public get assetModelExternalId() {
    return this.getStringAttribute('asset_model_external_id');
  }
  public set assetModelExternalId(value: string) {
    this._assetModelExternalId = value;
  }
  public resetAssetModelExternalId() {
    this._assetModelExternalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetModelExternalIdInput() {
    return this._assetModelExternalId;
  }

  // asset_model_hierarchies - computed: true, optional: true, required: false
  private _assetModelHierarchies = new IotsitewiseAssetModelAssetModelHierarchiesList(this, "asset_model_hierarchies", false);
  public get assetModelHierarchies() {
    return this._assetModelHierarchies;
  }
  public putAssetModelHierarchies(value: IotsitewiseAssetModelAssetModelHierarchies[] | cdktn.IResolvable) {
    this._assetModelHierarchies.internalValue = value;
  }
  public resetAssetModelHierarchies() {
    this._assetModelHierarchies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetModelHierarchiesInput() {
    return this._assetModelHierarchies.internalValue;
  }

  // asset_model_id - computed: true, optional: false, required: false
  public get assetModelId() {
    return this.getStringAttribute('asset_model_id');
  }

  // asset_model_name - computed: false, optional: false, required: true
  private _assetModelName?: string;
  public get assetModelName() {
    return this.getStringAttribute('asset_model_name');
  }
  public set assetModelName(value: string) {
    this._assetModelName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assetModelNameInput() {
    return this._assetModelName;
  }

  // asset_model_properties - computed: true, optional: true, required: false
  private _assetModelProperties = new IotsitewiseAssetModelAssetModelPropertiesList(this, "asset_model_properties", false);
  public get assetModelProperties() {
    return this._assetModelProperties;
  }
  public putAssetModelProperties(value: IotsitewiseAssetModelAssetModelProperties[] | cdktn.IResolvable) {
    this._assetModelProperties.internalValue = value;
  }
  public resetAssetModelProperties() {
    this._assetModelProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetModelPropertiesInput() {
    return this._assetModelProperties.internalValue;
  }

  // asset_model_type - computed: true, optional: true, required: false
  private _assetModelType?: string;
  public get assetModelType() {
    return this.getStringAttribute('asset_model_type');
  }
  public set assetModelType(value: string) {
    this._assetModelType = value;
  }
  public resetAssetModelType() {
    this._assetModelType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetModelTypeInput() {
    return this._assetModelType;
  }

  // enforced_asset_model_interface_relationships - computed: true, optional: true, required: false
  private _enforcedAssetModelInterfaceRelationships = new IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList(this, "enforced_asset_model_interface_relationships", false);
  public get enforcedAssetModelInterfaceRelationships() {
    return this._enforcedAssetModelInterfaceRelationships;
  }
  public putEnforcedAssetModelInterfaceRelationships(value: IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships[] | cdktn.IResolvable) {
    this._enforcedAssetModelInterfaceRelationships.internalValue = value;
  }
  public resetEnforcedAssetModelInterfaceRelationships() {
    this._enforcedAssetModelInterfaceRelationships.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcedAssetModelInterfaceRelationshipsInput() {
    return this._enforcedAssetModelInterfaceRelationships.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new IotsitewiseAssetModelTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: IotsitewiseAssetModelTags[] | cdktn.IResolvable) {
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
      asset_model_composite_models: cdktn.listMapper(iotsitewiseAssetModelAssetModelCompositeModelsToTerraform, false)(this._assetModelCompositeModels.internalValue),
      asset_model_description: cdktn.stringToTerraform(this._assetModelDescription),
      asset_model_external_id: cdktn.stringToTerraform(this._assetModelExternalId),
      asset_model_hierarchies: cdktn.listMapper(iotsitewiseAssetModelAssetModelHierarchiesToTerraform, false)(this._assetModelHierarchies.internalValue),
      asset_model_name: cdktn.stringToTerraform(this._assetModelName),
      asset_model_properties: cdktn.listMapper(iotsitewiseAssetModelAssetModelPropertiesToTerraform, false)(this._assetModelProperties.internalValue),
      asset_model_type: cdktn.stringToTerraform(this._assetModelType),
      enforced_asset_model_interface_relationships: cdktn.listMapper(iotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsToTerraform, false)(this._enforcedAssetModelInterfaceRelationships.internalValue),
      tags: cdktn.listMapper(iotsitewiseAssetModelTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asset_model_composite_models: {
        value: cdktn.listMapperHcl(iotsitewiseAssetModelAssetModelCompositeModelsToHclTerraform, false)(this._assetModelCompositeModels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IotsitewiseAssetModelAssetModelCompositeModelsList",
      },
      asset_model_description: {
        value: cdktn.stringToHclTerraform(this._assetModelDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asset_model_external_id: {
        value: cdktn.stringToHclTerraform(this._assetModelExternalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asset_model_hierarchies: {
        value: cdktn.listMapperHcl(iotsitewiseAssetModelAssetModelHierarchiesToHclTerraform, false)(this._assetModelHierarchies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IotsitewiseAssetModelAssetModelHierarchiesList",
      },
      asset_model_name: {
        value: cdktn.stringToHclTerraform(this._assetModelName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asset_model_properties: {
        value: cdktn.listMapperHcl(iotsitewiseAssetModelAssetModelPropertiesToHclTerraform, false)(this._assetModelProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IotsitewiseAssetModelAssetModelPropertiesList",
      },
      asset_model_type: {
        value: cdktn.stringToHclTerraform(this._assetModelType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforced_asset_model_interface_relationships: {
        value: cdktn.listMapperHcl(iotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsToHclTerraform, false)(this._enforcedAssetModelInterfaceRelationships.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList",
      },
      tags: {
        value: cdktn.listMapperHcl(iotsitewiseAssetModelTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IotsitewiseAssetModelTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
