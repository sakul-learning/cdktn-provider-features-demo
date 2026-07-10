// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface B2BiTransformerConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#edi_type B2BiTransformer#edi_type}
  */
  readonly ediType?: B2BiTransformerEdiType;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#file_format B2BiTransformer#file_format}
  */
  readonly fileFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#input_conversion B2BiTransformer#input_conversion}
  */
  readonly inputConversion?: B2BiTransformerInputConversion;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#mapping B2BiTransformer#mapping}
  */
  readonly mapping?: B2BiTransformerMapping;
  /**
  * This shape is deprecated: This is a legacy trait. Please use input-conversion or output-conversion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#mapping_template B2BiTransformer#mapping_template}
  */
  readonly mappingTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#name B2BiTransformer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#output_conversion B2BiTransformer#output_conversion}
  */
  readonly outputConversion?: B2BiTransformerOutputConversion;
  /**
  * This shape is deprecated: This is a legacy trait. Please use input-conversion or output-conversion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#sample_document B2BiTransformer#sample_document}
  */
  readonly sampleDocument?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#sample_documents B2BiTransformer#sample_documents}
  */
  readonly sampleDocuments?: B2BiTransformerSampleDocuments;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#status B2BiTransformer#status}
  */
  readonly status: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#tags B2BiTransformer#tags}
  */
  readonly tags?: B2BiTransformerTags[] | cdktn.IResolvable;
}
export interface B2BiTransformerEdiTypeX12Details {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#transaction_set B2BiTransformer#transaction_set}
  */
  readonly transactionSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#version B2BiTransformer#version}
  */
  readonly version?: string;
}

export function b2BiTransformerEdiTypeX12DetailsToTerraform(struct?: B2BiTransformerEdiTypeX12Details | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    transaction_set: cdktn.stringToTerraform(struct!.transactionSet),
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function b2BiTransformerEdiTypeX12DetailsToHclTerraform(struct?: B2BiTransformerEdiTypeX12Details | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    transaction_set: {
      value: cdktn.stringToHclTerraform(struct!.transactionSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiTransformerEdiTypeX12DetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): B2BiTransformerEdiTypeX12Details | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transactionSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.transactionSet = this._transactionSet;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiTransformerEdiTypeX12Details | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._transactionSet = undefined;
      this._version = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._transactionSet = value.transactionSet;
      this._version = value.version;
    }
  }

  // transaction_set - computed: true, optional: true, required: false
  private _transactionSet?: string; 
  public get transactionSet() {
    return this.getStringAttribute('transaction_set');
  }
  public set transactionSet(value: string) {
    this._transactionSet = value;
  }
  public resetTransactionSet() {
    this._transactionSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionSetInput() {
    return this._transactionSet;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface B2BiTransformerEdiType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#x12_details B2BiTransformer#x12_details}
  */
  readonly x12Details?: B2BiTransformerEdiTypeX12Details;
}

export function b2BiTransformerEdiTypeToTerraform(struct?: B2BiTransformerEdiType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    x12_details: b2BiTransformerEdiTypeX12DetailsToTerraform(struct!.x12Details),
  }
}


export function b2BiTransformerEdiTypeToHclTerraform(struct?: B2BiTransformerEdiType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    x12_details: {
      value: b2BiTransformerEdiTypeX12DetailsToHclTerraform(struct!.x12Details),
      isBlock: true,
      type: "struct",
      storageClassType: "B2BiTransformerEdiTypeX12Details",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiTransformerEdiTypeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): B2BiTransformerEdiType | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._x12Details?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.x12Details = this._x12Details?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiTransformerEdiType | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._x12Details.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._x12Details.internalValue = value.x12Details;
    }
  }

  // x12_details - computed: true, optional: true, required: false
  private _x12Details = new B2BiTransformerEdiTypeX12DetailsOutputReference(this, "x12_details");
  public get x12Details() {
    return this._x12Details;
  }
  public putX12Details(value: B2BiTransformerEdiTypeX12Details) {
    this._x12Details.internalValue = value;
  }
  public resetX12Details() {
    this._x12Details.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get x12DetailsInput() {
    return this._x12Details.internalValue;
  }
}
export interface B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#split_by B2BiTransformer#split_by}
  */
  readonly splitBy?: string;
}

export function b2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsToTerraform(struct?: B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    split_by: cdktn.stringToTerraform(struct!.splitBy),
  }
}


export function b2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsToHclTerraform(struct?: B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    split_by: {
      value: cdktn.stringToHclTerraform(struct!.splitBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._splitBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitBy = this._splitBy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._splitBy = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._splitBy = value.splitBy;
    }
  }

  // split_by - computed: true, optional: true, required: false
  private _splitBy?: string; 
  public get splitBy() {
    return this.getStringAttribute('split_by');
  }
  public set splitBy(value: string) {
    this._splitBy = value;
  }
  public resetSplitBy() {
    this._splitBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitByInput() {
    return this._splitBy;
  }
}
export interface B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#codes_to_add B2BiTransformer#codes_to_add}
  */
  readonly codesToAdd?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#codes_to_remove B2BiTransformer#codes_to_remove}
  */
  readonly codesToRemove?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#element_id B2BiTransformer#element_id}
  */
  readonly elementId?: string;
}

export function b2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleToTerraform(struct?: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    codes_to_add: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.codesToAdd),
    codes_to_remove: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.codesToRemove),
    element_id: cdktn.stringToTerraform(struct!.elementId),
  }
}


export function b2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleToHclTerraform(struct?: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    codes_to_add: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.codesToAdd),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    codes_to_remove: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.codesToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    element_id: {
      value: cdktn.stringToHclTerraform(struct!.elementId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codesToAdd !== undefined) {
      hasAnyValues = true;
      internalValueResult.codesToAdd = this._codesToAdd;
    }
    if (this._codesToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.codesToRemove = this._codesToRemove;
    }
    if (this._elementId !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementId = this._elementId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codesToAdd = undefined;
      this._codesToRemove = undefined;
      this._elementId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codesToAdd = value.codesToAdd;
      this._codesToRemove = value.codesToRemove;
      this._elementId = value.elementId;
    }
  }

  // codes_to_add - computed: true, optional: true, required: false
  private _codesToAdd?: string[]; 
  public get codesToAdd() {
    return this.getListAttribute('codes_to_add');
  }
  public set codesToAdd(value: string[]) {
    this._codesToAdd = value;
  }
  public resetCodesToAdd() {
    this._codesToAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codesToAddInput() {
    return this._codesToAdd;
  }

  // codes_to_remove - computed: true, optional: true, required: false
  private _codesToRemove?: string[]; 
  public get codesToRemove() {
    return this.getListAttribute('codes_to_remove');
  }
  public set codesToRemove(value: string[]) {
    this._codesToRemove = value;
  }
  public resetCodesToRemove() {
    this._codesToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codesToRemoveInput() {
    return this._codesToRemove;
  }

  // element_id - computed: true, optional: true, required: false
  private _elementId?: string; 
  public get elementId() {
    return this.getStringAttribute('element_id');
  }
  public set elementId(value: string) {
    this._elementId = value;
  }
  public resetElementId() {
    this._elementId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementIdInput() {
    return this._elementId;
  }
}
export interface B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#element_id B2BiTransformer#element_id}
  */
  readonly elementId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#max_length B2BiTransformer#max_length}
  */
  readonly maxLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#min_length B2BiTransformer#min_length}
  */
  readonly minLength?: number;
}

export function b2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleToTerraform(struct?: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    element_id: cdktn.stringToTerraform(struct!.elementId),
    max_length: cdktn.numberToTerraform(struct!.maxLength),
    min_length: cdktn.numberToTerraform(struct!.minLength),
  }
}


export function b2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleToHclTerraform(struct?: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    element_id: {
      value: cdktn.stringToHclTerraform(struct!.elementId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_length: {
      value: cdktn.numberToHclTerraform(struct!.maxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_length: {
      value: cdktn.numberToHclTerraform(struct!.minLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elementId !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementId = this._elementId;
    }
    if (this._maxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLength = this._maxLength;
    }
    if (this._minLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLength = this._minLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._elementId = undefined;
      this._maxLength = undefined;
      this._minLength = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._elementId = value.elementId;
      this._maxLength = value.maxLength;
      this._minLength = value.minLength;
    }
  }

  // element_id - computed: true, optional: true, required: false
  private _elementId?: string; 
  public get elementId() {
    return this.getStringAttribute('element_id');
  }
  public set elementId(value: string) {
    this._elementId = value;
  }
  public resetElementId() {
    this._elementId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementIdInput() {
    return this._elementId;
  }

  // max_length - computed: true, optional: true, required: false
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // min_length - computed: true, optional: true, required: false
  private _minLength?: number; 
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
  public set minLength(value: number) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }
}
export interface B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#element_position B2BiTransformer#element_position}
  */
  readonly elementPosition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#requirement B2BiTransformer#requirement}
  */
  readonly requirement?: string;
}

export function b2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleToTerraform(struct?: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    element_position: cdktn.stringToTerraform(struct!.elementPosition),
    requirement: cdktn.stringToTerraform(struct!.requirement),
  }
}


export function b2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleToHclTerraform(struct?: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    element_position: {
      value: cdktn.stringToHclTerraform(struct!.elementPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requirement: {
      value: cdktn.stringToHclTerraform(struct!.requirement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elementPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementPosition = this._elementPosition;
    }
    if (this._requirement !== undefined) {
      hasAnyValues = true;
      internalValueResult.requirement = this._requirement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._elementPosition = undefined;
      this._requirement = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._elementPosition = value.elementPosition;
      this._requirement = value.requirement;
    }
  }

  // element_position - computed: true, optional: true, required: false
  private _elementPosition?: string; 
  public get elementPosition() {
    return this.getStringAttribute('element_position');
  }
  public set elementPosition(value: string) {
    this._elementPosition = value;
  }
  public resetElementPosition() {
    this._elementPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementPositionInput() {
    return this._elementPosition;
  }

  // requirement - computed: true, optional: true, required: false
  private _requirement?: string; 
  public get requirement() {
    return this.getStringAttribute('requirement');
  }
  public set requirement(value: string) {
    this._requirement = value;
  }
  public resetRequirement() {
    this._requirement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirementInput() {
    return this._requirement;
  }
}
export interface B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#code_list_validation_rule B2BiTransformer#code_list_validation_rule}
  */
  readonly codeListValidationRule?: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#element_length_validation_rule B2BiTransformer#element_length_validation_rule}
  */
  readonly elementLengthValidationRule?: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#element_requirement_validation_rule B2BiTransformer#element_requirement_validation_rule}
  */
  readonly elementRequirementValidationRule?: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule;
}

export function b2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesToTerraform(struct?: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    code_list_validation_rule: b2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleToTerraform(struct!.codeListValidationRule),
    element_length_validation_rule: b2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleToTerraform(struct!.elementLengthValidationRule),
    element_requirement_validation_rule: b2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleToTerraform(struct!.elementRequirementValidationRule),
  }
}


export function b2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesToHclTerraform(struct?: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    code_list_validation_rule: {
      value: b2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleToHclTerraform(struct!.codeListValidationRule),
      isBlock: true,
      type: "struct",
      storageClassType: "B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule",
    },
    element_length_validation_rule: {
      value: b2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleToHclTerraform(struct!.elementLengthValidationRule),
      isBlock: true,
      type: "struct",
      storageClassType: "B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule",
    },
    element_requirement_validation_rule: {
      value: b2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleToHclTerraform(struct!.elementRequirementValidationRule),
      isBlock: true,
      type: "struct",
      storageClassType: "B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codeListValidationRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeListValidationRule = this._codeListValidationRule?.internalValue;
    }
    if (this._elementLengthValidationRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementLengthValidationRule = this._elementLengthValidationRule?.internalValue;
    }
    if (this._elementRequirementValidationRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementRequirementValidationRule = this._elementRequirementValidationRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codeListValidationRule.internalValue = undefined;
      this._elementLengthValidationRule.internalValue = undefined;
      this._elementRequirementValidationRule.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codeListValidationRule.internalValue = value.codeListValidationRule;
      this._elementLengthValidationRule.internalValue = value.elementLengthValidationRule;
      this._elementRequirementValidationRule.internalValue = value.elementRequirementValidationRule;
    }
  }

  // code_list_validation_rule - computed: true, optional: true, required: false
  private _codeListValidationRule = new B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference(this, "code_list_validation_rule");
  public get codeListValidationRule() {
    return this._codeListValidationRule;
  }
  public putCodeListValidationRule(value: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule) {
    this._codeListValidationRule.internalValue = value;
  }
  public resetCodeListValidationRule() {
    this._codeListValidationRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeListValidationRuleInput() {
    return this._codeListValidationRule.internalValue;
  }

  // element_length_validation_rule - computed: true, optional: true, required: false
  private _elementLengthValidationRule = new B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference(this, "element_length_validation_rule");
  public get elementLengthValidationRule() {
    return this._elementLengthValidationRule;
  }
  public putElementLengthValidationRule(value: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule) {
    this._elementLengthValidationRule.internalValue = value;
  }
  public resetElementLengthValidationRule() {
    this._elementLengthValidationRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementLengthValidationRuleInput() {
    return this._elementLengthValidationRule.internalValue;
  }

  // element_requirement_validation_rule - computed: true, optional: true, required: false
  private _elementRequirementValidationRule = new B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference(this, "element_requirement_validation_rule");
  public get elementRequirementValidationRule() {
    return this._elementRequirementValidationRule;
  }
  public putElementRequirementValidationRule(value: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule) {
    this._elementRequirementValidationRule.internalValue = value;
  }
  public resetElementRequirementValidationRule() {
    this._elementRequirementValidationRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementRequirementValidationRuleInput() {
    return this._elementRequirementValidationRule.internalValue;
  }
}

export class B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList extends cdktn.ComplexList {
  public internalValue? : B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules[] | cdktn.IResolvable

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
  public get(index: number): B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference {
    return new B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#validation_rules B2BiTransformer#validation_rules}
  */
  readonly validationRules?: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules[] | cdktn.IResolvable;
}

export function b2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsToTerraform(struct?: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    validation_rules: cdktn.listMapper(b2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesToTerraform, false)(struct!.validationRules),
  }
}


export function b2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsToHclTerraform(struct?: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    validation_rules: {
      value: cdktn.listMapperHcl(b2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesToHclTerraform, false)(struct!.validationRules),
      isBlock: true,
      type: "list",
      storageClassType: "B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._validationRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationRules = this._validationRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._validationRules.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._validationRules.internalValue = value.validationRules;
    }
  }

  // validation_rules - computed: true, optional: true, required: false
  private _validationRules = new B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList(this, "validation_rules", false);
  public get validationRules() {
    return this._validationRules;
  }
  public putValidationRules(value: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules[] | cdktn.IResolvable) {
    this._validationRules.internalValue = value;
  }
  public resetValidationRules() {
    this._validationRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationRulesInput() {
    return this._validationRules.internalValue;
  }
}
export interface B2BiTransformerInputConversionAdvancedOptionsX12 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#split_options B2BiTransformer#split_options}
  */
  readonly splitOptions?: B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#validation_options B2BiTransformer#validation_options}
  */
  readonly validationOptions?: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions;
}

export function b2BiTransformerInputConversionAdvancedOptionsX12ToTerraform(struct?: B2BiTransformerInputConversionAdvancedOptionsX12 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    split_options: b2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsToTerraform(struct!.splitOptions),
    validation_options: b2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsToTerraform(struct!.validationOptions),
  }
}


export function b2BiTransformerInputConversionAdvancedOptionsX12ToHclTerraform(struct?: B2BiTransformerInputConversionAdvancedOptionsX12 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    split_options: {
      value: b2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsToHclTerraform(struct!.splitOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions",
    },
    validation_options: {
      value: b2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsToHclTerraform(struct!.validationOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiTransformerInputConversionAdvancedOptionsX12OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): B2BiTransformerInputConversionAdvancedOptionsX12 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._splitOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitOptions = this._splitOptions?.internalValue;
    }
    if (this._validationOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationOptions = this._validationOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiTransformerInputConversionAdvancedOptionsX12 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._splitOptions.internalValue = undefined;
      this._validationOptions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._splitOptions.internalValue = value.splitOptions;
      this._validationOptions.internalValue = value.validationOptions;
    }
  }

  // split_options - computed: true, optional: true, required: false
  private _splitOptions = new B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference(this, "split_options");
  public get splitOptions() {
    return this._splitOptions;
  }
  public putSplitOptions(value: B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions) {
    this._splitOptions.internalValue = value;
  }
  public resetSplitOptions() {
    this._splitOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitOptionsInput() {
    return this._splitOptions.internalValue;
  }

  // validation_options - computed: true, optional: true, required: false
  private _validationOptions = new B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference(this, "validation_options");
  public get validationOptions() {
    return this._validationOptions;
  }
  public putValidationOptions(value: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions) {
    this._validationOptions.internalValue = value;
  }
  public resetValidationOptions() {
    this._validationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationOptionsInput() {
    return this._validationOptions.internalValue;
  }
}
export interface B2BiTransformerInputConversionAdvancedOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#x12 B2BiTransformer#x12}
  */
  readonly x12?: B2BiTransformerInputConversionAdvancedOptionsX12;
}

export function b2BiTransformerInputConversionAdvancedOptionsToTerraform(struct?: B2BiTransformerInputConversionAdvancedOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    x12: b2BiTransformerInputConversionAdvancedOptionsX12ToTerraform(struct!.x12),
  }
}


export function b2BiTransformerInputConversionAdvancedOptionsToHclTerraform(struct?: B2BiTransformerInputConversionAdvancedOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    x12: {
      value: b2BiTransformerInputConversionAdvancedOptionsX12ToHclTerraform(struct!.x12),
      isBlock: true,
      type: "struct",
      storageClassType: "B2BiTransformerInputConversionAdvancedOptionsX12",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiTransformerInputConversionAdvancedOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): B2BiTransformerInputConversionAdvancedOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._x12?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.x12 = this._x12?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiTransformerInputConversionAdvancedOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._x12.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._x12.internalValue = value.x12;
    }
  }

  // x12 - computed: true, optional: true, required: false
  private _x12 = new B2BiTransformerInputConversionAdvancedOptionsX12OutputReference(this, "x12");
  public get x12() {
    return this._x12;
  }
  public putX12(value: B2BiTransformerInputConversionAdvancedOptionsX12) {
    this._x12.internalValue = value;
  }
  public resetX12() {
    this._x12.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get x12Input() {
    return this._x12.internalValue;
  }
}
export interface B2BiTransformerInputConversionFormatOptionsX12 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#transaction_set B2BiTransformer#transaction_set}
  */
  readonly transactionSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#version B2BiTransformer#version}
  */
  readonly version?: string;
}

export function b2BiTransformerInputConversionFormatOptionsX12ToTerraform(struct?: B2BiTransformerInputConversionFormatOptionsX12 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    transaction_set: cdktn.stringToTerraform(struct!.transactionSet),
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function b2BiTransformerInputConversionFormatOptionsX12ToHclTerraform(struct?: B2BiTransformerInputConversionFormatOptionsX12 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    transaction_set: {
      value: cdktn.stringToHclTerraform(struct!.transactionSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiTransformerInputConversionFormatOptionsX12OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): B2BiTransformerInputConversionFormatOptionsX12 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transactionSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.transactionSet = this._transactionSet;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiTransformerInputConversionFormatOptionsX12 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._transactionSet = undefined;
      this._version = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._transactionSet = value.transactionSet;
      this._version = value.version;
    }
  }

  // transaction_set - computed: true, optional: true, required: false
  private _transactionSet?: string; 
  public get transactionSet() {
    return this.getStringAttribute('transaction_set');
  }
  public set transactionSet(value: string) {
    this._transactionSet = value;
  }
  public resetTransactionSet() {
    this._transactionSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionSetInput() {
    return this._transactionSet;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface B2BiTransformerInputConversionFormatOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#x12 B2BiTransformer#x12}
  */
  readonly x12?: B2BiTransformerInputConversionFormatOptionsX12;
}

export function b2BiTransformerInputConversionFormatOptionsToTerraform(struct?: B2BiTransformerInputConversionFormatOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    x12: b2BiTransformerInputConversionFormatOptionsX12ToTerraform(struct!.x12),
  }
}


export function b2BiTransformerInputConversionFormatOptionsToHclTerraform(struct?: B2BiTransformerInputConversionFormatOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    x12: {
      value: b2BiTransformerInputConversionFormatOptionsX12ToHclTerraform(struct!.x12),
      isBlock: true,
      type: "struct",
      storageClassType: "B2BiTransformerInputConversionFormatOptionsX12",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiTransformerInputConversionFormatOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): B2BiTransformerInputConversionFormatOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._x12?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.x12 = this._x12?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiTransformerInputConversionFormatOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._x12.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._x12.internalValue = value.x12;
    }
  }

  // x12 - computed: true, optional: true, required: false
  private _x12 = new B2BiTransformerInputConversionFormatOptionsX12OutputReference(this, "x12");
  public get x12() {
    return this._x12;
  }
  public putX12(value: B2BiTransformerInputConversionFormatOptionsX12) {
    this._x12.internalValue = value;
  }
  public resetX12() {
    this._x12.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get x12Input() {
    return this._x12.internalValue;
  }
}
export interface B2BiTransformerInputConversion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#advanced_options B2BiTransformer#advanced_options}
  */
  readonly advancedOptions?: B2BiTransformerInputConversionAdvancedOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#format_options B2BiTransformer#format_options}
  */
  readonly formatOptions?: B2BiTransformerInputConversionFormatOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#from_format B2BiTransformer#from_format}
  */
  readonly fromFormat?: string;
}

export function b2BiTransformerInputConversionToTerraform(struct?: B2BiTransformerInputConversion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    advanced_options: b2BiTransformerInputConversionAdvancedOptionsToTerraform(struct!.advancedOptions),
    format_options: b2BiTransformerInputConversionFormatOptionsToTerraform(struct!.formatOptions),
    from_format: cdktn.stringToTerraform(struct!.fromFormat),
  }
}


export function b2BiTransformerInputConversionToHclTerraform(struct?: B2BiTransformerInputConversion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    advanced_options: {
      value: b2BiTransformerInputConversionAdvancedOptionsToHclTerraform(struct!.advancedOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "B2BiTransformerInputConversionAdvancedOptions",
    },
    format_options: {
      value: b2BiTransformerInputConversionFormatOptionsToHclTerraform(struct!.formatOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "B2BiTransformerInputConversionFormatOptions",
    },
    from_format: {
      value: cdktn.stringToHclTerraform(struct!.fromFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiTransformerInputConversionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): B2BiTransformerInputConversion | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedOptions = this._advancedOptions?.internalValue;
    }
    if (this._formatOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatOptions = this._formatOptions?.internalValue;
    }
    if (this._fromFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromFormat = this._fromFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiTransformerInputConversion | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advancedOptions.internalValue = undefined;
      this._formatOptions.internalValue = undefined;
      this._fromFormat = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advancedOptions.internalValue = value.advancedOptions;
      this._formatOptions.internalValue = value.formatOptions;
      this._fromFormat = value.fromFormat;
    }
  }

  // advanced_options - computed: true, optional: true, required: false
  private _advancedOptions = new B2BiTransformerInputConversionAdvancedOptionsOutputReference(this, "advanced_options");
  public get advancedOptions() {
    return this._advancedOptions;
  }
  public putAdvancedOptions(value: B2BiTransformerInputConversionAdvancedOptions) {
    this._advancedOptions.internalValue = value;
  }
  public resetAdvancedOptions() {
    this._advancedOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedOptionsInput() {
    return this._advancedOptions.internalValue;
  }

  // format_options - computed: true, optional: true, required: false
  private _formatOptions = new B2BiTransformerInputConversionFormatOptionsOutputReference(this, "format_options");
  public get formatOptions() {
    return this._formatOptions;
  }
  public putFormatOptions(value: B2BiTransformerInputConversionFormatOptions) {
    this._formatOptions.internalValue = value;
  }
  public resetFormatOptions() {
    this._formatOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatOptionsInput() {
    return this._formatOptions.internalValue;
  }

  // from_format - computed: true, optional: true, required: false
  private _fromFormat?: string; 
  public get fromFormat() {
    return this.getStringAttribute('from_format');
  }
  public set fromFormat(value: string) {
    this._fromFormat = value;
  }
  public resetFromFormat() {
    this._fromFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromFormatInput() {
    return this._fromFormat;
  }
}
export interface B2BiTransformerMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#template B2BiTransformer#template}
  */
  readonly template?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#template_language B2BiTransformer#template_language}
  */
  readonly templateLanguage?: string;
}

export function b2BiTransformerMappingToTerraform(struct?: B2BiTransformerMapping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    template: cdktn.stringToTerraform(struct!.template),
    template_language: cdktn.stringToTerraform(struct!.templateLanguage),
  }
}


export function b2BiTransformerMappingToHclTerraform(struct?: B2BiTransformerMapping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    template: {
      value: cdktn.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_language: {
      value: cdktn.stringToHclTerraform(struct!.templateLanguage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiTransformerMappingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): B2BiTransformerMapping | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._templateLanguage !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateLanguage = this._templateLanguage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiTransformerMapping | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._template = undefined;
      this._templateLanguage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._template = value.template;
      this._templateLanguage = value.templateLanguage;
    }
  }

  // template - computed: true, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // template_language - computed: true, optional: true, required: false
  private _templateLanguage?: string; 
  public get templateLanguage() {
    return this.getStringAttribute('template_language');
  }
  public set templateLanguage(value: string) {
    this._templateLanguage = value;
  }
  public resetTemplateLanguage() {
    this._templateLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateLanguageInput() {
    return this._templateLanguage;
  }
}
export interface B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#split_by B2BiTransformer#split_by}
  */
  readonly splitBy?: string;
}

export function b2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsToTerraform(struct?: B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    split_by: cdktn.stringToTerraform(struct!.splitBy),
  }
}


export function b2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsToHclTerraform(struct?: B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    split_by: {
      value: cdktn.stringToHclTerraform(struct!.splitBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._splitBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitBy = this._splitBy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._splitBy = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._splitBy = value.splitBy;
    }
  }

  // split_by - computed: true, optional: true, required: false
  private _splitBy?: string; 
  public get splitBy() {
    return this.getStringAttribute('split_by');
  }
  public set splitBy(value: string) {
    this._splitBy = value;
  }
  public resetSplitBy() {
    this._splitBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitByInput() {
    return this._splitBy;
  }
}
export interface B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#codes_to_add B2BiTransformer#codes_to_add}
  */
  readonly codesToAdd?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#codes_to_remove B2BiTransformer#codes_to_remove}
  */
  readonly codesToRemove?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#element_id B2BiTransformer#element_id}
  */
  readonly elementId?: string;
}

export function b2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleToTerraform(struct?: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    codes_to_add: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.codesToAdd),
    codes_to_remove: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.codesToRemove),
    element_id: cdktn.stringToTerraform(struct!.elementId),
  }
}


export function b2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleToHclTerraform(struct?: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    codes_to_add: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.codesToAdd),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    codes_to_remove: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.codesToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    element_id: {
      value: cdktn.stringToHclTerraform(struct!.elementId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codesToAdd !== undefined) {
      hasAnyValues = true;
      internalValueResult.codesToAdd = this._codesToAdd;
    }
    if (this._codesToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.codesToRemove = this._codesToRemove;
    }
    if (this._elementId !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementId = this._elementId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codesToAdd = undefined;
      this._codesToRemove = undefined;
      this._elementId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codesToAdd = value.codesToAdd;
      this._codesToRemove = value.codesToRemove;
      this._elementId = value.elementId;
    }
  }

  // codes_to_add - computed: true, optional: true, required: false
  private _codesToAdd?: string[]; 
  public get codesToAdd() {
    return this.getListAttribute('codes_to_add');
  }
  public set codesToAdd(value: string[]) {
    this._codesToAdd = value;
  }
  public resetCodesToAdd() {
    this._codesToAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codesToAddInput() {
    return this._codesToAdd;
  }

  // codes_to_remove - computed: true, optional: true, required: false
  private _codesToRemove?: string[]; 
  public get codesToRemove() {
    return this.getListAttribute('codes_to_remove');
  }
  public set codesToRemove(value: string[]) {
    this._codesToRemove = value;
  }
  public resetCodesToRemove() {
    this._codesToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codesToRemoveInput() {
    return this._codesToRemove;
  }

  // element_id - computed: true, optional: true, required: false
  private _elementId?: string; 
  public get elementId() {
    return this.getStringAttribute('element_id');
  }
  public set elementId(value: string) {
    this._elementId = value;
  }
  public resetElementId() {
    this._elementId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementIdInput() {
    return this._elementId;
  }
}
export interface B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#element_id B2BiTransformer#element_id}
  */
  readonly elementId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#max_length B2BiTransformer#max_length}
  */
  readonly maxLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#min_length B2BiTransformer#min_length}
  */
  readonly minLength?: number;
}

export function b2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleToTerraform(struct?: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    element_id: cdktn.stringToTerraform(struct!.elementId),
    max_length: cdktn.numberToTerraform(struct!.maxLength),
    min_length: cdktn.numberToTerraform(struct!.minLength),
  }
}


export function b2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleToHclTerraform(struct?: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    element_id: {
      value: cdktn.stringToHclTerraform(struct!.elementId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_length: {
      value: cdktn.numberToHclTerraform(struct!.maxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_length: {
      value: cdktn.numberToHclTerraform(struct!.minLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elementId !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementId = this._elementId;
    }
    if (this._maxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLength = this._maxLength;
    }
    if (this._minLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLength = this._minLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._elementId = undefined;
      this._maxLength = undefined;
      this._minLength = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._elementId = value.elementId;
      this._maxLength = value.maxLength;
      this._minLength = value.minLength;
    }
  }

  // element_id - computed: true, optional: true, required: false
  private _elementId?: string; 
  public get elementId() {
    return this.getStringAttribute('element_id');
  }
  public set elementId(value: string) {
    this._elementId = value;
  }
  public resetElementId() {
    this._elementId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementIdInput() {
    return this._elementId;
  }

  // max_length - computed: true, optional: true, required: false
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // min_length - computed: true, optional: true, required: false
  private _minLength?: number; 
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
  public set minLength(value: number) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }
}
export interface B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#element_position B2BiTransformer#element_position}
  */
  readonly elementPosition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#requirement B2BiTransformer#requirement}
  */
  readonly requirement?: string;
}

export function b2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleToTerraform(struct?: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    element_position: cdktn.stringToTerraform(struct!.elementPosition),
    requirement: cdktn.stringToTerraform(struct!.requirement),
  }
}


export function b2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleToHclTerraform(struct?: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    element_position: {
      value: cdktn.stringToHclTerraform(struct!.elementPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requirement: {
      value: cdktn.stringToHclTerraform(struct!.requirement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elementPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementPosition = this._elementPosition;
    }
    if (this._requirement !== undefined) {
      hasAnyValues = true;
      internalValueResult.requirement = this._requirement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._elementPosition = undefined;
      this._requirement = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._elementPosition = value.elementPosition;
      this._requirement = value.requirement;
    }
  }

  // element_position - computed: true, optional: true, required: false
  private _elementPosition?: string; 
  public get elementPosition() {
    return this.getStringAttribute('element_position');
  }
  public set elementPosition(value: string) {
    this._elementPosition = value;
  }
  public resetElementPosition() {
    this._elementPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementPositionInput() {
    return this._elementPosition;
  }

  // requirement - computed: true, optional: true, required: false
  private _requirement?: string; 
  public get requirement() {
    return this.getStringAttribute('requirement');
  }
  public set requirement(value: string) {
    this._requirement = value;
  }
  public resetRequirement() {
    this._requirement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirementInput() {
    return this._requirement;
  }
}
export interface B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#code_list_validation_rule B2BiTransformer#code_list_validation_rule}
  */
  readonly codeListValidationRule?: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#element_length_validation_rule B2BiTransformer#element_length_validation_rule}
  */
  readonly elementLengthValidationRule?: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#element_requirement_validation_rule B2BiTransformer#element_requirement_validation_rule}
  */
  readonly elementRequirementValidationRule?: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule;
}

export function b2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesToTerraform(struct?: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    code_list_validation_rule: b2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleToTerraform(struct!.codeListValidationRule),
    element_length_validation_rule: b2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleToTerraform(struct!.elementLengthValidationRule),
    element_requirement_validation_rule: b2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleToTerraform(struct!.elementRequirementValidationRule),
  }
}


export function b2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesToHclTerraform(struct?: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    code_list_validation_rule: {
      value: b2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleToHclTerraform(struct!.codeListValidationRule),
      isBlock: true,
      type: "struct",
      storageClassType: "B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule",
    },
    element_length_validation_rule: {
      value: b2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleToHclTerraform(struct!.elementLengthValidationRule),
      isBlock: true,
      type: "struct",
      storageClassType: "B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule",
    },
    element_requirement_validation_rule: {
      value: b2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleToHclTerraform(struct!.elementRequirementValidationRule),
      isBlock: true,
      type: "struct",
      storageClassType: "B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codeListValidationRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeListValidationRule = this._codeListValidationRule?.internalValue;
    }
    if (this._elementLengthValidationRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementLengthValidationRule = this._elementLengthValidationRule?.internalValue;
    }
    if (this._elementRequirementValidationRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementRequirementValidationRule = this._elementRequirementValidationRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codeListValidationRule.internalValue = undefined;
      this._elementLengthValidationRule.internalValue = undefined;
      this._elementRequirementValidationRule.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codeListValidationRule.internalValue = value.codeListValidationRule;
      this._elementLengthValidationRule.internalValue = value.elementLengthValidationRule;
      this._elementRequirementValidationRule.internalValue = value.elementRequirementValidationRule;
    }
  }

  // code_list_validation_rule - computed: true, optional: true, required: false
  private _codeListValidationRule = new B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference(this, "code_list_validation_rule");
  public get codeListValidationRule() {
    return this._codeListValidationRule;
  }
  public putCodeListValidationRule(value: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule) {
    this._codeListValidationRule.internalValue = value;
  }
  public resetCodeListValidationRule() {
    this._codeListValidationRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeListValidationRuleInput() {
    return this._codeListValidationRule.internalValue;
  }

  // element_length_validation_rule - computed: true, optional: true, required: false
  private _elementLengthValidationRule = new B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference(this, "element_length_validation_rule");
  public get elementLengthValidationRule() {
    return this._elementLengthValidationRule;
  }
  public putElementLengthValidationRule(value: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule) {
    this._elementLengthValidationRule.internalValue = value;
  }
  public resetElementLengthValidationRule() {
    this._elementLengthValidationRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementLengthValidationRuleInput() {
    return this._elementLengthValidationRule.internalValue;
  }

  // element_requirement_validation_rule - computed: true, optional: true, required: false
  private _elementRequirementValidationRule = new B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference(this, "element_requirement_validation_rule");
  public get elementRequirementValidationRule() {
    return this._elementRequirementValidationRule;
  }
  public putElementRequirementValidationRule(value: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule) {
    this._elementRequirementValidationRule.internalValue = value;
  }
  public resetElementRequirementValidationRule() {
    this._elementRequirementValidationRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementRequirementValidationRuleInput() {
    return this._elementRequirementValidationRule.internalValue;
  }
}

export class B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList extends cdktn.ComplexList {
  public internalValue? : B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules[] | cdktn.IResolvable

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
  public get(index: number): B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference {
    return new B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#validation_rules B2BiTransformer#validation_rules}
  */
  readonly validationRules?: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules[] | cdktn.IResolvable;
}

export function b2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsToTerraform(struct?: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    validation_rules: cdktn.listMapper(b2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesToTerraform, false)(struct!.validationRules),
  }
}


export function b2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsToHclTerraform(struct?: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    validation_rules: {
      value: cdktn.listMapperHcl(b2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesToHclTerraform, false)(struct!.validationRules),
      isBlock: true,
      type: "list",
      storageClassType: "B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._validationRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationRules = this._validationRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._validationRules.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._validationRules.internalValue = value.validationRules;
    }
  }

  // validation_rules - computed: true, optional: true, required: false
  private _validationRules = new B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList(this, "validation_rules", false);
  public get validationRules() {
    return this._validationRules;
  }
  public putValidationRules(value: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules[] | cdktn.IResolvable) {
    this._validationRules.internalValue = value;
  }
  public resetValidationRules() {
    this._validationRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationRulesInput() {
    return this._validationRules.internalValue;
  }
}
export interface B2BiTransformerOutputConversionAdvancedOptionsX12 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#split_options B2BiTransformer#split_options}
  */
  readonly splitOptions?: B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#validation_options B2BiTransformer#validation_options}
  */
  readonly validationOptions?: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions;
}

export function b2BiTransformerOutputConversionAdvancedOptionsX12ToTerraform(struct?: B2BiTransformerOutputConversionAdvancedOptionsX12 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    split_options: b2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsToTerraform(struct!.splitOptions),
    validation_options: b2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsToTerraform(struct!.validationOptions),
  }
}


export function b2BiTransformerOutputConversionAdvancedOptionsX12ToHclTerraform(struct?: B2BiTransformerOutputConversionAdvancedOptionsX12 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    split_options: {
      value: b2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsToHclTerraform(struct!.splitOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions",
    },
    validation_options: {
      value: b2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsToHclTerraform(struct!.validationOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): B2BiTransformerOutputConversionAdvancedOptionsX12 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._splitOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitOptions = this._splitOptions?.internalValue;
    }
    if (this._validationOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationOptions = this._validationOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiTransformerOutputConversionAdvancedOptionsX12 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._splitOptions.internalValue = undefined;
      this._validationOptions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._splitOptions.internalValue = value.splitOptions;
      this._validationOptions.internalValue = value.validationOptions;
    }
  }

  // split_options - computed: true, optional: true, required: false
  private _splitOptions = new B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference(this, "split_options");
  public get splitOptions() {
    return this._splitOptions;
  }
  public putSplitOptions(value: B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions) {
    this._splitOptions.internalValue = value;
  }
  public resetSplitOptions() {
    this._splitOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitOptionsInput() {
    return this._splitOptions.internalValue;
  }

  // validation_options - computed: true, optional: true, required: false
  private _validationOptions = new B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference(this, "validation_options");
  public get validationOptions() {
    return this._validationOptions;
  }
  public putValidationOptions(value: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions) {
    this._validationOptions.internalValue = value;
  }
  public resetValidationOptions() {
    this._validationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationOptionsInput() {
    return this._validationOptions.internalValue;
  }
}
export interface B2BiTransformerOutputConversionAdvancedOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#x12 B2BiTransformer#x12}
  */
  readonly x12?: B2BiTransformerOutputConversionAdvancedOptionsX12;
}

export function b2BiTransformerOutputConversionAdvancedOptionsToTerraform(struct?: B2BiTransformerOutputConversionAdvancedOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    x12: b2BiTransformerOutputConversionAdvancedOptionsX12ToTerraform(struct!.x12),
  }
}


export function b2BiTransformerOutputConversionAdvancedOptionsToHclTerraform(struct?: B2BiTransformerOutputConversionAdvancedOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    x12: {
      value: b2BiTransformerOutputConversionAdvancedOptionsX12ToHclTerraform(struct!.x12),
      isBlock: true,
      type: "struct",
      storageClassType: "B2BiTransformerOutputConversionAdvancedOptionsX12",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiTransformerOutputConversionAdvancedOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): B2BiTransformerOutputConversionAdvancedOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._x12?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.x12 = this._x12?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiTransformerOutputConversionAdvancedOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._x12.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._x12.internalValue = value.x12;
    }
  }

  // x12 - computed: true, optional: true, required: false
  private _x12 = new B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference(this, "x12");
  public get x12() {
    return this._x12;
  }
  public putX12(value: B2BiTransformerOutputConversionAdvancedOptionsX12) {
    this._x12.internalValue = value;
  }
  public resetX12() {
    this._x12.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get x12Input() {
    return this._x12.internalValue;
  }
}
export interface B2BiTransformerOutputConversionFormatOptionsX12 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#transaction_set B2BiTransformer#transaction_set}
  */
  readonly transactionSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#version B2BiTransformer#version}
  */
  readonly version?: string;
}

export function b2BiTransformerOutputConversionFormatOptionsX12ToTerraform(struct?: B2BiTransformerOutputConversionFormatOptionsX12 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    transaction_set: cdktn.stringToTerraform(struct!.transactionSet),
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function b2BiTransformerOutputConversionFormatOptionsX12ToHclTerraform(struct?: B2BiTransformerOutputConversionFormatOptionsX12 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    transaction_set: {
      value: cdktn.stringToHclTerraform(struct!.transactionSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiTransformerOutputConversionFormatOptionsX12OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): B2BiTransformerOutputConversionFormatOptionsX12 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transactionSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.transactionSet = this._transactionSet;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiTransformerOutputConversionFormatOptionsX12 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._transactionSet = undefined;
      this._version = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._transactionSet = value.transactionSet;
      this._version = value.version;
    }
  }

  // transaction_set - computed: true, optional: true, required: false
  private _transactionSet?: string; 
  public get transactionSet() {
    return this.getStringAttribute('transaction_set');
  }
  public set transactionSet(value: string) {
    this._transactionSet = value;
  }
  public resetTransactionSet() {
    this._transactionSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionSetInput() {
    return this._transactionSet;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface B2BiTransformerOutputConversionFormatOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#x12 B2BiTransformer#x12}
  */
  readonly x12?: B2BiTransformerOutputConversionFormatOptionsX12;
}

export function b2BiTransformerOutputConversionFormatOptionsToTerraform(struct?: B2BiTransformerOutputConversionFormatOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    x12: b2BiTransformerOutputConversionFormatOptionsX12ToTerraform(struct!.x12),
  }
}


export function b2BiTransformerOutputConversionFormatOptionsToHclTerraform(struct?: B2BiTransformerOutputConversionFormatOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    x12: {
      value: b2BiTransformerOutputConversionFormatOptionsX12ToHclTerraform(struct!.x12),
      isBlock: true,
      type: "struct",
      storageClassType: "B2BiTransformerOutputConversionFormatOptionsX12",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiTransformerOutputConversionFormatOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): B2BiTransformerOutputConversionFormatOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._x12?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.x12 = this._x12?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiTransformerOutputConversionFormatOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._x12.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._x12.internalValue = value.x12;
    }
  }

  // x12 - computed: true, optional: true, required: false
  private _x12 = new B2BiTransformerOutputConversionFormatOptionsX12OutputReference(this, "x12");
  public get x12() {
    return this._x12;
  }
  public putX12(value: B2BiTransformerOutputConversionFormatOptionsX12) {
    this._x12.internalValue = value;
  }
  public resetX12() {
    this._x12.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get x12Input() {
    return this._x12.internalValue;
  }
}
export interface B2BiTransformerOutputConversion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#advanced_options B2BiTransformer#advanced_options}
  */
  readonly advancedOptions?: B2BiTransformerOutputConversionAdvancedOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#format_options B2BiTransformer#format_options}
  */
  readonly formatOptions?: B2BiTransformerOutputConversionFormatOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#to_format B2BiTransformer#to_format}
  */
  readonly toFormat?: string;
}

export function b2BiTransformerOutputConversionToTerraform(struct?: B2BiTransformerOutputConversion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    advanced_options: b2BiTransformerOutputConversionAdvancedOptionsToTerraform(struct!.advancedOptions),
    format_options: b2BiTransformerOutputConversionFormatOptionsToTerraform(struct!.formatOptions),
    to_format: cdktn.stringToTerraform(struct!.toFormat),
  }
}


export function b2BiTransformerOutputConversionToHclTerraform(struct?: B2BiTransformerOutputConversion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    advanced_options: {
      value: b2BiTransformerOutputConversionAdvancedOptionsToHclTerraform(struct!.advancedOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "B2BiTransformerOutputConversionAdvancedOptions",
    },
    format_options: {
      value: b2BiTransformerOutputConversionFormatOptionsToHclTerraform(struct!.formatOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "B2BiTransformerOutputConversionFormatOptions",
    },
    to_format: {
      value: cdktn.stringToHclTerraform(struct!.toFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiTransformerOutputConversionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): B2BiTransformerOutputConversion | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedOptions = this._advancedOptions?.internalValue;
    }
    if (this._formatOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatOptions = this._formatOptions?.internalValue;
    }
    if (this._toFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.toFormat = this._toFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiTransformerOutputConversion | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advancedOptions.internalValue = undefined;
      this._formatOptions.internalValue = undefined;
      this._toFormat = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advancedOptions.internalValue = value.advancedOptions;
      this._formatOptions.internalValue = value.formatOptions;
      this._toFormat = value.toFormat;
    }
  }

  // advanced_options - computed: true, optional: true, required: false
  private _advancedOptions = new B2BiTransformerOutputConversionAdvancedOptionsOutputReference(this, "advanced_options");
  public get advancedOptions() {
    return this._advancedOptions;
  }
  public putAdvancedOptions(value: B2BiTransformerOutputConversionAdvancedOptions) {
    this._advancedOptions.internalValue = value;
  }
  public resetAdvancedOptions() {
    this._advancedOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedOptionsInput() {
    return this._advancedOptions.internalValue;
  }

  // format_options - computed: true, optional: true, required: false
  private _formatOptions = new B2BiTransformerOutputConversionFormatOptionsOutputReference(this, "format_options");
  public get formatOptions() {
    return this._formatOptions;
  }
  public putFormatOptions(value: B2BiTransformerOutputConversionFormatOptions) {
    this._formatOptions.internalValue = value;
  }
  public resetFormatOptions() {
    this._formatOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatOptionsInput() {
    return this._formatOptions.internalValue;
  }

  // to_format - computed: true, optional: true, required: false
  private _toFormat?: string; 
  public get toFormat() {
    return this.getStringAttribute('to_format');
  }
  public set toFormat(value: string) {
    this._toFormat = value;
  }
  public resetToFormat() {
    this._toFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toFormatInput() {
    return this._toFormat;
  }
}
export interface B2BiTransformerSampleDocumentsKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#input B2BiTransformer#input}
  */
  readonly input?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#output B2BiTransformer#output}
  */
  readonly output?: string;
}

export function b2BiTransformerSampleDocumentsKeysToTerraform(struct?: B2BiTransformerSampleDocumentsKeys | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input: cdktn.stringToTerraform(struct!.input),
    output: cdktn.stringToTerraform(struct!.output),
  }
}


export function b2BiTransformerSampleDocumentsKeysToHclTerraform(struct?: B2BiTransformerSampleDocumentsKeys | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input: {
      value: cdktn.stringToHclTerraform(struct!.input),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output: {
      value: cdktn.stringToHclTerraform(struct!.output),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiTransformerSampleDocumentsKeysOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): B2BiTransformerSampleDocumentsKeys | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._input !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input;
    }
    if (this._output !== undefined) {
      hasAnyValues = true;
      internalValueResult.output = this._output;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiTransformerSampleDocumentsKeys | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._input = undefined;
      this._output = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._input = value.input;
      this._output = value.output;
    }
  }

  // input - computed: true, optional: true, required: false
  private _input?: string; 
  public get input() {
    return this.getStringAttribute('input');
  }
  public set input(value: string) {
    this._input = value;
  }
  public resetInput() {
    this._input = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
  }

  // output - computed: true, optional: true, required: false
  private _output?: string; 
  public get output() {
    return this.getStringAttribute('output');
  }
  public set output(value: string) {
    this._output = value;
  }
  public resetOutput() {
    this._output = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output;
  }
}

export class B2BiTransformerSampleDocumentsKeysList extends cdktn.ComplexList {
  public internalValue? : B2BiTransformerSampleDocumentsKeys[] | cdktn.IResolvable

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
  public get(index: number): B2BiTransformerSampleDocumentsKeysOutputReference {
    return new B2BiTransformerSampleDocumentsKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface B2BiTransformerSampleDocuments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#bucket_name B2BiTransformer#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#keys B2BiTransformer#keys}
  */
  readonly keys?: B2BiTransformerSampleDocumentsKeys[] | cdktn.IResolvable;
}

export function b2BiTransformerSampleDocumentsToTerraform(struct?: B2BiTransformerSampleDocuments | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    keys: cdktn.listMapper(b2BiTransformerSampleDocumentsKeysToTerraform, false)(struct!.keys),
  }
}


export function b2BiTransformerSampleDocumentsToHclTerraform(struct?: B2BiTransformerSampleDocuments | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keys: {
      value: cdktn.listMapperHcl(b2BiTransformerSampleDocumentsKeysToHclTerraform, false)(struct!.keys),
      isBlock: true,
      type: "list",
      storageClassType: "B2BiTransformerSampleDocumentsKeysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiTransformerSampleDocumentsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): B2BiTransformerSampleDocuments | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._keys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiTransformerSampleDocuments | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketName = undefined;
      this._keys.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketName = value.bucketName;
      this._keys.internalValue = value.keys;
    }
  }

  // bucket_name - computed: true, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // keys - computed: true, optional: true, required: false
  private _keys = new B2BiTransformerSampleDocumentsKeysList(this, "keys", false);
  public get keys() {
    return this._keys;
  }
  public putKeys(value: B2BiTransformerSampleDocumentsKeys[] | cdktn.IResolvable) {
    this._keys.internalValue = value;
  }
  public resetKeys() {
    this._keys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys.internalValue;
  }
}
export interface B2BiTransformerTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#key B2BiTransformer#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#value B2BiTransformer#value}
  */
  readonly value?: string;
}

export function b2BiTransformerTagsToTerraform(struct?: B2BiTransformerTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function b2BiTransformerTagsToHclTerraform(struct?: B2BiTransformerTags | cdktn.IResolvable): any {
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

export class B2BiTransformerTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): B2BiTransformerTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: B2BiTransformerTags | cdktn.IResolvable | undefined) {
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

export class B2BiTransformerTagsList extends cdktn.ComplexList {
  public internalValue? : B2BiTransformerTags[] | cdktn.IResolvable

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
  public get(index: number): B2BiTransformerTagsOutputReference {
    return new B2BiTransformerTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer awscc_b2bi_transformer}
*/
export class B2BiTransformer extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_b2bi_transformer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a B2BiTransformer resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the B2BiTransformer to import
  * @param importFromId The id of the existing B2BiTransformer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the B2BiTransformer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_b2bi_transformer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/b2bi_transformer awscc_b2bi_transformer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options B2BiTransformerConfig
  */
  public constructor(scope: Construct, id: string, config: B2BiTransformerConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_b2bi_transformer',
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
    this._ediType.internalValue = config.ediType;
    this._fileFormat = config.fileFormat;
    this._inputConversion.internalValue = config.inputConversion;
    this._mapping.internalValue = config.mapping;
    this._mappingTemplate = config.mappingTemplate;
    this._name = config.name;
    this._outputConversion.internalValue = config.outputConversion;
    this._sampleDocument = config.sampleDocument;
    this._sampleDocuments.internalValue = config.sampleDocuments;
    this._status = config.status;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // edi_type - computed: true, optional: true, required: false
  private _ediType = new B2BiTransformerEdiTypeOutputReference(this, "edi_type");
  public get ediType() {
    return this._ediType;
  }
  public putEdiType(value: B2BiTransformerEdiType) {
    this._ediType.internalValue = value;
  }
  public resetEdiType() {
    this._ediType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ediTypeInput() {
    return this._ediType.internalValue;
  }

  // file_format - computed: true, optional: true, required: false
  private _fileFormat?: string; 
  public get fileFormat() {
    return this.getStringAttribute('file_format');
  }
  public set fileFormat(value: string) {
    this._fileFormat = value;
  }
  public resetFileFormat() {
    this._fileFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFormatInput() {
    return this._fileFormat;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // input_conversion - computed: true, optional: true, required: false
  private _inputConversion = new B2BiTransformerInputConversionOutputReference(this, "input_conversion");
  public get inputConversion() {
    return this._inputConversion;
  }
  public putInputConversion(value: B2BiTransformerInputConversion) {
    this._inputConversion.internalValue = value;
  }
  public resetInputConversion() {
    this._inputConversion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputConversionInput() {
    return this._inputConversion.internalValue;
  }

  // mapping - computed: true, optional: true, required: false
  private _mapping = new B2BiTransformerMappingOutputReference(this, "mapping");
  public get mapping() {
    return this._mapping;
  }
  public putMapping(value: B2BiTransformerMapping) {
    this._mapping.internalValue = value;
  }
  public resetMapping() {
    this._mapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingInput() {
    return this._mapping.internalValue;
  }

  // mapping_template - computed: true, optional: true, required: false
  private _mappingTemplate?: string; 
  public get mappingTemplate() {
    return this.getStringAttribute('mapping_template');
  }
  public set mappingTemplate(value: string) {
    this._mappingTemplate = value;
  }
  public resetMappingTemplate() {
    this._mappingTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingTemplateInput() {
    return this._mappingTemplate;
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
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

  // output_conversion - computed: true, optional: true, required: false
  private _outputConversion = new B2BiTransformerOutputConversionOutputReference(this, "output_conversion");
  public get outputConversion() {
    return this._outputConversion;
  }
  public putOutputConversion(value: B2BiTransformerOutputConversion) {
    this._outputConversion.internalValue = value;
  }
  public resetOutputConversion() {
    this._outputConversion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputConversionInput() {
    return this._outputConversion.internalValue;
  }

  // sample_document - computed: true, optional: true, required: false
  private _sampleDocument?: string; 
  public get sampleDocument() {
    return this.getStringAttribute('sample_document');
  }
  public set sampleDocument(value: string) {
    this._sampleDocument = value;
  }
  public resetSampleDocument() {
    this._sampleDocument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleDocumentInput() {
    return this._sampleDocument;
  }

  // sample_documents - computed: true, optional: true, required: false
  private _sampleDocuments = new B2BiTransformerSampleDocumentsOutputReference(this, "sample_documents");
  public get sampleDocuments() {
    return this._sampleDocuments;
  }
  public putSampleDocuments(value: B2BiTransformerSampleDocuments) {
    this._sampleDocuments.internalValue = value;
  }
  public resetSampleDocuments() {
    this._sampleDocuments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleDocumentsInput() {
    return this._sampleDocuments.internalValue;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new B2BiTransformerTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: B2BiTransformerTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // transformer_arn - computed: true, optional: false, required: false
  public get transformerArn() {
    return this.getStringAttribute('transformer_arn');
  }

  // transformer_id - computed: true, optional: false, required: false
  public get transformerId() {
    return this.getStringAttribute('transformer_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      edi_type: b2BiTransformerEdiTypeToTerraform(this._ediType.internalValue),
      file_format: cdktn.stringToTerraform(this._fileFormat),
      input_conversion: b2BiTransformerInputConversionToTerraform(this._inputConversion.internalValue),
      mapping: b2BiTransformerMappingToTerraform(this._mapping.internalValue),
      mapping_template: cdktn.stringToTerraform(this._mappingTemplate),
      name: cdktn.stringToTerraform(this._name),
      output_conversion: b2BiTransformerOutputConversionToTerraform(this._outputConversion.internalValue),
      sample_document: cdktn.stringToTerraform(this._sampleDocument),
      sample_documents: b2BiTransformerSampleDocumentsToTerraform(this._sampleDocuments.internalValue),
      status: cdktn.stringToTerraform(this._status),
      tags: cdktn.listMapper(b2BiTransformerTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      edi_type: {
        value: b2BiTransformerEdiTypeToHclTerraform(this._ediType.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "B2BiTransformerEdiType",
      },
      file_format: {
        value: cdktn.stringToHclTerraform(this._fileFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      input_conversion: {
        value: b2BiTransformerInputConversionToHclTerraform(this._inputConversion.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "B2BiTransformerInputConversion",
      },
      mapping: {
        value: b2BiTransformerMappingToHclTerraform(this._mapping.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "B2BiTransformerMapping",
      },
      mapping_template: {
        value: cdktn.stringToHclTerraform(this._mappingTemplate),
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
      output_conversion: {
        value: b2BiTransformerOutputConversionToHclTerraform(this._outputConversion.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "B2BiTransformerOutputConversion",
      },
      sample_document: {
        value: cdktn.stringToHclTerraform(this._sampleDocument),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sample_documents: {
        value: b2BiTransformerSampleDocumentsToHclTerraform(this._sampleDocuments.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "B2BiTransformerSampleDocuments",
      },
      status: {
        value: cdktn.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(b2BiTransformerTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "B2BiTransformerTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
