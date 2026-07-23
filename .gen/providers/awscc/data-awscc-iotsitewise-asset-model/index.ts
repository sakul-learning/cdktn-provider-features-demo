// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/iotsitewise_asset_model
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccIotsitewiseAssetModelConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/iotsitewise_asset_model#id DataAwsccIotsitewiseAssetModel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute {
}

export function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeToHclTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
}
export interface DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPath {
}

export function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPath): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathToHclTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPath): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference {
    return new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue {
}

export function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueToHclTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hierarchy_external_id - computed: true, optional: false, required: false
  public get hierarchyExternalId() {
    return this.getStringAttribute('hierarchy_external_id');
  }

  // hierarchy_id - computed: true, optional: false, required: false
  public get hierarchyId() {
    return this.getStringAttribute('hierarchy_id');
  }

  // hierarchy_logical_id - computed: true, optional: false, required: false
  public get hierarchyLogicalId() {
    return this.getStringAttribute('hierarchy_logical_id');
  }

  // property_external_id - computed: true, optional: false, required: false
  public get propertyExternalId() {
    return this.getStringAttribute('property_external_id');
  }

  // property_id - computed: true, optional: false, required: false
  public get propertyId() {
    return this.getStringAttribute('property_id');
  }

  // property_logical_id - computed: true, optional: false, required: false
  public get propertyLogicalId() {
    return this.getStringAttribute('property_logical_id');
  }

  // property_path - computed: true, optional: false, required: false
  private _propertyPath = new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList(this, "property_path", false);
  public get propertyPath() {
    return this._propertyPath;
  }
}
export interface DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables {
}

export function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesToHclTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference {
    return new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling {
}

export function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingToHclTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getStringAttribute('interval');
  }

  // offset - computed: true, optional: false, required: false
  public get offset() {
    return this.getStringAttribute('offset');
  }
}
export interface DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow {
}

export function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowToHclTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tumbling - computed: true, optional: false, required: false
  private _tumbling = new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference(this, "tumbling");
  public get tumbling() {
    return this._tumbling;
  }
}
export interface DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric {
}

export function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricToHclTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // variables - computed: true, optional: false, required: false
  private _variables = new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }

  // window - computed: true, optional: false, required: false
  private _window = new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference(this, "window");
  public get window() {
    return this._window;
  }
}
export interface DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPath {
}

export function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPath): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathToHclTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPath): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference {
    return new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue {
}

export function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueToHclTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hierarchy_external_id - computed: true, optional: false, required: false
  public get hierarchyExternalId() {
    return this.getStringAttribute('hierarchy_external_id');
  }

  // hierarchy_id - computed: true, optional: false, required: false
  public get hierarchyId() {
    return this.getStringAttribute('hierarchy_id');
  }

  // hierarchy_logical_id - computed: true, optional: false, required: false
  public get hierarchyLogicalId() {
    return this.getStringAttribute('hierarchy_logical_id');
  }

  // property_external_id - computed: true, optional: false, required: false
  public get propertyExternalId() {
    return this.getStringAttribute('property_external_id');
  }

  // property_id - computed: true, optional: false, required: false
  public get propertyId() {
    return this.getStringAttribute('property_id');
  }

  // property_logical_id - computed: true, optional: false, required: false
  public get propertyLogicalId() {
    return this.getStringAttribute('property_logical_id');
  }

  // property_path - computed: true, optional: false, required: false
  private _propertyPath = new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList(this, "property_path", false);
  public get propertyPath() {
    return this._propertyPath;
  }
}
export interface DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables {
}

export function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesToHclTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference {
    return new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform {
}

export function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformToHclTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // variables - computed: true, optional: false, required: false
  private _variables = new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
}
export interface DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType {
}

export function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeToHclTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute - computed: true, optional: false, required: false
  private _attribute = new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference(this, "attribute");
  public get attribute() {
    return this._attribute;
  }

  // metric - computed: true, optional: false, required: false
  private _metric = new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }

  // transform - computed: true, optional: false, required: false
  private _transform = new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference(this, "transform");
  public get transform() {
    return this._transform;
  }

  // type_name - computed: true, optional: false, required: false
  public get typeName() {
    return this.getStringAttribute('type_name');
  }
}
export interface DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties {
}

export function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesToHclTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // data_type_spec - computed: true, optional: false, required: false
  public get dataTypeSpec() {
    return this.getStringAttribute('data_type_spec');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logical_id - computed: true, optional: false, required: false
  public get logicalId() {
    return this.getStringAttribute('logical_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  private _type = new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }
}

export class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference {
    return new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotsitewiseAssetModelAssetModelCompositeModels {
}

export function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModels): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsToHclTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModels): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotsitewiseAssetModelAssetModelCompositeModels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotsitewiseAssetModelAssetModelCompositeModels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // composed_asset_model_id - computed: true, optional: false, required: false
  public get composedAssetModelId() {
    return this.getStringAttribute('composed_asset_model_id');
  }

  // composite_model_properties - computed: true, optional: false, required: false
  private _compositeModelProperties = new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList(this, "composite_model_properties", false);
  public get compositeModelProperties() {
    return this._compositeModelProperties;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_asset_model_composite_model_external_id - computed: true, optional: false, required: false
  public get parentAssetModelCompositeModelExternalId() {
    return this.getStringAttribute('parent_asset_model_composite_model_external_id');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getListAttribute('path');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference {
    return new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotsitewiseAssetModelAssetModelHierarchies {
}

export function dataAwsccIotsitewiseAssetModelAssetModelHierarchiesToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelHierarchies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotsitewiseAssetModelAssetModelHierarchiesToHclTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelHierarchies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotsitewiseAssetModelAssetModelHierarchies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotsitewiseAssetModelAssetModelHierarchies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // child_asset_model_id - computed: true, optional: false, required: false
  public get childAssetModelId() {
    return this.getStringAttribute('child_asset_model_id');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logical_id - computed: true, optional: false, required: false
  public get logicalId() {
    return this.getStringAttribute('logical_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference {
    return new DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttribute {
}

export function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttribute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeToHclTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttribute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttribute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttribute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
}
export interface DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPath {
}

export function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPath): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathToHclTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPath): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference {
    return new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue {
}

export function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueToHclTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hierarchy_external_id - computed: true, optional: false, required: false
  public get hierarchyExternalId() {
    return this.getStringAttribute('hierarchy_external_id');
  }

  // hierarchy_id - computed: true, optional: false, required: false
  public get hierarchyId() {
    return this.getStringAttribute('hierarchy_id');
  }

  // hierarchy_logical_id - computed: true, optional: false, required: false
  public get hierarchyLogicalId() {
    return this.getStringAttribute('hierarchy_logical_id');
  }

  // property_external_id - computed: true, optional: false, required: false
  public get propertyExternalId() {
    return this.getStringAttribute('property_external_id');
  }

  // property_id - computed: true, optional: false, required: false
  public get propertyId() {
    return this.getStringAttribute('property_id');
  }

  // property_logical_id - computed: true, optional: false, required: false
  public get propertyLogicalId() {
    return this.getStringAttribute('property_logical_id');
  }

  // property_path - computed: true, optional: false, required: false
  private _propertyPath = new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList(this, "property_path", false);
  public get propertyPath() {
    return this._propertyPath;
  }
}
export interface DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables {
}

export function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesToHclTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference {
    return new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling {
}

export function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingToHclTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getStringAttribute('interval');
  }

  // offset - computed: true, optional: false, required: false
  public get offset() {
    return this.getStringAttribute('offset');
  }
}
export interface DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow {
}

export function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowToHclTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tumbling - computed: true, optional: false, required: false
  private _tumbling = new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference(this, "tumbling");
  public get tumbling() {
    return this._tumbling;
  }
}
export interface DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetric {
}

export function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricToHclTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // variables - computed: true, optional: false, required: false
  private _variables = new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }

  // window - computed: true, optional: false, required: false
  private _window = new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference(this, "window");
  public get window() {
    return this._window;
  }
}
export interface DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPath {
}

export function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPath): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathToHclTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPath): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference {
    return new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue {
}

export function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueToHclTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hierarchy_external_id - computed: true, optional: false, required: false
  public get hierarchyExternalId() {
    return this.getStringAttribute('hierarchy_external_id');
  }

  // hierarchy_id - computed: true, optional: false, required: false
  public get hierarchyId() {
    return this.getStringAttribute('hierarchy_id');
  }

  // hierarchy_logical_id - computed: true, optional: false, required: false
  public get hierarchyLogicalId() {
    return this.getStringAttribute('hierarchy_logical_id');
  }

  // property_external_id - computed: true, optional: false, required: false
  public get propertyExternalId() {
    return this.getStringAttribute('property_external_id');
  }

  // property_id - computed: true, optional: false, required: false
  public get propertyId() {
    return this.getStringAttribute('property_id');
  }

  // property_logical_id - computed: true, optional: false, required: false
  public get propertyLogicalId() {
    return this.getStringAttribute('property_logical_id');
  }

  // property_path - computed: true, optional: false, required: false
  private _propertyPath = new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList(this, "property_path", false);
  public get propertyPath() {
    return this._propertyPath;
  }
}
export interface DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables {
}

export function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesToHclTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference {
    return new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransform {
}

export function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransform): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformToHclTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransform): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransform | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransform | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // variables - computed: true, optional: false, required: false
  private _variables = new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
}
export interface DataAwsccIotsitewiseAssetModelAssetModelPropertiesType {
}

export function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesType): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeToHclTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesType): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotsitewiseAssetModelAssetModelPropertiesType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotsitewiseAssetModelAssetModelPropertiesType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute - computed: true, optional: false, required: false
  private _attribute = new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference(this, "attribute");
  public get attribute() {
    return this._attribute;
  }

  // metric - computed: true, optional: false, required: false
  private _metric = new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }

  // transform - computed: true, optional: false, required: false
  private _transform = new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference(this, "transform");
  public get transform() {
    return this._transform;
  }

  // type_name - computed: true, optional: false, required: false
  public get typeName() {
    return this.getStringAttribute('type_name');
  }
}
export interface DataAwsccIotsitewiseAssetModelAssetModelProperties {
}

export function dataAwsccIotsitewiseAssetModelAssetModelPropertiesToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotsitewiseAssetModelAssetModelPropertiesToHclTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotsitewiseAssetModelAssetModelProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotsitewiseAssetModelAssetModelProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // data_type_spec - computed: true, optional: false, required: false
  public get dataTypeSpec() {
    return this.getStringAttribute('data_type_spec');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logical_id - computed: true, optional: false, required: false
  public get logicalId() {
    return this.getStringAttribute('logical_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  private _type = new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }
}

export class DataAwsccIotsitewiseAssetModelAssetModelPropertiesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference {
    return new DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings {
}

export function dataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsToTerraform(struct?: DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsToHclTerraform(struct?: DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // asset_model_property_external_id - computed: true, optional: false, required: false
  public get assetModelPropertyExternalId() {
    return this.getStringAttribute('asset_model_property_external_id');
  }

  // asset_model_property_logical_id - computed: true, optional: false, required: false
  public get assetModelPropertyLogicalId() {
    return this.getStringAttribute('asset_model_property_logical_id');
  }

  // interface_asset_model_property_external_id - computed: true, optional: false, required: false
  public get interfaceAssetModelPropertyExternalId() {
    return this.getStringAttribute('interface_asset_model_property_external_id');
  }
}

export class DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference {
    return new DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships {
}

export function dataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsToTerraform(struct?: DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsToHclTerraform(struct?: DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface_asset_model_id - computed: true, optional: false, required: false
  public get interfaceAssetModelId() {
    return this.getStringAttribute('interface_asset_model_id');
  }

  // property_mappings - computed: true, optional: false, required: false
  private _propertyMappings = new DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList(this, "property_mappings", false);
  public get propertyMappings() {
    return this._propertyMappings;
  }
}

export class DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference {
    return new DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotsitewiseAssetModelTags {
}

export function dataAwsccIotsitewiseAssetModelTagsToTerraform(struct?: DataAwsccIotsitewiseAssetModelTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotsitewiseAssetModelTagsToHclTerraform(struct?: DataAwsccIotsitewiseAssetModelTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotsitewiseAssetModelTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotsitewiseAssetModelTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotsitewiseAssetModelTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccIotsitewiseAssetModelTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotsitewiseAssetModelTagsOutputReference {
    return new DataAwsccIotsitewiseAssetModelTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/iotsitewise_asset_model awscc_iotsitewise_asset_model}
*/
export class DataAwsccIotsitewiseAssetModel extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iotsitewise_asset_model";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccIotsitewiseAssetModel resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccIotsitewiseAssetModel to import
  * @param importFromId The id of the existing DataAwsccIotsitewiseAssetModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/iotsitewise_asset_model#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccIotsitewiseAssetModel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotsitewise_asset_model", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/iotsitewise_asset_model awscc_iotsitewise_asset_model} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotsitewiseAssetModelConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotsitewiseAssetModelConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotsitewise_asset_model',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asset_model_arn - computed: true, optional: false, required: false
  public get assetModelArn() {
    return this.getStringAttribute('asset_model_arn');
  }

  // asset_model_composite_models - computed: true, optional: false, required: false
  private _assetModelCompositeModels = new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList(this, "asset_model_composite_models", false);
  public get assetModelCompositeModels() {
    return this._assetModelCompositeModels;
  }

  // asset_model_description - computed: true, optional: false, required: false
  public get assetModelDescription() {
    return this.getStringAttribute('asset_model_description');
  }

  // asset_model_external_id - computed: true, optional: false, required: false
  public get assetModelExternalId() {
    return this.getStringAttribute('asset_model_external_id');
  }

  // asset_model_hierarchies - computed: true, optional: false, required: false
  private _assetModelHierarchies = new DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList(this, "asset_model_hierarchies", false);
  public get assetModelHierarchies() {
    return this._assetModelHierarchies;
  }

  // asset_model_id - computed: true, optional: false, required: false
  public get assetModelId() {
    return this.getStringAttribute('asset_model_id');
  }

  // asset_model_name - computed: true, optional: false, required: false
  public get assetModelName() {
    return this.getStringAttribute('asset_model_name');
  }

  // asset_model_properties - computed: true, optional: false, required: false
  private _assetModelProperties = new DataAwsccIotsitewiseAssetModelAssetModelPropertiesList(this, "asset_model_properties", false);
  public get assetModelProperties() {
    return this._assetModelProperties;
  }

  // asset_model_type - computed: true, optional: false, required: false
  public get assetModelType() {
    return this.getStringAttribute('asset_model_type');
  }

  // enforced_asset_model_interface_relationships - computed: true, optional: false, required: false
  private _enforcedAssetModelInterfaceRelationships = new DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList(this, "enforced_asset_model_interface_relationships", false);
  public get enforcedAssetModelInterfaceRelationships() {
    return this._enforcedAssetModelInterfaceRelationships;
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

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccIotsitewiseAssetModelTagsList(this, "tags", false);
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
