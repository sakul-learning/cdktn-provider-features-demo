// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotfleetwise_signal_catalog
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IotfleetwiseSignalCatalogConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotfleetwise_signal_catalog#description IotfleetwiseSignalCatalog#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotfleetwise_signal_catalog#name IotfleetwiseSignalCatalog#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotfleetwise_signal_catalog#node_counts IotfleetwiseSignalCatalog#node_counts}
  */
  readonly nodeCounts?: IotfleetwiseSignalCatalogNodeCounts;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotfleetwise_signal_catalog#nodes IotfleetwiseSignalCatalog#nodes}
  */
  readonly nodes?: IotfleetwiseSignalCatalogNodes[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotfleetwise_signal_catalog#tags IotfleetwiseSignalCatalog#tags}
  */
  readonly tags?: IotfleetwiseSignalCatalogTags[] | cdktn.IResolvable;
}
export interface IotfleetwiseSignalCatalogNodeCounts {
}

export function iotfleetwiseSignalCatalogNodeCountsToTerraform(struct?: IotfleetwiseSignalCatalogNodeCounts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function iotfleetwiseSignalCatalogNodeCountsToHclTerraform(struct?: IotfleetwiseSignalCatalogNodeCounts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IotfleetwiseSignalCatalogNodeCountsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotfleetwiseSignalCatalogNodeCounts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotfleetwiseSignalCatalogNodeCounts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // total_actuators - computed: true, optional: false, required: false
  public get totalActuators() {
    return this.getNumberAttribute('total_actuators');
  }

  // total_attributes - computed: true, optional: false, required: false
  public get totalAttributes() {
    return this.getNumberAttribute('total_attributes');
  }

  // total_branches - computed: true, optional: false, required: false
  public get totalBranches() {
    return this.getNumberAttribute('total_branches');
  }

  // total_nodes - computed: true, optional: false, required: false
  public get totalNodes() {
    return this.getNumberAttribute('total_nodes');
  }

  // total_sensors - computed: true, optional: false, required: false
  public get totalSensors() {
    return this.getNumberAttribute('total_sensors');
  }
}
export interface IotfleetwiseSignalCatalogNodesActuator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotfleetwise_signal_catalog#allowed_values IotfleetwiseSignalCatalog#allowed_values}
  */
  readonly allowedValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotfleetwise_signal_catalog#assigned_value IotfleetwiseSignalCatalog#assigned_value}
  */
  readonly assignedValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotfleetwise_signal_catalog#data_type IotfleetwiseSignalCatalog#data_type}
  */
  readonly dataType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotfleetwise_signal_catalog#description IotfleetwiseSignalCatalog#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotfleetwise_signal_catalog#fully_qualified_name IotfleetwiseSignalCatalog#fully_qualified_name}
  */
  readonly fullyQualifiedName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotfleetwise_signal_catalog#max IotfleetwiseSignalCatalog#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotfleetwise_signal_catalog#min IotfleetwiseSignalCatalog#min}
  */
  readonly min?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotfleetwise_signal_catalog#unit IotfleetwiseSignalCatalog#unit}
  */
  readonly unit?: string;
}

export function iotfleetwiseSignalCatalogNodesActuatorToTerraform(struct?: IotfleetwiseSignalCatalogNodesActuator | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
    assigned_value: cdktn.stringToTerraform(struct!.assignedValue),
    data_type: cdktn.stringToTerraform(struct!.dataType),
    description: cdktn.stringToTerraform(struct!.description),
    fully_qualified_name: cdktn.stringToTerraform(struct!.fullyQualifiedName),
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
    unit: cdktn.stringToTerraform(struct!.unit),
  }
}


export function iotfleetwiseSignalCatalogNodesActuatorToHclTerraform(struct?: IotfleetwiseSignalCatalogNodesActuator | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    assigned_value: {
      value: cdktn.stringToHclTerraform(struct!.assignedValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_type: {
      value: cdktn.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fully_qualified_name: {
      value: cdktn.stringToHclTerraform(struct!.fullyQualifiedName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max: {
      value: cdktn.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktn.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class IotfleetwiseSignalCatalogNodesActuatorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotfleetwiseSignalCatalogNodesActuator | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    if (this._assignedValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignedValue = this._assignedValue;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._fullyQualifiedName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullyQualifiedName = this._fullyQualifiedName;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotfleetwiseSignalCatalogNodesActuator | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValues = undefined;
      this._assignedValue = undefined;
      this._dataType = undefined;
      this._description = undefined;
      this._fullyQualifiedName = undefined;
      this._max = undefined;
      this._min = undefined;
      this._unit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValues = value.allowedValues;
      this._assignedValue = value.assignedValue;
      this._dataType = value.dataType;
      this._description = value.description;
      this._fullyQualifiedName = value.fullyQualifiedName;
      this._max = value.max;
      this._min = value.min;
      this._unit = value.unit;
    }
  }

  // allowed_values - computed: true, optional: true, required: false
  private _allowedValues?: string[]; 
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }
  public set allowedValues(value: string[]) {
    this._allowedValues = value;
  }
  public resetAllowedValues() {
    this._allowedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedValuesInput() {
    return this._allowedValues;
  }

  // assigned_value - computed: true, optional: true, required: false
  private _assignedValue?: string; 
  public get assignedValue() {
    return this.getStringAttribute('assigned_value');
  }
  public set assignedValue(value: string) {
    this._assignedValue = value;
  }
  public resetAssignedValue() {
    this._assignedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedValueInput() {
    return this._assignedValue;
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

  // fully_qualified_name - computed: true, optional: true, required: false
  private _fullyQualifiedName?: string; 
  public get fullyQualifiedName() {
    return this.getStringAttribute('fully_qualified_name');
  }
  public set fullyQualifiedName(value: string) {
    this._fullyQualifiedName = value;
  }
  public resetFullyQualifiedName() {
    this._fullyQualifiedName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullyQualifiedNameInput() {
    return this._fullyQualifiedName;
  }

  // max - computed: true, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: true, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
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
export interface IotfleetwiseSignalCatalogNodesAttribute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotfleetwise_signal_catalog#allowed_values IotfleetwiseSignalCatalog#allowed_values}
  */
  readonly allowedValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotfleetwise_signal_catalog#assigned_value IotfleetwiseSignalCatalog#assigned_value}
  */
  readonly assignedValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotfleetwise_signal_catalog#data_type IotfleetwiseSignalCatalog#data_type}
  */
  readonly dataType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotfleetwise_signal_catalog#default_value IotfleetwiseSignalCatalog#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotfleetwise_signal_catalog#description IotfleetwiseSignalCatalog#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotfleetwise_signal_catalog#fully_qualified_name IotfleetwiseSignalCatalog#fully_qualified_name}
  */
  readonly fullyQualifiedName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotfleetwise_signal_catalog#max IotfleetwiseSignalCatalog#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotfleetwise_signal_catalog#min IotfleetwiseSignalCatalog#min}
  */
  readonly min?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotfleetwise_signal_catalog#unit IotfleetwiseSignalCatalog#unit}
  */
  readonly unit?: string;
}

export function iotfleetwiseSignalCatalogNodesAttributeToTerraform(struct?: IotfleetwiseSignalCatalogNodesAttribute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
    assigned_value: cdktn.stringToTerraform(struct!.assignedValue),
    data_type: cdktn.stringToTerraform(struct!.dataType),
    default_value: cdktn.stringToTerraform(struct!.defaultValue),
    description: cdktn.stringToTerraform(struct!.description),
    fully_qualified_name: cdktn.stringToTerraform(struct!.fullyQualifiedName),
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
    unit: cdktn.stringToTerraform(struct!.unit),
  }
}


export function iotfleetwiseSignalCatalogNodesAttributeToHclTerraform(struct?: IotfleetwiseSignalCatalogNodesAttribute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    assigned_value: {
      value: cdktn.stringToHclTerraform(struct!.assignedValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_type: {
      value: cdktn.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_value: {
      value: cdktn.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fully_qualified_name: {
      value: cdktn.stringToHclTerraform(struct!.fullyQualifiedName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max: {
      value: cdktn.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktn.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class IotfleetwiseSignalCatalogNodesAttributeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotfleetwiseSignalCatalogNodesAttribute | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    if (this._assignedValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignedValue = this._assignedValue;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._fullyQualifiedName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullyQualifiedName = this._fullyQualifiedName;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotfleetwiseSignalCatalogNodesAttribute | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValues = undefined;
      this._assignedValue = undefined;
      this._dataType = undefined;
      this._defaultValue = undefined;
      this._description = undefined;
      this._fullyQualifiedName = undefined;
      this._max = undefined;
      this._min = undefined;
      this._unit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValues = value.allowedValues;
      this._assignedValue = value.assignedValue;
      this._dataType = value.dataType;
      this._defaultValue = value.defaultValue;
      this._description = value.description;
      this._fullyQualifiedName = value.fullyQualifiedName;
      this._max = value.max;
      this._min = value.min;
      this._unit = value.unit;
    }
  }

  // allowed_values - computed: true, optional: true, required: false
  private _allowedValues?: string[]; 
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }
  public set allowedValues(value: string[]) {
    this._allowedValues = value;
  }
  public resetAllowedValues() {
    this._allowedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedValuesInput() {
    return this._allowedValues;
  }

  // assigned_value - computed: true, optional: true, required: false
  private _assignedValue?: string; 
  public get assignedValue() {
    return this.getStringAttribute('assigned_value');
  }
  public set assignedValue(value: string) {
    this._assignedValue = value;
  }
  public resetAssignedValue() {
    this._assignedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedValueInput() {
    return this._assignedValue;
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

  // fully_qualified_name - computed: true, optional: true, required: false
  private _fullyQualifiedName?: string; 
  public get fullyQualifiedName() {
    return this.getStringAttribute('fully_qualified_name');
  }
  public set fullyQualifiedName(value: string) {
    this._fullyQualifiedName = value;
  }
  public resetFullyQualifiedName() {
    this._fullyQualifiedName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullyQualifiedNameInput() {
    return this._fullyQualifiedName;
  }

  // max - computed: true, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: true, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
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
export interface IotfleetwiseSignalCatalogNodesBranch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotfleetwise_signal_catalog#description IotfleetwiseSignalCatalog#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotfleetwise_signal_catalog#fully_qualified_name IotfleetwiseSignalCatalog#fully_qualified_name}
  */
  readonly fullyQualifiedName?: string;
}

export function iotfleetwiseSignalCatalogNodesBranchToTerraform(struct?: IotfleetwiseSignalCatalogNodesBranch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    fully_qualified_name: cdktn.stringToTerraform(struct!.fullyQualifiedName),
  }
}


export function iotfleetwiseSignalCatalogNodesBranchToHclTerraform(struct?: IotfleetwiseSignalCatalogNodesBranch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fully_qualified_name: {
      value: cdktn.stringToHclTerraform(struct!.fullyQualifiedName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotfleetwiseSignalCatalogNodesBranchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotfleetwiseSignalCatalogNodesBranch | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._fullyQualifiedName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullyQualifiedName = this._fullyQualifiedName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotfleetwiseSignalCatalogNodesBranch | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._fullyQualifiedName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._fullyQualifiedName = value.fullyQualifiedName;
    }
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

  // fully_qualified_name - computed: true, optional: true, required: false
  private _fullyQualifiedName?: string; 
  public get fullyQualifiedName() {
    return this.getStringAttribute('fully_qualified_name');
  }
  public set fullyQualifiedName(value: string) {
    this._fullyQualifiedName = value;
  }
  public resetFullyQualifiedName() {
    this._fullyQualifiedName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullyQualifiedNameInput() {
    return this._fullyQualifiedName;
  }
}
export interface IotfleetwiseSignalCatalogNodesSensor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotfleetwise_signal_catalog#allowed_values IotfleetwiseSignalCatalog#allowed_values}
  */
  readonly allowedValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotfleetwise_signal_catalog#data_type IotfleetwiseSignalCatalog#data_type}
  */
  readonly dataType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotfleetwise_signal_catalog#description IotfleetwiseSignalCatalog#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotfleetwise_signal_catalog#fully_qualified_name IotfleetwiseSignalCatalog#fully_qualified_name}
  */
  readonly fullyQualifiedName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotfleetwise_signal_catalog#max IotfleetwiseSignalCatalog#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotfleetwise_signal_catalog#min IotfleetwiseSignalCatalog#min}
  */
  readonly min?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotfleetwise_signal_catalog#unit IotfleetwiseSignalCatalog#unit}
  */
  readonly unit?: string;
}

export function iotfleetwiseSignalCatalogNodesSensorToTerraform(struct?: IotfleetwiseSignalCatalogNodesSensor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
    data_type: cdktn.stringToTerraform(struct!.dataType),
    description: cdktn.stringToTerraform(struct!.description),
    fully_qualified_name: cdktn.stringToTerraform(struct!.fullyQualifiedName),
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
    unit: cdktn.stringToTerraform(struct!.unit),
  }
}


export function iotfleetwiseSignalCatalogNodesSensorToHclTerraform(struct?: IotfleetwiseSignalCatalogNodesSensor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    data_type: {
      value: cdktn.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fully_qualified_name: {
      value: cdktn.stringToHclTerraform(struct!.fullyQualifiedName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max: {
      value: cdktn.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktn.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class IotfleetwiseSignalCatalogNodesSensorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotfleetwiseSignalCatalogNodesSensor | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._fullyQualifiedName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullyQualifiedName = this._fullyQualifiedName;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotfleetwiseSignalCatalogNodesSensor | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValues = undefined;
      this._dataType = undefined;
      this._description = undefined;
      this._fullyQualifiedName = undefined;
      this._max = undefined;
      this._min = undefined;
      this._unit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValues = value.allowedValues;
      this._dataType = value.dataType;
      this._description = value.description;
      this._fullyQualifiedName = value.fullyQualifiedName;
      this._max = value.max;
      this._min = value.min;
      this._unit = value.unit;
    }
  }

  // allowed_values - computed: true, optional: true, required: false
  private _allowedValues?: string[]; 
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }
  public set allowedValues(value: string[]) {
    this._allowedValues = value;
  }
  public resetAllowedValues() {
    this._allowedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedValuesInput() {
    return this._allowedValues;
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

  // fully_qualified_name - computed: true, optional: true, required: false
  private _fullyQualifiedName?: string; 
  public get fullyQualifiedName() {
    return this.getStringAttribute('fully_qualified_name');
  }
  public set fullyQualifiedName(value: string) {
    this._fullyQualifiedName = value;
  }
  public resetFullyQualifiedName() {
    this._fullyQualifiedName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullyQualifiedNameInput() {
    return this._fullyQualifiedName;
  }

  // max - computed: true, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: true, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
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
export interface IotfleetwiseSignalCatalogNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotfleetwise_signal_catalog#actuator IotfleetwiseSignalCatalog#actuator}
  */
  readonly actuator?: IotfleetwiseSignalCatalogNodesActuator;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotfleetwise_signal_catalog#attribute IotfleetwiseSignalCatalog#attribute}
  */
  readonly attribute?: IotfleetwiseSignalCatalogNodesAttribute;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotfleetwise_signal_catalog#branch IotfleetwiseSignalCatalog#branch}
  */
  readonly branch?: IotfleetwiseSignalCatalogNodesBranch;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotfleetwise_signal_catalog#sensor IotfleetwiseSignalCatalog#sensor}
  */
  readonly sensor?: IotfleetwiseSignalCatalogNodesSensor;
}

export function iotfleetwiseSignalCatalogNodesToTerraform(struct?: IotfleetwiseSignalCatalogNodes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    actuator: iotfleetwiseSignalCatalogNodesActuatorToTerraform(struct!.actuator),
    attribute: iotfleetwiseSignalCatalogNodesAttributeToTerraform(struct!.attribute),
    branch: iotfleetwiseSignalCatalogNodesBranchToTerraform(struct!.branch),
    sensor: iotfleetwiseSignalCatalogNodesSensorToTerraform(struct!.sensor),
  }
}


export function iotfleetwiseSignalCatalogNodesToHclTerraform(struct?: IotfleetwiseSignalCatalogNodes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    actuator: {
      value: iotfleetwiseSignalCatalogNodesActuatorToHclTerraform(struct!.actuator),
      isBlock: true,
      type: "struct",
      storageClassType: "IotfleetwiseSignalCatalogNodesActuator",
    },
    attribute: {
      value: iotfleetwiseSignalCatalogNodesAttributeToHclTerraform(struct!.attribute),
      isBlock: true,
      type: "struct",
      storageClassType: "IotfleetwiseSignalCatalogNodesAttribute",
    },
    branch: {
      value: iotfleetwiseSignalCatalogNodesBranchToHclTerraform(struct!.branch),
      isBlock: true,
      type: "struct",
      storageClassType: "IotfleetwiseSignalCatalogNodesBranch",
    },
    sensor: {
      value: iotfleetwiseSignalCatalogNodesSensorToHclTerraform(struct!.sensor),
      isBlock: true,
      type: "struct",
      storageClassType: "IotfleetwiseSignalCatalogNodesSensor",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotfleetwiseSignalCatalogNodesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotfleetwiseSignalCatalogNodes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actuator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actuator = this._actuator?.internalValue;
    }
    if (this._attribute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute?.internalValue;
    }
    if (this._branch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch?.internalValue;
    }
    if (this._sensor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensor = this._sensor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotfleetwiseSignalCatalogNodes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actuator.internalValue = undefined;
      this._attribute.internalValue = undefined;
      this._branch.internalValue = undefined;
      this._sensor.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actuator.internalValue = value.actuator;
      this._attribute.internalValue = value.attribute;
      this._branch.internalValue = value.branch;
      this._sensor.internalValue = value.sensor;
    }
  }

  // actuator - computed: true, optional: true, required: false
  private _actuator = new IotfleetwiseSignalCatalogNodesActuatorOutputReference(this, "actuator");
  public get actuator() {
    return this._actuator;
  }
  public putActuator(value: IotfleetwiseSignalCatalogNodesActuator) {
    this._actuator.internalValue = value;
  }
  public resetActuator() {
    this._actuator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actuatorInput() {
    return this._actuator.internalValue;
  }

  // attribute - computed: true, optional: true, required: false
  private _attribute = new IotfleetwiseSignalCatalogNodesAttributeOutputReference(this, "attribute");
  public get attribute() {
    return this._attribute;
  }
  public putAttribute(value: IotfleetwiseSignalCatalogNodesAttribute) {
    this._attribute.internalValue = value;
  }
  public resetAttribute() {
    this._attribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute.internalValue;
  }

  // branch - computed: true, optional: true, required: false
  private _branch = new IotfleetwiseSignalCatalogNodesBranchOutputReference(this, "branch");
  public get branch() {
    return this._branch;
  }
  public putBranch(value: IotfleetwiseSignalCatalogNodesBranch) {
    this._branch.internalValue = value;
  }
  public resetBranch() {
    this._branch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch.internalValue;
  }

  // sensor - computed: true, optional: true, required: false
  private _sensor = new IotfleetwiseSignalCatalogNodesSensorOutputReference(this, "sensor");
  public get sensor() {
    return this._sensor;
  }
  public putSensor(value: IotfleetwiseSignalCatalogNodesSensor) {
    this._sensor.internalValue = value;
  }
  public resetSensor() {
    this._sensor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensorInput() {
    return this._sensor.internalValue;
  }
}

export class IotfleetwiseSignalCatalogNodesList extends cdktn.ComplexList {
  public internalValue? : IotfleetwiseSignalCatalogNodes[] | cdktn.IResolvable

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
  public get(index: number): IotfleetwiseSignalCatalogNodesOutputReference {
    return new IotfleetwiseSignalCatalogNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotfleetwiseSignalCatalogTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotfleetwise_signal_catalog#key IotfleetwiseSignalCatalog#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotfleetwise_signal_catalog#value IotfleetwiseSignalCatalog#value}
  */
  readonly value?: string;
}

export function iotfleetwiseSignalCatalogTagsToTerraform(struct?: IotfleetwiseSignalCatalogTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function iotfleetwiseSignalCatalogTagsToHclTerraform(struct?: IotfleetwiseSignalCatalogTags | cdktn.IResolvable): any {
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

export class IotfleetwiseSignalCatalogTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotfleetwiseSignalCatalogTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IotfleetwiseSignalCatalogTags | cdktn.IResolvable | undefined) {
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

export class IotfleetwiseSignalCatalogTagsList extends cdktn.ComplexList {
  public internalValue? : IotfleetwiseSignalCatalogTags[] | cdktn.IResolvable

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
  public get(index: number): IotfleetwiseSignalCatalogTagsOutputReference {
    return new IotfleetwiseSignalCatalogTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotfleetwise_signal_catalog awscc_iotfleetwise_signal_catalog}
*/
export class IotfleetwiseSignalCatalog extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iotfleetwise_signal_catalog";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IotfleetwiseSignalCatalog resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IotfleetwiseSignalCatalog to import
  * @param importFromId The id of the existing IotfleetwiseSignalCatalog that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotfleetwise_signal_catalog#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IotfleetwiseSignalCatalog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotfleetwise_signal_catalog", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotfleetwise_signal_catalog awscc_iotfleetwise_signal_catalog} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotfleetwiseSignalCatalogConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IotfleetwiseSignalCatalogConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotfleetwise_signal_catalog',
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
    this._description = config.description;
    this._name = config.name;
    this._nodeCounts.internalValue = config.nodeCounts;
    this._nodes.internalValue = config.nodes;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modification_time - computed: true, optional: false, required: false
  public get lastModificationTime() {
    return this.getStringAttribute('last_modification_time');
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

  // node_counts - computed: true, optional: true, required: false
  private _nodeCounts = new IotfleetwiseSignalCatalogNodeCountsOutputReference(this, "node_counts");
  public get nodeCounts() {
    return this._nodeCounts;
  }
  public putNodeCounts(value: IotfleetwiseSignalCatalogNodeCounts) {
    this._nodeCounts.internalValue = value;
  }
  public resetNodeCounts() {
    this._nodeCounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountsInput() {
    return this._nodeCounts.internalValue;
  }

  // nodes - computed: true, optional: true, required: false
  private _nodes = new IotfleetwiseSignalCatalogNodesList(this, "nodes", true);
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: IotfleetwiseSignalCatalogNodes[] | cdktn.IResolvable) {
    this._nodes.internalValue = value;
  }
  public resetNodes() {
    this._nodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new IotfleetwiseSignalCatalogTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: IotfleetwiseSignalCatalogTags[] | cdktn.IResolvable) {
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
      name: cdktn.stringToTerraform(this._name),
      node_counts: iotfleetwiseSignalCatalogNodeCountsToTerraform(this._nodeCounts.internalValue),
      nodes: cdktn.listMapper(iotfleetwiseSignalCatalogNodesToTerraform, false)(this._nodes.internalValue),
      tags: cdktn.listMapper(iotfleetwiseSignalCatalogTagsToTerraform, false)(this._tags.internalValue),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_counts: {
        value: iotfleetwiseSignalCatalogNodeCountsToHclTerraform(this._nodeCounts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IotfleetwiseSignalCatalogNodeCounts",
      },
      nodes: {
        value: cdktn.listMapperHcl(iotfleetwiseSignalCatalogNodesToHclTerraform, false)(this._nodes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IotfleetwiseSignalCatalogNodesList",
      },
      tags: {
        value: cdktn.listMapperHcl(iotfleetwiseSignalCatalogTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IotfleetwiseSignalCatalogTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
