// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IotanalyticsDatasetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#actions IotanalyticsDataset#actions}
  */
  readonly actions: IotanalyticsDatasetActions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#content_delivery_rules IotanalyticsDataset#content_delivery_rules}
  */
  readonly contentDeliveryRules?: IotanalyticsDatasetContentDeliveryRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#dataset_name IotanalyticsDataset#dataset_name}
  */
  readonly datasetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#late_data_rules IotanalyticsDataset#late_data_rules}
  */
  readonly lateDataRules?: IotanalyticsDatasetLateDataRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#retention_period IotanalyticsDataset#retention_period}
  */
  readonly retentionPeriod?: IotanalyticsDatasetRetentionPeriod;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#tags IotanalyticsDataset#tags}
  */
  readonly tags?: IotanalyticsDatasetTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#triggers IotanalyticsDataset#triggers}
  */
  readonly triggers?: IotanalyticsDatasetTriggers[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#versioning_configuration IotanalyticsDataset#versioning_configuration}
  */
  readonly versioningConfiguration?: IotanalyticsDatasetVersioningConfiguration;
}
export interface IotanalyticsDatasetActionsContainerActionResourceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#compute_type IotanalyticsDataset#compute_type}
  */
  readonly computeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#volume_size_in_gb IotanalyticsDataset#volume_size_in_gb}
  */
  readonly volumeSizeInGb?: number;
}

export function iotanalyticsDatasetActionsContainerActionResourceConfigurationToTerraform(struct?: IotanalyticsDatasetActionsContainerActionResourceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    compute_type: cdktn.stringToTerraform(struct!.computeType),
    volume_size_in_gb: cdktn.numberToTerraform(struct!.volumeSizeInGb),
  }
}


export function iotanalyticsDatasetActionsContainerActionResourceConfigurationToHclTerraform(struct?: IotanalyticsDatasetActionsContainerActionResourceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    compute_type: {
      value: cdktn.stringToHclTerraform(struct!.computeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_size_in_gb: {
      value: cdktn.numberToHclTerraform(struct!.volumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotanalyticsDatasetActionsContainerActionResourceConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._computeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeType = this._computeType;
    }
    if (this._volumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSizeInGb = this._volumeSizeInGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsDatasetActionsContainerActionResourceConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._computeType = undefined;
      this._volumeSizeInGb = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._computeType = value.computeType;
      this._volumeSizeInGb = value.volumeSizeInGb;
    }
  }

  // compute_type - computed: true, optional: true, required: false
  private _computeType?: string; 
  public get computeType() {
    return this.getStringAttribute('compute_type');
  }
  public set computeType(value: string) {
    this._computeType = value;
  }
  public resetComputeType() {
    this._computeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeTypeInput() {
    return this._computeType;
  }

  // volume_size_in_gb - computed: true, optional: true, required: false
  private _volumeSizeInGb?: number; 
  public get volumeSizeInGb() {
    return this.getNumberAttribute('volume_size_in_gb');
  }
  public set volumeSizeInGb(value: number) {
    this._volumeSizeInGb = value;
  }
  public resetVolumeSizeInGb() {
    this._volumeSizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInGbInput() {
    return this._volumeSizeInGb;
  }
}
export interface IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#dataset_name IotanalyticsDataset#dataset_name}
  */
  readonly datasetName?: string;
}

export function iotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueToTerraform(struct?: IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dataset_name: cdktn.stringToTerraform(struct!.datasetName),
  }
}


export function iotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueToHclTerraform(struct?: IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dataset_name: {
      value: cdktn.stringToHclTerraform(struct!.datasetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetName = this._datasetName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasetName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasetName = value.datasetName;
    }
  }

  // dataset_name - computed: true, optional: true, required: false
  private _datasetName?: string; 
  public get datasetName() {
    return this.getStringAttribute('dataset_name');
  }
  public set datasetName(value: string) {
    this._datasetName = value;
  }
  public resetDatasetName() {
    this._datasetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetNameInput() {
    return this._datasetName;
  }
}
export interface IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#file_name IotanalyticsDataset#file_name}
  */
  readonly fileName?: string;
}

export function iotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueToTerraform(struct?: IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_name: cdktn.stringToTerraform(struct!.fileName),
  }
}


export function iotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueToHclTerraform(struct?: IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_name: {
      value: cdktn.stringToHclTerraform(struct!.fileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileName = this._fileName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileName = value.fileName;
    }
  }

  // file_name - computed: true, optional: true, required: false
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  public resetFileName() {
    this._fileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
  }
}
export interface IotanalyticsDatasetActionsContainerActionVariables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#dataset_content_version_value IotanalyticsDataset#dataset_content_version_value}
  */
  readonly datasetContentVersionValue?: IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#double_value IotanalyticsDataset#double_value}
  */
  readonly doubleValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#output_file_uri_value IotanalyticsDataset#output_file_uri_value}
  */
  readonly outputFileUriValue?: IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#string_value IotanalyticsDataset#string_value}
  */
  readonly stringValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#variable_name IotanalyticsDataset#variable_name}
  */
  readonly variableName?: string;
}

export function iotanalyticsDatasetActionsContainerActionVariablesToTerraform(struct?: IotanalyticsDatasetActionsContainerActionVariables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dataset_content_version_value: iotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueToTerraform(struct!.datasetContentVersionValue),
    double_value: cdktn.numberToTerraform(struct!.doubleValue),
    output_file_uri_value: iotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueToTerraform(struct!.outputFileUriValue),
    string_value: cdktn.stringToTerraform(struct!.stringValue),
    variable_name: cdktn.stringToTerraform(struct!.variableName),
  }
}


export function iotanalyticsDatasetActionsContainerActionVariablesToHclTerraform(struct?: IotanalyticsDatasetActionsContainerActionVariables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dataset_content_version_value: {
      value: iotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueToHclTerraform(struct!.datasetContentVersionValue),
      isBlock: true,
      type: "struct",
      storageClassType: "IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue",
    },
    double_value: {
      value: cdktn.numberToHclTerraform(struct!.doubleValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    output_file_uri_value: {
      value: iotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueToHclTerraform(struct!.outputFileUriValue),
      isBlock: true,
      type: "struct",
      storageClassType: "IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue",
    },
    string_value: {
      value: cdktn.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable_name: {
      value: cdktn.stringToHclTerraform(struct!.variableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsDatasetActionsContainerActionVariablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotanalyticsDatasetActionsContainerActionVariables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetContentVersionValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetContentVersionValue = this._datasetContentVersionValue?.internalValue;
    }
    if (this._doubleValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleValue = this._doubleValue;
    }
    if (this._outputFileUriValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFileUriValue = this._outputFileUriValue?.internalValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    if (this._variableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableName = this._variableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsDatasetActionsContainerActionVariables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasetContentVersionValue.internalValue = undefined;
      this._doubleValue = undefined;
      this._outputFileUriValue.internalValue = undefined;
      this._stringValue = undefined;
      this._variableName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasetContentVersionValue.internalValue = value.datasetContentVersionValue;
      this._doubleValue = value.doubleValue;
      this._outputFileUriValue.internalValue = value.outputFileUriValue;
      this._stringValue = value.stringValue;
      this._variableName = value.variableName;
    }
  }

  // dataset_content_version_value - computed: true, optional: true, required: false
  private _datasetContentVersionValue = new IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference(this, "dataset_content_version_value");
  public get datasetContentVersionValue() {
    return this._datasetContentVersionValue;
  }
  public putDatasetContentVersionValue(value: IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue) {
    this._datasetContentVersionValue.internalValue = value;
  }
  public resetDatasetContentVersionValue() {
    this._datasetContentVersionValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetContentVersionValueInput() {
    return this._datasetContentVersionValue.internalValue;
  }

  // double_value - computed: true, optional: true, required: false
  private _doubleValue?: number; 
  public get doubleValue() {
    return this.getNumberAttribute('double_value');
  }
  public set doubleValue(value: number) {
    this._doubleValue = value;
  }
  public resetDoubleValue() {
    this._doubleValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleValueInput() {
    return this._doubleValue;
  }

  // output_file_uri_value - computed: true, optional: true, required: false
  private _outputFileUriValue = new IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference(this, "output_file_uri_value");
  public get outputFileUriValue() {
    return this._outputFileUriValue;
  }
  public putOutputFileUriValue(value: IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue) {
    this._outputFileUriValue.internalValue = value;
  }
  public resetOutputFileUriValue() {
    this._outputFileUriValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileUriValueInput() {
    return this._outputFileUriValue.internalValue;
  }

  // string_value - computed: true, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }

  // variable_name - computed: true, optional: true, required: false
  private _variableName?: string; 
  public get variableName() {
    return this.getStringAttribute('variable_name');
  }
  public set variableName(value: string) {
    this._variableName = value;
  }
  public resetVariableName() {
    this._variableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableNameInput() {
    return this._variableName;
  }
}

export class IotanalyticsDatasetActionsContainerActionVariablesList extends cdktn.ComplexList {
  public internalValue? : IotanalyticsDatasetActionsContainerActionVariables[] | cdktn.IResolvable

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
  public get(index: number): IotanalyticsDatasetActionsContainerActionVariablesOutputReference {
    return new IotanalyticsDatasetActionsContainerActionVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotanalyticsDatasetActionsContainerAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#execution_role_arn IotanalyticsDataset#execution_role_arn}
  */
  readonly executionRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#image IotanalyticsDataset#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#resource_configuration IotanalyticsDataset#resource_configuration}
  */
  readonly resourceConfiguration?: IotanalyticsDatasetActionsContainerActionResourceConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#variables IotanalyticsDataset#variables}
  */
  readonly variables?: IotanalyticsDatasetActionsContainerActionVariables[] | cdktn.IResolvable;
}

export function iotanalyticsDatasetActionsContainerActionToTerraform(struct?: IotanalyticsDatasetActionsContainerAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    execution_role_arn: cdktn.stringToTerraform(struct!.executionRoleArn),
    image: cdktn.stringToTerraform(struct!.image),
    resource_configuration: iotanalyticsDatasetActionsContainerActionResourceConfigurationToTerraform(struct!.resourceConfiguration),
    variables: cdktn.listMapper(iotanalyticsDatasetActionsContainerActionVariablesToTerraform, false)(struct!.variables),
  }
}


export function iotanalyticsDatasetActionsContainerActionToHclTerraform(struct?: IotanalyticsDatasetActionsContainerAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    execution_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.executionRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktn.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_configuration: {
      value: iotanalyticsDatasetActionsContainerActionResourceConfigurationToHclTerraform(struct!.resourceConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "IotanalyticsDatasetActionsContainerActionResourceConfiguration",
    },
    variables: {
      value: cdktn.listMapperHcl(iotanalyticsDatasetActionsContainerActionVariablesToHclTerraform, false)(struct!.variables),
      isBlock: true,
      type: "list",
      storageClassType: "IotanalyticsDatasetActionsContainerActionVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsDatasetActionsContainerActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotanalyticsDatasetActionsContainerAction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executionRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRoleArn = this._executionRoleArn;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._resourceConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceConfiguration = this._resourceConfiguration?.internalValue;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsDatasetActionsContainerAction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._executionRoleArn = undefined;
      this._image = undefined;
      this._resourceConfiguration.internalValue = undefined;
      this._variables.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._executionRoleArn = value.executionRoleArn;
      this._image = value.image;
      this._resourceConfiguration.internalValue = value.resourceConfiguration;
      this._variables.internalValue = value.variables;
    }
  }

  // execution_role_arn - computed: true, optional: true, required: false
  private _executionRoleArn?: string; 
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  public resetExecutionRoleArn() {
    this._executionRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn;
  }

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // resource_configuration - computed: true, optional: true, required: false
  private _resourceConfiguration = new IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference(this, "resource_configuration");
  public get resourceConfiguration() {
    return this._resourceConfiguration;
  }
  public putResourceConfiguration(value: IotanalyticsDatasetActionsContainerActionResourceConfiguration) {
    this._resourceConfiguration.internalValue = value;
  }
  public resetResourceConfiguration() {
    this._resourceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceConfigurationInput() {
    return this._resourceConfiguration.internalValue;
  }

  // variables - computed: true, optional: true, required: false
  private _variables = new IotanalyticsDatasetActionsContainerActionVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
  public putVariables(value: IotanalyticsDatasetActionsContainerActionVariables[] | cdktn.IResolvable) {
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
export interface IotanalyticsDatasetActionsQueryActionFiltersDeltaTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#offset_seconds IotanalyticsDataset#offset_seconds}
  */
  readonly offsetSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#time_expression IotanalyticsDataset#time_expression}
  */
  readonly timeExpression?: string;
}

export function iotanalyticsDatasetActionsQueryActionFiltersDeltaTimeToTerraform(struct?: IotanalyticsDatasetActionsQueryActionFiltersDeltaTime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    offset_seconds: cdktn.numberToTerraform(struct!.offsetSeconds),
    time_expression: cdktn.stringToTerraform(struct!.timeExpression),
  }
}


export function iotanalyticsDatasetActionsQueryActionFiltersDeltaTimeToHclTerraform(struct?: IotanalyticsDatasetActionsQueryActionFiltersDeltaTime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    offset_seconds: {
      value: cdktn.numberToHclTerraform(struct!.offsetSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_expression: {
      value: cdktn.stringToHclTerraform(struct!.timeExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotanalyticsDatasetActionsQueryActionFiltersDeltaTime | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._offsetSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.offsetSeconds = this._offsetSeconds;
    }
    if (this._timeExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeExpression = this._timeExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsDatasetActionsQueryActionFiltersDeltaTime | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._offsetSeconds = undefined;
      this._timeExpression = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._offsetSeconds = value.offsetSeconds;
      this._timeExpression = value.timeExpression;
    }
  }

  // offset_seconds - computed: true, optional: true, required: false
  private _offsetSeconds?: number; 
  public get offsetSeconds() {
    return this.getNumberAttribute('offset_seconds');
  }
  public set offsetSeconds(value: number) {
    this._offsetSeconds = value;
  }
  public resetOffsetSeconds() {
    this._offsetSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetSecondsInput() {
    return this._offsetSeconds;
  }

  // time_expression - computed: true, optional: true, required: false
  private _timeExpression?: string; 
  public get timeExpression() {
    return this.getStringAttribute('time_expression');
  }
  public set timeExpression(value: string) {
    this._timeExpression = value;
  }
  public resetTimeExpression() {
    this._timeExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeExpressionInput() {
    return this._timeExpression;
  }
}
export interface IotanalyticsDatasetActionsQueryActionFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#delta_time IotanalyticsDataset#delta_time}
  */
  readonly deltaTime?: IotanalyticsDatasetActionsQueryActionFiltersDeltaTime;
}

export function iotanalyticsDatasetActionsQueryActionFiltersToTerraform(struct?: IotanalyticsDatasetActionsQueryActionFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delta_time: iotanalyticsDatasetActionsQueryActionFiltersDeltaTimeToTerraform(struct!.deltaTime),
  }
}


export function iotanalyticsDatasetActionsQueryActionFiltersToHclTerraform(struct?: IotanalyticsDatasetActionsQueryActionFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delta_time: {
      value: iotanalyticsDatasetActionsQueryActionFiltersDeltaTimeToHclTerraform(struct!.deltaTime),
      isBlock: true,
      type: "struct",
      storageClassType: "IotanalyticsDatasetActionsQueryActionFiltersDeltaTime",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsDatasetActionsQueryActionFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotanalyticsDatasetActionsQueryActionFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deltaTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deltaTime = this._deltaTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsDatasetActionsQueryActionFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deltaTime.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deltaTime.internalValue = value.deltaTime;
    }
  }

  // delta_time - computed: true, optional: true, required: false
  private _deltaTime = new IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference(this, "delta_time");
  public get deltaTime() {
    return this._deltaTime;
  }
  public putDeltaTime(value: IotanalyticsDatasetActionsQueryActionFiltersDeltaTime) {
    this._deltaTime.internalValue = value;
  }
  public resetDeltaTime() {
    this._deltaTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaTimeInput() {
    return this._deltaTime.internalValue;
  }
}

export class IotanalyticsDatasetActionsQueryActionFiltersList extends cdktn.ComplexList {
  public internalValue? : IotanalyticsDatasetActionsQueryActionFilters[] | cdktn.IResolvable

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
  public get(index: number): IotanalyticsDatasetActionsQueryActionFiltersOutputReference {
    return new IotanalyticsDatasetActionsQueryActionFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotanalyticsDatasetActionsQueryAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#filters IotanalyticsDataset#filters}
  */
  readonly filters?: IotanalyticsDatasetActionsQueryActionFilters[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#sql_query IotanalyticsDataset#sql_query}
  */
  readonly sqlQuery?: string;
}

export function iotanalyticsDatasetActionsQueryActionToTerraform(struct?: IotanalyticsDatasetActionsQueryAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filters: cdktn.listMapper(iotanalyticsDatasetActionsQueryActionFiltersToTerraform, false)(struct!.filters),
    sql_query: cdktn.stringToTerraform(struct!.sqlQuery),
  }
}


export function iotanalyticsDatasetActionsQueryActionToHclTerraform(struct?: IotanalyticsDatasetActionsQueryAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filters: {
      value: cdktn.listMapperHcl(iotanalyticsDatasetActionsQueryActionFiltersToHclTerraform, false)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "IotanalyticsDatasetActionsQueryActionFiltersList",
    },
    sql_query: {
      value: cdktn.stringToHclTerraform(struct!.sqlQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsDatasetActionsQueryActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotanalyticsDatasetActionsQueryAction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    if (this._sqlQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlQuery = this._sqlQuery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsDatasetActionsQueryAction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filters.internalValue = undefined;
      this._sqlQuery = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filters.internalValue = value.filters;
      this._sqlQuery = value.sqlQuery;
    }
  }

  // filters - computed: true, optional: true, required: false
  private _filters = new IotanalyticsDatasetActionsQueryActionFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: IotanalyticsDatasetActionsQueryActionFilters[] | cdktn.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // sql_query - computed: true, optional: true, required: false
  private _sqlQuery?: string; 
  public get sqlQuery() {
    return this.getStringAttribute('sql_query');
  }
  public set sqlQuery(value: string) {
    this._sqlQuery = value;
  }
  public resetSqlQuery() {
    this._sqlQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlQueryInput() {
    return this._sqlQuery;
  }
}
export interface IotanalyticsDatasetActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#action_name IotanalyticsDataset#action_name}
  */
  readonly actionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#container_action IotanalyticsDataset#container_action}
  */
  readonly containerAction?: IotanalyticsDatasetActionsContainerAction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#query_action IotanalyticsDataset#query_action}
  */
  readonly queryAction?: IotanalyticsDatasetActionsQueryAction;
}

export function iotanalyticsDatasetActionsToTerraform(struct?: IotanalyticsDatasetActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_name: cdktn.stringToTerraform(struct!.actionName),
    container_action: iotanalyticsDatasetActionsContainerActionToTerraform(struct!.containerAction),
    query_action: iotanalyticsDatasetActionsQueryActionToTerraform(struct!.queryAction),
  }
}


export function iotanalyticsDatasetActionsToHclTerraform(struct?: IotanalyticsDatasetActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_name: {
      value: cdktn.stringToHclTerraform(struct!.actionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_action: {
      value: iotanalyticsDatasetActionsContainerActionToHclTerraform(struct!.containerAction),
      isBlock: true,
      type: "struct",
      storageClassType: "IotanalyticsDatasetActionsContainerAction",
    },
    query_action: {
      value: iotanalyticsDatasetActionsQueryActionToHclTerraform(struct!.queryAction),
      isBlock: true,
      type: "struct",
      storageClassType: "IotanalyticsDatasetActionsQueryAction",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsDatasetActionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotanalyticsDatasetActions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionName = this._actionName;
    }
    if (this._containerAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerAction = this._containerAction?.internalValue;
    }
    if (this._queryAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryAction = this._queryAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsDatasetActions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionName = undefined;
      this._containerAction.internalValue = undefined;
      this._queryAction.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionName = value.actionName;
      this._containerAction.internalValue = value.containerAction;
      this._queryAction.internalValue = value.queryAction;
    }
  }

  // action_name - computed: false, optional: false, required: true
  private _actionName?: string; 
  public get actionName() {
    return this.getStringAttribute('action_name');
  }
  public set actionName(value: string) {
    this._actionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionNameInput() {
    return this._actionName;
  }

  // container_action - computed: true, optional: true, required: false
  private _containerAction = new IotanalyticsDatasetActionsContainerActionOutputReference(this, "container_action");
  public get containerAction() {
    return this._containerAction;
  }
  public putContainerAction(value: IotanalyticsDatasetActionsContainerAction) {
    this._containerAction.internalValue = value;
  }
  public resetContainerAction() {
    this._containerAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerActionInput() {
    return this._containerAction.internalValue;
  }

  // query_action - computed: true, optional: true, required: false
  private _queryAction = new IotanalyticsDatasetActionsQueryActionOutputReference(this, "query_action");
  public get queryAction() {
    return this._queryAction;
  }
  public putQueryAction(value: IotanalyticsDatasetActionsQueryAction) {
    this._queryAction.internalValue = value;
  }
  public resetQueryAction() {
    this._queryAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryActionInput() {
    return this._queryAction.internalValue;
  }
}

export class IotanalyticsDatasetActionsList extends cdktn.ComplexList {
  public internalValue? : IotanalyticsDatasetActions[] | cdktn.IResolvable

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
  public get(index: number): IotanalyticsDatasetActionsOutputReference {
    return new IotanalyticsDatasetActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#input_name IotanalyticsDataset#input_name}
  */
  readonly inputName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#role_arn IotanalyticsDataset#role_arn}
  */
  readonly roleArn?: string;
}

export function iotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationToTerraform(struct?: IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input_name: cdktn.stringToTerraform(struct!.inputName),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function iotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationToHclTerraform(struct?: IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input_name: {
      value: cdktn.stringToHclTerraform(struct!.inputName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputName !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputName = this._inputName;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inputName = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inputName = value.inputName;
      this._roleArn = value.roleArn;
    }
  }

  // input_name - computed: true, optional: true, required: false
  private _inputName?: string; 
  public get inputName() {
    return this.getStringAttribute('input_name');
  }
  public set inputName(value: string) {
    this._inputName = value;
  }
  public resetInputName() {
    this._inputName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputNameInput() {
    return this._inputName;
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
}
export interface IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#database_name IotanalyticsDataset#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#table_name IotanalyticsDataset#table_name}
  */
  readonly tableName?: string;
}

export function iotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationToTerraform(struct?: IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    table_name: cdktn.stringToTerraform(struct!.tableName),
  }
}


export function iotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationToHclTerraform(struct?: IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database_name: {
      value: cdktn.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktn.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseName = undefined;
      this._tableName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseName = value.databaseName;
      this._tableName = value.tableName;
    }
  }

  // database_name - computed: true, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // table_name - computed: true, optional: true, required: false
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  public resetTableName() {
    this._tableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }
}
export interface IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#bucket IotanalyticsDataset#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#glue_configuration IotanalyticsDataset#glue_configuration}
  */
  readonly glueConfiguration?: IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#key IotanalyticsDataset#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#role_arn IotanalyticsDataset#role_arn}
  */
  readonly roleArn?: string;
}

export function iotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationToTerraform(struct?: IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    glue_configuration: iotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationToTerraform(struct!.glueConfiguration),
    key: cdktn.stringToTerraform(struct!.key),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function iotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationToHclTerraform(struct?: IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glue_configuration: {
      value: iotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationToHclTerraform(struct!.glueConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._glueConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.glueConfiguration = this._glueConfiguration?.internalValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._glueConfiguration.internalValue = undefined;
      this._key = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._glueConfiguration.internalValue = value.glueConfiguration;
      this._key = value.key;
      this._roleArn = value.roleArn;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // glue_configuration - computed: true, optional: true, required: false
  private _glueConfiguration = new IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference(this, "glue_configuration");
  public get glueConfiguration() {
    return this._glueConfiguration;
  }
  public putGlueConfiguration(value: IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration) {
    this._glueConfiguration.internalValue = value;
  }
  public resetGlueConfiguration() {
    this._glueConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glueConfigurationInput() {
    return this._glueConfiguration.internalValue;
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
}
export interface IotanalyticsDatasetContentDeliveryRulesDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#iot_events_destination_configuration IotanalyticsDataset#iot_events_destination_configuration}
  */
  readonly iotEventsDestinationConfiguration?: IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#s3_destination_configuration IotanalyticsDataset#s3_destination_configuration}
  */
  readonly s3DestinationConfiguration?: IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration;
}

export function iotanalyticsDatasetContentDeliveryRulesDestinationToTerraform(struct?: IotanalyticsDatasetContentDeliveryRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    iot_events_destination_configuration: iotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationToTerraform(struct!.iotEventsDestinationConfiguration),
    s3_destination_configuration: iotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationToTerraform(struct!.s3DestinationConfiguration),
  }
}


export function iotanalyticsDatasetContentDeliveryRulesDestinationToHclTerraform(struct?: IotanalyticsDatasetContentDeliveryRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    iot_events_destination_configuration: {
      value: iotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationToHclTerraform(struct!.iotEventsDestinationConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration",
    },
    s3_destination_configuration: {
      value: iotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationToHclTerraform(struct!.s3DestinationConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotanalyticsDatasetContentDeliveryRulesDestination | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iotEventsDestinationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iotEventsDestinationConfiguration = this._iotEventsDestinationConfiguration?.internalValue;
    }
    if (this._s3DestinationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DestinationConfiguration = this._s3DestinationConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsDatasetContentDeliveryRulesDestination | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iotEventsDestinationConfiguration.internalValue = undefined;
      this._s3DestinationConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iotEventsDestinationConfiguration.internalValue = value.iotEventsDestinationConfiguration;
      this._s3DestinationConfiguration.internalValue = value.s3DestinationConfiguration;
    }
  }

  // iot_events_destination_configuration - computed: true, optional: true, required: false
  private _iotEventsDestinationConfiguration = new IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference(this, "iot_events_destination_configuration");
  public get iotEventsDestinationConfiguration() {
    return this._iotEventsDestinationConfiguration;
  }
  public putIotEventsDestinationConfiguration(value: IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration) {
    this._iotEventsDestinationConfiguration.internalValue = value;
  }
  public resetIotEventsDestinationConfiguration() {
    this._iotEventsDestinationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotEventsDestinationConfigurationInput() {
    return this._iotEventsDestinationConfiguration.internalValue;
  }

  // s3_destination_configuration - computed: true, optional: true, required: false
  private _s3DestinationConfiguration = new IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference(this, "s3_destination_configuration");
  public get s3DestinationConfiguration() {
    return this._s3DestinationConfiguration;
  }
  public putS3DestinationConfiguration(value: IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration) {
    this._s3DestinationConfiguration.internalValue = value;
  }
  public resetS3DestinationConfiguration() {
    this._s3DestinationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DestinationConfigurationInput() {
    return this._s3DestinationConfiguration.internalValue;
  }
}
export interface IotanalyticsDatasetContentDeliveryRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#destination IotanalyticsDataset#destination}
  */
  readonly destination?: IotanalyticsDatasetContentDeliveryRulesDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#entry_name IotanalyticsDataset#entry_name}
  */
  readonly entryName?: string;
}

export function iotanalyticsDatasetContentDeliveryRulesToTerraform(struct?: IotanalyticsDatasetContentDeliveryRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination: iotanalyticsDatasetContentDeliveryRulesDestinationToTerraform(struct!.destination),
    entry_name: cdktn.stringToTerraform(struct!.entryName),
  }
}


export function iotanalyticsDatasetContentDeliveryRulesToHclTerraform(struct?: IotanalyticsDatasetContentDeliveryRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination: {
      value: iotanalyticsDatasetContentDeliveryRulesDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "IotanalyticsDatasetContentDeliveryRulesDestination",
    },
    entry_name: {
      value: cdktn.stringToHclTerraform(struct!.entryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsDatasetContentDeliveryRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotanalyticsDatasetContentDeliveryRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._entryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryName = this._entryName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsDatasetContentDeliveryRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination.internalValue = undefined;
      this._entryName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination.internalValue = value.destination;
      this._entryName = value.entryName;
    }
  }

  // destination - computed: true, optional: true, required: false
  private _destination = new IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: IotanalyticsDatasetContentDeliveryRulesDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // entry_name - computed: true, optional: true, required: false
  private _entryName?: string; 
  public get entryName() {
    return this.getStringAttribute('entry_name');
  }
  public set entryName(value: string) {
    this._entryName = value;
  }
  public resetEntryName() {
    this._entryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryNameInput() {
    return this._entryName;
  }
}

export class IotanalyticsDatasetContentDeliveryRulesList extends cdktn.ComplexList {
  public internalValue? : IotanalyticsDatasetContentDeliveryRules[] | cdktn.IResolvable

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
  public get(index: number): IotanalyticsDatasetContentDeliveryRulesOutputReference {
    return new IotanalyticsDatasetContentDeliveryRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#timeout_in_minutes IotanalyticsDataset#timeout_in_minutes}
  */
  readonly timeoutInMinutes?: number;
}

export function iotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationToTerraform(struct?: IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    timeout_in_minutes: cdktn.numberToTerraform(struct!.timeoutInMinutes),
  }
}


export function iotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationToHclTerraform(struct?: IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    timeout_in_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutInMinutes = this._timeoutInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeoutInMinutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeoutInMinutes = value.timeoutInMinutes;
    }
  }

  // timeout_in_minutes - computed: true, optional: true, required: false
  private _timeoutInMinutes?: number; 
  public get timeoutInMinutes() {
    return this.getNumberAttribute('timeout_in_minutes');
  }
  public set timeoutInMinutes(value: number) {
    this._timeoutInMinutes = value;
  }
  public resetTimeoutInMinutes() {
    this._timeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInMinutesInput() {
    return this._timeoutInMinutes;
  }
}
export interface IotanalyticsDatasetLateDataRulesRuleConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#delta_time_session_window_configuration IotanalyticsDataset#delta_time_session_window_configuration}
  */
  readonly deltaTimeSessionWindowConfiguration?: IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration;
}

export function iotanalyticsDatasetLateDataRulesRuleConfigurationToTerraform(struct?: IotanalyticsDatasetLateDataRulesRuleConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delta_time_session_window_configuration: iotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationToTerraform(struct!.deltaTimeSessionWindowConfiguration),
  }
}


export function iotanalyticsDatasetLateDataRulesRuleConfigurationToHclTerraform(struct?: IotanalyticsDatasetLateDataRulesRuleConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delta_time_session_window_configuration: {
      value: iotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationToHclTerraform(struct!.deltaTimeSessionWindowConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotanalyticsDatasetLateDataRulesRuleConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deltaTimeSessionWindowConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deltaTimeSessionWindowConfiguration = this._deltaTimeSessionWindowConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsDatasetLateDataRulesRuleConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deltaTimeSessionWindowConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deltaTimeSessionWindowConfiguration.internalValue = value.deltaTimeSessionWindowConfiguration;
    }
  }

  // delta_time_session_window_configuration - computed: true, optional: true, required: false
  private _deltaTimeSessionWindowConfiguration = new IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference(this, "delta_time_session_window_configuration");
  public get deltaTimeSessionWindowConfiguration() {
    return this._deltaTimeSessionWindowConfiguration;
  }
  public putDeltaTimeSessionWindowConfiguration(value: IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration) {
    this._deltaTimeSessionWindowConfiguration.internalValue = value;
  }
  public resetDeltaTimeSessionWindowConfiguration() {
    this._deltaTimeSessionWindowConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaTimeSessionWindowConfigurationInput() {
    return this._deltaTimeSessionWindowConfiguration.internalValue;
  }
}
export interface IotanalyticsDatasetLateDataRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#rule_configuration IotanalyticsDataset#rule_configuration}
  */
  readonly ruleConfiguration?: IotanalyticsDatasetLateDataRulesRuleConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#rule_name IotanalyticsDataset#rule_name}
  */
  readonly ruleName?: string;
}

export function iotanalyticsDatasetLateDataRulesToTerraform(struct?: IotanalyticsDatasetLateDataRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rule_configuration: iotanalyticsDatasetLateDataRulesRuleConfigurationToTerraform(struct!.ruleConfiguration),
    rule_name: cdktn.stringToTerraform(struct!.ruleName),
  }
}


export function iotanalyticsDatasetLateDataRulesToHclTerraform(struct?: IotanalyticsDatasetLateDataRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rule_configuration: {
      value: iotanalyticsDatasetLateDataRulesRuleConfigurationToHclTerraform(struct!.ruleConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "IotanalyticsDatasetLateDataRulesRuleConfiguration",
    },
    rule_name: {
      value: cdktn.stringToHclTerraform(struct!.ruleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsDatasetLateDataRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotanalyticsDatasetLateDataRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleConfiguration = this._ruleConfiguration?.internalValue;
    }
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsDatasetLateDataRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ruleConfiguration.internalValue = undefined;
      this._ruleName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ruleConfiguration.internalValue = value.ruleConfiguration;
      this._ruleName = value.ruleName;
    }
  }

  // rule_configuration - computed: true, optional: true, required: false
  private _ruleConfiguration = new IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference(this, "rule_configuration");
  public get ruleConfiguration() {
    return this._ruleConfiguration;
  }
  public putRuleConfiguration(value: IotanalyticsDatasetLateDataRulesRuleConfiguration) {
    this._ruleConfiguration.internalValue = value;
  }
  public resetRuleConfiguration() {
    this._ruleConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleConfigurationInput() {
    return this._ruleConfiguration.internalValue;
  }

  // rule_name - computed: true, optional: true, required: false
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  public resetRuleName() {
    this._ruleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }
}

export class IotanalyticsDatasetLateDataRulesList extends cdktn.ComplexList {
  public internalValue? : IotanalyticsDatasetLateDataRules[] | cdktn.IResolvable

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
  public get(index: number): IotanalyticsDatasetLateDataRulesOutputReference {
    return new IotanalyticsDatasetLateDataRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotanalyticsDatasetRetentionPeriod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#number_of_days IotanalyticsDataset#number_of_days}
  */
  readonly numberOfDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#unlimited IotanalyticsDataset#unlimited}
  */
  readonly unlimited?: boolean | cdktn.IResolvable;
}

export function iotanalyticsDatasetRetentionPeriodToTerraform(struct?: IotanalyticsDatasetRetentionPeriod | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    number_of_days: cdktn.numberToTerraform(struct!.numberOfDays),
    unlimited: cdktn.booleanToTerraform(struct!.unlimited),
  }
}


export function iotanalyticsDatasetRetentionPeriodToHclTerraform(struct?: IotanalyticsDatasetRetentionPeriod | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    number_of_days: {
      value: cdktn.numberToHclTerraform(struct!.numberOfDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unlimited: {
      value: cdktn.booleanToHclTerraform(struct!.unlimited),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsDatasetRetentionPeriodOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotanalyticsDatasetRetentionPeriod | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numberOfDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfDays = this._numberOfDays;
    }
    if (this._unlimited !== undefined) {
      hasAnyValues = true;
      internalValueResult.unlimited = this._unlimited;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsDatasetRetentionPeriod | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numberOfDays = undefined;
      this._unlimited = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._numberOfDays = value.numberOfDays;
      this._unlimited = value.unlimited;
    }
  }

  // number_of_days - computed: true, optional: true, required: false
  private _numberOfDays?: number; 
  public get numberOfDays() {
    return this.getNumberAttribute('number_of_days');
  }
  public set numberOfDays(value: number) {
    this._numberOfDays = value;
  }
  public resetNumberOfDays() {
    this._numberOfDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfDaysInput() {
    return this._numberOfDays;
  }

  // unlimited - computed: true, optional: true, required: false
  private _unlimited?: boolean | cdktn.IResolvable; 
  public get unlimited() {
    return this.getBooleanAttribute('unlimited');
  }
  public set unlimited(value: boolean | cdktn.IResolvable) {
    this._unlimited = value;
  }
  public resetUnlimited() {
    this._unlimited = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unlimitedInput() {
    return this._unlimited;
  }
}
export interface IotanalyticsDatasetTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#key IotanalyticsDataset#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#value IotanalyticsDataset#value}
  */
  readonly value?: string;
}

export function iotanalyticsDatasetTagsToTerraform(struct?: IotanalyticsDatasetTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function iotanalyticsDatasetTagsToHclTerraform(struct?: IotanalyticsDatasetTags | cdktn.IResolvable): any {
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

export class IotanalyticsDatasetTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotanalyticsDatasetTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IotanalyticsDatasetTags | cdktn.IResolvable | undefined) {
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

export class IotanalyticsDatasetTagsList extends cdktn.ComplexList {
  public internalValue? : IotanalyticsDatasetTags[] | cdktn.IResolvable

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
  public get(index: number): IotanalyticsDatasetTagsOutputReference {
    return new IotanalyticsDatasetTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotanalyticsDatasetTriggersSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#schedule_expression IotanalyticsDataset#schedule_expression}
  */
  readonly scheduleExpression?: string;
}

export function iotanalyticsDatasetTriggersScheduleToTerraform(struct?: IotanalyticsDatasetTriggersSchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    schedule_expression: cdktn.stringToTerraform(struct!.scheduleExpression),
  }
}


export function iotanalyticsDatasetTriggersScheduleToHclTerraform(struct?: IotanalyticsDatasetTriggersSchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    schedule_expression: {
      value: cdktn.stringToHclTerraform(struct!.scheduleExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsDatasetTriggersScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotanalyticsDatasetTriggersSchedule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scheduleExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleExpression = this._scheduleExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsDatasetTriggersSchedule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scheduleExpression = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scheduleExpression = value.scheduleExpression;
    }
  }

  // schedule_expression - computed: true, optional: true, required: false
  private _scheduleExpression?: string; 
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }
  public set scheduleExpression(value: string) {
    this._scheduleExpression = value;
  }
  public resetScheduleExpression() {
    this._scheduleExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleExpressionInput() {
    return this._scheduleExpression;
  }
}
export interface IotanalyticsDatasetTriggersTriggeringDataset {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#dataset_name IotanalyticsDataset#dataset_name}
  */
  readonly datasetName?: string;
}

export function iotanalyticsDatasetTriggersTriggeringDatasetToTerraform(struct?: IotanalyticsDatasetTriggersTriggeringDataset | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dataset_name: cdktn.stringToTerraform(struct!.datasetName),
  }
}


export function iotanalyticsDatasetTriggersTriggeringDatasetToHclTerraform(struct?: IotanalyticsDatasetTriggersTriggeringDataset | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dataset_name: {
      value: cdktn.stringToHclTerraform(struct!.datasetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsDatasetTriggersTriggeringDatasetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotanalyticsDatasetTriggersTriggeringDataset | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetName = this._datasetName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsDatasetTriggersTriggeringDataset | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasetName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasetName = value.datasetName;
    }
  }

  // dataset_name - computed: true, optional: true, required: false
  private _datasetName?: string; 
  public get datasetName() {
    return this.getStringAttribute('dataset_name');
  }
  public set datasetName(value: string) {
    this._datasetName = value;
  }
  public resetDatasetName() {
    this._datasetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetNameInput() {
    return this._datasetName;
  }
}
export interface IotanalyticsDatasetTriggers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#schedule IotanalyticsDataset#schedule}
  */
  readonly schedule?: IotanalyticsDatasetTriggersSchedule;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#triggering_dataset IotanalyticsDataset#triggering_dataset}
  */
  readonly triggeringDataset?: IotanalyticsDatasetTriggersTriggeringDataset;
}

export function iotanalyticsDatasetTriggersToTerraform(struct?: IotanalyticsDatasetTriggers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    schedule: iotanalyticsDatasetTriggersScheduleToTerraform(struct!.schedule),
    triggering_dataset: iotanalyticsDatasetTriggersTriggeringDatasetToTerraform(struct!.triggeringDataset),
  }
}


export function iotanalyticsDatasetTriggersToHclTerraform(struct?: IotanalyticsDatasetTriggers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    schedule: {
      value: iotanalyticsDatasetTriggersScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "struct",
      storageClassType: "IotanalyticsDatasetTriggersSchedule",
    },
    triggering_dataset: {
      value: iotanalyticsDatasetTriggersTriggeringDatasetToHclTerraform(struct!.triggeringDataset),
      isBlock: true,
      type: "struct",
      storageClassType: "IotanalyticsDatasetTriggersTriggeringDataset",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsDatasetTriggersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotanalyticsDatasetTriggers | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    if (this._triggeringDataset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggeringDataset = this._triggeringDataset?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsDatasetTriggers | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schedule.internalValue = undefined;
      this._triggeringDataset.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schedule.internalValue = value.schedule;
      this._triggeringDataset.internalValue = value.triggeringDataset;
    }
  }

  // schedule - computed: true, optional: true, required: false
  private _schedule = new IotanalyticsDatasetTriggersScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: IotanalyticsDatasetTriggersSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // triggering_dataset - computed: true, optional: true, required: false
  private _triggeringDataset = new IotanalyticsDatasetTriggersTriggeringDatasetOutputReference(this, "triggering_dataset");
  public get triggeringDataset() {
    return this._triggeringDataset;
  }
  public putTriggeringDataset(value: IotanalyticsDatasetTriggersTriggeringDataset) {
    this._triggeringDataset.internalValue = value;
  }
  public resetTriggeringDataset() {
    this._triggeringDataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggeringDatasetInput() {
    return this._triggeringDataset.internalValue;
  }
}

export class IotanalyticsDatasetTriggersList extends cdktn.ComplexList {
  public internalValue? : IotanalyticsDatasetTriggers[] | cdktn.IResolvable

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
  public get(index: number): IotanalyticsDatasetTriggersOutputReference {
    return new IotanalyticsDatasetTriggersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotanalyticsDatasetVersioningConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#max_versions IotanalyticsDataset#max_versions}
  */
  readonly maxVersions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#unlimited IotanalyticsDataset#unlimited}
  */
  readonly unlimited?: boolean | cdktn.IResolvable;
}

export function iotanalyticsDatasetVersioningConfigurationToTerraform(struct?: IotanalyticsDatasetVersioningConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_versions: cdktn.numberToTerraform(struct!.maxVersions),
    unlimited: cdktn.booleanToTerraform(struct!.unlimited),
  }
}


export function iotanalyticsDatasetVersioningConfigurationToHclTerraform(struct?: IotanalyticsDatasetVersioningConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_versions: {
      value: cdktn.numberToHclTerraform(struct!.maxVersions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unlimited: {
      value: cdktn.booleanToHclTerraform(struct!.unlimited),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsDatasetVersioningConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotanalyticsDatasetVersioningConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVersions = this._maxVersions;
    }
    if (this._unlimited !== undefined) {
      hasAnyValues = true;
      internalValueResult.unlimited = this._unlimited;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsDatasetVersioningConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxVersions = undefined;
      this._unlimited = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxVersions = value.maxVersions;
      this._unlimited = value.unlimited;
    }
  }

  // max_versions - computed: true, optional: true, required: false
  private _maxVersions?: number; 
  public get maxVersions() {
    return this.getNumberAttribute('max_versions');
  }
  public set maxVersions(value: number) {
    this._maxVersions = value;
  }
  public resetMaxVersions() {
    this._maxVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionsInput() {
    return this._maxVersions;
  }

  // unlimited - computed: true, optional: true, required: false
  private _unlimited?: boolean | cdktn.IResolvable; 
  public get unlimited() {
    return this.getBooleanAttribute('unlimited');
  }
  public set unlimited(value: boolean | cdktn.IResolvable) {
    this._unlimited = value;
  }
  public resetUnlimited() {
    this._unlimited = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unlimitedInput() {
    return this._unlimited;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset awscc_iotanalytics_dataset}
*/
export class IotanalyticsDataset extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iotanalytics_dataset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IotanalyticsDataset resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IotanalyticsDataset to import
  * @param importFromId The id of the existing IotanalyticsDataset that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IotanalyticsDataset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotanalytics_dataset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_dataset awscc_iotanalytics_dataset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotanalyticsDatasetConfig
  */
  public constructor(scope: Construct, id: string, config: IotanalyticsDatasetConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotanalytics_dataset',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.91.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actions.internalValue = config.actions;
    this._contentDeliveryRules.internalValue = config.contentDeliveryRules;
    this._datasetName = config.datasetName;
    this._lateDataRules.internalValue = config.lateDataRules;
    this._retentionPeriod.internalValue = config.retentionPeriod;
    this._tags.internalValue = config.tags;
    this._triggers.internalValue = config.triggers;
    this._versioningConfiguration.internalValue = config.versioningConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions - computed: false, optional: false, required: true
  private _actions = new IotanalyticsDatasetActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: IotanalyticsDatasetActions[] | cdktn.IResolvable) {
    this._actions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // content_delivery_rules - computed: true, optional: true, required: false
  private _contentDeliveryRules = new IotanalyticsDatasetContentDeliveryRulesList(this, "content_delivery_rules", false);
  public get contentDeliveryRules() {
    return this._contentDeliveryRules;
  }
  public putContentDeliveryRules(value: IotanalyticsDatasetContentDeliveryRules[] | cdktn.IResolvable) {
    this._contentDeliveryRules.internalValue = value;
  }
  public resetContentDeliveryRules() {
    this._contentDeliveryRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDeliveryRulesInput() {
    return this._contentDeliveryRules.internalValue;
  }

  // dataset_id - computed: true, optional: false, required: false
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }

  // dataset_name - computed: true, optional: true, required: false
  private _datasetName?: string; 
  public get datasetName() {
    return this.getStringAttribute('dataset_name');
  }
  public set datasetName(value: string) {
    this._datasetName = value;
  }
  public resetDatasetName() {
    this._datasetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetNameInput() {
    return this._datasetName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // late_data_rules - computed: true, optional: true, required: false
  private _lateDataRules = new IotanalyticsDatasetLateDataRulesList(this, "late_data_rules", false);
  public get lateDataRules() {
    return this._lateDataRules;
  }
  public putLateDataRules(value: IotanalyticsDatasetLateDataRules[] | cdktn.IResolvable) {
    this._lateDataRules.internalValue = value;
  }
  public resetLateDataRules() {
    this._lateDataRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lateDataRulesInput() {
    return this._lateDataRules.internalValue;
  }

  // retention_period - computed: true, optional: true, required: false
  private _retentionPeriod = new IotanalyticsDatasetRetentionPeriodOutputReference(this, "retention_period");
  public get retentionPeriod() {
    return this._retentionPeriod;
  }
  public putRetentionPeriod(value: IotanalyticsDatasetRetentionPeriod) {
    this._retentionPeriod.internalValue = value;
  }
  public resetRetentionPeriod() {
    this._retentionPeriod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInput() {
    return this._retentionPeriod.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new IotanalyticsDatasetTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: IotanalyticsDatasetTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // triggers - computed: true, optional: true, required: false
  private _triggers = new IotanalyticsDatasetTriggersList(this, "triggers", false);
  public get triggers() {
    return this._triggers;
  }
  public putTriggers(value: IotanalyticsDatasetTriggers[] | cdktn.IResolvable) {
    this._triggers.internalValue = value;
  }
  public resetTriggers() {
    this._triggers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers.internalValue;
  }

  // versioning_configuration - computed: true, optional: true, required: false
  private _versioningConfiguration = new IotanalyticsDatasetVersioningConfigurationOutputReference(this, "versioning_configuration");
  public get versioningConfiguration() {
    return this._versioningConfiguration;
  }
  public putVersioningConfiguration(value: IotanalyticsDatasetVersioningConfiguration) {
    this._versioningConfiguration.internalValue = value;
  }
  public resetVersioningConfiguration() {
    this._versioningConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versioningConfigurationInput() {
    return this._versioningConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actions: cdktn.listMapper(iotanalyticsDatasetActionsToTerraform, false)(this._actions.internalValue),
      content_delivery_rules: cdktn.listMapper(iotanalyticsDatasetContentDeliveryRulesToTerraform, false)(this._contentDeliveryRules.internalValue),
      dataset_name: cdktn.stringToTerraform(this._datasetName),
      late_data_rules: cdktn.listMapper(iotanalyticsDatasetLateDataRulesToTerraform, false)(this._lateDataRules.internalValue),
      retention_period: iotanalyticsDatasetRetentionPeriodToTerraform(this._retentionPeriod.internalValue),
      tags: cdktn.listMapper(iotanalyticsDatasetTagsToTerraform, false)(this._tags.internalValue),
      triggers: cdktn.listMapper(iotanalyticsDatasetTriggersToTerraform, false)(this._triggers.internalValue),
      versioning_configuration: iotanalyticsDatasetVersioningConfigurationToTerraform(this._versioningConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      actions: {
        value: cdktn.listMapperHcl(iotanalyticsDatasetActionsToHclTerraform, false)(this._actions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IotanalyticsDatasetActionsList",
      },
      content_delivery_rules: {
        value: cdktn.listMapperHcl(iotanalyticsDatasetContentDeliveryRulesToHclTerraform, false)(this._contentDeliveryRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IotanalyticsDatasetContentDeliveryRulesList",
      },
      dataset_name: {
        value: cdktn.stringToHclTerraform(this._datasetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      late_data_rules: {
        value: cdktn.listMapperHcl(iotanalyticsDatasetLateDataRulesToHclTerraform, false)(this._lateDataRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IotanalyticsDatasetLateDataRulesList",
      },
      retention_period: {
        value: iotanalyticsDatasetRetentionPeriodToHclTerraform(this._retentionPeriod.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IotanalyticsDatasetRetentionPeriod",
      },
      tags: {
        value: cdktn.listMapperHcl(iotanalyticsDatasetTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IotanalyticsDatasetTagsList",
      },
      triggers: {
        value: cdktn.listMapperHcl(iotanalyticsDatasetTriggersToHclTerraform, false)(this._triggers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IotanalyticsDatasetTriggersList",
      },
      versioning_configuration: {
        value: iotanalyticsDatasetVersioningConfigurationToHclTerraform(this._versioningConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IotanalyticsDatasetVersioningConfiguration",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
